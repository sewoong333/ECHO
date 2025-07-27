var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,d=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))r.call(t,n)&&s(e,n,t[n]);return e},a=(e,i)=>t(e,n(i)),l=(e,t,n)=>new Promise((i,o)=>{var r=e=>{try{d(n.next(e))}catch(t){o(t)}},s=e=>{try{d(n.throw(e))}catch(t){o(t)}},d=e=>e.done?i(e.value):Promise.resolve(e.value).then(r,s);d((n=n.apply(e,t)).next())});import{u as c,Y as p,r as x,j as u,J as f,Z as g,a5 as h,$ as b,i as m,I as v,g as j,T as w,W as y,h as k,a6 as z}from"./vendor-react-xhcWTtxo.js";import{d as I}from"./vendor-ui-28GTjlMA.js";import{U as S,P as C,C as $}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const L=I.div`
  width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 60px; /* 헤더 높이만큼 패딩 추가 */
`,D=I.div`
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
`,O=I.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,R=I.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
`,A=I.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,E=I.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${e=>e.imageUrl?`url(${e.imageUrl})`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
`,P=I.div``,T=I.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`,U=I.div`
  font-size: 12px;
  color: #4CAF50;
`,M=I.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,F=I.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
`,K=I.div`
  margin: 70px 20px 12px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
`,X=I.div`
  display: flex;
  padding: 12px;
  gap: 12px;
`,B=I.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`,H=I.div`
  flex: 1;
`,J=I.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,V=I.div`
  font-size: 16px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 4px;
`,W=I.div`
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,Y=I.div`
  flex: 1;
  padding: 0 20px 160px; /* 하단바(90px) + 입력창(70px) 여유 공간 */
  overflow-y: auto;
  padding-top: 20px;
`;I.div`
  margin-bottom: 16px;
`;const Z=I.div`
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
`,_=I.span`
  background: #f8f9fa;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
  position: relative;
  z-index: 1;
`,q=I.div`
  display: flex;
  margin-bottom: 8px;
  flex-direction: ${e=>e.isOwn?"row-reverse":"row"};
  align-items: flex-end;
  gap: 8px;
`,G=I.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${e=>e.imageUrl?`url(${e.imageUrl})`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 4px;
`,N=I.div`
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 18px;
  background: ${e=>e.isOwn?"#2ed8b6":"white"};
  color: ${e=>e.isOwn?"white":"#333"};
  border: ${e=>e.isOwn?"none":"1px solid #e0e0e0"};
  word-wrap: break-word;
  position: relative;
  
  ${e=>e.isOwn?"\n    border-bottom-right-radius: 4px;\n  ":"\n    border-bottom-left-radius: 4px;\n  "}
`,Q=I.div`
  text-align: center;
  padding: 8px 16px;
  margin: 16px 0;
  background: #f0f0f0;
  border-radius: 16px;
  font-size: 12px;
  color: #666;
`,ee=I.div`
  font-size: 10px;
  color: #999;
  margin: 0 4px;
`;I.div`
  font-size: 10px;
  color: ${e=>e.read?"#4CAF50":"#999"};
  margin: 0 4px;
`;const te=I.div`
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
`,ne=I.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`,ie=I.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
`,oe=I.button`
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
`,re=I.textarea`
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
  height: ${e=>e.height}px;
  transition: height 0.2s ease;
  
  &:focus {
    border-color: #2ed8b6;
    background: white;
  }
  
  &::placeholder {
    color: #999;
  }
`,se=I.div`
  padding: 8px 20px;
  font-size: 12px;
  color: #666;
  font-style: italic;
`,de=I.button`
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 10px;
  cursor: pointer;
  margin-left: 8px;
  
  &:hover {
    background: #ff5252;
  }
`,ae=I.div`
  font-size: 10px;
  color: ${e=>"sending"===e.status?"#2ed8b6":"failed"===e.status?"#ff6b6b":e.read?"#4CAF50":"#999"};
  margin: 0 4px;
`,le=I.div`
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: ${e=>e.isConnected?"#4CAF50":"#ff6b6b"};
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  z-index: 1000;
  transition: all 0.3s ease;
  opacity: ${e=>e.show?1:0};
  pointer-events: none;
`,ce=I.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${e=>e.disabled?"#e0e0e0":"#2ed8b6"};
  border: none;
  color: white;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${e=>e.disabled?"#e0e0e0":"#26c4a8"};
  }
`,pe=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 14px;
  color: #666;
`,xe=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
  padding: 20px;
`;function ue(){var e,t,n;const i=c(),{chatRoomId:o}=p(),{user:r}=x.useContext(S),{products:s}=x.useContext(C),{messages:I,currentChat:ue,sendMessage:fe,getChatRoomInfo:ge,setActiveChat:he,subscribeToMessages:be,markMessagesAsRead:me}=x.useContext($),[ve,je]=x.useState(null),[we,ye]=x.useState(""),[ke,ze]=x.useState(!0),[Ie,Se]=x.useState(null),[Ce,$e]=x.useState(!1),[Le,De]=x.useState("connected"),[Oe,Re]=x.useState(!1),[Ae,Ee]=x.useState({}),[Pe,Te]=x.useState(!1),[Ue,Me]=x.useState(!1),[Fe,Ke]=x.useState(36),Xe=x.useRef(null),Be=x.useRef(null),He=x.useRef(null),Je=x.useRef(null),Ve="purchase"===new URLSearchParams(window.location.search).get("intent");x.useEffect(()=>{o&&r.isLoggedIn?(()=>{l(this,null,function*(){try{ze(!0),Se(null);const e=yield ge(o);if(!e)return void Se("채팅방을 찾을 수 없습니다.");je(e),he(o);const t=be(o);return()=>{t&&t()}}catch(e){Se("채팅방을 불러오는데 실패했습니다.")}finally{ze(!1)}})})():r.isLoggedIn||i("/login")},[o,r.isLoggedIn,ge,i,he,be]);const We=x.useCallback(()=>{var e;null==(e=Xe.current)||e.scrollIntoView({behavior:"smooth"})},[]),Ye=x.useMemo(()=>(I[o]||[]).slice(-50),[I,o]);x.useEffect(()=>{We()},[Ye,We]);const Ze=x.useCallback(e=>{const t=e.target.value;ye(t);const n=e.target,i=Math.min(Math.max(n.scrollHeight,36),120);Ke(i),!Ue&&t.trim()&&Me(!0),He.current&&clearTimeout(He.current),He.current=setTimeout(()=>{Me(!1)},1e3)},[Ue]);x.useEffect(()=>{const e=()=>{const e=navigator.onLine?"connected":"disconnected";e!==Le&&(De(e),Re(!0),setTimeout(()=>{Re(!1)},3e3))};return window.addEventListener("online",e),window.addEventListener("offline",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}},[Le]),x.useEffect(()=>{o&&r.isLoggedIn&&me(o)},[o,r.isLoggedIn,me]),x.useEffect(()=>{(()=>{l(this,null,function*(){if(Ve&&ve&&!Pe&&r.isLoggedIn)try{Te(!0);const e=ve.productInfo,t=`${(null==e?void 0:e.title)||"상품"} 구매를 희망합니다. 거래 가능하신가요?`;yield fe(o,t);const n=window.location.pathname;window.history.replaceState({},"",n)}catch(e){Te(!1)}})})()},[Ve,ve,Pe,r.isLoggedIn,o,fe]);const _e=x.useCallback((e=null)=>l(this,null,function*(){var t;if(!we.trim()||!o||Ce)return;if(we.length>1e3)return void Se("메시지는 1000자를 초과할 수 없습니다.");const n=e||`temp_${Date.now()}`;$e(!0),Se(null),Me(!1),Ee(e=>a(d({},e),{[n]:"sending"}));try{yield fe(o,we),ye(""),Ke(36),Ee(e=>a(d({},e),{[n]:"sent"})),null==(t=Be.current)||t.focus(),setTimeout(()=>{Ee(e=>{const t=d({},e);return delete t[n],t})},2e3)}catch(i){Ee(e=>a(d({},e),{[n]:"failed"})),Se(u.jsxs("div",{children:["메시지 전송에 실패했습니다.",u.jsx(de,{onClick:()=>_e(n),children:"다시 시도"})]})),"unavailable"!==i.code&&navigator.onLine||(Je.current=setTimeout(()=>{navigator.onLine&&_e(n)},3e3))}finally{$e(!1)}}),[we,o,Ce,fe]),qe=e=>{if(!e)return"";const t=e.toDate?e.toDate():new Date(e),n=new Date,i=new Date(n);return i.setDate(i.getDate()-1),t.toDateString()===n.toDateString()?"오늘":t.toDateString()===i.toDateString()?"어제":t.toLocaleDateString("ko-KR",{month:"long",day:"numeric"})};if(ke)return u.jsx(L,{children:u.jsx(pe,{children:"채팅을 불러오는 중..."})});if(Ie)return u.jsx(L,{children:u.jsxs(xe,{children:[u.jsx(f,{size:48,color:"#ddd"}),u.jsx("h3",{children:Ie}),u.jsx("button",{onClick:()=>i("/chat"),style:{padding:"8px 16px",background:"#2ed8b6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",marginTop:"16px"},children:"채팅 목록으로 돌아가기"})]})});const Ge=(()=>{var e;if(!ve)return null;const t=ve.participants.find(e=>e!==r.uid);return(null==(e=ve.participantInfo)?void 0:e[t])||{}})(),Ne=(null==ve?void 0:ve.productInfo)?ve.productInfo:null,Qe=I[o]||[];return u.jsxs(L,{children:[u.jsxs(D,{children:[u.jsxs(O,{children:[u.jsx(R,{onClick:()=>i("/chat"),children:u.jsx(g,{})}),u.jsxs(A,{children:[u.jsx(E,{imageUrl:Ge.profileImage,children:!Ge.profileImage&&((null==(e=Ge.nickname)?void 0:e[0])||"?")}),u.jsxs(P,{children:[u.jsx(T,{children:Ge.nickname||"익명 사용자"}),u.jsx(U,{children:"온라인"})]})]})]}),u.jsxs(M,{children:[u.jsx(F,{children:u.jsx(h,{})}),u.jsx(F,{children:u.jsx(b,{})})]})]}),Ne&&u.jsx(K,{onClick:()=>i(`/product/${Ne.id}`),children:u.jsxs(X,{children:[(null==(t=Ne.images)?void 0:t[0])&&u.jsx(B,{src:Ne.images[0],alt:Ne.title}),u.jsxs(H,{children:[u.jsx(J,{children:Ne.title}),u.jsxs(V,{children:[null==(n=Ne.price)?void 0:n.toLocaleString(),"원"]}),u.jsxs(W,{children:[u.jsx(m,{}),"active"===Ne.status?"판매중":"판매완료"]})]})]})}),u.jsxs(Y,{children:[Ye.length>50&&u.jsx("div",{style:{textAlign:"center",padding:"10px",color:"#666",fontSize:"12px",cursor:"pointer",background:"#f8f9fa",margin:"10px 0",borderRadius:"12px"},children:"이전 메시지 더 보기"}),Ye.map((e,t)=>{var n,i,o,s,d;const a=e.senderId===r.uid,l=0===t||qe(e.createdAt)!==qe(null==(n=Qe[t-1])?void 0:n.createdAt);return u.jsxs("div",{children:[l&&u.jsx(Z,{children:u.jsx(_,{children:qe(e.createdAt)})}),"system"===e.type?u.jsx(Q,{children:e.content}):u.jsxs(q,{isOwn:a,children:[!a&&u.jsx(G,{imageUrl:null==(i=e.senderInfo)?void 0:i.profileImage,children:!(null==(o=e.senderInfo)?void 0:o.profileImage)&&((null==(d=null==(s=e.senderInfo)?void 0:s.nickname)?void 0:d[0])||"?")}),u.jsx(N,{isOwn:a,children:e.content}),u.jsxs("div",{children:[u.jsx(ee,{children:(c=e.createdAt,c?(c.toDate?c.toDate():new Date(c)).toLocaleTimeString("ko-KR",{hour:"numeric",minute:"2-digit",hour12:!0}):"")}),a&&u.jsx(ae,{read:e.isRead,status:Ae[e.id],children:"sending"===Ae[e.id]?"•••":"failed"===Ae[e.id]?"⚠️":e.isRead?u.jsx(v,{}):u.jsx(j,{})})]})]})]},e.id);var c}),u.jsx("div",{ref:Xe})]}),u.jsx(le,{isConnected:"connected"===Le,show:Oe,children:"connected"===Le?"연결됨":"연결 끊어짐"}),Ue&&u.jsx(se,{children:"상대방이 입력 중..."}),u.jsxs(te,{children:[Ie&&u.jsx("div",{style:{padding:"8px 16px",background:"#fff5f5",borderLeft:"4px solid #f56565",marginBottom:"8px",fontSize:"14px",color:"#c53030"},children:Ie}),u.jsxs(ie,{children:[u.jsx(oe,{children:u.jsx(w,{})}),u.jsx(oe,{children:u.jsx(y,{})}),u.jsx(oe,{children:u.jsx(k,{})})]}),u.jsxs(ne,{children:[u.jsx(re,{ref:Be,value:we,onChange:Ze,height:Fe,onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),_e())},placeholder:"메시지를 입력하세요...",rows:1}),u.jsx(ce,{disabled:!we.trim()||Ce,onClick:_e,children:Ce?"•••":u.jsx(z,{})})]})]})]})}export{ue as default};
