var e=(e,i,t)=>new Promise((r,n)=>{var o=e=>{try{l(t.next(e))}catch(i){n(i)}},s=e=>{try{l(t.throw(e))}catch(i){n(i)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,s);l((t=t.apply(e,i)).next())});import{u as i,Y as t,r,j as n,Z as o,J as s,_ as l,$ as d,a0 as a,a1 as c,a2 as x,a3 as p,B as h,i as g,k as f,m as u,g as m,I as b,a4 as j,l as v,n as w,c as y}from"./vendor-react-xhcWTtxo.js";import{d as k}from"./vendor-ui-28GTjlMA.js";import{P as C,U as z,C as $,u as I,p as S}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const F=k.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,T=k.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 56px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,D=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,L=k.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #ff7e36;
  }
`,P=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`,E=k.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #ff7e36;
  }
`,U=k.div`
  position: relative;
  margin-top: 56px;
  padding: 16px;
  background: #fff;
`,Y=k.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  touch-action: pan-y;
`,R=k.div`
  display: flex;
  width: ${e=>100*e.imageCount}%;
  height: 100%;
  transform: translateX(-${e=>e.currentIndex*(100/e.imageCount)}%);
  transition: transform 0.3s ease;
`,X=k.img`
  width: ${e=>100/e.imageCount}%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,M=k.div`
  width: ${e=>100/e.imageCount}%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 48px;
`,A=k.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${e=>"prev"===e.direction?"left: 16px;":"right: 16px;"}
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
  transition: all 0.2s ease;
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`,N=k.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(4px);
`,B=k.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`,V=k.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.active?"white":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background 0.2s;
`,K=k.div`
  padding: 20px;
`,O=k.div`
  margin-bottom: 24px;
`,_=k.h1`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`,G=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
`,J=k.div`
  font-size: 24px;
  font-weight: 700;
  color: #ff7e36;
  margin-bottom: 16px;
`,W=k.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`,Z=k.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: ${e=>{switch(e.type){case"condition":return"#e8f5e8";case"negotiable":return"#fff3e0";case"delivery":return"#e3f2fd";default:return"#f5f5f5"}}};
  color: ${e=>{switch(e.type){case"condition":return"#2e7d32";case"negotiable":return"#f57c00";case"delivery":return"#1976d2";default:return"#666"}}};
`,q=k.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
  margin-bottom: 24px;
`,H=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,Q=k.div`
  background: #f8f9fa;
  color: #666;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
`,ee=k.div`
  height: 8px;
  background: #f8f9fa;
  margin: 0 -20px 24px -20px;
`,ie=k.div`
  margin-bottom: 24px;
`,te=k.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  
  &:hover {
    background: #f8f9fa;
  }
`,re=k.div`
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
  font-size: 18px;
`,ne=k.div`
  flex: 1;
`,oe=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,se=k.div`
  color: #4CAF50;
  font-size: 14px;
`,le=k.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,de=k.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #ff7e36;
  font-weight: 600;
`,ae=k.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
`,ce=k.div`
  text-align: center;
`,xe=k.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
`,pe=k.div`
  font-size: 12px;
  color: #666;
`,he=k.div`
  margin-bottom: 24px;
`,ge=k.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`,fe=k.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,ue=k.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border-color: #ff7e36;
  }
`,me=k.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`,be=k.div`
  padding: 12px;
`,je=k.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ve=k.div`
  font-size: 14px;
  font-weight: 600;
  color: #ff7e36;
`,we=k.div`
  position: fixed;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 468px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 9999;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    width: calc(100% - 12px);
    padding: 12px 6px;
    gap: 8px;
  }
`,ye=k.button`
  width: 48px;
  height: 48px;
  border: 1.5px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  color: ${e=>e.liked?"#FFD700":"#666"};
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  margin-right: 4px;
  &:hover {
    border-color: #FFD700;
    color: #FFD700;
    transform: scale(1.08);
    box-shadow: 0 4px 16px rgba(255,215,0,0.12);
  }
  &:active {
    transform: scale(0.96);
  }
`,ke=k.button`
  flex: 1;
  height: 48px;
  background: #ff7e36;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  opacity: ${e=>e.disabled?.7:1};
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: #e66d2e;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`,Ce=k.button`
  flex: 1;
  height: 48px;
  background: #28a745;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #218838;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,ze=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`,$e=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
`,Ie=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,Se=k.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`,Fe=k.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`,Te=k.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  z-index: 200;
  min-width: 120px;
  overflow: hidden;
`,De=k.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: white;
  color: #333;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
  
  &.delete {
    color: #dc3545;
    
    &:hover {
      background: #fff5f5;
    }
  }
`,Le=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 150;
`;function Pe(){var k;const Pe=i(),{id:Ee}=t(),{products:Ue,incrementViews:Ye,toggleLike:Re,changeProductStatus:Xe,PRODUCT_STATUS:Me}=r.useContext(C),{user:Ae}=r.useContext(z),{createOrGetChatRoom:Ne}=r.useContext($),{showSuccess:Be,showError:Ve,showWarning:Ke}=I(),[Oe,_e]=r.useState(0),[Ge,Je]=r.useState(!1),[We,Ze]=r.useState(!0),[qe,He]=r.useState(!1),[Qe,ei]=r.useState(!1),[ii,ti]=r.useState(0),[ri,ni]=r.useState(0),oi=Ue.find(e=>String(e.id)===String(Ee));r.useEffect(()=>{Ue.length>0&&Ze(!1)},[Ue,Ee,oi]),r.useEffect(()=>{(()=>{e(this,null,function*(){if(!oi&&!We&&Ue.length>0)try{yield S.getProduct(Ee)}catch(e){}})})()},[oi,We,Ue.length,Ee]),r.useEffect(()=>{oi&&oi.sellerId!==(null==Ae?void 0:Ae.uid)&&Ye(oi.id)},[null==oi?void 0:oi.id]);const si=()=>{Je(!0)},li=e=>new Intl.NumberFormat("ko-KR").format(e);if(We)return n.jsx(F,{children:n.jsx(ze,{children:"상품 정보를 불러오는 중..."})});if(!oi)return n.jsxs(F,{children:[n.jsx(T,{children:n.jsx(D,{children:n.jsx(L,{onClick:()=>Pe(-1),children:n.jsx(o,{})})})}),n.jsxs($e,{children:[n.jsx(s,{size:48,color:"#ddd"}),n.jsx("h3",{children:"상품을 찾을 수 없습니다"}),n.jsx("p",{children:"삭제되었거나 존재하지 않는 상품입니다."}),n.jsxs("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px"},children:["상품 ID: ",Ee," | 로드된 상품 수: ",Ue.length]}),n.jsx("button",{onClick:()=>Pe("/"),style:{marginTop:"16px",padding:"8px 16px",backgroundColor:"#ff7e36",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:"홈으로 돌아가기"})]})]});const di=oi.isLikedByUser||!1,ai=oi.images||[],ci=Ue.filter(e=>e.category===oi.category&&e.id!==oi.id).slice(0,4);return n.jsxs(F,{children:[n.jsxs(T,{children:[n.jsx(D,{children:n.jsx(L,{onClick:()=>Pe(-1),children:n.jsx(o,{})})}),n.jsxs(P,{children:[n.jsx(E,{children:n.jsx(l,{})}),(null==Ae?void 0:Ae.uid)===(null==oi?void 0:oi.sellerId)&&n.jsxs(n.Fragment,{children:[n.jsx(E,{onClick:e=>{e.stopPropagation(),He(!qe)},children:n.jsx(d,{})}),qe&&n.jsxs(n.Fragment,{children:[n.jsx(Le,{onClick:()=>{He(!1)}}),n.jsxs(Te,{children:[n.jsxs(De,{onClick:()=>{He(!1),Pe(`/edit-product/${oi.id}`)},children:[n.jsx(a,{}),"수정"]}),n.jsxs(De,{className:"delete",onClick:()=>e(this,null,function*(){if((null==Ae?void 0:Ae.isLoggedIn)&&oi.sellerId===Ae.uid){if(window.confirm("정말 이 상품을 삭제하시겠습니까?"))try{yield Xe(oi.id,Me.DELETED),alert("상품이 삭제되었습니다."),Pe("/")}catch(e){alert("상품 삭제에 실패했습니다.")}He(!1)}else alert("권한이 없습니다.")}),children:[n.jsx(c,{}),"삭제"]})]})]})]})]})]}),n.jsx(U,{children:n.jsx(Y,{onTouchStart:e=>{ti(e.targetTouches[0].clientX)},onTouchMove:e=>{ni(e.targetTouches[0].clientX)},onTouchEnd:()=>{var e;if(!ii||!ri)return;const i=ii-ri,t=i<-50;i>50&&Oe<((null==(e=null==oi?void 0:oi.images)?void 0:e.length)||1)-1&&_e(e=>e+1),t&&Oe>0&&_e(e=>e-1)},children:ai.length>0?n.jsxs(n.Fragment,{children:[n.jsx(R,{imageCount:ai.length,currentIndex:Oe,children:ai.map((e,i)=>n.jsx(X,{src:e,alt:`상품 이미지 ${i+1}`,imageCount:ai.length,onClick:si},i))}),ai.length>1&&n.jsxs(n.Fragment,{children:[n.jsx(A,{direction:"prev",onClick:()=>{_e(e=>{var i;return 0===e?((null==(i=null==oi?void 0:oi.images)?void 0:i.length)||1)-1:e-1})},style:{display:0===Oe?"none":"flex"},children:n.jsx(x,{})}),n.jsx(A,{direction:"next",onClick:()=>{_e(e=>{var i;return e===((null==(i=null==oi?void 0:oi.images)?void 0:i.length)||1)-1?0:e+1})},style:{display:Oe===ai.length-1?"none":"flex"},children:n.jsx(p,{})}),n.jsxs(N,{children:[Oe+1,"/",ai.length]}),n.jsx(B,{children:ai.map((e,i)=>n.jsx(V,{active:i===Oe,onClick:()=>_e(i)},i))})]})]}):n.jsx(M,{imageCount:1,children:n.jsx(h,{})})})}),n.jsxs(K,{children:[n.jsxs(O,{children:[n.jsxs(G,{children:[n.jsx(g,{}),oi.region," ",oi.district,n.jsx("span",{children:"•"}),n.jsx(f,{}),oi.viewCount||0,n.jsx("span",{children:"•"}),n.jsx(u,{}),oi.chatCount||0,n.jsx("span",{children:"•"}),n.jsx(m,{}),(e=>{if(!e)return"";const i=e.toDate?e.toDate():new Date(e),t=new Date-i,r=Math.floor(t/6e4),n=Math.floor(t/36e5),o=Math.floor(t/864e5);return r<1?"방금 전":r<60?`${r}분 전`:n<24?`${n}시간 전`:o<7?`${o}일 전`:i.toLocaleDateString("ko-KR")})(oi.createdAt)]}),n.jsx(_,{children:oi.title}),n.jsxs(J,{children:[li(oi.price),"원",oi.negotiable&&n.jsx("span",{style:{fontSize:"14px",color:"#666",marginLeft:"8px"},children:"가격제안 가능"})]}),n.jsxs(W,{children:[n.jsx(Z,{type:"condition",children:(xi=oi.condition,{excellent:"매우 좋음",good:"좋음",fair:"보통",poor:"나쁨"}[xi]||xi)}),oi.negotiable&&n.jsx(Z,{type:"negotiable",children:"가격제안 가능"}),oi.delivery&&n.jsx(Z,{type:"delivery",children:"택배거래 가능"})]})]}),n.jsx(q,{children:oi.description}),oi.tags&&oi.tags.length>0&&n.jsx(H,{children:oi.tags.map((e,i)=>n.jsxs(Q,{children:["#",e]},i))})]}),n.jsx(ee,{}),n.jsx(K,{children:n.jsxs(ie,{children:[n.jsxs(te,{onClick:()=>Pe(`/user/${oi.sellerId}`),children:[n.jsx(re,{imageUrl:oi.sellerProfileImage,children:!oi.sellerProfileImage&&((null==(k=oi.sellerNickname)?void 0:k[0])||"?")}),n.jsxs(ne,{children:[n.jsxs(oe,{children:[oi.sellerNickname||"익명",oi.sellerVerified&&n.jsx(se,{children:n.jsx(b,{})})]}),n.jsxs(le,{children:[n.jsx(g,{}),oi.region," ",oi.district]})]}),n.jsxs(de,{children:[n.jsx(j,{}),oi.sellerMannerScore||36.5,"°C"]})]}),n.jsxs(ae,{children:[n.jsxs(ce,{children:[n.jsx(xe,{children:oi.sellerTransactionCount||0}),n.jsx(pe,{children:"거래"})]}),n.jsxs(ce,{children:[n.jsx(xe,{children:oi.sellerReviewCount||0}),n.jsx(pe,{children:"후기"})]}),n.jsxs(ce,{children:[n.jsx(xe,{children:oi.sellerFollowerCount||0}),n.jsx(pe,{children:"팔로워"})]})]})]})}),ci.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(ee,{}),n.jsx(K,{children:n.jsxs(he,{children:[n.jsx(ge,{children:"이런 상품은 어떠세요?"}),n.jsx(fe,{children:ci.map(e=>{var i;return n.jsxs(ue,{onClick:()=>Pe(`/product/${e.id}`),children:[n.jsx(me,{src:(null==(i=e.images)?void 0:i[0])||"/placeholder.jpg",alt:e.title}),n.jsxs(be,{children:[n.jsx(je,{children:e.title}),n.jsxs(ve,{children:[li(e.price),"원"]})]})]},e.id)})})]})})]}),n.jsxs(we,{children:[n.jsx(ye,{onClick:()=>e(this,null,function*(){if(!(null==Ae?void 0:Ae.isLoggedIn))return Ke("로그인이 필요합니다.",{title:"로그인 필요"}),void Pe("/login");try{const e=oi.isLikedByUser;yield Re(oi.id),e?Be("찜 목록에서 제거되었습니다."):Be("찜 목록에 추가되었습니다!",{title:"찜 완료"})}catch(e){Ve("찜하기 처리 중 오류가 발생했습니다.")}}),liked:di,"aria-label":"찜하기",children:di?n.jsx(v,{}):n.jsx(w,{})}),n.jsxs("div",{style:{display:"flex",flex:1,gap:10},children:[n.jsx(ke,{onClick:()=>e(this,null,function*(){if(!(null==Ae?void 0:Ae.isLoggedIn))return Ke("로그인이 필요합니다.",{title:"로그인 필요"}),void Pe("/login");if(oi.sellerId!==Ae.uid){if(!Qe){ei(!0);try{const e=yield Ne(oi.id,oi.sellerId,Ae.uid,{title:oi.title,price:oi.price,images:oi.images,status:oi.status});Pe(`/chat/${e}`)}catch(e){alert("채팅방 생성에 실패했습니다. 다시 시도해주세요.")}finally{ei(!1)}}}else Ke("본인 상품에는 채팅할 수 없습니다.",{title:"채팅 불가"})}),disabled:Qe,style:{flex:1},children:Qe?"채팅방 생성 중...":"💬 채팅하기"}),n.jsx(Ce,{onClick:()=>e(this,null,function*(){var e;if(!(null==Ae?void 0:Ae.isLoggedIn))return Ke("로그인이 필요합니다.",{title:"로그인 필요"}),void Pe("/login");if(oi.sellerId!==Ae.uid)if(oi.status===Me.ACTIVE){if(window.confirm(`"${oi.title}" 상품을 구매하시겠습니까?\n\n가격: ${null==(e=oi.price)?void 0:e.toLocaleString()}원\n\n확인을 누르시면 판매자와 채팅방이 연결되고,\n거래를 진행하실 수 있습니다.`))try{const e=yield Ne(oi.id,oi.sellerId,Ae.uid,{title:oi.title,price:oi.price,images:oi.images,status:oi.status});Pe(`/chat/${e}?intent=purchase`)}catch(i){alert("구매 프로세스 진행 중 오류가 발생했습니다.")}}else Ve("이미 판매가 완료된 상품입니다.",{title:"판매 완료"});else Ke("본인 상품은 구매할 수 없습니다.",{title:"구매 불가"})}),style:{flex:1},children:"🛒 구매하기"})]})]}),n.jsx("div",{style:{height:"80px"}}),Ge&&n.jsxs(Ie,{onClick:()=>Je(!1),children:[n.jsx(Se,{onClick:()=>Je(!1),children:n.jsx(y,{})}),n.jsx(Fe,{src:ai[Oe],alt:`상품 이미지 ${Oe+1}`,onClick:e=>e.stopPropagation()})]})]});var xi}export{Pe as default};
