(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r);function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}n.default=function(){var t=i(Object(r.useState)(!1),2),n=t[0],e=t[1],a=i(Object(r.useState)(null),2),u=a[0],l=a[1];Object(r.useEffect)((function(){var t=function(t){t.preventDefault(),console.log("we are being triggered :D"),e(!0),l(t)};return window.addEventListener("beforeinstallprompt",t),function(){return window.removeEventListener("transitionend",t)}}),[]);return n?o.a.createElement("button",{className:"link-button button is-success","aria-label":"install app",title:"install app",onClick:function(t){t.preventDefault(),u&&u.prompt()},id:"installButton"},"install app"):null}}}]);