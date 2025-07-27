const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/vendor-firebase-Cl2QMYMN.js","assets/js/vendor-others-BwC04hQF.js","assets/js/Signup-DZNV1zRb.js","assets/js/vendor-react-xhcWTtxo.js","assets/js/vendor-ui-28GTjlMA.js","assets/js/SetLocation-CuXyBV76.js","assets/js/ProductRegister-BdAN5j1k.js","assets/js/LocationPicker-DMFna4R7.js","assets/js/ProductDetail-BD89Tt2N.js","assets/js/ChatRoom-Dr0lhMWD.js","assets/js/MyPage-CvJ0HDnv.js","assets/js/MusicLife-BJP89Edm.js","assets/js/MusicLifeDetail-JpV6hywq.js","assets/js/MusicLifeWrite-Dc0fo0pS.js","assets/js/Map-ClqD0mNM.js","assets/js/ChatList-Ddt_Kcl9.js","assets/js/AddProduct-Cy1DC4H4.js","assets/js/GuitarTuner-BuTI-PCY.js","assets/js/BassTuner-BvzCkJOa.js","assets/js/SalesHistory-DIQb8ye_.js","assets/js/EchoShare-1Vf1U0_n.js","assets/js/PaymentSuccess-DyWj-P68.js","assets/js/PaymentFail-DuSWTjP1.js","assets/js/WishList-CdJB27dz.js","assets/js/PhoneRegister-CWfl7SHb.js","assets/js/AdminDashboard-DpTOcvWR.js","assets/js/NotificationPage-D9smS4-2.js"])))=>i.map(i=>d[i]);
var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))n.call(t,r)&&a(e,r,t[r]);return e},l=(e,o)=>t(e,r(o)),c=(e,t,r)=>a(e,"symbol"!=typeof t?t+"":t,r),d=(e,t,r)=>new Promise((o,i)=>{var n=e=>{try{s(r.next(e))}catch(t){i(t)}},a=e=>{try{s(r.throw(e))}catch(t){i(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,a);s((r=r.apply(e,t)).next())});import{r as u,j as p,u as h,F as m,a as g,b as f,c as x,d as b,e as v,H as y,f as w,g as k,h as j,i as C,k as E,l as S,m as I,n as _,o as A,p as P,q as N,s as z,t as L,S as D,v as $,L as R,w as T,x as O,y as M,z as V,A as U,B as F,C as B,D as Q,E as q,G as W,I as H,R as Y,J as G,K as J,M as K,N as X,O as Z}from"./vendor-react-xhcWTtxo.js";import{d as ee,m as te,f as re}from"./vendor-ui-28GTjlMA.js";import{i as oe,g as ie,G as ne,a as ae,b as se,s as le,e as ce,c as de,d as ue,f as pe,u as he,h as me,q as ge,o as fe,j as xe,k as be,l as ve,m as ye,w as we,n as ke,p as je,r as Ce,t as Ee,v as Se,x as Ie,P as _e,y as Ae,z as Pe,R as Ne,A as ze,B as Le,C as De,D as $e,E as Re,F as Te,H as Oe,I as Me,J as Ve,K as Ue,L as Fe,M as Be,N as Qe,O as qe,Q as We,S as He,T as Ye,U as Ge}from"./vendor-firebase-Cl2QMYMN.js";import"./vendor-others-BwC04hQF.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const Je={},Ke=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),r=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));o=Promise.allSettled(t.map(e=>{if((e=function(e){return"/"+e}(e))in Je)return;Je[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":"modulepreload",t||(i.as="script"),i.crossOrigin="",i.href=e,r&&i.setAttribute("nonce",r),document.head.appendChild(i),t?new Promise((t,r)=>{i.addEventListener("load",t),i.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function i(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(const e of t||[])"rejected"===e.status&&i(e.reason);return e().catch(i)})},Xe=oe({apiKey:"AIzaSyD2w3owD20XBd_JAH-sUykBtSG9BCBCgAU",authDomain:"echo-5385e.firebaseapp.com",projectId:"echo-5385e",storageBucket:"echo-5385e.appspot.com",messagingSenderId:"442753723316",appId:"1:442753723316:web:07e2013a9439b0d426e0e1"}),Ze=ie(Xe),et=new ne,tt=ae(Xe),rt=se(Xe);"undefined"!=typeof window&&le(Ze,Le).then(()=>{}).catch(e=>{}),"undefined"!=typeof window&&ce(tt,{}).catch(e=>{"failed-precondition"===e.code||e.code});const ot=de(tt,"products");de(tt,"users"),de(tt,"chats"),de(tt,"reviews"),de(tt,"reports");const it=de(tt,"musiclife_posts"),nt={ACTIVE:"active",SOLD:"sold",RESERVED:"reserved",DELETED:"deleted",SUSPENDED:"suspended"},at={GUITAR:{id:"guitar",name:"기타",subcategories:["어쿠스틱 기타","일렉트릭 기타","베이스 기타","클래식 기타"]},PIANO:{id:"piano",name:"피아노/건반",subcategories:["피아노","전자피아노","신디사이저","오르간"]},DRUMS:{id:"drums",name:"드럼/타악기",subcategories:["어쿠스틱 드럼","전자드럼","타악기","심벌"]},WIND:{id:"wind",name:"관악기",subcategories:["색소폰","플룻","트럼펫","클라리넷","트롬본"]},STRING:{id:"string",name:"현악기",subcategories:["바이올린","비올라","첼로","우쿨렐레"]},AUDIO:{id:"audio",name:"오디오 장비",subcategories:["앰프","스피커","마이크","오디오 인터페이스","이펙터"]},OTHER:{id:"other",name:"기타",subcategories:["하모니카","아코디언","기타 악기"]}},st={SEOUL:{id:"seoul",name:"서울",districts:["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"]},BUSAN:{id:"busan",name:"부산",districts:["중구","서구","동구","영도구","부산진구","동래구","남구","북구","해운대구","사하구","금정구","강서구","연제구","수영구","사상구","기장군"]},INCHEON:{id:"incheon",name:"인천",districts:["중구","동구","미추홀구","연수구","남동구","부평구","계양구","서구","강화군","옹진군"]},DAEGU:{id:"daegu",name:"대구",districts:["중구","동구","서구","남구","북구","수성구","달서구","달성군"]},DAEJEON:{id:"daejeon",name:"대전",districts:["동구","중구","서구","유성구","대덕구"]},GWANGJU:{id:"gwangju",name:"광주",districts:["동구","서구","남구","북구","광산구"]},ULSAN:{id:"ulsan",name:"울산",districts:["중구","남구","동구","북구","울주군"]}},lt={createProduct(e,t){return d(this,null,function*(){var r;try{if(!e.title||e.title.trim().length<2)throw new Error("제목을 2글자 이상 입력해주세요.");if(!e.description||e.description.trim().length<10)throw new Error("상품 설명을 10글자 이상 입력해주세요.");if(!e.price||e.price<1e3)throw new Error("가격을 1,000원 이상 입력해주세요.");if(!t)throw new Error("로그인이 필요합니다.");const i=ve(),n={title:e.title.trim().replace(/<[^>]*>/g,""),description:e.description.trim().replace(/<[^>]*>/g,""),category:e.category,subcategory:e.subcategory||"",brand:e.brand||"",model:e.model||"",price:parseInt(e.price),originalPrice:e.originalPrice?parseInt(e.originalPrice):null,isPriceNegotiable:e.isPriceNegotiable||!1,condition:e.condition||"good",conditionDescription:e.conditionDescription||"",yearOfManufacture:e.yearOfManufacture?parseInt(e.yearOfManufacture):null,images:e.images||[],thumbnailImage:(null==(r=e.images)?void 0:r[0])||"",region:e.region||"",district:e.district||"",fullLocation:`${e.region} ${e.district}`.trim(),isDeliveryAvailable:e.isDeliveryAvailable||!1,deliveryFee:e.deliveryFee?parseInt(e.deliveryFee):0,preferredTransactionType:e.preferredTransactionType||"direct",sellerId:t,sellerNickname:e.sellerNickname||"",status:nt.ACTIVE,viewCount:0,likeCount:0,chatCount:0,tags:e.tags||[],createdAt:i,updatedAt:i,lastBumpedAt:i,searchKeywords:[],isPromoted:!1,reportCount:0,reservedBy:null,soldTo:null,soldAt:null,isUrgent:e.isUrgent||!1,accessories:e.accessories||[],defects:e.defects||[]};try{const e=yield be(ot,n),t=new Date;return l(s({id:e.id},n),{createdAt:t,updatedAt:t,lastBumpedAt:t})}catch(o){throw o}}catch(i){throw i}})},generateSearchKeywords(e){const t=new Set;return e.title.toLowerCase().split(/\s+/).forEach(e=>{e.length>1&&t.add(e)}),e.brand&&t.add(e.brand.toLowerCase()),e.model&&t.add(e.model.toLowerCase()),e.category&&t.add(e.category.toLowerCase()),Array.from(t)},getProducts(){return d(this,arguments,function*(e={}){try{const{category:t=null,region:r=null,priceMin:o=null,priceMax:i=null,condition:n=null,sortBy:a="latest",pageSize:c=20,lastDoc:u=null,searchQuery:p=null}=e;let h=ge(ot,we("status","==",nt.ACTIVE),fe("createdAt","desc"),ke(c));u&&(h=ge(ot,we("status","==",nt.ACTIVE),fe("createdAt","desc"),je(u),ke(c)));const m=yield xe(h);let g=m.docs.map(e=>l(s({id:e.id},e.data()),{_doc:e}));if(t&&(g=g.filter(e=>e.category===t)),r&&(g=g.filter(e=>e.region===r)),n&&(g=g.filter(e=>e.condition===n)),null!==o&&(g=g.filter(e=>e.price>=o)),null!==i&&(g=g.filter(e=>e.price<=i)),p){const e=p.toLowerCase();g=g.filter(t=>{var r,o;return(null==(r=t.title)?void 0:r.toLowerCase().includes(e))||(null==(o=t.description)?void 0:o.toLowerCase().includes(e))})}switch(a){case"price_low":g.sort((e,t)=>e.price-t.price);break;case"price_high":g.sort((e,t)=>t.price-e.price);break;case"popular":g.sort((e,t)=>(t.likeCount||0)-(e.likeCount||0))}return{products:yield Promise.all(g.map(e=>d(this,null,function*(){try{if(e.showPhoneNumber){const t=ue(tt,"users",e.sellerId),r=yield ye(t);if(r.exists()){const t=r.data();return l(s({},e),{sellerPhone:t.phoneNumber,sellerNickname:t.nickname||e.sellerNickname,sellerProfileImage:t.profileImage||e.sellerProfileImage,sellerVerified:t.phoneVerified||!1})}}return e}catch(t){return e}}))),hasMore:m.docs.length===c,lastDoc:m.docs[m.docs.length-1]||null}}catch(t){throw new Error("상품을 불러오는데 실패했습니다.")}})},getProduct(e){return d(this,null,function*(){try{const t=ue(tt,"products",e),r=yield ye(t);if(!r.exists())throw new Error(`상품을 찾을 수 없습니다. (ID: ${e})`);return s({id:r.id},r.data())}catch(t){throw t}})},incrementViewCount(e,t=null){return d(this,null,function*(){try{const r=`viewed_${e}_${t||"anonymous"}`,o=sessionStorage.getItem(r);if(o&&Date.now()-parseInt(o)<6e4)return;const i=ue(tt,"products",e),n=yield ye(i);if(!n.exists())return;const a=n.data();if(t&&a.sellerId===t)return;yield he(i,{viewCount:me(1),lastViewedAt:ve()}),sessionStorage.setItem(r,Date.now().toString())}catch(r){}})},incrementChatCount(e){return d(this,null,function*(){try{const t=ue(tt,"products",e);yield he(t,{chatCount:me(1),lastChatAt:ve()})}catch(t){throw t}})},toggleLike(e,t){return d(this,null,function*(){try{const r=de(tt,"users",t,"likes"),o=ge(r,we("productId","==",e)),i=yield xe(o),n=ue(tt,"products",e);if(i.empty)return yield be(r,{productId:e,createdAt:ve()}),yield he(n,{likeCount:me(1)}),!0;{const e=i.docs[0];return yield pe(e.ref),yield he(n,{likeCount:me(-1)}),!1}}catch(r){throw r}})},updateProductStatus(e,t){return d(this,arguments,function*(e,t,r={}){try{const o=ue(tt,"products",e),i=s({status:t,updatedAt:ve()},r);t===nt.SOLD&&(i.soldAt=ve()),yield he(o,i)}catch(o){throw o}})},updateProduct(e,t){return d(this,null,function*(){try{const r=ue(tt,"products",e);yield he(r,l(s({},t),{updatedAt:ve()}))}catch(r){throw r}})},getUserProducts(e){return d(this,arguments,function*(e,t=nt.ACTIVE){try{const r=ge(ot,we("sellerId","==",e),we("status","==",t),fe("createdAt","desc"));return(yield xe(r)).docs.map(e=>s({id:e.id},e.data()))}catch(r){throw r}})},bumpProduct(e,t){return d(this,null,function*(){var r;try{const o=ue(tt,"products",e),i=yield ye(o);if(!i.exists())throw new Error("상품을 찾을 수 없습니다.");const n=i.data();if(n.sellerId!==t)throw new Error("권한이 없습니다.");const a=null==(r=n.lastBumpedAt)?void 0:r.toDate();if((new Date-a)/36e5<24)throw new Error("24시간에 한 번만 끌어올릴 수 있습니다.");return yield he(o,{lastBumpedAt:ve(),updatedAt:ve()}),!0}catch(o){throw o}})}},ct={uploadProductImage(e,t,r=null){return d(this,null,function*(){try{if(e.size>5242880)throw new Error("이미지 크기는 5MB 이하여야 합니다.");if(!e.type.startsWith("image/"))throw new Error("이미지 파일만 업로드 가능합니다.");const o=this.compressImage(e),i=new Promise((e,t)=>setTimeout(()=>t(new Error("이미지 업로드가 너무 오래 걸립니다.")),1e4)),n=yield Promise.race([o,i]),a=Date.now(),s=`${t}_${a}_${e.name}`,l=r?`products/${r}/${s}`:`products/temp/${s}`,c=Ce(rt,l),d=yield Se(c,n);return{url:yield Ie(d.ref),path:l,size:n.size,originalName:e.name}}catch(o){throw o}})},compressImage(e,t=800,r=.8){return d(this,null,function*(){return new Promise((o,i)=>{const n=document.createElement("canvas"),a=n.getContext("2d"),s=new Image;let l;s.onload=function(){const c=Math.min(t/s.width,t/s.height);n.width=s.width*c,n.height=s.height*c,a.drawImage(s,0,0,n.width,n.height),n.toBlob?(l=setTimeout(()=>{i(new Error("이미지 압축이 너무 오래 걸립니다."))},1e4),n.toBlob(e=>{clearTimeout(l),e?o(e):i(new Error("이미지 압축 실패"))},e.type,r)):i(new Error("이미지 압축을 지원하지 않는 브라우저입니다."))},s.onerror=function(){i(new Error("이미지 로드 실패"))},s.src=URL.createObjectURL(e)})})},uploadMultipleImages(e,t,r=null){return d(this,null,function*(){try{if(e.length>5)throw new Error("이미지는 최대 5개까지 업로드 가능합니다.");const o=e.map(e=>this.uploadProductImage(e,t,r));return yield Promise.all(o)}catch(o){throw o}})},deleteImage(e){return d(this,null,function*(){try{const t=Ce(rt,e);yield Ee(t)}catch(t){throw t}})}},dt={subscribeToProducts(e,t={}){try{let r=ge(ot,we("status","==",nt.ACTIVE),fe("createdAt","desc"),ke(20));return t.category&&(r=ge(r,we("category","==",t.category))),ze(r,t=>{const r=t.docs.map(e=>s({id:e.id},e.data()));e(r)})}catch(r){throw r}},subscribeToProduct(e,t){try{const r=ue(tt,"products",e);return ze(r,e=>{e.exists()?t(s({id:e.id},e.data())):t(null)})}catch(r){throw r}}},ut={createPost(e){return d(this,null,function*(){return yield be(it,l(s({},e),{createdAt:ve(),updatedAt:ve(),viewCount:0,commentCount:0}))})},getPosts(){return d(this,null,function*(){const e=ge(it,fe("createdAt","desc"));return(yield xe(e)).docs.map(e=>s({id:e.id},e.data()))})},getPost(e){return d(this,null,function*(){const t=ue(tt,"musiclife_posts",e),r=yield ye(t);if(!r.exists())throw new Error("게시글이 존재하지 않습니다.");return yield he(t,{viewCount:me(1)}),s({id:r.id},r.data())})},updatePost(e,t){return d(this,null,function*(){const r=ue(tt,"musiclife_posts",e);yield he(r,l(s({},t),{updatedAt:ve()}))})},deletePost(e){return d(this,null,function*(){const t=ue(tt,"musiclife_posts",e);yield pe(t)})},addComment(e,t){return d(this,null,function*(){const r=de(tt,"musiclife_posts",e,"comments");yield be(r,l(s({},t),{createdAt:ve()})),yield he(ue(tt,"musiclife_posts",e),{commentCount:me(1)})})},getComments(e){return d(this,null,function*(){const t=de(tt,"musiclife_posts",e,"comments"),r=ge(t,fe("createdAt","asc"));return(yield xe(r)).docs.map(e=>s({id:e.id},e.data()))})},deleteComment(e,t){return d(this,null,function*(){const r=ue(tt,"musiclife_posts",e,"comments",t);yield pe(r),yield he(ue(tt,"musiclife_posts",e),{commentCount:me(-1)})})}},pt={recaptchaVerifier:null,setupRecaptcha(e="recaptcha-container"){try{return this.recaptchaVerifier||(this.recaptchaVerifier=new Ne(Ze,e,{size:"invisible",callback:e=>{},"expired-callback":()=>{}})),this.recaptchaVerifier}catch(t){throw t}},sendVerificationCode(e){return d(this,null,function*(){try{const t=e.startsWith("+82")?e:"+82"+e.replace(/^0/,""),r=this.setupRecaptcha();return yield Pe(Ze,t,r)}catch(t){throw this.resetRecaptcha(),t}})},verifyCode(e,t){return d(this,null,function*(){try{return(yield e.confirm(t)).user}catch(r){throw r}})},linkPhoneNumber(e,t){return d(this,null,function*(){try{const r=_e.credential(t,e);return yield Ae(Ze.currentUser,r)}catch(r){throw r}})},resetRecaptcha(){this.recaptchaVerifier&&(this.recaptchaVerifier.clear(),this.recaptchaVerifier=null)},validatePhoneNumber:e=>/^01[0-9]-\d{4}-\d{4}$/.test(e),formatPhoneNumber(e){const t=e.replace(/\D/g,"");return 11===t.length&&t.startsWith("010")?t.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3"):e}},ht=Object.freeze(Object.defineProperty({__proto__:null,INSTRUMENT_CATEGORIES:at,PRODUCT_STATUS:nt,REGIONS:st,app:Xe,auth:Ze,db:tt,googleProvider:et,imageService:ct,musiclifeCollection:it,musiclifeService:ut,phoneAuthService:pt,productService:lt,productsCollection:ot,storage:rt,subscriptionService:dt},Symbol.toStringTag,{value:"Module"})),mt=u.createContext();function gt({children:e}){const[t,r]=u.useState({nickname:"",email:"",uid:"",isLoggedIn:!1,loading:!0,emailVerified:!1,phoneNumber:"",profileImage:"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,lastLoginAt:null,createdAt:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[]}),[o,i]=u.useState(null),[n,a]=u.useState(null);u.useEffect(()=>{let e=null,t=null;return(()=>{e=De(Ze,e=>d(this,null,function*(){var t,o,n;try{if(e){let s={};try{const r=yield ye(ue(tt,"users",e.uid));if(s=r.exists()?r.data():{},r.exists())try{yield he(ue(tt,"users",e.uid),{lastLoginAt:ve()})}catch(c){}else{const r={nickname:e.displayName||(null==(t=e.email)?void 0:t.split("@")[0])||"사용자",email:e.email||"",profileImage:e.photoURL||"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[],createdAt:ve(),lastLoginAt:ve()};yield Be(ue(tt,"users",e.uid),r),s=r}}catch(d){s={nickname:e.displayName||(null==(o=e.email)?void 0:o.split("@")[0])||"사용자",email:e.email||"",profileImage:e.photoURL||"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[],lastLoginAt:null,createdAt:null}}const l={nickname:s.nickname||e.displayName||(null==(n=e.email)?void 0:n.split("@")[0])||"사용자",email:e.email||"",uid:e.uid,isLoggedIn:!0,loading:!1,emailVerified:e.emailVerified,phoneNumber:s.phoneNumber||e.phoneNumber||"",profileImage:s.profileImage||e.photoURL||"",address:s.address||"",region:s.region||"",district:s.district||"",mannerScore:s.mannerScore||36.5,transactionCount:s.transactionCount||0,reviewCount:s.reviewCount||0,favoriteCount:s.favoriteCount||0,isVerified:s.isVerified||!1,isBusiness:s.isBusiness||!1,businessInfo:s.businessInfo||null,lastLoginAt:s.lastLoginAt,createdAt:s.createdAt,preferences:s.preferences||{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:s.blockedUsers||[],following:s.following||[],followers:s.followers||[]};r(l),a(s),i(null),"/login"===window.location.pathname&&(window.location.href="/")}else r({nickname:"",email:"",uid:"",isLoggedIn:!1,loading:!1,emailVerified:!1,phoneNumber:"",profileImage:"",address:"",region:"",district:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,lastLoginAt:null,createdAt:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[]}),a(null),i(null)}catch(u){i(u),r(e=>l(s({},e),{loading:!1,isLoggedIn:!!e.uid}))}})),t=$e(Ze,e=>d(this,null,function*(){if(e)try{yield e.getIdToken(!0)}catch(t){i(t)}}))})(),()=>{e&&e(),t&&t()}},[]);const c=e=>d(this,null,function*(){try{if(!t.uid)throw new Error("로그인이 필요합니다.");const o=ue(tt,"users",t.uid);yield he(o,l(s({},e),{updatedAt:ve()})),r(t=>s(s({},t),e)),a(t=>s(s({},t),e))}catch(o){throw o}}),h=["음악왕","기타소년","피아노소녀","드럼짱","베이스킹","색소폰러버","플룻마스터","신디장인","보컬리더","밴드캡틴","재즈러버","락스타","힙합보이","클래식걸","EDM매니아","트로트신","포크싱어","뮤지션A","뮤지션B","뮤지션C"],m=Array.from({length:20}).map((e,t)=>({nickname:h[t],email:`user${t+1}@test.com`,password:`testpw${t+1}`})),g={user:t,userProfile:n,authError:o,users:m,loginWithGoogle:()=>d(this,null,function*(){try{i(null);const e=(yield qe(Ze,et)).user;return new Promise(r=>{const o=()=>{t.isLoggedIn&&t.uid===e.uid?r(e):setTimeout(o,100)};setTimeout(o,50),setTimeout(()=>{r(e)},5e3)})}catch(e){throw i(e),e}}),loginWithEmail:e=>d(this,[e],function*({email:e,password:t}){try{return(yield Qe(Ze,e,t)).user}catch(r){throw r}}),signupWithEmail:e=>d(this,[e],function*({email:e,password:t,nickname:r,phone:o,address:i,region:n,district:a}){try{const s=ge(de(tt,"users"),we("nickname","==",r));if(!(yield xe(s)).empty)throw new Error("이미 사용 중인 닉네임입니다.");const l=yield Ve(Ze,e,t);l.user&&(yield Ue(l.user)),yield Fe(l.user,{displayName:r});const c=ue(tt,"users",l.user.uid),d={nickname:r,phoneNumber:o||"",email:e,address:i||"",region:n||"",district:a||"",profileImage:"",mannerScore:36.5,transactionCount:0,reviewCount:0,favoriteCount:0,isVerified:!1,isBusiness:!1,businessInfo:null,preferences:{pushNotifications:!0,emailNotifications:!0,smsNotifications:!1,marketingEmails:!1},blockedUsers:[],following:[],followers:[],createdAt:ve(),lastLoginAt:ve()};return yield Be(c,d),l.user}catch(s){throw s}}),logout:()=>d(this,null,function*(){try{yield Me(Ze)}catch(e){throw e}}),updateUserProfile:c,updateAddress:(e,t,r)=>d(this,null,function*(){yield c({address:e,region:t,district:r})}),resetPassword:e=>d(this,null,function*(){try{yield Oe(Ze,e)}catch(t){throw t}}),updateMannerScore:(e,o)=>d(this,null,function*(){try{const i=ue(tt,"users",e);yield he(i,{mannerScore:o,updatedAt:ve()}),e===t.uid&&r(e=>l(s({},e),{mannerScore:o}))}catch(i){throw i}}),incrementTransactionCount:(e=null)=>d(this,null,function*(){try{const o=e||t.uid,i=ue(tt,"users",o);yield he(i,{transactionCount:me(1),updatedAt:ve()}),o===t.uid&&r(e=>l(s({},e),{transactionCount:e.transactionCount+1}))}catch(o){throw o}}),blockUser:(e,o=!0)=>d(this,null,function*(){try{if(!t.uid)throw new Error("로그인이 필요합니다.");const i=ue(tt,"users",t.uid),n={blockedUsers:o?Re(e):Te(e),updatedAt:ve()};yield he(i,n),r(t=>l(s({},t),{blockedUsers:o?[...t.blockedUsers,e]:t.blockedUsers.filter(t=>t!==e)}))}catch(i){throw i}}),followUser:(e,o=!0)=>d(this,null,function*(){try{if(!t.uid)throw new Error("로그인이 필요합니다.");const i=ue(tt,"users",t.uid),n=ue(tt,"users",e);yield he(i,{following:o?Re(e):Te(e),updatedAt:ve()}),yield he(n,{followers:o?Re(t.uid):Te(t.uid),updatedAt:ve()}),r(t=>l(s({},t),{following:o?[...t.following,e]:t.following.filter(t=>t!==e)}))}catch(i){throw i}}),getUserInfo:e=>d(this,null,function*(){try{const t=yield ye(ue(tt,"users",e));return t.exists()?s({id:e},t.data()):null}catch(t){throw t}}),checkNicknameAvailability:e=>d(this,null,function*(){try{const t=ge(de(tt,"users"),we("nickname","==",e));return(yield xe(t)).empty}catch(t){throw t}}),setAuthError:i};return p.jsx(mt.Provider,{value:g,children:e})}const ft=ee.header`
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
`,xt=ee.div`
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
`;ee.div`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  display: flex;
  align-items: center;
  gap: 4px;
`,ee.span`
  font-size: 18px;
  color: #888;
  margin-left: 2px;
`;const bt=ee.button`
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
`,vt=ee.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: #2ed8b6;
  border-radius: 50%;
`,yt=ee.span`
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
`,wt=ee.button`
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
`,kt=ee(wt)``;function jt({children:e}){const t=h(),{user:r,logout:o}=u.useContext(mt),[i,n]=u.useState(!1),a=u.useRef(null),[s,l]=u.useState({top:44,right:0});return u.useEffect(()=>{if(i&&a.current){const e=a.current.getBoundingClientRect();l({top:e.bottom+4,right:window.innerWidth-e.right})}},[i]),u.useEffect(()=>{const e=e=>{if(i&&a.current&&!a.current.contains(e.target)){const t=document.querySelector("[data-dropdown-menu]");t&&t.contains(e.target)||n(!1)}};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[i]),p.jsx(ft,{children:p.jsxs(xt,{children:[p.jsx("div",{style:{display:"flex",alignItems:"center",flex:1},children:p.jsx(yt,{style:{cursor:"pointer"},onClick:()=>t("/"),children:"ECHO"})}),p.jsxs("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:[e,p.jsx(bt,{ref:a,onClick:()=>n(e=>!e),"aria-label":"메뉴 열기/닫기",children:p.jsx("svg",{width:"22",height:"22",fill:"none",stroke:"#222",strokeWidth:"2",viewBox:"0 0 24 24",children:p.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})})}),i&&p.jsxs("div",{"data-dropdown-menu":!0,style:{position:"fixed",top:s.top,right:s.right,background:"#fff",border:"1.5px solid #eee",borderRadius:10,boxShadow:"0 8px 32px rgba(0,0,0,0.15)",zIndex:9999,minWidth:140,padding:"8px 0",display:"flex",flexDirection:"column"},onClick:e=>e.stopPropagation(),children:[p.jsx("button",{style:{padding:"10px 18px",background:"none",border:"none",color:"#1a4740",fontWeight:600,fontSize:16,textAlign:"left",cursor:"pointer"},onClick:()=>{n(!1),t("/tuner/guitar")},children:"🎸 기타 튜너"}),p.jsx("button",{style:{padding:"10px 18px",background:"none",border:"none",color:"#1a4740",fontWeight:600,fontSize:16,textAlign:"left",cursor:"pointer"},onClick:()=>{n(!1),t("/tuner/bass")},children:"🎸 베이스 튜너"})]}),p.jsx(bt,{children:p.jsx(m,{size:20})}),p.jsxs(bt,{style:{position:"relative"},children:[p.jsx(g,{size:20}),p.jsx(vt,{})]}),r.isLoggedIn?p.jsx(kt,{onClick:()=>{o(),t("/")},children:"로그아웃"}):p.jsx(wt,{onClick:()=>t("/login"),children:"로그인"})]})]})})}ee.button`
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
`;const Ct=class e{constructor(){this.isDevelopment=!1,this.isProduction=!0,this.logs=[],this.maxLogs=1e3}get currentLevel(){return this.isDevelopment?e.LEVELS.DEBUG:e.LEVELS.INFO}_log(t,r,o=null,i="general"){const n={timestamp:(new Date).toISOString(),level:t,message:r,data:o,category:i,url:window.location.href,userAgent:navigator.userAgent,sessionId:this._getSessionId()};return this.logs.push(n),this.logs.length>this.maxLogs&&this.logs.shift(),this.isDevelopment&&this._consoleLog(t,r,o,i),this.isProduction&&t<=e.LEVELS.WARN&&this._sendToExternalService(n),n}_consoleLog(t,r,o,i){e.LEVELS.ERROR,e.LEVELS.WARN,e.LEVELS.INFO,e.LEVELS.DEBUG}_sendToExternalService(e){return d(this,null,function*(){try{if(window.db){const{collection:t,addDoc:r}=yield Ke(()=>d(this,null,function*(){const{collection:e,addDoc:t}=yield import("./vendor-firebase-Cl2QMYMN.js").then(e=>e.W);return{collection:e,addDoc:t}}),__vite__mapDeps([0,1]));yield r(t(window.db,"logs"),l(s({},e),{processed:!1}))}}catch(t){}})}_getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sessionId")||`session_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,sessionStorage.setItem("sessionId",this.sessionId)),this.sessionId}error(t,r=null,o="error"){return this._log(e.LEVELS.ERROR,t,r,o)}warn(t,r=null,o="warning"){return this._log(e.LEVELS.WARN,t,r,o)}info(t,r=null,o="info"){return this._log(e.LEVELS.INFO,t,r,o)}debug(t,r=null,o="debug"){return this._log(e.LEVELS.DEBUG,t,r,o)}userAction(e,t=null){return this.info(`User action: ${e}`,t,"user_action")}apiCall(t,r,o,i,n=null){const a=`API ${t} ${r} - ${o} (${i}ms)`,s=o>=400?e.LEVELS.ERROR:e.LEVELS.INFO;return this._log(s,a,n,"api")}performance(e,t,r=null){return this.info(`Performance: ${e} = ${t}`,r,"performance")}security(e,t=null){return this.warn(`Security event: ${e}`,t,"security")}business(e,t=null){return this.info(`Business event: ${e}`,t,"business")}exportLogs(e=null,t=null){let r=this.logs;return null!==e&&(r=r.filter(t=>t.level<=e)),t&&(r=r.filter(e=>e.category===t)),r}clearLogs(){this.logs=[]}getStats(){const e={total:this.logs.length,byLevel:{},byCategory:{},sessionId:this.sessionId};return this.logs.forEach(t=>{const r=["ERROR","WARN","INFO","DEBUG"][t.level];e.byLevel[r]=(e.byLevel[r]||0)+1,e.byCategory[t.category]=(e.byCategory[t.category]||0)+1}),e}};c(Ct,"LEVELS",{ERROR:0,WARN:1,INFO:2,DEBUG:3});const Et=new Ct;Et.isDevelopment&&(window.logger=Et);const St=new class{constructor(){this.messaging=null,this.currentToken=null,this.isSupported=!1,this.isInitialized=!1,this.subscriptions=new Map,this.notificationQueue=[],this.init()}init(){return d(this,null,function*(){try{if(!("serviceWorker"in navigator)||!("Notification"in window))return;if(!(yield navigator.serviceWorker.ready))return;this.messaging=We(Xe),this.isSupported=!0,this.isInitialized=!0,this.setupMessageListener(),Et.info("FCM Manager initialized successfully")}catch(e){Et.error("FCM initialization failed",e)}})}requestPermission(){return d(this,null,function*(){try{if(!this.isSupported)throw new Error("FCM not supported");return"granted"===Notification.permission||("denied"===Notification.permission?(Et.warn("Notification permission denied"),!1):"granted"===(yield Notification.requestPermission())?(Et.info("Notification permission granted"),yield this.generateToken(),!0):(Et.warn("Notification permission denied by user"),!1))}catch(e){return Et.error("Failed to request notification permission",e),!1}})}generateToken(){return d(this,null,function*(){try{if(!this.messaging)throw new Error("FCM not initialized");const e=void 0;if(!e)return null;const t=yield He(this.messaging,{vapidKey:e,serviceWorkerRegistration:yield navigator.serviceWorker.ready});return t?(this.currentToken=t,Et.info("FCM token generated",{tokenPreview:t.substring(0,20)+"..."}),yield this.saveTokenToServer(t),t):(Et.warn("No FCM token available"),null)}catch(e){return Et.error("Failed to generate FCM token",e),null}})}saveTokenToServer(e){return d(this,null,function*(){try{const t=yield fetch("/api/fcm/token",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("authToken")}`},body:JSON.stringify({token:e,userId:localStorage.getItem("userId"),deviceInfo:{userAgent:navigator.userAgent,platform:navigator.platform,language:navigator.language,timestamp:(new Date).toISOString()}})});t.ok?Et.info("FCM token saved to server"):Et.error("Failed to save FCM token to server",yield t.text())}catch(t){Et.error("Error saving FCM token to server",t)}})}setupMessageListener(){this.messaging&&Ye(this.messaging,e=>{Et.info("Foreground message received",e);const{notification:t,data:r}=e;this.handleForegroundMessage(t,r),this.notifySubscribers("message",{notification:t,data:r})})}handleForegroundMessage(e,t){document.hasFocus()?this.showInAppNotification(e,t):this.showBrowserNotification(e,t)}showInAppNotification(e,t){const r={id:Date.now().toString(),title:(null==e?void 0:e.title)||"ECHO",body:(null==e?void 0:e.body)||"새로운 알림이 있습니다.",type:(null==t?void 0:t.type)||"info",data:t||{},timestamp:(new Date).toISOString(),read:!1};this.notifySubscribers("inAppNotification",r),this.addToNotificationQueue(r)}showBrowserNotification(e,t){return d(this,null,function*(){if("granted"===Notification.permission)try{const r={body:(null==e?void 0:e.body)||"새로운 알림이 있습니다.",icon:(null==e?void 0:e.icon)||"/icon-192x192.svg",badge:"/icon-192x192.svg",tag:(null==t?void 0:t.tag)||"echo-notification",data:t||{},requireInteraction:!1,silent:!1};if(null==t?void 0:t.type)switch(t.type){case"chat_message":r.tag=`chat_${t.chatRoomId}`,r.requireInteraction=!0;break;case"payment_success":r.tag=`payment_${t.orderId}`,r.requireInteraction=!0;break;case"product_interest":r.tag=`product_${t.productId}`}const o=new Notification((null==e?void 0:e.title)||"ECHO",r);o.onclick=()=>{this.handleNotificationClick(t),o.close()},setTimeout(()=>{o.close()},5e3)}catch(r){Et.error("Failed to show browser notification",r)}})}handleNotificationClick(e){window.focus();const t=new CustomEvent("fcm-notification-click",{detail:{data:e}});window.dispatchEvent(t)}subscribe(e,t){return this.subscriptions.has(e)||this.subscriptions.set(e,new Set),this.subscriptions.get(e).add(t),()=>{const r=this.subscriptions.get(e);r&&r.delete(t)}}notifySubscribers(e,t){const r=this.subscriptions.get(e);r&&r.forEach(e=>{try{e(t)}catch(r){Et.error("Subscriber callback error",r)}})}addToNotificationQueue(e){this.notificationQueue.push(e),this.notificationQueue.length>50&&(this.notificationQueue=this.notificationQueue.slice(-50));try{localStorage.setItem("echo_notification_queue",JSON.stringify(this.notificationQueue))}catch(t){Et.error("Failed to save notification queue",t)}}loadNotificationQueue(){try{const e=localStorage.getItem("echo_notification_queue");e&&(this.notificationQueue=JSON.parse(e))}catch(e){Et.error("Failed to load notification queue",e),this.notificationQueue=[]}}getUnreadNotificationCount(){return this.notificationQueue.filter(e=>!e.read).length}markNotificationAsRead(e){const t=this.notificationQueue.find(t=>t.id===e);if(t){t.read=!0;try{localStorage.setItem("echo_notification_queue",JSON.stringify(this.notificationQueue))}catch(r){Et.error("Failed to update notification queue",r)}this.notifySubscribers("notificationRead",{notificationId:e})}}markAllNotificationsAsRead(){this.notificationQueue.forEach(e=>{e.read=!0});try{localStorage.setItem("echo_notification_queue",JSON.stringify(this.notificationQueue))}catch(e){Et.error("Failed to update notification queue",e)}this.notifySubscribers("allNotificationsRead")}sendNotification(e,t){return d(this,null,function*(){try{const r=yield fetch("/api/fcm/send",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("authToken")}`},body:JSON.stringify({type:e,data:t,timestamp:(new Date).toISOString()})});return r.ok?(Et.info("Notification sent successfully",{type:e,data:t}),!0):(Et.error("Failed to send notification",yield r.text()),!1)}catch(r){return Et.error("Error sending notification",r),!1}})}getStatus(){return{isSupported:this.isSupported,isInitialized:this.isInitialized,hasToken:!!this.currentToken,permission:Notification.permission,unreadCount:this.getUnreadNotificationCount(),queueLength:this.notificationQueue.length}}refreshToken(){return d(this,null,function*(){this.currentToken&&(yield this.generateToken())})}disable(){return d(this,null,function*(){try{this.currentToken&&(yield this.deleteTokenFromServer(this.currentToken),this.currentToken=null),this.subscriptions.clear(),this.notificationQueue=[],localStorage.removeItem("echo_notification_queue"),Et.info("FCM disabled successfully")}catch(e){Et.error("Failed to disable FCM",e)}})}deleteTokenFromServer(e){return d(this,null,function*(){try{(yield fetch("/api/fcm/token",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("authToken")}`},body:JSON.stringify({token:e})})).ok?Et.info("FCM token deleted from server"):Et.error("Failed to delete FCM token from server")}catch(t){Et.error("Error deleting FCM token from server",t)}})}},It="chat_message",_t="payment_success",At="payment_failed",Pt="product_interest",Nt="price_drop",zt=(e,t)=>St.subscribe(e,t),Lt=u.createContext(),Dt=()=>{const e=u.useContext(Lt);if(!e)throw new Error("useToast must be used within a ToastProvider");return e};function $t({children:e}){const[t,r]=u.useState([]),o=u.useCallback(e=>{const t=Date.now()+Math.random(),o=s({id:t,type:"info",duration:5e3},e);return r(e=>[...e,o]),t},[]),i=u.useCallback(e=>{r(t=>t.filter(t=>t.id!==e))},[]),n=u.useCallback(()=>{r([])},[]),a=u.useCallback((e,t={})=>o(s({type:"success",message:e},t)),[o]),l=u.useCallback((e,t={})=>o(s({type:"error",message:e,duration:7e3},t)),[o]),c=u.useCallback((e,t={})=>o(s({type:"warning",message:e},t)),[o]),d=u.useCallback((e,t={})=>o(s({type:"info",message:e},t)),[o]),h={toasts:t,addToast:o,removeToast:i,clearToasts:n,showSuccess:a,showError:l,showWarning:c,showInfo:d};return p.jsx(Lt.Provider,{value:h,children:e})}const Rt=u.createContext();function Tt({children:e}){const{user:t}=u.useContext(mt),{showInfo:r,showSuccess:o}=Dt(),i=h(),[n,a]=u.useState({isSupported:!1,isInitialized:!1,hasToken:!1,permission:"default",unreadCount:0,queueLength:0}),[c,m]=u.useState([]),[g,f]=u.useState(!1),x=u.useCallback(e=>{const t="ECHO - 악기 공유 플랫폼";document.title=e>0?`(${e}) ${t}`:t},[]),b=u.useCallback(()=>{const e=St.getStatus();a(e),e.unreadCount!==n.unreadCount&&x(e.unreadCount)},[n.unreadCount,x]),v=u.useCallback(()=>d(this,null,function*(){try{const e=yield St.requestPermission();return e?(o("알림이 활성화되었습니다!",{title:"알림 설정 완료"}),setTimeout(()=>{"granted"===Notification.permission&&new Notification("ECHO 알림이 활성화되었습니다! 🎉",{body:"이제 중요한 메시지와 거래 소식을 실시간으로 받아보실 수 있어요.",icon:"/icon-192x192.svg",badge:"/icon-192x192.svg",tag:"welcome-notification",requireInteraction:!1})},1e3)):r("알림을 허용하시면 중요한 소식을 놓치지 않을 수 있어요",{title:"알림 허용",action:{text:"다시 시도",onClick:v}}),b(),e}catch(e){return Et.error("Failed to request notification permission",e),!1}}),[o,r,b]),y=u.useCallback(e=>{const{type:t,chatRoomId:r,productId:o,orderId:n,url:a}=e;let s="/";switch(t){case It:s=r?`/chat/${r}`:"/chat";break;case _t:case At:n?s=`/orders/${n}`:o&&(s=`/product/${o}`);break;case Pt:case Nt:o&&(s=`/product/${o}`);break;case"order_update":n&&(s=`/orders/${n}`);break;default:s=a||"/"}i(s),Et.userAction("Notification clicked",{type:t,targetUrl:s,data:Object.keys(e)})},[i]),w=u.useCallback(e=>{m(t=>[e,...t.slice(0,9)]);const{title:t,body:o,type:i,data:n}=e;r(o,{title:t,duration:i===It?8e3:5e3,action:{text:"보기",onClick:()=>y(n)}}),b()},[r,y,b]);u.useEffect(()=>{const e=zt("statusUpdate",b),t=zt("inAppNotification",w),r=zt("notificationRead",b),o=zt("allNotificationsRead",b),i=e=>{y(e.detail.data)};return window.addEventListener("fcm-notification-click",i),b(),()=>{e(),t(),r(),o(),window.removeEventListener("fcm-notification-click",i)}},[b,w,y]),u.useEffect(()=>{if(t.isLoggedIn&&!g){const e=setTimeout(()=>{"default"===Notification.permission&&(f(!0),r("알림을 허용하시면 새로운 메시지와 거래 소식을 실시간으로 받을 수 있어요!",{title:"알림 허용",duration:1e4,action:{text:"허용하기",onClick:v}}))},5e3);return()=>clearTimeout(e)}},[t.isLoggedIn,g,r,v]),u.useEffect(()=>{const e=()=>{b()},t=()=>{document.hidden||b()};return window.addEventListener("focus",e),document.addEventListener("visibilitychange",t),()=>{window.removeEventListener("focus",e),document.removeEventListener("visibilitychange",t)}},[b]);const k=u.useCallback((e,t,r)=>d(this,null,function*(){return yield St.sendNotification(It,{chatRoomId:e,message:t,senderName:r,title:`${r}님의 메시지`,body:t.length>50?t.substring(0,50)+"...":t})}),[]),j=u.useCallback((e,t,r=!0)=>d(this,null,function*(){const o=r?_t:At,i=r?"결제 완료":"결제 실패",n=r?`${t} 결제가 완료되었습니다.`:`${t} 결제에 실패했습니다.`;return yield St.sendNotification(o,{orderId:e,productTitle:t,title:i,body:n})}),[]),C=u.useCallback((e,t,r)=>d(this,null,function*(){return yield St.sendNotification(Pt,{productId:e,productTitle:t,interestedUserName:r,title:"상품 관심 표시",body:`${r}님이 "${t}"에 관심을 표시했습니다.`})}),[]),E=u.useCallback((e,t,r,o)=>d(this,null,function*(){return yield St.sendNotification(Nt,{productId:e,productTitle:t,oldPrice:r,newPrice:o,title:"가격 인하 알림",body:`"${t}" 가격이 ${r.toLocaleString()}원에서 ${o.toLocaleString()}원으로 인하되었습니다!`})}),[]),S=u.useCallback(e=>{var t;t=e,St.markNotificationAsRead(t),m(t=>t.map(t=>t.id===e?l(s({},t),{read:!0}):t)),b()},[b]),I=u.useCallback(()=>{St.markAllNotificationsAsRead(),m(e=>e.map(e=>l(s({},e),{read:!0}))),b()},[b]),_=u.useCallback(()=>d(this,null,function*(){"granted"===n.permission?r("알림을 끄시려면 브라우저 설정에서 이 사이트의 알림을 차단해주세요.",{title:"알림 설정"}):yield v()}),[n.permission,r,v]),A={notificationStatus:n,notifications:c,unreadCount:n.unreadCount,requestPermission:v,toggleNotifications:_,markAsRead:S,markAllAsRead:I,sendChatNotification:k,sendPaymentNotification:j,sendProductInterestNotification:C,sendPriceDropNotification:E,isSupported:n.isSupported,isEnabled:"granted"===n.permission,hasUnreadNotifications:n.unreadCount>0};return p.jsx(Rt.Provider,{value:A,children:e})}function Ot(){return u.useContext(Rt)||{notificationStatus:{isSupported:!1,isInitialized:!1,hasToken:!1,permission:"default",unreadCount:0,queueLength:0},notifications:[],unreadCount:0,requestPermission:()=>Promise.resolve(!1),toggleNotifications:()=>Promise.resolve(),markAsRead:()=>{},markAllAsRead:()=>{},sendChatNotification:()=>Promise.resolve(),sendPaymentNotification:()=>Promise.resolve(),sendProductInterestNotification:()=>Promise.resolve(),sendPriceDropNotification:()=>Promise.resolve(),isSupported:!1,isEnabled:!1,hasUnreadNotifications:!1}}const Mt=ee.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: ${e=>e.isEnabled?"linear-gradient(135deg, #10b981, #059669)":"linear-gradient(135deg, #3b82f6, #2563eb)"};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Vt=ee.span`
  font-size: 16px;
`,Ut=ee.span`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
`;function Ft(){const{isSupported:e,isEnabled:t,unreadCount:r,requestPermission:o,toggleNotifications:i}=Ot();return e?p.jsxs(Mt,{onClick:()=>{t?i():o()},isEnabled:t,children:[p.jsx(Vt,{children:t?"🔔":"🔕"}),t?p.jsxs(p.Fragment,{children:["알림 ON",r>0&&p.jsx(Ut,{children:r>99?"99+":r})]}):"알림 허용"]}):null}const Bt=ee.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: var(--shadow-sm);
`,Qt=ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,qt=ee.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
`,Wt=ee.button`
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
  }
`,Ht=ee.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Yt=ee.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Gt=ee.label`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
`,Jt=ee.select`
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: white;
  font-size: 14px;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,Kt=ee.input`
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 14px;
  color: var(--color-text-primary);
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
`,Xt=ee.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Zt=ee(Kt)`
  flex: 1;
`,er=ee.span`
  font-size: 14px;
  color: var(--color-text-secondary);
`,tr=ee.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--color-bg-secondary);
  border-radius: 8px;
  margin-bottom: 16px;
`,rr=ee.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
`,or=ee.button`
  padding: 6px 12px;
  border: 1px solid ${e=>e.active?"var(--color-primary)":"var(--color-border)"};
  background: ${e=>e.active?"var(--color-primary)":"white"};
  color: ${e=>e.active?"white":"var(--color-text-primary)"};
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,ir=ee.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: var(--color-primary);
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`,nr=ee.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`;function ar({filters:e,onFiltersChange:t,sortBy:r,onSortChange:o,showActiveFilters:i=!0}){const[n,a]=u.useState(!1),c=u.useCallback((r,o)=>{t(l(s({},e),{[r]:o}))},[e,t]),d=u.useCallback(r=>{const o=s({},e);delete o[r],t(o)},[e,t]),h=u.useCallback(()=>{t({})},[t]),m=e=>new Intl.NumberFormat("ko-KR").format(e),g=(()=>{var t,r;const o=[];if(e.category){const r=(null==(t=at.find(t=>t.value===e.category))?void 0:t.label)||e.category;o.push({key:"category",label:`카테고리: ${r}`,value:e.category})}if(e.region){const t=(null==(r=st.find(t=>t.value===e.region))?void 0:r.label)||e.region;o.push({key:"region",label:`지역: ${t}`,value:e.region})}if(e.condition){const t={new:"새상품",like_new:"거의 새것",good:"상태 좋음",fair:"사용감 있음"};o.push({key:"condition",label:`상태: ${t[e.condition]}`,value:e.condition})}if(e.minPrice||e.maxPrice){const t=e.minPrice?m(e.minPrice):"0",r=e.maxPrice?m(e.maxPrice):"무제한";o.push({key:"price",label:`가격: ${t}원 - ${r}원`,value:"price_range"})}return void 0!==e.delivery&&o.push({key:"delivery",label:e.delivery?"배송 가능":"직거래만",value:e.delivery}),o})();return p.jsxs(p.Fragment,{children:[p.jsxs(tr,{children:[p.jsxs(rr,{children:[p.jsx(f,{}),"정렬"]}),[{key:"latest",label:"최신순"},{key:"oldest",label:"오래된순"},{key:"price_low",label:"낮은 가격순"},{key:"price_high",label:"높은 가격순"},{key:"views",label:"조회수순"},{key:"likes",label:"찜하기순"}].map(e=>p.jsx(or,{active:r===e.key,onClick:()=>o(e.key),children:e.label},e.key))]}),i&&g.length>0&&p.jsxs(nr,{children:[g.map(e=>p.jsxs(ir,{children:[e.label,p.jsx(x,{style:{cursor:"pointer"},onClick:()=>{"price"===e.key?(c("minPrice",""),c("maxPrice","")):d(e.key)}})]},e.key)),p.jsx(Wt,{onClick:h,children:"전체 해제"})]}),p.jsxs(Bt,{children:[p.jsxs(Qt,{children:[p.jsxs(qt,{children:[p.jsx(b,{}),"필터",p.jsx(v,{style:{transform:n?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease",cursor:"pointer",fontSize:"12px"},onClick:()=>a(!n)})]}),g.length>0&&p.jsx(Wt,{onClick:h,children:"모두 지우기"})]}),n&&p.jsxs(Ht,{children:[p.jsxs(Yt,{children:[p.jsx(Gt,{children:"카테고리"}),p.jsxs(Jt,{value:e.category||"",onChange:e=>c("category",e.target.value),children:[p.jsx("option",{value:"",children:"전체 카테고리"}),at.map(e=>p.jsx("option",{value:e.value,children:e.label},e.value))]})]}),p.jsxs(Yt,{children:[p.jsx(Gt,{children:"지역"}),p.jsxs(Jt,{value:e.region||"",onChange:e=>c("region",e.target.value),children:[p.jsx("option",{value:"",children:"전체 지역"}),st.map(e=>p.jsx("option",{value:e.value,children:e.label},e.value))]})]}),p.jsxs(Yt,{children:[p.jsx(Gt,{children:"상품 상태"}),p.jsxs(Jt,{value:e.condition||"",onChange:e=>c("condition",e.target.value),children:[p.jsx("option",{value:"",children:"전체 상태"}),p.jsx("option",{value:"new",children:"새상품"}),p.jsx("option",{value:"like_new",children:"거의 새것"}),p.jsx("option",{value:"good",children:"상태 좋음"}),p.jsx("option",{value:"fair",children:"사용감 있음"})]})]}),p.jsxs(Yt,{children:[p.jsx(Gt,{children:"배송 옵션"}),p.jsxs(Jt,{value:void 0===e.delivery?"":e.delivery.toString(),onChange:e=>{const t=e.target.value;c("delivery",""===t?void 0:"true"===t)},children:[p.jsx("option",{value:"",children:"전체"}),p.jsx("option",{value:"true",children:"배송 가능"}),p.jsx("option",{value:"false",children:"직거래만"})]})]}),p.jsxs(Yt,{children:[p.jsx(Gt,{children:"가격 범위"}),p.jsxs(Xt,{children:[p.jsx(Zt,{type:"number",placeholder:"최소 가격",value:e.minPrice||"",onChange:e=>c("minPrice",e.target.value)}),p.jsx(er,{children:"~"}),p.jsx(Zt,{type:"number",placeholder:"최대 가격",value:e.maxPrice||"",onChange:e=>c("maxPrice",e.target.value)})]})]}),p.jsxs(Yt,{children:[p.jsx(Gt,{children:"키워드 검색"}),p.jsx(Kt,{type:"text",placeholder:"브랜드, 모델명 등",value:e.keyword||"",onChange:e=>c("keyword",e.target.value)})]})]})]})]})}function sr({title:e="ECHO - 악기 공유 플랫폼",description:t="중고 악기 거래부터 악기 대여까지, ECHO에서 나만의 음악 여정을 시작하세요. 기타, 피아노, 드럼 등 다양한 악기를 안전하고 편리하게 거래할 수 있습니다.",keywords:r="중고악기, 악기거래, 악기대여, 기타, 피아노, 드럼, 바이올린, 악기공유, 음악장비",url:o="https://echo-music.vercel.app",image:i="https://echo-music.vercel.app/og-image.jpg",type:n="website",author:a="ECHO Team",robots:s="index, follow",canonical:l,structuredData:c}){const d=e.includes("ECHO")?e:`${e} | ECHO - 악기 공유 플랫폼`,u=o.startsWith("http")?o:`https://echo-music.vercel.app${o}`,h=l||u,m=c||{"@context":"https://schema.org","@type":"WebSite",name:"ECHO",description:t,url:"https://echo-music.vercel.app",potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://echo-music.vercel.app/?search={search_term_string}"},"query-input":"required name=search_term_string"},publisher:{"@type":"Organization",name:"ECHO",url:"https://echo-music.vercel.app",logo:{"@type":"ImageObject",url:"https://echo-music.vercel.app/icon-192x192.svg"}}};return p.jsxs(y,{children:[p.jsx("title",{children:d}),p.jsx("meta",{name:"description",content:t}),p.jsx("meta",{name:"keywords",content:r}),p.jsx("meta",{name:"author",content:a}),p.jsx("meta",{name:"robots",content:s}),p.jsx("link",{rel:"canonical",href:h}),p.jsx("meta",{property:"og:type",content:n}),p.jsx("meta",{property:"og:title",content:d}),p.jsx("meta",{property:"og:description",content:t}),p.jsx("meta",{property:"og:url",content:u}),p.jsx("meta",{property:"og:image",content:i}),p.jsx("meta",{property:"og:image:alt",content:e}),p.jsx("meta",{property:"og:site_name",content:"ECHO"}),p.jsx("meta",{property:"og:locale",content:"ko_KR"}),p.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),p.jsx("meta",{name:"twitter:title",content:d}),p.jsx("meta",{name:"twitter:description",content:t}),p.jsx("meta",{name:"twitter:image",content:i}),p.jsx("meta",{name:"twitter:image:alt",content:e}),p.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=5.0"}),p.jsx("meta",{name:"theme-color",content:"#3b82f6"}),p.jsx("meta",{name:"msapplication-TileColor",content:"#3b82f6"}),p.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),p.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"true"}),p.jsx("link",{rel:"preconnect",href:"https://firebasestorage.googleapis.com"}),p.jsx("link",{rel:"dns-prefetch",href:"https://www.gstatic.com"}),p.jsx("link",{rel:"manifest",href:"/manifest.json"}),p.jsx("meta",{name:"mobile-web-app-capable",content:"yes"}),p.jsx("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),p.jsx("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),p.jsx("meta",{name:"apple-mobile-web-app-title",content:"ECHO"}),p.jsx("link",{rel:"icon",type:"image/svg+xml",href:"/icon-192x192.svg"}),p.jsx("link",{rel:"apple-touch-icon",href:"/icon-192x192.svg"}),p.jsx("script",{type:"application/ld+json",children:JSON.stringify(m)}),p.jsx("meta",{name:"format-detection",content:"telephone=no"}),p.jsx("meta",{name:"google",content:"notranslate"}),p.jsx("meta",{name:"referrer",content:"origin-when-cross-origin"})]})}function lr({query:e,category:t,resultCount:r}){const o=e?`"${e}" 검색 결과 - ${r}개 상품`:t?`${t} 악기 - ${r}개 상품`:`중고 악기 검색 결과 - ${r}개 상품`,i=`${e||t||"중고 악기"} 관련 ${r}개의 상품을 찾았습니다. ECHO에서 원하는 악기를 찾아보세요.`,n=e?`/?search=${encodeURIComponent(e)}`:t?`/?category=${t}`:"/";return p.jsx(sr,{title:o,description:i,url:n,robots:"noindex, nofollow"})}const cr=[{title:"야마하 FG800 통기타",description:"2021년 구매한 야마하 FG800 통기타입니다. 집에서만 연습용으로 사용했습니다. 생활기스 약간 있지만 소리는 깨끗합니다. 오리지널 소프트케이스 포함해서 드립니다. 서울 마포구에서 직거래만 원해요.",price:23e4,category:"guitar",condition:"good",region:"서울",district:"마포구",images:["https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=500&q=80","https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["야마하","통기타","FG800","어쿠스틱"],brand:"야마하",model:"FG800",isPriceNegotiable:!0,sellerNickname:"기타러버",showPhoneNumber:!0,sellerPhone:"01012345678",sellerVerified:!0},{title:"롤랜드 TD-1KV 전자드럼 세트",description:"2020년에 구매한 롤랜드 TD-1KV 전자드럼입니다. 집에서 연습용으로만 사용해서 상태 좋습니다. 모든 패드 정상 작동하고, 킥 페달도 부드럽게 잘 됩니다. 드럼 스틱, 헤드폰 포함해서 드려요. 부평역 근처에서 직거래만 가능합니다.",price:42e4,category:"drums",condition:"like-new",region:"인천",district:"부평구",images:["https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=500&q=80"],tags:["롤랜드","전자드럼","TD-1KV","드럼세트"],brand:"롤랜드",model:"TD-1KV",isPriceNegotiable:!1,sellerNickname:"드러머",showPhoneNumber:!0,sellerPhone:"01098765432",sellerVerified:!0},{title:"펜더 Player 텔레캐스터 일렉기타",description:"2019년 구매한 펜더 Player 시리즈 텔레캐스터입니다. 바디에 미세한 스크래치가 있지만 연주에는 전혀 문제 없습니다. 픽업 교체한 적 없고, 넥 상태도 매우 좋습니다. 오리지널 소프트케이스 포함. 부산 서면에서 직거래 희망합니다.",price:75e4,category:"guitar",condition:"good",region:"부산",district:"부산진구",images:["https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=500&q=80"],tags:["펜더","텔레캐스터","일렉기타","Player"],brand:"펜더",model:"Player Telecaster",isPriceNegotiable:!0,sellerNickname:"록커",showPhoneNumber:!0,sellerPhone:"01055556666",sellerVerified:!0},{title:"카시오 CT-X700 전자키보드",description:"거의 사용하지 않은 카시오 CT-X700 전자키보드입니다. 61건반, 600가지 음색, 195가지 리듬 지원됩니다. 어댑터, 보면대 포함하고 박스도 있어요. 대구 동구에서 직거래만 가능합니다.",price:18e4,category:"keyboard",condition:"like-new",region:"대구",district:"동구",images:["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80"],tags:["카시오","키보드","CT-X700","전자피아노"],brand:"카시오",model:"CT-X700",isPriceNegotiable:!0,sellerNickname:"피아니스트",showPhoneNumber:!0,sellerPhone:"01077778888",sellerVerified:!0},{title:"알토 색소폰 야나기사와 A-WO1",description:"야나기사와 A-WO1 알토 색소폰입니다. 2018년 구매, 동호회에서 가끔 사용했습니다. 정기적으로 수리점에서 점검받았고 상태 매우 양호합니다. 하드케이스, 마우스피스, 리드, 스트랩 모두 포함. 광주 서구 직거래.",price:12e5,category:"wind",condition:"good",region:"광주",district:"서구",images:["https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=500&q=80"],tags:["야나기사와","색소폰","알토색소폰","A-WO1"],brand:"야나기사와",model:"A-WO1",isPriceNegotiable:!0,sellerNickname:"재즈러버",showPhoneNumber:!0,sellerPhone:"01099990000",sellerVerified:!0},{title:"마샬 DSL40CR 기타 앰프",description:"마샬 DSL40CR 40W 진공관 앰프입니다. 2020년 구매, 집에서 연습용으로 사용했습니다. 클린톤과 드라이브톤 모두 훌륭하고 리버브도 좋습니다. 풋스위치 포함. 서울 강남구에서 직거래만 가능해요.",price:52e4,category:"audio",condition:"good",region:"서울",district:"강남구",images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["마샬","앰프","DSL40CR","진공관앰프"],brand:"마샬",model:"DSL40CR",isPriceNegotiable:!1,sellerNickname:"앰프매니아",showPhoneNumber:!0,sellerPhone:"01044445555",sellerVerified:!0},{title:"바이올린 4/4 독일제 수제품",description:"독일에서 직접 가져온 4/4 바이올린입니다. 수제품으로 소리가 정말 좋습니다. 활, 케이스, 턱받침 모두 포함되어 있고 상태 매우 좋아요. 서울 종로구에서 직거래 희망합니다.",price:68e4,category:"string",condition:"like-new",region:"서울",district:"종로구",images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["바이올린","독일제","수제품","4/4"],brand:"독일 수제품",model:"4/4 바이올린",isPriceNegotiable:!0,sellerNickname:"바이올리니스트",showPhoneNumber:!0,sellerPhone:"01066667777",sellerVerified:!0},{title:"우쿨렐레 카마카 HF-1 하와이안 코아",description:"정품 카마카 HF-1 콘서트 우쿨렐레입니다. 하와이안 코아 원목으로 만들어진 프리미엄 모델입니다. 2019년 구매, 케이스 포함해서 드려요. 톤이 정말 좋고 상태도 완벽합니다. 대전 유성구 직거래만.",price:32e4,category:"string",condition:"like-new",region:"대전",district:"유성구",images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"],tags:["카마카","우쿨렐레","HF-1","하와이안코아"],brand:"카마카",model:"HF-1",isPriceNegotiable:!1,sellerNickname:"우쿨러버",showPhoneNumber:!0,sellerPhone:"01033334444",sellerVerified:!0}],dr=["기타러버","드러머","록커","피아니스트","재즈러버","앰프매니아","바이올리니스트","우쿨러버","음악매니아","연주자","뮤지션","하모니","멜로디","리듬","비트","코드","소울","블루스","클래식러버"],ur=u.createContext();function pr({children:e}){const[t,r]=u.useState([]),[o,i]=u.useState(!0),[n,a]=u.useState(null),[c,h]=u.useState(!0),[m,g]=u.useState(null),[f,x]=u.useState({category:"",region:"",priceMin:"",priceMax:"",condition:"",sortBy:"latest",searchQuery:""}),[b,v]=u.useState([]),[y,w]=u.useState([]),{user:k}=u.useContext(mt),j=u.useCallback((e=!1)=>d(this,null,function*(){try{i(!0),a(null);const t=l(s({},f),{pageSize:20,lastDoc:e?null:m}),o=yield lt.getProducts(t);let n=o.products;0===o.products.length&&e&&(n=cr.map((e,t)=>l(s({id:`dummy_${t}`},e),{viewCount:Math.floor(100*Math.random())+1,likeCount:Math.floor(20*Math.random())+1,chatCount:Math.floor(10*Math.random())+1,status:"active",createdAt:new Date(Date.now()-1e3*Math.random()*60*60*24*7),sellerId:`dummy_seller_${t}`,sellerNickname:dr[t%dr.length],isDeliveryAvailable:Math.random()>.5,deliveryFee:Math.random()>.5?Math.floor(1e4*Math.random())+3e3:0}))),r(e?n:e=>[...e,...n]),h(o.hasMore||n.length>0),g(o.lastDoc)}catch(t){a(t.message||"상품을 불러오는데 실패했습니다.")}finally{i(!1)}}),[f,m]);u.useEffect(()=>{g(null),j(!0)},[j]),u.useEffect(()=>{g(null),j(!0)},[f.category,f.region,f.priceMin,f.priceMax,f.condition,f.sortBy,j]),u.useEffect(()=>{f.searchQuery.trim()&&(g(null),j(!0))},[f.searchQuery,j]);const C=u.useCallback(()=>{!o&&c&&j(!1)},[o,c,j]);u.useEffect(()=>{const e=dt.subscribeToProducts(e=>{r(t=>{let r=[...e].sort((e,t)=>{var r,o,i,n;const a=(null==(o=null==(r=e.createdAt)?void 0:r.toDate)?void 0:o.call(r))||new Date(e.createdAt)||new Date;return((null==(n=null==(i=t.createdAt)?void 0:i.toDate)?void 0:n.call(i))||new Date(t.createdAt)||new Date)-a});if(f.category&&(r=r.filter(e=>e.category===f.category)),f.region&&(r=r.filter(e=>e.region===f.region)),f.condition&&(r=r.filter(e=>e.condition===f.condition)),f.priceMin&&(r=r.filter(e=>e.price>=parseInt(f.priceMin))),f.priceMax&&(r=r.filter(e=>e.price<=parseInt(f.priceMax))),f.searchQuery&&f.searchQuery.trim()){const e=f.searchQuery.toLowerCase();r=r.filter(t=>{var r,o;return(null==(r=t.title)?void 0:r.toLowerCase().includes(e))||(null==(o=t.description)?void 0:o.toLowerCase().includes(e))})}switch(r=r.filter(e=>e.status!==nt.DELETED&&e.status!==nt.SUSPENDED),f.sortBy){case"price_low":r.sort((e,t)=>e.price-t.price);break;case"price_high":r.sort((e,t)=>t.price-e.price);break;case"popular":r.sort((e,t)=>(t.likeCount||0)-(e.likeCount||0))}return r})},{category:f.category});return()=>{e()}},[f]);const E=u.useCallback((e=null)=>d(this,null,function*(){try{const t=e||(null==k?void 0:k.uid);if(!t)return;const r=yield lt.getUserProducts(t);v(r)}catch(t){a(t.message)}}),[k]),S=u.useCallback(e=>d(this,null,function*(){var t;try{if(!(null==k?void 0:k.uid)||!(null==k?void 0:k.isLoggedIn))throw new Error("로그인이 필요합니다.");const o=l(s({},e),{sellerNickname:k.nickname||k.displayName||(null==(t=k.email)?void 0:t.split("@")[0])||"익명",region:e.region||"",district:e.district||""}),i=yield lt.createProduct(o,k.uid);return r(e=>[l(s({},i),{createdAt:new Date,updatedAt:new Date}),...e].sort((e,t)=>{var r,o,i,n;const a=(null==(o=null==(r=e.createdAt)?void 0:r.toDate)?void 0:o.call(r))||new Date(e.createdAt)||new Date;return((null==(n=null==(i=t.createdAt)?void 0:i.toDate)?void 0:n.call(i))||new Date(t.createdAt)||new Date)-a})),b.length>0&&v(e=>[i,...e]),i}catch(o){throw o}}),[k,b.length]),I=u.useCallback((e,t)=>d(this,null,function*(){try{if(!k)throw new Error("로그인이 필요합니다.");yield lt.updateProduct(e,t);const o=r=>r.map(r=>r.id===e?l(s(s({},r),t),{updatedAt:new Date}):r);r(o),v(o)}catch(o){throw o}}),[k]),_=u.useCallback(e=>d(this,null,function*(){try{if(!k)throw new Error("로그인이 필요합니다.");yield lt.updateProductStatus(e,nt.DELETED),r(t=>t.filter(t=>t.id!==e)),v(t=>t.filter(t=>t.id!==e))}catch(t){throw t}}),[k]),A=u.useCallback((e,t,...o)=>d(this,[e,t,...o],function*(e,t,o={}){try{yield lt.updateProductStatus(e,t,o);const i=r=>r.map(r=>r.id===e?l(s(l(s({},r),{status:t}),o),{updatedAt:new Date}):r);r(i),v(i)}catch(i){throw i}}),[]),P=u.useCallback(e=>d(this,null,function*(){try{yield lt.incrementViewCount(e,null==k?void 0:k.uid),r(t=>t.map(t=>t.id===e?(null==k?void 0:k.uid)&&t.sellerId===k.uid?t:l(s({},t),{viewCount:(t.viewCount||0)+1}):t))}catch(t){}}),[k]),N=u.useCallback(e=>d(this,null,function*(){try{if(!k)throw new Error("로그인이 필요합니다.");const o=yield lt.toggleLike(e,k.uid);if(r(t=>t.map(t=>t.id===e?l(s({},t),{likeCount:t.likeCount+(o?1:-1),isLikedByUser:o}):t)),o){const r=t.find(t=>t.id===e);r&&w(e=>[l(s({},r),{isLikedByUser:!0}),...e])}else w(t=>t.filter(t=>t.id!==e));return o}catch(o){throw o}}),[k,t]),z=u.useCallback(e=>d(this,null,function*(){try{if(!k)throw new Error("로그인이 필요합니다.");yield lt.bumpProduct(e,k.uid),r(t=>{const r=t.findIndex(t=>t.id===e);if(r>0){const e=t[r],o=[...t];return o.splice(r,1),o.unshift(l(s({},e),{lastBumpedAt:new Date})),o}return t})}catch(t){throw t}}),[k]),L=u.useCallback(e=>{x(t=>s(s({},t),e)),g(null)},[]),D=u.useCallback(e=>{L({searchQuery:e})},[L]),$=u.useCallback(()=>{const e={};return Object.values(at).forEach(r=>{e[r.id]=t.filter(e=>e.category===r.id&&e.status===nt.ACTIVE).length}),e},[t]),R=u.useCallback(e=>d(this,null,function*(){try{yield lt.incrementChatCount(e),r(t=>t.map(t=>t.id===e?l(s({},t),{chatCount:(t.chatCount||0)+1}):t))}catch(t){}}),[]),T=u.useCallback(()=>{a(null)},[]),O=u.useCallback(()=>{g(null),j(!0)},[j]),M={products:t,userProducts:b,likedProducts:y,loading:o,error:n,hasMore:c,filters:f,addProduct:S,updateProduct:I,deleteProduct:_,loadMoreProducts:C,refreshProducts:O,incrementViews:P,incrementChatCount:R,toggleLike:N,bumpProduct:z,changeProductStatus:A,updateFilters:L,searchProducts:D,loadUserProducts:E,getCategoryStats:$,clearError:T,PRODUCT_STATUS:nt,INSTRUMENT_CATEGORIES:at};return p.jsx(ur.Provider,{value:M,children:e})}const hr=ee.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`,mr=ee.div`
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
`,gr=ee.div`
  position: relative;
  margin-bottom: 12px;
`,fr=ee.div`
  display: flex;
  align-items: center;
  background: var(--color-bg-glass);
  border: 1px solid ${e=>e.focused?"var(--color-mint-main)":"var(--color-border-light)"};
  border-radius: var(--radius-3xl);
  padding: var(--space-4) var(--space-6);
  transition: all var(--transition-normal);
  box-shadow: ${e=>e.focused?"var(--shadow-lg), var(--glow-mint)":"var(--shadow-md)"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transform: ${e=>e.focused?"translateY(-1px)":"translateY(0)"};
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
    opacity: ${e=>e.focused?.7:0};
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
`,xr=ee.input`
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
`,br=ee.div`
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
`,vr=ee.div`
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
`,yr=ee.div`
  margin-bottom: 16px;
`,wr=ee.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,kr=ee.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,jr=ee.div`
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
`,Cr=ee.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,Er=ee.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: 1px solid ${e=>e.active?"var(--color-mint-main)":"#e0e0e0"};
  border-radius: 16px;
  background: ${e=>e.active?"var(--color-mint-main)":"white"};
  color: ${e=>e.active?"white":"#666"};
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  min-width: fit-content;

  &:hover {
    border-color: var(--color-mint-main);
    color: ${e=>e.active?"white":"var(--color-mint-main)"};
  }
`,Sr=ee.div`
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
`,Ir=ee.div`
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
`,_r=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: white;
`,Ar=ee.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`,Pr=ee.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 4px;
`,Nr=ee.div`
  padding: 20px;
`,zr=ee.div`
  margin-bottom: 24px;
`,Lr=ee.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`,Dr=ee.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,$r=ee.button`
  padding: 8px 16px;
  border: 1px solid ${e=>e.selected?"var(--color-mint-main)":"#e0e0e0"};
  border-radius: 20px;
  background: ${e=>e.selected?"#fff5f2":"white"};
  color: ${e=>e.selected?"var(--color-mint-main)":"#666"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: var(--color-mint-main);
  }
`,Rr=ee.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`,Tr=ee.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: var(--color-mint-main);
  }
`;ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
`,ee.div`
  font-size: 14px;
  color: #666;
`,ee.button`
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
`,ee.div`
  width: 100%;
  max-width: 500px;
  background: white;
  position: relative;
`;const Or=ee.div`
  width: 100%;
  max-width: 500px;
  padding: 0 20px 120px;
`;ee.section`
  margin-bottom: 32px;
`,ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,ee.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,ee.p`
  font-size: 14px;
  color: #6b7280;
  margin: 4px 0 0 0;
`,ee.button`
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
`,ee.div`
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
`,ee.div`
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
`,ee.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  background: #f5f5f5;
`,ee.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,ee.div`
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
`;const Mr=ee.div`
  margin-top: 24px;
`,Vr=ee.div`
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
`,Ur=ee.div`
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
  
  ${Vr}:hover & {
    transform: scale(1.05);
    box-shadow: 
      inset 0 2px 12px rgba(0, 217, 182, 0.12),
      0 8px 24px rgba(0, 0, 0, 0.08);
      
    &::before {
      opacity: 1;
    }
  }
`,Fr=ee.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all var(--transition-slow) var(--ease-out-cubic);
  filter: contrast(1.02) saturate(1.05);
  
  ${Vr}:hover & {
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
`,Br=ee.div`
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
  
  ${Vr}:hover & {
    color: var(--color-mint-dark);
    opacity: 0.8;
    transform: scale(1.1);
  }
`,Qr=ee.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,qr=ee.h3`
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
  
  ${Vr}:hover & {
    color: var(--color-text-primary);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
`,Wr=ee.div`
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
  
  ${Vr}:hover & {
    color: var(--color-text-secondary);
    
    svg {
      color: var(--color-mint-dark);
    }
  }
`,Hr=ee.div`
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
  
  ${Vr}:hover & {
    background: linear-gradient(135deg, 
      var(--color-mint-main) 0%, 
      var(--color-orange) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateY(-1px);
  }
`,Yr=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Gr=ee.div`
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
  
  ${Vr}:hover & {
    color: var(--color-text-secondary);
    
    svg {
      color: var(--color-mint-main);
      transform: scale(1.1);
    }
  }
`,Jr=ee.button`
  background: ${e=>e.liked?"linear-gradient(135deg, var(--color-mint-main), var(--color-mint-light))":"rgba(255, 255, 255, 0.6)"};
  border: 1px solid ${e=>e.liked?"transparent":"var(--color-border-light)"};
  color: ${e=>e.liked?"white":"var(--color-text-tertiary)"};
  font-size: 16px;
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal) var(--ease-spring);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: ${e=>e.liked?"0 4px 12px rgba(0, 217, 182, 0.25)":"0 2px 6px rgba(0, 0, 0, 0.08)"};
  
  &:hover {
    color: ${e=>e.liked?"white":"var(--color-mint-main)"};
    background: ${e=>e.liked?"linear-gradient(135deg, var(--color-mint-dark), var(--color-mint-main))":"rgba(255, 255, 255, 0.9)"};
    border-color: var(--color-mint-light);
    transform: translateY(-2px) scale(1.1);
    box-shadow: ${e=>e.liked?"0 8px 20px rgba(0, 217, 182, 0.35)":"0 4px 12px rgba(0, 217, 182, 0.15)"};
  }
  
  &:active {
    transform: translateY(0) scale(1.05);
    transition: all var(--transition-micro);
  }
`,Kr=ee.div`
  background: ${e=>{switch(e.type){case"urgent":return"linear-gradient(135deg, #ff4757, #ff3742)";case"new":return"linear-gradient(135deg, var(--color-mint-main), var(--color-mint-light))";case"hot":return"linear-gradient(135deg, var(--color-orange), #ff6b35)";default:return"linear-gradient(135deg, var(--color-mint-light), var(--color-mint-main))"}}};
  color: white;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-xl);
  font-size: var(--text-xs);
  font-weight: 700;
  margin-right: var(--space-1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px ${e=>{switch(e.type){case"urgent":return"rgba(255, 71, 87, 0.3)";case"new":default:return"rgba(0, 217, 182, 0.3)";case"hot":return"rgba(255, 126, 54, 0.3)"}}};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: all var(--transition-fast);
  
  ${Vr}:hover & {
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 4px 12px ${e=>{switch(e.type){case"urgent":return"rgba(255, 71, 87, 0.4)";case"new":default:return"rgba(0, 217, 182, 0.4)";case"hot":return"rgba(255, 126, 54, 0.4)"}}};
  }
`,Xr=ee.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl);
  gap: var(--space-lg);
`,Zr=ee.div`
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
`,eo=ee.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
`,to=ee.div`
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
`,ro=ee.button`
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
`,oo=ee.div`
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
`,io=ee.button`
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
`,no=ee.button`
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
`;function ao(){const e=h(),{products:t,loading:r,error:o,hasMore:i,filters:n,updateFilters:a,searchProducts:c,loadMoreProducts:d,toggleLike:g,INSTRUMENT_CATEGORIES:v}=u.useContext(ur),{user:y}=u.useContext(mt),[A,P]=u.useState(!1),[N,z]=u.useState(""),[L,D]=u.useState([]),[$,R]=u.useState([]),[T,O]=u.useState(!1),[M,V]=u.useState(n),[U,F]=u.useState("latest"),B=u.useRef(null),Q=u.useRef(null);u.useEffect(()=>{const e=localStorage.getItem("recentSearches");e&&R(JSON.parse(e))},[]),u.useEffect(()=>{if(N.length>0){const e=[];Object.values(v).forEach(t=>{t.name.toLowerCase().includes(N.toLowerCase())&&e.push({type:"category",text:t.name,value:t.id})}),t.forEach(t=>{t.title.toLowerCase().includes(N.toLowerCase())&&e.length<5&&e.push({type:"product",text:t.title,value:t.title})}),D(e)}else D([])},[N,t,v]),u.useEffect(()=>{if(Q.current){const e=new IntersectionObserver(e=>{e[0].isIntersecting&&i&&!r&&d()},{threshold:.1});return e.observe(Q.current),()=>e.disconnect()}},[i,r,d]);const q=u.useCallback(e=>{if(e.trim()){const t=[e,...$.filter(t=>t!==e)].slice(0,10);R(t),localStorage.setItem("recentSearches",JSON.stringify(t)),c(e),z(e),P(!1)}},[$,c]),W=()=>t.filter(e=>"active"===e.status).map(e=>l(s({},e),{popularityScore:1*(e.viewCount||0)+3*(e.likeCount||0)+2*(e.chatCount||0)})).sort((e,t)=>t.popularityScore-e.popularityScore).slice(0,10);W(),t.filter(e=>"active"===e.status).sort((e,t)=>{var r,o;const i=(null==(r=e.createdAt)?void 0:r.toDate)?e.createdAt.toDate():new Date(e.createdAt);return((null==(o=t.createdAt)?void 0:o.toDate)?t.createdAt.toDate():new Date(t.createdAt))-i}).slice(0,8),(()=>{if(!y.isLoggedIn)return W().slice(0,6);const e=t.filter(e=>e.isLikedByUser),r=[...new Set(e.map(e=>e.category))];0===r.length?W().slice(0,6):t.filter(e=>"active"===e.status&&!e.isLikedByUser&&e.sellerId!==y.uid&&r.includes(e.category)).sort((e,t)=>(t.viewCount||0)-(e.viewCount||0)).slice(0,6)})();const H=u.useCallback((e,t)=>{const r=[...e];switch(t){case"latest":return r.sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt));case"oldest":return r.sort((e,t)=>new Date(e.createdAt)-new Date(t.createdAt));case"price_low":return r.sort((e,t)=>e.price-t.price);case"price_high":return r.sort((e,t)=>t.price-e.price);case"views":return r.sort((e,t)=>(t.viewCount||0)-(e.viewCount||0));case"likes":return r.sort((e,t)=>(t.likeCount||0)-(e.likeCount||0));default:return r}},[]),Y=e=>{if(!e)return"";const t=new Date,r=e.toDate?e.toDate():new Date(e),o=t-r,i=Math.floor(o/6e4),n=Math.floor(o/36e5),a=Math.floor(o/864e5);return i<1?"방금 전":i<60?`${i}분 전`:n<24?`${n}시간 전`:a<7?`${a}일 전`:r.toLocaleDateString()},G=H(t,U),J=Object.values(n).filter(e=>e&&""!==e).length;return p.jsxs(hr,{className:"main-content",children:[n.searchQuery||n.category?p.jsx(lr,{query:n.searchQuery,category:n.category,region:n.region,resultCount:G.length}):p.jsx(sr,{}),p.jsx(jt,{children:p.jsx(Ft,{})}),p.jsxs(mr,{children:[p.jsxs(gr,{children:[p.jsxs(fr,{focused:A,children:[p.jsx(m,{color:"#999"}),p.jsx(xr,{ref:B,placeholder:"어떤 악기를 찾고 계신가요?",value:N,onChange:e=>z(e.target.value),onFocus:()=>P(!0),onKeyPress:e=>{"Enter"===e.key&&q(N)}}),N&&p.jsx(x,{color:"#999",style:{cursor:"pointer"},onClick:()=>{z(""),P(!1),n.searchQuery&&a({searchQuery:""})}})]}),A&&p.jsx(br,{children:L.length>0?L.map((e,t)=>p.jsxs(vr,{onClick:()=>(e=>{"category"===e.type?(a({category:e.value,searchQuery:""}),z("")):q(e.text),P(!1)})(e),children:["category"===e.type?p.jsx(w,{}):p.jsx(m,{}),e.text]},t)):$.length>0&&p.jsxs(yr,{children:[p.jsxs(wr,{children:["최근 검색어",p.jsx("button",{onClick:()=>{R([]),localStorage.removeItem("recentSearches")},style:{background:"none",border:"none",color:"#999",fontSize:"12px",cursor:"pointer"},children:"전체삭제"})]}),p.jsx(kr,{children:$.slice(0,5).map((e,t)=>p.jsxs(jr,{onClick:()=>q(e),children:[p.jsx(k,{}),e]},t))})]})})]}),p.jsxs(Cr,{children:[p.jsxs(Er,{active:J>0,onClick:()=>O(!0),children:[p.jsx(b,{}),"필터 ",J>0&&`(${J})`]}),p.jsx(Er,{active:"guitar"===n.category,onClick:()=>a({category:"guitar"===n.category?"":"guitar"}),children:"기타"}),p.jsx(Er,{active:"piano"===n.category,onClick:()=>a({category:"piano"===n.category?"":"piano"}),children:"피아노"}),p.jsx(Er,{active:"drums"===n.category,onClick:()=>a({category:"drums"===n.category?"":"drums"}),children:"드럼"}),p.jsx(Er,{active:"wind"===n.category,onClick:()=>a({category:"wind"===n.category?"":"wind"}),children:"관악기"}),p.jsx(Er,{active:"audio"===n.category,onClick:()=>a({category:"audio"===n.category?"":"audio"}),children:"오디오"}),p.jsxs(Er,{onClick:()=>{const e="latest"===U?"price":"latest";F(e),a({sortBy:e})},children:[p.jsx(f,{}),"latest"===U?"최신순":"가격순"]})]})]}),p.jsx(ar,{filters:n,onFiltersChange:a,sortBy:U,onSortChange:F}),p.jsxs(Or,{children:[p.jsxs(Mr,{children:[o?p.jsxs(oo,{children:[p.jsx(x,{size:48,color:"#2ed8b6"}),p.jsx("h3",{children:"문제가 발생했습니다"}),p.jsx("p",{children:o}),p.jsx(io,{onClick:()=>window.location.reload(),children:"다시 시도"})]}):r&&0===G.length?p.jsxs(Xr,{children:[p.jsx(Zr,{}),p.jsx(eo,{children:"상품을 불러오는 중..."})]}):0===G.length?p.jsxs(to,{children:[p.jsx(m,{size:48,color:"#ddd"}),p.jsx("h3",{children:"등록된 상품이 없습니다"}),p.jsx("p",{children:"첫 번째 상품을 등록해보세요!"}),p.jsxs(no,{onClick:()=>e("/add"),children:[p.jsx(j,{}),"상품 등록하기"]})]}):G.map(t=>{const r=(e=>e.viewCount>100?{type:"hot",text:"인기"}:e.priceNegotiable?{type:"urgent",text:"급처"}:null)(t);return p.jsxs(Vr,{className:"ProductCard",onClick:()=>e(`/product/${t.id}`),children:[p.jsx(Ur,{children:t.images&&t.images.length>0?p.jsx(Fr,{src:t.images[0],alt:t.title,loading:"lazy"}):p.jsx(Br,{children:p.jsx(m,{})})}),p.jsxs(Qr,{children:[p.jsxs("div",{children:[p.jsxs(Wr,{children:[r&&p.jsx(Kr,{type:r.type,children:r.text}),p.jsx(C,{}),t.region," ",t.district,p.jsx("span",{children:"•"}),Y(t.createdAt)]}),p.jsx(qr,{children:t.title}),p.jsx(Hr,{children:(o=t.price,o>=1e4?`${Math.floor(o/1e4)}만원`:`${o.toLocaleString()}원`)})]}),p.jsxs(Yr,{children:[p.jsxs(Gr,{children:[p.jsx(E,{})," ",t.viewCount||0,p.jsx(S,{})," ",t.likeCount||0,p.jsx(I,{})," ",t.chatCount||0]}),p.jsx(Jr,{liked:t.isLikedByUser,onClick:r=>{r.stopPropagation(),(null==y?void 0:y.isLoggedIn)?g(t.id):e("/login")},children:t.isLikedByUser?p.jsx(S,{}):p.jsx(_,{})})]})]})]},t.id);var o}),i&&p.jsx("div",{ref:Q,style:{height:"1px"}})]}),p.jsx(ro,{onClick:()=>e("/add"),"aria-label":"상품 등록하기",title:"상품 등록하기",children:p.jsx(j,{})})]}),T&&p.jsx(Sr,{onClick:()=>O(!1),children:p.jsxs(Ir,{onClick:e=>e.stopPropagation(),children:[p.jsxs(_r,{children:[p.jsx(Ar,{children:"필터"}),p.jsx(Pr,{onClick:()=>O(!1),children:p.jsx(x,{})})]}),p.jsxs(Nr,{children:[p.jsxs(zr,{children:[p.jsx(Lr,{children:"가격대"}),p.jsxs(Rr,{children:[p.jsx(Tr,{type:"number",placeholder:"최소 금액",value:M.priceMin,onChange:e=>V(t=>l(s({},t),{priceMin:e.target.value}))}),p.jsx("span",{children:"~"}),p.jsx(Tr,{type:"number",placeholder:"최대 금액",value:M.priceMax,onChange:e=>V(t=>l(s({},t),{priceMax:e.target.value}))})]})]}),p.jsxs(zr,{children:[p.jsx(Lr,{children:"상품 상태"}),p.jsx(Dr,{children:["excellent","good","fair","poor"].map(e=>p.jsxs($r,{selected:M.condition===e,onClick:()=>V(t=>l(s({},t),{condition:t.condition===e?"":e})),children:["excellent"===e&&"매우 좋음","good"===e&&"좋음","fair"===e&&"보통","poor"===e&&"나쁨"]},e))})]}),p.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"24px",paddingTop:"20px",borderTop:"1px solid #f0f0f0"},children:[p.jsx("button",{onClick:()=>{const e={category:"",region:"",priceMin:"",priceMax:"",condition:"",sortBy:"latest",searchQuery:""};V(e),a(e),O(!1)},style:{flex:1,padding:"12px",border:"1px solid #e0e0e0",borderRadius:"8px",background:"white",color:"#666",cursor:"pointer"},children:"초기화"}),p.jsx("button",{onClick:()=>{a(M),O(!1)},style:{flex:2,padding:"12px",border:"none",borderRadius:"8px",background:"var(--color-mint-main)",color:"white",cursor:"pointer",fontWeight:"600"},children:"적용하기"})]})]})]})})]})}const so=ee.div`
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
`,lo=ee.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-mint-main);
  margin-bottom: var(--space-xl);
  background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,co=ee.h1`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin-bottom: 2em;
  text-align: center;
`,uo=ee.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 2em;
  box-sizing: border-box;
`,po=ee.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`,ho=ee.input`
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
`,mo=ee.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,go=ee.button`
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
`,fo=ee.button`
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
`,xo=ee.div`
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
`,bo=ee.button`
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
`,vo=ee.p`
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
`,yo=ee.p`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 1em;
`,wo=ee.div`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-top: 2em;
`;function ko(){const{user:e,loginWithEmail:t}=u.useContext(mt),r=h(),[o,i]=u.useState(!1),[n,a]=u.useState({email:"",password:""}),[c,m]=u.useState(""),[g,f]=u.useState(!1),x=e=>{const{name:t,value:r}=e.target;a(e=>l(s({},e),{[t]:r})),m("")};u.useEffect(()=>{(()=>{d(this,null,function*(){try{const e=yield Ge(Ze);(null==e?void 0:e.user)&&r("/",{replace:!0})}catch(e){b(e)}})})()},[r]),u.useEffect(()=>{!e.loading&&e.isLoggedIn&&r("/",{replace:!0})},[e.loading,e.isLoggedIn,r]);const b=e=>{switch(e.code){case"auth/popup-blocked":alert("팝업이 차단되어 구글 로그인을 진행할 수 없습니다. 브라우저의 팝업 차단을 해제해 주세요.");break;case"auth/cancelled-popup-request":case"auth/popup-closed-by-user":break;case"auth/unauthorized-domain":alert("현재 도메인에서 구글 로그인이 허용되지 않았습니다. 개발자에게 문의해주세요.");break;default:alert(`구글 로그인 중 오류가 발생했습니다. (${e.code})`)}};return e.loading?p.jsxs(so,{children:[p.jsx(lo,{children:"ECHO"}),p.jsx(wo,{children:"로딩중..."})]}):e.isLoggedIn?null:p.jsxs(so,{children:[p.jsx(lo,{children:"ECHO"}),p.jsx(co,{children:"로그인"}),p.jsxs(uo,{onSubmit:e=>d(this,null,function*(){if(e.preventDefault(),!g){f(!0),m("");try{yield t(n),window.location.href="/"}catch(r){m("로그인에 실패했습니다: "+r.message)}finally{f(!1)}}}),children:[p.jsxs(po,{children:[p.jsx(mo,{children:p.jsx(A,{size:20})}),p.jsx(ho,{type:"email",name:"email",placeholder:"이메일",value:n.email,onChange:x,disabled:g})]}),p.jsxs(po,{children:[p.jsx(mo,{children:p.jsx(P,{size:20})}),p.jsx(ho,{type:o?"text":"password",name:"password",placeholder:"비밀번호",value:n.password,onChange:x,disabled:g}),p.jsx(go,{type:"button",onClick:()=>i(!o),children:o?p.jsx(N,{size:20}):p.jsx(z,{size:20})})]}),c&&p.jsx(yo,{children:c}),p.jsx(fo,{type:"submit",disabled:g,children:g?"로그인 중...":"로그인"})]}),p.jsx(xo,{children:p.jsx("span",{children:"또는"})}),p.jsxs(bo,{className:"google",onClick:e=>d(this,null,function*(){if(e.preventDefault(),!g){f(!0),m("");try{(yield qe(Ze,et)).user&&(window.location.href="/")}catch(t){"auth/popup-blocked"===t.code?alert("팝업이 차단되어 구글 로그인을 진행할 수 없습니다. 브라우저의 팝업 차단을 해제해 주세요."):"auth/cancelled-popup-request"===t.code||"auth/popup-closed-by-user"===t.code||("auth/unauthorized-domain"===t.code?alert("현재 도메인에서 구글 로그인이 허용되지 않았습니다. 개발자에게 문의해주세요."):alert(`구글 로그인 중 오류가 발생했습니다. (${t.code})`))}finally{f(!1)}}}),children:[p.jsx(L,{size:24}),"Google로 로그인"]}),p.jsxs(bo,{className:"kakao",children:[p.jsx(D,{size:24}),"카카오로 로그인"]}),p.jsxs(bo,{className:"naver",children:[p.jsx($,{size:24}),"네이버로 로그인"]}),p.jsxs(vo,{children:["계정이 없으신가요?",p.jsx(R,{to:"/signup",children:"회원가입"})]})]})}const jo=u.lazy(()=>Ke(()=>import("./Signup-DZNV1zRb.js"),__vite__mapDeps([2,3,1,4,0]))),Co=u.lazy(()=>Ke(()=>import("./SetLocation-CuXyBV76.js"),__vite__mapDeps([5,3,1,4,0]))),Eo=u.lazy(()=>Ke(()=>import("./ProductRegister-BdAN5j1k.js"),__vite__mapDeps([6,3,1,4,0,7]))),So=u.lazy(()=>Ke(()=>import("./ProductDetail-BD89Tt2N.js"),__vite__mapDeps([8,3,1,4,0]))),Io=u.lazy(()=>Ke(()=>import("./ChatRoom-Dr0lhMWD.js"),__vite__mapDeps([9,3,1,4,0]))),_o=u.lazy(()=>Ke(()=>import("./MyPage-CvJ0HDnv.js"),__vite__mapDeps([10,3,1,4,0]))),Ao=u.lazy(()=>Ke(()=>import("./MusicLife-BJP89Edm.js"),__vite__mapDeps([11,3,1,4,0]))),Po=u.lazy(()=>Ke(()=>import("./MusicLifeDetail-JpV6hywq.js"),__vite__mapDeps([12,3,1,4,0]))),No=u.lazy(()=>Ke(()=>import("./MusicLifeWrite-Dc0fo0pS.js"),__vite__mapDeps([13,3,1,4,7,0]))),zo=u.lazy(()=>Ke(()=>import("./Map-ClqD0mNM.js"),__vite__mapDeps([14,3,1,4,0]))),Lo=u.lazy(()=>Ke(()=>import("./ChatList-Ddt_Kcl9.js"),__vite__mapDeps([15,3,1,4,0])));u.lazy(()=>Ke(()=>import("./AddProduct-Cy1DC4H4.js"),__vite__mapDeps([16,3,1,4,0])));const Do=u.lazy(()=>Ke(()=>import("./GuitarTuner-BuTI-PCY.js"),__vite__mapDeps([17,3,1,4,0]))),$o=u.lazy(()=>Ke(()=>import("./BassTuner-BvzCkJOa.js"),__vite__mapDeps([18,3,1,4,0]))),Ro=u.lazy(()=>Ke(()=>import("./SalesHistory-DIQb8ye_.js"),__vite__mapDeps([19,3,1,4,0]))),To=u.lazy(()=>Ke(()=>import("./EchoShare-1Vf1U0_n.js"),__vite__mapDeps([20,3,1,4,0]))),Oo=u.lazy(()=>Ke(()=>import("./PaymentSuccess-DyWj-P68.js"),__vite__mapDeps([21,3,1,4,0]))),Mo=u.lazy(()=>Ke(()=>import("./PaymentFail-DuSWTjP1.js"),__vite__mapDeps([22,3,1,4,0]))),Vo=u.lazy(()=>Ke(()=>import("./WishList-CdJB27dz.js"),__vite__mapDeps([23,3,1,4,0]))),Uo=u.lazy(()=>Ke(()=>import("./PhoneRegister-CWfl7SHb.js"),__vite__mapDeps([24,3,1,4,0]))),Fo=u.lazy(()=>Ke(()=>import("./AdminDashboard-DpTOcvWR.js"),__vite__mapDeps([25,3,1,4,0]))),Bo=u.lazy(()=>Ke(()=>import("./NotificationPage-D9smS4-2.js"),__vite__mapDeps([26,3,1,4,0]))),Qo=ee.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
`,qo=ee.div`
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
`,Wo=ee.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
`,Ho=()=>p.jsxs(Qo,{children:[p.jsx(qo,{}),p.jsx(Wo,{children:"페이지를 불러오는 중..."})]});function Yo(){return p.jsx(u.Suspense,{fallback:p.jsx(Ho,{}),children:p.jsxs(T,{children:[p.jsx(O,{path:"/",element:p.jsx(ao,{})}),p.jsx(O,{path:"/login",element:p.jsx(ko,{})}),p.jsx(O,{path:"/signup",element:p.jsx(jo,{})}),p.jsx(O,{path:"/set-location",element:p.jsx(Co,{})}),p.jsx(O,{path:"/register",element:p.jsx(Eo,{})}),p.jsx(O,{path:"/add",element:p.jsx(Eo,{})}),p.jsx(O,{path:"/product/:id",element:p.jsx(So,{})}),p.jsx(O,{path:"/chat/:chatRoomId",element:p.jsx(Io,{})}),p.jsx(O,{path:"/chat",element:p.jsx(Lo,{})}),p.jsx(O,{path:"/mypage",element:p.jsx(_o,{})}),p.jsx(O,{path:"/mypage/sales",element:p.jsx(Ro,{})}),p.jsx(O,{path:"/musiclife",element:p.jsx(Ao,{})}),p.jsx(O,{path:"/musiclife/write",element:p.jsx(No,{})}),p.jsx(O,{path:"/musiclife/:id",element:p.jsx(Po,{})}),p.jsx(O,{path:"/map",element:p.jsx(zo,{})}),p.jsx(O,{path:"/tuner/guitar",element:p.jsx(Do,{})}),p.jsx(O,{path:"/tuner/bass",element:p.jsx($o,{})}),p.jsx(O,{path:"/echo-share",element:p.jsx(To,{})}),p.jsx(O,{path:"/payment/success",element:p.jsx(Oo,{})}),p.jsx(O,{path:"/payment/fail",element:p.jsx(Mo,{})}),p.jsx(O,{path:"/wishlist",element:p.jsx(Vo,{})}),p.jsx(O,{path:"/profile/phone",element:p.jsx(Uo,{})}),p.jsx(O,{path:"/admin",element:p.jsx(Fo,{})}),p.jsx(O,{path:"/notifications",element:p.jsx(Bo,{})})]})})}const Go=u.createContext();function Jo({children:e}){const{user:t,getUserInfo:r}=u.useContext(mt),{sendChatNotification:o}=Ot(),[i,n]=u.useState([]),[a,c]=u.useState({}),[h,m]=u.useState(null),[g,f]=u.useState(!1),[x,b]=u.useState(0),[v,y]=u.useState("connected"),[w,k]=u.useState({}),j=u.useRef({}),C=u.useRef({}),E=u.useRef([]);u.useEffect(()=>{const e=()=>{y("connected"),Et.info("Chat connection restored"),S()},t=()=>{y("disconnected"),Et.warn("Chat connection lost")};return window.addEventListener("online",e),window.addEventListener("offline",t),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",t)}},[S]);const S=u.useCallback(()=>d(this,null,function*(){const e=[...E.current];E.current=[];for(const r of e)try{yield A(r.chatRoomId,r.content,r.type),Et.info("Retry message sent successfully")}catch(t){Et.error("Failed to retry message",t),E.current.push(r)}}),[A]);u.useEffect(()=>{if(!t.isLoggedIn||!t.uid)return n([]),c({}),m(null),void b(0);const e=j.current,r=()=>{const o=ge(de(tt,"chatRooms"),we("participants","array-contains",t.uid),fe("lastMessageAt","desc")),i=ze(o,e=>{const r=[];e.forEach(e=>{r.push(s({id:e.id},e.data()))}),n(r);const o=r.reduce((e,r)=>{var o;return e+((null==(o=r.unreadCount)?void 0:o[t.uid])||0)},0);b(o),y("connected"),Et.info("Chat rooms loaded successfully")},e=>{Et.error("Chat rooms subscription error",e),y("error"),setTimeout(()=>{navigator.onLine&&r()},5e3)});e.chatRooms=i};return r(),()=>{const t=e.chatRooms;t&&t()}},[t.isLoggedIn,t.uid]);const I=u.useCallback((e,t=null)=>d(this,null,function*(){try{let r=ge(de(tt,"chatRooms",e,"messages"),fe("createdAt","desc"),ke(50));t&&(r=ge(de(tt,"chatRooms",e,"messages"),fe("createdAt","desc"),je(t),ke(50)));const o=yield xe(r),i=[];return o.forEach(e=>{i.push(s({id:e.id},e.data()))}),i.length>0&&c(r=>l(s({},r),{[e]:t?[...i.reverse(),...r[e]||[]]:i.reverse()})),i.length}catch(r){return Et.error("Failed to load more messages",r),0}}),[]),_=u.useCallback(e=>{if(!e)return null;const t=()=>{const r=ge(de(tt,"chatRooms",e,"messages"),fe("createdAt","desc"),ke(50)),o=ze(r,t=>{const r=[];t.forEach(e=>{r.push(s({id:e.id},e.data()))}),k(t=>l(s({},t),{[e]:r.reverse()})),c(t=>l(s({},t),{[e]:r.reverse()})),Et.info(`Messages loaded for chat ${e}: ${r.length}`)},r=>{Et.error("Messages subscription error",r),w[e]&&c(t=>l(s({},t),{[e]:w[e]})),C.current[e]&&clearTimeout(C.current[e]),C.current[e]=setTimeout(()=>{navigator.onLine&&t()},3e3)});return j.current[e]=o,o};return t()},[w]),A=u.useCallback((e,r,n="text")=>d(this,null,function*(){var a,s,l;try{if(!r.trim()||!e||!t.uid)return;const d={chatRoomId:e,content:r.trim(),type:n};if(!navigator.onLine)throw E.current.push(d),new Error("네트워크 연결이 없습니다. 연결이 복구되면 자동으로 전송됩니다.");const u=null==(a=i.find(t=>t.id===e))?void 0:a.participants.find(e=>e!==t.uid),p={senderId:t.uid,senderInfo:{nickname:t.nickname||t.displayName||"사용자",profileImage:t.profileImage||""},content:r.trim(),type:n,createdAt:ve(),isRead:!1};yield be(de(tt,"chatRooms",e,"messages"),p);const h=ue(tt,"chatRooms",e);if(yield he(h,{lastMessage:"image"===n?"사진":r.trim(),lastMessageAt:ve(),[`unreadCount.${u}`]:((null==(l=null==(s=i.find(t=>t.id===e))?void 0:s.unreadCount)?void 0:l[u])||0)+1}),u&&o)try{yield o(e,"image"===n?"사진을 보냈습니다.":r.trim(),t.nickname||t.displayName||"사용자")}catch(c){Et.warn("Failed to send chat notification",c)}Et.info("Message sent successfully",{chatRoomId:e,messageType:n})}catch(d){throw Et.error("Message send failed",d,"chat-send-message"),"unavailable"!==d.code&&"permission-denied"!==d.code||E.current.push({chatRoomId:e,content:r.trim(),type:n}),d}}),[i,t.uid,t.nickname,t.displayName,t.profileImage,o]),P=e=>d(this,null,function*(){try{if(!e||!t.uid)return;const r=ue(tt,"chatRooms",e);yield he(r,{[`unreadCount.${t.uid}`]:0})}catch(r){}});u.useEffect(()=>{const e=j.current,t=C.current;return()=>{Object.values(e).forEach(e=>{"function"==typeof e&&e()}),Object.values(t).forEach(e=>{clearTimeout(e)})}},[]);const N={chatRooms:i,messages:a,currentChat:h,loading:g,unreadCount:x,connectionState:v,createOrGetChatRoom:(e,t,o,i)=>d(this,null,function*(){try{f(!0);const s=ge(de(tt,"chatRooms"),we("productId","==",e),we("participants","array-contains",t)),l=yield xe(s);let c,d,u=null;if(l.forEach(e=>{const r=e.data();r.participants&&2===r.participants.length&&r.participants.includes(t)&&r.participants.includes(o)&&(u=e)}),u)return u.id;try{[c,d]=yield Promise.all([r(t),r(o)])}catch(n){c={nickname:"판매자",profileImage:""},d={nickname:"구매자",profileImage:""}}const p={productId:e,participants:[t,o].sort(),participantInfo:{[t]:{userId:t,role:"seller",nickname:(null==c?void 0:c.nickname)||"판매자",profileImage:(null==c?void 0:c.profileImage)||""},[o]:{userId:o,role:"buyer",nickname:(null==d?void 0:d.nickname)||"구매자",profileImage:(null==d?void 0:d.profileImage)||""}},productInfo:{id:e,title:i.title,price:i.price,images:i.images||[],status:i.status||"active"},lastMessage:"",lastMessageAt:ve(),unreadCount:{[t]:0,[o]:0},isActive:!0,createdAt:ve()},h=yield be(de(tt,"chatRooms"),p);yield be(de(tt,"chatRooms",h.id,"messages"),{type:"system",content:"채팅이 시작되었습니다. 안전한 거래를 위해 서로 예의를 지켜주세요.",createdAt:ve(),isRead:!1});try{yield lt.incrementChatCount(e)}catch(a){}return h.id}catch(a){throw a}finally{f(!1)}}),sendMessage:A,markMessagesAsRead:P,leaveChatRoom:e=>d(this,null,function*(){try{if(!e||!t.uid)return;const r=ue(tt,"chatRooms",e);yield he(r,{[`participantInfo.${t.uid}.isActive`]:!1,[`participantInfo.${t.uid}.leftAt`]:ve()}),yield be(de(tt,"chatRooms",e,"messages"),{type:"system",content:`${t.nickname}님이 채팅방을 나갔습니다.`,createdAt:ve(),isRead:!1})}catch(r){throw r}}),blockChatRoom:(e,r="")=>d(this,null,function*(){try{if(!e||!t.uid)return;const o=ue(tt,"chatRooms",e);yield he(o,{[`participantInfo.${t.uid}.isBlocked`]:!0,[`participantInfo.${t.uid}.blockReason`]:r,[`participantInfo.${t.uid}.blockedAt`]:ve(),isActive:!1})}catch(o){throw o}}),setActiveChat:e=>{m(e),e&&P(e)},getChatRoomInfo:e=>d(this,null,function*(){try{const t=yield ye(ue(tt,"chatRooms",e));return t.exists()?s({id:e},t.data()):null}catch(t){return null}}),subscribeToMessages:_,loadMoreMessages:I,retryPendingMessages:S};return p.jsx(Go.Provider,{value:N,children:e})}const Ko=ee.nav`
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
`,Xo=ee.div`
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
`,Zo=ee.button`
  background: ${e=>e.$active?"var(--color-mint-glass)":"none"};
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${e=>e.$active?"var(--color-mint-main)":"var(--color-text-tertiary)"};
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
  transform: ${e=>e.$active?"translateY(-2px)":"translateY(0)"};
  
  /* 활성 상태 글로우 효과 */
  ${e=>e.$active&&"\n    box-shadow: var(--glow-mint);\n    background: linear-gradient(135deg, \n      var(--color-mint-glass) 0%, \n      rgba(255, 255, 255, 0.1) 100%);\n  "}

  /* 아이콘 스타일 강화 */
  svg {
    font-size: 20px;
    transition: all var(--transition-normal);
    transform: ${e=>e.$active?"scale(1.1)":"scale(1)"};
    filter: ${e=>e.$active?"drop-shadow(0 0 8px var(--color-mint-glow))":"none"};
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
`,ei=ee.div`
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
`;function ti(){const e=h(),{pathname:t}=M(),{unreadCount:r}=u.useContext(Go),{unreadCount:o}=Ot();return p.jsx(Ko,{children:p.jsxs(Xo,{children:[p.jsxs(Zo,{$active:"/"===t,onClick:()=>e("/"),children:[" ",p.jsx(V,{size:22})," ",p.jsx("span",{children:"홈"})," "]}),p.jsxs(Zo,{$active:"/musiclife"===t,onClick:()=>e("/musiclife"),children:[" ",p.jsx(U,{size:22})," ",p.jsx("span",{children:"음악생활"})," "]}),p.jsxs(Zo,{$active:"/map"===t,onClick:()=>e("/map"),children:[" ",p.jsx(F,{size:22})," ",p.jsx("span",{children:"동네지도"})," "]}),p.jsxs(Zo,{$active:t.startsWith("/chat"),onClick:()=>e("/chat"),children:[p.jsx(B,{size:22}),p.jsx("span",{children:"채팅"}),r>0&&p.jsx(ei,{children:r>99?"99+":r})]}),p.jsxs(Zo,{$active:"/notifications"===t,onClick:()=>e("/notifications"),children:[p.jsx(g,{size:22}),p.jsx("span",{children:"알림"}),o>0&&p.jsx(ei,{children:o>99?"99+":o})]}),p.jsxs(Zo,{$active:"/echo-share"===t,onClick:()=>e("/echo-share"),children:[" ",p.jsx(Q,{size:22})," ",p.jsx("span",{children:"에코쉐어"})," "]}),p.jsxs(Zo,{$active:"/mypage"===t,onClick:()=>e("/mypage"),children:[" ",p.jsx(F,{size:22})," ",p.jsx("span",{children:"나의에코"})," "]})]})})}const ri=te`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,oi=te`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,ii=ee.div`
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
`,ni=ee.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${e=>e.isExiting?oi:ri} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    background: ${e=>{switch(e.type){case"success":return"#10b981";case"error":return"#ef4444";case"warning":return"#f59e0b";default:return"#3b82f6"}}};
  }
`,ai=ee.div`
  font-size: 20px;
  color: ${e=>{switch(e.type){case"success":return"#10b981";case"error":return"#ef4444";case"warning":return"#f59e0b";default:return"#3b82f6"}}};
  display: flex;
  align-items: center;
`,si=ee.div`
  flex: 1;
`,li=ee.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2px;
  font-size: 14px;
`,ci=ee.div`
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
`,di=ee.button`
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
`,ui=ee.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${e=>{switch(e.type){case"success":return"#10b981";case"error":return"#ef4444";case"warning":return"#f59e0b";default:return"#3b82f6"}}};
  width: ${e=>`${e.progress}%`};
  transition: width 0.1s linear;
`;function pi({toasts:e,removeToast:t}){return p.jsx(ii,{children:e.map(e=>p.jsx(hi,{toast:e,onRemove:()=>t(e.id)},e.id))})}function hi({toast:e,onRemove:t}){const[r,o]=u.useState(!1),[i,n]=u.useState(100);u.useEffect(()=>{const t=50/(e.duration||5e3)*100,r=setInterval(()=>{n(e=>{const o=e-t;return o<=0?(clearInterval(r),a(),0):o})},50);return()=>clearInterval(r)},[e.duration,a]);const a=u.useCallback(()=>{o(!0),setTimeout(()=>{t()},300)},[t]);return p.jsxs(ni,{type:e.type,isExiting:r,children:[p.jsx(ai,{type:e.type,children:(()=>{switch(e.type){case"success":return p.jsx(H,{});case"error":case"warning":return p.jsx(W,{});default:return p.jsx(q,{})}})()}),p.jsxs(si,{children:[p.jsx(li,{children:e.title||(()=>{switch(e.type){case"success":return"성공";case"error":return"오류";case"warning":return"주의";default:return"알림"}})()}),p.jsx(ci,{children:e.message})]}),p.jsx(di,{onClick:a,children:p.jsx(x,{size:14})}),p.jsx(ui,{type:e.type,progress:i})]})}const mi=new class{constructor(){this.isProduction=!0,this.errorQueue=[],this.maxQueueSize=100,this.flushInterval=3e4,this.init()}init(){this.setupGlobalErrorHandlers(),setInterval(()=>{this.flushErrorQueue()},this.flushInterval)}setupGlobalErrorHandlers(){window.addEventListener("error",e=>{var t;this.captureError({type:"javascript",message:e.message,filename:e.filename,lineno:e.lineno,colno:e.colno,stack:null==(t=e.error)?void 0:t.stack,timestamp:(new Date).toISOString(),url:window.location.href,userAgent:navigator.userAgent})}),window.addEventListener("unhandledrejection",e=>{var t,r;this.captureError({type:"promise_rejection",message:(null==(t=e.reason)?void 0:t.message)||String(e.reason),stack:null==(r=e.reason)?void 0:r.stack,timestamp:(new Date).toISOString(),url:window.location.href,userAgent:navigator.userAgent})}),window.__ECHO_ERROR_HANDLER__=(e,t)=>{this.captureReactError(e,t)}}captureError(e){this.isProduction&&(this.errorQueue.push(l(s({},e),{id:this.generateErrorId(),severity:this.calculateSeverity(e),context:this.getErrorContext()})),this.errorQueue.length>this.maxQueueSize&&(this.errorQueue=this.errorQueue.slice(-this.maxQueueSize)),"critical"===this.calculateSeverity(e)&&this.flushErrorQueue())}captureReactError(e,t){this.captureError({type:"react",message:e.message,stack:e.stack,componentStack:t.componentStack,timestamp:(new Date).toISOString(),url:window.location.href,userAgent:navigator.userAgent})}captureCustomError(e,t={}){this.captureError({type:"custom",message:e.message||String(e),stack:e.stack,context:t,timestamp:(new Date).toISOString(),url:window.location.href,userAgent:navigator.userAgent})}generateErrorId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}calculateSeverity(e){const t=e.message||"";return[/payment/i,/firebase.*auth/i,/network.*error/i,/chunk.*failed/i].some(e=>e.test(t))?"critical":[/warning/i,/deprecated/i,/console/i].some(e=>e.test(t))?"warning":"error"}getErrorContext(){return{url:window.location.href,timestamp:(new Date).toISOString(),userAgent:navigator.userAgent,viewport:{width:window.innerWidth,height:window.innerHeight},connection:navigator.connection?{effectiveType:navigator.connection.effectiveType,downlink:navigator.connection.downlink,rtt:navigator.connection.rtt}:null,memory:performance.memory?{usedJSHeapSize:performance.memory.usedJSHeapSize,totalJSHeapSize:performance.memory.totalJSHeapSize}:null}}flushErrorQueue(){return d(this,null,function*(){if(0===this.errorQueue.length)return;const e=[...this.errorQueue];this.errorQueue=[];try{e.forEach(e=>{Et.error("Error monitoring:",e)}),this.isProduction&&(yield this.sendToMonitoringService(e))}catch(t){e.forEach(e=>{e.retryCount=(e.retryCount||0)+1,e.retryCount<=3&&this.errorQueue.push(e)})}})}sendToMonitoringService(e){return d(this,null,function*(){try{const{db:t}=yield Ke(()=>d(this,null,function*(){const{db:e}=yield Promise.resolve().then(()=>ht);return{db:e}}),void 0),{collection:r,addDoc:o}=yield Ke(()=>d(this,null,function*(){const{collection:e,addDoc:t}=yield import("./vendor-firebase-Cl2QMYMN.js").then(e=>e.W);return{collection:e,addDoc:t}}),__vite__mapDeps([0,1]));for(const i of e)yield o(r(t,"errorLogs"),l(s({},i),{createdAt:new Date}))}catch(t){throw t}})}trackPerformance(e,t,r={}){this.isProduction&&Et.performance(e,{duration:t,metadata:r,timestamp:(new Date).toISOString(),url:window.location.href})}trackUserAction(e,t={}){Et.userAction(e,l(s({},t),{timestamp:(new Date).toISOString(),url:window.location.href}))}trackNetworkError(e,t,r){this.captureError({type:"network",message:`Network error: ${t} ${e}`,url:e,status:t,response:r,timestamp:(new Date).toISOString()})}trackFirebaseError(e,t){this.captureError({type:"firebase",message:`Firebase ${e}: ${t.message}`,code:t.code,operation:e,stack:t.stack,timestamp:(new Date).toISOString()})}trackPaymentError(e,t,r={}){this.captureError({type:"payment",message:`Payment error at ${e}: ${t.message}`,stage:e,paymentData:{orderId:r.orderId,amount:r.amount,method:r.method},stack:t.stack,timestamp:(new Date).toISOString()})}getErrorStats(){const e=Date.now()-864e5,t=this.errorQueue.filter(t=>new Date(t.timestamp).getTime()>e),r={total:t.length,byType:{},bySeverity:{},topErrors:{}};return t.forEach(e=>{r.byType[e.type]=(r.byType[e.type]||0)+1,r.bySeverity[e.severity]=(r.bySeverity[e.severity]||0)+1;const t=e.message.substring(0,100);r.topErrors[t]=(r.topErrors[t]||0)+1}),r}},gi=ee.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: var(--color-bg-secondary);
`,fi=ee.div`
  font-size: 4rem;
  color: var(--color-red);
  margin-bottom: 1.5rem;
  opacity: 0.8;
`,xi=ee.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
`,bi=ee.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 400px;
`;ee.details`
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
`;const vi=ee.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`,yi=ee.button`
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
`,wi=ee.button`
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
`;class ki extends Y.Component{constructor(e){super(e),c(this,"reportError",(e,t)=>{this.state.errorId,e.message,e.stack,t.componentStack,(new Date).toISOString(),navigator.userAgent,window.location.href,this.props.userId}),c(this,"handleRetry",()=>{this.setState({hasError:!1,error:null,errorInfo:null,errorId:null})}),c(this,"handleGoHome",()=>{window.location.href="/"}),c(this,"handleReportIssue",()=>{var e;const t=encodeURIComponent(`버그 신고: ${this.state.errorId}`),r=encodeURIComponent(`\n에러 ID: ${this.state.errorId}\n발생 시간: ${(new Date).toLocaleString()}\n페이지: ${window.location.href}\n브라우저: ${navigator.userAgent}\n\n에러 내용:\n${(null==(e=this.state.error)?void 0:e.message)||"알 수 없는 에러"}\n\n재현 방법:\n1. \n2. \n3. \n\n추가 정보:\n    `);window.open(`mailto:support@echo-music.com?subject=${t}&body=${r}`)}),this.state={hasError:!1,error:null,errorInfo:null,errorId:null}}static getDerivedStateFromError(){return{hasError:!0,errorId:`ERR_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t}),((e,t)=>{mi.captureCustomError(e,t)})(e,{componentStack:t.componentStack,userId:this.props.userId,errorId:this.state.errorId,timestamp:(new Date).toISOString()}),this.reportError(e,t)}render(){if(this.state.hasError){const{error:e,errorInfo:t,errorId:r}=this.state,o=!1;return p.jsxs(gi,{children:[p.jsx(fi,{children:p.jsx(G,{})}),p.jsx(xi,{children:"앗! 문제가 발생했습니다"}),p.jsxs(bi,{children:["예상치 못한 오류가 발생했습니다.",p.jsx("br",{}),"잠시 후 다시 시도해주시거나 홈으로 돌아가세요."]}),o,p.jsxs(vi,{children:[p.jsxs(yi,{className:"primary",onClick:this.handleRetry,children:[p.jsx(J,{}),"다시 시도"]}),p.jsxs(yi,{className:"secondary",onClick:this.handleGoHome,children:[p.jsx(V,{}),"홈으로 이동"]})]}),p.jsx(wi,{onClick:this.handleReportIssue,children:"문제 신고하기"})]})}return this.props.children}}const ji=re`
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
`;function Ci(){const{toasts:e,removeToast:t}=Dt(),{user:r}=Y.useContext(mt);return p.jsxs(p.Fragment,{children:[p.jsx(ji,{}),p.jsx(ki,{userId:null==r?void 0:r.uid,children:p.jsxs("div",{className:"App",children:[p.jsx(Yo,{}),p.jsx(ti,{}),p.jsx(pi,{toasts:e,removeToast:t})]})})]})}K.createRoot(document.getElementById("root")).render(p.jsx(Y.StrictMode,{children:p.jsx(X,{children:p.jsx($t,{children:p.jsx(Z,{children:p.jsx(gt,{children:p.jsx(pr,{children:p.jsx(Tt,{children:p.jsx(Jo,{children:p.jsx(Ci,{})})})})})})})})}));export{Go as C,at as I,Ft as N,ur as P,jt as T,mt as U,Ze as a,pt as b,Ot as c,tt as d,ct as i,Et as l,ut as m,lt as p,rt as s,Dt as u};
