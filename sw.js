'use strict';
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(()=>fetch(event.request))));