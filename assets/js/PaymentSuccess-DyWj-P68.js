var e=(e,t,r)=>new Promise((o,n)=>{var s=e=>{try{a(r.next(e))}catch(t){n(t)}},i=e=>{try{a(r.throw(e))}catch(t){n(t)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,i);a((r=r.apply(e,t)).next())});import{u as t,ap as r,r as o,j as n,I as s,U as i,aq as a,_ as c,z as d,m as l}from"./vendor-react-xhcWTtxo.js";import{d as x}from"./vendor-ui-28GTjlMA.js";import{P as p,U as u,C as h,u as f,l as g}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const m=x.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,j=x.div`
  background: white;
  border-radius: 20px;
  padding: 40px 24px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`,b=x.div`
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
`,v=x.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 12px 0;
`,y=x.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 32px 0;
`,w=x.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 32px;
  text-align: left;
`,k=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.last?"0":"12px"};
  font-size: 14px;
`,C=x.span`
  color: #666;
`,I=x.span`
  font-weight: 600;
  color: #333;
`,z=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,R=x.div`
  display: flex;
  gap: 12px;
`,$=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 40px 20px;
`,P=x.p`
  font-size: 14px;
  color: #666;
  text-align: center;
`,S=x(L)`
  background: #f8f9fa;
  color: #666;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  height: 44px;
  
  &:hover {
    background: #e9ecef;
    color: #333;
  }
`,E=x.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  text-align: left;
`,A=x.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`,F=x.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
`,L=x.button`
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
`,O=x(L)`
  background: #2ed8b6;
  color: white;
  
  &:hover {
    background: #26c4a8;
  }
`,U=x(L)`
  background: #f8f9fa;
  color: #333;
  border: 1px solid #e0e0e0;
  
  &:hover {
    background: #e9ecef;
  }
`;function K(){const x=t(),[L]=r(),{updateProductStatus:K,getProduct:D}=o.useContext(p),{user:H}=o.useContext(u),{createOrGetChatRoom:N}=o.useContext(h),{showSuccess:_,showError:q}=f(),[B,G]=o.useState(!0),[T,Y]=o.useState(null),[J,M]=o.useState(!1),[Q,V]=o.useState(null),W=L.get("orderId"),X=L.get("paymentKey"),Z=L.get("amount"),ee=L.get("productId"),te=L.get("sellerId"),re=o.useCallback(()=>e(this,null,function*(){if(!W||!X||!Z)return q("결제 정보가 유효하지 않습니다."),void x("/");try{if(G(!0),g.userAction("Payment success page accessed",{orderId:W,paymentKey:X.substring(0,20)+"...",amount:Z}),ee)try{const e=yield D(ee);Y(e),yield K(ee,"paid"),g.info("Product status updated to paid",{productId:ee})}catch(e){g.error("Failed to load product info",e)}if(ee&&te&&(null==H?void 0:H.uid))try{const e=yield N(ee,te,H.uid,T||{title:"결제 완료된 상품"});V(e),g.info("Chat room created for payment",{chatId:e,productId:ee})}catch(e){g.error("Failed to create chat room",e)}M(!0),_("결제가 성공적으로 완료되었습니다!",{title:"결제 완료"})}catch(e){g.error("Payment success processing failed",e),q("결제 후 처리 중 오류가 발생했습니다.")}finally{G(!1)}}),[W,X,Z,ee,te,H,_,q,x,D,K,N,T]);o.useEffect(()=>{re()},[re]);const oe=o.useCallback(()=>{x(Q?`/chat/${Q}`:ee&&te?`/product/${ee}`:"/chat"),g.userAction("Navigate to chat from payment success",{chatRoomId:Q,productId:ee})},[Q,ee,te,x]),ne=o.useCallback(()=>{const e=W,t=X,r=ie(Z),o=(new Date).toLocaleString("ko-KR"),n=(null==T?void 0:T.title)||"상품",s=new Blob([`결제 영수증\n\n주문번호: ${e}\n결제키: ${t}\n결제금액: ${r}원\n결제일시: ${o}\n상품명: ${n}`],{type:"text/plain;charset=utf-8"}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download=`ECHO_결제영수증_${W}.txt`,a.click(),URL.revokeObjectURL(i),g.userAction("Receipt downloaded",{orderId:W})},[W,X,Z,T]),se=o.useCallback(()=>e(this,null,function*(){if(navigator.share)try{yield navigator.share({title:"ECHO 결제 완료",text:`ECHO에서 ${(null==T?void 0:T.title)||"상품"} 결제가 완료되었습니다.`,url:window.location.href}),g.userAction("Payment success shared",{orderId:W})}catch(e){"AbortError"!==e.name&&g.error("Failed to share payment success",e)}else navigator.clipboard.writeText(window.location.href),_("링크가 복사되었습니다!")}),[T,W,_]),ie=e=>new Intl.NumberFormat("ko-KR").format(e);return n.jsx(m,{children:n.jsxs(j,{children:[n.jsx(b,{children:n.jsx(s,{})}),n.jsx(v,{children:"결제 완료!"}),n.jsxs(y,{children:["결제가 성공적으로 완료되었습니다.",n.jsx("br",{}),"판매자와 연락하여 거래를 진행해 주세요."]}),B?n.jsxs($,{children:[n.jsx(i,{className:"fa-spin",size:24,color:"#2ed8b6"}),n.jsx(P,{children:"결제 완료 처리 중입니다..."})]}):n.jsxs(n.Fragment,{children:[T&&n.jsxs(E,{children:[n.jsx(A,{children:T.title}),n.jsxs(F,{children:[ie(Z),"원"]})]}),n.jsxs(w,{children:[n.jsxs(k,{children:[n.jsx(C,{children:"주문번호"}),n.jsx(I,{children:W})]}),n.jsxs(k,{children:[n.jsx(C,{children:"결제키"}),n.jsxs(I,{children:[null==X?void 0:X.slice(0,20),"..."]})]}),n.jsxs(k,{children:[n.jsx(C,{children:"결제일시"}),n.jsx(I,{children:(new Date).toLocaleDateString("ko-KR")})]}),n.jsxs(k,{last:!0,children:[n.jsx(C,{children:"결제금액"}),n.jsxs(I,{children:[ie(Z),"원"]})]})]}),n.jsxs(z,{children:[n.jsxs(R,{children:[n.jsxs(S,{onClick:ne,children:[n.jsx(a,{}),"영수증"]}),n.jsxs(S,{onClick:se,children:[n.jsx(c,{}),"공유"]})]}),n.jsxs(R,{children:[n.jsxs(U,{onClick:()=>{x("/")},children:[n.jsx(d,{}),"홈으로"]}),n.jsxs(O,{onClick:oe,children:[n.jsx(l,{}),Q?"채팅방으로":"판매자에게 연락"]})]})]})]})]})})}export{K as default};
