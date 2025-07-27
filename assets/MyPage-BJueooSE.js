import{r as s,U as P,P as F,u as I,j as e,a0 as M,Q as L,L as U,a1 as B,a2 as D,a3 as N,a4 as A,T as h,D as E,Y as $,N as f,J as R,a5 as T,w as H,a6 as V,a7 as _,i as n}from"./index-CSkq5290.js";const u=n.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,J=n.div`
  background: white;
  padding: 24px 20px;
  margin-bottom: 12px;
  position: relative;
`,G=n.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`,K=n.div`
  position: relative;
  width: 80px;
  height: 80px;
`,O=n.div`
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
`,Q=n.button`
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
`,Y=n.div`
  flex: 1;
`,q=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`,W=n.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0;
`,b=n.div`
  color: #4CAF50;
  font-size: 16px;
`,X=n.div`
  background: #2196F3;
  color: white;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: bold;
`,Z=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 14px;
  margin-bottom: 4px;
`,ee=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 14px;
`,ne=n.div`
  margin-top: 8px;
`,te=n.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
  font-size: 14px;
`,oe=n.span`
  color: #333;
  font-weight: 500;
`,ie=n.button`
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
`,re=n.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 16px;
  margin-top: 16px;
  color: white;
`,se=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,ae=n.h3`
  font-size: 16px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,ce=n.div`
  font-size: 24px;
  font-weight: bold;
`,de=n.div`
  font-size: 13px;
  opacity: 0.9;
`,le=n.div`
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
`,xe=n.div`
  background: white;
  margin-bottom: 12px;
`,pe=n.div`
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
`,ge=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,he=n.div`
  width: 20px;
  text-align: center;
  color: #666;
`,fe=n.div`
  font-size: 16px;
  color: #333;
`,ue=n.div`
  background: #2ed8b6;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  min-width: 20px;
  text-align: center;
`,be=n.div`
  color: #ccc;
  font-size: 14px;
`,me=n.button`
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
`,je=n.button`
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
`;function Ce(){var x,p;const{user:t,logout:m,userProfile:ve,getUserInfo:we}=s.useContext(P),{userProducts:ye,loadUserProducts:j}=s.useContext(F),i=I(),[v,l]=s.useState(!0),[r,w]=s.useState({selling:0,sold:0,buying:0,reviews:0});s.useEffect(()=>{if(!t.isLoggedIn){i("/login");return}y()},[t.isLoggedIn,i]);const y=async()=>{try{l(!0),await j(),w({selling:t.transactionCount||0,sold:Math.floor((t.transactionCount||0)*.7),buying:Math.floor((t.transactionCount||0)*.3),reviews:t.reviewCount||0})}catch(o){console.error("데이터 로드 실패:",o)}finally{l(!1)}},k=async()=>{if(window.confirm("정말 로그아웃하시겠습니까?"))try{await m(),i("/login")}catch(o){console.error("로그아웃 실패:",o),alert("로그아웃에 실패했습니다.")}},C=o=>o?(o.toDate?o.toDate():new Date(o)).toLocaleDateString("ko-KR",{year:"numeric",month:"long"}):"",S=o=>o?o.charAt(0).toUpperCase():"?",z=[{icon:e.jsx(M,{}),text:"판매내역",path:"/mypage/sales",badge:r.selling},{icon:e.jsx(L,{}),text:"관심목록",path:"/wishlist",badge:t.favoriteCount},{icon:e.jsx(U,{}),text:"채팅",path:"/chat",badge:0},{icon:e.jsx(B,{}),text:"팔로잉",path:"/following",badge:((x=t.following)==null?void 0:x.length)||0},{icon:e.jsx(D,{}),text:"설정",path:"/settings"},{icon:e.jsx(N,{}),text:"개인정보 처리방침",path:"/privacy"},{icon:e.jsx(A,{}),text:"비즈니스 계정",path:"/business"}];return v?e.jsxs(u,{children:[e.jsx(h,{title:"마이페이지"}),e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"로딩 중..."})]}):e.jsxs(u,{children:[e.jsx(h,{title:"마이페이지"}),e.jsxs(J,{children:[e.jsxs(je,{onClick:()=>i("/profile/edit"),children:[e.jsx(E,{})," 수정"]}),e.jsxs(G,{children:[e.jsxs(K,{children:[e.jsx(O,{imageUrl:t.profileImage,children:!t.profileImage&&S(t.nickname)}),e.jsx(Q,{onClick:()=>i("/profile/photo"),children:e.jsx($,{})})]}),e.jsxs(Y,{children:[e.jsxs(q,{children:[e.jsx(W,{children:t.nickname||"사용자"}),t.isVerified&&e.jsx(b,{children:e.jsx(f,{})}),t.isBusiness&&e.jsx(X,{children:"비즈니스"})]}),t.address&&e.jsxs(Z,{children:[e.jsx(R,{}),t.region," ",t.district]}),e.jsxs(ee,{children:[e.jsx(T,{}),C(t.createdAt)," 가입"]}),e.jsx(ne,{children:e.jsxs(te,{children:[e.jsx(H,{}),t.phoneNumber?e.jsxs("div",{children:[e.jsx(oe,{children:(p=t.phoneNumber)==null?void 0:p.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3")}),t.phoneVerified&&e.jsxs(b,{style:{marginLeft:"6px",fontSize:"12px"},children:[e.jsx(f,{}),"인증완료"]})]}):e.jsx(ie,{onClick:()=>i("/profile/phone"),children:"전화번호 등록하기"})]})})]})]}),e.jsxs(re,{children:[e.jsxs(se,{children:[e.jsxs(ae,{children:[e.jsx(V,{}),"매너온도"]}),e.jsxs(ce,{children:[t.mannerScore,"°C"]})]}),e.jsx(de,{children:t.mannerScore>=40?"매우 좋은 거래자예요!":t.mannerScore>=36.5?"좋은 거래자예요!":"더 좋은 거래자가 되어보세요!"})]})]}),e.jsxs(le,{children:[e.jsxs(a,{onClick:()=>i("/mypage/sales"),children:[e.jsx(c,{children:r.selling}),e.jsx(d,{children:"판매중"})]}),e.jsxs(a,{onClick:()=>i("/mypage/sold"),children:[e.jsx(c,{children:r.sold}),e.jsx(d,{children:"판매완료"})]}),e.jsxs(a,{onClick:()=>i("/mypage/buying"),children:[e.jsx(c,{children:r.buying}),e.jsx(d,{children:"구매내역"})]}),e.jsxs(a,{onClick:()=>i("/mypage/reviews"),children:[e.jsx(c,{children:r.reviews}),e.jsx(d,{children:"받은후기"})]})]}),e.jsx(xe,{children:z.map((o,g)=>e.jsxs(pe,{onClick:()=>i(o.path),children:[e.jsxs(ge,{children:[e.jsx(he,{children:o.icon}),e.jsx(fe,{children:o.text})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.badge>0&&e.jsx(ue,{children:o.badge}),e.jsx(be,{children:"›"})]})]},g))}),e.jsxs(me,{onClick:k,children:[e.jsx(_,{}),"로그아웃"]})]})}export{Ce as default};
