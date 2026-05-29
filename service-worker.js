const CACHE_NAME = 'uptoyou-local-cache-v1';

// I file che l'utente vuole ESCLUSIVAMENTE disponibili in locale (offline)
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './test.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Inizializzazione: scarica in locale SOLO i file dell'elenco sopra
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache locale creata con successo per i file selezionati.');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Attivazione e pulizia di vecchie versioni della cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Rimozione vecchia cache obsoleta:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Gestione delle richieste del browser
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Se il file è presente nella cache locale (index, test, css, js), lo serve all'istante
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // Se NON è nella lista locale (es. database Supabase, mappe, altre pagine), lo richiede alla rete
      // NON viene salvato in locale, quindi se l'utente è offline questa parte non caricherà
      return fetch(event.request).catch(() => {
        // Se la rete fallisce (l'utente è offline) e stava navigando, lo riporta alla index locale
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});