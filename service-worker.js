if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return c[e]||(r=new Promise(async r=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=r}else importScripts(e),r()})),r.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},r=(r,c)=>{Promise.all(r.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(r)};self.define=(r,s,i)=>{c[r]||(c[r]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return c;case"module":return n;default:return e(r)}})).then(e=>{const r=i(...e);return c.default||(c.default=r),c})}))}}define("./service-worker.js",["./workbox-fe7d1311"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.bundle.a92b1127734c7fced1bd.js",revision:"422a7d55428a769862cd7cacee9213f3"},{url:"2.bundle.1d2af85c25007dc24416.js",revision:"9264874d8d9225484bfebfedde54bea7"},{url:"3.bundle.e635dac3b4820c175779.js",revision:"fe2b5f69d7f564e236cf06f4706a8361"},{url:"4.bundle.de1c43b889f830c5fe65.js",revision:"45f0c5471b1c25e10701dccbc01a531b"},{url:"5.bundle.129bd5ebf69b5418a440.js",revision:"5e0fa32e83362b7406c1ec26bacd97e8"},{url:"6.bundle.22fe47a8cd83cc590ac8.js",revision:"faeb8508c2bc86bf0a44aaf147e47c47"},{url:"bundle.3cab5ae720052c163a4d.js",revision:"ac0e8d077c178dfbcb1b8e0acd7166ef"},{url:"index.html",revision:"4f4e487edd172e46367b33b5738e2c7e"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e4,purgeOnQuotaError:!0})]}),"GET")}));
