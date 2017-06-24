"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["static/css/main.93dd35c1.css","2a6da9aaf0605372e83ca81994a004f2"],["static/js/main.7ae829de.js","8fefc15a1f110c6a7d4d2fb41346779d"],["vs/base/worker/workerMain.js","9b8f46ce48056754ad5944553f6cf3f0"],["vs/basic-languages/src/bat.js","1b39e2bace19a63986f93b5d804c1fad"],["vs/basic-languages/src/coffee.js","591b54f8e3485a17c31b8ec9b557372b"],["vs/basic-languages/src/cpp.js","4c7c09ac60dfc942a99cd822afb1d60c"],["vs/basic-languages/src/csharp.js","7dfff52199f649f7c7cd8d4fe29e479c"],["vs/basic-languages/src/css.js","f350a559707b31c29498b37f687cc07a"],["vs/basic-languages/src/dockerfile.js","12aab564876d3ad28dd2ab8664ccb934"],["vs/basic-languages/src/fsharp.js","84301952cc86c1ce4ff90d17ecff6e2a"],["vs/basic-languages/src/go.js","a626b5bc1b5b59db6aef86cc15dc7a4d"],["vs/basic-languages/src/handlebars.js","712e24437a2606c043814d0adc473109"],["vs/basic-languages/src/html.js","a74a0a1b2da1e1845de400f99aa59b43"],["vs/basic-languages/src/ini.js","2658418db53d29f4a8d72c56e474bbdd"],["vs/basic-languages/src/jade.js","ab7f521a0d7b964b6344c5604b45d718"],["vs/basic-languages/src/java.js","2687e3ec9305f9e39489f521ebd81e5f"],["vs/basic-languages/src/less.js","4f7a5b91a7a78fc337137e52a920fe83"],["vs/basic-languages/src/lua.js","9e10b48afca71e58451b67e97ea8852f"],["vs/basic-languages/src/markdown.js","726735307a0f097629a417b08f03cce0"],["vs/basic-languages/src/objective-c.js","1597f7ca71867e2d3f83bde851ebfa59"],["vs/basic-languages/src/php.js","cf0eeda0f18f7006e0549ae290f5b95a"],["vs/basic-languages/src/postiats.js","b5f35f5abbff4ee6b9a784738ccf3b76"],["vs/basic-languages/src/powershell.js","3c13d5dba96dafb7bfc15a4727899de6"],["vs/basic-languages/src/python.js","0d1ba00d80da255b03719ceba5c51223"],["vs/basic-languages/src/r.js","9206cfe86720bc1d1329e763e72e978f"],["vs/basic-languages/src/razor.js","443de4f83690d5b1a6184797058ad470"],["vs/basic-languages/src/ruby.js","bff73bc5407a367d48eb42a851662d0b"],["vs/basic-languages/src/scss.js","4fea557f75dc092b516a04ad217dcdc3"],["vs/basic-languages/src/sql.js","a22653e04960b7cec65b03cd6513fda4"],["vs/basic-languages/src/swift.js","48e5ce028d8a3871595386b4b4227a8a"],["vs/basic-languages/src/vb.js","37a565aa83404a44bea68adc0c4c084f"],["vs/basic-languages/src/xml.js","ab1bd4d7ff1eba57557441090bf9fa1b"],["vs/basic-languages/src/yaml.js","ec4e362cd315a7e07eaf0d0c35323ad6"],["vs/editor/contrib/quickOpen/browser/symbol-sprite.svg","649fb0a55b0e0fc9d79e6b7872a14c10"],["vs/editor/contrib/suggest/browser/String_16x.svg","48e754cb54c78a85dcc9aaea9a27847e"],["vs/editor/contrib/suggest/browser/String_inverse_16x.svg","6e5c0ce7ec09969f07ea6ee078ef8ad6"],["vs/editor/editor.main.css","42a5a92ecebe605f75be155517302f01"],["vs/editor/editor.main.js","771fb279b74a17429837f25588d5de36"],["vs/editor/editor.main.nls.de.js","d186d532c3cbc61c168f2c262ea378df"],["vs/editor/editor.main.nls.es.js","64abbdfb5977134a094be94e846b4266"],["vs/editor/editor.main.nls.fr.js","d2b79442cf6d563b88f1a2095ee7696c"],["vs/editor/editor.main.nls.it.js","7e84a7e31ee1df46539d440a65ed106f"],["vs/editor/editor.main.nls.ja.js","95fd078ce1cbe25dc0090c5b355d184f"],["vs/editor/editor.main.nls.js","0c5f86ff7e6a4f99875c6f25d9d8c05b"],["vs/editor/editor.main.nls.ko.js","d56b2af38d3a1f917de770cdcb307bc7"],["vs/editor/editor.main.nls.ru.js","3efa3beee45bc7a84c8f2673709194f0"],["vs/editor/editor.main.nls.zh-cn.js","a1cea3d35ff591d8ee2d556f0c43d553"],["vs/editor/editor.main.nls.zh-tw.js","ef18c77ea7dd7a674a84cccc12f0c5ed"],["vs/language/css/cssMode.js","6a6bbeade9f15a44942303d59976cae9"],["vs/language/css/cssWorker.js","49400537fcac5a3919adb515ecc0098a"],["vs/language/html/htmlMode.js","f7adfb5cb922b4559ad566438160e64a"],["vs/language/html/htmlWorker.js","543c3bf396c563add97e9ac247743101"],["vs/language/json/jsonMode.js","c24ff70369a9be5645a182317db46f94"],["vs/language/json/jsonWorker.js","b01847dbf8a25a2c51c819563aad3f4c"],["vs/language/typescript/lib/typescriptServices.js","9c24f21fbb9a1fc33a44816d5932fac4"],["vs/language/typescript/src/mode.js","795c8718503244f287586384ffdfbe2e"],["vs/language/typescript/src/worker.js","0d025f1d34b57a7821d51a8b1c09c3ca"],["vs/loader.js","7bbdd9ad3da370f14fe85315b79133b3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,s,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var c=new Request(s,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(s);a||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(s=new URL("/Assembleash/index.html",self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});