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
    "url": "0.bundle.f4d11d38102c5f799344.js",
    "revision": "17c817d58cee77dd9c7f6de7948061e2"
  }, {
    "url": "1.bundle.1fa786d20fc48f4e6301.js",
    "revision": "02c6622d52d930da43a5d2df7e1af733"
  }, {
    "url": "2.bundle.9fe55879a4e7fe7650c7.js",
    "revision": "b3f4f1dffda1f14d815a1307b5de0cad"
  }, {
    "url": "3.bundle.601a0592f8c396092589.js",
    "revision": "9bab8e0a6049fc7a315f1b48929a88f0"
  }, {
    "url": "4.bundle.15870e8831f7c9f447e8.js",
    "revision": "355d131a68928c9e88fa54ab85796048"
  }, {
    "url": "5.bundle.5bf74c01a768e928c51e.js",
    "revision": "2c5762029787fb359ccde4f6b7736590"
  }, {
    "url": "6.bundle.8259d6a7346307ca8fd3.js",
    "revision": "d7c10b6d4c51d2401a922b47d6f20626"
  }, {
    "url": "7.bundle.74efb17f5b46f50368e5.js",
    "revision": "c6ccb49e9eb81539294397468a14f182"
  }, {
    "url": "bundle.a96c2603d1285cfaae4f.js",
    "revision": "c7d418aa45e31afc5c5ad58cdba67274"
  }, {
    "url": "index.html",
    "revision": "d85e458a39cfdf56cf97ae2aa75fc5c4"
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
