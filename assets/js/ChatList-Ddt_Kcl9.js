import{u as e,r as i,j as t,F as o,c as n,m as r}from"./vendor-react-xhcWTtxo.js";import{d as s}from"./vendor-ui-28GTjlMA.js";import{U as d,C as a,T as l}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const c=s.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,p=s.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  min-height: calc(100vh - 56px);
  padding-bottom: 80px;
`,x=s.div`
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
`,f=s.div`
  position: relative;
  margin-right: 12px;
`,g=s.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${e=>e.imageUrl?`url(${e.imageUrl})`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;s.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #4CAF50;
  border: 2px solid white;
`;const u=s.div`
  flex: 1;
  min-width: 0;
`,h=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,m=s.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`,b=s.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`,v=s.div`
  font-size: 14px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
`,j=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
`,w=s.div`
  font-size: 12px;
  color: #999;
`,k=s.div`
  background: #2ed8b6;
  color: white;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 11px;
  font-weight: 600;
  min-width: 18px;
  text-align: center;
  margin-left: 8px;
`,y=s.img`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  object-fit: cover;
`,C=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  color: #666;
`,z=s.div`
  font-size: 48px;
  color: #ddd;
  margin-bottom: 16px;
`,I=s.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
`,M=s.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,L=s.div`
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
`,$=s.div`
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 8px 16px;
  gap: 8px;
`,D=s.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: #999;
  }
`,U=s.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #e0e0e0;
    color: #666;
  }
`,A=s.div`
  padding: 8px 20px;
  font-size: 12px;
  color: #666;
  background: #f8f9fa;
  border-bottom: 1px solid #f0f0f0;
`;function S(){const s=e(),{user:S}=i.useContext(d),{chatRooms:F,loading:R,unreadCount:T}=i.useContext(a),[E,K]=i.useState(""),[q,B]=i.useState(!1);i.useEffect(()=>{S.isLoggedIn||s("/login")},[S.isLoggedIn,s]);const G=e=>{if(!e)return"";const i=e.toDate?e.toDate():new Date(e),t=new Date-i,o=Math.floor(t/6e4),n=Math.floor(t/36e5),r=Math.floor(t/864e5);return o<1?"방금":o<60?`${o}분`:n<24?`${n}시간`:r<7?`${r}일`:i.toLocaleDateString("ko-KR",{month:"short",day:"numeric"})},H=i.useCallback(e=>e.find(e=>e!==S.uid),[S.uid]),J=i.useCallback(e=>{var i;const t=H(e.participants);return(null==(i=e.participantInfo)?void 0:i[t])||{}},[H]),N=i.useCallback((e,i)=>"image"===i?"📷 사진":e,[]),O=i.useMemo(()=>{if(!E.trim())return F;const e=E.toLowerCase();return F.filter(i=>{var t;const o=(J(i).nickname||"").toLowerCase(),n=((null==(t=i.productInfo)?void 0:t.title)||"").toLowerCase(),r=(i.lastMessage||"").toLowerCase();return o.includes(e)||n.includes(e)||r.includes(e)})},[F,E,J]),P=i.useCallback(e=>{const i=e.target.value;K(i),B(i.length>0)},[]),Q=i.useCallback(()=>{K(""),B(!1)},[]);return R?t.jsxs(c,{children:[t.jsx(l,{title:"채팅",badge:T>0?T:null}),t.jsx(p,{children:t.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"채팅 목록을 불러오는 중..."})})]}):t.jsxs(c,{children:[t.jsx(l,{title:"채팅",badge:T>0?T:null}),t.jsxs(p,{children:[t.jsx(L,{children:t.jsxs($,{children:[t.jsx(o,{color:"#999"}),t.jsx(D,{placeholder:"사용자명 또는 상품명으로 검색",value:E,onChange:P}),E&&t.jsx(U,{onClick:Q,children:t.jsx(n,{size:12})})]})}),q&&t.jsxs(A,{children:[O.length,"개의 채팅 중 검색 결과"]}),0===O.length?t.jsxs(C,{children:[t.jsx(z,{children:t.jsx(r,{})}),t.jsx(I,{children:"아직 채팅이 없어요"}),t.jsxs(M,{children:["관심 있는 상품의 '채팅하기' 버튼을 눌러",t.jsx("br",{}),"판매자와 대화를 시작해보세요!"]})]}):O.map(e=>{var i,o,n;const r=J(e),d=(null==(i=e.unreadCount)?void 0:i[S.uid])||0;return t.jsxs(x,{onClick:()=>(e=>{s(`/chat/${e.id}`)})(e),children:[t.jsx(f,{children:t.jsx(g,{imageUrl:r.profileImage,children:!r.profileImage&&((null==(o=r.nickname)?void 0:o[0])||"?")})}),t.jsxs(u,{children:[t.jsxs(h,{children:[t.jsx(m,{children:r.nickname||"익명 사용자"}),t.jsx(w,{children:G(e.lastMessageAt)})]}),e.productInfo&&t.jsxs(b,{children:[(null==(n=e.productInfo.images)?void 0:n[0])&&t.jsx(y,{src:e.productInfo.images[0],alt:"상품"}),e.productInfo.title]}),t.jsx(v,{children:N(e.lastMessage,e.lastMessageType)}),t.jsxs(j,{children:[t.jsx("div",{}),d>0&&t.jsx(k,{children:d>99?"99+":d})]})]})]},e.id)})]})]})}s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 14px;
  color: #666;
  
  .spinner {
    margin-right: 8px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;export{S as default};
