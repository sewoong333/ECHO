import{u as G,x as Q,r as i,U as ee,P as te,C as ne,j as e,z as oe,y as re,w as ie,B as se,J as ae,N as de,M as ce,Y as le,Z as xe,_ as pe,$ as ue,i as n}from"./index-BryaZ5dw.js";const m=n.div`
  width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 60px; /* 헤더 높이만큼 패딩 추가 */
`,ge=n.div`
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
`,fe=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,he=n.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
`,be=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,me=n.div`
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
`,we=n.div``,je=n.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`,ve=n.div`
  font-size: 12px;
  color: #4CAF50;
`,ye=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,O=n.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
`,ke=n.div`
  margin: 70px 20px 12px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
`,Ie=n.div`
  display: flex;
  padding: 12px;
  gap: 12px;
`,Ce=n.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`,Pe=n.div`
  flex: 1;
`,Se=n.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ze=n.div`
  font-size: 16px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 4px;
`,De=n.div`
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,Me=n.div`
  flex: 1;
  padding: 0 20px 160px; /* 하단바(90px) + 입력창(70px) 여유 공간 */
  overflow-y: auto;
  padding-top: 20px;
`;n.div`
  margin-bottom: 16px;
`;const Re=n.div`
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
`,Le=n.span`
  background: #f8f9fa;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
  position: relative;
  z-index: 1;
`,$e=n.div`
  display: flex;
  margin-bottom: 8px;
  flex-direction: ${o=>o.isOwn?"row-reverse":"row"};
  align-items: flex-end;
  gap: 8px;
`,Ae=n.div`
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
`,Ue=n.div`
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
`,Fe=n.div`
  text-align: center;
  padding: 8px 16px;
  margin: 16px 0;
  background: #f0f0f0;
  border-radius: 16px;
  font-size: 12px;
  color: #666;
`,Ee=n.div`
  font-size: 10px;
  color: #999;
  margin: 0 4px;
`,Te=n.div`
  font-size: 10px;
  color: ${o=>o.read?"#4CAF50":"#999"};
  margin: 0 4px;
`,Be=n.div`
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
`,Oe=n.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`,Ke=n.div`
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
`,He=n.textarea`
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
`,Ne=n.button`
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
`,_e=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 14px;
  color: #666;
`,Ve=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
  padding: 20px;
`;function Ze(){var L,$,A;const o=G(),{chatRoomId:s}=Q(),{user:c}=i.useContext(ee),{products:Xe}=i.useContext(te),{messages:j,currentChat:Je,sendMessage:v,getChatRoomInfo:K,setActiveChat:H,subscribeToMessages:N,markMessagesAsRead:_}=i.useContext(ne),[d,V]=i.useState(null),[u,y]=i.useState(""),[X,k]=i.useState(!0),[g,p]=i.useState(null),[h,I]=i.useState(!1),[C,P]=i.useState(!1),S=i.useRef(null),z=i.useRef(null),D=new URLSearchParams(window.location.search).get("intent")==="purchase";i.useEffect(()=>{const t=async()=>{try{k(!0),p(null);const r=await K(s);if(!r){p("채팅방을 찾을 수 없습니다.");return}V(r),H(s);const a=N(s);return()=>{a&&a()}}catch(r){console.error("채팅방 로드 실패:",r),p("채팅방을 불러오는데 실패했습니다.")}finally{k(!1)}};s&&c.isLoggedIn?t():c.isLoggedIn||o("/login")},[s,c.isLoggedIn]),i.useEffect(()=>{J()},[j[s]]),i.useEffect(()=>{s&&c.isLoggedIn&&_(s)},[s,c.isLoggedIn]),i.useEffect(()=>{(async()=>{if(D&&d&&!C&&c.isLoggedIn)try{P(!0);const r=d.productInfo,a=`${(r==null?void 0:r.title)||"상품"} 구매를 희망합니다. 거래 가능하신가요?`;await v(s,a);const x=window.location.pathname;window.history.replaceState({},"",x),console.log("✅ 구매 의도 메시지 전송 완료")}catch(r){console.error("구매 의도 메시지 전송 실패:",r),P(!1)}})()},[D,d,C,c.isLoggedIn,s]);const J=()=>{var t;(t=S.current)==null||t.scrollIntoView({behavior:"smooth"})},M=async()=>{var t;if(!(!u.trim()||!s||h)){if(u.length>1e3){p("메시지는 1000자를 초과할 수 없습니다.");return}I(!0),p(null);try{await v(s,u),y(""),(t=z.current)==null||t.focus()}catch(r){console.error("메시지 전송 실패:",r),p("메시지 전송에 실패했습니다. 다시 시도해주세요.")}finally{I(!1)}}},W=t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),M())},Y=t=>t?(t.toDate?t.toDate():new Date(t)).toLocaleTimeString("ko-KR",{hour:"numeric",minute:"2-digit",hour12:!0}):"",b=t=>{if(!t)return"";const r=t.toDate?t.toDate():new Date(t),a=new Date,x=new Date(a);return x.setDate(x.getDate()-1),r.toDateString()===a.toDateString()?"오늘":r.toDateString()===x.toDateString()?"어제":r.toLocaleDateString("ko-KR",{month:"long",day:"numeric"})},Z=()=>{var r;if(!d)return null;const t=d.participants.find(a=>a!==c.uid);return((r=d.participantInfo)==null?void 0:r[t])||{}},q=()=>d!=null&&d.productInfo?d.productInfo:null;if(X)return e.jsx(m,{children:e.jsx(_e,{children:"채팅을 불러오는 중..."})});if(g)return e.jsx(m,{children:e.jsxs(Ve,{children:[e.jsx(oe,{size:48,color:"#ddd"}),e.jsx("h3",{children:g}),e.jsx("button",{onClick:()=>o("/chat"),style:{padding:"8px 16px",background:"#2ed8b6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",marginTop:"16px"},children:"채팅 목록으로 돌아가기"})]})});const f=Z(),l=q(),R=j[s]||[];return e.jsxs(m,{children:[e.jsxs(ge,{children:[e.jsxs(fe,{children:[e.jsx(he,{onClick:()=>o("/chat"),children:e.jsx(re,{})}),e.jsxs(be,{children:[e.jsx(me,{imageUrl:f.profileImage,children:!f.profileImage&&(((L=f.nickname)==null?void 0:L[0])||"?")}),e.jsxs(we,{children:[e.jsx(je,{children:f.nickname||"익명 사용자"}),e.jsx(ve,{children:"온라인"})]})]})]}),e.jsxs(ye,{children:[e.jsx(O,{children:e.jsx(ie,{})}),e.jsx(O,{children:e.jsx(se,{})})]})]}),l&&e.jsx(ke,{onClick:()=>o(`/product/${l.id}`),children:e.jsxs(Ie,{children:[(($=l.images)==null?void 0:$[0])&&e.jsx(Ce,{src:l.images[0],alt:l.title}),e.jsxs(Pe,{children:[e.jsx(Se,{children:l.title}),e.jsxs(ze,{children:[(A=l.price)==null?void 0:A.toLocaleString(),"원"]}),e.jsxs(De,{children:[e.jsx(ae,{}),l.status==="active"?"판매중":"판매완료"]})]})]})}),e.jsxs(Me,{children:[R.map((t,r)=>{var U,F,E,T,B;const a=t.senderId===c.uid,x=r===0||b(t.createdAt)!==b((U=R[r-1])==null?void 0:U.createdAt);return e.jsxs("div",{children:[x&&e.jsx(Re,{children:e.jsx(Le,{children:b(t.createdAt)})}),t.type==="system"?e.jsx(Fe,{children:t.content}):e.jsxs($e,{isOwn:a,children:[!a&&e.jsx(Ae,{imageUrl:(F=t.senderInfo)==null?void 0:F.profileImage,children:!((E=t.senderInfo)!=null&&E.profileImage)&&(((B=(T=t.senderInfo)==null?void 0:T.nickname)==null?void 0:B[0])||"?")}),e.jsx(Ue,{isOwn:a,children:t.content}),e.jsxs("div",{children:[e.jsx(Ee,{children:Y(t.createdAt)}),a&&e.jsx(Te,{read:t.isRead,children:t.isRead?e.jsx(de,{}):e.jsx(ce,{})})]})]})]},t.id)}),e.jsx("div",{ref:S})]}),e.jsxs(Be,{children:[g&&e.jsx("div",{style:{padding:"8px 16px",background:"#fff5f5",borderLeft:"4px solid #f56565",marginBottom:"8px",fontSize:"14px",color:"#c53030"},children:g}),e.jsxs(Ke,{children:[e.jsx(w,{children:e.jsx(le,{})}),e.jsx(w,{children:e.jsx(xe,{})}),e.jsx(w,{children:e.jsx(pe,{})})]}),e.jsxs(Oe,{children:[e.jsx(He,{ref:z,value:u,onChange:t=>y(t.target.value),onKeyPress:W,placeholder:"메시지를 입력하세요...",rows:1}),e.jsx(Ne,{disabled:!u.trim()||h,onClick:M,children:h?"•••":e.jsx(ue,{})})]})]})]})}export{Ze as default};
