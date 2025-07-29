import{u as X,x as V,r as i,U as W,P as _,C as J,j as e,z as Y,y as Z,w as q,B as G,J as Q,N as ee,M as te,W as ne,X as oe,Y as re,Z as ie,i as n}from"./index-CH1wDzjU.js";const m=n.div`
  width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 60px; /* 헤더 높이만큼 패딩 추가 */
`,se=n.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 60px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 100;
  border-bottom: 1px solid #e0e0e0;
`,ae=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,de=n.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
`,ce=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,le=n.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${o=>o.imageUrl?`url(${o.imageUrl})`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
`,xe=n.div``,pe=n.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`,ue=n.div`
  font-size: 12px;
  color: #4CAF50;
`,ge=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,L=n.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
`,fe=n.div`
  margin: 70px 20px 12px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
`,he=n.div`
  display: flex;
  padding: 12px;
  gap: 12px;
`,be=n.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`,me=n.div`
  flex: 1;
`,we=n.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,je=n.div`
  font-size: 16px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 4px;
`,ve=n.div`
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,ye=n.div`
  flex: 1;
  padding: 0 20px 160px; /* 하단바(90px) + 입력창(70px) 여유 공간 */
  overflow-y: auto;
  padding-top: 20px;
`;n.div`
  margin-bottom: 16px;
`;const Ie=n.div`
  text-align: center;
  margin: 20px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e0e0e0;
  }
`,ke=n.span`
  background: #f8f9fa;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
  position: relative;
  z-index: 1;
`,Ce=n.div`
  display: flex;
  margin-bottom: 8px;
  flex-direction: ${o=>o.isOwn?"row-reverse":"row"};
  align-items: flex-end;
  gap: 8px;
`,Pe=n.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${o=>o.imageUrl?`url(${o.imageUrl})`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 4px;
`,Se=n.div`
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 18px;
  background: ${o=>o.isOwn?"#2ed8b6":"white"};
  color: ${o=>o.isOwn?"white":"#333"};
  border: ${o=>o.isOwn?"none":"1px solid #e0e0e0"};
  word-wrap: break-word;
  position: relative;
  
  ${o=>o.isOwn?`
    border-bottom-right-radius: 4px;
  `:`
    border-bottom-left-radius: 4px;
  `}
`,ze=n.div`
  text-align: center;
  padding: 8px 16px;
  margin: 16px 0;
  background: #f0f0f0;
  border-radius: 16px;
  font-size: 12px;
  color: #666;
`,De=n.div`
  font-size: 10px;
  color: #999;
  margin: 0 4px;
`,Me=n.div`
  font-size: 10px;
  color: ${o=>o.read?"#4CAF50":"#999"};
  margin: 0 4px;
`,Re=n.div`
  position: fixed;
  bottom: 90px; /* 하단바 위에 위치 */
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  background: white;
  border-top: 1px solid #e0e0e0;
  padding: 12px 16px;
  z-index: 100;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`,Le=n.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`,$e=n.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
`,w=n.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f0f0f0;
  }
`,Ae=n.textarea`
  flex: 1;
  min-height: 36px;
  max-height: 120px;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 18px;
  font-size: 14px;
  resize: none;
  outline: none;
  background: #f8f9fa;
  
  &:focus {
    border-color: #2ed8b6;
    background: white;
  }
  
  &::placeholder {
    color: #999;
  }
`,Ue=n.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${o=>o.disabled?"#e0e0e0":"#2ed8b6"};
  border: none;
  color: white;
  cursor: ${o=>o.disabled?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${o=>o.disabled?"#e0e0e0":"#26c4a8"};
  }
`,Fe=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 14px;
  color: #666;
`,Ee=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
  padding: 20px;
`;function He(){const o=X(),{chatRoomId:s}=V(),{user:d}=i.useContext(W),{products:Te}=i.useContext(_),{messages:j,currentChat:Be,sendMessage:v,getChatRoomInfo:$,setActiveChat:A,subscribeToMessages:U,markMessagesAsRead:F}=i.useContext(J),[c,E]=i.useState(null),[u,y]=i.useState(""),[T,I]=i.useState(!0),[g,p]=i.useState(null),[h,k]=i.useState(!1),[C,P]=i.useState(!1),S=i.useRef(null),z=i.useRef(null),D=new URLSearchParams(window.location.search).get("intent")==="purchase";i.useEffect(()=>{const t=async()=>{try{I(!0),p(null);const r=await $(s);if(!r){p("채팅방을 찾을 수 없습니다.");return}E(r),A(s);const a=U(s);return()=>{a&&a()}}catch(r){console.error("채팅방 로드 실패:",r),p("채팅방을 불러오는데 실패했습니다.")}finally{I(!1)}};s&&d.isLoggedIn?t():d.isLoggedIn||o("/login")},[s,d.isLoggedIn]),i.useEffect(()=>{B()},[j[s]]),i.useEffect(()=>{s&&d.isLoggedIn&&F(s)},[s,d.isLoggedIn]),i.useEffect(()=>{(async()=>{if(D&&c&&!C&&d.isLoggedIn)try{P(!0);const a=`${c.productInfo?.title||"상품"} 구매를 희망합니다. 거래 가능하신가요?`;await v(s,a);const x=window.location.pathname;window.history.replaceState({},"",x),console.log("✅ 구매 의도 메시지 전송 완료")}catch(r){console.error("구매 의도 메시지 전송 실패:",r),P(!1)}})()},[D,c,C,d.isLoggedIn,s]);const B=()=>{S.current?.scrollIntoView({behavior:"smooth"})},M=async()=>{if(!(!u.trim()||!s||h)){if(u.length>1e3){p("메시지는 1000자를 초과할 수 없습니다.");return}k(!0),p(null);try{await v(s,u),y(""),z.current?.focus()}catch(t){console.error("메시지 전송 실패:",t),p("메시지 전송에 실패했습니다. 다시 시도해주세요.")}finally{k(!1)}}},O=t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),M())},K=t=>t?(t.toDate?t.toDate():new Date(t)).toLocaleTimeString("ko-KR",{hour:"numeric",minute:"2-digit",hour12:!0}):"",b=t=>{if(!t)return"";const r=t.toDate?t.toDate():new Date(t),a=new Date,x=new Date(a);return x.setDate(x.getDate()-1),r.toDateString()===a.toDateString()?"오늘":r.toDateString()===x.toDateString()?"어제":r.toLocaleDateString("ko-KR",{month:"long",day:"numeric"})},H=()=>{if(!c)return null;const t=c.participants.find(r=>r!==d.uid);return c.participantInfo?.[t]||{}},N=()=>c?.productInfo?c.productInfo:null;if(T)return e.jsx(m,{children:e.jsx(Fe,{children:"채팅을 불러오는 중..."})});if(g)return e.jsx(m,{children:e.jsxs(Ee,{children:[e.jsx(Y,{size:48,color:"#ddd"}),e.jsx("h3",{children:g}),e.jsx("button",{onClick:()=>o("/chat"),style:{padding:"8px 16px",background:"#2ed8b6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",marginTop:"16px"},children:"채팅 목록으로 돌아가기"})]})});const f=H(),l=N(),R=j[s]||[];return e.jsxs(m,{children:[e.jsxs(se,{children:[e.jsxs(ae,{children:[e.jsx(de,{onClick:()=>o("/chat"),children:e.jsx(Z,{})}),e.jsxs(ce,{children:[e.jsx(le,{imageUrl:f.profileImage,children:!f.profileImage&&(f.nickname?.[0]||"?")}),e.jsxs(xe,{children:[e.jsx(pe,{children:f.nickname||"익명 사용자"}),e.jsx(ue,{children:"온라인"})]})]})]}),e.jsxs(ge,{children:[e.jsx(L,{children:e.jsx(q,{})}),e.jsx(L,{children:e.jsx(G,{})})]})]}),l&&e.jsx(fe,{onClick:()=>o(`/product/${l.id}`),children:e.jsxs(he,{children:[l.images?.[0]&&e.jsx(be,{src:l.images[0],alt:l.title}),e.jsxs(me,{children:[e.jsx(we,{children:l.title}),e.jsxs(je,{children:[l.price?.toLocaleString(),"원"]}),e.jsxs(ve,{children:[e.jsx(Q,{}),l.status==="active"?"판매중":"판매완료"]})]})]})}),e.jsxs(ye,{children:[R.map((t,r)=>{const a=t.senderId===d.uid,x=r===0||b(t.createdAt)!==b(R[r-1]?.createdAt);return e.jsxs("div",{children:[x&&e.jsx(Ie,{children:e.jsx(ke,{children:b(t.createdAt)})}),t.type==="system"?e.jsx(ze,{children:t.content}):e.jsxs(Ce,{isOwn:a,children:[!a&&e.jsx(Pe,{imageUrl:t.senderInfo?.profileImage,children:!t.senderInfo?.profileImage&&(t.senderInfo?.nickname?.[0]||"?")}),e.jsx(Se,{isOwn:a,children:t.content}),e.jsxs("div",{children:[e.jsx(De,{children:K(t.createdAt)}),a&&e.jsx(Me,{read:t.isRead,children:t.isRead?e.jsx(ee,{}):e.jsx(te,{})})]})]})]},t.id)}),e.jsx("div",{ref:S})]}),e.jsxs(Re,{children:[g&&e.jsx("div",{style:{padding:"8px 16px",background:"#fff5f5",borderLeft:"4px solid #f56565",marginBottom:"8px",fontSize:"14px",color:"#c53030"},children:g}),e.jsxs($e,{children:[e.jsx(w,{children:e.jsx(ne,{})}),e.jsx(w,{children:e.jsx(oe,{})}),e.jsx(w,{children:e.jsx(re,{})})]}),e.jsxs(Le,{children:[e.jsx(Ae,{ref:z,value:u,onChange:t=>y(t.target.value),onKeyPress:O,placeholder:"메시지를 입력하세요...",rows:1}),e.jsx(Ue,{disabled:!u.trim()||h,onClick:M,children:h?"•••":e.jsx(ie,{})})]})]})]})}export{He as default};
