if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return c[e]||(r=new Promise(async r=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=r}else importScripts(e),r()})),r.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},r=(r,c)=>{Promise.all(r.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(r)};self.define=(r,s,i)=>{c[r]||(c[r]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return c;case"module":return n;default:return e(r)}})).then(e=>{const r=i(...e);return c.default||(c.default=r),c})}))}}define("./service-worker.js",["./workbox-fe7d1311"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"1.bundle.ab843f496365f83d50cd.js",revision:"efea871345bc7a78fb8f1b651589ed19"},{url:"2.bundle.fad991e65e63b273de59.js",revision:"6c2dca208421358f3403a1a7902f5230"},{url:"3.bundle.6e4f69045e815863a708.js",revision:"c54c472519149e34aacb804965eec8b8"},{url:"4.bundle.5fb81e520e24ad1b3ac8.js",revision:"8c5b1f3b6a2ca9ce1aaa1cd4efd54873"},{url:"5.bundle.cb3aeb0d2ad06874423a.js",revision:"24ddc4043b70c4520a58f0579c32fc7e"},{url:"6.bundle.e03ac47045822d86f3bb.js",revision:"a148840a8caaabdd06a3ae521a20a5ce"},{url:"bundle.a02274f451183c11500f.js",revision:"3dc6154d1b7965215e9d8407cb12b491"},{url:"index.html",revision:"bc5006ced896feec76c9900e1cb8b65e"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e4,purgeOnQuotaError:!0})]}),"GET")}));
