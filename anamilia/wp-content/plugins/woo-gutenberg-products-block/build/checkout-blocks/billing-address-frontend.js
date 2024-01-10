(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[9662],{1037:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var o=n(9307),r=n(3554),s=n(6484),i=n(7350),l=n(4333),c=n(9075),a=n(4617),u=n(9127),d=n.n(u),p=n(3340),f=n(9822),h=n(6767);const m=Object.keys(a.defaultAddressFields),g=(0,l.withInstanceId)((({id:e="",fields:t=m,fieldConfig:n={},instanceId:l,onChange:a,type:u="shipping",values:g})=>{const v=(0,c.s)(t),b=(0,c.s)(n),w=(0,c.s)(g.country),E=(0,o.useMemo)((()=>{const e=(0,p.Z)(v,b,w);return{fields:e,type:u,required:e.filter((e=>e.required)),hidden:e.filter((e=>e.hidden))}}),[v,b,w,u]),y=(0,o.useRef)({});return(0,o.useEffect)((()=>{const e={...g,...Object.fromEntries(E.hidden.map((e=>[e.key,""])))};d()(g,e)||a(e)}),[a,E,g]),(0,o.useEffect)((()=>{"shipping"===u&&(0,f.Z)(g)}),[g,u]),(0,o.useEffect)((()=>{var e,t;null===(e=y.current)||void 0===e||null===(t=e.postcode)||void 0===t||t.revalidate()}),[w]),e=e||l,(0,o.createElement)("div",{id:e,className:"wc-block-components-address-form"},E.fields.map((t=>{if(t.hidden)return null;const n={id:`${e}-${t.key}`,errorId:`${u}_${t.key}`,label:t.required?t.label:t.optionalLabel,autoCapitalize:t.autocapitalize,autoComplete:t.autocomplete,errorMessage:t.errorMessage,required:t.required,className:`wc-block-components-address-form__${t.key}`};if("country"===t.key){const e="shipping"===u?s.he:s.eQ;return(0,o.createElement)(e,{key:t.key,...n,value:g.country,onChange:e=>{const t={...g,country:e,state:""};g.postcode&&!(0,r.isPostcode)({postcode:g.postcode,country:e})&&(t.postcode=""),a(t)}})}if("state"===t.key){const e="shipping"===u?i.dI:i.IG;return(0,o.createElement)(e,{key:t.key,...n,country:g.country,value:g.state,onChange:e=>a({...g,state:e})})}return(0,o.createElement)(r.ValidatedTextInput,{key:t.key,ref:e=>y.current[t.key]=e,...n,value:g[t.key],onChange:e=>a({...g,[t.key]:e}),customFormatter:e=>"postcode"===t.key?e.trimStart().toUpperCase():e,customValidation:e=>(0,h.Z)(e,t.key,g)})})))}))},6767:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(5736),r=n(3554);const s=(e,t,n)=>!((e.required||e.value)&&"postcode"===t&&n.country&&!(0,r.isPostcode)({postcode:e.value,country:n.country})&&(e.setCustomValidity((0,o.__)("Please enter a valid postcode","woo-gutenberg-products-block")),1))},9055:(e,t,n)=>{"use strict";n.d(t,{k:()=>o.Z});var o=n(1037)},9822:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(5736),r=n(9818),s=n(4801);const i=e=>{const t="shipping_country",n=(0,r.select)(s.VALIDATION_STORE_KEY).getValidationError(t);!e.country&&(e.city||e.state||e.postcode)&&(n?(0,r.dispatch)(s.VALIDATION_STORE_KEY).showValidationError(t):(0,r.dispatch)(s.VALIDATION_STORE_KEY).setValidationErrors({[t]:{message:(0,o.__)("Please select your country","woo-gutenberg-products-block"),hidden:!1}})),n&&e.country&&(0,r.dispatch)(s.VALIDATION_STORE_KEY).clearValidationError(t)}},30:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(9307),r=n(4184),s=n.n(r),i=n(7914);n(7424);const l=({title:e,stepHeadingContent:t})=>(0,o.createElement)("div",{className:"wc-block-components-checkout-step__heading"},(0,o.createElement)(i.Z,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},e),!!t&&(0,o.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},t)),c=({id:e,className:t,title:n,legend:r,description:i,children:c,disabled:a=!1,showStepNumber:u=!0,stepHeadingContent:d=(()=>{})})=>{const p=r||n?"fieldset":"div";return(0,o.createElement)(p,{className:s()(t,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":u,"wc-block-components-checkout-step--disabled":a}),id:e,disabled:a},!(!r&&!n)&&(0,o.createElement)("legend",{className:"screen-reader-text"},r||n),!!n&&(0,o.createElement)(l,{title:n,stepHeadingContent:d()}),(0,o.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!i&&(0,o.createElement)("p",{className:"wc-block-components-checkout-step__description"},i),(0,o.createElement)("div",{className:"wc-block-components-checkout-step__content"},c)))}},5378:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var o=n(9307),r=n(4184),s=n.n(r),i=n(5736),l=n(4333),c=n(2819),a=n(9630),u=n(5158),d=n(444);const p=(0,o.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(d.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));var f=n(7462);class h extends o.Component{constructor(){super(...arguments),this.onChange=this.onChange.bind(this),this.bindInput=this.bindInput.bind(this)}focus(){this.input.focus()}hasFocus(){return this.input===this.input.ownerDocument.activeElement}bindInput(e){this.input=e}onChange(e){this.props.onChange({value:e.target.value})}render(){const{value:e,isExpanded:t,instanceId:n,selectedSuggestionIndex:r,className:i,...l}=this.props,c=e?e.length+1:0;return(0,o.createElement)("input",(0,f.Z)({ref:this.bindInput,id:`components-form-token-input-${n}`,type:"text"},l,{value:e||"",onChange:this.onChange,size:c,className:s()(i,"components-form-token-field__input"),autoComplete:"off",role:"combobox","aria-expanded":t,"aria-autocomplete":"list","aria-owns":t?`components-form-token-suggestions-${n}`:void 0,"aria-activedescendant":-1!==r?`components-form-token-suggestions-${n}-${r}`:void 0,"aria-describedby":`components-form-token-suggestions-howto-${n}`}))}}const m=h;var g=n(4979),v=n.n(g);class b extends o.Component{constructor(){super(...arguments),this.handleMouseDown=this.handleMouseDown.bind(this),this.bindList=this.bindList.bind(this)}componentDidUpdate(){this.props.selectedIndex>-1&&this.props.scrollIntoView&&this.list.children[this.props.selectedIndex]&&(this.scrollingIntoView=!0,v()(this.list.children[this.props.selectedIndex],this.list,{onlyScrollIfNeeded:!0}),this.props.setTimeout((()=>{this.scrollingIntoView=!1}),100))}bindList(e){this.list=e}handleHover(e){return()=>{this.scrollingIntoView||this.props.onHover(e)}}handleClick(e){return()=>{this.props.onSelect(e)}}handleMouseDown(e){e.preventDefault()}computeSuggestionMatch(e){const t=this.props.displayTransform(this.props.match||"").toLocaleLowerCase();if(0===t.length)return null;const n=(e=this.props.displayTransform(e)).toLocaleLowerCase().indexOf(t);return{suggestionBeforeMatch:e.substring(0,n),suggestionMatch:e.substring(n,n+t.length),suggestionAfterMatch:e.substring(n+t.length)}}render(){return(0,o.createElement)("ul",{ref:this.bindList,className:"components-form-token-field__suggestions-list",id:`components-form-token-suggestions-${this.props.instanceId}`,role:"listbox"},(0,c.map)(this.props.suggestions,((e,t)=>{const n=this.computeSuggestionMatch(e),r=s()("components-form-token-field__suggestion",{"is-selected":t===this.props.selectedIndex});return(0,o.createElement)("li",{id:`components-form-token-suggestions-${this.props.instanceId}-${t}`,role:"option",className:r,key:null!=e&&e.value?e.value:this.props.displayTransform(e),onMouseDown:this.handleMouseDown,onClick:this.handleClick(e),onMouseEnter:this.handleHover(e),"aria-selected":t===this.props.selectedIndex},n?(0,o.createElement)("span",{"aria-label":this.props.displayTransform(e)},n.suggestionBeforeMatch,(0,o.createElement)("strong",{className:"components-form-token-field__suggestion-match"},n.suggestionMatch),n.suggestionAfterMatch):this.props.displayTransform(e))})))}}b.defaultProps={match:"",onHover:()=>{},onSelect:()=>{},suggestions:Object.freeze([])};const w=(0,l.withSafeTimeout)(b);var E=n(4662),y=n(9685),k=n(2875),C=n(1092),_=n(9179),S=n(2506);const I=(0,C.L)({as:"div",useHook:function(e){const t=(0,_.y)(e,"FlexBlock");return(0,S.i)({isBlock:!0,...t})},name:"FlexBlock"});var T=n(1685);const A=(0,l.createHigherOrderComponent)((e=>t=>{const[n,r]=(0,o.useState)(),s=(0,o.useCallback)((e=>r((()=>null!=e&&e.handleFocusOutside?e.handleFocusOutside.bind(e):void 0))),[]);return(0,o.createElement)("div",(0,l.__experimentalUseFocusOutside)(n),(0,o.createElement)(e,(0,f.Z)({ref:s},t)))}),"withFocusOutside")(class extends o.Component{handleFocusOutside(e){this.props.onFocusOutside(e)}render(){return this.props.children}}),L=function e({value:t,label:n,options:r,onChange:d,onFilterValueChange:f=c.noop,hideLabelFromVision:h,help:g,allowReset:v=!0,className:b,messages:C={selected:(0,i.__)("Item selected.")}}){var _;const S=(0,l.useInstanceId)(e),[L,N]=(0,o.useState)(null),[O,x]=(0,o.useState)(!1),[F,R]=(0,o.useState)(!1),[B,D]=(0,o.useState)(""),P=(0,o.useRef)(),V=r.find((e=>e.value===t)),M=null!==(_=null==V?void 0:V.label)&&void 0!==_?_:"",W=(0,o.useMemo)((()=>{const e=[],t=[],n=(0,c.deburr)(B.toLocaleLowerCase());return r.forEach((o=>{const r=(0,c.deburr)(o.label).toLocaleLowerCase().indexOf(n);0===r?e.push(o):r>0&&t.push(o)})),e.concat(t)}),[B,r,t]),Z=e=>{d(e.value),(0,u.speak)(C.selected,"assertive"),N(e),D(""),x(!1)},q=(e=1)=>{let t=W.indexOf(L)+e;t<0?t=W.length-1:t>=W.length&&(t=0),N(W[t]),x(!0)};return(0,o.useEffect)((()=>{const e=W.length>0;if(O){const t=e?(0,i.sprintf)(
/* translators: %d: number of results. */
(0,i._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",W.length),W.length):(0,i.__)("No results.");(0,u.speak)(t,"polite")}}),[W,O]),(0,o.createElement)(A,{onFocusOutside:()=>{x(!1)}},(0,o.createElement)(E.Z,{className:s()(b,"components-combobox-control"),tabIndex:"-1",label:n,id:`components-form-token-input-${S}`,hideLabelFromVision:h,help:g},(0,o.createElement)("div",{className:"components-combobox-control__suggestions-container",tabIndex:"-1",onKeyDown:e=>{let t=!1;switch(e.keyCode){case a.ENTER:L&&(Z(L),t=!0);break;case a.UP:q(-1),t=!0;break;case a.DOWN:q(1),t=!0;break;case a.ESCAPE:x(!1),N(null),t=!0,e.stopPropagation()}t&&e.preventDefault()}},(0,o.createElement)(k.Z,null,(0,o.createElement)(I,null,(0,o.createElement)(m,{className:"components-combobox-control__input",instanceId:S,ref:P,value:O?B:M,"aria-label":M?`${M}, ${n}`:null,onFocus:()=>{R(!0),x(!0),f(""),D("")},onBlur:()=>{R(!1)},isExpanded:O,selectedSuggestionIndex:W.indexOf(L),onChange:e=>{const t=e.value;D(t),f(t),F&&x(!0)}})),v&&(0,o.createElement)(T.Z,null,(0,o.createElement)(y.Z,{className:"components-combobox-control__reset",icon:p,disabled:!t,onClick:()=>{d(null),P.current.input.focus()},label:(0,i.__)("Reset")}))),O&&(0,o.createElement)(w,{instanceId:S,match:{label:B},displayTransform:e=>e.label,suggestions:W,selectedIndex:W.indexOf(L),onHover:N,onSelect:Z,scrollIntoView:!0}))))};var N=n(3554),O=n(7884),x=n(9818),F=n(4801);n(5821);const R=(0,l.withInstanceId)((({id:e,className:t,label:n,onChange:r,options:l,value:c,required:a=!1,errorMessage:u=(0,i.__)("Please select a value.","woo-gutenberg-products-block"),errorId:d,instanceId:p="0",autoComplete:f="off"})=>{const h=(0,o.useRef)(null),m=e||"control-"+p,g=d||m,{setValidationErrors:v,clearValidationError:b}=(0,x.useDispatch)(F.VALIDATION_STORE_KEY),w=(0,x.useSelect)((e=>e(F.VALIDATION_STORE_KEY).getValidationError(g)));return(0,o.useEffect)((()=>(!a||c?b(g):v({[g]:{message:u,hidden:!0}}),()=>{b(g)})),[b,c,g,u,a,v]),(0,o.createElement)("div",{id:m,className:s()("wc-block-components-combobox",t,{"is-active":c,"has-error":(null==w?void 0:w.message)&&!(null!=w&&w.hidden)}),ref:h},(0,o.createElement)(L,{className:"wc-block-components-combobox-control",label:n,onChange:r,onFilterValueChange:e=>{if(e.length){const t=(0,O.Kn)(h.current)?h.current.ownerDocument.activeElement:void 0;if(t&&(0,O.Kn)(h.current)&&h.current.contains(t))return;const n=e.toLocaleUpperCase(),o=l.find((e=>e.label.toLocaleUpperCase().startsWith(n)||e.value.toLocaleUpperCase()===n));o&&r(o.value)}},options:l,value:c||"",allowReset:!1,autoComplete:f,"aria-invalid":(null==w?void 0:w.message)&&!(null!=w&&w.hidden)}),(0,o.createElement)(N.ValidationInputError,{propertyName:g}))}))},6484:(e,t,n)=>{"use strict";n.d(t,{eQ:()=>d,he:()=>p});var o=n(9307),r=n(5736),s=n(2629),i=n(4184),l=n.n(i),c=n(5378);n(7775);const a=({className:e,countries:t,id:n,label:i,onChange:a,value:u="",autoComplete:d="off",required:p=!1,errorId:f,errorMessage:h=(0,r.__)("Please select a country","woo-gutenberg-products-block")})=>{const m=(0,o.useMemo)((()=>Object.entries(t).map((([e,t])=>({value:e,label:(0,s.decodeEntities)(t)})))),[t]);return(0,o.createElement)("div",{className:l()(e,"wc-block-components-country-input")},(0,o.createElement)(c.Z,{id:n,label:i,onChange:a,options:m,value:u,errorId:f,errorMessage:h,required:p,autoComplete:d}))};var u=n(5271);const d=e=>(0,o.createElement)(a,{countries:u.DK,...e}),p=e=>(0,o.createElement)(a,{countries:u.mO,...e})},6938:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(9307),r=n(5904),s=n(9196);const i=["BUTTON","FIELDSET","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA","A"],l=({children:e,style:t={},...n})=>{const l=(0,o.useRef)(null),c=()=>{l.current&&r.focus.focusable.find(l.current).forEach((e=>{i.includes(e.nodeName)&&e.setAttribute("tabindex","-1"),e.hasAttribute("contenteditable")&&e.setAttribute("contenteditable","false")}))},a=function(e,t,n){var o=this,r=(0,s.useRef)(null),i=(0,s.useRef)(0),l=(0,s.useRef)(null),c=(0,s.useRef)([]),a=(0,s.useRef)(),u=(0,s.useRef)(),d=(0,s.useRef)(e),p=(0,s.useRef)(!0);(0,s.useEffect)((function(){d.current=e}),[e]);var f=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var h=!!(n=n||{}).leading,m=!("trailing"in n)||!!n.trailing,g="maxWait"in n,v=g?Math.max(+n.maxWait||0,t):null;(0,s.useEffect)((function(){return p.current=!0,function(){p.current=!1}}),[]);var b=(0,s.useMemo)((function(){var e=function(e){var t=c.current,n=a.current;return c.current=a.current=null,i.current=e,u.current=d.current.apply(n,t)},n=function(e,t){f&&cancelAnimationFrame(l.current),l.current=f?requestAnimationFrame(e):setTimeout(e,t)},s=function(e){if(!p.current)return!1;var n=e-r.current;return!r.current||n>=t||n<0||g&&e-i.current>=v},b=function(t){return l.current=null,m&&c.current?e(t):(c.current=a.current=null,u.current)},w=function e(){var o=Date.now();if(s(o))return b(o);if(p.current){var l=t-(o-r.current),c=g?Math.min(l,v-(o-i.current)):l;n(e,c)}},E=function(){var d=Date.now(),f=s(d);if(c.current=[].slice.call(arguments),a.current=o,r.current=d,f){if(!l.current&&p.current)return i.current=r.current,n(w,t),h?e(r.current):u.current;if(g)return n(w,t),e(r.current)}return l.current||n(w,t),u.current};return E.cancel=function(){l.current&&(f?cancelAnimationFrame(l.current):clearTimeout(l.current)),i.current=0,c.current=r.current=a.current=l.current=null},E.isPending=function(){return!!l.current},E.flush=function(){return l.current?b(Date.now()):u.current},E}),[h,g,t,v,m,f]);return b}(c,0,{leading:!0});return(0,o.useLayoutEffect)((()=>{let e;return c(),l.current&&(e=new window.MutationObserver(a),e.observe(l.current,{childList:!0,attributes:!0,subtree:!0})),()=>{e&&e.disconnect(),a.cancel()}}),[a]),(0,o.createElement)("div",{ref:l,"aria-disabled":"true",style:{userSelect:"none",pointerEvents:"none",cursor:"normal",...t},...n},e)}},7350:(e,t,n)=>{"use strict";n.d(t,{IG:()=>f,dI:()=>h});var o=n(9307),r=n(5736),s=n(2629),i=n(4184),l=n.n(i),c=n(3554),a=n(5378);n(8410);const u=(e,t)=>{const n=t.find((t=>t.label.toLocaleUpperCase()===e.toLocaleUpperCase()||t.value.toLocaleUpperCase()===e.toLocaleUpperCase()));return n?n.value:""},d=({className:e,id:t,states:n,country:i,label:d,onChange:p,autoComplete:f="off",value:h="",required:m=!1,errorId:g=""})=>{const v=n[i],b=(0,o.useMemo)((()=>v?Object.keys(v).map((e=>({value:e,label:(0,s.decodeEntities)(v[e])}))):[]),[v]),w=(0,o.useCallback)((e=>{const t=b.length>0?u(e,b):e;t!==h&&p(t)}),[p,b,h]),E=(0,o.useRef)(h);return(0,o.useEffect)((()=>{E.current!==h&&(E.current=h)}),[h]),(0,o.useEffect)((()=>{if(b.length>0&&E.current){const e=u(E.current,b);e!==E.current&&w(e)}}),[b,w]),b.length>0?(0,o.createElement)(a.Z,{className:l()(e,"wc-block-components-state-input"),id:t,label:d,onChange:w,options:b,value:h,errorMessage:(0,r.__)("Please select a state.","woo-gutenberg-products-block"),errorId:g,required:m,autoComplete:f}):(0,o.createElement)(c.ValidatedTextInput,{className:e,id:t,label:d,onChange:w,autoComplete:f,value:h,required:m})};var p=n(5271);const f=e=>(0,o.createElement)(d,{states:p.JJ,...e}),h=e=>(0,o.createElement)(d,{states:p.nm,...e})},7914:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(9307),r=n(4184),s=n.n(r);n(5198);const i=({children:e,className:t,headingLevel:n,...r})=>{const i=s()("wc-block-components-title",t),l=`h${n}`;return(0,o.createElement)(l,{className:i,...r},e)}},7277:(e,t,n)=>{"use strict";n.d(t,{B:()=>a});var o=n(4617),r=n(9307),s=n(9818),i=n(4801),l=n(7844),c=n(5027);const a=()=>{const{needsShipping:e}=(0,c.V)(),{useShippingAsBilling:t,prefersCollection:n}=(0,s.useSelect)((e=>({useShippingAsBilling:e(i.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),prefersCollection:e(i.CHECKOUT_STORE_KEY).prefersCollection()}))),{__internalSetUseShippingAsBilling:a}=(0,s.useDispatch)(i.CHECKOUT_STORE_KEY),{billingAddress:u,setBillingAddress:d,shippingAddress:p,setShippingAddress:f}=(0,l.L)(),h=(0,r.useCallback)((e=>{d({email:e})}),[d]),m=(0,r.useCallback)((e=>{d({phone:e})}),[d]),g=(0,r.useCallback)((e=>{f({phone:e})}),[f]),v=(0,o.getSetting)("forcedBillingAddress",!1);return{shippingAddress:p,billingAddress:u,setShippingAddress:f,setBillingAddress:d,setEmail:h,setBillingPhone:m,setShippingPhone:g,defaultAddressFields:o.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:a,needsShipping:e,showShippingFields:!v&&e&&!n,showShippingMethods:e&&!n,showBillingFields:!e||!t||n,forcedBillingAddress:v,useBillingAsShipping:v||n}}},7844:(e,t,n)=>{"use strict";n.d(t,{L:()=>s});var o=n(9818),r=n(4801);const s=()=>{const{customerData:e,isInitialized:t}=(0,o.useSelect)((e=>{const t=e(r.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}})),{setShippingAddress:n,setBillingAddress:s}=(0,o.useDispatch)(r.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:s,setShippingAddress:n}}},9075:(e,t,n)=>{"use strict";n.d(t,{s:()=>i});var o=n(9307),r=n(9127),s=n.n(r);function i(e){const t=(0,o.useRef)(e);return s()(e,t.current)||(t.current=e),t.current}},9490:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(5736);const r=({defaultTitle:e=(0,o.__)("Step","woo-gutenberg-products-block"),defaultDescription:t=(0,o.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:n=!0})=>({title:{type:"string",default:e},description:{type:"string",default:t},showStepNumber:{type:"boolean",default:n}})},3734:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>T});var o=n(9307),r=n(4184),s=n.n(r),i=n(721),l=n(30),c=n(7277),a=n(9818),u=n(4801),d=n(5918),p=n(8832),f=n(6423),h=n(9055),m=n(6938),g=n(3554),v=n(3112);const b=({showCompanyField:e=!1,showApartmentField:t=!1,showPhoneField:n=!1,requireCompanyField:r=!1,requirePhoneField:s=!1})=>{const{defaultAddressFields:i,billingAddress:l,setBillingAddress:a,setShippingAddress:u,setBillingPhone:b,setShippingPhone:w,useBillingAsShipping:E}=(0,c.B)(),{dispatchCheckoutEvent:y}=(0,d.n)(),{isEditor:k}=(0,p._)();(0,o.useEffect)((()=>{n||b("")}),[n,b]);const[C,_]=(0,o.useState)(!1);(0,o.useEffect)((()=>{C||(E&&u(l),_(!0))}),[C,u,l,E]);const S=(0,o.useMemo)((()=>({company:{hidden:!e,required:r},address_2:{hidden:!t}})),[e,r,t]),I=(0,o.useCallback)((e=>{a(e),E&&(u(e),y("set-shipping-address")),y("set-billing-address")}),[y,a,u,E]),T=k?m.Z:o.Fragment,A=E?[f.n7.BILLING_ADDRESS,f.n7.SHIPPING_ADDRESS]:[f.n7.BILLING_ADDRESS];return(0,o.createElement)(T,null,(0,o.createElement)(g.StoreNoticesContainer,{context:A}),(0,o.createElement)(h.k,{id:"billing",type:"billing",onChange:I,values:l,fields:Object.keys(i),fieldConfig:S}),n&&(0,o.createElement)(v.Z,{id:"billing-phone",errorId:"billing_phone",isRequired:s,value:l.phone,onChange:e=>{b(e),y("set-phone-number",{step:"billing"}),E&&(w(e),y("set-phone-number",{step:"shipping"}))}}))};var w=n(9490),E=n(5736);const y=(0,E.__)("Billing address","woo-gutenberg-products-block"),k=(0,E.__)("Enter the billing address that matches your payment method.","woo-gutenberg-products-block"),C=(0,E.__)("Billing and shipping address","woo-gutenberg-products-block"),_=(0,E.__)("Enter the billing and shipping address that matches your payment method.","woo-gutenberg-products-block"),S={...(0,w.Z)({defaultTitle:y,defaultDescription:k}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}};var I=n(1141);const T=(0,i.withFilteredAttributes)(S)((({title:e,description:t,showStepNumber:n,children:r,className:i})=>{const d=(0,a.useSelect)((e=>e(u.CHECKOUT_STORE_KEY).isProcessing())),{requireCompanyField:p,requirePhoneField:f,showApartmentField:h,showCompanyField:m,showPhoneField:g}=(0,I.s4)(),{showBillingFields:v,forcedBillingAddress:w,useBillingAsShipping:E}=(0,c.B)();return v||E?(e=((e,t)=>t?e===y?C:e:e===C?y:e)(e,w),t=((e,t)=>t?e===k?_:e:e===_?k:e)(t,w),(0,o.createElement)(l.Z,{id:"billing-fields",disabled:d,className:s()("wc-block-checkout__billing-fields",i),title:e,description:t,showStepNumber:n},(0,o.createElement)(b,{requireCompanyField:p,showApartmentField:h,showCompanyField:m,showPhoneField:g,requirePhoneField:f}),r)):null}))},3112:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(9307),r=n(5736),s=n(3554);const i=({id:e="phone",errorId:t="phone",isRequired:n=!1,value:i="",onChange:l})=>(0,o.createElement)(s.ValidatedTextInput,{id:e,errorId:t,type:"tel",autoComplete:"tel",required:n,label:n?(0,r.__)("Phone","woo-gutenberg-products-block"):(0,r.__)("Phone (optional)","woo-gutenberg-products-block"),value:i,onChange:l})},9010:(e,t,n)=>{"use strict";var o=n(4657);e.exports=function(e,t,n){n=n||{},9===t.nodeType&&(t=o.getWindow(t));var r=n.allowHorizontalScroll,s=n.onlyScrollIfNeeded,i=n.alignWithTop,l=n.alignWithLeft,c=n.offsetTop||0,a=n.offsetLeft||0,u=n.offsetBottom||0,d=n.offsetRight||0;r=void 0===r||r;var p=o.isWindow(t),f=o.offset(e),h=o.outerHeight(e),m=o.outerWidth(e),g=void 0,v=void 0,b=void 0,w=void 0,E=void 0,y=void 0,k=void 0,C=void 0,_=void 0,S=void 0;p?(k=t,S=o.height(k),_=o.width(k),C={left:o.scrollLeft(k),top:o.scrollTop(k)},E={left:f.left-C.left-a,top:f.top-C.top-c},y={left:f.left+m-(C.left+_)+d,top:f.top+h-(C.top+S)+u},w=C):(g=o.offset(t),v=t.clientHeight,b=t.clientWidth,w={left:t.scrollLeft,top:t.scrollTop},E={left:f.left-(g.left+(parseFloat(o.css(t,"borderLeftWidth"))||0))-a,top:f.top-(g.top+(parseFloat(o.css(t,"borderTopWidth"))||0))-c},y={left:f.left+m-(g.left+b+(parseFloat(o.css(t,"borderRightWidth"))||0))+d,top:f.top+h-(g.top+v+(parseFloat(o.css(t,"borderBottomWidth"))||0))+u}),E.top<0||y.top>0?!0===i?o.scrollTop(t,w.top+E.top):!1===i?o.scrollTop(t,w.top+y.top):E.top<0?o.scrollTop(t,w.top+E.top):o.scrollTop(t,w.top+y.top):s||((i=void 0===i||!!i)?o.scrollTop(t,w.top+E.top):o.scrollTop(t,w.top+y.top)),r&&(E.left<0||y.left>0?!0===l?o.scrollLeft(t,w.left+E.left):!1===l?o.scrollLeft(t,w.left+y.left):E.left<0?o.scrollLeft(t,w.left+E.left):o.scrollLeft(t,w.left+y.left):s||((l=void 0===l||!!l)?o.scrollLeft(t,w.left+E.left):o.scrollLeft(t,w.left+y.left)))}},4979:(e,t,n)=>{"use strict";e.exports=n(9010)},4657:e=>{"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function o(e,t){var n=e["page"+(t?"Y":"X")+"Offset"],o="scroll"+(t?"Top":"Left");if("number"!=typeof n){var r=e.document;"number"!=typeof(n=r.documentElement[o])&&(n=r.body[o])}return n}function r(e){return o(e)}function s(e){return o(e,!0)}function i(e){var t=function(e){var t,n=void 0,o=void 0,r=e.ownerDocument,s=r.body,i=r&&r.documentElement;return n=(t=e.getBoundingClientRect()).left,o=t.top,{left:n-=i.clientLeft||s.clientLeft||0,top:o-=i.clientTop||s.clientTop||0}}(e),n=e.ownerDocument,o=n.defaultView||n.parentWindow;return t.left+=r(o),t.top+=s(o),t}var l=new RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i"),c=/^(top|right|bottom|left)$/,a="currentStyle",u="runtimeStyle",d="left",p=void 0;function f(e,t){for(var n=0;n<e.length;n++)t(e[n])}function h(e){return"border-box"===p(e,"boxSizing")}"undefined"!=typeof window&&(p=window.getComputedStyle?function(e,t,n){var o="",r=e.ownerDocument,s=n||r.defaultView.getComputedStyle(e,null);return s&&(o=s.getPropertyValue(t)||s[t]),o}:function(e,t){var n=e[a]&&e[a][t];if(l.test(n)&&!c.test(t)){var o=e.style,r=o[d],s=e[u][d];e[u][d]=e[a][d],o[d]="fontSize"===t?"1em":n||0,n=o.pixelLeft+"px",o[d]=r,e[u][d]=s}return""===n?"auto":n});var m=["margin","border","padding"],g=-1,v=2,b=1;function w(e,t,n){var o=0,r=void 0,s=void 0,i=void 0;for(s=0;s<t.length;s++)if(r=t[s])for(i=0;i<n.length;i++){var l;l="border"===r?r+n[i]+"Width":r+n[i],o+=parseFloat(p(e,l))||0}return o}function E(e){return null!=e&&e==e.window}var y={};function k(e,t,n){if(E(e))return"width"===t?y.viewportWidth(e):y.viewportHeight(e);if(9===e.nodeType)return"width"===t?y.docWidth(e):y.docHeight(e);var o="width"===t?["Left","Right"]:["Top","Bottom"],r="width"===t?e.offsetWidth:e.offsetHeight,s=(p(e),h(e)),i=0;(null==r||r<=0)&&(r=void 0,(null==(i=p(e,t))||Number(i)<0)&&(i=e.style[t]||0),i=parseFloat(i)||0),void 0===n&&(n=s?b:g);var l=void 0!==r||s,c=r||i;if(n===g)return l?c-w(e,["border","padding"],o):i;if(l){var a=n===v?-w(e,["border"],o):w(e,["margin"],o);return c+(n===b?0:a)}return i+w(e,m.slice(n),o)}f(["Width","Height"],(function(e){y["doc"+e]=function(t){var n=t.document;return Math.max(n.documentElement["scroll"+e],n.body["scroll"+e],y["viewport"+e](n))},y["viewport"+e]=function(t){var n="client"+e,o=t.document,r=o.body,s=o.documentElement[n];return"CSS1Compat"===o.compatMode&&s||r&&r[n]||s}}));var C={position:"absolute",visibility:"hidden",display:"block"};function _(e){var t=void 0,n=arguments;return 0!==e.offsetWidth?t=k.apply(void 0,n):function(e,o,r){var s={},i=e.style,l=void 0;for(l in o)o.hasOwnProperty(l)&&(s[l]=i[l],i[l]=o[l]);for(l in function(){t=k.apply(void 0,n)}.call(e),o)o.hasOwnProperty(l)&&(i[l]=s[l])}(e,C),t}function S(e,t,o){var r=o;if("object"!==(void 0===t?"undefined":n(t)))return void 0!==r?("number"==typeof r&&(r+="px"),void(e.style[t]=r)):p(e,t);for(var s in t)t.hasOwnProperty(s)&&S(e,s,t[s])}f(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);y["outer"+t]=function(t,n){return t&&_(t,e,n?0:b)};var n="width"===e?["Left","Right"]:["Top","Bottom"];y[e]=function(t,o){return void 0===o?t&&_(t,e,g):t?(p(t),h(t)&&(o+=w(t,["padding","border"],n)),S(t,e,o)):void 0}})),e.exports=t({getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return i(e);!function(e,t){"static"===S(e,"position")&&(e.style.position="relative");var n=i(e),o={},r=void 0,s=void 0;for(s in t)t.hasOwnProperty(s)&&(r=parseFloat(S(e,s))||0,o[s]=r+t[s]-n[s]);S(e,o)}(e,t)},isWindow:E,each:f,css:S,clone:function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);if(e.overflow)for(var n in e)e.hasOwnProperty(n)&&(t.overflow[n]=e.overflow[n]);return t},scrollLeft:function(e,t){if(E(e)){if(void 0===t)return r(e);window.scrollTo(t,s(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(E(e)){if(void 0===t)return s(e);window.scrollTo(r(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},viewportWidth:0,viewportHeight:0},y)},7424:()=>{},5821:()=>{},7775:()=>{},8410:()=>{},5198:()=>{},3620:(e,t,n)=>{"use strict";n.d(t,{Iq:()=>l});var o=n(2819),r=n(9307),s=(n(2560),n(1765)),i=n(1282);function l(e,t,n={}){const{memo:l=!1}=n;let c=(0,r.forwardRef)(e);l&&(c=(0,r.memo)(c)),void 0===t&&"undefined"!=typeof process&&process.env;let a=c[s.rE]||[t];return Array.isArray(t)&&(a=[...a,...t]),"string"==typeof t&&(a=[...a,t]),c.displayName=t,c[s.rE]=(0,o.uniq)(a),c.selector=`.${(0,i.l)(t)}`,c}}}]);