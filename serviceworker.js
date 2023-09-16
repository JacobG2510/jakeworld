const CACHE_NAME = 'portfolio-cache-v1';

// List of files to cache
const cacheFiles = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/manifest.json',
  '/path/to/your/other/assets.css',
  '/path/to/your/other/assets.js',
];

// Event listener for installation of the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  );
});

// Event listener for fetching assets from the cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Event listener to clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});