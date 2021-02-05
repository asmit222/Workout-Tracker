import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const path = require("path");
import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();
import registerServiceWorker from "./src/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// if ('serviceWorker' in navigator) {
//      window.addEventListener('load', () => {
//       // navigator.serviceWorker.register(path.resolve(__dirname, '../dist', 'service-worker.js'), {scope: '/'})
//       navigator.serviceWorker.register('service-worker.js')
//       // navigator.serviceWorker.register(path.resolve(__dirname, '../dist', 'service-worker.js'))
//       .then(registration => {
//          console.log('SW registered: ', registration, 'scope is ', registration.scope);
//        }).catch(registrationError => {
//          console.log('SW registration failed: ', registrationError);
//       });
//      });
//    }

//    var CACHE_NAME = 'my-pwa-cache-v1';
//    var urlsToCache = [
//      '/',
//      '/client/index.css',
//      '/client/index.js',
//      '/public/index.html',
//      '/dist/bundle.js',
//      '/bundle.js',
//      '/dist/',
//      '/dist',
//      '/dist/index.html'
//    ];
//    self.addEventListener('install', function(event) {
//      event.waitUntil(
//        caches.open(CACHE_NAME)
//          .then(function(cache) {
//            // Open a cache and cache our files
//            return cache.addAll(urlsToCache);
//          })
//      );
//    });

//    self.addEventListener('fetch', function(event) {
//     console.log(event.request.url);
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             return response || fetch(event.request);
//         })
//     );
// });

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js", { scope: "/" })
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

var CACHE_NAME = "my-pwa-cache-v1";
var urlsToCache = [
  "/",
  "/client/index.css",
  "/client/index.js",
  "/public/index.html",
  "/dist/bundle.js",
  "/bundle.js",
  "/dist/",
  "/dist",
  "/dist/index.html",
];
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // Open a cache and cache our files
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
