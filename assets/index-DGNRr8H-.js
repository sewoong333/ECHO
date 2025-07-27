var kS=Object.defineProperty;var PS=(t,e,n)=>e in t?kS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ga=(t,e,n)=>PS(t,typeof e!="symbol"?e+"":e,n);function CS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var WL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function HL(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Pw={exports:{}},Rh={},Cw={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ul=Symbol.for("react.element"),DS=Symbol.for("react.portal"),NS=Symbol.for("react.fragment"),VS=Symbol.for("react.strict_mode"),OS=Symbol.for("react.profiler"),LS=Symbol.for("react.provider"),MS=Symbol.for("react.context"),FS=Symbol.for("react.forward_ref"),US=Symbol.for("react.suspense"),jS=Symbol.for("react.memo"),zS=Symbol.for("react.lazy"),Uy=Symbol.iterator;function BS(t){return t===null||typeof t!="object"?null:(t=Uy&&t[Uy]||t["@@iterator"],typeof t=="function"?t:null)}var bw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dw=Object.assign,Nw={};function Wo(t,e,n){this.props=t,this.context=e,this.refs=Nw,this.updater=n||bw}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vw(){}Vw.prototype=Wo.prototype;function Tm(t,e,n){this.props=t,this.context=e,this.refs=Nw,this.updater=n||bw}var xm=Tm.prototype=new Vw;xm.constructor=Tm;Dw(xm,Wo.prototype);xm.isPureReactComponent=!0;var jy=Array.isArray,Ow=Object.prototype.hasOwnProperty,Sm={current:null},Lw={key:!0,ref:!0,__self:!0,__source:!0};function Mw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ow.call(e,r)&&!Lw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ul,type:t,key:s,ref:o,props:i,_owner:Sm.current}}function $S(t,e){return{$$typeof:Ul,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Am(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ul}function qS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zy=/\/+/g;function Hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qS(""+t.key):e.toString(36)}function Yu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ul:case DS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hd(o,0):r,jy(i)?(n="",t!=null&&(n=t.replace(zy,"$&/")+"/"),Yu(i,e,n,"",function(c){return c})):i!=null&&(Am(i)&&(i=$S(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Hd(s,a);o+=Yu(s,e,n,u,i)}else if(u=BS(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Hd(s,a++),o+=Yu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Iu(t,e,n){if(t==null)return t;var r=[],i=0;return Yu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},Xu={transition:null},HS={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:Xu,ReactCurrentOwner:Sm};function Fw(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Iu,forEach:function(t,e,n){Iu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Iu(t,function(){e++}),e},toArray:function(t){return Iu(t,function(e){return e})||[]},only:function(t){if(!Am(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=Wo;fe.Fragment=NS;fe.Profiler=OS;fe.PureComponent=Tm;fe.StrictMode=VS;fe.Suspense=US;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HS;fe.act=Fw;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Ow.call(e,u)&&!Lw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ul,type:t.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(t){return t={$$typeof:MS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:LS,_context:t},t.Consumer=t};fe.createElement=Mw;fe.createFactory=function(t){var e=Mw.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:FS,render:t}};fe.isValidElement=Am;fe.lazy=function(t){return{$$typeof:zS,_payload:{_status:-1,_result:t},_init:WS}};fe.memo=function(t,e){return{$$typeof:jS,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=Xu.transition;Xu.transition={};try{t()}finally{Xu.transition=e}};fe.unstable_act=Fw;fe.useCallback=function(t,e){return Gt.current.useCallback(t,e)};fe.useContext=function(t){return Gt.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};fe.useEffect=function(t,e){return Gt.current.useEffect(t,e)};fe.useId=function(){return Gt.current.useId()};fe.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return Gt.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};fe.useRef=function(t){return Gt.current.useRef(t)};fe.useState=function(t){return Gt.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return Gt.current.useTransition()};fe.version="18.3.1";Cw.exports=fe;var N=Cw.exports;const st=bS(N),GS=CS({__proto__:null,default:st},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KS=N,QS=Symbol.for("react.element"),YS=Symbol.for("react.fragment"),XS=Object.prototype.hasOwnProperty,JS=KS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZS={key:!0,ref:!0,__self:!0,__source:!0};function Uw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XS.call(e,r)&&!ZS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:QS,type:t,key:s,ref:o,props:i,_owner:JS.current}}Rh.Fragment=YS;Rh.jsx=Uw;Rh.jsxs=Uw;Pw.exports=Rh;var A=Pw.exports,Bf={},jw={exports:{}},vn={},zw={exports:{}},Bw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(Q,$){var z=Q.length;Q.push($);e:for(;0<z;){var G=z-1>>>1,q=Q[G];if(0<i(q,$))Q[G]=$,Q[z]=q,z=G;else break e}}function n(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var $=Q[0],z=Q.pop();if(z!==$){Q[0]=z;e:for(var G=0,q=Q.length,J=q>>>1;G<J;){var U=2*(G+1)-1,re=Q[U],ce=U+1,Ae=Q[ce];if(0>i(re,z))ce<q&&0>i(Ae,re)?(Q[G]=Ae,Q[ce]=z,G=ce):(Q[G]=re,Q[U]=z,G=U);else if(ce<q&&0>i(Ae,z))Q[G]=Ae,Q[ce]=z,G=ce;else break e}}return $}function i(Q,$){var z=Q.sortIndex-$.sortIndex;return z!==0?z:Q.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,_=!1,T=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(Q){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=Q)r(c),$.sortIndex=$.expirationTime,e(u,$);else break;$=n(c)}}function D(Q){if(R=!1,S(Q),!T)if(n(u)!==null)T=!0,Pe(M);else{var $=n(c);$!==null&&ye(D,$.startTime-Q)}}function M(Q,$){T=!1,R&&(R=!1,w(g),g=-1),_=!0;var z=m;try{for(S($),f=n(u);f!==null&&(!(f.expirationTime>$)||Q&&!C());){var G=f.callback;if(typeof G=="function"){f.callback=null,m=f.priorityLevel;var q=G(f.expirationTime<=$);$=t.unstable_now(),typeof q=="function"?f.callback=q:f===n(u)&&r(u),S($)}else r(u);f=n(u)}if(f!==null)var J=!0;else{var U=n(c);U!==null&&ye(D,U.startTime-$),J=!1}return J}finally{f=null,m=z,_=!1}}var V=!1,y=null,g=-1,I=5,x=-1;function C(){return!(t.unstable_now()-x<I)}function b(){if(y!==null){var Q=t.unstable_now();x=Q;var $=!0;try{$=y(!0,Q)}finally{$?k():(V=!1,y=null)}}else V=!1}var k;if(typeof E=="function")k=function(){E(b)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,xe=ee.port2;ee.port1.onmessage=b,k=function(){xe.postMessage(null)}}else k=function(){P(b,0)};function Pe(Q){y=Q,V||(V=!0,k())}function ye(Q,$){g=P(function(){Q(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Q){Q.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,Pe(M))},t.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Q?Math.floor(1e3/Q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(Q){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var z=m;m=$;try{return Q()}finally{m=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Q,$){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var z=m;m=Q;try{return $()}finally{m=z}},t.unstable_scheduleCallback=function(Q,$,z){var G=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?G+z:G):z=G,Q){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=z+q,Q={id:d++,callback:$,priorityLevel:Q,startTime:z,expirationTime:q,sortIndex:-1},z>G?(Q.sortIndex=z,e(c,Q),n(u)===null&&Q===n(c)&&(R?(w(g),g=-1):R=!0,ye(D,z-G))):(Q.sortIndex=q,e(u,Q),T||_||(T=!0,Pe(M))),Q},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(Q){var $=m;return function(){var z=m;m=$;try{return Q.apply(this,arguments)}finally{m=z}}}})(Bw);zw.exports=Bw;var eA=zw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tA=N,gn=eA;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $w=new Set,ll={};function Ts(t,e){Io(t,e),Io(t+"Capture",e)}function Io(t,e){for(ll[t]=e,t=0;t<e.length;t++)$w.add(e[t])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$f=Object.prototype.hasOwnProperty,nA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,By={},$y={};function rA(t){return $f.call($y,t)?!0:$f.call(By,t)?!1:nA.test(t)?$y[t]=!0:(By[t]=!0,!1)}function iA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sA(t,e,n,r){if(e===null||typeof e>"u"||iA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rm=/[\-:]([a-z])/g;function km(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rm,km);Tt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rm,km);Tt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rm,km);Tt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pm(t,e,n,r){var i=Tt.hasOwnProperty(e)?Tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sA(e,n,i,r)&&(n=null),r||i===null?rA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ar=tA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tu=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),qw=Symbol.for("react.provider"),Ww=Symbol.for("react.context"),bm=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),Hf=Symbol.for("react.suspense_list"),Dm=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),Hw=Symbol.for("react.offscreen"),qy=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=qy&&t[qy]||t["@@iterator"],typeof t=="function"?t:null)}var We=Object.assign,Gd;function ba(t){if(Gd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gd=e&&e[1]||""}return`
`+Gd+t}var Kd=!1;function Qd(t,e){if(!t||Kd)return"";Kd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Kd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ba(t):""}function oA(t){switch(t.tag){case 5:return ba(t.type);case 16:return ba("Lazy");case 13:return ba("Suspense");case 19:return ba("SuspenseList");case 0:case 2:case 15:return t=Qd(t.type,!1),t;case 11:return t=Qd(t.type.render,!1),t;case 1:return t=Qd(t.type,!0),t;default:return""}}function Gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Js:return"Fragment";case Xs:return"Portal";case qf:return"Profiler";case Cm:return"StrictMode";case Wf:return"Suspense";case Hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ww:return(t.displayName||"Context")+".Consumer";case qw:return(t._context.displayName||"Context")+".Provider";case bm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dm:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}function aA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===Cm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lA(t){var e=Gw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xu(t){t._valueTracker||(t._valueTracker=lA(t))}function Kw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Gw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Rc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kf(t,e){var n=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qw(t,e){e=e.checked,e!=null&&Pm(t,"checked",e,!1)}function Qf(t,e){Qw(t,e);var n=gi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yf(t,e.type,gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yf(t,e,n){(e!=="number"||Rc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Da=Array.isArray;function co(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Da(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gi(n)}}function Yw(t,e){var n=gi(e.value),r=gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ky(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Su,Jw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Su=Su||document.createElement("div"),Su.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Su.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uA=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){uA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function Zw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function e2(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cA=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(t,e){if(e){if(cA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function ep(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tp=null;function Nm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var np=null,ho=null,fo=null;function Qy(t){if(t=Bl(t)){if(typeof np!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Dh(e),np(t.stateNode,t.type,e))}}function t2(t){ho?fo?fo.push(t):fo=[t]:ho=t}function n2(){if(ho){var t=ho,e=fo;if(fo=ho=null,Qy(t),e)for(t=0;t<e.length;t++)Qy(e[t])}}function r2(t,e){return t(e)}function i2(){}var Yd=!1;function s2(t,e,n){if(Yd)return t(e,n);Yd=!0;try{return r2(t,e,n)}finally{Yd=!1,(ho!==null||fo!==null)&&(i2(),n2())}}function cl(t,e){var n=t.stateNode;if(n===null)return null;var r=Dh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var rp=!1;if(_r)try{var va={};Object.defineProperty(va,"passive",{get:function(){rp=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{rp=!1}function hA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ga=!1,kc=null,Pc=!1,ip=null,dA={onError:function(t){Ga=!0,kc=t}};function fA(t,e,n,r,i,s,o,a,u){Ga=!1,kc=null,hA.apply(dA,arguments)}function pA(t,e,n,r,i,s,o,a,u){if(fA.apply(this,arguments),Ga){if(Ga){var c=kc;Ga=!1,kc=null}else throw Error(H(198));Pc||(Pc=!0,ip=c)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o2(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yy(t){if(xs(t)!==t)throw Error(H(188))}function mA(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yy(i),t;if(s===r)return Yy(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function a2(t){return t=mA(t),t!==null?l2(t):null}function l2(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l2(t);if(e!==null)return e;t=t.sibling}return null}var u2=gn.unstable_scheduleCallback,Xy=gn.unstable_cancelCallback,gA=gn.unstable_shouldYield,yA=gn.unstable_requestPaint,Ze=gn.unstable_now,vA=gn.unstable_getCurrentPriorityLevel,Vm=gn.unstable_ImmediatePriority,c2=gn.unstable_UserBlockingPriority,Cc=gn.unstable_NormalPriority,_A=gn.unstable_LowPriority,h2=gn.unstable_IdlePriority,kh=null,Xn=null;function wA(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(kh,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:TA,EA=Math.log,IA=Math.LN2;function TA(t){return t>>>=0,t===0?32:31-(EA(t)/IA|0)|0}var Au=64,Ru=4194304;function Na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Na(a):(s&=o,s!==0&&(r=Na(s)))}else o=n&~i,o!==0?r=Na(o):s!==0&&(r=Na(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jn(e),i=1<<n,r|=t[n],e&=~i;return r}function xA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=xA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function sp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d2(){var t=Au;return Au<<=1,!(Au&4194240)&&(Au=64),t}function Xd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function AA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Om(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ke=0;function f2(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p2,Lm,m2,g2,y2,op=!1,ku=[],ei=null,ti=null,ni=null,hl=new Map,dl=new Map,jr=[],RA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jy(t,e){switch(t){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":hl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(e.pointerId)}}function _a(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Bl(e),e!==null&&Lm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kA(t,e,n,r,i){switch(e){case"focusin":return ei=_a(ei,t,e,n,r,i),!0;case"dragenter":return ti=_a(ti,t,e,n,r,i),!0;case"mouseover":return ni=_a(ni,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return hl.set(s,_a(hl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,dl.set(s,_a(dl.get(s)||null,t,e,n,r,i)),!0}return!1}function v2(t){var e=qi(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=o2(n),e!==null){t.blockedOn=e,y2(t.priority,function(){m2(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ju(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ap(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);tp=r,n.target.dispatchEvent(r),tp=null}else return e=Bl(n),e!==null&&Lm(e),t.blockedOn=n,!1;e.shift()}return!0}function Zy(t,e,n){Ju(t)&&n.delete(e)}function PA(){op=!1,ei!==null&&Ju(ei)&&(ei=null),ti!==null&&Ju(ti)&&(ti=null),ni!==null&&Ju(ni)&&(ni=null),hl.forEach(Zy),dl.forEach(Zy)}function wa(t,e){t.blockedOn===e&&(t.blockedOn=null,op||(op=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,PA)))}function fl(t){function e(i){return wa(i,t)}if(0<ku.length){wa(ku[0],t);for(var n=1;n<ku.length;n++){var r=ku[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ei!==null&&wa(ei,t),ti!==null&&wa(ti,t),ni!==null&&wa(ni,t),hl.forEach(e),dl.forEach(e),n=0;n<jr.length;n++)r=jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jr.length&&(n=jr[0],n.blockedOn===null);)v2(n),n.blockedOn===null&&jr.shift()}var po=Ar.ReactCurrentBatchConfig,Dc=!0;function CA(t,e,n,r){var i=ke,s=po.transition;po.transition=null;try{ke=1,Mm(t,e,n,r)}finally{ke=i,po.transition=s}}function bA(t,e,n,r){var i=ke,s=po.transition;po.transition=null;try{ke=4,Mm(t,e,n,r)}finally{ke=i,po.transition=s}}function Mm(t,e,n,r){if(Dc){var i=ap(t,e,n,r);if(i===null)lf(t,e,r,Nc,n),Jy(t,r);else if(kA(i,t,e,n,r))r.stopPropagation();else if(Jy(t,r),e&4&&-1<RA.indexOf(t)){for(;i!==null;){var s=Bl(i);if(s!==null&&p2(s),s=ap(t,e,n,r),s===null&&lf(t,e,r,Nc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lf(t,e,r,null,n)}}var Nc=null;function ap(t,e,n,r){if(Nc=null,t=Nm(r),t=qi(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o2(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nc=t,null}function _2(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vA()){case Vm:return 1;case c2:return 4;case Cc:case _A:return 16;case h2:return 536870912;default:return 16}default:return 16}}var Gr=null,Fm=null,Zu=null;function w2(){if(Zu)return Zu;var t,e=Fm,n=e.length,r,i="value"in Gr?Gr.value:Gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zu=i.slice(t,1<r?1-r:void 0)}function ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pu(){return!0}function ev(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pu:ev,this.isPropagationStopped=ev,this}return We(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pu)},persist:function(){},isPersistent:Pu}),e}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Um=_n(Ho),zl=We({},Ho,{view:0,detail:0}),DA=_n(zl),Jd,Zd,Ea,Ph=We({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ea&&(Ea&&t.type==="mousemove"?(Jd=t.screenX-Ea.screenX,Zd=t.screenY-Ea.screenY):Zd=Jd=0,Ea=t),Jd)},movementY:function(t){return"movementY"in t?t.movementY:Zd}}),tv=_n(Ph),NA=We({},Ph,{dataTransfer:0}),VA=_n(NA),OA=We({},zl,{relatedTarget:0}),ef=_n(OA),LA=We({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),MA=_n(LA),FA=We({},Ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),UA=_n(FA),jA=We({},Ho,{data:0}),nv=_n(jA),zA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$A={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$A[t])?!!e[t]:!1}function jm(){return qA}var WA=We({},zl,{key:function(t){if(t.key){var e=zA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jm,charCode:function(t){return t.type==="keypress"?ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HA=_n(WA),GA=We({},Ph,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rv=_n(GA),KA=We({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jm}),QA=_n(KA),YA=We({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),XA=_n(YA),JA=We({},Ph,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZA=_n(JA),eR=[9,13,27,32],zm=_r&&"CompositionEvent"in window,Ka=null;_r&&"documentMode"in document&&(Ka=document.documentMode);var tR=_r&&"TextEvent"in window&&!Ka,E2=_r&&(!zm||Ka&&8<Ka&&11>=Ka),iv=" ",sv=!1;function I2(t,e){switch(t){case"keyup":return eR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T2(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function nR(t,e){switch(t){case"compositionend":return T2(e);case"keypress":return e.which!==32?null:(sv=!0,iv);case"textInput":return t=e.data,t===iv&&sv?null:t;default:return null}}function rR(t,e){if(Zs)return t==="compositionend"||!zm&&I2(t,e)?(t=w2(),Zu=Fm=Gr=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E2&&e.locale!=="ko"?null:e.data;default:return null}}var iR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ov(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iR[t.type]:e==="textarea"}function x2(t,e,n,r){t2(r),e=Vc(e,"onChange"),0<e.length&&(n=new Um("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qa=null,pl=null;function sR(t){O2(t,0)}function Ch(t){var e=no(t);if(Kw(e))return t}function oR(t,e){if(t==="change")return e}var S2=!1;if(_r){var tf;if(_r){var nf="oninput"in document;if(!nf){var av=document.createElement("div");av.setAttribute("oninput","return;"),nf=typeof av.oninput=="function"}tf=nf}else tf=!1;S2=tf&&(!document.documentMode||9<document.documentMode)}function lv(){Qa&&(Qa.detachEvent("onpropertychange",A2),pl=Qa=null)}function A2(t){if(t.propertyName==="value"&&Ch(pl)){var e=[];x2(e,pl,t,Nm(t)),s2(sR,e)}}function aR(t,e,n){t==="focusin"?(lv(),Qa=e,pl=n,Qa.attachEvent("onpropertychange",A2)):t==="focusout"&&lv()}function lR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ch(pl)}function uR(t,e){if(t==="click")return Ch(e)}function cR(t,e){if(t==="input"||t==="change")return Ch(e)}function hR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:hR;function ml(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$f.call(e,i)||!$n(t[i],e[i]))return!1}return!0}function uv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cv(t,e){var n=uv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uv(n)}}function R2(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R2(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k2(){for(var t=window,e=Rc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rc(t.document)}return e}function Bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dR(t){var e=k2(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R2(n.ownerDocument.documentElement,n)){if(r!==null&&Bm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cv(n,s);var o=cv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fR=_r&&"documentMode"in document&&11>=document.documentMode,eo=null,lp=null,Ya=null,up=!1;function hv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;up||eo==null||eo!==Rc(r)||(r=eo,"selectionStart"in r&&Bm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ya&&ml(Ya,r)||(Ya=r,r=Vc(lp,"onSelect"),0<r.length&&(e=new Um("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=eo)))}function Cu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:Cu("Animation","AnimationEnd"),animationiteration:Cu("Animation","AnimationIteration"),animationstart:Cu("Animation","AnimationStart"),transitionend:Cu("Transition","TransitionEnd")},rf={},P2={};_r&&(P2=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function bh(t){if(rf[t])return rf[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P2)return rf[t]=e[n];return t}var C2=bh("animationend"),b2=bh("animationiteration"),D2=bh("animationstart"),N2=bh("transitionend"),V2=new Map,dv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ti(t,e){V2.set(t,e),Ts(e,[t])}for(var sf=0;sf<dv.length;sf++){var of=dv[sf],pR=of.toLowerCase(),mR=of[0].toUpperCase()+of.slice(1);Ti(pR,"on"+mR)}Ti(C2,"onAnimationEnd");Ti(b2,"onAnimationIteration");Ti(D2,"onAnimationStart");Ti("dblclick","onDoubleClick");Ti("focusin","onFocus");Ti("focusout","onBlur");Ti(N2,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function fv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pA(r,e,void 0,t),t.currentTarget=null}function O2(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;fv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;fv(i,a,c),s=u}}}if(Pc)throw t=ip,Pc=!1,ip=null,t}function Ve(t,e){var n=e[pp];n===void 0&&(n=e[pp]=new Set);var r=t+"__bubble";n.has(r)||(L2(e,t,2,!1),n.add(r))}function af(t,e,n){var r=0;e&&(r|=4),L2(n,t,r,e)}var bu="_reactListening"+Math.random().toString(36).slice(2);function gl(t){if(!t[bu]){t[bu]=!0,$w.forEach(function(n){n!=="selectionchange"&&(gR.has(n)||af(n,!1,t),af(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bu]||(e[bu]=!0,af("selectionchange",!1,e))}}function L2(t,e,n,r){switch(_2(e)){case 1:var i=CA;break;case 4:i=bA;break;default:i=Mm}n=i.bind(null,e,n,t),i=void 0,!rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=qi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}s2(function(){var c=s,d=Nm(n),f=[];e:{var m=V2.get(t);if(m!==void 0){var _=Um,T=t;switch(t){case"keypress":if(ec(n)===0)break e;case"keydown":case"keyup":_=HA;break;case"focusin":T="focus",_=ef;break;case"focusout":T="blur",_=ef;break;case"beforeblur":case"afterblur":_=ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=VA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=QA;break;case C2:case b2:case D2:_=MA;break;case N2:_=XA;break;case"scroll":_=DA;break;case"wheel":_=ZA;break;case"copy":case"cut":case"paste":_=UA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=rv}var R=(e&4)!==0,P=!R&&t==="scroll",w=R?m!==null?m+"Capture":null:m;R=[];for(var E=c,S;E!==null;){S=E;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,w!==null&&(D=cl(E,w),D!=null&&R.push(yl(E,D,S)))),P)break;E=E.return}0<R.length&&(m=new _(m,T,null,n,d),f.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==tp&&(T=n.relatedTarget||n.fromElement)&&(qi(T)||T[wr]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=c,T=T?qi(T):null,T!==null&&(P=xs(T),T!==P||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=c),_!==T)){if(R=tv,D="onMouseLeave",w="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(R=rv,D="onPointerLeave",w="onPointerEnter",E="pointer"),P=_==null?m:no(_),S=T==null?m:no(T),m=new R(D,E+"leave",_,n,d),m.target=P,m.relatedTarget=S,D=null,qi(d)===c&&(R=new R(w,E+"enter",T,n,d),R.target=S,R.relatedTarget=P,D=R),P=D,_&&T)t:{for(R=_,w=T,E=0,S=R;S;S=Us(S))E++;for(S=0,D=w;D;D=Us(D))S++;for(;0<E-S;)R=Us(R),E--;for(;0<S-E;)w=Us(w),S--;for(;E--;){if(R===w||w!==null&&R===w.alternate)break t;R=Us(R),w=Us(w)}R=null}else R=null;_!==null&&pv(f,m,_,R,!1),T!==null&&P!==null&&pv(f,P,T,R,!0)}}e:{if(m=c?no(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var M=oR;else if(ov(m))if(S2)M=cR;else{M=lR;var V=aR}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=uR);if(M&&(M=M(t,c))){x2(f,M,n,d);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&Yf(m,"number",m.value)}switch(V=c?no(c):window,t){case"focusin":(ov(V)||V.contentEditable==="true")&&(eo=V,lp=c,Ya=null);break;case"focusout":Ya=lp=eo=null;break;case"mousedown":up=!0;break;case"contextmenu":case"mouseup":case"dragend":up=!1,hv(f,n,d);break;case"selectionchange":if(fR)break;case"keydown":case"keyup":hv(f,n,d)}var y;if(zm)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Zs?I2(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(E2&&n.locale!=="ko"&&(Zs||g!=="onCompositionStart"?g==="onCompositionEnd"&&Zs&&(y=w2()):(Gr=d,Fm="value"in Gr?Gr.value:Gr.textContent,Zs=!0)),V=Vc(c,g),0<V.length&&(g=new nv(g,t,null,n,d),f.push({event:g,listeners:V}),y?g.data=y:(y=T2(n),y!==null&&(g.data=y)))),(y=tR?nR(t,n):rR(t,n))&&(c=Vc(c,"onBeforeInput"),0<c.length&&(d=new nv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=y))}O2(f,e)})}function yl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=cl(t,n),s!=null&&r.unshift(yl(t,s,i)),s=cl(t,e),s!=null&&r.push(yl(t,s,i))),t=t.return}return r}function Us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=cl(n,s),u!=null&&o.unshift(yl(n,u,a))):i||(u=cl(n,s),u!=null&&o.push(yl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yR=/\r\n?/g,vR=/\u0000|\uFFFD/g;function mv(t){return(typeof t=="string"?t:""+t).replace(yR,`
`).replace(vR,"")}function Du(t,e,n){if(e=mv(e),mv(t)!==e&&n)throw Error(H(425))}function Oc(){}var cp=null,hp=null;function dp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fp=typeof setTimeout=="function"?setTimeout:void 0,_R=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,wR=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(t){return gv.resolve(null).then(t).catch(ER)}:fp;function ER(t){setTimeout(function(){throw t})}function uf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fl(e)}function ri(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Go=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Go,vl="__reactProps$"+Go,wr="__reactContainer$"+Go,pp="__reactEvents$"+Go,IR="__reactListeners$"+Go,TR="__reactHandles$"+Go;function qi(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yv(t);t!==null;){if(n=t[Gn])return n;t=yv(t)}return e}t=n,n=t.parentNode}return null}function Bl(t){return t=t[Gn]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Dh(t){return t[vl]||null}var mp=[],ro=-1;function xi(t){return{current:t}}function Le(t){0>ro||(t.current=mp[ro],mp[ro]=null,ro--)}function De(t,e){ro++,mp[ro]=t.current,t.current=e}var yi={},Ot=xi(yi),tn=xi(!1),rs=yi;function To(t,e){var n=t.type.contextTypes;if(!n)return yi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nn(t){return t=t.childContextTypes,t!=null}function Lc(){Le(tn),Le(Ot)}function vv(t,e,n){if(Ot.current!==yi)throw Error(H(168));De(Ot,e),De(tn,n)}function M2(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,aA(t)||"Unknown",i));return We({},n,r)}function Mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yi,rs=Ot.current,De(Ot,t),De(tn,tn.current),!0}function _v(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=M2(t,e,rs),r.__reactInternalMemoizedMergedChildContext=t,Le(tn),Le(Ot),De(Ot,t)):Le(tn),De(tn,n)}var cr=null,Nh=!1,cf=!1;function F2(t){cr===null?cr=[t]:cr.push(t)}function xR(t){Nh=!0,F2(t)}function Si(){if(!cf&&cr!==null){cf=!0;var t=0,e=ke;try{var n=cr;for(ke=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,Nh=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),u2(Vm,Si),i}finally{ke=e,cf=!1}}return null}var io=[],so=0,Fc=null,Uc=0,En=[],In=0,is=null,dr=1,fr="";function Li(t,e){io[so++]=Uc,io[so++]=Fc,Fc=t,Uc=e}function U2(t,e,n){En[In++]=dr,En[In++]=fr,En[In++]=is,is=t;var r=dr;t=fr;var i=32-jn(r)-1;r&=~(1<<i),n+=1;var s=32-jn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dr=1<<32-jn(e)+i|n<<i|r,fr=s+t}else dr=1<<s|n<<i|r,fr=t}function $m(t){t.return!==null&&(Li(t,1),U2(t,1,0))}function qm(t){for(;t===Fc;)Fc=io[--so],io[so]=null,Uc=io[--so],io[so]=null;for(;t===is;)is=En[--In],En[In]=null,fr=En[--In],En[In]=null,dr=En[--In],En[In]=null}var mn=null,hn=null,Fe=!1,Fn=null;function j2(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,hn=ri(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:dr,overflow:fr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,hn=null,!0):!1;default:return!1}}function gp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yp(t){if(Fe){var e=hn;if(e){var n=e;if(!wv(t,e)){if(gp(t))throw Error(H(418));e=ri(n.nextSibling);var r=mn;e&&wv(t,e)?j2(r,n):(t.flags=t.flags&-4097|2,Fe=!1,mn=t)}}else{if(gp(t))throw Error(H(418));t.flags=t.flags&-4097|2,Fe=!1,mn=t}}}function Ev(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Nu(t){if(t!==mn)return!1;if(!Fe)return Ev(t),Fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dp(t.type,t.memoizedProps)),e&&(e=hn)){if(gp(t))throw z2(),Error(H(418));for(;e;)j2(t,e),e=ri(e.nextSibling)}if(Ev(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=ri(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=mn?ri(t.stateNode.nextSibling):null;return!0}function z2(){for(var t=hn;t;)t=ri(t.nextSibling)}function xo(){hn=mn=null,Fe=!1}function Wm(t){Fn===null?Fn=[t]:Fn.push(t)}var SR=Ar.ReactCurrentBatchConfig;function Ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Vu(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Iv(t){var e=t._init;return e(t._payload)}function B2(t){function e(w,E){if(t){var S=w.deletions;S===null?(w.deletions=[E],w.flags|=16):S.push(E)}}function n(w,E){if(!t)return null;for(;E!==null;)e(w,E),E=E.sibling;return null}function r(w,E){for(w=new Map;E!==null;)E.key!==null?w.set(E.key,E):w.set(E.index,E),E=E.sibling;return w}function i(w,E){return w=ai(w,E),w.index=0,w.sibling=null,w}function s(w,E,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<E?(w.flags|=2,E):S):(w.flags|=2,E)):(w.flags|=1048576,E)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,E,S,D){return E===null||E.tag!==6?(E=yf(S,w.mode,D),E.return=w,E):(E=i(E,S),E.return=w,E)}function u(w,E,S,D){var M=S.type;return M===Js?d(w,E,S.props.children,D,S.key):E!==null&&(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fr&&Iv(M)===E.type)?(D=i(E,S.props),D.ref=Ia(w,E,S),D.return=w,D):(D=ac(S.type,S.key,S.props,null,w.mode,D),D.ref=Ia(w,E,S),D.return=w,D)}function c(w,E,S,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=vf(S,w.mode,D),E.return=w,E):(E=i(E,S.children||[]),E.return=w,E)}function d(w,E,S,D,M){return E===null||E.tag!==7?(E=Yi(S,w.mode,D,M),E.return=w,E):(E=i(E,S),E.return=w,E)}function f(w,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=yf(""+E,w.mode,S),E.return=w,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Tu:return S=ac(E.type,E.key,E.props,null,w.mode,S),S.ref=Ia(w,null,E),S.return=w,S;case Xs:return E=vf(E,w.mode,S),E.return=w,E;case Fr:var D=E._init;return f(w,D(E._payload),S)}if(Da(E)||ya(E))return E=Yi(E,w.mode,S,null),E.return=w,E;Vu(w,E)}return null}function m(w,E,S,D){var M=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:a(w,E,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Tu:return S.key===M?u(w,E,S,D):null;case Xs:return S.key===M?c(w,E,S,D):null;case Fr:return M=S._init,m(w,E,M(S._payload),D)}if(Da(S)||ya(S))return M!==null?null:d(w,E,S,D,null);Vu(w,S)}return null}function _(w,E,S,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(S)||null,a(E,w,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Tu:return w=w.get(D.key===null?S:D.key)||null,u(E,w,D,M);case Xs:return w=w.get(D.key===null?S:D.key)||null,c(E,w,D,M);case Fr:var V=D._init;return _(w,E,S,V(D._payload),M)}if(Da(D)||ya(D))return w=w.get(S)||null,d(E,w,D,M,null);Vu(E,D)}return null}function T(w,E,S,D){for(var M=null,V=null,y=E,g=E=0,I=null;y!==null&&g<S.length;g++){y.index>g?(I=y,y=null):I=y.sibling;var x=m(w,y,S[g],D);if(x===null){y===null&&(y=I);break}t&&y&&x.alternate===null&&e(w,y),E=s(x,E,g),V===null?M=x:V.sibling=x,V=x,y=I}if(g===S.length)return n(w,y),Fe&&Li(w,g),M;if(y===null){for(;g<S.length;g++)y=f(w,S[g],D),y!==null&&(E=s(y,E,g),V===null?M=y:V.sibling=y,V=y);return Fe&&Li(w,g),M}for(y=r(w,y);g<S.length;g++)I=_(y,w,g,S[g],D),I!==null&&(t&&I.alternate!==null&&y.delete(I.key===null?g:I.key),E=s(I,E,g),V===null?M=I:V.sibling=I,V=I);return t&&y.forEach(function(C){return e(w,C)}),Fe&&Li(w,g),M}function R(w,E,S,D){var M=ya(S);if(typeof M!="function")throw Error(H(150));if(S=M.call(S),S==null)throw Error(H(151));for(var V=M=null,y=E,g=E=0,I=null,x=S.next();y!==null&&!x.done;g++,x=S.next()){y.index>g?(I=y,y=null):I=y.sibling;var C=m(w,y,x.value,D);if(C===null){y===null&&(y=I);break}t&&y&&C.alternate===null&&e(w,y),E=s(C,E,g),V===null?M=C:V.sibling=C,V=C,y=I}if(x.done)return n(w,y),Fe&&Li(w,g),M;if(y===null){for(;!x.done;g++,x=S.next())x=f(w,x.value,D),x!==null&&(E=s(x,E,g),V===null?M=x:V.sibling=x,V=x);return Fe&&Li(w,g),M}for(y=r(w,y);!x.done;g++,x=S.next())x=_(y,w,g,x.value,D),x!==null&&(t&&x.alternate!==null&&y.delete(x.key===null?g:x.key),E=s(x,E,g),V===null?M=x:V.sibling=x,V=x);return t&&y.forEach(function(b){return e(w,b)}),Fe&&Li(w,g),M}function P(w,E,S,D){if(typeof S=="object"&&S!==null&&S.type===Js&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Tu:e:{for(var M=S.key,V=E;V!==null;){if(V.key===M){if(M=S.type,M===Js){if(V.tag===7){n(w,V.sibling),E=i(V,S.props.children),E.return=w,w=E;break e}}else if(V.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fr&&Iv(M)===V.type){n(w,V.sibling),E=i(V,S.props),E.ref=Ia(w,V,S),E.return=w,w=E;break e}n(w,V);break}else e(w,V);V=V.sibling}S.type===Js?(E=Yi(S.props.children,w.mode,D,S.key),E.return=w,w=E):(D=ac(S.type,S.key,S.props,null,w.mode,D),D.ref=Ia(w,E,S),D.return=w,w=D)}return o(w);case Xs:e:{for(V=S.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){n(w,E.sibling),E=i(E,S.children||[]),E.return=w,w=E;break e}else{n(w,E);break}else e(w,E);E=E.sibling}E=vf(S,w.mode,D),E.return=w,w=E}return o(w);case Fr:return V=S._init,P(w,E,V(S._payload),D)}if(Da(S))return T(w,E,S,D);if(ya(S))return R(w,E,S,D);Vu(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(n(w,E.sibling),E=i(E,S),E.return=w,w=E):(n(w,E),E=yf(S,w.mode,D),E.return=w,w=E),o(w)):n(w,E)}return P}var So=B2(!0),$2=B2(!1),jc=xi(null),zc=null,oo=null,Hm=null;function Gm(){Hm=oo=zc=null}function Km(t){var e=jc.current;Le(jc),t._currentValue=e}function vp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mo(t,e){zc=t,Hm=oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Hm!==t)if(t={context:t,memoizedValue:e,next:null},oo===null){if(zc===null)throw Error(H(308));oo=t,zc.dependencies={lanes:0,firstContext:t}}else oo=oo.next=t;return e}var Wi=null;function Qm(t){Wi===null?Wi=[t]:Wi.push(t)}function q2(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function Ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W2(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ii(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Er(t,n)}return i=r.interleaved,i===null?(e.next=e,Qm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Er(t,n)}function tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Om(t,n)}}function Tv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bc(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,_=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,R=a;switch(m=e,_=n,R.tag){case 1:if(T=R.payload,typeof T=="function"){f=T.call(_,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=R.payload,m=typeof T=="function"?T.call(_,f,m):T,m==null)break e;f=We({},f,m);break e;case 2:Ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,u=f):d=d.next=_,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);os|=o,t.lanes=o,t.memoizedState=f}}function xv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var $l={},Jn=xi($l),_l=xi($l),wl=xi($l);function Hi(t){if(t===$l)throw Error(H(174));return t}function Xm(t,e){switch(De(wl,e),De(_l,t),De(Jn,$l),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jf(e,t)}Le(Jn),De(Jn,e)}function Ao(){Le(Jn),Le(_l),Le(wl)}function H2(t){Hi(wl.current);var e=Hi(Jn.current),n=Jf(e,t.type);e!==n&&(De(_l,t),De(Jn,n))}function Jm(t){_l.current===t&&(Le(Jn),Le(_l))}var ze=xi(0);function $c(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hf=[];function Zm(){for(var t=0;t<hf.length;t++)hf[t]._workInProgressVersionPrimary=null;hf.length=0}var nc=Ar.ReactCurrentDispatcher,df=Ar.ReactCurrentBatchConfig,ss=0,$e=null,ut=null,pt=null,qc=!1,Xa=!1,El=0,AR=0;function Rt(){throw Error(H(321))}function eg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function tg(t,e,n,r,i,s){if(ss=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nc.current=t===null||t.memoizedState===null?CR:bR,t=n(r,i),Xa){s=0;do{if(Xa=!1,El=0,25<=s)throw Error(H(301));s+=1,pt=ut=null,e.updateQueue=null,nc.current=DR,t=n(r,i)}while(Xa)}if(nc.current=Wc,e=ut!==null&&ut.next!==null,ss=0,pt=ut=$e=null,qc=!1,e)throw Error(H(300));return t}function ng(){var t=El!==0;return El=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?$e.memoizedState=pt=t:pt=pt.next=t,pt}function Cn(){if(ut===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=pt===null?$e.memoizedState:pt.next;if(e!==null)pt=e,ut=t;else{if(t===null)throw Error(H(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},pt===null?$e.memoizedState=pt=t:pt=pt.next=t}return pt}function Il(t,e){return typeof e=="function"?e(t):e}function ff(t){var e=Cn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((ss&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,$e.lanes|=d,os|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,$n(r,e.memoizedState)||(Zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,$e.lanes|=s,os|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pf(t){var e=Cn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$n(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function G2(){}function K2(t,e){var n=$e,r=Cn(),i=e(),s=!$n(r.memoizedState,i);if(s&&(r.memoizedState=i,Zt=!0),r=r.queue,rg(X2.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,Tl(9,Y2.bind(null,n,r,i,e),void 0,null),yt===null)throw Error(H(349));ss&30||Q2(n,e,i)}return i}function Q2(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y2(t,e,n,r){e.value=n,e.getSnapshot=r,J2(e)&&Z2(t)}function X2(t,e,n){return n(function(){J2(e)&&Z2(t)})}function J2(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function Z2(t){var e=Er(t,1);e!==null&&zn(e,t,1,-1)}function Sv(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Il,lastRenderedState:t},e.queue=t,t=t.dispatch=PR.bind(null,$e,t),[e.memoizedState,t]}function Tl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eE(){return Cn().memoizedState}function rc(t,e,n,r){var i=Wn();$e.flags|=t,i.memoizedState=Tl(1|e,n,void 0,r===void 0?null:r)}function Vh(t,e,n,r){var i=Cn();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&eg(r,o.deps)){i.memoizedState=Tl(e,n,s,r);return}}$e.flags|=t,i.memoizedState=Tl(1|e,n,s,r)}function Av(t,e){return rc(8390656,8,t,e)}function rg(t,e){return Vh(2048,8,t,e)}function tE(t,e){return Vh(4,2,t,e)}function nE(t,e){return Vh(4,4,t,e)}function rE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iE(t,e,n){return n=n!=null?n.concat([t]):null,Vh(4,4,rE.bind(null,e,t),n)}function ig(){}function sE(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function oE(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function aE(t,e,n){return ss&21?($n(n,e)||(n=d2(),$e.lanes|=n,os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function RR(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var r=df.transition;df.transition={};try{t(!1),e()}finally{ke=n,df.transition=r}}function lE(){return Cn().memoizedState}function kR(t,e,n){var r=oi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uE(t))cE(e,n);else if(n=q2(t,e,n,r),n!==null){var i=$t();zn(n,t,r,i),hE(n,e,r)}}function PR(t,e,n){var r=oi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uE(t))cE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$n(a,o)){var u=e.interleaved;u===null?(i.next=i,Qm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=q2(t,e,i,r),n!==null&&(i=$t(),zn(n,t,r,i),hE(n,e,r))}}function uE(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function cE(t,e){Xa=qc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Om(t,n)}}var Wc={readContext:Pn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},CR={readContext:Pn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Av,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,rE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kR.bind(null,$e,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Sv,useDebugValue:ig,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Sv(!1),e=t[0];return t=RR.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$e,i=Wn();if(Fe){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),yt===null)throw Error(H(349));ss&30||Q2(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Av(X2.bind(null,r,s,t),[t]),r.flags|=2048,Tl(9,Y2.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=yt.identifierPrefix;if(Fe){var n=fr,r=dr;n=(r&~(1<<32-jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=El++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bR={readContext:Pn,useCallback:sE,useContext:Pn,useEffect:rg,useImperativeHandle:iE,useInsertionEffect:tE,useLayoutEffect:nE,useMemo:oE,useReducer:ff,useRef:eE,useState:function(){return ff(Il)},useDebugValue:ig,useDeferredValue:function(t){var e=Cn();return aE(e,ut.memoizedState,t)},useTransition:function(){var t=ff(Il)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:G2,useSyncExternalStore:K2,useId:lE,unstable_isNewReconciler:!1},DR={readContext:Pn,useCallback:sE,useContext:Pn,useEffect:rg,useImperativeHandle:iE,useInsertionEffect:tE,useLayoutEffect:nE,useMemo:oE,useReducer:pf,useRef:eE,useState:function(){return pf(Il)},useDebugValue:ig,useDeferredValue:function(t){var e=Cn();return ut===null?e.memoizedState=t:aE(e,ut.memoizedState,t)},useTransition:function(){var t=pf(Il)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:G2,useSyncExternalStore:K2,useId:lE,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=We({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _p(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:We({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Oh={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$t(),i=oi(t),s=vr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(zn(e,t,i,r),tc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$t(),i=oi(t),s=vr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(zn(e,t,i,r),tc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),r=oi(t),i=vr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ii(t,i,r),e!==null&&(zn(e,t,r,n),tc(e,t,r))}};function Rv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ml(n,r)||!ml(i,s):!0}function dE(t,e,n){var r=!1,i=yi,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(i=nn(e)?rs:Ot.current,r=e.contextTypes,s=(r=r!=null)?To(t,i):yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Oh.enqueueReplaceState(e,e.state,null)}function wp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ym(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pn(s):(s=nn(e)?rs:Ot.current,i.context=To(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_p(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Oh.enqueueReplaceState(i,i.state,null),Bc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ro(t,e){try{var n="",r=e;do n+=oA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ep(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NR=typeof WeakMap=="function"?WeakMap:Map;function fE(t,e,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gc||(Gc=!0,bp=r),Ep(t,e)},n}function pE(t,e,n){n=vr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ep(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ep(t,e),typeof r!="function"&&(si===null?si=new Set([this]):si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new NR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=GR.bind(null,t,e,n),e.then(t,t))}function Cv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vr(-1,1),e.tag=2,ii(n,e,1))),n.lanes|=1),t)}var VR=Ar.ReactCurrentOwner,Zt=!1;function zt(t,e,n,r){e.child=t===null?$2(e,null,n,r):So(e,t.child,n,r)}function Dv(t,e,n,r,i){n=n.render;var s=e.ref;return mo(e,i),r=tg(t,e,n,r,s,i),n=ng(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ir(t,e,i)):(Fe&&n&&$m(e),e.flags|=1,zt(t,e,r,i),e.child)}function Nv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mE(t,e,s,r,i)):(t=ac(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(o,r)&&t.ref===e.ref)return Ir(t,e,i)}return e.flags|=1,t=ai(s,r),t.ref=e.ref,t.return=e,e.child=t}function mE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ml(s,r)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,Ir(t,e,i)}return Ip(t,e,n,r,i)}function gE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(lo,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,De(lo,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,De(lo,un),un|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,De(lo,un),un|=r;return zt(t,e,i,n),e.child}function yE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ip(t,e,n,r,i){var s=nn(n)?rs:Ot.current;return s=To(e,s),mo(e,i),n=tg(t,e,n,r,s,i),r=ng(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ir(t,e,i)):(Fe&&r&&$m(e),e.flags|=1,zt(t,e,n,i),e.child)}function Vv(t,e,n,r,i){if(nn(n)){var s=!0;Mc(e)}else s=!1;if(mo(e,i),e.stateNode===null)ic(t,e),dE(e,n,r),wp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=nn(n)?rs:Ot.current,c=To(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&kv(e,o,r,c),Ur=!1;var m=e.memoizedState;o.state=m,Bc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||tn.current||Ur?(typeof d=="function"&&(_p(e,n,d,r),u=e.memoizedState),(a=Ur||Rv(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,W2(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ln(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pn(u):(u=nn(n)?rs:Ot.current,u=To(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&kv(e,o,r,u),Ur=!1,m=e.memoizedState,o.state=m,Bc(e,r,o,i);var T=e.memoizedState;a!==f||m!==T||tn.current||Ur?(typeof _=="function"&&(_p(e,n,_,r),T=e.memoizedState),(c=Ur||Rv(e,n,c,r,m,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Tp(t,e,n,r,s,i)}function Tp(t,e,n,r,i,s){yE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_v(e,n,!1),Ir(t,e,s);r=e.stateNode,VR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=So(e,t.child,null,s),e.child=So(e,null,a,s)):zt(t,e,a,s),e.memoizedState=r.state,i&&_v(e,n,!0),e.child}function vE(t){var e=t.stateNode;e.pendingContext?vv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vv(t,e.context,!1),Xm(t,e.containerInfo)}function Ov(t,e,n,r,i){return xo(),Wm(i),e.flags|=256,zt(t,e,n,r),e.child}var xp={dehydrated:null,treeContext:null,retryLane:0};function Sp(t){return{baseLanes:t,cachePool:null,transitions:null}}function _E(t,e,n){var r=e.pendingProps,i=ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),De(ze,i&1),t===null)return yp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fh(o,r,0,null),t=Yi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sp(n),e.memoizedState=xp,t):sg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return OR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ai(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ai(a,s):(s=Yi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xp,r}return s=t.child,t=s.sibling,r=ai(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sg(t,e){return e=Fh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ou(t,e,n,r){return r!==null&&Wm(r),So(e,t.child,null,n),t=sg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function OR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mf(Error(H(422))),Ou(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fh({mode:"visible",children:r.children},i,0,null),s=Yi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&So(e,t.child,null,o),e.child.memoizedState=Sp(o),e.memoizedState=xp,s);if(!(e.mode&1))return Ou(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=mf(s,r,void 0),Ou(t,e,o,r)}if(a=(o&t.childLanes)!==0,Zt||a){if(r=yt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(t,i),zn(r,t,i,-1))}return hg(),r=mf(Error(H(421))),Ou(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=KR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,hn=ri(i.nextSibling),mn=e,Fe=!0,Fn=null,t!==null&&(En[In++]=dr,En[In++]=fr,En[In++]=is,dr=t.id,fr=t.overflow,is=e),e=sg(e,r.children),e.flags|=4096,e)}function Lv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vp(t.return,e,n)}function gf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(zt(t,e,r.children,n),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lv(t,n,e);else if(t.tag===19)Lv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(De(ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$c(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$c(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gf(e,!0,n,null,s);break;case"together":gf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ic(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function LR(t,e,n){switch(e.tag){case 3:vE(e),xo();break;case 5:H2(e);break;case 1:nn(e.type)&&Mc(e);break;case 4:Xm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;De(jc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(De(ze,ze.current&1),e.flags|=128,null):n&e.child.childLanes?_E(t,e,n):(De(ze,ze.current&1),t=Ir(t,e,n),t!==null?t.sibling:null);De(ze,ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,gE(t,e,n)}return Ir(t,e,n)}var EE,Ap,IE,TE;EE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ap=function(){};IE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hi(Jn.current);var s=null;switch(n){case"input":i=Kf(t,i),r=Kf(t,r),s=[];break;case"select":i=We({},i,{value:void 0}),r=We({},r,{value:void 0}),s=[];break;case"textarea":i=Xf(t,i),r=Xf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oc)}Zf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ll.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ll.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ve("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};TE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ta(t,e){if(!Fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MR(t,e,n){var r=e.pendingProps;switch(qm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return nn(e.type)&&Lc(),kt(e),null;case 3:return r=e.stateNode,Ao(),Le(tn),Le(Ot),Zm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Nu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Vp(Fn),Fn=null))),Ap(t,e),kt(e),null;case 5:Jm(e);var i=Hi(wl.current);if(n=e.type,t!==null&&e.stateNode!=null)IE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return kt(e),null}if(t=Hi(Jn.current),Nu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Gn]=e,r[vl]=s,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<Va.length;i++)Ve(Va[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":Wy(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":Gy(r,s),Ve("invalid",r)}Zf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Du(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Du(r.textContent,a,t),i=["children",""+a]):ll.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",r)}switch(n){case"input":xu(r),Hy(r,s,!0);break;case"textarea":xu(r),Ky(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Gn]=e,t[vl]=r,EE(t,e,!1,!1),e.stateNode=t;e:{switch(o=ep(n,r),n){case"dialog":Ve("cancel",t),Ve("close",t),i=r;break;case"iframe":case"object":case"embed":Ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Va.length;i++)Ve(Va[i],t);i=r;break;case"source":Ve("error",t),i=r;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),i=r;break;case"details":Ve("toggle",t),i=r;break;case"input":Wy(t,r),i=Kf(t,r),Ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=We({},r,{value:void 0}),Ve("invalid",t);break;case"textarea":Gy(t,r),i=Xf(t,r),Ve("invalid",t);break;default:i=r}Zf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?e2(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Jw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ul(t,u):typeof u=="number"&&ul(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ll.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ve("scroll",t):u!=null&&Pm(t,s,u,o))}switch(n){case"input":xu(t),Hy(t,r,!1);break;case"textarea":xu(t),Ky(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?co(t,!!r.multiple,s,!1):r.defaultValue!=null&&co(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Oc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)TE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Hi(wl.current),Hi(Jn.current),Nu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gn]=e,(s=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Du(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Du(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gn]=e,e.stateNode=r}return kt(e),null;case 13:if(Le(ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Fe&&hn!==null&&e.mode&1&&!(e.flags&128))z2(),xo(),e.flags|=98560,s=!1;else if(s=Nu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[Gn]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Fn!==null&&(Vp(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ze.current&1?ct===0&&(ct=3):hg())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Ao(),Ap(t,e),t===null&&gl(e.stateNode.containerInfo),kt(e),null;case 10:return Km(e.type._context),kt(e),null;case 17:return nn(e.type)&&Lc(),kt(e),null;case 19:if(Le(ze),s=e.memoizedState,s===null)return kt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ta(s,!1);else{if(ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$c(t),o!==null){for(e.flags|=128,Ta(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return De(ze,ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>ko&&(e.flags|=128,r=!0,Ta(s,!1),e.lanes=4194304)}else{if(!r)if(t=$c(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Fe)return kt(e),null}else 2*Ze()-s.renderingStartTime>ko&&n!==1073741824&&(e.flags|=128,r=!0,Ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,n=ze.current,De(ze,r?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return cg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function FR(t,e){switch(qm(e),e.tag){case 1:return nn(e.type)&&Lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ao(),Le(tn),Le(Ot),Zm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jm(e),null;case 13:if(Le(ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Le(ze),null;case 4:return Ao(),null;case 10:return Km(e.type._context),null;case 22:case 23:return cg(),null;case 24:return null;default:return null}}var Lu=!1,Ct=!1,UR=typeof WeakSet=="function"?WeakSet:Set,te=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(t,e,r)}else n.current=null}function Rp(t,e,n){try{n()}catch(r){Ke(t,e,r)}}var Mv=!1;function jR(t,e){if(cp=Dc,t=k2(),Bm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hp={focusedElem:t,selectionRange:n},Dc=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){e=te;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var R=T.memoizedProps,P=T.memoizedState,w=e.stateNode,E=w.getSnapshotBeforeUpdate(e.elementType===e.type?R:Ln(e.type,R),P);w.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(D){Ke(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return T=Mv,Mv=!1,T}function Ja(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rp(e,n,s)}i=i.next}while(i!==r)}}function Lh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xE(t){var e=t.alternate;e!==null&&(t.alternate=null,xE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[vl],delete e[pp],delete e[IR],delete e[TR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function SE(t){return t.tag===5||t.tag===3||t.tag===4}function Fv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||SE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oc));else if(r!==4&&(t=t.child,t!==null))for(Pp(t,e,n),t=t.sibling;t!==null;)Pp(t,e,n),t=t.sibling}function Cp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cp(t,e,n),t=t.sibling;t!==null;)Cp(t,e,n),t=t.sibling}var _t=null,Mn=!1;function Nr(t,e,n){for(n=n.child;n!==null;)AE(t,e,n),n=n.sibling}function AE(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(kh,n)}catch{}switch(n.tag){case 5:Ct||ao(n,e);case 6:var r=_t,i=Mn;_t=null,Nr(t,e,n),_t=r,Mn=i,_t!==null&&(Mn?(t=_t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_t.removeChild(n.stateNode));break;case 18:_t!==null&&(Mn?(t=_t,n=n.stateNode,t.nodeType===8?uf(t.parentNode,n):t.nodeType===1&&uf(t,n),fl(t)):uf(_t,n.stateNode));break;case 4:r=_t,i=Mn,_t=n.stateNode.containerInfo,Mn=!0,Nr(t,e,n),_t=r,Mn=i;break;case 0:case 11:case 14:case 15:if(!Ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rp(n,e,o),i=i.next}while(i!==r)}Nr(t,e,n);break;case 1:if(!Ct&&(ao(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ke(n,e,a)}Nr(t,e,n);break;case 21:Nr(t,e,n);break;case 22:n.mode&1?(Ct=(r=Ct)||n.memoizedState!==null,Nr(t,e,n),Ct=r):Nr(t,e,n);break;default:Nr(t,e,n)}}function Uv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UR),e.forEach(function(r){var i=QR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_t=a.stateNode,Mn=!1;break e;case 3:_t=a.stateNode.containerInfo,Mn=!0;break e;case 4:_t=a.stateNode.containerInfo,Mn=!0;break e}a=a.return}if(_t===null)throw Error(H(160));AE(s,o,i),_t=null,Mn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)RE(e,t),e=e.sibling}function RE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),qn(t),r&4){try{Ja(3,t,t.return),Lh(3,t)}catch(R){Ke(t,t.return,R)}try{Ja(5,t,t.return)}catch(R){Ke(t,t.return,R)}}break;case 1:Vn(e,t),qn(t),r&512&&n!==null&&ao(n,n.return);break;case 5:if(Vn(e,t),qn(t),r&512&&n!==null&&ao(n,n.return),t.flags&32){var i=t.stateNode;try{ul(i,"")}catch(R){Ke(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qw(i,s),ep(a,o);var c=ep(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?e2(i,f):d==="dangerouslySetInnerHTML"?Jw(i,f):d==="children"?ul(i,f):Pm(i,d,f,c)}switch(a){case"input":Qf(i,s);break;case"textarea":Yw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?co(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?co(i,!!s.multiple,s.defaultValue,!0):co(i,!!s.multiple,s.multiple?[]:"",!1))}i[vl]=s}catch(R){Ke(t,t.return,R)}}break;case 6:if(Vn(e,t),qn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ke(t,t.return,R)}}break;case 3:if(Vn(e,t),qn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fl(e.containerInfo)}catch(R){Ke(t,t.return,R)}break;case 4:Vn(e,t),qn(t);break;case 13:Vn(e,t),qn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lg=Ze())),r&4&&Uv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ct=(c=Ct)||d,Vn(e,t),Ct=c):Vn(e,t),qn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(te=t,d=t.child;d!==null;){for(f=te=d;te!==null;){switch(m=te,_=m.child,m.tag){case 0:case 11:case 14:case 15:Ja(4,m,m.return);break;case 1:ao(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(R){Ke(r,n,R)}}break;case 5:ao(m,m.return);break;case 22:if(m.memoizedState!==null){zv(f);continue}}_!==null?(_.return=m,te=_):zv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Zw("display",o))}catch(R){Ke(t,t.return,R)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(R){Ke(t,t.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vn(e,t),qn(t),r&4&&Uv(t);break;case 21:break;default:Vn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(SE(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ul(i,""),r.flags&=-33);var s=Fv(t);Cp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Fv(t);Pp(t,a,o);break;default:throw Error(H(161))}}catch(u){Ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zR(t,e,n){te=t,kE(t)}function kE(t,e,n){for(var r=(t.mode&1)!==0;te!==null;){var i=te,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ct;a=Lu;var c=Ct;if(Lu=o,(Ct=u)&&!c)for(te=i;te!==null;)o=te,u=o.child,o.tag===22&&o.memoizedState!==null?Bv(i):u!==null?(u.return=o,te=u):Bv(i);for(;s!==null;)te=s,kE(s),s=s.sibling;te=i,Lu=a,Ct=c}jv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,te=s):jv(t)}}function jv(t){for(;te!==null;){var e=te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ct||Lh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&fl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Ct||e.flags&512&&kp(e)}catch(m){Ke(e,e.return,m)}}if(e===t){te=null;break}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}}function zv(t){for(;te!==null;){var e=te;if(e===t){te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,te=n;break}te=e.return}}function Bv(t){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lh(4,e)}catch(u){Ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ke(e,i,u)}}var s=e.return;try{kp(e)}catch(u){Ke(e,s,u)}break;case 5:var o=e.return;try{kp(e)}catch(u){Ke(e,o,u)}}}catch(u){Ke(e,e.return,u)}if(e===t){te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,te=a;break}te=e.return}}var BR=Math.ceil,Hc=Ar.ReactCurrentDispatcher,og=Ar.ReactCurrentOwner,Rn=Ar.ReactCurrentBatchConfig,ve=0,yt=null,it=null,It=0,un=0,lo=xi(0),ct=0,xl=null,os=0,Mh=0,ag=0,Za=null,Jt=null,lg=0,ko=1/0,lr=null,Gc=!1,bp=null,si=null,Mu=!1,Kr=null,Kc=0,el=0,Dp=null,sc=-1,oc=0;function $t(){return ve&6?Ze():sc!==-1?sc:sc=Ze()}function oi(t){return t.mode&1?ve&2&&It!==0?It&-It:SR.transition!==null?(oc===0&&(oc=d2()),oc):(t=ke,t!==0||(t=window.event,t=t===void 0?16:_2(t.type)),t):1}function zn(t,e,n,r){if(50<el)throw el=0,Dp=null,Error(H(185));jl(t,n,r),(!(ve&2)||t!==yt)&&(t===yt&&(!(ve&2)&&(Mh|=n),ct===4&&zr(t,It)),rn(t,r),n===1&&ve===0&&!(e.mode&1)&&(ko=Ze()+500,Nh&&Si()))}function rn(t,e){var n=t.callbackNode;SA(t,e);var r=bc(t,t===yt?It:0);if(r===0)n!==null&&Xy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xy(n),e===1)t.tag===0?xR($v.bind(null,t)):F2($v.bind(null,t)),wR(function(){!(ve&6)&&Si()}),n=null;else{switch(f2(r)){case 1:n=Vm;break;case 4:n=c2;break;case 16:n=Cc;break;case 536870912:n=h2;break;default:n=Cc}n=LE(n,PE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function PE(t,e){if(sc=-1,oc=0,ve&6)throw Error(H(327));var n=t.callbackNode;if(go()&&t.callbackNode!==n)return null;var r=bc(t,t===yt?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Qc(t,r);else{e=r;var i=ve;ve|=2;var s=bE();(yt!==t||It!==e)&&(lr=null,ko=Ze()+500,Qi(t,e));do try{WR();break}catch(a){CE(t,a)}while(!0);Gm(),Hc.current=s,ve=i,it!==null?e=0:(yt=null,It=0,e=ct)}if(e!==0){if(e===2&&(i=sp(t),i!==0&&(r=i,e=Np(t,i))),e===1)throw n=xl,Qi(t,0),zr(t,r),rn(t,Ze()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!$R(i)&&(e=Qc(t,r),e===2&&(s=sp(t),s!==0&&(r=s,e=Np(t,s))),e===1))throw n=xl,Qi(t,0),zr(t,r),rn(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Mi(t,Jt,lr);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=lg+500-Ze(),10<e)){if(bc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){$t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fp(Mi.bind(null,t,Jt,lr),e);break}Mi(t,Jt,lr);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BR(r/1960))-r,10<r){t.timeoutHandle=fp(Mi.bind(null,t,Jt,lr),r);break}Mi(t,Jt,lr);break;case 5:Mi(t,Jt,lr);break;default:throw Error(H(329))}}}return rn(t,Ze()),t.callbackNode===n?PE.bind(null,t):null}function Np(t,e){var n=Za;return t.current.memoizedState.isDehydrated&&(Qi(t,e).flags|=256),t=Qc(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&Vp(e)),t}function Vp(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function $R(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$n(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~ag,e&=~Mh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),r=1<<n;t[n]=-1,e&=~r}}function $v(t){if(ve&6)throw Error(H(327));go();var e=bc(t,0);if(!(e&1))return rn(t,Ze()),null;var n=Qc(t,e);if(t.tag!==0&&n===2){var r=sp(t);r!==0&&(e=r,n=Np(t,r))}if(n===1)throw n=xl,Qi(t,0),zr(t,e),rn(t,Ze()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mi(t,Jt,lr),rn(t,Ze()),null}function ug(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(ko=Ze()+500,Nh&&Si())}}function as(t){Kr!==null&&Kr.tag===0&&!(ve&6)&&go();var e=ve;ve|=1;var n=Rn.transition,r=ke;try{if(Rn.transition=null,ke=1,t)return t()}finally{ke=r,Rn.transition=n,ve=e,!(ve&6)&&Si()}}function cg(){un=lo.current,Le(lo)}function Qi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_R(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(qm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lc();break;case 3:Ao(),Le(tn),Le(Ot),Zm();break;case 5:Jm(r);break;case 4:Ao();break;case 13:Le(ze);break;case 19:Le(ze);break;case 10:Km(r.type._context);break;case 22:case 23:cg()}n=n.return}if(yt=t,it=t=ai(t.current,null),It=un=e,ct=0,xl=null,ag=Mh=os=0,Jt=Za=null,Wi!==null){for(e=0;e<Wi.length;e++)if(n=Wi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wi=null}return t}function CE(t,e){do{var n=it;try{if(Gm(),nc.current=Wc,qc){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qc=!1}if(ss=0,pt=ut=$e=null,Xa=!1,El=0,og.current=null,n===null||n.return===null){ct=1,xl=e,it=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=It,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Cv(o);if(_!==null){_.flags&=-257,bv(_,o,a,s,e),_.mode&1&&Pv(s,c,e),e=_,u=c;var T=e.updateQueue;if(T===null){var R=new Set;R.add(u),e.updateQueue=R}else T.add(u);break e}else{if(!(e&1)){Pv(s,c,e),hg();break e}u=Error(H(426))}}else if(Fe&&a.mode&1){var P=Cv(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),bv(P,o,a,s,e),Wm(Ro(u,a));break e}}s=u=Ro(u,a),ct!==4&&(ct=2),Za===null?Za=[s]:Za.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=fE(s,u,e);Tv(s,w);break e;case 1:a=u;var E=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(si===null||!si.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=pE(s,a,e);Tv(s,D);break e}}s=s.return}while(s!==null)}NE(n)}catch(M){e=M,it===n&&n!==null&&(it=n=n.return);continue}break}while(!0)}function bE(){var t=Hc.current;return Hc.current=Wc,t===null?Wc:t}function hg(){(ct===0||ct===3||ct===2)&&(ct=4),yt===null||!(os&268435455)&&!(Mh&268435455)||zr(yt,It)}function Qc(t,e){var n=ve;ve|=2;var r=bE();(yt!==t||It!==e)&&(lr=null,Qi(t,e));do try{qR();break}catch(i){CE(t,i)}while(!0);if(Gm(),ve=n,Hc.current=r,it!==null)throw Error(H(261));return yt=null,It=0,ct}function qR(){for(;it!==null;)DE(it)}function WR(){for(;it!==null&&!gA();)DE(it)}function DE(t){var e=OE(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?NE(t):it=e,og.current=null}function NE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FR(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,it=null;return}}else if(n=MR(n,e,un),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);ct===0&&(ct=5)}function Mi(t,e,n){var r=ke,i=Rn.transition;try{Rn.transition=null,ke=1,HR(t,e,n,r)}finally{Rn.transition=i,ke=r}return null}function HR(t,e,n,r){do go();while(Kr!==null);if(ve&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AA(t,s),t===yt&&(it=yt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mu||(Mu=!0,LE(Cc,function(){return go(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=ke;ke=1;var a=ve;ve|=4,og.current=null,jR(t,n),RE(n,t),dR(hp),Dc=!!cp,hp=cp=null,t.current=n,zR(n),yA(),ve=a,ke=o,Rn.transition=s}else t.current=n;if(Mu&&(Mu=!1,Kr=t,Kc=i),s=t.pendingLanes,s===0&&(si=null),wA(n.stateNode),rn(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gc)throw Gc=!1,t=bp,bp=null,t;return Kc&1&&t.tag!==0&&go(),s=t.pendingLanes,s&1?t===Dp?el++:(el=0,Dp=t):el=0,Si(),null}function go(){if(Kr!==null){var t=f2(Kc),e=Rn.transition,n=ke;try{if(Rn.transition=null,ke=16>t?16:t,Kr===null)var r=!1;else{if(t=Kr,Kr=null,Kc=0,ve&6)throw Error(H(331));var i=ve;for(ve|=4,te=t.current;te!==null;){var s=te,o=s.child;if(te.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(te=c;te!==null;){var d=te;switch(d.tag){case 0:case 11:case 15:Ja(8,d,s)}var f=d.child;if(f!==null)f.return=d,te=f;else for(;te!==null;){d=te;var m=d.sibling,_=d.return;if(xE(d),d===c){te=null;break}if(m!==null){m.return=_,te=m;break}te=_}}}var T=s.alternate;if(T!==null){var R=T.child;if(R!==null){T.child=null;do{var P=R.sibling;R.sibling=null,R=P}while(R!==null)}}te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,te=o;else e:for(;te!==null;){if(s=te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ja(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,te=w;break e}te=s.return}}var E=t.current;for(te=E;te!==null;){o=te;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,te=S;else e:for(o=E;te!==null;){if(a=te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lh(9,a)}}catch(M){Ke(a,a.return,M)}if(a===o){te=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,te=D;break e}te=a.return}}if(ve=i,Si(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(kh,t)}catch{}r=!0}return r}finally{ke=n,Rn.transition=e}}return!1}function qv(t,e,n){e=Ro(n,e),e=fE(t,e,1),t=ii(t,e,1),e=$t(),t!==null&&(jl(t,1,e),rn(t,e))}function Ke(t,e,n){if(t.tag===3)qv(t,t,n);else for(;e!==null;){if(e.tag===3){qv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(si===null||!si.has(r))){t=Ro(n,t),t=pE(e,t,1),e=ii(e,t,1),t=$t(),e!==null&&(jl(e,1,t),rn(e,t));break}}e=e.return}}function GR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(It&n)===n&&(ct===4||ct===3&&(It&130023424)===It&&500>Ze()-lg?Qi(t,0):ag|=n),rn(t,e)}function VE(t,e){e===0&&(t.mode&1?(e=Ru,Ru<<=1,!(Ru&130023424)&&(Ru=4194304)):e=1);var n=$t();t=Er(t,e),t!==null&&(jl(t,e,n),rn(t,n))}function KR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),VE(t,n)}function QR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),VE(t,n)}var OE;OE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,LR(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,Fe&&e.flags&1048576&&U2(e,Uc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ic(t,e),t=e.pendingProps;var i=To(e,Ot.current);mo(e,n),i=tg(null,e,r,t,i,n);var s=ng();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(r)?(s=!0,Mc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ym(e),i.updater=Oh,e.stateNode=i,i._reactInternals=e,wp(e,r,t,n),e=Tp(null,e,r,!0,s,n)):(e.tag=0,Fe&&s&&$m(e),zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ic(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=XR(r),t=Ln(r,t),i){case 0:e=Ip(null,e,r,t,n);break e;case 1:e=Vv(null,e,r,t,n);break e;case 11:e=Dv(null,e,r,t,n);break e;case 14:e=Nv(null,e,r,Ln(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Ip(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Vv(t,e,r,i,n);case 3:e:{if(vE(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,W2(t,e),Bc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ro(Error(H(423)),e),e=Ov(t,e,r,n,i);break e}else if(r!==i){i=Ro(Error(H(424)),e),e=Ov(t,e,r,n,i);break e}else for(hn=ri(e.stateNode.containerInfo.firstChild),mn=e,Fe=!0,Fn=null,n=$2(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xo(),r===i){e=Ir(t,e,n);break e}zt(t,e,r,n)}e=e.child}return e;case 5:return H2(e),t===null&&yp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dp(r,i)?o=null:s!==null&&dp(r,s)&&(e.flags|=32),yE(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&yp(e),null;case 13:return _E(t,e,n);case 4:return Xm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=So(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Dv(t,e,r,i,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,De(jc,r._currentValue),r._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===i.children&&!tn.current){e=Ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=vr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),vp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mo(e,n),i=Pn(i),r=r(i),e.flags|=1,zt(t,e,r,n),e.child;case 14:return r=e.type,i=Ln(r,e.pendingProps),i=Ln(r.type,i),Nv(t,e,r,i,n);case 15:return mE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),ic(t,e),e.tag=1,nn(r)?(t=!0,Mc(e)):t=!1,mo(e,n),dE(e,r,i),wp(e,r,i,n),Tp(null,e,r,!0,t,n);case 19:return wE(t,e,n);case 22:return gE(t,e,n)}throw Error(H(156,e.tag))};function LE(t,e){return u2(t,e)}function YR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,r){return new YR(t,e,n,r)}function dg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XR(t){if(typeof t=="function")return dg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bm)return 11;if(t===Dm)return 14}return 2}function ai(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ac(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Js:return Yi(n.children,i,s,e);case Cm:o=8,i|=8;break;case qf:return t=xn(12,n,e,i|2),t.elementType=qf,t.lanes=s,t;case Wf:return t=xn(13,n,e,i),t.elementType=Wf,t.lanes=s,t;case Hf:return t=xn(19,n,e,i),t.elementType=Hf,t.lanes=s,t;case Hw:return Fh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qw:o=10;break e;case Ww:o=9;break e;case bm:o=11;break e;case Dm:o=14;break e;case Fr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=xn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yi(t,e,n,r){return t=xn(7,t,r,e),t.lanes=n,t}function Fh(t,e,n,r){return t=xn(22,t,r,e),t.elementType=Hw,t.lanes=n,t.stateNode={isHidden:!1},t}function yf(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function vf(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xd(0),this.expirationTimes=Xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fg(t,e,n,r,i,s,o,a,u){return t=new JR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ym(s),t}function ZR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ME(t){if(!t)return yi;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(nn(n))return M2(t,n,e)}return e}function FE(t,e,n,r,i,s,o,a,u){return t=fg(n,r,!0,t,i,s,o,a,u),t.context=ME(null),n=t.current,r=$t(),i=oi(n),s=vr(r,i),s.callback=e??null,ii(n,s,i),t.current.lanes=i,jl(t,i,r),rn(t,r),t}function Uh(t,e,n,r){var i=e.current,s=$t(),o=oi(i);return n=ME(n),e.context===null?e.context=n:e.pendingContext=n,e=vr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ii(i,e,o),t!==null&&(zn(t,i,o,s),tc(t,i,o)),o}function Yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pg(t,e){Wv(t,e),(t=t.alternate)&&Wv(t,e)}function ek(){return null}var UE=typeof reportError=="function"?reportError:function(t){console.error(t)};function mg(t){this._internalRoot=t}jh.prototype.render=mg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Uh(t,e,null,null)};jh.prototype.unmount=mg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;as(function(){Uh(null,t,null,null)}),e[wr]=null}};function jh(t){this._internalRoot=t}jh.prototype.unstable_scheduleHydration=function(t){if(t){var e=g2();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jr.length&&e!==0&&e<jr[n].priority;n++);jr.splice(n,0,t),n===0&&v2(t)}};function gg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hv(){}function tk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Yc(o);s.call(c)}}var o=FE(e,r,t,0,null,!1,!1,"",Hv);return t._reactRootContainer=o,t[wr]=o.current,gl(t.nodeType===8?t.parentNode:t),as(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Yc(u);a.call(c)}}var u=fg(t,0,!1,null,null,!1,!1,"",Hv);return t._reactRootContainer=u,t[wr]=u.current,gl(t.nodeType===8?t.parentNode:t),as(function(){Uh(e,u,n,r)}),u}function Bh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Yc(o);a.call(u)}}Uh(e,o,t,i)}else o=tk(n,e,t,i,r);return Yc(o)}p2=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Na(e.pendingLanes);n!==0&&(Om(e,n|1),rn(e,Ze()),!(ve&6)&&(ko=Ze()+500,Si()))}break;case 13:as(function(){var r=Er(t,1);if(r!==null){var i=$t();zn(r,t,1,i)}}),pg(t,1)}};Lm=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=$t();zn(e,t,134217728,n)}pg(t,134217728)}};m2=function(t){if(t.tag===13){var e=oi(t),n=Er(t,e);if(n!==null){var r=$t();zn(n,t,e,r)}pg(t,e)}};g2=function(){return ke};y2=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};np=function(t,e,n){switch(e){case"input":if(Qf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Dh(r);if(!i)throw Error(H(90));Kw(r),Qf(r,i)}}}break;case"textarea":Yw(t,n);break;case"select":e=n.value,e!=null&&co(t,!!n.multiple,e,!1)}};r2=ug;i2=as;var nk={usingClientEntryPoint:!1,Events:[Bl,no,Dh,t2,n2,ug]},xa={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rk={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a2(t),t===null?null:t.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||ek,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{kh=Fu.inject(rk),Xn=Fu}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nk;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gg(e))throw Error(H(200));return ZR(t,e,null,n)};vn.createRoot=function(t,e){if(!gg(t))throw Error(H(299));var n=!1,r="",i=UE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fg(t,1,!1,null,null,n,!1,r,i),t[wr]=e.current,gl(t.nodeType===8?t.parentNode:t),new mg(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=a2(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return as(t)};vn.hydrate=function(t,e,n){if(!zh(e))throw Error(H(200));return Bh(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!gg(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=FE(e,null,t,1,n??null,i,!1,s,o),t[wr]=e.current,gl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jh(e)};vn.render=function(t,e,n){if(!zh(e))throw Error(H(200));return Bh(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!zh(t))throw Error(H(40));return t._reactRootContainer?(as(function(){Bh(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};vn.unstable_batchedUpdates=ug;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zh(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Bh(t,e,n,!1,r)};vn.version="18.3.1-next-f1338f8080-20240426";function jE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jE)}catch(t){console.error(t)}}jE(),jw.exports=vn;var ik=jw.exports,Gv=ik;Bf.createRoot=Gv.createRoot,Bf.hydrateRoot=Gv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sl.apply(this,arguments)}var Qr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qr||(Qr={}));const Kv="popstate";function sk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Op("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xc(i)}return ak(e,n,null,t)}function ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ok(){return Math.random().toString(36).substr(2,8)}function Qv(t,e){return{usr:t.state,key:t.key,idx:e}}function Op(t,e,n,r){return n===void 0&&(n=null),Sl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ko(e):e,{state:n,key:e&&e.key||r||ok()})}function Xc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ko(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ak(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Sl({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Qr.Pop;let P=d(),w=P==null?null:P-c;c=P,u&&u({action:a,location:R.location,delta:w})}function m(P,w){a=Qr.Push;let E=Op(R.location,P,w);c=d()+1;let S=Qv(E,c),D=R.createHref(E);try{o.pushState(S,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(D)}s&&u&&u({action:a,location:R.location,delta:1})}function _(P,w){a=Qr.Replace;let E=Op(R.location,P,w);c=d();let S=Qv(E,c),D=R.createHref(E);o.replaceState(S,"",D),s&&u&&u({action:a,location:R.location,delta:0})}function T(P){let w=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof P=="string"?P:Xc(P);return E=E.replace(/ $/,"%20"),ot(w,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,w)}let R={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Kv,f),u=P,()=>{i.removeEventListener(Kv,f),u=null}},createHref(P){return e(i,P)},createURL:T,encodeLocation(P){let w=T(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:_,go(P){return o.go(P)}};return R}var Yv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yv||(Yv={}));function lk(t,e,n){return n===void 0&&(n="/"),uk(t,e,n)}function uk(t,e,n,r){let i=typeof e=="string"?Ko(e):e,s=yg(i.pathname||"/",n);if(s==null)return null;let o=BE(t);ck(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=Ik(s);a=_k(o[u],c)}return a}function BE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ot(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=li([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(ot(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),BE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:yk(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of $E(s.path))i(s,o,u)}),e}function $E(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$E(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function ck(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hk=/^:[\w-]+$/,dk=3,fk=2,pk=1,mk=10,gk=-2,Xv=t=>t==="*";function yk(t,e){let n=t.split("/"),r=n.length;return n.some(Xv)&&(r+=gk),e&&(r+=fk),n.filter(i=>!Xv(i)).reduce((i,s)=>i+(hk.test(s)?dk:s===""?pk:mk),r)}function vk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _k(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=wk({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:li([s,f.pathname]),pathnameBase:Ak(li([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=li([s,f.pathnameBase]))}return o}function wk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ek(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:_}=d;if(m==="*"){let R=a[f]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const T=a[f];return _&&!T?c[m]=void 0:c[m]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Ek(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ik(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Tk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ko(t):t;return{pathname:n?n.startsWith("/")?n:xk(n,e):e,search:Rk(r),hash:kk(i)}}function xk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _f(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function qE(t,e){let n=Sk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function WE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ko(t):(i=Sl({},t),ot(!i.pathname||!i.pathname.includes("?"),_f("?","pathname","search",i)),ot(!i.pathname||!i.pathname.includes("#"),_f("#","pathname","hash",i)),ot(!i.search||!i.search.includes("#"),_f("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=Tk(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const li=t=>t.join("/").replace(/\/\/+/g,"/"),Ak=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Rk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Pk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const HE=["post","put","patch","delete"];new Set(HE);const Ck=["get",...HE];new Set(Ck);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Al.apply(this,arguments)}const vg=N.createContext(null),bk=N.createContext(null),Ss=N.createContext(null),$h=N.createContext(null),Ai=N.createContext({outlet:null,matches:[],isDataRoute:!1}),GE=N.createContext(null);function Dk(t,e){let{relative:n}=e===void 0?{}:e;ql()||ot(!1);let{basename:r,navigator:i}=N.useContext(Ss),{hash:s,pathname:o,search:a}=QE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:li([r,o])),i.createHref({pathname:u,search:a,hash:s})}function ql(){return N.useContext($h)!=null}function Qo(){return ql()||ot(!1),N.useContext($h).location}function KE(t){N.useContext(Ss).static||N.useLayoutEffect(t)}function Yo(){let{isDataRoute:t}=N.useContext(Ai);return t?Wk():Nk()}function Nk(){ql()||ot(!1);let t=N.useContext(vg),{basename:e,future:n,navigator:r}=N.useContext(Ss),{matches:i}=N.useContext(Ai),{pathname:s}=Qo(),o=JSON.stringify(qE(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return KE(()=>{a.current=!0}),N.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=WE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:li([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function GL(){let{matches:t}=N.useContext(Ai),e=t[t.length-1];return e?e.params:{}}function QE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Ss),{matches:i}=N.useContext(Ai),{pathname:s}=Qo(),o=JSON.stringify(qE(i,r.v7_relativeSplatPath));return N.useMemo(()=>WE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Vk(t,e){return Ok(t,e)}function Ok(t,e,n,r){ql()||ot(!1);let{navigator:i}=N.useContext(Ss),{matches:s}=N.useContext(Ai),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Qo(),d;if(e){var f;let P=typeof e=="string"?Ko(e):e;u==="/"||(f=P.pathname)!=null&&f.startsWith(u)||ot(!1),d=P}else d=c;let m=d.pathname||"/",_=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let T=lk(t,{pathname:_}),R=jk(T&&T.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:li([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:li([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&R?N.createElement($h.Provider,{value:{location:Al({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qr.Pop}},R):R}function Lk(){let t=qk(),e=Pk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const Mk=N.createElement(Lk,null);class Fk extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(Ai.Provider,{value:this.props.routeContext},N.createElement(GE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Uk(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(vg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Ai.Provider,{value:e},r)}function jk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||ot(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:_}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let _,T=!1,R=null,P=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,R=f.route.errorElement||Mk,u&&(c<0&&m===0?(Hk("route-fallback"),T=!0,P=null):c===m&&(T=!0,P=f.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),E=()=>{let S;return _?S=R:T?S=P:f.route.Component?S=N.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,N.createElement(Uk,{match:f,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?N.createElement(Fk,{location:n.location,revalidation:n.revalidation,component:R,error:_,children:E(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):E()},null)}var YE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(YE||{}),XE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(XE||{});function zk(t){let e=N.useContext(vg);return e||ot(!1),e}function Bk(t){let e=N.useContext(bk);return e||ot(!1),e}function $k(t){let e=N.useContext(Ai);return e||ot(!1),e}function JE(t){let e=$k(),n=e.matches[e.matches.length-1];return n.route.id||ot(!1),n.route.id}function qk(){var t;let e=N.useContext(GE),n=Bk(),r=JE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Wk(){let{router:t}=zk(YE.UseNavigateStable),e=JE(XE.UseNavigateStable),n=N.useRef(!1);return KE(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Al({fromRouteId:e},s)))},[t,e])}const Jv={};function Hk(t,e,n){Jv[t]||(Jv[t]=!0)}function Gk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function je(t){ot(!1)}function Kk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qr.Pop,navigator:s,static:o=!1,future:a}=t;ql()&&ot(!1);let u=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:u,navigator:s,static:o,future:Al({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Ko(r));let{pathname:d="/",search:f="",hash:m="",state:_=null,key:T="default"}=r,R=N.useMemo(()=>{let P=yg(d,u);return P==null?null:{location:{pathname:P,search:f,hash:m,state:_,key:T},navigationType:i}},[u,d,f,m,_,T,i]);return R==null?null:N.createElement(Ss.Provider,{value:c},N.createElement($h.Provider,{children:n,value:R}))}function Qk(t){let{children:e,location:n}=t;return Vk(Lp(e),n)}new Promise(()=>{});function Lp(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Lp(r.props.children,s));return}r.type!==je&&ot(!1),!r.props.index||!r.props.children||ot(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Lp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mp(){return Mp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mp.apply(this,arguments)}function Yk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Xk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Jk(t,e){return t.button===0&&(!e||e==="_self")&&!Xk(t)}function Fp(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Zk(t,e){let n=Fp(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const eP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],tP="6";try{window.__reactRouterVersion=tP}catch{}const nP="startTransition",Zv=GS[nP];function rP(t){let{basename:e,children:n,future:r,window:i}=t,s=N.useRef();s.current==null&&(s.current=sk({window:i,v5Compat:!0}));let o=s.current,[a,u]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=N.useCallback(f=>{c&&Zv?Zv(()=>u(f)):u(f)},[u,c]);return N.useLayoutEffect(()=>o.listen(d),[o,d]),N.useEffect(()=>Gk(r),[r]),N.createElement(Kk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const iP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oP=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=Yk(e,eP),{basename:_}=N.useContext(Ss),T,R=!1;if(typeof c=="string"&&sP.test(c)&&(T=c,iP))try{let S=new URL(window.location.href),D=c.startsWith("//")?new URL(S.protocol+c):new URL(c),M=yg(D.pathname,_);D.origin===S.origin&&M!=null?c=M+D.search+D.hash:R=!0}catch{}let P=Dk(c,{relative:i}),w=aP(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:f});function E(S){r&&r(S),S.defaultPrevented||w(S)}return N.createElement("a",Mp({},m,{href:T||P,onClick:R||s?r:E,ref:n,target:u}))});var e1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(e1||(e1={}));var t1;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(t1||(t1={}));function aP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=Yo(),c=Qo(),d=QE(t,{relative:o});return N.useCallback(f=>{if(Jk(f,n)){f.preventDefault();let m=r!==void 0?r:Xc(c)===Xc(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}function KL(t){let e=N.useRef(Fp(t)),n=N.useRef(!1),r=Qo(),i=N.useMemo(()=>Zk(r.search,n.current?null:e.current),[r.search]),s=Yo(),o=N.useCallback((a,u)=>{const c=Fp(typeof a=="function"?a(i):a);n.current=!0,s("?"+c,u)},[s,i]);return[i,o]}const lP="modulepreload",uP=function(t){return"/"+t},n1={},lt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=uP(u),u in n1)return;n1[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":lP,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var Dt=function(){return Dt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Dt.apply(this,arguments)};function _g(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Po(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Oe="-ms-",tl="-moz-",Se="-webkit-",ZE="comm",qh="rule",wg="decl",cP="@import",eI="@keyframes",hP="@layer",tI=Math.abs,Eg=String.fromCharCode,Up=Object.assign;function dP(t,e){return mt(t,0)^45?(((e<<2^mt(t,0))<<2^mt(t,1))<<2^mt(t,2))<<2^mt(t,3):0}function nI(t){return t.trim()}function ur(t,e){return(t=e.exec(t))?t[0]:t}function he(t,e,n){return t.replace(e,n)}function lc(t,e,n){return t.indexOf(e,n)}function mt(t,e){return t.charCodeAt(e)|0}function Co(t,e,n){return t.slice(e,n)}function Hn(t){return t.length}function rI(t){return t.length}function Oa(t,e){return e.push(t),t}function fP(t,e){return t.map(e).join("")}function r1(t,e){return t.filter(function(n){return!ur(n,e)})}var Wh=1,bo=1,iI=0,bn=0,rt=0,Xo="";function Hh(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Wh,column:bo,length:o,return:"",siblings:a}}function Mr(t,e){return Up(Hh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function js(t){for(;t.root;)t=Mr(t.root,{children:[t]});Oa(t,t.siblings)}function pP(){return rt}function mP(){return rt=bn>0?mt(Xo,--bn):0,bo--,rt===10&&(bo=1,Wh--),rt}function Bn(){return rt=bn<iI?mt(Xo,bn++):0,bo++,rt===10&&(bo=1,Wh++),rt}function Xi(){return mt(Xo,bn)}function uc(){return bn}function Gh(t,e){return Co(Xo,t,e)}function jp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gP(t){return Wh=bo=1,iI=Hn(Xo=t),bn=0,[]}function yP(t){return Xo="",t}function wf(t){return nI(Gh(bn-1,zp(t===91?t+2:t===40?t+1:t)))}function vP(t){for(;(rt=Xi())&&rt<33;)Bn();return jp(t)>2||jp(rt)>3?"":" "}function _P(t,e){for(;--e&&Bn()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return Gh(t,uc()+(e<6&&Xi()==32&&Bn()==32))}function zp(t){for(;Bn();)switch(rt){case t:return bn;case 34:case 39:t!==34&&t!==39&&zp(rt);break;case 40:t===41&&zp(t);break;case 92:Bn();break}return bn}function wP(t,e){for(;Bn()&&t+rt!==57;)if(t+rt===84&&Xi()===47)break;return"/*"+Gh(e,bn-1)+"*"+Eg(t===47?t:Bn())}function EP(t){for(;!jp(Xi());)Bn();return Gh(t,bn)}function IP(t){return yP(cc("",null,null,null,[""],t=gP(t),0,[0],t))}function cc(t,e,n,r,i,s,o,a,u){for(var c=0,d=0,f=o,m=0,_=0,T=0,R=1,P=1,w=1,E=0,S="",D=i,M=s,V=r,y=S;P;)switch(T=E,E=Bn()){case 40:if(T!=108&&mt(y,f-1)==58){lc(y+=he(wf(E),"&","&\f"),"&\f",tI(c?a[c-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:y+=wf(E);break;case 9:case 10:case 13:case 32:y+=vP(T);break;case 92:y+=_P(uc()-1,7);continue;case 47:switch(Xi()){case 42:case 47:Oa(TP(wP(Bn(),uc()),e,n,u),u);break;default:y+="/"}break;case 123*R:a[c++]=Hn(y)*w;case 125*R:case 59:case 0:switch(E){case 0:case 125:P=0;case 59+d:w==-1&&(y=he(y,/\f/g,"")),_>0&&Hn(y)-f&&Oa(_>32?s1(y+";",r,n,f-1,u):s1(he(y," ","")+";",r,n,f-2,u),u);break;case 59:y+=";";default:if(Oa(V=i1(y,e,n,c,d,i,a,S,D=[],M=[],f,s),s),E===123)if(d===0)cc(y,e,V,V,D,s,f,a,M);else switch(m===99&&mt(y,3)===110?100:m){case 100:case 108:case 109:case 115:cc(t,V,V,r&&Oa(i1(t,V,V,0,0,i,a,S,i,D=[],f,M),M),i,M,f,a,r?D:M);break;default:cc(y,V,V,V,[""],M,0,a,M)}}c=d=_=0,R=w=1,S=y="",f=o;break;case 58:f=1+Hn(y),_=T;default:if(R<1){if(E==123)--R;else if(E==125&&R++==0&&mP()==125)continue}switch(y+=Eg(E),E*R){case 38:w=d>0?1:(y+="\f",-1);break;case 44:a[c++]=(Hn(y)-1)*w,w=1;break;case 64:Xi()===45&&(y+=wf(Bn())),m=Xi(),d=f=Hn(S=y+=EP(uc())),E++;break;case 45:T===45&&Hn(y)==2&&(R=0)}}return s}function i1(t,e,n,r,i,s,o,a,u,c,d,f){for(var m=i-1,_=i===0?s:[""],T=rI(_),R=0,P=0,w=0;R<r;++R)for(var E=0,S=Co(t,m+1,m=tI(P=o[R])),D=t;E<T;++E)(D=nI(P>0?_[E]+" "+S:he(S,/&\f/g,_[E])))&&(u[w++]=D);return Hh(t,e,n,i===0?qh:a,u,c,d,f)}function TP(t,e,n,r){return Hh(t,e,n,ZE,Eg(pP()),Co(t,2,-2),0,r)}function s1(t,e,n,r,i){return Hh(t,e,n,wg,Co(t,0,r),Co(t,r+1,-1),r,i)}function sI(t,e,n){switch(dP(t,e)){case 5103:return Se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+t+t;case 4789:return tl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+t+tl+t+Oe+t+t;case 5936:switch(mt(t,e+11)){case 114:return Se+t+Oe+he(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Se+t+Oe+he(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Se+t+Oe+he(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Se+t+Oe+t+t;case 6165:return Se+t+Oe+"flex-"+t+t;case 5187:return Se+t+he(t,/(\w+).+(:[^]+)/,Se+"box-$1$2"+Oe+"flex-$1$2")+t;case 5443:return Se+t+Oe+"flex-item-"+he(t,/flex-|-self/g,"")+(ur(t,/flex-|baseline/)?"":Oe+"grid-row-"+he(t,/flex-|-self/g,""))+t;case 4675:return Se+t+Oe+"flex-line-pack"+he(t,/align-content|flex-|-self/g,"")+t;case 5548:return Se+t+Oe+he(t,"shrink","negative")+t;case 5292:return Se+t+Oe+he(t,"basis","preferred-size")+t;case 6060:return Se+"box-"+he(t,"-grow","")+Se+t+Oe+he(t,"grow","positive")+t;case 4554:return Se+he(t,/([^-])(transform)/g,"$1"+Se+"$2")+t;case 6187:return he(he(he(t,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),t,"")+t;case 5495:case 3959:return he(t,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return he(he(t,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+t+t;case 4200:if(!ur(t,/flex-|baseline/))return Oe+"grid-column-align"+Co(t,e)+t;break;case 2592:case 3360:return Oe+he(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,ur(r.props,/grid-\w+-end/)})?~lc(t+(n=n[e].value),"span",0)?t:Oe+he(t,"-start","")+t+Oe+"grid-row-span:"+(~lc(n,"span",0)?ur(n,/\d+/):+ur(n,/\d+/)-+ur(t,/\d+/))+";":Oe+he(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return ur(r.props,/grid-\w+-start/)})?t:Oe+he(he(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return he(t,/(.+)-inline(.+)/,Se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(t)-1-e>6)switch(mt(t,e+1)){case 109:if(mt(t,e+4)!==45)break;case 102:return he(t,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+tl+(mt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~lc(t,"stretch",0)?sI(he(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return he(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return Oe+i+":"+s+c+(o?Oe+i+"-span:"+(a?u:+u-+s)+c:"")+t});case 4949:if(mt(t,e+6)===121)return he(t,":",":"+Se)+t;break;case 6444:switch(mt(t,mt(t,14)===45?18:11)){case 120:return he(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Se+(mt(t,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+Oe+"$2box$3")+t;case 100:return he(t,":",":"+Oe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(t,"scroll-","scroll-snap-")+t}return t}function Jc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function xP(t,e,n,r){switch(t.type){case hP:if(t.children.length)break;case cP:case wg:return t.return=t.return||t.value;case ZE:return"";case eI:return t.return=t.value+"{"+Jc(t.children,r)+"}";case qh:if(!Hn(t.value=t.props.join(",")))return""}return Hn(n=Jc(t.children,r))?t.return=t.value+"{"+n+"}":""}function SP(t){var e=rI(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function AP(t){return function(e){e.root||(e=e.return)&&t(e)}}function RP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case wg:t.return=sI(t.value,t.length,n);return;case eI:return Jc([Mr(t,{value:he(t.value,"@","@"+Se)})],r);case qh:if(t.length)return fP(n=t.props,function(i){switch(ur(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":js(Mr(t,{props:[he(i,/:(read-\w+)/,":"+tl+"$1")]})),js(Mr(t,{props:[i]})),Up(t,{props:r1(n,r)});break;case"::placeholder":js(Mr(t,{props:[he(i,/:(plac\w+)/,":"+Se+"input-$1")]})),js(Mr(t,{props:[he(i,/:(plac\w+)/,":"+tl+"$1")]})),js(Mr(t,{props:[he(i,/:(plac\w+)/,Oe+"input-$1")]})),js(Mr(t,{props:[i]})),Up(t,{props:r1(n,r)});break}return""})}}var kP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ln={},Do=typeof process<"u"&&ln!==void 0&&(ln.REACT_APP_SC_ATTR||ln.SC_ATTR)||"data-styled",oI="active",aI="data-styled-version",Kh="6.1.19",Ig=`/*!sc*/
`,Zc=typeof window<"u"&&typeof document<"u",PP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==""?ln.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ln.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.SC_DISABLE_SPEEDY!==void 0&&ln.SC_DISABLE_SPEEDY!==""&&ln.SC_DISABLE_SPEEDY!=="false"&&ln.SC_DISABLE_SPEEDY),CP={},Qh=Object.freeze([]),No=Object.freeze({});function lI(t,e,n){return n===void 0&&(n=No),t.theme!==n.theme&&t.theme||e||n.theme}var uI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,DP=/(^-|-$)/g;function o1(t){return t.replace(bP,"-").replace(DP,"")}var NP=/(a)(d)/gi,Uu=52,a1=function(t){return String.fromCharCode(t+(t>25?39:97))};function Bp(t){var e,n="";for(e=Math.abs(t);e>Uu;e=e/Uu|0)n=a1(e%Uu)+n;return(a1(e%Uu)+n).replace(NP,"$1-$2")}var Ef,cI=5381,uo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},hI=function(t){return uo(cI,t)};function Tg(t){return Bp(hI(t)>>>0)}function VP(t){return t.displayName||t.name||"Component"}function If(t){return typeof t=="string"&&!0}var dI=typeof Symbol=="function"&&Symbol.for,fI=dI?Symbol.for("react.memo"):60115,OP=dI?Symbol.for("react.forward_ref"):60112,LP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},MP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},FP=((Ef={})[OP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ef[fI]=pI,Ef);function l1(t){return("type"in(e=t)&&e.type.$$typeof)===fI?pI:"$$typeof"in t?FP[t.$$typeof]:LP;var e}var UP=Object.defineProperty,jP=Object.getOwnPropertyNames,u1=Object.getOwnPropertySymbols,zP=Object.getOwnPropertyDescriptor,BP=Object.getPrototypeOf,c1=Object.prototype;function mI(t,e,n){if(typeof e!="string"){if(c1){var r=BP(e);r&&r!==c1&&mI(t,r,n)}var i=jP(e);u1&&(i=i.concat(u1(e)));for(var s=l1(t),o=l1(e),a=0;a<i.length;++a){var u=i[a];if(!(u in MP||n&&n[u]||o&&u in o||s&&u in s)){var c=zP(e,u);try{UP(t,u,c)}catch{}}}}return t}function Vo(t){return typeof t=="function"}function xg(t){return typeof t=="object"&&"styledComponentId"in t}function Gi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function eh(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Rl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function $p(t,e,n){if(n===void 0&&(n=!1),!n&&!Rl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=$p(t[r],e[r]);else if(Rl(e))for(var r in e)t[r]=$p(t[r],e[r]);return t}function Sg(t,e){Object.defineProperty(t,"toString",{value:e})}function Wl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var $P=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Wl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Ig);return n},t}(),hc=new Map,th=new Map,dc=1,ju=function(t){if(hc.has(t))return hc.get(t);for(;th.has(dc);)dc++;var e=dc++;return hc.set(t,e),th.set(e,t),e},qP=function(t,e){dc=e+1,hc.set(t,e),th.set(e,t)},WP="style[".concat(Do,"][").concat(aI,'="').concat(Kh,'"]'),HP=new RegExp("^".concat(Do,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),GP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},KP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Ig),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(HP);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(qP(d,c),GP(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},h1=function(t){for(var e=document.querySelectorAll(WP),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Do)!==oI&&(KP(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function QP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Do,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Do,oI),r.setAttribute(aI,Kh);var o=QP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},YP=function(){function t(e){this.element=gI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Wl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),XP=function(){function t(e){this.element=gI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),JP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),d1=Zc,ZP={isServer:!Zc,useCSSOMInjection:!PP},nh=function(){function t(e,n,r){e===void 0&&(e=No),n===void 0&&(n={});var i=this;this.options=Dt(Dt({},ZP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Zc&&d1&&(d1=!1,h1(this)),Sg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(f){var m=function(w){return th.get(w)}(f);if(m===void 0)return"continue";var _=s.names.get(m),T=o.getGroup(f);if(_===void 0||!_.size||T.length===0)return"continue";var R="".concat(Do,".g").concat(f,'[id="').concat(m,'"]'),P="";_!==void 0&&_.forEach(function(w){w.length>0&&(P+="".concat(w,","))}),u+="".concat(T).concat(R,'{content:"').concat(P,'"}').concat(Ig)},d=0;d<a;d++)c(d);return u}(i)})}return t.registerId=function(e){return ju(e)},t.prototype.rehydrate=function(){!this.server&&Zc&&h1(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Dt(Dt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new JP(i):r?new YP(i):new XP(i)}(this.options),new $P(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(ju(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(ju(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ju(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),eC=/&/g,tC=/^\s*\/\/.*$/gm;function yI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yI(n.children,e)),n})}function nC(t){var e,n,r,i=No,s=i.options,o=s===void 0?No:s,a=i.plugins,u=a===void 0?Qh:a,c=function(m,_,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===qh&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(eC,n).replace(r,c))}),o.prefix&&d.push(RP),d.push(xP);var f=function(m,_,T,R){_===void 0&&(_=""),T===void 0&&(T=""),R===void 0&&(R="&"),e=R,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var P=m.replace(tC,""),w=IP(T||_?"".concat(T," ").concat(_," { ").concat(P," }"):P);o.namespace&&(w=yI(w,o.namespace));var E=[];return Jc(w,SP(d.concat(AP(function(S){return E.push(S)})))),E};return f.hash=u.length?u.reduce(function(m,_){return _.name||Wl(15),uo(m,_.name)},cI).toString():"",f}var rC=new nh,qp=nC(),vI=st.createContext({shouldForwardProp:void 0,styleSheet:rC,stylis:qp});vI.Consumer;st.createContext(void 0);function Wp(){return N.useContext(vI)}var _I=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=qp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Sg(this,function(){throw Wl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=qp),this.name+e.hash},t}(),iC=function(t){return t>="A"&&t<="Z"};function f1(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;iC(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var wI=function(t){return t==null||t===!1||t===""},EI=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!wI(s)&&(Array.isArray(s)&&s.isCss||Vo(s)?r.push("".concat(f1(i),":"),s,";"):Rl(s)?r.push.apply(r,Po(Po(["".concat(i," {")],EI(s),!1),["}"],!1)):r.push("".concat(f1(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in kP||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ui(t,e,n,r){if(wI(t))return[];if(xg(t))return[".".concat(t.styledComponentId)];if(Vo(t)){if(!Vo(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ui(i,e,n,r)}var s;return t instanceof _I?n?(t.inject(n,r),[t.getName(r)]):[t]:Rl(t)?EI(t):Array.isArray(t)?Array.prototype.concat.apply(Qh,t.map(function(o){return ui(o,e,n,r)})):[t.toString()]}function II(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Vo(n)&&!xg(n))return!1}return!0}var sC=hI(Kh),oC=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&II(e),this.componentId=n,this.baseHash=uo(sC,n),this.baseStyle=r,nh.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gi(i,this.staticRulesId);else{var s=eh(ui(this.rules,e,n,r)),o=Bp(uo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Gi(i,o),this.staticRulesId=o}else{for(var u=uo(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=eh(ui(f,e,n,r));u=uo(u,m+d),c+=m}}if(c){var _=Bp(u>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(c,".".concat(_),void 0,this.componentId)),i=Gi(i,_)}}return i},t}(),Ag=st.createContext(void 0);Ag.Consumer;var Tf={};function aC(t,e,n){var r=xg(t),i=t,s=!If(t),o=e.attrs,a=o===void 0?Qh:o,u=e.componentId,c=u===void 0?function(D,M){var V=typeof D!="string"?"sc":o1(D);Tf[V]=(Tf[V]||0)+1;var y="".concat(V,"-").concat(Tg(Kh+V+Tf[V]));return M?"".concat(M,"-").concat(y):y}(e.displayName,e.parentComponentId):u,d=e.displayName,f=d===void 0?function(D){return If(D)?"styled.".concat(D):"Styled(".concat(VP(D),")")}(t):d,m=e.displayName&&e.componentId?"".concat(o1(e.displayName),"-").concat(e.componentId):e.componentId||c,_=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,T=e.shouldForwardProp;if(r&&i.shouldForwardProp){var R=i.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;T=function(D,M){return R(D,M)&&P(D,M)}}else T=R}var w=new oC(n,m,r?i.componentStyle:void 0);function E(D,M){return function(V,y,g){var I=V.attrs,x=V.componentStyle,C=V.defaultProps,b=V.foldedComponentIds,k=V.styledComponentId,ee=V.target,xe=st.useContext(Ag),Pe=Wp(),ye=V.shouldForwardProp||Pe.shouldForwardProp,Q=lI(y,xe,C)||No,$=function(re,ce,Ae){for(var et,He=Dt(Dt({},ce),{className:void 0,theme:Ae}),Lt=0;Lt<re.length;Lt+=1){var Yt=Vo(et=re[Lt])?et(He):et;for(var Mt in Yt)He[Mt]=Mt==="className"?Gi(He[Mt],Yt[Mt]):Mt==="style"?Dt(Dt({},He[Mt]),Yt[Mt]):Yt[Mt]}return ce.className&&(He.className=Gi(He.className,ce.className)),He}(I,y,Q),z=$.as||ee,G={};for(var q in $)$[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&$.theme===Q||(q==="forwardedAs"?G.as=$.forwardedAs:ye&&!ye(q,z)||(G[q]=$[q]));var J=function(re,ce){var Ae=Wp(),et=re.generateAndInjectStyles(ce,Ae.styleSheet,Ae.stylis);return et}(x,$),U=Gi(b,k);return J&&(U+=" "+J),$.className&&(U+=" "+$.className),G[If(z)&&!uI.has(z)?"class":"className"]=U,g&&(G.ref=g),N.createElement(z,G)}(S,D,M)}E.displayName=f;var S=st.forwardRef(E);return S.attrs=_,S.componentStyle=w,S.displayName=f,S.shouldForwardProp=T,S.foldedComponentIds=r?Gi(i.foldedComponentIds,i.styledComponentId):"",S.styledComponentId=m,S.target=r?i.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=r?function(M){for(var V=[],y=1;y<arguments.length;y++)V[y-1]=arguments[y];for(var g=0,I=V;g<I.length;g++)$p(M,I[g],!0);return M}({},i.defaultProps,D):D}}),Sg(S,function(){return".".concat(S.styledComponentId)}),s&&mI(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function p1(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var m1=function(t){return Object.assign(t,{isCss:!0})};function Rg(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Vo(t)||Rl(t))return m1(ui(p1(Qh,Po([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ui(r):m1(ui(p1(r,e)))}function Hp(t,e,n){if(n===void 0&&(n=No),!e)throw Wl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Rg.apply(void 0,Po([i],s,!1)))};return r.attrs=function(i){return Hp(t,e,Dt(Dt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Hp(t,e,Dt(Dt({},n),i))},r}var TI=function(t){return Hp(aC,t)},B=TI;uI.forEach(function(t){B[t]=TI(t)});var lC=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=II(e),nh.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(eh(ui(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&nh.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function uC(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Rg.apply(void 0,Po([t],e,!1)),i="sc-global-".concat(Tg(JSON.stringify(r))),s=new lC(r,i),o=function(u){var c=Wp(),d=st.useContext(Ag),f=st.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,u,c.styleSheet,d,c.stylis),st.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function a(u,c,d,f,m){if(s.isStatic)s.renderStyles(u,CP,d,m);else{var _=Dt(Dt({},c),{theme:lI(c,f,o.defaultProps)});s.renderStyles(u,_,d,m)}}return st.memo(o)}function xI(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=eh(Rg.apply(void 0,Po([t],e,!1))),i=Tg(r);return new _I(i,r)}var SI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g1=st.createContext&&st.createContext(SI),cC=["attr","size","title"];function hC(t,e){if(t==null)return{};var n=dC(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function dC(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function rh(){return rh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rh.apply(this,arguments)}function y1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ih(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?y1(Object(n),!0).forEach(function(r){fC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function fC(t,e,n){return e=pC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pC(t){var e=mC(t,"string");return typeof e=="symbol"?e:e+""}function mC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function AI(t){return t&&t.map((e,n)=>st.createElement(e.tag,ih({key:n},e.attr),AI(e.child)))}function Z(t){return e=>st.createElement(gC,rh({attr:ih({},t.attr)},e),AI(t.child))}function gC(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=hC(t,cC),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),st.createElement("svg",rh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:ih(ih({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&st.createElement("title",null,s),t.children)};return g1!==void 0?st.createElement(g1.Consumer,null,n=>e(n)):e(SI)}function QL(t){return Z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(t)}function YL(t){return Z({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(t)}function yC(t){return Z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"},child:[]}]})(t)}function XL(t){return Z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(t)}function JL(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(t)}function vC(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(t)}function ZL(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(t)}function e7(t){return Z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(t)}function t7(t){return Z({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(t)}function n7(t){return Z({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(t)}function _C(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(t)}function wC(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(t)}function EC(t){return Z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(t)}function r7(t){return Z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"},child:[]}]})(t)}function i7(t){return Z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(t)}function s7(t){return Z({attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"},child:[]}]})(t)}function v1(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(t)}function IC(t){return Z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(t)}function TC(t){return Z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(t)}function xC(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(t)}function _1(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}function RI(t){return Z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(t)}function o7(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(t)}function SC(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(t)}function a7(t){return Z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(t)}function AC(t){return Z({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function RC(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(t)}function l7(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(t)}function u7(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(t)}function w1(t){return Z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function kC(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(t)}function La(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function PC(t){return Z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(t)}function c7(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"},child:[]}]})(t)}function h7(t){return Z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"},child:[]}]})(t)}function d7(t){return Z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(t)}function f7(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(t)}function p7(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7 1.3 3 4.1 4.8 7.3 4.8 66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128.2 304H116c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H156c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-19 38.6-42.4 38.6zm191.8-8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-68.2l-24.8 55.8c-2.9 5.9-11.4 5.9-14.3 0L224 227.8V296c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V192c0-8.8 7.2-16 16-16h16c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4 17.7-35.4c2.7-5.4 8.3-8.8 14.3-8.8h16c8.8 0 16 7.2 16 16v104zm48.3 8H356c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H396c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-18.9 38.6-42.3 38.6z"},child:[]}]})(t)}function CC(t){return Z({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"},child:[]}]})(t)}function m7(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(t)}function g7(t){return Z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function y7(t){return Z({attr:{viewBox:"0 0 616 512"},child:[{tag:"path",attr:{d:"M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"},child:[]}]})(t)}function fc(t){return Z({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function v7(t){return Z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}function _7(t){return Z({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"},child:[]}]})(t)}function E1(t){return Z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function bC(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"},child:[]}]})(t)}function DC(t){return Z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(t)}var I1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},PI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[d],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new VC;const m=s<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OC=function(t){const e=kI(t);return PI.encodeByteArray(e,!0)},sh=function(t){return OC(t).replace(/\./g,"")},CI=function(t){try{return PI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=()=>LC().__FIREBASE_DEFAULTS__,FC=()=>{if(typeof process>"u"||typeof I1>"u")return;const t=I1.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&CI(t[1]);return e&&JSON.parse(e)},Yh=()=>{try{return MC()||FC()||UC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bI=t=>{var e,n;return(n=(e=Yh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},DI=t=>{const e=bI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},NI=()=>{var t;return(t=Yh())===null||t===void 0?void 0:t.config},VI=t=>{var e;return(e=Yh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sh(JSON.stringify(n)),sh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function BC(){var t;const e=(t=Yh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $C(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HC(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LI(){return!BC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MI(){try{return typeof indexedDB=="object"}catch{return!1}}function GC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="FirebaseError";class ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KC,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hl.prototype.create)}}class Hl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ir(i,a,r)}}function QC(t,e){return t.replace(YC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YC=/\{\$([^}]+)}/g;function XC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(T1(s)&&T1(o)){if(!Oo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function T1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ma(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JC(t,e){const n=new ZC(t,e);return n.subscribe.bind(n)}class ZC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");e5(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xf),i.error===void 0&&(i.error=xf),i.complete===void 0&&(i.complete=xf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e5(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class vi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(r5(e))try{this.getOrInitializeService({instanceIdentifier:Fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fi){return this.instances.has(e)}getOptions(e=Fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n5(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fi){return this.component?this.component.multipleInstances?e:Fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n5(t){return t===Fi?void 0:t}function r5(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new t5(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const s5={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},o5=pe.INFO,a5={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},l5=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=a5[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kg{constructor(e){this.name=e,this._logLevel=o5,this._logHandler=l5,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s5[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const u5=(t,e)=>e.some(n=>t instanceof n);let x1,S1;function c5(){return x1||(x1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h5(){return S1||(S1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const FI=new WeakMap,Gp=new WeakMap,UI=new WeakMap,Sf=new WeakMap,Pg=new WeakMap;function d5(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ci(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&FI.set(n,t)}).catch(()=>{}),Pg.set(e,t),e}function f5(t){if(Gp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gp.set(t,e)}let Kp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||UI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p5(t){Kp=t(Kp)}function m5(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Af(this),e,...n);return UI.set(r,e.sort?e.sort():[e]),ci(r)}:h5().includes(t)?function(...e){return t.apply(Af(this),e),ci(FI.get(this))}:function(...e){return ci(t.apply(Af(this),e))}}function g5(t){return typeof t=="function"?m5(t):(t instanceof IDBTransaction&&f5(t),u5(t,c5())?new Proxy(t,Kp):t)}function ci(t){if(t instanceof IDBRequest)return d5(t);if(Sf.has(t))return Sf.get(t);const e=g5(t);return e!==t&&(Sf.set(t,e),Pg.set(e,t)),e}const Af=t=>Pg.get(t);function y5(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ci(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ci(o.result),u.oldVersion,u.newVersion,ci(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const v5=["get","getKey","getAll","getAllKeys","count"],_5=["put","add","delete","clear"],Rf=new Map;function A1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rf.get(e))return Rf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_5.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v5.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Rf.set(e,s),s}p5(t=>({...t,get:(e,n,r)=>A1(e,n)||t.get(e,n,r),has:(e,n)=>!!A1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w5{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E5(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E5(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qp="@firebase/app",R1="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new kg("@firebase/app"),I5="@firebase/app-compat",T5="@firebase/analytics-compat",x5="@firebase/analytics",S5="@firebase/app-check-compat",A5="@firebase/app-check",R5="@firebase/auth",k5="@firebase/auth-compat",P5="@firebase/database",C5="@firebase/data-connect",b5="@firebase/database-compat",D5="@firebase/functions",N5="@firebase/functions-compat",V5="@firebase/installations",O5="@firebase/installations-compat",L5="@firebase/messaging",M5="@firebase/messaging-compat",F5="@firebase/performance",U5="@firebase/performance-compat",j5="@firebase/remote-config",z5="@firebase/remote-config-compat",B5="@firebase/storage",$5="@firebase/storage-compat",q5="@firebase/firestore",W5="@firebase/vertexai-preview",H5="@firebase/firestore-compat",G5="firebase",K5="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="[DEFAULT]",Q5={[Qp]:"fire-core",[I5]:"fire-core-compat",[x5]:"fire-analytics",[T5]:"fire-analytics-compat",[A5]:"fire-app-check",[S5]:"fire-app-check-compat",[R5]:"fire-auth",[k5]:"fire-auth-compat",[P5]:"fire-rtdb",[C5]:"fire-data-connect",[b5]:"fire-rtdb-compat",[D5]:"fire-fn",[N5]:"fire-fn-compat",[V5]:"fire-iid",[O5]:"fire-iid-compat",[L5]:"fire-fcm",[M5]:"fire-fcm-compat",[F5]:"fire-perf",[U5]:"fire-perf-compat",[j5]:"fire-rc",[z5]:"fire-rc-compat",[B5]:"fire-gcs",[$5]:"fire-gcs-compat",[q5]:"fire-fst",[H5]:"fire-fst-compat",[W5]:"fire-vertex","fire-js":"fire-js",[G5]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new Map,Y5=new Map,Xp=new Map;function k1(t,e){try{t.container.addComponent(e)}catch(n){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(Xp.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;Xp.set(e,t);for(const n of oh.values())k1(n,t);for(const n of Y5.values())k1(n,t);return!0}function Xh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new Hl("app","Firebase",X5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J5{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=K5;function jI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hi.create("bad-app-name",{appName:String(i)});if(n||(n=NI()),!n)throw hi.create("no-options");const s=oh.get(i);if(s){if(Oo(n,s.options)&&Oo(r,s.config))return s;throw hi.create("duplicate-app",{appName:i})}const o=new i5(i);for(const u of Xp.values())o.addComponent(u);const a=new J5(n,r,o);return oh.set(i,a),a}function Cg(t=Yp){const e=oh.get(t);if(!e&&t===Yp&&NI())return jI();if(!e)throw hi.create("no-app",{appName:t});return e}function Zn(t,e,n){var r;let i=(r=Q5[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(a.join(" "));return}ls(new vi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z5="firebase-heartbeat-database",eb=1,kl="firebase-heartbeat-store";let kf=null;function zI(){return kf||(kf=y5(Z5,eb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(kl)}catch(n){console.warn(n)}}}}).catch(t=>{throw hi.create("idb-open",{originalErrorMessage:t.message})})),kf}async function tb(t){try{const n=(await zI()).transaction(kl),r=await n.objectStore(kl).get(BI(t));return await n.done,r}catch(e){if(e instanceof ir)Tr.warn(e.message);else{const n=hi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(n.message)}}}async function P1(t,e){try{const r=(await zI()).transaction(kl,"readwrite");await r.objectStore(kl).put(e,BI(t)),await r.done}catch(n){if(n instanceof ir)Tr.warn(n.message);else{const r=hi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tr.warn(r.message)}}}function BI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=1024,rb=30*24*60*60*1e3;class ib{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ob(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=C1();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=rb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=C1(),{heartbeatsToSend:r,unsentEntries:i}=sb(this._heartbeatsCache.heartbeats),s=sh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Tr.warn(n),""}}}function C1(){return new Date().toISOString().substring(0,10)}function sb(t,e=nb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),b1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),b1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ob{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MI()?GC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function b1(t){return sh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t){ls(new vi("platform-logger",e=>new w5(e),"PRIVATE")),ls(new vi("heartbeat",e=>new ib(e),"PRIVATE")),Zn(Qp,R1,t),Zn(Qp,R1,"esm2017"),Zn("fire-js","")}ab("");var lb="firebase",ub="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(lb,ub,"app");function $I(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cb=$I,qI=new Hl("auth","Firebase",$I());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new kg("@firebase/auth");function hb(t,...e){ah.logLevel<=pe.WARN&&ah.warn(`Auth (${As}): ${t}`,...e)}function pc(t,...e){ah.logLevel<=pe.ERROR&&ah.error(`Auth (${As}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,...e){throw Dg(t,...e)}function sn(t,...e){return Dg(t,...e)}function bg(t,e,n){const r=Object.assign(Object.assign({},cb()),{[e]:n});return new Hl("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return bg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function db(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dn(t,"argument-error"),bg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qI.create(t,...e)}function ne(t,e,...n){if(!t)throw Dg(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pc(e),new Error(e)}function xr(t,e){t||pr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WI(){return D1()==="http:"||D1()==="https:"}function D1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WI()||qC()||"connection"in navigator)?navigator.onLine:!0}function pb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,xr(n>e,"Short delay should be less than long delay!"),this.isMobile=zC()||WC()}get(){return fb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t,e){xr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=new Gl(3e4,6e4);function Qt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function on(t,e,n,r,i={}){return GI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Jo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return $C()||(c.referrerPolicy="no-referrer"),HI.fetch()(KI(t,t.config.apiHost,n,a),c)})}async function GI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mb),e);try{const i=new vb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ua(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ua(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ua(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ua(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bg(t,d,c);Dn(t,d)}}catch(i){if(i instanceof ir)throw i;Dn(t,"network-request-failed",{message:String(i)})}}async function Ri(t,e,n,r,i={}){const s=await on(t,e,n,r,i);return"mfaPendingCredential"in s&&Dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function KI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ng(t.config,i):`${t.config.apiScheme}://${i}`}function yb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),gb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t){return t!==void 0&&t.getResponse!==void 0}function V1(t){return t!==void 0&&t.enterprise!==void 0}class _b{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t){return(await on(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Eb(t,e){return on(t,"GET","/v2/recaptchaConfig",Qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,e){return on(t,"POST","/v1/accounts:delete",e)}async function QI(t,e){return on(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tb(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=Vg(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:nl(Pf(i.auth_time)),issuedAtTime:nl(Pf(i.iat)),expirationTime:nl(Pf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pf(t){return Number(t)*1e3}function Vg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pc("JWT malformed, contained fewer than 3 sections"),null;try{const i=CI(n);return i?JSON.parse(i):(pc("Failed to decode base64 JWT payload"),null)}catch(i){return pc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function O1(t){const e=Vg(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ir&&xb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=nl(this.lastLoginAt),this.creationTime=nl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Lo(t,QI(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?YI(s.providerUserInfo):[],a=Rb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function Ab(t){const e=Te(t);await Pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YI(t){return t.map(e=>{var{providerId:n}=e,r=_g(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(t,e){const n=await GI(t,{},async()=>{const r=Jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=KI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pb(t,e){return on(t,"POST","/v2/accounts:revokeToken",Qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):O1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=O1(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new yo;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_g(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Lo(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Tb(this,e)}reload(){return Ab(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await Lo(this,Ib(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:D,isAnonymous:M,providerData:V,stsTokenManager:y}=n;ne(S&&y,e,"internal-error");const g=yo.fromJSON(this.name,y);ne(typeof S=="string",e,"internal-error"),Vr(f,e.name),Vr(m,e.name),ne(typeof D=="boolean",e,"internal-error"),ne(typeof M=="boolean",e,"internal-error"),Vr(_,e.name),Vr(T,e.name),Vr(R,e.name),Vr(P,e.name),Vr(w,e.name),Vr(E,e.name);const I=new mr({uid:S,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:M,photoURL:T,phoneNumber:_,tenantId:R,stsTokenManager:g,createdAt:w,lastLoginAt:E});return V&&Array.isArray(V)&&(I.providerData=V.map(x=>Object.assign({},x))),P&&(I._redirectEventId=P),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new yo;i.updateFromServerResponse(n);const s=new mr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?YI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new yo;a.updateFromIdToken(r);const u=new mr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=new Map;function gr(t){xr(t instanceof Function,"Expected a class definition");let e=L1.get(t);return e?(xr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,L1.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}XI.type="NONE";const M1=XI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t,e,n){return`firebase:${t}:${e}:${n}`}class vo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mc(this.userKey,i.apiKey,s),this.fullPersistenceKey=mc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vo(gr(M1),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||gr(M1);const o=mc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=mr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new vo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new vo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rT(e))return"Blackberry";if(iT(e))return"Webos";if(ZI(e))return"Safari";if((e.includes("chrome/")||eT(e))&&!e.includes("edge/"))return"Chrome";if(nT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JI(t=ht()){return/firefox\//i.test(t)}function ZI(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eT(t=ht()){return/crios\//i.test(t)}function tT(t=ht()){return/iemobile/i.test(t)}function nT(t=ht()){return/android/i.test(t)}function rT(t=ht()){return/blackberry/i.test(t)}function iT(t=ht()){return/webos/i.test(t)}function Og(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Cb(t=ht()){var e;return Og(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bb(){return HC()&&document.documentMode===10}function sT(t=ht()){return Og(t)||nT(t)||iT(t)||rT(t)||/windows phone/i.test(t)||tT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e=[]){let n;switch(t){case"Browser":n=F1(ht());break;case"Worker":n=`${F1(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(t,e={}){return on(t,"GET","/v2/passwordPolicy",Qt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=6;class Ob{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Vb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new U1(this),this.idTokenSubscription=new U1(this),this.beforeStateQueue=new Db(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await QI(this,{idToken:e}),r=await mr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(er(this));const n=e?Te(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nb(this),n=new Ob(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gr(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wn(t){return Te(t)}class U1{constructor(e){this.auth=e,this.observer=null,this.addObserver=JC(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mb(t){Kl=t}function Lg(t){return Kl.loadJS(t)}function Fb(){return Kl.recaptchaV2Script}function Ub(){return Kl.recaptchaEnterpriseScript}function jb(){return Kl.gapiScript}function aT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const zb="recaptcha-enterprise",Bb="NO_RECAPTCHA";class $b{constructor(e){this.type=zb,this.auth=wn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Eb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new _b(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;V1(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Bb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&V1(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ub();u.length!==0&&(u+=a),Lg(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function j1(t,e,n,r=!1){const i=new $b(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function lh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await j1(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await j1(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t,e){const n=Xh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Oo(s,e??{}))return i;Dn(i,"already-initialized")}return n.initialize({options:e})}function Wb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Hb(t,e,n){const r=wn(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=lT(e),{host:o,port:a}=Gb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Kb()}function lT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gb(t){const e=lT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:z1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:z1(o)}}}function z1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Kb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function Qb(t,e){return on(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e){return Ri(t,"POST","/v1/accounts:signInWithPassword",Qt(t,e))}async function uT(t,e){return on(t,"POST","/v1/accounts:sendOobCode",Qt(t,e))}async function Xb(t,e){return uT(t,e)}async function Jb(t,e){return uT(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e){return Ri(t,"POST","/v1/accounts:signInWithEmailLink",Qt(t,e))}async function e3(t,e){return Ri(t,"POST","/v1/accounts:signInWithEmailLink",Qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Jh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Cl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Cl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lh(e,n,"signInWithPassword",Yb);case"emailLink":return Zb(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lh(e,r,"signUpPassword",Qb);case"emailLink":return e3(e,{idToken:n,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t,e){return Ri(t,"POST","/v1/accounts:signInWithIdp",Qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t3="http://localhost";class us extends Jh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_g(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new us(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _o(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_o(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_o(e,n)}buildRequest(){const e={requestUri:t3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n3(t,e){return on(t,"POST","/v1/accounts:sendVerificationCode",Qt(t,e))}async function r3(t,e){return Ri(t,"POST","/v1/accounts:signInWithPhoneNumber",Qt(t,e))}async function i3(t,e){const n=await Ri(t,"POST","/v1/accounts:signInWithPhoneNumber",Qt(t,e));if(n.temporaryProof)throw Ua(t,"account-exists-with-different-credential",n);return n}const s3={USER_NOT_FOUND:"user-not-found"};async function o3(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ri(t,"POST","/v1/accounts:signInWithPhoneNumber",Qt(t,n),s3)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Jh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ji({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ji({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return r3(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return i3(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return o3(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ji({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l3(t){const e=Ma(Fa(t)).link,n=e?Ma(Fa(e)).deep_link_id:null,r=Ma(Fa(t)).deep_link_id;return(r?Ma(Fa(r)).link:null)||r||n||e||t}class Mg{constructor(e){var n,r,i,s,o,a;const u=Ma(Fa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=a3((i=u.mode)!==null&&i!==void 0?i:null);ne(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=l3(e);try{return new Mg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.providerId=Zo.PROVIDER_ID}static credential(e,n){return Cl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mg.parseLink(n);return ne(r,"argument-error"),Cl._fromEmailAndCode(e,r.code,r.tenantId)}}Zo.PROVIDER_ID="password";Zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Fg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Ql{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.FACEBOOK_SIGN_IN_METHOD="facebook.com";Br.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Ql{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Ql{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qr.credential(n,r)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u3(t,e){return Ri(t,"POST","/v1/accounts:signUp",Qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mr._fromIdTokenResponse(e,r,i),o=B1(r);return new cs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=B1(r);return new cs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function B1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends ir{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uh(e,n,r,i)}}function cT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c3(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}async function hT(t,e,n=!1){const r=await Lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",r)}async function h3(t,e,n){await Pl(e);const r=c3(e.providerData);ne(r.has(n)===t,e.auth,"provider-already-linked")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d3(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(er(r));const i="reauthenticate";try{const s=await Lo(t,cT(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=Vg(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),cs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(t,e,n=!1){if(Sn(t.app))return Promise.reject(er(t));const r="signIn",i=await cT(t,r,e),s=await cs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fT(t,e){return dT(wn(t),e)}async function f3(t,e){const n=Te(t);return await h3(!1,n,e.providerId),hT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(t){const e=wn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function p3(t,e,n){const r=wn(t);await lh(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Jb)}async function m3(t,e,n){if(Sn(t.app))return Promise.reject(er(t));const r=wn(t),o=await lh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",u3).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&pT(t),u}),a=await cs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function g3(t,e,n){return Sn(t.app)?Promise.reject(er(t)):fT(Te(t),Zo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pT(t),r})}async function y3(t,e){const n=Te(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await Xb(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v3(t,e){return on(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _3(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Te(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Lo(r,v3(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w3(t,e){return Te(t).setPersistence(e)}function mT(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function E3(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function I3(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function T3(t){return Te(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x3(t,e){return on(t,"POST","/v2/accounts/mfaEnrollment:start",Qt(t,e))}const ch="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ch,"1"),this.storage.removeItem(ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S3=1e3,A3=10;class yT extends gT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,A3):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},S3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yT.type="LOCAL";const vT=yT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T extends gT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_T.type="SESSION";const wT=_T;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R3(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await R3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Ug("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function P3(t){nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function C3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b3(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function D3(){return jg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="firebaseLocalStorageDb",N3=1,hh="firebaseLocalStorage",IT="fbase_key";class Yl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ed(t,e){return t.transaction([hh],e?"readwrite":"readonly").objectStore(hh)}function V3(){const t=indexedDB.deleteDatabase(ET);return new Yl(t).toPromise()}function em(){const t=indexedDB.open(ET,N3);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hh,{keyPath:IT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hh)?e(r):(r.close(),await V3(),e(await em()))})})}async function $1(t,e,n){const r=ed(t,!0).put({[IT]:e,value:n});return new Yl(r).toPromise()}async function O3(t,e){const n=ed(t,!1).get(e),r=await new Yl(n).toPromise();return r===void 0?null:r.value}function q1(t,e){const n=ed(t,!0).delete(e);return new Yl(n).toPromise()}const L3=800,M3=3;class TT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await em(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>M3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zh._getInstance(D3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await C3(),!this.activeServiceWorker)return;this.sender=new k3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||b3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await em();return await $1(e,ch,"1"),await q1(e,ch),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>O3(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>q1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ed(i,!1).getAll();return new Yl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),L3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TT.type="LOCAL";const F3=TT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U3(t,e){return on(t,"POST","/v2/accounts/mfaSignIn:start",Qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j3=500,z3=6e4,zu=1e12;class B3{constructor(e){this.auth=e,this.counter=zu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new $3(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||zu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||zu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||zu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class $3{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;ne(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=q3(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},z3)},j3))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function q3(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=aT("rcb"),W3=new Gl(3e4,6e4);class H3{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=nt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return ne(G3(n),e,"argument-error"),this.shouldResolveImmediately(n)&&N1(nt().grecaptcha)?Promise.resolve(nt().grecaptcha):new Promise((r,i)=>{const s=nt().setTimeout(()=>{i(sn(e,"network-request-failed"))},W3.get());nt()[Cf]=()=>{nt().clearTimeout(s),delete nt()[Cf];const a=nt().grecaptcha;if(!a||!N1(a)){i(sn(e,"internal-error"));return}const u=a.render;a.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${Fb()}?${Jo({onload:Cf,render:"explicit",hl:n})}`;Lg(o).catch(()=>{clearTimeout(s),i(sn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=nt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function G3(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class K3{async load(e){return new B3(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="recaptcha",Q3={theme:"light",type:"image"};class Y3{constructor(e,n,r=Object.assign({},Q3)){this.parameters=r,this.type=xT,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=wn(e),this.isInvisible=this.parameters.size==="invisible",ne(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;ne(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new K3:new H3,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ne(!this.parameters.sitekey,this.auth,"argument-error"),ne(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ne(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=nt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){ne(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ne(WI()&&!jg(),this.auth,"internal-error"),await X3(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await wb(this.auth);ne(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ne(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function X3(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ji._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Z3(t,e,n){if(Sn(t.app))return Promise.reject(er(t));const r=wn(t),i=await ST(r,e,Te(n));return new J3(i,s=>fT(r,s))}async function ST(t,e,n){var r;const i=await n.verify();try{ne(typeof i=="string",t,"argument-error"),ne(n.type===xT,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return ne(o.type==="enroll",t,"internal-error"),(await x3(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{ne(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return ne(a,t,"missing-multi-factor-info"),(await U3(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await n3(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.providerId=Zi.PROVIDER_ID,this.auth=wn(e)}verifyPhoneNumber(e,n){return ST(this.auth,e,Te(n))}static credential(e,n){return Ji._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Zi.credentialFromTaggedObject(n)}static credentialFromError(e){return Zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ji._fromTokenResponse(n,r):null}}Zi.PROVIDER_ID="phone";Zi.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t,e){return e?gr(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends Jh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _o(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _o(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _o(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e6(t){return dT(t.auth,new zg(t),t.bypassAuthState)}function t6(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),d3(n,new zg(t),t.bypassAuthState)}async function n6(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),hT(n,new zg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e6;case"linkViaPopup":case"linkViaRedirect":return n6;case"reauthViaPopup":case"reauthViaRedirect":return t6;default:Dn(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6=new Gl(2e3,1e4);async function kT(t,e,n){if(Sn(t.app))return Promise.reject(sn(t,"operation-not-supported-in-this-environment"));const r=wn(t);db(t,e,Fg);const i=AT(r,n);return new Ki(r,"signInViaPopup",e,i).executeNotNull()}class Ki extends RT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ki.currentPopupAction&&Ki.currentPopupAction.cancel(),Ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=Ug();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r6.get())};e()}}Ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i6="pendingRedirect",gc=new Map;class s6 extends RT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gc.get(this.auth._key());if(!e){try{const r=await o6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gc.set(this.auth._key(),e)}return this.bypassAuthState||gc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o6(t,e){const n=u6(e),r=l6(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function a6(t,e){gc.set(t._key(),e)}function l6(t){return gr(t._redirectPersistence)}function u6(t){return mc(i6,t.config.apiKey,t.name)}async function c6(t,e){return await wn(t)._initializationPromise,PT(t,e,!1)}async function PT(t,e,n=!1){if(Sn(t.app))return Promise.reject(er(t));const r=wn(t),i=AT(r,e),o=await new s6(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h6=10*60*1e3;class d6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!CT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h6&&this.cachedEventUids.clear(),this.cachedEventUids.has(W1(e))}saveEventToCache(e){this.cachedEventUids.add(W1(e)),this.lastProcessedEventTime=Date.now()}}function W1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function CT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p6(t,e={}){return on(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g6=/^https?/;async function y6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p6(t);for(const n of e)try{if(v6(n))return}catch{}Dn(t,"unauthorized-domain")}function v6(t){const e=Jp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!g6.test(n))return!1;if(m6.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _6=new Gl(3e4,6e4);function H1(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w6(t){return new Promise((e,n)=>{var r,i,s;function o(){H1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{H1(),n(sn(t,"network-request-failed"))},timeout:_6.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)o();else{const a=aT("iframefcb");return nt()[a]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},Lg(`${jb()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw yc=null,e})}let yc=null;function E6(t){return yc=yc||w6(t),yc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I6=new Gl(5e3,15e3),T6="__/auth/iframe",x6="emulator/auth/iframe",S6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R6(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ng(e,x6):`https://${t.config.authDomain}/${T6}`,r={apiKey:e.apiKey,appName:t.name,v:As},i=A6.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jo(r).slice(1)}`}async function k6(t){const e=await E6(t),n=nt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:R6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),a=nt().setTimeout(()=>{s(o)},I6.get());function u(){nt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C6=500,b6=600,D6="_blank",N6="http://localhost";class G1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V6(t,e,n,r=C6,i=b6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},P6),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ht().toLowerCase();n&&(a=eT(c)?D6:n),JI(c)&&(e=e||N6,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[_,T])=>`${m}${_}=${T},`,"");if(Cb(c)&&a!=="_self")return O6(e||"",a),new G1(null);const f=window.open(e||"",a,d);ne(f,t,"popup-blocked");try{f.focus()}catch{}return new G1(f)}function O6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L6="__/auth/handler",M6="emulator/auth/handler",F6=encodeURIComponent("fac");async function K1(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:i};if(e instanceof Fg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Ql){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${F6}=${encodeURIComponent(u)}`:"";return`${U6(t)}?${Jo(a).slice(1)}${c}`}function U6({config:t}){return t.emulator?Ng(t,M6):`https://${t.authDomain}/${L6}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="webStorageSupport";class j6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wT,this._completeRedirectFn=PT,this._overrideRedirectResult=a6}async _openPopup(e,n,r,i){var s;xr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await K1(e,n,r,Jp(),i);return V6(e,o,Ug())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await K1(e,n,r,Jp(),i);return P3(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await k6(e),r=new d6(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bf,{type:bf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bf];o!==void 0&&n(!!o),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sT()||ZI()||Og()}}const z6=j6;var Q1="@firebase/auth",Y1="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q6(t){ls(new vi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oT(t)},c=new Lb(r,i,s,u);return Wb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new vi("auth-internal",e=>{const n=wn(e.getProvider("auth").getImmediate());return(r=>new B6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(Q1,Y1,$6(t)),Zn(Q1,Y1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W6=5*60,H6=VI("authIdTokenMaxAge")||W6;let X1=null;const G6=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>H6)return;const i=n==null?void 0:n.token;X1!==i&&(X1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function K6(t=Cg()){const e=Xh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qb(t,{popupRedirectResolver:z6,persistence:[F3,vT,wT]}),r=VI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=G6(s.toString());E3(n,o,()=>o(n.currentUser)),mT(n,a=>o(a))}}const i=bI("auth");return i&&Hb(n,`http://${i}`),n}function Q6(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Mb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Q6().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q6("Browser");var J1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,bT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,g){function I(){}I.prototype=g.prototype,y.D=g.prototype,y.prototype=new I,y.prototype.constructor=y,y.C=function(x,C,b){for(var k=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)k[ee-2]=arguments[ee];return g.prototype[C].apply(x,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,g,I){I||(I=0);var x=Array(16);if(typeof g=="string")for(var C=0;16>C;++C)x[C]=g.charCodeAt(I++)|g.charCodeAt(I++)<<8|g.charCodeAt(I++)<<16|g.charCodeAt(I++)<<24;else for(C=0;16>C;++C)x[C]=g[I++]|g[I++]<<8|g[I++]<<16|g[I++]<<24;g=y.g[0],I=y.g[1],C=y.g[2];var b=y.g[3],k=g+(b^I&(C^b))+x[0]+3614090360&4294967295;g=I+(k<<7&4294967295|k>>>25),k=b+(C^g&(I^C))+x[1]+3905402710&4294967295,b=g+(k<<12&4294967295|k>>>20),k=C+(I^b&(g^I))+x[2]+606105819&4294967295,C=b+(k<<17&4294967295|k>>>15),k=I+(g^C&(b^g))+x[3]+3250441966&4294967295,I=C+(k<<22&4294967295|k>>>10),k=g+(b^I&(C^b))+x[4]+4118548399&4294967295,g=I+(k<<7&4294967295|k>>>25),k=b+(C^g&(I^C))+x[5]+1200080426&4294967295,b=g+(k<<12&4294967295|k>>>20),k=C+(I^b&(g^I))+x[6]+2821735955&4294967295,C=b+(k<<17&4294967295|k>>>15),k=I+(g^C&(b^g))+x[7]+4249261313&4294967295,I=C+(k<<22&4294967295|k>>>10),k=g+(b^I&(C^b))+x[8]+1770035416&4294967295,g=I+(k<<7&4294967295|k>>>25),k=b+(C^g&(I^C))+x[9]+2336552879&4294967295,b=g+(k<<12&4294967295|k>>>20),k=C+(I^b&(g^I))+x[10]+4294925233&4294967295,C=b+(k<<17&4294967295|k>>>15),k=I+(g^C&(b^g))+x[11]+2304563134&4294967295,I=C+(k<<22&4294967295|k>>>10),k=g+(b^I&(C^b))+x[12]+1804603682&4294967295,g=I+(k<<7&4294967295|k>>>25),k=b+(C^g&(I^C))+x[13]+4254626195&4294967295,b=g+(k<<12&4294967295|k>>>20),k=C+(I^b&(g^I))+x[14]+2792965006&4294967295,C=b+(k<<17&4294967295|k>>>15),k=I+(g^C&(b^g))+x[15]+1236535329&4294967295,I=C+(k<<22&4294967295|k>>>10),k=g+(C^b&(I^C))+x[1]+4129170786&4294967295,g=I+(k<<5&4294967295|k>>>27),k=b+(I^C&(g^I))+x[6]+3225465664&4294967295,b=g+(k<<9&4294967295|k>>>23),k=C+(g^I&(b^g))+x[11]+643717713&4294967295,C=b+(k<<14&4294967295|k>>>18),k=I+(b^g&(C^b))+x[0]+3921069994&4294967295,I=C+(k<<20&4294967295|k>>>12),k=g+(C^b&(I^C))+x[5]+3593408605&4294967295,g=I+(k<<5&4294967295|k>>>27),k=b+(I^C&(g^I))+x[10]+38016083&4294967295,b=g+(k<<9&4294967295|k>>>23),k=C+(g^I&(b^g))+x[15]+3634488961&4294967295,C=b+(k<<14&4294967295|k>>>18),k=I+(b^g&(C^b))+x[4]+3889429448&4294967295,I=C+(k<<20&4294967295|k>>>12),k=g+(C^b&(I^C))+x[9]+568446438&4294967295,g=I+(k<<5&4294967295|k>>>27),k=b+(I^C&(g^I))+x[14]+3275163606&4294967295,b=g+(k<<9&4294967295|k>>>23),k=C+(g^I&(b^g))+x[3]+4107603335&4294967295,C=b+(k<<14&4294967295|k>>>18),k=I+(b^g&(C^b))+x[8]+1163531501&4294967295,I=C+(k<<20&4294967295|k>>>12),k=g+(C^b&(I^C))+x[13]+2850285829&4294967295,g=I+(k<<5&4294967295|k>>>27),k=b+(I^C&(g^I))+x[2]+4243563512&4294967295,b=g+(k<<9&4294967295|k>>>23),k=C+(g^I&(b^g))+x[7]+1735328473&4294967295,C=b+(k<<14&4294967295|k>>>18),k=I+(b^g&(C^b))+x[12]+2368359562&4294967295,I=C+(k<<20&4294967295|k>>>12),k=g+(I^C^b)+x[5]+4294588738&4294967295,g=I+(k<<4&4294967295|k>>>28),k=b+(g^I^C)+x[8]+2272392833&4294967295,b=g+(k<<11&4294967295|k>>>21),k=C+(b^g^I)+x[11]+1839030562&4294967295,C=b+(k<<16&4294967295|k>>>16),k=I+(C^b^g)+x[14]+4259657740&4294967295,I=C+(k<<23&4294967295|k>>>9),k=g+(I^C^b)+x[1]+2763975236&4294967295,g=I+(k<<4&4294967295|k>>>28),k=b+(g^I^C)+x[4]+1272893353&4294967295,b=g+(k<<11&4294967295|k>>>21),k=C+(b^g^I)+x[7]+4139469664&4294967295,C=b+(k<<16&4294967295|k>>>16),k=I+(C^b^g)+x[10]+3200236656&4294967295,I=C+(k<<23&4294967295|k>>>9),k=g+(I^C^b)+x[13]+681279174&4294967295,g=I+(k<<4&4294967295|k>>>28),k=b+(g^I^C)+x[0]+3936430074&4294967295,b=g+(k<<11&4294967295|k>>>21),k=C+(b^g^I)+x[3]+3572445317&4294967295,C=b+(k<<16&4294967295|k>>>16),k=I+(C^b^g)+x[6]+76029189&4294967295,I=C+(k<<23&4294967295|k>>>9),k=g+(I^C^b)+x[9]+3654602809&4294967295,g=I+(k<<4&4294967295|k>>>28),k=b+(g^I^C)+x[12]+3873151461&4294967295,b=g+(k<<11&4294967295|k>>>21),k=C+(b^g^I)+x[15]+530742520&4294967295,C=b+(k<<16&4294967295|k>>>16),k=I+(C^b^g)+x[2]+3299628645&4294967295,I=C+(k<<23&4294967295|k>>>9),k=g+(C^(I|~b))+x[0]+4096336452&4294967295,g=I+(k<<6&4294967295|k>>>26),k=b+(I^(g|~C))+x[7]+1126891415&4294967295,b=g+(k<<10&4294967295|k>>>22),k=C+(g^(b|~I))+x[14]+2878612391&4294967295,C=b+(k<<15&4294967295|k>>>17),k=I+(b^(C|~g))+x[5]+4237533241&4294967295,I=C+(k<<21&4294967295|k>>>11),k=g+(C^(I|~b))+x[12]+1700485571&4294967295,g=I+(k<<6&4294967295|k>>>26),k=b+(I^(g|~C))+x[3]+2399980690&4294967295,b=g+(k<<10&4294967295|k>>>22),k=C+(g^(b|~I))+x[10]+4293915773&4294967295,C=b+(k<<15&4294967295|k>>>17),k=I+(b^(C|~g))+x[1]+2240044497&4294967295,I=C+(k<<21&4294967295|k>>>11),k=g+(C^(I|~b))+x[8]+1873313359&4294967295,g=I+(k<<6&4294967295|k>>>26),k=b+(I^(g|~C))+x[15]+4264355552&4294967295,b=g+(k<<10&4294967295|k>>>22),k=C+(g^(b|~I))+x[6]+2734768916&4294967295,C=b+(k<<15&4294967295|k>>>17),k=I+(b^(C|~g))+x[13]+1309151649&4294967295,I=C+(k<<21&4294967295|k>>>11),k=g+(C^(I|~b))+x[4]+4149444226&4294967295,g=I+(k<<6&4294967295|k>>>26),k=b+(I^(g|~C))+x[11]+3174756917&4294967295,b=g+(k<<10&4294967295|k>>>22),k=C+(g^(b|~I))+x[2]+718787259&4294967295,C=b+(k<<15&4294967295|k>>>17),k=I+(b^(C|~g))+x[9]+3951481745&4294967295,y.g[0]=y.g[0]+g&4294967295,y.g[1]=y.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,y.g[2]=y.g[2]+C&4294967295,y.g[3]=y.g[3]+b&4294967295}r.prototype.u=function(y,g){g===void 0&&(g=y.length);for(var I=g-this.blockSize,x=this.B,C=this.h,b=0;b<g;){if(C==0)for(;b<=I;)i(this,y,b),b+=this.blockSize;if(typeof y=="string"){for(;b<g;)if(x[C++]=y.charCodeAt(b++),C==this.blockSize){i(this,x),C=0;break}}else for(;b<g;)if(x[C++]=y[b++],C==this.blockSize){i(this,x),C=0;break}}this.h=C,this.o+=g},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var g=1;g<y.length-8;++g)y[g]=0;var I=8*this.o;for(g=y.length-8;g<y.length;++g)y[g]=I&255,I/=256;for(this.u(y),y=Array(16),g=I=0;4>g;++g)for(var x=0;32>x;x+=8)y[I++]=this.g[g]>>>x&255;return y};function s(y,g){var I=a;return Object.prototype.hasOwnProperty.call(I,y)?I[y]:I[y]=g(y)}function o(y,g){this.h=g;for(var I=[],x=!0,C=y.length-1;0<=C;C--){var b=y[C]|0;x&&b==g||(I[C]=b,x=!1)}this.g=I}var a={};function u(y){return-128<=y&&128>y?s(y,function(g){return new o([g|0],0>g?-1:0)}):new o([y|0],0>y?-1:0)}function c(y){if(isNaN(y)||!isFinite(y))return f;if(0>y)return P(c(-y));for(var g=[],I=1,x=0;y>=I;x++)g[x]=y/I|0,I*=4294967296;return new o(g,0)}function d(y,g){if(y.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(y.charAt(0)=="-")return P(d(y.substring(1),g));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(g,8)),x=f,C=0;C<y.length;C+=8){var b=Math.min(8,y.length-C),k=parseInt(y.substring(C,C+b),g);8>b?(b=c(Math.pow(g,b)),x=x.j(b).add(c(k))):(x=x.j(I),x=x.add(c(k)))}return x}var f=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();for(var y=0,g=1,I=0;I<this.g.length;I++){var x=this.i(I);y+=(0<=x?x:4294967296+x)*g,g*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T(this))return"0";if(R(this))return"-"+P(this).toString(y);for(var g=c(Math.pow(y,6)),I=this,x="";;){var C=D(I,g).g;I=w(I,C.j(g));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(y);if(I=C,T(I))return b+x;for(;6>b.length;)b="0"+b;x=b+x}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function T(y){if(y.h!=0)return!1;for(var g=0;g<y.g.length;g++)if(y.g[g]!=0)return!1;return!0}function R(y){return y.h==-1}t.l=function(y){return y=w(this,y),R(y)?-1:T(y)?0:1};function P(y){for(var g=y.g.length,I=[],x=0;x<g;x++)I[x]=~y.g[x];return new o(I,~y.h).add(m)}t.abs=function(){return R(this)?P(this):this},t.add=function(y){for(var g=Math.max(this.g.length,y.g.length),I=[],x=0,C=0;C<=g;C++){var b=x+(this.i(C)&65535)+(y.i(C)&65535),k=(b>>>16)+(this.i(C)>>>16)+(y.i(C)>>>16);x=k>>>16,b&=65535,k&=65535,I[C]=k<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function w(y,g){return y.add(P(g))}t.j=function(y){if(T(this)||T(y))return f;if(R(this))return R(y)?P(this).j(P(y)):P(P(this).j(y));if(R(y))return P(this.j(P(y)));if(0>this.l(_)&&0>y.l(_))return c(this.m()*y.m());for(var g=this.g.length+y.g.length,I=[],x=0;x<2*g;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(var C=0;C<y.g.length;C++){var b=this.i(x)>>>16,k=this.i(x)&65535,ee=y.i(C)>>>16,xe=y.i(C)&65535;I[2*x+2*C]+=k*xe,E(I,2*x+2*C),I[2*x+2*C+1]+=b*xe,E(I,2*x+2*C+1),I[2*x+2*C+1]+=k*ee,E(I,2*x+2*C+1),I[2*x+2*C+2]+=b*ee,E(I,2*x+2*C+2)}for(x=0;x<g;x++)I[x]=I[2*x+1]<<16|I[2*x];for(x=g;x<2*g;x++)I[x]=0;return new o(I,0)};function E(y,g){for(;(y[g]&65535)!=y[g];)y[g+1]+=y[g]>>>16,y[g]&=65535,g++}function S(y,g){this.g=y,this.h=g}function D(y,g){if(T(g))throw Error("division by zero");if(T(y))return new S(f,f);if(R(y))return g=D(P(y),g),new S(P(g.g),P(g.h));if(R(g))return g=D(y,P(g)),new S(P(g.g),g.h);if(30<y.g.length){if(R(y)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var I=m,x=g;0>=x.l(y);)I=M(I),x=M(x);var C=V(I,1),b=V(x,1);for(x=V(x,2),I=V(I,2);!T(x);){var k=b.add(x);0>=k.l(y)&&(C=C.add(I),b=k),x=V(x,1),I=V(I,1)}return g=w(y,C.j(g)),new S(C,g)}for(C=f;0<=y.l(g);){for(I=Math.max(1,Math.floor(y.m()/g.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),b=c(I),k=b.j(g);R(k)||0<k.l(y);)I-=x,b=c(I),k=b.j(g);T(b)&&(b=m),C=C.add(b),y=w(y,k)}return new S(C,y)}t.A=function(y){return D(this,y).h},t.and=function(y){for(var g=Math.max(this.g.length,y.g.length),I=[],x=0;x<g;x++)I[x]=this.i(x)&y.i(x);return new o(I,this.h&y.h)},t.or=function(y){for(var g=Math.max(this.g.length,y.g.length),I=[],x=0;x<g;x++)I[x]=this.i(x)|y.i(x);return new o(I,this.h|y.h)},t.xor=function(y){for(var g=Math.max(this.g.length,y.g.length),I=[],x=0;x<g;x++)I[x]=this.i(x)^y.i(x);return new o(I,this.h^y.h)};function M(y){for(var g=y.g.length+1,I=[],x=0;x<g;x++)I[x]=y.i(x)<<1|y.i(x-1)>>>31;return new o(I,y.h)}function V(y,g){var I=g>>5;g%=32;for(var x=y.g.length-I,C=[],b=0;b<x;b++)C[b]=0<g?y.i(b+I)>>>g|y.i(b+I+1)<<32-g:y.i(b+I);return new o(C,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,es=o}).apply(typeof J1<"u"?J1:typeof self<"u"?self:typeof window<"u"?window:{});var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var DT,ja,NT,vc,tm,VT,OT,LT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bu=="object"&&Bu];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var O=l[v];if(!(O in p))break e;p=p[O]}l=l[l.length-1],v=p[l],h=h(v),h!=v&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,v=!1,O={next:function(){if(!v&&p<l.length){var F=p++;return{value:h(F,l[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,v),l.apply(h,O)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function _(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function T(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(v,O,F){for(var Y=Array(arguments.length-2),be=2;be<arguments.length;be++)Y[be-2]=arguments[be];return h.prototype[O].apply(v,Y)}}function R(l){const h=l.length;if(0<h){const p=Array(h);for(let v=0;v<h;v++)p[v]=l[v];return p}return[]}function P(l,h){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const O=l.length||0,F=v.length||0;l.length=O+F;for(let Y=0;Y<F;Y++)l[O+Y]=v[Y]}else l.push(v)}}class w{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function E(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function V(l,h,p){for(const v in l)h.call(p,l[v],v,l)}function y(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function g(l){const h={};for(const p in l)h[p]=l[p];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(l,h){let p,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(p in v)l[p]=v[p];for(let F=0;F<I.length;F++)p=I[F],Object.prototype.hasOwnProperty.call(v,p)&&(l[p]=v[p])}}function C(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function b(l){a.setTimeout(()=>{throw l},0)}function k(){var l=$;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class ee{constructor(){this.h=this.g=null}add(h,p){const v=xe.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var xe=new w(()=>new Pe,l=>l.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,Q=!1,$=new ee,z=()=>{const l=a.Promise.resolve(void 0);ye=()=>{l.then(G)}};var G=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(p){b(p)}var h=xe;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}Q=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var U=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function re(l,h){if(J.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(M){e:{try{D(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ce[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&re.aa.h.call(this)}}T(re,J);var ce={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ae="closure_listenable_"+(1e6*Math.random()|0),et=0;function He(l,h,p,v,O){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=O,this.key=++et,this.da=this.fa=!1}function Lt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Yt(l){this.src=l,this.g={},this.h=0}Yt.prototype.add=function(l,h,p,v,O){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var Y=Pr(l,h,v,O);return-1<Y?(h=l[Y],p||(h.fa=!1)):(h=new He(h,this.src,F,!!v,O),h.fa=p,l.push(h)),h};function Mt(l,h){var p=h.type;if(p in l.g){var v=l.g[p],O=Array.prototype.indexOf.call(v,h,void 0),F;(F=0<=O)&&Array.prototype.splice.call(v,O,1),F&&(Lt(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Pr(l,h,p,v){for(var O=0;O<l.length;++O){var F=l[O];if(!F.da&&F.listener==h&&F.capture==!!p&&F.ha==v)return O}return-1}var Vs="closure_lm_"+(1e6*Math.random()|0),Ad={};function j0(l,h,p,v,O){if(Array.isArray(h)){for(var F=0;F<h.length;F++)j0(l,h[F],p,v,O);return null}return p=$0(p),l&&l[Ae]?l.K(h,p,c(v)?!!v.capture:!1,O):Zx(l,h,p,!1,v,O)}function Zx(l,h,p,v,O,F){if(!h)throw Error("Invalid event type");var Y=c(O)?!!O.capture:!!O,be=kd(l);if(be||(l[Vs]=be=new Yt(l)),p=be.add(h,p,v,Y,F),p.proxy)return p;if(v=eS(),p.proxy=v,v.src=l,v.listener=p,l.addEventListener)U||(O=Y),O===void 0&&(O=!1),l.addEventListener(h.toString(),v,O);else if(l.attachEvent)l.attachEvent(B0(h.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function eS(){function l(p){return h.call(l.src,l.listener,p)}const h=tS;return l}function z0(l,h,p,v,O){if(Array.isArray(h))for(var F=0;F<h.length;F++)z0(l,h[F],p,v,O);else v=c(v)?!!v.capture:!!v,p=$0(p),l&&l[Ae]?(l=l.i,h=String(h).toString(),h in l.g&&(F=l.g[h],p=Pr(F,p,v,O),-1<p&&(Lt(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete l.g[h],l.h--)))):l&&(l=kd(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Pr(h,p,v,O)),(p=-1<l?h[l]:null)&&Rd(p))}function Rd(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Ae])Mt(h.i,l);else{var p=l.type,v=l.proxy;h.removeEventListener?h.removeEventListener(p,v,l.capture):h.detachEvent?h.detachEvent(B0(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=kd(h))?(Mt(p,l),p.h==0&&(p.src=null,h[Vs]=null)):Lt(l)}}}function B0(l){return l in Ad?Ad[l]:Ad[l]="on"+l}function tS(l,h){if(l.da)l=!0;else{h=new re(h,this);var p=l.listener,v=l.ha||l.src;l.fa&&Rd(l),l=p.call(v,h)}return l}function kd(l){return l=l[Vs],l instanceof Yt?l:null}var Pd="__closure_events_fn_"+(1e9*Math.random()>>>0);function $0(l){return typeof l=="function"?l:(l[Pd]||(l[Pd]=function(h){return l.handleEvent(h)}),l[Pd])}function xt(){q.call(this),this.i=new Yt(this),this.M=this,this.F=null}T(xt,q),xt.prototype[Ae]=!0,xt.prototype.removeEventListener=function(l,h,p,v){z0(this,l,h,p,v)};function Ft(l,h){var p,v=l.F;if(v)for(p=[];v;v=v.F)p.push(v);if(l=l.M,v=h.type||h,typeof h=="string")h=new J(h,l);else if(h instanceof J)h.target=h.target||l;else{var O=h;h=new J(v,l),x(h,O)}if(O=!0,p)for(var F=p.length-1;0<=F;F--){var Y=h.g=p[F];O=ou(Y,v,!0,h)&&O}if(Y=h.g=l,O=ou(Y,v,!0,h)&&O,O=ou(Y,v,!1,h)&&O,p)for(F=0;F<p.length;F++)Y=h.g=p[F],O=ou(Y,v,!1,h)&&O}xt.prototype.N=function(){if(xt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],v=0;v<p.length;v++)Lt(p[v]);delete l.g[h],l.h--}}this.F=null},xt.prototype.K=function(l,h,p,v){return this.i.add(String(l),h,!1,p,v)},xt.prototype.L=function(l,h,p,v){return this.i.add(String(l),h,!0,p,v)};function ou(l,h,p,v){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,F=0;F<h.length;++F){var Y=h[F];if(Y&&!Y.da&&Y.capture==p){var be=Y.listener,vt=Y.ha||Y.src;Y.fa&&Mt(l.i,Y),O=be.call(vt,v)!==!1&&O}}return O&&!v.defaultPrevented}function q0(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function W0(l){l.g=q0(()=>{l.g=null,l.i&&(l.i=!1,W0(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class nS extends q{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:W0(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ra(l){q.call(this),this.h=l,this.g={}}T(ra,q);var H0=[];function G0(l){V(l.g,function(h,p){this.g.hasOwnProperty(p)&&Rd(h)},l),l.g={}}ra.prototype.N=function(){ra.aa.N.call(this),G0(this)},ra.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cd=a.JSON.stringify,rS=a.JSON.parse,iS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function bd(){}bd.prototype.h=null;function K0(l){return l.h||(l.h=l.i())}function Q0(){}var ia={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dd(){J.call(this,"d")}T(Dd,J);function Nd(){J.call(this,"c")}T(Nd,J);var Ci={},Y0=null;function au(){return Y0=Y0||new xt}Ci.La="serverreachability";function X0(l){J.call(this,Ci.La,l)}T(X0,J);function sa(l){const h=au();Ft(h,new X0(h))}Ci.STAT_EVENT="statevent";function J0(l,h){J.call(this,Ci.STAT_EVENT,l),this.stat=h}T(J0,J);function Ut(l){const h=au();Ft(h,new J0(h,l))}Ci.Ma="timingevent";function Z0(l,h){J.call(this,Ci.Ma,l),this.size=h}T(Z0,J);function oa(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function aa(){this.g=!0}aa.prototype.xa=function(){this.g=!1};function sS(l,h,p,v,O,F){l.info(function(){if(l.g)if(F)for(var Y="",be=F.split("&"),vt=0;vt<be.length;vt++){var _e=be[vt].split("=");if(1<_e.length){var St=_e[0];_e=_e[1];var At=St.split("_");Y=2<=At.length&&At[1]=="type"?Y+(St+"="+_e+"&"):Y+(St+"=redacted&")}}else Y=null;else Y=F;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+h+`
`+p+`
`+Y})}function oS(l,h,p,v,O,F,Y){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+h+`
`+p+`
`+F+" "+Y})}function Os(l,h,p,v){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+lS(l,p)+(v?" "+v:"")})}function aS(l,h){l.info(function(){return"TIMEOUT: "+h})}aa.prototype.info=function(){};function lS(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var v=p[l];if(!(2>v.length)){var O=v[1];if(Array.isArray(O)&&!(1>O.length)){var F=O[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Y=1;Y<O.length;Y++)O[Y]=""}}}}return Cd(p)}catch{return h}}var lu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ey={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vd;function uu(){}T(uu,bd),uu.prototype.g=function(){return new XMLHttpRequest},uu.prototype.i=function(){return{}},Vd=new uu;function Cr(l,h,p,v){this.j=l,this.i=h,this.l=p,this.R=v||1,this.U=new ra(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ty}function ty(){this.i=null,this.g="",this.h=!1}var ny={},Od={};function Ld(l,h,p){l.L=1,l.v=fu(or(h)),l.m=p,l.P=!0,ry(l,null)}function ry(l,h){l.F=Date.now(),cu(l),l.A=or(l.v);var p=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),yy(p.i,"t",v),l.C=0,p=l.j.J,l.h=new ty,l.g=Oy(l.j,p?h:null,!l.m),0<l.O&&(l.M=new nS(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,v=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(H0[0]=O.toString()),O=H0);for(var F=0;F<O.length;F++){var Y=j0(p,O[F],v||h.handleEvent,!1,h.h||h);if(!Y)break;h.g[Y.key]=Y}h=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),sa(),sS(l.i,l.u,l.A,l.l,l.R,l.m)}Cr.prototype.ca=function(l){l=l.target;const h=this.M;h&&ar(l)==3?h.j():this.Y(l)},Cr.prototype.Y=function(l){try{if(l==this.g)e:{const At=ar(this.g);var h=this.g.Ba();const Fs=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||xy(this.g)))){this.J||At!=4||h==7||(h==8||0>=Fs?sa(3):sa(2)),Md(this);var p=this.g.Z();this.X=p;t:if(iy(this)){var v=xy(this.g);l="";var O=v.length,F=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bi(this),la(this);var Y="";break t}this.h.i=new a.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,l+=this.h.i.decode(v[h],{stream:!(F&&h==O-1)});v.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=p==200,oS(this.i,this.u,this.A,this.l,this.R,At,p),this.o){if(this.T&&!this.K){t:{if(this.g){var be,vt=this.g;if((be=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(be)){var _e=be;break t}}_e=null}if(p=_e)Os(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fd(this,p);else{this.o=!1,this.s=3,Ut(12),bi(this),la(this);break e}}if(this.P){p=!0;let Nn;for(;!this.J&&this.C<Y.length;)if(Nn=uS(this,Y),Nn==Od){At==4&&(this.s=4,Ut(14),p=!1),Os(this.i,this.l,null,"[Incomplete Response]");break}else if(Nn==ny){this.s=4,Ut(15),Os(this.i,this.l,Y,"[Invalid Chunk]"),p=!1;break}else Os(this.i,this.l,Nn,null),Fd(this,Nn);if(iy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||Y.length!=0||this.h.h||(this.s=1,Ut(16),p=!1),this.o=this.o&&p,!p)Os(this.i,this.l,Y,"[Invalid Chunked Response]"),bi(this),la(this);else if(0<Y.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),qd(St),St.M=!0,Ut(11))}}else Os(this.i,this.l,Y,null),Fd(this,Y);At==4&&bi(this),this.o&&!this.J&&(At==4?by(this.j,this):(this.o=!1,cu(this)))}else AS(this.g),p==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),bi(this),la(this)}}}catch{}finally{}};function iy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function uS(l,h){var p=l.C,v=h.indexOf(`
`,p);return v==-1?Od:(p=Number(h.substring(p,v)),isNaN(p)?ny:(v+=1,v+p>h.length?Od:(h=h.slice(v,v+p),l.C=v+p,h)))}Cr.prototype.cancel=function(){this.J=!0,bi(this)};function cu(l){l.S=Date.now()+l.I,sy(l,l.I)}function sy(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=oa(m(l.ba,l),h)}function Md(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Cr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(aS(this.i,this.A),this.L!=2&&(sa(),Ut(17)),bi(this),this.s=2,la(this)):sy(this,this.S-l)};function la(l){l.j.G==0||l.J||by(l.j,l)}function bi(l){Md(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,G0(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Fd(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||Ud(p.h,l))){if(!l.K&&Ud(p.h,l)&&p.G==3){try{var v=p.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)_u(p),yu(p);else break e;$d(p),Ut(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=oa(m(p.Za,p),6e3));if(1>=ly(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ni(p,11)}else if((l.K||p.g==l)&&_u(p),!E(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let _e=O[h];if(p.T=_e[0],_e=_e[1],p.G==2)if(_e[0]=="c"){p.K=_e[1],p.ia=_e[2];const St=_e[3];St!=null&&(p.la=St,p.j.info("VER="+p.la));const At=_e[4];At!=null&&(p.Aa=At,p.j.info("SVER="+p.Aa));const Fs=_e[5];Fs!=null&&typeof Fs=="number"&&0<Fs&&(v=1.5*Fs,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const Nn=l.g;if(Nn){const Eu=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Eu){var F=v.h;F.g||Eu.indexOf("spdy")==-1&&Eu.indexOf("quic")==-1&&Eu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(jd(F,F.h),F.h=null))}if(v.D){const Wd=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wd&&(v.ya=Wd,Ne(v.I,v.D,Wd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var Y=l;if(v.qa=Vy(v,v.J?v.ia:null,v.W),Y.K){uy(v.h,Y);var be=Y,vt=v.L;vt&&(be.I=vt),be.B&&(Md(be),cu(be)),v.g=Y}else Py(v);0<p.i.length&&vu(p)}else _e[0]!="stop"&&_e[0]!="close"||Ni(p,7);else p.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Ni(p,7):Bd(p):_e[0]!="noop"&&p.l&&p.l.ta(_e),p.v=0)}}sa(4)}catch{}}var cS=class{constructor(l,h){this.g=l,this.map=h}};function oy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ay(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ly(l){return l.h?1:l.g?l.g.size:0}function Ud(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function jd(l,h){l.g?l.g.add(h):l.h=h}function uy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}oy.prototype.cancel=function(){if(this.i=cy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function cy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return R(l.i)}function hS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,v=0;v<p;v++)h.push(l[v]);return h}h=[],p=0;for(v in l)h[p++]=l[v];return h}function dS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const v in l)h[p++]=v;return h}}}function hy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=dS(l),v=hS(l),O=v.length,F=0;F<O;F++)h.call(void 0,v[F],p&&p[F],l)}var dy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fS(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var v=l[p].indexOf("="),O=null;if(0<=v){var F=l[p].substring(0,v);O=l[p].substring(v+1)}else F=l[p];h(F,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Di(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Di){this.h=l.h,hu(this,l.j),this.o=l.o,this.g=l.g,du(this,l.s),this.l=l.l;var h=l.i,p=new ha;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),fy(this,p),this.m=l.m}else l&&(h=String(l).match(dy))?(this.h=!1,hu(this,h[1]||"",!0),this.o=ua(h[2]||""),this.g=ua(h[3]||"",!0),du(this,h[4]),this.l=ua(h[5]||"",!0),fy(this,h[6]||"",!0),this.m=ua(h[7]||"")):(this.h=!1,this.i=new ha(null,this.h))}Di.prototype.toString=function(){var l=[],h=this.j;h&&l.push(ca(h,py,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(ca(h,py,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(ca(p,p.charAt(0)=="/"?gS:mS,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",ca(p,vS)),l.join("")};function or(l){return new Di(l)}function hu(l,h,p){l.j=p?ua(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function du(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function fy(l,h,p){h instanceof ha?(l.i=h,_S(l.i,l.h)):(p||(h=ca(h,yS)),l.i=new ha(h,l.h))}function Ne(l,h,p){l.i.set(h,p)}function fu(l){return Ne(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ua(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ca(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,pS),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function pS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var py=/[#\/\?@]/g,mS=/[#\?:]/g,gS=/[#\?]/g,yS=/[#\?@]/g,vS=/#/g;function ha(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function br(l){l.g||(l.g=new Map,l.h=0,l.i&&fS(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ha.prototype,t.add=function(l,h){br(this),this.i=null,l=Ls(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function my(l,h){br(l),h=Ls(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function gy(l,h){return br(l),h=Ls(l,h),l.g.has(h)}t.forEach=function(l,h){br(this),this.g.forEach(function(p,v){p.forEach(function(O){l.call(h,O,v,this)},this)},this)},t.na=function(){br(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let v=0;v<h.length;v++){const O=l[v];for(let F=0;F<O.length;F++)p.push(h[v])}return p},t.V=function(l){br(this);let h=[];if(typeof l=="string")gy(this,l)&&(h=h.concat(this.g.get(Ls(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return br(this),this.i=null,l=Ls(this,l),gy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function yy(l,h,p){my(l,h),0<p.length&&(l.i=null,l.g.set(Ls(l,h),R(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var v=h[p];const F=encodeURIComponent(String(v)),Y=this.V(v);for(v=0;v<Y.length;v++){var O=F;Y[v]!==""&&(O+="="+encodeURIComponent(String(Y[v]))),l.push(O)}}return this.i=l.join("&")};function Ls(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function _S(l,h){h&&!l.j&&(br(l),l.i=null,l.g.forEach(function(p,v){var O=v.toLowerCase();v!=O&&(my(this,v),yy(this,O,p))},l)),l.j=h}function wS(l,h){const p=new aa;if(a.Image){const v=new Image;v.onload=_(Dr,p,"TestLoadImage: loaded",!0,h,v),v.onerror=_(Dr,p,"TestLoadImage: error",!1,h,v),v.onabort=_(Dr,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=_(Dr,p,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else h(!1)}function ES(l,h){const p=new aa,v=new AbortController,O=setTimeout(()=>{v.abort(),Dr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:v.signal}).then(F=>{clearTimeout(O),F.ok?Dr(p,"TestPingServer: ok",!0,h):Dr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Dr(p,"TestPingServer: error",!1,h)})}function Dr(l,h,p,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(p)}catch{}}function IS(){this.g=new iS}function TS(l,h,p){const v=p||"";try{hy(l,function(O,F){let Y=O;c(O)&&(Y=Cd(O)),h.push(v+F+"="+encodeURIComponent(Y))})}catch(O){throw h.push(v+"type="+encodeURIComponent("_badmap")),O}}function pu(l){this.l=l.Ub||null,this.j=l.eb||!1}T(pu,bd),pu.prototype.g=function(){return new mu(this.l,this.j)},pu.prototype.i=function(l){return function(){return l}}({});function mu(l,h){xt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(mu,xt),t=mu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,fa(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,da(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,fa(this)),this.g&&(this.readyState=3,fa(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function vy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?da(this):fa(this),this.readyState==3&&vy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,da(this))},t.Qa=function(l){this.g&&(this.response=l,da(this))},t.ga=function(){this.g&&da(this)};function da(l){l.readyState=4,l.l=null,l.j=null,l.v=null,fa(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function fa(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(mu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function _y(l){let h="";return V(l,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function zd(l,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=_y(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ne(l,h,p))}function Ge(l){xt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ge,xt);var xS=/^https?$/i,SS=["POST","PUT"];t=Ge.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vd.g(),this.v=this.o?K0(this.o):K0(Vd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(F){wy(this,F);return}if(l=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)p.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())p.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(SS,h,void 0))||v||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Y]of p)this.g.setRequestHeader(F,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ty(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){wy(this,F)}};function wy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Ey(l),gu(l)}function Ey(l){l.A||(l.A=!0,Ft(l,"complete"),Ft(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ft(this,"complete"),Ft(this,"abort"),gu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gu(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Iy(this):this.bb())},t.bb=function(){Iy(this)};function Iy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||ar(l)!=4||l.Z()!=2)){if(l.u&&ar(l)==4)q0(l.Ea,0,l);else if(Ft(l,"readystatechange"),ar(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=Y===0){var O=String(l.D).match(dy)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),v=!xS.test(O?O.toLowerCase():"")}p=v}if(p)Ft(l,"complete"),Ft(l,"success");else{l.m=6;try{var F=2<ar(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",Ey(l)}}finally{gu(l)}}}}function gu(l,h){if(l.g){Ty(l);const p=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Ft(l,"ready");try{p.onreadystatechange=v}catch{}}}function Ty(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function ar(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),rS(h)}};function xy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function AS(l){const h={};l=(l.g&&2<=ar(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(E(l[v]))continue;var p=C(l[v]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=h[O]||[];h[O]=F,F.push(p)}y(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pa(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Sy(l){this.Aa=0,this.i=[],this.j=new aa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pa("baseRetryDelayMs",5e3,l),this.cb=pa("retryDelaySeedMs",1e4,l),this.Wa=pa("forwardChannelMaxRetries",2,l),this.wa=pa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new oy(l&&l.concurrentRequestLimit),this.Da=new IS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sy.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,v){Ut(0),this.W=l,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Vy(this,null,this.W),vu(this)};function Bd(l){if(Ay(l),l.G==3){var h=l.U++,p=or(l.I);if(Ne(p,"SID",l.K),Ne(p,"RID",h),Ne(p,"TYPE","terminate"),ma(l,p),h=new Cr(l,l.j,h),h.L=2,h.v=fu(or(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Oy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),cu(h)}Ny(l)}function yu(l){l.g&&(qd(l),l.g.cancel(),l.g=null)}function Ay(l){yu(l),l.u&&(a.clearTimeout(l.u),l.u=null),_u(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function vu(l){if(!ay(l.h)&&!l.s){l.s=!0;var h=l.Ga;ye||z(),Q||(ye(),Q=!0),$.add(h,l),l.B=0}}function RS(l,h){return ly(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=oa(m(l.Ga,l,h),Dy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Cr(this,this.j,l);let F=this.o;if(this.S&&(F?(F=g(F),x(F,this.S)):F=this.S),this.m!==null||this.O||(O.H=F,F=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=ky(this,O,h),p=or(this.I),Ne(p,"RID",l),Ne(p,"CVER",22),this.D&&Ne(p,"X-HTTP-Session-Id",this.D),ma(this,p),F&&(this.O?h="headers="+encodeURIComponent(String(_y(F)))+"&"+h:this.m&&zd(p,this.m,F)),jd(this.h,O),this.Ua&&Ne(p,"TYPE","init"),this.P?(Ne(p,"$req",h),Ne(p,"SID","null"),O.T=!0,Ld(O,p,null)):Ld(O,p,h),this.G=2}}else this.G==3&&(l?Ry(this,l):this.i.length==0||ay(this.h)||Ry(this))};function Ry(l,h){var p;h?p=h.l:p=l.U++;const v=or(l.I);Ne(v,"SID",l.K),Ne(v,"RID",p),Ne(v,"AID",l.T),ma(l,v),l.m&&l.o&&zd(v,l.m,l.o),p=new Cr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=ky(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),jd(l.h,p),Ld(p,v,h)}function ma(l,h){l.H&&V(l.H,function(p,v){Ne(h,v,p)}),l.l&&hy({},function(p,v){Ne(h,v,p)})}function ky(l,h,p){p=Math.min(l.i.length,p);var v=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let F=-1;for(;;){const Y=["count="+p];F==-1?0<p?(F=O[0].g,Y.push("ofs="+F)):F=0:Y.push("ofs="+F);let be=!0;for(let vt=0;vt<p;vt++){let _e=O[vt].g;const St=O[vt].map;if(_e-=F,0>_e)F=Math.max(0,O[vt].g-100),be=!1;else try{TS(St,Y,"req"+_e+"_")}catch{v&&v(St)}}if(be){v=Y.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,v}function Py(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ye||z(),Q||(ye(),Q=!0),$.add(h,l),l.v=0}}function $d(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=oa(m(l.Fa,l),Dy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Cy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=oa(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),yu(this),Cy(this))};function qd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Cy(l){l.g=new Cr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=or(l.qa);Ne(h,"RID","rpc"),Ne(h,"SID",l.K),Ne(h,"AID",l.T),Ne(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ne(h,"TO",l.ja),Ne(h,"TYPE","xmlhttp"),ma(l,h),l.m&&l.o&&zd(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=fu(or(h)),p.m=null,p.P=!0,ry(p,l)}t.Za=function(){this.C!=null&&(this.C=null,yu(this),$d(this),Ut(19))};function _u(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function by(l,h){var p=null;if(l.g==h){_u(l),qd(l),l.g=null;var v=2}else if(Ud(l.h,h))p=h.D,uy(l.h,h),v=1;else return;if(l.G!=0){if(h.o)if(v==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=l.B;v=au(),Ft(v,new Z0(v,p)),vu(l)}else Py(l);else if(O=h.s,O==3||O==0&&0<h.X||!(v==1&&RS(l,h)||v==2&&$d(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),O){case 1:Ni(l,5);break;case 4:Ni(l,10);break;case 3:Ni(l,6);break;default:Ni(l,2)}}}function Dy(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Ni(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),v=l.Xa;const O=!v;v=new Di(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||hu(v,"https"),fu(v),O?wS(v.toString(),p):ES(v.toString(),p)}else Ut(2);l.G=0,l.l&&l.l.sa(h),Ny(l),Ay(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function Ny(l){if(l.G=0,l.ka=[],l.l){const h=cy(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function Vy(l,h,p){var v=p instanceof Di?or(p):new Di(p);if(v.g!="")h&&(v.g=h+"."+v.g),du(v,v.s);else{var O=a.location;v=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var F=new Di(null);v&&hu(F,v),h&&(F.g=h),O&&du(F,O),p&&(F.l=p),v=F}return p=l.D,h=l.ya,p&&h&&Ne(v,p,h),Ne(v,"VER",l.la),ma(l,v),v}function Oy(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ge(new pu({eb:p})):new Ge(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ly(){}t=Ly.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function wu(){}wu.prototype.g=function(l,h){return new an(l,h)};function an(l,h){xt.call(this),this.g=new Sy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!E(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Ms(this)}T(an,xt),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){Bd(this.g)},an.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Cd(l),l=p);h.i.push(new cS(h.Ya++,l)),h.G==3&&vu(h)},an.prototype.N=function(){this.g.l=null,delete this.j,Bd(this.g),delete this.g,an.aa.N.call(this)};function My(l){Dd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}T(My,Dd);function Fy(){Nd.call(this),this.status=1}T(Fy,Nd);function Ms(l){this.g=l}T(Ms,Ly),Ms.prototype.ua=function(){Ft(this.g,"a")},Ms.prototype.ta=function(l){Ft(this.g,new My(l))},Ms.prototype.sa=function(l){Ft(this.g,new Fy)},Ms.prototype.ra=function(){Ft(this.g,"b")},wu.prototype.createWebChannel=wu.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,LT=function(){return new wu},OT=function(){return au()},VT=Ci,tm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lu.NO_ERROR=0,lu.TIMEOUT=8,lu.HTTP_ERROR=6,vc=lu,ey.COMPLETE="complete",NT=ey,Q0.EventType=ia,ia.OPEN="a",ia.CLOSE="b",ia.ERROR="c",ia.MESSAGE="d",xt.prototype.listen=xt.prototype.K,ja=Q0,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,DT=Ge}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});const Z1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new kg("@firebase/firestore");function Hs(){return hs.logLevel}function W(t,...e){if(hs.logLevel<=pe.DEBUG){const n=e.map(Bg);hs.debug(`Firestore (${ea}): ${t}`,...n)}}function Bt(t,...e){if(hs.logLevel<=pe.ERROR){const n=e.map(Bg);hs.error(`Firestore (${ea}): ${t}`,...n)}}function ds(t,...e){if(hs.logLevel<=pe.WARN){const n=e.map(Bg);hs.warn(`Firestore (${ea}): ${t}`,...n)}}function Bg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${ea}) INTERNAL ASSERTION FAILED: `+t;throw Bt(e),new Error(e)}function se(t,e){t||ie()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class X6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class J6{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){se(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new MT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new wt(e)}}class Z6{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class e8{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Z6(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t8{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n8{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){se(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.R=n.token,new t8(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r8(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=r8(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Mo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function UT(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new qe(0,0))}static max(){return new oe(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends bl{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const i8=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends bl{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return i8.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ie.fromString(e))}static fromName(e){return new X(Ie.fromString(e).popFirst(5))}static empty(){return new X(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function nm(t){return t.fields.find(e=>e.kind===2)}function Ui(t){return t.fields.filter(e=>e.kind!==2)}dh.UNKNOWN_ID=-1;class _c{constructor(e,n){this.fieldPath=e,this.kind=n}}class Dl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Dl(0,yn.min())}}function s8(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new yn(i,X.empty(),e)}function jT(t){return new yn(t.readTime,t.key,-1)}class yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yn(oe.min(),X.empty(),-1)}static max(){return new yn(oe.max(),X.empty(),-1)}}function $g(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==zT)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new tr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new rl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=qg(r.target.error);this.V.reject(new rl(e,i))}}static open(e,n,r,i){try{return new td(n,e.transaction(i,r))}catch(s){throw new rl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(W("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new a8(n)}}class di{constructor(e,n,r){this.name=e,this.version=n,this.p=r,di.S(ht())===12.2&&Bt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return W("SimpleDb","Removing database:",e),ji(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!MI())return!1;if(di.v())return!0;const e=ht(),n=di.S(e),r=0<n&&n<10,i=$T(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(W("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new rl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new K(j.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new K(j.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new rl(e,o))},i.onupgradeneeded=s=>{W("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{W("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=td.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),L.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(W("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function $T(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class o8{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ji(this.B.delete())}}class rl extends K{constructor(e,n){super(j.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ki(t){return t.name==="IndexedDbTransactionError"}class a8{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(W("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(W("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ji(r)}add(e){return W("SimpleDb","ADD",this.store.name,e,e),ji(this.store.add(e))}get(e){return ji(this.store.get(e)).next(n=>(n===void 0&&(n=null),W("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return W("SimpleDb","DELETE",this.store.name,e),ji(this.store.delete(e))}count(){return W("SimpleDb","COUNT",this.store.name),ji(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new L((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new L((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){W("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new L((r,i)=>{n.onerror=s=>{const o=qg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new L((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new o8(a),c=n(a.primaryKey,a.value,u);if(c instanceof L){const d=c.catch(f=>(u.done(),L.reject(f)));r.push(d)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>L.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ji(t){return new L((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=qg(r.target.error);n(i)}})}let e_=!1;function qg(t){const e=di.S(ht());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new K("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return e_||(e_=!0,setTimeout(()=>{throw r},0)),r}}return t}class l8{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){W("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{W("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){ki(n)?W("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Rs(n)}await this.X(6e4)})}}class u8{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return L.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return W("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(W("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=jT(s);$g(o,r)>0&&(r=o)}),new yn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}An.oe=-1;function nd(t){return t==null}function Nl(t){return t===0&&1/t==-1/0}function c8(t){return typeof t=="number"&&Number.isInteger(t)&&!Nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=t_(e)),e=h8(t.get(n),e);return t_(e)}function h8(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function t_(t){return t+""}function Kn(t){const e=t.length;if(se(e>=2),e===2)return se(t.charAt(0)===""&&t.charAt(1)===""),Ie.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&ie(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:ie()}s=o+2}return new Ie(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e){return[t,qt(e)]}function qT(t,e,n){return[t,qt(e),n]}const d8={},f8=["prefixPath","collectionGroup","readTime","documentId"],p8=["prefixPath","collectionGroup","documentId"],m8=["collectionGroup","readTime","prefixPath","documentId"],g8=["canonicalId","targetId"],y8=["targetId","path"],v8=["path","targetId"],_8=["collectionId","parent"],w8=["indexId","uid"],E8=["uid","sequenceNumber"],I8=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],T8=["indexId","uid","orderedDocumentKey"],x8=["userId","collectionPath","documentId"],S8=["userId","collectionPath","largestBatchId"],A8=["userId","collectionGroup","largestBatchId"],WT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],R8=[...WT,"documentOverlays"],HT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],GT=HT,Wg=[...GT,"indexConfiguration","indexState","indexEntries"],k8=Wg,P8=[...Wg,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm extends BT{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function dt(t,e){const n=le(t);return di.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function KT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $u(this.root,e,this.comparator,!1)}getReverseIterator(){return new $u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $u(this.root,e,this.comparator,!0)}}class $u{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Et.RED,this.left=i??Et.EMPTY,this.right=s??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new i_(this.data.getIterator())}getIteratorFrom(e){return new i_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ce(this.comparator);return n.data=e,n}}class i_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function zs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new en([])}unionWith(e){let n=new Ce(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new QT("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const C8=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(se(!!t),typeof t=="string"){let e=0;const n=C8.exec(t);if(se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hg(t){const e=t.mapValue.fields.__previous_value__;return rd(e)?Hg(e):e}function Vl(t){const e=Sr(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b8{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class fs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ec={nullValue:"NULL_VALUE"};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rd(t)?4:YT(t)?9007199254740991:id(t)?10:11:ie()}function nr(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vl(t).isEqual(Vl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Sr(i.timestampValue),a=Sr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _i(i.bytesValue).isEqual(_i(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?Nl(o)===Nl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Mo(t.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(r_(o)!==r_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!nr(o[u],a[u])))return!1;return!0}(t,e);default:return ie()}}function Ol(t,e){return(t.values||[]).find(n=>nr(n,e))!==void 0}function wi(t,e){if(t===e)return 0;const n=ps(t),r=ps(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return s_(t.timestampValue,e.timestampValue);case 4:return s_(Vl(t),Vl(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=_i(s),u=_i(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ue(a[c],u[c]);if(d!==0)return d}return ue(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Me(s.latitude),Me(o.latitude));return a!==0?a:ue(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return o_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},m=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=m.value)===null||u===void 0?void 0:u.arrayValue,R=ue(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return R!==0?R:o_(_,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Yr.mapValue&&o===Yr.mapValue)return 0;if(s===Yr.mapValue)return 1;if(o===Yr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=ue(u[f],d[f]);if(m!==0)return m;const _=wi(a[u[f]],c[d[f]]);if(_!==0)return _}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ie()}}function s_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Sr(t),r=Sr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function o_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=wi(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Fo(t){return im(t)}function im(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _i(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=im(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${im(n.fields[o])}`;return i+"}"}(t.mapValue):ie()}function ms(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sm(t){return!!t&&"integerValue"in t}function Ll(t){return!!t&&"arrayValue"in t}function a_(t){return!!t&&"nullValue"in t}function l_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ic(t){return!!t&&"mapValue"in t}function id(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function il(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=il(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=il(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const XT={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function D8(t){return"nullValue"in t?Ec:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ms(fs.empty(),X.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?id(t)?XT:{mapValue:{}}:ie()}function N8(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ms(fs.empty(),X.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?XT:"mapValue"in t?id(t)?{mapValue:{}}:Yr:ie()}function u_(t,e){const n=wi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function c_(t,e){const n=wi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ic(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=il(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=il(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ks(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new bt(il(this.value))}}function JT(t){const e=[];return ks(t.fields,(n,r)=>{const i=new Be([n]);if(Ic(r)){const s=JT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ye(e,0,oe.min(),oe.min(),oe.min(),bt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ye(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new Ye(e,2,n,oe.min(),oe.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,oe.min(),oe.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.position=e,this.inclusive=n}}function h_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=wi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function d_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function V8(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{}class me extends ZT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new O8(e,n,r):n==="array-contains"?new F8(e,r):n==="in"?new s4(e,r):n==="not-in"?new U8(e,r):n==="array-contains-any"?new j8(e,r):new me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new L8(e,r):new M8(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wi(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Re extends ZT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Re(e,n)}matches(e){return Uo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Uo(t){return t.op==="and"}function om(t){return t.op==="or"}function Gg(t){return e4(t)&&Uo(t)}function e4(t){for(const e of t.filters)if(e instanceof Re)return!1;return!0}function am(t){if(t instanceof me)return t.field.canonicalString()+t.op.toString()+Fo(t.value);if(Gg(t))return t.filters.map(e=>am(e)).join(",");{const e=t.filters.map(n=>am(n)).join(",");return`${t.op}(${e})`}}function t4(t,e){return t instanceof me?function(r,i){return i instanceof me&&r.op===i.op&&r.field.isEqual(i.field)&&nr(r.value,i.value)}(t,e):t instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&t4(o,i.filters[a]),!0):!1}(t,e):void ie()}function n4(t,e){const n=t.filters.concat(e);return Re.create(n,t.op)}function r4(t){return t instanceof me?function(n){return`${n.field.canonicalString()} ${n.op} ${Fo(n.value)}`}(t):t instanceof Re?function(n){return n.op.toString()+" {"+n.getFilters().map(r4).join(" ,")+"}"}(t):"Filter"}class O8 extends me{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class L8 extends me{constructor(e,n){super(e,"in",n),this.keys=i4("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class M8 extends me{constructor(e,n){super(e,"not-in",n),this.keys=i4("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function i4(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class F8 extends me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ll(n)&&Ol(n.arrayValue,this.value)}}class s4 extends me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ol(this.value.arrayValue,n)}}class U8 extends me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ol(this.value.arrayValue,n)}}class j8 extends me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ll(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ol(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z8{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function lm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new z8(t,e,n,r,i,s,o)}function gs(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>am(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),nd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fo(r)).join(",")),e.ue=n}return e.ue}function Xl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!V8(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!t4(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!d_(t.startAt,e.startAt)&&d_(t.endAt,e.endAt)}function fh(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ph(t,e){return t.filters.filter(n=>n instanceof me&&n.field.isEqual(e))}function f_(t,e,n){let r=Ec,i=!0;for(const s of ph(t,e)){let o=Ec,a=!0;switch(s.op){case"<":case"<=":o=D8(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ec}u_({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];u_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function p_(t,e,n){let r=Yr,i=!0;for(const s of ph(t,e)){let o=Yr,a=!0;switch(s.op){case">=":case">":o=N8(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Yr}c_({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];c_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function B8(t,e,n,r,i,s,o,a){return new Ps(t,e,n,r,i,s,o,a)}function Jl(t){return new Ps(t)}function m_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kg(t){return t.collectionGroup!==null}function wo(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ce(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ml(s,r))}),n.has(Be.keyField().canonicalString())||e.ce.push(new Ml(Be.keyField(),r))}return e.ce}function kn(t){const e=le(t);return e.le||(e.le=$8(e,wo(t))),e.le}function $8(t,e){if(t.limitType==="F")return lm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ml(i.field,s)});const n=t.endAt?new Ei(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ei(t.startAt.position,t.startAt.inclusive):null;return lm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function um(t,e){const n=t.filters.concat([e]);return new Ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function mh(t,e,n){return new Ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sd(t,e){return Xl(kn(t),kn(e))&&t.limitType===e.limitType}function o4(t){return`${gs(kn(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>r4(i)).join(", ")}]`),nd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Fo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Fo(i)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function Zl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=h_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,wo(r),i)||r.endAt&&!function(o,a,u){const c=h_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,wo(r),i))}(t,e)}function q8(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function a4(t){return(e,n)=>{let r=!1;for(const i of wo(t)){const s=W8(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function W8(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?wi(u,c):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return KT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H8=new Ue(X.comparator);function dn(){return H8}const l4=new Ue(X.comparator);function za(...t){let e=l4;for(const n of t)e=e.insert(n.key,n);return e}function u4(t){let e=l4;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qn(){return sl()}function c4(){return sl()}function sl(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const G8=new Ue(X.comparator),K8=new Ce(X.comparator);function de(...t){let e=K8;for(const n of t)e=e.add(n);return e}const Q8=new Ce(ue);function Y8(){return Q8}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(e)?"-0":e}}function h4(t){return{integerValue:""+t}}function d4(t,e){return c8(e)?h4(e):Qg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this._=void 0}}function X8(t,e,n){return t instanceof jo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rd(s)&&(s=Hg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ys?p4(t,e):t instanceof vs?m4(t,e):function(i,s){const o=f4(i,s),a=g_(o)+g_(i.Pe);return sm(o)&&sm(i.Pe)?h4(a):Qg(i.serializer,a)}(t,e)}function J8(t,e,n){return t instanceof ys?p4(t,e):t instanceof vs?m4(t,e):n}function f4(t,e){return t instanceof zo?function(r){return sm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class jo extends od{}class ys extends od{constructor(e){super(),this.elements=e}}function p4(t,e){const n=g4(e);for(const r of t.elements)n.some(i=>nr(i,r))||n.push(r);return{arrayValue:{values:n}}}class vs extends od{constructor(e){super(),this.elements=e}}function m4(t,e){let n=g4(e);for(const r of t.elements)n=n.filter(i=>!nr(i,r));return{arrayValue:{values:n}}}class zo extends od{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function g_(t){return Me(t.integerValue||t.doubleValue)}function g4(t){return Ll(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.field=e,this.transform=n}}function Z8(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ys&&i instanceof ys||r instanceof vs&&i instanceof vs?Mo(r.elements,i.elements,nr):r instanceof zo&&i instanceof zo?nr(r.Pe,i.Pe):r instanceof jo&&i instanceof jo}(t.transform,e.transform)}class e9{constructor(e,n){this.version=e,this.transformResults=n}}class Nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ad{}function y4(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ld(t.key,Nt.none()):new ta(t.key,t.data,Nt.none());{const n=t.data,r=bt.empty();let i=new Ce(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Rr(t.key,r,new en(i.toArray()),Nt.none())}}function t9(t,e,n){t instanceof ta?function(i,s,o){const a=i.value.clone(),u=v_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(i,s,o){if(!Tc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=v_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(v4(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ol(t,e,n,r){return t instanceof ta?function(s,o,a,u){if(!Tc(s.precondition,o))return a;const c=s.value.clone(),d=__(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(s,o,a,u){if(!Tc(s.precondition,o))return a;const c=__(s.fieldTransforms,u,o),d=o.data;return d.setAll(v4(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Tc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function n9(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=f4(r.transform,i||null);s!=null&&(n===null&&(n=bt.empty()),n.set(r.field,s))}return n||null}function y_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Mo(r,i,(s,o)=>Z8(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends ad{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rr extends ad{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function v4(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function v_(t,e,n){const r=new Map;se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,J8(o,a,n[i]))}return r}function __(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,X8(s,o,e))}return r}class ld extends ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _4 extends ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&t9(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ol(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ol(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=c4();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=y4(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Mo(this.mutations,e.mutations,(n,r)=>y_(n,r))&&Mo(this.baseMutations,e.baseMutations,(n,r)=>y_(n,r))}}class Xg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length);let i=function(){return G8}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r9{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,ge;function i9(t){switch(t){default:return ie();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function w4(t){if(t===void 0)return Bt("GRPC error has no .code"),j.UNKNOWN;switch(t){case tt.OK:return j.OK;case tt.CANCELLED:return j.CANCELLED;case tt.UNKNOWN:return j.UNKNOWN;case tt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case tt.INTERNAL:return j.INTERNAL;case tt.UNAVAILABLE:return j.UNAVAILABLE;case tt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case tt.NOT_FOUND:return j.NOT_FOUND;case tt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case tt.ABORTED:return j.ABORTED;case tt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case tt.DATA_LOSS:return j.DATA_LOSS;default:return ie()}}(ge=tt||(tt={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s9(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o9=new es([4294967295,4294967295],0);function w_(t){const e=s9().encode(t),n=new bT;return n.update(e),new Uint8Array(n.digest())}function E_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new es([n,r],0),new es([i,s],0)]}class Zg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ba(`Invalid padding: ${n}`);if(r<0)throw new Ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ba(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=es.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(es.fromNumber(r)));return i.compare(o9)===1&&(i=new es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=w_(e),[r,i]=E_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=w_(e),[r,i]=E_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ud(oe.min(),i,new Ue(ue),dn(),de())}}class tu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tu(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class E4{constructor(e,n){this.targetId=e,this.me=n}}class I4{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class I_{constructor(){this.fe=0,this.ge=x_(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=de(),n=de(),r=de();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new tu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=x_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class a9{constructor(e){this.Le=e,this.Be=new Map,this.ke=dn(),this.qe=T_(),this.Qe=new Ue(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(fh(s))if(r===0){const o=new X(s.path);this.Ue(n,o,Ye.newNoDocument(o,oe.min()))}else se(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=_i(r).toUint8Array()}catch(u){if(u instanceof QT)return ds("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Zg(o,i,s)}catch(u){return ds(u instanceof Ba?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&fh(a.target)){const u=new X(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ye.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=de();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ud(e,n,this.Qe,this.ke,r);return this.ke=dn(),this.qe=T_(),this.Qe=new Ue(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new I_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ce(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new I_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function T_(){return new Ue(X.comparator)}function x_(){return new Ue(X.comparator)}const l9={asc:"ASCENDING",desc:"DESCENDING"},u9={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c9={and:"AND",or:"OR"};class h9{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cm(t,e){return t.useProto3Json||nd(e)?e:{value:e}}function Bo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T4(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function d9(t,e){return Bo(t,e.toTimestamp())}function Wt(t){return se(!!t),oe.fromTimestamp(function(n){const r=Sr(n);return new qe(r.seconds,r.nanos)}(t))}function e0(t,e){return hm(t,e).canonicalString()}function hm(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function x4(t){const e=Ie.fromString(t);return se(N4(e)),e}function gh(t,e){return e0(t.databaseId,e.path)}function ts(t,e){const n=x4(e);if(n.get(1)!==t.databaseId.projectId)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(R4(n))}function S4(t,e){return e0(t.databaseId,e)}function A4(t){const e=x4(t);return e.length===4?Ie.emptyPath():R4(e)}function dm(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function R4(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function S_(t,e,n){return{name:gh(t,e),fields:n.value.mapValue.fields}}function f9(t,e,n){const r=ts(t,e.name),i=Wt(e.updateTime),s=e.createTime?Wt(e.createTime):oe.min(),o=new bt({mapValue:{fields:e.fields}}),a=Ye.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function p9(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(se(d===void 0||typeof d=="string"),at.fromBase64String(d||"")):(se(d===void 0||d instanceof Buffer||d instanceof Uint8Array),at.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?j.UNKNOWN:w4(c.code);return new K(d,c.message||"")}(o);n=new I4(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ts(t,r.document.name),s=Wt(r.document.updateTime),o=r.document.createTime?Wt(r.document.createTime):oe.min(),a=new bt({mapValue:{fields:r.document.fields}}),u=Ye.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new xc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ts(t,r.document),s=r.readTime?Wt(r.readTime):oe.min(),o=Ye.newNoDocument(i,s),a=r.removedTargetIds||[];n=new xc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ts(t,r.document),s=r.removedTargetIds||[];n=new xc([],s,i,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new r9(i,s),a=r.targetId;n=new E4(a,o)}}return n}function yh(t,e){let n;if(e instanceof ta)n={update:S_(t,e.key,e.value)};else if(e instanceof ld)n={delete:gh(t,e.key)};else if(e instanceof Rr)n={update:S_(t,e.key,e.data),updateMask:w9(e.fieldMask)};else{if(!(e instanceof _4))return ie();n={verify:gh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ys)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:d9(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function fm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Nt.updateTime(Wt(s.updateTime)):s.exists!==void 0?Nt.exists(s.exists):Nt.none()}(e.currentDocument):Nt.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)se(a.setToServerValue==="REQUEST_TIME"),u=new jo;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new ys(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new vs(d)}else"increment"in a?u=new zo(o,a.increment):ie();const c=Be.fromServerFormat(a.fieldPath);return new eu(c,u)}(t,i)):[];if(e.update){e.update.name;const i=ts(t,e.update.name),s=new bt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new en(c.map(d=>Be.fromServerFormat(d)))}(e.updateMask);return new Rr(i,s,o,n,r)}return new ta(i,s,n,r)}if(e.delete){const i=ts(t,e.delete);return new ld(i,n)}if(e.verify){const i=ts(t,e.verify);return new _4(i,n)}return ie()}function m9(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Wt(i.updateTime):Wt(s);return o.isEqual(oe.min())&&(o=Wt(s)),new e9(o,i.transformResults||[])}(n,e))):[]}function k4(t,e){return{documents:[S4(t,e.path)]}}function P4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=S4(t,i);const s=function(c){if(c.length!==0)return D4(Re.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ks(m.field),direction:y9(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=cm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function C4(t){let e=A4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=b4(f);return m instanceof Re&&Gg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Ml(Qs(T.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,nd(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,_=f.values||[];return new Ei(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new Ei(_,m)}(n.endAt)),B8(e,i,o,s,a,"F",u,c)}function g9(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function b4(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qs(n.unaryFilter.field);return me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qs(n.unaryFilter.field);return me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return me.create(Qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Re.create(n.compositeFilter.filters.map(r=>b4(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function y9(t){return l9[t]}function v9(t){return u9[t]}function _9(t){return c9[t]}function Ks(t){return{fieldPath:t.canonicalString()}}function Qs(t){return Be.fromServerFormat(t.fieldPath)}function D4(t){return t instanceof me?function(n){if(n.op==="=="){if(l_(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NAN"}};if(a_(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(l_(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NAN"}};if(a_(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(n.field),op:v9(n.op),value:n.value}}}(t):t instanceof Re?function(n){const r=n.getFilters().map(i=>D4(i));return r.length===1?r[0]:{compositeFilter:{op:_9(n.op),filters:r}}}(t):ie()}function w9(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function N4(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r,i,s=oe.min(),o=oe.min(),a=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(e){this.ct=e}}function E9(t,e){let n;if(e.document)n=f9(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=X.fromSegments(e.noDocument.path),i=ws(e.noDocument.readTime);n=Ye.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return ie();{const r=X.fromSegments(e.unknownDocument.path),i=ws(e.unknownDocument.version);n=Ye.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new qe(i[0],i[1]);return oe.fromTimestamp(s)}(e.readTime)),n}function A_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:vh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:gh(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Bo(s,o.version.toTimestamp()),createTime:Bo(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:_s(e.version)};else{if(!e.isUnknownDocument())return ie();r.unknownDocument={path:n.path.toArray(),version:_s(e.version)}}return r}function vh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function _s(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ws(t){const e=new qe(t.seconds,t.nanoseconds);return oe.fromTimestamp(e)}function zi(t,e){const n=(e.baseMutations||[]).map(s=>fm(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>fm(t.ct,s)),i=qe.fromMillis(e.localWriteTimeMs);return new Yg(e.batchId,i,n,r)}function $a(t){const e=ws(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ws(t.lastLimboFreeSnapshotVersion):oe.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return se(s.documents.length===1),kn(Jl(A4(s.documents[0])))}(t.query):function(s){return kn(C4(s))}(t.query),new yr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,at.fromBase64String(t.resumeToken))}function O4(t,e){const n=_s(e.snapshotVersion),r=_s(e.lastLimboFreeSnapshotVersion);let i;i=fh(e.target)?k4(t.ct,e.target):P4(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:gs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function L4(t){const e=C4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mh(e,e.limit,"L"):e}function Df(t,e){return new Jg(e.largestBatchId,fm(t.ct,e.overlayMutation))}function R_(t,e){const n=e.path.lastSegment();return[t,qt(e.path.popLast()),n]}function k_(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:_s(r.readTime),documentKey:qt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I9{getBundleMetadata(e,n){return P_(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ws(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return P_(e).put(function(i){return{bundleId:i.id,createTime:_s(Wt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return C_(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:L4(s.bundledQuery),readTime:ws(s.readTime)}}(r)})}saveNamedQuery(e,n){return C_(e).put(function(i){return{name:i.name,readTime:_s(Wt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function P_(t){return dt(t,"bundles")}function C_(t){return dt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new cd(e,r)}getOverlay(e,n){return Sa(e).get(R_(this.userId,n)).next(r=>r?Df(this.serializer,r):null)}getOverlays(e,n){const r=Qn();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Jg(n,o);i.push(this.ht(e,a))}),L.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(qt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Sa(e).j("collectionPathOverlayIndex",a))}),L.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Qn(),s=qt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Sa(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Df(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Qn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Sa(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,d)=>{const f=Df(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return Sa(e).put(function(i,s,o){const[a,u,c]=R_(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:yh(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Sa(t){return dt(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T9{Pt(e){return dt(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?at.fromUint8Array(r):at.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Me(e.integerValue));else if("doubleValue"in e){const r=Me(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),Nl(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Sr(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(_i(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?YT(e)?this.dt(n,Number.MAX_SAFE_INTEGER):id(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):ie()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Me(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),X.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}Bi.vt=new Bi;function x9(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function b_(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=x9(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class S9{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=b_(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=b_(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class A9{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class R9{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Aa{constructor(){this.jt=new S9,this.Ht=new A9(this.jt),this.Jt=new R9(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new $i(this.indexId,this.documentKey,this.arrayValue,r)}}function Or(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=D_(t.arrayValue,e.arrayValue),n!==0?n:(n=D_(t.directionalValue,e.directionalValue),n!==0?n:X.comparator(t.documentKey,e.documentKey)))}function D_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.Xt=new Ce((n,r)=>Be.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(se(e.collectionGroup===this.collectionId),this.nn)return!1;const n=nm(e);if(n!==void 0&&!this.sn(n))return!1;const r=Ui(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new Ce(Be.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new _c(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new _c(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new _c(r.field,r.dir==="asc"?0:1)));return new dh(dh.UNKNOWN_ID,this.collectionId,n,Dl.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M4(t){var e,n;if(se(t instanceof me||t instanceof Re),t instanceof me){if(t instanceof s4){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>me.create(t.field,"==",s)))||[];return Re.create(i,"or")}return t}const r=t.filters.map(i=>M4(i));return Re.create(r,t.op)}function k9(t){if(t.getFilters().length===0)return[];const e=gm(M4(t));return se(F4(e)),pm(e)||mm(e)?[e]:e.getFilters()}function pm(t){return t instanceof me}function mm(t){return t instanceof Re&&Gg(t)}function F4(t){return pm(t)||mm(t)||function(n){if(n instanceof Re&&om(n)){for(const r of n.getFilters())if(!pm(r)&&!mm(r))return!1;return!0}return!1}(t)}function gm(t){if(se(t instanceof me||t instanceof Re),t instanceof me)return t;if(t.filters.length===1)return gm(t.filters[0]);const e=t.filters.map(r=>gm(r));let n=Re.create(e,t.op);return n=_h(n),F4(n)?n:(se(n instanceof Re),se(Uo(n)),se(n.filters.length>1),n.filters.reduce((r,i)=>t0(r,i)))}function t0(t,e){let n;return se(t instanceof me||t instanceof Re),se(e instanceof me||e instanceof Re),n=t instanceof me?e instanceof me?function(i,s){return Re.create([i,s],"and")}(t,e):V_(t,e):e instanceof me?V_(e,t):function(i,s){if(se(i.filters.length>0&&s.filters.length>0),Uo(i)&&Uo(s))return n4(i,s.getFilters());const o=om(i)?i:s,a=om(i)?s:i,u=o.filters.map(c=>t0(c,a));return Re.create(u,"or")}(t,e),_h(n)}function V_(t,e){if(Uo(e))return n4(e,t.getFilters());{const n=e.filters.map(r=>t0(t,r));return Re.create(n,"or")}}function _h(t){if(se(t instanceof me||t instanceof Re),t instanceof me)return t;const e=t.getFilters();if(e.length===1)return _h(e[0]);if(e4(t))return t;const n=e.map(i=>_h(i)),r=[];return n.forEach(i=>{i instanceof me?r.push(i):i instanceof Re&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Re.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P9{constructor(){this.un=new n0}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(yn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(yn.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class n0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ce(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ce(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Uint8Array(0);class C9{constructor(e,n){this.databaseId=n,this.cn=new n0,this.ln=new Pi(r=>gs(r),(r,i)=>Xl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:qt(i)};return O_(e).put(s)}return L.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[UT(n),""],!1,!0);return O_(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Kn(o.parent))}return r})}addFieldIndex(e,n){const r=Ra(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=$s(e);return s.next(a=>{o.put(k_(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ra(e),i=$s(e),s=Bs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ra(e),r=Bs(e),i=$s(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return L.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new N_(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Bs(e);let i=!0;const s=new Map;return L.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=de();const a=[];return L.forEach(s,(u,c)=>{W("IndexedDbIndexManager",`Using index ${function(S){return`id=${S.indexId}|cg=${S.collectionGroup}|f=${S.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`}(u)} to execute ${gs(n)}`);const d=function(S,D){const M=nm(D);if(M===void 0)return null;for(const V of ph(S,M.fieldPath))switch(V.op){case"array-contains-any":return V.value.arrayValue.values||[];case"array-contains":return[V.value]}return null}(c,u),f=function(S,D){const M=new Map;for(const V of Ui(D))for(const y of ph(S,V.fieldPath))switch(y.op){case"==":case"in":M.set(V.fieldPath.canonicalString(),y.value);break;case"not-in":case"!=":return M.set(V.fieldPath.canonicalString(),y.value),Array.from(M.values())}return null}(c,u),m=function(S,D){const M=[];let V=!0;for(const y of Ui(D)){const g=y.kind===0?f_(S,y.fieldPath,S.startAt):p_(S,y.fieldPath,S.startAt);M.push(g.value),V&&(V=g.inclusive)}return new Ei(M,V)}(c,u),_=function(S,D){const M=[];let V=!0;for(const y of Ui(D)){const g=y.kind===0?p_(S,y.fieldPath,S.endAt):f_(S,y.fieldPath,S.endAt);M.push(g.value),V&&(V=g.inclusive)}return new Ei(M,V)}(c,u),T=this.In(u,c,m),R=this.In(u,c,_),P=this.Tn(u,c,f),w=this.En(u.indexId,d,T,m.inclusive,R,_.inclusive,P);return L.forEach(w,E=>r.G(E,n.limit).next(S=>{S.forEach(D=>{const M=X.fromSegments(D.documentKey);o.has(M)||(o=o.add(M),a.push(M))})}))}).next(()=>a)}return L.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=k9(Re.create(e.filters,"and")).map(r=>lm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),d=[];for(let f=0;f<u;++f){const m=n?this.dn(n[f/c]):qu,_=this.An(e,m,r[f%c],i),T=this.Rn(e,m,s[f%c],o),R=a.map(P=>this.An(e,m,P,!0));d.push(...this.createRange(_,T,R))}return d}An(e,n,r,i){const s=new $i(e,X.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new $i(e,X.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new N_(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return L.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new Ce(Be.comparator),d=!1;for(const f of u.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new Aa;for(const i of Ui(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Bi.vt.It(s,o)}return r.zt()}dn(e){const n=new Aa;return Bi.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new Aa;return Bi.vt.It(ms(this.databaseId,n),r.Yt(function(s){const o=Ui(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new Aa);let s=0;for(const o of Ui(e)){const a=r[s++];for(const u of i)if(this.fn(n,o.fieldPath)&&Ll(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);Bi.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Aa;u.seed(a.zt()),Bi.vt.It(o,u.Yt(n.kind)),s.push(u)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof me&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ra(e),i=$s(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return L.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(d,f){const m=f?new Dl(f.sequenceNumber,new yn(ws(f.readTime),new X(Kn(f.documentKey)),f.largestBatchId)):Dl.empty(),_=d.fields.map(([T,R])=>new _c(Be.fromServerFormat(T),R));return new dh(d.indexId,d.collectionGroup,_,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ue(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ra(e),s=$s(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>L.forEach(a,u=>s.put(k_(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return L.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?L.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),L.forEach(a,u=>this.wn(e,i,u).next(c=>{const d=this.Sn(s,u);return c.isEqual(d)?L.resolve():this.bn(e,s,u,c,d)}))))})}Dn(e,n,r,i){return Bs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return Bs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Bs(e);let s=new Ce(Or);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new $i(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new Ce(Or);const i=this.Vn(n,e);if(i==null)return r;const s=nm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ll(o))for(const a of o.arrayValue.values||[])r=r.add(new $i(n.indexId,e.key,this.dn(a),i))}else r=r.add(new $i(n.indexId,e.key,qu,i));return r}bn(e,n,r,i,s){W("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,d,f,m){const _=u.getIterator(),T=c.getIterator();let R=zs(_),P=zs(T);for(;R||P;){let w=!1,E=!1;if(R&&P){const S=d(R,P);S<0?E=!0:S>0&&(w=!0)}else R!=null?E=!0:w=!0;w?(f(P),P=zs(T)):E?(m(R),R=zs(_)):(R=zs(_),P=zs(T))}}(i,s,Or,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),L.waitFor(o)}yn(e){let n=1;return $s(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Or(o,a)).filter((o,a,u)=>!a||Or(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Or(o,e),u=Or(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,qu,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,qu,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,n){return Or(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(L_)}getMinOffset(e,n){return L.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||ie())).next(L_)}}function O_(t){return dt(t,"collectionParents")}function Bs(t){return dt(t,"indexEntries")}function Ra(t){return dt(t,"indexConfiguration")}function $s(t){return dt(t,"indexState")}function L_(t){se(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;$g(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new yn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U4(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(u.next(()=>{se(a===1)}));const c=[];for(const d of n.mutations){const f=qT(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return L.waitFor(s).next(()=>c)}function wh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw ie();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);class hd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){se(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new hd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Lr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ys(e),o=Lr(e);return o.add({}).next(a=>{se(typeof a=="number");const u=new Yg(a,n,r,i),c=function(_,T,R){const P=R.baseMutations.map(E=>yh(_.ct,E)),w=R.mutations.map(E=>yh(_.ct,E));return{userId:T,batchId:R.batchId,localWriteTimeMs:R.localWriteTime.toMillis(),baseMutations:P,mutations:w}}(this.serializer,this.userId,u),d=[];let f=new Ce((m,_)=>ue(m.canonicalString(),_.canonicalString()));for(const m of i){const _=qT(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(_,d8))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),L.waitFor(d).next(()=>u)})}lookupMutationBatch(e,n){return Lr(e).get(n).next(r=>r?(se(r.userId===this.userId),zi(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?L.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Lr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(se(a.batchId>=r),s=zi(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Lr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Lr(e).U("userMutationsIndex",n).next(r=>r.map(i=>zi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=wc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ys(e).J({range:i},(o,a,u)=>{const[c,d,f]=o,m=Kn(d);if(c===this.userId&&n.path.isEqual(m))return Lr(e).get(f).next(_=>{if(!_)throw ie();se(_.userId===this.userId),s.push(zi(this.serializer,_))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(ue);const i=[];return n.forEach(s=>{const o=wc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Ys(e).J({range:a},(c,d,f)=>{const[m,_,T]=c,R=Kn(_);m===this.userId&&s.path.isEqual(R)?r=r.add(T):f.done()});i.push(u)}),L.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=wc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ce(ue);return Ys(e).J({range:o},(u,c,d)=>{const[f,m,_]=u,T=Kn(m);f===this.userId&&r.isPrefixOf(T)?T.length===i&&(a=a.add(_)):d.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Lr(e).get(s).next(o=>{if(o===null)throw ie();se(o.userId===this.userId),r.push(zi(this.serializer,o))}))}),L.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return U4(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),L.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return L.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ys(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Kn(s[1]);i.push(u)}else a.done()}).next(()=>{se(i.length===0)})})}containsKey(e,n){return j4(e,this.userId,n)}Nn(e){return z4(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function j4(t,e,n){const r=wc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ys(t).J({range:s,H:!0},(a,u,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Lr(t){return dt(t,"mutations")}function Ys(t){return dt(t,"documentMutations")}function z4(t){return dt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Es(0)}static kn(){return new Es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b9{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Es(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>oe.fromTimestamp(new qe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>qs(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(se(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return qs(e).J((o,a)=>{const u=$a(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>L.waitFor(s)).next(()=>i)}forEachTarget(e,n){return qs(e).J((r,i)=>{const s=$a(i);n(s)})}qn(e){return F_(e).get("targetGlobalKey").next(n=>(se(n!==null),n))}Qn(e,n){return F_(e).put("targetGlobalKey",n)}Kn(e,n){return qs(e).put(O4(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=gs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return qs(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=$a(a);Xl(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Wr(e);return n.forEach(o=>{const a=qt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),L.waitFor(i)}removeMatchingKeys(e,n,r){const i=Wr(e);return L.forEach(n,s=>{const o=qt(s.path);return L.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Wr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Wr(e);let s=de();return i.J({range:r,H:!0},(o,a,u)=>{const c=Kn(o[1]),d=new X(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=qt(n.path),i=IDBKeyRange.bound([r],[UT(r)],!1,!0);let s=0;return Wr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return qs(e).get(n).next(r=>r?$a(r):null)}}function qs(t){return dt(t,"targets")}function F_(t){return dt(t,"targetGlobal")}function Wr(t){return dt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_([t,e],[n,r]){const i=ue(t,n);return i===0?ue(e,r):i}class D9{constructor(e){this.Un=e,this.buffer=new Ce(U_),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();U_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class N9{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){W("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ki(n)?W("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Rs(n)}await this.Hn(3e5)})}}class V9{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(An.oe);const r=new D9(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(M_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),M_):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Hs()<=pe.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function O9(t,e){return new V9(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L9{constructor(e,n){this.db=e,this.garbageCollector=O9(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return Wu(e,r)}removeReference(e,n,r){return Wu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Wu(e,n)}nr(e,n){return function(i,s){let o=!1;return z4(i).Y(a=>j4(i,a,s).next(u=>(u&&(o=!0),L.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,oe.min()),Wr(e).delete(function(f){return[0,qt(f.path)]}(o))))});i.push(u)}}).next(()=>L.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Wu(e,n)}tr(e,n){const r=Wr(e);let i,s=An.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==An.oe&&n(new X(Kn(i)),s),s=c,i=u):s=An.oe}).next(()=>{s!==An.oe&&n(new X(Kn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Wu(t,e){return Wr(t).put(function(r,i){return{targetId:0,path:qt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M9{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Vi(e).put(r)}removeEntry(e,n,r){return Vi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],vh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Ye.newInvalidDocument(n);return Vi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ka(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Ye.newInvalidDocument(n)};return Vi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ka(n))},(i,s)=>{r={document:this.ir(n,s),size:wh(s)}}).next(()=>r)}getEntries(e,n){let r=dn();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=dn(),i=new Ue(X.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,wh(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return L.resolve();let i=new Ce(B_);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(ka(i.first()),ka(i.last())),o=i.getIterator();let a=o.getNext();return Vi(e).J({index:"documentKeyIndex",range:s},(u,c,d)=>{const f=X.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&B_(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(ka(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),vh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Vi(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=dn();for(const f of c){const m=this.ir(X.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Zl(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=dn();const o=z_(n,r),a=z_(n,yn.max());return Vi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,d)=>{const f=this.ir(X.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new F9(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return j_(e).get("remoteDocumentGlobalKey").next(n=>(se(!!n),n))}rr(e,n){return j_(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=E9(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(oe.min())))return r}return Ye.newInvalidDocument(e)}}function $4(t){return new M9(t)}class F9 extends B4{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new Pi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ce((s,o)=>ue(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=A_(this.cr.serializer,o);i=i.add(s.path.popLast());const c=wh(u);r+=c-a.size,n.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=A_(this.cr.serializer,o.convertToNoDocument(oe.min()));n.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),L.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function j_(t){return dt(t,"remoteDocumentGlobal")}function Vi(t){return dt(t,"remoteDocumentsV14")}function ka(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function z_(t,e){const n=e.documentKey.path.toArray();return[t,vh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function B_(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ue(n[s],r[s]),i)return i;return i=ue(n.length,r.length),i||(i=ue(n[n.length-2],r[r.length-2]),i||ue(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U9{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ol(r.mutation,i,en.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=Qn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=za();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=dn();const o=sl(),a=function(){return sl()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Rr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ol(d.mutation,c,d.mutation.getFieldMask(),qe.now())):o.set(c.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new U9(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=sl();let i=new Ue((o,a)=>o-a),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||en.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||de()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=c4();d.forEach(m=>{if(!s.has(m)){const _=y4(n.get(m),r.get(m));_!==null&&f.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Kg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Qn());let a=-1,u=s;return o.next(c=>L.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,de())).next(d=>({batchId:a,changes:u4(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=za();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=za();return this.indexManager.getCollectionParents(e,s).next(a=>L.forEach(a,u=>{const c=function(f,m){return new Ps(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ye.newInvalidDocument(d)))});let a=za();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ol(d.mutation,c,en.empty(),qe.now()),Zl(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j9{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Wt(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:L4(i.bundledQuery),readTime:Wt(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z9{constructor(){this.overlays=new Ue(X.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qn();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Qn(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ue((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Qn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Qn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return L.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jg(n,r));let s=this.Ir.get(n);s===void 0&&(s=de(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B9{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.Tr=new Ce(ft.Er),this.dr=new Ce(ft.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ft(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Ie([])),r=new ft(n,e),i=new ft(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Ie([])),r=new ft(n,e),i=new ft(n,e+1);let s=de();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ft(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $9{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ce(ft.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Yg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new ft(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),i=new ft(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(ue);return n.forEach(i=>{const s=new ft(i,0),o=new ft(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new ft(new X(s),0);let a=new Ce(ue);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),L.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new ft(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ft(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q9{constructor(e){this.Mr=e,this.docs=function(){return new Ue(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ye.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=dn();const o=n.path,a=new X(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||$g(jT(d),r)<=0||(i.has(d.key)||Zl(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new W9(this)}getSize(e){return L.resolve(this.size)}}class W9 extends B4{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H9{constructor(e){this.persistence=e,this.Nr=new Pi(n=>gs(n),Xl),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new r0,this.targetCount=0,this.kr=Es.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e,n){this.qr={},this.overlays={},this.Qr=new An(0),this.Kr=!1,this.Kr=!0,this.$r=new B9,this.referenceDelegate=e(this),this.Ur=new H9(this),this.indexManager=new P9,this.remoteDocumentCache=function(i){return new q9(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new V4(n),this.Gr=new j9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new z9,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $9(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new G9(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class G9 extends BT{constructor(e){super(),this.currentSequenceNumber=e}}class dd{constructor(e){this.persistence=e,this.Jr=new r0,this.Yr=null}static Zr(e){return new dd(e)}get Xr(){if(this.Yr)return this.Yr;throw ie()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K9{constructor(e){this.serializer=e}O(e,n,r,i){const s=new td("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",n_,{unique:!0}),u.createObjectStore("documentMutations")}(e),$_(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=L.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),$_(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:oe.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",n_,{unique:!0});const f=c.store("mutations"),m=d.map(_=>f.put(_));return L.waitFor(m)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:x8});c.createIndex("collectionPathOverlayIndex",S8,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",A8,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:f8});c.createIndex("documentKeyIndex",p8),c.createIndex("collectionGroupIndex",m8)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:w8}).createIndex("sequenceNumberIndex",E8,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:I8}).createIndex("documentKeyIndex",T8,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=wh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>L.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>L.forEach(a,u=>{se(u.userId===s.userId);const c=zi(this.serializer,u);return U4(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new Ie(o),c=function(f){return[0,qt(f)]}(u);s.push(n.get(c).next(d=>d?L.resolve():(f=>n.put({targetId:0,path:qt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>L.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:_8});const r=n.store("collectionParents"),i=new n0,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:qt(u)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new Ie(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,u],c)=>{const d=Kn(a);return s(d.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=$a(i),o=O4(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(f){return f.document?new X(Ie.fromString(f.document.name).popFirst(5)):f.noDocument?X.fromSegments(f.noDocument.path):f.unknownDocument?X.fromSegments(f.unknownDocument.path):ie()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>L.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=$4(this.serializer),s=new W4(dd.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let d=(c=a.get(u.userId))!==null&&c!==void 0?c:de();zi(this.serializer,u).keys().forEach(f=>d=d.add(f)),a.set(u.userId,d)}),L.forEach(a,(u,c)=>{const d=new wt(c),f=cd.lt(this.serializer,d),m=s.getIndexManager(d),_=hd.lt(d,this.serializer,m,s.referenceDelegate);return new q4(i,_,f,m).recalculateAndSaveOverlaysForDocumentKeys(new rm(n,An.oe),u).next()})})}}function $_(t){t.createObjectStore("targetDocuments",{keyPath:y8}).createIndex("documentTargetsIndex",v8,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",g8,{unique:!0}),t.createObjectStore("targetGlobal")}const Nf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class i0{constructor(e,n,r,i,s,o,a,u,c,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=d,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!i0.D())throw new K(j.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new L9(this,i),this.Ai=n+"main",this.serializer=new V4(u),this.Ri=new di(this.Ai,this.hi,new K9(this.serializer)),this.$r=new T9,this.Ur=new b9(this.referenceDelegate,this.serializer),this.remoteDocumentCache=$4(this.serializer),this.Gr=new I9,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&Bt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new K(j.FAILED_PRECONDITION,Nf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new An(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Hu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(ki(e))return W("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return W("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Pa(e).get("owner").next(n=>L.resolve(this.vi(n)))}Ci(e){return Hu(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=dt(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return L.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?L.resolve(!0):Pa(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new K(j.FAILED_PRECONDITION,Nf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hu(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&W("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new rm(e,An.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Hu(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return hd.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new C9(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return cd.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===17?P8:u===16?k8:u===15?Wg:u===14?GT:u===13?HT:u===12?R8:u===11?WT:void ie()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new rm(a,this.Qr?this.Qr.next():An.oe),n==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw Bt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new K(j.FAILED_PRECONDITION,zT);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Pa(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new K(j.FAILED_PRECONDITION,Nf)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Pa(e).put("owner",n)}static D(){return di.D()}bi(e){const n=Pa(e);return n.get("owner").next(r=>this.vi(r)?(W("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):L.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Bt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;LI()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return W("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Bt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Bt("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Pa(t){return dt(t,"owner")}function Hu(t){return dt(t,"clientMetadata")}function Q9(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new s0(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y9{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return LI()?8:$T(ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Y9;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Hs()<=pe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Hs()<=pe.DEBUG&&W("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Hs()<=pe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):L.resolve())}Yi(e,n){if(m_(n))return L.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=mh(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,mh(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return m_(n)||i.isEqual(oe.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Hs()<=pe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gs(n)),this.rs(e,o,n,s8(i,-1)).next(a=>a))})}ts(e,n){let r=new Ce(a4(e));return n.forEach((i,s)=>{Zl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Hs()<=pe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.Ji.getDocumentsMatchingQuery(e,n,yn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X9{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ue(ue),this._s=new Pi(s=>gs(s),Xl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new q4(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function G4(t,e,n,r){return new X9(t,e,n,r)}async function K4(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=de();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function J9(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let _=L.resolve();return m.forEach(T=>{_=_.next(()=>d.getEntry(u,T)).next(R=>{const P=c.docVersions.get(T);se(P!==null),R.version.compareTo(P)<0&&(f.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),d.addEntry(R)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=de();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Q4(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Z9(t,e){const n=le(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(at.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(f,_),function(R,P,w){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,_,d)&&a.push(n.Ur.updateTargetData(s,_))});let u=dn(),c=de();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(eD(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(oe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return L.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function eD(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=dn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function tD(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nD(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ym(t,e,n){const r=le(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ki(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function q_(t,e,n){const r=le(t);let i=oe.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=le(u),m=f._s.get(d);return m!==void 0?L.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:de())).next(a=>(rD(r,q8(e),a),{documents:a,Ts:s})))}function rD(t,e,n){let r=t.us.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class W_{constructor(){this.activeTargetIds=Y8()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Y4{constructor(){this.so=new W_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new W_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu=null;function Vf(){return Gu===null?Gu=function(){return 268435456+Math.round(2147483648*Math.random())}():Gu++,"0x"+Gu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class aD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Vf(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw ds("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ea}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=sD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Vf();return new Promise((o,a)=>{const u=new DT;u.setWithCredentials(!0),u.listenOnce(NT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case vc.NO_ERROR:const d=u.getResponseJson();W(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case vc.TIMEOUT:W(Pt,`RPC '${e}' ${s} timed out`),a(new K(j.DEADLINE_EXCEEDED,"Request time out"));break;case vc.HTTP_ERROR:const f=u.getStatus();if(W(Pt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const T=function(P){const w=P.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(w)>=0?w:j.UNKNOWN}(_.status);a(new K(T,_.message))}else a(new K(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new K(j.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{W(Pt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(Pt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Vf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LT(),a=OT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(Pt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,_=!1;const T=new oD({Io:P=>{_?W(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(W(Pt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),W(Pt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},To:()=>f.close()}),R=(P,w,E)=>{P.listen(w,S=>{try{E(S)}catch(D){setTimeout(()=>{throw D},0)}})};return R(f,ja.EventType.OPEN,()=>{_||(W(Pt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),R(f,ja.EventType.CLOSE,()=>{_||(_=!0,W(Pt,`RPC '${e}' stream ${i} transport closed`),T.So())}),R(f,ja.EventType.ERROR,P=>{_||(_=!0,ds(Pt,`RPC '${e}' stream ${i} transport errored:`,P),T.So(new K(j.UNAVAILABLE,"The operation could not be completed")))}),R(f,ja.EventType.MESSAGE,P=>{var w;if(!_){const E=P.data[0];se(!!E);const S=E,D=S.error||((w=S[0])===null||w===void 0?void 0:w.error);if(D){W(Pt,`RPC '${e}' stream ${i} received error:`,D);const M=D.status;let V=function(I){const x=tt[I];if(x!==void 0)return w4(x)}(M),y=D.message;V===void 0&&(V=j.INTERNAL,y="Unknown error status: "+M+" with message "+D.message),_=!0,T.So(new K(V,y)),f.close()}else W(Pt,`RPC '${e}' stream ${i} received:`,E),T.bo(E)}}),R(a,VT.STAT_EVENT,P=>{P.stat===tm.PROXY?W(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===tm.NOPROXY&&W(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(){return typeof window<"u"?window:null}function Sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){return new h9(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new X4(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Bt(n.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uD extends J4{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=p9(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Wt(o.readTime):oe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=dm(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=fh(u)?{documents:k4(s,u)}:{query:P4(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=T4(s,o.resumeToken);const c=cm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=Bo(s,o.snapshotVersion.toTimestamp());const c=cm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=g9(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=dm(this.serializer),n.removeTarget=e,this.a_(n)}}class cD extends J4{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return se(!!e.streamToken),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=m9(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=dm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yh(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,hm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,hm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class dD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Bt(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=le(u);c.L_.add(4),await nu(c),c.q_.set("Unknown"),c.L_.delete(4),await pd(c)}(this))})}),this.q_=new dD(r,i)}}async function pd(t){if(Cs(t))for(const e of t.B_)await e(!0)}async function nu(t){for(const e of t.B_)await e(!1)}function Z4(t,e){const n=le(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),u0(n)?l0(n):na(n).r_()&&a0(n,e))}function o0(t,e){const n=le(t),r=na(n);n.N_.delete(e),r.r_()&&ex(n,e),n.N_.size===0&&(r.r_()?r.o_():Cs(n)&&n.q_.set("Unknown"))}function a0(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}na(t).A_(e)}function ex(t,e){t.Q_.xe(e),na(t).R_(e)}function l0(t){t.Q_=new a9({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),na(t).start(),t.q_.v_()}function u0(t){return Cs(t)&&!na(t).n_()&&t.N_.size>0}function Cs(t){return le(t).L_.size===0}function tx(t){t.Q_=void 0}async function pD(t){t.q_.set("Online")}async function mD(t){t.N_.forEach((e,n)=>{a0(t,e)})}async function gD(t,e){tx(t),u0(t)?(t.q_.M_(e),l0(t)):t.q_.set("Unknown")}async function yD(t,e,n){if(t.q_.set("Online"),e instanceof I4&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Eh(t,r)}else if(e instanceof xc?t.Q_.Ke(e):e instanceof E4?t.Q_.He(e):t.Q_.We(e),!n.isEqual(oe.min()))try{const r=await Q4(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),ex(s,u);const f=new yr(d.target,u,c,d.sequenceNumber);a0(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Eh(t,r)}}async function Eh(t,e,n){if(!ki(e))throw e;t.L_.add(1),await nu(t),t.q_.set("Offline"),n||(n=()=>Q4(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await pd(t)})}function nx(t,e){return e().catch(n=>Eh(t,n,e))}async function ru(t){const e=le(t),n=Ii(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;vD(e);)try{const i=await tD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,_D(e,i)}catch(i){await Eh(e,i)}rx(e)&&ix(e)}function vD(t){return Cs(t)&&t.O_.length<10}function _D(t,e){t.O_.push(e);const n=Ii(t);n.r_()&&n.V_&&n.m_(e.mutations)}function rx(t){return Cs(t)&&!Ii(t).n_()&&t.O_.length>0}function ix(t){Ii(t).start()}async function wD(t){Ii(t).p_()}async function ED(t){const e=Ii(t);for(const n of t.O_)e.m_(n.mutations)}async function ID(t,e,n){const r=t.O_.shift(),i=Xg.from(r,e,n);await nx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ru(t)}async function TD(t,e){e&&Ii(t).V_&&await async function(r,i){if(function(o){return i9(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Ii(r).s_(),await nx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ru(r)}}(t,e),rx(t)&&ix(t)}async function G_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Cs(n);n.L_.add(3),await nu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await pd(n)}async function xD(t,e){const n=le(t);e?(n.L_.delete(2),await pd(n)):e||(n.L_.add(2),await nu(n),n.q_.set("Unknown"))}function na(t){return t.K_||(t.K_=function(n,r,i){const s=le(n);return s.w_(),new uD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:pD.bind(null,t),Ro:mD.bind(null,t),mo:gD.bind(null,t),d_:yD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),u0(t)?l0(t):t.q_.set("Unknown")):(await t.K_.stop(),tx(t))})),t.K_}function Ii(t){return t.U_||(t.U_=function(n,r,i){const s=le(n);return s.w_(),new cD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wD.bind(null,t),mo:TD.bind(null,t),f_:ED.bind(null,t),g_:ID.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ru(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new c0(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function h0(t,e){if(Bt("AsyncQueue",`${e}: ${t}`),ki(t))return new K(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=za(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new Eo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.W_=new Ue(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ie():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class $o{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $o(e,n,Eo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class AD{constructor(){this.queries=Q_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=le(n),s=i.queries;i.queries=Q_(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new K(j.ABORTED,"Firestore shutting down"))}}function Q_(){return new Pi(t=>o4(t),sd)}async function d0(t,e){const n=le(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new SD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=h0(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&p0(n)}async function f0(t,e){const n=le(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RD(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&p0(n)}function kD(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function p0(t){t.Y_.forEach(e=>{e.next()})}var vm,Y_;(Y_=vm||(vm={})).ea="default",Y_.Cache="cache";class m0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $o(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=$o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==vm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.key=e}}class ox{constructor(e){this.key=e}}class PD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=de(),this.mutatedKeys=de(),this.Aa=a4(e),this.Ra=new Eo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new K_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),_=Zl(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;m&&_?m.data.isEqual(_.data)?T!==R&&(r.track({type:3,doc:_}),P=!0):this.ga(m,_)||(r.track({type:2,doc:_}),P=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),P=!0):m&&!_&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(a=!0)),P&&(_?(o=o.add(_),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(_,T){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return R(_)-R(T)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new $o(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new K_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=de(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new ox(r))}),this.da.forEach(r=>{e.has(r)||n.push(new sx(r))}),n}ba(e){this.Ta=e.Ts,this.da=de();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return $o.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class CD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bD{constructor(e){this.key=e,this.va=!1}}class DD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Pi(a=>o4(a),sd),this.Ma=new Map,this.xa=new Set,this.Oa=new Ue(X.comparator),this.Na=new Map,this.La=new r0,this.Ba={},this.ka=new Map,this.qa=Es.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ND(t,e,n=!0){const r=dx(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await ax(r,e,n,!0),i}async function VD(t,e){const n=dx(t);await ax(n,e,!0,!1)}async function ax(t,e,n,r){const i=await nD(t.localStore,kn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await OD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Z4(t.remoteStore,i),a}async function OD(t,e,n,r,i){t.Ka=(f,m,_)=>async function(R,P,w,E){let S=P.view.ma(w);S.ns&&(S=await q_(R.localStore,P.query,!1).then(({documents:y})=>P.view.ma(y,S)));const D=E&&E.targetChanges.get(P.targetId),M=E&&E.targetMismatches.get(P.targetId)!=null,V=P.view.applyChanges(S,R.isPrimaryClient,D,M);return J_(R,P.targetId,V.wa),V.snapshot}(t,f,m,_);const s=await q_(t.localStore,e,!0),o=new PD(e,s.Ts),a=o.ma(s.documents),u=tu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);J_(t,n,c.wa);const d=new CD(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function LD(t,e,n){const r=le(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!sd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ym(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&o0(r.remoteStore,i.targetId),_m(r,i.targetId)}).catch(Rs)):(_m(r,i.targetId),await ym(r.localStore,i.targetId,!0))}async function MD(t,e){const n=le(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),o0(n.remoteStore,r.targetId))}async function FD(t,e,n){const r=fx(t);try{const i=await function(o,a){const u=le(o),c=qe.now(),d=a.reduce((_,T)=>_.add(T.key),de());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=dn(),R=de();return u.cs.getEntries(_,d).next(P=>{T=P,T.forEach((w,E)=>{E.isValidDocument()||(R=R.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(P=>{f=P;const w=[];for(const E of a){const S=n9(E,f.get(E.key).overlayedDocument);S!=null&&w.push(new Rr(E.key,S,JT(S.value.mapValue),Nt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,w,a)}).next(P=>{m=P;const w=P.applyToLocalDocumentSet(f,R);return u.documentOverlayCache.saveOverlays(_,P.batchId,w)})}).then(()=>({batchId:m.batchId,changes:u4(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ue(ue)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await iu(r,i.changes),await ru(r.remoteStore)}catch(i){const s=h0(i,"Failed to persist write");n.reject(s)}}async function lx(t,e){const n=le(t);try{const r=await Z9(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?se(o.va):i.removedDocuments.size>0&&(se(o.va),o.va=!1))}),await iu(n,r,e)}catch(r){await Rs(r)}}function X_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=le(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&p0(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UD(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ue(X.comparator);o=o.insert(s,Ye.newNoDocument(s,oe.min()));const a=de().add(s),u=new ud(oe.min(),new Map,new Ue(ue),o,a);await lx(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),g0(r)}else await ym(r.localStore,e,!1).then(()=>_m(r,e,n)).catch(Rs)}async function jD(t,e){const n=le(t),r=e.batch.batchId;try{const i=await J9(n.localStore,e);cx(n,r,null),ux(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await iu(n,i)}catch(i){await Rs(i)}}async function zD(t,e,n){const r=le(t);try{const i=await function(o,a){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(se(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);cx(r,e,n),ux(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await iu(r,i)}catch(i){await Rs(i)}}function ux(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function cx(t,e,n){const r=le(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function _m(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||hx(t,r)})}function hx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(o0(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),g0(t))}function J_(t,e,n){for(const r of n)r instanceof sx?(t.La.addReference(r.key,e),BD(t,r)):r instanceof ox?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||hx(t,r.key)):ie()}function BD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),g0(t))}function g0(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Ie.fromString(e)),r=t.qa.next();t.Na.set(r,new bD(n)),t.Oa=t.Oa.insert(n,r),Z4(t.remoteStore,new yr(kn(Jl(n.path)),r,"TargetPurposeLimboResolution",An.oe))}}async function iu(t,e,n){const r=le(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=s0.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=le(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>L.forEach(c,m=>L.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>L.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!ki(f))throw f;W("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=d.os.get(m),T=_.snapshotVersion,R=_.withLastLimboFreeSnapshotVersion(T);d.os=d.os.insert(m,R)}}}(r.localStore,s))}async function $D(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await K4(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new K(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await iu(n,r.hs)}}function qD(t,e){const n=le(t),r=n.Na.get(e);if(r&&r.va)return de().add(r.key);{let i=de();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function dx(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UD.bind(null,e),e.Ca.d_=RD.bind(null,e.eventManager),e.Ca.$a=kD.bind(null,e.eventManager),e}function fx(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zD.bind(null,e),e}class Fl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return G4(this.persistence,new H4,e.initialUser,this.serializer)}Ga(e){return new W4(dd.Zr,this.serializer)}Wa(e){return new Y4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fl.provider={build:()=>new Fl};class WD extends Fl{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await fx(this.Ja.syncEngine),await ru(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return G4(this.persistence,new H4,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new N9(r,e.asyncQueue,n)}Ha(e,n){const r=new u8(n,this.persistence);return new l8(e.asyncQueue,r)}Ga(e){const n=Q9(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new i0(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,lD(),Sc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Y4}}class Ih{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>X_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$D.bind(null,this.syncEngine),await xD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AD}()}createDatastore(e){const n=fd(e.databaseInfo.databaseId),r=function(s){return new aD(s)}(e.databaseInfo);return function(s,o,a,u){return new hD(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new fD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>X_(this.syncEngine,n,0),function(){return H_.D()?new H_:new iD}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new DD(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=le(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await nu(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ih.provider={build:()=>new Ih};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Bt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=FT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=h0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Of(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await K4(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Z_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GD(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>G_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>G_(e.remoteStore,i)),t._onlineComponents=e}async function GD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Of(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ds("Error using user provided cache. Falling back to memory cache: "+n),await Of(t,new Fl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Of(t,new Fl);return t._offlineComponents}async function px(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Z_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Z_(t,new Ih))),t._onlineComponents}function KD(t){return px(t).then(e=>e.syncEngine)}async function Th(t){const e=await px(t),n=e.eventManager;return n.onListen=ND.bind(null,e.syncEngine),n.onUnlisten=LD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MD.bind(null,e.syncEngine),n}function QD(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new y0({next:m=>{d.Za(),o.enqueueAndForget(()=>f0(s,f));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new K(j.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new K(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new m0(Jl(a.path),d,{includeMetadataChanges:!0,_a:!0});return d0(s,f)}(await Th(t),t.asyncQueue,e,n,r)),r.promise}function YD(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new y0({next:m=>{d.Za(),o.enqueueAndForget(()=>f0(s,f)),m.fromCache&&u.source==="server"?c.reject(new K(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new m0(a,d,{includeMetadataChanges:!0,_a:!0});return d0(s,f)}(await Th(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t,e,n){if(!n)throw new K(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XD(t,e,n,r){if(e===!0&&r===!0)throw new K(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tw(t){if(!X.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nw(t){if(X.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function md(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=md(t);throw new K(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function JD(t,e){if(e<=0)throw new K(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Y6;switch(r.type){case"firstParty":return new e8(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ew.get(n);r&&(W("ComponentProvider","Removing Datastore"),ew.delete(n),r.terminate())}(this),Promise.resolve()}}function ZD(t,e,n,r={}){var i;const s=(t=Ht(t,gd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=wt.MOCK_USER;else{a=OI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new wt(c)}t._authCredentials=new X6(new MT(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sr(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class fi extends sr{constructor(e,n,r){super(e,n,Jl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new X(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function gt(t,e,...n){if(t=Te(t),gx("collection","path",e),t instanceof gd){const r=Ie.fromString(e,...n);return nw(r),new fi(t,null,r)}{if(!(t instanceof Vt||t instanceof fi))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return nw(r),new fi(t.firestore,null,r)}}function we(t,e,...n){if(t=Te(t),arguments.length===1&&(e=FT.newId()),gx("doc","path",e),t instanceof gd){const r=Ie.fromString(e,...n);return tw(r),new Vt(t,null,new X(r))}{if(!(t instanceof Vt||t instanceof fi))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return tw(r),new Vt(t.firestore,t instanceof fi?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new X4(this,"async_queue_retry"),this.Vu=()=>{const r=Sc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Sc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new tr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ki(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Bt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=c0.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ie()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function sw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class rr extends gd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new iw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new iw(e),this._firestoreClient=void 0,await e}}}function eN(t,e){const n=typeof t=="object"?t:Cg(),r=typeof t=="string"?t:"(default)",i=Xh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=DI("firestore");s&&ZD(i,...s)}return i}function yd(t){if(t._terminated)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yx(t),t._firestoreClient}function yx(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new b8(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,mx(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new HD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}function tN(t,e){ds("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return nN(t,Ih.provider,{build:r=>new WD(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function nN(t,e,n){if((t=Ht(t,rr))._firestoreClient||t._terminated)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new K(j.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},yx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qo(at.fromBase64String(e))}catch(n){throw new K(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qo(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=/^__.*__$/;class iN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}class vx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _x(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class _d{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new _d(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_x(this.Cu)&&rN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class sN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fd(e)}Qu(e,n,r,i=!1){return new _d({Cu:e,methodName:n,qu:r,path:Be.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function su(t){const e=t._freezeSettings(),n=fd(t._databaseId);return new sN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wx(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);x0("Data must be an object, but it was:",o,r);const a=Tx(r,o);let u,c;if(s.merge)u=new en(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=wm(e,f,n);if(!o.contains(m))throw new K(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Sx(d,m)||d.push(m)}u=new en(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new iN(new bt(a),u,c)}class wd extends bs{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wd}}function Ex(t,e,n){return new _d({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class w0 extends bs{_toFieldTransform(e){return new eu(e.path,new jo)}isEqual(e){return e instanceof w0}}class E0 extends bs{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=Ex(this,e,!0),r=this.Ku.map(s=>Ds(s,n)),i=new ys(r);return new eu(e.path,i)}isEqual(e){return e instanceof E0&&Oo(this.Ku,e.Ku)}}class I0 extends bs{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=Ex(this,e,!0),r=this.Ku.map(s=>Ds(s,n)),i=new vs(r);return new eu(e.path,i)}isEqual(e){return e instanceof I0&&Oo(this.Ku,e.Ku)}}class T0 extends bs{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new zo(e.serializer,d4(e.serializer,this.$u));return new eu(e.path,n)}isEqual(e){return e instanceof T0&&this.$u===e.$u}}function oN(t,e,n,r){const i=t.Qu(1,e,n);x0("Data must be an object, but it was:",i,r);const s=[],o=bt.empty();ks(r,(u,c)=>{const d=S0(e,u,n);c=Te(c);const f=i.Nu(d);if(c instanceof wd)s.push(d);else{const m=Ds(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new en(s);return new vx(o,a,i.fieldTransforms)}function aN(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[wm(e,r,n)],u=[i];if(s.length%2!=0)throw new K(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(wm(e,s[m])),u.push(s[m+1]);const c=[],d=bt.empty();for(let m=a.length-1;m>=0;--m)if(!Sx(c,a[m])){const _=a[m];let T=u[m];T=Te(T);const R=o.Nu(_);if(T instanceof wd)c.push(_);else{const P=Ds(T,R);P!=null&&(c.push(_),d.set(_,P))}}const f=new en(c);return new vx(d,f,o.fieldTransforms)}function Ix(t,e,n,r=!1){return Ds(n,t.Qu(r?4:3,e))}function Ds(t,e){if(xx(t=Te(t)))return x0("Unsupported field value:",e,t),Tx(t,e);if(t instanceof bs)return function(r,i){if(!_x(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ds(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return d4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:Bo(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bo(i.serializer,s)}}if(r instanceof v0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qo)return{bytesValue:T4(i.serializer,r._byteString)};if(r instanceof Vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:e0(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof _0)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Qg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${md(r)}`)}(t,e)}function Tx(t,e){const n={};return KT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,(r,i)=>{const s=Ds(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof v0||t instanceof qo||t instanceof Vt||t instanceof bs||t instanceof _0)}function x0(t,e,n){if(!xx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=md(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function wm(t,e,n){if((e=Te(e))instanceof vd)return e._internalPath;if(typeof e=="string")return S0(t,e);throw xh("Field path arguments must be of type string or ",t,!1,void 0,n)}const lN=new RegExp("[~\\*/\\[\\]]");function S0(t,e,n){if(e.search(lN)>=0)throw xh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vd(...e.split("."))._internalPath}catch{throw xh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(j.INVALID_ARGUMENT,a+t+u)}function Sx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ed("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uN extends A0{data(){return super.data()}}function Ed(t,e){return typeof e=="string"?S0(t,e):e instanceof vd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class R0{}class Id extends R0{}function fn(t,e,...n){let r=[];e instanceof R0&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof k0).length,a=s.filter(u=>u instanceof Td).length;if(o>1||o>0&&a>0)throw new K(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Td extends Id{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Td(e,n,r)}_apply(e){const n=this._parse(e);return Rx(e._query,n),new sr(e.firestore,e.converter,um(e._query,n))}_parse(e){const n=su(e.firestore);return function(s,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){aw(f,d);const _=[];for(const T of f)_.push(ow(u,s,T));m={arrayValue:{values:_}}}else m=ow(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||aw(f,d),m=Ix(a,o,f,d==="in"||d==="not-in");return me.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Tn(t,e,n){const r=e,i=Ed("where",t);return Td._create(i,r,n)}class k0 extends R0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new k0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Re.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)Rx(o,u),o=um(o,u)}(e._query,n),new sr(e.firestore,e.converter,um(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class P0 extends Id{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new P0(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ml(s,o)}(e._query,this._field,this._direction);return new sr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ps(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function pi(t,e="asc"){const n=e,r=Ed("orderBy",t);return P0._create(r,n)}class C0 extends Id{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new C0(e,n,r)}_apply(e){return new sr(e.firestore,e.converter,mh(e._query,this._limit,this._limitType))}}function Sh(t){return JD("limit",t),C0._create("limit",t,"F")}class b0 extends Id{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new b0(e,n,r)}_apply(e){const n=hN(e,this.type,this._docOrFields,this._inclusive);return new sr(e.firestore,e.converter,function(i,s){return new Ps(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function cN(...t){return b0._create("startAfter",t,!1)}function hN(t,e,n,r){if(n[0]=Te(n[0]),n[0]instanceof A0)return function(s,o,a,u,c){if(!u)throw new K(j.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of wo(s))if(f.field.isKeyField())d.push(ms(o,u.key));else{const m=u.data.field(f.field);if(rd(m))throw new K(j.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const _=f.field.canonicalString();throw new K(j.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}d.push(m)}return new Ei(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=su(t.firestore);return function(o,a,u,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new K(j.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let T=0;T<d.length;T++){const R=d[T];if(m[T].field.isKeyField()){if(typeof R!="string")throw new K(j.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof R}`);if(!Kg(o)&&R.indexOf("/")!==-1)throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${R}' contains a slash.`);const P=o.path.child(Ie.fromString(R));if(!X.isDocumentKey(P))throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const w=new X(P);_.push(ms(a,w))}else{const P=Ix(u,c,R);_.push(P)}}return new Ei(_,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function ow(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new K(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kg(e)&&n.indexOf("/")!==-1)throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!X.isDocumentKey(r))throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ms(t,new X(r))}if(n instanceof Vt)return ms(t,n._key);throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${md(n)}.`)}function aw(t,e){if(!Array.isArray(t)||t.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rx(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class dN{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ks(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Me(o.doubleValue));return new _0(s)}convertGeoPoint(e){return new v0(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vl(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);se(N4(r));const i=new fs(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Bt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Px extends A0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ed("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ac extends Px{data(e={}){return super.data(e)}}class Cx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ac(this._firestore,this._userDataWriter,r.key,r,new qa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ac(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ac(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:fN(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){t=Ht(t,Vt);const e=Ht(t.firestore,rr);return QD(yd(e),t._key).then(n=>bx(e,t,n))}class D0 extends dN{constructor(e){super(),this.firestore=e}convertBytes(e){return new qo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function mi(t){t=Ht(t,sr);const e=Ht(t.firestore,rr),n=yd(e),r=new D0(e);return Ax(t._query),YD(n,t._query).then(i=>new Cx(e,r,t,i))}function lw(t,e,n){t=Ht(t,Vt);const r=Ht(t.firestore,rr),i=kx(t.converter,e);return xd(r,[wx(su(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Nt.none())])}function Qe(t,e,n,...r){t=Ht(t,Vt);const i=Ht(t.firestore,rr),s=su(i);let o;return o=typeof(e=Te(e))=="string"||e instanceof vd?aN(s,"updateDoc",t._key,e,n,r):oN(s,"updateDoc",t._key,e),xd(i,[o.toMutation(t._key,Nt.exists(!0))])}function Em(t){return xd(Ht(t.firestore,rr),[new ld(t._key,Nt.none())])}function Jr(t,e){const n=Ht(t.firestore,rr),r=we(t),i=kx(t.converter,e);return xd(n,[wx(su(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function Ah(t,...e){var n,r,i;t=Te(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||sw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(sw(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Vt)c=Ht(t.firestore,rr),d=Jl(t._key.path),u={next:f=>{e[o]&&e[o](bx(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Ht(t,sr);c=Ht(f.firestore,rr),d=f._query;const m=new D0(c);u={next:_=>{e[o]&&e[o](new Cx(c,m,f,_))},error:e[o+1],complete:e[o+2]},Ax(t._query)}return function(m,_,T,R){const P=new y0(R),w=new m0(_,P,T);return m.asyncQueue.enqueueAndForget(async()=>d0(await Th(m),w)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>f0(await Th(m),w))}}(yd(c),d,a,u)}function xd(t,e){return function(r,i){const s=new tr;return r.asyncQueue.enqueueAndForget(async()=>FD(await KD(r),i,s)),s.promise}(yd(t),e)}function bx(t,e,n){const r=n.docs.get(e._key),i=new D0(t);return new Px(t,i,e._key,r,new qa(n.hasPendingWrites,n.fromCache),e.converter)}function Ee(){return new w0("serverTimestamp")}function Lf(...t){return new E0("arrayUnion",t)}function Mf(...t){return new I0("arrayRemove",t)}function Zr(t){return new T0("increment",t)}(function(e,n=!0){(function(i){ea=i})(As),ls(new vi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new rr(new J6(r.getProvider("auth-internal")),new n8(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Zn(Z1,"4.7.3",e),Zn(Z1,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="firebasestorage.googleapis.com",Nx="storageBucket",pN=2*60*1e3,mN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends ir{constructor(e,n,r=0){super(Ff(e),`Firebase Storage: ${n} (${Ff(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ff(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xe||(Xe={}));function Ff(t){return"storage/"+t}function N0(){const t="An unknown error occurred, please check the error payload for server response.";return new Je(Xe.UNKNOWN,t)}function gN(t){return new Je(Xe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function yN(t){return new Je(Xe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Je(Xe.UNAUTHENTICATED,t)}function _N(){return new Je(Xe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function wN(t){return new Je(Xe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function EN(){return new Je(Xe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IN(){return new Je(Xe.CANCELED,"User canceled the upload/download.")}function TN(t){return new Je(Xe.INVALID_URL,"Invalid URL '"+t+"'.")}function xN(t){return new Je(Xe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function SN(){return new Je(Xe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Nx+"' property when initializing the app?")}function AN(){return new Je(Xe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function RN(){return new Je(Xe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function kN(t){return new Je(Xe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Im(t){return new Je(Xe.INVALID_ARGUMENT,t)}function Vx(){return new Je(Xe.APP_DELETED,"The Firebase app was deleted.")}function PN(t){return new Je(Xe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function al(t,e){return new Je(Xe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ca(t){throw new Je(Xe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw xN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),T={bucket:1,path:3},R=n===Dx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",w=new RegExp(`^https?://${R}/${i}/${P}`,"i"),S=[{regex:a,indices:u,postModify:s},{regex:_,indices:T,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<S.length;D++){const M=S[D],V=M.regex.exec(e);if(V){const y=V[M.indices.bucket];let g=V[M.indices.path];g||(g=""),r=new pn(y,g),M.postModify(r);break}}if(r==null)throw TN(e);return r}}class CN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function f(P){i=setTimeout(()=>{i=null,t(_,u())},P)}function m(){s&&clearTimeout(s)}function _(P,...w){if(c){m();return}if(P){m(),d.call(null,P,...w);return}if(u()||o){m(),d.call(null,P,...w);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,f(S)}let T=!1;function R(P){T||(T=!0,m(),!c&&(i!==null?(P||(a=2),clearTimeout(i),f(0)):P||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function DN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){return t!==void 0}function VN(t){return typeof t=="object"&&!Array.isArray(t)}function V0(t){return typeof t=="string"||t instanceof String}function uw(t){return O0()&&t instanceof Blob}function O0(){return typeof Blob<"u"}function cw(t,e,n,r){if(r<e)throw Im(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Im(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ox(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ns;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ns||(ns={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n,r,i,s,o,a,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ku(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ns.NO_ERROR,u=s.getStatus();if(!a||ON(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ns.ABORT;r(!1,new Ku(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ku(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());NN(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=N0();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Vx():IN();o(u)}else{const u=EN();o(u)}};this.canceled_?n(!1,new Ku(!1,null,!0)):this.backoffId_=bN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ku{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function MN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function jN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zN(t,e,n,r,i,s,o=!0){const a=Ox(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return UN(c,e),MN(c,n),FN(c,s),jN(c,r),new LN(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $N(...t){const e=BN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(O0())return new Blob(t);throw new Je(Xe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function qN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t){if(typeof atob>"u")throw kN("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uf{constructor(e,n){this.data=e,this.contentType=n||null}}function HN(t,e){switch(t){case Yn.RAW:return new Uf(Lx(e));case Yn.BASE64:case Yn.BASE64URL:return new Uf(Mx(t,e));case Yn.DATA_URL:return new Uf(KN(e),QN(e))}throw N0()}function Lx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function GN(t){let e;try{e=decodeURIComponent(t)}catch{throw al(Yn.DATA_URL,"Malformed data URL.")}return Lx(e)}function Mx(t,e){switch(t){case Yn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw al(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Yn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw al(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=WN(e)}catch(i){throw i.message.includes("polyfill")?i:al(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Fx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw al(Yn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=YN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function KN(t){const e=new Fx(t);return e.base64?Mx(Yn.BASE64,e.rest):GN(e.rest)}function QN(t){return new Fx(t).contentType}function YN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){let r=0,i="";uw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(uw(this.data_)){const r=this.data_,i=qN(r,e,n);return i===null?null:new Hr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Hr(r,!0)}}static getBlob(...e){if(O0()){const n=e.map(r=>r instanceof Hr?r.data_:r);return new Hr($N.apply(null,n))}else{const n=e.map(o=>V0(o)?HN(Yn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Hr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t){let e;try{e=JSON.parse(t)}catch{return null}return VN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function JN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function jx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t,e){return e}class jt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||ZN}}let Qu=null;function eV(t){return!V0(t)||t.length<2?t:jx(t)}function zx(){if(Qu)return Qu;const t=[];t.push(new jt("bucket")),t.push(new jt("generation")),t.push(new jt("metageneration")),t.push(new jt("name","fullPath",!0));function e(s,o){return eV(o)}const n=new jt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new jt("size");return i.xform=r,t.push(i),t.push(new jt("timeCreated")),t.push(new jt("updated")),t.push(new jt("md5Hash",null,!0)),t.push(new jt("cacheControl",null,!0)),t.push(new jt("contentDisposition",null,!0)),t.push(new jt("contentEncoding",null,!0)),t.push(new jt("contentLanguage",null,!0)),t.push(new jt("contentType",null,!0)),t.push(new jt("metadata","customMetadata",!0)),Qu=t,Qu}function tV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new pn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function nV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return tV(r,t),r}function Bx(t,e,n){const r=Ux(e);return r===null?null:nV(t,r,n)}function rV(t,e,n,r){const i=Ux(e);if(i===null||!V0(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),_=Sd(m,n,r),T=Ox({alt:"media",token:c});return _+T})[0]}function iV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class L0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t){if(!t)throw N0()}function sV(t,e){function n(r,i){const s=Bx(t,i,e);return $x(s!==null),s}return n}function oV(t,e){function n(r,i){const s=Bx(t,i,e);return $x(s!==null),rV(s,i,t.host,t._protocol)}return n}function qx(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=_N():i=vN():n.getStatus()===402?i=yN(t.bucket):n.getStatus()===403?i=wN(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Wx(t){const e=qx(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=gN(t.path)),s.serverResponse=i.serverResponse,s}return n}function aV(t,e,n){const r=e.fullServerUrl(),i=Sd(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new L0(i,s,oV(t,n),o);return a.errorHandler=Wx(e),a}function lV(t,e){const n=e.fullServerUrl(),r=Sd(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,c){}const a=new L0(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Wx(e),a}function uV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function cV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=uV(null,e)),r}function hV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let D=0;D<2;D++)S=S+Math.random().toString().slice(2);return S}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=cV(e,r,i),d=iV(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",_=Hr.getBlob(f,r,m);if(_===null)throw AN();const T={name:c.fullPath},R=Sd(s,t.host,t._protocol),P="POST",w=t.maxUploadRetryTime,E=new L0(R,P,sV(t,n),w);return E.urlParams=T,E.headers=o,E.body=_.uploadData(),E.errorHandler=qx(e),E}class dV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ns.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ns.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ns.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ca("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ca("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ca("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ca("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ca("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fV extends dV{initXhr(){this.xhr_.responseType="text"}}function M0(){return new fV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Is(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jx(this._location.path)}get storage(){return this._service}get parent(){const e=XN(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new Is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw PN(e)}}function pV(t,e,n){t._throwIfRoot("uploadBytes");const r=hV(t.storage,t._location,zx(),new Hr(e,!0),n);return t.storage.makeRequestWithTokens(r,M0).then(i=>({metadata:i,ref:t}))}function mV(t){t._throwIfRoot("getDownloadURL");const e=aV(t.storage,t._location,zx());return t.storage.makeRequestWithTokens(e,M0).then(n=>{if(n===null)throw RN();return n})}function gV(t){t._throwIfRoot("deleteObject");const e=lV(t.storage,t._location);return t.storage.makeRequestWithTokens(e,M0)}function yV(t,e){const n=JN(t._location.path,e),r=new pn(t._location.bucket,n);return new Is(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(t){return/^[A-Za-z]+:\/\//.test(t)}function _V(t,e){return new Is(t,e)}function Hx(t,e){if(t instanceof F0){const n=t;if(n._bucket==null)throw SN();const r=new Is(n,n._bucket);return e!=null?Hx(r,e):r}else return e!==void 0?yV(t,e):t}function wV(t,e){if(e&&vV(e)){if(t instanceof F0)return _V(t,e);throw Im("To use ref(service, url), the first argument must be a Storage instance.")}else return Hx(t,e)}function hw(t,e){const n=e==null?void 0:e[Nx];return n==null?null:pn.makeFromBucketSpec(n,t)}function EV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:OI(i,t.app.options.projectId))}class F0{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Dx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pN,this._maxUploadRetryTime=mN,this._requests=new Set,i!=null?this._bucket=pn.makeFromBucketSpec(i,this._host):this._bucket=hw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=hw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Is(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new CN(Vx());{const o=zN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const dw="@firebase/storage",fw="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="storage";function IV(t,e,n){return t=Te(t),pV(t,e,n)}function TV(t){return t=Te(t),mV(t)}function xV(t){return t=Te(t),gV(t)}function pw(t,e){return t=Te(t),wV(t,e)}function SV(t=Cg(),e){t=Te(t);const r=Xh(t,Gx).getImmediate({identifier:e}),i=DI("storage");return i&&AV(r,...i),r}function AV(t,e,n,r={}){EV(t,e,n,r)}function RV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new F0(n,r,i,e,As)}function kV(){ls(new vi(Gx,RV,"PUBLIC").setMultipleInstances(!0)),Zn(dw,fw,""),Zn(dw,fw,"esm2017")}kV();const PV={apiKey:"AIzaSyD2w3owD20XBd_JAH-sUykBtSG9BCBCgAU",authDomain:"echo-5385e.firebaseapp.com",projectId:"echo-5385e",storageBucket:"echo-5385e.appspot.com",messagingSenderId:"442753723316",appId:"1:442753723316:web:07e2013a9439b0d426e0e1"},U0=jI(PV),cn=K6(U0),Kx=new hr,ae=eN(U0),mw=SV(U0);typeof window<"u"&&w3(cn,vT).then(()=>{console.log("✅ Firebase Auth 지속성 설정 완료 (LOCAL)")}).catch(t=>{console.warn("⚠️ Firebase Auth 지속성 설정 실패:",t)});typeof window<"u"&&tN(ae,{}).catch(t=>{t.code==="failed-precondition"?console.warn("Multiple tabs open, persistence can only be enabled in one tab at a time."):t.code==="unimplemented"&&console.warn("The current browser does not support persistence.")});const Wa=gt(ae,"products");gt(ae,"users");gt(ae,"chats");gt(ae,"reviews");gt(ae,"reports");const gw=gt(ae,"musiclife_posts"),Un={ACTIVE:"active",SOLD:"sold",RESERVED:"reserved",DELETED:"deleted",SUSPENDED:"suspended"},yw={GUITAR:{id:"guitar",name:"기타",subcategories:["어쿠스틱 기타","일렉트릭 기타","베이스 기타","클래식 기타"]},PIANO:{id:"piano",name:"피아노/건반",subcategories:["피아노","전자피아노","신디사이저","오르간"]},DRUMS:{id:"drums",name:"드럼/타악기",subcategories:["어쿠스틱 드럼","전자드럼","타악기","심벌"]},WIND:{id:"wind",name:"관악기",subcategories:["색소폰","플룻","트럼펫","클라리넷","트롬본"]},STRING:{id:"string",name:"현악기",subcategories:["바이올린","비올라","첼로","우쿨렐레"]},AUDIO:{id:"audio",name:"오디오 장비",subcategories:["앰프","스피커","마이크","오디오 인터페이스","이펙터"]},OTHER:{id:"other",name:"기타",subcategories:["하모니카","아코디언","기타 악기"]}},On={async createProduct(t,e){var n;try{if(!t.title||t.title.trim().length<2)throw new Error("제목을 2글자 이상 입력해주세요.");if(!t.description||t.description.trim().length<10)throw new Error("상품 설명을 10글자 이상 입력해주세요.");if(!t.price||t.price<1e3)throw new Error("가격을 1,000원 이상 입력해주세요.");if(!e)throw new Error("로그인이 필요합니다.");const r=Ee(),i={title:t.title.trim().replace(/<[^>]*>/g,""),description:t.description.trim().replace(/<[^>]*>/g,""),category:t.category,subcategory:t.subcategory||"",brand:t.brand||"",model:t.model||"",price:parseInt(t.price),originalPrice:t.originalPrice?parseInt(t.originalPrice):null,isPriceNegotiable:t.isPriceNegotiable||!1,condition:t.condition||"good",conditionDescription:t.conditionDescription||"",yearOfManufacture:t.yearOfManufacture?parseInt(t.yearOfManufacture):null,images:t.images||[],thumbnailImage:((n=t.images)==null?void 0:n[0])||"",region:t.region||"",district:t.district||"",fullLocation:`${t.region} ${t.district}`.trim(),isDeliveryAvailable:t.isDeliveryAvailable||!1,deliveryFee:t.deliveryFee?parseInt(t.deliveryFee):0,preferredTransactionType:t.preferredTransactionType||"direct",sellerId:e,sellerNickname:t.sellerNickname||"",status:Un.ACTIVE,viewCount:0,likeCount:0,chatCount:0,tags:t.tags||[],createdAt:r,updatedAt:r,lastBumpedAt:r,searchKeywords:[],isPromoted:!1,reportCount:0,reservedBy:null,soldTo:null,soldAt:null,isUrgent:t.isUrgent||!1,accessories:t.accessories||[],defects:t.defects||[]};console.log("📦 Firestore에 저장할 상품 데이터:",i);try{const s=await Jr(Wa,i);console.log("✅ Firestore 저장 성공, 문서 ID:",s.id);const o=new Date,a={id:s.id,...i,createdAt:o,updatedAt:o,lastBumpedAt:o};return console.log("📋 반환할 결과:",a),a}catch(s){throw console.error("❌ Firestore 저장 실패:",s),s}}catch(r){throw console.error("❌ Firebase 상품 생성 실패:",r),console.error("❌ Firebase 에러 상세:",{message:r.message,code:r.code,stack:r.stack,productData:t,userId:e}),r}},generateSearchKeywords(t){const e=new Set;return t.title.toLowerCase().split(/\s+/).forEach(r=>{r.length>1&&e.add(r)}),t.brand&&e.add(t.brand.toLowerCase()),t.model&&e.add(t.model.toLowerCase()),t.category&&e.add(t.category.toLowerCase()),Array.from(e)},async getProducts(t={}){try{const{category:e=null,region:n=null,priceMin:r=null,priceMax:i=null,condition:s=null,sortBy:o="latest",pageSize:a=20,lastDoc:u=null,searchQuery:c=null}=t;let d=fn(Wa,Tn("status","==",Un.ACTIVE),pi("createdAt","desc"),Sh(a));u&&(d=fn(Wa,Tn("status","==",Un.ACTIVE),pi("createdAt","desc"),cN(u),Sh(a))),console.log("📋 Firestore 쿼리 실행 중...");const f=await mi(d);console.log("✅ Firestore 쿼리 성공, 문서 수:",f.docs.length);let m=f.docs.map(T=>({id:T.id,...T.data(),_doc:T}));if(e&&(m=m.filter(T=>T.category===e)),n&&(m=m.filter(T=>T.region===n)),s&&(m=m.filter(T=>T.condition===s)),r!==null&&(m=m.filter(T=>T.price>=r)),i!==null&&(m=m.filter(T=>T.price<=i)),c){const T=c.toLowerCase();m=m.filter(R=>{var P,w;return((P=R.title)==null?void 0:P.toLowerCase().includes(T))||((w=R.description)==null?void 0:w.toLowerCase().includes(T))})}switch(o){case"price_low":m.sort((T,R)=>T.price-R.price);break;case"price_high":m.sort((T,R)=>R.price-T.price);break;case"popular":m.sort((T,R)=>(R.likeCount||0)-(T.likeCount||0));break}return{products:await Promise.all(m.map(async T=>{try{if(T.showPhoneNumber){const R=we(ae,"users",T.sellerId),P=await Xr(R);if(P.exists()){const w=P.data();return{...T,sellerPhone:w.phoneNumber,sellerNickname:w.nickname||T.sellerNickname,sellerProfileImage:w.profileImage||T.sellerProfileImage,sellerVerified:w.phoneVerified||!1}}}return T}catch(R){return console.error(`판매자 정보 로드 실패 (상품 ${T.id}):`,R),T}})),hasMore:f.docs.length===a,lastDoc:f.docs[f.docs.length-1]||null}}catch(e){throw console.error("상품 조회 실패:",e),console.error("에러 상세:",e.message,e.code),new Error("상품을 불러오는데 실패했습니다.")}},async getProduct(t){try{console.log("🔍 상품 상세 조회 시작:",t);const e=we(ae,"products",t),n=await Xr(e);if(!n.exists())throw console.log("❌ 상품을 찾을 수 없음:",t),new Error(`상품을 찾을 수 없습니다. (ID: ${t})`);const r={id:n.id,...n.data()};return console.log("✅ 상품 상세 조회 성공:",t,r.title),r}catch(e){throw console.error("❌ 상품 상세 조회 실패:",e),e}},async incrementViewCount(t,e=null){try{console.log("🚀 조회수 증가 함수 시작:",{productId:t,userId:e||"anonymous"});const n=`viewed_${t}_${e||"anonymous"}`,r=sessionStorage.getItem(n);if(r){const a=Date.now()-parseInt(r);if(a<1*60*1e3){console.log("⏱️ 이미 조회한 상품입니다 (중복 방지):",t,"남은 시간:",Math.ceil((1*60*1e3-a)/1e3),"초");return}}const i=we(ae,"products",t),s=await Xr(i);if(!s.exists()){console.log("❌ 상품을 찾을 수 없습니다:",t);return}const o=s.data();if(console.log("📊 현재 조회수:",o.viewCount||0),e&&o.sellerId===e){console.log("🚫 본인 상품은 조회수가 증가하지 않습니다:",t);return}console.log("💫 Firestore 조회수 업데이트 시작..."),await Qe(i,{viewCount:Zr(1),lastViewedAt:Ee()}),sessionStorage.setItem(n,Date.now().toString()),console.log("✅ 조회수 증가 완료:",t,"→",(o.viewCount||0)+1)}catch(n){console.error("❌ 조회수 증가 실패:",n),console.error("❌ 에러 상세:",n.message,n.code)}},async incrementChatCount(t){try{const e=we(ae,"products",t);await Qe(e,{chatCount:Zr(1),lastChatAt:Ee()}),console.log("채팅 수 증가 완료:",t)}catch(e){throw console.error("채팅 수 증가 실패:",e),e}},async toggleLike(t,e){try{const n=gt(ae,"users",e,"likes"),r=fn(n,Tn("productId","==",t)),i=await mi(r),s=we(ae,"products",t);if(i.empty)return await Jr(n,{productId:t,createdAt:Ee()}),await Qe(s,{likeCount:Zr(1)}),!0;{const o=i.docs[0];return await Em(o.ref),await Qe(s,{likeCount:Zr(-1)}),!1}}catch(n){throw console.error("찜하기 처리 실패:",n),n}},async updateProductStatus(t,e,n={}){try{const r=we(ae,"products",t),i={status:e,updatedAt:Ee(),...n};e===Un.SOLD&&(i.soldAt=Ee()),await Qe(r,i)}catch(r){throw console.error("상품 상태 변경 실패:",r),r}},async updateProduct(t,e){try{const n=we(ae,"products",t);await Qe(n,{...e,updatedAt:Ee()})}catch(n){throw console.error("상품 수정 실패:",n),n}},async getUserProducts(t,e=Un.ACTIVE){try{const n=fn(Wa,Tn("sellerId","==",t),Tn("status","==",e),pi("createdAt","desc"));return(await mi(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){throw console.error("사용자 상품 조회 실패:",n),n}},async bumpProduct(t,e){var n;try{const r=we(ae,"products",t),i=await Xr(r);if(!i.exists())throw new Error("상품을 찾을 수 없습니다.");const s=i.data();if(s.sellerId!==e)throw new Error("권한이 없습니다.");const o=(n=s.lastBumpedAt)==null?void 0:n.toDate();if((new Date-o)/(1e3*60*60)<24)throw new Error("24시간에 한 번만 끌어올릴 수 있습니다.");return await Qe(r,{lastBumpedAt:Ee(),updatedAt:Ee()}),!0}catch(r){throw console.error("끌어올리기 실패:",r),r}}},T7={async uploadProductImage(t,e,n=null){try{if(t.size>5*1024*1024)throw new Error("이미지 크기는 5MB 이하여야 합니다.");if(!t.type.startsWith("image/"))throw new Error("이미지 파일만 업로드 가능합니다.");const r=this.compressImage(t),i=new Promise((m,_)=>setTimeout(()=>_(new Error("이미지 업로드가 너무 오래 걸립니다.")),1e4)),s=await Promise.race([r,i]),o=Date.now(),a=`${e}_${o}_${t.name}`,u=n?`products/${n}/${a}`:`products/temp/${a}`,c=pw(mw,u),d=await IV(c,s);return{url:await TV(d.ref),path:u,size:s.size,originalName:t.name}}catch(r){throw console.error("이미지 업로드 실패:",r),r}},async compressImage(t,e=800,n=.8){return new Promise((r,i)=>{const s=document.createElement("canvas"),o=s.getContext("2d"),a=new Image;let u;a.onload=function(){const c=Math.min(e/a.width,e/a.height);if(s.width=a.width*c,s.height=a.height*c,o.drawImage(a,0,0,s.width,s.height),!s.toBlob){i(new Error("이미지 압축을 지원하지 않는 브라우저입니다."));return}u=setTimeout(()=>{i(new Error("이미지 압축이 너무 오래 걸립니다."))},1e4),s.toBlob(d=>{clearTimeout(u),d?r(d):i(new Error("이미지 압축 실패"))},t.type,n)},a.onerror=function(){i(new Error("이미지 로드 실패"))},a.src=URL.createObjectURL(t)})},async uploadMultipleImages(t,e,n=null){try{if(t.length>5)throw new Error("이미지는 최대 5개까지 업로드 가능합니다.");const r=t.map(s=>this.uploadProductImage(s,e,n));return await Promise.all(r)}catch(r){throw console.error("다중 이미지 업로드 실패:",r),r}},async deleteImage(t){try{const e=pw(mw,t);await xV(e)}catch(e){throw console.error("이미지 삭제 실패:",e),e}}},CV={subscribeToProducts(t,e={}){try{let n=fn(Wa,Tn("status","==",Un.ACTIVE),pi("createdAt","desc"),Sh(20));return e.category&&(n=fn(n,Tn("category","==",e.category))),Ah(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));t(i)})}catch(n){throw console.error("실시간 구독 실패:",n),n}},subscribeToProduct(t,e){try{const n=we(ae,"products",t);return Ah(n,r=>{r.exists()?e({id:r.id,...r.data()}):e(null)})}catch(n){throw console.error("상품 실시간 구독 실패:",n),n}}},x7={async createPost(t){return await Jr(gw,{...t,createdAt:Ee(),updatedAt:Ee(),viewCount:0,commentCount:0})},async getPosts(){const t=fn(gw,pi("createdAt","desc"));return(await mi(t)).docs.map(n=>({id:n.id,...n.data()}))},async getPost(t){const e=we(ae,"musiclife_posts",t),n=await Xr(e);if(!n.exists())throw new Error("게시글이 존재하지 않습니다.");return await Qe(e,{viewCount:Zr(1)}),{id:n.id,...n.data()}},async updatePost(t,e){const n=we(ae,"musiclife_posts",t);await Qe(n,{...e,updatedAt:Ee()})},async deletePost(t){const e=we(ae,"musiclife_posts",t);await Em(e)},async addComment(t,e){const n=gt(ae,"musiclife_posts",t,"comments");await Jr(n,{...e,createdAt:Ee()}),await Qe(we(ae,"musiclife_posts",t),{commentCount:Zr(1)})},async getComments(t){const e=gt(ae,"musiclife_posts",t,"comments"),n=fn(e,pi("createdAt","asc"));return(await mi(n)).docs.map(i=>({id:i.id,...i.data()}))},async deleteComment(t,e){const n=we(ae,"musiclife_posts",t,"comments",e);await Em(n),await Qe(we(ae,"musiclife_posts",t),{commentCount:Zr(-1)})}},S7={recaptchaVerifier:null,setupRecaptcha(t="recaptcha-container"){try{return this.recaptchaVerifier||(this.recaptchaVerifier=new Y3(cn,t,{size:"invisible",callback:e=>{console.log("reCAPTCHA 완료:",e)},"expired-callback":()=>{console.log("reCAPTCHA 만료됨")}})),this.recaptchaVerifier}catch(e){throw console.error("reCAPTCHA 설정 실패:",e),e}},async sendVerificationCode(t){try{const e=t.startsWith("+82")?t:"+82"+t.replace(/^0/,"");console.log("전화번호 인증 요청:",e);const n=this.setupRecaptcha(),r=await Z3(cn,e,n);return console.log("인증번호 전송 성공"),r}catch(e){throw console.error("인증번호 전송 실패:",e),this.resetRecaptcha(),e}},async verifyCode(t,e){try{const n=await t.confirm(e);return console.log("전화번호 인증 성공:",n.user),n.user}catch(n){throw console.error("인증번호 확인 실패:",n),n}},async linkPhoneNumber(t,e){try{const n=Zi.credential(e,t),r=await f3(cn.currentUser,n);return console.log("전화번호 연결 성공:",r),r}catch(n){throw console.error("전화번호 연결 실패:",n),n}},resetRecaptcha(){this.recaptchaVerifier&&(this.recaptchaVerifier.clear(),this.recaptchaVerifier=null)},validatePhoneNumber(t){return/^01[0-9]-\d{4}-\d{4}$/.test(t)},formatPhoneNumber(t){const e=t.replace(/\D/g,"");return e.length===11&&e.startsWith("010")?e.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3"):t}},Ns=N.createContext();function bV({children:t}){const[e,n]=N.useState({nickname:"",email:"",uid:"",isLoggedIn:!1,loading:!0,emailVerified:!1,phoneNumber:"",profileImage:"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,lastLoginAt:null,createdAt:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[]}),[r,i]=N.useState(null),[s,o]=N.useState(null);N.useEffect(()=>{let y=null,g=null;return(()=>{y=I3(cn,async x=>{var C,b,k;try{if(x){console.log("✅ Firebase 사용자 인증됨:",x.uid);let ee={};try{const Pe=await Xr(we(ae,"users",x.uid));if(ee=Pe.exists()?Pe.data():{},Pe.exists())try{await Qe(we(ae,"users",x.uid),{lastLoginAt:Ee()})}catch(ye){console.warn("⚠️ 로그인 시간 업데이트 실패 (무시됨):",ye)}else{console.log("🆕 새 사용자 프로필 생성 중...");const ye={nickname:x.displayName||((C=x.email)==null?void 0:C.split("@")[0])||"사용자",email:x.email||"",profileImage:x.photoURL||"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[],createdAt:Ee(),lastLoginAt:Ee()};await lw(we(ae,"users",x.uid),ye),ee=ye,console.log("✅ 새 사용자 프로필 생성 완료")}}catch(Pe){console.warn("⚠️ Firestore 작업 실패:",Pe),ee={nickname:x.displayName||((b=x.email)==null?void 0:b.split("@")[0])||"사용자",email:x.email||"",profileImage:x.photoURL||"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[],lastLoginAt:null,createdAt:null}}const xe={nickname:ee.nickname||x.displayName||((k=x.email)==null?void 0:k.split("@")[0])||"사용자",email:x.email||"",uid:x.uid,isLoggedIn:!0,loading:!1,emailVerified:x.emailVerified,phoneNumber:ee.phoneNumber||x.phoneNumber||"",profileImage:ee.profileImage||x.photoURL||"",address:ee.address||"",region:ee.region||"",district:ee.district||"",mannerScore:ee.mannerScore||36.5,transactionCount:ee.transactionCount||0,reviewCount:ee.reviewCount||0,favoriteCount:ee.favoriteCount||0,isVerified:ee.isVerified||!1,isBusiness:ee.isBusiness||!1,businessInfo:ee.businessInfo||null,lastLoginAt:ee.lastLoginAt,createdAt:ee.createdAt,preferences:ee.preferences||{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:ee.blockedUsers||[],following:ee.following||[],followers:ee.followers||[]};n(xe),o(ee),i(null),console.log("✅ 사용자 상태 업데이트 완료:",{uid:xe.uid,nickname:xe.nickname,isLoggedIn:xe.isLoggedIn}),window.location.pathname==="/login"&&(console.log("🔄 로그인 성공 - 홈으로 리다이렉트"),window.location.href="/")}else console.log("❌ 사용자 로그아웃됨"),n({nickname:"",email:"",uid:"",isLoggedIn:!1,loading:!1,emailVerified:!1,phoneNumber:"",profileImage:"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,lastLoginAt:null,createdAt:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[]}),o(null),i(null)}catch(ee){console.error("❌ 인증 상태 변경 처리 실패:",ee),i(ee),n(xe=>({...xe,loading:!1,isLoggedIn:!!xe.uid}))}}),g=mT(cn,async x=>{if(x)try{const C=await x.getIdToken(!0);console.log("Token refreshed successfully")}catch(C){console.error("Token refresh error:",C),i(C)}})})(),()=>{y&&y(),g&&g()}},[]);const a=async()=>{try{console.log("🚀 Google 로그인 시작..."),i(null);const g=(await kT(cn,Kx)).user;return console.log("✅ Google 로그인 성공:",{uid:g.uid,email:g.email,displayName:g.displayName}),new Promise(I=>{const x=()=>{e.isLoggedIn&&e.uid===g.uid?(console.log("✅ 사용자 상태 동기화 완료"),I(g)):setTimeout(x,100)};setTimeout(x,50),setTimeout(()=>{console.log("⏰ 인증 상태 동기화 타임아웃 - 로그인 성공으로 처리"),I(g)},5e3)})}catch(y){throw console.error("❌ Google 로그인 실패:",y),i(y),y}},u=async({email:y,password:g})=>{try{return(await g3(cn,y,g)).user}catch(I){throw console.error("Email login error:",I),I}},c=async({email:y,password:g,nickname:I,phone:x,address:C,region:b,district:k})=>{try{const ee=fn(gt(ae,"users"),Tn("nickname","==",I));if(!(await mi(ee)).empty)throw new Error("이미 사용 중인 닉네임입니다.");const Pe=await m3(cn,y,g);Pe.user&&await y3(Pe.user),await _3(Pe.user,{displayName:I});const ye=we(ae,"users",Pe.user.uid),Q={nickname:I,phoneNumber:x||"",email:y,address:C||"",region:b||"",district:k||"",profileImage:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[],createdAt:Ee(),lastLoginAt:Ee()};return await lw(ye,Q),console.log("✅ 회원가입 완료:",Q),Pe.user}catch(ee){throw console.error("❌ 회원가입 실패:",ee),ee}},d=async y=>{try{if(!e.uid)throw new Error("로그인이 필요합니다.");const g=we(ae,"users",e.uid);await Qe(g,{...y,updatedAt:Ee()}),n(I=>({...I,...y})),o(I=>({...I,...y})),console.log("✅ 프로필 업데이트 완료:",y)}catch(g){throw console.error("❌ 프로필 업데이트 실패:",g),g}},f=async(y,g,I)=>{await d({address:y,region:g,district:I})},m=async y=>{try{await p3(cn,y),console.log("✅ 비밀번호 재설정 이메일 발송 완료")}catch(g){throw console.error("❌ 비밀번호 재설정 실패:",g),g}},_=async(y,g)=>{try{const I=we(ae,"users",y);await Qe(I,{mannerScore:g,updatedAt:Ee()}),y===e.uid&&n(x=>({...x,mannerScore:g}))}catch(I){throw console.error("❌ 매너점수 업데이트 실패:",I),I}},T=async(y=null)=>{try{const g=y||e.uid,I=we(ae,"users",g);await Qe(I,{transactionCount:Zr(1),updatedAt:Ee()}),g===e.uid&&n(x=>({...x,transactionCount:x.transactionCount+1}))}catch(g){throw console.error("❌ 거래횟수 업데이트 실패:",g),g}},R=async(y,g=!0)=>{try{if(!e.uid)throw new Error("로그인이 필요합니다.");const I=we(ae,"users",e.uid),x={blockedUsers:g?Lf(y):Mf(y),updatedAt:Ee()};await Qe(I,x),n(C=>({...C,blockedUsers:g?[...C.blockedUsers,y]:C.blockedUsers.filter(b=>b!==y)})),console.log(g?"✅ 사용자 차단 완료":"✅ 사용자 차단해제 완료")}catch(I){throw console.error("❌ 사용자 차단 처리 실패:",I),I}},P=async(y,g=!0)=>{try{if(!e.uid)throw new Error("로그인이 필요합니다.");const I=we(ae,"users",e.uid),x=we(ae,"users",y);await Qe(I,{following:g?Lf(y):Mf(y),updatedAt:Ee()}),await Qe(x,{followers:g?Lf(e.uid):Mf(e.uid),updatedAt:Ee()}),n(C=>({...C,following:g?[...C.following,y]:C.following.filter(b=>b!==y)})),console.log(g?"✅ 팔로우 완료":"✅ 언팔로우 완료")}catch(I){throw console.error("❌ 팔로우 처리 실패:",I),I}},w=async y=>{try{const g=await Xr(we(ae,"users",y));return g.exists()?{id:y,...g.data()}:null}catch(g){throw console.error("❌ 사용자 정보 조회 실패:",g),g}},E=async y=>{try{const g=fn(gt(ae,"users"),Tn("nickname","==",y));return(await mi(g)).empty}catch(g){throw console.error("❌ 닉네임 중복 확인 실패:",g),g}},S=async()=>{try{await T3(cn),console.log("✅ 로그아웃 완료")}catch(y){throw console.error("❌ 로그아웃 실패:",y),y}},D=["음악왕","기타소년","피아노소녀","드럼짱","베이스킹","색소폰러버","플룻마스터","신디장인","보컬리더","밴드캡틴","재즈러버","락스타","힙합보이","클래식걸","EDM매니아","트로트신","포크싱어","뮤지션A","뮤지션B","뮤지션C"],M=Array.from({length:20}).map((y,g)=>({nickname:D[g],email:`user${g+1}@test.com`,password:`testpw${g+1}`})),V={user:e,userProfile:s,authError:r,users:M,loginWithGoogle:a,loginWithEmail:u,signupWithEmail:c,logout:S,updateUserProfile:d,updateAddress:f,resetPassword:m,updateMannerScore:_,incrementTransactionCount:T,blockUser:R,followUser:P,getUserInfo:w,checkNicknameAvailability:E,setAuthError:i};return A.jsx(Ns.Provider,{value:V,children:t})}const DV=B.header`
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  flex-shrink: 0;
  margin: 0 auto;
  height: 56px;
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-sm);
  
  @supports not (backdrop-filter: blur(8px)) {
    background: rgba(255, 255, 255, 0.95);
  }
`,NV=B.div`
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 100%;
  position: relative;
`;B.div`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  display: flex;
  align-items: center;
  gap: 4px;
`;B.span`
  font-size: 18px;
  color: #888;
  margin-left: 2px;
`;const jf=B.button`
  background: none;
  border: none;
  margin-left: var(--space-md);
  color: var(--color-text-secondary);
  font-size: 1.25rem;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  padding: var(--space-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--color-mint-main);
    background: var(--color-mint-accent);
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-mint-main);
    outline-offset: 2px;
  }
  
  @media (max-width: 480px) {
    margin-left: var(--space-sm);
    font-size: 1.125rem;
  }
`,VV=B.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: #2ed8b6;
  border-radius: 50%;
`,OV=B.span`
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1.5px;
  margin-right: var(--space-lg);
  font-family: "Inter", "Pretendard", sans-serif;
  user-select: none;
  flex-shrink: 0;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-right: var(--space-sm);
  }
`,Qx=B.button`
  margin-left: var(--space-md);
  padding: var(--space-sm) var(--space-lg);
  background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  font-size: 0.875rem;
  white-space: nowrap;
  min-width: 70px;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
  
  &:hover {
    background: linear-gradient(135deg, var(--color-mint-dark), #00a085);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    font-size: 0.8125rem;
    padding: var(--space-sm) var(--space-md);
    min-width: 60px;
    margin-left: var(--space-sm);
  }
`,LV=B(Qx)``;B.button`
  margin-left: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: linear-gradient(135deg, var(--color-orange), var(--color-orange-light));
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  font-size: 0.875rem;
  white-space: nowrap;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: var(--space-xs) var(--space-sm);
    margin-left: var(--space-xs);
    
    span {
      display: none; /* 모바일에서는 텍스트 숨기고 아이콘만 표시 */
    }
  }
`;function MV(){const t=Yo(),{user:e,logout:n}=N.useContext(Ns),[r,i]=N.useState(!1),s=N.useRef(null),[o,a]=N.useState({top:44,right:0});N.useEffect(()=>{if(r&&s.current){const d=s.current.getBoundingClientRect();a({top:d.bottom+4,right:window.innerWidth-d.right})}},[r]),N.useEffect(()=>{const d=f=>{if(r&&s.current&&!s.current.contains(f.target)){const m=document.querySelector("[data-dropdown-menu]");(!m||!m.contains(f.target))&&i(!1)}};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[r]);const u=()=>t("/login"),c=()=>{n(),t("/")};return A.jsx(DV,{children:A.jsxs(NV,{children:[A.jsx("div",{style:{display:"flex",alignItems:"center",flex:1},children:A.jsx(OV,{style:{cursor:"pointer"},onClick:()=>t("/"),children:"ECHO"})}),A.jsxs("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:[A.jsx(jf,{ref:s,onClick:()=>i(d=>!d),"aria-label":"메뉴 열기/닫기",children:A.jsx("svg",{width:"22",height:"22",fill:"none",stroke:"#222",strokeWidth:"2",viewBox:"0 0 24 24",children:A.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})})}),r&&A.jsxs("div",{"data-dropdown-menu":!0,style:{position:"fixed",top:o.top,right:o.right,background:"#fff",border:"1.5px solid #eee",borderRadius:10,boxShadow:"0 8px 32px rgba(0,0,0,0.15)",zIndex:9999,minWidth:140,padding:"8px 0",display:"flex",flexDirection:"column"},onClick:d=>d.stopPropagation(),children:[A.jsx("button",{style:{padding:"10px 18px",background:"none",border:"none",color:"#1a4740",fontWeight:600,fontSize:16,textAlign:"left",cursor:"pointer"},onClick:()=>{i(!1),t("/tuner/guitar")},children:"🎸 기타 튜너"}),A.jsx("button",{style:{padding:"10px 18px",background:"none",border:"none",color:"#1a4740",fontWeight:600,fontSize:16,textAlign:"left",cursor:"pointer"},onClick:()=>{i(!1),t("/tuner/bass")},children:"🎸 베이스 튜너"})]}),A.jsx(jf,{children:A.jsx(La,{size:20})}),A.jsxs(jf,{style:{position:"relative"},children:[A.jsx(yC,{size:20}),A.jsx(VV,{})]}),e.isLoggedIn?A.jsx(LV,{onClick:c,children:"로그아웃"}):A.jsx(Qx,{onClick:u,children:"로그인"})]})]})})}const FV=[{title:"야마하 FG800 통기타",description:"2021년 구매한 야마하 FG800 통기타입니다. 집에서만 연습용으로 사용했습니다. 생활기스 약간 있지만 소리는 깨끗합니다. 오리지널 소프트케이스 포함해서 드립니다. 서울 마포구에서 직거래만 원해요.",price:23e4,category:"guitar",condition:"good",region:"서울",district:"마포구",images:["https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=500&q=80","https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["야마하","통기타","FG800","어쿠스틱"],brand:"야마하",model:"FG800",isPriceNegotiable:!0,sellerNickname:"기타러버",showPhoneNumber:!0,sellerPhone:"01012345678",sellerVerified:!0},{title:"롤랜드 TD-1KV 전자드럼 세트",description:"2020년에 구매한 롤랜드 TD-1KV 전자드럼입니다. 집에서 연습용으로만 사용해서 상태 좋습니다. 모든 패드 정상 작동하고, 킥 페달도 부드럽게 잘 됩니다. 드럼 스틱, 헤드폰 포함해서 드려요. 부평역 근처에서 직거래만 가능합니다.",price:42e4,category:"drums",condition:"like-new",region:"인천",district:"부평구",images:["https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=500&q=80"],tags:["롤랜드","전자드럼","TD-1KV","드럼세트"],brand:"롤랜드",model:"TD-1KV",isPriceNegotiable:!1,sellerNickname:"드러머",showPhoneNumber:!1,sellerPhone:null,sellerVerified:!1},{title:"펜더 Player 텔레캐스터 일렉기타",description:"2019년 구매한 펜더 Player 시리즈 텔레캐스터입니다. 바디에 미세한 스크래치가 있지만 연주에는 전혀 문제 없습니다. 픽업 교체한 적 없고, 넥 상태도 매우 좋습니다. 오리지널 소프트케이스 포함. 부산 서면에서 직거래 희망합니다.",price:75e4,category:"guitar",condition:"good",region:"부산",district:"부산진구",images:["https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=500&q=80"],tags:["펜더","텔레캐스터","일렉기타","Player"],brand:"펜더",model:"Player Telecaster",isPriceNegotiable:!0,sellerNickname:"록커"},{title:"카시오 CT-X700 전자키보드",description:"거의 사용하지 않은 카시오 CT-X700 전자키보드입니다. 61건반, 600가지 음색, 195가지 리듬 지원됩니다. 어댑터, 보면대 포함하고 박스도 있어요. 대구 동구에서 직거래만 가능합니다.",price:18e4,category:"keyboard",condition:"like-new",region:"대구",district:"동구",images:["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80"],tags:["카시오","키보드","CT-X700","전자피아노"],brand:"카시오",model:"CT-X700",isPriceNegotiable:!0,sellerNickname:"피아니스트"},{title:"알토 색소폰 야나기사와 A-WO1",description:"야나기사와 A-WO1 알토 색소폰입니다. 2018년 구매, 동호회에서 가끔 사용했습니다. 정기적으로 수리점에서 점검받았고 상태 매우 양호합니다. 하드케이스, 마우스피스, 리드, 스트랩 모두 포함. 광주 서구 직거래.",price:12e5,category:"wind",condition:"good",region:"광주",district:"서구",images:["https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=500&q=80"],tags:["야나기사와","색소폰","알토색소폰","A-WO1"],brand:"야나기사와",model:"A-WO1",isPriceNegotiable:!0,sellerNickname:"재즈러버"},{title:"마샬 DSL40CR 기타 앰프",description:"마샬 DSL40CR 40W 진공관 앰프입니다. 2020년 구매, 집에서 연습용으로 사용했습니다. 클린톤과 드라이브톤 모두 훌륭하고 리버브도 좋습니다. 풋스위치 포함. 서울 강남구에서 직거래만 가능해요.",price:52e4,category:"audio",condition:"good",region:"서울",district:"강남구",images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["마샬","앰프","DSL40CR","진공관앰프"],brand:"마샬",model:"DSL40CR",isPriceNegotiable:!1,sellerNickname:"앰프매니아"},{title:"바이올린 4/4 독일제 수제품",description:"독일에서 직접 가져온 4/4 바이올린입니다. 수제품으로 소리가 정말 좋습니다. 활, 케이스, 턱받침 모두 포함되어 있고 상태 매우 좋아요. 서울 종로구에서 직거래 희망합니다.",price:68e4,category:"string",condition:"like-new",region:"서울",district:"종로구",images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["바이올린","독일제","수제품","4/4"],brand:"독일 수제품",model:"4/4 바이올린",isPriceNegotiable:!0,sellerNickname:"바이올리니스트"},{title:"우쿨렐레 카마카 HF-1 하와이안 코아",description:"정품 카마카 HF-1 콘서트 우쿨렐레입니다. 하와이안 코아 원목으로 만들어진 프리미엄 모델입니다. 2019년 구매, 케이스 포함해서 드려요. 톤이 정말 좋고 상태도 완벽합니다. 대전 유성구 직거래만.",price:32e4,category:"string",condition:"like-new",region:"대전",district:"유성구",images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["카마카","우쿨렐레","HF-1","하와이안코아"],brand:"카마카",model:"HF-1",isPriceNegotiable:!1,sellerNickname:"우쿨러버"}],vw=["기타러버","드러머","록커","피아니스트","재즈러버","앰프매니아","바이올리니스트","우쿨러버","음악매니아","연주자","뮤지션","하모니","멜로디","리듬","비트","코드","소울","블루스","클래식러버"],UV=()=>FV.map((t,e)=>({id:`dummy_${e}`,...t,viewCount:Math.floor(Math.random()*100)+1,likeCount:Math.floor(Math.random()*20)+1,chatCount:Math.floor(Math.random()*10)+1,status:"active",createdAt:new Date(Date.now()-Math.random()*1e3*60*60*24*7),sellerId:`dummy_seller_${e}`,sellerNickname:vw[e%vw.length],isDeliveryAvailable:Math.random()>.5,deliveryFee:Math.random()>.5?Math.floor(Math.random()*1e4)+3e3:0})),Yx=N.createContext();function jV({children:t}){const[e,n]=N.useState([]),[r,i]=N.useState(!0),[s,o]=N.useState(null),[a,u]=N.useState(!0),[c,d]=N.useState(null),[f,m]=N.useState({category:"",region:"",priceMin:"",priceMax:"",condition:"",sortBy:"latest",searchQuery:""}),[_,T]=N.useState([]),[R,P]=N.useState([]),{user:w}=N.useContext(Ns),E=N.useCallback(async($=!1)=>{try{i(!0),o(null);const z={...f,pageSize:20,lastDoc:$?null:c};console.log("🔍 상품 로드 중...",z);const G=await On.getProducts(z);let q=G.products;G.products.length===0&&$&&(console.log("📦 Firebase에 상품이 없어서 더미 데이터 로드"),q=UV()),$?(console.log("🔄 상품 목록 리셋, 새 상품:",q.length,"개"),n(q)):(console.log("➕ 상품 추가 로드:",q.length,"개"),n(J=>[...J,...q])),u(G.hasMore||q.length>0),d(G.lastDoc),console.log("✅ 상품 로드 완료:",q.length,"개")}catch(z){console.error("❌ 상품 로드 실패:",z),o(z.message||"상품을 불러오는데 실패했습니다.")}finally{i(!1)}},[f,c]);N.useEffect(()=>{console.log("🚀 앱 시작 - 초기 상품 로드"),d(null),E(!0)},[]),N.useEffect(()=>{console.log("🔧 필터 변경 - 상품 다시 로드"),d(null),E(!0)},[f.category,f.region,f.priceMin,f.priceMax,f.condition,f.sortBy]),N.useEffect(()=>{f.searchQuery.trim()&&(console.log("🔍 검색어 변경 - 상품 다시 로드:",f.searchQuery),d(null),E(!0))},[f.searchQuery]);const S=N.useCallback(()=>{!r&&a&&E(!1)},[r,a,E]);N.useEffect(()=>{console.log("👂 실시간 상품 구독 시작...");const $=CV.subscribeToProducts(z=>{console.log("🔄 실시간 업데이트:",z.length,"개"),n(G=>{console.log("📋 현재 상품 수:",G.length);let q=[...z].sort((J,U)=>{var Ae,et,He,Lt;const re=((et=(Ae=J.createdAt)==null?void 0:Ae.toDate)==null?void 0:et.call(Ae))||new Date(J.createdAt)||new Date;return(((Lt=(He=U.createdAt)==null?void 0:He.toDate)==null?void 0:Lt.call(He))||new Date(U.createdAt)||new Date)-re});if(f.category&&(q=q.filter(J=>J.category===f.category)),f.region&&(q=q.filter(J=>J.region===f.region)),f.condition&&(q=q.filter(J=>J.condition===f.condition)),f.priceMin&&(q=q.filter(J=>J.price>=parseInt(f.priceMin))),f.priceMax&&(q=q.filter(J=>J.price<=parseInt(f.priceMax))),f.searchQuery&&f.searchQuery.trim()){const J=f.searchQuery.toLowerCase();q=q.filter(U=>{var re,ce;return((re=U.title)==null?void 0:re.toLowerCase().includes(J))||((ce=U.description)==null?void 0:ce.toLowerCase().includes(J))})}switch(q=q.filter(J=>J.status!==Un.DELETED&&J.status!==Un.SUSPENDED),f.sortBy){case"price_low":q.sort((J,U)=>J.price-U.price);break;case"price_high":q.sort((J,U)=>U.price-J.price);break;case"popular":q.sort((J,U)=>(U.likeCount||0)-(J.likeCount||0));break}return console.log("✅ 필터링된 상품 수:",q.length),console.log("🔍 적용된 필터:",f),q})},{category:f.category});return()=>{console.log("👋 실시간 구독 해제"),$()}},[f]);const D=N.useCallback(async($=null)=>{try{const z=$||(w==null?void 0:w.uid);if(!z)return;console.log("👤 사용자 상품 로드 중...",z);const G=await On.getUserProducts(z);T(G),console.log("✅ 사용자 상품 로드 완료:",G.length,"개")}catch(z){console.error("❌ 사용자 상품 로드 실패:",z),o(z.message)}},[w]),M=N.useCallback(async $=>{var z;try{if(!(w!=null&&w.uid)||!(w!=null&&w.isLoggedIn))throw new Error("로그인이 필요합니다.");console.log("📝 상품 등록 중...",$),console.log("👤 사용자 정보:",w);const G={...$,sellerNickname:w.nickname||w.displayName||((z=w.email)==null?void 0:z.split("@")[0])||"익명",region:$.region||"",district:$.district||""};console.log("📋 최종 상품 데이터:",G);const q=await On.createProduct(G,w.uid);return console.log("✅ 상품 등록 완료:",q.id),n(J=>{var ce;console.log("📝 새 상품을 목록 맨 앞에 추가:",q.title);const re=[{...q,createdAt:new Date,updatedAt:new Date},...J].sort((Ae,et)=>{var Yt,Mt,Pr,Vs;const He=((Mt=(Yt=Ae.createdAt)==null?void 0:Yt.toDate)==null?void 0:Mt.call(Yt))||new Date(Ae.createdAt)||new Date;return(((Vs=(Pr=et.createdAt)==null?void 0:Pr.toDate)==null?void 0:Vs.call(Pr))||new Date(et.createdAt)||new Date)-He});return console.log("📅 새 상품이 첫 번째인지 확인:",((ce=re[0])==null?void 0:ce.title)===q.title),re}),_.length>0&&T(J=>[q,...J]),q}catch(G){throw console.error("❌ ProductContext 상품 등록 실패:",G),console.error("❌ 에러 상세:",{message:G.message,code:G.code,stack:G.stack}),G}},[w,_.length]),V=N.useCallback(async($,z)=>{try{if(!w)throw new Error("로그인이 필요합니다.");console.log("✏️ 상품 수정 중...",$),await On.updateProduct($,z);const G=q=>q.map(J=>J.id===$?{...J,...z,updatedAt:new Date}:J);n(G),T(G),console.log("✅ 상품 수정 완료")}catch(G){throw console.error("❌ 상품 수정 실패:",G),G}},[w]),y=N.useCallback(async $=>{try{if(!w)throw new Error("로그인이 필요합니다.");console.log("🗑️ 상품 삭제 중...",$),await On.updateProductStatus($,Un.DELETED),n(z=>z.filter(G=>G.id!==$)),T(z=>z.filter(G=>G.id!==$)),console.log("✅ 상품 삭제 완료")}catch(z){throw console.error("❌ 상품 삭제 실패:",z),z}},[w]),g=N.useCallback(async($,z,G={})=>{try{console.log("🔄 상품 상태 변경 중...",$,z),await On.updateProductStatus($,z,G);const q=J=>J.map(U=>U.id===$?{...U,status:z,...G,updatedAt:new Date}:U);n(q),T(q),console.log("✅ 상품 상태 변경 완료")}catch(q){throw console.error("❌ 상품 상태 변경 실패:",q),q}},[]),I=N.useCallback(async $=>{try{await On.incrementViewCount($,w==null?void 0:w.uid),n(z=>z.map(G=>G.id===$?w!=null&&w.uid&&G.sellerId===w.uid?G:{...G,viewCount:(G.viewCount||0)+1}:G)),console.log("✅ 조회수 증가 완료:",$)}catch(z){console.error("❌ 조회수 증가 실패:",z)}},[w]),x=N.useCallback(async $=>{try{if(!w)throw new Error("로그인이 필요합니다.");console.log("❤️ 찜하기 토글 중...",$);const z=await On.toggleLike($,w.uid);if(n(G=>G.map(q=>q.id===$?{...q,likeCount:q.likeCount+(z?1:-1),isLikedByUser:z}:q)),z){const G=e.find(q=>q.id===$);G&&P(q=>[{...G,isLikedByUser:!0},...q])}else P(G=>G.filter(q=>q.id!==$));return console.log("✅ 찜하기 토글 완료:",z?"추가":"제거"),z}catch(z){throw console.error("❌ 찜하기 실패:",z),z}},[w,e]),C=N.useCallback(async $=>{try{if(!w)throw new Error("로그인이 필요합니다.");console.log("⬆️ 상품 끌어올리기 중...",$),await On.bumpProduct($,w.uid),n(z=>{const G=z.findIndex(q=>q.id===$);if(G>0){const q=z[G],J=[...z];return J.splice(G,1),J.unshift({...q,lastBumpedAt:new Date}),J}return z}),console.log("✅ 상품 끌어올리기 완료")}catch(z){throw console.error("❌ 끌어올리기 실패:",z),z}},[w]),b=N.useCallback($=>{m(z=>({...z,...$})),d(null)},[]),k=N.useCallback($=>{b({searchQuery:$})},[b]),ee=N.useCallback(()=>{const $={};return Object.values(yw).forEach(z=>{$[z.id]=e.filter(G=>G.category===z.id&&G.status===Un.ACTIVE).length}),$},[e]),xe=N.useCallback(async $=>{try{await On.incrementChatCount($),n(z=>z.map(G=>G.id===$?{...G,chatCount:(G.chatCount||0)+1}:G))}catch(z){console.error("❌ 채팅 수 증가 실패:",z)}},[]),Pe=N.useCallback(()=>{o(null)},[]),ye=N.useCallback(()=>{d(null),E(!0)},[E]),Q={products:e,userProducts:_,likedProducts:R,loading:r,error:s,hasMore:a,filters:f,addProduct:M,updateProduct:V,deleteProduct:y,loadMoreProducts:S,refreshProducts:ye,incrementViews:I,incrementChatCount:xe,toggleLike:x,bumpProduct:C,changeProductStatus:g,updateFilters:b,searchProducts:k,loadUserProducts:D,getCategoryStats:ee,clearError:Pe,PRODUCT_STATUS:Un,INSTRUMENT_CATEGORIES:yw};return A.jsx(Yx.Provider,{value:Q,children:t})}const zV=B.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`,BV=B.div`
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.85);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: var(--space-lg) var(--space-xl) var(--space-sm);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  
  /* 글래스모피즘 효과 */
  background: linear-gradient(145deg, 
    rgba(255, 255, 255, 0.9) 0%, 
    rgba(255, 255, 255, 0.8) 100%);
`,$V=B.div`
  position: relative;
  margin-bottom: 12px;
`,qV=B.div`
  display: flex;
  align-items: center;
  background: var(--color-bg-glass);
  border: 1px solid ${t=>t.focused?"var(--color-mint-main)":"var(--color-border-light)"};
  border-radius: var(--radius-3xl);
  padding: var(--space-4) var(--space-6);
  transition: all var(--transition-normal);
  box-shadow: ${t=>t.focused?"var(--shadow-lg), var(--glow-mint)":"var(--shadow-md)"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transform: ${t=>t.focused?"translateY(-1px)":"translateY(0)"};
  position: relative;
  overflow: hidden;
  
  /* 글로우 효과 강화 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      var(--color-mint-glass) 0%, 
      transparent 50%, 
      var(--color-orange-glass) 100%);
    opacity: ${t=>t.focused?.7:0};
    transition: opacity var(--transition-normal);
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-mint-light);
    
    &::before {
      opacity: 0.3;
    }
  }
`,WV=B.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 1rem;
  margin-left: var(--space-sm);
  color: var(--color-text-primary);
  font-weight: 500;

  &::placeholder {
    color: var(--color-text-tertiary);
  }
`,HV=B.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 101;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
`,GV=B.div`
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #f5f5f5;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,KV=B.div`
  margin-bottom: 16px;
`,QV=B.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,YV=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,XV=B.div`
  background: #f0f0f0;
  color: #666;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    background: #e0e0e0;
  }
`,JV=B.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,Oi=B.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: 1px solid ${t=>t.active?"var(--color-mint-main)":"#e0e0e0"};
  border-radius: 16px;
  background: ${t=>t.active?"var(--color-mint-main)":"white"};
  color: ${t=>t.active?"white":"#666"};
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  min-width: fit-content;

  &:hover {
    border-color: var(--color-mint-main);
    color: ${t=>t.active?"white":"var(--color-mint-main)"};
  }
`,ZV=B.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`,eO=B.div`
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 20px 20px 0 0;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
  
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`,tO=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: white;
`,nO=B.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`,rO=B.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 4px;
`,iO=B.div`
  padding: 20px;
`,_w=B.div`
  margin-bottom: 24px;
`,ww=B.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`,sO=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,oO=B.button`
  padding: 8px 16px;
  border: 1px solid ${t=>t.selected?"var(--color-mint-main)":"#e0e0e0"};
  border-radius: 20px;
  background: ${t=>t.selected?"#fff5f2":"white"};
  color: ${t=>t.selected?"var(--color-mint-main)":"#666"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: var(--color-mint-main);
  }
`,aO=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`,Ew=B.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: var(--color-mint-main);
  }
`;B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
`;B.div`
  font-size: 14px;
  color: #666;
`;B.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
  
  &:hover {
    border-color: var(--color-mint-main);
    color: var(--color-mint-main);
  }
`;B.div`
  width: 100%;
  max-width: 500px;
  background: white;
  position: relative;
`;const lO=B.div`
  width: 100%;
  max-width: 500px;
  padding: 0 20px 120px;
`;B.section`
  margin-bottom: 32px;
`;B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;B.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;B.p`
  font-size: 14px;
  color: #6b7280;
  margin: 4px 0 0 0;
`;B.button`
  background: none;
  border: none;
  color: #2ed8b6;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 126, 54, 0.1);
  }
`;B.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0 8px;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;B.div`
  min-width: 280px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 12px;
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.98);
  }
`;B.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  background: #f5f5f5;
`;B.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;B.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, #2ed8b6, #26c4a8);
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 12px;
  margin-bottom: 4px;
  width: fit-content;
`;const uO=B.div`
  margin-top: 24px;
`,kr=B.div`
  display: flex;
  padding: var(--space-5);
  margin-bottom: var(--space-4);
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.85) 100%);
  border-radius: var(--radius-3xl);
  cursor: pointer;
  transition: all var(--transition-normal) var(--ease-out-cubic);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 
    0 8px 32px rgba(0, 217, 182, 0.04),
    0 2px 8px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  
  &:hover {
    transform: translateY(-6px) scale(1.025);
    box-shadow: 
      0 20px 60px rgba(0, 217, 182, 0.12),
      0 8px 32px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8),
      0 0 40px rgba(0, 217, 182, 0.08);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(255, 255, 255, 0.92) 100%);
    border-color: rgba(0, 217, 182, 0.25);
  }
  
  &:active {
    transform: translateY(-3px) scale(1.015);
    transition: all var(--transition-micro) var(--ease-out-quad);
    box-shadow: 
      0 12px 40px rgba(0, 217, 182, 0.08),
      0 4px 16px rgba(0, 0, 0, 0.06);
  }
  
  /* Enhanced micro-animations with mint theme */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(0, 217, 182, 0.02) 0%, 
      rgba(0, 217, 182, 0.08) 50%, 
      rgba(255, 126, 54, 0.04) 100%);
    opacity: 0;
    transition: opacity var(--transition-normal) var(--ease-out-cubic);
    border-radius: var(--radius-3xl);
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, 
      var(--color-mint-main), 
      var(--color-mint-light), 
      var(--color-orange));
    opacity: 0;
    border-radius: calc(var(--radius-3xl) + 2px);
    z-index: -1;
    transition: opacity var(--transition-normal) var(--ease-out-cubic);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover::after {
    opacity: 0.6;
  }
  
  position: relative;
  overflow: hidden;
  z-index: 2;
`,cO=B.div`
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  flex-shrink: 0;
  margin-right: var(--space-4);
  background: linear-gradient(135deg, 
    var(--color-mint-lightest) 0%, 
    var(--color-mint-bg) 100%);
  box-shadow: 
    inset 0 2px 8px rgba(0, 217, 182, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04);
  transition: all var(--transition-normal) var(--ease-out-cubic);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      transparent 0%, 
      rgba(0, 217, 182, 0.04) 50%, 
      transparent 100%);
    opacity: 0;
    transition: opacity var(--transition-normal);
    z-index: 2;
  }
  
  ${kr}:hover & {
    transform: scale(1.05);
    box-shadow: 
      inset 0 2px 12px rgba(0, 217, 182, 0.12),
      0 8px 24px rgba(0, 0, 0, 0.08);
      
    &::before {
      opacity: 1;
    }
  }
`,hO=B.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all var(--transition-slow) var(--ease-out-cubic);
  filter: contrast(1.02) saturate(1.05);
  
  ${kr}:hover & {
    transform: scale(1.08);
    filter: contrast(1.08) saturate(1.15) brightness(1.02);
  }
  
  &[loading] {
    background: linear-gradient(
      90deg,
      var(--color-mint-lightest) 25%,
      var(--color-mint-bg) 50%,
      var(--color-mint-lightest) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`,dO=B.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    var(--color-mint-lightest) 0%, 
    var(--color-mint-bg) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-mint-main);
  font-size: 28px;
  opacity: 0.6;
  transition: all var(--transition-normal);
  
  ${kr}:hover & {
    color: var(--color-mint-dark);
    opacity: 0.8;
    transform: scale(1.1);
  }
`,fO=B.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,pO=B.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-1) 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: -0.02em;
  transition: color var(--transition-fast);
  
  ${kr}:hover & {
    color: var(--color-text-primary);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
`,mO=B.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-2);
  font-weight: 500;
  
  svg {
    color: var(--color-mint-main);
    transition: color var(--transition-fast);
  }
  
  ${kr}:hover & {
    color: var(--color-text-secondary);
    
    svg {
      color: var(--color-mint-dark);
    }
  }
`,gO=B.div`
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-mint-dark);
  margin-bottom: var(--space-1);
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, 
    var(--color-mint-dark) 0%, 
    var(--color-mint-main) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all var(--transition-fast);
  
  ${kr}:hover & {
    background: linear-gradient(135deg, 
      var(--color-mint-main) 0%, 
      var(--color-orange) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateY(-1px);
  }
`,yO=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,vO=B.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  font-weight: 500;
  
  svg {
    color: var(--color-mint-light);
    transition: all var(--transition-fast);
  }
  
  ${kr}:hover & {
    color: var(--color-text-secondary);
    
    svg {
      color: var(--color-mint-main);
      transform: scale(1.1);
    }
  }
`,_O=B.button`
  background: ${t=>t.liked?"linear-gradient(135deg, var(--color-mint-main), var(--color-mint-light))":"rgba(255, 255, 255, 0.6)"};
  border: 1px solid ${t=>t.liked?"transparent":"var(--color-border-light)"};
  color: ${t=>t.liked?"white":"var(--color-text-tertiary)"};
  font-size: 16px;
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal) var(--ease-spring);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: ${t=>t.liked?"0 4px 12px rgba(0, 217, 182, 0.25)":"0 2px 6px rgba(0, 0, 0, 0.08)"};
  
  &:hover {
    color: ${t=>t.liked?"white":"var(--color-mint-main)"};
    background: ${t=>t.liked?"linear-gradient(135deg, var(--color-mint-dark), var(--color-mint-main))":"rgba(255, 255, 255, 0.9)"};
    border-color: var(--color-mint-light);
    transform: translateY(-2px) scale(1.1);
    box-shadow: ${t=>t.liked?"0 8px 20px rgba(0, 217, 182, 0.35)":"0 4px 12px rgba(0, 217, 182, 0.15)"};
  }
  
  &:active {
    transform: translateY(0) scale(1.05);
    transition: all var(--transition-micro);
  }
`,wO=B.div`
  background: ${t=>{switch(t.type){case"urgent":return"linear-gradient(135deg, #ff4757, #ff3742)";case"new":return"linear-gradient(135deg, var(--color-mint-main), var(--color-mint-light))";case"hot":return"linear-gradient(135deg, var(--color-orange), #ff6b35)";default:return"linear-gradient(135deg, var(--color-mint-light), var(--color-mint-main))"}}};
  color: white;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-xl);
  font-size: var(--text-xs);
  font-weight: 700;
  margin-right: var(--space-1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px ${t=>{switch(t.type){case"urgent":return"rgba(255, 71, 87, 0.3)";case"new":return"rgba(0, 217, 182, 0.3)";case"hot":return"rgba(255, 126, 54, 0.3)";default:return"rgba(0, 217, 182, 0.3)"}}};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: all var(--transition-fast);
  
  ${kr}:hover & {
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 4px 12px ${t=>{switch(t.type){case"urgent":return"rgba(255, 71, 87, 0.4)";case"new":return"rgba(0, 217, 182, 0.4)";case"hot":return"rgba(255, 126, 54, 0.4)";default:return"rgba(0, 217, 182, 0.4)"}}};
  }
`,EO=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl);
  gap: var(--space-lg);
`,IO=B.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-border-light);
  border-top: 3px solid var(--color-mint-main);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,TO=B.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
`,xO=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl) var(--space-xl);
  text-align: center;
  gap: var(--space-lg);
  
  h3 {
    color: var(--color-text-secondary);
    font-size: 1.125rem;
    margin: 0;
  }
  
  p {
    color: var(--color-text-tertiary);
    font-size: 0.875rem;
    margin: 0;
  }
  
  svg {
    color: var(--color-text-tertiary);
    opacity: 0.5;
  }
`,SO=B.button`
  position: fixed;
  bottom: 80px; /* 하단 네비게이션 바(64px) + 여백(16px) */
  right: calc(50vw - 250px + 5px); /* 리스트 섹션(500px) 우측 끝에서 5px 안쪽 */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-mint-main) 0%, var(--color-mint-dark) 100%);
  border: none;
  color: var(--color-text-inverse);
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: var(--shadow-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60; /* 하단 네비게이션보다 위 */
  transition: all var(--transition-normal);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
    z-index: -1;
    transition: all var(--transition-normal);
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.08);
    box-shadow: 0 20px 40px rgba(0, 217, 182, 0.4);
    
    &::before {
      transform: scale(1.15);
      opacity: 0.8;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.04);
    box-shadow: var(--shadow-lg);
  }
  
  &:focus-visible {
    outline: 3px solid rgba(0, 217, 182, 0.3);
    outline-offset: 3px;
  }
  
  /* 모바일에서는 화면 우측 기준으로 */
  @media (max-width: 500px) {
    right: var(--space-lg);
    bottom: 75px;
  }
`,AO=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  
  h3 {
    color: #333;
    font-size: 18px;
    margin: 16px 0 8px;
  }
  
  p {
    color: #666;
    font-size: 14px;
    margin-bottom: 20px;
  }
`,RO=B.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #e55555;
  }
`,kO=B.button`
  background: var(--color-mint-main);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
`;function PO(){const t=Yo(),{products:e,loading:n,error:r,hasMore:i,filters:s,updateFilters:o,searchProducts:a,loadMoreProducts:u,toggleLike:c,INSTRUMENT_CATEGORIES:d}=N.useContext(Yx),{user:f}=N.useContext(Ns),[m,_]=N.useState(!1),[T,R]=N.useState(""),[P,w]=N.useState([]),[E,S]=N.useState([]),[D,M]=N.useState(!1),[V,y]=N.useState(s),[g,I]=N.useState("latest"),x=N.useRef(null),C=N.useRef(null);N.useEffect(()=>{const U=localStorage.getItem("recentSearches");U&&S(JSON.parse(U))},[]),N.useEffect(()=>{if(T.length>0){const U=[];Object.values(d).forEach(re=>{re.name.toLowerCase().includes(T.toLowerCase())&&U.push({type:"category",text:re.name,value:re.id})}),e.forEach(re=>{re.title.toLowerCase().includes(T.toLowerCase())&&U.length<5&&U.push({type:"product",text:re.title,value:re.title})}),w(U)}else w([])},[T,e,d]),N.useEffect(()=>{if(C.current){const U=new IntersectionObserver(re=>{re[0].isIntersecting&&i&&!n&&u()},{threshold:.1});return U.observe(C.current),()=>U.disconnect()}},[i,n,u]);const b=N.useCallback(U=>{if(U.trim()){const re=[U,...E.filter(ce=>ce!==U)].slice(0,10);S(re),localStorage.setItem("recentSearches",JSON.stringify(re)),a(U),R(U),_(!1)}},[E,a]),k=U=>{U.type==="category"?(o({category:U.value,searchQuery:""}),R("")):b(U.text),_(!1)},ee=()=>{o(V),M(!1)},xe=()=>{const U={category:"",region:"",priceMin:"",priceMax:"",condition:"",sortBy:"latest",searchQuery:""};y(U),o(U),M(!1)},Pe=()=>{S([]),localStorage.removeItem("recentSearches")},ye=()=>e.filter(U=>U.status==="active").map(U=>({...U,popularityScore:(U.viewCount||0)*1+(U.likeCount||0)*3+(U.chatCount||0)*2})).sort((U,re)=>re.popularityScore-U.popularityScore).slice(0,10),Q=()=>e.filter(U=>U.status==="active").sort((U,re)=>{var et,He;const ce=(et=U.createdAt)!=null&&et.toDate?U.createdAt.toDate():new Date(U.createdAt);return((He=re.createdAt)!=null&&He.toDate?re.createdAt.toDate():new Date(re.createdAt))-ce}).slice(0,8),$=()=>{if(!f.isLoggedIn)return ye().slice(0,6);const U=e.filter(ce=>ce.isLikedByUser),re=[...new Set(U.map(ce=>ce.category))];return re.length===0?ye().slice(0,6):e.filter(ce=>ce.status==="active"&&!ce.isLikedByUser&&ce.sellerId!==f.uid&&re.includes(ce.category)).sort((ce,Ae)=>(Ae.viewCount||0)-(ce.viewCount||0)).slice(0,6)};ye(),Q(),$();const z=U=>U>=1e4?`${Math.floor(U/1e4)}만원`:`${U.toLocaleString()}원`,G=U=>{if(!U)return"";const re=new Date,ce=U.toDate?U.toDate():new Date(U),Ae=re-ce,et=Math.floor(Ae/6e4),He=Math.floor(Ae/36e5),Lt=Math.floor(Ae/864e5);return et<1?"방금 전":et<60?`${et}분 전`:He<24?`${He}시간 전`:Lt<7?`${Lt}일 전`:ce.toLocaleDateString()},q=U=>U.viewCount>100?{type:"hot",text:"인기"}:U.priceNegotiable?{type:"urgent",text:"급처"}:null,J=Object.values(s).filter(U=>U&&U!=="").length;return A.jsxs(zV,{className:"main-content",children:[A.jsx(MV,{}),A.jsxs(BV,{children:[A.jsxs($V,{children:[A.jsxs(qV,{focused:m,children:[A.jsx(La,{color:"#999"}),A.jsx(WV,{ref:x,placeholder:"어떤 악기를 찾고 계신가요?",value:T,onChange:U=>R(U.target.value),onFocus:()=>_(!0),onKeyPress:U=>{U.key==="Enter"&&b(T)}}),T&&A.jsx(fc,{color:"#999",style:{cursor:"pointer"},onClick:()=>{R(""),_(!1),s.searchQuery&&o({searchQuery:""})}})]}),m&&A.jsx(HV,{children:P.length>0?P.map((U,re)=>A.jsxs(GV,{onClick:()=>k(U),children:[U.type==="category"?A.jsx(wC,{}):A.jsx(La,{}),U.text]},re)):E.length>0&&A.jsxs(KV,{children:[A.jsxs(QV,{children:["최근 검색어",A.jsx("button",{onClick:Pe,style:{background:"none",border:"none",color:"#999",fontSize:"12px",cursor:"pointer"},children:"전체삭제"})]}),A.jsx(YV,{children:E.slice(0,5).map((U,re)=>A.jsxs(XV,{onClick:()=>b(U),children:[A.jsx(_C,{}),U]},re))})]})})]}),A.jsxs(JV,{children:[A.jsxs(Oi,{active:J>0,onClick:()=>M(!0),children:[A.jsx(xC,{}),"필터 ",J>0&&`(${J})`]}),A.jsx(Oi,{active:s.category==="guitar",onClick:()=>o({category:s.category==="guitar"?"":"guitar"}),children:"기타"}),A.jsx(Oi,{active:s.category==="piano",onClick:()=>o({category:s.category==="piano"?"":"piano"}),children:"피아노"}),A.jsx(Oi,{active:s.category==="drums",onClick:()=>o({category:s.category==="drums"?"":"drums"}),children:"드럼"}),A.jsx(Oi,{active:s.category==="wind",onClick:()=>o({category:s.category==="wind"?"":"wind"}),children:"관악기"}),A.jsx(Oi,{active:s.category==="audio",onClick:()=>o({category:s.category==="audio"?"":"audio"}),children:"오디오"}),A.jsxs(Oi,{onClick:()=>{const U=g==="latest"?"price":"latest";I(U),o({sortBy:U})},children:[A.jsx(CC,{}),g==="latest"?"최신순":"가격순"]})]})]}),A.jsxs(lO,{children:[A.jsxs(uO,{children:[r?A.jsxs(AO,{children:[A.jsx(fc,{size:48,color:"#2ed8b6"}),A.jsx("h3",{children:"문제가 발생했습니다"}),A.jsx("p",{children:r}),A.jsx(RO,{onClick:()=>window.location.reload(),children:"다시 시도"})]}):n&&e.length===0?A.jsxs(EO,{children:[A.jsx(IO,{}),A.jsx(TO,{children:"상품을 불러오는 중..."})]}):e.length===0?A.jsxs(xO,{children:[A.jsx(La,{size:48,color:"#ddd"}),A.jsx("h3",{children:"등록된 상품이 없습니다"}),A.jsx("p",{children:"첫 번째 상품을 등록해보세요!"}),A.jsxs(kO,{onClick:()=>t("/add"),children:[A.jsx(w1,{}),"상품 등록하기"]})]}):e.map(U=>{const re=q(U);return A.jsxs(kr,{className:"ProductCard",onClick:()=>t(`/product/${U.id}`),children:[A.jsx(cO,{children:U.images&&U.images.length>0?A.jsx(hO,{src:U.images[0],alt:U.title,loading:"lazy"}):A.jsx(dO,{children:A.jsx(La,{})})}),A.jsxs(fO,{children:[A.jsxs("div",{children:[A.jsxs(mO,{children:[re&&A.jsx(wO,{type:re.type,children:re.text}),A.jsx(AC,{}),U.region," ",U.district,A.jsx("span",{children:"•"}),G(U.createdAt)]}),A.jsx(pO,{children:U.title}),A.jsx(gO,{children:z(U.price)})]}),A.jsxs(yO,{children:[A.jsxs(vO,{children:[A.jsx(TC,{})," ",U.viewCount||0,A.jsx(_1,{})," ",U.likeCount||0,A.jsx(EC,{})," ",U.chatCount||0]}),A.jsx(_O,{liked:U.isLikedByUser,onClick:ce=>{ce.stopPropagation(),f!=null&&f.isLoggedIn?c(U.id):t("/login")},children:U.isLikedByUser?A.jsx(_1,{}):A.jsx(DC,{})})]})]})]},U.id)}),i&&A.jsx("div",{ref:C,style:{height:"1px"}})]}),A.jsx(SO,{onClick:()=>t("/add"),"aria-label":"상품 등록하기",title:"상품 등록하기",children:A.jsx(w1,{})})]}),D&&A.jsx(ZV,{onClick:()=>M(!1),children:A.jsxs(eO,{onClick:U=>U.stopPropagation(),children:[A.jsxs(tO,{children:[A.jsx(nO,{children:"필터"}),A.jsx(rO,{onClick:()=>M(!1),children:A.jsx(fc,{})})]}),A.jsxs(iO,{children:[A.jsxs(_w,{children:[A.jsx(ww,{children:"가격대"}),A.jsxs(aO,{children:[A.jsx(Ew,{type:"number",placeholder:"최소 금액",value:V.priceMin,onChange:U=>y(re=>({...re,priceMin:U.target.value}))}),A.jsx("span",{children:"~"}),A.jsx(Ew,{type:"number",placeholder:"최대 금액",value:V.priceMax,onChange:U=>y(re=>({...re,priceMax:U.target.value}))})]})]}),A.jsxs(_w,{children:[A.jsx(ww,{children:"상품 상태"}),A.jsx(sO,{children:["excellent","good","fair","poor"].map(U=>A.jsxs(oO,{selected:V.condition===U,onClick:()=>y(re=>({...re,condition:re.condition===U?"":U})),children:[U==="excellent"&&"매우 좋음",U==="good"&&"좋음",U==="fair"&&"보통",U==="poor"&&"나쁨"]},U))})]}),A.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"24px",paddingTop:"20px",borderTop:"1px solid #f0f0f0"},children:[A.jsx("button",{onClick:xe,style:{flex:1,padding:"12px",border:"1px solid #e0e0e0",borderRadius:"8px",background:"white",color:"#666",cursor:"pointer"},children:"초기화"}),A.jsx("button",{onClick:ee,style:{flex:2,padding:"12px",border:"none",borderRadius:"8px",background:"var(--color-mint-main)",color:"white",cursor:"pointer",fontWeight:"600"},children:"적용하기"})]})]})]})})]})}function A7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(t)}function R7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(t)}function k7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"},child:[]}]})(t)}function P7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(t)}function C7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(t)}function b7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(t)}function CO(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(t)}function bO(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function D7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(t)}function DO(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function NO(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(t)}function N7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(t)}function V7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(t)}function O7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(t)}function L7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(t)}function M7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function F7(t){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}function VO(t){return Z({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(t)}function OO(t){return Z({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z"},child:[]}]})(t)}function LO(t){return Z({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4 64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 50.5 8.4 38.5 21.1 33.9z"},child:[]}]})(t)}const Iw=B.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: var(--color-bg-primary);
  box-sizing: border-box;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-2xl);
  
  @media (max-width: 480px) {
    box-shadow: none;
    border-radius: 0;
    padding: var(--space-lg);
  }
`,Tw=B.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-mint-main);
  margin-bottom: var(--space-xl);
  background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,MO=B.h1`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin-bottom: 2em;
  text-align: center;
`,FO=B.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 2em;
  box-sizing: border-box;
`,xw=B.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`,Sw=B.input`
  width: 100%;
  height: 50px;
  padding: 0 1rem 0 3rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  font-size: 1rem;
  outline: none;
  transition: all var(--transition-fast);
  background: var(--color-bg-secondary);
  box-sizing: border-box;
  color: var(--color-text-primary);

  &:focus {
    border-color: var(--color-mint-main);
    background: var(--color-bg-primary);
    box-shadow: 0 0 0 3px rgba(0, 217, 182, 0.1);
  }

  &::placeholder {
    color: var(--color-text-tertiary);
  }
`,Aw=B.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,UO=B.button`
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`,jO=B.button`
  width: 100%;
  height: 50px;
  background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius-xl);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  margin-top: var(--space-md);
  box-sizing: border-box;
  box-shadow: var(--shadow-md);

  &:hover {
    background: linear-gradient(135deg, var(--color-mint-dark), #00a085);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,zO=B.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2em 0;
  color: #999;
  font-size: 14px;
  box-sizing: border-box;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }

  span {
    padding: 0 1em;
  }
`,zf=B.button`
  width: 100%;
  height: 50px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 1em;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  &:active {
    transform: translateY(0);
  }

  &.google {
    color: #222;
    background: #fff;
  }

  &.kakao {
    background: #fee500;
    border-color: #fee500;
    color: #000000;
  }

  &.naver {
    background: #03c75a;
    border-color: #03c75a;
    color: white;
  }
`,BO=B.p`
  margin-top: 2em;
  color: #666;
  font-size: 14px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  a {
    color: var(--color-mint-main);
    text-decoration: none;
    font-weight: 600;
    margin-left: 0.5em;

    &:hover {
      text-decoration: underline;
    }
  }
`,$O=B.p`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 1em;
`,qO=B.div`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-top: 2em;
`;function WO(){const{user:t,loginWithEmail:e}=N.useContext(Ns),n=Yo(),[r,i]=N.useState(!1),[s,o]=N.useState({email:"",password:""}),[a,u]=N.useState(""),[c,d]=N.useState(!1),f=R=>{const{name:P,value:w}=R.target;o(E=>({...E,[P]:w})),u("")};N.useEffect(()=>{(async()=>{try{const P=await c6(cn);P!=null&&P.user&&(console.log("Redirect login successful:",P.user),n("/",{replace:!0}))}catch(P){console.error("Redirect login error:",P),m(P)}})()},[n]),N.useEffect(()=>{!t.loading&&t.isLoggedIn&&n("/",{replace:!0})},[t.loading,t.isLoggedIn,n]);const m=R=>{switch(console.error("Auth error details:",{code:R.code,message:R.message,email:R.email,credential:R.credential}),R.code){case"auth/popup-blocked":alert("팝업이 차단되어 구글 로그인을 진행할 수 없습니다. 브라우저의 팝업 차단을 해제해 주세요.");break;case"auth/cancelled-popup-request":case"auth/popup-closed-by-user":console.log("Login popup was cancelled by user");break;case"auth/unauthorized-domain":alert("현재 도메인에서 구글 로그인이 허용되지 않았습니다. 개발자에게 문의해주세요.");break;default:alert(`구글 로그인 중 오류가 발생했습니다. (${R.code})`)}},_=async R=>{if(R.preventDefault(),!c){d(!0),u("");try{console.log("Starting Google login...");const P=await kT(cn,Kx);console.log("Google login successful:",P),P.user&&(console.log("Redirecting to main page..."),window.location.href="/")}catch(P){console.error("Google login error:",P),P.code==="auth/popup-blocked"?alert("팝업이 차단되어 구글 로그인을 진행할 수 없습니다. 브라우저의 팝업 차단을 해제해 주세요."):P.code==="auth/cancelled-popup-request"||P.code==="auth/popup-closed-by-user"?console.log("Login popup was cancelled by user"):P.code==="auth/unauthorized-domain"?alert("현재 도메인에서 구글 로그인이 허용되지 않았습니다. 개발자에게 문의해주세요."):alert(`구글 로그인 중 오류가 발생했습니다. (${P.code})`)}finally{d(!1)}}},T=async R=>{if(R.preventDefault(),!c){d(!0),u("");try{await e(s),console.log("Email login successful, redirecting..."),window.location.href="/"}catch(P){console.error("Login error:",P),u("로그인에 실패했습니다: "+P.message)}finally{d(!1)}}};return t.loading?A.jsxs(Iw,{children:[A.jsx(Tw,{children:"ECHO"}),A.jsx(qO,{children:"로딩중..."})]}):t.isLoggedIn?null:A.jsxs(Iw,{children:[A.jsx(Tw,{children:"ECHO"}),A.jsx(MO,{children:"로그인"}),A.jsxs(FO,{onSubmit:T,children:[A.jsxs(xw,{children:[A.jsx(Aw,{children:A.jsx(NO,{size:20})}),A.jsx(Sw,{type:"email",name:"email",placeholder:"이메일",value:s.email,onChange:f,disabled:c})]}),A.jsxs(xw,{children:[A.jsx(Aw,{children:A.jsx(DO,{size:20})}),A.jsx(Sw,{type:r?"text":"password",name:"password",placeholder:"비밀번호",value:s.password,onChange:f,disabled:c}),A.jsx(UO,{type:"button",onClick:()=>i(!r),children:r?A.jsx(CO,{size:20}):A.jsx(bO,{size:20})})]}),a&&A.jsx($O,{children:a}),A.jsx(jO,{type:"submit",disabled:c,children:c?"로그인 중...":"로그인"})]}),A.jsx(zO,{children:A.jsx("span",{children:"또는"})}),A.jsxs(zf,{className:"google",onClick:_,children:[A.jsx(VO,{size:24}),"Google로 로그인"]}),A.jsxs(zf,{className:"kakao",children:[A.jsx(OO,{size:24}),"카카오로 로그인"]}),A.jsxs(zf,{className:"naver",children:[A.jsx(LO,{size:24}),"네이버로 로그인"]}),A.jsxs(BO,{children:["계정이 없으신가요?",A.jsx(oP,{to:"/signup",children:"회원가입"})]})]})}const HO=N.lazy(()=>lt(()=>import("./Signup-OeVLIdEO.js"),[])),GO=N.lazy(()=>lt(()=>import("./SetLocation-O15cE5r0.js"),[])),Rw=N.lazy(()=>lt(()=>import("./ProductRegister-n9EgzB7f.js"),[])),KO=N.lazy(()=>lt(()=>import("./ProductDetail-BzLjybvV.js"),[])),QO=N.lazy(()=>lt(()=>import("./ChatRoom-B1Guf6Vw.js"),[])),YO=N.lazy(()=>lt(()=>import("./MyPage-DzBuHtXT.js"),[])),XO=N.lazy(()=>lt(()=>import("./MusicLife-DeUXzqqo.js"),[])),JO=N.lazy(()=>lt(()=>import("./MusicLifeDetail-B_V0CYDS.js"),[])),ZO=N.lazy(()=>lt(()=>import("./MusicLifeWrite-CU0TT9rV.js"),[])),eL=N.lazy(()=>lt(()=>import("./Map-B76mn2u_.js"),[])),tL=N.lazy(()=>lt(()=>import("./ChatList-4YvvK4QM.js"),[]));N.lazy(()=>lt(()=>import("./AddProduct-D5Kw7JAd.js"),[]));const nL=N.lazy(()=>lt(()=>import("./GuitarTuner-C4-tdOar.js"),[])),rL=N.lazy(()=>lt(()=>import("./BassTuner-B_oud2Xh.js"),[])),iL=N.lazy(()=>lt(()=>import("./SalesHistory---0CCU90.js"),[])),sL=N.lazy(()=>lt(()=>import("./EchoShare-4RPCOI0X.js"),[])),oL=N.lazy(()=>lt(()=>import("./PaymentSuccess-05IKKZh9.js"),[])),aL=N.lazy(()=>lt(()=>import("./PaymentFail-fkKc_mtO.js"),[])),lL=N.lazy(()=>lt(()=>import("./WishList-DPDFG_yG.js"),[])),uL=N.lazy(()=>lt(()=>import("./PhoneRegister-CNDthgnn.js"),[])),cL=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
`,hL=B.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-border-light);
  border-top: 3px solid var(--color-mint-main);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,dL=B.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
`,fL=()=>A.jsxs(cL,{children:[A.jsx(hL,{}),A.jsx(dL,{children:"페이지를 불러오는 중..."})]});function pL(){return A.jsx(N.Suspense,{fallback:A.jsx(fL,{}),children:A.jsxs(Qk,{children:[A.jsx(je,{path:"/",element:A.jsx(PO,{})}),A.jsx(je,{path:"/login",element:A.jsx(WO,{})}),A.jsx(je,{path:"/signup",element:A.jsx(HO,{})}),A.jsx(je,{path:"/set-location",element:A.jsx(GO,{})}),A.jsx(je,{path:"/register",element:A.jsx(Rw,{})}),A.jsx(je,{path:"/add",element:A.jsx(Rw,{})}),A.jsx(je,{path:"/product/:id",element:A.jsx(KO,{})}),A.jsx(je,{path:"/chat/:chatRoomId",element:A.jsx(QO,{})}),A.jsx(je,{path:"/chat",element:A.jsx(tL,{})}),A.jsx(je,{path:"/mypage",element:A.jsx(YO,{})}),A.jsx(je,{path:"/mypage/sales",element:A.jsx(iL,{})}),A.jsx(je,{path:"/musiclife",element:A.jsx(XO,{})}),A.jsx(je,{path:"/musiclife/write",element:A.jsx(ZO,{})}),A.jsx(je,{path:"/musiclife/:id",element:A.jsx(JO,{})}),A.jsx(je,{path:"/map",element:A.jsx(eL,{})}),A.jsx(je,{path:"/tuner/guitar",element:A.jsx(nL,{})}),A.jsx(je,{path:"/tuner/bass",element:A.jsx(rL,{})}),A.jsx(je,{path:"/echo-share",element:A.jsx(sL,{})}),A.jsx(je,{path:"/payment/success",element:A.jsx(oL,{})}),A.jsx(je,{path:"/payment/fail",element:A.jsx(aL,{})}),A.jsx(je,{path:"/wishlist",element:A.jsx(lL,{})}),A.jsx(je,{path:"/profile/phone",element:A.jsx(uL,{})})]})})}const Xx=N.createContext();function mL({children:t}){const{user:e,getUserInfo:n}=N.useContext(Ns),[r,i]=N.useState([]),[s,o]=N.useState({}),[a,u]=N.useState(null),[c,d]=N.useState(!1),[f,m]=N.useState(0);N.useEffect(()=>{if(!e.isLoggedIn||!e.uid){i([]),o({}),u(null),m(0);return}const V=fn(gt(ae,"chatRooms"),Tn("participants","array-contains",e.uid),pi("lastMessageAt","desc")),y=Ah(V,g=>{const I=[];g.forEach(C=>{I.push({id:C.id,...C.data()})}),i(I);const x=I.reduce((C,b)=>{var ee;const k=((ee=b.unreadCount)==null?void 0:ee[e.uid])||0;return C+k},0);m(x)});return()=>y()},[e.isLoggedIn,e.uid]);const _=V=>{if(!V)return null;const y=fn(gt(ae,"chatRooms",V,"messages"),pi("createdAt","desc"),Sh(50));return Ah(y,g=>{const I=[];g.forEach(x=>{I.push({id:x.id,...x.data()})}),o(x=>({...x,[V]:I.reverse()}))})},T=async(V,y,g,I)=>{try{d(!0),console.log("🔄 채팅방 생성/조회 시작:",{productId:V,sellerId:y,buyerId:g});const x=fn(gt(ae,"chatRooms"),Tn("productId","==",V),Tn("participants","array-contains",y)),C=await mi(x);let b=null;if(C.forEach(ye=>{const Q=ye.data();Q.participants&&Q.participants.length===2&&Q.participants.includes(y)&&Q.participants.includes(g)&&(b=ye)}),b)return console.log("✅ 기존 채팅방 발견:",b.id),b.id;let k,ee;try{[k,ee]=await Promise.all([n(y),n(g)])}catch(ye){console.warn("⚠️ 사용자 정보 조회 실패, 기본값 사용:",ye),k={nickname:"판매자",profileImage:""},ee={nickname:"구매자",profileImage:""}}console.log("📋 채팅방 생성 정보:",{productId:V,sellerId:y,buyerId:g,sellerInfo:k==null?void 0:k.nickname,buyerInfo:ee==null?void 0:ee.nickname});const xe={productId:V,participants:[y,g].sort(),participantInfo:{[y]:{userId:y,role:"seller",nickname:(k==null?void 0:k.nickname)||"판매자",profileImage:(k==null?void 0:k.profileImage)||""},[g]:{userId:g,role:"buyer",nickname:(ee==null?void 0:ee.nickname)||"구매자",profileImage:(ee==null?void 0:ee.profileImage)||""}},productInfo:{id:V,title:I.title,price:I.price,images:I.images||[],status:I.status||"active"},lastMessage:"",lastMessageAt:Ee(),unreadCount:{[y]:0,[g]:0},isActive:!0,createdAt:Ee()},Pe=await Jr(gt(ae,"chatRooms"),xe);console.log("✅ 새 채팅방 생성 완료:",Pe.id),await Jr(gt(ae,"chatRooms",Pe.id,"messages"),{type:"system",content:"채팅이 시작되었습니다. 안전한 거래를 위해 서로 예의를 지켜주세요.",createdAt:Ee(),isRead:!1});try{await On.incrementChatCount(V),console.log("✅ 새 채팅방 생성으로 인한 채팅 수 증가:",V)}catch(ye){console.error("❌ 채팅 수 증가 실패:",ye)}return console.log("🎉 채팅방 생성 프로세스 완료:",Pe.id),Pe.id}catch(x){throw console.error("채팅방 생성 실패:",x),x}finally{d(!1)}},R=async(V,y,g="text")=>{var I,x,C;try{if(!y.trim()||!V||!e.uid)return;const b=(I=r.find(xe=>xe.id===V))==null?void 0:I.participants.find(xe=>xe!==e.uid),k={senderId:e.uid,senderInfo:{nickname:e.nickname,profileImage:e.profileImage},content:y.trim(),type:g,createdAt:Ee(),isRead:!1};await Jr(gt(ae,"chatRooms",V,"messages"),k);const ee=we(ae,"chatRooms",V);await Qe(ee,{lastMessage:g==="image"?"사진":y.trim(),lastMessageAt:Ee(),[`unreadCount.${b}`]:(((C=(x=r.find(xe=>xe.id===V))==null?void 0:x.unreadCount)==null?void 0:C[b])||0)+1}),console.log("✅ 메시지 전송 완료")}catch(b){throw console.error("❌ 메시지 전송 실패:",b),b}},P=async V=>{try{if(!V||!e.uid)return;const y=we(ae,"chatRooms",V);await Qe(y,{[`unreadCount.${e.uid}`]:0}),console.log("✅ 메시지 읽음 처리 완료")}catch(y){console.error("❌ 메시지 읽음 처리 실패:",y)}},M={chatRooms:r,messages:s,currentChat:a,loading:c,unreadCount:f,createOrGetChatRoom:T,sendMessage:R,markMessagesAsRead:P,leaveChatRoom:async V=>{try{if(!V||!e.uid)return;const y=we(ae,"chatRooms",V);await Qe(y,{[`participantInfo.${e.uid}.isActive`]:!1,[`participantInfo.${e.uid}.leftAt`]:Ee()}),await Jr(gt(ae,"chatRooms",V,"messages"),{type:"system",content:`${e.nickname}님이 채팅방을 나갔습니다.`,createdAt:Ee(),isRead:!1}),console.log("✅ 채팅방 나가기 완료")}catch(y){throw console.error("❌ 채팅방 나가기 실패:",y),y}},blockChatRoom:async(V,y="")=>{try{if(!V||!e.uid)return;const g=we(ae,"chatRooms",V);await Qe(g,{[`participantInfo.${e.uid}.isBlocked`]:!0,[`participantInfo.${e.uid}.blockReason`]:y,[`participantInfo.${e.uid}.blockedAt`]:Ee(),isActive:!1}),console.log("✅ 채팅방 차단 완료")}catch(g){throw console.error("❌ 채팅방 차단 실패:",g),g}},setActiveChat:V=>{u(V),V&&P(V)},getChatRoomInfo:async V=>{try{const y=await Xr(we(ae,"chatRooms",V));return y.exists()?{id:V,...y.data()}:null}catch(y){return console.error("❌ 채팅방 정보 조회 실패:",y),null}},subscribeToMessages:_};return A.jsx(Xx.Provider,{value:M,children:t})}const gL=B.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  height: 72px;
  background: var(--color-bg-glass);
  border-top: 1px solid var(--color-border-light);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: var(--shadow-xl);
  box-sizing: border-box;
  overflow-x: hidden;
  flex-shrink: 0;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  
  /* 2025 글래스 효과 강화 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      transparent 100%);
    pointer-events: none;
  }
  
  @supports not (backdrop-filter: blur(24px)) {
    background: rgba(255, 255, 255, 0.98);
  }
`,yL=B.div`
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  flex-shrink: 0;
`,Ws=B.button`
  background: ${t=>t.$active?"var(--color-mint-glass)":"none"};
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${t=>t.$active?"var(--color-mint-main)":"var(--color-text-tertiary)"};
  font-size: var(--text-xs);
  font-weight: 600;
  cursor: pointer;
  flex: 1;
  padding: var(--space-2) var(--space-1);
  min-width: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;
  transition: all var(--transition-normal);
  border-radius: var(--radius-2xl);
  gap: var(--space-1);
  transform: ${t=>t.$active?"translateY(-2px)":"translateY(0)"};
  
  /* 활성 상태 글로우 효과 */
  ${t=>t.$active&&`
    box-shadow: var(--glow-mint);
    background: linear-gradient(135deg, 
      var(--color-mint-glass) 0%, 
      rgba(255, 255, 255, 0.1) 100%);
  `}

  /* 아이콘 스타일 강화 */
  svg {
    font-size: 20px;
    transition: all var(--transition-normal);
    transform: ${t=>t.$active?"scale(1.1)":"scale(1)"};
    filter: ${t=>t.$active?"drop-shadow(0 0 8px var(--color-mint-glow))":"none"};
  }

  &:hover:not(:disabled) {
    color: var(--color-mint-main);
    background: var(--color-mint-glass);
    transform: translateY(-1px);
    
    svg {
      transform: scale(1.05);
      filter: drop-shadow(0 0 6px var(--color-mint-glow));
    }
  }

  &:active {
    transform: translateY(0);
    transition: all var(--transition-micro);
  }

  &:focus-visible {
    outline: 2px solid var(--color-mint-main);
    outline-offset: 2px;
  }
  
  @media (max-width: 480px) {
    font-size: var(--text-xs);
    svg {
      font-size: 18px;
    }
  }
`,vL=B.div`
  position: absolute;
  top: -2px;
  right: 50%;
  transform: translateX(50%);
  background: var(--color-red);
  color: var(--color-text-inverse);
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 0.625rem;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: var(--shadow-sm);
  border: 2px solid var(--color-bg-primary);
`;function _L(){const t=Yo(),{pathname:e}=Qo(),{unreadCount:n}=N.useContext(Xx);return A.jsx(gL,{children:A.jsxs(yL,{children:[A.jsxs(Ws,{$active:e==="/",onClick:()=>t("/"),children:[" ",A.jsx(RI,{size:22})," ",A.jsx("span",{children:"홈"})," "]}),A.jsxs(Ws,{$active:e==="/musiclife",onClick:()=>t("/musiclife"),children:[" ",A.jsx(RC,{size:22})," ",A.jsx("span",{children:"음악생활"})," "]}),A.jsxs(Ws,{$active:e==="/map",onClick:()=>t("/map"),children:[" ",A.jsx(E1,{size:22})," ",A.jsx("span",{children:"동네지도"})," "]}),A.jsxs(Ws,{$active:e.startsWith("/chat"),onClick:()=>t("/chat"),children:[A.jsx(bC,{size:22}),A.jsx("span",{children:"채팅"}),n>0&&A.jsx(vL,{children:n>99?"99+":n})]}),A.jsxs(Ws,{$active:e==="/echo-share",onClick:()=>t("/echo-share"),children:[" ",A.jsx(PC,{size:22})," ",A.jsx("span",{children:"에코쉐어"})," "]}),A.jsxs(Ws,{$active:e==="/mypage",onClick:()=>t("/mypage"),children:[" ",A.jsx(E1,{size:22})," ",A.jsx("span",{children:"나의에코"})," "]})]})})}const wL=xI`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,EL=xI`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,IL=B.div`
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 10000;
  max-width: 400px;
  width: calc(100vw - 40px);
  
  @media (max-width: 500px) {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
    max-width: calc(100vw - 40px);
  }
`,TL=B.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${t=>t.isExiting?EL:wL} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${t=>{switch(t.type){case"success":return"#10b981";case"error":return"#ef4444";case"warning":return"#f59e0b";default:return"#3b82f6"}}};
  }
`,xL=B.div`
  font-size: 20px;
  color: ${t=>{switch(t.type){case"success":return"#10b981";case"error":return"#ef4444";case"warning":return"#f59e0b";default:return"#3b82f6"}}};
  display: flex;
  align-items: center;
`,SL=B.div`
  flex: 1;
`,AL=B.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2px;
  font-size: 14px;
`,RL=B.div`
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
`,kL=B.button`
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #6b7280;
    background: rgba(0, 0, 0, 0.05);
  }
`,PL=B.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${t=>{switch(t.type){case"success":return"#10b981";case"error":return"#ef4444";case"warning":return"#f59e0b";default:return"#3b82f6"}}};
  width: ${t=>`${t.progress}%`};
  transition: width 0.1s linear;
`;function CL({toasts:t,removeToast:e}){return A.jsx(IL,{children:t.map(n=>A.jsx(bL,{toast:n,onRemove:()=>e(n.id)},n.id))})}function bL({toast:t,onRemove:e}){const[n,r]=N.useState(!1),[i,s]=N.useState(100);N.useEffect(()=>{const c=t.duration||5e3,d=50,f=d/c*100,m=setInterval(()=>{s(_=>{const T=_-f;return T<=0?(clearInterval(m),o(),0):T})},d);return()=>clearInterval(m)},[t.duration]);const o=()=>{r(!0),setTimeout(()=>{e()},300)},a=()=>{switch(t.type){case"success":return A.jsx(vC,{});case"error":return A.jsx(v1,{});case"warning":return A.jsx(v1,{});default:return A.jsx(SC,{})}},u=()=>{switch(t.type){case"success":return"성공";case"error":return"오류";case"warning":return"주의";default:return"알림"}};return A.jsxs(TL,{type:t.type,isExiting:n,children:[A.jsx(xL,{type:t.type,children:a()}),A.jsxs(SL,{children:[A.jsx(AL,{children:t.title||u()}),A.jsx(RL,{children:t.message})]}),A.jsx(kL,{onClick:o,children:A.jsx(fc,{size:14})}),A.jsx(PL,{type:t.type,progress:i})]})}const DL=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: var(--color-bg-secondary);
`,NL=B.div`
  font-size: 4rem;
  color: var(--color-red);
  margin-bottom: 1.5rem;
  opacity: 0.8;
`,VL=B.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
`,OL=B.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 400px;
`;B.details`
  margin-bottom: 2rem;
  max-width: 600px;
  text-align: left;
  
  summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--color-text-secondary);
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-md);
    
    &:hover {
      background: var(--color-border-light);
    }
  }
  
  pre {
    background: var(--color-bg-tertiary);
    padding: 1rem;
    border-radius: var(--radius-md);
    font-size: 0.75rem;
    overflow-x: auto;
    color: var(--color-text-primary);
    white-space: pre-wrap;
    word-break: break-word;
  }
`;const LL=B.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`,kw=B.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &.primary {
    background: var(--color-mint-main);
    color: white;
    
    &:hover {
      background: var(--color-mint-dark);
      transform: translateY(-1px);
    }
  }
  
  &.secondary {
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border-medium);
    
    &:hover {
      background: var(--color-bg-secondary);
      border-color: var(--color-border-dark);
    }
  }
`,ML=B.button`
  margin-top: 1rem;
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: var(--color-text-secondary);
  }
`;class FL extends st.Component{constructor(n){super(n);ga(this,"reportError",(n,r)=>{const i={id:this.state.errorId,message:n.message,stack:n.stack,componentStack:r.componentStack,timestamp:new Date().toISOString(),userAgent:navigator.userAgent,url:window.location.href,userId:this.props.userId||"anonymous"};console.log("Error reported:",i)});ga(this,"handleRetry",()=>{this.setState({hasError:!1,error:null,errorInfo:null,errorId:null})});ga(this,"handleGoHome",()=>{window.location.href="/"});ga(this,"handleReportIssue",()=>{var i;const n=encodeURIComponent(`버그 신고: ${this.state.errorId}`),r=encodeURIComponent(`
에러 ID: ${this.state.errorId}
발생 시간: ${new Date().toLocaleString()}
페이지: ${window.location.href}
브라우저: ${navigator.userAgent}

에러 내용:
${((i=this.state.error)==null?void 0:i.message)||"알 수 없는 에러"}

재현 방법:
1. 
2. 
3. 

추가 정보:
    `);window.open(`mailto:support@echo-music.com?subject=${n}&body=${r}`)});this.state={hasError:!1,error:null,errorInfo:null,errorId:null}}static getDerivedStateFromError(){return{hasError:!0,errorId:`ERR_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}}componentDidCatch(n,r){this.setState({error:n,errorInfo:r}),this.reportError(n,r)}render(){if(this.state.hasError){const{error:n,errorInfo:r,errorId:i}=this.state;return A.jsxs(DL,{children:[A.jsx(NL,{children:A.jsx(IC,{})}),A.jsx(VL,{children:"앗! 문제가 발생했습니다"}),A.jsxs(OL,{children:["예상치 못한 오류가 발생했습니다.",A.jsx("br",{}),"잠시 후 다시 시도해주시거나 홈으로 돌아가세요."]}),!1,A.jsxs(LL,{children:[A.jsxs(kw,{className:"primary",onClick:this.handleRetry,children:[A.jsx(kC,{}),"다시 시도"]}),A.jsxs(kw,{className:"secondary",onClick:this.handleGoHome,children:[A.jsx(RI,{}),"홈으로 이동"]})]}),A.jsx(ML,{onClick:this.handleReportIssue,children:"문제 신고하기"})]})}return this.props.children}}const Jx=N.createContext(),UL=()=>{const t=N.useContext(Jx);if(!t)throw new Error("useToast must be used within a ToastProvider");return t};function jL({children:t}){const[e,n]=N.useState([]),r=N.useCallback(f=>{const m=Date.now()+Math.random(),_={id:m,type:"info",duration:5e3,...f};return n(T=>[...T,_]),m},[]),i=N.useCallback(f=>{n(m=>m.filter(_=>_.id!==f))},[]),s=N.useCallback(()=>{n([])},[]),o=N.useCallback((f,m={})=>r({type:"success",message:f,...m}),[r]),a=N.useCallback((f,m={})=>r({type:"error",message:f,duration:7e3,...m}),[r]),u=N.useCallback((f,m={})=>r({type:"warning",message:f,...m}),[r]),c=N.useCallback((f,m={})=>r({type:"info",message:f,...m}),[r]),d={toasts:e,addToast:r,removeToast:i,clearToasts:s,showSuccess:o,showError:a,showWarning:u,showInfo:c};return A.jsx(Jx.Provider,{value:d,children:t})}const zL=uC`
  html, body, #root, .App {
    width: 100vw !important;
    min-width: 0 !important;
    max-width: 100vw !important;
    overflow-x: hidden !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .App {
    padding-bottom: 64px !important; /* BottomNav 높이만큼 패딩 추가 */
  }
`;function BL(){const{toasts:t,removeToast:e}=UL(),{user:n}=st.useContext(Ns);return A.jsxs(rP,{children:[A.jsx(zL,{}),A.jsx(FL,{userId:n==null?void 0:n.uid,children:A.jsxs("div",{className:"App",children:[A.jsx(pL,{}),A.jsx(_L,{}),A.jsx(CL,{toasts:t,removeToast:e})]})})]})}function $L(){return A.jsx(jL,{children:A.jsx(BL,{})})}Bf.createRoot(document.getElementById("root")).render(A.jsx(st.StrictMode,{children:A.jsx(bV,{children:A.jsx(jV,{children:A.jsx(mL,{children:A.jsx($L,{})})})})}));export{l7 as $,c7 as A,s7 as B,Xx as C,i7 as D,v7 as E,NO as F,t7 as G,n7 as H,E1 as I,AC as J,TC as K,EC as L,_C as M,vC as N,g7 as O,Yx as P,_1 as Q,DC as R,bC as S,MV as T,Ns as U,p7 as V,e7 as W,d7 as X,JL as Y,o7 as Z,w1 as _,bS as a,h7 as a0,_7 as a1,wC as a2,a7 as a3,y7 as a4,XL as a5,YL as a6,f7 as a7,x7 as a8,b7 as a9,L7 as aa,R7 as ab,N7 as ac,A7 as ad,La as ae,yw as af,cn as ag,C7 as ah,D7 as ai,V7 as aj,fn as ak,gt as al,ae as am,Tn as an,pi as ao,mi as ap,KL as aq,RI as ar,kC as as,S7 as at,DO as b,WL as c,CO as d,bO as e,M7 as f,HL as g,O7 as h,B as i,A as j,P7 as k,k7 as l,F7 as m,T7 as n,UL as o,On as p,fc as q,N as r,m7 as s,ZL as t,Yo as u,r7 as v,u7 as w,GL as x,QL as y,IC as z};
