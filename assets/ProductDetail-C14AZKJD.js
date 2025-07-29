import{r as p,U as le,o as de,j as e,q as ue,s as Ne,t as Le,v as De,w as Z,i as n,u as Oe,x as Be,P as Ae,C as Ue,y as ee,z as qe,A as Ke,B as He,D as Ye,E as Ve,G as Xe,H as We,I as Ge,J as te,K as Je,L as Qe,M as Ze,N as et,O as tt,Q as nt,R as ot,S as rt,V as it,p as st}from"./index-CH1wDzjU.js";function pe(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function xe(t,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&_(t,i)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)},$(t)}function _(t,i){return _=Object.setPrototypeOf||function(c,a){return c.__proto__=a,c},_(t,i)}function fe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function N(t,i,s){return fe()?N=Reflect.construct:N=function(a,x,y){var l=[null];l.push.apply(l,x);var f=Function.bind.apply(a,l),m=new f;return y&&_(m,y.prototype),m},N.apply(null,arguments)}function at(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function L(t){var i=typeof Map=="function"?new Map:void 0;return L=function(c){if(c===null||!at(c))return c;if(typeof c!="function")throw new TypeError("Super expression must either be null or a function");if(typeof i<"u"){if(i.has(c))return i.get(c);i.set(c,a)}function a(){return N(c,arguments,$(this).constructor)}return a.prototype=Object.create(c.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),_(a,c)},L(t)}function ct(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function lt(t,i){if(i&&(typeof i=="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ct(t)}function he(t){var i=fe();return function(){var c=$(t),a;if(i){var x=$(this).constructor;a=Reflect.construct(c,arguments,x)}else a=c.apply(this,arguments);return lt(this,a)}}var F=null;function dt(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(F!=null)return F;var c=new Promise(function(a,x){try{var y=function(){R(i)!=null?a(R(i)):x(new ut(i))},l=function(){x(new pt(t))};if(typeof window>"u"||typeof document>"u")return a(null);if(R(i)!=null)return a(R(i));var f=document.querySelector('script[src="'.concat(t,'"]'));if(f!=null){var m;f.removeEventListener("load",y),f.removeEventListener("error",l),(m=f.parentElement)===null||m===void 0||m.removeChild(f)}var h=document.createElement("script");h.src=t,h.addEventListener("load",y),h.addEventListener("error",l),s.priority!=null&&(h.fetchPriority=s.priority),document.head.appendChild(h)}catch(b){x(b);return}});return F=c.catch(function(a){return F=null,Promise.reject(a)}),F}function R(t){return window[t]}var ut=function(t){xe(s,t);var i=he(s);function s(c){var a;return pe(this,s),a=i.call(this,"[TossPayments SDK] ".concat(c," is not available")),a.name="NamespaceNotAvailableError",a}return s}(L(Error)),pt=function(t){xe(s,t);var i=he(s);function s(c){var a;return pe(this,s),a=i.call(this,"[TossPayments SDK] Failed to load script: [".concat(c,"]")),a.name="ScriptLoadFailedError",a}return s}(L(Error)),xt="https://js.tosspayments.com/v1";function ft(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.src,c=s===void 0?xt:s;return typeof window>"u"?Promise.resolve({requestPayment:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")},requestBillingAuth:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")},cancelPayment:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")}}):dt(c,"TossPayments").then(function(a){return a(t)})}const ht=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`,gt=n.div`
  background: white;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,mt=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
`,bt=n.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
`,yt=n.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  
  &:hover {
    background: #f0f0f0;
  }
`,vt=n.div`
  padding: 24px;
`,jt=n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
`,wt=n.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`,kt=n.div`
  flex: 1;
`,Pt=n.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
`,St=n.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
`,Ct=n.div`
  margin-bottom: 24px;
`,It=n.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`,Tt=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Et=n.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 2px solid ${t=>t.selected?"#2ed8b6":"#e0e0e0"};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${t=>t.selected?"#f0fffe":"white"};
  
  &:hover {
    border-color: #2ed8b6;
  }
`,zt=n.div`
  width: 40px;
  height: 40px;
  background: ${t=>t.selected?"#2ed8b6":"#f0f0f0"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t=>t.selected?"white":"#666"};
  font-size: 18px;
  margin-right: 12px;
`,Ft=n.div`
  flex: 1;
`,$t=n.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,_t=n.div`
  font-size: 13px;
  color: #666;
`,Mt=n.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${t=>t.selected?"#2ed8b6":"#ddd"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #2ed8b6;
    display: ${t=>t.selected?"block":"none"};
  }
`,Rt=n.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
`,O=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${t=>t.last?"0":"12px"};
  font-size: ${t=>t.total?"18px":"14px"};
  font-weight: ${t=>t.total?"700":"500"};
  color: ${t=>t.total?"#333":"#666"};
  
  ${t=>t.total&&`
    padding-top: 12px;
    border-top: 1px solid #e0e0e0;
    color: #2ed8b6;
  `}
`,Nt=n.button`
  width: 100%;
  height: 56px;
  background: #2ed8b6;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: #26c4a8;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`,Lt=n.div`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  margin-top: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`,Dt="test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";function Ot({isOpen:t,onClose:i,product:s,onPaymentSuccess:c,onPaymentError:a}){const{user:x}=p.useContext(le),{showSuccess:y,showError:l}=de(),[f,m]=p.useState("카드"),[h,b]=p.useState(!1),[g,j]=p.useState(null);if(p.useEffect(()=>{t&&ft(Dt).then(j)},[t]),!t)return null;const w=d=>new Intl.NumberFormat("ko-KR").format(d),C=[{key:"카드",name:"신용/체크카드",desc:"모든 카드사 지원",icon:e.jsx(De,{})},{key:"계좌이체",name:"계좌이체",desc:"실시간 계좌이체",icon:e.jsx(Z,{})},{key:"휴대폰",name:"휴대폰 결제",desc:"통신사 소액결제",icon:e.jsx(Z,{})}],I=async()=>{if(!g||!x||!s){l("결제 준비가 완료되지 않았습니다.");return}b(!0);try{const d=`ORDER_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,z=x.displayName||x.email?.split("@")[0]||"구매자",S={amount:s.price,orderId:d,orderName:s.title,customerName:z,successUrl:`${window.location.origin}/payment/success`,failUrl:`${window.location.origin}/payment/fail`};let k;switch(f){case"카드":k=g.requestPayment("카드",S);break;case"계좌이체":k=g.requestPayment("계좌이체",S);break;case"휴대폰":k=g.requestPayment("휴대폰",{...S,customerMobilePhone:x.phoneNumber||"01000000000"});break;default:throw new Error("지원하지 않는 결제 방법입니다.")}await k}catch(d){console.error("결제 실패:",d),l(d.message||"결제 중 오류가 발생했습니다."),a&&a(d)}finally{b(!1)}},T=s.delivery?3e3:0,E=s.price+T;return e.jsx(ht,{onClick:i,children:e.jsxs(gt,{onClick:d=>d.stopPropagation(),children:[e.jsxs(mt,{children:[e.jsx(bt,{children:"결제하기"}),e.jsx(yt,{onClick:i,children:e.jsx(ue,{})})]}),e.jsxs(vt,{children:[e.jsxs(jt,{children:[e.jsx(wt,{src:s.images?.[0]||"/placeholder.jpg",alt:s.title}),e.jsxs(kt,{children:[e.jsx(Pt,{children:s.title}),e.jsxs(St,{children:[w(s.price),"원"]})]})]}),e.jsxs(Ct,{children:[e.jsx(It,{children:"결제 방법"}),e.jsx(Tt,{children:C.map(d=>e.jsxs(Et,{selected:f===d.key,onClick:()=>m(d.key),children:[e.jsx(zt,{selected:f===d.key,children:d.icon}),e.jsxs(Ft,{children:[e.jsx($t,{children:d.name}),e.jsx(_t,{children:d.desc})]}),e.jsx(Mt,{selected:f===d.key})]},d.key))})]}),e.jsxs(Rt,{children:[e.jsxs(O,{children:[e.jsx("span",{children:"상품 금액"}),e.jsxs("span",{children:[w(s.price),"원"]})]}),T>0&&e.jsxs(O,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[w(T),"원"]})]}),e.jsxs(O,{total:!0,last:!0,children:[e.jsx("span",{children:"총 결제 금액"}),e.jsxs("span",{children:[w(E),"원"]})]})]}),e.jsx(Nt,{onClick:I,disabled:h,children:h?e.jsxs(e.Fragment,{children:[e.jsx(Ne,{className:"fa-spin"}),"결제 진행 중..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),w(E),"원 결제하기"]})}),e.jsxs(Lt,{children:["• 결제 완료 후 판매자와 연결되어 거래를 진행합니다.",e.jsx("br",{}),"• 안전한 거래를 위해 직거래를 권장합니다.",e.jsx("br",{}),"• 문제 발생 시 고객센터로 문의해 주세요."]})]})]})})}const B=n.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,ne=n.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 56px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,oe=n.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,re=n.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,Bt=n.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`,ie=n.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,At=n.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 72px;
  background: var(--color-bg-glass, rgba(255, 255, 255, 0.95));
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: 0 var(--space-4, 16px);
  z-index: 200;
  border-top: 1px solid var(--color-border-light, rgba(0,0,0,0.06));
  box-shadow: var(--shadow-lg, 0 -8px 32px rgba(0,0,0,0.08));
`,Ut=n.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: ${t=>t.liked?"var(--color-mint-main, #2ed8b6)":"var(--color-bg-primary, #fff)"};
  color: ${t=>t.liked?"white":"var(--color-text-secondary, #6b7280)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;
  box-shadow: var(--shadow-md, 0 4px 16px rgba(0,0,0,0.08));
  position: relative;
  overflow: hidden;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg, 0 8px 32px rgba(0,0,0,0.12));
  }
`,se=n.button`
  position: absolute;
  top: 50%;
  ${t=>t.direction==="prev"?"left: 16px;":"right: 16px;"}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.95);
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 10;
  transition: all 0.2s;
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`,qt=n.div`
  position: relative;
  margin-top: 116px; /* 56px(헤더) + 60px(액션바) */
  padding: 16px;
  background: #fff;
`,Kt=n.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  touch-action: pan-y;
`,Ht=n.div`
  display: flex;
  width: ${t=>t.imageCount*100}%;
  height: 100%;
  transform: translateX(-${t=>t.currentIndex*(100/t.imageCount)}%);
  transition: transform 0.3s ease;
`,Yt=n.img`
  width: ${t=>100/t.imageCount}%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,Vt=n.div`
  width: ${t=>100/t.imageCount}%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 48px;
`,Xt=n.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(4px);
`,Wt=n.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`,Gt=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${t=>t.active?"white":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background 0.2s;
`,A=n.div`
  padding: 20px;
`,Jt=n.div`
  margin-bottom: 24px;
`,Qt=n.h1`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`,Zt=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
`,en=n.div`
  font-size: 24px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 16px;
`,tn=n.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`,U=n.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: ${t=>{switch(t.type){case"condition":return"#e8f5e8";case"negotiable":return"#fff3e0";case"delivery":return"#e3f2fd";default:return"#f5f5f5"}}};
  color: ${t=>{switch(t.type){case"condition":return"#2e7d32";case"negotiable":return"#f57c00";case"delivery":return"#1976d2";default:return"#666"}}};
`,nn=n.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
  margin-bottom: 24px;
`,on=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,rn=n.div`
  background: #f8f9fa;
  color: #666;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
`,ae=n.div`
  height: 8px;
  background: #f8f9fa;
  margin: 0 -20px 24px -20px;
`,sn=n.div`
  margin-bottom: 24px;
`,an=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  
  &:hover {
    background: #f8f9fa;
  }
`,cn=n.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${t=>t.imageUrl?`url(${t.imageUrl})`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
`,ln=n.div`
  flex: 1;
`,dn=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,un=n.div`
  color: #4CAF50;
  font-size: 14px;
`,pn=n.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,xn=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #2ed8b6;
  font-weight: 600;
`,fn=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
`,q=n.div`
  text-align: center;
`,K=n.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
`,H=n.div`
  font-size: 12px;
  color: #666;
`,hn=n.div`
  margin-bottom: 24px;
`,gn=n.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`,mn=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,bn=n.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border-color: #2ed8b6;
  }
`,yn=n.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`,vn=n.div`
  padding: 12px;
`,jn=n.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,wn=n.div`
  font-size: 14px;
  font-weight: 600;
  color: #2ed8b6;
`,kn=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`,Pn=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
`,Sn=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,Cn=n.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`,In=n.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`,Tn=n.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  z-index: 200;
  min-width: 120px;
  overflow: hidden;
`,ce=n.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: white;
  color: #333;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
  
  &.delete {
    color: #dc3545;
    
    &:hover {
      background: #fff5f5;
    }
  }
`,En=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 150;
`;function Fn(){const t=Oe(),{id:i}=Be(),{products:s,incrementViews:c,toggleLike:a,changeProductStatus:x,PRODUCT_STATUS:y}=p.useContext(Ae),{user:l}=p.useContext(le),{createOrGetChatRoom:f}=p.useContext(Ue),{showSuccess:m,showError:h,showWarning:b}=de(),[g,j]=p.useState(0),[w,C]=p.useState(!1),[I,T]=p.useState(!0),[E,d]=p.useState(!1),[z,S]=p.useState(!1),[k,ge]=p.useState(0),[Y,me]=p.useState(0),[be,M]=p.useState(!1),o=s.find(r=>String(r.id)===String(i));p.useEffect(()=>{s.length>0&&(T(!1),console.log("🔍 상품 검색:",{searchId:i,totalProducts:s.length,foundProduct:o?"YES":"NO",productIds:s.slice(0,5).map(r=>r.id)}))},[s,i,o]),p.useEffect(()=>{(async()=>{if(!o&&!I&&s.length>0){console.log("🔍 개별 상품 조회 시도:",i);try{const u=await st.getProduct(i);console.log("✅ 개별 상품 조회 성공:",u)}catch(u){console.error("❌ 개별 상품 조회 실패:",u)}}})()},[o,I,s.length,i]),p.useEffect(()=>{o&&(console.log("👀 조회수 증가 조건 확인:",{productId:o.id,productTitle:o.title,sellerId:o.sellerId,currentUserId:l?.uid||"anonymous",isOwnProduct:o.sellerId===l?.uid,viewCount:o.viewCount||0}),o.sellerId!==l?.uid?(console.log("✅ 조회수 증가 시작"),c(o.id)):console.log("❌ 본인 상품이므로 조회수 증가 안함"))},[o?.id]);const ye=()=>{j(r=>r===0?(o?.images?.length||1)-1:r-1)},ve=()=>{j(r=>r===(o?.images?.length||1)-1?0:r+1)},je=()=>{C(!0)},we=r=>{ge(r.targetTouches[0].clientX)},ke=r=>{me(r.targetTouches[0].clientX)},Pe=()=>{if(!k||!Y)return;const r=k-Y,u=r>50,G=r<-50;u&&g<(o?.images?.length||1)-1&&j(P=>P+1),G&&g>0&&j(P=>P-1)},Se=async()=>{if(!l?.isLoggedIn){b("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}try{const r=o.isLikedByUser;await a(o.id),r?m("찜 목록에서 제거되었습니다."):m("찜 목록에 추가되었습니다!",{title:"찜 완료"})}catch(r){console.error("찜하기 실패:",r),h("찜하기 처리 중 오류가 발생했습니다.")}},Ce=async()=>{if(!l?.isLoggedIn){b("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(o.sellerId===l.uid){b("본인 상품에는 채팅할 수 없습니다.",{title:"채팅 불가"});return}if(!z){S(!0);try{console.log("💬 채팅방 생성 시작...",{productId:o.id,sellerId:o.sellerId,buyerId:l.uid});const r=await f(o.id,o.sellerId,l.uid,{title:o.title,price:o.price,images:o.images,status:o.status});console.log("✅ 채팅방 생성 성공:",r),t(`/chat/${r}`)}catch(r){console.error("❌ 채팅방 생성 실패:",r),h("채팅방 생성에 실패했습니다. 다시 시도해주세요.",{title:"채팅 생성 실패"})}finally{S(!1)}}},Ie=async()=>{if(!l?.isLoggedIn){b("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(o.sellerId===l.uid){b("본인 상품은 구매할 수 없습니다.",{title:"구매 불가"});return}if(o.status!==y.ACTIVE){h("이미 판매가 완료된 상품입니다.",{title:"판매 완료"});return}M(!0)},Te=r=>{r.stopPropagation(),d(!E)},Ee=()=>{d(!1),t(`/edit-product/${o.id}`)},ze=async()=>{if(!l?.isLoggedIn||o.sellerId!==l.uid){alert("권한이 없습니다.");return}if(window.confirm("정말 이 상품을 삭제하시겠습니까?"))try{await x(o.id,y.DELETED),alert("상품이 삭제되었습니다."),t("/")}catch(r){console.error("상품 삭제 실패:",r),alert("상품 삭제에 실패했습니다.")}d(!1)},Fe=()=>{d(!1)},$e=async r=>{try{await x(o.id,y.SOLD);const u=await f(o.id,o.sellerId,l.uid,{title:o.title,price:o.price,images:o.images,status:y.SOLD});M(!1),m("결제가 완료되었습니다! 판매자와 연락하여 거래를 진행해 주세요."),t(`/chat/${u}?payment=success`)}catch(u){console.error("결제 후 처리 실패:",u),h("결제는 완료되었지만 후속 처리 중 오류가 발생했습니다.")}},_e=r=>{M(!1),h(r.message||"결제 중 오류가 발생했습니다.")},Me=r=>({excellent:"매우 좋음",good:"좋음",fair:"보통",poor:"나쁨"})[r]||r,V=r=>new Intl.NumberFormat("ko-KR").format(r),Re=r=>{if(!r)return"";const u=r.toDate?r.toDate():new Date(r),P=new Date-u,D=Math.floor(P/6e4),J=Math.floor(P/36e5),Q=Math.floor(P/864e5);return D<1?"방금 전":D<60?`${D}분 전`:J<24?`${J}시간 전`:Q<7?`${Q}일 전`:u.toLocaleDateString("ko-KR")};if(I)return e.jsx(B,{children:e.jsx(kn,{children:"상품 정보를 불러오는 중..."})});if(!o)return e.jsxs(B,{children:[e.jsx(ne,{children:e.jsx(oe,{children:e.jsx(re,{onClick:()=>t(-1),children:e.jsx(ee,{})})})}),e.jsxs(Pn,{children:[e.jsx(qe,{size:48,color:"#ddd"}),e.jsx("h3",{children:"상품을 찾을 수 없습니다"}),e.jsx("p",{children:"삭제되었거나 존재하지 않는 상품입니다."}),e.jsxs("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px"},children:["상품 ID: ",i," | 로드된 상품 수: ",s.length]}),e.jsx("button",{onClick:()=>t("/"),style:{marginTop:"16px",padding:"8px 16px",backgroundColor:"#2ed8b6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:"홈으로 돌아가기"})]})]});const X=o.isLikedByUser||!1,v=o.images||[],W=s.filter(r=>r.category===o.category&&r.id!==o.id).slice(0,4);return e.jsxs(B,{children:[e.jsxs(ne,{children:[e.jsx(oe,{children:e.jsx(re,{onClick:()=>t(-1),children:e.jsx(ee,{})})}),e.jsxs(Bt,{children:[e.jsx(ie,{children:e.jsx(Ke,{})}),l?.uid===o?.sellerId&&e.jsxs(e.Fragment,{children:[e.jsx(ie,{onClick:Te,children:e.jsx(He,{})}),E&&e.jsxs(e.Fragment,{children:[e.jsx(En,{onClick:Fe}),e.jsxs(Tn,{children:[e.jsxs(ce,{onClick:Ee,children:[e.jsx(Ye,{}),"수정"]}),e.jsxs(ce,{className:"delete",onClick:ze,children:[e.jsx(Ve,{}),"삭제"]})]})]})]})]})]}),e.jsx(qt,{children:e.jsx(Kt,{onTouchStart:we,onTouchMove:ke,onTouchEnd:Pe,children:v.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Ht,{imageCount:v.length,currentIndex:g,children:v.map((r,u)=>e.jsx(Yt,{src:r,alt:`상품 이미지 ${u+1}`,imageCount:v.length,onClick:je},u))}),v.length>1&&e.jsxs(e.Fragment,{children:[e.jsx(se,{direction:"prev",onClick:ye,style:{display:g===0?"none":"flex"},children:e.jsx(Xe,{})}),e.jsx(se,{direction:"next",onClick:ve,style:{display:g===v.length-1?"none":"flex"},children:e.jsx(We,{})}),e.jsxs(Xt,{children:[g+1,"/",v.length]}),e.jsx(Wt,{children:v.map((r,u)=>e.jsx(Gt,{active:u===g,onClick:()=>j(u)},u))})]})]}):e.jsx(Vt,{imageCount:1,children:e.jsx(Ge,{})})})}),e.jsxs(A,{children:[e.jsxs(Jt,{children:[e.jsxs(Zt,{children:[e.jsx(te,{}),o.region," ",o.district,e.jsx("span",{children:"•"}),e.jsx(Je,{}),o.viewCount||0,e.jsx("span",{children:"•"}),e.jsx(Qe,{}),o.chatCount||0,e.jsx("span",{children:"•"}),e.jsx(Ze,{}),Re(o.createdAt)]}),e.jsx(Qt,{children:o.title}),e.jsxs(en,{children:[V(o.price),"원",o.negotiable&&e.jsx("span",{style:{fontSize:"14px",color:"#666",marginLeft:"8px"},children:"가격제안 가능"})]}),e.jsxs(tn,{children:[e.jsx(U,{type:"condition",children:Me(o.condition)}),o.negotiable&&e.jsx(U,{type:"negotiable",children:"가격제안 가능"}),o.delivery&&e.jsx(U,{type:"delivery",children:"택배거래 가능"})]})]}),e.jsx(nn,{children:o.description}),o.tags&&o.tags.length>0&&e.jsx(on,{children:o.tags.map((r,u)=>e.jsxs(rn,{children:["#",r]},u))})]}),e.jsx(ae,{}),e.jsx(A,{children:e.jsxs(sn,{children:[e.jsxs(an,{onClick:()=>t(`/user/${o.sellerId}`),children:[e.jsx(cn,{imageUrl:o.sellerProfileImage,children:!o.sellerProfileImage&&(o.sellerNickname?.[0]||"?")}),e.jsxs(ln,{children:[e.jsxs(dn,{children:[o.sellerNickname||"익명",o.sellerVerified&&e.jsx(un,{children:e.jsx(et,{})})]}),e.jsxs(pn,{children:[e.jsx(te,{}),o.region," ",o.district]})]}),e.jsxs(xn,{children:[e.jsx(tt,{}),o.sellerMannerScore||36.5,"°C"]})]}),e.jsxs(fn,{children:[e.jsxs(q,{children:[e.jsx(K,{children:o.sellerTransactionCount||0}),e.jsx(H,{children:"거래"})]}),e.jsxs(q,{children:[e.jsx(K,{children:o.sellerReviewCount||0}),e.jsx(H,{children:"후기"})]}),e.jsxs(q,{children:[e.jsx(K,{children:o.sellerFollowerCount||0}),e.jsx(H,{children:"팔로워"})]})]})]})}),W.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{}),e.jsx(A,{children:e.jsxs(hn,{children:[e.jsx(gn,{children:"이런 상품은 어떠세요?"}),e.jsx(mn,{children:W.map(r=>e.jsxs(bn,{onClick:()=>t(`/product/${r.id}`),children:[e.jsx(yn,{src:r.images?.[0]||"/placeholder.jpg",alt:r.title}),e.jsxs(vn,{children:[e.jsx(jn,{children:r.title}),e.jsxs(wn,{children:[V(r.price),"원"]})]})]},r.id))})]})})]}),e.jsxs(At,{children:[e.jsx(Ut,{onClick:Se,liked:X,"aria-label":"찜하기",children:X?e.jsx(nt,{}):e.jsx(ot,{})}),e.jsxs(TopActionButton,{className:"chat",onClick:Ce,disabled:z,children:[e.jsx(rt,{}),z?"생성 중...":"채팅하기"]}),e.jsxs(TopActionButton,{className:"buy",onClick:Ie,children:[e.jsx(it,{}),"구매하기"]})]}),w&&e.jsxs(Sn,{onClick:()=>C(!1),children:[e.jsx(Cn,{onClick:()=>C(!1),children:e.jsx(ue,{})}),e.jsx(In,{src:v[g],alt:`상품 이미지 ${g+1}`,onClick:r=>r.stopPropagation()})]}),e.jsx(Ot,{isOpen:be,onClose:()=>M(!1),product:o,onPaymentSuccess:$e,onPaymentError:_e})]})}export{Fn as default};
