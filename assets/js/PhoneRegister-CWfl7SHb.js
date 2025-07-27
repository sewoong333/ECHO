var e=(e,i,t)=>new Promise((o,n)=>{var r=e=>{try{d(t.next(e))}catch(i){n(i)}},s=e=>{try{d(t.throw(e))}catch(i){n(i)}},d=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,s);d((t=t.apply(e,i)).next())});import{u as i,r as t,j as o,Z as n,a5 as r,J as s,I as d,g as a}from"./vendor-react-xhcWTtxo.js";import{d as l}from"./vendor-ui-28GTjlMA.js";import{U as c,u as x,b as p}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const h=l.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary, #f8f9fa);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`,f=l.div`
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-primary, #ffffff);
  min-height: 100vh;
  position: relative;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 500px) {
    box-shadow: none;
  }
`,g=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
`,b=l.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #333;
  }
`,u=l.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`,m=l.div`
  padding: 32px 20px;
`,v=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`,j=l.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${e=>e.active?"#2ed8b6":"#e0e0e0"};
  color: ${e=>e.active?"white":"#999"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -20px;
    width: 16px;
    height: 2px;
    background: ${e=>e.completed?"#2ed8b6":"#e0e0e0"};
  }
`,y=l.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,w=l.div`
  margin-bottom: 32px;
`,k=l.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`,$=l.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
`,S=l.div`
  margin-bottom: 20px;
`,z=l.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`,C=l.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,I=l.input`
  flex: 1;
  padding: 16px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.08);
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:disabled {
    background: #f5f5f5;
    color: #999;
  }
`,P=l.button`
  padding: 16px 20px;
  background: ${e=>e.disabled?"#e0e0e0":"#2ed8b6"};
  color: ${e=>e.disabled?"#999":"white"};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover:not(:disabled) {
    background: #26c4a8;
  }
`,E=l.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,L=l.div`
  font-size: 14px;
  color: #ff4757;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
`,M=l.button`
  width: 100%;
  padding: 16px;
  background: ${e=>e.disabled?"#e0e0e0":"linear-gradient(135deg, #2ed8b6 0%, #26c4a8 100%)"};
  color: ${e=>e.disabled?"#999":"white"};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  margin-top: 24px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(46, 216, 182, 0.3);
  }
`,T=l.div`
  background: #fff7e6;
  border: 1px solid #ffe0b3;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,U=l.div`
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #2d7738;
`;function V(){const l=i(),{updateUserProfile:V}=t.useContext(c),{showSuccess:q,showError:H}=x(),[J,N]=t.useState(1),[Y,Z]=t.useState(""),[A,B]=t.useState(""),[D,F]=t.useState(!1),[G,K]=t.useState(180),[O,Q]=t.useState(!1),[R,W]=t.useState(!1),[X,_]=t.useState(null);t.useEffect(()=>{let e;return D&&G>0&&(e=setInterval(()=>{K(G-1)},1e3)),()=>clearInterval(e)},[D,G]);const ee=e=>/^010-\d{4}-\d{4}$/.test(e);return o.jsx(h,{children:o.jsxs(f,{children:[o.jsxs(g,{children:[o.jsx(b,{onClick:()=>l(-1),children:o.jsx(n,{})}),o.jsx(u,{children:"전화번호 등록"}),o.jsx("div",{})]}),o.jsxs(m,{children:[o.jsx("div",{id:"recaptcha-container"}),o.jsx(v,{children:o.jsxs(y,{children:[o.jsx(j,{active:J>=1,completed:J>1,children:"1"}),o.jsx(j,{active:J>=2,completed:R,children:"2"})]})}),1===J&&o.jsxs(w,{children:[o.jsxs(k,{children:[o.jsx(r,{}),"전화번호 입력"]}),o.jsx($,{children:"안전한 거래를 위해 전화번호를 등록해주세요. 등록된 번호는 안전번호로 제공됩니다."}),o.jsxs(S,{children:[o.jsx(z,{children:"전화번호"}),o.jsxs(C,{children:[o.jsx(I,{type:"tel",placeholder:"010-0000-0000",value:Y,onChange:e=>{const i=(e=>{const i=e.replace(/[^\d]/g,"");return i.length<=3?i:i.length<=7?`${i.slice(0,3)}-${i.slice(3)}`:`${i.slice(0,3)}-${i.slice(3,7)}-${i.slice(7,11)}`})(e.target.value);Z(i)},maxLength:13}),o.jsx(P,{onClick:()=>e(this,null,function*(){if(ee(Y)){Q(!0);try{const e=yield p.sendVerificationCode(Y);_(e),F(!0),N(2),K(180),q("인증번호가 전송되었습니다.")}catch(e){let i="인증번호 전송에 실패했습니다.";"auth/too-many-requests"===e.code?i="너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.":"auth/invalid-phone-number"===e.code&&(i="올바르지 않은 전화번호입니다."),H(i)}finally{Q(!1)}}else H("올바른 전화번호 형식이 아닙니다. (010-0000-0000)")}),disabled:!ee(Y)||O,children:O?"전송중...":"인증번호 전송"})]})]}),o.jsxs(T,{children:[o.jsx(s,{color:"#ff8c00"}),o.jsx("div",{children:o.jsxs("div",{style:{fontSize:"13px",color:"#666",lineHeight:"1.4"},children:["• 인증번호는 SMS로 전송됩니다",o.jsx("br",{}),"• 본인 명의의 휴대폰 번호만 등록 가능합니다",o.jsx("br",{}),"• 등록된 번호는 안전번호로 제공되어 개인정보가 보호됩니다"]})})]})]}),2===J&&o.jsxs(w,{children:[o.jsxs(k,{children:[o.jsx(d,{}),"인증번호 입력"]}),o.jsxs($,{children:[Y,"로 전송된 6자리 인증번호를 입력해주세요."]}),o.jsxs(S,{children:[o.jsx(z,{children:"인증번호 (6자리)"}),o.jsxs(E,{children:[o.jsx(I,{type:"number",placeholder:"123456",value:A,onChange:e=>B(e.target.value),maxLength:6,disabled:R}),!R&&G>0&&o.jsxs(L,{children:[o.jsx(a,{}),(ie=G,`${Math.floor(ie/60)}:${(ie%60).toString().padStart(2,"0")}`)]})]}),!R&&G>0&&o.jsx(P,{onClick:()=>e(this,null,function*(){if(6===A.length)if(X){Q(!0);try{yield p.verifyCode(X,A),W(!0),q("전화번호 인증이 완료되었습니다!")}catch(e){let i="인증번호가 올바르지 않습니다.";"auth/invalid-verification-code"===e.code?i="인증번호가 올바르지 않습니다.":"auth/code-expired"===e.code&&(i="인증번호가 만료되었습니다. 다시 요청해주세요."),H(i)}finally{Q(!1)}}else H("먼저 인증번호를 요청해주세요.");else H("6자리 인증번호를 입력해주세요.")}),disabled:6!==A.length||O,style:{marginTop:"12px",width:"100%"},children:O?"인증중...":"인증하기"}),0===G&&!R&&o.jsx(P,{onClick:()=>{N(1),F(!1),B("")},style:{marginTop:"12px",width:"100%",background:"#666"},children:"인증번호 재전송"})]}),R&&o.jsxs(U,{children:[o.jsx(d,{}),o.jsx("div",{children:"전화번호 인증이 완료되었습니다!"})]}),o.jsx(M,{onClick:()=>e(this,null,function*(){Q(!0);try{yield V({phoneNumber:Y.replace(/-/g,""),phoneVerified:!0}),q("전화번호가 성공적으로 등록되었습니다!"),l("/mypage")}catch(e){H("전화번호 등록에 실패했습니다.")}finally{Q(!1)}}),disabled:!R||O,children:O?"등록중...":"등록 완료"})]})]})]})});var ie}export{V as default};
