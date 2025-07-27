import{r as x,U as he,o as be,j as e,q as me,s as Ye,t as qe,v as Ke,w as oe,i as o,u as He,x as We,P as Ve,C as Xe,y as re,z as Ge,A as Je,B as Qe,D as Ze,E as et,G as tt,H as nt,I as ie,J as ot,K as se,L as rt,M as it,N as st,O as at,Q as ct,R as lt,S as dt,V as ae,W as pt,X as xt,Y as ut,p as gt}from"./index-C0jD-Qlp.js";function we(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function ve(t,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&D(t,i)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_(t)}function D(t,i){return D=Object.setPrototypeOf||function(d,l){return d.__proto__=l,d},D(t,i)}function ye(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function U(t,i,a){return ye()?U=Reflect.construct:U=function(l,u,w){var s=[null];s.push.apply(s,u);var g=Function.bind.apply(l,s),b=new g;return w&&D(b,w.prototype),b},U.apply(null,arguments)}function ft(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function Y(t){var i=typeof Map=="function"?new Map:void 0;return Y=function(d){if(d===null||!ft(d))return d;if(typeof d!="function")throw new TypeError("Super expression must either be null or a function");if(typeof i<"u"){if(i.has(d))return i.get(d);i.set(d,l)}function l(){return U(d,arguments,_(this).constructor)}return l.prototype=Object.create(d.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),D(l,d)},Y(t)}function ht(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function bt(t,i){if(i&&(typeof i=="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ht(t)}function je(t){var i=ye();return function(){var d=_(t),l;if(i){var u=_(this).constructor;l=Reflect.construct(d,arguments,u)}else l=d.apply(this,arguments);return bt(this,l)}}var R=null;function mt(t,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(R!=null)return R;var d=new Promise(function(l,u){try{var w=function(){B(i)!=null?l(B(i)):u(new wt(i))},s=function(){u(new vt(t))};if(typeof window>"u"||typeof document>"u")return l(null);if(B(i)!=null)return l(B(i));var g=document.querySelector('script[src="'.concat(t,'"]'));if(g!=null){var b;g.removeEventListener("load",w),g.removeEventListener("error",s),(b=g.parentElement)===null||b===void 0||b.removeChild(g)}var f=document.createElement("script");f.src=t,f.addEventListener("load",w),f.addEventListener("error",s),a.priority!=null&&(f.fetchPriority=a.priority),document.head.appendChild(f)}catch(h){u(h);return}});return R=d.catch(function(l){return R=null,Promise.reject(l)}),R}function B(t){return window[t]}var wt=function(t){ve(a,t);var i=je(a);function a(d){var l;return we(this,a),l=i.call(this,"[TossPayments SDK] ".concat(d," is not available")),l.name="NamespaceNotAvailableError",l}return a}(Y(Error)),vt=function(t){ve(a,t);var i=je(a);function a(d){var l;return we(this,a),l=i.call(this,"[TossPayments SDK] Failed to load script: [".concat(d,"]")),l.name="ScriptLoadFailedError",l}return a}(Y(Error)),yt="https://js.tosspayments.com/v1";function jt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.src,d=a===void 0?yt:a;return typeof window>"u"?Promise.resolve({requestPayment:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")},requestBillingAuth:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")},cancelPayment:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")}}):mt(d,"TossPayments").then(function(l){return l(t)})}const kt=o.div`
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
`,Pt=o.div`
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
`,St=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
`,Ct=o.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
`,It=o.button`
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
`,zt=o.div`
  padding: 24px;
`,$t=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
`,Et=o.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`,Tt=o.div`
  flex: 1;
`,Ft=o.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
`,Mt=o.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
`,Rt=o.div`
  margin-bottom: 24px;
`,_t=o.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`,Dt=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Lt=o.div`
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
`,Nt=o.div`
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
`,Ot=o.div`
  flex: 1;
`,Bt=o.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,At=o.div`
  font-size: 13px;
  color: #666;
`,Ut=o.div`
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
`,Yt=o.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
`,K=o.div`
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
`,qt=o.button`
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
`,Kt=o.div`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  margin-top: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`,Ht="test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";function Wt({isOpen:t,onClose:i,product:a,onPaymentSuccess:d,onPaymentError:l}){var S;const{user:u}=x.useContext(he),{showSuccess:w,showError:s}=be(),[g,b]=x.useState("카드"),[f,h]=x.useState(!1),[m,k]=x.useState(null);if(x.useEffect(()=>{t&&jt(Ht).then(k)},[t]),!t)return null;const P=p=>new Intl.NumberFormat("ko-KR").format(p),$=[{key:"카드",name:"신용/체크카드",desc:"모든 카드사 지원",icon:e.jsx(Ke,{})},{key:"계좌이체",name:"계좌이체",desc:"실시간 계좌이체",icon:e.jsx(oe,{})},{key:"휴대폰",name:"휴대폰 결제",desc:"통신사 소액결제",icon:e.jsx(oe,{})}],E=async()=>{var p;if(!m||!u||!a){s("결제 준비가 완료되지 않았습니다.");return}h(!0);try{const j=`ORDER_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,L=u.displayName||((p=u.email)==null?void 0:p.split("@")[0])||"구매자",M={amount:a.price,orderId:j,orderName:a.title,customerName:L,successUrl:`${window.location.origin}/payment/success`,failUrl:`${window.location.origin}/payment/fail`};let C;switch(g){case"카드":C=m.requestPayment("카드",M);break;case"계좌이체":C=m.requestPayment("계좌이체",M);break;case"휴대폰":C=m.requestPayment("휴대폰",{...M,customerMobilePhone:u.phoneNumber||"01000000000"});break;default:throw new Error("지원하지 않는 결제 방법입니다.")}await C}catch(j){console.error("결제 실패:",j),s(j.message||"결제 중 오류가 발생했습니다."),l&&l(j)}finally{h(!1)}},T=a.delivery?3e3:0,F=a.price+T;return e.jsx(kt,{onClick:i,children:e.jsxs(Pt,{onClick:p=>p.stopPropagation(),children:[e.jsxs(St,{children:[e.jsx(Ct,{children:"결제하기"}),e.jsx(It,{onClick:i,children:e.jsx(me,{})})]}),e.jsxs(zt,{children:[e.jsxs($t,{children:[e.jsx(Et,{src:((S=a.images)==null?void 0:S[0])||"/placeholder.jpg",alt:a.title}),e.jsxs(Tt,{children:[e.jsx(Ft,{children:a.title}),e.jsxs(Mt,{children:[P(a.price),"원"]})]})]}),e.jsxs(Rt,{children:[e.jsx(_t,{children:"결제 방법"}),e.jsx(Dt,{children:$.map(p=>e.jsxs(Lt,{selected:g===p.key,onClick:()=>b(p.key),children:[e.jsx(Nt,{selected:g===p.key,children:p.icon}),e.jsxs(Ot,{children:[e.jsx(Bt,{children:p.name}),e.jsx(At,{children:p.desc})]}),e.jsx(Ut,{selected:g===p.key})]},p.key))})]}),e.jsxs(Yt,{children:[e.jsxs(K,{children:[e.jsx("span",{children:"상품 금액"}),e.jsxs("span",{children:[P(a.price),"원"]})]}),T>0&&e.jsxs(K,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[P(T),"원"]})]}),e.jsxs(K,{total:!0,last:!0,children:[e.jsx("span",{children:"총 결제 금액"}),e.jsxs("span",{children:[P(F),"원"]})]})]}),e.jsx(qt,{onClick:E,disabled:f,children:f?e.jsxs(e.Fragment,{children:[e.jsx(Ye,{className:"fa-spin"}),"결제 진행 중..."]}):e.jsxs(e.Fragment,{children:[e.jsx(qe,{}),P(F),"원 결제하기"]})}),e.jsxs(Kt,{children:["• 결제 완료 후 판매자와 연결되어 거래를 진행합니다.",e.jsx("br",{}),"• 안전한 거래를 위해 직거래를 권장합니다.",e.jsx("br",{}),"• 문제 발생 시 고객센터로 문의해 주세요."]})]})]})})}const H=o.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,ce=o.div`
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
`,le=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,de=o.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,Vt=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`,pe=o.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,Xt=o.div`
  width: 100%;
  max-width: 500px;
  height: 72px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 20px;
  margin: 24px auto;
  border: 1px solid rgba(46, 216, 182, 0.1);
  border-radius: 24px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    0 4px 16px rgba(46, 216, 182, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  
  /* 글로우 효과 */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, 
      rgba(46, 216, 182, 0.3) 0%, 
      transparent 50%, 
      rgba(255, 165, 0, 0.2) 100%);
    border-radius: 26px;
    z-index: -1;
    opacity: 0.6;
  }
`,Gt=o.button`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  border: none;
  background: ${t=>t.liked?"linear-gradient(135deg, #ff6b9d 0%, #e91e63 100%)":"linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)"};
  color: ${t=>t.liked?"white":"#64748b"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${t=>t.liked?"0 8px 24px rgba(255, 107, 157, 0.3), 0 4px 12px rgba(233, 30, 99, 0.2)":"0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)"};
  position: relative;
  overflow: hidden;
  border: ${t=>t.liked?"none":"1px solid rgba(148, 163, 184, 0.1)"};
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: ${t=>t.liked?"0 12px 32px rgba(255, 107, 157, 0.4), 0 6px 16px rgba(233, 30, 99, 0.3)":"0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(46, 216, 182, 0.1)"};
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
  
  /* 반짝이는 효과 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  /* 찜했을 때 하트 펄스 효과 */
  ${t=>t.liked&&`
    animation: heartPulse 1.5s ease-in-out infinite;
    
    @keyframes heartPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  `}
`,Jt=o.button`
  flex: 1;
  height: 56px;
  border-radius: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  letter-spacing: -0.3px;
  white-space: nowrap;
  
  &.chat {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
    color: #334155;
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8),
      0 2px 8px rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(148, 163, 184, 0.1);
    
    &:hover {
      background: linear-gradient(135deg, rgba(245, 247, 250, 0.98) 0%, rgba(241, 245, 249, 0.95) 100%);
      transform: translateY(-2px) scale(1.02);
      box-shadow: 
        0 8px 24px rgba(0, 0, 0, 0.12),
        0 4px 12px rgba(99, 102, 241, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
  }
  
  &.buy {
    background: linear-gradient(135deg, #2ed8b6 0%, #00d4aa 50%, #26c4a8 100%);
    color: white;
    box-shadow: 
      0 8px 24px rgba(46, 216, 182, 0.3),
      0 4px 12px rgba(38, 196, 168, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: linear-gradient(135deg, #26c4a8 0%, #2ed8b6 50%, #00e5cc 100%);
      transform: translateY(-2px) scale(1.02);
      box-shadow: 
        0 12px 32px rgba(46, 216, 182, 0.4),
        0 6px 16px rgba(38, 196, 168, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  }
  
  /* 버튼 아이콘 강화 */
  svg {
    font-size: 20px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
    flex-shrink: 0;
  }
  
  /* 반짝이는 효과 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.8s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  /* 클릭 효과 */
  &:active {
    transform: translateY(0) scale(0.98);
  }
`,Qt=o.div`
  position: relative;
  flex: 1;
`,Zt=o.div`
  position: absolute;
  top: -120px;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid var(--color-border-light, #e0e0e0);
  border-radius: 12px;
  box-shadow: var(--shadow-lg, 0 8px 32px rgba(0, 0, 0, 0.12));
  margin-bottom: 8px;
  overflow: hidden;
  z-index: 1000;
`,xe=o.button`
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
`,en=o.button`
  flex: 1;
  height: 56px;
  border-radius: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
  color: #334155;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    0 2px 8px rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(148, 163, 184, 0.1);
  letter-spacing: -0.3px;
  white-space: nowrap;
  
  &:hover {
    background: linear-gradient(135deg, rgba(245, 247, 250, 0.98) 0%, rgba(241, 245, 249, 0.95) 100%);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.12),
      0 4px 12px rgba(99, 102, 241, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  /* 버튼 아이콘 강화 */
  svg {
    font-size: 20px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
    flex-shrink: 0;
  }
  
  /* 반짝이는 효과 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.8s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  /* 클릭 효과 */
  &:active {
    transform: translateY(0) scale(0.98);
  }
`,tn=o.div`
  position: relative;
  margin-top: 56px; /* 56px(헤더)만 */
  padding: 16px;
  background: #fff;
`,nn=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  touch-action: pan-y;
`,on=o.div`
  display: flex;
  width: ${t=>t.imageCount*100}%;
  height: 100%;
  transform: translateX(-${t=>t.currentIndex*(100/t.imageCount)}%);
  transition: transform 0.3s ease;
`,rn=o.img`
  width: ${t=>100/t.imageCount}%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,sn=o.div`
  width: ${t=>100/t.imageCount}%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 48px;
`,ue=o.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${t=>t.direction==="prev"?"left: 20px;":"right: 20px;"}
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
  border: 1px solid rgba(148, 163, 184, 0.2);
  color: #475569;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.12),
    0 4px 12px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  font-size: 18px;
  
  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(241, 245, 249, 0.95) 100%);
    transform: translateY(-50%) scale(1.08);
    box-shadow: 
      0 12px 32px rgba(0, 0, 0, 0.15),
      0 6px 16px rgba(46, 216, 182, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    color: #2ed8b6;
    border-color: rgba(46, 216, 182, 0.3);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.98);
  }
  
  /* 방향별 아이콘 스타일링 */
  ${t=>t.direction==="prev"&&`
    &::before {
      content: '';
      margin-right: 2px;
    }
  `}
  
  ${t=>t.direction==="next"&&`
    &::before {
      content: '';
      margin-left: 2px;
    }
  `}
  
  /* 반짝이는 효과 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
    border-radius: 16px;
  }
  
  &:hover::after {
    left: 100%;
  }
`,an=o.div`
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
`,cn=o.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`,ln=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${t=>t.active?"white":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background 0.2s;
`,A=o.div`
  padding: 20px;
`,dn=o.div`
  margin-bottom: 24px;
`,pn=o.h1`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`,xn=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
`,un=o.div`
  font-size: 24px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 16px;
`,gn=o.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`,W=o.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: ${t=>{switch(t.type){case"condition":return"#e8f5e8";case"negotiable":return"#fff3e0";case"delivery":return"#e3f2fd";default:return"#f5f5f5"}}};
  color: ${t=>{switch(t.type){case"condition":return"#2e7d32";case"negotiable":return"#f57c00";case"delivery":return"#1976d2";default:return"#666"}}};
`,fn=o.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
  margin-bottom: 24px;
`,hn=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,bn=o.div`
  background: #f8f9fa;
  color: #666;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
`,ge=o.div`
  height: 8px;
  background: #f8f9fa;
  margin: 0 -20px 24px -20px;
`,mn=o.div`
  margin-bottom: 24px;
`,wn=o.div`
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
`,vn=o.div`
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
`,yn=o.div`
  flex: 1;
`,jn=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,kn=o.div`
  color: #4CAF50;
  font-size: 14px;
`,Pn=o.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,Sn=o.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #2ed8b6;
  font-weight: 600;
`,Cn=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
`,V=o.div`
  text-align: center;
`,X=o.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
`,G=o.div`
  font-size: 12px;
  color: #666;
`,In=o.div`
  margin-bottom: 24px;
`,zn=o.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`,$n=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,En=o.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border-color: #2ed8b6;
  }
`,Tn=o.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`,Fn=o.div`
  padding: 12px;
`,Mn=o.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Rn=o.div`
  font-size: 14px;
  font-weight: 600;
  color: #2ed8b6;
`,_n=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`,Dn=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
`,Ln=o.div`
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
`,Nn=o.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`,On=o.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`,Bn=o.div`
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
`,fe=o.button`
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
`,An=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 150;
`;function Yn(){var ee;const t=He(),{id:i}=We(),{products:a,incrementViews:d,toggleLike:l,changeProductStatus:u,PRODUCT_STATUS:w}=x.useContext(Ve),{user:s}=x.useContext(he),{createOrGetChatRoom:g}=x.useContext(Xe),{showSuccess:b,showError:f,showWarning:h}=be(),[m,k]=x.useState(0),[P,$]=x.useState(!1),[E,T]=x.useState(!0),[F,S]=x.useState(!1),[p,j]=x.useState(!1),[L,M]=x.useState(0),[C,ke]=x.useState(0),[Pe,N]=x.useState(!1),[O,q]=x.useState(!1),n=a.find(r=>String(r.id)===String(i));x.useEffect(()=>{a.length>0&&(T(!1),console.log("🔍 상품 검색:",{searchId:i,totalProducts:a.length,foundProduct:n?"YES":"NO",productIds:a.slice(0,5).map(r=>r.id)}))},[a,i,n]),x.useEffect(()=>{(async()=>{if(!n&&!E&&a.length>0){console.log("🔍 개별 상품 조회 시도:",i);try{const c=await gt.getProduct(i);console.log("✅ 개별 상품 조회 성공:",c)}catch(c){console.error("❌ 개별 상품 조회 실패:",c)}}})()},[n,E,a.length,i]),x.useEffect(()=>{n&&(console.log("👀 조회수 증가 조건 확인:",{productId:n.id,productTitle:n.title,sellerId:n.sellerId,currentUserId:(s==null?void 0:s.uid)||"anonymous",isOwnProduct:n.sellerId===(s==null?void 0:s.uid),viewCount:n.viewCount||0}),n.sellerId!==(s==null?void 0:s.uid)?(console.log("✅ 조회수 증가 시작"),d(n.id)):console.log("❌ 본인 상품이므로 조회수 증가 안함"))},[n==null?void 0:n.id]),x.useEffect(()=>{const r=c=>{O&&!c.target.closest(".chat-dropdown-container")&&q(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[O]);const Se=()=>{k(r=>{var c;return r===0?(((c=n==null?void 0:n.images)==null?void 0:c.length)||1)-1:r-1})},Ce=()=>{k(r=>{var c;return r===(((c=n==null?void 0:n.images)==null?void 0:c.length)||1)-1?0:r+1})},Ie=()=>{$(!0)},ze=r=>{M(r.targetTouches[0].clientX)},$e=r=>{ke(r.targetTouches[0].clientX)},Ee=()=>{var v;if(!L||!C)return;const r=L-C,c=r>50,I=r<-50;c&&m<(((v=n==null?void 0:n.images)==null?void 0:v.length)||1)-1&&k(z=>z+1),I&&m>0&&k(z=>z-1)},Te=async()=>{if(!(s!=null&&s.isLoggedIn)){h("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}try{const r=n.isLikedByUser;await l(n.id),r?b("찜 목록에서 제거되었습니다."):b("찜 목록에 추가되었습니다!",{title:"찜 완료"})}catch(r){console.error("찜하기 실패:",r),f("찜하기 처리 중 오류가 발생했습니다.")}},Fe=async()=>{if(!(s!=null&&s.isLoggedIn)){h("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(n.sellerId===s.uid){h("본인 상품에는 채팅할 수 없습니다.",{title:"채팅 불가"});return}if(!p){j(!0);try{console.log("💬 채팅방 생성 시작...",{productId:n.id,sellerId:n.sellerId,buyerId:s.uid});const r=await g(n.id,n.sellerId,s.uid,{title:n.title,price:n.price,images:n.images,status:n.status});console.log("✅ 채팅방 생성 성공:",r),t(`/chat/${r}`)}catch(r){console.error("❌ 채팅방 생성 실패:",r),f("채팅방 생성에 실패했습니다. 다시 시도해주세요.",{title:"채팅 생성 실패"})}finally{j(!1)}}},Me=()=>{if(!(s!=null&&s.isLoggedIn)){h("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(n.sellerId===s.uid){h("본인 상품에는 문자를 보낼 수 없습니다.",{title:"문자 발송 불가"});return}if(!n.showPhoneNumber||!n.sellerPhone){h("판매자가 전화번호를 공개하지 않았습니다.",{title:"전화번호 비공개"});return}const r=window.location.href,c=`안녕하세요! ECHO에서 ${n.title} 상품에 관심이 있어요.

상품링크: ${r}

연락 기다릴게요!`,I=n.sellerPhone.replace(/-/g,"");try{if(/iPad|iPhone|iPod/.test(navigator.userAgent))window.location.href=`sms:${I}&body=${encodeURIComponent(c)}`;else if(/Android/.test(navigator.userAgent))window.location.href=`sms:${I}?body=${encodeURIComponent(c)}`;else{const v=`전화번호: ${I}

메시지:
${c}`;navigator.clipboard.writeText(v).then(()=>{b("전화번호와 메시지가 복사되었습니다.",{title:"복사 완료"})}).catch(()=>{b(`판매자 전화번호: ${I}`,{title:"판매자 연락처"})})}q(!1)}catch(v){console.error("SMS 발송 실패:",v),f("문자 발송에 실패했습니다.",{title:"발송 실패"})}},Re=async()=>{if(!(s!=null&&s.isLoggedIn)){h("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(n.sellerId===s.uid){h("본인 상품은 구매할 수 없습니다.",{title:"구매 불가"});return}if(n.status!==w.ACTIVE){f("이미 판매가 완료된 상품입니다.",{title:"판매 완료"});return}N(!0)},_e=r=>{r.stopPropagation(),S(!F)},De=()=>{S(!1),t(`/edit-product/${n.id}`)},Le=async()=>{if(!(s!=null&&s.isLoggedIn)||n.sellerId!==s.uid){alert("권한이 없습니다.");return}if(window.confirm("정말 이 상품을 삭제하시겠습니까?"))try{await u(n.id,w.DELETED),alert("상품이 삭제되었습니다."),t("/")}catch(r){console.error("상품 삭제 실패:",r),alert("상품 삭제에 실패했습니다.")}S(!1)},Ne=()=>{S(!1)},Oe=async r=>{try{await u(n.id,w.SOLD);const c=await g(n.id,n.sellerId,s.uid,{title:n.title,price:n.price,images:n.images,status:w.SOLD});N(!1),b("결제가 완료되었습니다! 판매자와 연락하여 거래를 진행해 주세요."),t(`/chat/${c}?payment=success`)}catch(c){console.error("결제 후 처리 실패:",c),f("결제는 완료되었지만 후속 처리 중 오류가 발생했습니다.")}},Be=r=>{N(!1),f(r.message||"결제 중 오류가 발생했습니다.")},Ae=r=>({excellent:"매우 좋음",good:"좋음",fair:"보통",poor:"나쁨"})[r]||r,J=r=>new Intl.NumberFormat("ko-KR").format(r),Ue=r=>{if(!r)return"";const c=r.toDate?r.toDate():new Date(r),v=new Date-c,z=Math.floor(v/6e4),te=Math.floor(v/36e5),ne=Math.floor(v/864e5);return z<1?"방금 전":z<60?`${z}분 전`:te<24?`${te}시간 전`:ne<7?`${ne}일 전`:c.toLocaleDateString("ko-KR")};if(E)return e.jsx(H,{children:e.jsx(_n,{children:"상품 정보를 불러오는 중..."})});if(!n)return e.jsxs(H,{children:[e.jsx(ce,{children:e.jsx(le,{children:e.jsx(de,{onClick:()=>t(-1),children:e.jsx(re,{})})})}),e.jsxs(Dn,{children:[e.jsx(Ge,{size:48,color:"#ddd"}),e.jsx("h3",{children:"상품을 찾을 수 없습니다"}),e.jsx("p",{children:"삭제되었거나 존재하지 않는 상품입니다."}),e.jsxs("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px"},children:["상품 ID: ",i," | 로드된 상품 수: ",a.length]}),e.jsxs("button",{onClick:()=>t("/"),style:{marginTop:"16px",padding:"8px 16px",backgroundColor:"#2ed8b6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:[e.jsx(Je,{style:{marginRight:"8px"}}),"홈으로 돌아가기"]})]})]});const Q=n.isLikedByUser||!1,y=n.images||[],Z=a.filter(r=>r.category===n.category&&r.id!==n.id).slice(0,4);return e.jsxs(H,{children:[e.jsxs(ce,{children:[e.jsx(le,{children:e.jsx(de,{onClick:()=>t(-1),children:e.jsx(re,{})})}),e.jsxs(Vt,{children:[e.jsx(pe,{children:e.jsx(Qe,{})}),(s==null?void 0:s.uid)===(n==null?void 0:n.sellerId)&&e.jsxs(e.Fragment,{children:[e.jsx(pe,{onClick:_e,children:e.jsx(Ze,{})}),F&&e.jsxs(e.Fragment,{children:[e.jsx(An,{onClick:Ne}),e.jsxs(Bn,{children:[e.jsxs(fe,{onClick:De,children:[e.jsx(et,{}),"수정"]}),e.jsxs(fe,{className:"delete",onClick:Le,children:[e.jsx(tt,{}),"삭제"]})]})]})]})]})]}),e.jsx(tn,{children:e.jsx(nn,{onTouchStart:ze,onTouchMove:$e,onTouchEnd:Ee,children:y.length>0?e.jsxs(e.Fragment,{children:[e.jsx(on,{imageCount:y.length,currentIndex:m,children:y.map((r,c)=>e.jsx(rn,{src:r,alt:`상품 이미지 ${c+1}`,imageCount:y.length,onClick:Ie},c))}),y.length>1&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{direction:"prev",onClick:Se,style:{display:m===0?"none":"flex"},children:e.jsx(nt,{})}),e.jsx(ue,{direction:"next",onClick:Ce,style:{display:m===y.length-1?"none":"flex"},children:e.jsx(ie,{})}),e.jsxs(an,{children:[m+1,"/",y.length]}),e.jsx(cn,{children:y.map((r,c)=>e.jsx(ln,{active:c===m,onClick:()=>k(c)},c))})]})]}):e.jsx(sn,{imageCount:1,children:e.jsx(ot,{})})})}),e.jsxs(A,{children:[e.jsxs(dn,{children:[e.jsxs(xn,{children:[e.jsx(se,{}),n.region," ",n.district,e.jsx("span",{children:"•"}),e.jsx(rt,{}),n.viewCount||0,e.jsx("span",{children:"•"}),e.jsx(it,{}),n.chatCount||0,e.jsx("span",{children:"•"}),e.jsx(st,{}),Ue(n.createdAt)]}),e.jsx(pn,{children:n.title}),e.jsxs(un,{children:[J(n.price),"원",n.negotiable&&e.jsx("span",{style:{fontSize:"14px",color:"#666",marginLeft:"8px"},children:"가격제안 가능"})]}),e.jsxs(gn,{children:[e.jsx(W,{type:"condition",children:Ae(n.condition)}),n.negotiable&&e.jsx(W,{type:"negotiable",children:"가격제안 가능"}),n.delivery&&e.jsx(W,{type:"delivery",children:"택배거래 가능"})]})]}),e.jsx(fn,{children:n.description}),n.tags&&n.tags.length>0&&e.jsx(hn,{children:n.tags.map((r,c)=>e.jsxs(bn,{children:["#",r]},c))})]}),e.jsx(ge,{}),e.jsx(A,{children:e.jsxs(mn,{children:[e.jsxs(wn,{onClick:()=>t(`/user/${n.sellerId}`),children:[e.jsx(vn,{imageUrl:n.sellerProfileImage,children:!n.sellerProfileImage&&(((ee=n.sellerNickname)==null?void 0:ee[0])||"?")}),e.jsxs(yn,{children:[e.jsxs(jn,{children:[n.sellerNickname||"익명",n.sellerVerified&&e.jsx(kn,{children:e.jsx(at,{})})]}),e.jsxs(Pn,{children:[e.jsx(se,{}),n.region," ",n.district]})]}),e.jsxs(Sn,{children:[e.jsx(ct,{}),n.sellerMannerScore||36.5,"°C"]}),e.jsx(ie,{style:{marginLeft:"8px",color:"#999",fontSize:"14px"}})]}),e.jsxs(Cn,{children:[e.jsxs(V,{children:[e.jsx(X,{children:n.sellerTransactionCount||0}),e.jsx(G,{children:"거래"})]}),e.jsxs(V,{children:[e.jsx(X,{children:n.sellerReviewCount||0}),e.jsx(G,{children:"후기"})]}),e.jsxs(V,{children:[e.jsx(X,{children:n.sellerFollowerCount||0}),e.jsx(G,{children:"팔로워"})]})]})]})}),Z.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(ge,{}),e.jsx(A,{children:e.jsxs(In,{children:[e.jsx(zn,{children:"이런 상품은 어떠세요?"}),e.jsx($n,{children:Z.map(r=>{var c;return e.jsxs(En,{onClick:()=>t(`/product/${r.id}`),children:[e.jsx(Tn,{src:((c=r.images)==null?void 0:c[0])||"/placeholder.jpg",alt:r.title}),e.jsxs(Fn,{children:[e.jsx(Mn,{children:r.title}),e.jsxs(Rn,{children:[J(r.price),"원"]})]})]},r.id)})})]})})]}),e.jsx(A,{children:e.jsxs(Xt,{children:[e.jsx(Gt,{onClick:Te,liked:Q,"aria-label":"찜하기",children:Q?e.jsx(lt,{}):e.jsx(dt,{})}),e.jsxs(Qt,{className:"chat-dropdown-container",children:[O&&e.jsxs(Zt,{children:[e.jsxs(xe,{onClick:Fe,disabled:p,children:[e.jsx(ae,{}),p?"생성 중...":"채팅하기"]}),e.jsxs(xe,{onClick:Me,disabled:!(n!=null&&n.showPhoneNumber)||!(n!=null&&n.sellerPhone),children:[e.jsx(pt,{}),"문자보내기"]})]}),e.jsxs(en,{onClick:()=>q(!O),disabled:p,children:[e.jsx(ae,{}),p?"생성 중...":"연락하기",e.jsx(xt,{style:{fontSize:"12px",marginLeft:"4px"}})]})]}),e.jsxs(Jt,{className:"buy",onClick:Re,children:[e.jsx(ut,{}),"구매하기"]})]})}),P&&e.jsxs(Ln,{onClick:()=>$(!1),children:[e.jsx(Nn,{onClick:()=>$(!1),children:e.jsx(me,{})}),e.jsx(On,{src:y[m],alt:`상품 이미지 ${m+1}`,onClick:r=>r.stopPropagation()})]}),e.jsx(Wt,{isOpen:Pe,onClose:()=>N(!1),product:n,onPaymentSuccess:Oe,onPaymentError:Be})]})}export{Yn as default};
