import{u as m,ap as j,r as c,P as b,U as y,o as C,j as e,N as w,aq as k,L as v,i as t}from"./index-CH1wDzjU.js";const P=t.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,S=t.div`
  background: white;
  border-radius: 20px;
  padding: 40px 24px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`,I=t.div`
  width: 80px;
  height: 80px;
  background: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  font-size: 36px;
  animation: scaleIn 0.5s ease-out;

  @keyframes scaleIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`,T=t.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 12px 0;
`,U=t.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 32px 0;
`,z=t.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 32px;
  text-align: left;
`,i=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${n=>n.last?"0":"12px"};
  font-size: 14px;
`,d=t.span`
  color: #666;
`,l=t.span`
  font-weight: 600;
  color: #333;
`,F=t.div`
  display: flex;
  gap: 12px;
`,u=t.button`
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
`,R=t(u)`
  background: #2ed8b6;
  color: white;
  
  &:hover {
    background: #26c4a8;
  }
`,_=t(u)`
  background: #f8f9fa;
  color: #333;
  border: 1px solid #e0e0e0;
  
  &:hover {
    background: #e9ecef;
  }
`;function K(){const n=m(),[s]=j(),{changeProductStatus:B,PRODUCT_STATUS:A}=c.useContext(b),{user:E}=c.useContext(y),{showSuccess:x}=C(),o=s.get("orderId"),r=s.get("paymentKey"),a=s.get("amount");c.useEffect(()=>{o&&r&&a&&x("결제가 성공적으로 완료되었습니다!",{title:"결제 완료"})},[o,r,a,x]);const h=()=>{n("/")},p=()=>{n("/chat")},f=g=>new Intl.NumberFormat("ko-KR").format(g);return e.jsx(P,{children:e.jsxs(S,{children:[e.jsx(I,{children:e.jsx(w,{})}),e.jsx(T,{children:"결제 완료!"}),e.jsxs(U,{children:["결제가 성공적으로 완료되었습니다.",e.jsx("br",{}),"판매자와 연락하여 거래를 진행해 주세요."]}),e.jsxs(z,{children:[e.jsxs(i,{children:[e.jsx(d,{children:"주문번호"}),e.jsx(l,{children:o})]}),e.jsxs(i,{children:[e.jsx(d,{children:"결제키"}),e.jsxs(l,{children:[r?.slice(0,20),"..."]})]}),e.jsxs(i,{last:!0,children:[e.jsx(d,{children:"결제금액"}),e.jsxs(l,{children:[f(a),"원"]})]})]}),e.jsxs(F,{children:[e.jsxs(_,{onClick:h,children:[e.jsx(k,{}),"홈으로"]}),e.jsxs(R,{onClick:p,children:[e.jsx(v,{}),"채팅하기"]})]})]})})}export{K as default};
