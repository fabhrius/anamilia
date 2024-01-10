(()=>{var e={4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},4578:()=>{},6232:()=>{},7732:()=>{},4624:()=>{}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.element;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}const n=window.wp.i18n,o=window.wc.wcSettings;var l;const a=(0,o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),s=a.pluginUrl+"images/",c=(a.pluginUrl,a.buildPhase,null===(l=o.STORE_PAGES.shop)||void 0===l||l.permalink,o.STORE_PAGES.checkout.id,o.STORE_PAGES.checkout.permalink,o.STORE_PAGES.privacy.permalink,o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink,o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id,o.STORE_PAGES.cart.permalink,o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:(0,o.getSetting)("wpLoginUrl","/wp-login.php"),(0,o.getSetting)("localPickupEnabled",!1),(0,o.getSetting)("countries",{})),i=(0,o.getSetting)("countryData",{}),u=(Object.fromEntries(Object.keys(i).filter((e=>!0===i[e].allowBilling)).map((e=>[e,c[e]||""]))),Object.fromEntries(Object.keys(i).filter((e=>!0===i[e].allowBilling)).map((e=>[e,i[e].states||[]]))),Object.fromEntries(Object.keys(i).filter((e=>!0===i[e].allowShipping)).map((e=>[e,c[e]||""]))),Object.fromEntries(Object.keys(i).filter((e=>!0===i[e].allowShipping)).map((e=>[e,i[e].states||[]]))),Object.fromEntries(Object.keys(i).map((e=>[e,i[e].locale||[]]))),({imageUrl:t=`${s}/block-error.svg`,header:r=(0,n.__)("Oops!","woo-gutenberg-products-block"),text:o=(0,n.__)("There was an error loading the content.","woo-gutenberg-products-block"),errorMessage:l,errorMessagePrefix:a=(0,n.__)("Error:","woo-gutenberg-products-block"),button:c,showErrorBlock:i=!0})=>i?(0,e.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&(0,e.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),(0,e.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&(0,e.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),o&&(0,e.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},o),l&&(0,e.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},a?a+" ":"",l),c&&(0,e.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},c))):null);r(4578);class p extends e.Component{constructor(...e){var r,n,o;super(...e),r=this,o={errorMessage:"",hasError:!1},(n=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}(n="state"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}static getDerivedStateFromError(t){return void 0!==t.statusText&&void 0!==t.status?{errorMessage:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("strong",null,t.status),": ",t.statusText),hasError:!0}:{errorMessage:t.message,hasError:!0}}render(){const{header:t,imageUrl:r,showErrorMessage:n=!0,showErrorBlock:o=!0,text:l,errorMessagePrefix:a,renderError:s,button:c}=this.props,{errorMessage:i,hasError:p}=this.state;return p?"function"==typeof s?s({errorMessage:i}):(0,e.createElement)(u,{showErrorBlock:o,errorMessage:n?i:null,header:t,imageUrl:r,text:l,errorMessagePrefix:a,button:c}):this.props.children}}const m=p,d=[".wp-block-woocommerce-cart"],g=({Block:t,containers:r,getProps:n=(()=>({})),getErrorBoundaryProps:o=(()=>({}))})=>{0!==r.length&&Array.prototype.forEach.call(r,((r,l)=>{const a=n(r,l),s=o(r,l),c={...r.dataset,...a.attributes||{}};(({Block:t,container:r,attributes:n={},props:o={},errorBoundaryProps:l={}})=>{(0,e.render)((0,e.createElement)(m,{...l},(0,e.createElement)(e.Suspense,{fallback:(0,e.createElement)("div",{className:"wc-block-placeholder"})},t&&(0,e.createElement)(t,{...o,attributes:n}))),r,(()=>{r.classList&&r.classList.remove("is-loading")}))})({Block:t,container:r,props:a,attributes:c,errorBoundaryProps:s})}))},b=window.wc.wcBlocksData,y=window.wp.data,f=window.wp.isShallowEqual;var w=r.n(f);const _=(0,e.createContext)("page"),E=(_.Provider,(t,r,n)=>{const o=(0,e.useContext)(_);n=n||o;const l=(0,y.useSelect)((e=>e(b.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,t,r)),[n,t]),{setQueryValue:a}=(0,y.useDispatch)(b.QUERY_STATE_STORE_KEY);return[l,(0,e.useCallback)((e=>{a(n,t,e)}),[n,t,a])]});var h=r(4184),k=r.n(h);const v=({label:t,screenReaderLabel:r,wrapperElement:n,wrapperProps:o={}})=>{let l;const a=null!=t,s=null!=r;return!a&&s?(l=n||"span",o={...o,className:k()(o.className,"screen-reader-text")},(0,e.createElement)(l,{...o},r)):(l=n||e.Fragment,a&&s&&t!==r?(0,e.createElement)(l,{...o},(0,e.createElement)("span",{"aria-hidden":"true"},t),(0,e.createElement)("span",{className:"screen-reader-text"},r)):(0,e.createElement)(l,{...o},t))},S=e=>"boolean"==typeof e,A=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function P(e,t){return A(e)&&t in e}const O=e=>P(e,"count")&&P(e,"description")&&P(e,"id")&&P(e,"name")&&P(e,"parent")&&P(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,N=e=>P(e,"attribute")&&P(e,"operator")&&P(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every((e=>"string"==typeof e)),x=e=>Array.isArray(e)&&e.every(N),j=window.wp.url,R=(0,o.getSettingWithCoercion)("isRenderingPhpTemplate",!1,S);function B(e){R?((e=e.replace(/(?:query-(?:\d+-)?page=(\d+))|(?:page\/(\d+))/g,"")).endsWith("?")&&(e=e.slice(0,-1)),window.location.href=e):window.history.replaceState({},"",e)}r(7732);const C=({children:t})=>(0,e.createElement)("div",{className:"wc-block-filter-title-placeholder"},t);r(4624);const T=(0,o.getSetting)("attributes",[]).reduce(((e,t)=>{const r=(n=t)&&n.attribute_name?{id:parseInt(n.attribute_id,10),name:n.attribute_name,taxonomy:"pa_"+n.attribute_name,label:n.attribute_label}:null;var n;return r&&r.id&&e.push(r),e}),[]),L=window.wc.priceFormat;r(6232);const F=({text:t,screenReaderText:r="",element:n="li",className:o="",radius:l="small",children:a=null,...s})=>{const c=n,i=k()(o,"wc-block-components-chip","wc-block-components-chip--radius-"+l),u=Boolean(r&&r!==t);return(0,e.createElement)(c,{className:i,...s},(0,e.createElement)("span",{"aria-hidden":u,className:"wc-block-components-chip__text"},t),u&&(0,e.createElement)("span",{className:"screen-reader-text"},r),a)},M=function(t){let{icon:r,size:n=24,...o}=t;return(0,e.cloneElement)(r,{width:n,height:n,...o})},Q=window.wp.primitives,G=(0,e.createElement)(Q.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(Q.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),U=({ariaLabel:t="",className:r="",disabled:o=!1,onRemove:l=(()=>{}),removeOnAnyClick:a=!1,text:s,screenReaderText:c="",...i})=>{const u=a?"span":"button";if(!t){const e=c&&"string"==typeof c?c:s;t="string"!=typeof e?/* translators: Remove chip. */
(0,n.__)("Remove","woo-gutenberg-products-block"):(0,n.sprintf)(/* translators: %s text of the chip to remove. */
(0,n.__)('Remove "%s"',"woo-gutenberg-products-block"),e)}const p={"aria-label":t,disabled:o,onClick:l,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||l()}},m=a?p:{},d=a?{"aria-hidden":!0}:p;return(0,e.createElement)(F,{...i,...m,className:k()(r,"is-removable"),element:a?"button":i.element,screenReaderText:c,text:s},(0,e.createElement)(u,{className:"wc-block-components-chip__remove",...d},(0,e.createElement)(M,{className:"wc-block-components-chip__remove-icon",icon:G,size:16})))},$=e=>"string"==typeof e,q=JSON.parse('{"Y4":{"P":{"Z":"list"},"D":{"Z":3}}}'),D=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?(0,n.sprintf)(/* translators: %1$s min price, %2$s max price */
(0,n.__)("Between %1$s and %2$s","woo-gutenberg-products-block"),(0,L.formatPrice)(e),(0,L.formatPrice)(t)):Number.isFinite(e)?(0,n.sprintf)(/* translators: %s min price */
(0,n.__)("From %s","woo-gutenberg-products-block"),(0,L.formatPrice)(e)):(0,n.sprintf)(/* translators: %s max price */
(0,n.__)("Up to %s","woo-gutenberg-products-block"),(0,L.formatPrice)(t)),Y=({type:t,name:r,prefix:o="",removeCallback:l=(()=>null),showLabel:a=!0,displayStyle:s})=>{const c=o?(0,e.createElement)(e.Fragment,null,o," ",r):r,i=(0,n.sprintf)(/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
(0,n.__)("Remove %s filter","woo-gutenberg-products-block"),r);return(0,e.createElement)("li",{className:"wc-block-active-filters__list-item",key:t+":"+r},a&&(0,e.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===s?(0,e.createElement)(U,{element:"span",text:c,onRemove:l,radius:"large",ariaLabel:i}):(0,e.createElement)("span",{className:"wc-block-active-filters__list-item-name"},(0,e.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:l},(0,e.createElement)(M,{className:"wc-block-components-chip__remove-icon",icon:G,size:16}),(0,e.createElement)(v,{screenReaderLabel:i})),c))},z=(...e)=>{if(!window)return;const t=window.location.href,r=(0,j.getQueryArgs)(t),n=(0,j.removeQueryArgs)(t,...Object.keys(r));e.forEach((e=>{if("string"==typeof e)return delete r[e];if("object"==typeof e){const t=Object.keys(e)[0],n=r[t].toString().split(",");r[t]=n.filter((r=>r!==e[t])).join(",")}}));const o=Object.fromEntries(Object.entries(r).filter((([,e])=>e)));B((0,j.addQueryArgs)(n,o))},K=["min_price","max_price","rating_filter","filter_","query_type_"],V=e=>{let t=!1;for(let r=0;K.length>r;r++){const n=K[r];if(n===e.substring(0,n.length)){t=!0;break}}return t};function W(t){const r=(0,e.useRef)(t);return w()(t,r.current)||(r.current=t),r.current}const I=window.wp.htmlEntities;var Z=function(e){return function(t,r,n){return e(t,r,n)*n}},J=function(e,t){if(e)throw Error("Invalid sort config: "+t)},H=function(e){var t=e||{},r=t.asc,n=t.desc,o=r?1:-1,l=r||n;return J(!l,"Expected `asc` or `desc` property"),J(r&&n,"Ambiguous object with `asc` and `desc` config properties"),{order:o,sortBy:l,comparer:e.comparer&&Z(e.comparer)}};function X(e,t,r){if(void 0===e||!0===e)return function(e,n){return t(e,n,r)};if("string"==typeof e)return J(e.includes("."),"String syntax not allowed for nested properties."),function(n,o){return t(n[e],o[e],r)};if("function"==typeof e)return function(n,o){return t(e(n),e(o),r)};if(Array.isArray(e)){var n=function(e){return function t(r,n,o,l,a,s,c){var i,u;if("string"==typeof r)i=s[r],u=c[r];else{if("function"!=typeof r){var p=H(r);return t(p.sortBy,n,o,p.order,p.comparer||e,s,c)}i=r(s),u=r(c)}var m=a(i,u,l);return(0===m||null==i&&null==u)&&n.length>o?t(n[o],n,o+1,l,a,s,c):m}}(t);return function(o,l){return n(e[0],e,1,r,t,o,l)}}var o=H(e);return X(o.sortBy,o.comparer||t,o.order)}var ee=function(e,t,r,n){return Array.isArray(t)?(Array.isArray(r)&&r.length<2&&(r=r[0]),t.sort(X(r,n,e))):t};function te(e){var t=Z(e.comparer);return function(r){var n=Array.isArray(r)&&!e.inPlaceSorting?r.slice():r;return{asc:function(e){return ee(1,n,e,t)},desc:function(e){return ee(-1,n,e,t)},by:function(e){return ee(1,n,e,t)}}}}var re=function(e,t,r){return null==e?r:null==t?-r:typeof e!=typeof t?typeof e<typeof t?-1:1:e<t?-1:e>t?1:0},ne=te({comparer:re});te({comparer:re,inPlaceSorting:!0});const oe=({attributeObject:t,slugs:r=[],operator:l="in",displayStyle:a,isLoadingCallback:s})=>{const{results:c,isLoading:i}=(t=>{const{namespace:r,resourceName:n,resourceValues:o=[],query:l={},shouldSelect:a=!0}=t;if(!r||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const s=(0,e.useRef)({results:[],isLoading:!0}),c=W(l),i=W(o),u=(()=>{const[,t]=(0,e.useState)();return(0,e.useCallback)((e=>{t((()=>{throw e}))}),[])})(),p=(0,y.useSelect)((e=>{if(!a)return null;const t=e(b.COLLECTIONS_STORE_KEY),o=[r,n,c,i],l=t.getCollectionError(...o);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");u(l)}return{results:t.getCollection(...o),isLoading:!t.hasFinishedResolution("getCollection",o)}}),[r,n,i,c,a]);return null!==p&&(s.current=p),s.current})({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[t.id]}),[u,p]=E("attributes",[]);if((0,e.useEffect)((()=>{s(i)}),[i,s]),!(Array.isArray(c)&&(m=c,Array.isArray(m)&&m.every(O))&&x(u)))return null;var m;const d=t.label,g=(0,o.getSettingWithCoercion)("isRenderingPhpTemplate",!1,S);return(0,e.createElement)("li",null,(0,e.createElement)("span",{className:"wc-block-active-filters__list-item-type"},d,":"),(0,e.createElement)("ul",null,r.map(((r,o)=>{const s=c.find((e=>e.slug===r));if(!s)return null;let m="";return o>0&&"and"===l&&(m=(0,e.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},(0,n.__)("All","woo-gutenberg-products-block"))),Y({type:d,name:(0,I.decodeEntities)(s.name||r),prefix:m,isLoading:i,removeCallback:()=>{const e=u.find((({attribute:e})=>e===`pa_${t.name}`));1===(null==e?void 0:e.slug.length)?z(`query_type_${t.name}`,`filter_${t.name}`):z({[`filter_${t.name}`]:r}),g||((e=[],t,r,n="")=>{const o=e.filter((e=>e.attribute===r.taxonomy)),l=o.length?o[0]:null;if(!(l&&l.slug&&Array.isArray(l.slug)&&l.slug.includes(n)))return;const a=l.slug.filter((e=>e!==n)),s=e.filter((e=>e.attribute!==r.taxonomy));a.length>0&&(l.slug=a.sort(),s.push(l)),t(ne(s).asc("attribute"))})(u,p,t,r)},showLabel:!1,displayStyle:a})}))))},le=({displayStyle:t,isLoading:r})=>r?(0,e.createElement)(e.Fragment,null,[...Array("list"===t?2:3)].map(((r,n)=>(0,e.createElement)("li",{className:"list"===t?"show-loading-state-list":"show-loading-state-chips",key:n},(0,e.createElement)("span",{className:"show-loading-state__inner"}))))):null,ae=(0,e.createContext)({});(e=>{const t=document.body.querySelectorAll(d.join(",")),{Block:r,getProps:n,getErrorBoundaryProps:o,selector:l}=e;(({Block:e,getProps:t,getErrorBoundaryProps:r,selector:n,wrappers:o})=>{const l=document.body.querySelectorAll(n);o&&o.length>0&&Array.prototype.filter.call(l,(e=>!((e,t)=>Array.prototype.some.call(t,(t=>t.contains(e)&&!t.isSameNode(e))))(e,o))),g({Block:e,containers:l,getProps:t,getErrorBoundaryProps:r})})({Block:r,getProps:n,getErrorBoundaryProps:o,selector:l,wrappers:t}),Array.prototype.forEach.call(t,(t=>{t.addEventListener("wc-blocks_render_blocks_frontend",(()=>{(({Block:e,getProps:t,getErrorBoundaryProps:r,selector:n,wrapper:o})=>{const l=o.querySelectorAll(n);g({Block:e,containers:l,getProps:t,getErrorBoundaryProps:r})})({...e,wrapper:t})}))}))})({selector:".wp-block-woocommerce-active-filters",Block:({attributes:t,isEditor:r=!1})=>{const l=(()=>{const{wrapper:t}=(0,e.useContext)(ae);return e=>{t&&t.current&&(t.current.hidden=!e)}})(),a=function(){const t=(0,e.useRef)(!1);return(0,e.useEffect)((()=>(t.current=!0,()=>{t.current=!1})),[]),(0,e.useCallback)((()=>t.current),[])}()(),s=(0,o.getSettingWithCoercion)("isRenderingPhpTemplate",!1,S),[c,i]=(0,e.useState)(!0),u=(()=>{if(!window)return!1;const e=window.location.href,t=(0,j.getQueryArgs)(e),r=Object.keys(t);let n=!1;for(let e=0;r.length>e;e++){const t=r[e];if(V(t)){n=!0;break}}return n})()&&!r&&c,[p,m]=E("attributes",[]),[d,g]=E("stock_status",[]),[b,y]=E("min_price"),[f,w]=E("max_price"),[_,h]=E("rating"),P=(0,o.getSetting)("stockStatusOptions",[]),O=(0,o.getSetting)("attributes",[]),N=(0,e.useMemo)((()=>{if(u||0===d.length||(r=d,!Array.isArray(r)||!r.every((e=>["instock","outofstock","onbackorder"].includes(e))))||!(e=>A(e)&&Object.keys(e).every((e=>["instock","outofstock","onbackorder"].includes(e))))(P))return null;var r;const o=(0,n.__)("Stock Status","woo-gutenberg-products-block");return(0,e.createElement)("li",null,(0,e.createElement)("span",{className:"wc-block-active-filters__list-item-type"},o,":"),(0,e.createElement)("ul",null,d.map((e=>Y({type:o,name:P[e],removeCallback:()=>{if(z({filter_stock_status:e}),!s){const t=d.filter((t=>t!==e));g(t)}},showLabel:!1,displayStyle:t.displayStyle})))))}),[u,P,d,g,t.displayStyle,s]),R=(0,e.useMemo)((()=>u||!Number.isFinite(b)&&!Number.isFinite(f)?null:Y({type:(0,n.__)("Price","woo-gutenberg-products-block"),name:D(b,f),removeCallback:()=>{z("max_price","min_price"),s||(y(void 0),w(void 0))},displayStyle:t.displayStyle})),[u,b,f,t.displayStyle,y,w,s]),L=(0,e.useMemo)((()=>!x(p)&&a||!p.length&&!(e=>{if(!window)return!1;const t=e.map((e=>`filter_${e.attribute_name}`)),r=window.location.href,n=(0,j.getQueryArgs)(r),o=Object.keys(n);let l=!1;for(let e=0;o.length>e;e++){const r=o[e];if(t.includes(r)){l=!0;break}}return l})(O)?(c&&i(!1),null):p.map((r=>{const n=(e=>{if(e)return T.find((t=>t.taxonomy===e))})(r.attribute);return n?(0,e.createElement)(oe,{attributeObject:n,displayStyle:t.displayStyle,slugs:r.slug,key:r.attribute,operator:r.operator,isLoadingCallback:i}):(c&&i(!1),null)}))),[p,a,O,c,t.displayStyle]);(0,e.useEffect)((()=>{var e;if(!s)return;if(_.length&&_.length>0)return;const t=null===("rating_filter",e=window?(0,j.getQueryArg)(window.location.href,"rating_filter"):null)||void 0===e?void 0:e.toString();t&&h(t.split(","))}),[s,_,h]);const F=(0,e.useMemo)((()=>{if(u||0===_.length||(r=_,!Array.isArray(r)||!r.every((e=>["1","2","3","4","5"].includes(e)))))return null;var r;const o=(0,n.__)("Rating","woo-gutenberg-products-block");return(0,e.createElement)("li",null,(0,e.createElement)("span",{className:"wc-block-active-filters__list-item-type"},o,":"),(0,e.createElement)("ul",null,_.map((e=>Y({type:o,name:(0,n.sprintf)(/* translators: %s is referring to the average rating value */
(0,n.__)("Rated %s out of 5","woo-gutenberg-products-block"),e),removeCallback:()=>{if(z({rating_filter:e}),!s){const t=_.filter((t=>t!==e));h(t)}},showLabel:!1,displayStyle:t.displayStyle})))))}),[u,_,h,t.displayStyle,s]);if(!u&&!(p.length>0||d.length>0||_.length>0||Number.isFinite(b)||Number.isFinite(f))&&!r)return l(!1),null;const M=`h${t.headingLevel}`,Q=(0,e.createElement)(M,{className:"wc-block-active-filters__title"},t.heading),G=u?(0,e.createElement)(C,null,Q):Q;if(!(0,o.getSettingWithCoercion)("hasFilterableProducts",!1,S))return l(!1),null;l(!0);const U=k()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle,"wc-block-active-filters--loading":u});return(0,e.createElement)(e.Fragment,null,!r&&t.heading&&G,(0,e.createElement)("div",{className:"wc-block-active-filters"},(0,e.createElement)("ul",{className:U},r?(0,e.createElement)(e.Fragment,null,Y({type:(0,n.__)("Size","woo-gutenberg-products-block"),name:(0,n.__)("Small","woo-gutenberg-products-block"),displayStyle:t.displayStyle}),Y({type:(0,n.__)("Color","woo-gutenberg-products-block"),name:(0,n.__)("Blue","woo-gutenberg-products-block"),displayStyle:t.displayStyle})):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{isLoading:u,displayStyle:t.displayStyle}),R,N,L,F)),u?(0,e.createElement)("span",{className:"wc-block-active-filters__clear-all-placeholder"}):(0,e.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{(()=>{if(!window)return;const e=window.location.href,t=(0,j.getQueryArgs)(e),r=(0,j.removeQueryArgs)(e,...Object.keys(t)),n=Object.fromEntries(Object.keys(t).filter((e=>!V(e))).map((e=>[e,t[e]])));B((0,j.addQueryArgs)(r,n))})(),s||(y(void 0),w(void 0),m([]),g([]),h([]))}},(0,e.createElement)(v,{label:(0,n.__)("Clear All","woo-gutenberg-products-block"),screenReaderLabel:(0,n.__)("Clear All Filters","woo-gutenberg-products-block")}))))},getProps:e=>{return{attributes:(t=e.dataset,{heading:$(null==t?void 0:t.heading)?t.heading:"",headingLevel:$(null==t?void 0:t.headingLevel)&&parseInt(t.headingLevel,10)||q.Y4.D.Z,displayStyle:$(null==t?void 0:t.displayStyle)&&t.displayStyle||q.Y4.P.Z}),isEditor:!1};var t}})})()})();