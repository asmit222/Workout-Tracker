if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return d[e]||(r=new Promise(async r=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=r}else importScripts(e),r()})),r.then(()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]})},r=(r,d)=>{Promise.all(r.map(e)).then(e=>d(1===e.length?e[0]:e))},d={require:Promise.resolve(r)};self.define=(r,s,i)=>{d[r]||(d[r]=Promise.resolve().then(()=>{let d={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return d;case"module":return n;default:return e(r)}})).then(e=>{const r=i(...e);return d.default||(d.default=r),d})}))}}define("./service-worker.js",["./workbox-fe7d1311"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.bundle.8ea262598e82bd2f2ce4.js",revision:"efbb5e1c7f21f31b78d6d0fd38f62558"},{url:"1.bundle.81fc7944e1d94798a64c.js",revision:"4d3c30386669c7b5a480fa94325779d1"},{url:"3.bundle.0f1d1971452439819ab5.js",revision:"0bc84f18781da5dc4cc8474b6c5a3818"},{url:"4.bundle.e2b360886a182844d8f4.js",revision:"7da2ec1f379e73f484b8172813d16661"},{url:"5.bundle.12fc2519aafdb405d653.js",revision:"80610b122730e6de031c0b21d996049a"},{url:"6.bundle.6f5815cf57fbe1d8258b.js",revision:"70eb18a11f61856870a319cfe13cee60"},{url:"7.bundle.e0f6dc35c1d075de8e46.js",revision:"449ce3f25112fda1632f399531c4bec5"},{url:"bundle.7c8d1a00fbf8d6f269b4.js",revision:"4d74c7a2d7dd5f7683f9d31bede772b6"},{url:"index.html",revision:"05b2bfea2ef962af5405ad3b29c38ce5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e4,purgeOnQuotaError:!0})]}),"GET")}));
