import{u as e,ap as r,r as o,j as n,J as i,z as t,K as s,V as a,ar as d,as as l,a5 as c}from"./vendor-react-xhcWTtxo.js";import{d as p}from"./vendor-ui-28GTjlMA.js";import{u as x,l as f}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const g=p.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,h=p.div`
  background: white;
  border-radius: 20px;
  padding: 40px 24px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`,u=p.div`
  width: 80px;
  height: 80px;
  background: #ff6b6b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  font-size: 36px;
  animation: shake 0.5s ease-out;

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`,m=p.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 12px 0;
`,b=p.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 24px 0;
`,j=p.div`
  background: #fff5f5;
  border: 1px solid #fed7d7;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 32px;
  text-align: left;
`,v=p.div`
  font-size: 14px;
  color: #c53030;
  font-weight: 600;
  margin-bottom: 8px;
`,y=p.div`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
`,k=p.div`
  display: flex;
  gap: 12px;
`,C=p.button`
  flex: 1;
  height: 48px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`,w=p(C)`
  background: #2ed8b6;
  color: white;
  
  &:hover {
    background: #26c4a8;
  }
`,A=p(C)`
  background: #f8f9fa;
  color: #333;
  border: 1px solid #e0e0e0;
  
  &:hover {
    background: #e9ecef;
  }
`,E=p.div`
  font-size: 12px;
  color: #999;
  margin-top: 20px;
  line-height: 1.4;
`,I=p.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin-top: 20px;
  text-align: left;
`,_=p.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`,z=p.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    font-size: 13px;
    color: #666;
    margin-bottom: 8px;
    padding-left: 16px;
    position: relative;
    
    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: #2ed8b6;
    }
  }
`,N=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,P=p.span`
  font-family: monospace;
  background: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  flex: 1;
`,D=p.button`
  background: ${e=>e.copied?"#4CAF50":"#2ed8b6"};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`,T=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`,O=p(C)`
  background: #6c757d;
  color: white;
  
  &:hover {
    background: #5a6268;
  }
`;function R(){const p=e(),[C]=r(),{showSuccess:R,showError:S}=x(),[Y,$]=o.useState(!1),M=C.get("code"),X=C.get("message"),U=C.get("orderId"),F=C.get("productId"),L=C.get("amount");o.useEffect(()=>{(M||X)&&f.error("Payment failed",{code:M,message:X,orderId:U,productId:F,amount:L},"payment-fail")},[M,X,U,F,L]);const J=o.useCallback(()=>{p(F?`/product/${F}`:-1),f.userAction("Payment retry attempted",{orderId:U,productId:F})},[F,p,U]),V=o.useCallback(()=>{p("/"),f.userAction("Navigate to home from payment fail",{orderId:U})},[p,U]),B=o.useCallback(()=>{const e=`결제 중 다음 오류가 발생했습니다:\n\n오류 코드: ${M}\n오류 메시지: ${X}\n주문번호: ${U}\n\n상세한 내용을 알려주세요.`,r=`mailto:support@echo-music.com?subject=${encodeURIComponent(`결제 오류 문의 - 주문번호: ${U}`)}&body=${encodeURIComponent(e)}`;window.open(r),f.userAction("Contact support from payment fail",{orderId:U,code:M})},[U,M,X]),H=o.useCallback(()=>{return e=this,r=function*(){if(U)try{yield navigator.clipboard.writeText(U),$(!0),R("주문번호가 복사되었습니다"),setTimeout(()=>$(!1),2e3),f.userAction("Order ID copied",{orderId:U})}catch(e){S("복사에 실패했습니다")}},new Promise((o,n)=>{var i=e=>{try{s(r.next(e))}catch(o){n(o)}},t=e=>{try{s(r.throw(e))}catch(o){n(o)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,t);s((r=r.apply(e,null)).next())});var e,r},[U,R,S]);return n.jsx(g,{children:n.jsxs(h,{children:[n.jsx(u,{children:n.jsx(i,{})}),n.jsx(m,{children:"결제 실패"}),n.jsxs(b,{children:["결제가 완료되지 않았습니다.",n.jsx("br",{}),"다시 시도해 주세요."]}),(M||X)&&n.jsxs(j,{children:[M&&n.jsxs(v,{children:["오류 코드: ",M]}),n.jsx(y,{children:(K=M,q=X,{PAY_PROCESS_CANCELED:"사용자가 결제를 취소했습니다.",PAY_PROCESS_ABORTED:"결제 중 오류가 발생했습니다.",REJECT_CARD_COMPANY:"카드사에서 결제를 거절했습니다.",INSUFFICIENT_FUNDS:"계좌 잔액이 부족합니다.",INVALID_CARD:"유효하지 않은 카드입니다.",EXCEED_MAX_DAILY_PAYMENT_COUNT:"일일 결제 한도를 초과했습니다.",EXCEED_MAX_MONTHLY_PAYMENT_AMOUNT:"월 결제 한도를 초과했습니다."}[K]||q||"결제 중 알 수 없는 오류가 발생했습니다.")})]}),n.jsxs(k,{children:[n.jsxs(A,{onClick:V,children:[n.jsx(t,{}),"홈으로"]}),n.jsxs(w,{onClick:J,children:[n.jsx(s,{}),"다시 시도"]})]}),U&&n.jsxs(E,{children:["주문번호",n.jsxs(N,{children:[n.jsx(P,{children:U}),n.jsxs(D,{onClick:H,copied:Y,children:[Y?n.jsx(a,{}):n.jsx(d,{}),Y?"복사됨":"복사"]})]})]}),n.jsxs(I,{children:[n.jsxs(_,{children:[n.jsx(l,{}),"문제 해결 도움말"]}),n.jsxs(z,{children:[n.jsx("li",{children:"네트워크 연결을 확인하고 다시 시도해주세요"}),n.jsx("li",{children:"카드 잘앀 또는 한도를 확인해주세요"}),n.jsx("li",{children:"다른 결제 수단을 시도해보세요"}),n.jsx("li",{children:"문제가 지속되면 고객센터로 연락해주세요"})]}),n.jsx(T,{children:n.jsxs(O,{onClick:B,children:[n.jsx(c,{}),"고객센터 문의"]})})]})]})});var K,q}export{R as default};
