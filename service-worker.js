if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,a,c)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+r.slice(1)};return Promise.all(a.map(r=>{switch(r){case"exports":return s;case"module":return i;default:return e(r)}})).then(e=>{const r=c(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-fe7d1311"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"1.bundle.ab843f496365f83d50cd.js",revision:"efea871345bc7a78fb8f1b651589ed19"},{url:"2.bundle.f03d3026df98a691f214.js",revision:"61b98e97e285388f4a71eaa184d5740a"},{url:"3.bundle.6e4f69045e815863a708.js",revision:"c54c472519149e34aacb804965eec8b8"},{url:"4.bundle.5fb81e520e24ad1b3ac8.js",revision:"8c5b1f3b6a2ca9ce1aaa1cd4efd54873"},{url:"5.bundle.bb8ff64549a558430648.js",revision:"04bdd1cc69673fc04fc6385b8d1c839c"},{url:"6.bundle.e03ac47045822d86f3bb.js",revision:"a148840a8caaabdd06a3ae521a20a5ce"},{url:"bundle.e9fb58533b59dd231e7a.js",revision:"2c15a5fe8ae3a901253b3bcfc6a1525c"},{url:"index.html",revision:"a81b3c530eb0effe81154e2378f2a4c6"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e4,purgeOnQuotaError:!0})]}),"GET")}));
