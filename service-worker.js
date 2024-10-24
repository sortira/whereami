self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('whereami-cache').then((cache) => {
        return cache.addAll([
          'https://github.com/sortira/whereami/index.html',
          'https://github.com/sortira/whereami/about.html',
          'https://github.com/sortira/whereami/game.html',
          'https://github.com/sortira/whereami/rules.html',
          'https://github.com/sortira/whereami/uiux.html',
          'https://github.com/sortira/whereami/game.js',
          'https://github.com/sortira/whereami/about.js',
          'https://github.com/sortira/whereami/wrong.mp3',
          'https://github.com/sortira/whereami/correct.mp3',
          'https://github.com/sortira/whereami/gameover.mp3',
          'https://github.com/sortira/whereami/favicon.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  