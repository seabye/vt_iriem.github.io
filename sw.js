'use strict';
self.addEventListener('install',event=>event.waitUntil(caches.open('').then(cache=>cache.addAll([]))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request))));