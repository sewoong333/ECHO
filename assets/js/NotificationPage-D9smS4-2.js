import{j as r}from"./vendor-react-xhcWTtxo.js";import{d as e}from"./vendor-ui-28GTjlMA.js";import{c as i,T as o,N as n}from"./index-czRqZILZ.js";import{y as t,z as a}from"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const s=e.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
`,d=e.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-border-light);
`,c=e.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
`,x=e.button`
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
  }
`,l=e.div`
  padding: 12px;
  margin-bottom: 8px;
  background: ${r=>r.read?"var(--color-bg-primary)":"rgba(59, 130, 246, 0.05)"};
  border-radius: 8px;
  border: 1px solid ${r=>r.read?"var(--color-border-light)":"rgba(59, 130, 246, 0.2)"};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,p=e.div`
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 4px;
  font-size: 14px;
`,h=e.div`
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.4;
  margin-bottom: 6px;
`,g=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--color-text-tertiary);
`,m=e.span`
  font-size: 11px;
`,j=e.span`
  background: var(--color-primary);
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: 500;
`,f=e.div`
  text-align: center;
  padding: 40px 20px;
  color: var(--color-text-secondary);
`,u=e.div`
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
`,b=e.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`,v=e.p`
  margin: 8px 0 0 0;
  font-size: 14px;
  opacity: 0.7;
`;function y(){const{notifications:e,markAsRead:o,markAllAsRead:n,unreadCount:y}=i(),w=r=>{try{const e=new Date(r);return t(e,{addSuffix:!0,locale:a})}catch(e){return"방금 전"}},z=r=>{switch(r){case"chat_message":return"메시지";case"payment_success":return"결제 완료";case"payment_failed":return"결제 실패";case"product_interest":return"관심 상품";case"price_drop":return"가격 할인";case"order_update":return"주문 업데이트";default:return"알림"}};return 0===e.length?r.jsxs(s,{children:[r.jsx(d,{children:r.jsx(c,{children:"알림"})}),r.jsxs(f,{children:[r.jsx(u,{children:"🔔"}),r.jsx(b,{children:"새로운 알림이 없습니다"}),r.jsx(v,{children:"중요한 소식이 있으면 알려드릴게요!"})]})]}):r.jsxs(s,{children:[r.jsxs(d,{children:[r.jsxs(c,{children:["알림",y>0&&r.jsx("span",{style:{marginLeft:"8px"},children:r.jsx(j,{children:y})})]}),y>0&&r.jsx(x,{onClick:n,children:"모두 읽음"})]}),e.map(e=>r.jsxs(l,{read:e.read,onClick:()=>(r=>{var e;r.read||o(r.id),(null==(e=r.data)?void 0:e.url)&&(window.location.href=r.data.url)})(e),children:[r.jsx(p,{children:e.title}),r.jsx(h,{children:e.body}),r.jsxs(g,{children:[r.jsx("span",{children:z(e.type)}),r.jsx(m,{children:w(e.timestamp)})]})]},e.id))]})}const w=e.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`,z=e.div`
  width: 100%;
  max-width: 500px;
  padding: 16px;
  flex: 1;
`,k=e.div`
  background: white;
  padding: 20px;
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
`,_=e.h2`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text-primary);
`,C=e.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.4;
`,$=e.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,A=e.div`
  flex: 1;
  background: ${r=>r.primary?"linear-gradient(135deg, #3b82f6, #2563eb)":"var(--color-bg-secondary)"};
  color: ${r=>r.primary?"white":"var(--color-text-primary)"};
  padding: 16px;
  border-radius: 8px;
  text-align: center;
`,S=e.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
`,E=e.div`
  font-size: 12px;
  opacity: 0.8;
`,L=e.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
  text-align: center;
`,R=e.h3`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
`,q=e.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.4;
`,D=e.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0;
  text-align: left;
`,H=e.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--color-text-secondary);
  
  &:before {
    content: '✓';
    color: var(--color-success);
    font-weight: bold;
  }
`;function N(){const{isSupported:e,isEnabled:t,unreadCount:a,notifications:s,notificationStatus:d}=i();return e?r.jsxs(w,{children:[r.jsx(o,{}),r.jsxs(z,{children:[r.jsxs(k,{children:[r.jsx(_,{children:"알림 센터"}),r.jsx(C,{children:"ECHO의 모든 알림을 한 곳에서 확인하세요"}),r.jsxs($,{children:[r.jsxs(A,{primary:!0,children:[r.jsx(S,{children:a}),r.jsx(E,{children:"읽지 않음"})]}),r.jsxs(A,{children:[r.jsx(S,{children:s.length}),r.jsx(E,{children:"전체 알림"})]}),r.jsxs(A,{children:[r.jsx(S,{children:d.queueLength}),r.jsx(E,{children:"대기열"})]})]})]}),!t&&r.jsxs(L,{children:[r.jsx(R,{children:"🔔 실시간 알림 받기"}),r.jsx(q,{children:"알림을 허용하시면 중요한 소식을 놓치지 않고 받아보실 수 있어요!"}),r.jsxs(D,{children:[r.jsx(H,{children:"새로운 메시지 알림"}),r.jsx(H,{children:"결제 완료 및 실패 알림"}),r.jsx(H,{children:"관심 상품 업데이트"}),r.jsx(H,{children:"가격 할인 알림"}),r.jsx(H,{children:"주문 상태 변경 알림"})]}),r.jsx(n,{})]}),r.jsx(y,{})]})]}):r.jsxs(w,{children:[r.jsx(o,{}),r.jsx(z,{children:r.jsxs(k,{children:[r.jsx(_,{children:"알림"}),r.jsx(C,{children:"현재 브라우저에서는 푸시 알림을 지원하지 않습니다."})]})})]})}export{N as default};
