import{u as D,r,U as G,o as Y,j as e,y as J,w as K,z as O,N as C,M as Q,at as S,i as o}from"./index-CSkq5290.js";const W=o.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary, #f8f9fa);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`,X=o.div`
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-primary, #ffffff);
  min-height: 100vh;
  position: relative;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 500px) {
    box-shadow: none;
  }
`,Z=o.div`
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
`,_=o.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #333;
  }
`,ee=o.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`,te=o.div`
  padding: 32px 20px;
`,oe=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`,k=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${i=>i.active?"#2ed8b6":"#e0e0e0"};
  color: ${i=>i.active?"white":"#999"};
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
    background: ${i=>i.completed?"#2ed8b6":"#e0e0e0"};
  }
`,ne=o.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,$=o.div`
  margin-bottom: 32px;
`,z=o.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`,I=o.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
`,T=o.div`
  margin-bottom: 20px;
`,N=o.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`,ie=o.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,P=o.input`
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
`,g=o.button`
  padding: 16px 20px;
  background: ${i=>i.disabled?"#e0e0e0":"#2ed8b6"};
  color: ${i=>i.disabled?"#999":"white"};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${i=>i.disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover:not(:disabled) {
    background: #26c4a8;
  }
`,re=o.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,se=o.div`
  font-size: 14px;
  color: #ff4757;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
`,ae=o.button`
  width: 100%;
  padding: 16px;
  background: ${i=>i.disabled?"#e0e0e0":"linear-gradient(135deg, #2ed8b6 0%, #26c4a8 100%)"};
  color: ${i=>i.disabled?"#999":"white"};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${i=>i.disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  margin-top: 24px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(46, 216, 182, 0.3);
  }
`,de=o.div`
  background: #fff7e6;
  border: 1px solid #ffe0b3;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,ce=o.div`
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #2d7738;
`;function xe(){const i=D(),{user:le,updateUserProfile:R}=r.useContext(G),{showSuccess:f,showError:d}=Y(),[x,u]=r.useState(1),[c,B]=r.useState(""),[h,b]=r.useState(""),[m,v]=r.useState(!1),[s,j]=r.useState(180),[l,p]=r.useState(!1),[a,F]=r.useState(!1),[w,V]=r.useState(null);r.useEffect(()=>{let t;return m&&s>0&&(t=setInterval(()=>{j(s-1)},1e3)),()=>clearInterval(t)},[m,s]);const E=t=>{const n=Math.floor(t/60),q=t%60;return`${n}:${q.toString().padStart(2,"0")}`},L=t=>{const n=t.replace(/[^\d]/g,"");return n.length<=3?n:n.length<=7?`${n.slice(0,3)}-${n.slice(3)}`:`${n.slice(0,3)}-${n.slice(3,7)}-${n.slice(7,11)}`},M=t=>{const n=L(t.target.value);B(n)},y=t=>/^010-\d{4}-\d{4}$/.test(t),H=async()=>{if(!y(c)){d("올바른 전화번호 형식이 아닙니다. (010-0000-0000)");return}p(!0);try{const t=await S.sendVerificationCode(c);V(t),v(!0),u(2),j(180),f("인증번호가 전송되었습니다.")}catch(t){console.error("인증번호 전송 실패:",t);let n="인증번호 전송에 실패했습니다.";t.code==="auth/too-many-requests"?n="너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.":t.code==="auth/invalid-phone-number"&&(n="올바르지 않은 전화번호입니다."),d(n)}finally{p(!1)}},U=async()=>{if(h.length!==6){d("6자리 인증번호를 입력해주세요.");return}if(!w){d("먼저 인증번호를 요청해주세요.");return}p(!0);try{await S.verifyCode(w,h),F(!0),f("전화번호 인증이 완료되었습니다!")}catch(t){console.error("인증번호 확인 실패:",t);let n="인증번호가 올바르지 않습니다.";t.code==="auth/invalid-verification-code"?n="인증번호가 올바르지 않습니다.":t.code==="auth/code-expired"&&(n="인증번호가 만료되었습니다. 다시 요청해주세요."),d(n)}finally{p(!1)}},A=async()=>{p(!0);try{await R({phoneNumber:c.replace(/-/g,""),phoneVerified:!0}),f("전화번호가 성공적으로 등록되었습니다!"),i("/mypage")}catch{d("전화번호 등록에 실패했습니다.")}finally{p(!1)}};return e.jsx(W,{children:e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsx(_,{onClick:()=>i(-1),children:e.jsx(J,{})}),e.jsx(ee,{children:"전화번호 등록"}),e.jsx("div",{})]}),e.jsxs(te,{children:[e.jsx("div",{id:"recaptcha-container"}),e.jsx(oe,{children:e.jsxs(ne,{children:[e.jsx(k,{active:x>=1,completed:x>1,children:"1"}),e.jsx(k,{active:x>=2,completed:a,children:"2"})]})}),x===1&&e.jsxs($,{children:[e.jsxs(z,{children:[e.jsx(K,{}),"전화번호 입력"]}),e.jsx(I,{children:"안전한 거래를 위해 전화번호를 등록해주세요. 등록된 번호는 안전번호로 제공됩니다."}),e.jsxs(T,{children:[e.jsx(N,{children:"전화번호"}),e.jsxs(ie,{children:[e.jsx(P,{type:"tel",placeholder:"010-0000-0000",value:c,onChange:M,maxLength:13}),e.jsx(g,{onClick:H,disabled:!y(c)||l,children:l?"전송중...":"인증번호 전송"})]})]}),e.jsxs(de,{children:[e.jsx(O,{color:"#ff8c00"}),e.jsx("div",{children:e.jsxs("div",{style:{fontSize:"13px",color:"#666",lineHeight:"1.4"},children:["• 인증번호는 SMS로 전송됩니다",e.jsx("br",{}),"• 본인 명의의 휴대폰 번호만 등록 가능합니다",e.jsx("br",{}),"• 등록된 번호는 안전번호로 제공되어 개인정보가 보호됩니다"]})})]})]}),x===2&&e.jsxs($,{children:[e.jsxs(z,{children:[e.jsx(C,{}),"인증번호 입력"]}),e.jsxs(I,{children:[c,"로 전송된 6자리 인증번호를 입력해주세요."]}),e.jsxs(T,{children:[e.jsx(N,{children:"인증번호 (6자리)"}),e.jsxs(re,{children:[e.jsx(P,{type:"number",placeholder:"123456",value:h,onChange:t=>b(t.target.value),maxLength:6,disabled:a}),!a&&s>0&&e.jsxs(se,{children:[e.jsx(Q,{}),E(s)]})]}),!a&&s>0&&e.jsx(g,{onClick:U,disabled:h.length!==6||l,style:{marginTop:"12px",width:"100%"},children:l?"인증중...":"인증하기"}),s===0&&!a&&e.jsx(g,{onClick:()=>{u(1),v(!1),b("")},style:{marginTop:"12px",width:"100%",background:"#666"},children:"인증번호 재전송"})]}),a&&e.jsxs(ce,{children:[e.jsx(C,{}),e.jsx("div",{children:"전화번호 인증이 완료되었습니다!"})]}),e.jsx(ae,{onClick:A,disabled:!a||l,children:l?"등록중...":"등록 완료"})]})]})]})})}export{xe as default};
