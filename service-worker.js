/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-24f65e47'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  workbox.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "0.bundle.001fec5c82e9a8e7dd4d.js",
    "revision": "e0091888113f00aec9d17dc657115f1c"
  }, {
    "url": "1.bundle.f3fe5451fb45fa6bdc5a.js",
    "revision": "5652f85546585ca64846bca8de61e289"
  }, {
    "url": "2.bundle.a48cef2f33ca70a8bb0b.js",
    "revision": "ef84dd6cbf7a329dc4d395e38304a37a"
  }, {
    "url": "3.bundle.601a0592f8c396092589.js",
    "revision": "9bab8e0a6049fc7a315f1b48929a88f0"
  }, {
    "url": "4.bundle.15870e8831f7c9f447e8.js",
    "revision": "355d131a68928c9e88fa54ab85796048"
  }, {
    "url": "5.bundle.a9237a6d17f8bf2f3ce5.js",
    "revision": "6a1569466e703e42febd69f204c1d5ba"
  }, {
    "url": "6.bundle.e1817c3b864793c3a74a.js",
    "revision": "463e50ef6c124f067e6e7653707bee1a"
  }, {
    "url": "7.bundle.1b11e6d80727aa5dcfc3.js",
    "revision": "69464ec21218a70e2cf202a63312e4be"
  }, {
    "url": "8.bundle.438f7b3436ae89a85d9e.js",
    "revision": "f37508b59214d232f8dda57e3c252086"
  }, {
    "url": "bundle.923e79dc6c062ad1e4f5.js",
    "revision": "fe51800a5b8d66f6c4df8cf86f725854"
  }, {
    "url": "index.html",
    "revision": "afad0ff1c696ee09631a2be44dd1b754"
  }], {});
  workbox.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.CacheFirst({
    "cacheName": "images",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10000,
      purgeOnQuotaError: true
    })]
  }), 'GET');

});
//# sourceMappingURL=service-worker.js.map
