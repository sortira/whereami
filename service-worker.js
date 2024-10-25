self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('whereami-cache').then((cache) => {
      return cache.addAll([
        'https://sortira.github.io/whereami/index.html',
        'https://sortira.github.io/wherami/about.html',
        'https://sortira.github.io/whereami/game.html',
        'https://sortira.github.io/whereami/rules.html',
        'https://sortira.github.io/whereami/uiux.html',
        'https://sortira.github.io/whereami/game.js',
        'https://sortira.github.io/whereami/about.js',
        'https://sortira.github.io/whereami/wrong.mp3',
        'https://sortira.github.io/whereami/correct.mp3',
        'https://sortira.github.io/whereami/gameover.mp3',
        'https://sortira.github.io/whereami/favicon.png',
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
