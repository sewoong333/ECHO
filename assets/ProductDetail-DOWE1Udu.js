import{r as f,U as xe,o as ge,j as e,q as me,s as Ue,t as Ye,v as qe,w as ne,i as n,u as Ke,x as He,P as We,C as Xe,y as re,z as Ve,A as Ge,B as Je,D as Qe,E as Ze,G as et,H as tt,I as ot,J as ie,K as nt,L as rt,M as it,N as st,O as at,Q as ct,R as lt,S as se,V as dt,W as pt,X as ft,p as ut}from"./index-BryaZ5dw.js";function be(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function ve(t,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&_(t,i)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},R(t)}function _(t,i){return _=Object.setPrototypeOf||function(d,l){return d.__proto__=l,d},_(t,i)}function we(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function A(t,i,a){return we()?A=Reflect.construct:A=function(l,u,v){var s=[null];s.push.apply(s,u);var h=Function.bind.apply(l,s),m=new h;return v&&_(m,v.prototype),m},A.apply(null,arguments)}function ht(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function U(t){var i=typeof Map=="function"?new Map:void 0;return U=function(d){if(d===null||!ht(d))return d;if(typeof d!="function")throw new TypeError("Super expression must either be null or a function");if(typeof i<"u"){if(i.has(d))return i.get(d);i.set(d,l)}function l(){return A(d,arguments,R(this).constructor)}return l.prototype=Object.create(d.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),_(l,d)},U(t)}function xt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gt(t,i){if(i&&(typeof i=="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xt(t)}function ye(t){var i=we();return function(){var d=R(t),l;if(i){var u=R(this).constructor;l=Reflect.construct(d,arguments,u)}else l=d.apply(this,arguments);return gt(this,l)}}var M=null;function mt(t,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(M!=null)return M;var d=new Promise(function(l,u){try{var v=function(){B(i)!=null?l(B(i)):u(new bt(i))},s=function(){u(new vt(t))};if(typeof window>"u"||typeof document>"u")return l(null);if(B(i)!=null)return l(B(i));var h=document.querySelector('script[src="'.concat(t,'"]'));if(h!=null){var m;h.removeEventListener("load",v),h.removeEventListener("error",s),(m=h.parentElement)===null||m===void 0||m.removeChild(h)}var x=document.createElement("script");x.src=t,x.addEventListener("load",v),x.addEventListener("error",s),a.priority!=null&&(x.fetchPriority=a.priority),document.head.appendChild(x)}catch(g){u(g);return}});return M=d.catch(function(l){return M=null,Promise.reject(l)}),M}function B(t){return window[t]}var bt=function(t){ve(a,t);var i=ye(a);function a(d){var l;return be(this,a),l=i.call(this,"[TossPayments SDK] ".concat(d," is not available")),l.name="NamespaceNotAvailableError",l}return a}(U(Error)),vt=function(t){ve(a,t);var i=ye(a);function a(d){var l;return be(this,a),l=i.call(this,"[TossPayments SDK] Failed to load script: [".concat(d,"]")),l.name="ScriptLoadFailedError",l}return a}(U(Error)),wt="https://js.tosspayments.com/v1";function yt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.src,d=a===void 0?wt:a;return typeof window>"u"?Promise.resolve({requestPayment:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")},requestBillingAuth:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")},cancelPayment:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")}}):mt(d,"TossPayments").then(function(l){return l(t)})}const jt=n.div`
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
`,kt=n.div`
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
`,Pt=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
`,St=n.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
`,Ct=n.button`
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
`,It=n.div`
  padding: 24px;
`,Et=n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
`,zt=n.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`,Tt=n.div`
  flex: 1;
`,$t=n.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
`,Ft=n.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
`,Mt=n.div`
  margin-bottom: 24px;
`,Rt=n.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`,_t=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Dt=n.div`
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
`,Lt=n.div`
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
`,Nt=n.div`
  flex: 1;
`,Ot=n.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,Bt=n.div`
  font-size: 13px;
  color: #666;
`,At=n.div`
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
`,Ut=n.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
`,q=n.div`
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
`,Yt=n.button`
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
`,qt=n.div`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  margin-top: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`,Kt="test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";function Ht({isOpen:t,onClose:i,product:a,onPaymentSuccess:d,onPaymentError:l}){var P;const{user:u}=f.useContext(xe),{showSuccess:v,showError:s}=ge(),[h,m]=f.useState("카드"),[x,g]=f.useState(!1),[b,j]=f.useState(null);if(f.useEffect(()=>{t&&yt(Kt).then(j)},[t]),!t)return null;const k=p=>new Intl.NumberFormat("ko-KR").format(p),E=[{key:"카드",name:"신용/체크카드",desc:"모든 카드사 지원",icon:e.jsx(qe,{})},{key:"계좌이체",name:"계좌이체",desc:"실시간 계좌이체",icon:e.jsx(ne,{})},{key:"휴대폰",name:"휴대폰 결제",desc:"통신사 소액결제",icon:e.jsx(ne,{})}],z=async()=>{var p;if(!b||!u||!a){s("결제 준비가 완료되지 않았습니다.");return}g(!0);try{const y=`ORDER_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,D=u.displayName||((p=u.email)==null?void 0:p.split("@")[0])||"구매자",F={amount:a.price,orderId:y,orderName:a.title,customerName:D,successUrl:`${window.location.origin}/payment/success`,failUrl:`${window.location.origin}/payment/fail`};let S;switch(h){case"카드":S=b.requestPayment("카드",F);break;case"계좌이체":S=b.requestPayment("계좌이체",F);break;case"휴대폰":S=b.requestPayment("휴대폰",{...F,customerMobilePhone:u.phoneNumber||"01000000000"});break;default:throw new Error("지원하지 않는 결제 방법입니다.")}await S}catch(y){console.error("결제 실패:",y),s(y.message||"결제 중 오류가 발생했습니다."),l&&l(y)}finally{g(!1)}},T=a.delivery?3e3:0,$=a.price+T;return e.jsx(jt,{onClick:i,children:e.jsxs(kt,{onClick:p=>p.stopPropagation(),children:[e.jsxs(Pt,{children:[e.jsx(St,{children:"결제하기"}),e.jsx(Ct,{onClick:i,children:e.jsx(me,{})})]}),e.jsxs(It,{children:[e.jsxs(Et,{children:[e.jsx(zt,{src:((P=a.images)==null?void 0:P[0])||"/placeholder.jpg",alt:a.title}),e.jsxs(Tt,{children:[e.jsx($t,{children:a.title}),e.jsxs(Ft,{children:[k(a.price),"원"]})]})]}),e.jsxs(Mt,{children:[e.jsx(Rt,{children:"결제 방법"}),e.jsx(_t,{children:E.map(p=>e.jsxs(Dt,{selected:h===p.key,onClick:()=>m(p.key),children:[e.jsx(Lt,{selected:h===p.key,children:p.icon}),e.jsxs(Nt,{children:[e.jsx(Ot,{children:p.name}),e.jsx(Bt,{children:p.desc})]}),e.jsx(At,{selected:h===p.key})]},p.key))})]}),e.jsxs(Ut,{children:[e.jsxs(q,{children:[e.jsx("span",{children:"상품 금액"}),e.jsxs("span",{children:[k(a.price),"원"]})]}),T>0&&e.jsxs(q,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[k(T),"원"]})]}),e.jsxs(q,{total:!0,last:!0,children:[e.jsx("span",{children:"총 결제 금액"}),e.jsxs("span",{children:[k($),"원"]})]})]}),e.jsx(Yt,{onClick:z,disabled:x,children:x?e.jsxs(e.Fragment,{children:[e.jsx(Ue,{className:"fa-spin"}),"결제 진행 중..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Ye,{}),k($),"원 결제하기"]})}),e.jsxs(qt,{children:["• 결제 완료 후 판매자와 연결되어 거래를 진행합니다.",e.jsx("br",{}),"• 안전한 거래를 위해 직거래를 권장합니다.",e.jsx("br",{}),"• 문제 발생 시 고객센터로 문의해 주세요."]})]})]})})}const K=n.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,ae=n.div`
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
`,ce=n.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,le=n.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,Wt=n.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`,de=n.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,Xt=n.div`
  position: fixed;
  bottom: 80px; /* 하단 네비게이션 위에 */
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 468px;
  height: 60px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: 0 var(--space-4, 16px);
  z-index: 99;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
`,Vt=n.button`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full, 50%);
  border: none;
  background: ${t=>t.liked?"var(--color-mint-main, #2ed8b6)":"var(--color-bg-primary, #ffffff)"};
  color: ${t=>t.liked?"white":"var(--color-text-secondary, #6b7280)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: all var(--transition-normal, 0.2s ease);
  box-shadow: var(--shadow-md, 0 4px 16px rgba(0, 0, 0, 0.08));
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg, 0 8px 32px rgba(0, 0, 0, 0.12));
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`,Gt=n.button`
  flex: 1;
  height: 48px;
  border-radius: var(--radius-2xl, 24px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2, 8px);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal, 0.2s ease);
  position: relative;
  overflow: hidden;
  
  &.chat {
    background: var(--color-bg-primary, #ffffff);
    color: var(--color-text-primary, #1a1a1a);
    box-shadow: var(--shadow-md, 0 4px 16px rgba(0, 0, 0, 0.08));
    
    &:hover {
      background: var(--color-bg-secondary, #f8f9fa);
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg, 0 8px 24px rgba(0, 0, 0, 0.12));
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
  }
  
  &.buy {
    background: linear-gradient(135deg, var(--color-mint-main, #2ed8b6), var(--color-mint-dark, #26c4a8));
    color: white;
    box-shadow: var(--shadow-md, 0 4px 16px rgba(46, 216, 182, 0.3));
    
    &:hover {
      background: linear-gradient(135deg, var(--color-mint-dark, #26c4a8), var(--color-mint-main, #2ed8b6));
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg, 0 8px 24px rgba(46, 216, 182, 0.4));
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }
  
  &:hover::before {
    left: 100%;
  }
`,Jt=n.div`
  position: relative;
  flex: 1;
`,Qt=n.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid var(--color-border-light, #e0e0e0);
  border-radius: 12px;
  box-shadow: var(--shadow-lg, 0 8px 32px rgba(0, 0, 0, 0.12));
  margin-bottom: 8px;
  overflow: hidden;
  z-index: 1000;
`,pe=n.button`
  width: 100%;
  padding: 16px;
  border: none;
  background: white;
  color: var(--color-text-primary, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-bg-secondary, #f8f9fa);
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border-light, #e0e0e0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Zt=n.button`
  flex: 1;
  height: 48px;
  border-radius: var(--radius-2xl, 24px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2, 8px);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal, 0.2s ease);
  position: relative;
  overflow: hidden;
  background: var(--color-bg-primary, #ffffff);
  color: var(--color-text-primary, #1a1a1a);
  box-shadow: var(--shadow-md, 0 4px 16px rgba(0, 0, 0, 0.08));
  
  &:hover {
    background: var(--color-bg-secondary, #f8f9fa);
    transform: translateY(-1px);
    box-shadow: var(--shadow-lg, 0 8px 24px rgba(0, 0, 0, 0.12));
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }
  
  &:hover::before {
    left: 100%;
  }
`,eo=n.div`
  position: relative;
  margin-top: 116px; /* 56px(헤더) + 60px(액션바) */
  padding: 16px;
  background: #fff;
`,to=n.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  touch-action: pan-y;
`,oo=n.div`
  display: flex;
  width: ${t=>t.imageCount*100}%;
  height: 100%;
  transform: translateX(-${t=>t.currentIndex*(100/t.imageCount)}%);
  transition: transform 0.3s ease;
`,no=n.img`
  width: ${t=>100/t.imageCount}%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,ro=n.div`
  width: ${t=>100/t.imageCount}%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 48px;
`,fe=n.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${t=>t.direction==="prev"?"left: 16px;":"right: 16px;"}
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
  transition: all 0.2s ease;
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`,io=n.div`
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
`,so=n.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`,ao=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${t=>t.active?"white":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background 0.2s;
`,H=n.div`
  padding: 20px;
`,co=n.div`
  margin-bottom: 24px;
`,lo=n.h1`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`,po=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
`,fo=n.div`
  font-size: 24px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 16px;
`,uo=n.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`,W=n.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: ${t=>{switch(t.type){case"condition":return"#e8f5e8";case"negotiable":return"#fff3e0";case"delivery":return"#e3f2fd";default:return"#f5f5f5"}}};
  color: ${t=>{switch(t.type){case"condition":return"#2e7d32";case"negotiable":return"#f57c00";case"delivery":return"#1976d2";default:return"#666"}}};
`,ho=n.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
  margin-bottom: 24px;
`,xo=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,go=n.div`
  background: #f8f9fa;
  color: #666;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
`,ue=n.div`
  height: 8px;
  background: #f8f9fa;
  margin: 0 -20px 24px -20px;
`,mo=n.div`
  margin-bottom: 24px;
`,bo=n.div`
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
`,vo=n.div`
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
`,wo=n.div`
  flex: 1;
`,yo=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,jo=n.div`
  color: #4CAF50;
  font-size: 14px;
`,ko=n.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,Po=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #2ed8b6;
  font-weight: 600;
`,So=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
`,X=n.div`
  text-align: center;
`,V=n.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
`,G=n.div`
  font-size: 12px;
  color: #666;
`,Co=n.div`
  margin-bottom: 24px;
`,Io=n.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`,Eo=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,zo=n.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border-color: #2ed8b6;
  }
`,To=n.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`,$o=n.div`
  padding: 12px;
`,Fo=n.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Mo=n.div`
  font-size: 14px;
  font-weight: 600;
  color: #2ed8b6;
`,Ro=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`,_o=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
`,Do=n.div`
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
`,Lo=n.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`,No=n.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`,Oo=n.div`
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
`,he=n.button`
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
`,Bo=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 150;
`;function Uo(){var ee;const t=Ke(),{id:i}=He(),{products:a,incrementViews:d,toggleLike:l,changeProductStatus:u,PRODUCT_STATUS:v}=f.useContext(We),{user:s}=f.useContext(xe),{createOrGetChatRoom:h}=f.useContext(Xe),{showSuccess:m,showError:x,showWarning:g}=ge(),[b,j]=f.useState(0),[k,E]=f.useState(!1),[z,T]=f.useState(!0),[$,P]=f.useState(!1),[p,y]=f.useState(!1),[D,F]=f.useState(0),[S,je]=f.useState(0),[ke,L]=f.useState(!1),[N,Y]=f.useState(!1),o=a.find(r=>String(r.id)===String(i));f.useEffect(()=>{a.length>0&&(T(!1),console.log("🔍 상품 검색:",{searchId:i,totalProducts:a.length,foundProduct:o?"YES":"NO",productIds:a.slice(0,5).map(r=>r.id)}))},[a,i,o]),f.useEffect(()=>{(async()=>{if(!o&&!z&&a.length>0){console.log("🔍 개별 상품 조회 시도:",i);try{const c=await ut.getProduct(i);console.log("✅ 개별 상품 조회 성공:",c)}catch(c){console.error("❌ 개별 상품 조회 실패:",c)}}})()},[o,z,a.length,i]),f.useEffect(()=>{o&&(console.log("👀 조회수 증가 조건 확인:",{productId:o.id,productTitle:o.title,sellerId:o.sellerId,currentUserId:(s==null?void 0:s.uid)||"anonymous",isOwnProduct:o.sellerId===(s==null?void 0:s.uid),viewCount:o.viewCount||0}),o.sellerId!==(s==null?void 0:s.uid)?(console.log("✅ 조회수 증가 시작"),d(o.id)):console.log("❌ 본인 상품이므로 조회수 증가 안함"))},[o==null?void 0:o.id]),f.useEffect(()=>{const r=c=>{N&&!c.target.closest(".chat-dropdown-container")&&Y(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[N]);const Pe=()=>{j(r=>{var c;return r===0?(((c=o==null?void 0:o.images)==null?void 0:c.length)||1)-1:r-1})},Se=()=>{j(r=>{var c;return r===(((c=o==null?void 0:o.images)==null?void 0:c.length)||1)-1?0:r+1})},Ce=()=>{E(!0)},Ie=r=>{F(r.targetTouches[0].clientX)},Ee=r=>{je(r.targetTouches[0].clientX)},ze=()=>{var I;if(!D||!S)return;const r=D-S,c=r>50,O=r<-50;c&&b<(((I=o==null?void 0:o.images)==null?void 0:I.length)||1)-1&&j(C=>C+1),O&&b>0&&j(C=>C-1)},Te=async()=>{if(!(s!=null&&s.isLoggedIn)){g("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}try{const r=o.isLikedByUser;await l(o.id),r?m("찜 목록에서 제거되었습니다."):m("찜 목록에 추가되었습니다!",{title:"찜 완료"})}catch(r){console.error("찜하기 실패:",r),x("찜하기 처리 중 오류가 발생했습니다.")}},$e=async()=>{if(!(s!=null&&s.isLoggedIn)){g("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(o.sellerId===s.uid){g("본인 상품에는 채팅할 수 없습니다.",{title:"채팅 불가"});return}if(!p){y(!0);try{console.log("💬 채팅방 생성 시작...",{productId:o.id,sellerId:o.sellerId,buyerId:s.uid});const r=await h(o.id,o.sellerId,s.uid,{title:o.title,price:o.price,images:o.images,status:o.status});console.log("✅ 채팅방 생성 성공:",r),t(`/chat/${r}`)}catch(r){console.error("❌ 채팅방 생성 실패:",r),x("채팅방 생성에 실패했습니다. 다시 시도해주세요.",{title:"채팅 생성 실패"})}finally{y(!1)}}},Fe=()=>{if(!(s!=null&&s.isLoggedIn)){g("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(o.sellerId===s.uid){g("본인 상품에는 문자를 보낼 수 없습니다.",{title:"문자 발송 불가"});return}if(!o.showPhoneNumber||!o.sellerPhone){g("판매자가 전화번호를 공개하지 않았습니다.",{title:"전화번호 비공개"});return}const r=`[ECHO] ${o.title} 상품에 대해 문의드립니다.`,c=o.sellerPhone.replace(/-/g,"");try{/iPad|iPhone|iPod/.test(navigator.userAgent)?window.location.href=`sms:${c}&body=${encodeURIComponent(r)}`:/Android/.test(navigator.userAgent)?window.location.href=`sms:${c}?body=${encodeURIComponent(r)}`:navigator.clipboard.writeText(c).then(()=>{m(`판매자 전화번호가 복사되었습니다: ${c}`,{title:"번호 복사 완료"})}).catch(()=>{m(`판매자 전화번호: ${c}`,{title:"판매자 연락처"})}),Y(!1)}catch(O){console.error("SMS 발송 실패:",O),x("문자 발송에 실패했습니다.",{title:"발송 실패"})}},Me=async()=>{if(!(s!=null&&s.isLoggedIn)){g("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(o.sellerId===s.uid){g("본인 상품은 구매할 수 없습니다.",{title:"구매 불가"});return}if(o.status!==v.ACTIVE){x("이미 판매가 완료된 상품입니다.",{title:"판매 완료"});return}L(!0)},Re=r=>{r.stopPropagation(),P(!$)},_e=()=>{P(!1),t(`/edit-product/${o.id}`)},De=async()=>{if(!(s!=null&&s.isLoggedIn)||o.sellerId!==s.uid){alert("권한이 없습니다.");return}if(window.confirm("정말 이 상품을 삭제하시겠습니까?"))try{await u(o.id,v.DELETED),alert("상품이 삭제되었습니다."),t("/")}catch(r){console.error("상품 삭제 실패:",r),alert("상품 삭제에 실패했습니다.")}P(!1)},Le=()=>{P(!1)},Ne=async r=>{try{await u(o.id,v.SOLD);const c=await h(o.id,o.sellerId,s.uid,{title:o.title,price:o.price,images:o.images,status:v.SOLD});L(!1),m("결제가 완료되었습니다! 판매자와 연락하여 거래를 진행해 주세요."),t(`/chat/${c}?payment=success`)}catch(c){console.error("결제 후 처리 실패:",c),x("결제는 완료되었지만 후속 처리 중 오류가 발생했습니다.")}},Oe=r=>{L(!1),x(r.message||"결제 중 오류가 발생했습니다.")},Be=r=>({excellent:"매우 좋음",good:"좋음",fair:"보통",poor:"나쁨"})[r]||r,J=r=>new Intl.NumberFormat("ko-KR").format(r),Ae=r=>{if(!r)return"";const c=r.toDate?r.toDate():new Date(r),I=new Date-c,C=Math.floor(I/6e4),te=Math.floor(I/36e5),oe=Math.floor(I/864e5);return C<1?"방금 전":C<60?`${C}분 전`:te<24?`${te}시간 전`:oe<7?`${oe}일 전`:c.toLocaleDateString("ko-KR")};if(z)return e.jsx(K,{children:e.jsx(Ro,{children:"상품 정보를 불러오는 중..."})});if(!o)return e.jsxs(K,{children:[e.jsx(ae,{children:e.jsx(ce,{children:e.jsx(le,{onClick:()=>t(-1),children:e.jsx(re,{})})})}),e.jsxs(_o,{children:[e.jsx(Ve,{size:48,color:"#ddd"}),e.jsx("h3",{children:"상품을 찾을 수 없습니다"}),e.jsx("p",{children:"삭제되었거나 존재하지 않는 상품입니다."}),e.jsxs("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px"},children:["상품 ID: ",i," | 로드된 상품 수: ",a.length]}),e.jsx("button",{onClick:()=>t("/"),style:{marginTop:"16px",padding:"8px 16px",backgroundColor:"#2ed8b6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:"홈으로 돌아가기"})]})]});const Q=o.isLikedByUser||!1,w=o.images||[],Z=a.filter(r=>r.category===o.category&&r.id!==o.id).slice(0,4);return e.jsxs(K,{children:[e.jsxs(ae,{children:[e.jsx(ce,{children:e.jsx(le,{onClick:()=>t(-1),children:e.jsx(re,{})})}),e.jsxs(Wt,{children:[e.jsx(de,{children:e.jsx(Ge,{})}),(s==null?void 0:s.uid)===(o==null?void 0:o.sellerId)&&e.jsxs(e.Fragment,{children:[e.jsx(de,{onClick:Re,children:e.jsx(Je,{})}),$&&e.jsxs(e.Fragment,{children:[e.jsx(Bo,{onClick:Le}),e.jsxs(Oo,{children:[e.jsxs(he,{onClick:_e,children:[e.jsx(Qe,{}),"수정"]}),e.jsxs(he,{className:"delete",onClick:De,children:[e.jsx(Ze,{}),"삭제"]})]})]})]})]})]}),e.jsx(eo,{children:e.jsx(to,{onTouchStart:Ie,onTouchMove:Ee,onTouchEnd:ze,children:w.length>0?e.jsxs(e.Fragment,{children:[e.jsx(oo,{imageCount:w.length,currentIndex:b,children:w.map((r,c)=>e.jsx(no,{src:r,alt:`상품 이미지 ${c+1}`,imageCount:w.length,onClick:Ce},c))}),w.length>1&&e.jsxs(e.Fragment,{children:[e.jsx(fe,{direction:"prev",onClick:Pe,style:{display:b===0?"none":"flex"},children:e.jsx(et,{})}),e.jsx(fe,{direction:"next",onClick:Se,style:{display:b===w.length-1?"none":"flex"},children:e.jsx(tt,{})}),e.jsxs(io,{children:[b+1,"/",w.length]}),e.jsx(so,{children:w.map((r,c)=>e.jsx(ao,{active:c===b,onClick:()=>j(c)},c))})]})]}):e.jsx(ro,{imageCount:1,children:e.jsx(ot,{})})})}),e.jsxs(H,{children:[e.jsxs(co,{children:[e.jsxs(po,{children:[e.jsx(ie,{}),o.region," ",o.district,e.jsx("span",{children:"•"}),e.jsx(nt,{}),o.viewCount||0,e.jsx("span",{children:"•"}),e.jsx(rt,{}),o.chatCount||0,e.jsx("span",{children:"•"}),e.jsx(it,{}),Ae(o.createdAt)]}),e.jsx(lo,{children:o.title}),e.jsxs(fo,{children:[J(o.price),"원",o.negotiable&&e.jsx("span",{style:{fontSize:"14px",color:"#666",marginLeft:"8px"},children:"가격제안 가능"})]}),e.jsxs(uo,{children:[e.jsx(W,{type:"condition",children:Be(o.condition)}),o.negotiable&&e.jsx(W,{type:"negotiable",children:"가격제안 가능"}),o.delivery&&e.jsx(W,{type:"delivery",children:"택배거래 가능"})]})]}),e.jsx(ho,{children:o.description}),o.tags&&o.tags.length>0&&e.jsx(xo,{children:o.tags.map((r,c)=>e.jsxs(go,{children:["#",r]},c))})]}),e.jsx(ue,{}),e.jsx(H,{children:e.jsxs(mo,{children:[e.jsxs(bo,{onClick:()=>t(`/user/${o.sellerId}`),children:[e.jsx(vo,{imageUrl:o.sellerProfileImage,children:!o.sellerProfileImage&&(((ee=o.sellerNickname)==null?void 0:ee[0])||"?")}),e.jsxs(wo,{children:[e.jsxs(yo,{children:[o.sellerNickname||"익명",o.sellerVerified&&e.jsx(jo,{children:e.jsx(st,{})})]}),e.jsxs(ko,{children:[e.jsx(ie,{}),o.region," ",o.district]})]}),e.jsxs(Po,{children:[e.jsx(at,{}),o.sellerMannerScore||36.5,"°C"]})]}),e.jsxs(So,{children:[e.jsxs(X,{children:[e.jsx(V,{children:o.sellerTransactionCount||0}),e.jsx(G,{children:"거래"})]}),e.jsxs(X,{children:[e.jsx(V,{children:o.sellerReviewCount||0}),e.jsx(G,{children:"후기"})]}),e.jsxs(X,{children:[e.jsx(V,{children:o.sellerFollowerCount||0}),e.jsx(G,{children:"팔로워"})]})]})]})}),Z.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{}),e.jsx(H,{children:e.jsxs(Co,{children:[e.jsx(Io,{children:"이런 상품은 어떠세요?"}),e.jsx(Eo,{children:Z.map(r=>{var c;return e.jsxs(zo,{onClick:()=>t(`/product/${r.id}`),children:[e.jsx(To,{src:((c=r.images)==null?void 0:c[0])||"/placeholder.jpg",alt:r.title}),e.jsxs($o,{children:[e.jsx(Fo,{children:r.title}),e.jsxs(Mo,{children:[J(r.price),"원"]})]})]},r.id)})})]})})]}),e.jsxs(Xt,{children:[e.jsx(Vt,{onClick:Te,liked:Q,"aria-label":"찜하기",children:Q?e.jsx(ct,{}):e.jsx(lt,{})}),e.jsxs(Jt,{className:"chat-dropdown-container",children:[N&&e.jsxs(Qt,{children:[e.jsxs(pe,{onClick:$e,disabled:p,children:[e.jsx(se,{}),p?"생성 중...":"채팅하기"]}),e.jsxs(pe,{onClick:Fe,disabled:!(o!=null&&o.showPhoneNumber)||!(o!=null&&o.sellerPhone),children:[e.jsx(dt,{}),"문자보내기"]})]}),e.jsxs(Zt,{onClick:()=>Y(!N),disabled:p,children:[e.jsx(se,{}),p?"생성 중...":"연락하기",e.jsx(pt,{style:{fontSize:"12px",marginLeft:"4px"}})]})]}),e.jsxs(Gt,{className:"buy",onClick:Me,children:[e.jsx(ft,{}),"구매하기"]})]}),k&&e.jsxs(Do,{onClick:()=>E(!1),children:[e.jsx(Lo,{onClick:()=>E(!1),children:e.jsx(me,{})}),e.jsx(No,{src:w[b],alt:`상품 이미지 ${b+1}`,onClick:r=>r.stopPropagation()})]}),e.jsx(Ht,{isOpen:ke,onClose:()=>L(!1),product:o,onPaymentSuccess:Ne,onPaymentError:Oe})]})}export{Uo as default};
