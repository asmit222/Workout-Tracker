if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(c.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=i(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-fe7d1311"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.bundle.a01765dcd224b06fab03.js",revision:"a8d1f4d6d66d3425ace2a92ce838ccf4"},{url:"2.bundle.4b42f97544cd01b029ac.js",revision:"be1721947e75e324afd96c2e98cb1a06"},{url:"3.bundle.685698dd2e109d713944.js",revision:"5ceb92457bce483a466e13ba52e2cc33"},{url:"4.bundle.f1362cac75753e57a915.js",revision:"1f59631074920388f46c74960d1e647c"},{url:"5.bundle.5068fb98c3b2b27d7849.js",revision:"3a04cb5c2828aab800718ce97578c059"},{url:"6.bundle.f566758d86ed8f6efe58.js",revision:"832839a4a51574d193246a6539ad9f74"},{url:"bundle.43930b0fc75f55c9de88.js",revision:"c3d11fb2093b2d2b75ae06155483f34e"},{url:"index.html",revision:"fa4c52ea06a9bd1405fb4b477dd5efb1"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e4,purgeOnQuotaError:!0})]}),"GET")}));
