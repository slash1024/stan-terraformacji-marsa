// Przerabia obrazy z src/icons/source/ na ikony PWA i avatary graczy.
// Node nie czyta WebP, więc konwersję robi przeglądarka: skrypt stawia serwer,
// strona konwertuje przez canvas i odsyła gotowe pliki POST-em.
//
//   node tools/convert-images.mjs        → otwórz http://localhost:8099/
//
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8099;

// [plik źródłowy, plik wynikowy, rozmiar, tryb, format]
// mode: 'cover' — wypełnij kadr; 'pad' — wpisz w 80% kadru (maska Androida);
//       'top'   — kwadrat przycięty od góry (portret: głowa w górnej części)
const JOBS = [
  ['mars.webp',  'icons/icon-192.webp',          192, 'cover', 'image/webp'],
  ['mars.webp',  'icons/icon-512.webp',          512, 'cover', 'image/webp'],
  ['mars.webp',  'icons/icon-maskable-512.webp', 512, 'pad',   'image/webp'],
  ['mars.webp',  'icons/apple-touch-icon.png',   180, 'cover', 'image/png'],
  ['lwica.webp', 'avatars/lwica.webp',           320, 'top',   'image/webp'],
  ['ajl.webp',   'avatars/ajl.webp',             320, 'top',   'image/webp'],
];

const PAGE = `<!doctype html><html lang="pl"><head><meta charset="utf-8"><title>Konwersja</title>
<style>body{font:14px/1.6 system-ui;background:#111;color:#eee;padding:24px}
li{margin:.2rem 0}.ok{color:#5be39a}.err{color:#ff6b6b}</style></head><body>
<h1>Konwersja obrazów</h1><ul id="log"></ul><p id="done"></p>
<script>
const JOBS = ${JSON.stringify(JOBS)};
const log = document.getElementById('log');
function line(t, cls){ const li=document.createElement('li'); li.textContent=t; if(cls) li.className=cls; log.appendChild(li); }

function render(img, size, mode, format){
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.imageSmoothingQuality = 'high';
  const iw = img.naturalWidth, ih = img.naturalHeight;
  if (mode === 'pad') {
    // tło w kolorze rogu obrazka, planeta w 80% kadru (strefa bezpieczna maski)
    g.drawImage(img, 0, 0, 1, 1, 0, 0, size, size);
    const px = g.getImageData(0,0,1,1).data;
    g.fillStyle = 'rgb('+px[0]+','+px[1]+','+px[2]+')';
    g.fillRect(0,0,size,size);
    const s = size*0.8, o = size*0.1;
    const k = Math.min(s/iw, s/ih);
    g.drawImage(img, o+(s-iw*k)/2, o+(s-ih*k)/2, iw*k, ih*k);
  } else if (mode === 'top') {
    const side = Math.min(iw, ih);
    const sx = (iw - side)/2, sy = 0; // kwadrat od góry, wyśrodkowany w poziomie
    g.drawImage(img, sx, sy, side, side, 0, 0, size, size);
  } else {
    const k = Math.max(size/iw, size/ih);
    g.drawImage(img, (size-iw*k)/2, (size-ih*k)/2, iw*k, ih*k);
  }
  return new Promise(res => c.toBlob(res, format, 0.88));
}

(async () => {
  let ok = 0;
  for (const [src, out, size, mode, format] of JOBS) {
    try {
      const img = new Image();
      img.src = './source/' + src;
      await img.decode();
      const blob = await render(img, size, mode, format);
      const r = await fetch('./out/' + encodeURIComponent(out), { method: 'POST', body: blob });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      line(out + '  ' + size + 'px  ' + Math.round(blob.size/1024) + ' KB', 'ok');
      ok++;
    } catch (e) {
      line(out + '  BŁĄD: ' + e.message, 'err');
    }
  }
  document.getElementById('done').textContent = 'GOTOWE: ' + ok + ' / ' + JOBS.length;
})();
</script></body></html>`;

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (req.method === 'POST' && url.pathname.startsWith('/out/')) {
    const rel = decodeURIComponent(url.pathname.slice(5));
    if (rel.includes('..')) { res.writeHead(400).end(); return; }
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const file = join(root, 'src', rel);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, Buffer.concat(chunks));
    console.log('zapisano src/' + rel, (Buffer.concat(chunks).length / 1024).toFixed(0) + ' KB');
    res.writeHead(200).end('ok');
    return;
  }
  if (url.pathname.startsWith('/source/')) {
    try {
      const body = await readFile(join(root, 'src/icons', decodeURIComponent(url.pathname)));
      res.writeHead(200, { 'Content-Type': 'image/webp' }).end(body);
    } catch { res.writeHead(404).end(); }
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(PAGE);
}).listen(PORT, () => console.log('konwerter: http://localhost:' + PORT + '/'));
