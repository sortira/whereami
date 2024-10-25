// Install event: Force the new service worker to activate immediately
self.addEventListener('install', event => {
  self.skipWaiting();  // Forces the waiting service worker to become the active one
});

// Activate event: Clean up old caches and immediately take control of clients
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== 'whereami-cache') {  // Replace 'your-cache-name' with your actual cache name
            return caches.delete(cache);  // Deletes old caches that don't match the current cache name
          }
        })
      );
    })
  );
  self.clients.claim();  // Takes control of all clients immediately
});

// Listen for 'SKIP_WAITING' message to activate the new service worker immediately
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
