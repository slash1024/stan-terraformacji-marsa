// Service worker — offline + aktualizacje. VERSION podstawia build.mjs przy każdym buildzie.
const VERSION = '1.0.0+20261112-2157';
const CACHE = 'tfm-' + VERSION;
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.webp',
  './icon-512.webp',
  './icon-maskable-512.webp',
  './apple-touch-icon.png',
];

self.addEventListener('install', (e) => {
  // Nie wołamy skipWaiting() — nowa wersja czeka, aż użytkownik ją przyjmie.
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Użytkownik kliknął „Odśwież” w pasku aktualizacji.
self.addEventListener('message', (e) => {
  if (e.data === 'skip-waiting') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // fonty Google itd. — zostaw przeglądarce

  // Dokument: najpierw sieć (żeby aktualizacja dotarła), przy braku sieci — cache.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Reszta (ikony, manifest): najpierw cache, w tle dociągnij.
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
