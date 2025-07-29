function G4(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in n)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(n,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var qD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function WD(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function r(){var s=!1;try{s=this instanceof r}catch{}return s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),t}var Qp={exports:{}},gu={},Yp={exports:{}},Ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function K4(){if(zv)return Ue;zv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function I(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,U={};function V(N,j,se){this.props=N,this.context=j,this.refs=U,this.updater=se||R}V.prototype.isReactComponent={},V.prototype.setState=function(N,j){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,j,"setState")},V.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function Y(){}Y.prototype=V.prototype;function ee(N,j,se){this.props=N,this.context=j,this.refs=U,this.updater=se||R}var X=ee.prototype=new Y;X.constructor=ee,M(X,V.prototype),X.isPureReactComponent=!0;var re=Array.isArray,fe=Object.prototype.hasOwnProperty,J={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function T(N,j,se){var $,he={},we=null,De=null;if(j!=null)for($ in j.ref!==void 0&&(De=j.ref),j.key!==void 0&&(we=""+j.key),j)fe.call(j,$)&&!x.hasOwnProperty($)&&(he[$]=j[$]);var Le=arguments.length-2;if(Le===1)he.children=se;else if(1<Le){for(var je=Array(Le),at=0;at<Le;at++)je[at]=arguments[at+2];he.children=je}if(N&&N.defaultProps)for($ in Le=N.defaultProps,Le)he[$]===void 0&&(he[$]=Le[$]);return{$$typeof:n,type:N,key:we,ref:De,props:he,_owner:J.current}}function A(N,j){return{$$typeof:n,type:N.type,key:j,ref:N.ref,props:N.props,_owner:N._owner}}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function D(N){var j={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(se){return j[se]})}var L=/\/+/g;function P(N,j){return typeof N=="object"&&N!==null&&N.key!=null?D(""+N.key):j.toString(36)}function Ve(N,j,se,$,he){var we=typeof N;(we==="undefined"||we==="boolean")&&(N=null);var De=!1;if(N===null)De=!0;else switch(we){case"string":case"number":De=!0;break;case"object":switch(N.$$typeof){case n:case e:De=!0}}if(De)return De=N,he=he(De),N=$===""?"."+P(De,0):$,re(he)?(se="",N!=null&&(se=N.replace(L,"$&/")+"/"),Ve(he,j,se,"",function(at){return at})):he!=null&&(k(he)&&(he=A(he,se+(!he.key||De&&De.key===he.key?"":(""+he.key).replace(L,"$&/")+"/")+N)),j.push(he)),1;if(De=0,$=$===""?".":$+":",re(N))for(var Le=0;Le<N.length;Le++){we=N[Le];var je=$+P(we,Le);De+=Ve(we,j,se,je,he)}else if(je=I(N),typeof je=="function")for(N=je.call(N),Le=0;!(we=N.next()).done;)we=we.value,je=$+P(we,Le++),De+=Ve(we,j,se,je,he);else if(we==="object")throw j=String(N),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return De}function ot(N,j,se){if(N==null)return N;var $=[],he=0;return Ve(N,$,"","",function(we){return j.call(se,we,he++)}),$}function He(N){if(N._status===-1){var j=N._result;j=j(),j.then(function(se){(N._status===0||N._status===-1)&&(N._status=1,N._result=se)},function(se){(N._status===0||N._status===-1)&&(N._status=2,N._result=se)}),N._status===-1&&(N._status=0,N._result=j)}if(N._status===1)return N._result.default;throw N._result}var Ce={current:null},ue={transition:null},te={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:ue,ReactCurrentOwner:J};function K(){throw Error("act(...) is not supported in production builds of React.")}return Ue.Children={map:ot,forEach:function(N,j,se){ot(N,function(){j.apply(this,arguments)},se)},count:function(N){var j=0;return ot(N,function(){j++}),j},toArray:function(N){return ot(N,function(j){return j})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Ue.Component=V,Ue.Fragment=t,Ue.Profiler=s,Ue.PureComponent=ee,Ue.StrictMode=r,Ue.Suspense=f,Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Ue.act=K,Ue.cloneElement=function(N,j,se){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var $=M({},N.props),he=N.key,we=N.ref,De=N._owner;if(j!=null){if(j.ref!==void 0&&(we=j.ref,De=J.current),j.key!==void 0&&(he=""+j.key),N.type&&N.type.defaultProps)var Le=N.type.defaultProps;for(je in j)fe.call(j,je)&&!x.hasOwnProperty(je)&&($[je]=j[je]===void 0&&Le!==void 0?Le[je]:j[je])}var je=arguments.length-2;if(je===1)$.children=se;else if(1<je){Le=Array(je);for(var at=0;at<je;at++)Le[at]=arguments[at+2];$.children=Le}return{$$typeof:n,type:N.type,key:he,ref:we,props:$,_owner:De}},Ue.createContext=function(N){return N={$$typeof:l,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},Ue.createElement=T,Ue.createFactory=function(N){var j=T.bind(null,N);return j.type=N,j},Ue.createRef=function(){return{current:null}},Ue.forwardRef=function(N){return{$$typeof:h,render:N}},Ue.isValidElement=k,Ue.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:He}},Ue.memo=function(N,j){return{$$typeof:m,type:N,compare:j===void 0?null:j}},Ue.startTransition=function(N){var j=ue.transition;ue.transition={};try{N()}finally{ue.transition=j}},Ue.unstable_act=K,Ue.useCallback=function(N,j){return Ce.current.useCallback(N,j)},Ue.useContext=function(N){return Ce.current.useContext(N)},Ue.useDebugValue=function(){},Ue.useDeferredValue=function(N){return Ce.current.useDeferredValue(N)},Ue.useEffect=function(N,j){return Ce.current.useEffect(N,j)},Ue.useId=function(){return Ce.current.useId()},Ue.useImperativeHandle=function(N,j,se){return Ce.current.useImperativeHandle(N,j,se)},Ue.useInsertionEffect=function(N,j){return Ce.current.useInsertionEffect(N,j)},Ue.useLayoutEffect=function(N,j){return Ce.current.useLayoutEffect(N,j)},Ue.useMemo=function(N,j){return Ce.current.useMemo(N,j)},Ue.useReducer=function(N,j,se){return Ce.current.useReducer(N,j,se)},Ue.useRef=function(N){return Ce.current.useRef(N)},Ue.useState=function(N){return Ce.current.useState(N)},Ue.useSyncExternalStore=function(N,j,se){return Ce.current.useSyncExternalStore(N,j,se)},Ue.useTransition=function(){return Ce.current.useTransition()},Ue.version="18.3.1",Ue}var Bv;function hg(){return Bv||(Bv=1,Yp.exports=K4()),Yp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function Q4(){if($v)return gu;$v=1;var n=hg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(h,f,m){var v,_={},I=null,R=null;m!==void 0&&(I=""+m),f.key!==void 0&&(I=""+f.key),f.ref!==void 0&&(R=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(_[v]=f[v]);if(h&&h.defaultProps)for(v in f=h.defaultProps,f)_[v]===void 0&&(_[v]=f[v]);return{$$typeof:e,type:h,key:I,ref:R,props:_,_owner:s.current}}return gu.Fragment=t,gu.jsx=l,gu.jsxs=l,gu}var qv;function Y4(){return qv||(qv=1,Qp.exports=Q4()),Qp.exports}var C=Y4(),z=hg();const Dt=Cw(z),J4=G4({__proto__:null,default:Dt},[z]);var Dh={},Jp={exports:{}},bn={},Xp={exports:{}},Zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function X4(){return Wv||(Wv=1,function(n){function e(ue,te){var K=ue.length;ue.push(te);e:for(;0<K;){var N=K-1>>>1,j=ue[N];if(0<s(j,te))ue[N]=te,ue[K]=j,K=N;else break e}}function t(ue){return ue.length===0?null:ue[0]}function r(ue){if(ue.length===0)return null;var te=ue[0],K=ue.pop();if(K!==te){ue[0]=K;e:for(var N=0,j=ue.length,se=j>>>1;N<se;){var $=2*(N+1)-1,he=ue[$],we=$+1,De=ue[we];if(0>s(he,K))we<j&&0>s(De,he)?(ue[N]=De,ue[we]=K,N=we):(ue[N]=he,ue[$]=K,N=$);else if(we<j&&0>s(De,K))ue[N]=De,ue[we]=K,N=we;else break e}}return te}function s(ue,te){var K=ue.sortIndex-te.sortIndex;return K!==0?K:ue.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var l=Date,h=l.now();n.unstable_now=function(){return l.now()-h}}var f=[],m=[],v=1,_=null,I=3,R=!1,M=!1,U=!1,V=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(ue){for(var te=t(m);te!==null;){if(te.callback===null)r(m);else if(te.startTime<=ue)r(m),te.sortIndex=te.expirationTime,e(f,te);else break;te=t(m)}}function re(ue){if(U=!1,X(ue),!M)if(t(f)!==null)M=!0,He(fe);else{var te=t(m);te!==null&&Ce(re,te.startTime-ue)}}function fe(ue,te){M=!1,U&&(U=!1,Y(T),T=-1),R=!0;var K=I;try{for(X(te),_=t(f);_!==null&&(!(_.expirationTime>te)||ue&&!D());){var N=_.callback;if(typeof N=="function"){_.callback=null,I=_.priorityLevel;var j=N(_.expirationTime<=te);te=n.unstable_now(),typeof j=="function"?_.callback=j:_===t(f)&&r(f),X(te)}else r(f);_=t(f)}if(_!==null)var se=!0;else{var $=t(m);$!==null&&Ce(re,$.startTime-te),se=!1}return se}finally{_=null,I=K,R=!1}}var J=!1,x=null,T=-1,A=5,k=-1;function D(){return!(n.unstable_now()-k<A)}function L(){if(x!==null){var ue=n.unstable_now();k=ue;var te=!0;try{te=x(!0,ue)}finally{te?P():(J=!1,x=null)}}else J=!1}var P;if(typeof ee=="function")P=function(){ee(L)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,ot=Ve.port2;Ve.port1.onmessage=L,P=function(){ot.postMessage(null)}}else P=function(){V(L,0)};function He(ue){x=ue,J||(J=!0,P())}function Ce(ue,te){T=V(function(){ue(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ue){ue.callback=null},n.unstable_continueExecution=function(){M||R||(M=!0,He(fe))},n.unstable_forceFrameRate=function(ue){0>ue||125<ue?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ue?Math.floor(1e3/ue):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ue){switch(I){case 1:case 2:case 3:var te=3;break;default:te=I}var K=I;I=te;try{return ue()}finally{I=K}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ue,te){switch(ue){case 1:case 2:case 3:case 4:case 5:break;default:ue=3}var K=I;I=ue;try{return te()}finally{I=K}},n.unstable_scheduleCallback=function(ue,te,K){var N=n.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?N+K:N):K=N,ue){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=K+j,ue={id:v++,callback:te,priorityLevel:ue,startTime:K,expirationTime:j,sortIndex:-1},K>N?(ue.sortIndex=K,e(m,ue),t(f)===null&&ue===t(m)&&(U?(Y(T),T=-1):U=!0,Ce(re,K-N))):(ue.sortIndex=j,e(f,ue),M||R||(M=!0,He(fe))),ue},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ue){var te=I;return function(){var K=I;I=te;try{return ue.apply(this,arguments)}finally{I=K}}}}(Zp)),Zp}var Hv;function Z4(){return Hv||(Hv=1,Xp.exports=X4()),Xp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function ex(){if(Gv)return bn;Gv=1;var n=hg(),e=Z4();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function I(i){return f.call(_,i)?!0:f.call(v,i)?!1:m.test(i)?_[i]=!0:(v[i]=!0,!1)}function R(i,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,o,u,d){if(o===null||typeof o>"u"||R(i,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function U(i,o,u,d,p,y,E){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=u,this.propertyName=i,this.type=o,this.sanitizeURL=y,this.removeEmptyString=E}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){V[i]=new U(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];V[o]=new U(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){V[i]=new U(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){V[i]=new U(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){V[i]=new U(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){V[i]=new U(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){V[i]=new U(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){V[i]=new U(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){V[i]=new U(i,5,!1,i.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function ee(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(Y,ee);V[o]=new U(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(Y,ee);V[o]=new U(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(Y,ee);V[o]=new U(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){V[i]=new U(i,1,!1,i.toLowerCase(),null,!1,!1)}),V.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){V[i]=new U(i,1,!1,i.toLowerCase(),null,!0,!0)});function X(i,o,u,d){var p=V.hasOwnProperty(o)?V[o]:null;(p!==null?p.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,u,p,d)&&(u=null),d||p===null?I(o)&&(u===null?i.removeAttribute(o):i.setAttribute(o,""+u)):p.mustUseProperty?i[p.propertyName]=u===null?p.type===3?!1:"":u:(o=p.attributeName,d=p.attributeNamespace,u===null?i.removeAttribute(o):(p=p.type,u=p===3||p===4&&u===!0?"":""+u,d?i.setAttributeNS(d,o,u):i.setAttribute(o,u))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),J=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Ce=Symbol.for("react.offscreen"),ue=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=ue&&i[ue]||i["@@iterator"],typeof i=="function"?i:null)}var K=Object.assign,N;function j(i){if(N===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);N=o&&o[1]||""}return`
`+N+i}var se=!1;function $(i,o){if(!i||se)return"";se=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(G){var d=G}Reflect.construct(i,[],o)}else{try{o.call()}catch(G){d=G}i.call(o.prototype)}else{try{throw Error()}catch(G){d=G}i()}}catch(G){if(G&&d&&typeof G.stack=="string"){for(var p=G.stack.split(`
`),y=d.stack.split(`
`),E=p.length-1,b=y.length-1;1<=E&&0<=b&&p[E]!==y[b];)b--;for(;1<=E&&0<=b;E--,b--)if(p[E]!==y[b]){if(E!==1||b!==1)do if(E--,b--,0>b||p[E]!==y[b]){var O=`
`+p[E].replace(" at new "," at ");return i.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",i.displayName)),O}while(1<=E&&0<=b);break}}}finally{se=!1,Error.prepareStackTrace=u}return(i=i?i.displayName||i.name:"")?j(i):""}function he(i){switch(i.tag){case 5:return j(i.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return i=$(i.type,!1),i;case 11:return i=$(i.type.render,!1),i;case 1:return i=$(i.type,!0),i;default:return""}}function we(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case x:return"Fragment";case J:return"Portal";case A:return"Profiler";case T:return"StrictMode";case P:return"Suspense";case Ve:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case D:return(i.displayName||"Context")+".Consumer";case k:return(i._context.displayName||"Context")+".Provider";case L:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ot:return o=i.displayName||null,o!==null?o:we(i.type)||"Memo";case He:o=i._payload,i=i._init;try{return we(i(o))}catch{}}return null}function De(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(o);case 8:return o===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Le(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function je(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function at(i){var o=je(i)?"checked":"value",u=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),d=""+i[o];if(!i.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,y=u.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(E){d=""+E,y.call(this,E)}}),Object.defineProperty(i,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(E){d=""+E},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Tn(i){i._valueTracker||(i._valueTracker=at(i))}function dn(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return i&&(d=je(i)?i.checked?"true":"false":i.value),i=d,i!==u?(o.setValue(i),!0):!1}function Ai(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Rs(i,o){var u=o.checked;return K({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??i._wrapperState.initialChecked})}function $o(i,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=Le(o.value!=null?o.value:u),i._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Il(i,o){o=o.checked,o!=null&&X(i,"checked",o,!1)}function Tl(i,o){Il(i,o);var u=Le(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&i.value===""||i.value!=u)&&(i.value=""+u):i.value!==""+u&&(i.value=""+u);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?qo(i,o.type,u):o.hasOwnProperty("defaultValue")&&qo(i,o.type,Le(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function yc(i,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,u||o===i.value||(i.value=o),i.defaultValue=o}u=i.name,u!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,u!==""&&(i.name=u)}function qo(i,o,u){(o!=="number"||Ai(i.ownerDocument)!==i)&&(u==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+u&&(i.defaultValue=""+u))}var Xr=Array.isArray;function Zr(i,o,u,d){if(i=i.options,o){o={};for(var p=0;p<u.length;p++)o["$"+u[p]]=!0;for(u=0;u<i.length;u++)p=o.hasOwnProperty("$"+i[u].value),i[u].selected!==p&&(i[u].selected=p),p&&d&&(i[u].defaultSelected=!0)}else{for(u=""+Le(u),o=null,p=0;p<i.length;p++){if(i[p].value===u){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function xl(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return K({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Wo(i,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(Xr(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}i._wrapperState={initialValue:Le(u)}}function Ho(i,o){var u=Le(o.value),d=Le(o.defaultValue);u!=null&&(u=""+u,u!==i.value&&(i.value=u),o.defaultValue==null&&i.defaultValue!==u&&(i.defaultValue=u)),d!=null&&(i.defaultValue=""+d)}function Sl(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Lt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Lt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ei,Al=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,p){MSApp.execUnsafeLocalFunction(function(){return i(o,u,d,p)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(ei=ei||document.createElement("div"),ei.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=ei.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Ri(i,o){if(o){var u=i.firstChild;if(u&&u===i.lastChild&&u.nodeType===3){u.nodeValue=o;return}}i.textContent=o}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ps=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(i){Ps.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ks[o]=ks[i]})});function Rl(i,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||ks.hasOwnProperty(i)&&ks[i]?(""+o).trim():o+"px"}function kl(i,o){i=i.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,p=Rl(u,o[u],d);u==="float"&&(u="cssFloat"),d?i.setProperty(u,p):i[u]=p}}var Pl=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(i,o){if(o){if(Pl[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function bl(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cs=null;function Go(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ko=null,Yn=null,Cr=null;function Qo(i){if(i=tu(i)){if(typeof Ko!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Gc(o),Ko(i.stateNode,i.type,o))}}function br(i){Yn?Cr?Cr.push(i):Cr=[i]:Yn=i}function Dl(){if(Yn){var i=Yn,o=Cr;if(Cr=Yn=null,Qo(i),o)for(i=0;i<o.length;i++)Qo(o[i])}}function bs(i,o){return i(o)}function Nl(){}var ti=!1;function Vl(i,o,u){if(ti)return i(o,u);ti=!0;try{return bs(i,o,u)}finally{ti=!1,(Yn!==null||Cr!==null)&&(Nl(),Dl())}}function St(i,o){var u=i.stateNode;if(u===null)return null;var d=Gc(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var Yo=!1;if(h)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Yo=!1}function Ds(i,o,u,d,p,y,E,b,O){var G=Array.prototype.slice.call(arguments,3);try{o.apply(u,G)}catch(oe){this.onError(oe)}}var Ns=!1,Jo=null,fr=!1,Ol=null,Tf={onError:function(i){Ns=!0,Jo=i}};function Xo(i,o,u,d,p,y,E,b,O){Ns=!1,Jo=null,Ds.apply(Tf,arguments)}function vc(i,o,u,d,p,y,E,b,O){if(Xo.apply(this,arguments),Ns){if(Ns){var G=Jo;Ns=!1,Jo=null}else throw Error(t(198));fr||(fr=!0,Ol=G)}}function pr(i){var o=i,u=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(u=o.return),i=o.return;while(i)}return o.tag===3?u:null}function Vs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function mr(i){if(pr(i)!==i)throw Error(t(188))}function _c(i){var o=i.alternate;if(!o){if(o=pr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var u=i,d=o;;){var p=u.return;if(p===null)break;var y=p.alternate;if(y===null){if(d=p.return,d!==null){u=d;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===u)return mr(p),i;if(y===d)return mr(p),o;y=y.sibling}throw Error(t(188))}if(u.return!==d.return)u=p,d=y;else{for(var E=!1,b=p.child;b;){if(b===u){E=!0,u=p,d=y;break}if(b===d){E=!0,d=p,u=y;break}b=b.sibling}if(!E){for(b=y.child;b;){if(b===u){E=!0,u=y,d=p;break}if(b===d){E=!0,d=y,u=p;break}b=b.sibling}if(!E)throw Error(t(189))}}if(u.alternate!==d)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?i:o}function Ll(i){return i=_c(i),i!==null?Zo(i):null}function Zo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Zo(i);if(o!==null)return o;i=i.sibling}return null}var ea=e.unstable_scheduleCallback,Ml=e.unstable_cancelCallback,wc=e.unstable_shouldYield,xf=e.unstable_requestPaint,it=e.unstable_now,Ec=e.unstable_getCurrentPriorityLevel,Os=e.unstable_ImmediatePriority,ki=e.unstable_UserBlockingPriority,Jn=e.unstable_NormalPriority,Fl=e.unstable_LowPriority,Ic=e.unstable_IdlePriority,Ls=null,Ln=null;function Tc(i){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Ls,i,void 0,(i.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:Sc,Ul=Math.log,xc=Math.LN2;function Sc(i){return i>>>=0,i===0?32:31-(Ul(i)/xc|0)|0}var ta=64,na=4194304;function Pi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ms(i,o){var u=i.pendingLanes;if(u===0)return 0;var d=0,p=i.suspendedLanes,y=i.pingedLanes,E=u&268435455;if(E!==0){var b=E&~p;b!==0?d=Pi(b):(y&=E,y!==0&&(d=Pi(y)))}else E=u&~p,E!==0?d=Pi(E):y!==0&&(d=Pi(y));if(d===0)return 0;if(o!==0&&o!==d&&(o&p)===0&&(p=d&-d,y=o&-o,p>=y||p===16&&(y&4194240)!==0))return o;if((d&4)!==0&&(d|=u&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=d;0<o;)u=31-fn(o),p=1<<u,d|=i[u],o&=~p;return d}function Sf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(i,o){for(var u=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,y=i.pendingLanes;0<y;){var E=31-fn(y),b=1<<E,O=p[E];O===-1?((b&u)===0||(b&d)!==0)&&(p[E]=Sf(b,o)):O<=o&&(i.expiredLanes|=b),y&=~b}}function Mn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Fs(){var i=ta;return ta<<=1,(ta&4194240)===0&&(ta=64),i}function Ci(i){for(var o=[],u=0;31>u;u++)o.push(i);return o}function bi(i,o,u){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-fn(o),i[o]=u}function rt(i,o){var u=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<u;){var p=31-fn(u),y=1<<p;o[p]=0,d[p]=-1,i[p]=-1,u&=~y}}function Di(i,o){var u=i.entangledLanes|=o;for(i=i.entanglements;u;){var d=31-fn(u),p=1<<d;p&o|i[d]&o&&(i[d]|=o),u&=~p}}var $e=0;function Ni(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ac,ra,Rc,kc,Pc,jl=!1,Dr=[],Yt=null,gr=null,yr=null,Vi=new Map,Xn=new Map,Nr=[],Af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(i,o){switch(i){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Vi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(o.pointerId)}}function xn(i,o,u,d,p,y){return i===null||i.nativeEvent!==y?(i={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:y,targetContainers:[p]},o!==null&&(o=tu(o),o!==null&&ra(o)),i):(i.eventSystemFlags|=d,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function Rf(i,o,u,d,p){switch(o){case"focusin":return Yt=xn(Yt,i,o,u,d,p),!0;case"dragenter":return gr=xn(gr,i,o,u,d,p),!0;case"mouseover":return yr=xn(yr,i,o,u,d,p),!0;case"pointerover":var y=p.pointerId;return Vi.set(y,xn(Vi.get(y)||null,i,o,u,d,p)),!0;case"gotpointercapture":return y=p.pointerId,Xn.set(y,xn(Xn.get(y)||null,i,o,u,d,p)),!0}return!1}function bc(i){var o=$s(i.target);if(o!==null){var u=pr(o);if(u!==null){if(o=u.tag,o===13){if(o=Vs(u),o!==null){i.blockedOn=o,Pc(i.priority,function(){Rc(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){i.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ri(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var u=ia(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(u===null){u=i.nativeEvent;var d=new u.constructor(u.type,u);Cs=d,u.target.dispatchEvent(d),Cs=null}else return o=tu(u),o!==null&&ra(o),i.blockedOn=u,!1;o.shift()}return!0}function Us(i,o,u){ri(i)&&u.delete(o)}function Dc(){jl=!1,Yt!==null&&ri(Yt)&&(Yt=null),gr!==null&&ri(gr)&&(gr=null),yr!==null&&ri(yr)&&(yr=null),Vi.forEach(Us),Xn.forEach(Us)}function vr(i,o){i.blockedOn===o&&(i.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dc)))}function _r(i){function o(p){return vr(p,i)}if(0<Dr.length){vr(Dr[0],i);for(var u=1;u<Dr.length;u++){var d=Dr[u];d.blockedOn===i&&(d.blockedOn=null)}}for(Yt!==null&&vr(Yt,i),gr!==null&&vr(gr,i),yr!==null&&vr(yr,i),Vi.forEach(o),Xn.forEach(o),u=0;u<Nr.length;u++)d=Nr[u],d.blockedOn===i&&(d.blockedOn=null);for(;0<Nr.length&&(u=Nr[0],u.blockedOn===null);)bc(u),u.blockedOn===null&&Nr.shift()}var ii=re.ReactCurrentBatchConfig,Oi=!0;function ht(i,o,u,d){var p=$e,y=ii.transition;ii.transition=null;try{$e=1,zl(i,o,u,d)}finally{$e=p,ii.transition=y}}function kf(i,o,u,d){var p=$e,y=ii.transition;ii.transition=null;try{$e=4,zl(i,o,u,d)}finally{$e=p,ii.transition=y}}function zl(i,o,u,d){if(Oi){var p=ia(i,o,u,d);if(p===null)Uf(i,o,d,js,u),Cc(i,d);else if(Rf(p,i,o,u,d))d.stopPropagation();else if(Cc(i,d),o&4&&-1<Af.indexOf(i)){for(;p!==null;){var y=tu(p);if(y!==null&&Ac(y),y=ia(i,o,u,d),y===null&&Uf(i,o,d,js,u),y===p)break;p=y}p!==null&&d.stopPropagation()}else Uf(i,o,d,null,u)}}var js=null;function ia(i,o,u,d){if(js=null,i=Go(d),i=$s(i),i!==null)if(o=pr(i),o===null)i=null;else if(u=o.tag,u===13){if(i=Vs(o),i!==null)return i;i=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return js=i,null}function Bl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ec()){case Os:return 1;case ki:return 4;case Jn:case Fl:return 16;case Ic:return 536870912;default:return 16}default:return 16}}var Fn=null,sa=null,Sn=null;function $l(){if(Sn)return Sn;var i,o=sa,u=o.length,d,p="value"in Fn?Fn.value:Fn.textContent,y=p.length;for(i=0;i<u&&o[i]===p[i];i++);var E=u-i;for(d=1;d<=E&&o[u-d]===p[y-d];d++);return Sn=p.slice(i,1<d?1-d:void 0)}function oa(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Vr(){return!0}function ql(){return!1}function Jt(i){function o(u,d,p,y,E){this._reactName=u,this._targetInst=p,this.type=d,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(u=i[b],this[b]=u?u(y):y[b]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Vr:ql,this.isPropagationStopped=ql,this}return K(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),o}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=Jt(wr),Or=K({},wr,{view:0,detail:0}),Pf=Jt(Or),la,si,Li,zs=K({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Li&&(Li&&i.type==="mousemove"?(la=i.screenX-Li.screenX,si=i.screenY-Li.screenY):si=la=0,Li=i),la)},movementY:function(i){return"movementY"in i?i.movementY:si}}),ua=Jt(zs),Wl=K({},zs,{dataTransfer:0}),Nc=Jt(Wl),ca=K({},Or,{relatedTarget:0}),ha=Jt(ca),Vc=K({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),oi=Jt(Vc),Oc=K({},wr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Lc=Jt(Oc),Mc=K({},wr,{data:0}),Hl=Jt(Mc),da={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Fc[i])?!!o[i]:!1}function Lr(){return Uc}var c=K({},Or,{key:function(i){if(i.key){var o=da[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=oa(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?pn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lr,charCode:function(i){return i.type==="keypress"?oa(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?oa(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Jt(c),w=K({},zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=Jt(w),B=K({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lr}),Q=Jt(B),pe=K({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),et=Jt(pe),Ft=K({},zs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),qe=Jt(Ft),$t=[9,13,27,32],Rt=h&&"CompositionEvent"in window,Zn=null;h&&"documentMode"in document&&(Zn=document.documentMode);var Un=h&&"TextEvent"in window&&!Zn,Bs=h&&(!Rt||Zn&&8<Zn&&11>=Zn),fa=" ",O0=!1;function L0(i,o){switch(i){case"keyup":return $t.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M0(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var pa=!1;function qT(i,o){switch(i){case"compositionend":return M0(o);case"keypress":return o.which!==32?null:(O0=!0,fa);case"textInput":return i=o.data,i===fa&&O0?null:i;default:return null}}function WT(i,o){if(pa)return i==="compositionend"||!Rt&&L0(i,o)?(i=$l(),Sn=sa=Fn=null,pa=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Bs&&o.locale!=="ko"?null:o.data;default:return null}}var HT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function F0(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!HT[i.type]:o==="textarea"}function U0(i,o,u,d){br(d),o=qc(o,"onChange"),0<o.length&&(u=new aa("onChange","change",null,u,d),i.push({event:u,listeners:o}))}var Gl=null,Kl=null;function GT(i){ry(i,0)}function jc(i){var o=_a(i);if(dn(o))return i}function KT(i,o){if(i==="change")return o}var j0=!1;if(h){var Cf;if(h){var bf="oninput"in document;if(!bf){var z0=document.createElement("div");z0.setAttribute("oninput","return;"),bf=typeof z0.oninput=="function"}Cf=bf}else Cf=!1;j0=Cf&&(!document.documentMode||9<document.documentMode)}function B0(){Gl&&(Gl.detachEvent("onpropertychange",$0),Kl=Gl=null)}function $0(i){if(i.propertyName==="value"&&jc(Kl)){var o=[];U0(o,Kl,i,Go(i)),Vl(GT,o)}}function QT(i,o,u){i==="focusin"?(B0(),Gl=o,Kl=u,Gl.attachEvent("onpropertychange",$0)):i==="focusout"&&B0()}function YT(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return jc(Kl)}function JT(i,o){if(i==="click")return jc(o)}function XT(i,o){if(i==="input"||i==="change")return jc(o)}function ZT(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Er=typeof Object.is=="function"?Object.is:ZT;function Ql(i,o){if(Er(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var u=Object.keys(i),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var p=u[d];if(!f.call(o,p)||!Er(i[p],o[p]))return!1}return!0}function q0(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function W0(i,o){var u=q0(i);i=0;for(var d;u;){if(u.nodeType===3){if(d=i+u.textContent.length,i<=o&&d>=o)return{node:u,offset:o-i};i=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=q0(u)}}function H0(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?H0(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function G0(){for(var i=window,o=Ai();o instanceof i.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)i=o.contentWindow;else break;o=Ai(i.document)}return o}function Df(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function e4(i){var o=G0(),u=i.focusedElem,d=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&H0(u.ownerDocument.documentElement,u)){if(d!==null&&Df(u)){if(o=d.start,i=d.end,i===void 0&&(i=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(i,u.value.length);else if(i=(o=u.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=u.textContent.length,y=Math.min(d.start,p);d=d.end===void 0?y:Math.min(d.end,p),!i.extend&&y>d&&(p=d,d=y,y=p),p=W0(u,y);var E=W0(u,d);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),y>d?(i.addRange(o),i.extend(E.node,E.offset)):(o.setEnd(E.node,E.offset),i.addRange(o)))}}for(o=[],i=u;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)i=o[u],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var t4=h&&"documentMode"in document&&11>=document.documentMode,ma=null,Nf=null,Yl=null,Vf=!1;function K0(i,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Vf||ma==null||ma!==Ai(d)||(d=ma,"selectionStart"in d&&Df(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Yl&&Ql(Yl,d)||(Yl=d,d=qc(Nf,"onSelect"),0<d.length&&(o=new aa("onSelect","select",null,o,u),i.push({event:o,listeners:d}),o.target=ma)))}function zc(i,o){var u={};return u[i.toLowerCase()]=o.toLowerCase(),u["Webkit"+i]="webkit"+o,u["Moz"+i]="moz"+o,u}var ga={animationend:zc("Animation","AnimationEnd"),animationiteration:zc("Animation","AnimationIteration"),animationstart:zc("Animation","AnimationStart"),transitionend:zc("Transition","TransitionEnd")},Of={},Q0={};h&&(Q0=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function Bc(i){if(Of[i])return Of[i];if(!ga[i])return i;var o=ga[i],u;for(u in o)if(o.hasOwnProperty(u)&&u in Q0)return Of[i]=o[u];return i}var Y0=Bc("animationend"),J0=Bc("animationiteration"),X0=Bc("animationstart"),Z0=Bc("transitionend"),ey=new Map,ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(i,o){ey.set(i,o),a(o,[i])}for(var Lf=0;Lf<ty.length;Lf++){var Mf=ty[Lf],n4=Mf.toLowerCase(),r4=Mf[0].toUpperCase()+Mf.slice(1);Mi(n4,"on"+r4)}Mi(Y0,"onAnimationEnd"),Mi(J0,"onAnimationIteration"),Mi(X0,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Z0,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i4=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jl));function ny(i,o,u){var d=i.type||"unknown-event";i.currentTarget=u,vc(d,o,void 0,i),i.currentTarget=null}function ry(i,o){o=(o&4)!==0;for(var u=0;u<i.length;u++){var d=i[u],p=d.event;d=d.listeners;e:{var y=void 0;if(o)for(var E=d.length-1;0<=E;E--){var b=d[E],O=b.instance,G=b.currentTarget;if(b=b.listener,O!==y&&p.isPropagationStopped())break e;ny(p,b,G),y=O}else for(E=0;E<d.length;E++){if(b=d[E],O=b.instance,G=b.currentTarget,b=b.listener,O!==y&&p.isPropagationStopped())break e;ny(p,b,G),y=O}}}if(fr)throw i=Ol,fr=!1,Ol=null,i}function lt(i,o){var u=o[Wf];u===void 0&&(u=o[Wf]=new Set);var d=i+"__bubble";u.has(d)||(iy(o,i,2,!1),u.add(d))}function Ff(i,o,u){var d=0;o&&(d|=4),iy(u,i,d,o)}var $c="_reactListening"+Math.random().toString(36).slice(2);function Xl(i){if(!i[$c]){i[$c]=!0,r.forEach(function(u){u!=="selectionchange"&&(i4.has(u)||Ff(u,!1,i),Ff(u,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[$c]||(o[$c]=!0,Ff("selectionchange",!1,o))}}function iy(i,o,u,d){switch(Bl(o)){case 1:var p=ht;break;case 4:p=kf;break;default:p=zl}u=p.bind(null,o,u,i),p=void 0,!Yo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(o,u,{capture:!0,passive:p}):i.addEventListener(o,u,!0):p!==void 0?i.addEventListener(o,u,{passive:p}):i.addEventListener(o,u,!1)}function Uf(i,o,u,d,p){var y=d;if((o&1)===0&&(o&2)===0&&d!==null)e:for(;;){if(d===null)return;var E=d.tag;if(E===3||E===4){var b=d.stateNode.containerInfo;if(b===p||b.nodeType===8&&b.parentNode===p)break;if(E===4)for(E=d.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===p||O.nodeType===8&&O.parentNode===p))return;E=E.return}for(;b!==null;){if(E=$s(b),E===null)return;if(O=E.tag,O===5||O===6){d=y=E;continue e}b=b.parentNode}}d=d.return}Vl(function(){var G=y,oe=Go(u),ae=[];e:{var ie=ey.get(i);if(ie!==void 0){var ge=aa,Ee=i;switch(i){case"keypress":if(oa(u)===0)break e;case"keydown":case"keyup":ge=g;break;case"focusin":Ee="focus",ge=ha;break;case"focusout":Ee="blur",ge=ha;break;case"beforeblur":case"afterblur":ge=ha;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=Nc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=Q;break;case Y0:case J0:case X0:ge=oi;break;case Z0:ge=et;break;case"scroll":ge=Pf;break;case"wheel":ge=qe;break;case"copy":case"cut":case"paste":ge=Lc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=S}var Ie=(o&4)!==0,At=!Ie&&i==="scroll",q=Ie?ie!==null?ie+"Capture":null:ie;Ie=[];for(var F=G,H;F!==null;){H=F;var ce=H.stateNode;if(H.tag===5&&ce!==null&&(H=ce,q!==null&&(ce=St(F,q),ce!=null&&Ie.push(Zl(F,ce,H)))),At)break;F=F.return}0<Ie.length&&(ie=new ge(ie,Ee,null,u,oe),ae.push({event:ie,listeners:Ie}))}}if((o&7)===0){e:{if(ie=i==="mouseover"||i==="pointerover",ge=i==="mouseout"||i==="pointerout",ie&&u!==Cs&&(Ee=u.relatedTarget||u.fromElement)&&($s(Ee)||Ee[ai]))break e;if((ge||ie)&&(ie=oe.window===oe?oe:(ie=oe.ownerDocument)?ie.defaultView||ie.parentWindow:window,ge?(Ee=u.relatedTarget||u.toElement,ge=G,Ee=Ee?$s(Ee):null,Ee!==null&&(At=pr(Ee),Ee!==At||Ee.tag!==5&&Ee.tag!==6)&&(Ee=null)):(ge=null,Ee=G),ge!==Ee)){if(Ie=ua,ce="onMouseLeave",q="onMouseEnter",F="mouse",(i==="pointerout"||i==="pointerover")&&(Ie=S,ce="onPointerLeave",q="onPointerEnter",F="pointer"),At=ge==null?ie:_a(ge),H=Ee==null?ie:_a(Ee),ie=new Ie(ce,F+"leave",ge,u,oe),ie.target=At,ie.relatedTarget=H,ce=null,$s(oe)===G&&(Ie=new Ie(q,F+"enter",Ee,u,oe),Ie.target=H,Ie.relatedTarget=At,ce=Ie),At=ce,ge&&Ee)t:{for(Ie=ge,q=Ee,F=0,H=Ie;H;H=ya(H))F++;for(H=0,ce=q;ce;ce=ya(ce))H++;for(;0<F-H;)Ie=ya(Ie),F--;for(;0<H-F;)q=ya(q),H--;for(;F--;){if(Ie===q||q!==null&&Ie===q.alternate)break t;Ie=ya(Ie),q=ya(q)}Ie=null}else Ie=null;ge!==null&&sy(ae,ie,ge,Ie,!1),Ee!==null&&At!==null&&sy(ae,At,Ee,Ie,!0)}}e:{if(ie=G?_a(G):window,ge=ie.nodeName&&ie.nodeName.toLowerCase(),ge==="select"||ge==="input"&&ie.type==="file")var xe=KT;else if(F0(ie))if(j0)xe=XT;else{xe=YT;var Re=QT}else(ge=ie.nodeName)&&ge.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(xe=JT);if(xe&&(xe=xe(i,G))){U0(ae,xe,u,oe);break e}Re&&Re(i,ie,G),i==="focusout"&&(Re=ie._wrapperState)&&Re.controlled&&ie.type==="number"&&qo(ie,"number",ie.value)}switch(Re=G?_a(G):window,i){case"focusin":(F0(Re)||Re.contentEditable==="true")&&(ma=Re,Nf=G,Yl=null);break;case"focusout":Yl=Nf=ma=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,K0(ae,u,oe);break;case"selectionchange":if(t4)break;case"keydown":case"keyup":K0(ae,u,oe)}var ke;if(Rt)e:{switch(i){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else pa?L0(i,u)&&(be="onCompositionEnd"):i==="keydown"&&u.keyCode===229&&(be="onCompositionStart");be&&(Bs&&u.locale!=="ko"&&(pa||be!=="onCompositionStart"?be==="onCompositionEnd"&&pa&&(ke=$l()):(Fn=oe,sa="value"in Fn?Fn.value:Fn.textContent,pa=!0)),Re=qc(G,be),0<Re.length&&(be=new Hl(be,i,null,u,oe),ae.push({event:be,listeners:Re}),ke?be.data=ke:(ke=M0(u),ke!==null&&(be.data=ke)))),(ke=Un?qT(i,u):WT(i,u))&&(G=qc(G,"onBeforeInput"),0<G.length&&(oe=new Hl("onBeforeInput","beforeinput",null,u,oe),ae.push({event:oe,listeners:G}),oe.data=ke))}ry(ae,o)})}function Zl(i,o,u){return{instance:i,listener:o,currentTarget:u}}function qc(i,o){for(var u=o+"Capture",d=[];i!==null;){var p=i,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=St(i,u),y!=null&&d.unshift(Zl(i,y,p)),y=St(i,o),y!=null&&d.push(Zl(i,y,p))),i=i.return}return d}function ya(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function sy(i,o,u,d,p){for(var y=o._reactName,E=[];u!==null&&u!==d;){var b=u,O=b.alternate,G=b.stateNode;if(O!==null&&O===d)break;b.tag===5&&G!==null&&(b=G,p?(O=St(u,y),O!=null&&E.unshift(Zl(u,O,b))):p||(O=St(u,y),O!=null&&E.push(Zl(u,O,b)))),u=u.return}E.length!==0&&i.push({event:o,listeners:E})}var s4=/\r\n?/g,o4=/\u0000|\uFFFD/g;function oy(i){return(typeof i=="string"?i:""+i).replace(s4,`
`).replace(o4,"")}function Wc(i,o,u){if(o=oy(o),oy(i)!==o&&u)throw Error(t(425))}function Hc(){}var jf=null,zf=null;function Bf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var $f=typeof setTimeout=="function"?setTimeout:void 0,a4=typeof clearTimeout=="function"?clearTimeout:void 0,ay=typeof Promise=="function"?Promise:void 0,l4=typeof queueMicrotask=="function"?queueMicrotask:typeof ay<"u"?function(i){return ay.resolve(null).then(i).catch(u4)}:$f;function u4(i){setTimeout(function(){throw i})}function qf(i,o){var u=o,d=0;do{var p=u.nextSibling;if(i.removeChild(u),p&&p.nodeType===8)if(u=p.data,u==="/$"){if(d===0){i.removeChild(p),_r(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=p}while(u);_r(o)}function Fi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function ly(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return i;o--}else u==="/$"&&o++}i=i.previousSibling}return null}var va=Math.random().toString(36).slice(2),Mr="__reactFiber$"+va,eu="__reactProps$"+va,ai="__reactContainer$"+va,Wf="__reactEvents$"+va,c4="__reactListeners$"+va,h4="__reactHandles$"+va;function $s(i){var o=i[Mr];if(o)return o;for(var u=i.parentNode;u;){if(o=u[ai]||u[Mr]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(i=ly(i);i!==null;){if(u=i[Mr])return u;i=ly(i)}return o}i=u,u=i.parentNode}return null}function tu(i){return i=i[Mr]||i[ai],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function _a(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Gc(i){return i[eu]||null}var Hf=[],wa=-1;function Ui(i){return{current:i}}function ut(i){0>wa||(i.current=Hf[wa],Hf[wa]=null,wa--)}function st(i,o){wa++,Hf[wa]=i.current,i.current=o}var ji={},nn=Ui(ji),An=Ui(!1),qs=ji;function Ea(i,o){var u=i.type.contextTypes;if(!u)return ji;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in u)p[y]=o[y];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function Rn(i){return i=i.childContextTypes,i!=null}function Kc(){ut(An),ut(nn)}function uy(i,o,u){if(nn.current!==ji)throw Error(t(168));st(nn,o),st(An,u)}function cy(i,o,u){var d=i.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var p in d)if(!(p in o))throw Error(t(108,De(i)||"Unknown",p));return K({},u,d)}function Qc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ji,qs=nn.current,st(nn,i),st(An,An.current),!0}function hy(i,o,u){var d=i.stateNode;if(!d)throw Error(t(169));u?(i=cy(i,o,qs),d.__reactInternalMemoizedMergedChildContext=i,ut(An),ut(nn),st(nn,i)):ut(An),st(An,u)}var li=null,Yc=!1,Gf=!1;function dy(i){li===null?li=[i]:li.push(i)}function d4(i){Yc=!0,dy(i)}function zi(){if(!Gf&&li!==null){Gf=!0;var i=0,o=$e;try{var u=li;for($e=1;i<u.length;i++){var d=u[i];do d=d(!0);while(d!==null)}li=null,Yc=!1}catch(p){throw li!==null&&(li=li.slice(i+1)),ea(Os,zi),p}finally{$e=o,Gf=!1}}return null}var Ia=[],Ta=0,Jc=null,Xc=0,er=[],tr=0,Ws=null,ui=1,ci="";function Hs(i,o){Ia[Ta++]=Xc,Ia[Ta++]=Jc,Jc=i,Xc=o}function fy(i,o,u){er[tr++]=ui,er[tr++]=ci,er[tr++]=Ws,Ws=i;var d=ui;i=ci;var p=32-fn(d)-1;d&=~(1<<p),u+=1;var y=32-fn(o)+p;if(30<y){var E=p-p%5;y=(d&(1<<E)-1).toString(32),d>>=E,p-=E,ui=1<<32-fn(o)+p|u<<p|d,ci=y+i}else ui=1<<y|u<<p|d,ci=i}function Kf(i){i.return!==null&&(Hs(i,1),fy(i,1,0))}function Qf(i){for(;i===Jc;)Jc=Ia[--Ta],Ia[Ta]=null,Xc=Ia[--Ta],Ia[Ta]=null;for(;i===Ws;)Ws=er[--tr],er[tr]=null,ci=er[--tr],er[tr]=null,ui=er[--tr],er[tr]=null}var jn=null,zn=null,dt=!1,Ir=null;function py(i,o){var u=sr(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=i,o=i.deletions,o===null?(i.deletions=[u],i.flags|=16):o.push(u)}function my(i,o){switch(i.tag){case 5:var u=i.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,jn=i,zn=Fi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,jn=i,zn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=Ws!==null?{id:ui,overflow:ci}:null,i.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=sr(18,null,null,0),u.stateNode=o,u.return=i,i.child=u,jn=i,zn=null,!0):!1;default:return!1}}function Yf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Jf(i){if(dt){var o=zn;if(o){var u=o;if(!my(i,o)){if(Yf(i))throw Error(t(418));o=Fi(u.nextSibling);var d=jn;o&&my(i,o)?py(d,u):(i.flags=i.flags&-4097|2,dt=!1,jn=i)}}else{if(Yf(i))throw Error(t(418));i.flags=i.flags&-4097|2,dt=!1,jn=i}}}function gy(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;jn=i}function Zc(i){if(i!==jn)return!1;if(!dt)return gy(i),dt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Bf(i.type,i.memoizedProps)),o&&(o=zn)){if(Yf(i))throw yy(),Error(t(418));for(;o;)py(i,o),o=Fi(o.nextSibling)}if(gy(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="/$"){if(o===0){zn=Fi(i.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}i=i.nextSibling}zn=null}}else zn=jn?Fi(i.stateNode.nextSibling):null;return!0}function yy(){for(var i=zn;i;)i=Fi(i.nextSibling)}function xa(){zn=jn=null,dt=!1}function Xf(i){Ir===null?Ir=[i]:Ir.push(i)}var f4=re.ReactCurrentBatchConfig;function nu(i,o,u){if(i=u.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var d=u.stateNode}if(!d)throw Error(t(147,i));var p=d,y=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===y?o.ref:(o=function(E){var b=p.refs;E===null?delete b[y]:b[y]=E},o._stringRef=y,o)}if(typeof i!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,i))}return i}function eh(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function vy(i){var o=i._init;return o(i._payload)}function _y(i){function o(q,F){if(i){var H=q.deletions;H===null?(q.deletions=[F],q.flags|=16):H.push(F)}}function u(q,F){if(!i)return null;for(;F!==null;)o(q,F),F=F.sibling;return null}function d(q,F){for(q=new Map;F!==null;)F.key!==null?q.set(F.key,F):q.set(F.index,F),F=F.sibling;return q}function p(q,F){return q=Qi(q,F),q.index=0,q.sibling=null,q}function y(q,F,H){return q.index=H,i?(H=q.alternate,H!==null?(H=H.index,H<F?(q.flags|=2,F):H):(q.flags|=2,F)):(q.flags|=1048576,F)}function E(q){return i&&q.alternate===null&&(q.flags|=2),q}function b(q,F,H,ce){return F===null||F.tag!==6?(F=$p(H,q.mode,ce),F.return=q,F):(F=p(F,H),F.return=q,F)}function O(q,F,H,ce){var xe=H.type;return xe===x?oe(q,F,H.props.children,ce,H.key):F!==null&&(F.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===He&&vy(xe)===F.type)?(ce=p(F,H.props),ce.ref=nu(q,F,H),ce.return=q,ce):(ce=xh(H.type,H.key,H.props,null,q.mode,ce),ce.ref=nu(q,F,H),ce.return=q,ce)}function G(q,F,H,ce){return F===null||F.tag!==4||F.stateNode.containerInfo!==H.containerInfo||F.stateNode.implementation!==H.implementation?(F=qp(H,q.mode,ce),F.return=q,F):(F=p(F,H.children||[]),F.return=q,F)}function oe(q,F,H,ce,xe){return F===null||F.tag!==7?(F=eo(H,q.mode,ce,xe),F.return=q,F):(F=p(F,H),F.return=q,F)}function ae(q,F,H){if(typeof F=="string"&&F!==""||typeof F=="number")return F=$p(""+F,q.mode,H),F.return=q,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case fe:return H=xh(F.type,F.key,F.props,null,q.mode,H),H.ref=nu(q,null,F),H.return=q,H;case J:return F=qp(F,q.mode,H),F.return=q,F;case He:var ce=F._init;return ae(q,ce(F._payload),H)}if(Xr(F)||te(F))return F=eo(F,q.mode,H,null),F.return=q,F;eh(q,F)}return null}function ie(q,F,H,ce){var xe=F!==null?F.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return xe!==null?null:b(q,F,""+H,ce);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case fe:return H.key===xe?O(q,F,H,ce):null;case J:return H.key===xe?G(q,F,H,ce):null;case He:return xe=H._init,ie(q,F,xe(H._payload),ce)}if(Xr(H)||te(H))return xe!==null?null:oe(q,F,H,ce,null);eh(q,H)}return null}function ge(q,F,H,ce,xe){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return q=q.get(H)||null,b(F,q,""+ce,xe);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case fe:return q=q.get(ce.key===null?H:ce.key)||null,O(F,q,ce,xe);case J:return q=q.get(ce.key===null?H:ce.key)||null,G(F,q,ce,xe);case He:var Re=ce._init;return ge(q,F,H,Re(ce._payload),xe)}if(Xr(ce)||te(ce))return q=q.get(H)||null,oe(F,q,ce,xe,null);eh(F,ce)}return null}function Ee(q,F,H,ce){for(var xe=null,Re=null,ke=F,be=F=0,Ht=null;ke!==null&&be<H.length;be++){ke.index>be?(Ht=ke,ke=null):Ht=ke.sibling;var Ke=ie(q,ke,H[be],ce);if(Ke===null){ke===null&&(ke=Ht);break}i&&ke&&Ke.alternate===null&&o(q,ke),F=y(Ke,F,be),Re===null?xe=Ke:Re.sibling=Ke,Re=Ke,ke=Ht}if(be===H.length)return u(q,ke),dt&&Hs(q,be),xe;if(ke===null){for(;be<H.length;be++)ke=ae(q,H[be],ce),ke!==null&&(F=y(ke,F,be),Re===null?xe=ke:Re.sibling=ke,Re=ke);return dt&&Hs(q,be),xe}for(ke=d(q,ke);be<H.length;be++)Ht=ge(ke,q,be,H[be],ce),Ht!==null&&(i&&Ht.alternate!==null&&ke.delete(Ht.key===null?be:Ht.key),F=y(Ht,F,be),Re===null?xe=Ht:Re.sibling=Ht,Re=Ht);return i&&ke.forEach(function(Yi){return o(q,Yi)}),dt&&Hs(q,be),xe}function Ie(q,F,H,ce){var xe=te(H);if(typeof xe!="function")throw Error(t(150));if(H=xe.call(H),H==null)throw Error(t(151));for(var Re=xe=null,ke=F,be=F=0,Ht=null,Ke=H.next();ke!==null&&!Ke.done;be++,Ke=H.next()){ke.index>be?(Ht=ke,ke=null):Ht=ke.sibling;var Yi=ie(q,ke,Ke.value,ce);if(Yi===null){ke===null&&(ke=Ht);break}i&&ke&&Yi.alternate===null&&o(q,ke),F=y(Yi,F,be),Re===null?xe=Yi:Re.sibling=Yi,Re=Yi,ke=Ht}if(Ke.done)return u(q,ke),dt&&Hs(q,be),xe;if(ke===null){for(;!Ke.done;be++,Ke=H.next())Ke=ae(q,Ke.value,ce),Ke!==null&&(F=y(Ke,F,be),Re===null?xe=Ke:Re.sibling=Ke,Re=Ke);return dt&&Hs(q,be),xe}for(ke=d(q,ke);!Ke.done;be++,Ke=H.next())Ke=ge(ke,q,be,Ke.value,ce),Ke!==null&&(i&&Ke.alternate!==null&&ke.delete(Ke.key===null?be:Ke.key),F=y(Ke,F,be),Re===null?xe=Ke:Re.sibling=Ke,Re=Ke);return i&&ke.forEach(function(H4){return o(q,H4)}),dt&&Hs(q,be),xe}function At(q,F,H,ce){if(typeof H=="object"&&H!==null&&H.type===x&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case fe:e:{for(var xe=H.key,Re=F;Re!==null;){if(Re.key===xe){if(xe=H.type,xe===x){if(Re.tag===7){u(q,Re.sibling),F=p(Re,H.props.children),F.return=q,q=F;break e}}else if(Re.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===He&&vy(xe)===Re.type){u(q,Re.sibling),F=p(Re,H.props),F.ref=nu(q,Re,H),F.return=q,q=F;break e}u(q,Re);break}else o(q,Re);Re=Re.sibling}H.type===x?(F=eo(H.props.children,q.mode,ce,H.key),F.return=q,q=F):(ce=xh(H.type,H.key,H.props,null,q.mode,ce),ce.ref=nu(q,F,H),ce.return=q,q=ce)}return E(q);case J:e:{for(Re=H.key;F!==null;){if(F.key===Re)if(F.tag===4&&F.stateNode.containerInfo===H.containerInfo&&F.stateNode.implementation===H.implementation){u(q,F.sibling),F=p(F,H.children||[]),F.return=q,q=F;break e}else{u(q,F);break}else o(q,F);F=F.sibling}F=qp(H,q.mode,ce),F.return=q,q=F}return E(q);case He:return Re=H._init,At(q,F,Re(H._payload),ce)}if(Xr(H))return Ee(q,F,H,ce);if(te(H))return Ie(q,F,H,ce);eh(q,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,F!==null&&F.tag===6?(u(q,F.sibling),F=p(F,H),F.return=q,q=F):(u(q,F),F=$p(H,q.mode,ce),F.return=q,q=F),E(q)):u(q,F)}return At}var Sa=_y(!0),wy=_y(!1),th=Ui(null),nh=null,Aa=null,Zf=null;function ep(){Zf=Aa=nh=null}function tp(i){var o=th.current;ut(th),i._currentValue=o}function np(i,o,u){for(;i!==null;){var d=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),i===u)break;i=i.return}}function Ra(i,o){nh=i,Zf=Aa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(kn=!0),i.firstContext=null)}function nr(i){var o=i._currentValue;if(Zf!==i)if(i={context:i,memoizedValue:o,next:null},Aa===null){if(nh===null)throw Error(t(308));Aa=i,nh.dependencies={lanes:0,firstContext:i}}else Aa=Aa.next=i;return o}var Gs=null;function rp(i){Gs===null?Gs=[i]:Gs.push(i)}function Ey(i,o,u,d){var p=o.interleaved;return p===null?(u.next=u,rp(o)):(u.next=p.next,p.next=u),o.interleaved=u,hi(i,d)}function hi(i,o){i.lanes|=o;var u=i.alternate;for(u!==null&&(u.lanes|=o),u=i,i=i.return;i!==null;)i.childLanes|=o,u=i.alternate,u!==null&&(u.childLanes|=o),u=i,i=i.return;return u.tag===3?u.stateNode:null}var Bi=!1;function ip(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function di(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function $i(i,o,u){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Ge&2)!==0){var p=d.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),d.pending=o,hi(i,u)}return p=d.interleaved,p===null?(o.next=o,rp(d)):(o.next=p.next,p.next=o),d.interleaved=o,hi(i,u)}function rh(i,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=i.pendingLanes,u|=d,o.lanes=u,Di(i,u)}}function Ty(i,o){var u=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var p=null,y=null;if(u=u.firstBaseUpdate,u!==null){do{var E={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};y===null?p=y=E:y=y.next=E,u=u.next}while(u!==null);y===null?p=y=o:y=y.next=o}else p=y=o;u={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:d.shared,effects:d.effects},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=o:i.next=o,u.lastBaseUpdate=o}function ih(i,o,u,d){var p=i.updateQueue;Bi=!1;var y=p.firstBaseUpdate,E=p.lastBaseUpdate,b=p.shared.pending;if(b!==null){p.shared.pending=null;var O=b,G=O.next;O.next=null,E===null?y=G:E.next=G,E=O;var oe=i.alternate;oe!==null&&(oe=oe.updateQueue,b=oe.lastBaseUpdate,b!==E&&(b===null?oe.firstBaseUpdate=G:b.next=G,oe.lastBaseUpdate=O))}if(y!==null){var ae=p.baseState;E=0,oe=G=O=null,b=y;do{var ie=b.lane,ge=b.eventTime;if((d&ie)===ie){oe!==null&&(oe=oe.next={eventTime:ge,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var Ee=i,Ie=b;switch(ie=o,ge=u,Ie.tag){case 1:if(Ee=Ie.payload,typeof Ee=="function"){ae=Ee.call(ge,ae,ie);break e}ae=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Ie.payload,ie=typeof Ee=="function"?Ee.call(ge,ae,ie):Ee,ie==null)break e;ae=K({},ae,ie);break e;case 2:Bi=!0}}b.callback!==null&&b.lane!==0&&(i.flags|=64,ie=p.effects,ie===null?p.effects=[b]:ie.push(b))}else ge={eventTime:ge,lane:ie,tag:b.tag,payload:b.payload,callback:b.callback,next:null},oe===null?(G=oe=ge,O=ae):oe=oe.next=ge,E|=ie;if(b=b.next,b===null){if(b=p.shared.pending,b===null)break;ie=b,b=ie.next,ie.next=null,p.lastBaseUpdate=ie,p.shared.pending=null}}while(!0);if(oe===null&&(O=ae),p.baseState=O,p.firstBaseUpdate=G,p.lastBaseUpdate=oe,o=p.shared.interleaved,o!==null){p=o;do E|=p.lane,p=p.next;while(p!==o)}else y===null&&(p.shared.lanes=0);Ys|=E,i.lanes=E,i.memoizedState=ae}}function xy(i,o,u){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var d=i[o],p=d.callback;if(p!==null){if(d.callback=null,d=u,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var ru={},Fr=Ui(ru),iu=Ui(ru),su=Ui(ru);function Ks(i){if(i===ru)throw Error(t(174));return i}function sp(i,o){switch(st(su,o),st(iu,i),st(Fr,ru),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Mt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Mt(o,i)}ut(Fr),st(Fr,o)}function ka(){ut(Fr),ut(iu),ut(su)}function Sy(i){Ks(su.current);var o=Ks(Fr.current),u=Mt(o,i.type);o!==u&&(st(iu,i),st(Fr,u))}function op(i){iu.current===i&&(ut(Fr),ut(iu))}var mt=Ui(0);function sh(i){for(var o=i;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var ap=[];function lp(){for(var i=0;i<ap.length;i++)ap[i]._workInProgressVersionPrimary=null;ap.length=0}var oh=re.ReactCurrentDispatcher,up=re.ReactCurrentBatchConfig,Qs=0,gt=null,Ut=null,qt=null,ah=!1,ou=!1,au=0,p4=0;function rn(){throw Error(t(321))}function cp(i,o){if(o===null)return!1;for(var u=0;u<o.length&&u<i.length;u++)if(!Er(i[u],o[u]))return!1;return!0}function hp(i,o,u,d,p,y){if(Qs=y,gt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,oh.current=i===null||i.memoizedState===null?v4:_4,i=u(d,p),ou){y=0;do{if(ou=!1,au=0,25<=y)throw Error(t(301));y+=1,qt=Ut=null,o.updateQueue=null,oh.current=w4,i=u(d,p)}while(ou)}if(oh.current=ch,o=Ut!==null&&Ut.next!==null,Qs=0,qt=Ut=gt=null,ah=!1,o)throw Error(t(300));return i}function dp(){var i=au!==0;return au=0,i}function Ur(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?gt.memoizedState=qt=i:qt=qt.next=i,qt}function rr(){if(Ut===null){var i=gt.alternate;i=i!==null?i.memoizedState:null}else i=Ut.next;var o=qt===null?gt.memoizedState:qt.next;if(o!==null)qt=o,Ut=i;else{if(i===null)throw Error(t(310));Ut=i,i={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},qt===null?gt.memoizedState=qt=i:qt=qt.next=i}return qt}function lu(i,o){return typeof o=="function"?o(i):o}function fp(i){var o=rr(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var d=Ut,p=d.baseQueue,y=u.pending;if(y!==null){if(p!==null){var E=p.next;p.next=y.next,y.next=E}d.baseQueue=p=y,u.pending=null}if(p!==null){y=p.next,d=d.baseState;var b=E=null,O=null,G=y;do{var oe=G.lane;if((Qs&oe)===oe)O!==null&&(O=O.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),d=G.hasEagerState?G.eagerState:i(d,G.action);else{var ae={lane:oe,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};O===null?(b=O=ae,E=d):O=O.next=ae,gt.lanes|=oe,Ys|=oe}G=G.next}while(G!==null&&G!==y);O===null?E=d:O.next=b,Er(d,o.memoizedState)||(kn=!0),o.memoizedState=d,o.baseState=E,o.baseQueue=O,u.lastRenderedState=d}if(i=u.interleaved,i!==null){p=i;do y=p.lane,gt.lanes|=y,Ys|=y,p=p.next;while(p!==i)}else p===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function pp(i){var o=rr(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var d=u.dispatch,p=u.pending,y=o.memoizedState;if(p!==null){u.pending=null;var E=p=p.next;do y=i(y,E.action),E=E.next;while(E!==p);Er(y,o.memoizedState)||(kn=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),u.lastRenderedState=y}return[y,d]}function Ay(){}function Ry(i,o){var u=gt,d=rr(),p=o(),y=!Er(d.memoizedState,p);if(y&&(d.memoizedState=p,kn=!0),d=d.queue,mp(Cy.bind(null,u,d,i),[i]),d.getSnapshot!==o||y||qt!==null&&qt.memoizedState.tag&1){if(u.flags|=2048,uu(9,Py.bind(null,u,d,p,o),void 0,null),Wt===null)throw Error(t(349));(Qs&30)!==0||ky(u,o,p)}return p}function ky(i,o,u){i.flags|=16384,i={getSnapshot:o,value:u},o=gt.updateQueue,o===null?(o={lastEffect:null,stores:null},gt.updateQueue=o,o.stores=[i]):(u=o.stores,u===null?o.stores=[i]:u.push(i))}function Py(i,o,u,d){o.value=u,o.getSnapshot=d,by(o)&&Dy(i)}function Cy(i,o,u){return u(function(){by(o)&&Dy(i)})}function by(i){var o=i.getSnapshot;i=i.value;try{var u=o();return!Er(i,u)}catch{return!0}}function Dy(i){var o=hi(i,1);o!==null&&Ar(o,i,1,-1)}function Ny(i){var o=Ur();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lu,lastRenderedState:i},o.queue=i,i=i.dispatch=y4.bind(null,gt,i),[o.memoizedState,i]}function uu(i,o,u,d){return i={tag:i,create:o,destroy:u,deps:d,next:null},o=gt.updateQueue,o===null?(o={lastEffect:null,stores:null},gt.updateQueue=o,o.lastEffect=i.next=i):(u=o.lastEffect,u===null?o.lastEffect=i.next=i:(d=u.next,u.next=i,i.next=d,o.lastEffect=i)),i}function Vy(){return rr().memoizedState}function lh(i,o,u,d){var p=Ur();gt.flags|=i,p.memoizedState=uu(1|o,u,void 0,d===void 0?null:d)}function uh(i,o,u,d){var p=rr();d=d===void 0?null:d;var y=void 0;if(Ut!==null){var E=Ut.memoizedState;if(y=E.destroy,d!==null&&cp(d,E.deps)){p.memoizedState=uu(o,u,y,d);return}}gt.flags|=i,p.memoizedState=uu(1|o,u,y,d)}function Oy(i,o){return lh(8390656,8,i,o)}function mp(i,o){return uh(2048,8,i,o)}function Ly(i,o){return uh(4,2,i,o)}function My(i,o){return uh(4,4,i,o)}function Fy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Uy(i,o,u){return u=u!=null?u.concat([i]):null,uh(4,4,Fy.bind(null,o,i),u)}function gp(){}function jy(i,o){var u=rr();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&cp(o,d[1])?d[0]:(u.memoizedState=[i,o],i)}function zy(i,o){var u=rr();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&cp(o,d[1])?d[0]:(i=i(),u.memoizedState=[i,o],i)}function By(i,o,u){return(Qs&21)===0?(i.baseState&&(i.baseState=!1,kn=!0),i.memoizedState=u):(Er(u,o)||(u=Fs(),gt.lanes|=u,Ys|=u,i.baseState=!0),o)}function m4(i,o){var u=$e;$e=u!==0&&4>u?u:4,i(!0);var d=up.transition;up.transition={};try{i(!1),o()}finally{$e=u,up.transition=d}}function $y(){return rr().memoizedState}function g4(i,o,u){var d=Gi(i);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},qy(i))Wy(o,u);else if(u=Ey(i,o,u,d),u!==null){var p=gn();Ar(u,i,d,p),Hy(u,o,d)}}function y4(i,o,u){var d=Gi(i),p={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(qy(i))Wy(o,p);else{var y=i.alternate;if(i.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var E=o.lastRenderedState,b=y(E,u);if(p.hasEagerState=!0,p.eagerState=b,Er(b,E)){var O=o.interleaved;O===null?(p.next=p,rp(o)):(p.next=O.next,O.next=p),o.interleaved=p;return}}catch{}finally{}u=Ey(i,o,p,d),u!==null&&(p=gn(),Ar(u,i,d,p),Hy(u,o,d))}}function qy(i){var o=i.alternate;return i===gt||o!==null&&o===gt}function Wy(i,o){ou=ah=!0;var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}function Hy(i,o,u){if((u&4194240)!==0){var d=o.lanes;d&=i.pendingLanes,u|=d,o.lanes=u,Di(i,u)}}var ch={readContext:nr,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},v4={readContext:nr,useCallback:function(i,o){return Ur().memoizedState=[i,o===void 0?null:o],i},useContext:nr,useEffect:Oy,useImperativeHandle:function(i,o,u){return u=u!=null?u.concat([i]):null,lh(4194308,4,Fy.bind(null,o,i),u)},useLayoutEffect:function(i,o){return lh(4194308,4,i,o)},useInsertionEffect:function(i,o){return lh(4,2,i,o)},useMemo:function(i,o){var u=Ur();return o=o===void 0?null:o,i=i(),u.memoizedState=[i,o],i},useReducer:function(i,o,u){var d=Ur();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},d.queue=i,i=i.dispatch=g4.bind(null,gt,i),[d.memoizedState,i]},useRef:function(i){var o=Ur();return i={current:i},o.memoizedState=i},useState:Ny,useDebugValue:gp,useDeferredValue:function(i){return Ur().memoizedState=i},useTransition:function(){var i=Ny(!1),o=i[0];return i=m4.bind(null,i[1]),Ur().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,u){var d=gt,p=Ur();if(dt){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),Wt===null)throw Error(t(349));(Qs&30)!==0||ky(d,o,u)}p.memoizedState=u;var y={value:u,getSnapshot:o};return p.queue=y,Oy(Cy.bind(null,d,y,i),[i]),d.flags|=2048,uu(9,Py.bind(null,d,y,u,o),void 0,null),u},useId:function(){var i=Ur(),o=Wt.identifierPrefix;if(dt){var u=ci,d=ui;u=(d&~(1<<32-fn(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=au++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=p4++,o=":"+o+"r"+u.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},_4={readContext:nr,useCallback:jy,useContext:nr,useEffect:mp,useImperativeHandle:Uy,useInsertionEffect:Ly,useLayoutEffect:My,useMemo:zy,useReducer:fp,useRef:Vy,useState:function(){return fp(lu)},useDebugValue:gp,useDeferredValue:function(i){var o=rr();return By(o,Ut.memoizedState,i)},useTransition:function(){var i=fp(lu)[0],o=rr().memoizedState;return[i,o]},useMutableSource:Ay,useSyncExternalStore:Ry,useId:$y,unstable_isNewReconciler:!1},w4={readContext:nr,useCallback:jy,useContext:nr,useEffect:mp,useImperativeHandle:Uy,useInsertionEffect:Ly,useLayoutEffect:My,useMemo:zy,useReducer:pp,useRef:Vy,useState:function(){return pp(lu)},useDebugValue:gp,useDeferredValue:function(i){var o=rr();return Ut===null?o.memoizedState=i:By(o,Ut.memoizedState,i)},useTransition:function(){var i=pp(lu)[0],o=rr().memoizedState;return[i,o]},useMutableSource:Ay,useSyncExternalStore:Ry,useId:$y,unstable_isNewReconciler:!1};function Tr(i,o){if(i&&i.defaultProps){o=K({},o),i=i.defaultProps;for(var u in i)o[u]===void 0&&(o[u]=i[u]);return o}return o}function yp(i,o,u,d){o=i.memoizedState,u=u(d,o),u=u==null?o:K({},o,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}var hh={isMounted:function(i){return(i=i._reactInternals)?pr(i)===i:!1},enqueueSetState:function(i,o,u){i=i._reactInternals;var d=gn(),p=Gi(i),y=di(d,p);y.payload=o,u!=null&&(y.callback=u),o=$i(i,y,p),o!==null&&(Ar(o,i,p,d),rh(o,i,p))},enqueueReplaceState:function(i,o,u){i=i._reactInternals;var d=gn(),p=Gi(i),y=di(d,p);y.tag=1,y.payload=o,u!=null&&(y.callback=u),o=$i(i,y,p),o!==null&&(Ar(o,i,p,d),rh(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var u=gn(),d=Gi(i),p=di(u,d);p.tag=2,o!=null&&(p.callback=o),o=$i(i,p,d),o!==null&&(Ar(o,i,d,u),rh(o,i,d))}};function Gy(i,o,u,d,p,y,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,y,E):o.prototype&&o.prototype.isPureReactComponent?!Ql(u,d)||!Ql(p,y):!0}function Ky(i,o,u){var d=!1,p=ji,y=o.contextType;return typeof y=="object"&&y!==null?y=nr(y):(p=Rn(o)?qs:nn.current,d=o.contextTypes,y=(d=d!=null)?Ea(i,p):ji),o=new o(u,y),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=hh,i.stateNode=o,o._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=y),o}function Qy(i,o,u,d){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==i&&hh.enqueueReplaceState(o,o.state,null)}function vp(i,o,u,d){var p=i.stateNode;p.props=u,p.state=i.memoizedState,p.refs={},ip(i);var y=o.contextType;typeof y=="object"&&y!==null?p.context=nr(y):(y=Rn(o)?qs:nn.current,p.context=Ea(i,y)),p.state=i.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(yp(i,o,y,u),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&hh.enqueueReplaceState(p,p.state,null),ih(i,u,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Pa(i,o){try{var u="",d=o;do u+=he(d),d=d.return;while(d);var p=u}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:i,source:o,stack:p,digest:null}}function _p(i,o,u){return{value:i,source:null,stack:u??null,digest:o??null}}function wp(i,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var E4=typeof WeakMap=="function"?WeakMap:Map;function Yy(i,o,u){u=di(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){vh||(vh=!0,Op=d),wp(i,o)},u}function Jy(i,o,u){u=di(-1,u),u.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=o.value;u.payload=function(){return d(p)},u.callback=function(){wp(i,o)}}var y=i.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(u.callback=function(){wp(i,o),typeof d!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})}),u}function Xy(i,o,u){var d=i.pingCache;if(d===null){d=i.pingCache=new E4;var p=new Set;d.set(o,p)}else p=d.get(o),p===void 0&&(p=new Set,d.set(o,p));p.has(u)||(p.add(u),i=O4.bind(null,i,o,u),o.then(i,i))}function Zy(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function ev(i,o,u,d,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=di(-1,1),o.tag=2,$i(u,o,1))),u.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var I4=re.ReactCurrentOwner,kn=!1;function mn(i,o,u,d){o.child=i===null?wy(o,null,u,d):Sa(o,i.child,u,d)}function tv(i,o,u,d,p){u=u.render;var y=o.ref;return Ra(o,p),d=hp(i,o,u,d,y,p),u=dp(),i!==null&&!kn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,fi(i,o,p)):(dt&&u&&Kf(o),o.flags|=1,mn(i,o,d,p),o.child)}function nv(i,o,u,d,p){if(i===null){var y=u.type;return typeof y=="function"&&!Bp(y)&&y.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=y,rv(i,o,y,d,p)):(i=xh(u.type,null,d,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(y=i.child,(i.lanes&p)===0){var E=y.memoizedProps;if(u=u.compare,u=u!==null?u:Ql,u(E,d)&&i.ref===o.ref)return fi(i,o,p)}return o.flags|=1,i=Qi(y,d),i.ref=o.ref,i.return=o,o.child=i}function rv(i,o,u,d,p){if(i!==null){var y=i.memoizedProps;if(Ql(y,d)&&i.ref===o.ref)if(kn=!1,o.pendingProps=d=y,(i.lanes&p)!==0)(i.flags&131072)!==0&&(kn=!0);else return o.lanes=i.lanes,fi(i,o,p)}return Ep(i,o,u,d,p)}function iv(i,o,u){var d=o.pendingProps,p=d.children,y=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ba,Bn),Bn|=u;else{if((u&1073741824)===0)return i=y!==null?y.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,st(ba,Bn),Bn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=y!==null?y.baseLanes:u,st(ba,Bn),Bn|=d}else y!==null?(d=y.baseLanes|u,o.memoizedState=null):d=u,st(ba,Bn),Bn|=d;return mn(i,o,p,u),o.child}function sv(i,o){var u=o.ref;(i===null&&u!==null||i!==null&&i.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Ep(i,o,u,d,p){var y=Rn(u)?qs:nn.current;return y=Ea(o,y),Ra(o,p),u=hp(i,o,u,d,y,p),d=dp(),i!==null&&!kn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,fi(i,o,p)):(dt&&d&&Kf(o),o.flags|=1,mn(i,o,u,p),o.child)}function ov(i,o,u,d,p){if(Rn(u)){var y=!0;Qc(o)}else y=!1;if(Ra(o,p),o.stateNode===null)fh(i,o),Ky(o,u,d),vp(o,u,d,p),d=!0;else if(i===null){var E=o.stateNode,b=o.memoizedProps;E.props=b;var O=E.context,G=u.contextType;typeof G=="object"&&G!==null?G=nr(G):(G=Rn(u)?qs:nn.current,G=Ea(o,G));var oe=u.getDerivedStateFromProps,ae=typeof oe=="function"||typeof E.getSnapshotBeforeUpdate=="function";ae||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(b!==d||O!==G)&&Qy(o,E,d,G),Bi=!1;var ie=o.memoizedState;E.state=ie,ih(o,d,E,p),O=o.memoizedState,b!==d||ie!==O||An.current||Bi?(typeof oe=="function"&&(yp(o,u,oe,d),O=o.memoizedState),(b=Bi||Gy(o,u,b,d,ie,O,G))?(ae||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(o.flags|=4194308)):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=O),E.props=d,E.state=O,E.context=G,d=b):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{E=o.stateNode,Iy(i,o),b=o.memoizedProps,G=o.type===o.elementType?b:Tr(o.type,b),E.props=G,ae=o.pendingProps,ie=E.context,O=u.contextType,typeof O=="object"&&O!==null?O=nr(O):(O=Rn(u)?qs:nn.current,O=Ea(o,O));var ge=u.getDerivedStateFromProps;(oe=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(b!==ae||ie!==O)&&Qy(o,E,d,O),Bi=!1,ie=o.memoizedState,E.state=ie,ih(o,d,E,p);var Ee=o.memoizedState;b!==ae||ie!==Ee||An.current||Bi?(typeof ge=="function"&&(yp(o,u,ge,d),Ee=o.memoizedState),(G=Bi||Gy(o,u,G,d,ie,Ee,O)||!1)?(oe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(d,Ee,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(d,Ee,O)),typeof E.componentDidUpdate=="function"&&(o.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof E.componentDidUpdate!="function"||b===i.memoizedProps&&ie===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||b===i.memoizedProps&&ie===i.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=Ee),E.props=d,E.state=Ee,E.context=O,d=G):(typeof E.componentDidUpdate!="function"||b===i.memoizedProps&&ie===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||b===i.memoizedProps&&ie===i.memoizedState||(o.flags|=1024),d=!1)}return Ip(i,o,u,d,y,p)}function Ip(i,o,u,d,p,y){sv(i,o);var E=(o.flags&128)!==0;if(!d&&!E)return p&&hy(o,u,!1),fi(i,o,y);d=o.stateNode,I4.current=o;var b=E&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,i!==null&&E?(o.child=Sa(o,i.child,null,y),o.child=Sa(o,null,b,y)):mn(i,o,b,y),o.memoizedState=d.state,p&&hy(o,u,!0),o.child}function av(i){var o=i.stateNode;o.pendingContext?uy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&uy(i,o.context,!1),sp(i,o.containerInfo)}function lv(i,o,u,d,p){return xa(),Xf(p),o.flags|=256,mn(i,o,u,d),o.child}var Tp={dehydrated:null,treeContext:null,retryLane:0};function xp(i){return{baseLanes:i,cachePool:null,transitions:null}}function uv(i,o,u){var d=o.pendingProps,p=mt.current,y=!1,E=(o.flags&128)!==0,b;if((b=E)||(b=i!==null&&i.memoizedState===null?!1:(p&2)!==0),b?(y=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),st(mt,p&1),i===null)return Jf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(E=d.children,i=d.fallback,y?(d=o.mode,y=o.child,E={mode:"hidden",children:E},(d&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=E):y=Sh(E,d,0,null),i=eo(i,d,u,null),y.return=o,i.return=o,y.sibling=i,o.child=y,o.child.memoizedState=xp(u),o.memoizedState=Tp,i):Sp(o,E));if(p=i.memoizedState,p!==null&&(b=p.dehydrated,b!==null))return T4(i,o,E,d,b,p,u);if(y){y=d.fallback,E=o.mode,p=i.child,b=p.sibling;var O={mode:"hidden",children:d.children};return(E&1)===0&&o.child!==p?(d=o.child,d.childLanes=0,d.pendingProps=O,o.deletions=null):(d=Qi(p,O),d.subtreeFlags=p.subtreeFlags&14680064),b!==null?y=Qi(b,y):(y=eo(y,E,u,null),y.flags|=2),y.return=o,d.return=o,d.sibling=y,o.child=d,d=y,y=o.child,E=i.child.memoizedState,E=E===null?xp(u):{baseLanes:E.baseLanes|u,cachePool:null,transitions:E.transitions},y.memoizedState=E,y.childLanes=i.childLanes&~u,o.memoizedState=Tp,d}return y=i.child,i=y.sibling,d=Qi(y,{mode:"visible",children:d.children}),(o.mode&1)===0&&(d.lanes=u),d.return=o,d.sibling=null,i!==null&&(u=o.deletions,u===null?(o.deletions=[i],o.flags|=16):u.push(i)),o.child=d,o.memoizedState=null,d}function Sp(i,o){return o=Sh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function dh(i,o,u,d){return d!==null&&Xf(d),Sa(o,i.child,null,u),i=Sp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function T4(i,o,u,d,p,y,E){if(u)return o.flags&256?(o.flags&=-257,d=_p(Error(t(422))),dh(i,o,E,d)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(y=d.fallback,p=o.mode,d=Sh({mode:"visible",children:d.children},p,0,null),y=eo(y,p,E,null),y.flags|=2,d.return=o,y.return=o,d.sibling=y,o.child=d,(o.mode&1)!==0&&Sa(o,i.child,null,E),o.child.memoizedState=xp(E),o.memoizedState=Tp,y);if((o.mode&1)===0)return dh(i,o,E,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var b=d.dgst;return d=b,y=Error(t(419)),d=_p(y,d,void 0),dh(i,o,E,d)}if(b=(E&i.childLanes)!==0,kn||b){if(d=Wt,d!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|E))!==0?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,hi(i,p),Ar(d,i,p,-1))}return zp(),d=_p(Error(t(421))),dh(i,o,E,d)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=L4.bind(null,i),p._reactRetry=o,null):(i=y.treeContext,zn=Fi(p.nextSibling),jn=o,dt=!0,Ir=null,i!==null&&(er[tr++]=ui,er[tr++]=ci,er[tr++]=Ws,ui=i.id,ci=i.overflow,Ws=o),o=Sp(o,d.children),o.flags|=4096,o)}function cv(i,o,u){i.lanes|=o;var d=i.alternate;d!==null&&(d.lanes|=o),np(i.return,o,u)}function Ap(i,o,u,d,p){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:p}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=d,y.tail=u,y.tailMode=p)}function hv(i,o,u){var d=o.pendingProps,p=d.revealOrder,y=d.tail;if(mn(i,o,d.children,u),d=mt.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&cv(i,u,o);else if(i.tag===19)cv(i,u,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(st(mt,d),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(u=o.child,p=null;u!==null;)i=u.alternate,i!==null&&sh(i)===null&&(p=u),u=u.sibling;u=p,u===null?(p=o.child,o.child=null):(p=u.sibling,u.sibling=null),Ap(o,!1,p,u,y);break;case"backwards":for(u=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&sh(i)===null){o.child=p;break}i=p.sibling,p.sibling=u,u=p,p=i}Ap(o,!0,u,null,y);break;case"together":Ap(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function fh(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function fi(i,o,u){if(i!==null&&(o.dependencies=i.dependencies),Ys|=o.lanes,(u&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,u=Qi(i,i.pendingProps),o.child=u,u.return=o;i.sibling!==null;)i=i.sibling,u=u.sibling=Qi(i,i.pendingProps),u.return=o;u.sibling=null}return o.child}function x4(i,o,u){switch(o.tag){case 3:av(o),xa();break;case 5:Sy(o);break;case 1:Rn(o.type)&&Qc(o);break;case 4:sp(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,p=o.memoizedProps.value;st(th,d._currentValue),d._currentValue=p;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(st(mt,mt.current&1),o.flags|=128,null):(u&o.child.childLanes)!==0?uv(i,o,u):(st(mt,mt.current&1),i=fi(i,o,u),i!==null?i.sibling:null);st(mt,mt.current&1);break;case 19:if(d=(u&o.childLanes)!==0,(i.flags&128)!==0){if(d)return hv(i,o,u);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),st(mt,mt.current),d)break;return null;case 22:case 23:return o.lanes=0,iv(i,o,u)}return fi(i,o,u)}var dv,Rp,fv,pv;dv=function(i,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Rp=function(){},fv=function(i,o,u,d){var p=i.memoizedProps;if(p!==d){i=o.stateNode,Ks(Fr.current);var y=null;switch(u){case"input":p=Rs(i,p),d=Rs(i,d),y=[];break;case"select":p=K({},p,{value:void 0}),d=K({},d,{value:void 0}),y=[];break;case"textarea":p=xl(i,p),d=xl(i,d),y=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Hc)}Cl(u,d);var E;u=null;for(G in p)if(!d.hasOwnProperty(G)&&p.hasOwnProperty(G)&&p[G]!=null)if(G==="style"){var b=p[G];for(E in b)b.hasOwnProperty(E)&&(u||(u={}),u[E]="")}else G!=="dangerouslySetInnerHTML"&&G!=="children"&&G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&G!=="autoFocus"&&(s.hasOwnProperty(G)?y||(y=[]):(y=y||[]).push(G,null));for(G in d){var O=d[G];if(b=p?.[G],d.hasOwnProperty(G)&&O!==b&&(O!=null||b!=null))if(G==="style")if(b){for(E in b)!b.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(u||(u={}),u[E]="");for(E in O)O.hasOwnProperty(E)&&b[E]!==O[E]&&(u||(u={}),u[E]=O[E])}else u||(y||(y=[]),y.push(G,u)),u=O;else G==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,b=b?b.__html:void 0,O!=null&&b!==O&&(y=y||[]).push(G,O)):G==="children"?typeof O!="string"&&typeof O!="number"||(y=y||[]).push(G,""+O):G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&(s.hasOwnProperty(G)?(O!=null&&G==="onScroll"&&lt("scroll",i),y||b===O||(y=[])):(y=y||[]).push(G,O))}u&&(y=y||[]).push("style",u);var G=y;(o.updateQueue=G)&&(o.flags|=4)}},pv=function(i,o,u,d){u!==d&&(o.flags|=4)};function cu(i,o){if(!dt)switch(i.tailMode){case"hidden":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i.tail=null:u.sibling=null;break;case"collapsed":u=i.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function sn(i){var o=i.alternate!==null&&i.alternate.child===i.child,u=0,d=0;if(o)for(var p=i.child;p!==null;)u|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)u|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=u,o}function S4(i,o,u){var d=o.pendingProps;switch(Qf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(o),null;case 1:return Rn(o.type)&&Kc(),sn(o),null;case 3:return d=o.stateNode,ka(),ut(An),ut(nn),lp(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Zc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Ir!==null&&(Fp(Ir),Ir=null))),Rp(i,o),sn(o),null;case 5:op(o);var p=Ks(su.current);if(u=o.type,i!==null&&o.stateNode!=null)fv(i,o,u,d,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return sn(o),null}if(i=Ks(Fr.current),Zc(o)){d=o.stateNode,u=o.type;var y=o.memoizedProps;switch(d[Mr]=o,d[eu]=y,i=(o.mode&1)!==0,u){case"dialog":lt("cancel",d),lt("close",d);break;case"iframe":case"object":case"embed":lt("load",d);break;case"video":case"audio":for(p=0;p<Jl.length;p++)lt(Jl[p],d);break;case"source":lt("error",d);break;case"img":case"image":case"link":lt("error",d),lt("load",d);break;case"details":lt("toggle",d);break;case"input":$o(d,y),lt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!y.multiple},lt("invalid",d);break;case"textarea":Wo(d,y),lt("invalid",d)}Cl(u,y),p=null;for(var E in y)if(y.hasOwnProperty(E)){var b=y[E];E==="children"?typeof b=="string"?d.textContent!==b&&(y.suppressHydrationWarning!==!0&&Wc(d.textContent,b,i),p=["children",b]):typeof b=="number"&&d.textContent!==""+b&&(y.suppressHydrationWarning!==!0&&Wc(d.textContent,b,i),p=["children",""+b]):s.hasOwnProperty(E)&&b!=null&&E==="onScroll"&&lt("scroll",d)}switch(u){case"input":Tn(d),yc(d,y,!0);break;case"textarea":Tn(d),Sl(d);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(d.onclick=Hc)}d=p,o.updateQueue=d,d!==null&&(o.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Lt(u)),i==="http://www.w3.org/1999/xhtml"?u==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=E.createElement(u,{is:d.is}):(i=E.createElement(u),u==="select"&&(E=i,d.multiple?E.multiple=!0:d.size&&(E.size=d.size))):i=E.createElementNS(i,u),i[Mr]=o,i[eu]=d,dv(i,o,!1,!1),o.stateNode=i;e:{switch(E=bl(u,d),u){case"dialog":lt("cancel",i),lt("close",i),p=d;break;case"iframe":case"object":case"embed":lt("load",i),p=d;break;case"video":case"audio":for(p=0;p<Jl.length;p++)lt(Jl[p],i);p=d;break;case"source":lt("error",i),p=d;break;case"img":case"image":case"link":lt("error",i),lt("load",i),p=d;break;case"details":lt("toggle",i),p=d;break;case"input":$o(i,d),p=Rs(i,d),lt("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=K({},d,{value:void 0}),lt("invalid",i);break;case"textarea":Wo(i,d),p=xl(i,d),lt("invalid",i);break;default:p=d}Cl(u,p),b=p;for(y in b)if(b.hasOwnProperty(y)){var O=b[y];y==="style"?kl(i,O):y==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Al(i,O)):y==="children"?typeof O=="string"?(u!=="textarea"||O!=="")&&Ri(i,O):typeof O=="number"&&Ri(i,""+O):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?O!=null&&y==="onScroll"&&lt("scroll",i):O!=null&&X(i,y,O,E))}switch(u){case"input":Tn(i),yc(i,d,!1);break;case"textarea":Tn(i),Sl(i);break;case"option":d.value!=null&&i.setAttribute("value",""+Le(d.value));break;case"select":i.multiple=!!d.multiple,y=d.value,y!=null?Zr(i,!!d.multiple,y,!1):d.defaultValue!=null&&Zr(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Hc)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return sn(o),null;case 6:if(i&&o.stateNode!=null)pv(i,o,i.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(u=Ks(su.current),Ks(Fr.current),Zc(o)){if(d=o.stateNode,u=o.memoizedProps,d[Mr]=o,(y=d.nodeValue!==u)&&(i=jn,i!==null))switch(i.tag){case 3:Wc(d.nodeValue,u,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Wc(d.nodeValue,u,(i.mode&1)!==0)}y&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[Mr]=o,o.stateNode=d}return sn(o),null;case 13:if(ut(mt),d=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(dt&&zn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)yy(),xa(),o.flags|=98560,y=!1;else if(y=Zc(o),d!==null&&d.dehydrated!==null){if(i===null){if(!y)throw Error(t(318));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Mr]=o}else xa(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;sn(o),y=!1}else Ir!==null&&(Fp(Ir),Ir=null),y=!0;if(!y)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=u,o):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(mt.current&1)!==0?jt===0&&(jt=3):zp())),o.updateQueue!==null&&(o.flags|=4),sn(o),null);case 4:return ka(),Rp(i,o),i===null&&Xl(o.stateNode.containerInfo),sn(o),null;case 10:return tp(o.type._context),sn(o),null;case 17:return Rn(o.type)&&Kc(),sn(o),null;case 19:if(ut(mt),y=o.memoizedState,y===null)return sn(o),null;if(d=(o.flags&128)!==0,E=y.rendering,E===null)if(d)cu(y,!1);else{if(jt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(E=sh(i),E!==null){for(o.flags|=128,cu(y,!1),d=E.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)y=u,i=d,y.flags&=14680066,E=y.alternate,E===null?(y.childLanes=0,y.lanes=i,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=E.childLanes,y.lanes=E.lanes,y.child=E.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=E.memoizedProps,y.memoizedState=E.memoizedState,y.updateQueue=E.updateQueue,y.type=E.type,i=E.dependencies,y.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),u=u.sibling;return st(mt,mt.current&1|2),o.child}i=i.sibling}y.tail!==null&&it()>Da&&(o.flags|=128,d=!0,cu(y,!1),o.lanes=4194304)}else{if(!d)if(i=sh(E),i!==null){if(o.flags|=128,d=!0,u=i.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),cu(y,!0),y.tail===null&&y.tailMode==="hidden"&&!E.alternate&&!dt)return sn(o),null}else 2*it()-y.renderingStartTime>Da&&u!==1073741824&&(o.flags|=128,d=!0,cu(y,!1),o.lanes=4194304);y.isBackwards?(E.sibling=o.child,o.child=E):(u=y.last,u!==null?u.sibling=E:o.child=E,y.last=E)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=it(),o.sibling=null,u=mt.current,st(mt,d?u&1|2:u&1),o):(sn(o),null);case 22:case 23:return jp(),d=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(o.flags|=8192),d&&(o.mode&1)!==0?(Bn&1073741824)!==0&&(sn(o),o.subtreeFlags&6&&(o.flags|=8192)):sn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function A4(i,o){switch(Qf(o),o.tag){case 1:return Rn(o.type)&&Kc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ka(),ut(An),ut(nn),lp(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return op(o),null;case 13:if(ut(mt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));xa()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return ut(mt),null;case 4:return ka(),null;case 10:return tp(o.type._context),null;case 22:case 23:return jp(),null;case 24:return null;default:return null}}var ph=!1,on=!1,R4=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Ca(i,o){var u=i.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){wt(i,o,d)}else u.current=null}function kp(i,o,u){try{u()}catch(d){wt(i,o,d)}}var mv=!1;function k4(i,o){if(jf=Oi,i=G0(),Df(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var p=d.anchorOffset,y=d.focusNode;d=d.focusOffset;try{u.nodeType,y.nodeType}catch{u=null;break e}var E=0,b=-1,O=-1,G=0,oe=0,ae=i,ie=null;t:for(;;){for(var ge;ae!==u||p!==0&&ae.nodeType!==3||(b=E+p),ae!==y||d!==0&&ae.nodeType!==3||(O=E+d),ae.nodeType===3&&(E+=ae.nodeValue.length),(ge=ae.firstChild)!==null;)ie=ae,ae=ge;for(;;){if(ae===i)break t;if(ie===u&&++G===p&&(b=E),ie===y&&++oe===d&&(O=E),(ge=ae.nextSibling)!==null)break;ae=ie,ie=ae.parentNode}ae=ge}u=b===-1||O===-1?null:{start:b,end:O}}else u=null}u=u||{start:0,end:0}}else u=null;for(zf={focusedElem:i,selectionRange:u},Oi=!1,ve=o;ve!==null;)if(o=ve,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ve=i;else for(;ve!==null;){o=ve;try{var Ee=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ee!==null){var Ie=Ee.memoizedProps,At=Ee.memoizedState,q=o.stateNode,F=q.getSnapshotBeforeUpdate(o.elementType===o.type?Ie:Tr(o.type,Ie),At);q.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var H=o.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ce){wt(o,o.return,ce)}if(i=o.sibling,i!==null){i.return=o.return,ve=i;break}ve=o.return}return Ee=mv,mv=!1,Ee}function hu(i,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var y=p.destroy;p.destroy=void 0,y!==void 0&&kp(o,u,y)}p=p.next}while(p!==d)}}function mh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&i)===i){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function Pp(i){var o=i.ref;if(o!==null){var u=i.stateNode;switch(i.tag){case 5:i=u;break;default:i=u}typeof o=="function"?o(i):o.current=i}}function gv(i){var o=i.alternate;o!==null&&(i.alternate=null,gv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Mr],delete o[eu],delete o[Wf],delete o[c4],delete o[h4])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function yv(i){return i.tag===5||i.tag===3||i.tag===4}function vv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||yv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Cp(i,o,u){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(i,o):u.insertBefore(i,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(i,u)):(o=u,o.appendChild(i)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Hc));else if(d!==4&&(i=i.child,i!==null))for(Cp(i,o,u),i=i.sibling;i!==null;)Cp(i,o,u),i=i.sibling}function bp(i,o,u){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?u.insertBefore(i,o):u.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(bp(i,o,u),i=i.sibling;i!==null;)bp(i,o,u),i=i.sibling}var Xt=null,xr=!1;function qi(i,o,u){for(u=u.child;u!==null;)_v(i,o,u),u=u.sibling}function _v(i,o,u){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Ls,u)}catch{}switch(u.tag){case 5:on||Ca(u,o);case 6:var d=Xt,p=xr;Xt=null,qi(i,o,u),Xt=d,xr=p,Xt!==null&&(xr?(i=Xt,u=u.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)):Xt.removeChild(u.stateNode));break;case 18:Xt!==null&&(xr?(i=Xt,u=u.stateNode,i.nodeType===8?qf(i.parentNode,u):i.nodeType===1&&qf(i,u),_r(i)):qf(Xt,u.stateNode));break;case 4:d=Xt,p=xr,Xt=u.stateNode.containerInfo,xr=!0,qi(i,o,u),Xt=d,xr=p;break;case 0:case 11:case 14:case 15:if(!on&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var y=p,E=y.destroy;y=y.tag,E!==void 0&&((y&2)!==0||(y&4)!==0)&&kp(u,o,E),p=p.next}while(p!==d)}qi(i,o,u);break;case 1:if(!on&&(Ca(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(b){wt(u,o,b)}qi(i,o,u);break;case 21:qi(i,o,u);break;case 22:u.mode&1?(on=(d=on)||u.memoizedState!==null,qi(i,o,u),on=d):qi(i,o,u);break;default:qi(i,o,u)}}function wv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var u=i.stateNode;u===null&&(u=i.stateNode=new R4),o.forEach(function(d){var p=M4.bind(null,i,d);u.has(d)||(u.add(d),d.then(p,p))})}}function Sr(i,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var p=u[d];try{var y=i,E=o,b=E;e:for(;b!==null;){switch(b.tag){case 5:Xt=b.stateNode,xr=!1;break e;case 3:Xt=b.stateNode.containerInfo,xr=!0;break e;case 4:Xt=b.stateNode.containerInfo,xr=!0;break e}b=b.return}if(Xt===null)throw Error(t(160));_v(y,E,p),Xt=null,xr=!1;var O=p.alternate;O!==null&&(O.return=null),p.return=null}catch(G){wt(p,o,G)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Ev(o,i),o=o.sibling}function Ev(i,o){var u=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Sr(o,i),jr(i),d&4){try{hu(3,i,i.return),mh(3,i)}catch(Ie){wt(i,i.return,Ie)}try{hu(5,i,i.return)}catch(Ie){wt(i,i.return,Ie)}}break;case 1:Sr(o,i),jr(i),d&512&&u!==null&&Ca(u,u.return);break;case 5:if(Sr(o,i),jr(i),d&512&&u!==null&&Ca(u,u.return),i.flags&32){var p=i.stateNode;try{Ri(p,"")}catch(Ie){wt(i,i.return,Ie)}}if(d&4&&(p=i.stateNode,p!=null)){var y=i.memoizedProps,E=u!==null?u.memoizedProps:y,b=i.type,O=i.updateQueue;if(i.updateQueue=null,O!==null)try{b==="input"&&y.type==="radio"&&y.name!=null&&Il(p,y),bl(b,E);var G=bl(b,y);for(E=0;E<O.length;E+=2){var oe=O[E],ae=O[E+1];oe==="style"?kl(p,ae):oe==="dangerouslySetInnerHTML"?Al(p,ae):oe==="children"?Ri(p,ae):X(p,oe,ae,G)}switch(b){case"input":Tl(p,y);break;case"textarea":Ho(p,y);break;case"select":var ie=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var ge=y.value;ge!=null?Zr(p,!!y.multiple,ge,!1):ie!==!!y.multiple&&(y.defaultValue!=null?Zr(p,!!y.multiple,y.defaultValue,!0):Zr(p,!!y.multiple,y.multiple?[]:"",!1))}p[eu]=y}catch(Ie){wt(i,i.return,Ie)}}break;case 6:if(Sr(o,i),jr(i),d&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,y=i.memoizedProps;try{p.nodeValue=y}catch(Ie){wt(i,i.return,Ie)}}break;case 3:if(Sr(o,i),jr(i),d&4&&u!==null&&u.memoizedState.isDehydrated)try{_r(o.containerInfo)}catch(Ie){wt(i,i.return,Ie)}break;case 4:Sr(o,i),jr(i);break;case 13:Sr(o,i),jr(i),p=i.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(Vp=it())),d&4&&wv(i);break;case 22:if(oe=u!==null&&u.memoizedState!==null,i.mode&1?(on=(G=on)||oe,Sr(o,i),on=G):Sr(o,i),jr(i),d&8192){if(G=i.memoizedState!==null,(i.stateNode.isHidden=G)&&!oe&&(i.mode&1)!==0)for(ve=i,oe=i.child;oe!==null;){for(ae=ve=oe;ve!==null;){switch(ie=ve,ge=ie.child,ie.tag){case 0:case 11:case 14:case 15:hu(4,ie,ie.return);break;case 1:Ca(ie,ie.return);var Ee=ie.stateNode;if(typeof Ee.componentWillUnmount=="function"){d=ie,u=ie.return;try{o=d,Ee.props=o.memoizedProps,Ee.state=o.memoizedState,Ee.componentWillUnmount()}catch(Ie){wt(d,u,Ie)}}break;case 5:Ca(ie,ie.return);break;case 22:if(ie.memoizedState!==null){xv(ae);continue}}ge!==null?(ge.return=ie,ve=ge):xv(ae)}oe=oe.sibling}e:for(oe=null,ae=i;;){if(ae.tag===5){if(oe===null){oe=ae;try{p=ae.stateNode,G?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(b=ae.stateNode,O=ae.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,b.style.display=Rl("display",E))}catch(Ie){wt(i,i.return,Ie)}}}else if(ae.tag===6){if(oe===null)try{ae.stateNode.nodeValue=G?"":ae.memoizedProps}catch(Ie){wt(i,i.return,Ie)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===i)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===i)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===i)break e;oe===ae&&(oe=null),ae=ae.return}oe===ae&&(oe=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:Sr(o,i),jr(i),d&4&&wv(i);break;case 21:break;default:Sr(o,i),jr(i)}}function jr(i){var o=i.flags;if(o&2){try{e:{for(var u=i.return;u!==null;){if(yv(u)){var d=u;break e}u=u.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(Ri(p,""),d.flags&=-33);var y=vv(i);bp(i,y,p);break;case 3:case 4:var E=d.stateNode.containerInfo,b=vv(i);Cp(i,b,E);break;default:throw Error(t(161))}}catch(O){wt(i,i.return,O)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function P4(i,o,u){ve=i,Iv(i)}function Iv(i,o,u){for(var d=(i.mode&1)!==0;ve!==null;){var p=ve,y=p.child;if(p.tag===22&&d){var E=p.memoizedState!==null||ph;if(!E){var b=p.alternate,O=b!==null&&b.memoizedState!==null||on;b=ph;var G=on;if(ph=E,(on=O)&&!G)for(ve=p;ve!==null;)E=ve,O=E.child,E.tag===22&&E.memoizedState!==null?Sv(p):O!==null?(O.return=E,ve=O):Sv(p);for(;y!==null;)ve=y,Iv(y),y=y.sibling;ve=p,ph=b,on=G}Tv(i)}else(p.subtreeFlags&8772)!==0&&y!==null?(y.return=p,ve=y):Tv(i)}}function Tv(i){for(;ve!==null;){var o=ve;if((o.flags&8772)!==0){var u=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:on||mh(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!on)if(u===null)d.componentDidMount();else{var p=o.elementType===o.type?u.memoizedProps:Tr(o.type,u.memoizedProps);d.componentDidUpdate(p,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var y=o.updateQueue;y!==null&&xy(o,y,d);break;case 3:var E=o.updateQueue;if(E!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}xy(o,E,u)}break;case 5:var b=o.stateNode;if(u===null&&o.flags&4){u=b;var O=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&u.focus();break;case"img":O.src&&(u.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var G=o.alternate;if(G!==null){var oe=G.memoizedState;if(oe!==null){var ae=oe.dehydrated;ae!==null&&_r(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}on||o.flags&512&&Pp(o)}catch(ie){wt(o,o.return,ie)}}if(o===i){ve=null;break}if(u=o.sibling,u!==null){u.return=o.return,ve=u;break}ve=o.return}}function xv(i){for(;ve!==null;){var o=ve;if(o===i){ve=null;break}var u=o.sibling;if(u!==null){u.return=o.return,ve=u;break}ve=o.return}}function Sv(i){for(;ve!==null;){var o=ve;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{mh(4,o)}catch(O){wt(o,u,O)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var p=o.return;try{d.componentDidMount()}catch(O){wt(o,p,O)}}var y=o.return;try{Pp(o)}catch(O){wt(o,y,O)}break;case 5:var E=o.return;try{Pp(o)}catch(O){wt(o,E,O)}}}catch(O){wt(o,o.return,O)}if(o===i){ve=null;break}var b=o.sibling;if(b!==null){b.return=o.return,ve=b;break}ve=o.return}}var C4=Math.ceil,gh=re.ReactCurrentDispatcher,Dp=re.ReactCurrentOwner,ir=re.ReactCurrentBatchConfig,Ge=0,Wt=null,kt=null,Zt=0,Bn=0,ba=Ui(0),jt=0,du=null,Ys=0,yh=0,Np=0,fu=null,Pn=null,Vp=0,Da=1/0,pi=null,vh=!1,Op=null,Wi=null,_h=!1,Hi=null,wh=0,pu=0,Lp=null,Eh=-1,Ih=0;function gn(){return(Ge&6)!==0?it():Eh!==-1?Eh:Eh=it()}function Gi(i){return(i.mode&1)===0?1:(Ge&2)!==0&&Zt!==0?Zt&-Zt:f4.transition!==null?(Ih===0&&(Ih=Fs()),Ih):(i=$e,i!==0||(i=window.event,i=i===void 0?16:Bl(i.type)),i)}function Ar(i,o,u,d){if(50<pu)throw pu=0,Lp=null,Error(t(185));bi(i,u,d),((Ge&2)===0||i!==Wt)&&(i===Wt&&((Ge&2)===0&&(yh|=u),jt===4&&Ki(i,Zt)),Cn(i,d),u===1&&Ge===0&&(o.mode&1)===0&&(Da=it()+500,Yc&&zi()))}function Cn(i,o){var u=i.callbackNode;ni(i,o);var d=Ms(i,i===Wt?Zt:0);if(d===0)u!==null&&Ml(u),i.callbackNode=null,i.callbackPriority=0;else if(o=d&-d,i.callbackPriority!==o){if(u!=null&&Ml(u),o===1)i.tag===0?d4(Rv.bind(null,i)):dy(Rv.bind(null,i)),l4(function(){(Ge&6)===0&&zi()}),u=null;else{switch(Ni(d)){case 1:u=Os;break;case 4:u=ki;break;case 16:u=Jn;break;case 536870912:u=Ic;break;default:u=Jn}u=Ov(u,Av.bind(null,i))}i.callbackPriority=o,i.callbackNode=u}}function Av(i,o){if(Eh=-1,Ih=0,(Ge&6)!==0)throw Error(t(327));var u=i.callbackNode;if(Na()&&i.callbackNode!==u)return null;var d=Ms(i,i===Wt?Zt:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||o)o=Th(i,d);else{o=d;var p=Ge;Ge|=2;var y=Pv();(Wt!==i||Zt!==o)&&(pi=null,Da=it()+500,Xs(i,o));do try{N4();break}catch(b){kv(i,b)}while(!0);ep(),gh.current=y,Ge=p,kt!==null?o=0:(Wt=null,Zt=0,o=jt)}if(o!==0){if(o===2&&(p=Mn(i),p!==0&&(d=p,o=Mp(i,p))),o===1)throw u=du,Xs(i,0),Ki(i,d),Cn(i,it()),u;if(o===6)Ki(i,d);else{if(p=i.current.alternate,(d&30)===0&&!b4(p)&&(o=Th(i,d),o===2&&(y=Mn(i),y!==0&&(d=y,o=Mp(i,y))),o===1))throw u=du,Xs(i,0),Ki(i,d),Cn(i,it()),u;switch(i.finishedWork=p,i.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:Zs(i,Pn,pi);break;case 3:if(Ki(i,d),(d&130023424)===d&&(o=Vp+500-it(),10<o)){if(Ms(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){gn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=$f(Zs.bind(null,i,Pn,pi),o);break}Zs(i,Pn,pi);break;case 4:if(Ki(i,d),(d&4194240)===d)break;for(o=i.eventTimes,p=-1;0<d;){var E=31-fn(d);y=1<<E,E=o[E],E>p&&(p=E),d&=~y}if(d=p,d=it()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*C4(d/1960))-d,10<d){i.timeoutHandle=$f(Zs.bind(null,i,Pn,pi),d);break}Zs(i,Pn,pi);break;case 5:Zs(i,Pn,pi);break;default:throw Error(t(329))}}}return Cn(i,it()),i.callbackNode===u?Av.bind(null,i):null}function Mp(i,o){var u=fu;return i.current.memoizedState.isDehydrated&&(Xs(i,o).flags|=256),i=Th(i,o),i!==2&&(o=Pn,Pn=u,o!==null&&Fp(o)),i}function Fp(i){Pn===null?Pn=i:Pn.push.apply(Pn,i)}function b4(i){for(var o=i;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var p=u[d],y=p.getSnapshot;p=p.value;try{if(!Er(y(),p))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ki(i,o){for(o&=~Np,o&=~yh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var u=31-fn(o),d=1<<u;i[u]=-1,o&=~d}}function Rv(i){if((Ge&6)!==0)throw Error(t(327));Na();var o=Ms(i,0);if((o&1)===0)return Cn(i,it()),null;var u=Th(i,o);if(i.tag!==0&&u===2){var d=Mn(i);d!==0&&(o=d,u=Mp(i,d))}if(u===1)throw u=du,Xs(i,0),Ki(i,o),Cn(i,it()),u;if(u===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Zs(i,Pn,pi),Cn(i,it()),null}function Up(i,o){var u=Ge;Ge|=1;try{return i(o)}finally{Ge=u,Ge===0&&(Da=it()+500,Yc&&zi())}}function Js(i){Hi!==null&&Hi.tag===0&&(Ge&6)===0&&Na();var o=Ge;Ge|=1;var u=ir.transition,d=$e;try{if(ir.transition=null,$e=1,i)return i()}finally{$e=d,ir.transition=u,Ge=o,(Ge&6)===0&&zi()}}function jp(){Bn=ba.current,ut(ba)}function Xs(i,o){i.finishedWork=null,i.finishedLanes=0;var u=i.timeoutHandle;if(u!==-1&&(i.timeoutHandle=-1,a4(u)),kt!==null)for(u=kt.return;u!==null;){var d=u;switch(Qf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Kc();break;case 3:ka(),ut(An),ut(nn),lp();break;case 5:op(d);break;case 4:ka();break;case 13:ut(mt);break;case 19:ut(mt);break;case 10:tp(d.type._context);break;case 22:case 23:jp()}u=u.return}if(Wt=i,kt=i=Qi(i.current,null),Zt=Bn=o,jt=0,du=null,Np=yh=Ys=0,Pn=fu=null,Gs!==null){for(o=0;o<Gs.length;o++)if(u=Gs[o],d=u.interleaved,d!==null){u.interleaved=null;var p=d.next,y=u.pending;if(y!==null){var E=y.next;y.next=p,d.next=E}u.pending=d}Gs=null}return i}function kv(i,o){do{var u=kt;try{if(ep(),oh.current=ch,ah){for(var d=gt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}ah=!1}if(Qs=0,qt=Ut=gt=null,ou=!1,au=0,Dp.current=null,u===null||u.return===null){jt=1,du=o,kt=null;break}e:{var y=i,E=u.return,b=u,O=o;if(o=Zt,b.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var G=O,oe=b,ae=oe.tag;if((oe.mode&1)===0&&(ae===0||ae===11||ae===15)){var ie=oe.alternate;ie?(oe.updateQueue=ie.updateQueue,oe.memoizedState=ie.memoizedState,oe.lanes=ie.lanes):(oe.updateQueue=null,oe.memoizedState=null)}var ge=Zy(E);if(ge!==null){ge.flags&=-257,ev(ge,E,b,y,o),ge.mode&1&&Xy(y,G,o),o=ge,O=G;var Ee=o.updateQueue;if(Ee===null){var Ie=new Set;Ie.add(O),o.updateQueue=Ie}else Ee.add(O);break e}else{if((o&1)===0){Xy(y,G,o),zp();break e}O=Error(t(426))}}else if(dt&&b.mode&1){var At=Zy(E);if(At!==null){(At.flags&65536)===0&&(At.flags|=256),ev(At,E,b,y,o),Xf(Pa(O,b));break e}}y=O=Pa(O,b),jt!==4&&(jt=2),fu===null?fu=[y]:fu.push(y),y=E;do{switch(y.tag){case 3:y.flags|=65536,o&=-o,y.lanes|=o;var q=Yy(y,O,o);Ty(y,q);break e;case 1:b=O;var F=y.type,H=y.stateNode;if((y.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(Wi===null||!Wi.has(H)))){y.flags|=65536,o&=-o,y.lanes|=o;var ce=Jy(y,b,o);Ty(y,ce);break e}}y=y.return}while(y!==null)}bv(u)}catch(xe){o=xe,kt===u&&u!==null&&(kt=u=u.return);continue}break}while(!0)}function Pv(){var i=gh.current;return gh.current=ch,i===null?ch:i}function zp(){(jt===0||jt===3||jt===2)&&(jt=4),Wt===null||(Ys&268435455)===0&&(yh&268435455)===0||Ki(Wt,Zt)}function Th(i,o){var u=Ge;Ge|=2;var d=Pv();(Wt!==i||Zt!==o)&&(pi=null,Xs(i,o));do try{D4();break}catch(p){kv(i,p)}while(!0);if(ep(),Ge=u,gh.current=d,kt!==null)throw Error(t(261));return Wt=null,Zt=0,jt}function D4(){for(;kt!==null;)Cv(kt)}function N4(){for(;kt!==null&&!wc();)Cv(kt)}function Cv(i){var o=Vv(i.alternate,i,Bn);i.memoizedProps=i.pendingProps,o===null?bv(i):kt=o,Dp.current=null}function bv(i){var o=i;do{var u=o.alternate;if(i=o.return,(o.flags&32768)===0){if(u=S4(u,o,Bn),u!==null){kt=u;return}}else{if(u=A4(u,o),u!==null){u.flags&=32767,kt=u;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{jt=6,kt=null;return}}if(o=o.sibling,o!==null){kt=o;return}kt=o=i}while(o!==null);jt===0&&(jt=5)}function Zs(i,o,u){var d=$e,p=ir.transition;try{ir.transition=null,$e=1,V4(i,o,u,d)}finally{ir.transition=p,$e=d}return null}function V4(i,o,u,d){do Na();while(Hi!==null);if((Ge&6)!==0)throw Error(t(327));u=i.finishedWork;var p=i.finishedLanes;if(u===null)return null;if(i.finishedWork=null,i.finishedLanes=0,u===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var y=u.lanes|u.childLanes;if(rt(i,y),i===Wt&&(kt=Wt=null,Zt=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||_h||(_h=!0,Ov(Jn,function(){return Na(),null})),y=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||y){y=ir.transition,ir.transition=null;var E=$e;$e=1;var b=Ge;Ge|=4,Dp.current=null,k4(i,u),Ev(u,i),e4(zf),Oi=!!jf,zf=jf=null,i.current=u,P4(u),xf(),Ge=b,$e=E,ir.transition=y}else i.current=u;if(_h&&(_h=!1,Hi=i,wh=p),y=i.pendingLanes,y===0&&(Wi=null),Tc(u.stateNode),Cn(i,it()),o!==null)for(d=i.onRecoverableError,u=0;u<o.length;u++)p=o[u],d(p.value,{componentStack:p.stack,digest:p.digest});if(vh)throw vh=!1,i=Op,Op=null,i;return(wh&1)!==0&&i.tag!==0&&Na(),y=i.pendingLanes,(y&1)!==0?i===Lp?pu++:(pu=0,Lp=i):pu=0,zi(),null}function Na(){if(Hi!==null){var i=Ni(wh),o=ir.transition,u=$e;try{if(ir.transition=null,$e=16>i?16:i,Hi===null)var d=!1;else{if(i=Hi,Hi=null,wh=0,(Ge&6)!==0)throw Error(t(331));var p=Ge;for(Ge|=4,ve=i.current;ve!==null;){var y=ve,E=y.child;if((ve.flags&16)!==0){var b=y.deletions;if(b!==null){for(var O=0;O<b.length;O++){var G=b[O];for(ve=G;ve!==null;){var oe=ve;switch(oe.tag){case 0:case 11:case 15:hu(8,oe,y)}var ae=oe.child;if(ae!==null)ae.return=oe,ve=ae;else for(;ve!==null;){oe=ve;var ie=oe.sibling,ge=oe.return;if(gv(oe),oe===G){ve=null;break}if(ie!==null){ie.return=ge,ve=ie;break}ve=ge}}}var Ee=y.alternate;if(Ee!==null){var Ie=Ee.child;if(Ie!==null){Ee.child=null;do{var At=Ie.sibling;Ie.sibling=null,Ie=At}while(Ie!==null)}}ve=y}}if((y.subtreeFlags&2064)!==0&&E!==null)E.return=y,ve=E;else e:for(;ve!==null;){if(y=ve,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:hu(9,y,y.return)}var q=y.sibling;if(q!==null){q.return=y.return,ve=q;break e}ve=y.return}}var F=i.current;for(ve=F;ve!==null;){E=ve;var H=E.child;if((E.subtreeFlags&2064)!==0&&H!==null)H.return=E,ve=H;else e:for(E=F;ve!==null;){if(b=ve,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:mh(9,b)}}catch(xe){wt(b,b.return,xe)}if(b===E){ve=null;break e}var ce=b.sibling;if(ce!==null){ce.return=b.return,ve=ce;break e}ve=b.return}}if(Ge=p,zi(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Ls,i)}catch{}d=!0}return d}finally{$e=u,ir.transition=o}}return!1}function Dv(i,o,u){o=Pa(u,o),o=Yy(i,o,1),i=$i(i,o,1),o=gn(),i!==null&&(bi(i,1,o),Cn(i,o))}function wt(i,o,u){if(i.tag===3)Dv(i,i,u);else for(;o!==null;){if(o.tag===3){Dv(o,i,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Wi===null||!Wi.has(d))){i=Pa(u,i),i=Jy(o,i,1),o=$i(o,i,1),i=gn(),o!==null&&(bi(o,1,i),Cn(o,i));break}}o=o.return}}function O4(i,o,u){var d=i.pingCache;d!==null&&d.delete(o),o=gn(),i.pingedLanes|=i.suspendedLanes&u,Wt===i&&(Zt&u)===u&&(jt===4||jt===3&&(Zt&130023424)===Zt&&500>it()-Vp?Xs(i,0):Np|=u),Cn(i,o)}function Nv(i,o){o===0&&((i.mode&1)===0?o=1:(o=na,na<<=1,(na&130023424)===0&&(na=4194304)));var u=gn();i=hi(i,o),i!==null&&(bi(i,o,u),Cn(i,u))}function L4(i){var o=i.memoizedState,u=0;o!==null&&(u=o.retryLane),Nv(i,u)}function M4(i,o){var u=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(u=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),Nv(i,u)}var Vv;Vv=function(i,o,u){if(i!==null)if(i.memoizedProps!==o.pendingProps||An.current)kn=!0;else{if((i.lanes&u)===0&&(o.flags&128)===0)return kn=!1,x4(i,o,u);kn=(i.flags&131072)!==0}else kn=!1,dt&&(o.flags&1048576)!==0&&fy(o,Xc,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;fh(i,o),i=o.pendingProps;var p=Ea(o,nn.current);Ra(o,u),p=hp(null,o,d,i,p,u);var y=dp();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Rn(d)?(y=!0,Qc(o)):y=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ip(o),p.updater=hh,o.stateNode=p,p._reactInternals=o,vp(o,d,i,u),o=Ip(null,o,d,!0,y,u)):(o.tag=0,dt&&y&&Kf(o),mn(null,o,p,u),o=o.child),o;case 16:d=o.elementType;e:{switch(fh(i,o),i=o.pendingProps,p=d._init,d=p(d._payload),o.type=d,p=o.tag=U4(d),i=Tr(d,i),p){case 0:o=Ep(null,o,d,i,u);break e;case 1:o=ov(null,o,d,i,u);break e;case 11:o=tv(null,o,d,i,u);break e;case 14:o=nv(null,o,d,Tr(d.type,i),u);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Tr(d,p),Ep(i,o,d,p,u);case 1:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Tr(d,p),ov(i,o,d,p,u);case 3:e:{if(av(o),i===null)throw Error(t(387));d=o.pendingProps,y=o.memoizedState,p=y.element,Iy(i,o),ih(o,d,null,u);var E=o.memoizedState;if(d=E.element,y.isDehydrated)if(y={element:d,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){p=Pa(Error(t(423)),o),o=lv(i,o,d,u,p);break e}else if(d!==p){p=Pa(Error(t(424)),o),o=lv(i,o,d,u,p);break e}else for(zn=Fi(o.stateNode.containerInfo.firstChild),jn=o,dt=!0,Ir=null,u=wy(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(xa(),d===p){o=fi(i,o,u);break e}mn(i,o,d,u)}o=o.child}return o;case 5:return Sy(o),i===null&&Jf(o),d=o.type,p=o.pendingProps,y=i!==null?i.memoizedProps:null,E=p.children,Bf(d,p)?E=null:y!==null&&Bf(d,y)&&(o.flags|=32),sv(i,o),mn(i,o,E,u),o.child;case 6:return i===null&&Jf(o),null;case 13:return uv(i,o,u);case 4:return sp(o,o.stateNode.containerInfo),d=o.pendingProps,i===null?o.child=Sa(o,null,d,u):mn(i,o,d,u),o.child;case 11:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Tr(d,p),tv(i,o,d,p,u);case 7:return mn(i,o,o.pendingProps,u),o.child;case 8:return mn(i,o,o.pendingProps.children,u),o.child;case 12:return mn(i,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,p=o.pendingProps,y=o.memoizedProps,E=p.value,st(th,d._currentValue),d._currentValue=E,y!==null)if(Er(y.value,E)){if(y.children===p.children&&!An.current){o=fi(i,o,u);break e}}else for(y=o.child,y!==null&&(y.return=o);y!==null;){var b=y.dependencies;if(b!==null){E=y.child;for(var O=b.firstContext;O!==null;){if(O.context===d){if(y.tag===1){O=di(-1,u&-u),O.tag=2;var G=y.updateQueue;if(G!==null){G=G.shared;var oe=G.pending;oe===null?O.next=O:(O.next=oe.next,oe.next=O),G.pending=O}}y.lanes|=u,O=y.alternate,O!==null&&(O.lanes|=u),np(y.return,u,o),b.lanes|=u;break}O=O.next}}else if(y.tag===10)E=y.type===o.type?null:y.child;else if(y.tag===18){if(E=y.return,E===null)throw Error(t(341));E.lanes|=u,b=E.alternate,b!==null&&(b.lanes|=u),np(E,u,o),E=y.sibling}else E=y.child;if(E!==null)E.return=y;else for(E=y;E!==null;){if(E===o){E=null;break}if(y=E.sibling,y!==null){y.return=E.return,E=y;break}E=E.return}y=E}mn(i,o,p.children,u),o=o.child}return o;case 9:return p=o.type,d=o.pendingProps.children,Ra(o,u),p=nr(p),d=d(p),o.flags|=1,mn(i,o,d,u),o.child;case 14:return d=o.type,p=Tr(d,o.pendingProps),p=Tr(d.type,p),nv(i,o,d,p,u);case 15:return rv(i,o,o.type,o.pendingProps,u);case 17:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Tr(d,p),fh(i,o),o.tag=1,Rn(d)?(i=!0,Qc(o)):i=!1,Ra(o,u),Ky(o,d,p),vp(o,d,p,u),Ip(null,o,d,!0,i,u);case 19:return hv(i,o,u);case 22:return iv(i,o,u)}throw Error(t(156,o.tag))};function Ov(i,o){return ea(i,o)}function F4(i,o,u,d){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sr(i,o,u,d){return new F4(i,o,u,d)}function Bp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function U4(i){if(typeof i=="function")return Bp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===L)return 11;if(i===ot)return 14}return 2}function Qi(i,o){var u=i.alternate;return u===null?(u=sr(i.tag,o,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=o,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&14680064,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,o=i.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u}function xh(i,o,u,d,p,y){var E=2;if(d=i,typeof i=="function")Bp(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case x:return eo(u.children,p,y,o);case T:E=8,p|=8;break;case A:return i=sr(12,u,o,p|2),i.elementType=A,i.lanes=y,i;case P:return i=sr(13,u,o,p),i.elementType=P,i.lanes=y,i;case Ve:return i=sr(19,u,o,p),i.elementType=Ve,i.lanes=y,i;case Ce:return Sh(u,p,y,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case k:E=10;break e;case D:E=9;break e;case L:E=11;break e;case ot:E=14;break e;case He:E=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=sr(E,u,o,p),o.elementType=i,o.type=d,o.lanes=y,o}function eo(i,o,u,d){return i=sr(7,i,d,o),i.lanes=u,i}function Sh(i,o,u,d){return i=sr(22,i,d,o),i.elementType=Ce,i.lanes=u,i.stateNode={isHidden:!1},i}function $p(i,o,u){return i=sr(6,i,null,o),i.lanes=u,i}function qp(i,o,u){return o=sr(4,i.children!==null?i.children:[],i.key,o),o.lanes=u,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function j4(i,o,u,d,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Wp(i,o,u,d,p,y,E,b,O){return i=new j4(i,o,u,b,O),o===1?(o=1,y===!0&&(o|=8)):o=0,y=sr(3,null,null,o),i.current=y,y.stateNode=i,y.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},ip(y),i}function z4(i,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:d==null?null:""+d,children:i,containerInfo:o,implementation:u}}function Lv(i){if(!i)return ji;i=i._reactInternals;e:{if(pr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Rn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var u=i.type;if(Rn(u))return cy(i,u,o)}return o}function Mv(i,o,u,d,p,y,E,b,O){return i=Wp(u,d,!0,i,p,y,E,b,O),i.context=Lv(null),u=i.current,d=gn(),p=Gi(u),y=di(d,p),y.callback=o??null,$i(u,y,p),i.current.lanes=p,bi(i,p,d),Cn(i,d),i}function Ah(i,o,u,d){var p=o.current,y=gn(),E=Gi(p);return u=Lv(u),o.context===null?o.context=u:o.pendingContext=u,o=di(y,E),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=$i(p,o,E),i!==null&&(Ar(i,p,E,y),rh(i,p,E)),E}function Rh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Fv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<o?u:o}}function Hp(i,o){Fv(i,o),(i=i.alternate)&&Fv(i,o)}function B4(){return null}var Uv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Gp(i){this._internalRoot=i}kh.prototype.render=Gp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Ah(i,o,null,null)},kh.prototype.unmount=Gp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Js(function(){Ah(null,i,null,null)}),o[ai]=null}};function kh(i){this._internalRoot=i}kh.prototype.unstable_scheduleHydration=function(i){if(i){var o=kc();i={blockedOn:null,target:i,priority:o};for(var u=0;u<Nr.length&&o!==0&&o<Nr[u].priority;u++);Nr.splice(u,0,i),u===0&&bc(i)}};function Kp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Ph(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function jv(){}function $4(i,o,u,d,p){if(p){if(typeof d=="function"){var y=d;d=function(){var G=Rh(E);y.call(G)}}var E=Mv(o,d,i,0,null,!1,!1,"",jv);return i._reactRootContainer=E,i[ai]=E.current,Xl(i.nodeType===8?i.parentNode:i),Js(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var b=d;d=function(){var G=Rh(O);b.call(G)}}var O=Wp(i,0,!1,null,null,!1,!1,"",jv);return i._reactRootContainer=O,i[ai]=O.current,Xl(i.nodeType===8?i.parentNode:i),Js(function(){Ah(o,O,u,d)}),O}function Ch(i,o,u,d,p){var y=u._reactRootContainer;if(y){var E=y;if(typeof p=="function"){var b=p;p=function(){var O=Rh(E);b.call(O)}}Ah(o,E,i,p)}else E=$4(u,o,i,p,d);return Rh(E)}Ac=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var u=Pi(o.pendingLanes);u!==0&&(Di(o,u|1),Cn(o,it()),(Ge&6)===0&&(Da=it()+500,zi()))}break;case 13:Js(function(){var d=hi(i,1);if(d!==null){var p=gn();Ar(d,i,1,p)}}),Hp(i,1)}},ra=function(i){if(i.tag===13){var o=hi(i,134217728);if(o!==null){var u=gn();Ar(o,i,134217728,u)}Hp(i,134217728)}},Rc=function(i){if(i.tag===13){var o=Gi(i),u=hi(i,o);if(u!==null){var d=gn();Ar(u,i,o,d)}Hp(i,o)}},kc=function(){return $e},Pc=function(i,o){var u=$e;try{return $e=i,o()}finally{$e=u}},Ko=function(i,o,u){switch(o){case"input":if(Tl(i,u),o=u.name,u.type==="radio"&&o!=null){for(u=i;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==i&&d.form===i.form){var p=Gc(d);if(!p)throw Error(t(90));dn(d),Tl(d,p)}}}break;case"textarea":Ho(i,u);break;case"select":o=u.value,o!=null&&Zr(i,!!u.multiple,o,!1)}},bs=Up,Nl=Js;var q4={usingClientEntryPoint:!1,Events:[tu,_a,Gc,br,Dl,Up]},mu={findFiberByHostInstance:$s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W4={bundleType:mu.bundleType,version:mu.version,rendererPackageName:mu.rendererPackageName,rendererConfig:mu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Ll(i),i===null?null:i.stateNode},findFiberByHostInstance:mu.findFiberByHostInstance||B4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bh.isDisabled&&bh.supportsFiber)try{Ls=bh.inject(W4),Ln=bh}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q4,bn.createPortal=function(i,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kp(o))throw Error(t(200));return z4(i,o,null,u)},bn.createRoot=function(i,o){if(!Kp(i))throw Error(t(299));var u=!1,d="",p=Uv;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Wp(i,1,!1,null,null,u,!1,d,p),i[ai]=o.current,Xl(i.nodeType===8?i.parentNode:i),new Gp(o)},bn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Ll(o),i=i===null?null:i.stateNode,i},bn.flushSync=function(i){return Js(i)},bn.hydrate=function(i,o,u){if(!Ph(o))throw Error(t(200));return Ch(null,i,o,!0,u)},bn.hydrateRoot=function(i,o,u){if(!Kp(i))throw Error(t(405));var d=u!=null&&u.hydratedSources||null,p=!1,y="",E=Uv;if(u!=null&&(u.unstable_strictMode===!0&&(p=!0),u.identifierPrefix!==void 0&&(y=u.identifierPrefix),u.onRecoverableError!==void 0&&(E=u.onRecoverableError)),o=Mv(o,null,i,1,u??null,p,!1,y,E),i[ai]=o.current,Xl(i),d)for(i=0;i<d.length;i++)u=d[i],p=u._getVersion,p=p(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,p]:o.mutableSourceEagerHydrationData.push(u,p);return new kh(o)},bn.render=function(i,o,u){if(!Ph(o))throw Error(t(200));return Ch(null,i,o,!1,u)},bn.unmountComponentAtNode=function(i){if(!Ph(i))throw Error(t(40));return i._reactRootContainer?(Js(function(){Ch(null,null,i,!1,function(){i._reactRootContainer=null,i[ai]=null})}),!0):!1},bn.unstable_batchedUpdates=Up,bn.unstable_renderSubtreeIntoContainer=function(i,o,u,d){if(!Ph(u))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Ch(i,o,u,!1,d)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Kv;function bw(){if(Kv)return Jp.exports;Kv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Jp.exports=ex(),Jp.exports}var Qv;function tx(){if(Qv)return Dh;Qv=1;var n=bw();return Dh.createRoot=n.createRoot,Dh.hydrateRoot=n.hydrateRoot,Dh}var nx=tx();const rx=Cw(nx);bw();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},zu.apply(this,arguments)}var os;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(os||(os={}));const Yv="popstate";function ix(n){n===void 0&&(n={});function e(r,s){let{pathname:a,search:l,hash:h}=r.location;return Tm("",{pathname:a,search:l,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:ud(s)}return ox(e,t,null,n)}function Nt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Dw(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sx(){return Math.random().toString(36).substr(2,8)}function Jv(n,e){return{usr:n.state,key:n.key,idx:e}}function Tm(n,e,t,r){return t===void 0&&(t=null),zu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?fl(e):e,{state:t,key:e&&e.key||r||sx()})}function ud(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function ox(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,l=s.history,h=os.Pop,f=null,m=v();m==null&&(m=0,l.replaceState(zu({},l.state,{idx:m}),""));function v(){return(l.state||{idx:null}).idx}function _(){h=os.Pop;let V=v(),Y=V==null?null:V-m;m=V,f&&f({action:h,location:U.location,delta:Y})}function I(V,Y){h=os.Push;let ee=Tm(U.location,V,Y);m=v()+1;let X=Jv(ee,m),re=U.createHref(ee);try{l.pushState(X,"",re)}catch(fe){if(fe instanceof DOMException&&fe.name==="DataCloneError")throw fe;s.location.assign(re)}a&&f&&f({action:h,location:U.location,delta:1})}function R(V,Y){h=os.Replace;let ee=Tm(U.location,V,Y);m=v();let X=Jv(ee,m),re=U.createHref(ee);l.replaceState(X,"",re),a&&f&&f({action:h,location:U.location,delta:0})}function M(V){let Y=s.location.origin!=="null"?s.location.origin:s.location.href,ee=typeof V=="string"?V:ud(V);return ee=ee.replace(/ $/,"%20"),Nt(Y,"No window.location.(origin|href) available to create URL for href: "+ee),new URL(ee,Y)}let U={get action(){return h},get location(){return n(s,l)},listen(V){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(Yv,_),f=V,()=>{s.removeEventListener(Yv,_),f=null}},createHref(V){return e(s,V)},createURL:M,encodeLocation(V){let Y=M(V);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:I,replace:R,go(V){return l.go(V)}};return U}var Xv;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Xv||(Xv={}));function ax(n,e,t){return t===void 0&&(t="/"),lx(n,e,t)}function lx(n,e,t,r){let s=typeof e=="string"?fl(e):e,a=dg(s.pathname||"/",t);if(a==null)return null;let l=Nw(n);ux(l);let h=null;for(let f=0;h==null&&f<l.length;++f){let m=Ex(a);h=vx(l[f],m)}return h}function Nw(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(a,l,h)=>{let f={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};f.relativePath.startsWith("/")&&(Nt(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let m=cs([r,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(Nt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Nw(a.children,e,v,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:gx(m,a.index),routesMeta:v})};return n.forEach((a,l)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))s(a,l);else for(let f of Vw(a.path))s(a,l,f)}),e}function Vw(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let l=Vw(r.join("/")),h=[];return h.push(...l.map(f=>f===""?a:[a,f].join("/"))),s&&h.push(...l),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function ux(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:yx(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const cx=/^:[\w-]+$/,hx=3,dx=2,fx=1,px=10,mx=-2,Zv=n=>n==="*";function gx(n,e){let t=n.split("/"),r=t.length;return t.some(Zv)&&(r+=mx),e&&(r+=dx),t.filter(s=>!Zv(s)).reduce((s,a)=>s+(cx.test(a)?hx:a===""?fx:px),r)}function yx(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function vx(n,e,t){let{routesMeta:r}=n,s={},a="/",l=[];for(let h=0;h<r.length;++h){let f=r[h],m=h===r.length-1,v=a==="/"?e:e.slice(a.length)||"/",_=_x({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},v),I=f.route;if(!_)return null;Object.assign(s,_.params),l.push({params:s,pathname:cs([a,_.pathname]),pathnameBase:Sx(cs([a,_.pathnameBase])),route:I}),_.pathnameBase!=="/"&&(a=cs([a,_.pathnameBase]))}return l}function _x(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=wx(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:r.reduce((m,v,_)=>{let{paramName:I,isOptional:R}=v;if(I==="*"){let U=h[_]||"";l=a.slice(0,a.length-U.length).replace(/(.)\/+$/,"$1")}const M=h[_];return R&&!M?m[I]=void 0:m[I]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:l,pattern:n}}function wx(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Dw(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,h,f)=>(r.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function Ex(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Dw(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function dg(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function Ix(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?fl(n):n;return{pathname:t?t.startsWith("/")?t:Tx(t,e):e,search:Ax(r),hash:Rx(s)}}function Tx(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function em(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xx(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ow(n,e){let t=xx(n);return e?t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Lw(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=fl(n):(s=zu({},n),Nt(!s.pathname||!s.pathname.includes("?"),em("?","pathname","search",s)),Nt(!s.pathname||!s.pathname.includes("#"),em("#","pathname","hash",s)),Nt(!s.search||!s.search.includes("#"),em("#","search","hash",s)));let a=n===""||s.pathname==="",l=a?"/":s.pathname,h;if(l==null)h=t;else{let _=e.length-1;if(!r&&l.startsWith("..")){let I=l.split("/");for(;I[0]==="..";)I.shift(),_-=1;s.pathname=I.join("/")}h=_>=0?e[_]:"/"}let f=Ix(s,h),m=l&&l!=="/"&&l.endsWith("/"),v=(a||l===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||v)&&(f.pathname+="/"),f}const cs=n=>n.join("/").replace(/\/\/+/g,"/"),Sx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Ax=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Rx=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function kx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Mw=["post","put","patch","delete"];new Set(Mw);const Px=["get",...Mw];new Set(Px);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Bu.apply(this,arguments)}const fg=z.createContext(null),Cx=z.createContext(null),Vo=z.createContext(null),Ud=z.createContext(null),Ts=z.createContext({outlet:null,matches:[],isDataRoute:!1}),Fw=z.createContext(null);function bx(n,e){let{relative:t}=e===void 0?{}:e;tc()||Nt(!1);let{basename:r,navigator:s}=z.useContext(Vo),{hash:a,pathname:l,search:h}=jw(n,{relative:t}),f=l;return r!=="/"&&(f=l==="/"?r:cs([r,l])),s.createHref({pathname:f,search:h,hash:a})}function tc(){return z.useContext(Ud)!=null}function pl(){return tc()||Nt(!1),z.useContext(Ud).location}function Uw(n){z.useContext(Vo).static||z.useLayoutEffect(n)}function ml(){let{isDataRoute:n}=z.useContext(Ts);return n?qx():Dx()}function Dx(){tc()||Nt(!1);let n=z.useContext(fg),{basename:e,future:t,navigator:r}=z.useContext(Vo),{matches:s}=z.useContext(Ts),{pathname:a}=pl(),l=JSON.stringify(Ow(s,t.v7_relativeSplatPath)),h=z.useRef(!1);return Uw(()=>{h.current=!0}),z.useCallback(function(m,v){if(v===void 0&&(v={}),!h.current)return;if(typeof m=="number"){r.go(m);return}let _=Lw(m,JSON.parse(l),a,v.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:cs([e,_.pathname])),(v.replace?r.replace:r.push)(_,v.state,v)},[e,r,l,a,n])}function HD(){let{matches:n}=z.useContext(Ts),e=n[n.length-1];return e?e.params:{}}function jw(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=z.useContext(Vo),{matches:s}=z.useContext(Ts),{pathname:a}=pl(),l=JSON.stringify(Ow(s,r.v7_relativeSplatPath));return z.useMemo(()=>Lw(n,JSON.parse(l),a,t==="path"),[n,l,a,t])}function Nx(n,e){return Vx(n,e)}function Vx(n,e,t,r){tc()||Nt(!1);let{navigator:s}=z.useContext(Vo),{matches:a}=z.useContext(Ts),l=a[a.length-1],h=l?l.params:{};l&&l.pathname;let f=l?l.pathnameBase:"/";l&&l.route;let m=pl(),v;if(e){var _;let V=typeof e=="string"?fl(e):e;f==="/"||(_=V.pathname)!=null&&_.startsWith(f)||Nt(!1),v=V}else v=m;let I=v.pathname||"/",R=I;if(f!=="/"){let V=f.replace(/^\//,"").split("/");R="/"+I.replace(/^\//,"").split("/").slice(V.length).join("/")}let M=ax(n,{pathname:R}),U=Ux(M&&M.map(V=>Object.assign({},V,{params:Object.assign({},h,V.params),pathname:cs([f,s.encodeLocation?s.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?f:cs([f,s.encodeLocation?s.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),a,t,r);return e&&U?z.createElement(Ud.Provider,{value:{location:Bu({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:os.Pop}},U):U}function Ox(){let n=$x(),e=kx(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:s},t):null,null)}const Lx=z.createElement(Ox,null);class Mx extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?z.createElement(Ts.Provider,{value:this.props.routeContext},z.createElement(Fw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Fx(n){let{routeContext:e,match:t,children:r}=n,s=z.useContext(fg);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),z.createElement(Ts.Provider,{value:e},r)}function Ux(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let l=n,h=(s=t)==null?void 0:s.errors;if(h!=null){let v=l.findIndex(_=>_.route.id&&h?.[_.route.id]!==void 0);v>=0||Nt(!1),l=l.slice(0,Math.min(l.length,v+1))}let f=!1,m=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<l.length;v++){let _=l[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=v),_.route.id){let{loaderData:I,errors:R}=t,M=_.route.loader&&I[_.route.id]===void 0&&(!R||R[_.route.id]===void 0);if(_.route.lazy||M){f=!0,m>=0?l=l.slice(0,m+1):l=[l[0]];break}}}return l.reduceRight((v,_,I)=>{let R,M=!1,U=null,V=null;t&&(R=h&&_.route.id?h[_.route.id]:void 0,U=_.route.errorElement||Lx,f&&(m<0&&I===0?(Wx("route-fallback"),M=!0,V=null):m===I&&(M=!0,V=_.route.hydrateFallbackElement||null)));let Y=e.concat(l.slice(0,I+1)),ee=()=>{let X;return R?X=U:M?X=V:_.route.Component?X=z.createElement(_.route.Component,null):_.route.element?X=_.route.element:X=v,z.createElement(Fx,{match:_,routeContext:{outlet:v,matches:Y,isDataRoute:t!=null},children:X})};return t&&(_.route.ErrorBoundary||_.route.errorElement||I===0)?z.createElement(Mx,{location:t.location,revalidation:t.revalidation,component:U,error:R,children:ee(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):ee()},null)}var zw=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(zw||{}),Bw=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Bw||{});function jx(n){let e=z.useContext(fg);return e||Nt(!1),e}function zx(n){let e=z.useContext(Cx);return e||Nt(!1),e}function Bx(n){let e=z.useContext(Ts);return e||Nt(!1),e}function $w(n){let e=Bx(),t=e.matches[e.matches.length-1];return t.route.id||Nt(!1),t.route.id}function $x(){var n;let e=z.useContext(Fw),t=zx(),r=$w();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function qx(){let{router:n}=jx(zw.UseNavigateStable),e=$w(Bw.UseNavigateStable),t=z.useRef(!1);return Uw(()=>{t.current=!0}),z.useCallback(function(s,a){a===void 0&&(a={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,Bu({fromRouteId:e},a)))},[n,e])}const e_={};function Wx(n,e,t){e_[n]||(e_[n]=!0)}function Hx(n,e){n?.v7_startTransition,n?.v7_relativeSplatPath}function yt(n){Nt(!1)}function Gx(n){let{basename:e="/",children:t=null,location:r,navigationType:s=os.Pop,navigator:a,static:l=!1,future:h}=n;tc()&&Nt(!1);let f=e.replace(/^\/*/,"/"),m=z.useMemo(()=>({basename:f,navigator:a,static:l,future:Bu({v7_relativeSplatPath:!1},h)}),[f,h,a,l]);typeof r=="string"&&(r=fl(r));let{pathname:v="/",search:_="",hash:I="",state:R=null,key:M="default"}=r,U=z.useMemo(()=>{let V=dg(v,f);return V==null?null:{location:{pathname:V,search:_,hash:I,state:R,key:M},navigationType:s}},[f,v,_,I,R,M,s]);return U==null?null:z.createElement(Vo.Provider,{value:m},z.createElement(Ud.Provider,{children:t,value:U}))}function Kx(n){let{children:e,location:t}=n;return Nx(xm(e),t)}new Promise(()=>{});function xm(n,e){e===void 0&&(e=[]);let t=[];return z.Children.forEach(n,(r,s)=>{if(!z.isValidElement(r))return;let a=[...e,s];if(r.type===z.Fragment){t.push.apply(t,xm(r.props.children,a));return}r.type!==yt&&Nt(!1),!r.props.index||!r.props.children||Nt(!1);let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=xm(r.props.children,a)),t.push(l)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sm(){return Sm=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Sm.apply(this,arguments)}function Qx(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,a;for(a=0;a<r.length;a++)s=r[a],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function Yx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Jx(n,e){return n.button===0&&(!e||e==="_self")&&!Yx(n)}function Am(n){return n===void 0&&(n=""),new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((e,t)=>{let r=n[t];return e.concat(Array.isArray(r)?r.map(s=>[t,s]):[[t,r]])},[]))}function Xx(n,e){let t=Am(n);return e&&e.forEach((r,s)=>{t.has(s)||e.getAll(s).forEach(a=>{t.append(s,a)})}),t}const Zx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],eS="6";try{window.__reactRouterVersion=eS}catch{}const tS="startTransition",t_=J4[tS];function nS(n){let{basename:e,children:t,future:r,window:s}=n,a=z.useRef();a.current==null&&(a.current=ix({window:s,v5Compat:!0}));let l=a.current,[h,f]=z.useState({action:l.action,location:l.location}),{v7_startTransition:m}=r||{},v=z.useCallback(_=>{m&&t_?t_(()=>f(_)):f(_)},[f,m]);return z.useLayoutEffect(()=>l.listen(v),[l,v]),z.useEffect(()=>Hx(r),[r]),z.createElement(Gx,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:l,future:r})}const rS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sS=z.forwardRef(function(e,t){let{onClick:r,relative:s,reloadDocument:a,replace:l,state:h,target:f,to:m,preventScrollReset:v,viewTransition:_}=e,I=Qx(e,Zx),{basename:R}=z.useContext(Vo),M,U=!1;if(typeof m=="string"&&iS.test(m)&&(M=m,rS))try{let X=new URL(window.location.href),re=m.startsWith("//")?new URL(X.protocol+m):new URL(m),fe=dg(re.pathname,R);re.origin===X.origin&&fe!=null?m=fe+re.search+re.hash:U=!0}catch{}let V=bx(m,{relative:s}),Y=oS(m,{replace:l,state:h,target:f,preventScrollReset:v,relative:s,viewTransition:_});function ee(X){r&&r(X),X.defaultPrevented||Y(X)}return z.createElement("a",Sm({},I,{href:M||V,onClick:U||a?r:ee,ref:t,target:f}))});var n_;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(n_||(n_={}));var r_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(r_||(r_={}));function oS(n,e){let{target:t,replace:r,state:s,preventScrollReset:a,relative:l,viewTransition:h}=e===void 0?{}:e,f=ml(),m=pl(),v=jw(n,{relative:l});return z.useCallback(_=>{if(Jx(_,t)){_.preventDefault();let I=r!==void 0?r:ud(m)===ud(v);f(n,{replace:I,state:s,preventScrollReset:a,relative:l,viewTransition:h})}},[m,f,v,r,s,t,n,a,l,h])}function GD(n){let e=z.useRef(Am(n)),t=z.useRef(!1),r=pl(),s=z.useMemo(()=>Xx(r.search,t.current?null:e.current),[r.search]),a=ml(),l=z.useCallback((h,f)=>{const m=Am(typeof h=="function"?h(s):h);t.current=!0,a("?"+m,f)},[a,s]);return[s,l]}const aS="modulepreload",lS=function(n){return"/"+n},i_={},Ot=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let f=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),h=l?.nonce||l?.getAttribute("nonce");s=f(t.map(m=>{if(m=lS(m),m in i_)return;i_[m]=!0;const v=m.endsWith(".css"),_=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const I=document.createElement("link");if(I.rel=v?"stylesheet":aS,v||(I.as="script"),I.crossOrigin="",I.href=m,h&&I.setAttribute("nonce",h),document.head.appendChild(I),v)return new Promise((R,M)=>{I.addEventListener("load",R),I.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(l){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=l,window.dispatchEvent(h),!h.defaultPrevented)throw l}return s.then(l=>{for(const h of l||[])h.status==="rejected"&&a(h.reason);return e().catch(a)})};var un=function(){return un=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},un.apply(this,arguments)};function pg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Ja(n,e,t){if(t||arguments.length===2)for(var r=0,s=e.length,a;r<s;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return n.concat(a||Array.prototype.slice.call(e))}var ct="-ms-",Vu="-moz-",Ze="-webkit-",qw="comm",jd="rule",mg="decl",uS="@import",Ww="@keyframes",cS="@layer",Hw=Math.abs,gg=String.fromCharCode,Rm=Object.assign;function hS(n,e){return Kt(n,0)^45?(((e<<2^Kt(n,0))<<2^Kt(n,1))<<2^Kt(n,2))<<2^Kt(n,3):0}function Gw(n){return n.trim()}function mi(n,e){return(n=e.exec(n))?n[0]:n}function Me(n,e,t){return n.replace(e,t)}function qh(n,e,t){return n.indexOf(e,t)}function Kt(n,e){return n.charCodeAt(e)|0}function Xa(n,e,t){return n.slice(e,t)}function zr(n){return n.length}function Kw(n){return n.length}function Tu(n,e){return e.push(n),n}function dS(n,e){return n.map(e).join("")}function s_(n,e){return n.filter(function(t){return!mi(t,e)})}var zd=1,Za=1,Qw=0,cr=0,bt=0,gl="";function Bd(n,e,t,r,s,a,l,h){return{value:n,root:e,parent:t,type:r,props:s,children:a,line:zd,column:Za,length:l,return:"",siblings:h}}function es(n,e){return Rm(Bd("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Va(n){for(;n.root;)n=es(n.root,{children:[n]});Tu(n,n.siblings)}function fS(){return bt}function pS(){return bt=cr>0?Kt(gl,--cr):0,Za--,bt===10&&(Za=1,zd--),bt}function Pr(){return bt=cr<Qw?Kt(gl,cr++):0,Za++,bt===10&&(Za=1,zd++),bt}function ho(){return Kt(gl,cr)}function Wh(){return cr}function $d(n,e){return Xa(gl,n,e)}function km(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mS(n){return zd=Za=1,Qw=zr(gl=n),cr=0,[]}function gS(n){return gl="",n}function tm(n){return Gw($d(cr-1,Pm(n===91?n+2:n===40?n+1:n)))}function yS(n){for(;(bt=ho())&&bt<33;)Pr();return km(n)>2||km(bt)>3?"":" "}function vS(n,e){for(;--e&&Pr()&&!(bt<48||bt>102||bt>57&&bt<65||bt>70&&bt<97););return $d(n,Wh()+(e<6&&ho()==32&&Pr()==32))}function Pm(n){for(;Pr();)switch(bt){case n:return cr;case 34:case 39:n!==34&&n!==39&&Pm(bt);break;case 40:n===41&&Pm(n);break;case 92:Pr();break}return cr}function _S(n,e){for(;Pr()&&n+bt!==57;)if(n+bt===84&&ho()===47)break;return"/*"+$d(e,cr-1)+"*"+gg(n===47?n:Pr())}function wS(n){for(;!km(ho());)Pr();return $d(n,cr)}function ES(n){return gS(Hh("",null,null,null,[""],n=mS(n),0,[0],n))}function Hh(n,e,t,r,s,a,l,h,f){for(var m=0,v=0,_=l,I=0,R=0,M=0,U=1,V=1,Y=1,ee=0,X="",re=s,fe=a,J=r,x=X;V;)switch(M=ee,ee=Pr()){case 40:if(M!=108&&Kt(x,_-1)==58){qh(x+=Me(tm(ee),"&","&\f"),"&\f",Hw(m?h[m-1]:0))!=-1&&(Y=-1);break}case 34:case 39:case 91:x+=tm(ee);break;case 9:case 10:case 13:case 32:x+=yS(M);break;case 92:x+=vS(Wh()-1,7);continue;case 47:switch(ho()){case 42:case 47:Tu(IS(_S(Pr(),Wh()),e,t,f),f);break;default:x+="/"}break;case 123*U:h[m++]=zr(x)*Y;case 125*U:case 59:case 0:switch(ee){case 0:case 125:V=0;case 59+v:Y==-1&&(x=Me(x,/\f/g,"")),R>0&&zr(x)-_&&Tu(R>32?a_(x+";",r,t,_-1,f):a_(Me(x," ","")+";",r,t,_-2,f),f);break;case 59:x+=";";default:if(Tu(J=o_(x,e,t,m,v,s,h,X,re=[],fe=[],_,a),a),ee===123)if(v===0)Hh(x,e,J,J,re,a,_,h,fe);else switch(I===99&&Kt(x,3)===110?100:I){case 100:case 108:case 109:case 115:Hh(n,J,J,r&&Tu(o_(n,J,J,0,0,s,h,X,s,re=[],_,fe),fe),s,fe,_,h,r?re:fe);break;default:Hh(x,J,J,J,[""],fe,0,h,fe)}}m=v=R=0,U=Y=1,X=x="",_=l;break;case 58:_=1+zr(x),R=M;default:if(U<1){if(ee==123)--U;else if(ee==125&&U++==0&&pS()==125)continue}switch(x+=gg(ee),ee*U){case 38:Y=v>0?1:(x+="\f",-1);break;case 44:h[m++]=(zr(x)-1)*Y,Y=1;break;case 64:ho()===45&&(x+=tm(Pr())),I=ho(),v=_=zr(X=x+=wS(Wh())),ee++;break;case 45:M===45&&zr(x)==2&&(U=0)}}return a}function o_(n,e,t,r,s,a,l,h,f,m,v,_){for(var I=s-1,R=s===0?a:[""],M=Kw(R),U=0,V=0,Y=0;U<r;++U)for(var ee=0,X=Xa(n,I+1,I=Hw(V=l[U])),re=n;ee<M;++ee)(re=Gw(V>0?R[ee]+" "+X:Me(X,/&\f/g,R[ee])))&&(f[Y++]=re);return Bd(n,e,t,s===0?jd:h,f,m,v,_)}function IS(n,e,t,r){return Bd(n,e,t,qw,gg(fS()),Xa(n,2,-2),0,r)}function a_(n,e,t,r,s){return Bd(n,e,t,mg,Xa(n,0,r),Xa(n,r+1,-1),r,s)}function Yw(n,e,t){switch(hS(n,e)){case 5103:return Ze+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ze+n+n;case 4789:return Vu+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ze+n+Vu+n+ct+n+n;case 5936:switch(Kt(n,e+11)){case 114:return Ze+n+ct+Me(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ze+n+ct+Me(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ze+n+ct+Me(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ze+n+ct+n+n;case 6165:return Ze+n+ct+"flex-"+n+n;case 5187:return Ze+n+Me(n,/(\w+).+(:[^]+)/,Ze+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return Ze+n+ct+"flex-item-"+Me(n,/flex-|-self/g,"")+(mi(n,/flex-|baseline/)?"":ct+"grid-row-"+Me(n,/flex-|-self/g,""))+n;case 4675:return Ze+n+ct+"flex-line-pack"+Me(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ze+n+ct+Me(n,"shrink","negative")+n;case 5292:return Ze+n+ct+Me(n,"basis","preferred-size")+n;case 6060:return Ze+"box-"+Me(n,"-grow","")+Ze+n+ct+Me(n,"grow","positive")+n;case 4554:return Ze+Me(n,/([^-])(transform)/g,"$1"+Ze+"$2")+n;case 6187:return Me(Me(Me(n,/(zoom-|grab)/,Ze+"$1"),/(image-set)/,Ze+"$1"),n,"")+n;case 5495:case 3959:return Me(n,/(image-set\([^]*)/,Ze+"$1$`$1");case 4968:return Me(Me(n,/(.+:)(flex-)?(.*)/,Ze+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ze+n+n;case 4200:if(!mi(n,/flex-|baseline/))return ct+"grid-column-align"+Xa(n,e)+n;break;case 2592:case 3360:return ct+Me(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,s){return e=s,mi(r.props,/grid-\w+-end/)})?~qh(n+(t=t[e].value),"span",0)?n:ct+Me(n,"-start","")+n+ct+"grid-row-span:"+(~qh(t,"span",0)?mi(t,/\d+/):+mi(t,/\d+/)-+mi(n,/\d+/))+";":ct+Me(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return mi(r.props,/grid-\w+-start/)})?n:ct+Me(Me(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Me(n,/(.+)-inline(.+)/,Ze+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zr(n)-1-e>6)switch(Kt(n,e+1)){case 109:if(Kt(n,e+4)!==45)break;case 102:return Me(n,/(.+:)(.+)-([^]+)/,"$1"+Ze+"$2-$3$1"+Vu+(Kt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~qh(n,"stretch",0)?Yw(Me(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Me(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,s,a,l,h,f,m){return ct+s+":"+a+m+(l?ct+s+"-span:"+(h?f:+f-+a)+m:"")+n});case 4949:if(Kt(n,e+6)===121)return Me(n,":",":"+Ze)+n;break;case 6444:switch(Kt(n,Kt(n,14)===45?18:11)){case 120:return Me(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ze+(Kt(n,14)===45?"inline-":"")+"box$3$1"+Ze+"$2$3$1"+ct+"$2box$3")+n;case 100:return Me(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Me(n,"scroll-","scroll-snap-")+n}return n}function cd(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function TS(n,e,t,r){switch(n.type){case cS:if(n.children.length)break;case uS:case mg:return n.return=n.return||n.value;case qw:return"";case Ww:return n.return=n.value+"{"+cd(n.children,r)+"}";case jd:if(!zr(n.value=n.props.join(",")))return""}return zr(t=cd(n.children,r))?n.return=n.value+"{"+t+"}":""}function xS(n){var e=Kw(n);return function(t,r,s,a){for(var l="",h=0;h<e;h++)l+=n[h](t,r,s,a)||"";return l}}function SS(n){return function(e){e.root||(e=e.return)&&n(e)}}function AS(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case mg:n.return=Yw(n.value,n.length,t);return;case Ww:return cd([es(n,{value:Me(n.value,"@","@"+Ze)})],r);case jd:if(n.length)return dS(t=n.props,function(s){switch(mi(s,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Va(es(n,{props:[Me(s,/:(read-\w+)/,":"+Vu+"$1")]})),Va(es(n,{props:[s]})),Rm(n,{props:s_(t,r)});break;case"::placeholder":Va(es(n,{props:[Me(s,/:(plac\w+)/,":"+Ze+"input-$1")]})),Va(es(n,{props:[Me(s,/:(plac\w+)/,":"+Vu+"$1")]})),Va(es(n,{props:[Me(s,/:(plac\w+)/,ct+"input-$1")]})),Va(es(n,{props:[s]})),Rm(n,{props:s_(t,r)});break}return""})}}var RS={},$n={},el=typeof process<"u"&&$n!==void 0&&($n.REACT_APP_SC_ATTR||$n.SC_ATTR)||"data-styled",Jw="active",Xw="data-styled-version",qd="6.1.19",yg=`/*!sc*/
`,hd=typeof window<"u"&&typeof document<"u",kS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$n!==void 0&&$n.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$n.REACT_APP_SC_DISABLE_SPEEDY!==""?$n.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$n.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$n!==void 0&&$n.SC_DISABLE_SPEEDY!==void 0&&$n.SC_DISABLE_SPEEDY!==""&&$n.SC_DISABLE_SPEEDY!=="false"&&$n.SC_DISABLE_SPEEDY),PS={},Wd=Object.freeze([]),tl=Object.freeze({});function Zw(n,e,t){return t===void 0&&(t=tl),n.theme!==t.theme&&n.theme||e||t.theme}var e2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),CS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bS=/(^-|-$)/g;function l_(n){return n.replace(CS,"-").replace(bS,"")}var DS=/(a)(d)/gi,Nh=52,u_=function(n){return String.fromCharCode(n+(n>25?39:97))};function Cm(n){var e,t="";for(e=Math.abs(n);e>Nh;e=e/Nh|0)t=u_(e%Nh)+t;return(u_(e%Nh)+t).replace(DS,"$1-$2")}var nm,t2=5381,Wa=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},n2=function(n){return Wa(t2,n)};function vg(n){return Cm(n2(n)>>>0)}function NS(n){return n.displayName||n.name||"Component"}function rm(n){return typeof n=="string"&&!0}var r2=typeof Symbol=="function"&&Symbol.for,i2=r2?Symbol.for("react.memo"):60115,VS=r2?Symbol.for("react.forward_ref"):60112,OS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},LS={},s2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},MS=((nm={})[VS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nm[i2]=s2,nm);function c_(n){return("type"in(e=n)&&e.type.$$typeof)===i2?s2:"$$typeof"in n?MS[n.$$typeof]:OS;var e}var FS=Object.defineProperty,US=Object.getOwnPropertyNames,h_=Object.getOwnPropertySymbols,jS=Object.getOwnPropertyDescriptor,zS=Object.getPrototypeOf,d_=Object.prototype;function o2(n,e,t){if(typeof e!="string"){if(d_){var r=zS(e);r&&r!==d_&&o2(n,r,t)}var s=US(e);h_&&(s=s.concat(h_(e)));for(var a=c_(n),l=c_(e),h=0;h<s.length;++h){var f=s[h];if(!(f in LS||t&&t[f]||l&&f in l||a&&f in a)){var m=jS(e,f);try{FS(n,f,m)}catch{}}}}return n}function nl(n){return typeof n=="function"}function _g(n){return typeof n=="object"&&"styledComponentId"in n}function uo(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function dd(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function $u(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function bm(n,e,t){if(t===void 0&&(t=!1),!t&&!$u(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=bm(n[r],e[r]);else if($u(e))for(var r in e)n[r]=bm(n[r],e[r]);return n}function wg(n,e){Object.defineProperty(n,"toString",{value:e})}function nc(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var BS=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,a=s;e>=a;)if((a<<=1)<0)throw nc(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var h=this.indexOfGroup(e+1),f=(l=0,t.length);l<f;l++)this.tag.insertRule(h,t[l])&&(this.groupSizes[e]++,h++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),s=r+t;this.groupSizes[e]=0;for(var a=r;a<s;a++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],s=this.indexOfGroup(e),a=s+r,l=s;l<a;l++)t+="".concat(this.tag.getRule(l)).concat(yg);return t},n}(),Gh=new Map,fd=new Map,Kh=1,Vh=function(n){if(Gh.has(n))return Gh.get(n);for(;fd.has(Kh);)Kh++;var e=Kh++;return Gh.set(n,e),fd.set(e,n),e},$S=function(n,e){Kh=e+1,Gh.set(n,e),fd.set(e,n)},qS="style[".concat(el,"][").concat(Xw,'="').concat(qd,'"]'),WS=new RegExp("^".concat(el,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),HS=function(n,e,t){for(var r,s=t.split(","),a=0,l=s.length;a<l;a++)(r=s[a])&&n.registerName(e,r)},GS=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(yg),s=[],a=0,l=r.length;a<l;a++){var h=r[a].trim();if(h){var f=h.match(WS);if(f){var m=0|parseInt(f[1],10),v=f[2];m!==0&&($S(v,m),HS(n,v,f[3]),n.getTag().insertRules(m,s)),s.length=0}else s.push(h)}}},f_=function(n){for(var e=document.querySelectorAll(qS),t=0,r=e.length;t<r;t++){var s=e[t];s&&s.getAttribute(el)!==Jw&&(GS(n,s),s.parentNode&&s.parentNode.removeChild(s))}};function KS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var a2=function(n){var e=document.head,t=n||e,r=document.createElement("style"),s=function(h){var f=Array.from(h.querySelectorAll("style[".concat(el,"]")));return f[f.length-1]}(t),a=s!==void 0?s.nextSibling:null;r.setAttribute(el,Jw),r.setAttribute(Xw,qd);var l=KS();return l&&r.setAttribute("nonce",l),t.insertBefore(r,a),r},QS=function(){function n(e){this.element=a2(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,s=0,a=r.length;s<a;s++){var l=r[s];if(l.ownerNode===t)return l}throw nc(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),YS=function(){function n(e){this.element=a2(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),JS=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),p_=hd,XS={isServer:!hd,useCSSOMInjection:!kS},pd=function(){function n(e,t,r){e===void 0&&(e=tl),t===void 0&&(t={});var s=this;this.options=un(un({},XS),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&hd&&p_&&(p_=!1,f_(this)),wg(this,function(){return function(a){for(var l=a.getTag(),h=l.length,f="",m=function(_){var I=function(Y){return fd.get(Y)}(_);if(I===void 0)return"continue";var R=a.names.get(I),M=l.getGroup(_);if(R===void 0||!R.size||M.length===0)return"continue";var U="".concat(el,".g").concat(_,'[id="').concat(I,'"]'),V="";R!==void 0&&R.forEach(function(Y){Y.length>0&&(V+="".concat(Y,","))}),f+="".concat(M).concat(U,'{content:"').concat(V,'"}').concat(yg)},v=0;v<h;v++)m(v);return f}(s)})}return n.registerId=function(e){return Vh(e)},n.prototype.rehydrate=function(){!this.server&&hd&&f_(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(un(un({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,s=t.target;return t.isServer?new JS(s):r?new QS(s):new YS(s)}(this.options),new BS(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Vh(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Vh(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Vh(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),ZS=/&/g,eA=/^\s*\/\/.*$/gm;function l2(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=l2(t.children,e)),t})}function tA(n){var e,t,r,s=tl,a=s.options,l=a===void 0?tl:a,h=s.plugins,f=h===void 0?Wd:h,m=function(I,R,M){return M.startsWith(t)&&M.endsWith(t)&&M.replaceAll(t,"").length>0?".".concat(e):I},v=f.slice();v.push(function(I){I.type===jd&&I.value.includes("&")&&(I.props[0]=I.props[0].replace(ZS,t).replace(r,m))}),l.prefix&&v.push(AS),v.push(TS);var _=function(I,R,M,U){R===void 0&&(R=""),M===void 0&&(M=""),U===void 0&&(U="&"),e=U,t=R,r=new RegExp("\\".concat(t,"\\b"),"g");var V=I.replace(eA,""),Y=ES(M||R?"".concat(M," ").concat(R," { ").concat(V," }"):V);l.namespace&&(Y=l2(Y,l.namespace));var ee=[];return cd(Y,xS(v.concat(SS(function(X){return ee.push(X)})))),ee};return _.hash=f.length?f.reduce(function(I,R){return R.name||nc(15),Wa(I,R.name)},t2).toString():"",_}var nA=new pd,Dm=tA(),u2=Dt.createContext({shouldForwardProp:void 0,styleSheet:nA,stylis:Dm});u2.Consumer;Dt.createContext(void 0);function Nm(){return z.useContext(u2)}var c2=function(){function n(e,t){var r=this;this.inject=function(s,a){a===void 0&&(a=Dm);var l=r.name+a.hash;s.hasNameForId(r.id,l)||s.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,wg(this,function(){throw nc(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Dm),this.name+e.hash},n}(),rA=function(n){return n>="A"&&n<="Z"};function m_(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;rA(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var h2=function(n){return n==null||n===!1||n===""},d2=function(n){var e,t,r=[];for(var s in n){var a=n[s];n.hasOwnProperty(s)&&!h2(a)&&(Array.isArray(a)&&a.isCss||nl(a)?r.push("".concat(m_(s),":"),a,";"):$u(a)?r.push.apply(r,Ja(Ja(["".concat(s," {")],d2(a),!1),["}"],!1)):r.push("".concat(m_(s),": ").concat((e=s,(t=a)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in RS||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function hs(n,e,t,r){if(h2(n))return[];if(_g(n))return[".".concat(n.styledComponentId)];if(nl(n)){if(!nl(a=n)||a.prototype&&a.prototype.isReactComponent||!e)return[n];var s=n(e);return hs(s,e,t,r)}var a;return n instanceof c2?t?(n.inject(t,r),[n.getName(r)]):[n]:$u(n)?d2(n):Array.isArray(n)?Array.prototype.concat.apply(Wd,n.map(function(l){return hs(l,e,t,r)})):[n.toString()]}function f2(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(nl(t)&&!_g(t))return!1}return!0}var iA=n2(qd),sA=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&f2(e),this.componentId=t,this.baseHash=Wa(iA,t),this.baseStyle=r,pd.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))s=uo(s,this.staticRulesId);else{var a=dd(hs(this.rules,e,t,r)),l=Cm(Wa(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,l)){var h=r(a,".".concat(l),void 0,this.componentId);t.insertRules(this.componentId,l,h)}s=uo(s,l),this.staticRulesId=l}else{for(var f=Wa(this.baseHash,r.hash),m="",v=0;v<this.rules.length;v++){var _=this.rules[v];if(typeof _=="string")m+=_;else if(_){var I=dd(hs(_,e,t,r));f=Wa(f,I+v),m+=I}}if(m){var R=Cm(f>>>0);t.hasNameForId(this.componentId,R)||t.insertRules(this.componentId,R,r(m,".".concat(R),void 0,this.componentId)),s=uo(s,R)}}return s},n}(),Eg=Dt.createContext(void 0);Eg.Consumer;var im={};function oA(n,e,t){var r=_g(n),s=n,a=!rm(n),l=e.attrs,h=l===void 0?Wd:l,f=e.componentId,m=f===void 0?function(re,fe){var J=typeof re!="string"?"sc":l_(re);im[J]=(im[J]||0)+1;var x="".concat(J,"-").concat(vg(qd+J+im[J]));return fe?"".concat(fe,"-").concat(x):x}(e.displayName,e.parentComponentId):f,v=e.displayName,_=v===void 0?function(re){return rm(re)?"styled.".concat(re):"Styled(".concat(NS(re),")")}(n):v,I=e.displayName&&e.componentId?"".concat(l_(e.displayName),"-").concat(e.componentId):e.componentId||m,R=r&&s.attrs?s.attrs.concat(h).filter(Boolean):h,M=e.shouldForwardProp;if(r&&s.shouldForwardProp){var U=s.shouldForwardProp;if(e.shouldForwardProp){var V=e.shouldForwardProp;M=function(re,fe){return U(re,fe)&&V(re,fe)}}else M=U}var Y=new sA(t,I,r?s.componentStyle:void 0);function ee(re,fe){return function(J,x,T){var A=J.attrs,k=J.componentStyle,D=J.defaultProps,L=J.foldedComponentIds,P=J.styledComponentId,Ve=J.target,ot=Dt.useContext(Eg),He=Nm(),Ce=J.shouldForwardProp||He.shouldForwardProp,ue=Zw(x,ot,D)||tl,te=function(he,we,De){for(var Le,je=un(un({},we),{className:void 0,theme:De}),at=0;at<he.length;at+=1){var Tn=nl(Le=he[at])?Le(je):Le;for(var dn in Tn)je[dn]=dn==="className"?uo(je[dn],Tn[dn]):dn==="style"?un(un({},je[dn]),Tn[dn]):Tn[dn]}return we.className&&(je.className=uo(je.className,we.className)),je}(A,x,ue),K=te.as||Ve,N={};for(var j in te)te[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&te.theme===ue||(j==="forwardedAs"?N.as=te.forwardedAs:Ce&&!Ce(j,K)||(N[j]=te[j]));var se=function(he,we){var De=Nm(),Le=he.generateAndInjectStyles(we,De.styleSheet,De.stylis);return Le}(k,te),$=uo(L,P);return se&&($+=" "+se),te.className&&($+=" "+te.className),N[rm(K)&&!e2.has(K)?"class":"className"]=$,T&&(N.ref=T),z.createElement(K,N)}(X,re,fe)}ee.displayName=_;var X=Dt.forwardRef(ee);return X.attrs=R,X.componentStyle=Y,X.displayName=_,X.shouldForwardProp=M,X.foldedComponentIds=r?uo(s.foldedComponentIds,s.styledComponentId):"",X.styledComponentId=I,X.target=r?s.target:n,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(re){this._foldedDefaultProps=r?function(fe){for(var J=[],x=1;x<arguments.length;x++)J[x-1]=arguments[x];for(var T=0,A=J;T<A.length;T++)bm(fe,A[T],!0);return fe}({},s.defaultProps,re):re}}),wg(X,function(){return".".concat(X.styledComponentId)}),a&&o2(X,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function g_(n,e){for(var t=[n[0]],r=0,s=e.length;r<s;r+=1)t.push(e[r],n[r+1]);return t}var y_=function(n){return Object.assign(n,{isCss:!0})};function Ig(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(nl(n)||$u(n))return y_(hs(g_(Wd,Ja([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?hs(r):y_(hs(g_(r,e)))}function Vm(n,e,t){if(t===void 0&&(t=tl),!e)throw nc(1,e);var r=function(s){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return n(e,t,Ig.apply(void 0,Ja([s],a,!1)))};return r.attrs=function(s){return Vm(n,e,un(un({},t),{attrs:Array.prototype.concat(t.attrs,s).filter(Boolean)}))},r.withConfig=function(s){return Vm(n,e,un(un({},t),s))},r}var p2=function(n){return Vm(oA,n)},ne=p2;e2.forEach(function(n){ne[n]=p2(n)});var aA=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=f2(e),pd.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,r,s){var a=s(dd(hs(this.rules,t,r,s)),""),l=this.componentId+e;r.insertRules(l,l,a)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,r,s){e>2&&pd.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,s)},n}();function lA(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var r=Ig.apply(void 0,Ja([n],e,!1)),s="sc-global-".concat(vg(JSON.stringify(r))),a=new aA(r,s),l=function(f){var m=Nm(),v=Dt.useContext(Eg),_=Dt.useRef(m.styleSheet.allocateGSInstance(s)).current;return m.styleSheet.server&&h(_,f,m.styleSheet,v,m.stylis),Dt.useLayoutEffect(function(){if(!m.styleSheet.server)return h(_,f,m.styleSheet,v,m.stylis),function(){return a.removeStyles(_,m.styleSheet)}},[_,f,m.styleSheet,v,m.stylis]),null};function h(f,m,v,_,I){if(a.isStatic)a.renderStyles(f,PS,v,I);else{var R=un(un({},m),{theme:Zw(m,_,l.defaultProps)});a.renderStyles(f,R,v,I)}}return Dt.memo(l)}function m2(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var r=dd(Ig.apply(void 0,Ja([n],e,!1))),s=vg(r);return new c2(s,r)}var g2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v_=Dt.createContext&&Dt.createContext(g2),uA=["attr","size","title"];function cA(n,e){if(n==null)return{};var t=hA(n,e),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function hA(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function md(){return md=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},md.apply(this,arguments)}function __(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function gd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?__(Object(t),!0).forEach(function(r){dA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):__(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function dA(n,e,t){return e=fA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function fA(n){var e=pA(n,"string");return typeof e=="symbol"?e:e+""}function pA(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function y2(n){return n&&n.map((e,t)=>Dt.createElement(e.tag,gd({key:t},e.attr),y2(e.child)))}function ye(n){return e=>Dt.createElement(mA,md({attr:gd({},n.attr)},e),y2(n.child))}function mA(n){var e=t=>{var{attr:r,size:s,title:a}=n,l=cA(n,uA),h=s||t.size||"1em",f;return t.className&&(f=t.className),n.className&&(f=(f?f+" ":"")+n.className),Dt.createElement("svg",md({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:f,style:gd(gd({color:n.color||t.color},t.style),n.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),a&&Dt.createElement("title",null,a),n.children)};return v_!==void 0?Dt.createElement(v_.Consumer,null,t=>e(t)):e(g2)}function KD(n){return ye({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function QD(n){return ye({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(n)}function gA(n){return ye({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"},child:[]}]})(n)}function YD(n){return ye({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(n)}function JD(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(n)}function yA(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(n)}function XD(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function ZD(n){return ye({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(n)}function eN(n){return ye({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(n)}function tN(n){return ye({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(n)}function vA(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function _A(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(n)}function wA(n){return ye({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(n)}function nN(n){return ye({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"},child:[]}]})(n)}function rN(n){return ye({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(n)}function iN(n){return ye({attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"},child:[]}]})(n)}function w_(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(n)}function EA(n){return ye({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(n)}function IA(n){return ye({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(n)}function TA(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(n)}function xA(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(n)}function v2(n){return ye({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(n)}function sN(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(n)}function SA(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(n)}function oN(n){return ye({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(n)}function AA(n){return ye({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(n)}function RA(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(n)}function aN(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(n)}function lN(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(n)}function E_(n){return ye({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(n)}function kA(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(n)}function xu(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(n)}function PA(n){return ye({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(n)}function uN(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"},child:[]}]})(n)}function cN(n){return ye({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"},child:[]}]})(n)}function hN(n){return ye({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(n)}function dN(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(n)}function CA(n){return ye({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"},child:[]}]})(n)}function fN(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(n)}function pN(n){return ye({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(n)}function mN(n){return ye({attr:{viewBox:"0 0 616 512"},child:[{tag:"path",attr:{d:"M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"},child:[]}]})(n)}function Qh(n){return ye({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function gN(n){return ye({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(n)}function yN(n){return ye({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"},child:[]}]})(n)}function I_(n){return ye({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function bA(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"},child:[]}]})(n)}function DA(n){return ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(n)}var T_={};/**
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
 */const _2=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},NA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],l=n[t++],h=n[t++],f=((s&7)<<18|(a&63)<<12|(l&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],l=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|l&63)}}return e.join("")},w2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],l=s+1<n.length,h=l?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,v=a>>2,_=(a&3)<<4|h>>4;let I=(h&15)<<2|m>>6,R=m&63;f||(R=64,l||(I=64)),r.push(t[v],t[_],t[I],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_2(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):NA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],h=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||h==null||m==null||_==null)throw new VA;const I=a<<2|h>>4;if(r.push(I),m!==64){const R=h<<4&240|m>>2;if(r.push(R),_!==64){const M=m<<6&192|_;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class VA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OA=function(n){const e=_2(n);return w2.encodeByteArray(e,!0)},yd=function(n){return OA(n).replace(/\./g,"")},E2=function(n){try{return w2.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MA=()=>LA().__FIREBASE_DEFAULTS__,FA=()=>{if(typeof process>"u"||typeof T_>"u")return;const n=T_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},UA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&E2(n[1]);return e&&JSON.parse(e)},Hd=()=>{try{return MA()||FA()||UA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},I2=n=>{var e,t;return(t=(e=Hd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},T2=n=>{const e=I2(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},x2=()=>{var n;return(n=Hd())===null||n===void 0?void 0:n.config},S2=n=>{var e;return(e=Hd())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class jA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function A2(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[yd(JSON.stringify(t)),yd(JSON.stringify(l)),""].join(".")}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function BA(){var n;const e=(n=Hd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $A(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function WA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HA(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function R2(){return!BA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k2(){try{return typeof indexedDB=="object"}catch{return!1}}function GA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const KA="FirebaseError";class Yr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=KA,Object.setPrototypeOf(this,Yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rc.prototype.create)}}class rc{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],l=a?QA(a,r):"Error",h=`${this.serviceName}: ${l} (${s}).`;return new Yr(s,h,r)}}function QA(n,e){return n.replace(YA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YA=/\{\$([^}]+)}/g;function JA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rl(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],l=e[s];if(x_(a)&&x_(l)){if(!rl(a,l))return!1}else if(a!==l)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function x_(n){return n!==null&&typeof n=="object"}/**
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
 */function yl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Su(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function Au(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function XA(n,e){const t=new ZA(n,e);return t.subscribe.bind(t)}class ZA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");eR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=sm),s.error===void 0&&(s.error=sm),s.complete===void 0&&(s.complete=sm);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sm(){}/**
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
 */function Xe(n){return n&&n._delegate?n._delegate:n}class vs{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ro="[DEFAULT]";/**
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
 */class tR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jA;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rR(e))try{this.getOrInitializeService({instanceIdentifier:ro})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=ro){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ro){return this.instances.has(e)}getOptions(e=ro){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&l.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nR(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ro){return this.component?this.component.multipleInstances?e:ro:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nR(n){return n===ro?void 0:n}function rR(n){return n.instantiationMode==="EAGER"}/**
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
 */class iR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ze;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ze||(ze={}));const sR={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},oR=ze.INFO,aR={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},lR=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=aR[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tg{constructor(e){this.name=e,this._logLevel=oR,this._logHandler=lR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const uR=(n,e)=>e.some(t=>n instanceof t);let S_,A_;function cR(){return S_||(S_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hR(){return A_||(A_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P2=new WeakMap,Om=new WeakMap,C2=new WeakMap,om=new WeakMap,xg=new WeakMap;function dR(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(ds(n.result)),s()},l=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&P2.set(t,n)}).catch(()=>{}),xg.set(e,n),e}function fR(n){if(Om.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),s()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});Om.set(n,e)}let Lm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Om.get(n);if(e==="objectStoreNames")return n.objectStoreNames||C2.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ds(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pR(n){Lm=n(Lm)}function mR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(am(this),e,...t);return C2.set(r,e.sort?e.sort():[e]),ds(r)}:hR().includes(n)?function(...e){return n.apply(am(this),e),ds(P2.get(this))}:function(...e){return ds(n.apply(am(this),e))}}function gR(n){return typeof n=="function"?mR(n):(n instanceof IDBTransaction&&fR(n),uR(n,cR())?new Proxy(n,Lm):n)}function ds(n){if(n instanceof IDBRequest)return dR(n);if(om.has(n))return om.get(n);const e=gR(n);return e!==n&&(om.set(n,e),xg.set(e,n)),e}const am=n=>xg.get(n);function yR(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const l=indexedDB.open(n,e),h=ds(l);return r&&l.addEventListener("upgradeneeded",f=>{r(ds(l.result),f.oldVersion,f.newVersion,ds(l.transaction),f)}),t&&l.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const vR=["get","getKey","getAll","getAllKeys","count"],_R=["put","add","delete","clear"],lm=new Map;function R_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(lm.get(e))return lm.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=_R.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vR.includes(t)))return;const a=async function(l,...h){const f=this.transaction(l,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),s&&f.done]))[0]};return lm.set(e,a),a}pR(n=>({...n,get:(e,t,r)=>R_(e,t)||n.get(e,t,r),has:(e,t)=>!!R_(e,t)||n.has(e,t)}));/**
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
 */class wR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ER(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ER(n){const e=n.getComponent();return e?.type==="VERSION"}const Mm="@firebase/app",k_="0.10.13";/**
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
 */const Ei=new Tg("@firebase/app"),IR="@firebase/app-compat",TR="@firebase/analytics-compat",xR="@firebase/analytics",SR="@firebase/app-check-compat",AR="@firebase/app-check",RR="@firebase/auth",kR="@firebase/auth-compat",PR="@firebase/database",CR="@firebase/data-connect",bR="@firebase/database-compat",DR="@firebase/functions",NR="@firebase/functions-compat",VR="@firebase/installations",OR="@firebase/installations-compat",LR="@firebase/messaging",MR="@firebase/messaging-compat",FR="@firebase/performance",UR="@firebase/performance-compat",jR="@firebase/remote-config",zR="@firebase/remote-config-compat",BR="@firebase/storage",$R="@firebase/storage-compat",qR="@firebase/firestore",WR="@firebase/vertexai-preview",HR="@firebase/firestore-compat",GR="firebase",KR="10.14.1";/**
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
 */const Fm="[DEFAULT]",QR={[Mm]:"fire-core",[IR]:"fire-core-compat",[xR]:"fire-analytics",[TR]:"fire-analytics-compat",[AR]:"fire-app-check",[SR]:"fire-app-check-compat",[RR]:"fire-auth",[kR]:"fire-auth-compat",[PR]:"fire-rtdb",[CR]:"fire-data-connect",[bR]:"fire-rtdb-compat",[DR]:"fire-fn",[NR]:"fire-fn-compat",[VR]:"fire-iid",[OR]:"fire-iid-compat",[LR]:"fire-fcm",[MR]:"fire-fcm-compat",[FR]:"fire-perf",[UR]:"fire-perf-compat",[jR]:"fire-rc",[zR]:"fire-rc-compat",[BR]:"fire-gcs",[$R]:"fire-gcs-compat",[qR]:"fire-fst",[HR]:"fire-fst-compat",[WR]:"fire-vertex","fire-js":"fire-js",[GR]:"fire-js-all"};/**
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
 */const vd=new Map,YR=new Map,Um=new Map;function P_(n,e){try{n.container.addComponent(e)}catch(t){Ei.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _o(n){const e=n.name;if(Um.has(e))return Ei.debug(`There were multiple attempts to register component ${e}.`),!1;Um.set(e,n);for(const t of vd.values())P_(t,n);for(const t of YR.values())P_(t,n);return!0}function Gd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ar(n){return n.settings!==void 0}/**
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
 */const JR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fs=new rc("app","Firebase",JR);/**
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
 */class XR{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fs.create("app-deleted",{appName:this._name})}}/**
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
 */const Oo=KR;function b2(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fm,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw fs.create("bad-app-name",{appName:String(s)});if(t||(t=x2()),!t)throw fs.create("no-options");const a=vd.get(s);if(a){if(rl(t,a.options)&&rl(r,a.config))return a;throw fs.create("duplicate-app",{appName:s})}const l=new iR(s);for(const f of Um.values())l.addComponent(f);const h=new XR(t,r,l);return vd.set(s,h),h}function Sg(n=Fm){const e=vd.get(n);if(!e&&n===Fm&&x2())return b2();if(!e)throw fs.create("no-app",{appName:n});return e}function Wr(n,e,t){var r;let s=(r=QR[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ei.warn(h.join(" "));return}_o(new vs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ZR="firebase-heartbeat-database",ek=1,qu="firebase-heartbeat-store";let um=null;function D2(){return um||(um=yR(ZR,ek,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qu)}catch(t){console.warn(t)}}}}).catch(n=>{throw fs.create("idb-open",{originalErrorMessage:n.message})})),um}async function tk(n){try{const t=(await D2()).transaction(qu),r=await t.objectStore(qu).get(N2(n));return await t.done,r}catch(e){if(e instanceof Yr)Ei.warn(e.message);else{const t=fs.create("idb-get",{originalErrorMessage:e?.message});Ei.warn(t.message)}}}async function C_(n,e){try{const r=(await D2()).transaction(qu,"readwrite");await r.objectStore(qu).put(e,N2(n)),await r.done}catch(t){if(t instanceof Yr)Ei.warn(t.message);else{const r=fs.create("idb-set",{originalErrorMessage:t?.message});Ei.warn(r.message)}}}function N2(n){return`${n.name}!${n.options.appId}`}/**
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
 */const nk=1024,rk=720*60*60*1e3;class ik{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ok(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=b_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const h=new Date(l.date).valueOf();return Date.now()-h<=rk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ei.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=b_(),{heartbeatsToSend:r,unsentEntries:s}=sk(this._heartbeatsCache.heartbeats),a=yd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Ei.warn(t),""}}}function b_(){return new Date().toISOString().substring(0,10)}function sk(n,e=nk){const t=[];let r=n.slice();for(const s of n){const a=t.find(l=>l.agent===s.agent);if(a){if(a.dates.push(s.date),D_(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),D_(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ok{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return k2()?GA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tk(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return C_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return C_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function D_(n){return yd(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ak(n){_o(new vs("platform-logger",e=>new wR(e),"PRIVATE")),_o(new vs("heartbeat",e=>new ik(e),"PRIVATE")),Wr(Mm,k_,n),Wr(Mm,k_,"esm2017"),Wr("fire-js","")}ak("");var lk="firebase",uk="10.14.1";/**
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
 */Wr(lk,uk,"app");function V2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ck=V2,O2=new rc("auth","Firebase",V2());/**
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
 */const _d=new Tg("@firebase/auth");function hk(n,...e){_d.logLevel<=ze.WARN&&_d.warn(`Auth (${Oo}): ${n}`,...e)}function Yh(n,...e){_d.logLevel<=ze.ERROR&&_d.error(`Auth (${Oo}): ${n}`,...e)}/**
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
 */function hr(n,...e){throw Rg(n,...e)}function Vn(n,...e){return Rg(n,...e)}function Ag(n,e,t){const r=Object.assign(Object.assign({},ck()),{[e]:t});return new rc("auth","Firebase",r).create(e,{appName:n.name})}function Hr(n){return Ag(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dk(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&hr(n,"argument-error"),Ag(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return O2.create(n,...e)}function _e(n,e,...t){if(!n)throw Rg(e,...t)}function yi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yh(e),new Error(e)}function Ii(n,e){n||yi(e)}/**
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
 */function jm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function L2(){return N_()==="http:"||N_()==="https:"}function N_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(L2()||qA()||"connection"in navigator)?navigator.onLine:!0}function pk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ic{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ii(t>e,"Short delay should be less than long delay!"),this.isMobile=zA()||WA()}get(){return fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kg(n,e){Ii(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class M2{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gk=new ic(3e4,6e4);function In(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function On(n,e,t,r,s={}){return F2(n,s,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const h=yl(Object.assign({key:n.config.apiKey},l)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return $A()||(m.referrerPolicy="no-referrer"),M2.fetch()(U2(n,n.config.apiHost,t,h),m)})}async function F2(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},mk),e);try{const s=new vk(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw Ru(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const h=a.ok?l.errorMessage:l.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(n,"credential-already-in-use",l);if(f==="EMAIL_EXISTS")throw Ru(n,"email-already-in-use",l);if(f==="USER_DISABLED")throw Ru(n,"user-disabled",l);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Ag(n,v,m);hr(n,v)}}catch(s){if(s instanceof Yr)throw s;hr(n,"network-request-failed",{message:String(s)})}}async function xs(n,e,t,r,s={}){const a=await On(n,e,t,r,s);return"mfaPendingCredential"in a&&hr(n,"multi-factor-auth-required",{_serverResponse:a}),a}function U2(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?kg(n.config,s):`${n.config.apiScheme}://${s}`}function yk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Vn(this.auth,"network-request-failed")),gk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ru(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Vn(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */function V_(n){return n!==void 0&&n.getResponse!==void 0}function O_(n){return n!==void 0&&n.enterprise!==void 0}class _k{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function wk(n){return(await On(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ek(n,e){return On(n,"GET","/v2/recaptchaConfig",In(n,e))}/**
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
 */async function Ik(n,e){return On(n,"POST","/v1/accounts:delete",e)}async function j2(n,e){return On(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ou(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tk(n,e=!1){const t=Xe(n),r=await t.getIdToken(e),s=Pg(r);_e(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,l=a?.sign_in_provider;return{claims:s,token:r,authTime:Ou(cm(s.auth_time)),issuedAtTime:Ou(cm(s.iat)),expirationTime:Ou(cm(s.exp)),signInProvider:l||null,signInSecondFactor:a?.sign_in_second_factor||null}}function cm(n){return Number(n)*1e3}function Pg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Yh("JWT malformed, contained fewer than 3 sections"),null;try{const s=E2(t);return s?JSON.parse(s):(Yh("Failed to decode base64 JWT payload"),null)}catch(s){return Yh("Caught error parsing JWT payload as JSON",s?.toString()),null}}function L_(n){const e=Pg(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function il(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Yr&&xk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Sk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ou(this.lastLoginAt),this.creationTime=Ou(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wu(n){var e;const t=n.auth,r=await n.getIdToken(),s=await il(n,j2(t,{idToken:r}));_e(s?.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?z2(a.providerUserInfo):[],h=Rk(n.providerData,l),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!h?.length,v=f?m:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new zm(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,_)}async function Ak(n){const e=Xe(n);await Wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rk(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function z2(n){return n.map(e=>{var{providerId:t}=e,r=pg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function kk(n,e){const t=await F2(n,{},async()=>{const r=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,l=U2(n,s,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",M2.fetch()(l,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pk(n,e){return On(n,"POST","/v2/accounts:revokeToken",In(n,e))}/**
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
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):L_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=L_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await kk(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,l=new Ha;return r&&(_e(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),s&&(_e(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),a&&(_e(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return yi("not implemented")}}/**
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
 */function Ji(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vi{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=pg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new zm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await il(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Tk(this,e)}reload(){return Ak(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ar(this.auth.app))return Promise.reject(Hr(this.auth));const e=await this.getIdToken();return await il(this,Ik(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,l,h,f,m,v;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,R=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,M=(l=t.photoURL)!==null&&l!==void 0?l:void 0,U=(h=t.tenantId)!==null&&h!==void 0?h:void 0,V=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,Y=(m=t.createdAt)!==null&&m!==void 0?m:void 0,ee=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:X,emailVerified:re,isAnonymous:fe,providerData:J,stsTokenManager:x}=t;_e(X&&x,e,"internal-error");const T=Ha.fromJSON(this.name,x);_e(typeof X=="string",e,"internal-error"),Ji(_,e.name),Ji(I,e.name),_e(typeof re=="boolean",e,"internal-error"),_e(typeof fe=="boolean",e,"internal-error"),Ji(R,e.name),Ji(M,e.name),Ji(U,e.name),Ji(V,e.name),Ji(Y,e.name),Ji(ee,e.name);const A=new vi({uid:X,auth:e,email:I,emailVerified:re,displayName:_,isAnonymous:fe,photoURL:M,phoneNumber:R,tenantId:U,stsTokenManager:T,createdAt:Y,lastLoginAt:ee});return J&&Array.isArray(J)&&(A.providerData=J.map(k=>Object.assign({},k))),V&&(A._redirectEventId=V),A}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ha;s.updateFromServerResponse(t);const a=new vi({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wu(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];_e(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?z2(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!a?.length,h=new Ha;h.updateFromIdToken(r);const f=new vi({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:l}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!a?.length};return Object.assign(f,m),f}}/**
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
 */const M_=new Map;function _i(n){Ii(n instanceof Function,"Expected a class definition");let e=M_.get(n);return e?(Ii(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,M_.set(n,e),e)}/**
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
 */class B2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}B2.type="NONE";const F_=B2;/**
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
 */function Jh(n,e,t){return`firebase:${n}:${e}:${t}`}class Ga{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Jh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Jh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ga(_i(F_),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||_i(F_);const l=Jh(r,e.config.apiKey,e.name);let h=null;for(const m of t)try{const v=await m._get(l);if(v){const _=vi._fromJSON(e,v);m!==a&&(h=_),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Ga(a,e,r):(a=f[0],h&&await a._set(l,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(l)}catch{}})),new Ga(a,e,r))}}/**
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
 */function U_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K2(e))return"Blackberry";if(Q2(e))return"Webos";if(q2(e))return"Safari";if((e.includes("chrome/")||W2(e))&&!e.includes("edge/"))return"Chrome";if(G2(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function $2(n=zt()){return/firefox\//i.test(n)}function q2(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W2(n=zt()){return/crios\//i.test(n)}function H2(n=zt()){return/iemobile/i.test(n)}function G2(n=zt()){return/android/i.test(n)}function K2(n=zt()){return/blackberry/i.test(n)}function Q2(n=zt()){return/webos/i.test(n)}function Cg(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ck(n=zt()){var e;return Cg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bk(){return HA()&&document.documentMode===10}function Y2(n=zt()){return Cg(n)||G2(n)||Q2(n)||K2(n)||/windows phone/i.test(n)||H2(n)}/**
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
 */function J2(n,e=[]){let t;switch(n){case"Browser":t=U_(zt());break;case"Worker":t=`${U_(zt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Oo}/${r}`}/**
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
 */class Dk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((l,h)=>{try{const f=e(a);l(f)}catch(f){h(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Nk(n,e={}){return On(n,"GET","/v2/passwordPolicy",In(n,e))}/**
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
 */const Vk=6;class Ok{constructor(e){var t,r,s,a;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:Vk,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,l,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(l=f.containsNumericCharacter)!==null&&l!==void 0?l:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class Lk{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new j_(this),this.idTokenSubscription=new j_(this),this.beforeStateQueue=new Dk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_i(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ga.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await j2(this,{idToken:e}),r=await vi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ar(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=s?._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&f?.user&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ar(this.app))return Promise.reject(Hr(this));const t=e?Xe(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ar(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ar(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_i(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nk(this),t=new Ok(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rc("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_i(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Ga.create(this,[_i(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(h,this,"internal-error"),h.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{l=!0,f()}}else{const f=e.addObserver(t);return()=>{l=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&hk(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Qn(n){return Xe(n)}class j_{constructor(e){this.auth=e,this.observer=null,this.addObserver=XA(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mk(n){sc=n}function bg(n){return sc.loadJS(n)}function Fk(){return sc.recaptchaV2Script}function Uk(){return sc.recaptchaEnterpriseScript}function jk(){return sc.gapiScript}function X2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const zk="recaptcha-enterprise",Bk="NO_RECAPTCHA";class $k{constructor(e){this.type=zk,this.auth=Qn(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,h)=>{Ek(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new _k(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,l(m.siteKey)}}).catch(f=>{h(f)})})}function s(a,l,h){const f=window.grecaptcha;O_(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{l(m)}).catch(()=>{l(Bk)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,l)=>{r(this.auth).then(h=>{if(!t&&O_(window.grecaptcha))s(h,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Uk();f.length!==0&&(f+=h),bg(f).then(()=>{s(h,a,l)}).catch(m=>{l(m)})}}).catch(h=>{l(h)})})}}async function z_(n,e,t,r=!1){const s=new $k(n);let a;try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function wd(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await z_(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await z_(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
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
 */function qk(n,e){const t=Gd(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(rl(a,e??{}))return s;hr(s,"already-initialized")}return t.initialize({options:e})}function Wk(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(_i);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Hk(n,e,t){const r=Qn(n);_e(r._canInitEmulator,r,"emulator-config-failed"),_e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=Z2(e),{host:l,port:h}=Gk(e),f=h===null?"":`:${h}`;r.config.emulator={url:`${a}//${l}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),Kk()}function Z2(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gk(n){const e=Z2(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:B_(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:B_(l)}}}function B_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Kd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yi("not implemented")}_getIdTokenResponse(e){return yi("not implemented")}_linkToIdToken(e,t){return yi("not implemented")}_getReauthenticationResolver(e){return yi("not implemented")}}async function Qk(n,e){return On(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Yk(n,e){return xs(n,"POST","/v1/accounts:signInWithPassword",In(n,e))}async function eE(n,e){return On(n,"POST","/v1/accounts:sendOobCode",In(n,e))}async function Jk(n,e){return eE(n,e)}async function Xk(n,e){return eE(n,e)}/**
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
 */async function Zk(n,e){return xs(n,"POST","/v1/accounts:signInWithEmailLink",In(n,e))}async function eP(n,e){return xs(n,"POST","/v1/accounts:signInWithEmailLink",In(n,e))}/**
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
 */class Hu extends Kd{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Hu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Hu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wd(e,t,"signInWithPassword",Yk);case"emailLink":return Zk(e,{email:this._email,oobCode:this._password});default:hr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wd(e,r,"signUpPassword",Qk);case"emailLink":return eP(e,{idToken:t,email:this._email,oobCode:this._password});default:hr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ka(n,e){return xs(n,"POST","/v1/accounts:signInWithIdp",In(n,e))}/**
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
 */const tP="http://localhost";class wo extends Kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):hr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=pg(t,["providerId","signInMethod"]);if(!r||!s)return null;const l=new wo(r,s);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Ka(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ka(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ka(e,t)}buildRequest(){const e={requestUri:tP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yl(t)}return e}}/**
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
 */async function nP(n,e){return On(n,"POST","/v1/accounts:sendVerificationCode",In(n,e))}async function rP(n,e){return xs(n,"POST","/v1/accounts:signInWithPhoneNumber",In(n,e))}async function iP(n,e){const t=await xs(n,"POST","/v1/accounts:signInWithPhoneNumber",In(n,e));if(t.temporaryProof)throw Ru(n,"account-exists-with-different-credential",t);return t}const sP={USER_NOT_FOUND:"user-not-found"};async function oP(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return xs(n,"POST","/v1/accounts:signInWithPhoneNumber",In(n,t),sP)}/**
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
 */class fo extends Kd{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new fo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new fo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rP(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return iP(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return oP(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:a}=e;return!r&&!t&&!s&&!a?null:new fo({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:a})}}/**
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
 */function aP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lP(n){const e=Su(Au(n)).link,t=e?Su(Au(e)).deep_link_id:null,r=Su(Au(n)).deep_link_id;return(r?Su(Au(r)).link:null)||r||t||e||n}class Dg{constructor(e){var t,r,s,a,l,h;const f=Su(Au(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,_=aP((s=f.mode)!==null&&s!==void 0?s:null);_e(m&&v&&_,"argument-error"),this.apiKey=m,this.operation=_,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=f.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=lP(e);try{return new Dg(t)}catch{return null}}}/**
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
 */class vl{constructor(){this.providerId=vl.PROVIDER_ID}static credential(e,t){return Hu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Dg.parseLink(t);return _e(r,"argument-error"),Hu._fromEmailAndCode(e,r.code,r.tenantId)}}vl.PROVIDER_ID="password";vl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ng{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oc extends Ng{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ts extends oc{constructor(){super("facebook.com")}static credential(e){return wo._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.FACEBOOK_SIGN_IN_METHOD="facebook.com";ts.PROVIDER_ID="facebook.com";/**
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
 */class gi extends oc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wo._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return gi.credential(t,r)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
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
 */class ns extends oc{constructor(){super("github.com")}static credential(e){return wo._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.GITHUB_SIGN_IN_METHOD="github.com";ns.PROVIDER_ID="github.com";/**
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
 */class rs extends oc{constructor(){super("twitter.com")}static credential(e,t){return wo._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return rs.credential(t,r)}catch{return null}}}rs.TWITTER_SIGN_IN_METHOD="twitter.com";rs.PROVIDER_ID="twitter.com";/**
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
 */async function uP(n,e){return xs(n,"POST","/v1/accounts:signUp",In(n,e))}/**
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
 */class Eo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await vi._fromIdTokenResponse(e,r,s),l=$_(r);return new Eo({user:a,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=$_(r);return new Eo({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function $_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ed extends Yr{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ed.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ed(e,t,r,s)}}function tE(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ed._fromErrorAndOperation(n,a,e,r):a})}/**
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
 */function cP(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}async function nE(n,e,t=!1){const r=await il(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Eo._forOperation(n,"link",r)}async function hP(n,e,t){await Wu(e);const r=cP(e.providerData);_e(r.has(t)===n,e.auth,"provider-already-linked")}/**
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
 */async function dP(n,e,t=!1){const{auth:r}=n;if(ar(r.app))return Promise.reject(Hr(r));const s="reauthenticate";try{const a=await il(n,tE(r,s,e,n),t);_e(a.idToken,r,"internal-error");const l=Pg(a.idToken);_e(l,r,"internal-error");const{sub:h}=l;return _e(n.uid===h,r,"user-mismatch"),Eo._forOperation(n,s,a)}catch(a){throw a?.code==="auth/user-not-found"&&hr(r,"user-mismatch"),a}}/**
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
 */async function rE(n,e,t=!1){if(ar(n.app))return Promise.reject(Hr(n));const r="signIn",s=await tE(n,r,e),a=await Eo._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function iE(n,e){return rE(Qn(n),e)}async function fP(n,e){const t=Xe(n);return await hP(!1,t,e.providerId),nE(t,e)}/**
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
 */async function sE(n){const e=Qn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pP(n,e,t){const r=Qn(n);await wd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Xk)}async function mP(n,e,t){if(ar(n.app))return Promise.reject(Hr(n));const r=Qn(n),l=await wd(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uP).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&sE(n),f}),h=await Eo._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(h.user),h}function gP(n,e,t){return ar(n.app)?Promise.reject(Hr(n)):iE(Xe(n),vl.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sE(n),r})}async function yP(n,e){const t=Xe(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await Jk(t.auth,s);a!==n.email&&await n.reload()}/**
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
 */async function vP(n,e){return On(n,"POST","/v1/accounts:update",e)}/**
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
 */async function _P(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Xe(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},l=await il(r,vP(r.auth,a));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const h=r.providerData.find(({providerId:f})=>f==="password");h&&(h.displayName=r.displayName,h.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}/**
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
 */function wP(n,e){return Xe(n).setPersistence(e)}function oE(n,e,t,r){return Xe(n).onIdTokenChanged(e,t,r)}function EP(n,e,t){return Xe(n).beforeAuthStateChanged(e,t)}function IP(n,e,t,r){return Xe(n).onAuthStateChanged(e,t,r)}function TP(n){return Xe(n).signOut()}/**
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
 */function xP(n,e){return On(n,"POST","/v2/accounts/mfaEnrollment:start",In(n,e))}const Id="__sak";/**
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
 */class aE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Id,"1"),this.storage.removeItem(Id),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SP=1e3,AP=10;class lE extends aE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Y2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,h,f)=>{this.notifyListeners(l,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);bk()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AP):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},SP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lE.type="LOCAL";const uE=lE;/**
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
 */class cE extends aE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cE.type="SESSION";const hE=cE;/**
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
 */function RP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Qd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,l=this.handlersMap[s];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const h=Array.from(l).map(async m=>m(t.origin,a)),f=await RP(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qd.receivers=[];/**
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
 */function Vg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class kP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,l;return new Promise((h,f)=>{const m=Vg("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);l={messageChannel:s,onMessage(_){const I=_;if(I.data.eventId===m)switch(I.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(I.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function Ct(){return window}function PP(n){Ct().location.href=n}/**
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
 */function Og(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function CP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bP(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function DP(){return Og()?self:null}/**
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
 */const dE="firebaseLocalStorageDb",NP=1,Td="firebaseLocalStorage",fE="fbase_key";class ac{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yd(n,e){return n.transaction([Td],e?"readwrite":"readonly").objectStore(Td)}function VP(){const n=indexedDB.deleteDatabase(dE);return new ac(n).toPromise()}function Bm(){const n=indexedDB.open(dE,NP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Td,{keyPath:fE})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Td)?e(r):(r.close(),await VP(),e(await Bm()))})})}async function q_(n,e,t){const r=Yd(n,!0).put({[fE]:e,value:t});return new ac(r).toPromise()}async function OP(n,e){const t=Yd(n,!1).get(e),r=await new ac(t).toPromise();return r===void 0?null:r.value}function W_(n,e){const t=Yd(n,!0).delete(e);return new ac(t).toPromise()}const LP=800,MP=3;class pE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>MP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qd._getInstance(DP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await CP(),!this.activeServiceWorker)return;this.sender=new kP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bm();return await q_(e,Id,"1"),await W_(e,Id),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>q_(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>OP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>W_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Yd(s,!1).getAll();return new ac(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pE.type="LOCAL";const FP=pE;/**
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
 */function UP(n,e){return On(n,"POST","/v2/accounts/mfaSignIn:start",In(n,e))}/**
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
 */const jP=500,zP=6e4,Oh=1e12;class BP{constructor(e){this.auth=e,this.counter=Oh,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new $P(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Oh;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Oh;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Oh;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class $P{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;_e(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=qP(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},zP)},jP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function qP(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const hm=X2("rcb"),WP=new ic(3e4,6e4);class HP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ct().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return _e(GP(t),e,"argument-error"),this.shouldResolveImmediately(t)&&V_(Ct().grecaptcha)?Promise.resolve(Ct().grecaptcha):new Promise((r,s)=>{const a=Ct().setTimeout(()=>{s(Vn(e,"network-request-failed"))},WP.get());Ct()[hm]=()=>{Ct().clearTimeout(a),delete Ct()[hm];const h=Ct().grecaptcha;if(!h||!V_(h)){s(Vn(e,"internal-error"));return}const f=h.render;h.render=(m,v)=>{const _=f(m,v);return this.counter++,_},this.hostLanguage=t,r(h)};const l=`${Fk()}?${yl({onload:hm,render:"explicit",hl:t})}`;bg(l).catch(()=>{clearTimeout(a),s(Vn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ct().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function GP(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class KP{async load(e){return new BP(e)}clearedOneInstance(){}}/**
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
 */const mE="recaptcha",QP={theme:"light",type:"image"};class YP{constructor(e,t,r=Object.assign({},QP)){this.parameters=r,this.type=mE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Qn(e),this.isInvisible=this.parameters.size==="invisible",_e(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;_e(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new KP:new HP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const a=l=>{l&&(this.tokenChangeListeners.delete(a),s(l))};this.tokenChangeListeners.add(a),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){_e(!this.parameters.sitekey,this.auth,"argument-error"),_e(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_e(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ct()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){_e(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_e(L2()&&!Og(),this.auth,"internal-error"),await JP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await wk(this.auth);_e(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _e(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function JP(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class XP{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=fo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ZP(n,e,t){if(ar(n.app))return Promise.reject(Hr(n));const r=Qn(n),s=await gE(r,e,Xe(t));return new XP(s,a=>iE(r,a))}async function gE(n,e,t){var r;const s=await t.verify();try{_e(typeof s=="string",n,"argument-error"),_e(t.type===mE,n,"argument-error");let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a)return _e(l.type==="enroll",n,"internal-error"),(await xP(n,{idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{_e(l.type==="signin",n,"internal-error");const h=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;return _e(h,n,"missing-multi-factor-info"),(await UP(n,{mfaPendingCredential:l.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:l}=await nP(n,{phoneNumber:a.phoneNumber,recaptchaToken:s});return l}}finally{t._reset()}}/**
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
 */class po{constructor(e){this.providerId=po.PROVIDER_ID,this.auth=Qn(e)}verifyPhoneNumber(e,t){return gE(this.auth,e,Xe(t))}static credential(e,t){return fo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return po.credentialFromTaggedObject(t)}static credentialFromError(e){return po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?fo._fromTokenResponse(t,r):null}}po.PROVIDER_ID="phone";po.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function yE(n,e){return e?_i(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Lg extends Kd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ka(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ka(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ka(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eC(n){return rE(n.auth,new Lg(n),n.bypassAuthState)}function tC(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),dP(t,new Lg(n),n.bypassAuthState)}async function nC(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),nE(t,new Lg(n),n.bypassAuthState)}/**
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
 */class vE{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:l,type:h}=e;if(l){this.reject(l);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eC;case"linkViaPopup":case"linkViaRedirect":return nC;case"reauthViaPopup":case"reauthViaRedirect":return tC;default:hr(this.auth,"internal-error")}}resolve(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rC=new ic(2e3,1e4);async function _E(n,e,t){if(ar(n.app))return Promise.reject(Vn(n,"operation-not-supported-in-this-environment"));const r=Qn(n);dk(n,e,Ng);const s=yE(r,t);return new co(r,"signInViaPopup",e,s).executeNotNull()}class co extends vE{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,co.currentPopupAction&&co.currentPopupAction.cancel(),co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Ii(this.filter.length===1,"Popup operations only handle one event");const e=Vg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rC.get())};e()}}co.currentPopupAction=null;/**
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
 */const iC="pendingRedirect",Xh=new Map;class sC extends vE{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Xh.get(this.auth._key());if(!e){try{const r=await oC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Xh.set(this.auth._key(),e)}return this.bypassAuthState||Xh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oC(n,e){const t=uC(e),r=lC(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function aC(n,e){Xh.set(n._key(),e)}function lC(n){return _i(n._redirectPersistence)}function uC(n){return Jh(iC,n.config.apiKey,n.name)}async function cC(n,e){return await Qn(n)._initializationPromise,wE(n,e,!1)}async function wE(n,e,t=!1){if(ar(n.app))return Promise.reject(Hr(n));const r=Qn(n),s=yE(r,e),l=await new sC(r,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const hC=600*1e3;class dC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!EE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Vn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hC&&this.cachedEventUids.clear(),this.cachedEventUids.has(H_(e))}saveEventToCache(e){this.cachedEventUids.add(H_(e)),this.lastProcessedEventTime=Date.now()}}function H_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function EE({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function fC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EE(n);default:return!1}}/**
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
 */async function pC(n,e={}){return On(n,"GET","/v1/projects",e)}/**
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
 */const mC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gC=/^https?/;async function yC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pC(n);for(const t of e)try{if(vC(t))return}catch{}hr(n,"unauthorized-domain")}function vC(n){const e=jm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!gC.test(t))return!1;if(mC.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _C=new ic(3e4,6e4);function G_(){const n=Ct().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wC(n){return new Promise((e,t)=>{var r,s,a;function l(){G_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{G_(),t(Vn(n,"network-request-failed"))},timeout:_C.get()})}if(!((s=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Ct().gapi)===null||a===void 0)&&a.load)l();else{const h=X2("iframefcb");return Ct()[h]=()=>{gapi.load?l():t(Vn(n,"network-request-failed"))},bg(`${jk()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw Zh=null,e})}let Zh=null;function EC(n){return Zh=Zh||wC(n),Zh}/**
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
 */const IC=new ic(5e3,15e3),TC="__/auth/iframe",xC="emulator/auth/iframe",SC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RC(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?kg(e,xC):`https://${n.config.authDomain}/${TC}`,r={apiKey:e.apiKey,appName:n.name,v:Oo},s=AC.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${yl(r).slice(1)}`}async function kC(n){const e=await EC(n),t=Ct().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:RC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SC,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const l=Vn(n,"network-request-failed"),h=Ct().setTimeout(()=>{a(l)},IC.get());function f(){Ct().clearTimeout(h),s(r)}r.ping(f).then(f,()=>{a(l)})}))}/**
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
 */const PC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CC=500,bC=600,DC="_blank",NC="http://localhost";class K_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VC(n,e,t,r=CC,s=bC){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},PC),{width:r.toString(),height:s.toString(),top:a,left:l}),m=zt().toLowerCase();t&&(h=W2(m)?DC:t),$2(m)&&(e=e||NC,f.scrollbars="yes");const v=Object.entries(f).reduce((I,[R,M])=>`${I}${R}=${M},`,"");if(Ck(m)&&h!=="_self")return OC(e||"",h),new K_(null);const _=window.open(e||"",h,v);_e(_,n,"popup-blocked");try{_.focus()}catch{}return new K_(_)}function OC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const LC="__/auth/handler",MC="emulator/auth/handler",FC=encodeURIComponent("fac");async function Q_(n,e,t,r,s,a){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Oo,eventId:s};if(e instanceof Ng){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",JA(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,_]of Object.entries({}))l[v]=_}if(e instanceof oc){const v=e.getScopes().filter(_=>_!=="");v.length>0&&(l.scopes=v.join(","))}n.tenantId&&(l.tid=n.tenantId);const h=l;for(const v of Object.keys(h))h[v]===void 0&&delete h[v];const f=await n._getAppCheckToken(),m=f?`#${FC}=${encodeURIComponent(f)}`:"";return`${UC(n)}?${yl(h).slice(1)}${m}`}function UC({config:n}){return n.emulator?kg(n,MC):`https://${n.authDomain}/${LC}`}/**
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
 */const dm="webStorageSupport";class jC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hE,this._completeRedirectFn=wE,this._overrideRedirectResult=aC}async _openPopup(e,t,r,s){var a;Ii((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await Q_(e,t,r,jm(),s);return VC(e,l,Vg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await Q_(e,t,r,jm(),s);return PP(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Ii(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await kC(e),r=new dC(e);return t.register("authEvent",s=>(_e(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(dm,{type:dm},s=>{var a;const l=(a=s?.[0])===null||a===void 0?void 0:a[dm];l!==void 0&&t(!!l),hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Y2()||q2()||Cg()}}const zC=jC;var Y_="@firebase/auth",J_="1.7.9";/**
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
 */class BC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $C(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qC(n){_o(new vs("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:h}=r.options;_e(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:l,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J2(n)},m=new Lk(r,s,a,f);return Wk(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),_o(new vs("auth-internal",e=>{const t=Qn(e.getProvider("auth").getImmediate());return(r=>new BC(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wr(Y_,J_,$C(n)),Wr(Y_,J_,"esm2017")}/**
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
 */const WC=300,HC=S2("authIdTokenMaxAge")||WC;let X_=null;const GC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>HC)return;const s=t?.token;X_!==s&&(X_=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function KC(n=Sg()){const e=Gd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qk(n,{popupRedirectResolver:zC,persistence:[FP,uE,hE]}),r=S2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=GC(a.toString());EP(t,l,()=>l(t.currentUser)),oE(t,h=>l(h))}}const s=I2("auth");return s&&Hk(t,`http://${s}`),t}function QC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Mk({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Vn("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",QC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qC("Browser");var Z_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mo,IE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,T){function A(){}A.prototype=T.prototype,x.D=T.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(k,D,L){for(var P=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)P[Ve-2]=arguments[Ve];return T.prototype[D].apply(k,P)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,T,A){A||(A=0);var k=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)k[D]=T.charCodeAt(A++)|T.charCodeAt(A++)<<8|T.charCodeAt(A++)<<16|T.charCodeAt(A++)<<24;else for(D=0;16>D;++D)k[D]=T[A++]|T[A++]<<8|T[A++]<<16|T[A++]<<24;T=x.g[0],A=x.g[1],D=x.g[2];var L=x.g[3],P=T+(L^A&(D^L))+k[0]+3614090360&4294967295;T=A+(P<<7&4294967295|P>>>25),P=L+(D^T&(A^D))+k[1]+3905402710&4294967295,L=T+(P<<12&4294967295|P>>>20),P=D+(A^L&(T^A))+k[2]+606105819&4294967295,D=L+(P<<17&4294967295|P>>>15),P=A+(T^D&(L^T))+k[3]+3250441966&4294967295,A=D+(P<<22&4294967295|P>>>10),P=T+(L^A&(D^L))+k[4]+4118548399&4294967295,T=A+(P<<7&4294967295|P>>>25),P=L+(D^T&(A^D))+k[5]+1200080426&4294967295,L=T+(P<<12&4294967295|P>>>20),P=D+(A^L&(T^A))+k[6]+2821735955&4294967295,D=L+(P<<17&4294967295|P>>>15),P=A+(T^D&(L^T))+k[7]+4249261313&4294967295,A=D+(P<<22&4294967295|P>>>10),P=T+(L^A&(D^L))+k[8]+1770035416&4294967295,T=A+(P<<7&4294967295|P>>>25),P=L+(D^T&(A^D))+k[9]+2336552879&4294967295,L=T+(P<<12&4294967295|P>>>20),P=D+(A^L&(T^A))+k[10]+4294925233&4294967295,D=L+(P<<17&4294967295|P>>>15),P=A+(T^D&(L^T))+k[11]+2304563134&4294967295,A=D+(P<<22&4294967295|P>>>10),P=T+(L^A&(D^L))+k[12]+1804603682&4294967295,T=A+(P<<7&4294967295|P>>>25),P=L+(D^T&(A^D))+k[13]+4254626195&4294967295,L=T+(P<<12&4294967295|P>>>20),P=D+(A^L&(T^A))+k[14]+2792965006&4294967295,D=L+(P<<17&4294967295|P>>>15),P=A+(T^D&(L^T))+k[15]+1236535329&4294967295,A=D+(P<<22&4294967295|P>>>10),P=T+(D^L&(A^D))+k[1]+4129170786&4294967295,T=A+(P<<5&4294967295|P>>>27),P=L+(A^D&(T^A))+k[6]+3225465664&4294967295,L=T+(P<<9&4294967295|P>>>23),P=D+(T^A&(L^T))+k[11]+643717713&4294967295,D=L+(P<<14&4294967295|P>>>18),P=A+(L^T&(D^L))+k[0]+3921069994&4294967295,A=D+(P<<20&4294967295|P>>>12),P=T+(D^L&(A^D))+k[5]+3593408605&4294967295,T=A+(P<<5&4294967295|P>>>27),P=L+(A^D&(T^A))+k[10]+38016083&4294967295,L=T+(P<<9&4294967295|P>>>23),P=D+(T^A&(L^T))+k[15]+3634488961&4294967295,D=L+(P<<14&4294967295|P>>>18),P=A+(L^T&(D^L))+k[4]+3889429448&4294967295,A=D+(P<<20&4294967295|P>>>12),P=T+(D^L&(A^D))+k[9]+568446438&4294967295,T=A+(P<<5&4294967295|P>>>27),P=L+(A^D&(T^A))+k[14]+3275163606&4294967295,L=T+(P<<9&4294967295|P>>>23),P=D+(T^A&(L^T))+k[3]+4107603335&4294967295,D=L+(P<<14&4294967295|P>>>18),P=A+(L^T&(D^L))+k[8]+1163531501&4294967295,A=D+(P<<20&4294967295|P>>>12),P=T+(D^L&(A^D))+k[13]+2850285829&4294967295,T=A+(P<<5&4294967295|P>>>27),P=L+(A^D&(T^A))+k[2]+4243563512&4294967295,L=T+(P<<9&4294967295|P>>>23),P=D+(T^A&(L^T))+k[7]+1735328473&4294967295,D=L+(P<<14&4294967295|P>>>18),P=A+(L^T&(D^L))+k[12]+2368359562&4294967295,A=D+(P<<20&4294967295|P>>>12),P=T+(A^D^L)+k[5]+4294588738&4294967295,T=A+(P<<4&4294967295|P>>>28),P=L+(T^A^D)+k[8]+2272392833&4294967295,L=T+(P<<11&4294967295|P>>>21),P=D+(L^T^A)+k[11]+1839030562&4294967295,D=L+(P<<16&4294967295|P>>>16),P=A+(D^L^T)+k[14]+4259657740&4294967295,A=D+(P<<23&4294967295|P>>>9),P=T+(A^D^L)+k[1]+2763975236&4294967295,T=A+(P<<4&4294967295|P>>>28),P=L+(T^A^D)+k[4]+1272893353&4294967295,L=T+(P<<11&4294967295|P>>>21),P=D+(L^T^A)+k[7]+4139469664&4294967295,D=L+(P<<16&4294967295|P>>>16),P=A+(D^L^T)+k[10]+3200236656&4294967295,A=D+(P<<23&4294967295|P>>>9),P=T+(A^D^L)+k[13]+681279174&4294967295,T=A+(P<<4&4294967295|P>>>28),P=L+(T^A^D)+k[0]+3936430074&4294967295,L=T+(P<<11&4294967295|P>>>21),P=D+(L^T^A)+k[3]+3572445317&4294967295,D=L+(P<<16&4294967295|P>>>16),P=A+(D^L^T)+k[6]+76029189&4294967295,A=D+(P<<23&4294967295|P>>>9),P=T+(A^D^L)+k[9]+3654602809&4294967295,T=A+(P<<4&4294967295|P>>>28),P=L+(T^A^D)+k[12]+3873151461&4294967295,L=T+(P<<11&4294967295|P>>>21),P=D+(L^T^A)+k[15]+530742520&4294967295,D=L+(P<<16&4294967295|P>>>16),P=A+(D^L^T)+k[2]+3299628645&4294967295,A=D+(P<<23&4294967295|P>>>9),P=T+(D^(A|~L))+k[0]+4096336452&4294967295,T=A+(P<<6&4294967295|P>>>26),P=L+(A^(T|~D))+k[7]+1126891415&4294967295,L=T+(P<<10&4294967295|P>>>22),P=D+(T^(L|~A))+k[14]+2878612391&4294967295,D=L+(P<<15&4294967295|P>>>17),P=A+(L^(D|~T))+k[5]+4237533241&4294967295,A=D+(P<<21&4294967295|P>>>11),P=T+(D^(A|~L))+k[12]+1700485571&4294967295,T=A+(P<<6&4294967295|P>>>26),P=L+(A^(T|~D))+k[3]+2399980690&4294967295,L=T+(P<<10&4294967295|P>>>22),P=D+(T^(L|~A))+k[10]+4293915773&4294967295,D=L+(P<<15&4294967295|P>>>17),P=A+(L^(D|~T))+k[1]+2240044497&4294967295,A=D+(P<<21&4294967295|P>>>11),P=T+(D^(A|~L))+k[8]+1873313359&4294967295,T=A+(P<<6&4294967295|P>>>26),P=L+(A^(T|~D))+k[15]+4264355552&4294967295,L=T+(P<<10&4294967295|P>>>22),P=D+(T^(L|~A))+k[6]+2734768916&4294967295,D=L+(P<<15&4294967295|P>>>17),P=A+(L^(D|~T))+k[13]+1309151649&4294967295,A=D+(P<<21&4294967295|P>>>11),P=T+(D^(A|~L))+k[4]+4149444226&4294967295,T=A+(P<<6&4294967295|P>>>26),P=L+(A^(T|~D))+k[11]+3174756917&4294967295,L=T+(P<<10&4294967295|P>>>22),P=D+(T^(L|~A))+k[2]+718787259&4294967295,D=L+(P<<15&4294967295|P>>>17),P=A+(L^(D|~T))+k[9]+3951481745&4294967295,x.g[0]=x.g[0]+T&4294967295,x.g[1]=x.g[1]+(D+(P<<21&4294967295|P>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+L&4294967295}r.prototype.u=function(x,T){T===void 0&&(T=x.length);for(var A=T-this.blockSize,k=this.B,D=this.h,L=0;L<T;){if(D==0)for(;L<=A;)s(this,x,L),L+=this.blockSize;if(typeof x=="string"){for(;L<T;)if(k[D++]=x.charCodeAt(L++),D==this.blockSize){s(this,k),D=0;break}}else for(;L<T;)if(k[D++]=x[L++],D==this.blockSize){s(this,k),D=0;break}}this.h=D,this.o+=T},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var T=1;T<x.length-8;++T)x[T]=0;var A=8*this.o;for(T=x.length-8;T<x.length;++T)x[T]=A&255,A/=256;for(this.u(x),x=Array(16),T=A=0;4>T;++T)for(var k=0;32>k;k+=8)x[A++]=this.g[T]>>>k&255;return x};function a(x,T){var A=h;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=T(x)}function l(x,T){this.h=T;for(var A=[],k=!0,D=x.length-1;0<=D;D--){var L=x[D]|0;k&&L==T||(A[D]=L,k=!1)}this.g=A}var h={};function f(x){return-128<=x&&128>x?a(x,function(T){return new l([T|0],0>T?-1:0)}):new l([x|0],0>x?-1:0)}function m(x){if(isNaN(x)||!isFinite(x))return _;if(0>x)return V(m(-x));for(var T=[],A=1,k=0;x>=A;k++)T[k]=x/A|0,A*=4294967296;return new l(T,0)}function v(x,T){if(x.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x.charAt(0)=="-")return V(v(x.substring(1),T));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(T,8)),k=_,D=0;D<x.length;D+=8){var L=Math.min(8,x.length-D),P=parseInt(x.substring(D,D+L),T);8>L?(L=m(Math.pow(T,L)),k=k.j(L).add(m(P))):(k=k.j(A),k=k.add(m(P)))}return k}var _=f(0),I=f(1),R=f(16777216);n=l.prototype,n.m=function(){if(U(this))return-V(this).m();for(var x=0,T=1,A=0;A<this.g.length;A++){var k=this.i(A);x+=(0<=k?k:4294967296+k)*T,T*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(M(this))return"0";if(U(this))return"-"+V(this).toString(x);for(var T=m(Math.pow(x,6)),A=this,k="";;){var D=re(A,T).g;A=Y(A,D.j(T));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=D,M(A))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function M(x){if(x.h!=0)return!1;for(var T=0;T<x.g.length;T++)if(x.g[T]!=0)return!1;return!0}function U(x){return x.h==-1}n.l=function(x){return x=Y(this,x),U(x)?-1:M(x)?0:1};function V(x){for(var T=x.g.length,A=[],k=0;k<T;k++)A[k]=~x.g[k];return new l(A,~x.h).add(I)}n.abs=function(){return U(this)?V(this):this},n.add=function(x){for(var T=Math.max(this.g.length,x.g.length),A=[],k=0,D=0;D<=T;D++){var L=k+(this.i(D)&65535)+(x.i(D)&65535),P=(L>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);k=P>>>16,L&=65535,P&=65535,A[D]=P<<16|L}return new l(A,A[A.length-1]&-2147483648?-1:0)};function Y(x,T){return x.add(V(T))}n.j=function(x){if(M(this)||M(x))return _;if(U(this))return U(x)?V(this).j(V(x)):V(V(this).j(x));if(U(x))return V(this.j(V(x)));if(0>this.l(R)&&0>x.l(R))return m(this.m()*x.m());for(var T=this.g.length+x.g.length,A=[],k=0;k<2*T;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<x.g.length;D++){var L=this.i(k)>>>16,P=this.i(k)&65535,Ve=x.i(D)>>>16,ot=x.i(D)&65535;A[2*k+2*D]+=P*ot,ee(A,2*k+2*D),A[2*k+2*D+1]+=L*ot,ee(A,2*k+2*D+1),A[2*k+2*D+1]+=P*Ve,ee(A,2*k+2*D+1),A[2*k+2*D+2]+=L*Ve,ee(A,2*k+2*D+2)}for(k=0;k<T;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=T;k<2*T;k++)A[k]=0;return new l(A,0)};function ee(x,T){for(;(x[T]&65535)!=x[T];)x[T+1]+=x[T]>>>16,x[T]&=65535,T++}function X(x,T){this.g=x,this.h=T}function re(x,T){if(M(T))throw Error("division by zero");if(M(x))return new X(_,_);if(U(x))return T=re(V(x),T),new X(V(T.g),V(T.h));if(U(T))return T=re(x,V(T)),new X(V(T.g),T.h);if(30<x.g.length){if(U(x)||U(T))throw Error("slowDivide_ only works with positive integers.");for(var A=I,k=T;0>=k.l(x);)A=fe(A),k=fe(k);var D=J(A,1),L=J(k,1);for(k=J(k,2),A=J(A,2);!M(k);){var P=L.add(k);0>=P.l(x)&&(D=D.add(A),L=P),k=J(k,1),A=J(A,1)}return T=Y(x,D.j(T)),new X(D,T)}for(D=_;0<=x.l(T);){for(A=Math.max(1,Math.floor(x.m()/T.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=m(A),P=L.j(T);U(P)||0<P.l(x);)A-=k,L=m(A),P=L.j(T);M(L)&&(L=I),D=D.add(L),x=Y(x,P)}return new X(D,x)}n.A=function(x){return re(this,x).h},n.and=function(x){for(var T=Math.max(this.g.length,x.g.length),A=[],k=0;k<T;k++)A[k]=this.i(k)&x.i(k);return new l(A,this.h&x.h)},n.or=function(x){for(var T=Math.max(this.g.length,x.g.length),A=[],k=0;k<T;k++)A[k]=this.i(k)|x.i(k);return new l(A,this.h|x.h)},n.xor=function(x){for(var T=Math.max(this.g.length,x.g.length),A=[],k=0;k<T;k++)A[k]=this.i(k)^x.i(k);return new l(A,this.h^x.h)};function fe(x){for(var T=x.g.length+1,A=[],k=0;k<T;k++)A[k]=x.i(k)<<1|x.i(k-1)>>>31;return new l(A,x.h)}function J(x,T){var A=T>>5;T%=32;for(var k=x.g.length-A,D=[],L=0;L<k;L++)D[L]=0<T?x.i(L+A)>>>T|x.i(L+A+1)<<32-T:x.i(L+A);return new l(D,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,IE=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=v,mo=l}).apply(typeof Z_<"u"?Z_:typeof self<"u"?self:typeof window<"u"?window:{});var Lh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var TE,ku,xE,ed,$m,SE,AE,RE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,w){return c==Array.prototype||c==Object.prototype||(c[g]=w.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lh=="object"&&Lh];for(var g=0;g<c.length;++g){var w=c[g];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var w=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var B=c[S];if(!(B in w))break e;w=w[B]}c=c[c.length-1],S=w[c],g=g(S),g!=S&&g!=null&&e(w,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var w=0,S=!1,B={next:function(){if(!S&&w<c.length){var Q=w++;return{value:g(Q,c[Q]),done:!1}}return S=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,w){return w})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function v(c,g,w){return c.call.apply(c.bind,arguments)}function _(c,g,w){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,S),c.apply(g,B)}}return function(){return c.apply(g,arguments)}}function I(c,g,w){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:_,I.apply(null,arguments)}function R(c,g){var w=Array.prototype.slice.call(arguments,1);return function(){var S=w.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function M(c,g){function w(){}w.prototype=g.prototype,c.aa=g.prototype,c.prototype=new w,c.prototype.constructor=c,c.Qb=function(S,B,Q){for(var pe=Array(arguments.length-2),et=2;et<arguments.length;et++)pe[et-2]=arguments[et];return g.prototype[B].apply(S,pe)}}function U(c){const g=c.length;if(0<g){const w=Array(g);for(let S=0;S<g;S++)w[S]=c[S];return w}return[]}function V(c,g){for(let w=1;w<arguments.length;w++){const S=arguments[w];if(f(S)){const B=c.length||0,Q=S.length||0;c.length=B+Q;for(let pe=0;pe<Q;pe++)c[B+pe]=S[pe]}else c.push(S)}}class Y{constructor(g,w){this.i=g,this.j=w,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ee(c){return/^[\s\xa0]*$/.test(c)}function X(){var c=h.navigator;return c&&(c=c.userAgent)?c:""}function re(c){return re[" "](c),c}re[" "]=function(){};var fe=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function J(c,g,w){for(const S in c)g.call(w,c[S],S,c)}function x(c,g){for(const w in c)g.call(void 0,c[w],w,c)}function T(c){const g={};for(const w in c)g[w]=c[w];return g}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,g){let w,S;for(let B=1;B<arguments.length;B++){S=arguments[B];for(w in S)c[w]=S[w];for(let Q=0;Q<A.length;Q++)w=A[Q],Object.prototype.hasOwnProperty.call(S,w)&&(c[w]=S[w])}}function D(c){var g=1;c=c.split(":");const w=[];for(;0<g&&c.length;)w.push(c.shift()),g--;return c.length&&w.push(c.join(":")),w}function L(c){h.setTimeout(()=>{throw c},0)}function P(){var c=te;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Ve{constructor(){this.h=this.g=null}add(g,w){const S=ot.get();S.set(g,w),this.h?this.h.next=S:this.g=S,this.h=S}}var ot=new Y(()=>new He,c=>c.reset());class He{constructor(){this.next=this.g=this.h=null}set(g,w){this.h=g,this.g=w,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,ue=!1,te=new Ve,K=()=>{const c=h.Promise.resolve(void 0);Ce=()=>{c.then(N)}};var N=()=>{for(var c;c=P();){try{c.h.call(c.g)}catch(w){L(w)}var g=ot;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ue=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var $=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const w=()=>{};h.addEventListener("test",w,g),h.removeEventListener("test",w,g)}catch{}return c}();function he(c,g){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var w=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(fe){e:{try{re(g.nodeName);var B=!0;break e}catch{}B=!1}B||(g=null)}}else w=="mouseover"?g=c.fromElement:w=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:we[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&he.aa.h.call(this)}}M(he,se);var we={2:"touch",3:"pen",4:"mouse"};he.prototype.h=function(){he.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Le=0;function je(c,g,w,S,B){this.listener=c,this.proxy=null,this.src=g,this.type=w,this.capture=!!S,this.ha=B,this.key=++Le,this.da=this.fa=!1}function at(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Tn(c){this.src=c,this.g={},this.h=0}Tn.prototype.add=function(c,g,w,S,B){var Q=c.toString();c=this.g[Q],c||(c=this.g[Q]=[],this.h++);var pe=Ai(c,g,S,B);return-1<pe?(g=c[pe],w||(g.fa=!1)):(g=new je(g,this.src,Q,!!S,B),g.fa=w,c.push(g)),g};function dn(c,g){var w=g.type;if(w in c.g){var S=c.g[w],B=Array.prototype.indexOf.call(S,g,void 0),Q;(Q=0<=B)&&Array.prototype.splice.call(S,B,1),Q&&(at(g),c.g[w].length==0&&(delete c.g[w],c.h--))}}function Ai(c,g,w,S){for(var B=0;B<c.length;++B){var Q=c[B];if(!Q.da&&Q.listener==g&&Q.capture==!!w&&Q.ha==S)return B}return-1}var Rs="closure_lm_"+(1e6*Math.random()|0),$o={};function Il(c,g,w,S,B){if(Array.isArray(g)){for(var Q=0;Q<g.length;Q++)Il(c,g[Q],w,S,B);return null}return w=Sl(w),c&&c[De]?c.K(g,w,m(S)?!!S.capture:!1,B):Tl(c,g,w,!1,S,B)}function Tl(c,g,w,S,B,Q){if(!g)throw Error("Invalid event type");var pe=m(B)?!!B.capture:!!B,et=Wo(c);if(et||(c[Rs]=et=new Tn(c)),w=et.add(g,w,S,pe,Q),w.proxy)return w;if(S=yc(),w.proxy=S,S.src=c,S.listener=w,c.addEventListener)$||(B=pe),B===void 0&&(B=!1),c.addEventListener(g.toString(),S,B);else if(c.attachEvent)c.attachEvent(Zr(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return w}function yc(){function c(w){return g.call(c.src,c.listener,w)}const g=xl;return c}function qo(c,g,w,S,B){if(Array.isArray(g))for(var Q=0;Q<g.length;Q++)qo(c,g[Q],w,S,B);else S=m(S)?!!S.capture:!!S,w=Sl(w),c&&c[De]?(c=c.i,g=String(g).toString(),g in c.g&&(Q=c.g[g],w=Ai(Q,w,S,B),-1<w&&(at(Q[w]),Array.prototype.splice.call(Q,w,1),Q.length==0&&(delete c.g[g],c.h--)))):c&&(c=Wo(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ai(g,w,S,B)),(w=-1<c?g[c]:null)&&Xr(w))}function Xr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[De])dn(g.i,c);else{var w=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(w,S,c.capture):g.detachEvent?g.detachEvent(Zr(w),S):g.addListener&&g.removeListener&&g.removeListener(S),(w=Wo(g))?(dn(w,c),w.h==0&&(w.src=null,g[Rs]=null)):at(c)}}}function Zr(c){return c in $o?$o[c]:$o[c]="on"+c}function xl(c,g){if(c.da)c=!0;else{g=new he(g,this);var w=c.listener,S=c.ha||c.src;c.fa&&Xr(c),c=w.call(S,g)}return c}function Wo(c){return c=c[Rs],c instanceof Tn?c:null}var Ho="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sl(c){return typeof c=="function"?c:(c[Ho]||(c[Ho]=function(g){return c.handleEvent(g)}),c[Ho])}function Lt(){j.call(this),this.i=new Tn(this),this.M=this,this.F=null}M(Lt,j),Lt.prototype[De]=!0,Lt.prototype.removeEventListener=function(c,g,w,S){qo(this,c,g,w,S)};function Mt(c,g){var w,S=c.F;if(S)for(w=[];S;S=S.F)w.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new se(g,c);else if(g instanceof se)g.target=g.target||c;else{var B=g;g=new se(S,c),k(g,B)}if(B=!0,w)for(var Q=w.length-1;0<=Q;Q--){var pe=g.g=w[Q];B=ei(pe,S,!0,g)&&B}if(pe=g.g=c,B=ei(pe,S,!0,g)&&B,B=ei(pe,S,!1,g)&&B,w)for(Q=0;Q<w.length;Q++)pe=g.g=w[Q],B=ei(pe,S,!1,g)&&B}Lt.prototype.N=function(){if(Lt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var w=c.g[g],S=0;S<w.length;S++)at(w[S]);delete c.g[g],c.h--}}this.F=null},Lt.prototype.K=function(c,g,w,S){return this.i.add(String(c),g,!1,w,S)},Lt.prototype.L=function(c,g,w,S){return this.i.add(String(c),g,!0,w,S)};function ei(c,g,w,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var B=!0,Q=0;Q<g.length;++Q){var pe=g[Q];if(pe&&!pe.da&&pe.capture==w){var et=pe.listener,Ft=pe.ha||pe.src;pe.fa&&dn(c.i,pe),B=et.call(Ft,S)!==!1&&B}}return B&&!S.defaultPrevented}function Al(c,g,w){if(typeof c=="function")w&&(c=I(c,w));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:h.setTimeout(c,g||0)}function Ri(c){c.g=Al(()=>{c.g=null,c.i&&(c.i=!1,Ri(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ks extends j{constructor(g,w){super(),this.m=g,this.l=w,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Ri(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ps(c){j.call(this),this.h=c,this.g={}}M(Ps,j);var Rl=[];function kl(c){J(c.g,function(g,w){this.g.hasOwnProperty(w)&&Xr(g)},c),c.g={}}Ps.prototype.N=function(){Ps.aa.N.call(this),kl(this)},Ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pl=h.JSON.stringify,Cl=h.JSON.parse,bl=class{stringify(c){return h.JSON.stringify(c,void 0)}parse(c){return h.JSON.parse(c,void 0)}};function Cs(){}Cs.prototype.h=null;function Go(c){return c.h||(c.h=c.i())}function Ko(){}var Yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cr(){se.call(this,"d")}M(Cr,se);function Qo(){se.call(this,"c")}M(Qo,se);var br={},Dl=null;function bs(){return Dl=Dl||new Lt}br.La="serverreachability";function Nl(c){se.call(this,br.La,c)}M(Nl,se);function ti(c){const g=bs();Mt(g,new Nl(g))}br.STAT_EVENT="statevent";function Vl(c,g){se.call(this,br.STAT_EVENT,c),this.stat=g}M(Vl,se);function St(c){const g=bs();Mt(g,new Vl(g,c))}br.Ma="timingevent";function Yo(c,g){se.call(this,br.Ma,c),this.size=g}M(Yo,se);function dr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){c()},g)}function Ds(){this.g=!0}Ds.prototype.xa=function(){this.g=!1};function Ns(c,g,w,S,B,Q){c.info(function(){if(c.g)if(Q)for(var pe="",et=Q.split("&"),Ft=0;Ft<et.length;Ft++){var qe=et[Ft].split("=");if(1<qe.length){var $t=qe[0];qe=qe[1];var Rt=$t.split("_");pe=2<=Rt.length&&Rt[1]=="type"?pe+($t+"="+qe+"&"):pe+($t+"=redacted&")}}else pe=null;else pe=Q;return"XMLHTTP REQ ("+S+") [attempt "+B+"]: "+g+`
`+w+`
`+pe})}function Jo(c,g,w,S,B,Q,pe){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+B+"]: "+g+`
`+w+`
`+Q+" "+pe})}function fr(c,g,w,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Tf(c,w)+(S?" "+S:"")})}function Ol(c,g){c.info(function(){return"TIMEOUT: "+g})}Ds.prototype.info=function(){};function Tf(c,g){if(!c.g)return g;if(!g)return null;try{var w=JSON.parse(g);if(w){for(c=0;c<w.length;c++)if(Array.isArray(w[c])){var S=w[c];if(!(2>S.length)){var B=S[1];if(Array.isArray(B)&&!(1>B.length)){var Q=B[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var pe=1;pe<B.length;pe++)B[pe]=""}}}}return Pl(w)}catch{return g}}var Xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pr;function Vs(){}M(Vs,Cs),Vs.prototype.g=function(){return new XMLHttpRequest},Vs.prototype.i=function(){return{}},pr=new Vs;function mr(c,g,w,S){this.j=c,this.i=g,this.l=w,this.R=S||1,this.U=new Ps(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _c}function _c(){this.i=null,this.g="",this.h=!1}var Ll={},Zo={};function ea(c,g,w){c.L=1,c.v=Di(Mn(g)),c.m=w,c.P=!0,Ml(c,null)}function Ml(c,g){c.F=Date.now(),it(c),c.A=Mn(c.v);var w=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Vi(w.i,"t",S),c.C=0,w=c.j.J,c.h=new _c,c.g=Mc(c.j,w?g:null,!c.m),0<c.O&&(c.M=new ks(I(c.Y,c,c.g),c.O)),g=c.U,w=c.g,S=c.ca;var B="readystatechange";Array.isArray(B)||(B&&(Rl[0]=B.toString()),B=Rl);for(var Q=0;Q<B.length;Q++){var pe=Il(w,B[Q],S||g.handleEvent,!1,g.h||g);if(!pe)break;g.g[pe.key]=pe}g=c.H?T(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),ti(),Ns(c.i,c.u,c.A,c.l,c.R,c.m)}mr.prototype.ca=function(c){c=c.target;const g=this.M;g&&Sn(c)==3?g.j():this.Y(c)},mr.prototype.Y=function(c){try{if(c==this.g)e:{const Rt=Sn(this.g);var g=this.g.Ba();const Zn=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||$l(this.g)))){this.J||Rt!=4||g==7||(g==8||0>=Zn?ti(3):ti(2)),Os(this);var w=this.g.Z();this.X=w;t:if(wc(this)){var S=$l(this.g);c="";var B=S.length,Q=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),ki(this);var pe="";break t}this.h.i=new h.TextDecoder}for(g=0;g<B;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!(Q&&g==B-1)});S.length=0,this.h.g+=c,this.C=0,pe=this.h.g}else pe=this.g.oa();if(this.o=w==200,Jo(this.i,this.u,this.A,this.l,this.R,Rt,w),this.o){if(this.T&&!this.K){t:{if(this.g){var et,Ft=this.g;if((et=Ft.g?Ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(et)){var qe=et;break t}}qe=null}if(w=qe)fr(this.i,this.l,w,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fl(this,w);else{this.o=!1,this.s=3,St(12),Jn(this),ki(this);break e}}if(this.P){w=!0;let Un;for(;!this.J&&this.C<pe.length;)if(Un=xf(this,pe),Un==Zo){Rt==4&&(this.s=4,St(14),w=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(Un==Ll){this.s=4,St(15),fr(this.i,this.l,pe,"[Invalid Chunk]"),w=!1;break}else fr(this.i,this.l,Un,null),Fl(this,Un);if(wc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||pe.length!=0||this.h.h||(this.s=1,St(16),w=!1),this.o=this.o&&w,!w)fr(this.i,this.l,pe,"[Invalid Chunked Response]"),Jn(this),ki(this);else if(0<pe.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+pe.length),Wl($t),$t.M=!0,St(11))}}else fr(this.i,this.l,pe,null),Fl(this,pe);Rt==4&&Jn(this),this.o&&!this.J&&(Rt==4?ha(this.j,this):(this.o=!1,it(this)))}else oa(this.g),w==400&&0<pe.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Jn(this),ki(this)}}}catch{}finally{}};function wc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function xf(c,g){var w=c.C,S=g.indexOf(`
`,w);return S==-1?Zo:(w=Number(g.substring(w,S)),isNaN(w)?Ll:(S+=1,S+w>g.length?Zo:(g=g.slice(S,S+w),c.C=S+w,g)))}mr.prototype.cancel=function(){this.J=!0,Jn(this)};function it(c){c.S=Date.now()+c.I,Ec(c,c.I)}function Ec(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=dr(I(c.ba,c),g)}function Os(c){c.B&&(h.clearTimeout(c.B),c.B=null)}mr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ol(this.i,this.A),this.L!=2&&(ti(),St(17)),Jn(this),this.s=2,ki(this)):Ec(this,this.S-c)};function ki(c){c.j.G==0||c.J||ha(c.j,c)}function Jn(c){Os(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,kl(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Fl(c,g){try{var w=c.j;if(w.G!=0&&(w.g==c||fn(w.h,c))){if(!c.K&&fn(w.h,c)&&w.G==3){try{var S=w.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var B=S;if(B[0]==0){e:if(!w.u){if(w.g)if(w.g.F+3e3<c.F)ca(w),wr(w);else break e;ua(w),St(18)}}else w.za=B[1],0<w.za-w.T&&37500>B[2]&&w.F&&w.v==0&&!w.C&&(w.C=dr(I(w.Za,w),6e3));if(1>=Tc(w.h)&&w.ca){try{w.ca()}catch{}w.ca=void 0}}else oi(w,11)}else if((c.K||w.g==c)&&ca(w),!ee(g))for(B=w.Da.g.parse(g),g=0;g<B.length;g++){let qe=B[g];if(w.T=qe[0],qe=qe[1],w.G==2)if(qe[0]=="c"){w.K=qe[1],w.ia=qe[2];const $t=qe[3];$t!=null&&(w.la=$t,w.j.info("VER="+w.la));const Rt=qe[4];Rt!=null&&(w.Aa=Rt,w.j.info("SVER="+w.Aa));const Zn=qe[5];Zn!=null&&typeof Zn=="number"&&0<Zn&&(S=1.5*Zn,w.L=S,w.j.info("backChannelRequestTimeoutMs_="+S)),S=w;const Un=c.g;if(Un){const Bs=Un.g?Un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bs){var Q=S.h;Q.g||Bs.indexOf("spdy")==-1&&Bs.indexOf("quic")==-1&&Bs.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(Ul(Q,Q.h),Q.h=null))}if(S.D){const fa=Un.g?Un.g.getResponseHeader("X-HTTP-Session-Id"):null;fa&&(S.ya=fa,rt(S.I,S.D,fa))}}w.G=3,w.l&&w.l.ua(),w.ba&&(w.R=Date.now()-c.F,w.j.info("Handshake RTT: "+w.R+"ms")),S=w;var pe=c;if(S.qa=Lc(S,S.J?S.ia:null,S.W),pe.K){xc(S.h,pe);var et=pe,Ft=S.L;Ft&&(et.I=Ft),et.B&&(Os(et),it(et)),S.g=pe}else zs(S);0<w.i.length&&Or(w)}else qe[0]!="stop"&&qe[0]!="close"||oi(w,7);else w.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?oi(w,7):Jt(w):qe[0]!="noop"&&w.l&&w.l.ta(qe),w.v=0)}}ti(4)}catch{}}var Ic=class{constructor(c,g){this.g=c,this.map=g}};function Ls(c){this.l=c||10,h.PerformanceNavigationTiming?(c=h.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ln(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Tc(c){return c.h?1:c.g?c.g.size:0}function fn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Ul(c,g){c.g?c.g.add(g):c.h=g}function xc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Ls.prototype.cancel=function(){if(this.i=Sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Sc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const w of c.g.values())g=g.concat(w.D);return g}return U(c.i)}function ta(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],w=c.length,S=0;S<w;S++)g.push(c[S]);return g}g=[],w=0;for(S in c)g[w++]=c[S];return g}function na(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var w=0;w<c;w++)g.push(w);return g}g=[],w=0;for(const S in c)g[w++]=S;return g}}}function Pi(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var w=na(c),S=ta(c),B=S.length,Q=0;Q<B;Q++)g.call(void 0,S[Q],w&&w[Q],c)}var Ms=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sf(c,g){if(c){c=c.split("&");for(var w=0;w<c.length;w++){var S=c[w].indexOf("="),B=null;if(0<=S){var Q=c[w].substring(0,S);B=c[w].substring(S+1)}else Q=c[w];g(Q,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function ni(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ni){this.h=c.h,Fs(this,c.j),this.o=c.o,this.g=c.g,Ci(this,c.s),this.l=c.l;var g=c.i,w=new Dr;w.i=g.i,g.g&&(w.g=new Map(g.g),w.h=g.h),bi(this,w),this.m=c.m}else c&&(g=String(c).match(Ms))?(this.h=!1,Fs(this,g[1]||"",!0),this.o=$e(g[2]||""),this.g=$e(g[3]||"",!0),Ci(this,g[4]),this.l=$e(g[5]||"",!0),bi(this,g[6]||"",!0),this.m=$e(g[7]||"")):(this.h=!1,this.i=new Dr(null,this.h))}ni.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Ni(g,ra,!0),":");var w=this.g;return(w||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ni(g,ra,!0),"@"),c.push(encodeURIComponent(String(w)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),w=this.s,w!=null&&c.push(":",String(w))),(w=this.l)&&(this.g&&w.charAt(0)!="/"&&c.push("/"),c.push(Ni(w,w.charAt(0)=="/"?kc:Rc,!0))),(w=this.i.toString())&&c.push("?",w),(w=this.m)&&c.push("#",Ni(w,jl)),c.join("")};function Mn(c){return new ni(c)}function Fs(c,g,w){c.j=w?$e(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ci(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function bi(c,g,w){g instanceof Dr?(c.i=g,Nr(c.i,c.h)):(w||(g=Ni(g,Pc)),c.i=new Dr(g,c.h))}function rt(c,g,w){c.i.set(g,w)}function Di(c){return rt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function $e(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ni(c,g,w){return typeof c=="string"?(c=encodeURI(c).replace(g,Ac),w&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ac(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ra=/[#\/\?@]/g,Rc=/[#\?:]/g,kc=/[#\?]/g,Pc=/[#\?@]/g,jl=/#/g;function Dr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Yt(c){c.g||(c.g=new Map,c.h=0,c.i&&Sf(c.i,function(g,w){c.add(decodeURIComponent(g.replace(/\+/g," ")),w)}))}n=Dr.prototype,n.add=function(c,g){Yt(this),this.i=null,c=Xn(this,c);var w=this.g.get(c);return w||this.g.set(c,w=[]),w.push(g),this.h+=1,this};function gr(c,g){Yt(c),g=Xn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function yr(c,g){return Yt(c),g=Xn(c,g),c.g.has(g)}n.forEach=function(c,g){Yt(this),this.g.forEach(function(w,S){w.forEach(function(B){c.call(g,B,S,this)},this)},this)},n.na=function(){Yt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),w=[];for(let S=0;S<g.length;S++){const B=c[S];for(let Q=0;Q<B.length;Q++)w.push(g[S])}return w},n.V=function(c){Yt(this);let g=[];if(typeof c=="string")yr(this,c)&&(g=g.concat(this.g.get(Xn(this,c))));else{c=Array.from(this.g.values());for(let w=0;w<c.length;w++)g=g.concat(c[w])}return g},n.set=function(c,g){return Yt(this),this.i=null,c=Xn(this,c),yr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Vi(c,g,w){gr(c,g),0<w.length&&(c.i=null,c.g.set(Xn(c,g),U(w)),c.h+=w.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var w=0;w<g.length;w++){var S=g[w];const Q=encodeURIComponent(String(S)),pe=this.V(S);for(S=0;S<pe.length;S++){var B=Q;pe[S]!==""&&(B+="="+encodeURIComponent(String(pe[S]))),c.push(B)}}return this.i=c.join("&")};function Xn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Nr(c,g){g&&!c.j&&(Yt(c),c.i=null,c.g.forEach(function(w,S){var B=S.toLowerCase();S!=B&&(gr(this,S),Vi(this,B,w))},c)),c.j=g}function Af(c,g){const w=new Ds;if(h.Image){const S=new Image;S.onload=R(xn,w,"TestLoadImage: loaded",!0,g,S),S.onerror=R(xn,w,"TestLoadImage: error",!1,g,S),S.onabort=R(xn,w,"TestLoadImage: abort",!1,g,S),S.ontimeout=R(xn,w,"TestLoadImage: timeout",!1,g,S),h.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function Cc(c,g){const w=new Ds,S=new AbortController,B=setTimeout(()=>{S.abort(),xn(w,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then(Q=>{clearTimeout(B),Q.ok?xn(w,"TestPingServer: ok",!0,g):xn(w,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(B),xn(w,"TestPingServer: error",!1,g)})}function xn(c,g,w,S,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),S(w)}catch{}}function Rf(){this.g=new bl}function bc(c,g,w){const S=w||"";try{Pi(c,function(B,Q){let pe=B;m(B)&&(pe=Pl(B)),g.push(S+Q+"="+encodeURIComponent(pe))})}catch(B){throw g.push(S+"type="+encodeURIComponent("_badmap")),B}}function ri(c){this.l=c.Ub||null,this.j=c.eb||!1}M(ri,Cs),ri.prototype.g=function(){return new Us(this.l,this.j)},ri.prototype.i=function(c){return function(){return c}}({});function Us(c,g){Lt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(Us,Lt),n=Us.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,_r(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||h).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?vr(this):_r(this),this.readyState==3&&Dc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,vr(this))},n.Qa=function(c){this.g&&(this.response=c,vr(this))},n.ga=function(){this.g&&vr(this)};function vr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,_r(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var w=g.next();!w.done;)w=w.value,c.push(w[0]+": "+w[1]),w=g.next();return c.join(`\r
`)};function _r(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ii(c){let g="";return J(c,function(w,S){g+=S,g+=":",g+=w,g+=`\r
`}),g}function Oi(c,g,w){e:{for(S in w){var S=!1;break e}S=!0}S||(w=ii(w),typeof c=="string"?w!=null&&encodeURIComponent(String(w)):rt(c,g,w))}function ht(c){Lt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(ht,Lt);var kf=/^https?$/i,zl=["POST","PUT"];n=ht.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,w,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pr.g(),this.v=this.o?Go(this.o):Go(pr),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(Q){js(this,Q);return}if(c=w||"",w=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var B in S)w.set(B,S[B]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const Q of S.keys())w.set(Q,S.get(Q));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(w.keys()).find(Q=>Q.toLowerCase()=="content-type"),B=h.FormData&&c instanceof h.FormData,!(0<=Array.prototype.indexOf.call(zl,g,void 0))||S||B||w.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,pe]of w)this.g.setRequestHeader(Q,pe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sa(this),this.u=!0,this.g.send(c),this.u=!1}catch(Q){js(this,Q)}};function js(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,ia(c),Fn(c)}function ia(c){c.A||(c.A=!0,Mt(c,"complete"),Mt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Mt(this,"complete"),Mt(this,"abort"),Fn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fn(this,!0)),ht.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Bl(this):this.bb())},n.bb=function(){Bl(this)};function Bl(c){if(c.h&&typeof l<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)Al(c.Ea,0,c);else if(Mt(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const pe=c.Z();e:switch(pe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var w;if(!(w=g)){var S;if(S=pe===0){var B=String(c.D).match(Ms)[1]||null;!B&&h.self&&h.self.location&&(B=h.self.location.protocol.slice(0,-1)),S=!kf.test(B?B.toLowerCase():"")}w=S}if(w)Mt(c,"complete"),Mt(c,"success");else{c.m=6;try{var Q=2<Sn(c)?c.g.statusText:""}catch{Q=""}c.l=Q+" ["+c.Z()+"]",ia(c)}}finally{Fn(c)}}}}function Fn(c,g){if(c.g){sa(c);const w=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Mt(c,"ready");try{w.onreadystatechange=S}catch{}}}function sa(c){c.I&&(h.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Cl(g)}};function $l(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function oa(c){const g={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(ee(c[S]))continue;var w=D(c[S]);const B=w[0];if(w=w[1],typeof w!="string")continue;w=w.trim();const Q=g[B]||[];g[B]=Q,Q.push(w)}x(g,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vr(c,g,w){return w&&w.internalChannelParams&&w.internalChannelParams[c]||g}function ql(c){this.Aa=0,this.i=[],this.j=new Ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vr("baseRetryDelayMs",5e3,c),this.cb=Vr("retryDelaySeedMs",1e4,c),this.Wa=Vr("forwardChannelMaxRetries",2,c),this.wa=Vr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ls(c&&c.concurrentRequestLimit),this.Da=new Rf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ql.prototype,n.la=8,n.G=1,n.connect=function(c,g,w,S){St(0),this.W=c,this.H=g||{},w&&S!==void 0&&(this.H.OSID=w,this.H.OAID=S),this.F=this.X,this.I=Lc(this,null,this.W),Or(this)};function Jt(c){if(aa(c),c.G==3){var g=c.U++,w=Mn(c.I);if(rt(w,"SID",c.K),rt(w,"RID",g),rt(w,"TYPE","terminate"),si(c,w),g=new mr(c,c.j,g),g.L=2,g.v=Di(Mn(w)),w=!1,h.navigator&&h.navigator.sendBeacon)try{w=h.navigator.sendBeacon(g.v.toString(),"")}catch{}!w&&h.Image&&(new Image().src=g.v,w=!0),w||(g.g=Mc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),it(g)}Oc(c)}function wr(c){c.g&&(Wl(c),c.g.cancel(),c.g=null)}function aa(c){wr(c),c.u&&(h.clearTimeout(c.u),c.u=null),ca(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&h.clearTimeout(c.s),c.s=null)}function Or(c){if(!Ln(c.h)&&!c.s){c.s=!0;var g=c.Ga;Ce||K(),ue||(Ce(),ue=!0),te.add(g,c),c.B=0}}function Pf(c,g){return Tc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=dr(I(c.Ga,c,g),Vc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const B=new mr(this,this.j,c);let Q=this.o;if(this.S&&(Q?(Q=T(Q),k(Q,this.S)):Q=this.S),this.m!==null||this.O||(B.H=Q,Q=null),this.P)e:{for(var g=0,w=0;w<this.i.length;w++){t:{var S=this.i[w];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=w;break e}if(g===4096||w===this.i.length-1){g=w+1;break e}}g=1e3}else g=1e3;g=Li(this,B,g),w=Mn(this.I),rt(w,"RID",c),rt(w,"CVER",22),this.D&&rt(w,"X-HTTP-Session-Id",this.D),si(this,w),Q&&(this.O?g="headers="+encodeURIComponent(String(ii(Q)))+"&"+g:this.m&&Oi(w,this.m,Q)),Ul(this.h,B),this.Ua&&rt(w,"TYPE","init"),this.P?(rt(w,"$req",g),rt(w,"SID","null"),B.T=!0,ea(B,w,null)):ea(B,w,g),this.G=2}}else this.G==3&&(c?la(this,c):this.i.length==0||Ln(this.h)||la(this))};function la(c,g){var w;g?w=g.l:w=c.U++;const S=Mn(c.I);rt(S,"SID",c.K),rt(S,"RID",w),rt(S,"AID",c.T),si(c,S),c.m&&c.o&&Oi(S,c.m,c.o),w=new mr(c,c.j,w,c.B+1),c.m===null&&(w.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Li(c,w,1e3),w.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ul(c.h,w),ea(w,S,g)}function si(c,g){c.H&&J(c.H,function(w,S){rt(g,S,w)}),c.l&&Pi({},function(w,S){rt(g,S,w)})}function Li(c,g,w){w=Math.min(c.i.length,w);var S=c.l?I(c.l.Na,c.l,c):null;e:{var B=c.i;let Q=-1;for(;;){const pe=["count="+w];Q==-1?0<w?(Q=B[0].g,pe.push("ofs="+Q)):Q=0:pe.push("ofs="+Q);let et=!0;for(let Ft=0;Ft<w;Ft++){let qe=B[Ft].g;const $t=B[Ft].map;if(qe-=Q,0>qe)Q=Math.max(0,B[Ft].g-100),et=!1;else try{bc($t,pe,"req"+qe+"_")}catch{S&&S($t)}}if(et){S=pe.join("&");break e}}}return c=c.i.splice(0,w),g.D=c,S}function zs(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Ce||K(),ue||(Ce(),ue=!0),te.add(g,c),c.v=0}}function ua(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=dr(I(c.Fa,c),Vc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Nc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=dr(I(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),wr(this),Nc(this))};function Wl(c){c.A!=null&&(h.clearTimeout(c.A),c.A=null)}function Nc(c){c.g=new mr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Mn(c.qa);rt(g,"RID","rpc"),rt(g,"SID",c.K),rt(g,"AID",c.T),rt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&rt(g,"TO",c.ja),rt(g,"TYPE","xmlhttp"),si(c,g),c.m&&c.o&&Oi(g,c.m,c.o),c.L&&(c.g.I=c.L);var w=c.g;c=c.ia,w.L=1,w.v=Di(Mn(g)),w.m=null,w.P=!0,Ml(w,c)}n.Za=function(){this.C!=null&&(this.C=null,wr(this),ua(this),St(19))};function ca(c){c.C!=null&&(h.clearTimeout(c.C),c.C=null)}function ha(c,g){var w=null;if(c.g==g){ca(c),Wl(c),c.g=null;var S=2}else if(fn(c.h,g))w=g.D,xc(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){w=g.m?g.m.length:0,g=Date.now()-g.F;var B=c.B;S=bs(),Mt(S,new Yo(S,w)),Or(c)}else zs(c);else if(B=g.s,B==3||B==0&&0<g.X||!(S==1&&Pf(c,g)||S==2&&ua(c)))switch(w&&0<w.length&&(g=c.h,g.i=g.i.concat(w)),B){case 1:oi(c,5);break;case 4:oi(c,10);break;case 3:oi(c,6);break;default:oi(c,2)}}}function Vc(c,g){let w=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(w*=2),w*g}function oi(c,g){if(c.j.info("Error code "+g),g==2){var w=I(c.fb,c),S=c.Xa;const B=!S;S=new ni(S||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Fs(S,"https"),Di(S),B?Af(S.toString(),w):Cc(S.toString(),w)}else St(2);c.G=0,c.l&&c.l.sa(g),Oc(c),aa(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Oc(c){if(c.G=0,c.ka=[],c.l){const g=Sc(c.h);(g.length!=0||c.i.length!=0)&&(V(c.ka,g),V(c.ka,c.i),c.h.i.length=0,U(c.i),c.i.length=0),c.l.ra()}}function Lc(c,g,w){var S=w instanceof ni?Mn(w):new ni(w);if(S.g!="")g&&(S.g=g+"."+S.g),Ci(S,S.s);else{var B=h.location;S=B.protocol,g=g?g+"."+B.hostname:B.hostname,B=+B.port;var Q=new ni(null);S&&Fs(Q,S),g&&(Q.g=g),B&&Ci(Q,B),w&&(Q.l=w),S=Q}return w=c.D,g=c.ya,w&&g&&rt(S,w,g),rt(S,"VER",c.la),si(c,S),S}function Mc(c,g,w){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new ht(new ri({eb:w})):new ht(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hl(){}n=Hl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function da(){}da.prototype.g=function(c,g){return new pn(c,g)};function pn(c,g){Lt.call(this),this.g=new ql(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ee(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ee(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Lr(this)}M(pn,Lt),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Jt(this.g)},pn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var w={};w.__data__=c,c=w}else this.u&&(w={},w.__data__=Pl(c),c=w);g.i.push(new Ic(g.Ya++,c)),g.G==3&&Or(g)},pn.prototype.N=function(){this.g.l=null,delete this.j,Jt(this.g),delete this.g,pn.aa.N.call(this)};function Fc(c){Cr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const w in g){c=w;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}M(Fc,Cr);function Uc(){Qo.call(this),this.status=1}M(Uc,Qo);function Lr(c){this.g=c}M(Lr,Hl),Lr.prototype.ua=function(){Mt(this.g,"a")},Lr.prototype.ta=function(c){Mt(this.g,new Fc(c))},Lr.prototype.sa=function(c){Mt(this.g,new Uc)},Lr.prototype.ra=function(){Mt(this.g,"b")},da.prototype.createWebChannel=da.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,RE=function(){return new da},AE=function(){return bs()},SE=br,$m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xo.NO_ERROR=0,Xo.TIMEOUT=8,Xo.HTTP_ERROR=6,ed=Xo,vc.COMPLETE="complete",xE=vc,Ko.EventType=Yn,Yn.OPEN="a",Yn.CLOSE="b",Yn.ERROR="c",Yn.MESSAGE="d",Lt.prototype.listen=Lt.prototype.K,ku=Ko,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,TE=ht}).apply(typeof Lh<"u"?Lh:typeof self<"u"?self:typeof window<"u"?window:{});const e1="@firebase/firestore";/**
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
 */class en{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
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
 */let _l="10.14.0";/**
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
 */const Io=new Tg("@firebase/firestore");function ja(){return Io.logLevel}function le(n,...e){if(Io.logLevel<=ze.DEBUG){const t=e.map(Mg);Io.debug(`Firestore (${_l}): ${n}`,...t)}}function vn(n,...e){if(Io.logLevel<=ze.ERROR){const t=e.map(Mg);Io.error(`Firestore (${_l}): ${n}`,...t)}}function To(n,...e){if(Io.logLevel<=ze.WARN){const t=e.map(Mg);Io.warn(`Firestore (${_l}): ${n}`,...t)}}function Mg(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${_l}) INTERNAL ASSERTION FAILED: `+n;throw vn(e),new Error(e)}function Se(n,e){n||Te()}function Ne(n,e){return n}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Yr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class kE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(en.UNAUTHENTICATED))}shutdown(){}}class JC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class XC{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Se(this.o===void 0);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Gr,e.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},h=f=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Gr)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new kE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new en(e)}}class ZC{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=en.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eb{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ZC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(en.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Se(this.o===void 0);const r=a=>{a.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,le("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const s=a=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Se(typeof t.token=="string"),this.R=t.token,new tb(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class PE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=rb(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%e.length))}return r}}function Oe(n,e){return n<e?-1:n>e?1:0}function sl(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function CE(n){return n+"\0"}/**
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
 */class _t{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new de(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new _t(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new _t(0,0))}static max(){return new Ae(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Gu{constructor(e,t,r){t===void 0?t=0:t>e.length&&Te(),r===void 0?r=e.length-t:r>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Gu.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gu?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=e.get(s),l=t.get(s);if(a<l)return-1;if(a>l)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Je extends Gu{construct(e,t,r){return new Je(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new de(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Je(t)}static emptyPath(){return new Je([])}}const ib=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Gu{construct(e,t,r){return new vt(e,t,r)}static isValidIdentifier(e){return ib.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new de(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new de(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new de(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else h==="`"?(l=!l,s++):h!=="."||l?(r+=h,s++):(a(),s++)}if(a(),l)throw new de(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(t)}static emptyPath(){return new vt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Je.fromString(e))}static fromName(e){return new me(Je.fromString(e).popFirst(5))}static empty(){return new me(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Je(e.slice()))}}/**
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
 */class xd{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function qm(n){return n.fields.find(e=>e.kind===2)}function io(n){return n.fields.filter(e=>e.kind!==2)}xd.UNKNOWN_ID=-1;class td{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ku{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ku(0,Kn.min())}}function sb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Ae.fromTimestamp(r===1e9?new _t(t+1,0):new _t(t,r));return new Kn(s,me.empty(),e)}function bE(n){return new Kn(n.readTime,n.key,-1)}class Kn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kn(Ae.min(),me.empty(),-1)}static max(){return new Kn(Ae.max(),me.empty(),-1)}}function Fg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(n.documentKey,e.documentKey),t!==0?t:Oe(n.largestBatchId,e.largestBatchId))}/**
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
 */const DE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Lo(n){if(n.code!==Z.FAILED_PRECONDITION||n.message!==DE)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,r)=>{t(e)})}static reject(e){return new W((t,r)=>{r(e)})}static waitFor(e){return new W((t,r)=>{let s=0,a=0,l=!1;e.forEach(h=>{++s,h.next(()=>{++a,l&&a===s&&t()},f=>r(f))}),l=!0,a===s&&t()})}static or(e){let t=W.resolve(!1);for(const r of e)t=t.next(s=>s?W.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,a)=>{r.push(t.call(this,s,a))}),this.waitFor(r)}static mapArray(e,t){return new W((r,s)=>{const a=e.length,l=new Array(a);let h=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next(v=>{l[m]=v,++h,h===a&&r(l)},v=>s(v))}})}static doWhile(e,t){return new W((r,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):r()};a()})}}/**
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
 */class Jd{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Gr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Lu(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Ug(r.target.error);this.V.reject(new Lu(e,s))}}static open(e,t,r,s){try{return new Jd(t,e.transaction(s,r))}catch(a){throw new Lu(t,a)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(le("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ab(t)}}class ps{constructor(e,t,r){this.name=e,this.version=t,this.p=r,ps.S(zt())===12.2&&vn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return le("SimpleDb","Removing database:",e),so(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!k2())return!1;if(ps.v())return!0;const e=zt(),t=ps.S(e),r=0<t&&t<10,s=VE(e),a=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||a)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(le("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=a=>{const l=a.target.result;t(l)},s.onblocked=()=>{r(new Lu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=a=>{const l=a.target.error;l.name==="VersionError"?r(new de(Z.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):l.name==="InvalidStateError"?r(new de(Z.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+l)):r(new Lu(e,l))},s.onupgradeneeded=a=>{le("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);const l=a.target.result;this.p.O(l,s.transaction,a.oldVersion,this.version).next(()=>{le("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const a=t==="readonly";let l=0;for(;;){++l;try{this.db=await this.M(e);const h=Jd.open(this.db,e,a?"readonly":"readwrite",r),f=s(h).next(m=>(h.g(),m)).catch(m=>(h.abort(m),W.reject(m))).toPromise();return f.catch(()=>{}),await h.m,f}catch(h){const f=h,m=f.name!=="FirebaseError"&&l<3;if(le("SimpleDb","Transaction failed with error:",f.message,"Retrying:",m),this.close(),!m)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}function VE(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class ob{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return so(this.B.delete())}}class Lu extends de{constructor(e,t){super(Z.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ss(n){return n.name==="IndexedDbTransactionError"}class ab{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(le("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(le("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),so(r)}add(e){return le("SimpleDb","ADD",this.store.name,e,e),so(this.store.add(e))}get(e){return so(this.store.get(e)).next(t=>(t===void 0&&(t=null),le("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return le("SimpleDb","DELETE",this.store.name,e),so(this.store.delete(e))}count(){return le("SimpleDb","COUNT",this.store.name),so(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const a=s.getAll(r.range);return new W((l,h)=>{a.onerror=f=>{h(f.target.error)},a.onsuccess=f=>{l(f.target.result)}})}{const a=this.cursor(r),l=[];return this.W(a,(h,f)=>{l.push(f)}).next(()=>l)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new W((s,a)=>{r.onerror=l=>{a(l.target.error)},r.onsuccess=l=>{s(l.target.result)}})}j(e,t){le("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(a,l,h)=>h.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new W((r,s)=>{t.onerror=a=>{const l=Ug(a.target.error);s(l)},t.onsuccess=a=>{const l=a.target.result;l?e(l.primaryKey,l.value).next(h=>{h?l.continue():r()}):r()}})}W(e,t){const r=[];return new W((s,a)=>{e.onerror=l=>{a(l.target.error)},e.onsuccess=l=>{const h=l.target.result;if(!h)return void s();const f=new ob(h),m=t(h.primaryKey,h.value,f);if(m instanceof W){const v=m.catch(_=>(f.done(),W.reject(_)));r.push(v)}f.isDone?s():f.K===null?h.continue():h.continue(f.K)}}).next(()=>W.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function so(n){return new W((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Ug(r.target.error);t(s)}})}let t1=!1;function Ug(n){const e=ps.S(zt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new de("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return t1||(t1=!0,setTimeout(()=>{throw r},0)),r}}return n}class lb{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){le("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{le("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Ss(t)?le("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Lo(t)}await this.X(6e4)})}}class ub{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,a=!0;return W.doWhile(()=>a===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(l=>{if(l!==null&&!r.has(l))return le("IndexBackfiller",`Processing collection: ${l}`),this.ne(e,l,s).next(h=>{s-=h,r.add(l)});a=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(a=>{const l=a.changes;return this.localStore.indexManager.updateIndexEntries(e,l).next(()=>this.re(s,a)).next(h=>(le("IndexBackfiller",`Updating offset: ${h}`),this.localStore.indexManager.updateCollectionGroup(e,t,h))).next(()=>l.size)}))}re(e,t){let r=e;return t.changes.forEach((s,a)=>{const l=bE(a);Fg(l,r)>0&&(r=l)}),new Kn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class lr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}lr.oe=-1;function Xd(n){return n==null}function Qu(n){return n===0&&1/n==-1/0}function cb(n){return typeof n=="number"&&Number.isInteger(n)&&!Qu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function _n(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=n1(e)),e=hb(n.get(t),e);return n1(e)}function hb(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function n1(n){return n+""}function Br(n){const e=n.length;if(Se(e>=2),e===2)return Se(n.charAt(0)===""&&n.charAt(1)===""),Je.emptyPath();const t=e-2,r=[];let s="";for(let a=0;a<e;){const l=n.indexOf("",a);switch((l<0||l>t)&&Te(),n.charAt(l+1)){case"":const h=n.substring(a,l);let f;s.length===0?f=h:(s+=h,f=s,s=""),r.push(f);break;case"":s+=n.substring(a,l),s+="\0";break;case"":s+=n.substring(a,l+1);break;default:Te()}a=l+2}return new Je(r)}/**
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
 */const r1=["userId","batchId"];/**
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
 */function nd(n,e){return[n,_n(e)]}function OE(n,e,t){return[n,_n(e),t]}const db={},fb=["prefixPath","collectionGroup","readTime","documentId"],pb=["prefixPath","collectionGroup","documentId"],mb=["collectionGroup","readTime","prefixPath","documentId"],gb=["canonicalId","targetId"],yb=["targetId","path"],vb=["path","targetId"],_b=["collectionId","parent"],wb=["indexId","uid"],Eb=["uid","sequenceNumber"],Ib=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Tb=["indexId","uid","orderedDocumentKey"],xb=["userId","collectionPath","documentId"],Sb=["userId","collectionPath","largestBatchId"],Ab=["userId","collectionGroup","largestBatchId"],LE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Rb=[...LE,"documentOverlays"],ME=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],FE=ME,jg=[...FE,"indexConfiguration","indexState","indexEntries"],kb=jg,Pb=[...jg,"globals"];/**
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
 */class Wm extends NE{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Bt(n,e){const t=Ne(n);return ps.F(t._e,e)}/**
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
 */function i1(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Mo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function UE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class pt{constructor(e,t){this.comparator=e,this.root=t||tn.EMPTY}insert(e,t){return new pt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mh(this.root,e,this.comparator,!0)}}class Mh{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??tn.RED,this.left=s??tn.EMPTY,this.right=a??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new tn(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return tn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,r,s,a){return this}insert(e,t,r){return new tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new s1(this.data.getIterator())}getIteratorFrom(e){return new s1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class s1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Oa(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Nn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Nn([])}unionWith(e){let t=new nt(vt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sl(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class jE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new jE("Invalid base64 string: "+a):a}}(e);return new Vt(t)}static fromUint8Array(e){const t=function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a}(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Cb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(n){if(Se(!!n),typeof n=="string"){let e=0;const t=Cb.exec(n);if(Se(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _s(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
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
 */function Zd(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function zg(n){const e=n.mapValue.fields.__previous_value__;return Zd(e)?zg(e):e}function Yu(n){const e=Ti(n.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class bb{constructor(e,t,r,s,a,l,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=m}}class xo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const as={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},rd={nullValue:"NULL_VALUE"};function So(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zd(n)?4:zE(n)?9007199254740991:ef(n)?10:11:Te()}function Kr(n,e){if(n===e)return!0;const t=So(n);if(t!==So(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Yu(n).isEqual(Yu(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const l=Ti(s.timestampValue),h=Ti(a.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return _s(s.bytesValue).isEqual(_s(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return ft(s.geoPointValue.latitude)===ft(a.geoPointValue.latitude)&&ft(s.geoPointValue.longitude)===ft(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return ft(s.integerValue)===ft(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const l=ft(s.doubleValue),h=ft(a.doubleValue);return l===h?Qu(l)===Qu(h):isNaN(l)&&isNaN(h)}return!1}(n,e);case 9:return sl(n.arrayValue.values||[],e.arrayValue.values||[],Kr);case 10:case 11:return function(s,a){const l=s.mapValue.fields||{},h=a.mapValue.fields||{};if(i1(l)!==i1(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!Kr(l[f],h[f])))return!1;return!0}(n,e);default:return Te()}}function Ju(n,e){return(n.values||[]).find(t=>Kr(t,e))!==void 0}function ws(n,e){if(n===e)return 0;const t=So(n),r=So(e);if(t!==r)return Oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(n.booleanValue,e.booleanValue);case 2:return function(a,l){const h=ft(a.integerValue||a.doubleValue),f=ft(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return o1(n.timestampValue,e.timestampValue);case 4:return o1(Yu(n),Yu(e));case 5:return Oe(n.stringValue,e.stringValue);case 6:return function(a,l){const h=_s(a),f=_s(l);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,l){const h=a.split("/"),f=l.split("/");for(let m=0;m<h.length&&m<f.length;m++){const v=Oe(h[m],f[m]);if(v!==0)return v}return Oe(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,l){const h=Oe(ft(a.latitude),ft(l.latitude));return h!==0?h:Oe(ft(a.longitude),ft(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return a1(n.arrayValue,e.arrayValue);case 10:return function(a,l){var h,f,m,v;const _=a.fields||{},I=l.fields||{},R=(h=_.value)===null||h===void 0?void 0:h.arrayValue,M=(f=I.value)===null||f===void 0?void 0:f.arrayValue,U=Oe(((m=R?.values)===null||m===void 0?void 0:m.length)||0,((v=M?.values)===null||v===void 0?void 0:v.length)||0);return U!==0?U:a1(R,M)}(n.mapValue,e.mapValue);case 11:return function(a,l){if(a===as.mapValue&&l===as.mapValue)return 0;if(a===as.mapValue)return 1;if(l===as.mapValue)return-1;const h=a.fields||{},f=Object.keys(h),m=l.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let _=0;_<f.length&&_<v.length;++_){const I=Oe(f[_],v[_]);if(I!==0)return I;const R=ws(h[f[_]],m[v[_]]);if(R!==0)return R}return Oe(f.length,v.length)}(n.mapValue,e.mapValue);default:throw Te()}}function o1(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Oe(n,e);const t=Ti(n),r=Ti(e),s=Oe(t.seconds,r.seconds);return s!==0?s:Oe(t.nanos,r.nanos)}function a1(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=ws(t[s],r[s]);if(a)return a}return Oe(t.length,r.length)}function ol(n){return Hm(n)}function Hm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ti(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return _s(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return me.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Hm(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const l of r)a?a=!1:s+=",",s+=`${l}:${Hm(t.fields[l])}`;return s+"}"}(n.mapValue):Te()}function Ao(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gm(n){return!!n&&"integerValue"in n}function Xu(n){return!!n&&"arrayValue"in n}function l1(n){return!!n&&"nullValue"in n}function u1(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function id(n){return!!n&&"mapValue"in n}function ef(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Mu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Mo(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Mu(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Mu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const BE={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Db(n){return"nullValue"in n?rd:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ao(xo.empty(),me.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?ef(n)?BE:{mapValue:{}}:Te()}function Nb(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ao(xo.empty(),me.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?BE:"mapValue"in n?ef(n)?{mapValue:{}}:as:Te()}function c1(n,e){const t=ws(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function h1(n,e){const t=ws(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!id(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mu(t)}setAll(e){let t=vt.emptyPath(),r={},s=[];e.forEach((l,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=h.popLast()}l?r[h.lastSegment()]=Mu(l):s.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());id(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Kr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];id(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Mo(t,(s,a)=>e[s]=a);for(const s of r)delete e[s]}clone(){return new ln(Mu(this.value))}}function $E(n){const e=[];return Mo(n.fields,(t,r)=>{const s=new vt([t]);if(id(r)){const a=$E(r.mapValue).fields;if(a.length===0)e.push(s);else for(const l of a)e.push(s.child(l))}else e.push(s)}),new Nn(e)}/**
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
 */class It{constructor(e,t,r,s,a,l,h){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=l,this.documentState=h}static newInvalidDocument(e){return new It(e,0,Ae.min(),Ae.min(),Ae.min(),ln.empty(),0)}static newFoundDocument(e,t,r,s){return new It(e,1,t,Ae.min(),r,s,0)}static newNoDocument(e,t){return new It(e,2,t,Ae.min(),Ae.min(),ln.empty(),0)}static newUnknownDocument(e,t){return new It(e,3,t,Ae.min(),Ae.min(),ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Es{constructor(e,t){this.position=e,this.inclusive=t}}function d1(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],l=n.position[s];if(a.field.isKeyField()?r=me.comparator(me.fromName(l.referenceValue),t.key):r=ws(l,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function f1(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Kr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Vb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class qE{}class Be extends qE{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ob(e,t,r):t==="array-contains"?new Fb(e,r):t==="in"?new YE(e,r):t==="not-in"?new Ub(e,r):t==="array-contains-any"?new jb(e,r):new Be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Lb(e,r):new Mb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ws(t,this.value)):t!==null&&So(this.value)===So(t)&&this.matchesComparison(ws(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends qE{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new tt(e,t)}matches(e){return al(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function al(n){return n.op==="and"}function Km(n){return n.op==="or"}function Bg(n){return WE(n)&&al(n)}function WE(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function Qm(n){if(n instanceof Be)return n.field.canonicalString()+n.op.toString()+ol(n.value);if(Bg(n))return n.filters.map(e=>Qm(e)).join(",");{const e=n.filters.map(t=>Qm(t)).join(",");return`${n.op}(${e})`}}function HE(n,e){return n instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.field.isEqual(s.field)&&Kr(r.value,s.value)}(n,e):n instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,l,h)=>a&&HE(l,s.filters[h]),!0):!1}(n,e):void Te()}function GE(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function KE(n){return n instanceof Be?function(t){return`${t.field.canonicalString()} ${t.op} ${ol(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(KE).join(" ,")+"}"}(n):"Filter"}class Ob extends Be{constructor(e,t,r){super(e,t,r),this.key=me.fromName(r.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class Lb extends Be{constructor(e,t){super(e,"in",t),this.keys=QE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Mb extends Be{constructor(e,t){super(e,"not-in",t),this.keys=QE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function QE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>me.fromName(r.referenceValue))}class Fb extends Be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xu(t)&&Ju(t.arrayValue,this.value)}}class YE extends Be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ju(this.value.arrayValue,t)}}class Ub extends Be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ju(this.value.arrayValue,{}))return!1;const t=e.data.field(this.field);return t!==null&&!Ju(this.value.arrayValue,t)}}class jb extends Be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ju(this.value.arrayValue,r))}}/**
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
 */class zb{constructor(e,t=null,r=[],s=[],a=null,l=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=l,this.endAt=h,this.ue=null}}function Ym(n,e=null,t=[],r=[],s=null,a=null,l=null){return new zb(n,e,t,r,s,a,l)}function Ro(n){const e=Ne(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Qm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Xd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ol(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ol(r)).join(",")),e.ue=t}return e.ue}function lc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Vb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!HE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!f1(n.startAt,e.startAt)&&f1(n.endAt,e.endAt)}function Sd(n){return me.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ad(n,e){return n.filters.filter(t=>t instanceof Be&&t.field.isEqual(e))}function p1(n,e,t){let r=rd,s=!0;for(const a of Ad(n,e)){let l=rd,h=!0;switch(a.op){case"<":case"<=":l=Db(a.value);break;case"==":case"in":case">=":l=a.value;break;case">":l=a.value,h=!1;break;case"!=":case"not-in":l=rd}c1({value:r,inclusive:s},{value:l,inclusive:h})<0&&(r=l,s=h)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const l=t.position[a];c1({value:r,inclusive:s},{value:l,inclusive:t.inclusive})<0&&(r=l,s=t.inclusive);break}}return{value:r,inclusive:s}}function m1(n,e,t){let r=as,s=!0;for(const a of Ad(n,e)){let l=as,h=!0;switch(a.op){case">=":case">":l=Nb(a.value),h=!1;break;case"==":case"in":case"<=":l=a.value;break;case"<":l=a.value,h=!1;break;case"!=":case"not-in":l=as}h1({value:r,inclusive:s},{value:l,inclusive:h})>0&&(r=l,s=h)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const l=t.position[a];h1({value:r,inclusive:s},{value:l,inclusive:t.inclusive})>0&&(r=l,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Fo{constructor(e,t=null,r=[],s=[],a=null,l="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=l,this.startAt=h,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bb(n,e,t,r,s,a,l,h){return new Fo(n,e,t,r,s,a,l,h)}function uc(n){return new Fo(n)}function g1(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $g(n){return n.collectionGroup!==null}function Qa(n){const e=Ne(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new nt(vt.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(h=h.add(m.field))})}),h})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new Zu(a,r))}),t.has(vt.keyField().canonicalString())||e.ce.push(new Zu(vt.keyField(),r))}return e.ce}function ur(n){const e=Ne(n);return e.le||(e.le=$b(e,Qa(n))),e.le}function $b(n,e){if(n.limitType==="F")return Ym(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Zu(s.field,a)});const t=n.endAt?new Es(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Es(n.startAt.position,n.startAt.inclusive):null;return Ym(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Jm(n,e){const t=n.filters.concat([e]);return new Fo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Rd(n,e,t){return new Fo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function tf(n,e){return lc(ur(n),ur(e))&&n.limitType===e.limitType}function JE(n){return`${Ro(ur(n))}|lt:${n.limitType}`}function za(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>KE(s)).join(", ")}]`),Xd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ol(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ol(s)).join(",")),`Target(${r})`}(ur(n))}; limitType=${n.limitType})`}function cc(n,e){return e.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):me.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,s){for(const a of Qa(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(l,h,f){const m=d1(l,h,f);return l.inclusive?m<=0:m<0}(r.startAt,Qa(r),s)||r.endAt&&!function(l,h,f){const m=d1(l,h,f);return l.inclusive?m>=0:m>0}(r.endAt,Qa(r),s))}(n,e)}function qb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function XE(n){return(e,t)=>{let r=!1;for(const s of Qa(n)){const a=Wb(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function Wb(n,e,t){const r=n.field.isKeyField()?me.comparator(e.key,t.key):function(a,l,h){const f=l.data.field(a),m=h.data.field(a);return f!==null&&m!==null?ws(f,m):Te()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Te()}}/**
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
 */class As{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mo(this.inner,(t,r)=>{for(const[s,a]of r)e(s,a)})}isEmpty(){return UE(this.inner)}size(){return this.innerSize}}/**
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
 */const Hb=new pt(me.comparator);function Wn(){return Hb}const ZE=new pt(me.comparator);function Pu(...n){let e=ZE;for(const t of n)e=e.insert(t.key,t);return e}function eI(n){let e=ZE;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function $r(){return Fu()}function tI(){return Fu()}function Fu(){return new As(n=>n.toString(),(n,e)=>n.isEqual(e))}const Gb=new pt(me.comparator),Kb=new nt(me.comparator);function Fe(...n){let e=Kb;for(const t of n)e=e.add(t);return e}const Qb=new nt(Oe);function Yb(){return Qb}/**
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
 */function qg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qu(e)?"-0":e}}function nI(n){return{integerValue:""+n}}function rI(n,e){return cb(e)?nI(e):qg(n,e)}/**
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
 */class nf{constructor(){this._=void 0}}function Jb(n,e,t){return n instanceof ll?function(s,a){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Zd(a)&&(a=zg(a)),a&&(l.fields.__previous_value__=a),{mapValue:l}}(t,e):n instanceof ko?sI(n,e):n instanceof Po?oI(n,e):function(s,a){const l=iI(s,a),h=y1(l)+y1(s.Pe);return Gm(l)&&Gm(s.Pe)?nI(h):qg(s.serializer,h)}(n,e)}function Xb(n,e,t){return n instanceof ko?sI(n,e):n instanceof Po?oI(n,e):t}function iI(n,e){return n instanceof ul?function(r){return Gm(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class ll extends nf{}class ko extends nf{constructor(e){super(),this.elements=e}}function sI(n,e){const t=aI(e);for(const r of n.elements)t.some(s=>Kr(s,r))||t.push(r);return{arrayValue:{values:t}}}class Po extends nf{constructor(e){super(),this.elements=e}}function oI(n,e){let t=aI(e);for(const r of n.elements)t=t.filter(s=>!Kr(s,r));return{arrayValue:{values:t}}}class ul extends nf{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function y1(n){return ft(n.integerValue||n.doubleValue)}function aI(n){return Xu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class hc{constructor(e,t){this.field=e,this.transform=t}}function Zb(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ko&&s instanceof ko||r instanceof Po&&s instanceof Po?sl(r.elements,s.elements,Kr):r instanceof ul&&s instanceof ul?Kr(r.Pe,s.Pe):r instanceof ll&&s instanceof ll}(n.transform,e.transform)}class e5{constructor(e,t){this.version=e,this.transformResults=t}}class cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class rf{}function lI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sf(n.key,cn.none()):new wl(n.key,n.data,cn.none());{const t=n.data,r=ln.empty();let s=new nt(vt.comparator);for(let a of e.fields)if(!s.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?r.delete(a):r.set(a,l),s=s.add(a)}return new xi(n.key,r,new Nn(s.toArray()),cn.none())}}function t5(n,e,t){n instanceof wl?function(s,a,l){const h=s.value.clone(),f=_1(s.fieldTransforms,a,l.transformResults);h.setAll(f),a.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,e,t):n instanceof xi?function(s,a,l){if(!sd(s.precondition,a))return void a.convertToUnknownDocument(l.version);const h=_1(s.fieldTransforms,a,l.transformResults),f=a.data;f.setAll(uI(s)),f.setAll(h),a.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,e,t):function(s,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function Uu(n,e,t,r){return n instanceof wl?function(a,l,h,f){if(!sd(a.precondition,l))return h;const m=a.value.clone(),v=w1(a.fieldTransforms,f,l);return m.setAll(v),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof xi?function(a,l,h,f){if(!sd(a.precondition,l))return h;const m=w1(a.fieldTransforms,f,l),v=l.data;return v.setAll(uI(a)),v.setAll(m),l.convertToFoundDocument(l.version,v).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(a,l,h){return sd(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(n,e,t)}function n5(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=iI(r.transform,s||null);a!=null&&(t===null&&(t=ln.empty()),t.set(r.field,a))}return t||null}function v1(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&sl(r,s,(a,l)=>Zb(a,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wl extends rf{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xi extends rf{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function uI(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function _1(n,e,t){const r=new Map;Se(n.length===t.length);for(let s=0;s<t.length;s++){const a=n[s],l=a.transform,h=e.data.field(a.field);r.set(a.field,Xb(l,h,t[s]))}return r}function w1(n,e,t){const r=new Map;for(const s of n){const a=s.transform,l=t.data.field(s.field);r.set(s.field,Jb(a,l,e))}return r}class sf extends rf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cI extends rf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&t5(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Uu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Uu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=tI();return this.mutations.forEach(s=>{const a=e.get(s.key),l=a.overlayedDocument;let h=this.applyToLocalView(l,a.mutatedFields);h=t.has(s.key)?null:h;const f=lI(l,h);f!==null&&r.set(s.key,f),l.isValidDocument()||l.convertToNoDocument(Ae.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Fe())}isEqual(e){return this.batchId===e.batchId&&sl(this.mutations,e.mutations,(t,r)=>v1(t,r))&&sl(this.baseMutations,e.baseMutations,(t,r)=>v1(t,r))}}class Hg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Se(e.mutations.length===r.length);let s=function(){return Gb}();const a=e.mutations;for(let l=0;l<a.length;l++)s=s.insert(a[l].key,r[l].version);return new Hg(e,t,r,s)}}/**
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
 */class Gg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class r5{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Pt,We;function i5(n){switch(n){default:return Te();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0}}function hI(n){if(n===void 0)return vn("GRPC error has no .code"),Z.UNKNOWN;switch(n){case Pt.OK:return Z.OK;case Pt.CANCELLED:return Z.CANCELLED;case Pt.UNKNOWN:return Z.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return Z.INTERNAL;case Pt.UNAVAILABLE:return Z.UNAVAILABLE;case Pt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Pt.NOT_FOUND:return Z.NOT_FOUND;case Pt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Pt.ABORTED:return Z.ABORTED;case Pt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Pt.DATA_LOSS:return Z.DATA_LOSS;default:return Te()}}(We=Pt||(Pt={}))[We.OK=0]="OK",We[We.CANCELLED=1]="CANCELLED",We[We.UNKNOWN=2]="UNKNOWN",We[We.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",We[We.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",We[We.NOT_FOUND=5]="NOT_FOUND",We[We.ALREADY_EXISTS=6]="ALREADY_EXISTS",We[We.PERMISSION_DENIED=7]="PERMISSION_DENIED",We[We.UNAUTHENTICATED=16]="UNAUTHENTICATED",We[We.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",We[We.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",We[We.ABORTED=10]="ABORTED",We[We.OUT_OF_RANGE=11]="OUT_OF_RANGE",We[We.UNIMPLEMENTED=12]="UNIMPLEMENTED",We[We.INTERNAL=13]="INTERNAL",We[We.UNAVAILABLE=14]="UNAVAILABLE",We[We.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function s5(){return new TextEncoder}/**
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
 */const o5=new mo([4294967295,4294967295],0);function E1(n){const e=s5().encode(n),t=new IE;return t.update(e),new Uint8Array(t.digest())}function I1(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new mo([t,r],0),new mo([s,a],0)]}class Kg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Cu(`Invalid padding: ${t}`);if(r<0)throw new Cu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Cu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Cu(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=mo.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(mo.fromNumber(r)));return s.compare(o5)===1&&(s=new mo([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=E1(e),[r,s]=I1(t);for(let a=0;a<this.hashCount;a++){const l=this.Ee(r,s,a);if(!this.de(l))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new Kg(a,s,t);return r.forEach(h=>l.insert(h)),l}insert(e){if(this.Ie===0)return;const t=E1(e),[r,s]=I1(t);for(let a=0;a<this.hashCount;a++){const l=this.Ee(r,s,a);this.Ae(l)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Cu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class of{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,dc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new of(Ae.min(),s,new pt(Oe),Wn(),Fe())}}class dc{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new dc(r,t,Fe(),Fe(),Fe())}}/**
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
 */class od{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class dI{constructor(e,t){this.targetId=e,this.me=t}}class fI{constructor(e,t,r=Vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class T1{constructor(){this.fe=0,this.ge=S1(),this.pe=Vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Fe(),t=Fe(),r=Fe();return this.ge.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Te()}}),new dc(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=S1()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class a5{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wn(),this.qe=x1(),this.Qe=new pt(Oe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const a=s.target;if(Sd(a))if(r===0){const l=new me(a.path);this.Ue(t,l,It.newNoDocument(l,Ae.min()))}else Se(r===1);else{const l=this.Ye(t);if(l!==r){const h=this.Ze(e),f=h?this.Xe(h,e,l):1;if(f!==0){this.je(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,m)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let l,h;try{l=_s(r).toUint8Array()}catch(f){if(f instanceof jE)return To("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new Kg(l,s,a)}catch(f){return To(f instanceof Cu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.Ie===0?null:h}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(a=>{const l=this.Le.tt(),h=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.Ue(t,a,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((a,l)=>{const h=this.Je(l);if(h){if(a.current&&Sd(h.target)){const f=new me(h.target.path);this.ke.get(f)!==null||this.it(l,f)||this.Ue(l,f,It.newNoDocument(f,e))}a.be&&(t.set(l,a.ve()),a.Ce())}});let r=Fe();this.qe.forEach((a,l)=>{let h=!0;l.forEachWhile(f=>{const m=this.Je(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(a))}),this.ke.forEach((a,l)=>l.setReadTime(e));const s=new of(e,t,this.Qe,this.ke,r);return this.ke=Wn(),this.qe=x1(),this.Qe=new pt(Oe),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new T1,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new nt(Oe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new T1),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function x1(){return new pt(me.comparator)}function S1(){return new pt(me.comparator)}const l5={asc:"ASCENDING",desc:"DESCENDING"},u5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c5={and:"AND",or:"OR"};class h5{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xm(n,e){return n.useProto3Json||Xd(e)?e:{value:e}}function cl(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function d5(n,e){return cl(n,e.toTimestamp())}function wn(n){return Se(!!n),Ae.fromTimestamp(function(t){const r=Ti(t);return new _t(r.seconds,r.nanos)}(n))}function Qg(n,e){return Zm(n,e).canonicalString()}function Zm(n,e){const t=function(s){return new Je(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mI(n){const e=Je.fromString(n);return Se(xI(e)),e}function kd(n,e){return Qg(n.databaseId,e.path)}function go(n,e){const t=mI(e);if(t.get(1)!==n.databaseId.projectId)throw new de(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new de(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new me(vI(t))}function gI(n,e){return Qg(n.databaseId,e)}function yI(n){const e=mI(n);return e.length===4?Je.emptyPath():vI(e)}function eg(n){return new Je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vI(n){return Se(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function A1(n,e,t){return{name:kd(n,e),fields:t.value.mapValue.fields}}function f5(n,e,t){const r=go(n,e.name),s=wn(e.updateTime),a=e.createTime?wn(e.createTime):Ae.min(),l=new ln({mapValue:{fields:e.fields}}),h=It.newFoundDocument(r,s,a,l);return t&&h.setHasCommittedMutations(),t?h.setHasCommittedMutations():h}function p5(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(m,v){return m.useProto3Json?(Se(v===void 0||typeof v=="string"),Vt.fromBase64String(v||"")):(Se(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Vt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),l=e.targetChange.cause,h=l&&function(m){const v=m.code===void 0?Z.UNKNOWN:hI(m.code);return new de(v,m.message||"")}(l);t=new fI(r,s,a,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=go(n,r.document.name),a=wn(r.document.updateTime),l=r.document.createTime?wn(r.document.createTime):Ae.min(),h=new ln({mapValue:{fields:r.document.fields}}),f=It.newFoundDocument(s,a,l,h),m=r.targetIds||[],v=r.removedTargetIds||[];t=new od(m,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=go(n,r.document),a=r.readTime?wn(r.readTime):Ae.min(),l=It.newNoDocument(s,a),h=r.removedTargetIds||[];t=new od([],h,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=go(n,r.document),a=r.removedTargetIds||[];t=new od([],a,s,null)}else{if(!("filter"in e))return Te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,l=new r5(s,a),h=r.targetId;t=new dI(h,l)}}return t}function Pd(n,e){let t;if(e instanceof wl)t={update:A1(n,e.key,e.value)};else if(e instanceof sf)t={delete:kd(n,e.key)};else if(e instanceof xi)t={update:A1(n,e.key,e.data),updateMask:w5(e.fieldMask)};else{if(!(e instanceof cI))return Te();t={verify:kd(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,l){const h=l.transform;if(h instanceof ll)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof ko)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Po)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof ul)return{fieldPath:l.field.canonicalString(),increment:h.Pe};throw Te()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:d5(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Te()}(n,e.precondition)),t}function tg(n,e){const t=e.currentDocument?function(a){return a.updateTime!==void 0?cn.updateTime(wn(a.updateTime)):a.exists!==void 0?cn.exists(a.exists):cn.none()}(e.currentDocument):cn.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(l,h){let f=null;if("setToServerValue"in h)Se(h.setToServerValue==="REQUEST_TIME"),f=new ll;else if("appendMissingElements"in h){const v=h.appendMissingElements.values||[];f=new ko(v)}else if("removeAllFromArray"in h){const v=h.removeAllFromArray.values||[];f=new Po(v)}else"increment"in h?f=new ul(l,h.increment):Te();const m=vt.fromServerFormat(h.fieldPath);return new hc(m,f)}(n,s)):[];if(e.update){e.update.name;const s=go(n,e.update.name),a=new ln({mapValue:{fields:e.update.fields}});if(e.updateMask){const l=function(f){const m=f.fieldPaths||[];return new Nn(m.map(v=>vt.fromServerFormat(v)))}(e.updateMask);return new xi(s,a,l,t,r)}return new wl(s,a,t,r)}if(e.delete){const s=go(n,e.delete);return new sf(s,t)}if(e.verify){const s=go(n,e.verify);return new cI(s,t)}return Te()}function m5(n,e){return n&&n.length>0?(Se(e!==void 0),n.map(t=>function(s,a){let l=s.updateTime?wn(s.updateTime):wn(a);return l.isEqual(Ae.min())&&(l=wn(a)),new e5(l,s.transformResults||[])}(t,e))):[]}function _I(n,e){return{documents:[gI(n,e.path)]}}function wI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=gI(n,s);const a=function(m){if(m.length!==0)return TI(tt.create(m,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const l=function(m){if(m.length!==0)return m.map(v=>function(I){return{field:Ba(I.field),direction:y5(I.dir)}}(v))}(e.orderBy);l&&(t.structuredQuery.orderBy=l);const h=Xm(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{_t:t,parent:s}}function EI(n){let e=yI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Se(r===1);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(_){const I=II(_);return I instanceof tt&&Bg(I)?I.getFilters():[I]}(t.where));let l=[];t.orderBy&&(l=function(_){return _.map(I=>function(M){return new Zu($a(M.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(I))}(t.orderBy));let h=null;t.limit&&(h=function(_){let I;return I=typeof _=="object"?_.value:_,Xd(I)?null:I}(t.limit));let f=null;t.startAt&&(f=function(_){const I=!!_.before,R=_.values||[];return new Es(R,I)}(t.startAt));let m=null;return t.endAt&&(m=function(_){const I=!_.before,R=_.values||[];return new Es(R,I)}(t.endAt)),Bb(e,s,l,a,h,"F",f,m)}function g5(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function II(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=$a(t.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$a(t.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=$a(t.unaryFilter.field);return Be.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=$a(t.unaryFilter.field);return Be.create(l,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return Be.create($a(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>II(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function y5(n){return l5[n]}function v5(n){return u5[n]}function _5(n){return c5[n]}function Ba(n){return{fieldPath:n.canonicalString()}}function $a(n){return vt.fromServerFormat(n.fieldPath)}function TI(n){return n instanceof Be?function(t){if(t.op==="=="){if(u1(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NAN"}};if(l1(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(u1(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NOT_NAN"}};if(l1(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ba(t.field),op:v5(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(s=>TI(s));return r.length===1?r[0]:{compositeFilter:{op:_5(t.op),filters:r}}}(n):Te()}function w5(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class wi{constructor(e,t,r,s,a=Ae.min(),l=Ae.min(),h=Vt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class SI{constructor(e){this.ct=e}}function E5(n,e){let t;if(e.document)t=f5(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=me.fromSegments(e.noDocument.path),s=bo(e.noDocument.readTime);t=It.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Te();{const r=me.fromSegments(e.unknownDocument.path),s=bo(e.unknownDocument.version);t=It.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const a=new _t(s[0],s[1]);return Ae.fromTimestamp(a)}(e.readTime)),t}function R1(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Cd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(a,l){return{name:kd(a,l.key),fields:l.data.value.mapValue.fields,updateTime:cl(a,l.version.toTimestamp()),createTime:cl(a,l.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Co(e.version)};else{if(!e.isUnknownDocument())return Te();r.unknownDocument={path:t.path.toArray(),version:Co(e.version)}}return r}function Cd(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Co(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function bo(n){const e=new _t(n.seconds,n.nanoseconds);return Ae.fromTimestamp(e)}function oo(n,e){const t=(e.baseMutations||[]).map(a=>tg(n.ct,a));for(let a=0;a<e.mutations.length-1;++a){const l=e.mutations[a];if(a+1<e.mutations.length&&e.mutations[a+1].transform!==void 0){const h=e.mutations[a+1];l.updateTransforms=h.transform.fieldTransforms,e.mutations.splice(a+1,1),++a}}const r=e.mutations.map(a=>tg(n.ct,a)),s=_t.fromMillis(e.localWriteTimeMs);return new Wg(e.batchId,s,t,r)}function bu(n){const e=bo(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?bo(n.lastLimboFreeSnapshotVersion):Ae.min();let r;return r=function(a){return a.documents!==void 0}(n.query)?function(a){return Se(a.documents.length===1),ur(uc(yI(a.documents[0])))}(n.query):function(a){return ur(EI(a))}(n.query),new wi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Vt.fromBase64String(n.resumeToken))}function AI(n,e){const t=Co(e.snapshotVersion),r=Co(e.lastLimboFreeSnapshotVersion);let s;s=Sd(e.target)?_I(n.ct,e.target):wI(n.ct,e.target)._t;const a=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ro(e.target),readTime:t,resumeToken:a,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function RI(n){const e=EI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rd(e,e.limit,"L"):e}function fm(n,e){return new Gg(e.largestBatchId,tg(n.ct,e.overlayMutation))}function k1(n,e){const t=e.path.lastSegment();return[n,_n(e.path.popLast()),t]}function P1(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Co(r.readTime),documentKey:_n(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class I5{getBundleMetadata(e,t){return C1(e).get(t).next(r=>{if(r)return function(a){return{id:a.bundleId,createTime:bo(a.createTime),version:a.version}}(r)})}saveBundleMetadata(e,t){return C1(e).put(function(s){return{bundleId:s.id,createTime:Co(wn(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return b1(e).get(t).next(r=>{if(r)return function(a){return{name:a.name,query:RI(a.bundledQuery),readTime:bo(a.readTime)}}(r)})}saveNamedQuery(e,t){return b1(e).put(function(s){return{name:s.name,readTime:Co(wn(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function C1(n){return Bt(n,"bundles")}function b1(n){return Bt(n,"namedQueries")}/**
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
 */class af{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new af(e,r)}getOverlay(e,t){return yu(e).get(k1(this.userId,t)).next(r=>r?fm(this.serializer,r):null)}getOverlays(e,t){const r=$r();return W.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((a,l)=>{const h=new Gg(t,l);s.push(this.ht(e,h))}),W.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(l=>s.add(_n(l.getCollectionPath())));const a=[];return s.forEach(l=>{const h=IDBKeyRange.bound([this.userId,l,r],[this.userId,l,r+1],!1,!0);a.push(yu(e).j("collectionPathOverlayIndex",h))}),W.waitFor(a)}getOverlaysForCollection(e,t,r){const s=$r(),a=_n(t),l=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,Number.POSITIVE_INFINITY],!0);return yu(e).U("collectionPathOverlayIndex",l).next(h=>{for(const f of h){const m=fm(this.serializer,f);s.set(m.getKey(),m)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const a=$r();let l;const h=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return yu(e).J({index:"collectionGroupOverlayIndex",range:h},(f,m,v)=>{const _=fm(this.serializer,m);a.size()<s||_.largestBatchId===l?(a.set(_.getKey(),_),l=_.largestBatchId):v.done()}).next(()=>a)}ht(e,t){return yu(e).put(function(s,a,l){const[h,f,m]=k1(a,l.mutation.key);return{userId:a,collectionPath:f,documentId:m,collectionGroup:l.mutation.key.getCollectionGroup(),largestBatchId:l.largestBatchId,overlayMutation:Pd(s.ct,l.mutation)}}(this.serializer,this.userId,t))}}function yu(n){return Bt(n,"documentOverlays")}/**
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
 */class T5{Pt(e){return Bt(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t?.value;return r?Vt.fromUint8Array(r):Vt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class ao{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ft(e.integerValue));else if("doubleValue"in e){const r=ft(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Qu(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Ti(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(_s(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?zE(e)?this.dt(t,Number.MAX_SAFE_INTEGER):ef(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):Te()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const a=e.fields||{};this.dt(t,53);const l="value",h=((s=(r=a[l].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(ft(h)),this.Vt(l,t),this.Tt(a[l],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),me.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}ao.vt=new ao;function x5(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function D1(n){const e=64-function(r){let s=0;for(let a=0;a<8;++a){const l=x5(255&r[a]);if(s+=l,l!==8)break}return s}(n);return Math.ceil(e/8)}class S5{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=D1(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=D1(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(a){const l=new DataView(new ArrayBuffer(8));return l.setFloat64(0,a,!1),new Uint8Array(l.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class A5{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class R5{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class vu{constructor(){this.jt=new S5,this.Ht=new A5(this.jt),this.Jt=new R5(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class lo{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new lo(this.indexId,this.documentKey,this.arrayValue,r)}}function Xi(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=N1(n.arrayValue,e.arrayValue),t!==0?t:(t=N1(n.directionalValue,e.directionalValue),t!==0?t:me.comparator(n.documentKey,e.documentKey)))}function N1(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class V1{constructor(e){this.Xt=new nt((t,r)=>vt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Se(e.collectionGroup===this.collectionId),this.nn)return!1;const t=qm(e);if(t!==void 0&&!this.sn(t))return!1;const r=io(e);let s=new Set,a=0,l=0;for(;a<r.length&&this.sn(r[a]);++a)s=s.add(r[a].fieldPath.canonicalString());if(a===r.length)return!0;if(this.Xt.size>0){const h=this.Xt.getIterator().getNext();if(!s.has(h.field.canonicalString())){const f=r[a];if(!this.on(h,f)||!this._n(this.en[l++],f))return!1}++a}for(;a<r.length;++a){const h=r[a];if(l>=this.en.length||!this._n(this.en[l++],h))return!1}return!0}an(){if(this.nn)return null;let e=new nt(vt.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new td(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new td(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new td(r.field,r.dir==="asc"?0:1)));return new xd(xd.UNKNOWN_ID,this.collectionId,t,Ku.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function kI(n){var e,t;if(Se(n instanceof Be||n instanceof tt),n instanceof Be){if(n instanceof YE){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(a=>Be.create(n.field,"==",a)))||[];return tt.create(s,"or")}return n}const r=n.filters.map(s=>kI(s));return tt.create(r,n.op)}function k5(n){if(n.getFilters().length===0)return[];const e=ig(kI(n));return Se(PI(e)),ng(e)||rg(e)?[e]:e.getFilters()}function ng(n){return n instanceof Be}function rg(n){return n instanceof tt&&Bg(n)}function PI(n){return ng(n)||rg(n)||function(t){if(t instanceof tt&&Km(t)){for(const r of t.getFilters())if(!ng(r)&&!rg(r))return!1;return!0}return!1}(n)}function ig(n){if(Se(n instanceof Be||n instanceof tt),n instanceof Be)return n;if(n.filters.length===1)return ig(n.filters[0]);const e=n.filters.map(r=>ig(r));let t=tt.create(e,n.op);return t=bd(t),PI(t)?t:(Se(t instanceof tt),Se(al(t)),Se(t.filters.length>1),t.filters.reduce((r,s)=>Yg(r,s)))}function Yg(n,e){let t;return Se(n instanceof Be||n instanceof tt),Se(e instanceof Be||e instanceof tt),t=n instanceof Be?e instanceof Be?function(s,a){return tt.create([s,a],"and")}(n,e):O1(n,e):e instanceof Be?O1(e,n):function(s,a){if(Se(s.filters.length>0&&a.filters.length>0),al(s)&&al(a))return GE(s,a.getFilters());const l=Km(s)?s:a,h=Km(s)?a:s,f=l.filters.map(m=>Yg(m,h));return tt.create(f,"or")}(n,e),bd(t)}function O1(n,e){if(al(e))return GE(e,n.getFilters());{const t=e.filters.map(r=>Yg(n,r));return tt.create(t,"or")}}function bd(n){if(Se(n instanceof Be||n instanceof tt),n instanceof Be)return n;const e=n.getFilters();if(e.length===1)return bd(e[0]);if(WE(n))return n;const t=e.map(s=>bd(s)),r=[];return t.forEach(s=>{s instanceof Be?r.push(s):s instanceof tt&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:tt.create(r,n.op)}/**
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
 */class P5{constructor(){this.un=new Jg}addToCollectionParentIndex(e,t){return this.un.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Kn.min())}updateCollectionGroup(e,t,r){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class Jg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new nt(Je.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Je.comparator)).toArray()}}/**
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
 */const Fh=new Uint8Array(0);class C5{constructor(e,t){this.databaseId=t,this.cn=new Jg,this.ln=new As(r=>Ro(r),(r,s)=>lc(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const a={collectionId:r,parent:_n(s)};return L1(e).put(a)}return W.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[CE(t),""],!1,!0);return L1(e).U(s).next(a=>{for(const l of a){if(l.collectionId!==t)break;r.push(Br(l.parent))}return r})}addFieldIndex(e,t){const r=_u(e),s=function(h){return{indexId:h.indexId,collectionGroup:h.collectionGroup,fields:h.fields.map(f=>[f.fieldPath.canonicalString(),f.kind])}}(t);delete s.indexId;const a=r.add(s);if(t.indexState){const l=Ma(e);return a.next(h=>{l.put(P1(h,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return a.next()}deleteFieldIndex(e,t){const r=_u(e),s=Ma(e),a=La(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=_u(e),r=La(e),s=Ma(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return W.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const a=new V1(r).an();if(a!=null)return this.addFieldIndex(e,a)}}))}getDocumentsMatchingTarget(e,t){const r=La(e);let s=!0;const a=new Map;return W.forEach(this.hn(t),l=>this.Pn(e,l).next(h=>{s&&(s=!!h),a.set(l,h)})).next(()=>{if(s){let l=Fe();const h=[];return W.forEach(a,(f,m)=>{le("IndexedDbIndexManager",`Using index ${function(X){return`id=${X.indexId}|cg=${X.collectionGroup}|f=${X.fields.map(re=>`${re.fieldPath}:${re.kind}`).join(",")}`}(f)} to execute ${Ro(t)}`);const v=function(X,re){const fe=qm(re);if(fe===void 0)return null;for(const J of Ad(X,fe.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null}(m,f),_=function(X,re){const fe=new Map;for(const J of io(re))for(const x of Ad(X,J.fieldPath))switch(x.op){case"==":case"in":fe.set(J.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return fe.set(J.fieldPath.canonicalString(),x.value),Array.from(fe.values())}return null}(m,f),I=function(X,re){const fe=[];let J=!0;for(const x of io(re)){const T=x.kind===0?p1(X,x.fieldPath,X.startAt):m1(X,x.fieldPath,X.startAt);fe.push(T.value),J&&(J=T.inclusive)}return new Es(fe,J)}(m,f),R=function(X,re){const fe=[];let J=!0;for(const x of io(re)){const T=x.kind===0?m1(X,x.fieldPath,X.endAt):p1(X,x.fieldPath,X.endAt);fe.push(T.value),J&&(J=T.inclusive)}return new Es(fe,J)}(m,f),M=this.In(f,m,I),U=this.In(f,m,R),V=this.Tn(f,m,_),Y=this.En(f.indexId,v,M,I.inclusive,U,R.inclusive,V);return W.forEach(Y,ee=>r.G(ee,t.limit).next(X=>{X.forEach(re=>{const fe=me.fromSegments(re.documentKey);l.has(fe)||(l=l.add(fe),h.push(fe))})}))}).next(()=>h)}return W.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=k5(tt.create(e.filters,"and")).map(r=>Ym(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,a,l,h){const f=(t!=null?t.length:1)*Math.max(r.length,a.length),m=f/(t!=null?t.length:1),v=[];for(let _=0;_<f;++_){const I=t?this.dn(t[_/m]):Fh,R=this.An(e,I,r[_%m],s),M=this.Rn(e,I,a[_%m],l),U=h.map(V=>this.An(e,I,V,!0));v.push(...this.createRange(R,M,U))}return v}An(e,t,r,s){const a=new lo(e,me.empty(),t,r);return s?a:a.Zt()}Rn(e,t,r,s){const a=new lo(e,me.empty(),t,r);return s?a.Zt():a}Pn(e,t){const r=new V1(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(a=>{let l=null;for(const h of a)r.rn(h)&&(!l||h.fields.length>l.fields.length)&&(l=h);return l})}getIndexType(e,t){let r=2;const s=this.hn(t);return W.forEach(s,a=>this.Pn(e,a).next(l=>{l?r!==0&&l.fields.length<function(f){let m=new nt(vt.comparator),v=!1;for(const _ of f.filters)for(const I of _.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?v=!0:m=m.add(I.field));for(const _ of f.orderBy)_.field.isKeyField()||(m=m.add(_.field));return m.size+(v?1:0)}(a)&&(r=1):r=0})).next(()=>function(l){return l.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new vu;for(const s of io(e)){const a=t.data.field(s.fieldPath);if(a==null)return null;const l=r.Yt(s.kind);ao.vt.It(a,l)}return r.zt()}dn(e){const t=new vu;return ao.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new vu;return ao.vt.It(Ao(this.databaseId,t),r.Yt(function(a){const l=io(a);return l.length===0?0:l[l.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new vu);let a=0;for(const l of io(e)){const h=r[a++];for(const f of s)if(this.fn(t,l.fieldPath)&&Xu(h))s=this.gn(s,l,h);else{const m=f.Yt(l.kind);ao.vt.It(h,m)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],a=[];for(const l of r.arrayValue.values||[])for(const h of s){const f=new vu;f.seed(h.zt()),ao.vt.It(l,f.Yt(t.kind)),a.push(f)}return a}fn(e,t){return!!e.filters.find(r=>r instanceof Be&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=_u(e),s=Ma(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(a=>{const l=[];return W.forEach(a,h=>s.get([h.indexId,this.uid]).next(f=>{l.push(function(v,_){const I=_?new Ku(_.sequenceNumber,new Kn(bo(_.readTime),new me(Br(_.documentKey)),_.largestBatchId)):Ku.empty(),R=v.fields.map(([M,U])=>new td(vt.fromServerFormat(M),U));return new xd(v.indexId,v.collectionGroup,R,I)}(h,f))})).next(()=>l)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const a=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return a!==0?a:Oe(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=_u(e),a=Ma(e);return this.yn(e).next(l=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(h=>W.forEach(h,f=>a.put(P1(f.indexId,this.uid,l,r)))))}updateIndexEntries(e,t){const r=new Map;return W.forEach(t,(s,a)=>{const l=r.get(s.collectionGroup);return(l?W.resolve(l):this.getFieldIndexes(e,s.collectionGroup)).next(h=>(r.set(s.collectionGroup,h),W.forEach(h,f=>this.wn(e,s,f).next(m=>{const v=this.Sn(a,f);return m.isEqual(v)?W.resolve():this.bn(e,a,f,m,v)}))))})}Dn(e,t,r,s){return La(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return La(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=La(e);let a=new nt(Xi);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(l,h)=>{a=a.add(new lo(r.indexId,t,h.arrayValue,h.directionalValue))}).next(()=>a)}Sn(e,t){let r=new nt(Xi);const s=this.Vn(t,e);if(s==null)return r;const a=qm(t);if(a!=null){const l=e.data.field(a.fieldPath);if(Xu(l))for(const h of l.arrayValue.values||[])r=r.add(new lo(t.indexId,e.key,this.dn(h),s))}else r=r.add(new lo(t.indexId,e.key,Fh,s));return r}bn(e,t,r,s,a){le("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const l=[];return function(f,m,v,_,I){const R=f.getIterator(),M=m.getIterator();let U=Oa(R),V=Oa(M);for(;U||V;){let Y=!1,ee=!1;if(U&&V){const X=v(U,V);X<0?ee=!0:X>0&&(Y=!0)}else U!=null?ee=!0:Y=!0;Y?(_(V),V=Oa(M)):ee?(I(U),U=Oa(R)):(U=Oa(R),V=Oa(M))}}(s,a,Xi,h=>{l.push(this.Dn(e,t,r,h))},h=>{l.push(this.vn(e,t,r,h))}),W.waitFor(l)}yn(e){let t=1;return Ma(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,a)=>{a.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((l,h)=>Xi(l,h)).filter((l,h,f)=>!h||Xi(l,f[h-1])!==0);const s=[];s.push(e);for(const l of r){const h=Xi(l,e),f=Xi(l,t);if(h===0)s[0]=e.Zt();else if(h>0&&f<0)s.push(l),s.push(l.Zt());else if(f>0)break}s.push(t);const a=[];for(let l=0;l<s.length;l+=2){if(this.Cn(s[l],s[l+1]))return[];const h=[s[l].indexId,this.uid,s[l].arrayValue,s[l].directionalValue,Fh,[]],f=[s[l+1].indexId,this.uid,s[l+1].arrayValue,s[l+1].directionalValue,Fh,[]];a.push(IDBKeyRange.bound(h,f))}return a}Cn(e,t){return Xi(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(M1)}getMinOffset(e,t){return W.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||Te())).next(M1)}}function L1(n){return Bt(n,"collectionParents")}function La(n){return Bt(n,"indexEntries")}function _u(n){return Bt(n,"indexConfiguration")}function Ma(n){return Bt(n,"indexState")}function M1(n){Se(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Fg(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Kn(e.readTime,e.documentKey,t)}/**
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
 */const F1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Dn{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Dn(e,Dn.DEFAULT_COLLECTION_PERCENTILE,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function CI(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),a=[],l=IDBKeyRange.only(t.batchId);let h=0;const f=r.J({range:l},(v,_,I)=>(h++,I.delete()));a.push(f.next(()=>{Se(h===1)}));const m=[];for(const v of t.mutations){const _=OE(e,v.key.path,t.batchId);a.push(s.delete(_)),m.push(v.key)}return W.waitFor(a).next(()=>m)}function Dd(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw Te();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Dn.DEFAULT_COLLECTION_PERCENTILE=10,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dn.DEFAULT=new Dn(41943040,Dn.DEFAULT_COLLECTION_PERCENTILE,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dn.DISABLED=new Dn(-1,0,0);class lf{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){Se(e.uid!=="");const a=e.isAuthenticated()?e.uid:"";return new lf(a,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zi(e).J({index:"userMutationsIndex",range:r},(s,a,l)=>{t=!1,l.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const a=qa(e),l=Zi(e);return l.add({}).next(h=>{Se(typeof h=="number");const f=new Wg(h,t,r,s),m=function(R,M,U){const V=U.baseMutations.map(ee=>Pd(R.ct,ee)),Y=U.mutations.map(ee=>Pd(R.ct,ee));return{userId:M,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:V,mutations:Y}}(this.serializer,this.userId,f),v=[];let _=new nt((I,R)=>Oe(I.canonicalString(),R.canonicalString()));for(const I of s){const R=OE(this.userId,I.key.path,h);_=_.add(I.key.path.popLast()),v.push(l.put(m)),v.push(a.put(R,db))}return _.forEach(I=>{v.push(this.indexManager.addToCollectionParentIndex(e,I))}),e.addOnCommittedListener(()=>{this.Fn[h]=f.keys()}),W.waitFor(v).next(()=>f)})}lookupMutationBatch(e,t){return Zi(e).get(t).next(r=>r?(Se(r.userId===this.userId),oo(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?W.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let a=null;return Zi(e).J({index:"userMutationsIndex",range:s},(l,h,f)=>{h.userId===this.userId&&(Se(h.batchId>=r),a=oo(this.serializer,h)),f.done()}).next(()=>a)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Zi(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,a,l)=>{r=a.batchId,l.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Zi(e).U("userMutationsIndex",t).next(r=>r.map(s=>oo(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=nd(this.userId,t.path),s=IDBKeyRange.lowerBound(r),a=[];return qa(e).J({range:s},(l,h,f)=>{const[m,v,_]=l,I=Br(v);if(m===this.userId&&t.path.isEqual(I))return Zi(e).get(_).next(R=>{if(!R)throw Te();Se(R.userId===this.userId),a.push(oo(this.serializer,R))});f.done()}).next(()=>a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Oe);const s=[];return t.forEach(a=>{const l=nd(this.userId,a.path),h=IDBKeyRange.lowerBound(l),f=qa(e).J({range:h},(m,v,_)=>{const[I,R,M]=m,U=Br(R);I===this.userId&&a.path.isEqual(U)?r=r.add(M):_.done()});s.push(f)}),W.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,a=nd(this.userId,r),l=IDBKeyRange.lowerBound(a);let h=new nt(Oe);return qa(e).J({range:l},(f,m,v)=>{const[_,I,R]=f,M=Br(I);_===this.userId&&r.isPrefixOf(M)?M.length===s&&(h=h.add(R)):v.done()}).next(()=>this.xn(e,h))}xn(e,t){const r=[],s=[];return t.forEach(a=>{s.push(Zi(e).get(a).next(l=>{if(l===null)throw Te();Se(l.userId===this.userId),r.push(oo(this.serializer,l))}))}),W.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return CI(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),W.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return W.resolve();const r=IDBKeyRange.lowerBound(function(l){return[l]}(this.userId)),s=[];return qa(e).J({range:r},(a,l,h)=>{if(a[0]===this.userId){const f=Br(a[1]);s.push(f)}else h.done()}).next(()=>{Se(s.length===0)})})}containsKey(e,t){return bI(e,this.userId,t)}Nn(e){return DI(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function bI(n,e,t){const r=nd(e,t.path),s=r[1],a=IDBKeyRange.lowerBound(r);let l=!1;return qa(n).J({range:a,H:!0},(h,f,m)=>{const[v,_,I]=h;v===e&&_===s&&(l=!0),m.done()}).next(()=>l)}function Zi(n){return Bt(n,"mutations")}function qa(n){return Bt(n,"documentMutations")}function DI(n){return Bt(n,"mutationQueues")}/**
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
 */class Do{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Do(0)}static kn(){return new Do(-1)}}/**
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
 */class b5{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Do(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Ae.fromTimestamp(new _t(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Fa(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(Se(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const a=[];return Fa(e).J((l,h)=>{const f=bu(h);f.sequenceNumber<=t&&r.get(f.targetId)===null&&(s++,a.push(this.removeTargetData(e,f)))}).next(()=>W.waitFor(a)).next(()=>s)}forEachTarget(e,t){return Fa(e).J((r,s)=>{const a=bu(s);t(a)})}qn(e){return U1(e).get("targetGlobalKey").next(t=>(Se(t!==null),t))}Qn(e,t){return U1(e).put("targetGlobalKey",t)}Kn(e,t){return Fa(e).put(AI(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ro(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let a=null;return Fa(e).J({range:s,index:"queryTargetsIndex"},(l,h,f)=>{const m=bu(h);lc(t,m.target)&&(a=m,f.done())}).next(()=>a)}addMatchingKeys(e,t,r){const s=[],a=is(e);return t.forEach(l=>{const h=_n(l.path);s.push(a.put({targetId:r,path:h})),s.push(this.referenceDelegate.addReference(e,r,l))}),W.waitFor(s)}removeMatchingKeys(e,t,r){const s=is(e);return W.forEach(t,a=>{const l=_n(a.path);return W.waitFor([s.delete([r,l]),this.referenceDelegate.removeReference(e,r,a)])})}removeMatchingKeysForTargetId(e,t){const r=is(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=is(e);let a=Fe();return s.J({range:r,H:!0},(l,h,f)=>{const m=Br(l[1]),v=new me(m);a=a.add(v)}).next(()=>a)}containsKey(e,t){const r=_n(t.path),s=IDBKeyRange.bound([r],[CE(r)],!1,!0);let a=0;return is(e).J({index:"documentTargetsIndex",H:!0,range:s},([l,h],f,m)=>{l!==0&&(a++,m.done())}).next(()=>a>0)}ot(e,t){return Fa(e).get(t).next(r=>r?bu(r):null)}}function Fa(n){return Bt(n,"targets")}function U1(n){return Bt(n,"targetGlobal")}function is(n){return Bt(n,"targetDocuments")}/**
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
 */function j1([n,e],[t,r]){const s=Oe(n,t);return s===0?Oe(e,r):s}class D5{constructor(e){this.Un=e,this.buffer=new nt(j1),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();j1(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class N5{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){le("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ss(t)?le("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Lo(t)}await this.Hn(3e5)})}}class V5{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return W.resolve(lr.oe);const r=new D5(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(F1)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),F1):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,a,l,h,f,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,l=Date.now(),this.nthSequenceNumber(e,s))).next(_=>(r=_,h=Date.now(),this.removeTargets(e,r,t))).next(_=>(a=_,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(m=Date.now(),ja()<=ze.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-v}ms
	Determined least recently used ${s} in `+(h-l)+`ms
	Removed ${a} targets in `+(f-h)+`ms
	Removed ${_} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:_})))}}function O5(n,e){return new V5(n,e)}/**
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
 */class L5{constructor(e,t){this.db=e,this.garbageCollector=O5(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return Uh(e,r)}removeReference(e,t,r){return Uh(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Uh(e,t)}nr(e,t){return function(s,a){let l=!1;return DI(s).Y(h=>bI(s,h,a).next(f=>(f&&(l=!0),W.resolve(!f)))).next(()=>l)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let a=0;return this.tr(e,(l,h)=>{if(h<=t){const f=this.nr(e,l).next(m=>{if(!m)return a++,r.getEntry(e,l).next(()=>(r.removeEntry(l,Ae.min()),is(e).delete(function(_){return[0,_n(_.path)]}(l))))});s.push(f)}}).next(()=>W.waitFor(s)).next(()=>r.apply(e)).next(()=>a)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Uh(e,t)}tr(e,t){const r=is(e);let s,a=lr.oe;return r.J({index:"documentTargetsIndex"},([l,h],{path:f,sequenceNumber:m})=>{l===0?(a!==lr.oe&&t(new me(Br(s)),a),a=m,s=f):a=lr.oe}).next(()=>{a!==lr.oe&&t(new me(Br(s)),a)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Uh(n,e){return is(n).put(function(r,s){return{targetId:0,path:_n(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class NI{constructor(){this.changes=new As(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?W.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class M5{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return to(e).put(r)}removeEntry(e,t,r){return to(e).delete(function(a,l){const h=a.path.toArray();return[h.slice(0,h.length-2),h[h.length-2],Cd(l),h[h.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=It.newInvalidDocument(t);return to(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(wu(t))},(s,a)=>{r=this.ir(t,a)}).next(()=>r)}sr(e,t){let r={size:0,document:It.newInvalidDocument(t)};return to(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(wu(t))},(s,a)=>{r={document:this.ir(t,a),size:Dd(a)}}).next(()=>r)}getEntries(e,t){let r=Wn();return this._r(e,t,(s,a)=>{const l=this.ir(s,a);r=r.insert(s,l)}).next(()=>r)}ar(e,t){let r=Wn(),s=new pt(me.comparator);return this._r(e,t,(a,l)=>{const h=this.ir(a,l);r=r.insert(a,h),s=s.insert(a,Dd(l))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return W.resolve();let s=new nt($1);t.forEach(f=>s=s.add(f));const a=IDBKeyRange.bound(wu(s.first()),wu(s.last())),l=s.getIterator();let h=l.getNext();return to(e).J({index:"documentKeyIndex",range:a},(f,m,v)=>{const _=me.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;h&&$1(h,_)<0;)r(h,null),h=l.getNext();h&&h.isEqual(_)&&(r(h,m),h=l.hasNext()?l.getNext():null),h?v.$(wu(h)):v.done()}).next(()=>{for(;h;)r(h,null),h=l.hasNext()?l.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,a){const l=t.path,h=[l.popLast().toArray(),l.lastSegment(),Cd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],f=[l.popLast().toArray(),l.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return to(e).U(IDBKeyRange.bound(h,f,!0)).next(m=>{a?.incrementDocumentReadCount(m.length);let v=Wn();for(const _ of m){const I=this.ir(me.fromSegments(_.prefixPath.concat(_.collectionGroup,_.documentId)),_);I.isFoundDocument()&&(cc(t,I)||s.has(I.key))&&(v=v.insert(I.key,I))}return v})}getAllFromCollectionGroup(e,t,r,s){let a=Wn();const l=B1(t,r),h=B1(t,Kn.max());return to(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(l,h,!0)},(f,m,v)=>{const _=this.ir(me.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);a=a.insert(_.key,_),a.size===s&&v.done()}).next(()=>a)}newChangeBuffer(e){return new F5(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return z1(e).get("remoteDocumentGlobalKey").next(t=>(Se(!!t),t))}rr(e,t){return z1(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=E5(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Ae.min())))return r}return It.newInvalidDocument(e)}}function VI(n){return new M5(n)}class F5 extends NI{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new As(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new nt((a,l)=>Oe(a.canonicalString(),l.canonicalString()));return this.changes.forEach((a,l)=>{const h=this.lr.get(a);if(t.push(this.cr.removeEntry(e,a,h.readTime)),l.isValidDocument()){const f=R1(this.cr.serializer,l);s=s.add(a.path.popLast());const m=Dd(f);r+=m-h.size,t.push(this.cr.addEntry(e,a,f))}else if(r-=h.size,this.trackRemovals){const f=R1(this.cr.serializer,l.convertToNoDocument(Ae.min()));t.push(this.cr.addEntry(e,a,f))}}),s.forEach(a=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,a))}),t.push(this.cr.updateMetadata(e,r)),W.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((a,l)=>{this.lr.set(a,{size:l,readTime:r.get(a).readTime})}),r))}}function z1(n){return Bt(n,"remoteDocumentGlobal")}function to(n){return Bt(n,"remoteDocumentsV14")}function wu(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function B1(n,e){const t=e.documentKey.path.toArray();return[n,Cd(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function $1(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let a=0;a<t.length-2&&a<r.length-2;++a)if(s=Oe(t[a],r[a]),s)return s;return s=Oe(t.length,r.length),s||(s=Oe(t[t.length-2],r[r.length-2]),s||Oe(t[t.length-1],r[r.length-1]))}/**
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
 */class U5{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class OI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Uu(r.mutation,s,Nn.empty(),_t.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Fe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Fe()){const s=$r();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(a=>{let l=Pu();return a.forEach((h,f)=>{l=l.insert(h,f.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const r=$r();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Fe()))}populateOverlays(e,t,r){const s=[];return r.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((l,h)=>{t.set(l,h)})})}computeViews(e,t,r,s){let a=Wn();const l=Fu(),h=function(){return Fu()}();return t.forEach((f,m)=>{const v=r.get(m.key);s.has(m.key)&&(v===void 0||v.mutation instanceof xi)?a=a.insert(m.key,m):v!==void 0?(l.set(m.key,v.mutation.getFieldMask()),Uu(v.mutation,m,v.mutation.getFieldMask(),_t.now())):l.set(m.key,Nn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((m,v)=>l.set(m,v)),t.forEach((m,v)=>{var _;return h.set(m,new U5(v,(_=l.get(m))!==null&&_!==void 0?_:null))}),h))}recalculateAndSaveOverlays(e,t){const r=Fu();let s=new pt((l,h)=>l-h),a=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const h of l)h.keys().forEach(f=>{const m=t.get(f);if(m===null)return;let v=r.get(f)||Nn.empty();v=h.applyToLocalView(m,v),r.set(f,v);const _=(s.get(h.batchId)||Fe()).add(f);s=s.insert(h.batchId,_)})}).next(()=>{const l=[],h=s.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),m=f.key,v=f.value,_=tI();v.forEach(I=>{if(!a.has(I)){const R=lI(t.get(I),r.get(I));R!==null&&_.set(I,R),a=a.add(I)}}),l.push(this.documentOverlayCache.saveOverlays(e,m,_))}return W.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(l){return me.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$g(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(a=>{const l=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):W.resolve($r());let h=-1,f=a;return l.next(m=>W.forEach(m,(v,_)=>(h<_.largestBatchId&&(h=_.largestBatchId),a.get(v)?W.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{f=f.insert(v,I)}))).next(()=>this.populateOverlays(e,m,a)).next(()=>this.computeViews(e,f,m,Fe())).next(v=>({batchId:h,changes:eI(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(r=>{let s=Pu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let l=Pu();return this.indexManager.getCollectionParents(e,a).next(h=>W.forEach(h,f=>{const m=function(_,I){return new Fo(I,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next(v=>{v.forEach((_,I)=>{l=l.insert(_,I)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s))).next(l=>{a.forEach((f,m)=>{const v=m.getKey();l.get(v)===null&&(l=l.insert(v,It.newInvalidDocument(v)))});let h=Pu();return l.forEach((f,m)=>{const v=a.get(f);v!==void 0&&Uu(v.mutation,m,Nn.empty(),_t.now()),cc(t,m)&&(h=h.insert(f,m))}),h})}}/**
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
 */class j5{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return W.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:RI(s.bundledQuery),readTime:wn(s.readTime)}}(t)),W.resolve()}}/**
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
 */class z5{constructor(){this.overlays=new pt(me.comparator),this.Ir=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const r=$r();return W.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,a)=>{this.ht(e,t,a)}),W.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Ir.delete(r)),W.resolve()}getOverlaysForCollection(e,t,r){const s=$r(),a=t.length+1,l=new me(t.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return W.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new pt((m,v)=>m-v);const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let v=a.get(m.largestBatchId);v===null&&(v=$r(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const h=$r(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,v)=>h.set(m,v)),!(h.size()>=s)););return W.resolve(h)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Gg(t,r));let a=this.Ir.get(t);a===void 0&&(a=Fe(),this.Ir.set(t,a)),this.Ir.set(t,a.add(r.key))}}/**
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
 */class B5{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class Xg{constructor(){this.Tr=new nt(Gt.Er),this.dr=new nt(Gt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Gt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Gt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new me(new Je([])),r=new Gt(t,e),s=new Gt(t,e+1),a=[];return this.dr.forEachInRange([r,s],l=>{this.Vr(l),a.push(l.key)}),a}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new me(new Je([])),r=new Gt(t,e),s=new Gt(t,e+1);let a=Fe();return this.dr.forEachInRange([r,s],l=>{a=a.add(l.key)}),a}containsKey(e){const t=new Gt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Gt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return me.comparator(e.key,t.key)||Oe(e.wr,t.wr)}static Ar(e,t){return Oe(e.wr,t.wr)||me.comparator(e.key,t.key)}}/**
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
 */class $5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new nt(Gt.Er)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Wg(a,t,r,s);this.mutationQueue.push(l);for(const h of s)this.br=this.br.add(new Gt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return W.resolve(l)}lookupMutationBatch(e,t){return W.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),a=s<0?0:s;return W.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Gt(t,0),s=new Gt(t,Number.POSITIVE_INFINITY),a=[];return this.br.forEachInRange([r,s],l=>{const h=this.Dr(l.wr);a.push(h)}),W.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Oe);return t.forEach(s=>{const a=new Gt(s,0),l=new Gt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([a,l],h=>{r=r.add(h.wr)})}),W.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;me.isDocumentKey(a)||(a=a.child(""));const l=new Gt(new me(a),0);let h=new nt(Oe);return this.br.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(h=h.add(f.wr)),!0)},l),W.resolve(this.Cr(h))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Se(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return W.forEach(t.mutations,s=>{const a=new Gt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Gt(t,0),s=this.br.firstAfterOrEqual(r);return W.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class q5{constructor(e){this.Mr=e,this.docs=function(){return new pt(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,l=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return W.resolve(r?r.document.mutableCopy():It.newInvalidDocument(t))}getEntries(e,t){let r=Wn();return t.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():It.newInvalidDocument(s))}),W.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Wn();const l=t.path,h=new me(l.child("")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||Fg(bE(v),r)<=0||(s.has(v.key)||cc(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return W.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Te()}Or(e,t){return W.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new W5(this)}getSize(e){return W.resolve(this.size)}}class W5 extends NI{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),W.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class H5{constructor(e){this.persistence=e,this.Nr=new As(t=>Ro(t),lc),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Xg,this.targetCount=0,this.kr=Do.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),W.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Do(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Kn(t),W.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.Nr.forEach((l,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.Nr.delete(l),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)}),W.waitFor(a).next(()=>s)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return W.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),W.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(l=>{a.push(s.markPotentiallyOrphaned(e,l))}),W.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return W.resolve(r)}containsKey(e,t){return W.resolve(this.Br.containsKey(t))}}/**
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
 */class LI{constructor(e,t){this.qr={},this.overlays={},this.Qr=new lr(0),this.Kr=!1,this.Kr=!0,this.$r=new B5,this.referenceDelegate=e(this),this.Ur=new H5(this),this.indexManager=new P5,this.remoteDocumentCache=function(s){return new q5(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new SI(t),this.Gr=new j5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new z5,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new $5(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){le("MemoryPersistence","Starting transaction:",e);const s=new G5(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(a=>this.referenceDelegate.jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Hr(e,t){return W.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class G5 extends NE{constructor(e){super(),this.currentSequenceNumber=e}}class uf{constructor(e){this.persistence=e,this.Jr=new Xg,this.Yr=null}static Zr(e){return new uf(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),W.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),W.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.Xr.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Xr,r=>{const s=me.fromPath(r);return this.ei(e,s).next(a=>{a||t.removeEntry(s,Ae.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return W.or([()=>W.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class K5{constructor(e){this.serializer=e}O(e,t,r,s){const a=new Jd("createOrUpgrade",t);r<1&&s>=1&&(function(f){f.createObjectStore("owner")}(e),function(f){f.createObjectStore("mutationQueues",{keyPath:"userId"}),f.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",r1,{unique:!0}),f.createObjectStore("documentMutations")}(e),q1(e),function(f){f.createObjectStore("remoteDocuments")}(e));let l=W.resolve();return r<3&&s>=3&&(r!==0&&(function(f){f.deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal")}(e),q1(e)),l=l.next(()=>function(f){const m=f.store("targetGlobal"),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ae.min().toTimestamp(),targetCount:0};return m.put("targetGlobalKey",v)}(a))),r<4&&s>=4&&(r!==0&&(l=l.next(()=>function(f,m){return m.store("mutations").U().next(v=>{f.deleteObjectStore("mutations"),f.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",r1,{unique:!0});const _=m.store("mutations"),I=v.map(R=>_.put(R));return W.waitFor(I)})}(e,a))),l=l.next(()=>{(function(f){f.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(l=l.next(()=>this.ni(a))),r<6&&s>=6&&(l=l.next(()=>(function(f){f.createObjectStore("remoteDocumentGlobal")}(e),this.ri(a)))),r<7&&s>=7&&(l=l.next(()=>this.ii(a))),r<8&&s>=8&&(l=l.next(()=>this.si(e,a))),r<9&&s>=9&&(l=l.next(()=>{(function(f){f.objectStoreNames.contains("remoteDocumentChanges")&&f.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(l=l.next(()=>this.oi(a))),r<11&&s>=11&&(l=l.next(()=>{(function(f){f.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(f){f.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(l=l.next(()=>{(function(f){const m=f.createObjectStore("documentOverlays",{keyPath:xb});m.createIndex("collectionPathOverlayIndex",Sb,{unique:!1}),m.createIndex("collectionGroupOverlayIndex",Ab,{unique:!1})})(e)})),r<13&&s>=13&&(l=l.next(()=>function(f){const m=f.createObjectStore("remoteDocumentsV14",{keyPath:fb});m.createIndex("documentKeyIndex",pb),m.createIndex("collectionGroupIndex",mb)}(e)).next(()=>this._i(e,a)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(l=l.next(()=>this.ai(e,a))),r<15&&s>=15&&(l=l.next(()=>function(f){f.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),f.createObjectStore("indexState",{keyPath:wb}).createIndex("sequenceNumberIndex",Eb,{unique:!1}),f.createObjectStore("indexEntries",{keyPath:Ib}).createIndex("documentKeyIndex",Tb,{unique:!1})}(e))),r<16&&s>=16&&(l=l.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(l=l.next(()=>{(function(f){f.createObjectStore("globals",{keyPath:"name"})})(e)})),l}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=Dd(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>W.forEach(s,a=>{const l=IDBKeyRange.bound([a.userId,-1],[a.userId,a.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",l).next(h=>W.forEach(h,f=>{Se(f.userId===a.userId);const m=oo(this.serializer,f);return CI(e,a.userId,m).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const a=[];return r.J((l,h)=>{const f=new Je(l),m=function(_){return[0,_n(_)]}(f);a.push(t.get(m).next(v=>v?W.resolve():(_=>t.put({targetId:0,path:_n(_),sequenceNumber:s.highestListenSequenceNumber}))(f)))}).next(()=>W.waitFor(a))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:_b});const r=t.store("collectionParents"),s=new Jg,a=l=>{if(s.add(l)){const h=l.lastSegment(),f=l.popLast();return r.put({collectionId:h,parent:_n(f)})}};return t.store("remoteDocuments").J({H:!0},(l,h)=>{const f=new Je(l);return a(f.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([l,h,f],m)=>{const v=Br(h);return a(v.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const a=bu(s),l=AI(this.serializer,a);return t.put(l)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((a,l)=>{const h=t.store("remoteDocumentsV14"),f=function(_){return _.document?new me(Je.fromString(_.document.name).popFirst(5)):_.noDocument?me.fromSegments(_.noDocument.path):_.unknownDocument?me.fromSegments(_.unknownDocument.path):Te()}(l).path.toArray(),m={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:l.readTime||[0,0],unknownDocument:l.unknownDocument,noDocument:l.noDocument,document:l.document,hasCommittedMutations:!!l.hasCommittedMutations};s.push(h.put(m))}).next(()=>W.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=VI(this.serializer),a=new LI(uf.Zr,this.serializer.ct);return r.U().next(l=>{const h=new Map;return l.forEach(f=>{var m;let v=(m=h.get(f.userId))!==null&&m!==void 0?m:Fe();oo(this.serializer,f).keys().forEach(_=>v=v.add(_)),h.set(f.userId,v)}),W.forEach(h,(f,m)=>{const v=new en(m),_=af.lt(this.serializer,v),I=a.getIndexManager(v),R=lf.lt(v,this.serializer,I,a.referenceDelegate);return new OI(s,R,_,I).recalculateAndSaveOverlaysForDocumentKeys(new Wm(t,lr.oe),f).next()})})}}function q1(n){n.createObjectStore("targetDocuments",{keyPath:yb}).createIndex("documentTargetsIndex",vb,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",gb,{unique:!0}),n.createObjectStore("targetGlobal")}const pm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Zg{constructor(e,t,r,s,a,l,h,f,m,v,_=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=a,this.window=l,this.document=h,this.ci=m,this.li=v,this.hi=_,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=I=>Promise.resolve(),!Zg.D())throw new de(Z.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new L5(this,s),this.Ai=t+"main",this.serializer=new SI(f),this.Ri=new ps(this.Ai,this.hi,new K5(this.serializer)),this.$r=new T5,this.Ur=new b5(this.referenceDelegate,this.serializer),this.remoteDocumentCache=VI(this.serializer),this.Gr=new I5,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,v===!1&&vn("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new de(Z.FAILED_PRECONDITION,pm);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new lr(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>jh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Ss(e))return le("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return le("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Eu(e).get("owner").next(t=>W.resolve(this.vi(t)))}Ci(e){return jh(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Bt(t,"clientMetadata");return r.U().next(s=>{const a=this.xi(s,18e5),l=s.filter(h=>a.indexOf(h)===-1);return W.forEach(l,h=>r.delete(h.clientId)).next(()=>l)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?W.resolve(!0):Eu(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new de(Z.FAILED_PRECONDITION,pm);return!1}}return!(!this.networkEnabled||!this.inForeground)||jh(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const a=!this.networkEnabled&&s.networkEnabled,l=!this.inForeground&&s.inForeground,h=this.networkEnabled===s.networkEnabled;if(a||l&&h)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&le("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Wm(e,lr.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>jh(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return lf.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new C5(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return af.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){le("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",a=function(f){return f===17?Pb:f===16?kb:f===15?jg:f===14?FE:f===13?ME:f===12?Rb:f===11?LE:void Te()}(this.hi);let l;return this.Ri.runTransaction(e,s,a,h=>(l=new Wm(h,this.Qr?this.Qr.next():lr.oe),t==="readwrite-primary"?this.wi(l).next(f=>!!f||this.Si(l)).next(f=>{if(!f)throw vn(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new de(Z.FAILED_PRECONDITION,DE);return r(l)}).next(f=>this.Di(l).next(()=>f)):this.Ki(l).next(()=>r(l)))).then(h=>(l.raiseOnCommittedEvent(),h))}Ki(e){return Eu(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new de(Z.FAILED_PRECONDITION,pm)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Eu(e).put("owner",t)}static D(){return ps.D()}bi(e){const t=Eu(e);return t.get("owner").next(r=>this.vi(r)?(le("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):W.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(vn(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;R2()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return le("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return vn("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){vn("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Eu(n){return Bt(n,"owner")}function jh(n){return Bt(n,"clientMetadata")}function Q5(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class e0{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=Fe(),s=Fe();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new e0(e,t.fromCache,r,s)}}/**
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
 */class Y5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class MI{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return R2()?8:VE(zt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.Yi(e,t).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.Zi(e,t,s,r).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new Y5;return this.Xi(e,t,l).next(h=>{if(a.result=h,this.zi)return this.es(e,t,l,h.size)})}).next(()=>a.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ja()<=ze.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",za(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),W.resolve()):(ja()<=ze.DEBUG&&le("QueryEngine","Query:",za(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ja()<=ze.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",za(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):W.resolve())}Yi(e,t){if(g1(t))return W.resolve(null);let r=ur(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Rd(t,null,"F"),r=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const l=Fe(...a);return this.Ji.getDocuments(e,l).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const m=this.ts(t,h);return this.ns(t,m,l,f.readTime)?this.Yi(e,Rd(t,null,"F")):this.rs(e,m,t,f)}))})))}Zi(e,t,r,s){return g1(t)||s.isEqual(Ae.min())?W.resolve(null):this.Ji.getDocuments(e,r).next(a=>{const l=this.ts(t,a);return this.ns(t,l,r,s)?W.resolve(null):(ja()<=ze.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),za(t)),this.rs(e,l,t,sb(s,-1)).next(h=>h))})}ts(e,t){let r=new nt(XE(e));return t.forEach((s,a)=>{cc(e,a)&&(r=r.add(a))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Xi(e,t,r){return ja()<=ze.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",za(t)),this.Ji.getDocumentsMatchingQuery(e,t,Kn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(a=>(t.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
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
 */class J5{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new pt(Oe),this._s=new As(a=>Ro(a),lc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function FI(n,e,t,r){return new J5(n,e,t,r)}async function UI(n,e){const t=Ne(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const l=[],h=[];let f=Fe();for(const m of s){l.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of a){h.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next(m=>({hs:m,removedBatchIds:l,addedBatchIds:h}))})})}function X5(n,e){const t=Ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),a=t.cs.newChangeBuffer({trackRemovals:!0});return function(h,f,m,v){const _=m.batch,I=_.keys();let R=W.resolve();return I.forEach(M=>{R=R.next(()=>v.getEntry(f,M)).next(U=>{const V=m.docVersions.get(M);Se(V!==null),U.version.compareTo(V)<0&&(_.applyToRemoteDocument(U,m),U.isValidDocument()&&(U.setReadTime(m.commitVersion),v.addEntry(U)))})}),R.next(()=>h.mutationQueue.removeMutationBatch(f,_))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=Fe();for(let m=0;m<h.mutationResults.length;++m)h.mutationResults[m].transformResults.length>0&&(f=f.add(h.batch.mutations[m].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function jI(n){const e=Ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Z5(n,e){const t=Ne(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const l=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const h=[];e.targetChanges.forEach((v,_)=>{const I=s.get(_);if(!I)return;h.push(t.Ur.removeMatchingKeys(a,v.removedDocuments,_).next(()=>t.Ur.addMatchingKeys(a,v.addedDocuments,_)));let R=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(_)!==null?R=R.withResumeToken(Vt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(v.resumeToken,r)),s=s.insert(_,R),function(U,V,Y){return U.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=3e8?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(I,R,v)&&h.push(t.Ur.updateTargetData(a,R))});let f=Wn(),m=Fe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),h.push(e3(a,l,e.documentUpdates).next(v=>{f=v.Ps,m=v.Is})),!r.isEqual(Ae.min())){const v=t.Ur.getLastRemoteSnapshotVersion(a).next(_=>t.Ur.setTargetsMetadata(a,a.currentSequenceNumber,r));h.push(v)}return W.waitFor(h).next(()=>l.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,m)).next(()=>f)}).then(a=>(t.os=s,a))}function e3(n,e,t){let r=Fe(),s=Fe();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let l=Wn();return t.forEach((h,f)=>{const m=a.get(h);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(h)),f.isNoDocument()&&f.version.isEqual(Ae.min())?(e.removeEntry(h,f.readTime),l=l.insert(h,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),l=l.insert(h,f)):le("LocalStore","Ignoring outdated watch update for ",h,". Current version:",m.version," Watch version:",f.version)}),{Ps:l,Is:s}})}function t3(n,e){const t=Ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function n3(n,e){const t=Ne(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(a=>a?(s=a,W.resolve(s)):t.Ur.allocateTargetId(r).next(l=>(s=new wi(e,l,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function sg(n,e,t){const r=Ne(n),s=r.os.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,l=>r.persistence.referenceDelegate.removeTarget(l,s))}catch(l){if(!Ss(l))throw l;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function W1(n,e,t){const r=Ne(n);let s=Ae.min(),a=Fe();return r.persistence.runTransaction("Execute query","readwrite",l=>function(f,m,v){const _=Ne(f),I=_._s.get(v);return I!==void 0?W.resolve(_.os.get(I)):_.Ur.getTargetData(m,v)}(r,l,ur(e)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(l,h.targetId).next(f=>{a=f})}).next(()=>r.ss.getDocumentsMatchingQuery(l,e,t?s:Ae.min(),t?a:Fe())).next(h=>(r3(r,qb(e),h),{documents:h,Ts:a})))}function r3(n,e,t){let r=n.us.get(e)||Ae.min();t.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.us.set(e,r)}class H1{constructor(){this.activeTargetIds=Yb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zI{constructor(){this.so=new H1,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new H1,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class i3{_o(e){}shutdown(){}}/**
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
 */class G1{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zh=null;function mm(){return zh===null?zh=function(){return 268435456+Math.round(2147483648*Math.random())}():zh++,"0x"+zh.toString(16)}/**
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
 */const s3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class o3{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const an="WebChannelConnection";class a3 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${a}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}get Fo(){return!1}Mo(t,r,s,a,l){const h=mm(),f=this.xo(t,r.toUriEncodedString());le("RestConnection",`Sending RPC '${t}' ${h}:`,f,s);const m={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(m,a,l),this.No(t,f,m,s).then(v=>(le("RestConnection",`Received RPC '${t}' ${h}: `,v),v),v=>{throw To("RestConnection",`RPC '${t}' ${h} failed with error: `,v,"url: ",f,"request:",s),v})}Lo(t,r,s,a,l,h){return this.Mo(t,r,s,a,l)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_l}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((a,l)=>t[l]=a),s&&s.headers.forEach((a,l)=>t[l]=a)}xo(t,r){const s=s3[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const a=mm();return new Promise((l,h)=>{const f=new TE;f.setWithCredentials(!0),f.listenOnce(xE.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case ed.NO_ERROR:const v=f.getResponseJson();le(an,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),l(v);break;case ed.TIMEOUT:le(an,`RPC '${e}' ${a} timed out`),h(new de(Z.DEADLINE_EXCEEDED,"Request time out"));break;case ed.HTTP_ERROR:const _=f.getStatus();if(le(an,`RPC '${e}' ${a} failed with status:`,_,"response text:",f.getResponseText()),_>0){let I=f.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I?.error;if(R&&R.status&&R.message){const M=function(V){const Y=V.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(Y)>=0?Y:Z.UNKNOWN}(R.status);h(new de(M,R.message))}else h(new de(Z.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new de(Z.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{le(an,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);le(an,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",m,r,15)})}Bo(e,t,r){const s=mm(),a=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=RE(),h=AE(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Oo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");le(an,`Creating RPC '${e}' stream ${s}: ${v}`,f);const _=l.createWebChannel(v,f);let I=!1,R=!1;const M=new o3({Io:V=>{R?le(an,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(I||(le(an,`Opening RPC '${e}' stream ${s} transport.`),_.open(),I=!0),le(an,`RPC '${e}' stream ${s} sending:`,V),_.send(V))},To:()=>_.close()}),U=(V,Y,ee)=>{V.listen(Y,X=>{try{ee(X)}catch(re){setTimeout(()=>{throw re},0)}})};return U(_,ku.EventType.OPEN,()=>{R||(le(an,`RPC '${e}' stream ${s} transport opened.`),M.yo())}),U(_,ku.EventType.CLOSE,()=>{R||(R=!0,le(an,`RPC '${e}' stream ${s} transport closed`),M.So())}),U(_,ku.EventType.ERROR,V=>{R||(R=!0,To(an,`RPC '${e}' stream ${s} transport errored:`,V),M.So(new de(Z.UNAVAILABLE,"The operation could not be completed")))}),U(_,ku.EventType.MESSAGE,V=>{var Y;if(!R){const ee=V.data[0];Se(!!ee);const X=ee,re=X.error||((Y=X[0])===null||Y===void 0?void 0:Y.error);if(re){le(an,`RPC '${e}' stream ${s} received error:`,re);const fe=re.status;let J=function(A){const k=Pt[A];if(k!==void 0)return hI(k)}(fe),x=re.message;J===void 0&&(J=Z.INTERNAL,x="Unknown error status: "+fe+" with message "+re.message),R=!0,M.So(new de(J,x)),_.close()}else le(an,`RPC '${e}' stream ${s} received:`,ee),M.bo(ee)}}),U(h,SE.STAT_EVENT,V=>{V.stat===$m.PROXY?le(an,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===$m.NOPROXY&&le(an,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{M.wo()},0),M}}/**
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
 */function l3(){return typeof window<"u"?window:null}function ad(){return typeof document<"u"?document:null}/**
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
 */function cf(n){return new h5(n,!0)}/**
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
 */class BI{constructor(e,t,r=1e3,s=1.5,a=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&le("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class $I{constructor(e,t,r,s,a,l,h,f){this.ui=e,this.Ho=r,this.Jo=s,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new BI(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(vn(t.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new de(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u3 extends $I{constructor(e,t,r,s,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,l),this.serializer=a}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=p5(this.serializer,e),r=function(a){if(!("targetChange"in a))return Ae.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Ae.min():l.readTime?wn(l.readTime):Ae.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=eg(this.serializer),t.addTarget=function(a,l){let h;const f=l.target;if(h=Sd(f)?{documents:_I(a,f)}:{query:wI(a,f)._t},h.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){h.resumeToken=pI(a,l.resumeToken);const m=Xm(a,l.expectedCount);m!==null&&(h.expectedCount=m)}else if(l.snapshotVersion.compareTo(Ae.min())>0){h.readTime=cl(a,l.snapshotVersion.toTimestamp());const m=Xm(a,l.expectedCount);m!==null&&(h.expectedCount=m)}return h}(this.serializer,e);const r=g5(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=eg(this.serializer),t.removeTarget=e,this.a_(t)}}class c3 extends $I{constructor(e,t,r,s,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,l),this.serializer=a}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=m5(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=eg(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Pd(this.serializer,r))};this.a_(t)}}/**
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
 */class h3 extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new de(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Mo(e,Zm(t,r),s,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new de(Z.UNKNOWN,a.toString())})}Lo(e,t,r,s,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Lo(e,Zm(t,r),s,l,h,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new de(Z.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class d3{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(vn(t),this.D_=!1):le("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class f3{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=a,this.k_._o(l=>{r.enqueueAndForget(async()=>{Uo(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(f){const m=Ne(f);m.L_.add(4),await fc(m),m.q_.set("Unknown"),m.L_.delete(4),await hf(m)}(this))})}),this.q_=new d3(r,s)}}async function hf(n){if(Uo(n))for(const e of n.B_)await e(!0)}async function fc(n){for(const e of n.B_)await e(!1)}function qI(n,e){const t=Ne(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),i0(t)?r0(t):El(t).r_()&&n0(t,e))}function t0(n,e){const t=Ne(n),r=El(t);t.N_.delete(e),r.r_()&&WI(t,e),t.N_.size===0&&(r.r_()?r.o_():Uo(t)&&t.q_.set("Unknown"))}function n0(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}El(n).A_(e)}function WI(n,e){n.Q_.xe(e),El(n).R_(e)}function r0(n){n.Q_=new a5({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),El(n).start(),n.q_.v_()}function i0(n){return Uo(n)&&!El(n).n_()&&n.N_.size>0}function Uo(n){return Ne(n).L_.size===0}function HI(n){n.Q_=void 0}async function p3(n){n.q_.set("Online")}async function m3(n){n.N_.forEach((e,t)=>{n0(n,e)})}async function g3(n,e){HI(n),i0(n)?(n.q_.M_(e),r0(n)):n.q_.set("Unknown")}async function y3(n,e,t){if(n.q_.set("Online"),e instanceof fI&&e.state===2&&e.cause)try{await async function(s,a){const l=a.cause;for(const h of a.targetIds)s.N_.has(h)&&(await s.remoteSyncer.rejectListen(h,l),s.N_.delete(h),s.Q_.removeTarget(h))}(n,e)}catch(r){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nd(n,r)}else if(e instanceof od?n.Q_.Ke(e):e instanceof dI?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ae.min()))try{const r=await jI(n.localStore);t.compareTo(r)>=0&&await function(a,l){const h=a.Q_.rt(l);return h.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.N_.get(m);v&&a.N_.set(m,v.withResumeToken(f.resumeToken,l))}}),h.targetMismatches.forEach((f,m)=>{const v=a.N_.get(f);if(!v)return;a.N_.set(f,v.withResumeToken(Vt.EMPTY_BYTE_STRING,v.snapshotVersion)),WI(a,f);const _=new wi(v.target,f,m,v.sequenceNumber);n0(a,_)}),a.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){le("RemoteStore","Failed to raise snapshot:",r),await Nd(n,r)}}async function Nd(n,e,t){if(!Ss(e))throw e;n.L_.add(1),await fc(n),n.q_.set("Offline"),t||(t=()=>jI(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await hf(n)})}function GI(n,e){return e().catch(t=>Nd(n,t,e))}async function pc(n){const e=Ne(n),t=Is(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;v3(e);)try{const s=await t3(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,_3(e,s)}catch(s){await Nd(e,s)}KI(e)&&QI(e)}function v3(n){return Uo(n)&&n.O_.length<10}function _3(n,e){n.O_.push(e);const t=Is(n);t.r_()&&t.V_&&t.m_(e.mutations)}function KI(n){return Uo(n)&&!Is(n).n_()&&n.O_.length>0}function QI(n){Is(n).start()}async function w3(n){Is(n).p_()}async function E3(n){const e=Is(n);for(const t of n.O_)e.m_(t.mutations)}async function I3(n,e,t){const r=n.O_.shift(),s=Hg.from(r,e,t);await GI(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await pc(n)}async function T3(n,e){e&&Is(n).V_&&await async function(r,s){if(function(l){return i5(l)&&l!==Z.ABORTED}(s.code)){const a=r.O_.shift();Is(r).s_(),await GI(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await pc(r)}}(n,e),KI(n)&&QI(n)}async function K1(n,e){const t=Ne(n);t.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const r=Uo(t);t.L_.add(3),await fc(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await hf(t)}async function x3(n,e){const t=Ne(n);e?(t.L_.delete(2),await hf(t)):e||(t.L_.add(2),await fc(t),t.q_.set("Unknown"))}function El(n){return n.K_||(n.K_=function(t,r,s){const a=Ne(t);return a.w_(),new u3(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Eo:p3.bind(null,n),Ro:m3.bind(null,n),mo:g3.bind(null,n),d_:y3.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),i0(n)?r0(n):n.q_.set("Unknown")):(await n.K_.stop(),HI(n))})),n.K_}function Is(n){return n.U_||(n.U_=function(t,r,s){const a=Ne(t);return a.w_(),new c3(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:w3.bind(null,n),mo:T3.bind(null,n),f_:E3.bind(null,n),g_:I3.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await pc(n)):(await n.U_.stop(),n.O_.length>0&&(le("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class s0{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const l=Date.now()+r,h=new s0(e,t,l,s,a);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function o0(n,e){if(vn("AsyncQueue",`${e}: ${n}`),Ss(n))return new de(Z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ya{constructor(e){this.comparator=e?(t,r)=>e(t,r)||me.comparator(t.key,r.key):(t,r)=>me.comparator(t.key,r.key),this.keyedMap=Pu(),this.sortedSet=new pt(this.comparator)}static emptySet(e){return new Ya(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ya)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ya;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Q1{constructor(){this.W_=new pt(me.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class hl{constructor(e,t,r,s,a,l,h,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const l=[];return t.forEach(h=>{l.push({type:0,doc:h})}),new hl(e,t,Ya.emptySet(t),l,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class S3{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class A3{constructor(){this.queries=Y1(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Ne(t),a=s.queries;s.queries=Y1(),a.forEach((l,h)=>{for(const f of h.j_)f.onError(r)})})(this,new de(Z.ABORTED,"Firestore shutting down"))}}function Y1(){return new As(n=>JE(n),tf)}async function a0(n,e){const t=Ne(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.H_()&&e.J_()&&(r=2):(a=new S3,r=e.J_()?0:1);try{switch(r){case 0:a.z_=await t.onListen(s,!0);break;case 1:a.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(l){const h=o0(l,`Initialization of query '${za(e.query)}' failed`);return void e.onError(h)}t.queries.set(s,a),a.j_.push(e),e.Z_(t.onlineState),a.z_&&e.X_(a.z_)&&u0(t)}async function l0(n,e){const t=Ne(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const l=a.j_.indexOf(e);l>=0&&(a.j_.splice(l,1),a.j_.length===0?s=e.J_()?0:1:!a.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function R3(n,e){const t=Ne(n);let r=!1;for(const s of e){const a=s.query,l=t.queries.get(a);if(l){for(const h of l.j_)h.X_(s)&&(r=!0);l.z_=s}}r&&u0(t)}function k3(n,e,t){const r=Ne(n),s=r.queries.get(e);if(s)for(const a of s.j_)a.onError(t);r.queries.delete(e)}function u0(n){n.Y_.forEach(e=>{e.next()})}var og,J1;(J1=og||(og={})).ea="default",J1.Cache="cache";class c0{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hl(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=hl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==og.Cache}}/**
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
 */class YI{constructor(e){this.key=e}}class JI{constructor(e){this.key=e}}class P3{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Fe(),this.mutatedKeys=Fe(),this.Aa=XE(e),this.Ra=new Ya(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Q1,s=t?t.Ra:this.Ra;let a=t?t.mutatedKeys:this.mutatedKeys,l=s,h=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((v,_)=>{const I=s.get(v),R=cc(this.query,_)?_:null,M=!!I&&this.mutatedKeys.has(I.key),U=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;I&&R?I.data.isEqual(R.data)?M!==U&&(r.track({type:3,doc:R}),V=!0):this.ga(I,R)||(r.track({type:2,doc:R}),V=!0,(f&&this.Aa(R,f)>0||m&&this.Aa(R,m)<0)&&(h=!0)):!I&&R?(r.track({type:0,doc:R}),V=!0):I&&!R&&(r.track({type:1,doc:I}),V=!0,(f||m)&&(h=!0)),V&&(R?(l=l.add(R),a=U?a.add(v):a.delete(v)):(l=l.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const v=this.query.limitType==="F"?l.last():l.first();l=l.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{Ra:l,fa:r,ns:h,mutatedKeys:a}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const l=e.fa.G_();l.sort((v,_)=>function(R,M){const U=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return U(R)-U(M)}(v.type,_.type)||this.Aa(v.doc,_.doc)),this.pa(r),s=s!=null&&s;const h=t&&!s?this.ya():[],f=this.da.size===0&&this.current&&!s?1:0,m=f!==this.Ea;return this.Ea=f,l.length!==0||m?{snapshot:new hl(this.query,e.Ra,a,l,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:h}:{wa:h}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Q1,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new JI(r))}),this.da.forEach(r=>{e.has(r)||t.push(new YI(r))}),t}ba(e){this.Ta=e.Ts,this.da=Fe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return hl.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class C3{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class b3{constructor(e){this.key=e,this.va=!1}}class D3{constructor(e,t,r,s,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new As(h=>JE(h),tf),this.Ma=new Map,this.xa=new Set,this.Oa=new pt(me.comparator),this.Na=new Map,this.La=new Xg,this.Ba={},this.ka=new Map,this.qa=Do.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function N3(n,e,t=!0){const r=rT(n);let s;const a=r.Fa.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Da()):s=await XI(r,e,t,!0),s}async function V3(n,e){const t=rT(n);await XI(t,e,!0,!1)}async function XI(n,e,t,r){const s=await n3(n.localStore,ur(e)),a=s.targetId,l=n.sharedClientState.addLocalQueryTarget(a,t);let h;return r&&(h=await O3(n,e,a,l==="current",s.resumeToken)),n.isPrimaryClient&&t&&qI(n.remoteStore,s),h}async function O3(n,e,t,r,s){n.Ka=(_,I,R)=>async function(U,V,Y,ee){let X=V.view.ma(Y);X.ns&&(X=await W1(U.localStore,V.query,!1).then(({documents:x})=>V.view.ma(x,X)));const re=ee&&ee.targetChanges.get(V.targetId),fe=ee&&ee.targetMismatches.get(V.targetId)!=null,J=V.view.applyChanges(X,U.isPrimaryClient,re,fe);return Z1(U,V.targetId,J.wa),J.snapshot}(n,_,I,R);const a=await W1(n.localStore,e,!0),l=new P3(e,a.Ts),h=l.ma(a.documents),f=dc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=l.applyChanges(h,n.isPrimaryClient,f);Z1(n,t,m.wa);const v=new C3(e,t,l);return n.Fa.set(e,v),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),m.snapshot}async function L3(n,e,t){const r=Ne(n),s=r.Fa.get(e),a=r.Ma.get(s.targetId);if(a.length>1)return r.Ma.set(s.targetId,a.filter(l=>!tf(l,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sg(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&t0(r.remoteStore,s.targetId),ag(r,s.targetId)}).catch(Lo)):(ag(r,s.targetId),await sg(r.localStore,s.targetId,!0))}async function M3(n,e){const t=Ne(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),t0(t.remoteStore,r.targetId))}async function F3(n,e,t){const r=iT(n);try{const s=await function(l,h){const f=Ne(l),m=_t.now(),v=h.reduce((R,M)=>R.add(M.key),Fe());let _,I;return f.persistence.runTransaction("Locally write mutations","readwrite",R=>{let M=Wn(),U=Fe();return f.cs.getEntries(R,v).next(V=>{M=V,M.forEach((Y,ee)=>{ee.isValidDocument()||(U=U.add(Y))})}).next(()=>f.localDocuments.getOverlayedDocuments(R,M)).next(V=>{_=V;const Y=[];for(const ee of h){const X=n5(ee,_.get(ee.key).overlayedDocument);X!=null&&Y.push(new xi(ee.key,X,$E(X.value.mapValue),cn.exists(!0)))}return f.mutationQueue.addMutationBatch(R,m,Y,h)}).next(V=>{I=V;const Y=V.applyToLocalDocumentSet(_,U);return f.documentOverlayCache.saveOverlays(R,V.batchId,Y)})}).then(()=>({batchId:I.batchId,changes:eI(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(l,h,f){let m=l.Ba[l.currentUser.toKey()];m||(m=new pt(Oe)),m=m.insert(h,f),l.Ba[l.currentUser.toKey()]=m}(r,s.batchId,t),await mc(r,s.changes),await pc(r.remoteStore)}catch(s){const a=o0(s,"Failed to persist write");t.reject(a)}}async function ZI(n,e){const t=Ne(n);try{const r=await Z5(t.localStore,e);e.targetChanges.forEach((s,a)=>{const l=t.Na.get(a);l&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?l.va=!0:s.modifiedDocuments.size>0?Se(l.va):s.removedDocuments.size>0&&(Se(l.va),l.va=!1))}),await mc(t,r,e)}catch(r){await Lo(r)}}function X1(n,e,t){const r=Ne(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((a,l)=>{const h=l.view.Z_(e);h.snapshot&&s.push(h.snapshot)}),function(l,h){const f=Ne(l);f.onlineState=h;let m=!1;f.queries.forEach((v,_)=>{for(const I of _.j_)I.Z_(h)&&(m=!0)}),m&&u0(f)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function U3(n,e,t){const r=Ne(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),a=s&&s.key;if(a){let l=new pt(me.comparator);l=l.insert(a,It.newNoDocument(a,Ae.min()));const h=Fe().add(a),f=new of(Ae.min(),new Map,new pt(Oe),l,h);await ZI(r,f),r.Oa=r.Oa.remove(a),r.Na.delete(e),h0(r)}else await sg(r.localStore,e,!1).then(()=>ag(r,e,t)).catch(Lo)}async function j3(n,e){const t=Ne(n),r=e.batch.batchId;try{const s=await X5(t.localStore,e);tT(t,r,null),eT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mc(t,s)}catch(s){await Lo(s)}}async function z3(n,e,t){const r=Ne(n);try{const s=await function(l,h){const f=Ne(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return f.mutationQueue.lookupMutationBatch(m,h).next(_=>(Se(_!==null),v=_.keys(),f.mutationQueue.removeMutationBatch(m,_))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>f.localDocuments.getDocuments(m,v))})}(r.localStore,e);tT(r,e,t),eT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mc(r,s)}catch(s){await Lo(s)}}function eT(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function tT(n,e,t){const r=Ne(n);let s=r.Ba[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ag(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||nT(n,r)})}function nT(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(t0(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),h0(n))}function Z1(n,e,t){for(const r of t)r instanceof YI?(n.La.addReference(r.key,e),B3(n,r)):r instanceof JI?(le("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||nT(n,r.key)):Te()}function B3(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(le("SyncEngine","New document in limbo: "+t),n.xa.add(r),h0(n))}function h0(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new me(Je.fromString(e)),r=n.qa.next();n.Na.set(r,new b3(t)),n.Oa=n.Oa.insert(t,r),qI(n.remoteStore,new wi(ur(uc(t.path)),r,"TargetPurposeLimboResolution",lr.oe))}}async function mc(n,e,t){const r=Ne(n),s=[],a=[],l=[];r.Fa.isEmpty()||(r.Fa.forEach((h,f)=>{l.push(r.Ka(f,e,t).then(m=>{var v;if((m||t)&&r.isPrimaryClient){const _=m?!m.fromCache:(v=t?.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,_?"current":"not-current")}if(m){s.push(m);const _=e0.Wi(f.targetId,m);a.push(_)}}))}),await Promise.all(l),r.Ca.d_(s),await async function(f,m){const v=Ne(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>W.forEach(m,I=>W.forEach(I.$i,R=>v.persistence.referenceDelegate.addReference(_,I.targetId,R)).next(()=>W.forEach(I.Ui,R=>v.persistence.referenceDelegate.removeReference(_,I.targetId,R)))))}catch(_){if(!Ss(_))throw _;le("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of m){const I=_.targetId;if(!_.fromCache){const R=v.os.get(I),M=R.snapshotVersion,U=R.withLastLimboFreeSnapshotVersion(M);v.os=v.os.insert(I,U)}}}(r.localStore,a))}async function $3(n,e){const t=Ne(n);if(!t.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const r=await UI(t.localStore,e);t.currentUser=e,function(a,l){a.ka.forEach(h=>{h.forEach(f=>{f.reject(new de(Z.CANCELLED,l))})}),a.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mc(t,r.hs)}}function q3(n,e){const t=Ne(n),r=t.Na.get(e);if(r&&r.va)return Fe().add(r.key);{let s=Fe();const a=t.Ma.get(e);if(!a)return s;for(const l of a){const h=t.Fa.get(l);s=s.unionWith(h.view.Va)}return s}}function rT(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=q3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=U3.bind(null,e),e.Ca.d_=R3.bind(null,e.eventManager),e.Ca.$a=k3.bind(null,e.eventManager),e}function iT(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=j3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=z3.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cf(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return FI(this.persistence,new MI,e.initialUser,this.serializer)}Ga(e){return new LI(uf.Zr,this.serializer)}Wa(e){return new zI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class W3 extends ec{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await iT(this.Ja.syncEngine),await pc(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return FI(this.persistence,new MI,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new N5(r,e.asyncQueue,t)}Ha(e,t){const r=new ub(t,this.persistence);return new lb(e.asyncQueue,r)}Ga(e){const t=Q5(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Dn.withCacheSize(this.cacheSizeBytes):Dn.DEFAULT;return new Zg(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,l3(),ad(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new zI}}class Vd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>X1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$3.bind(null,this.syncEngine),await x3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new A3}()}createDatastore(e){const t=cf(e.databaseInfo.databaseId),r=function(a){return new a3(a)}(e.databaseInfo);return function(a,l,h,f){return new h3(a,l,h,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,a,l,h){return new f3(r,s,a,l,h)}(this.localStore,this.datastore,e.asyncQueue,t=>X1(this.syncEngine,t,0),function(){return G1.D()?new G1:new i3}())}createSyncEngine(e,t){return function(s,a,l,h,f,m,v){const _=new D3(s,a,l,h,f,m);return v&&(_.Qa=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=Ne(s);le("RemoteStore","RemoteStore shutting down."),a.L_.add(5),await fc(a),a.k_.shutdown(),a.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Vd.provider={build:()=>new Vd};/**
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
 */class d0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class H3{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=en.UNAUTHENTICATED,this.clientId=PE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async l=>{le("FirestoreClient","Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(le("FirestoreClient","Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=o0(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gm(n,e){n.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await UI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ew(n,e){n.asyncQueue.verifyOperationInProgress();const t=await G3(n);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>K1(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>K1(e.remoteStore,s)),n._onlineComponents=e}async function G3(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await gm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===Z.FAILED_PRECONDITION||s.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;To("Error using user provided cache. Falling back to memory cache: "+t),await gm(n,new ec)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await gm(n,new ec);return n._offlineComponents}async function sT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await ew(n,n._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await ew(n,new Vd))),n._onlineComponents}function K3(n){return sT(n).then(e=>e.syncEngine)}async function Od(n){const e=await sT(n),t=e.eventManager;return t.onListen=N3.bind(null,e.syncEngine),t.onUnlisten=L3.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=V3.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=M3.bind(null,e.syncEngine),t}function Q3(n,e,t={}){const r=new Gr;return n.asyncQueue.enqueueAndForget(async()=>function(a,l,h,f,m){const v=new d0({next:I=>{v.Za(),l.enqueueAndForget(()=>l0(a,_));const R=I.docs.has(h);!R&&I.fromCache?m.reject(new de(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&I.fromCache&&f&&f.source==="server"?m.reject(new de(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(I)},error:I=>m.reject(I)}),_=new c0(uc(h.path),v,{includeMetadataChanges:!0,_a:!0});return a0(a,_)}(await Od(n),n.asyncQueue,e,t,r)),r.promise}function Y3(n,e,t={}){const r=new Gr;return n.asyncQueue.enqueueAndForget(async()=>function(a,l,h,f,m){const v=new d0({next:I=>{v.Za(),l.enqueueAndForget(()=>l0(a,_)),I.fromCache&&f.source==="server"?m.reject(new de(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(I)},error:I=>m.reject(I)}),_=new c0(h,v,{includeMetadataChanges:!0,_a:!0});return a0(a,_)}(await Od(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function oT(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const tw=new Map;/**
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
 */function aT(n,e,t){if(!t)throw new de(Z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function J3(n,e,t,r){if(e===!0&&r===!0)throw new de(Z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nw(n){if(!me.isDocumentKey(n))throw new de(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rw(n){if(me.isDocumentKey(n))throw new de(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function df(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function En(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new de(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=df(n);throw new de(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function X3(n,e){if(e<=0)throw new de(Z.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class iw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new de(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new de(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}J3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ff{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YC;switch(r.type){case"firstParty":return new eb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new de(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=tw.get(t);r&&(le("ComponentProvider","Removing Datastore"),tw.delete(t),r.terminate())}(this),Promise.resolve()}}function Z3(n,e,t,r={}){var s;const a=(n=En(n,ff))._getSettings(),l=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==l&&To("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:l,ssl:!1})),r.mockUserToken){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=en.MOCK_USER;else{h=A2(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new de(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new en(m)}n._authCredentials=new JC(new kE(h,f))}}/**
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
 */class Jr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class hn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ms(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class ms extends Jr{constructor(e,t,r){super(e,t,uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new me(e))}withConverter(e){return new ms(this.firestore,e,this._path)}}function Qt(n,e,...t){if(n=Xe(n),aT("collection","path",e),n instanceof ff){const r=Je.fromString(e,...t);return rw(r),new ms(n,null,r)}{if(!(n instanceof hn||n instanceof ms))throw new de(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Je.fromString(e,...t));return rw(r),new ms(n.firestore,null,r)}}function Ye(n,e,...t){if(n=Xe(n),arguments.length===1&&(e=PE.newId()),aT("doc","path",e),n instanceof ff){const r=Je.fromString(e,...t);return nw(r),new hn(n,null,new me(r))}{if(!(n instanceof hn||n instanceof ms))throw new de(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Je.fromString(e,...t));return nw(r),new hn(n.firestore,n instanceof ms?n.converter:null,new me(r))}}/**
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
 */class sw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new BI(this,"async_queue_retry"),this.Vu=()=>{const r=ad();r&&le("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ad();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ad();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Gr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ss(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(l){let h=l.message||"";return l.stack&&(h=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),h}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=s0.createAndSchedule(this,e,t,r,a=>this.yu(a));return this.Tu.push(s),s}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function ow(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(n,["next","error","complete"])}class Qr extends ff{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new sw,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sw(e),this._firestoreClient=void 0,await e}}}function e6(n,e){const t=typeof n=="object"?n:Sg(),r=typeof n=="string"?n:"(default)",s=Gd(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=T2("firestore");a&&Z3(s,...a)}return s}function pf(n){if(n._terminated)throw new de(Z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||lT(n),n._firestoreClient}function lT(n){var e,t,r;const s=n._freezeSettings(),a=function(h,f,m,v){return new bb(h,f,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,oT(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new H3(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(h){const f=h?._online.build();return{_offline:h?._offline.build(f),_online:f}}(n._componentsProvider))}function t6(n,e){To("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return n6(n,Vd.provider,{build:r=>new W3(r,t.cacheSizeBytes,e?.forceOwnership)}),Promise.resolve()}function n6(n,e,t){if((n=En(n,Qr))._firestoreClient||n._terminated)throw new de(Z.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new de(Z.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},lT(n)}/**
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
 */class dl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dl(Vt.fromBase64String(e))}catch(t){throw new de(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dl(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class mf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jo{constructor(e){this._methodName=e}}/**
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
 */class f0{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */class p0{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const r6=/^__.*__$/;class i6{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,t,this.fieldTransforms):new wl(e,this.data,t,this.fieldTransforms)}}class uT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new xi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function cT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class gf{constructor(e,t,r,s,a,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.vu(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new gf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ld(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(cT(this.Cu)&&r6.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class s6{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||cf(e)}Qu(e,t,r,s=!1){return new gf({Cu:e,methodName:t,qu:r,path:vt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gc(n){const e=n._freezeSettings(),t=cf(n._databaseId);return new s6(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hT(n,e,t,r,s,a={}){const l=n.Qu(a.merge||a.mergeFields?2:0,e,t,s);_0("Data must be an object, but it was:",l,r);const h=pT(r,l);let f,m;if(a.merge)f=new Nn(l.fieldMask),m=l.fieldTransforms;else if(a.mergeFields){const v=[];for(const _ of a.mergeFields){const I=lg(e,_,t);if(!l.contains(I))throw new de(Z.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);gT(v,I)||v.push(I)}f=new Nn(v),m=l.fieldTransforms.filter(_=>f.covers(_.field))}else f=null,m=l.fieldTransforms;return new i6(new ln(h),f,m)}class yf extends jo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yf}}function dT(n,e,t){return new gf({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class m0 extends jo{_toFieldTransform(e){return new hc(e.path,new ll)}isEqual(e){return e instanceof m0}}class g0 extends jo{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=dT(this,e,!0),r=this.Ku.map(a=>zo(a,t)),s=new ko(r);return new hc(e.path,s)}isEqual(e){return e instanceof g0&&rl(this.Ku,e.Ku)}}class y0 extends jo{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=dT(this,e,!0),r=this.Ku.map(a=>zo(a,t)),s=new Po(r);return new hc(e.path,s)}isEqual(e){return e instanceof y0&&rl(this.Ku,e.Ku)}}class v0 extends jo{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new ul(e.serializer,rI(e.serializer,this.$u));return new hc(e.path,t)}isEqual(e){return e instanceof v0&&this.$u===e.$u}}function o6(n,e,t,r){const s=n.Qu(1,e,t);_0("Data must be an object, but it was:",s,r);const a=[],l=ln.empty();Mo(r,(f,m)=>{const v=w0(e,f,t);m=Xe(m);const _=s.Nu(v);if(m instanceof yf)a.push(v);else{const I=zo(m,_);I!=null&&(a.push(v),l.set(v,I))}});const h=new Nn(a);return new uT(l,h,s.fieldTransforms)}function a6(n,e,t,r,s,a){const l=n.Qu(1,e,t),h=[lg(e,r,t)],f=[s];if(a.length%2!=0)throw new de(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<a.length;I+=2)h.push(lg(e,a[I])),f.push(a[I+1]);const m=[],v=ln.empty();for(let I=h.length-1;I>=0;--I)if(!gT(m,h[I])){const R=h[I];let M=f[I];M=Xe(M);const U=l.Nu(R);if(M instanceof yf)m.push(R);else{const V=zo(M,U);V!=null&&(m.push(R),v.set(R,V))}}const _=new Nn(m);return new uT(v,_,l.fieldTransforms)}function fT(n,e,t,r=!1){return zo(t,n.Qu(r?4:3,e))}function zo(n,e){if(mT(n=Xe(n)))return _0("Unsupported field value:",e,n),pT(n,e);if(n instanceof jo)return function(r,s){if(!cT(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const a=[];let l=0;for(const h of r){let f=zo(h,s.Lu(l));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),l++}return{arrayValue:{values:a}}}(n,e)}return function(r,s){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=_t.fromDate(r);return{timestampValue:cl(s.serializer,a)}}if(r instanceof _t){const a=new _t(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cl(s.serializer,a)}}if(r instanceof f0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dl)return{bytesValue:pI(s.serializer,r._byteString)};if(r instanceof hn){const a=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw s.Bu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Qg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof p0)return function(l,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw h.Bu("VectorValues must only contain numeric values.");return qg(h.serializer,f)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${df(r)}`)}(n,e)}function pT(n,e){const t={};return UE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mo(n,(r,s)=>{const a=zo(s,e.Mu(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function mT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof f0||n instanceof dl||n instanceof hn||n instanceof jo||n instanceof p0)}function _0(n,e,t){if(!mT(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=df(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function lg(n,e,t){if((e=Xe(e))instanceof mf)return e._internalPath;if(typeof e=="string")return w0(n,e);throw Ld("Field path arguments must be of type string or ",n,!1,void 0,t)}const l6=new RegExp("[~\\*/\\[\\]]");function w0(n,e,t){if(e.search(l6)>=0)throw Ld(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new mf(...e.split("."))._internalPath}catch{throw Ld(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ld(n,e,t,r,s){const a=r&&!r.isEmpty(),l=s!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||l)&&(f+=" (found",a&&(f+=` in field ${r}`),l&&(f+=` in document ${s}`),f+=")"),new de(Z.INVALID_ARGUMENT,h+n+f)}function gT(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class E0{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new u6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class u6 extends E0{data(){return super.data()}}function vf(n,e){return typeof e=="string"?w0(n,e):e instanceof mf?e._internalPath:e._delegate._internalPath}/**
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
 */function yT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new de(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class I0{}class _f extends I0{}function Hn(n,e,...t){let r=[];e instanceof I0&&r.push(e),r=r.concat(t),function(a){const l=a.filter(f=>f instanceof T0).length,h=a.filter(f=>f instanceof wf).length;if(l>1||l>0&&h>0)throw new de(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class wf extends _f{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new wf(e,t,r)}_apply(e){const t=this._parse(e);return vT(e._query,t),new Jr(e.firestore,e.converter,Jm(e._query,t))}_parse(e){const t=gc(e.firestore);return function(a,l,h,f,m,v,_){let I;if(m.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new de(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){lw(_,v);const R=[];for(const M of _)R.push(aw(f,a,M));I={arrayValue:{values:R}}}else I=aw(f,a,_)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||lw(_,v),I=fT(h,l,_,v==="in"||v==="not-in");return Be.create(m,v,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function or(n,e,t){const r=e,s=vf("where",n);return wf._create(s,r,t)}class T0 extends I0{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new T0(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,a){let l=s;const h=a.getFlattenedFilters();for(const f of h)vT(l,f),l=Jm(l,f)}(e._query,t),new Jr(e.firestore,e.converter,Jm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class x0 extends _f{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new x0(e,t)}_apply(e){const t=function(s,a,l){if(s.startAt!==null)throw new de(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new de(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zu(a,l)}(e._query,this._field,this._direction);return new Jr(e.firestore,e.converter,function(s,a){const l=s.explicitOrderBy.concat([a]);return new Fo(s.path,s.collectionGroup,l,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function gs(n,e="asc"){const t=e,r=vf("orderBy",n);return x0._create(r,t)}class S0 extends _f{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new S0(e,t,r)}_apply(e){return new Jr(e.firestore,e.converter,Rd(e._query,this._limit,this._limitType))}}function Md(n){return X3("limit",n),S0._create("limit",n,"F")}class A0 extends _f{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new A0(e,t,r)}_apply(e){const t=h6(e,this.type,this._docOrFields,this._inclusive);return new Jr(e.firestore,e.converter,function(s,a){return new Fo(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,a,s.endAt)}(e._query,t))}}function c6(...n){return A0._create("startAfter",n,!1)}function h6(n,e,t,r){if(t[0]=Xe(t[0]),t[0]instanceof E0)return function(a,l,h,f,m){if(!f)throw new de(Z.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${h}().`);const v=[];for(const _ of Qa(a))if(_.field.isKeyField())v.push(Ao(l,f.key));else{const I=f.data.field(_.field);if(Zd(I))throw new de(Z.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+_.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(I===null){const R=_.field.canonicalString();throw new de(Z.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}v.push(I)}return new Es(v,m)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=gc(n.firestore);return function(l,h,f,m,v,_){const I=l.explicitOrderBy;if(v.length>I.length)throw new de(Z.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let M=0;M<v.length;M++){const U=v[M];if(I[M].field.isKeyField()){if(typeof U!="string")throw new de(Z.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof U}`);if(!$g(l)&&U.indexOf("/")!==-1)throw new de(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${U}' contains a slash.`);const V=l.path.child(Je.fromString(U));if(!me.isDocumentKey(V))throw new de(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${V}' is not because it contains an odd number of segments.`);const Y=new me(V);R.push(Ao(h,Y))}else{const V=fT(f,m,U);R.push(V)}}return new Es(R,_)}(n._query,n.firestore._databaseId,s,e,t,r)}}function aw(n,e,t){if(typeof(t=Xe(t))=="string"){if(t==="")throw new de(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$g(e)&&t.indexOf("/")!==-1)throw new de(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Je.fromString(t));if(!me.isDocumentKey(r))throw new de(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ao(n,new me(r))}if(t instanceof hn)return Ao(n,t._key);throw new de(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${df(t)}.`)}function lw(n,e){if(!Array.isArray(n)||n.length===0)throw new de(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vT(n,e){const t=function(s,a){for(const l of s)for(const h of l.getFlattenedFilters())if(a.indexOf(h.op)>=0)return h.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new de(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class d6{convertValue(e,t="none"){switch(So(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Mo(e,(s,a)=>{r[s]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(l=>ft(l.doubleValue));return new p0(a)}convertGeoPoint(e){return new f0(ft(e.latitude),ft(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=zg(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Yu(e));default:return null}}convertTimestamp(e){const t=Ti(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Je.fromString(e);Se(xI(r));const s=new xo(r.get(1),r.get(3)),a=new me(r.popFirst(5));return s.isEqual(t)||vn(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function _T(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Du{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wT extends E0{constructor(e,t,r,s,a,l){super(e,t,r,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ld(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(vf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ld extends wT{data(e={}){return super.data(e)}}class ET{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Du(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ld(this._firestore,this._userDataWriter,r.key,r,new Du(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map(h=>{const f=new ld(s._firestore,s._userDataWriter,h.doc.key,h.doc,new Du(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>a||h.type!==3).map(h=>{const f=new ld(s._firestore,s._userDataWriter,h.doc.key,h.doc,new Du(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,v=-1;return h.type!==0&&(m=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),v=l.indexOf(h.doc.key)),{type:f6(h.type),doc:f,oldIndex:m,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function f6(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}/**
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
 */function yo(n){n=En(n,hn);const e=En(n.firestore,Qr);return Q3(pf(e),n._key).then(t=>IT(e,n,t))}class R0 extends d6{constructor(e){super(),this.firestore=e}convertBytes(e){return new dl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,t)}}function ys(n){n=En(n,Jr);const e=En(n.firestore,Qr),t=pf(e),r=new R0(e);return yT(n._query),Y3(t,n._query).then(s=>new ET(e,r,n,s))}function uw(n,e,t){n=En(n,hn);const r=En(n.firestore,Qr),s=_T(n.converter,e);return Ef(r,[hT(gc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,cn.none())])}function Et(n,e,t,...r){n=En(n,hn);const s=En(n.firestore,Qr),a=gc(s);let l;return l=typeof(e=Xe(e))=="string"||e instanceof mf?a6(a,"updateDoc",n._key,e,t,r):o6(a,"updateDoc",n._key,e),Ef(s,[l.toMutation(n._key,cn.exists(!0))])}function ug(n){return Ef(En(n.firestore,Qr),[new sf(n._key,cn.none())])}function ls(n,e){const t=En(n.firestore,Qr),r=Ye(n),s=_T(n.converter,e);return Ef(t,[hT(gc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,cn.exists(!1))]).then(()=>r)}function Fd(n,...e){var t,r,s;n=Xe(n);let a={includeMetadataChanges:!1,source:"default"},l=0;typeof e[l]!="object"||ow(e[l])||(a=e[l],l++);const h={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(ow(e[l])){const _=e[l];e[l]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[l+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[l+2]=(s=_.complete)===null||s===void 0?void 0:s.bind(_)}let f,m,v;if(n instanceof hn)m=En(n.firestore,Qr),v=uc(n._key.path),f={next:_=>{e[l]&&e[l](IT(m,n,_))},error:e[l+1],complete:e[l+2]};else{const _=En(n,Jr);m=En(_.firestore,Qr),v=_._query;const I=new R0(m);f={next:R=>{e[l]&&e[l](new ET(m,I,_,R))},error:e[l+1],complete:e[l+2]},yT(n._query)}return function(I,R,M,U){const V=new d0(U),Y=new c0(R,V,M);return I.asyncQueue.enqueueAndForget(async()=>a0(await Od(I),Y)),()=>{V.Za(),I.asyncQueue.enqueueAndForget(async()=>l0(await Od(I),Y))}}(pf(m),v,h,f)}function Ef(n,e){return function(r,s){const a=new Gr;return r.asyncQueue.enqueueAndForget(async()=>F3(await K3(r),s,a)),a.promise}(pf(n),e)}function IT(n,e,t){const r=t.docs.get(e._key),s=new R0(n);return new wT(n,s,e._key,r,new Du(t.hasPendingWrites,t.fromCache),e.converter)}function Qe(){return new m0("serverTimestamp")}function ym(...n){return new g0("arrayUnion",n)}function vm(...n){return new y0("arrayRemove",n)}function us(n){return new v0("increment",n)}(function(e,t=!0){(function(s){_l=s})(Oo),_o(new vs("firestore",(r,{instanceIdentifier:s,options:a})=>{const l=r.getProvider("app").getImmediate(),h=new Qr(new XC(r.getProvider("auth-internal")),new nb(r.getProvider("app-check-internal")),function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new de(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(m.options.projectId,v)}(l,s),l);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),Wr(e1,"4.7.3",e),Wr(e1,"4.7.3","esm2017")})();/**
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
 */const TT="firebasestorage.googleapis.com",xT="storageBucket",p6=120*1e3,m6=600*1e3;/**
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
 */class xt extends Yr{constructor(e,t,r=0){super(_m(e),`Firebase Storage: ${t} (${_m(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _m(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tt||(Tt={}));function _m(n){return"storage/"+n}function k0(){const n="An unknown error occurred, please check the error payload for server response.";return new xt(Tt.UNKNOWN,n)}function g6(n){return new xt(Tt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function y6(n){return new xt(Tt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v6(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xt(Tt.UNAUTHENTICATED,n)}function _6(){return new xt(Tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w6(n){return new xt(Tt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function E6(){return new xt(Tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function I6(){return new xt(Tt.CANCELED,"User canceled the upload/download.")}function T6(n){return new xt(Tt.INVALID_URL,"Invalid URL '"+n+"'.")}function x6(n){return new xt(Tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function S6(){return new xt(Tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+xT+"' property when initializing the app?")}function A6(){return new xt(Tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function R6(){return new xt(Tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function k6(n){return new xt(Tt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cg(n){return new xt(Tt.INVALID_ARGUMENT,n)}function ST(){return new xt(Tt.APP_DELETED,"The Firebase app was deleted.")}function P6(n){return new xt(Tt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ju(n,e){return new xt(Tt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Iu(n){throw new xt(Tt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Gn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Gn.makeFromUrl(e,t)}catch{return new Gn(e,"")}if(r.path==="")return r;throw x6(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const l="(/(.*))?$",h=new RegExp("^gs://"+s+l,"i"),f={bucket:1,path:3};function m(re){re.path_=decodeURIComponent(re.path)}const v="v[A-Za-z0-9_]+",_=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",R=new RegExp(`^https?://${_}/${v}/b/${s}/o${I}`,"i"),M={bucket:1,path:3},U=t===TT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",Y=new RegExp(`^https?://${U}/${s}/${V}`,"i"),X=[{regex:h,indices:f,postModify:a},{regex:R,indices:M,postModify:m},{regex:Y,indices:{bucket:1,path:2},postModify:m}];for(let re=0;re<X.length;re++){const fe=X[re],J=fe.regex.exec(e);if(J){const x=J[fe.indices.bucket];let T=J[fe.indices.path];T||(T=""),r=new Gn(x,T),fe.postModify(r);break}}if(r==null)throw T6(e);return r}}class C6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function b6(n,e,t){let r=1,s=null,a=null,l=!1,h=0;function f(){return h===2}let m=!1;function v(...V){m||(m=!0,e.apply(null,V))}function _(V){s=setTimeout(()=>{s=null,n(R,f())},V)}function I(){a&&clearTimeout(a)}function R(V,...Y){if(m){I();return}if(V){I(),v.call(null,V,...Y);return}if(f()||l){I(),v.call(null,V,...Y);return}r<64&&(r*=2);let X;h===1?(h=2,X=0):X=(r+Math.random())*1e3,_(X)}let M=!1;function U(V){M||(M=!0,I(),!m&&(s!==null?(V||(h=2),clearTimeout(s),_(0)):V||(h=1)))}return _(0),a=setTimeout(()=>{l=!0,U(!0)},t),U}function D6(n){n(!1)}/**
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
 */function N6(n){return n!==void 0}function V6(n){return typeof n=="object"&&!Array.isArray(n)}function P0(n){return typeof n=="string"||n instanceof String}function cw(n){return C0()&&n instanceof Blob}function C0(){return typeof Blob<"u"}function hw(n,e,t,r){if(r<e)throw cg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw cg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function If(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function AT(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var vo;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(vo||(vo={}));/**
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
 */function O6(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
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
 */class L6{constructor(e,t,r,s,a,l,h,f,m,v,_,I=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=l,this.callback_=h,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=v,this.connectionFactory_=_,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,M)=>{this.resolve_=R,this.reject_=M,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Bh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const l=h=>{const f=h.loaded,m=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(l),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(l),this.pendingConnection_=null;const h=a.getErrorCode()===vo.NO_ERROR,f=a.getStatus();if(!h||O6(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===vo.ABORT;r(!1,new Bh(!1,null,v));return}const m=this.successCodes_.indexOf(f)!==-1;r(!0,new Bh(m,a))})},t=(r,s)=>{const a=this.resolve_,l=this.reject_,h=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(h,h.getResponse());N6(f)?a(f):a()}catch(f){l(f)}else if(h!==null){const f=k0();f.serverResponse=h.getErrorText(),this.errorCallback_?l(this.errorCallback_(h,f)):l(f)}else if(s.canceled){const f=this.appDelete_?ST():I6();l(f)}else{const f=E6();l(f)}};this.canceled_?t(!1,new Bh(!1,null,!0)):this.backoffId_=b6(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&D6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function M6(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function F6(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function U6(n,e){e&&(n["X-Firebase-GMPID"]=e)}function j6(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function z6(n,e,t,r,s,a,l=!0){const h=AT(n.urlParams),f=n.url+h,m=Object.assign({},n.headers);return U6(m,e),M6(m,t),F6(m,a),j6(m,r),new L6(f,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,l)}/**
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
 */function B6(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $6(...n){const e=B6();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(C0())return new Blob(n);throw new xt(Tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function q6(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function W6(n){if(typeof atob>"u")throw k6("base-64");return atob(n)}/**
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
 */const qr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wm{constructor(e,t){this.data=e,this.contentType=t||null}}function H6(n,e){switch(n){case qr.RAW:return new wm(RT(e));case qr.BASE64:case qr.BASE64URL:return new wm(kT(n,e));case qr.DATA_URL:return new wm(K6(e),Q6(e))}throw k0()}function RT(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,l=n.charCodeAt(++t);r=65536|(a&1023)<<10|l&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function G6(n){let e;try{e=decodeURIComponent(n)}catch{throw ju(qr.DATA_URL,"Malformed data URL.")}return RT(e)}function kT(n,e){switch(n){case qr.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw ju(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case qr.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw ju(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=W6(e)}catch(s){throw s.message.includes("polyfill")?s:ju(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class PT{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ju(qr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Y6(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function K6(n){const e=new PT(n);return e.base64?kT(qr.BASE64,e.rest):G6(e.rest)}function Q6(n){return new PT(n).contentType}function Y6(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class ss{constructor(e,t){let r=0,s="";cw(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(cw(this.data_)){const r=this.data_,s=q6(r,e,t);return s===null?null:new ss(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new ss(r,!0)}}static getBlob(...e){if(C0()){const t=e.map(r=>r instanceof ss?r.data_:r);return new ss($6.apply(null,t))}else{const t=e.map(l=>P0(l)?H6(qr.RAW,l).data:l.data_);let r=0;t.forEach(l=>{r+=l.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(l=>{for(let h=0;h<l.length;h++)s[a++]=l[h]}),new ss(s,!0)}}uploadData(){return this.data_}}/**
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
 */function CT(n){let e;try{e=JSON.parse(n)}catch{return null}return V6(e)?e:null}/**
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
 */function J6(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function X6(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function bT(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function Z6(n,e){return e}class yn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Z6}}let $h=null;function e8(n){return!P0(n)||n.length<2?n:bT(n)}function DT(){if($h)return $h;const n=[];n.push(new yn("bucket")),n.push(new yn("generation")),n.push(new yn("metageneration")),n.push(new yn("name","fullPath",!0));function e(a,l){return e8(l)}const t=new yn("name");t.xform=e,n.push(t);function r(a,l){return l!==void 0?Number(l):l}const s=new yn("size");return s.xform=r,n.push(s),n.push(new yn("timeCreated")),n.push(new yn("updated")),n.push(new yn("md5Hash",null,!0)),n.push(new yn("cacheControl",null,!0)),n.push(new yn("contentDisposition",null,!0)),n.push(new yn("contentEncoding",null,!0)),n.push(new yn("contentLanguage",null,!0)),n.push(new yn("contentType",null,!0)),n.push(new yn("metadata","customMetadata",!0)),$h=n,$h}function t8(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new Gn(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function n8(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const l=t[a];r[l.local]=l.xform(r,e[l.server])}return t8(r,n),r}function NT(n,e,t){const r=CT(e);return r===null?null:n8(n,r,t)}function r8(n,e,t,r){const s=CT(e);if(s===null||!P0(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const l=encodeURIComponent;return a.split(",").map(m=>{const v=n.bucket,_=n.fullPath,I="/b/"+l(v)+"/o/"+l(_),R=If(I,t,r),M=AT({alt:"media",token:m});return R+M})[0]}function i8(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class b0{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function VT(n){if(!n)throw k0()}function s8(n,e){function t(r,s){const a=NT(n,s,e);return VT(a!==null),a}return t}function o8(n,e){function t(r,s){const a=NT(n,s,e);return VT(a!==null),r8(a,s,n.host,n._protocol)}return t}function OT(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=_6():s=v6():t.getStatus()===402?s=y6(n.bucket):t.getStatus()===403?s=w6(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function LT(n){const e=OT(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=g6(n.path)),a.serverResponse=s.serverResponse,a}return t}function a8(n,e,t){const r=e.fullServerUrl(),s=If(r,n.host,n._protocol),a="GET",l=n.maxOperationRetryTime,h=new b0(s,a,o8(n,t),l);return h.errorHandler=LT(e),h}function l8(n,e){const t=e.fullServerUrl(),r=If(t,n.host,n._protocol),s="DELETE",a=n.maxOperationRetryTime;function l(f,m){}const h=new b0(r,s,l,a);return h.successCodes=[200,204],h.errorHandler=LT(e),h}function u8(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function c8(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=u8(null,e)),r}function h8(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function h(){let X="";for(let re=0;re<2;re++)X=X+Math.random().toString().slice(2);return X}const f=h();l["Content-Type"]="multipart/related; boundary="+f;const m=c8(e,r,s),v=i8(m,t),_="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+f+`\r
Content-Type: `+m.contentType+`\r
\r
`,I=`\r
--`+f+"--",R=ss.getBlob(_,r,I);if(R===null)throw A6();const M={name:m.fullPath},U=If(a,n.host,n._protocol),V="POST",Y=n.maxUploadRetryTime,ee=new b0(U,V,s8(n,t),Y);return ee.urlParams=M,ee.headers=l,ee.body=R.uploadData(),ee.errorHandler=OT(e),ee}class d8{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw Iu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Iu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Iu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Iu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Iu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class f8 extends d8{initXhr(){this.xhr_.responseType="text"}}function D0(){return new f8}/**
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
 */class No{constructor(e,t){this._service=e,t instanceof Gn?this._location=t:this._location=Gn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new No(e,t)}get root(){const e=new Gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bT(this._location.path)}get storage(){return this._service}get parent(){const e=J6(this._location.path);if(e===null)return null;const t=new Gn(this._location.bucket,e);return new No(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw P6(e)}}function p8(n,e,t){n._throwIfRoot("uploadBytes");const r=h8(n.storage,n._location,DT(),new ss(e,!0),t);return n.storage.makeRequestWithTokens(r,D0).then(s=>({metadata:s,ref:n}))}function m8(n){n._throwIfRoot("getDownloadURL");const e=a8(n.storage,n._location,DT());return n.storage.makeRequestWithTokens(e,D0).then(t=>{if(t===null)throw R6();return t})}function g8(n){n._throwIfRoot("deleteObject");const e=l8(n.storage,n._location);return n.storage.makeRequestWithTokens(e,D0)}function y8(n,e){const t=X6(n._location.path,e),r=new Gn(n._location.bucket,t);return new No(n.storage,r)}/**
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
 */function v8(n){return/^[A-Za-z]+:\/\//.test(n)}function _8(n,e){return new No(n,e)}function MT(n,e){if(n instanceof N0){const t=n;if(t._bucket==null)throw S6();const r=new No(t,t._bucket);return e!=null?MT(r,e):r}else return e!==void 0?y8(n,e):n}function w8(n,e){if(e&&v8(e)){if(n instanceof N0)return _8(n,e);throw cg("To use ref(service, url), the first argument must be a Storage instance.")}else return MT(n,e)}function dw(n,e){const t=e?.[xT];return t==null?null:Gn.makeFromBucketSpec(t,n)}function E8(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:A2(s,n.app.options.projectId))}class N0{constructor(e,t,r,s,a){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=TT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=p6,this._maxUploadRetryTime=m6,this._requests=new Set,s!=null?this._bucket=Gn.makeFromBucketSpec(s,this._host):this._bucket=dw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gn.makeFromBucketSpec(this._url,e):this._bucket=dw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new No(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new C6(ST());{const l=z6(e,this._appId,r,s,t,this._firebaseVersion,a);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const fw="@firebase/storage",pw="0.13.2";/**
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
 */const FT="storage";function I8(n,e,t){return n=Xe(n),p8(n,e,t)}function T8(n){return n=Xe(n),m8(n)}function x8(n){return n=Xe(n),g8(n)}function mw(n,e){return n=Xe(n),w8(n,e)}function S8(n=Sg(),e){n=Xe(n);const r=Gd(n,FT).getImmediate({identifier:e}),s=T2("storage");return s&&A8(r,...s),r}function A8(n,e,t,r={}){E8(n,e,t,r)}function R8(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new N0(t,r,s,e,Oo)}function k8(){_o(new vs(FT,R8,"PUBLIC").setMultipleInstances(!0)),Wr(fw,pw,""),Wr(fw,pw,"esm2017")}k8();const P8={apiKey:"AIzaSyD2w3owD20XBd_JAH-sUykBtSG9BCBCgAU",authDomain:"echo-5385e.firebaseapp.com",projectId:"echo-5385e",storageBucket:"echo-5385e.appspot.com",messagingSenderId:"442753723316",appId:"1:442753723316:web:07e2013a9439b0d426e0e1"},V0=b2(P8),qn=KC(V0),UT=new gi,Pe=e6(V0),gw=S8(V0);typeof window<"u"&&wP(qn,uE).then(()=>{console.log("✅ Firebase Auth 지속성 설정 완료 (LOCAL)")}).catch(n=>{console.warn("⚠️ Firebase Auth 지속성 설정 실패:",n)});typeof window<"u"&&t6(Pe,{}).catch(n=>{n.code==="failed-precondition"?console.warn("Multiple tabs open, persistence can only be enabled in one tab at a time."):n.code==="unimplemented"&&console.warn("The current browser does not support persistence.")});const Nu=Qt(Pe,"products");Qt(Pe,"users");Qt(Pe,"chats");Qt(Pe,"reviews");Qt(Pe,"reports");const yw=Qt(Pe,"musiclife_posts"),kr={ACTIVE:"active",SOLD:"sold",RESERVED:"reserved",DELETED:"deleted",SUSPENDED:"suspended"},vw={GUITAR:{id:"guitar",name:"기타",subcategories:["어쿠스틱 기타","일렉트릭 기타","베이스 기타","클래식 기타"]},PIANO:{id:"piano",name:"피아노/건반",subcategories:["피아노","전자피아노","신디사이저","오르간"]},DRUMS:{id:"drums",name:"드럼/타악기",subcategories:["어쿠스틱 드럼","전자드럼","타악기","심벌"]},WIND:{id:"wind",name:"관악기",subcategories:["색소폰","플룻","트럼펫","클라리넷","트롬본"]},STRING:{id:"string",name:"현악기",subcategories:["바이올린","비올라","첼로","우쿨렐레"]},AUDIO:{id:"audio",name:"오디오 장비",subcategories:["앰프","스피커","마이크","오디오 인터페이스","이펙터"]},OTHER:{id:"other",name:"기타",subcategories:["하모니카","아코디언","기타 악기"]}},Rr={async createProduct(n,e){try{if(!n.title||n.title.trim().length<2)throw new Error("제목을 2글자 이상 입력해주세요.");if(!n.description||n.description.trim().length<10)throw new Error("상품 설명을 10글자 이상 입력해주세요.");if(!n.price||n.price<1e3)throw new Error("가격을 1,000원 이상 입력해주세요.");if(!e)throw new Error("로그인이 필요합니다.");const t=Qe(),r={title:n.title.trim().replace(/<[^>]*>/g,""),description:n.description.trim().replace(/<[^>]*>/g,""),category:n.category,subcategory:n.subcategory||"",brand:n.brand||"",model:n.model||"",price:parseInt(n.price),originalPrice:n.originalPrice?parseInt(n.originalPrice):null,isPriceNegotiable:n.isPriceNegotiable||!1,condition:n.condition||"good",conditionDescription:n.conditionDescription||"",yearOfManufacture:n.yearOfManufacture?parseInt(n.yearOfManufacture):null,images:n.images||[],thumbnailImage:n.images?.[0]||"",region:n.region||"",district:n.district||"",fullLocation:`${n.region} ${n.district}`.trim(),isDeliveryAvailable:n.isDeliveryAvailable||!1,deliveryFee:n.deliveryFee?parseInt(n.deliveryFee):0,preferredTransactionType:n.preferredTransactionType||"direct",sellerId:e,sellerNickname:n.sellerNickname||"",status:kr.ACTIVE,viewCount:0,likeCount:0,chatCount:0,tags:n.tags||[],createdAt:t,updatedAt:t,lastBumpedAt:t,searchKeywords:[],isPromoted:!1,reportCount:0,reservedBy:null,soldTo:null,soldAt:null,isUrgent:n.isUrgent||!1,accessories:n.accessories||[],defects:n.defects||[]};console.log("📦 Firestore에 저장할 상품 데이터:",r);try{const s=await ls(Nu,r);console.log("✅ Firestore 저장 성공, 문서 ID:",s.id);const a=new Date,l={id:s.id,...r,createdAt:a,updatedAt:a,lastBumpedAt:a};return console.log("📋 반환할 결과:",l),l}catch(s){throw console.error("❌ Firestore 저장 실패:",s),s}}catch(t){throw console.error("❌ Firebase 상품 생성 실패:",t),console.error("❌ Firebase 에러 상세:",{message:t.message,code:t.code,stack:t.stack,productData:n,userId:e}),t}},generateSearchKeywords(n){const e=new Set;return n.title.toLowerCase().split(/\s+/).forEach(r=>{r.length>1&&e.add(r)}),n.brand&&e.add(n.brand.toLowerCase()),n.model&&e.add(n.model.toLowerCase()),n.category&&e.add(n.category.toLowerCase()),Array.from(e)},async getProducts(n={}){try{const{category:e=null,region:t=null,priceMin:r=null,priceMax:s=null,condition:a=null,sortBy:l="latest",pageSize:h=20,lastDoc:f=null,searchQuery:m=null}=n;let v=Hn(Nu,or("status","==",kr.ACTIVE),gs("createdAt","desc"),Md(h));f&&(v=Hn(Nu,or("status","==",kr.ACTIVE),gs("createdAt","desc"),c6(f),Md(h))),console.log("📋 Firestore 쿼리 실행 중...");const _=await ys(v);console.log("✅ Firestore 쿼리 성공, 문서 수:",_.docs.length);let I=_.docs.map(R=>({id:R.id,...R.data(),_doc:R}));if(e&&(I=I.filter(R=>R.category===e)),t&&(I=I.filter(R=>R.region===t)),a&&(I=I.filter(R=>R.condition===a)),r!==null&&(I=I.filter(R=>R.price>=r)),s!==null&&(I=I.filter(R=>R.price<=s)),m){const R=m.toLowerCase();I=I.filter(M=>M.title?.toLowerCase().includes(R)||M.description?.toLowerCase().includes(R))}switch(l){case"price_low":I.sort((R,M)=>R.price-M.price);break;case"price_high":I.sort((R,M)=>M.price-R.price);break;case"popular":I.sort((R,M)=>(M.likeCount||0)-(R.likeCount||0));break}return{products:I,hasMore:_.docs.length===h,lastDoc:_.docs[_.docs.length-1]||null}}catch(e){throw console.error("상품 조회 실패:",e),console.error("에러 상세:",e.message,e.code),new Error("상품을 불러오는데 실패했습니다.")}},async getProduct(n){try{console.log("🔍 상품 상세 조회 시작:",n);const e=Ye(Pe,"products",n),t=await yo(e);if(!t.exists())throw console.log("❌ 상품을 찾을 수 없음:",n),new Error(`상품을 찾을 수 없습니다. (ID: ${n})`);const r={id:t.id,...t.data()};return console.log("✅ 상품 상세 조회 성공:",n,r.title),r}catch(e){throw console.error("❌ 상품 상세 조회 실패:",e),e}},async incrementViewCount(n,e=null){try{console.log("🚀 조회수 증가 함수 시작:",{productId:n,userId:e||"anonymous"});const t=`viewed_${n}_${e||"anonymous"}`,r=sessionStorage.getItem(t);if(r){const h=Date.now()-parseInt(r);if(h<60*1e3){console.log("⏱️ 이미 조회한 상품입니다 (중복 방지):",n,"남은 시간:",Math.ceil((60*1e3-h)/1e3),"초");return}}const s=Ye(Pe,"products",n),a=await yo(s);if(!a.exists()){console.log("❌ 상품을 찾을 수 없습니다:",n);return}const l=a.data();if(console.log("📊 현재 조회수:",l.viewCount||0),e&&l.sellerId===e){console.log("🚫 본인 상품은 조회수가 증가하지 않습니다:",n);return}console.log("💫 Firestore 조회수 업데이트 시작..."),await Et(s,{viewCount:us(1),lastViewedAt:Qe()}),sessionStorage.setItem(t,Date.now().toString()),console.log("✅ 조회수 증가 완료:",n,"→",(l.viewCount||0)+1)}catch(t){console.error("❌ 조회수 증가 실패:",t),console.error("❌ 에러 상세:",t.message,t.code)}},async incrementChatCount(n){try{const e=Ye(Pe,"products",n);await Et(e,{chatCount:us(1),lastChatAt:Qe()}),console.log("채팅 수 증가 완료:",n)}catch(e){throw console.error("채팅 수 증가 실패:",e),e}},async toggleLike(n,e){try{const t=Qt(Pe,"users",e,"likes"),r=Hn(t,or("productId","==",n)),s=await ys(r),a=Ye(Pe,"products",n);if(s.empty)return await ls(t,{productId:n,createdAt:Qe()}),await Et(a,{likeCount:us(1)}),!0;{const l=s.docs[0];return await ug(l.ref),await Et(a,{likeCount:us(-1)}),!1}}catch(t){throw console.error("찜하기 처리 실패:",t),t}},async updateProductStatus(n,e,t={}){try{const r=Ye(Pe,"products",n),s={status:e,updatedAt:Qe(),...t};e===kr.SOLD&&(s.soldAt=Qe()),await Et(r,s)}catch(r){throw console.error("상품 상태 변경 실패:",r),r}},async updateProduct(n,e){try{const t=Ye(Pe,"products",n);await Et(t,{...e,updatedAt:Qe()})}catch(t){throw console.error("상품 수정 실패:",t),t}},async getUserProducts(n,e=kr.ACTIVE){try{const t=Hn(Nu,or("sellerId","==",n),or("status","==",e),gs("createdAt","desc"));return(await ys(t)).docs.map(s=>({id:s.id,...s.data()}))}catch(t){throw console.error("사용자 상품 조회 실패:",t),t}},async bumpProduct(n,e){try{const t=Ye(Pe,"products",n),r=await yo(t);if(!r.exists())throw new Error("상품을 찾을 수 없습니다.");const s=r.data();if(s.sellerId!==e)throw new Error("권한이 없습니다.");const a=s.lastBumpedAt?.toDate();if((new Date-a)/(1e3*60*60)<24)throw new Error("24시간에 한 번만 끌어올릴 수 있습니다.");return await Et(t,{lastBumpedAt:Qe(),updatedAt:Qe()}),!0}catch(t){throw console.error("끌어올리기 실패:",t),t}}},EN={async uploadProductImage(n,e,t=null){try{if(n.size>5*1024*1024)throw new Error("이미지 크기는 5MB 이하여야 합니다.");if(!n.type.startsWith("image/"))throw new Error("이미지 파일만 업로드 가능합니다.");const r=this.compressImage(n),s=new Promise((I,R)=>setTimeout(()=>R(new Error("이미지 업로드가 너무 오래 걸립니다.")),1e4)),a=await Promise.race([r,s]),l=Date.now(),h=`${e}_${l}_${n.name}`,f=t?`products/${t}/${h}`:`products/temp/${h}`,m=mw(gw,f),v=await I8(m,a);return{url:await T8(v.ref),path:f,size:a.size,originalName:n.name}}catch(r){throw console.error("이미지 업로드 실패:",r),r}},async compressImage(n,e=800,t=.8){return new Promise((r,s)=>{const a=document.createElement("canvas"),l=a.getContext("2d"),h=new Image;let f;h.onload=function(){const m=Math.min(e/h.width,e/h.height);if(a.width=h.width*m,a.height=h.height*m,l.drawImage(h,0,0,a.width,a.height),!a.toBlob){s(new Error("이미지 압축을 지원하지 않는 브라우저입니다."));return}f=setTimeout(()=>{s(new Error("이미지 압축이 너무 오래 걸립니다."))},1e4),a.toBlob(v=>{clearTimeout(f),v?r(v):s(new Error("이미지 압축 실패"))},n.type,t)},h.onerror=function(){s(new Error("이미지 로드 실패"))},h.src=URL.createObjectURL(n)})},async uploadMultipleImages(n,e,t=null){try{if(n.length>5)throw new Error("이미지는 최대 5개까지 업로드 가능합니다.");const r=n.map(a=>this.uploadProductImage(a,e,t));return await Promise.all(r)}catch(r){throw console.error("다중 이미지 업로드 실패:",r),r}},async deleteImage(n){try{const e=mw(gw,n);await x8(e)}catch(e){throw console.error("이미지 삭제 실패:",e),e}}},C8={subscribeToProducts(n,e={}){try{let t=Hn(Nu,or("status","==",kr.ACTIVE),gs("createdAt","desc"),Md(20));return e.category&&(t=Hn(t,or("category","==",e.category))),Fd(t,r=>{const s=r.docs.map(a=>({id:a.id,...a.data()}));n(s)})}catch(t){throw console.error("실시간 구독 실패:",t),t}},subscribeToProduct(n,e){try{const t=Ye(Pe,"products",n);return Fd(t,r=>{r.exists()?e({id:r.id,...r.data()}):e(null)})}catch(t){throw console.error("상품 실시간 구독 실패:",t),t}}},IN={async createPost(n){return await ls(yw,{...n,createdAt:Qe(),updatedAt:Qe(),viewCount:0,commentCount:0})},async getPosts(){const n=Hn(yw,gs("createdAt","desc"));return(await ys(n)).docs.map(t=>({id:t.id,...t.data()}))},async getPost(n){const e=Ye(Pe,"musiclife_posts",n),t=await yo(e);if(!t.exists())throw new Error("게시글이 존재하지 않습니다.");return await Et(e,{viewCount:us(1)}),{id:t.id,...t.data()}},async updatePost(n,e){const t=Ye(Pe,"musiclife_posts",n);await Et(t,{...e,updatedAt:Qe()})},async deletePost(n){const e=Ye(Pe,"musiclife_posts",n);await ug(e)},async addComment(n,e){const t=Qt(Pe,"musiclife_posts",n,"comments");await ls(t,{...e,createdAt:Qe()}),await Et(Ye(Pe,"musiclife_posts",n),{commentCount:us(1)})},async getComments(n){const e=Qt(Pe,"musiclife_posts",n,"comments"),t=Hn(e,gs("createdAt","asc"));return(await ys(t)).docs.map(s=>({id:s.id,...s.data()}))},async deleteComment(n,e){const t=Ye(Pe,"musiclife_posts",n,"comments",e);await ug(t),await Et(Ye(Pe,"musiclife_posts",n),{commentCount:us(-1)})}},TN={recaptchaVerifier:null,setupRecaptcha(n="recaptcha-container"){try{return this.recaptchaVerifier||(this.recaptchaVerifier=new YP(qn,n,{size:"invisible",callback:e=>{console.log("reCAPTCHA 완료:",e)},"expired-callback":()=>{console.log("reCAPTCHA 만료됨")}})),this.recaptchaVerifier}catch(e){throw console.error("reCAPTCHA 설정 실패:",e),e}},async sendVerificationCode(n){try{const e=n.startsWith("+82")?n:"+82"+n.replace(/^0/,"");console.log("전화번호 인증 요청:",e);const t=this.setupRecaptcha(),r=await ZP(qn,e,t);return console.log("인증번호 전송 성공"),r}catch(e){throw console.error("인증번호 전송 실패:",e),this.resetRecaptcha(),e}},async verifyCode(n,e){try{const t=await n.confirm(e);return console.log("전화번호 인증 성공:",t.user),t.user}catch(t){throw console.error("인증번호 확인 실패:",t),t}},async linkPhoneNumber(n,e){try{const t=po.credential(e,n),r=await fP(qn.currentUser,t);return console.log("전화번호 연결 성공:",r),r}catch(t){throw console.error("전화번호 연결 실패:",t),t}},resetRecaptcha(){this.recaptchaVerifier&&(this.recaptchaVerifier.clear(),this.recaptchaVerifier=null)},validatePhoneNumber(n){return/^01[0-9]-\d{4}-\d{4}$/.test(n)},formatPhoneNumber(n){const e=n.replace(/\D/g,"");return e.length===11&&e.startsWith("010")?e.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3"):n}},Bo=z.createContext();function b8({children:n}){const[e,t]=z.useState({nickname:"",email:"",uid:"",isLoggedIn:!1,loading:!0,emailVerified:!1,phoneNumber:"",profileImage:"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,lastLoginAt:null,createdAt:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[]}),[r,s]=z.useState(null),[a,l]=z.useState(null);z.useEffect(()=>{let x=null,T=null;return(()=>{x=IP(qn,async k=>{try{if(k){console.log("✅ Firebase 사용자 인증됨:",k.uid);let D={};try{const P=await yo(Ye(Pe,"users",k.uid));if(D=P.exists()?P.data():{},P.exists())try{await Et(Ye(Pe,"users",k.uid),{lastLoginAt:Qe()})}catch(Ve){console.warn("⚠️ 로그인 시간 업데이트 실패 (무시됨):",Ve)}else{console.log("🆕 새 사용자 프로필 생성 중...");const Ve={nickname:k.displayName||k.email?.split("@")[0]||"사용자",email:k.email||"",profileImage:k.photoURL||"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[],createdAt:Qe(),lastLoginAt:Qe()};await uw(Ye(Pe,"users",k.uid),Ve),D=Ve,console.log("✅ 새 사용자 프로필 생성 완료")}}catch(P){console.warn("⚠️ Firestore 작업 실패:",P),D={nickname:k.displayName||k.email?.split("@")[0]||"사용자",email:k.email||"",profileImage:k.photoURL||"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[],lastLoginAt:null,createdAt:null}}const L={nickname:D.nickname||k.displayName||k.email?.split("@")[0]||"사용자",email:k.email||"",uid:k.uid,isLoggedIn:!0,loading:!1,emailVerified:k.emailVerified,phoneNumber:D.phoneNumber||k.phoneNumber||"",profileImage:D.profileImage||k.photoURL||"",address:D.address||"",region:D.region||"",district:D.district||"",mannerScore:D.mannerScore||36.5,transactionCount:D.transactionCount||0,reviewCount:D.reviewCount||0,favoriteCount:D.favoriteCount||0,isVerified:D.isVerified||!1,isBusiness:D.isBusiness||!1,businessInfo:D.businessInfo||null,lastLoginAt:D.lastLoginAt,createdAt:D.createdAt,preferences:D.preferences||{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:D.blockedUsers||[],following:D.following||[],followers:D.followers||[]};t(L),l(D),s(null),console.log("✅ 사용자 상태 업데이트 완료:",{uid:L.uid,nickname:L.nickname,isLoggedIn:L.isLoggedIn}),window.location.pathname==="/login"&&(console.log("🔄 로그인 성공 - 홈으로 리다이렉트"),window.location.href="/")}else console.log("❌ 사용자 로그아웃됨"),t({nickname:"",email:"",uid:"",isLoggedIn:!1,loading:!1,emailVerified:!1,phoneNumber:"",profileImage:"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,lastLoginAt:null,createdAt:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[]}),l(null),s(null)}catch(D){console.error("❌ 인증 상태 변경 처리 실패:",D),s(D),t(L=>({...L,loading:!1,isLoggedIn:!!L.uid}))}}),T=oE(qn,async k=>{if(k)try{const D=await k.getIdToken(!0);console.log("Token refreshed successfully")}catch(D){console.error("Token refresh error:",D),s(D)}})})(),()=>{x&&x(),T&&T()}},[]);const h=async()=>{try{console.log("🚀 Google 로그인 시작..."),s(null);const T=(await _E(qn,UT)).user;return console.log("✅ Google 로그인 성공:",{uid:T.uid,email:T.email,displayName:T.displayName}),new Promise(A=>{const k=()=>{e.isLoggedIn&&e.uid===T.uid?(console.log("✅ 사용자 상태 동기화 완료"),A(T)):setTimeout(k,100)};setTimeout(k,50),setTimeout(()=>{console.log("⏰ 인증 상태 동기화 타임아웃 - 로그인 성공으로 처리"),A(T)},5e3)})}catch(x){throw console.error("❌ Google 로그인 실패:",x),s(x),x}},f=async({email:x,password:T})=>{try{return(await gP(qn,x,T)).user}catch(A){throw console.error("Email login error:",A),A}},m=async({email:x,password:T,nickname:A,phone:k,address:D,region:L,district:P})=>{try{const Ve=Hn(Qt(Pe,"users"),or("nickname","==",A));if(!(await ys(Ve)).empty)throw new Error("이미 사용 중인 닉네임입니다.");const He=await mP(qn,x,T);He.user&&await yP(He.user),await _P(He.user,{displayName:A});const Ce=Ye(Pe,"users",He.user.uid),ue={nickname:A,phoneNumber:k||"",email:x,address:D||"",region:L||"",district:P||"",profileImage:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[],createdAt:Qe(),lastLoginAt:Qe()};return await uw(Ce,ue),console.log("✅ 회원가입 완료:",ue),He.user}catch(Ve){throw console.error("❌ 회원가입 실패:",Ve),Ve}},v=async x=>{try{if(!e.uid)throw new Error("로그인이 필요합니다.");const T=Ye(Pe,"users",e.uid);await Et(T,{...x,updatedAt:Qe()}),t(A=>({...A,...x})),l(A=>({...A,...x})),console.log("✅ 프로필 업데이트 완료:",x)}catch(T){throw console.error("❌ 프로필 업데이트 실패:",T),T}},_=async(x,T,A)=>{await v({address:x,region:T,district:A})},I=async x=>{try{await pP(qn,x),console.log("✅ 비밀번호 재설정 이메일 발송 완료")}catch(T){throw console.error("❌ 비밀번호 재설정 실패:",T),T}},R=async(x,T)=>{try{const A=Ye(Pe,"users",x);await Et(A,{mannerScore:T,updatedAt:Qe()}),x===e.uid&&t(k=>({...k,mannerScore:T}))}catch(A){throw console.error("❌ 매너점수 업데이트 실패:",A),A}},M=async(x=null)=>{try{const T=x||e.uid,A=Ye(Pe,"users",T);await Et(A,{transactionCount:us(1),updatedAt:Qe()}),T===e.uid&&t(k=>({...k,transactionCount:k.transactionCount+1}))}catch(T){throw console.error("❌ 거래횟수 업데이트 실패:",T),T}},U=async(x,T=!0)=>{try{if(!e.uid)throw new Error("로그인이 필요합니다.");const A=Ye(Pe,"users",e.uid),k={blockedUsers:T?ym(x):vm(x),updatedAt:Qe()};await Et(A,k),t(D=>({...D,blockedUsers:T?[...D.blockedUsers,x]:D.blockedUsers.filter(L=>L!==x)})),console.log(T?"✅ 사용자 차단 완료":"✅ 사용자 차단해제 완료")}catch(A){throw console.error("❌ 사용자 차단 처리 실패:",A),A}},V=async(x,T=!0)=>{try{if(!e.uid)throw new Error("로그인이 필요합니다.");const A=Ye(Pe,"users",e.uid),k=Ye(Pe,"users",x);await Et(A,{following:T?ym(x):vm(x),updatedAt:Qe()}),await Et(k,{followers:T?ym(e.uid):vm(e.uid),updatedAt:Qe()}),t(D=>({...D,following:T?[...D.following,x]:D.following.filter(L=>L!==x)})),console.log(T?"✅ 팔로우 완료":"✅ 언팔로우 완료")}catch(A){throw console.error("❌ 팔로우 처리 실패:",A),A}},Y=async x=>{try{const T=await yo(Ye(Pe,"users",x));return T.exists()?{id:x,...T.data()}:null}catch(T){throw console.error("❌ 사용자 정보 조회 실패:",T),T}},ee=async x=>{try{const T=Hn(Qt(Pe,"users"),or("nickname","==",x));return(await ys(T)).empty}catch(T){throw console.error("❌ 닉네임 중복 확인 실패:",T),T}},X=async()=>{try{await TP(qn),console.log("✅ 로그아웃 완료")}catch(x){throw console.error("❌ 로그아웃 실패:",x),x}},re=["음악왕","기타소년","피아노소녀","드럼짱","베이스킹","색소폰러버","플룻마스터","신디장인","보컬리더","밴드캡틴","재즈러버","락스타","힙합보이","클래식걸","EDM매니아","트로트신","포크싱어","뮤지션A","뮤지션B","뮤지션C"],fe=Array.from({length:20}).map((x,T)=>({nickname:re[T],email:`user${T+1}@test.com`,password:`testpw${T+1}`})),J={user:e,userProfile:a,authError:r,users:fe,loginWithGoogle:h,loginWithEmail:f,signupWithEmail:m,logout:X,updateUserProfile:v,updateAddress:_,resetPassword:I,updateMannerScore:R,incrementTransactionCount:M,blockUser:U,followUser:V,getUserInfo:Y,checkNicknameAvailability:ee,setAuthError:s};return C.jsx(Bo.Provider,{value:J,children:n})}const D8=ne.header`
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
`,N8=ne.div`
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
`;ne.div`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  display: flex;
  align-items: center;
  gap: 4px;
`;ne.span`
  font-size: 18px;
  color: #888;
  margin-left: 2px;
`;const Em=ne.button`
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
`,V8=ne.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: #2ed8b6;
  border-radius: 50%;
`,O8=ne.span`
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
`,jT=ne.button`
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
`,L8=ne(jT)``;ne.button`
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
`;function M8(){const n=ml(),{user:e,logout:t}=z.useContext(Bo),[r,s]=z.useState(!1),a=z.useRef(null),[l,h]=z.useState({top:44,right:0});z.useEffect(()=>{if(r&&a.current){const v=a.current.getBoundingClientRect();h({top:v.bottom+4,right:window.innerWidth-v.right})}},[r]),z.useEffect(()=>{const v=_=>{if(r&&a.current&&!a.current.contains(_.target)){const I=document.querySelector("[data-dropdown-menu]");(!I||!I.contains(_.target))&&s(!1)}};return document.addEventListener("mousedown",v),()=>{document.removeEventListener("mousedown",v)}},[r]);const f=()=>n("/login"),m=()=>{t(),n("/")};return C.jsx(D8,{children:C.jsxs(N8,{children:[C.jsx("div",{style:{display:"flex",alignItems:"center",flex:1},children:C.jsx(O8,{style:{cursor:"pointer"},onClick:()=>n("/"),children:"ECHO"})}),C.jsxs("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:[C.jsx(Em,{ref:a,onClick:()=>s(v=>!v),"aria-label":"메뉴 열기/닫기",children:C.jsx("svg",{width:"22",height:"22",fill:"none",stroke:"#222",strokeWidth:"2",viewBox:"0 0 24 24",children:C.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})})}),r&&C.jsxs("div",{"data-dropdown-menu":!0,style:{position:"fixed",top:l.top,right:l.right,background:"#fff",border:"1.5px solid #eee",borderRadius:10,boxShadow:"0 8px 32px rgba(0,0,0,0.15)",zIndex:9999,minWidth:140,padding:"8px 0",display:"flex",flexDirection:"column"},onClick:v=>v.stopPropagation(),children:[C.jsx("button",{style:{padding:"10px 18px",background:"none",border:"none",color:"#1a4740",fontWeight:600,fontSize:16,textAlign:"left",cursor:"pointer"},onClick:()=>{s(!1),n("/tuner/guitar")},children:"🎸 기타 튜너"}),C.jsx("button",{style:{padding:"10px 18px",background:"none",border:"none",color:"#1a4740",fontWeight:600,fontSize:16,textAlign:"left",cursor:"pointer"},onClick:()=>{s(!1),n("/tuner/bass")},children:"🎸 베이스 튜너"})]}),C.jsx(Em,{children:C.jsx(xu,{size:20})}),C.jsxs(Em,{style:{position:"relative"},children:[C.jsx(gA,{size:20}),C.jsx(V8,{})]}),e.isLoggedIn?C.jsx(L8,{onClick:m,children:"로그아웃"}):C.jsx(jT,{onClick:f,children:"로그인"})]})]})})}const F8=[{title:"야마하 FG800 통기타",description:"2021년 구매한 야마하 FG800 통기타입니다. 집에서만 연습용으로 사용했습니다. 생활기스 약간 있지만 소리는 깨끗합니다. 오리지널 소프트케이스 포함해서 드립니다. 서울 마포구에서 직거래만 원해요.",price:23e4,category:"guitar",condition:"good",region:"서울",district:"마포구",images:["https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=500&q=80","https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["야마하","통기타","FG800","어쿠스틱"],brand:"야마하",model:"FG800",isPriceNegotiable:!0,sellerNickname:"기타러버"},{title:"롤랜드 TD-1KV 전자드럼 세트",description:"2020년에 구매한 롤랜드 TD-1KV 전자드럼입니다. 집에서 연습용으로만 사용해서 상태 좋습니다. 모든 패드 정상 작동하고, 킥 페달도 부드럽게 잘 됩니다. 드럼 스틱, 헤드폰 포함해서 드려요. 부평역 근처에서 직거래만 가능합니다.",price:42e4,category:"drums",condition:"like-new",region:"인천",district:"부평구",images:["https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=500&q=80"],tags:["롤랜드","전자드럼","TD-1KV","드럼세트"],brand:"롤랜드",model:"TD-1KV",isPriceNegotiable:!1,sellerNickname:"드러머"},{title:"펜더 Player 텔레캐스터 일렉기타",description:"2019년 구매한 펜더 Player 시리즈 텔레캐스터입니다. 바디에 미세한 스크래치가 있지만 연주에는 전혀 문제 없습니다. 픽업 교체한 적 없고, 넥 상태도 매우 좋습니다. 오리지널 소프트케이스 포함. 부산 서면에서 직거래 희망합니다.",price:75e4,category:"guitar",condition:"good",region:"부산",district:"부산진구",images:["https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=500&q=80"],tags:["펜더","텔레캐스터","일렉기타","Player"],brand:"펜더",model:"Player Telecaster",isPriceNegotiable:!0,sellerNickname:"록커"},{title:"카시오 CT-X700 전자키보드",description:"거의 사용하지 않은 카시오 CT-X700 전자키보드입니다. 61건반, 600가지 음색, 195가지 리듬 지원됩니다. 어댑터, 보면대 포함하고 박스도 있어요. 대구 동구에서 직거래만 가능합니다.",price:18e4,category:"keyboard",condition:"like-new",region:"대구",district:"동구",images:["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80"],tags:["카시오","키보드","CT-X700","전자피아노"],brand:"카시오",model:"CT-X700",isPriceNegotiable:!0,sellerNickname:"피아니스트"},{title:"알토 색소폰 야나기사와 A-WO1",description:"야나기사와 A-WO1 알토 색소폰입니다. 2018년 구매, 동호회에서 가끔 사용했습니다. 정기적으로 수리점에서 점검받았고 상태 매우 양호합니다. 하드케이스, 마우스피스, 리드, 스트랩 모두 포함. 광주 서구 직거래.",price:12e5,category:"wind",condition:"good",region:"광주",district:"서구",images:["https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=500&q=80"],tags:["야나기사와","색소폰","알토색소폰","A-WO1"],brand:"야나기사와",model:"A-WO1",isPriceNegotiable:!0,sellerNickname:"재즈러버"},{title:"마샬 DSL40CR 기타 앰프",description:"마샬 DSL40CR 40W 진공관 앰프입니다. 2020년 구매, 집에서 연습용으로 사용했습니다. 클린톤과 드라이브톤 모두 훌륭하고 리버브도 좋습니다. 풋스위치 포함. 서울 강남구에서 직거래만 가능해요.",price:52e4,category:"audio",condition:"good",region:"서울",district:"강남구",images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["마샬","앰프","DSL40CR","진공관앰프"],brand:"마샬",model:"DSL40CR",isPriceNegotiable:!1,sellerNickname:"앰프매니아"},{title:"바이올린 4/4 독일제 수제품",description:"독일에서 직접 가져온 4/4 바이올린입니다. 수제품으로 소리가 정말 좋습니다. 활, 케이스, 턱받침 모두 포함되어 있고 상태 매우 좋아요. 서울 종로구에서 직거래 희망합니다.",price:68e4,category:"string",condition:"like-new",region:"서울",district:"종로구",images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["바이올린","독일제","수제품","4/4"],brand:"독일 수제품",model:"4/4 바이올린",isPriceNegotiable:!0,sellerNickname:"바이올리니스트"},{title:"우쿨렐레 카마카 HF-1 하와이안 코아",description:"정품 카마카 HF-1 콘서트 우쿨렐레입니다. 하와이안 코아 원목으로 만들어진 프리미엄 모델입니다. 2019년 구매, 케이스 포함해서 드려요. 톤이 정말 좋고 상태도 완벽합니다. 대전 유성구 직거래만.",price:32e4,category:"string",condition:"like-new",region:"대전",district:"유성구",images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["카마카","우쿨렐레","HF-1","하와이안코아"],brand:"카마카",model:"HF-1",isPriceNegotiable:!1,sellerNickname:"우쿨러버"}],_w=["기타러버","드러머","록커","피아니스트","재즈러버","앰프매니아","바이올리니스트","우쿨러버","음악매니아","연주자","뮤지션","하모니","멜로디","리듬","비트","코드","소울","블루스","클래식러버"],U8=()=>F8.map((n,e)=>({id:`dummy_${e}`,...n,viewCount:Math.floor(Math.random()*100)+1,likeCount:Math.floor(Math.random()*20)+1,chatCount:Math.floor(Math.random()*10)+1,status:"active",createdAt:new Date(Date.now()-Math.random()*1e3*60*60*24*7),sellerId:`dummy_seller_${e}`,sellerNickname:_w[e%_w.length],isDeliveryAvailable:Math.random()>.5,deliveryFee:Math.random()>.5?Math.floor(Math.random()*1e4)+3e3:0})),zT=z.createContext();function j8({children:n}){const[e,t]=z.useState([]),[r,s]=z.useState(!0),[a,l]=z.useState(null),[h,f]=z.useState(!0),[m,v]=z.useState(null),[_,I]=z.useState({category:"",region:"",priceMin:"",priceMax:"",condition:"",sortBy:"latest",searchQuery:""}),[R,M]=z.useState([]),[U,V]=z.useState([]),{user:Y}=z.useContext(Bo),ee=z.useCallback(async(te=!1)=>{try{s(!0),l(null);const K={..._,pageSize:20,lastDoc:te?null:m};console.log("🔍 상품 로드 중...",K);const N=await Rr.getProducts(K);let j=N.products;N.products.length===0&&te&&(console.log("📦 Firebase에 상품이 없어서 더미 데이터 로드"),j=U8()),te?(console.log("🔄 상품 목록 리셋, 새 상품:",j.length,"개"),t(j)):(console.log("➕ 상품 추가 로드:",j.length,"개"),t(se=>[...se,...j])),f(N.hasMore||j.length>0),v(N.lastDoc),console.log("✅ 상품 로드 완료:",j.length,"개")}catch(K){console.error("❌ 상품 로드 실패:",K),l(K.message||"상품을 불러오는데 실패했습니다.")}finally{s(!1)}},[_,m]);z.useEffect(()=>{console.log("🚀 앱 시작 - 초기 상품 로드"),v(null),ee(!0)},[]),z.useEffect(()=>{console.log("🔧 필터 변경 - 상품 다시 로드"),v(null),ee(!0)},[_.category,_.region,_.priceMin,_.priceMax,_.condition,_.sortBy]),z.useEffect(()=>{_.searchQuery.trim()&&(console.log("🔍 검색어 변경 - 상품 다시 로드:",_.searchQuery),v(null),ee(!0))},[_.searchQuery]);const X=z.useCallback(()=>{!r&&h&&ee(!1)},[r,h,ee]);z.useEffect(()=>{console.log("👂 실시간 상품 구독 시작...");const te=C8.subscribeToProducts(K=>{console.log("🔄 실시간 업데이트:",K.length,"개"),t(N=>{console.log("📋 현재 상품 수:",N.length);let j=[...K].sort((se,$)=>{const he=se.createdAt?.toDate?.()||new Date(se.createdAt)||new Date;return($.createdAt?.toDate?.()||new Date($.createdAt)||new Date)-he});if(_.category&&(j=j.filter(se=>se.category===_.category)),_.region&&(j=j.filter(se=>se.region===_.region)),_.condition&&(j=j.filter(se=>se.condition===_.condition)),_.priceMin&&(j=j.filter(se=>se.price>=parseInt(_.priceMin))),_.priceMax&&(j=j.filter(se=>se.price<=parseInt(_.priceMax))),_.searchQuery&&_.searchQuery.trim()){const se=_.searchQuery.toLowerCase();j=j.filter($=>$.title?.toLowerCase().includes(se)||$.description?.toLowerCase().includes(se))}switch(j=j.filter(se=>se.status!==kr.DELETED&&se.status!==kr.SUSPENDED),_.sortBy){case"price_low":j.sort((se,$)=>se.price-$.price);break;case"price_high":j.sort((se,$)=>$.price-se.price);break;case"popular":j.sort((se,$)=>($.likeCount||0)-(se.likeCount||0));break}return console.log("✅ 필터링된 상품 수:",j.length),console.log("🔍 적용된 필터:",_),j})},{category:_.category});return()=>{console.log("👋 실시간 구독 해제"),te()}},[_]);const re=z.useCallback(async(te=null)=>{try{const K=te||Y?.uid;if(!K)return;console.log("👤 사용자 상품 로드 중...",K);const N=await Rr.getUserProducts(K);M(N),console.log("✅ 사용자 상품 로드 완료:",N.length,"개")}catch(K){console.error("❌ 사용자 상품 로드 실패:",K),l(K.message)}},[Y]),fe=z.useCallback(async te=>{try{if(!Y?.uid||!Y?.isLoggedIn)throw new Error("로그인이 필요합니다.");console.log("📝 상품 등록 중...",te),console.log("👤 사용자 정보:",Y);const K={...te,sellerNickname:Y.nickname||Y.displayName||Y.email?.split("@")[0]||"익명",region:te.region||"",district:te.district||""};console.log("📋 최종 상품 데이터:",K);const N=await Rr.createProduct(K,Y.uid);return console.log("✅ 상품 등록 완료:",N.id),t(j=>{console.log("📝 새 상품을 목록 맨 앞에 추가:",N.title);const $=[{...N,createdAt:new Date,updatedAt:new Date},...j].sort((he,we)=>{const De=he.createdAt?.toDate?.()||new Date(he.createdAt)||new Date;return(we.createdAt?.toDate?.()||new Date(we.createdAt)||new Date)-De});return console.log("📅 새 상품이 첫 번째인지 확인:",$[0]?.title===N.title),$}),R.length>0&&M(j=>[N,...j]),N}catch(K){throw console.error("❌ ProductContext 상품 등록 실패:",K),console.error("❌ 에러 상세:",{message:K.message,code:K.code,stack:K.stack}),K}},[Y,R.length]),J=z.useCallback(async(te,K)=>{try{if(!Y)throw new Error("로그인이 필요합니다.");console.log("✏️ 상품 수정 중...",te),await Rr.updateProduct(te,K);const N=j=>j.map(se=>se.id===te?{...se,...K,updatedAt:new Date}:se);t(N),M(N),console.log("✅ 상품 수정 완료")}catch(N){throw console.error("❌ 상품 수정 실패:",N),N}},[Y]),x=z.useCallback(async te=>{try{if(!Y)throw new Error("로그인이 필요합니다.");console.log("🗑️ 상품 삭제 중...",te),await Rr.updateProductStatus(te,kr.DELETED),t(K=>K.filter(N=>N.id!==te)),M(K=>K.filter(N=>N.id!==te)),console.log("✅ 상품 삭제 완료")}catch(K){throw console.error("❌ 상품 삭제 실패:",K),K}},[Y]),T=z.useCallback(async(te,K,N={})=>{try{console.log("🔄 상품 상태 변경 중...",te,K),await Rr.updateProductStatus(te,K,N);const j=se=>se.map($=>$.id===te?{...$,status:K,...N,updatedAt:new Date}:$);t(j),M(j),console.log("✅ 상품 상태 변경 완료")}catch(j){throw console.error("❌ 상품 상태 변경 실패:",j),j}},[]),A=z.useCallback(async te=>{try{await Rr.incrementViewCount(te,Y?.uid),t(K=>K.map(N=>N.id===te?Y?.uid&&N.sellerId===Y.uid?N:{...N,viewCount:(N.viewCount||0)+1}:N)),console.log("✅ 조회수 증가 완료:",te)}catch(K){console.error("❌ 조회수 증가 실패:",K)}},[Y]),k=z.useCallback(async te=>{try{if(!Y)throw new Error("로그인이 필요합니다.");console.log("❤️ 찜하기 토글 중...",te);const K=await Rr.toggleLike(te,Y.uid);if(t(N=>N.map(j=>j.id===te?{...j,likeCount:j.likeCount+(K?1:-1),isLikedByUser:K}:j)),K){const N=e.find(j=>j.id===te);N&&V(j=>[{...N,isLikedByUser:!0},...j])}else V(N=>N.filter(j=>j.id!==te));return console.log("✅ 찜하기 토글 완료:",K?"추가":"제거"),K}catch(K){throw console.error("❌ 찜하기 실패:",K),K}},[Y,e]),D=z.useCallback(async te=>{try{if(!Y)throw new Error("로그인이 필요합니다.");console.log("⬆️ 상품 끌어올리기 중...",te),await Rr.bumpProduct(te,Y.uid),t(K=>{const N=K.findIndex(j=>j.id===te);if(N>0){const j=K[N],se=[...K];return se.splice(N,1),se.unshift({...j,lastBumpedAt:new Date}),se}return K}),console.log("✅ 상품 끌어올리기 완료")}catch(K){throw console.error("❌ 끌어올리기 실패:",K),K}},[Y]),L=z.useCallback(te=>{I(K=>({...K,...te})),v(null)},[]),P=z.useCallback(te=>{L({searchQuery:te})},[L]),Ve=z.useCallback(()=>{const te={};return Object.values(vw).forEach(K=>{te[K.id]=e.filter(N=>N.category===K.id&&N.status===kr.ACTIVE).length}),te},[e]),ot=z.useCallback(async te=>{try{await Rr.incrementChatCount(te),t(K=>K.map(N=>N.id===te?{...N,chatCount:(N.chatCount||0)+1}:N))}catch(K){console.error("❌ 채팅 수 증가 실패:",K)}},[]),He=z.useCallback(()=>{l(null)},[]),Ce=z.useCallback(()=>{v(null),ee(!0)},[ee]),ue={products:e,userProducts:R,likedProducts:U,loading:r,error:a,hasMore:h,filters:_,addProduct:fe,updateProduct:J,deleteProduct:x,loadMoreProducts:X,refreshProducts:Ce,incrementViews:A,incrementChatCount:ot,toggleLike:k,bumpProduct:D,changeProductStatus:T,updateFilters:L,searchProducts:P,loadUserProducts:re,getCategoryStats:Ve,clearError:He,PRODUCT_STATUS:kr,INSTRUMENT_CATEGORIES:vw};return C.jsx(zT.Provider,{value:ue,children:n})}const z8=ne.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`,B8=ne.div`
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
`,$8=ne.div`
  position: relative;
  margin-bottom: 12px;
`,q8=ne.div`
  display: flex;
  align-items: center;
  background: var(--color-bg-glass);
  border: 1px solid ${n=>n.focused?"var(--color-mint-main)":"var(--color-border-light)"};
  border-radius: var(--radius-3xl);
  padding: var(--space-4) var(--space-6);
  transition: all var(--transition-normal);
  box-shadow: ${n=>n.focused?"var(--shadow-lg), var(--glow-mint)":"var(--shadow-md)"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transform: ${n=>n.focused?"translateY(-1px)":"translateY(0)"};
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
    opacity: ${n=>n.focused?.7:0};
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
`,W8=ne.input`
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
`,H8=ne.div`
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
`,G8=ne.div`
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
`,K8=ne.div`
  margin-bottom: 16px;
`,Q8=ne.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Y8=ne.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,J8=ne.div`
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
`,X8=ne.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,no=ne.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: 1px solid ${n=>n.active?"var(--color-mint-main)":"#e0e0e0"};
  border-radius: 16px;
  background: ${n=>n.active?"var(--color-mint-main)":"white"};
  color: ${n=>n.active?"white":"#666"};
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  min-width: fit-content;

  &:hover {
    border-color: var(--color-mint-main);
    color: ${n=>n.active?"white":"var(--color-mint-main)"};
  }
`,Z8=ne.div`
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
`,e9=ne.div`
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
`,t9=ne.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: white;
`,n9=ne.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`,r9=ne.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 4px;
`,i9=ne.div`
  padding: 20px;
`,ww=ne.div`
  margin-bottom: 24px;
`,Ew=ne.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`,s9=ne.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,o9=ne.button`
  padding: 8px 16px;
  border: 1px solid ${n=>n.selected?"var(--color-mint-main)":"#e0e0e0"};
  border-radius: 20px;
  background: ${n=>n.selected?"#fff5f2":"white"};
  color: ${n=>n.selected?"var(--color-mint-main)":"#666"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: var(--color-mint-main);
  }
`,a9=ne.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`,Iw=ne.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: var(--color-mint-main);
  }
`;ne.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
`;ne.div`
  font-size: 14px;
  color: #666;
`;ne.button`
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
`;ne.div`
  width: 100%;
  max-width: 500px;
  background: white;
  position: relative;
`;const l9=ne.div`
  width: 100%;
  max-width: 500px;
  padding: 0 20px 120px;
`;ne.section`
  margin-bottom: 32px;
`;ne.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;ne.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;ne.p`
  font-size: 14px;
  color: #6b7280;
  margin: 4px 0 0 0;
`;ne.button`
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
`;ne.div`
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
`;ne.div`
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
`;ne.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  background: #f5f5f5;
`;ne.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;ne.div`
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
`;const u9=ne.div`
  margin-top: 24px;
`,Si=ne.div`
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
`,c9=ne.div`
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
  
  ${Si}:hover & {
    transform: scale(1.05);
    box-shadow: 
      inset 0 2px 12px rgba(0, 217, 182, 0.12),
      0 8px 24px rgba(0, 0, 0, 0.08);
      
    &::before {
      opacity: 1;
    }
  }
`,h9=ne.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all var(--transition-slow) var(--ease-out-cubic);
  filter: contrast(1.02) saturate(1.05);
  
  ${Si}:hover & {
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
`,d9=ne.div`
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
  
  ${Si}:hover & {
    color: var(--color-mint-dark);
    opacity: 0.8;
    transform: scale(1.1);
  }
`,f9=ne.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,p9=ne.h3`
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
  
  ${Si}:hover & {
    color: var(--color-text-primary);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
`,m9=ne.div`
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
  
  ${Si}:hover & {
    color: var(--color-text-secondary);
    
    svg {
      color: var(--color-mint-dark);
    }
  }
`,g9=ne.div`
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
  
  ${Si}:hover & {
    background: linear-gradient(135deg, 
      var(--color-mint-main) 0%, 
      var(--color-orange) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateY(-1px);
  }
`,y9=ne.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,v9=ne.div`
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
  
  ${Si}:hover & {
    color: var(--color-text-secondary);
    
    svg {
      color: var(--color-mint-main);
      transform: scale(1.1);
    }
  }
`,_9=ne.button`
  background: ${n=>n.liked?"linear-gradient(135deg, var(--color-mint-main), var(--color-mint-light))":"rgba(255, 255, 255, 0.6)"};
  border: 1px solid ${n=>n.liked?"transparent":"var(--color-border-light)"};
  color: ${n=>n.liked?"white":"var(--color-text-tertiary)"};
  font-size: 16px;
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal) var(--ease-spring);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: ${n=>n.liked?"0 4px 12px rgba(0, 217, 182, 0.25)":"0 2px 6px rgba(0, 0, 0, 0.08)"};
  
  &:hover {
    color: ${n=>n.liked?"white":"var(--color-mint-main)"};
    background: ${n=>n.liked?"linear-gradient(135deg, var(--color-mint-dark), var(--color-mint-main))":"rgba(255, 255, 255, 0.9)"};
    border-color: var(--color-mint-light);
    transform: translateY(-2px) scale(1.1);
    box-shadow: ${n=>n.liked?"0 8px 20px rgba(0, 217, 182, 0.35)":"0 4px 12px rgba(0, 217, 182, 0.15)"};
  }
  
  &:active {
    transform: translateY(0) scale(1.05);
    transition: all var(--transition-micro);
  }
`,w9=ne.div`
  background: ${n=>{switch(n.type){case"urgent":return"linear-gradient(135deg, #ff4757, #ff3742)";case"new":return"linear-gradient(135deg, var(--color-mint-main), var(--color-mint-light))";case"hot":return"linear-gradient(135deg, var(--color-orange), #ff6b35)";default:return"linear-gradient(135deg, var(--color-mint-light), var(--color-mint-main))"}}};
  color: white;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-xl);
  font-size: var(--text-xs);
  font-weight: 700;
  margin-right: var(--space-1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px ${n=>{switch(n.type){case"urgent":return"rgba(255, 71, 87, 0.3)";case"new":return"rgba(0, 217, 182, 0.3)";case"hot":return"rgba(255, 126, 54, 0.3)";default:return"rgba(0, 217, 182, 0.3)"}}};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: all var(--transition-fast);
  
  ${Si}:hover & {
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 4px 12px ${n=>{switch(n.type){case"urgent":return"rgba(255, 71, 87, 0.4)";case"new":return"rgba(0, 217, 182, 0.4)";case"hot":return"rgba(255, 126, 54, 0.4)";default:return"rgba(0, 217, 182, 0.4)"}}};
  }
`,E9=ne.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl);
  gap: var(--space-lg);
`,I9=ne.div`
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
`,T9=ne.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
`,x9=ne.div`
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
`,S9=ne.button`
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
`,A9=ne.div`
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
`,R9=ne.button`
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
`,k9=ne.button`
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
`;function P9(){const n=ml(),{products:e,loading:t,error:r,hasMore:s,filters:a,updateFilters:l,searchProducts:h,loadMoreProducts:f,toggleLike:m,INSTRUMENT_CATEGORIES:v}=z.useContext(zT),{user:_}=z.useContext(Bo),[I,R]=z.useState(!1),[M,U]=z.useState(""),[V,Y]=z.useState([]),[ee,X]=z.useState([]),[re,fe]=z.useState(!1),[J,x]=z.useState(a),[T,A]=z.useState("latest"),k=z.useRef(null),D=z.useRef(null);z.useEffect(()=>{const $=localStorage.getItem("recentSearches");$&&X(JSON.parse($))},[]),z.useEffect(()=>{if(M.length>0){const $=[];Object.values(v).forEach(he=>{he.name.toLowerCase().includes(M.toLowerCase())&&$.push({type:"category",text:he.name,value:he.id})}),e.forEach(he=>{he.title.toLowerCase().includes(M.toLowerCase())&&$.length<5&&$.push({type:"product",text:he.title,value:he.title})}),Y($)}else Y([])},[M,e,v]),z.useEffect(()=>{if(D.current){const $=new IntersectionObserver(he=>{he[0].isIntersecting&&s&&!t&&f()},{threshold:.1});return $.observe(D.current),()=>$.disconnect()}},[s,t,f]);const L=z.useCallback($=>{if($.trim()){const he=[$,...ee.filter(we=>we!==$)].slice(0,10);X(he),localStorage.setItem("recentSearches",JSON.stringify(he)),h($),U($),R(!1)}},[ee,h]),P=$=>{$.type==="category"?(l({category:$.value,searchQuery:""}),U("")):L($.text),R(!1)},Ve=()=>{l(J),fe(!1)},ot=()=>{const $={category:"",region:"",priceMin:"",priceMax:"",condition:"",sortBy:"latest",searchQuery:""};x($),l($),fe(!1)},He=()=>{X([]),localStorage.removeItem("recentSearches")},Ce=()=>e.filter($=>$.status==="active").map($=>({...$,popularityScore:($.viewCount||0)*1+($.likeCount||0)*3+($.chatCount||0)*2})).sort(($,he)=>he.popularityScore-$.popularityScore).slice(0,10),ue=()=>e.filter($=>$.status==="active").sort(($,he)=>{const we=$.createdAt?.toDate?$.createdAt.toDate():new Date($.createdAt);return(he.createdAt?.toDate?he.createdAt.toDate():new Date(he.createdAt))-we}).slice(0,8),te=()=>{if(!_.isLoggedIn)return Ce().slice(0,6);const $=e.filter(we=>we.isLikedByUser),he=[...new Set($.map(we=>we.category))];return he.length===0?Ce().slice(0,6):e.filter(we=>we.status==="active"&&!we.isLikedByUser&&we.sellerId!==_.uid&&he.includes(we.category)).sort((we,De)=>(De.viewCount||0)-(we.viewCount||0)).slice(0,6)};Ce(),ue(),te();const K=$=>$>=1e4?`${Math.floor($/1e4)}만원`:`${$.toLocaleString()}원`,N=$=>{if(!$)return"";const he=new Date,we=$.toDate?$.toDate():new Date($),De=he-we,Le=Math.floor(De/6e4),je=Math.floor(De/36e5),at=Math.floor(De/864e5);return Le<1?"방금 전":Le<60?`${Le}분 전`:je<24?`${je}시간 전`:at<7?`${at}일 전`:we.toLocaleDateString()},j=$=>$.viewCount>100?{type:"hot",text:"인기"}:$.priceNegotiable?{type:"urgent",text:"급처"}:null,se=Object.values(a).filter($=>$&&$!=="").length;return C.jsxs(z8,{className:"main-content",children:[C.jsx(M8,{}),C.jsxs(B8,{children:[C.jsxs($8,{children:[C.jsxs(q8,{focused:I,children:[C.jsx(xu,{color:"#999"}),C.jsx(W8,{ref:k,placeholder:"어떤 악기를 찾고 계신가요?",value:M,onChange:$=>U($.target.value),onFocus:()=>R(!0),onKeyPress:$=>{$.key==="Enter"&&L(M)}}),M&&C.jsx(Qh,{color:"#999",style:{cursor:"pointer"},onClick:()=>{U(""),R(!1),a.searchQuery&&l({searchQuery:""})}})]}),I&&C.jsx(H8,{children:V.length>0?V.map(($,he)=>C.jsxs(G8,{onClick:()=>P($),children:[$.type==="category"?C.jsx(_A,{}):C.jsx(xu,{}),$.text]},he)):ee.length>0&&C.jsxs(K8,{children:[C.jsxs(Q8,{children:["최근 검색어",C.jsx("button",{onClick:He,style:{background:"none",border:"none",color:"#999",fontSize:"12px",cursor:"pointer"},children:"전체삭제"})]}),C.jsx(Y8,{children:ee.slice(0,5).map(($,he)=>C.jsxs(J8,{onClick:()=>L($),children:[C.jsx(vA,{}),$]},he))})]})})]}),C.jsxs(X8,{children:[C.jsxs(no,{active:se>0,onClick:()=>fe(!0),children:[C.jsx(TA,{}),"필터 ",se>0&&`(${se})`]}),C.jsx(no,{active:a.category==="guitar",onClick:()=>l({category:a.category==="guitar"?"":"guitar"}),children:"기타"}),C.jsx(no,{active:a.category==="piano",onClick:()=>l({category:a.category==="piano"?"":"piano"}),children:"피아노"}),C.jsx(no,{active:a.category==="drums",onClick:()=>l({category:a.category==="drums"?"":"drums"}),children:"드럼"}),C.jsx(no,{active:a.category==="wind",onClick:()=>l({category:a.category==="wind"?"":"wind"}),children:"관악기"}),C.jsx(no,{active:a.category==="audio",onClick:()=>l({category:a.category==="audio"?"":"audio"}),children:"오디오"}),C.jsxs(no,{onClick:()=>{const $=T==="latest"?"price":"latest";A($),l({sortBy:$})},children:[C.jsx(CA,{}),T==="latest"?"최신순":"가격순"]})]})]}),C.jsxs(l9,{children:[C.jsxs(u9,{children:[r?C.jsxs(A9,{children:[C.jsx(Qh,{size:48,color:"#2ed8b6"}),C.jsx("h3",{children:"문제가 발생했습니다"}),C.jsx("p",{children:r}),C.jsx(R9,{onClick:()=>window.location.reload(),children:"다시 시도"})]}):t&&e.length===0?C.jsxs(E9,{children:[C.jsx(I9,{}),C.jsx(T9,{children:"상품을 불러오는 중..."})]}):e.length===0?C.jsxs(x9,{children:[C.jsx(xu,{size:48,color:"#ddd"}),C.jsx("h3",{children:"등록된 상품이 없습니다"}),C.jsx("p",{children:"첫 번째 상품을 등록해보세요!"}),C.jsxs(k9,{onClick:()=>n("/add"),children:[C.jsx(E_,{}),"상품 등록하기"]})]}):e.map($=>{const he=j($);return C.jsxs(Si,{className:"ProductCard",onClick:()=>n(`/product/${$.id}`),children:[C.jsx(c9,{children:$.images&&$.images.length>0?C.jsx(h9,{src:$.images[0],alt:$.title,loading:"lazy"}):C.jsx(d9,{children:C.jsx(xu,{})})}),C.jsxs(f9,{children:[C.jsxs("div",{children:[C.jsxs(m9,{children:[he&&C.jsx(w9,{type:he.type,children:he.text}),C.jsx(AA,{}),$.region," ",$.district,C.jsx("span",{children:"•"}),N($.createdAt)]}),C.jsx(p9,{children:$.title}),C.jsx(g9,{children:K($.price)})]}),C.jsxs(y9,{children:[C.jsxs(v9,{children:[C.jsx(IA,{})," ",$.viewCount||0,C.jsx(wA,{})," ",$.chatCount||0]}),C.jsx(_9,{liked:$.isLikedByUser,onClick:we=>{we.stopPropagation(),_?.isLoggedIn?m($.id):n("/login")},children:$.isLikedByUser?C.jsx(xA,{}):C.jsx(DA,{})})]})]})]},$.id)}),s&&C.jsx("div",{ref:D,style:{height:"1px"}})]}),C.jsx(S9,{onClick:()=>n("/add"),"aria-label":"상품 등록하기",title:"상품 등록하기",children:C.jsx(E_,{})})]}),re&&C.jsx(Z8,{onClick:()=>fe(!1),children:C.jsxs(e9,{onClick:$=>$.stopPropagation(),children:[C.jsxs(t9,{children:[C.jsx(n9,{children:"필터"}),C.jsx(r9,{onClick:()=>fe(!1),children:C.jsx(Qh,{})})]}),C.jsxs(i9,{children:[C.jsxs(ww,{children:[C.jsx(Ew,{children:"가격대"}),C.jsxs(a9,{children:[C.jsx(Iw,{type:"number",placeholder:"최소 금액",value:J.priceMin,onChange:$=>x(he=>({...he,priceMin:$.target.value}))}),C.jsx("span",{children:"~"}),C.jsx(Iw,{type:"number",placeholder:"최대 금액",value:J.priceMax,onChange:$=>x(he=>({...he,priceMax:$.target.value}))})]})]}),C.jsxs(ww,{children:[C.jsx(Ew,{children:"상품 상태"}),C.jsx(s9,{children:["excellent","good","fair","poor"].map($=>C.jsxs(o9,{selected:J.condition===$,onClick:()=>x(he=>({...he,condition:he.condition===$?"":$})),children:[$==="excellent"&&"매우 좋음",$==="good"&&"좋음",$==="fair"&&"보통",$==="poor"&&"나쁨"]},$))})]}),C.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"24px",paddingTop:"20px",borderTop:"1px solid #f0f0f0"},children:[C.jsx("button",{onClick:ot,style:{flex:1,padding:"12px",border:"1px solid #e0e0e0",borderRadius:"8px",background:"white",color:"#666",cursor:"pointer"},children:"초기화"}),C.jsx("button",{onClick:Ve,style:{flex:2,padding:"12px",border:"none",borderRadius:"8px",background:"var(--color-mint-main)",color:"white",cursor:"pointer",fontWeight:"600"},children:"적용하기"})]})]})]})})]})}function xN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(n)}function SN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(n)}function AN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"},child:[]}]})(n)}function RN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(n)}function kN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(n)}function PN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(n)}function C9(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(n)}function b9(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(n)}function CN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(n)}function D9(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(n)}function N9(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(n)}function bN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(n)}function DN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(n)}function NN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(n)}function VN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(n)}function ON(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(n)}function LN(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(n)}function V9(n){return ye({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(n)}function O9(n){return ye({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z"},child:[]}]})(n)}function L9(n){return ye({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4 64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 50.5 8.4 38.5 21.1 33.9z"},child:[]}]})(n)}const Tw=ne.div`
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
`,xw=ne.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-mint-main);
  margin-bottom: var(--space-xl);
  background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,M9=ne.h1`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin-bottom: 2em;
  text-align: center;
`,F9=ne.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 2em;
  box-sizing: border-box;
`,Sw=ne.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`,Aw=ne.input`
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
`,Rw=ne.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,U9=ne.button`
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
`,j9=ne.button`
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
`,z9=ne.div`
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
`,Im=ne.button`
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
`,B9=ne.p`
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
`,$9=ne.p`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 1em;
`,q9=ne.div`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-top: 2em;
`;function W9(){const{user:n,loginWithEmail:e}=z.useContext(Bo),t=ml(),[r,s]=z.useState(!1),[a,l]=z.useState({email:"",password:""}),[h,f]=z.useState(""),[m,v]=z.useState(!1),_=U=>{const{name:V,value:Y}=U.target;l(ee=>({...ee,[V]:Y})),f("")};z.useEffect(()=>{(async()=>{try{const V=await cC(qn);V?.user&&(console.log("Redirect login successful:",V.user),t("/",{replace:!0}))}catch(V){console.error("Redirect login error:",V),I(V)}})()},[t]),z.useEffect(()=>{!n.loading&&n.isLoggedIn&&t("/",{replace:!0})},[n.loading,n.isLoggedIn,t]);const I=U=>{switch(console.error("Auth error details:",{code:U.code,message:U.message,email:U.email,credential:U.credential}),U.code){case"auth/popup-blocked":alert("팝업이 차단되어 구글 로그인을 진행할 수 없습니다. 브라우저의 팝업 차단을 해제해 주세요.");break;case"auth/cancelled-popup-request":case"auth/popup-closed-by-user":console.log("Login popup was cancelled by user");break;case"auth/unauthorized-domain":alert("현재 도메인에서 구글 로그인이 허용되지 않았습니다. 개발자에게 문의해주세요.");break;default:alert(`구글 로그인 중 오류가 발생했습니다. (${U.code})`)}},R=async U=>{if(U.preventDefault(),!m){v(!0),f("");try{console.log("Starting Google login...");const V=await _E(qn,UT);console.log("Google login successful:",V),V.user&&(console.log("Redirecting to main page..."),window.location.href="/")}catch(V){console.error("Google login error:",V),V.code==="auth/popup-blocked"?alert("팝업이 차단되어 구글 로그인을 진행할 수 없습니다. 브라우저의 팝업 차단을 해제해 주세요."):V.code==="auth/cancelled-popup-request"||V.code==="auth/popup-closed-by-user"?console.log("Login popup was cancelled by user"):V.code==="auth/unauthorized-domain"?alert("현재 도메인에서 구글 로그인이 허용되지 않았습니다. 개발자에게 문의해주세요."):alert(`구글 로그인 중 오류가 발생했습니다. (${V.code})`)}finally{v(!1)}}},M=async U=>{if(U.preventDefault(),!m){v(!0),f("");try{await e(a),console.log("Email login successful, redirecting..."),window.location.href="/"}catch(V){console.error("Login error:",V),f("로그인에 실패했습니다: "+V.message)}finally{v(!1)}}};return n.loading?C.jsxs(Tw,{children:[C.jsx(xw,{children:"ECHO"}),C.jsx(q9,{children:"로딩중..."})]}):n.isLoggedIn?null:C.jsxs(Tw,{children:[C.jsx(xw,{children:"ECHO"}),C.jsx(M9,{children:"로그인"}),C.jsxs(F9,{onSubmit:M,children:[C.jsxs(Sw,{children:[C.jsx(Rw,{children:C.jsx(N9,{size:20})}),C.jsx(Aw,{type:"email",name:"email",placeholder:"이메일",value:a.email,onChange:_,disabled:m})]}),C.jsxs(Sw,{children:[C.jsx(Rw,{children:C.jsx(D9,{size:20})}),C.jsx(Aw,{type:r?"text":"password",name:"password",placeholder:"비밀번호",value:a.password,onChange:_,disabled:m}),C.jsx(U9,{type:"button",onClick:()=>s(!r),children:r?C.jsx(C9,{size:20}):C.jsx(b9,{size:20})})]}),h&&C.jsx($9,{children:h}),C.jsx(j9,{type:"submit",disabled:m,children:m?"로그인 중...":"로그인"})]}),C.jsx(z9,{children:C.jsx("span",{children:"또는"})}),C.jsxs(Im,{className:"google",onClick:R,children:[C.jsx(V9,{size:24}),"Google로 로그인"]}),C.jsxs(Im,{className:"kakao",children:[C.jsx(O9,{size:24}),"카카오로 로그인"]}),C.jsxs(Im,{className:"naver",children:[C.jsx(L9,{size:24}),"네이버로 로그인"]}),C.jsxs(B9,{children:["계정이 없으신가요?",C.jsx(sS,{to:"/signup",children:"회원가입"})]})]})}const H9=z.lazy(()=>Ot(()=>import("./Signup-DBy_cFB0.js"),[])),G9=z.lazy(()=>Ot(()=>import("./SetLocation-CLbh6vI1.js"),[])),kw=z.lazy(()=>Ot(()=>import("./ProductRegister-lvx0EJgo.js"),[])),K9=z.lazy(()=>Ot(()=>import("./ProductDetail-C14AZKJD.js"),[])),Q9=z.lazy(()=>Ot(()=>import("./ChatRoom-CZHeSWHC.js"),[])),Y9=z.lazy(()=>Ot(()=>import("./MyPage-Cf6nX11B.js"),[])),J9=z.lazy(()=>Ot(()=>import("./MusicLife-B9-ETDFj.js"),[])),X9=z.lazy(()=>Ot(()=>import("./MusicLifeDetail-3sQbH3ee.js"),[])),Z9=z.lazy(()=>Ot(()=>import("./MusicLifeWrite-3rWmbcAX.js"),[])),eD=z.lazy(()=>Ot(()=>import("./Map-JdDk6NV8.js"),[])),tD=z.lazy(()=>Ot(()=>import("./ChatList-Cbvi0j2w.js"),[]));z.lazy(()=>Ot(()=>import("./AddProduct-C_SSeLhC.js"),[]));const nD=z.lazy(()=>Ot(()=>import("./GuitarTuner-Ci3wag17.js"),[])),rD=z.lazy(()=>Ot(()=>import("./BassTuner-CzpbTDsD.js"),[])),iD=z.lazy(()=>Ot(()=>import("./SalesHistory-pywzMYc8.js"),[])),sD=z.lazy(()=>Ot(()=>import("./EchoShare-DsGdjByK.js"),[])),oD=z.lazy(()=>Ot(()=>import("./PaymentSuccess-Chd5S3bw.js"),[])),aD=z.lazy(()=>Ot(()=>import("./PaymentFail-BnmFLmch.js"),[])),lD=z.lazy(()=>Ot(()=>import("./WishList-CB9fEWwO.js"),[])),uD=z.lazy(()=>Ot(()=>import("./PhoneRegister-BOvbnJef.js"),[])),cD=ne.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
`,hD=ne.div`
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
`,dD=ne.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
`,fD=()=>C.jsxs(cD,{children:[C.jsx(hD,{}),C.jsx(dD,{children:"페이지를 불러오는 중..."})]});function pD(){return C.jsx(z.Suspense,{fallback:C.jsx(fD,{}),children:C.jsxs(Kx,{children:[C.jsx(yt,{path:"/",element:C.jsx(P9,{})}),C.jsx(yt,{path:"/login",element:C.jsx(W9,{})}),C.jsx(yt,{path:"/signup",element:C.jsx(H9,{})}),C.jsx(yt,{path:"/set-location",element:C.jsx(G9,{})}),C.jsx(yt,{path:"/register",element:C.jsx(kw,{})}),C.jsx(yt,{path:"/add",element:C.jsx(kw,{})}),C.jsx(yt,{path:"/product/:id",element:C.jsx(K9,{})}),C.jsx(yt,{path:"/chat/:chatRoomId",element:C.jsx(Q9,{})}),C.jsx(yt,{path:"/chat",element:C.jsx(tD,{})}),C.jsx(yt,{path:"/mypage",element:C.jsx(Y9,{})}),C.jsx(yt,{path:"/mypage/sales",element:C.jsx(iD,{})}),C.jsx(yt,{path:"/musiclife",element:C.jsx(J9,{})}),C.jsx(yt,{path:"/musiclife/write",element:C.jsx(Z9,{})}),C.jsx(yt,{path:"/musiclife/:id",element:C.jsx(X9,{})}),C.jsx(yt,{path:"/map",element:C.jsx(eD,{})}),C.jsx(yt,{path:"/tuner/guitar",element:C.jsx(nD,{})}),C.jsx(yt,{path:"/tuner/bass",element:C.jsx(rD,{})}),C.jsx(yt,{path:"/echo-share",element:C.jsx(sD,{})}),C.jsx(yt,{path:"/payment/success",element:C.jsx(oD,{})}),C.jsx(yt,{path:"/payment/fail",element:C.jsx(aD,{})}),C.jsx(yt,{path:"/wishlist",element:C.jsx(lD,{})}),C.jsx(yt,{path:"/profile/phone",element:C.jsx(uD,{})})]})})}const BT=z.createContext();function mD({children:n}){const{user:e,getUserInfo:t}=z.useContext(Bo),[r,s]=z.useState([]),[a,l]=z.useState({}),[h,f]=z.useState(null),[m,v]=z.useState(!1),[_,I]=z.useState(0);z.useEffect(()=>{if(!e.isLoggedIn||!e.uid){s([]),l({}),f(null),I(0);return}const J=Hn(Qt(Pe,"chatRooms"),or("participants","array-contains",e.uid),gs("lastMessageAt","desc")),x=Fd(J,T=>{const A=[];T.forEach(D=>{A.push({id:D.id,...D.data()})}),s(A);const k=A.reduce((D,L)=>{const P=L.unreadCount?.[e.uid]||0;return D+P},0);I(k)});return()=>x()},[e.isLoggedIn,e.uid]);const R=J=>{if(!J)return null;const x=Hn(Qt(Pe,"chatRooms",J,"messages"),gs("createdAt","desc"),Md(50));return Fd(x,T=>{const A=[];T.forEach(k=>{A.push({id:k.id,...k.data()})}),l(k=>({...k,[J]:A.reverse()}))})},M=async(J,x,T,A)=>{try{v(!0),console.log("🔄 채팅방 생성/조회 시작:",{productId:J,sellerId:x,buyerId:T});const k=Hn(Qt(Pe,"chatRooms"),or("productId","==",J),or("participants","array-contains",x)),D=await ys(k);let L=null;if(D.forEach(Ce=>{const ue=Ce.data();ue.participants&&ue.participants.length===2&&ue.participants.includes(x)&&ue.participants.includes(T)&&(L=Ce)}),L)return console.log("✅ 기존 채팅방 발견:",L.id),L.id;let P,Ve;try{[P,Ve]=await Promise.all([t(x),t(T)])}catch(Ce){console.warn("⚠️ 사용자 정보 조회 실패, 기본값 사용:",Ce),P={nickname:"판매자",profileImage:""},Ve={nickname:"구매자",profileImage:""}}console.log("📋 채팅방 생성 정보:",{productId:J,sellerId:x,buyerId:T,sellerInfo:P?.nickname,buyerInfo:Ve?.nickname});const ot={productId:J,participants:[x,T].sort(),participantInfo:{[x]:{userId:x,role:"seller",nickname:P?.nickname||"판매자",profileImage:P?.profileImage||""},[T]:{userId:T,role:"buyer",nickname:Ve?.nickname||"구매자",profileImage:Ve?.profileImage||""}},productInfo:{id:J,title:A.title,price:A.price,images:A.images||[],status:A.status||"active"},lastMessage:"",lastMessageAt:Qe(),unreadCount:{[x]:0,[T]:0},isActive:!0,createdAt:Qe()},He=await ls(Qt(Pe,"chatRooms"),ot);console.log("✅ 새 채팅방 생성 완료:",He.id),await ls(Qt(Pe,"chatRooms",He.id,"messages"),{type:"system",content:"채팅이 시작되었습니다. 안전한 거래를 위해 서로 예의를 지켜주세요.",createdAt:Qe(),isRead:!1});try{await Rr.incrementChatCount(J),console.log("✅ 새 채팅방 생성으로 인한 채팅 수 증가:",J)}catch(Ce){console.error("❌ 채팅 수 증가 실패:",Ce)}return console.log("🎉 채팅방 생성 프로세스 완료:",He.id),He.id}catch(k){throw console.error("채팅방 생성 실패:",k),k}finally{v(!1)}},U=async(J,x,T="text")=>{try{if(!x.trim()||!J||!e.uid)return;const A=r.find(L=>L.id===J)?.participants.find(L=>L!==e.uid),k={senderId:e.uid,senderInfo:{nickname:e.nickname,profileImage:e.profileImage},content:x.trim(),type:T,createdAt:Qe(),isRead:!1};await ls(Qt(Pe,"chatRooms",J,"messages"),k);const D=Ye(Pe,"chatRooms",J);await Et(D,{lastMessage:T==="image"?"사진":x.trim(),lastMessageAt:Qe(),[`unreadCount.${A}`]:(r.find(L=>L.id===J)?.unreadCount?.[A]||0)+1}),console.log("✅ 메시지 전송 완료")}catch(A){throw console.error("❌ 메시지 전송 실패:",A),A}},V=async J=>{try{if(!J||!e.uid)return;const x=Ye(Pe,"chatRooms",J);await Et(x,{[`unreadCount.${e.uid}`]:0}),console.log("✅ 메시지 읽음 처리 완료")}catch(x){console.error("❌ 메시지 읽음 처리 실패:",x)}},fe={chatRooms:r,messages:a,currentChat:h,loading:m,unreadCount:_,createOrGetChatRoom:M,sendMessage:U,markMessagesAsRead:V,leaveChatRoom:async J=>{try{if(!J||!e.uid)return;const x=Ye(Pe,"chatRooms",J);await Et(x,{[`participantInfo.${e.uid}.isActive`]:!1,[`participantInfo.${e.uid}.leftAt`]:Qe()}),await ls(Qt(Pe,"chatRooms",J,"messages"),{type:"system",content:`${e.nickname}님이 채팅방을 나갔습니다.`,createdAt:Qe(),isRead:!1}),console.log("✅ 채팅방 나가기 완료")}catch(x){throw console.error("❌ 채팅방 나가기 실패:",x),x}},blockChatRoom:async(J,x="")=>{try{if(!J||!e.uid)return;const T=Ye(Pe,"chatRooms",J);await Et(T,{[`participantInfo.${e.uid}.isBlocked`]:!0,[`participantInfo.${e.uid}.blockReason`]:x,[`participantInfo.${e.uid}.blockedAt`]:Qe(),isActive:!1}),console.log("✅ 채팅방 차단 완료")}catch(T){throw console.error("❌ 채팅방 차단 실패:",T),T}},setActiveChat:J=>{f(J),J&&V(J)},getChatRoomInfo:async J=>{try{const x=await yo(Ye(Pe,"chatRooms",J));return x.exists()?{id:J,...x.data()}:null}catch(x){return console.error("❌ 채팅방 정보 조회 실패:",x),null}},subscribeToMessages:R};return C.jsx(BT.Provider,{value:fe,children:n})}const gD=ne.nav`
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
`,yD=ne.div`
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
`,Ua=ne.button`
  background: ${n=>n.$active?"var(--color-mint-glass)":"none"};
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${n=>n.$active?"var(--color-mint-main)":"var(--color-text-tertiary)"};
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
  transform: ${n=>n.$active?"translateY(-2px)":"translateY(0)"};
  
  /* 활성 상태 글로우 효과 */
  ${n=>n.$active&&`
    box-shadow: var(--glow-mint);
    background: linear-gradient(135deg, 
      var(--color-mint-glass) 0%, 
      rgba(255, 255, 255, 0.1) 100%);
  `}

  /* 아이콘 스타일 강화 */
  svg {
    font-size: 20px;
    transition: all var(--transition-normal);
    transform: ${n=>n.$active?"scale(1.1)":"scale(1)"};
    filter: ${n=>n.$active?"drop-shadow(0 0 8px var(--color-mint-glow))":"none"};
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
`,vD=ne.div`
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
`;function _D(){const n=ml(),{pathname:e}=pl(),{unreadCount:t}=z.useContext(BT);return C.jsx(gD,{children:C.jsxs(yD,{children:[C.jsxs(Ua,{$active:e==="/",onClick:()=>n("/"),children:[" ",C.jsx(v2,{size:22})," ",C.jsx("span",{children:"홈"})," "]}),C.jsxs(Ua,{$active:e==="/musiclife",onClick:()=>n("/musiclife"),children:[" ",C.jsx(RA,{size:22})," ",C.jsx("span",{children:"음악생활"})," "]}),C.jsxs(Ua,{$active:e==="/map",onClick:()=>n("/map"),children:[" ",C.jsx(I_,{size:22})," ",C.jsx("span",{children:"동네지도"})," "]}),C.jsxs(Ua,{$active:e.startsWith("/chat"),onClick:()=>n("/chat"),children:[C.jsx(bA,{size:22}),C.jsx("span",{children:"채팅"}),t>0&&C.jsx(vD,{children:t>99?"99+":t})]}),C.jsxs(Ua,{$active:e==="/echo-share",onClick:()=>n("/echo-share"),children:[" ",C.jsx(PA,{size:22})," ",C.jsx("span",{children:"에코쉐어"})," "]}),C.jsxs(Ua,{$active:e==="/mypage",onClick:()=>n("/mypage"),children:[" ",C.jsx(I_,{size:22})," ",C.jsx("span",{children:"나의에코"})," "]})]})})}const wD=m2`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,ED=m2`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,ID=ne.div`
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
`,TD=ne.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${n=>n.isExiting?ED:wD} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    background: ${n=>{switch(n.type){case"success":return"#10b981";case"error":return"#ef4444";case"warning":return"#f59e0b";default:return"#3b82f6"}}};
  }
`,xD=ne.div`
  font-size: 20px;
  color: ${n=>{switch(n.type){case"success":return"#10b981";case"error":return"#ef4444";case"warning":return"#f59e0b";default:return"#3b82f6"}}};
  display: flex;
  align-items: center;
`,SD=ne.div`
  flex: 1;
`,AD=ne.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2px;
  font-size: 14px;
`,RD=ne.div`
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
`,kD=ne.button`
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
`,PD=ne.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${n=>{switch(n.type){case"success":return"#10b981";case"error":return"#ef4444";case"warning":return"#f59e0b";default:return"#3b82f6"}}};
  width: ${n=>`${n.progress}%`};
  transition: width 0.1s linear;
`;function CD({toasts:n,removeToast:e}){return C.jsx(ID,{children:n.map(t=>C.jsx(bD,{toast:t,onRemove:()=>e(t.id)},t.id))})}function bD({toast:n,onRemove:e}){const[t,r]=z.useState(!1),[s,a]=z.useState(100);z.useEffect(()=>{const m=n.duration||5e3,v=50,_=v/m*100,I=setInterval(()=>{a(R=>{const M=R-_;return M<=0?(clearInterval(I),l(),0):M})},v);return()=>clearInterval(I)},[n.duration]);const l=()=>{r(!0),setTimeout(()=>{e()},300)},h=()=>{switch(n.type){case"success":return C.jsx(yA,{});case"error":return C.jsx(w_,{});case"warning":return C.jsx(w_,{});default:return C.jsx(SA,{})}},f=()=>{switch(n.type){case"success":return"성공";case"error":return"오류";case"warning":return"주의";default:return"알림"}};return C.jsxs(TD,{type:n.type,isExiting:t,children:[C.jsx(xD,{type:n.type,children:h()}),C.jsxs(SD,{children:[C.jsx(AD,{children:n.title||f()}),C.jsx(RD,{children:n.message})]}),C.jsx(kD,{onClick:l,children:C.jsx(Qh,{size:14})}),C.jsx(PD,{type:n.type,progress:s})]})}const DD=ne.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: var(--color-bg-secondary);
`,ND=ne.div`
  font-size: 4rem;
  color: var(--color-red);
  margin-bottom: 1.5rem;
  opacity: 0.8;
`,VD=ne.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
`,OD=ne.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 400px;
`;ne.details`
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
`;const LD=ne.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`,Pw=ne.button`
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
`,MD=ne.button`
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
`;class FD extends Dt.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null,errorId:null}}static getDerivedStateFromError(){return{hasError:!0,errorId:`ERR_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t}),this.reportError(e,t)}reportError=(e,t)=>{const r={id:this.state.errorId,message:e.message,stack:e.stack,componentStack:t.componentStack,timestamp:new Date().toISOString(),userAgent:navigator.userAgent,url:window.location.href,userId:this.props.userId||"anonymous"};console.log("Error reported:",r)};handleRetry=()=>{this.setState({hasError:!1,error:null,errorInfo:null,errorId:null})};handleGoHome=()=>{window.location.href="/"};handleReportIssue=()=>{const e=encodeURIComponent(`버그 신고: ${this.state.errorId}`),t=encodeURIComponent(`
에러 ID: ${this.state.errorId}
발생 시간: ${new Date().toLocaleString()}
페이지: ${window.location.href}
브라우저: ${navigator.userAgent}

에러 내용:
${this.state.error?.message||"알 수 없는 에러"}

재현 방법:
1. 
2. 
3. 

추가 정보:
    `);window.open(`mailto:support@echo-music.com?subject=${e}&body=${t}`)};render(){if(this.state.hasError){const{error:e,errorInfo:t,errorId:r}=this.state;return C.jsxs(DD,{children:[C.jsx(ND,{children:C.jsx(EA,{})}),C.jsx(VD,{children:"앗! 문제가 발생했습니다"}),C.jsxs(OD,{children:["예상치 못한 오류가 발생했습니다.",C.jsx("br",{}),"잠시 후 다시 시도해주시거나 홈으로 돌아가세요."]}),!1,C.jsxs(LD,{children:[C.jsxs(Pw,{className:"primary",onClick:this.handleRetry,children:[C.jsx(kA,{}),"다시 시도"]}),C.jsxs(Pw,{className:"secondary",onClick:this.handleGoHome,children:[C.jsx(v2,{}),"홈으로 이동"]})]}),C.jsx(MD,{onClick:this.handleReportIssue,children:"문제 신고하기"})]})}return this.props.children}}const $T=z.createContext(),UD=()=>{const n=z.useContext($T);if(!n)throw new Error("useToast must be used within a ToastProvider");return n};function jD({children:n}){const[e,t]=z.useState([]),r=z.useCallback(_=>{const I=Date.now()+Math.random(),R={id:I,type:"info",duration:5e3,..._};return t(M=>[...M,R]),I},[]),s=z.useCallback(_=>{t(I=>I.filter(R=>R.id!==_))},[]),a=z.useCallback(()=>{t([])},[]),l=z.useCallback((_,I={})=>r({type:"success",message:_,...I}),[r]),h=z.useCallback((_,I={})=>r({type:"error",message:_,duration:7e3,...I}),[r]),f=z.useCallback((_,I={})=>r({type:"warning",message:_,...I}),[r]),m=z.useCallback((_,I={})=>r({type:"info",message:_,...I}),[r]),v={toasts:e,addToast:r,removeToast:s,clearToasts:a,showSuccess:l,showError:h,showWarning:f,showInfo:m};return C.jsx($T.Provider,{value:v,children:n})}const zD=lA`
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
`;function BD(){const{toasts:n,removeToast:e}=UD(),{user:t}=Dt.useContext(Bo);return C.jsxs(nS,{children:[C.jsx(zD,{}),C.jsx(FD,{userId:t?.uid,children:C.jsxs("div",{className:"App",children:[C.jsx(pD,{}),C.jsx(_D,{}),C.jsx(CD,{toasts:n,removeToast:e})]})})]})}function $D(){return C.jsx(jD,{children:C.jsx(BD,{})})}rx.createRoot(document.getElementById("root")).render(C.jsx(Dt.StrictMode,{children:C.jsx(b8,{children:C.jsx(j8,{children:C.jsx(mD,{children:C.jsx($D,{})})})})}));export{yN as $,uN as A,iN as B,BT as C,rN as D,gN as E,N9 as F,eN as G,tN as H,I_ as I,AA as J,IA as K,wA as L,vA as M,yA as N,pN as O,zT as P,xA as Q,DA as R,bA as S,M8 as T,Bo as U,hN as V,JD as W,sN as X,E_ as Y,aN as Z,cN as _,Cw as a,_A as a0,oN as a1,mN as a2,YD as a3,QD as a4,dN as a5,IN as a6,PN as a7,VN as a8,SN as a9,bN as aa,xN as ab,xu as ac,vw as ad,ZD as ae,qn as af,kN as ag,CN as ah,DN as ai,Hn as aj,Qt as ak,Pe as al,or as am,gs as an,ys as ao,GD as ap,v2 as aq,kA as ar,TN as as,D9 as b,qD as c,C9 as d,b9 as e,ON as f,WD as g,NN as h,ne as i,C as j,RN as k,AN as l,LN as m,EN as n,UD as o,Rr as p,Qh as q,z as r,fN as s,XD as t,ml as u,nN as v,lN as w,HD as x,KD as y,EA as z};
