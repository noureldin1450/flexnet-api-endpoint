//update it every time to make the caches rechached
const cacheName = 'static-V1';

//the assest that i want to chached
/*const  assets = [
    '/',
    '/index.html',
    '/imges/favicon/favicon.png',
    '/style/scss/pages/homepage.css',
    'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css',
    '/style/owl.theme.default.min.css',
    '/manifest.json',
    '/style/scss/pages/listpage.css',
    '/style/scss/pages/moviepage.css'
]
*/

//installer
self.addEventListener('install', function(event){
    console.log("sw installed");

    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache){
            
            //comment this befor upload it  delet all the chaches on user browser
           caches.keys().then(function(names) {
                 for (let name of names)
                 caches.delete(name);
             });

            //chaching them
            //cache.addAll(assets);

        }));

});

self.addEventListener('activate', function(event){
    console.log("sw activated");

    event.waitUntil(
        caches.keys().then(function(keys){
            //console.log(keys);
            return Promise.all(keys
                .filter(key => key !== cacheName)
                .map(key => caches.delete(key))
            )
        })
    )
    //remove the old chaches and leave the new one
});

//get the site files for the chaches
self.addEventListener('fetch', function(event){
    /*event.respondWith(
        caches.match(event.request)
        .then(function(res){
            if(res){
                return res;
            }else{
               return fetch(event.request);
            }
        })
    );*/
});
