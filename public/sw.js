if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"Nz8NTISJaobyHkhjV0jdf"},{url:"/_next/static/Nz8NTISJaobyHkhjV0jdf/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/Nz8NTISJaobyHkhjV0jdf/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/Nz8NTISJaobyHkhjV0jdf/pages/404.js",revision:"fa7230445448e8f13ea6b961ac3ba521"},{url:"/_next/static/Nz8NTISJaobyHkhjV0jdf/pages/_app.js",revision:"25a98189d1ab05ff5963da65b076a684"},{url:"/_next/static/Nz8NTISJaobyHkhjV0jdf/pages/_error.js",revision:"2cea0a75989978224f40beec015b3316"},{url:"/_next/static/Nz8NTISJaobyHkhjV0jdf/pages/about.js",revision:"ac9f842ee8e3f35b2307ffab81cc561e"},{url:"/_next/static/Nz8NTISJaobyHkhjV0jdf/pages/index.js",revision:"7d0855670ca9de7fef3ff28cbbe002c6"},{url:"/_next/static/Nz8NTISJaobyHkhjV0jdf/pages/photos.js",revision:"47fe8337aafa389075902b9af00aa8bb"},{url:"/_next/static/Nz8NTISJaobyHkhjV0jdf/pages/posts/%5Bid%5D.js",revision:"45aa8a1e9d4588e67528750953bb2d92"},{url:"/_next/static/chunks/72e4b401ae71cbba089a5fb0386396abea68d2ee.2a51b46fd8193a5d1b11.js",revision:"6bf8402332e4692797ecd94f7663d394"},{url:"/_next/static/chunks/b30b6be69e843b3a721f8d9bf917f05e32773f4d.361a32b265576380e49d.js",revision:"f80148455554f4be9a015155e8394204"},{url:"/_next/static/chunks/framework.c8d289f8b96717e32d7a.js",revision:"8dbfd54516c12914d3e0cd417cd67882"},{url:"/_next/static/runtime/main-09b2c928f0f0164b61eb.js",revision:"03ef993896fb8d4623b9c71d9a972d01"},{url:"/_next/static/runtime/polyfills-2622751f1b7992ef52a0.js",revision:"b3e302105620b19c15002be130ef0aaa"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/icons/icon-128x128.png",revision:"db7481a04968b3ad4716436d30b3e409"},{url:"/icons/icon-144x144.png",revision:"689a1926530ed6ca26db537029c1dfd7"},{url:"/icons/icon-152x152.png",revision:"98af072da209b3b297308717b06ea86c"},{url:"/icons/icon-192x192.png",revision:"7ab8c82581552c7558c5b009ffcb3cd2"},{url:"/icons/icon-384x384.png",revision:"aae6d1f552c78e06bf42aae2462a98fa"},{url:"/icons/icon-512x512.png",revision:"837ab4469c705c188326cec571ecb227"},{url:"/icons/icon-72x72.png",revision:"cb6e3fb9db7db52f0986da1ff9bab188"},{url:"/icons/icon-96x96.png",revision:"7d8348b60cdd985bd24b48cb56855c1a"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/vercel.svg",revision:"0222c3eef0be0734c8cd707b37c55d7e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));