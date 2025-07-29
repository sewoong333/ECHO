import{u as y,r as l,U as I,C as k,j as t,T as g,ac as z,L as M,i as n}from"./index-CH1wDzjU.js";const h=n.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,u=n.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  min-height: calc(100vh - 56px);
  padding-bottom: 80px;
`,S=n.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,U=n.div`
  position: relative;
  margin-right: 12px;
`,D=n.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${o=>o.imageUrl?`url(${o.imageUrl})`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;n.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #4CAF50;
  border: 2px solid white;
`;const E=n.div`
  flex: 1;
  min-width: 0;
`,L=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,T=n.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`,$=n.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`,A=n.div`
  font-size: 14px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
`,P=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
`,B=n.div`
  font-size: 12px;
  color: #999;
`,F=n.div`
  background: #2ed8b6;
  color: white;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 11px;
  font-weight: 600;
  min-width: 18px;
  text-align: center;
  margin-left: 8px;
`,N=n.img`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  object-fit: cover;
`,O=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  color: #666;
`,H=n.div`
  font-size: 48px;
  color: #ddd;
  margin-bottom: 16px;
`,K=n.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
`,q=n.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,G=n.div`
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
`,J=n.div`
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 8px 16px;
  gap: 8px;
`,Q=n.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: #999;
  }
`;function W(){const o=y(),{user:r}=l.useContext(I),{chatRooms:x,loading:m,unreadCount:s}=l.useContext(k);l.useEffect(()=>{r.isLoggedIn||o("/login")},[r.isLoggedIn,o]);const b=e=>{if(!e)return"";const i=e.toDate?e.toDate():new Date(e),d=new Date-i,c=Math.floor(d/6e4),p=Math.floor(d/36e5),f=Math.floor(d/864e5);return c<1?"방금":c<60?`${c}분`:p<24?`${p}시간`:f<7?`${f}일`:i.toLocaleDateString("ko-KR",{month:"short",day:"numeric"})},j=e=>e.find(i=>i!==r.uid),v=e=>{const i=j(e.participants);return e.participantInfo?.[i]||{}},w=e=>{o(`/chat/${e.id}`)},C=(e,i)=>i==="image"?"📷 사진":e;return m?t.jsxs(h,{children:[t.jsx(g,{title:"채팅",badge:s>0?s:null}),t.jsx(u,{children:t.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"채팅 목록을 불러오는 중..."})})]}):t.jsxs(h,{children:[t.jsx(g,{title:"채팅",badge:s>0?s:null}),t.jsxs(u,{children:[t.jsx(G,{children:t.jsxs(J,{children:[t.jsx(z,{color:"#999"}),t.jsx(Q,{placeholder:"사용자명 또는 상품명으로 검색"})]})}),x.length===0?t.jsxs(O,{children:[t.jsx(H,{children:t.jsx(M,{})}),t.jsx(K,{children:"아직 채팅이 없어요"}),t.jsxs(q,{children:["관심 있는 상품의 '채팅하기' 버튼을 눌러",t.jsx("br",{}),"판매자와 대화를 시작해보세요!"]})]}):x.map(e=>{const i=v(e),a=e.unreadCount?.[r.uid]||0;return t.jsxs(S,{onClick:()=>w(e),children:[t.jsx(U,{children:t.jsx(D,{imageUrl:i.profileImage,children:!i.profileImage&&(i.nickname?.[0]||"?")})}),t.jsxs(E,{children:[t.jsxs(L,{children:[t.jsx(T,{children:i.nickname||"익명 사용자"}),t.jsx(B,{children:b(e.lastMessageAt)})]}),e.productInfo&&t.jsxs($,{children:[e.productInfo.images?.[0]&&t.jsx(N,{src:e.productInfo.images[0],alt:"상품"}),e.productInfo.title]}),t.jsx(A,{children:C(e.lastMessage,e.lastMessageType)}),t.jsxs(P,{children:[t.jsx("div",{}),a>0&&t.jsx(F,{children:a>99?"99+":a})]})]})]},e.id)})]})]})}export{W as default};
