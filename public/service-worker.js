var __wpo = {
  "assets": {
    "main": [
      "./dist/bundle.js",
      "./dist/"
    ],
    "additional": [],
    "optional": []
  },
  "externals": [],
  "hashesMap": {
    "ab421c00ba77f3efcb6ade813bfaf141bdeb43f8": "./dist/bundle.js",
    "9dadf481acafc963b7e14786939a4ca5c17c9560": "./dist/"
  },
  "strategy": "changed",
  "responseStrategy": "cache-first",
  "version": "11/24/2020, 9:07:16 PM",
  "name": "webpack-offline",
  "pluginVersion": "5.0.7",
  "relativePaths": true
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22cacheMaps%22%3A%5B%5D%2C%22navigationPreload%22%3A%22false%22%7D!./node_modules/offline-plugin/tpls/empty-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22cacheMaps%22%3A%5B%5D%2C%22navigationPreload%22%3A%22false%22%7D!./node_modules/offline-plugin/tpls/empty-entry.js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22cacheMaps%22%3A%5B%5D%2C%22navigationPreload%22%3A%22false%22%7D!./node_modules/offline-plugin/tpls/empty-entry.js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  var waitUntil = ExtendableEvent.prototype.waitUntil;\n  var respondWith = FetchEvent.prototype.respondWith;\n  var promisesMap = new WeakMap();\n\n  ExtendableEvent.prototype.waitUntil = function (promise) {\n    var extendableEvent = this;\n    var promises = promisesMap.get(extendableEvent);\n\n    if (promises) {\n      promises.push(Promise.resolve(promise));\n      return;\n    }\n\n    promises = [Promise.resolve(promise)];\n    promisesMap.set(extendableEvent, promises);\n\n    // call original method\n    return waitUntil.call(extendableEvent, Promise.resolve().then(function processPromises() {\n      var len = promises.length;\n\n      // wait for all to settle\n      return Promise.all(promises.map(function (p) {\n        return p[\"catch\"](function () {});\n      })).then(function () {\n        // have new items been added? If so, wait again\n        if (promises.length != len) return processPromises();\n        // we're done!\n        promisesMap[\"delete\"](extendableEvent);\n        // reject if one of the promises rejected\n        return Promise.all(promises);\n      });\n    }));\n  };\n\n  FetchEvent.prototype.respondWith = function (promise) {\n    this.waitUntil(promise);\n    return respondWith.call(this, promise);\n  };\n})();;\n        'use strict';\n\nif (typeof DEBUG === 'undefined') {\n  var DEBUG = false;\n}\n\nfunction WebpackServiceWorker(params, helpers) {\n  var cacheMaps = helpers.cacheMaps;\n  // navigationPreload: true, { map: (URL) => URL, test: (URL) => boolean }\n  var navigationPreload = helpers.navigationPreload;\n\n  // (update)strategy: changed, all\n  var strategy = params.strategy;\n  // responseStrategy: cache-first, network-first\n  var responseStrategy = params.responseStrategy;\n\n  var assets = params.assets;\n\n  var hashesMap = params.hashesMap;\n  var externals = params.externals;\n\n  var prefetchRequest = params.prefetchRequest || {\n    credentials: 'same-origin',\n    mode: 'cors'\n  };\n\n  var CACHE_PREFIX = params.name;\n  var CACHE_TAG = params.version;\n  var CACHE_NAME = CACHE_PREFIX + ':' + CACHE_TAG;\n\n  var PRELOAD_CACHE_NAME = CACHE_PREFIX + '$preload';\n  var STORED_DATA_KEY = '__offline_webpack__data';\n\n  mapAssets();\n\n  var allAssets = [].concat(assets.main, assets.additional, assets.optional);\n\n  self.addEventListener('install', function (event) {\n    console.log('[SW]:', 'Install event');\n\n    var installing = undefined;\n\n    if (strategy === 'changed') {\n      installing = cacheChanged('main');\n    } else {\n      installing = cacheAssets('main');\n    }\n\n    event.waitUntil(installing);\n  });\n\n  self.addEventListener('activate', function (event) {\n    console.log('[SW]:', 'Activate event');\n\n    var activation = cacheAdditional();\n\n    // Delete all assets which name starts with CACHE_PREFIX and\n    // is not current cache (CACHE_NAME)\n    activation = activation.then(storeCacheData);\n    activation = activation.then(deleteObsolete);\n    activation = activation.then(function () {\n      if (self.clients && self.clients.claim) {\n        return self.clients.claim();\n      }\n    });\n\n    if (navigationPreload && self.registration.navigationPreload) {\n      activation = Promise.all([activation, self.registration.navigationPreload.enable()]);\n    }\n\n    event.waitUntil(activation);\n  });\n\n  function cacheAdditional() {\n    if (!assets.additional.length) {\n      return Promise.resolve();\n    }\n\n    if (DEBUG) {\n      console.log('[SW]:', 'Caching additional');\n    }\n\n    var operation = undefined;\n\n    if (strategy === 'changed') {\n      operation = cacheChanged('additional');\n    } else {\n      operation = cacheAssets('additional');\n    }\n\n    // Ignore fail of `additional` cache section\n    return operation['catch'](function (e) {\n      console.error('[SW]:', 'Cache section `additional` failed to load');\n    });\n  }\n\n  function cacheAssets(section) {\n    var batch = assets[section];\n\n    return caches.open(CACHE_NAME).then(function (cache) {\n      return addAllNormalized(cache, batch, {\n        bust: params.version,\n        request: prefetchRequest,\n        failAll: section === 'main'\n      });\n    }).then(function () {\n      logGroup('Cached assets: ' + section, batch);\n    })['catch'](function (e) {\n      console.error(e);\n      throw e;\n    });\n  }\n\n  function cacheChanged(section) {\n    return getLastCache().then(function (args) {\n      if (!args) {\n        return cacheAssets(section);\n      }\n\n      var lastCache = args[0];\n      var lastKeys = args[1];\n      var lastData = args[2];\n\n      var lastMap = lastData.hashmap;\n      var lastVersion = lastData.version;\n\n      if (!lastData.hashmap || lastVersion === params.version) {\n        return cacheAssets(section);\n      }\n\n      var lastHashedAssets = Object.keys(lastMap).map(function (hash) {\n        return lastMap[hash];\n      });\n\n      var lastUrls = lastKeys.map(function (req) {\n        var url = new URL(req.url);\n        url.search = '';\n        url.hash = '';\n\n        return url.toString();\n      });\n\n      var sectionAssets = assets[section];\n      var moved = [];\n      var changed = sectionAssets.filter(function (url) {\n        if (lastUrls.indexOf(url) === -1 || lastHashedAssets.indexOf(url) === -1) {\n          return true;\n        }\n\n        return false;\n      });\n\n      Object.keys(hashesMap).forEach(function (hash) {\n        var asset = hashesMap[hash];\n\n        // Return if not in sectionAssets or in changed or moved array\n        if (sectionAssets.indexOf(asset) === -1 || changed.indexOf(asset) !== -1 || moved.indexOf(asset) !== -1) return;\n\n        var lastAsset = lastMap[hash];\n\n        if (lastAsset && lastUrls.indexOf(lastAsset) !== -1) {\n          moved.push([lastAsset, asset]);\n        } else {\n          changed.push(asset);\n        }\n      });\n\n      logGroup('Changed assets: ' + section, changed);\n      logGroup('Moved assets: ' + section, moved);\n\n      var movedResponses = Promise.all(moved.map(function (pair) {\n        return lastCache.match(pair[0]).then(function (response) {\n          return [pair[1], response];\n        });\n      }));\n\n      return caches.open(CACHE_NAME).then(function (cache) {\n        var move = movedResponses.then(function (responses) {\n          return Promise.all(responses.map(function (pair) {\n            return cache.put(pair[0], pair[1]);\n          }));\n        });\n\n        return Promise.all([move, addAllNormalized(cache, changed, {\n          bust: params.version,\n          request: prefetchRequest,\n          failAll: section === 'main',\n          deleteFirst: section !== 'main'\n        })]);\n      });\n    });\n  }\n\n  function deleteObsolete() {\n    return caches.keys().then(function (keys) {\n      var all = keys.map(function (key) {\n        if (key.indexOf(CACHE_PREFIX) !== 0 || key.indexOf(CACHE_NAME) === 0) return;\n\n        console.log('[SW]:', 'Delete cache:', key);\n        return caches['delete'](key);\n      });\n\n      return Promise.all(all);\n    });\n  }\n\n  function getLastCache() {\n    return caches.keys().then(function (keys) {\n      var index = keys.length;\n      var key = undefined;\n\n      while (index--) {\n        key = keys[index];\n\n        if (key.indexOf(CACHE_PREFIX) === 0) {\n          break;\n        }\n      }\n\n      if (!key) return;\n\n      var cache = undefined;\n\n      return caches.open(key).then(function (_cache) {\n        cache = _cache;\n        return _cache.match(new URL(STORED_DATA_KEY, location).toString());\n      }).then(function (response) {\n        if (!response) return;\n\n        return Promise.all([cache, cache.keys(), response.json()]);\n      });\n    });\n  }\n\n  function storeCacheData() {\n    return caches.open(CACHE_NAME).then(function (cache) {\n      var data = new Response(JSON.stringify({\n        version: params.version,\n        hashmap: hashesMap\n      }));\n\n      return cache.put(new URL(STORED_DATA_KEY, location).toString(), data);\n    });\n  }\n\n  self.addEventListener('fetch', function (event) {\n    // Handle only GET requests\n    if (event.request.method !== 'GET') {\n      return;\n    }\n\n    // This prevents some weird issue with Chrome DevTools and 'only-if-cached'\n    // Fixes issue #385, also ref to:\n    // - https://github.com/paulirish/caltrainschedule.io/issues/49\n    // - https://bugs.chromium.org/p/chromium/issues/detail?id=823392\n    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {\n      return;\n    }\n\n    var url = new URL(event.request.url);\n    url.hash = '';\n\n    var urlString = url.toString();\n\n    // Not external, so search part of the URL should be stripped,\n    // if it's external URL, the search part should be kept\n    if (externals.indexOf(urlString) === -1) {\n      url.search = '';\n      urlString = url.toString();\n    }\n\n    var assetMatches = allAssets.indexOf(urlString) !== -1;\n    var cacheUrl = urlString;\n\n    if (!assetMatches) {\n      var cacheRewrite = matchCacheMap(event.request);\n\n      if (cacheRewrite) {\n        cacheUrl = cacheRewrite;\n        assetMatches = true;\n      }\n    }\n\n    if (!assetMatches) {\n      // Use request.mode === 'navigate' instead of isNavigateRequest\n      // because everything what supports navigationPreload supports\n      // 'navigate' request.mode\n      if (event.request.mode === 'navigate') {\n        // Requesting with fetchWithPreload().\n        // Preload is used only if navigationPreload is enabled and\n        // navigationPreload mapping is not used.\n        if (navigationPreload === true) {\n          event.respondWith(fetchWithPreload(event));\n          return;\n        }\n      }\n\n      // Something else, positive, but not `true`\n      if (navigationPreload) {\n        var preloadedResponse = retrivePreloadedResponse(event);\n\n        if (preloadedResponse) {\n          event.respondWith(preloadedResponse);\n          return;\n        }\n      }\n\n      // Logic exists here if no cache match\n      return;\n    }\n\n    // Cache handling/storing/fetching starts here\n    var resource = undefined;\n\n    if (responseStrategy === 'network-first') {\n      resource = networkFirstResponse(event, urlString, cacheUrl);\n    }\n    // 'cache-first' otherwise\n    // (responseStrategy has been validated before)\n    else {\n        resource = cacheFirstResponse(event, urlString, cacheUrl);\n      }\n\n    event.respondWith(resource);\n  });\n\n  self.addEventListener('message', function (e) {\n    var data = e.data;\n    if (!data) return;\n\n    switch (data.action) {\n      case 'skipWaiting':\n        {\n          if (self.skipWaiting) self.skipWaiting();\n        }break;\n    }\n  });\n\n  function cacheFirstResponse(event, urlString, cacheUrl) {\n    handleNavigationPreload(event);\n\n    return cachesMatch(cacheUrl, CACHE_NAME).then(function (response) {\n      if (response) {\n        if (DEBUG) {\n          console.log('[SW]:', 'URL [' + cacheUrl + '](' + urlString + ') from cache');\n        }\n\n        return response;\n      }\n\n      // Load and cache known assets\n      var fetching = fetch(event.request).then(function (response) {\n        if (!response.ok) {\n          if (DEBUG) {\n            console.log('[SW]:', 'URL [' + urlString + '] wrong response: [' + response.status + '] ' + response.type);\n          }\n\n          return response;\n        }\n\n        if (DEBUG) {\n          console.log('[SW]:', 'URL [' + urlString + '] from network');\n        }\n\n        if (cacheUrl === urlString) {\n          (function () {\n            var responseClone = response.clone();\n            var storing = caches.open(CACHE_NAME).then(function (cache) {\n              return cache.put(urlString, responseClone);\n            }).then(function () {\n              console.log('[SW]:', 'Cache asset: ' + urlString);\n            });\n\n            event.waitUntil(storing);\n          })();\n        }\n\n        return response;\n      });\n\n      return fetching;\n    });\n  }\n\n  function networkFirstResponse(event, urlString, cacheUrl) {\n    return fetchWithPreload(event).then(function (response) {\n      if (response.ok) {\n        if (DEBUG) {\n          console.log('[SW]:', 'URL [' + urlString + '] from network');\n        }\n\n        return response;\n      }\n\n      // Throw to reach the code in the catch below\n      throw response;\n    })\n    // This needs to be in a catch() and not just in the then() above\n    // cause if your network is down, the fetch() will throw\n    ['catch'](function (erroredResponse) {\n      if (DEBUG) {\n        console.log('[SW]:', 'URL [' + urlString + '] from cache if possible');\n      }\n\n      return cachesMatch(cacheUrl, CACHE_NAME).then(function (response) {\n        if (response) {\n          return response;\n        }\n\n        if (erroredResponse instanceof Response) {\n          return erroredResponse;\n        }\n\n        // Not a response at this point, some other error\n        throw erroredResponse;\n        // return Response.error();\n      });\n    });\n  }\n\n  function handleNavigationPreload(event) {\n    if (navigationPreload && typeof navigationPreload.map === 'function' &&\n    // Use request.mode === 'navigate' instead of isNavigateRequest\n    // because everything what supports navigationPreload supports\n    // 'navigate' request.mode\n    event.preloadResponse && event.request.mode === 'navigate') {\n      var mapped = navigationPreload.map(new URL(event.request.url), event.request);\n\n      if (mapped) {\n        storePreloadedResponse(mapped, event);\n      }\n    }\n  }\n\n  // Temporary in-memory store for faster access\n  var navigationPreloadStore = new Map();\n\n  function storePreloadedResponse(_url, event) {\n    var url = new URL(_url, location);\n    var preloadResponsePromise = event.preloadResponse;\n\n    navigationPreloadStore.set(preloadResponsePromise, {\n      url: url,\n      response: preloadResponsePromise\n    });\n\n    var isSamePreload = function isSamePreload() {\n      return navigationPreloadStore.has(preloadResponsePromise);\n    };\n\n    var storing = preloadResponsePromise.then(function (res) {\n      // Return if preload isn't enabled or hasn't happened\n      if (!res) return;\n\n      // If navigationPreloadStore already consumed\n      // or navigationPreloadStore already contains another preload,\n      // then do not store anything and return\n      if (!isSamePreload()) {\n        return;\n      }\n\n      var clone = res.clone();\n\n      // Storing the preload response for later consume (hasn't yet been consumed)\n      return caches.open(PRELOAD_CACHE_NAME).then(function (cache) {\n        if (!isSamePreload()) return;\n\n        return cache.put(url, clone).then(function () {\n          if (!isSamePreload()) {\n            return caches.open(PRELOAD_CACHE_NAME).then(function (cache) {\n              return cache['delete'](url);\n            });\n          }\n        });\n      });\n    });\n\n    event.waitUntil(storing);\n  }\n\n  function retriveInMemoryPreloadedResponse(url) {\n    if (!navigationPreloadStore) {\n      return;\n    }\n\n    var foundResponse = undefined;\n    var foundKey = undefined;\n\n    navigationPreloadStore.forEach(function (store, key) {\n      if (store.url.href === url.href) {\n        foundResponse = store.response;\n        foundKey = key;\n      }\n    });\n\n    if (foundResponse) {\n      navigationPreloadStore['delete'](foundKey);\n      return foundResponse;\n    }\n  }\n\n  function retrivePreloadedResponse(event) {\n    var url = new URL(event.request.url);\n\n    if (self.registration.navigationPreload && navigationPreload && navigationPreload.test && navigationPreload.test(url, event.request)) {} else {\n      return;\n    }\n\n    var fromMemory = retriveInMemoryPreloadedResponse(url);\n    var request = event.request;\n\n    if (fromMemory) {\n      event.waitUntil(caches.open(PRELOAD_CACHE_NAME).then(function (cache) {\n        return cache['delete'](request);\n      }));\n\n      return fromMemory;\n    }\n\n    return cachesMatch(request, PRELOAD_CACHE_NAME).then(function (response) {\n      if (response) {\n        event.waitUntil(caches.open(PRELOAD_CACHE_NAME).then(function (cache) {\n          return cache['delete'](request);\n        }));\n      }\n\n      return response || fetch(event.request);\n    });\n  }\n\n  function mapAssets() {\n    Object.keys(assets).forEach(function (key) {\n      assets[key] = assets[key].map(function (path) {\n        var url = new URL(path, location);\n\n        url.hash = '';\n\n        if (externals.indexOf(path) === -1) {\n          url.search = '';\n        }\n\n        return url.toString();\n      });\n    });\n\n    hashesMap = Object.keys(hashesMap).reduce(function (result, hash) {\n      var url = new URL(hashesMap[hash], location);\n      url.search = '';\n      url.hash = '';\n\n      result[hash] = url.toString();\n      return result;\n    }, {});\n\n    externals = externals.map(function (path) {\n      var url = new URL(path, location);\n      url.hash = '';\n\n      return url.toString();\n    });\n  }\n\n  function addAllNormalized(cache, requests, options) {\n    requests = requests.slice();\n\n    var bustValue = options.bust;\n    var failAll = options.failAll !== false;\n    var deleteFirst = options.deleteFirst === true;\n    var requestInit = options.request || {\n      credentials: 'omit',\n      mode: 'cors'\n    };\n\n    var deleting = Promise.resolve();\n\n    if (deleteFirst) {\n      deleting = Promise.all(requests.map(function (request) {\n        return cache['delete'](request)['catch'](function () {});\n      }));\n    }\n\n    return Promise.all(requests.map(function (request) {\n      if (bustValue) {\n        request = applyCacheBust(request, bustValue);\n      }\n\n      return fetch(request, requestInit).then(fixRedirectedResponse).then(function (response) {\n        if (!response.ok) {\n          return { error: true };\n        }\n\n        return { response: response };\n      }, function () {\n        return { error: true };\n      });\n    })).then(function (responses) {\n      if (failAll && responses.some(function (data) {\n        return data.error;\n      })) {\n        return Promise.reject(new Error('Wrong response status'));\n      }\n\n      if (!failAll) {\n        responses = responses.filter(function (data, i) {\n          if (!data.error) {\n            return true;\n          }\n\n          requests.splice(i, 1);\n          return false;\n        });\n      }\n\n      return deleting.then(function () {\n        var addAll = responses.map(function (_ref, i) {\n          var response = _ref.response;\n\n          return cache.put(requests[i], response);\n        });\n\n        return Promise.all(addAll);\n      });\n    });\n  }\n\n  function matchCacheMap(request) {\n    var urlString = request.url;\n    var url = new URL(urlString);\n\n    var requestType = undefined;\n\n    if (isNavigateRequest(request)) {\n      requestType = 'navigate';\n    } else if (url.origin === location.origin) {\n      requestType = 'same-origin';\n    } else {\n      requestType = 'cross-origin';\n    }\n\n    for (var i = 0; i < cacheMaps.length; i++) {\n      var map = cacheMaps[i];\n\n      if (!map) continue;\n      if (map.requestTypes && map.requestTypes.indexOf(requestType) === -1) {\n        continue;\n      }\n\n      var newString = undefined;\n\n      if (typeof map.match === 'function') {\n        newString = map.match(url, request);\n      } else {\n        newString = urlString.replace(map.match, map.to);\n      }\n\n      if (newString && newString !== urlString) {\n        return newString;\n      }\n    }\n  }\n\n  function fetchWithPreload(event) {\n    if (!event.preloadResponse || navigationPreload !== true) {\n      return fetch(event.request);\n    }\n\n    return event.preloadResponse.then(function (response) {\n      return response || fetch(event.request);\n    });\n  }\n}\n\nfunction cachesMatch(request, cacheName) {\n  return caches.match(request, {\n    cacheName: cacheName\n  }).then(function (response) {\n    if (isNotRedirectedResponse(response)) {\n      return response;\n    }\n\n    // Fix already cached redirected responses\n    return fixRedirectedResponse(response).then(function (fixedResponse) {\n      return caches.open(cacheName).then(function (cache) {\n        return cache.put(request, fixedResponse);\n      }).then(function () {\n        return fixedResponse;\n      });\n    });\n  })\n  // Return void if error happened (cache not found)\n  ['catch'](function () {});\n}\n\nfunction applyCacheBust(asset, key) {\n  var hasQuery = asset.indexOf('?') !== -1;\n  return asset + (hasQuery ? '&' : '?') + '__uncache=' + encodeURIComponent(key);\n}\n\nfunction isNavigateRequest(request) {\n  return request.mode === 'navigate' || request.headers.get('Upgrade-Insecure-Requests') || (request.headers.get('Accept') || '').indexOf('text/html') !== -1;\n}\n\nfunction isNotRedirectedResponse(response) {\n  return !response || !response.redirected || !response.ok || response.type === 'opaqueredirect';\n}\n\n// Based on https://github.com/GoogleChrome/sw-precache/pull/241/files#diff-3ee9060dc7a312c6a822cac63a8c630bR85\nfunction fixRedirectedResponse(response) {\n  if (isNotRedirectedResponse(response)) {\n    return Promise.resolve(response);\n  }\n\n  var body = 'body' in response ? Promise.resolve(response.body) : response.blob();\n\n  return body.then(function (data) {\n    return new Response(data, {\n      headers: response.headers,\n      status: response.status\n    });\n  });\n}\n\nfunction copyObject(original) {\n  return Object.keys(original).reduce(function (result, key) {\n    result[key] = original[key];\n    return result;\n  }, {});\n}\n\nfunction logGroup(title, assets) {\n  console.groupCollapsed('[SW]:', title);\n\n  assets.forEach(function (asset) {\n    console.log('Asset:', asset);\n  });\n\n  console.groupEnd();\n}\n        WebpackServiceWorker(__wpo, {\nloaders: {},\ncacheMaps: [],\nnavigationPreload: false,\n});\n        module.exports = __webpack_require__(/*! ./empty-entry.js */ \"./node_modules/offline-plugin/tpls/empty-entry.js\")\n      \n\n//# sourceURL=webpack:///./node_modules/offline-plugin/tpls/empty-entry.js?./node_modules/offline-plugin/lib/misc/sw-loader.js?json=%257B%2522data_var_name%2522%253A%2522__wpo%2522%252C%2522cacheMaps%2522%253A%255B%255D%252C%2522navigationPreload%2522%253A%2522false%2522%257D");

/***/ }),

/***/ "./node_modules/offline-plugin/tpls/empty-entry.js":
/*!*********************************************************!*\
  !*** ./node_modules/offline-plugin/tpls/empty-entry.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./node_modules/offline-plugin/tpls/empty-entry.js?");

/***/ })

/******/ });