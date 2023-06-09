var CHACHE_NAME = 'my-site-cache-v1';
var urlToCache = [
    '/',
    'index.html',

];
self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(CHACHE_NAME)
            .then(function(cache){
                console.log('Opened cache');
                return cache.addAll(urlToCache);
            })
    )
})
self.addEventListener('fetch', function(event) {

    event.respondWith(

      caches.match(event.request)

        .then(function(response) {

          // Cache hit - return response

          if (response) {

            return response;

          }

          return fetch(event.request);

        }

      )

    );

  });