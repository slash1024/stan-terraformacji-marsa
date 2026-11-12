// Składa docs/ — gotowy katalog do wrzucenia na hosting. Bez zależności (czysty Node >= 18).
// Nazwa `docs` nie jest przypadkowa: GitHub Pages potrafi serwować tylko z katalogu
// głównego repozytorium albo z /docs — innego folderu nie da się tam wskazać.
//   docs/index.html                      ← aplikacja (PWA: manifest + service worker)
//   docs/sw.js, manifest.webmanifest, ikony
//   docs/stan-terraformacji-marsa.html   ← ta sama apka jako jeden plik do wysłania mailem/na dysk
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const rd = (p) => readFileSync(join(root, p), 'utf8');

// Wersja = numer z package.json + znacznik buildu. Wchodzi w nazwę cache'u
// service workera, więc KAŻDY build jest dla przeglądarki nową wersją.
const pkg = JSON.parse(rd('package.json'));
const d = new Date();
const p2 = (n) => String(n).padStart(2, '0');
const stamp = `${d.getFullYear()}${p2(d.getMonth() + 1)}${p2(d.getDate())}-${p2(d.getHours())}${p2(d.getMinutes())}`;
const VERSION = `${pkg.version}+${stamp}`;

// Zdjęcia dołączone do aplikacji — wbijane jako data URL, żeby apka została
// jednym plikiem i żeby po aktualizacji były od razu na każdym telefonie.
const avatarFiles = readdirSync(join(root, 'src/avatars')).filter((f) => /\.(webp|png|jpe?g)$/i.test(f));
const avatars = {};
for (const f of avatarFiles) {
  const key = f.replace(/\.[^.]+$/, '');
  const mime = f.endsWith('.png') ? 'image/png' : /\.jpe?g$/i.test(f) ? 'image/jpeg' : 'image/webp';
  const b64 = readFileSync(join(root, 'src/avatars', f)).toString('base64');
  avatars[key] = {
    label: key.length <= 3 ? key.toUpperCase() : key[0].toUpperCase() + key.slice(1),
    src: `data:${mime};base64,${b64}`,
  };
}

const marks = {
  '/*@@AVATARS@@*/': 'window.TFM_AVATARS=' + JSON.stringify(avatars) + ';',
  '/*@@CSS@@*/': rd('src/styles.css'),
  '/*@@REACT@@*/': rd('vendor/react.production.min.js'),
  '/*@@REACTDOM@@*/': rd('vendor/react-dom.production.min.js'),
  '/*@@APP@@*/': rd('src/app.js'),
  '/*@@SWREG@@*/': rd('src/sw-register.js'),
  '/*@@VERSION@@*/': VERSION,
};

let html = rd('src/template.html');
for (const [k, v] of Object.entries(marks)) {
  if (!html.includes(k)) throw new Error('Brak znacznika ' + k + ' w template.html');
  html = html.split(k).join(v);
}

const dist = join(root, 'docs');
mkdirSync(dist, { recursive: true });

// 1. Aplikacja
writeFileSync(join(dist, 'index.html'), html);
// Kopia pod starą nazwą — otwierana prosto z dysku (SW sam się tam wyłącza).
writeFileSync(join(dist, 'stan-terraformacji-marsa.html'), html);

// 2. Service worker z wbitą wersją
writeFileSync(join(dist, 'sw.js'), rd('src/sw.js').split('/*@@VERSION@@*/').join(VERSION));

// 3. Manifest + ikony
copyFileSync(join(root, 'src/manifest.webmanifest'), join(dist, 'manifest.webmanifest'));
for (const icon of ['icon-192.webp', 'icon-512.webp', 'icon-maskable-512.webp', 'apple-touch-icon.png']) {
  copyFileSync(join(root, 'src/icons', icon), join(dist, icon));
}

// Bez tego GitHub Pages przepuszcza katalog przez Jekylla, który pomija pliki
// i katalogi zaczynające się od podkreślnika i potrafi zaskoczyć przy rozbudowie.
writeFileSync(join(dist, '.nojekyll'), '');

console.log('OK -> docs/  wersja', VERSION, '·', (html.length / 1024).toFixed(0) + ' KB');
