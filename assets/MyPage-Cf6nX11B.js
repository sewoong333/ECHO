import{r as s,U as S,P as z,u as P,j as e,_ as F,Q as I,L as M,$ as L,a0 as U,a1 as B,a2 as D,T as p,D as N,W as A,N as g,J as $,a3 as E,w as R,a4 as T,a5 as _,i as n}from"./index-CH1wDzjU.js";const h=n.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,H=n.div`
  background: white;
  padding: 24px 20px;
  margin-bottom: 12px;
  position: relative;
`,V=n.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`,J=n.div`
  position: relative;
  width: 80px;
  height: 80px;
`,G=n.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${t=>t.imageUrl?`url(${t.imageUrl})`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,K=n.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #2ed8b6;
  border: 2px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    background: #26c4a8;
  }
`,O=n.div`
  flex: 1;
`,Q=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`,W=n.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0;
`,f=n.div`
  color: #4CAF50;
  font-size: 16px;
`,q=n.div`
  background: #2196F3;
  color: white;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: bold;
`,X=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 14px;
  margin-bottom: 4px;
`,Y=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 14px;
`,Z=n.div`
  margin-top: 8px;
`,ee=n.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
  font-size: 14px;
`,ne=n.span`
  color: #333;
  font-weight: 500;
`,te=n.button`
  background: none;
  border: none;
  color: #2ed8b6;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  
  &:hover {
    color: #26c4a8;
  }
`,oe=n.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 16px;
  margin-top: 16px;
  color: white;
`,ie=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,re=n.h3`
  font-size: 16px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,se=n.div`
  font-size: 24px;
  font-weight: bold;
`,ae=n.div`
  font-size: 13px;
  opacity: 0.9;
`,ce=n.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;
`,a=n.div`
  background: white;
  padding: 20px 12px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f5f5f5;
  }
`,c=n.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`,d=n.div`
  font-size: 12px;
  color: #666;
`,de=n.div`
  background: white;
  margin-bottom: 12px;
`,le=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f9f9f9;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,xe=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,pe=n.div`
  width: 20px;
  text-align: center;
  color: #666;
`,ge=n.div`
  font-size: 16px;
  color: #333;
`,he=n.div`
  background: #2ed8b6;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  min-width: 20px;
  text-align: center;
`,fe=n.div`
  color: #ccc;
  font-size: 14px;
`,ue=n.button`
  width: 100%;
  padding: 16px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin: 20px;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #d32f2f;
  }
`,be=n.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    background: #26c4a8;
  }
`;function ye(){const{user:t,logout:u,userProfile:me,getUserInfo:je}=s.useContext(S),{userProducts:ve,loadUserProducts:b}=s.useContext(z),i=P(),[m,l]=s.useState(!0),[r,j]=s.useState({selling:0,sold:0,buying:0,reviews:0});s.useEffect(()=>{if(!t.isLoggedIn){i("/login");return}v()},[t.isLoggedIn,i]);const v=async()=>{try{l(!0),await b(),j({selling:t.transactionCount||0,sold:Math.floor((t.transactionCount||0)*.7),buying:Math.floor((t.transactionCount||0)*.3),reviews:t.reviewCount||0})}catch(o){console.error("데이터 로드 실패:",o)}finally{l(!1)}},w=async()=>{if(window.confirm("정말 로그아웃하시겠습니까?"))try{await u(),i("/login")}catch(o){console.error("로그아웃 실패:",o),alert("로그아웃에 실패했습니다.")}},y=o=>o?(o.toDate?o.toDate():new Date(o)).toLocaleDateString("ko-KR",{year:"numeric",month:"long"}):"",k=o=>o?o.charAt(0).toUpperCase():"?",C=[{icon:e.jsx(F,{}),text:"판매내역",path:"/mypage/sales",badge:r.selling},{icon:e.jsx(I,{}),text:"관심목록",path:"/wishlist",badge:t.favoriteCount},{icon:e.jsx(M,{}),text:"채팅",path:"/chat",badge:0},{icon:e.jsx(L,{}),text:"팔로잉",path:"/following",badge:t.following?.length||0},{icon:e.jsx(U,{}),text:"설정",path:"/settings"},{icon:e.jsx(B,{}),text:"개인정보 처리방침",path:"/privacy"},{icon:e.jsx(D,{}),text:"비즈니스 계정",path:"/business"}];return m?e.jsxs(h,{children:[e.jsx(p,{title:"마이페이지"}),e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"로딩 중..."})]}):e.jsxs(h,{children:[e.jsx(p,{title:"마이페이지"}),e.jsxs(H,{children:[e.jsxs(be,{onClick:()=>i("/profile/edit"),children:[e.jsx(N,{})," 수정"]}),e.jsxs(V,{children:[e.jsxs(J,{children:[e.jsx(G,{imageUrl:t.profileImage,children:!t.profileImage&&k(t.nickname)}),e.jsx(K,{onClick:()=>i("/profile/photo"),children:e.jsx(A,{})})]}),e.jsxs(O,{children:[e.jsxs(Q,{children:[e.jsx(W,{children:t.nickname||"사용자"}),t.isVerified&&e.jsx(f,{children:e.jsx(g,{})}),t.isBusiness&&e.jsx(q,{children:"비즈니스"})]}),t.address&&e.jsxs(X,{children:[e.jsx($,{}),t.region," ",t.district]}),e.jsxs(Y,{children:[e.jsx(E,{}),y(t.createdAt)," 가입"]}),e.jsx(Z,{children:e.jsxs(ee,{children:[e.jsx(R,{}),t.phoneNumber?e.jsxs("div",{children:[e.jsx(ne,{children:t.phoneNumber?.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3")}),t.phoneVerified&&e.jsxs(f,{style:{marginLeft:"6px",fontSize:"12px"},children:[e.jsx(g,{}),"인증완료"]})]}):e.jsx(te,{onClick:()=>i("/profile/phone"),children:"전화번호 등록하기"})]})})]})]}),e.jsxs(oe,{children:[e.jsxs(ie,{children:[e.jsxs(re,{children:[e.jsx(T,{}),"매너온도"]}),e.jsxs(se,{children:[t.mannerScore,"°C"]})]}),e.jsx(ae,{children:t.mannerScore>=40?"매우 좋은 거래자예요!":t.mannerScore>=36.5?"좋은 거래자예요!":"더 좋은 거래자가 되어보세요!"})]})]}),e.jsxs(ce,{children:[e.jsxs(a,{onClick:()=>i("/mypage/sales"),children:[e.jsx(c,{children:r.selling}),e.jsx(d,{children:"판매중"})]}),e.jsxs(a,{onClick:()=>i("/mypage/sold"),children:[e.jsx(c,{children:r.sold}),e.jsx(d,{children:"판매완료"})]}),e.jsxs(a,{onClick:()=>i("/mypage/buying"),children:[e.jsx(c,{children:r.buying}),e.jsx(d,{children:"구매내역"})]}),e.jsxs(a,{onClick:()=>i("/mypage/reviews"),children:[e.jsx(c,{children:r.reviews}),e.jsx(d,{children:"받은후기"})]})]}),e.jsx(de,{children:C.map((o,x)=>e.jsxs(le,{onClick:()=>i(o.path),children:[e.jsxs(xe,{children:[e.jsx(pe,{children:o.icon}),e.jsx(ge,{children:o.text})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.badge>0&&e.jsx(he,{children:o.badge}),e.jsx(fe,{children:"›"})]})]},x))}),e.jsxs(ue,{onClick:w,children:[e.jsx(_,{}),"로그아웃"]})]})}export{ye as default};
