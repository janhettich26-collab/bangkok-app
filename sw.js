// Bangkok 2026 — Service Worker: App offline, Kurs & Karten-Kacheln übers Netz
const CACHE = "bkk-v55";
const SHELL = [
  "./", "index.html", "manifest.json",
  "css/app.css", "js/app.js", "js/data-spots.js", "js/data-ziele.js", "js/data-plan.js", "js/data-buchungen.js", "js/data-info.js", "js/data-phrases.js", "js/data-pack.js", "js/data-privat.js",
  "vendor/leaflet/leaflet.css", "vendor/leaflet/leaflet.js",
  "icons/icon.svg", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  // Kurs-APIs & Karten-Kacheln: nur Netz (Kurs wird in localStorage gecacht)
  if (url.origin !== location.origin) return;
  // App-Shell: Netz zuerst (max. 3 s), damit Aenderungen sofort ankommen —
  // ohne Netz oder bei Zeitueberschreitung sofort aus dem Cache.
  e.respondWith(
    new Promise(resolve => {
      let done = false;
      const fromCache = () => caches.match(e.request, { ignoreSearch: true })
        .then(hit => hit || fetch(e.request));
      const timer = setTimeout(() => { if (!done) { done = true; resolve(fromCache()); } }, 3000);
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        if (!done) { done = true; clearTimeout(timer); resolve(res); }
      }).catch(() => {
        if (!done) { done = true; clearTimeout(timer); resolve(fromCache()); }
      });
    })
  );
});
