if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return d[e]||(r=new Promise(async r=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=r}else importScripts(e),r()})),r.then(()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]})},r=(r,d)=>{Promise.all(r.map(e)).then(e=>d(1===e.length?e[0]:e))},d={require:Promise.resolve(r)};self.define=(r,s,n)=>{d[r]||(d[r]=Promise.resolve().then(()=>{let d={};const i={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return d;case"module":return i;default:return e(r)}})).then(e=>{const r=n(...e);return d.default||(d.default=r),d})}))}}define("./service-worker.js",["./workbox-fe7d1311"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"1.bundle.7c816641c9225b05ca6f.js",revision:"70b6d2ab53679bbe82f15ef51322d924"},{url:"2.bundle.37b0d0782a5f8f6c5c58.js",revision:"0ed70d5807897e2042a39404d7efed48"},{url:"3.bundle.6d4529e4e64e7df3cde8.js",revision:"58cde9c20b2b57d677bf366439f3e2bd"},{url:"4.bundle.15365edc55c6b6102c62.js",revision:"314891d11681c4712ded5284db225d45"},{url:"5.bundle.b598eec4dda193a548e8.js",revision:"1be3c510b217f40cf427de2b90fec3a9"},{url:"6.bundle.2f9f7d0dcf48d728a1f9.js",revision:"82d93a048ad89e283dff3111648c5252"},{url:"bundle.ab1a115e3d5ead509335.js",revision:"9df6f99bd2d1179b281850b850f9c4a4"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e4,purgeOnQuotaError:!0})]}),"GET")}));
