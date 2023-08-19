!function(){"use strict";var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"encode",n="abcdefghijklmnopqrstuvwxyz1234567890 -",r="z1ntg4ihmwj5cr09byx8spl7ak6vo2q3eduf!$",i="";if("encode"==t&&""!=e)for(var o=e.length,a=0;a<o;a++){var c=n.indexOf(e[a]);i+=-1!==c?r[c]:e[a]}if("decode"==t&&""!=e)for(var u=e.length,s=0;s<u;s++){var l=e[s],f=r.indexOf(l);i+=-1!==f?n[f]:l}return i};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return(t=f(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),c=new _(r||[]);return i(a,"_invoke",{value:S(e,n,c)}),a}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var d={};function h(){}function v(){}function y(){}var m={};l(m,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(E([])));b&&b!==n&&r.call(b,a)&&(m=b);var w=y.prototype=h.prototype=Object.create(m);function x(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,n){function o(i,a,c,u){var s=p(e[i],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&r.call(f,"__await")?n.resolve(f.__await).then((function(e){o("next",e,c,u)}),(function(e){o("throw",e,c,u)})):n.resolve(f).then((function(e){l.value=e,c(l)}),(function(e){return o("throw",e,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(e,t){function r(){return new n((function(n,r){o(e,t,n,r)}))}return a=a?a.then(r,r):r()}})}function S(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return P()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=p(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=p(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function E(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},x(k.prototype),l(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new k(f(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(w),l(w,s,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=E,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function u(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){u(o,r,i,a,c,"next",e)}function c(e){u(o,r,i,a,c,"throw",e)}a(void 0)}))}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function f(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,n||"default");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}var p=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.prefix=e,this.products=n,this.info=window["".concat(this.prefix,"License")]||window["".concat(this.prefix,"Layer")]}var r,i,a,u,f,p,d,h,v;return r=t,i=[{key:"initialize",value:function(){var t=this,n=document.querySelector(".".concat(this.prefix,"_license_popup .popupWrapper"));if(n){this.syncLicense(),this.endpoint="https://api.bplugins.com/wp-json/license/v1/gumroad",this.modal=n,this.agreed=!1;var r=document.querySelector(".".concat(this.prefix,"_modal_opener")),i=n.querySelector(".closer"),o=n.querySelector(".agree"),a=n.querySelector(".btn-activate"),u=n.querySelector(".btn-deactivate"),l=n.querySelector(".bpl_loader");this.headers={"content-Type":"application/json"},r||console.error("opener not found"),i||console.error("closer not found"),l||console.error("loader not found"),null==r||r.addEventListener("click",(function(e){e.preventDefault(),n.style.display="block"})),null==i||i.addEventListener("click",(function(e){e.preventDefault(),n.style.display="none"})),null==o||o.addEventListener("click",(function(){t.agreed=null==o?void 0:o.checked,a&&(a.disabled=!(null!=o&&o.checked))})),null==a||a.addEventListener("click",function(){var r=s(c().mark((function r(i){var o,u,s;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i.preventDefault(),l.style.display="inline-block",a.disabled=!0,null==(o=n.querySelector("input.license_key"))||!o.value){r.next=12;break}return s=null!=o&&null!==(u=o.value)&&void 0!==u&&u.includes("$")?e(o.value,"decode"):null==o?void 0:o.value,r.next=8,t.activeLicense(s,t.products);case 8:r.sent&&t.setNotice("notice-success","License key Activated!, Thank you"),r.next=13;break;case 12:t.setNotice("notice-warning","Please input a license key");case 13:a.disabled=!1,l.style.display="none";case 15:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()),null==u||u.addEventListener("click",function(){var r=s(c().mark((function r(i){var o,a,s;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i.preventDefault(),l.style.display="inline-block",u.disabled=!0,null==(o=n.querySelector("input.license_key"))||!o.value){r.next=10;break}return s=null!=o&&null!==(a=o.value)&&void 0!==a&&a.includes("$")?e(o.value,"decode"):null==o?void 0:o.value,r.next=8,t.deactiveLicense(s,t.products);case 8:r.sent&&t.setNotice("notice-success","License key deactivated.");case 10:u.disabled=!1,l.style.display="none";case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}else console.warn("modal undefined")}},{key:"serverHandler",value:(v=s(c().mark((function e(t){var n,r,i,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o({quantity:1,website:null===(n=window.location)||void 0===n?void 0:n.origin,product:this.prefix,email:null===(r=this.info)||void 0===r?void 0:r.email,action:"add"},t),e.next=3,fetch(this.endpoint,{method:"POST",headers:{"content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){return e}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{key:"activeLicense",value:(h=s(c().mark((function t(n){var r,i,o,a,u,s,l,f,p,d,h,v;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.verifyGumroad(n);case 2:if(r=t.sent,i=r.permalink,o=r.success,a=r.quantity,u=r.isAppSumo,!o){t.next=27;break}return t.next=10,this.serverHandler({license_key:n,quantity:a,isAppSumo:u});case 10:if(s=t.sent,l=s.active,f=s.message,!l){t.next=24;break}return(h=new FormData).append("action","".concat(this.prefix,"_active_license_key")),h.append("data",e(JSON.stringify({activated:!0,key:n,permalink:i,time:(new Date).getTime()+""}))),h.append("nonce",null===(p=this.info)||void 0===p?void 0:p.nonce),t.next=20,fetch(null===(d=this.info)||void 0===d?void 0:d.ajaxURL,{method:"POST",body:h}).then((function(e){return e.json()})).then((function(e){return e}));case 20:return v=t.sent,t.abrupt("return",null==v?void 0:v.success);case 24:this.setNotice("notice-warning",f);case 25:t.next=28;break;case 27:this.setNotice("notice-warning","Invalid License key");case 28:case"end":return t.stop()}}),t,this)}))),function(e){return h.apply(this,arguments)})},{key:"syncLicense",value:(d=s(c().mark((function e(){var t,n,r,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.location.origin.replace(/(^\w+:|^)\/\//,"").replace("/",""),(r=new FormData).append("action","".concat(this.prefix,"_sync_license_key")),r.append("website",n),r.append("nonce",null===(t=this.info)||void 0===t?void 0:t.nonce),e.prev=5,e.next=8,fetch(null===(i=this.info)||void 0===i?void 0:i.ajaxURL,{method:"POST",body:r}).then((function(e){return e.json()})).then((function(e){}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,this,[[5,10]])}))),function(){return d.apply(this,arguments)})},{key:"verifyLicense",value:(p=s(c().mark((function t(n){var r,i,o,a,u,s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.verifyGumroad(n);case 2:return i=t.sent,o=i.permalink,a=i.success,(u=new FormData).append("action","".concat(this.prefix,"_active_license_key")),u.append("data",e(JSON.stringify({activated:a,key:n,permalink:o,time:(new Date).getTime()+""}))),u.append("nonce",null===(r=this.info)||void 0===r?void 0:r.nonce),t.prev=9,t.next=12,fetch(null===(s=this.info)||void 0===s?void 0:s.ajaxURL,{method:"POST",body:u}).then((function(e){return e.json()})).then((function(e){return e}));case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(9),console.log(t.t0.message);case 17:case"end":return t.stop()}}),t,this,[[9,14]])}))),function(e){return p.apply(this,arguments)})},{key:"deactiveLicense",value:(f=s(c().mark((function t(n){var r,i,o,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.serverHandler({license_key:n,action:"deactive"});case 2:if(!t.sent){t.next=14;break}return(o=new FormData).append("action","".concat(this.prefix,"_active_license_key")),o.append("data",this.agreed?"{}":e(JSON.stringify({activated:!1,key:n,permalink:""}))),o.append("nonce",null===(r=this.info)||void 0===r?void 0:r.nonce),t.next=10,fetch(null===(i=this.info)||void 0===i?void 0:i.ajaxURL,{method:"POST",body:o}).then((function(e){return e.json()})).then((function(e){return e}));case 10:return a=t.sent,t.abrupt("return",null==a?void 0:a.success);case 14:this.setNotice("notice-warning","something went wrong!");case 15:case"end":return t.stop()}}),t,this)}))),function(e){return f.apply(this,arguments)})},{key:"verifyGumroad",value:(u=s(c().mark((function t(r){var i,a,u,l,f,p,d,h,v,y,m,g,b,w,x;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(p={},d=r.includes("$")?e(r,"decode"):r,h=function(){var e=s(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,fetch("https://api.gumroad.com/v2/licenses/verify",{method:"POST",headers:{"content-Type":"application/json"},body:JSON.stringify(o(o({},t),{},{license_key:d}))}).then((function(e){return e.json()})).then((function(e){return e}));case 3:return(r=e.sent).success&&(n=r),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!Array.isArray(this.products)){t.next=26;break}v=n(this.products),t.prev=5,v.s();case 7:if((y=v.n()).done){t.next=16;break}return m=y.value,t.next=11,h({product_permalink:m});case 11:if(!(p=t.sent).success){t.next=14;break}return t.abrupt("break",16);case 14:t.next=7;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(5),v.e(t.t0);case 21:return t.prev=21,v.f(),t.finish(21);case 24:t.next=36;break;case 26:t.t1=c().keys(this.products);case 27:if((t.t2=t.t1()).done){t.next=36;break}return g=t.t2.value,t.next=31,h({product_permalink:g,product_id:this.products[g]});case 31:if(!(p=t.sent).success){t.next=34;break}return t.abrupt("break",36);case 34:t.next=27;break;case 36:return b=this.getQuantity(p),w=(null===(i=p)||void 0===i||null===(a=i.purchase)||void 0===a||null===(u=a.product_name)||void 0===u?void 0:u.includes("Sumo"))||!1,x=null===(l=p)||void 0===l||null===(f=l.purchase)||void 0===f?void 0:f.permalink,t.abrupt("return",{quantity:b,success:p.success,permalink:x,isAppSumo:w});case 40:case"end":return t.stop()}}),t,this,[[5,18,21,24]])}))),function(e){return u.apply(this,arguments)})},{key:"setNotice",value:function(e,t){var n=this.modal.querySelector(".license_notice"),r=document.createElement("div");r.classList="notice ".concat(e),r.innerText=t,n.appendChild(r),setTimeout((function(){r.remove(),"notice-success"==e&&location.reload()}),2e3)}},{key:"getQuantity",value:function(e){var t;return{"(Single Site)":1,"Single Site License":1,"Single Site ":1,"(3 Sites)":3,"3 Sites License":3,"( 3 Sites)":3,"3 Sites":3,"(3 Sites License)":3,"(5 Sites)":5,"5 Sites":5,"(Developer  - Unlimited)":1e3,"Developer / Unlimited":1e3,"Developer / Unlimited sites":1e3,"Developer/Agency license for Unlimited Sites":1e3,"Developer/Agency License - Unlimited Site":1e3,"(Developer)":1e3,Agency:1e3}[null==e||null===(t=e.purchase)||void 0===t?void 0:t.variants]||1}}],i&&l(r.prototype,i),a&&l(r,a),Object.defineProperty(r,"prototype",{writable:!1}),t}();window.LicenseHandler=p}();
//# sourceMappingURL=license.js.map