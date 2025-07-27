import{r as x,U as fe,o as he,j as e,q as be,s as Ue,t as Ye,v as qe,w as re,i as r,u as Ke,x as He,P as We,C as Ve,y as oe,z as Xe,A as Ge,B as Je,D as Qe,E as Ze,G as et,H as tt,I as nt,J as ie,K as rt,L as ot,M as it,N as st,O as at,Q as ct,R as lt,S as se,V as dt,W as pt,X as xt,p as ut}from"./index-DGNRr8H-.js";function me(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function we(t,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&_(t,i)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},R(t)}function _(t,i){return _=Object.setPrototypeOf||function(d,l){return d.__proto__=l,d},_(t,i)}function ve(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function U(t,i,a){return ve()?U=Reflect.construct:U=function(l,u,w){var s=[null];s.push.apply(s,u);var g=Function.bind.apply(l,s),b=new g;return w&&_(b,w.prototype),b},U.apply(null,arguments)}function gt(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function Y(t){var i=typeof Map=="function"?new Map:void 0;return Y=function(d){if(d===null||!gt(d))return d;if(typeof d!="function")throw new TypeError("Super expression must either be null or a function");if(typeof i<"u"){if(i.has(d))return i.get(d);i.set(d,l)}function l(){return U(d,arguments,R(this).constructor)}return l.prototype=Object.create(d.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),_(l,d)},Y(t)}function ft(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ht(t,i){if(i&&(typeof i=="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ft(t)}function ye(t){var i=ve();return function(){var d=R(t),l;if(i){var u=R(this).constructor;l=Reflect.construct(d,arguments,u)}else l=d.apply(this,arguments);return ht(this,l)}}var M=null;function bt(t,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(M!=null)return M;var d=new Promise(function(l,u){try{var w=function(){B(i)!=null?l(B(i)):u(new mt(i))},s=function(){u(new wt(t))};if(typeof window>"u"||typeof document>"u")return l(null);if(B(i)!=null)return l(B(i));var g=document.querySelector('script[src="'.concat(t,'"]'));if(g!=null){var b;g.removeEventListener("load",w),g.removeEventListener("error",s),(b=g.parentElement)===null||b===void 0||b.removeChild(g)}var f=document.createElement("script");f.src=t,f.addEventListener("load",w),f.addEventListener("error",s),a.priority!=null&&(f.fetchPriority=a.priority),document.head.appendChild(f)}catch(h){u(h);return}});return M=d.catch(function(l){return M=null,Promise.reject(l)}),M}function B(t){return window[t]}var mt=function(t){we(a,t);var i=ye(a);function a(d){var l;return me(this,a),l=i.call(this,"[TossPayments SDK] ".concat(d," is not available")),l.name="NamespaceNotAvailableError",l}return a}(Y(Error)),wt=function(t){we(a,t);var i=ye(a);function a(d){var l;return me(this,a),l=i.call(this,"[TossPayments SDK] Failed to load script: [".concat(d,"]")),l.name="ScriptLoadFailedError",l}return a}(Y(Error)),vt="https://js.tosspayments.com/v1";function yt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.src,d=a===void 0?vt:a;return typeof window>"u"?Promise.resolve({requestPayment:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")},requestBillingAuth:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")},cancelPayment:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")}}):bt(d,"TossPayments").then(function(l){return l(t)})}const jt=r.div`
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
`,kt=r.div`
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
`,Pt=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
`,St=r.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
`,Ct=r.button`
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
`,It=r.div`
  padding: 24px;
`,zt=r.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
`,Et=r.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`,$t=r.div`
  flex: 1;
`,Tt=r.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
`,Ft=r.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
`,Mt=r.div`
  margin-bottom: 24px;
`,Rt=r.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`,_t=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Dt=r.div`
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
`,Lt=r.div`
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
`,Nt=r.div`
  flex: 1;
`,Ot=r.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,Bt=r.div`
  font-size: 13px;
  color: #666;
`,At=r.div`
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
`,Ut=r.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
`,K=r.div`
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
`,Yt=r.button`
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
`,qt=r.div`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  margin-top: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`,Kt="test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";function Ht({isOpen:t,onClose:i,product:a,onPaymentSuccess:d,onPaymentError:l}){var P;const{user:u}=x.useContext(fe),{showSuccess:w,showError:s}=he(),[g,b]=x.useState("카드"),[f,h]=x.useState(!1),[m,j]=x.useState(null);if(x.useEffect(()=>{t&&yt(Kt).then(j)},[t]),!t)return null;const k=p=>new Intl.NumberFormat("ko-KR").format(p),z=[{key:"카드",name:"신용/체크카드",desc:"모든 카드사 지원",icon:e.jsx(qe,{})},{key:"계좌이체",name:"계좌이체",desc:"실시간 계좌이체",icon:e.jsx(re,{})},{key:"휴대폰",name:"휴대폰 결제",desc:"통신사 소액결제",icon:e.jsx(re,{})}],E=async()=>{var p;if(!m||!u||!a){s("결제 준비가 완료되지 않았습니다.");return}h(!0);try{const y=`ORDER_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,D=u.displayName||((p=u.email)==null?void 0:p.split("@")[0])||"구매자",F={amount:a.price,orderId:y,orderName:a.title,customerName:D,successUrl:`${window.location.origin}/payment/success`,failUrl:`${window.location.origin}/payment/fail`};let S;switch(g){case"카드":S=m.requestPayment("카드",F);break;case"계좌이체":S=m.requestPayment("계좌이체",F);break;case"휴대폰":S=m.requestPayment("휴대폰",{...F,customerMobilePhone:u.phoneNumber||"01000000000"});break;default:throw new Error("지원하지 않는 결제 방법입니다.")}await S}catch(y){console.error("결제 실패:",y),s(y.message||"결제 중 오류가 발생했습니다."),l&&l(y)}finally{h(!1)}},$=a.delivery?3e3:0,T=a.price+$;return e.jsx(jt,{onClick:i,children:e.jsxs(kt,{onClick:p=>p.stopPropagation(),children:[e.jsxs(Pt,{children:[e.jsx(St,{children:"결제하기"}),e.jsx(Ct,{onClick:i,children:e.jsx(be,{})})]}),e.jsxs(It,{children:[e.jsxs(zt,{children:[e.jsx(Et,{src:((P=a.images)==null?void 0:P[0])||"/placeholder.jpg",alt:a.title}),e.jsxs($t,{children:[e.jsx(Tt,{children:a.title}),e.jsxs(Ft,{children:[k(a.price),"원"]})]})]}),e.jsxs(Mt,{children:[e.jsx(Rt,{children:"결제 방법"}),e.jsx(_t,{children:z.map(p=>e.jsxs(Dt,{selected:g===p.key,onClick:()=>b(p.key),children:[e.jsx(Lt,{selected:g===p.key,children:p.icon}),e.jsxs(Nt,{children:[e.jsx(Ot,{children:p.name}),e.jsx(Bt,{children:p.desc})]}),e.jsx(At,{selected:g===p.key})]},p.key))})]}),e.jsxs(Ut,{children:[e.jsxs(K,{children:[e.jsx("span",{children:"상품 금액"}),e.jsxs("span",{children:[k(a.price),"원"]})]}),$>0&&e.jsxs(K,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[k($),"원"]})]}),e.jsxs(K,{total:!0,last:!0,children:[e.jsx("span",{children:"총 결제 금액"}),e.jsxs("span",{children:[k(T),"원"]})]})]}),e.jsx(Yt,{onClick:E,disabled:f,children:f?e.jsxs(e.Fragment,{children:[e.jsx(Ue,{className:"fa-spin"}),"결제 진행 중..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Ye,{}),k(T),"원 결제하기"]})}),e.jsxs(qt,{children:["• 결제 완료 후 판매자와 연결되어 거래를 진행합니다.",e.jsx("br",{}),"• 안전한 거래를 위해 직거래를 권장합니다.",e.jsx("br",{}),"• 문제 발생 시 고객센터로 문의해 주세요."]})]})]})})}const H=r.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,ae=r.div`
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
`,ce=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,le=r.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,Wt=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`,de=r.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,Vt=r.div`
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
`,Xt=r.button`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  border: none;
  background: ${t=>t.liked?"linear-gradient(135deg, #ff6b9d 0%, #e91e63 100%)":"linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)"};
  color: ${t=>t.liked?"white":"#64748b"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
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
`,Gt=r.button`
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
  letter-spacing: -0.2px;
  
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
    font-size: 18px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
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
`,Jt=r.div`
  position: relative;
  flex: 1;
`,Qt=r.div`
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
`,pe=r.button`
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
`,Zt=r.button`
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
  letter-spacing: -0.2px;
  
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
    font-size: 18px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
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
`,en=r.div`
  position: relative;
  margin-top: 56px; /* 56px(헤더)만 */
  padding: 16px;
  background: #fff;
`,tn=r.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  touch-action: pan-y;
`,nn=r.div`
  display: flex;
  width: ${t=>t.imageCount*100}%;
  height: 100%;
  transform: translateX(-${t=>t.currentIndex*(100/t.imageCount)}%);
  transition: transform 0.3s ease;
`,rn=r.img`
  width: ${t=>100/t.imageCount}%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,on=r.div`
  width: ${t=>100/t.imageCount}%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 48px;
`,xe=r.button`
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
`,sn=r.div`
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
`,an=r.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`,cn=r.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${t=>t.active?"white":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background 0.2s;
`,A=r.div`
  padding: 20px;
`,ln=r.div`
  margin-bottom: 24px;
`,dn=r.h1`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`,pn=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
`,xn=r.div`
  font-size: 24px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 16px;
`,un=r.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`,W=r.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: ${t=>{switch(t.type){case"condition":return"#e8f5e8";case"negotiable":return"#fff3e0";case"delivery":return"#e3f2fd";default:return"#f5f5f5"}}};
  color: ${t=>{switch(t.type){case"condition":return"#2e7d32";case"negotiable":return"#f57c00";case"delivery":return"#1976d2";default:return"#666"}}};
`,gn=r.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
  margin-bottom: 24px;
`,fn=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,hn=r.div`
  background: #f8f9fa;
  color: #666;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
`,ue=r.div`
  height: 8px;
  background: #f8f9fa;
  margin: 0 -20px 24px -20px;
`,bn=r.div`
  margin-bottom: 24px;
`,mn=r.div`
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
`,wn=r.div`
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
`,vn=r.div`
  flex: 1;
`,yn=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,jn=r.div`
  color: #4CAF50;
  font-size: 14px;
`,kn=r.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,Pn=r.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #2ed8b6;
  font-weight: 600;
`,Sn=r.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
`,V=r.div`
  text-align: center;
`,X=r.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
`,G=r.div`
  font-size: 12px;
  color: #666;
`,Cn=r.div`
  margin-bottom: 24px;
`,In=r.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`,zn=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,En=r.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border-color: #2ed8b6;
  }
`,$n=r.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`,Tn=r.div`
  padding: 12px;
`,Fn=r.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Mn=r.div`
  font-size: 14px;
  font-weight: 600;
  color: #2ed8b6;
`,Rn=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`,_n=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
`,Dn=r.div`
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
`,Ln=r.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`,Nn=r.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`,On=r.div`
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
`,ge=r.button`
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
`,Bn=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 150;
`;function Un(){var ee;const t=Ke(),{id:i}=He(),{products:a,incrementViews:d,toggleLike:l,changeProductStatus:u,PRODUCT_STATUS:w}=x.useContext(We),{user:s}=x.useContext(fe),{createOrGetChatRoom:g}=x.useContext(Ve),{showSuccess:b,showError:f,showWarning:h}=he(),[m,j]=x.useState(0),[k,z]=x.useState(!1),[E,$]=x.useState(!0),[T,P]=x.useState(!1),[p,y]=x.useState(!1),[D,F]=x.useState(0),[S,je]=x.useState(0),[ke,L]=x.useState(!1),[N,q]=x.useState(!1),n=a.find(o=>String(o.id)===String(i));x.useEffect(()=>{a.length>0&&($(!1),console.log("🔍 상품 검색:",{searchId:i,totalProducts:a.length,foundProduct:n?"YES":"NO",productIds:a.slice(0,5).map(o=>o.id)}))},[a,i,n]),x.useEffect(()=>{(async()=>{if(!n&&!E&&a.length>0){console.log("🔍 개별 상품 조회 시도:",i);try{const c=await ut.getProduct(i);console.log("✅ 개별 상품 조회 성공:",c)}catch(c){console.error("❌ 개별 상품 조회 실패:",c)}}})()},[n,E,a.length,i]),x.useEffect(()=>{n&&(console.log("👀 조회수 증가 조건 확인:",{productId:n.id,productTitle:n.title,sellerId:n.sellerId,currentUserId:(s==null?void 0:s.uid)||"anonymous",isOwnProduct:n.sellerId===(s==null?void 0:s.uid),viewCount:n.viewCount||0}),n.sellerId!==(s==null?void 0:s.uid)?(console.log("✅ 조회수 증가 시작"),d(n.id)):console.log("❌ 본인 상품이므로 조회수 증가 안함"))},[n==null?void 0:n.id]),x.useEffect(()=>{const o=c=>{N&&!c.target.closest(".chat-dropdown-container")&&q(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[N]);const Pe=()=>{j(o=>{var c;return o===0?(((c=n==null?void 0:n.images)==null?void 0:c.length)||1)-1:o-1})},Se=()=>{j(o=>{var c;return o===(((c=n==null?void 0:n.images)==null?void 0:c.length)||1)-1?0:o+1})},Ce=()=>{z(!0)},Ie=o=>{F(o.targetTouches[0].clientX)},ze=o=>{je(o.targetTouches[0].clientX)},Ee=()=>{var I;if(!D||!S)return;const o=D-S,c=o>50,O=o<-50;c&&m<(((I=n==null?void 0:n.images)==null?void 0:I.length)||1)-1&&j(C=>C+1),O&&m>0&&j(C=>C-1)},$e=async()=>{if(!(s!=null&&s.isLoggedIn)){h("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}try{const o=n.isLikedByUser;await l(n.id),o?b("찜 목록에서 제거되었습니다."):b("찜 목록에 추가되었습니다!",{title:"찜 완료"})}catch(o){console.error("찜하기 실패:",o),f("찜하기 처리 중 오류가 발생했습니다.")}},Te=async()=>{if(!(s!=null&&s.isLoggedIn)){h("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(n.sellerId===s.uid){h("본인 상품에는 채팅할 수 없습니다.",{title:"채팅 불가"});return}if(!p){y(!0);try{console.log("💬 채팅방 생성 시작...",{productId:n.id,sellerId:n.sellerId,buyerId:s.uid});const o=await g(n.id,n.sellerId,s.uid,{title:n.title,price:n.price,images:n.images,status:n.status});console.log("✅ 채팅방 생성 성공:",o),t(`/chat/${o}`)}catch(o){console.error("❌ 채팅방 생성 실패:",o),f("채팅방 생성에 실패했습니다. 다시 시도해주세요.",{title:"채팅 생성 실패"})}finally{y(!1)}}},Fe=()=>{if(!(s!=null&&s.isLoggedIn)){h("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(n.sellerId===s.uid){h("본인 상품에는 문자를 보낼 수 없습니다.",{title:"문자 발송 불가"});return}if(!n.showPhoneNumber||!n.sellerPhone){h("판매자가 전화번호를 공개하지 않았습니다.",{title:"전화번호 비공개"});return}const o=`[ECHO] ${n.title} 상품에 대해 문의드립니다.`,c=n.sellerPhone.replace(/-/g,"");try{/iPad|iPhone|iPod/.test(navigator.userAgent)?window.location.href=`sms:${c}&body=${encodeURIComponent(o)}`:/Android/.test(navigator.userAgent)?window.location.href=`sms:${c}?body=${encodeURIComponent(o)}`:navigator.clipboard.writeText(c).then(()=>{b(`판매자 전화번호가 복사되었습니다: ${c}`,{title:"번호 복사 완료"})}).catch(()=>{b(`판매자 전화번호: ${c}`,{title:"판매자 연락처"})}),q(!1)}catch(O){console.error("SMS 발송 실패:",O),f("문자 발송에 실패했습니다.",{title:"발송 실패"})}},Me=async()=>{if(!(s!=null&&s.isLoggedIn)){h("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(n.sellerId===s.uid){h("본인 상품은 구매할 수 없습니다.",{title:"구매 불가"});return}if(n.status!==w.ACTIVE){f("이미 판매가 완료된 상품입니다.",{title:"판매 완료"});return}L(!0)},Re=o=>{o.stopPropagation(),P(!T)},_e=()=>{P(!1),t(`/edit-product/${n.id}`)},De=async()=>{if(!(s!=null&&s.isLoggedIn)||n.sellerId!==s.uid){alert("권한이 없습니다.");return}if(window.confirm("정말 이 상품을 삭제하시겠습니까?"))try{await u(n.id,w.DELETED),alert("상품이 삭제되었습니다."),t("/")}catch(o){console.error("상품 삭제 실패:",o),alert("상품 삭제에 실패했습니다.")}P(!1)},Le=()=>{P(!1)},Ne=async o=>{try{await u(n.id,w.SOLD);const c=await g(n.id,n.sellerId,s.uid,{title:n.title,price:n.price,images:n.images,status:w.SOLD});L(!1),b("결제가 완료되었습니다! 판매자와 연락하여 거래를 진행해 주세요."),t(`/chat/${c}?payment=success`)}catch(c){console.error("결제 후 처리 실패:",c),f("결제는 완료되었지만 후속 처리 중 오류가 발생했습니다.")}},Oe=o=>{L(!1),f(o.message||"결제 중 오류가 발생했습니다.")},Be=o=>({excellent:"매우 좋음",good:"좋음",fair:"보통",poor:"나쁨"})[o]||o,J=o=>new Intl.NumberFormat("ko-KR").format(o),Ae=o=>{if(!o)return"";const c=o.toDate?o.toDate():new Date(o),I=new Date-c,C=Math.floor(I/6e4),te=Math.floor(I/36e5),ne=Math.floor(I/864e5);return C<1?"방금 전":C<60?`${C}분 전`:te<24?`${te}시간 전`:ne<7?`${ne}일 전`:c.toLocaleDateString("ko-KR")};if(E)return e.jsx(H,{children:e.jsx(Rn,{children:"상품 정보를 불러오는 중..."})});if(!n)return e.jsxs(H,{children:[e.jsx(ae,{children:e.jsx(ce,{children:e.jsx(le,{onClick:()=>t(-1),children:e.jsx(oe,{})})})}),e.jsxs(_n,{children:[e.jsx(Xe,{size:48,color:"#ddd"}),e.jsx("h3",{children:"상품을 찾을 수 없습니다"}),e.jsx("p",{children:"삭제되었거나 존재하지 않는 상품입니다."}),e.jsxs("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px"},children:["상품 ID: ",i," | 로드된 상품 수: ",a.length]}),e.jsx("button",{onClick:()=>t("/"),style:{marginTop:"16px",padding:"8px 16px",backgroundColor:"#2ed8b6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:"홈으로 돌아가기"})]})]});const Q=n.isLikedByUser||!1,v=n.images||[],Z=a.filter(o=>o.category===n.category&&o.id!==n.id).slice(0,4);return e.jsxs(H,{children:[e.jsxs(ae,{children:[e.jsx(ce,{children:e.jsx(le,{onClick:()=>t(-1),children:e.jsx(oe,{})})}),e.jsxs(Wt,{children:[e.jsx(de,{children:e.jsx(Ge,{})}),(s==null?void 0:s.uid)===(n==null?void 0:n.sellerId)&&e.jsxs(e.Fragment,{children:[e.jsx(de,{onClick:Re,children:e.jsx(Je,{})}),T&&e.jsxs(e.Fragment,{children:[e.jsx(Bn,{onClick:Le}),e.jsxs(On,{children:[e.jsxs(ge,{onClick:_e,children:[e.jsx(Qe,{}),"수정"]}),e.jsxs(ge,{className:"delete",onClick:De,children:[e.jsx(Ze,{}),"삭제"]})]})]})]})]})]}),e.jsx(en,{children:e.jsx(tn,{onTouchStart:Ie,onTouchMove:ze,onTouchEnd:Ee,children:v.length>0?e.jsxs(e.Fragment,{children:[e.jsx(nn,{imageCount:v.length,currentIndex:m,children:v.map((o,c)=>e.jsx(rn,{src:o,alt:`상품 이미지 ${c+1}`,imageCount:v.length,onClick:Ce},c))}),v.length>1&&e.jsxs(e.Fragment,{children:[e.jsx(xe,{direction:"prev",onClick:Pe,style:{display:m===0?"none":"flex"},children:e.jsx(et,{})}),e.jsx(xe,{direction:"next",onClick:Se,style:{display:m===v.length-1?"none":"flex"},children:e.jsx(tt,{})}),e.jsxs(sn,{children:[m+1,"/",v.length]}),e.jsx(an,{children:v.map((o,c)=>e.jsx(cn,{active:c===m,onClick:()=>j(c)},c))})]})]}):e.jsx(on,{imageCount:1,children:e.jsx(nt,{})})})}),e.jsxs(A,{children:[e.jsxs(ln,{children:[e.jsxs(pn,{children:[e.jsx(ie,{}),n.region," ",n.district,e.jsx("span",{children:"•"}),e.jsx(rt,{}),n.viewCount||0,e.jsx("span",{children:"•"}),e.jsx(ot,{}),n.chatCount||0,e.jsx("span",{children:"•"}),e.jsx(it,{}),Ae(n.createdAt)]}),e.jsx(dn,{children:n.title}),e.jsxs(xn,{children:[J(n.price),"원",n.negotiable&&e.jsx("span",{style:{fontSize:"14px",color:"#666",marginLeft:"8px"},children:"가격제안 가능"})]}),e.jsxs(un,{children:[e.jsx(W,{type:"condition",children:Be(n.condition)}),n.negotiable&&e.jsx(W,{type:"negotiable",children:"가격제안 가능"}),n.delivery&&e.jsx(W,{type:"delivery",children:"택배거래 가능"})]})]}),e.jsx(gn,{children:n.description}),n.tags&&n.tags.length>0&&e.jsx(fn,{children:n.tags.map((o,c)=>e.jsxs(hn,{children:["#",o]},c))})]}),e.jsx(ue,{}),e.jsx(A,{children:e.jsxs(bn,{children:[e.jsxs(mn,{onClick:()=>t(`/user/${n.sellerId}`),children:[e.jsx(wn,{imageUrl:n.sellerProfileImage,children:!n.sellerProfileImage&&(((ee=n.sellerNickname)==null?void 0:ee[0])||"?")}),e.jsxs(vn,{children:[e.jsxs(yn,{children:[n.sellerNickname||"익명",n.sellerVerified&&e.jsx(jn,{children:e.jsx(st,{})})]}),e.jsxs(kn,{children:[e.jsx(ie,{}),n.region," ",n.district]})]}),e.jsxs(Pn,{children:[e.jsx(at,{}),n.sellerMannerScore||36.5,"°C"]})]}),e.jsxs(Sn,{children:[e.jsxs(V,{children:[e.jsx(X,{children:n.sellerTransactionCount||0}),e.jsx(G,{children:"거래"})]}),e.jsxs(V,{children:[e.jsx(X,{children:n.sellerReviewCount||0}),e.jsx(G,{children:"후기"})]}),e.jsxs(V,{children:[e.jsx(X,{children:n.sellerFollowerCount||0}),e.jsx(G,{children:"팔로워"})]})]})]})}),Z.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{}),e.jsx(A,{children:e.jsxs(Cn,{children:[e.jsx(In,{children:"이런 상품은 어떠세요?"}),e.jsx(zn,{children:Z.map(o=>{var c;return e.jsxs(En,{onClick:()=>t(`/product/${o.id}`),children:[e.jsx($n,{src:((c=o.images)==null?void 0:c[0])||"/placeholder.jpg",alt:o.title}),e.jsxs(Tn,{children:[e.jsx(Fn,{children:o.title}),e.jsxs(Mn,{children:[J(o.price),"원"]})]})]},o.id)})})]})})]}),e.jsx(A,{children:e.jsxs(Vt,{children:[e.jsx(Xt,{onClick:$e,liked:Q,"aria-label":"찜하기",children:Q?e.jsx(ct,{}):e.jsx(lt,{})}),e.jsxs(Jt,{className:"chat-dropdown-container",children:[N&&e.jsxs(Qt,{children:[e.jsxs(pe,{onClick:Te,disabled:p,children:[e.jsx(se,{}),p?"생성 중...":"채팅하기"]}),e.jsxs(pe,{onClick:Fe,disabled:!(n!=null&&n.showPhoneNumber)||!(n!=null&&n.sellerPhone),children:[e.jsx(dt,{}),"문자보내기"]})]}),e.jsxs(Zt,{onClick:()=>q(!N),disabled:p,children:[e.jsx(se,{}),p?"생성 중...":"연락하기",e.jsx(pt,{style:{fontSize:"12px",marginLeft:"4px"}})]})]}),e.jsxs(Gt,{className:"buy",onClick:Me,children:[e.jsx(xt,{}),"구매하기"]})]})}),k&&e.jsxs(Dn,{onClick:()=>z(!1),children:[e.jsx(Ln,{onClick:()=>z(!1),children:e.jsx(be,{})}),e.jsx(Nn,{src:v[m],alt:`상품 이미지 ${m+1}`,onClick:o=>o.stopPropagation()})]}),e.jsx(Ht,{isOpen:ke,onClose:()=>L(!1),product:n,onPaymentSuccess:Ne,onPaymentError:Oe})]})}export{Un as default};
