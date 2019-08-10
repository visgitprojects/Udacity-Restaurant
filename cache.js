const cache = 'restaurant-3';

// list of assets to cache
//include restaurant details
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(cache)
        .then(cache => {
            return cache.addAll([
              '/',
              '/index.html',
              '/css/styles.css',
              '/js/main.js',
              '/js/restaurant_info.js',
              '/restaurant.html?id=1',
              '/restaurant.html?id=2',
              '/restaurant.html?id=3',
              '/restaurant.html?id=4',
              '/restaurant.html?id=5',
              '/restaurant.html?id=6',
              '/restaurant.html?id=7',
              '/restaurant.html?id=8',
              '/restaurant.html?id=9',
              '/restaurant.html?id=10',
              '/img/offline.gif'
            ]).catch(error => {
                console.log('Caches failed. Error: ' + error);
            });
        })
    );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response=>{
            return response || fetch(event.request).then(fetchResponse => { 
                return caches.open(cache).then(caches => {           
                    caches.put(event.request, fetchResponse.clone());            
                    return fetchResponse;                                       
                });                                                           
            });
        }).catch(error=>{
            if(event.request.url.includes('.jpg')){
                return caches.match('/img/offline.gif');
            }
            return new Response('Not connected :( ',{
                status:404,
                statusText: 'Not connected'
            });
          })
        );
});
        