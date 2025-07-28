import{r as u,U as ue,o as fe,j as e,q as xe,s as De,t as Oe,v as Be,w as te,i as o,u as Ae,x as Ue,P as Ye,C as qe,y as ne,z as Ke,A as He,B as Ve,D as Xe,E as We,G as Ge,H as Je,I as Qe,J as oe,K as Ze,L as et,M as tt,N as nt,O as ot,Q as rt,R as it,S as st,V as at,p as ct}from"./index-CGuM-vkb.js";function he(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function ge(t,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&R(t,i)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)},M(t)}function R(t,i){return R=Object.setPrototypeOf||function(d,c){return d.__proto__=c,d},R(t,i)}function me(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function O(t,i,s){return me()?O=Reflect.construct:O=function(c,f,v){var a=[null];a.push.apply(a,f);var x=Function.bind.apply(c,a),m=new x;return v&&R(m,v.prototype),m},O.apply(null,arguments)}function lt(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function B(t){var i=typeof Map=="function"?new Map:void 0;return B=function(d){if(d===null||!lt(d))return d;if(typeof d!="function")throw new TypeError("Super expression must either be null or a function");if(typeof i<"u"){if(i.has(d))return i.get(d);i.set(d,c)}function c(){return O(d,arguments,M(this).constructor)}return c.prototype=Object.create(d.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),R(c,d)},B(t)}function dt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function pt(t,i){if(i&&(typeof i=="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dt(t)}function be(t){var i=me();return function(){var d=M(t),c;if(i){var f=M(this).constructor;c=Reflect.construct(d,arguments,f)}else c=d.apply(this,arguments);return pt(this,c)}}var _=null;function ut(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(_!=null)return _;var d=new Promise(function(c,f){try{var v=function(){D(i)!=null?c(D(i)):f(new ft(i))},a=function(){f(new xt(t))};if(typeof window>"u"||typeof document>"u")return c(null);if(D(i)!=null)return c(D(i));var x=document.querySelector('script[src="'.concat(t,'"]'));if(x!=null){var m;x.removeEventListener("load",v),x.removeEventListener("error",a),(m=x.parentElement)===null||m===void 0||m.removeChild(x)}var h=document.createElement("script");h.src=t,h.addEventListener("load",v),h.addEventListener("error",a),s.priority!=null&&(h.fetchPriority=s.priority),document.head.appendChild(h)}catch(b){f(b);return}});return _=d.catch(function(c){return _=null,Promise.reject(c)}),_}function D(t){return window[t]}var ft=function(t){ge(s,t);var i=be(s);function s(d){var c;return he(this,s),c=i.call(this,"[TossPayments SDK] ".concat(d," is not available")),c.name="NamespaceNotAvailableError",c}return s}(B(Error)),xt=function(t){ge(s,t);var i=be(s);function s(d){var c;return he(this,s),c=i.call(this,"[TossPayments SDK] Failed to load script: [".concat(d,"]")),c.name="ScriptLoadFailedError",c}return s}(B(Error)),ht="https://js.tosspayments.com/v1";function gt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.src,d=s===void 0?ht:s;return typeof window>"u"?Promise.resolve({requestPayment:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")},requestBillingAuth:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")},cancelPayment:function(){throw new Error("[TossPayments SDK] It looks like runtime is not from browser. This method is only executable on browser.")}}):ut(d,"TossPayments").then(function(c){return c(t)})}const mt=o.div`
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
`,bt=o.div`
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
`,vt=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
`,yt=o.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
`,wt=o.button`
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
`,jt=o.div`
  padding: 24px;
`,kt=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
`,Pt=o.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`,St=o.div`
  flex: 1;
`,Ct=o.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
`,It=o.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
`,Tt=o.div`
  margin-bottom: 24px;
`,Et=o.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`,zt=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ft=o.div`
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
`,$t=o.div`
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
`,_t=o.div`
  flex: 1;
`,Mt=o.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,Rt=o.div`
  font-size: 13px;
  color: #666;
`,Nt=o.div`
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
`,Lt=o.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
`,A=o.div`
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
`,Dt=o.button`
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
`,Ot=o.div`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  margin-top: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`,Bt="test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";function At({isOpen:t,onClose:i,product:s,onPaymentSuccess:d,onPaymentError:c}){var P;const{user:f}=u.useContext(ue),{showSuccess:v,showError:a}=fe(),[x,m]=u.useState("카드"),[h,b]=u.useState(!1),[g,j]=u.useState(null);if(u.useEffect(()=>{t&&gt(Bt).then(j)},[t]),!t)return null;const k=p=>new Intl.NumberFormat("ko-KR").format(p),T=[{key:"카드",name:"신용/체크카드",desc:"모든 카드사 지원",icon:e.jsx(Be,{})},{key:"계좌이체",name:"계좌이체",desc:"실시간 계좌이체",icon:e.jsx(te,{})},{key:"휴대폰",name:"휴대폰 결제",desc:"통신사 소액결제",icon:e.jsx(te,{})}],E=async()=>{var p;if(!g||!f||!s){a("결제 준비가 완료되지 않았습니다.");return}b(!0);try{const w=`ORDER_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,N=f.displayName||((p=f.email)==null?void 0:p.split("@")[0])||"구매자",$={amount:s.price,orderId:w,orderName:s.title,customerName:N,successUrl:`${window.location.origin}/payment/success`,failUrl:`${window.location.origin}/payment/fail`};let S;switch(x){case"카드":S=g.requestPayment("카드",$);break;case"계좌이체":S=g.requestPayment("계좌이체",$);break;case"휴대폰":S=g.requestPayment("휴대폰",{...$,customerMobilePhone:f.phoneNumber||"01000000000"});break;default:throw new Error("지원하지 않는 결제 방법입니다.")}await S}catch(w){console.error("결제 실패:",w),a(w.message||"결제 중 오류가 발생했습니다."),c&&c(w)}finally{b(!1)}},z=s.delivery?3e3:0,F=s.price+z;return e.jsx(mt,{onClick:i,children:e.jsxs(bt,{onClick:p=>p.stopPropagation(),children:[e.jsxs(vt,{children:[e.jsx(yt,{children:"결제하기"}),e.jsx(wt,{onClick:i,children:e.jsx(xe,{})})]}),e.jsxs(jt,{children:[e.jsxs(kt,{children:[e.jsx(Pt,{src:((P=s.images)==null?void 0:P[0])||"/placeholder.jpg",alt:s.title}),e.jsxs(St,{children:[e.jsx(Ct,{children:s.title}),e.jsxs(It,{children:[k(s.price),"원"]})]})]}),e.jsxs(Tt,{children:[e.jsx(Et,{children:"결제 방법"}),e.jsx(zt,{children:T.map(p=>e.jsxs(Ft,{selected:x===p.key,onClick:()=>m(p.key),children:[e.jsx($t,{selected:x===p.key,children:p.icon}),e.jsxs(_t,{children:[e.jsx(Mt,{children:p.name}),e.jsx(Rt,{children:p.desc})]}),e.jsx(Nt,{selected:x===p.key})]},p.key))})]}),e.jsxs(Lt,{children:[e.jsxs(A,{children:[e.jsx("span",{children:"상품 금액"}),e.jsxs("span",{children:[k(s.price),"원"]})]}),z>0&&e.jsxs(A,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[k(z),"원"]})]}),e.jsxs(A,{total:!0,last:!0,children:[e.jsx("span",{children:"총 결제 금액"}),e.jsxs("span",{children:[k(F),"원"]})]})]}),e.jsx(Dt,{onClick:E,disabled:h,children:h?e.jsxs(e.Fragment,{children:[e.jsx(De,{className:"fa-spin"}),"결제 진행 중..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Oe,{}),k(F),"원 결제하기"]})}),e.jsxs(Ot,{children:["• 결제 완료 후 판매자와 연결되어 거래를 진행합니다.",e.jsx("br",{}),"• 안전한 거래를 위해 직거래를 권장합니다.",e.jsx("br",{}),"• 문제 발생 시 고객센터로 문의해 주세요."]})]})]})})}const U=o.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,re=o.div`
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
`,ie=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,se=o.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,Ut=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`,ae=o.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,Yt=o.div`
  position: fixed;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 60px;
  background: var(--color-bg-glass, rgba(255, 255, 255, 0.85));
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: 0 var(--space-4, 16px);
  z-index: 99;
  border-bottom: 1px solid var(--color-border-light, rgba(0, 0, 0, 0.06));
  box-shadow: var(--shadow-lg, 0 8px 32px rgba(0, 0, 0, 0.08));
`,qt=o.button`
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
`,ce=o.button`
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
`,Kt=o.div`
  position: relative;
  margin-top: 116px; /* 56px(헤더) + 60px(액션바) */
  padding: 16px;
  background: #fff;
`,Ht=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  touch-action: pan-y;
`,Vt=o.div`
  display: flex;
  width: ${t=>t.imageCount*100}%;
  height: 100%;
  transform: translateX(-${t=>t.currentIndex*(100/t.imageCount)}%);
  transition: transform 0.3s ease;
`,Xt=o.img`
  width: ${t=>100/t.imageCount}%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,Wt=o.div`
  width: ${t=>100/t.imageCount}%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 48px;
`,le=o.button`
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
`,Gt=o.div`
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
`,Jt=o.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`,Qt=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${t=>t.active?"white":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background 0.2s;
`,Y=o.div`
  padding: 20px;
`,Zt=o.div`
  margin-bottom: 24px;
`,en=o.h1`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`,tn=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
`,nn=o.div`
  font-size: 24px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 16px;
`,on=o.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`,q=o.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: ${t=>{switch(t.type){case"condition":return"#e8f5e8";case"negotiable":return"#fff3e0";case"delivery":return"#e3f2fd";default:return"#f5f5f5"}}};
  color: ${t=>{switch(t.type){case"condition":return"#2e7d32";case"negotiable":return"#f57c00";case"delivery":return"#1976d2";default:return"#666"}}};
`,rn=o.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
  margin-bottom: 24px;
`,sn=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,an=o.div`
  background: #f8f9fa;
  color: #666;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
`,de=o.div`
  height: 8px;
  background: #f8f9fa;
  margin: 0 -20px 24px -20px;
`,cn=o.div`
  margin-bottom: 24px;
`,ln=o.div`
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
`,dn=o.div`
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
`,pn=o.div`
  flex: 1;
`,un=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,fn=o.div`
  color: #4CAF50;
  font-size: 14px;
`,xn=o.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,hn=o.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #2ed8b6;
  font-weight: 600;
`,gn=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
`,K=o.div`
  text-align: center;
`,H=o.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
`,V=o.div`
  font-size: 12px;
  color: #666;
`,mn=o.div`
  margin-bottom: 24px;
`,bn=o.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`,vn=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,yn=o.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border-color: #2ed8b6;
  }
`,wn=o.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`,jn=o.div`
  padding: 12px;
`,kn=o.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Pn=o.div`
  font-size: 14px;
  font-weight: 600;
  color: #2ed8b6;
`,Sn=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`,Cn=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
`,In=o.div`
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
`,Tn=o.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`,En=o.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`,zn=o.div`
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
`,pe=o.button`
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
`,Fn=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 150;
`;function _n(){var J;const t=Ae(),{id:i}=Ue(),{products:s,incrementViews:d,toggleLike:c,changeProductStatus:f,PRODUCT_STATUS:v}=u.useContext(Ye),{user:a}=u.useContext(ue),{createOrGetChatRoom:x}=u.useContext(qe),{showSuccess:m,showError:h,showWarning:b}=fe(),[g,j]=u.useState(0),[k,T]=u.useState(!1),[E,z]=u.useState(!0),[F,P]=u.useState(!1),[p,w]=u.useState(!1),[N,$]=u.useState(0),[S,ve]=u.useState(0),[ye,L]=u.useState(!1),n=s.find(r=>String(r.id)===String(i));u.useEffect(()=>{s.length>0&&(z(!1),console.log("🔍 상품 검색:",{searchId:i,totalProducts:s.length,foundProduct:n?"YES":"NO",productIds:s.slice(0,5).map(r=>r.id)}))},[s,i,n]),u.useEffect(()=>{(async()=>{if(!n&&!E&&s.length>0){console.log("🔍 개별 상품 조회 시도:",i);try{const l=await ct.getProduct(i);console.log("✅ 개별 상품 조회 성공:",l)}catch(l){console.error("❌ 개별 상품 조회 실패:",l)}}})()},[n,E,s.length,i]),u.useEffect(()=>{n&&(console.log("👀 조회수 증가 조건 확인:",{productId:n.id,productTitle:n.title,sellerId:n.sellerId,currentUserId:(a==null?void 0:a.uid)||"anonymous",isOwnProduct:n.sellerId===(a==null?void 0:a.uid),viewCount:n.viewCount||0}),n.sellerId!==(a==null?void 0:a.uid)?(console.log("✅ 조회수 증가 시작"),d(n.id)):console.log("❌ 본인 상품이므로 조회수 증가 안함"))},[n==null?void 0:n.id]);const we=()=>{j(r=>{var l;return r===0?(((l=n==null?void 0:n.images)==null?void 0:l.length)||1)-1:r-1})},je=()=>{j(r=>{var l;return r===(((l=n==null?void 0:n.images)==null?void 0:l.length)||1)-1?0:r+1})},ke=()=>{T(!0)},Pe=r=>{$(r.targetTouches[0].clientX)},Se=r=>{ve(r.targetTouches[0].clientX)},Ce=()=>{var I;if(!N||!S)return;const r=N-S,l=r>50,Q=r<-50;l&&g<(((I=n==null?void 0:n.images)==null?void 0:I.length)||1)-1&&j(C=>C+1),Q&&g>0&&j(C=>C-1)},Ie=async()=>{if(!(a!=null&&a.isLoggedIn)){b("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}try{const r=n.isLikedByUser;await c(n.id),r?m("찜 목록에서 제거되었습니다."):m("찜 목록에 추가되었습니다!",{title:"찜 완료"})}catch(r){console.error("찜하기 실패:",r),h("찜하기 처리 중 오류가 발생했습니다.")}},Te=async()=>{if(!(a!=null&&a.isLoggedIn)){b("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(n.sellerId===a.uid){b("본인 상품에는 채팅할 수 없습니다.",{title:"채팅 불가"});return}if(!p){w(!0);try{console.log("💬 채팅방 생성 시작...",{productId:n.id,sellerId:n.sellerId,buyerId:a.uid});const r=await x(n.id,n.sellerId,a.uid,{title:n.title,price:n.price,images:n.images,status:n.status});console.log("✅ 채팅방 생성 성공:",r),t(`/chat/${r}`)}catch(r){console.error("❌ 채팅방 생성 실패:",r),h("채팅방 생성에 실패했습니다. 다시 시도해주세요.",{title:"채팅 생성 실패"})}finally{w(!1)}}},Ee=async()=>{if(!(a!=null&&a.isLoggedIn)){b("로그인이 필요합니다.",{title:"로그인 필요"}),t("/login");return}if(n.sellerId===a.uid){b("본인 상품은 구매할 수 없습니다.",{title:"구매 불가"});return}if(n.status!==v.ACTIVE){h("이미 판매가 완료된 상품입니다.",{title:"판매 완료"});return}L(!0)},ze=r=>{r.stopPropagation(),P(!F)},Fe=()=>{P(!1),t(`/edit-product/${n.id}`)},$e=async()=>{if(!(a!=null&&a.isLoggedIn)||n.sellerId!==a.uid){alert("권한이 없습니다.");return}if(window.confirm("정말 이 상품을 삭제하시겠습니까?"))try{await f(n.id,v.DELETED),alert("상품이 삭제되었습니다."),t("/")}catch(r){console.error("상품 삭제 실패:",r),alert("상품 삭제에 실패했습니다.")}P(!1)},_e=()=>{P(!1)},Me=async r=>{try{await f(n.id,v.SOLD);const l=await x(n.id,n.sellerId,a.uid,{title:n.title,price:n.price,images:n.images,status:v.SOLD});L(!1),m("결제가 완료되었습니다! 판매자와 연락하여 거래를 진행해 주세요."),t(`/chat/${l}?payment=success`)}catch(l){console.error("결제 후 처리 실패:",l),h("결제는 완료되었지만 후속 처리 중 오류가 발생했습니다.")}},Re=r=>{L(!1),h(r.message||"결제 중 오류가 발생했습니다.")},Ne=r=>({excellent:"매우 좋음",good:"좋음",fair:"보통",poor:"나쁨"})[r]||r,X=r=>new Intl.NumberFormat("ko-KR").format(r),Le=r=>{if(!r)return"";const l=r.toDate?r.toDate():new Date(r),I=new Date-l,C=Math.floor(I/6e4),Z=Math.floor(I/36e5),ee=Math.floor(I/864e5);return C<1?"방금 전":C<60?`${C}분 전`:Z<24?`${Z}시간 전`:ee<7?`${ee}일 전`:l.toLocaleDateString("ko-KR")};if(E)return e.jsx(U,{children:e.jsx(Sn,{children:"상품 정보를 불러오는 중..."})});if(!n)return e.jsxs(U,{children:[e.jsx(re,{children:e.jsx(ie,{children:e.jsx(se,{onClick:()=>t(-1),children:e.jsx(ne,{})})})}),e.jsxs(Cn,{children:[e.jsx(Ke,{size:48,color:"#ddd"}),e.jsx("h3",{children:"상품을 찾을 수 없습니다"}),e.jsx("p",{children:"삭제되었거나 존재하지 않는 상품입니다."}),e.jsxs("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px"},children:["상품 ID: ",i," | 로드된 상품 수: ",s.length]}),e.jsx("button",{onClick:()=>t("/"),style:{marginTop:"16px",padding:"8px 16px",backgroundColor:"#2ed8b6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:"홈으로 돌아가기"})]})]});const W=n.isLikedByUser||!1,y=n.images||[],G=s.filter(r=>r.category===n.category&&r.id!==n.id).slice(0,4);return e.jsxs(U,{children:[e.jsxs(re,{children:[e.jsx(ie,{children:e.jsx(se,{onClick:()=>t(-1),children:e.jsx(ne,{})})}),e.jsxs(Ut,{children:[e.jsx(ae,{children:e.jsx(He,{})}),(a==null?void 0:a.uid)===(n==null?void 0:n.sellerId)&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{onClick:ze,children:e.jsx(Ve,{})}),F&&e.jsxs(e.Fragment,{children:[e.jsx(Fn,{onClick:_e}),e.jsxs(zn,{children:[e.jsxs(pe,{onClick:Fe,children:[e.jsx(Xe,{}),"수정"]}),e.jsxs(pe,{className:"delete",onClick:$e,children:[e.jsx(We,{}),"삭제"]})]})]})]})]})]}),e.jsx(Kt,{children:e.jsx(Ht,{onTouchStart:Pe,onTouchMove:Se,onTouchEnd:Ce,children:y.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Vt,{imageCount:y.length,currentIndex:g,children:y.map((r,l)=>e.jsx(Xt,{src:r,alt:`상품 이미지 ${l+1}`,imageCount:y.length,onClick:ke},l))}),y.length>1&&e.jsxs(e.Fragment,{children:[e.jsx(le,{direction:"prev",onClick:we,style:{display:g===0?"none":"flex"},children:e.jsx(Ge,{})}),e.jsx(le,{direction:"next",onClick:je,style:{display:g===y.length-1?"none":"flex"},children:e.jsx(Je,{})}),e.jsxs(Gt,{children:[g+1,"/",y.length]}),e.jsx(Jt,{children:y.map((r,l)=>e.jsx(Qt,{active:l===g,onClick:()=>j(l)},l))})]})]}):e.jsx(Wt,{imageCount:1,children:e.jsx(Qe,{})})})}),e.jsxs(Y,{children:[e.jsxs(Zt,{children:[e.jsxs(tn,{children:[e.jsx(oe,{}),n.region," ",n.district,e.jsx("span",{children:"•"}),e.jsx(Ze,{}),n.viewCount||0,e.jsx("span",{children:"•"}),e.jsx(et,{}),n.chatCount||0,e.jsx("span",{children:"•"}),e.jsx(tt,{}),Le(n.createdAt)]}),e.jsx(en,{children:n.title}),e.jsxs(nn,{children:[X(n.price),"원",n.negotiable&&e.jsx("span",{style:{fontSize:"14px",color:"#666",marginLeft:"8px"},children:"가격제안 가능"})]}),e.jsxs(on,{children:[e.jsx(q,{type:"condition",children:Ne(n.condition)}),n.negotiable&&e.jsx(q,{type:"negotiable",children:"가격제안 가능"}),n.delivery&&e.jsx(q,{type:"delivery",children:"택배거래 가능"})]})]}),e.jsx(rn,{children:n.description}),n.tags&&n.tags.length>0&&e.jsx(sn,{children:n.tags.map((r,l)=>e.jsxs(an,{children:["#",r]},l))})]}),e.jsx(de,{}),e.jsx(Y,{children:e.jsxs(cn,{children:[e.jsxs(ln,{onClick:()=>t(`/user/${n.sellerId}`),children:[e.jsx(dn,{imageUrl:n.sellerProfileImage,children:!n.sellerProfileImage&&(((J=n.sellerNickname)==null?void 0:J[0])||"?")}),e.jsxs(pn,{children:[e.jsxs(un,{children:[n.sellerNickname||"익명",n.sellerVerified&&e.jsx(fn,{children:e.jsx(nt,{})})]}),e.jsxs(xn,{children:[e.jsx(oe,{}),n.region," ",n.district]})]}),e.jsxs(hn,{children:[e.jsx(ot,{}),n.sellerMannerScore||36.5,"°C"]})]}),e.jsxs(gn,{children:[e.jsxs(K,{children:[e.jsx(H,{children:n.sellerTransactionCount||0}),e.jsx(V,{children:"거래"})]}),e.jsxs(K,{children:[e.jsx(H,{children:n.sellerReviewCount||0}),e.jsx(V,{children:"후기"})]}),e.jsxs(K,{children:[e.jsx(H,{children:n.sellerFollowerCount||0}),e.jsx(V,{children:"팔로워"})]})]})]})}),G.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(de,{}),e.jsx(Y,{children:e.jsxs(mn,{children:[e.jsx(bn,{children:"이런 상품은 어떠세요?"}),e.jsx(vn,{children:G.map(r=>{var l;return e.jsxs(yn,{onClick:()=>t(`/product/${r.id}`),children:[e.jsx(wn,{src:((l=r.images)==null?void 0:l[0])||"/placeholder.jpg",alt:r.title}),e.jsxs(jn,{children:[e.jsx(kn,{children:r.title}),e.jsxs(Pn,{children:[X(r.price),"원"]})]})]},r.id)})})]})})]}),e.jsxs(Yt,{children:[e.jsx(qt,{onClick:Ie,liked:W,"aria-label":"찜하기",children:W?e.jsx(rt,{}):e.jsx(it,{})}),e.jsxs(ce,{className:"chat",onClick:Te,disabled:p,children:[e.jsx(st,{}),p?"생성 중...":"채팅하기"]}),e.jsxs(ce,{className:"buy",onClick:Ee,children:[e.jsx(at,{}),"구매하기"]})]}),k&&e.jsxs(In,{onClick:()=>T(!1),children:[e.jsx(Tn,{onClick:()=>T(!1),children:e.jsx(xe,{})}),e.jsx(En,{src:y[g],alt:`상품 이미지 ${g+1}`,onClick:r=>r.stopPropagation()})]}),e.jsx(At,{isOpen:ye,onClose:()=>L(!1),product:n,onPaymentSuccess:Me,onPaymentError:Re})]})}export{_n as default};
