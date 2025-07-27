var e=(e,i,n)=>new Promise((o,t)=>{var r=e=>{try{a(n.next(e))}catch(i){t(i)}},s=e=>{try{a(n.throw(e))}catch(i){t(i)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,s);a((n=n.apply(e,i)).next())});import{r as i,u as n,j as o,a7 as t,l as r,m as s,a8 as a,f as d,a9 as l,aa as c,a0 as x,T as p,I as g,i as h,ab as f,a5 as u,ac as b,ad as j}from"./vendor-react-xhcWTtxo.js";import{d as m}from"./vendor-ui-28GTjlMA.js";import{U as v,P as w,T as y}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const k=m.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,C=m.div`
  background: white;
  padding: 24px 20px;
  margin-bottom: 12px;
  position: relative;
`,z=m.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`,I=m.div`
  position: relative;
  width: 80px;
  height: 80px;
`,S=m.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${e=>e.imageUrl?`url(${e.imageUrl})`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
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
`,U=m.button`
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
`,P=m.div`
  flex: 1;
`,$=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`,A=m.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0;
`,D=m.div`
  color: #4CAF50;
  font-size: 16px;
`,L=m.div`
  background: #2196F3;
  color: white;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: bold;
`,F=m.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 14px;
  margin-bottom: 4px;
`,M=m.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 14px;
`,N=m.div`
  margin-top: 8px;
`,T=m.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
  font-size: 14px;
`,V=m.span`
  color: #333;
  font-weight: 500;
`,B=m.button`
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
`,E=m.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 16px;
  margin-top: 16px;
  color: white;
`,K=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,R=m.h3`
  font-size: 16px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,q=m.div`
  font-size: 24px;
  font-weight: bold;
`,G=m.div`
  font-size: 13px;
  opacity: 0.9;
`,H=m.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;
`,J=m.div`
  background: white;
  padding: 20px 12px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f5f5f5;
  }
`,O=m.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`,Q=m.div`
  font-size: 12px;
  color: #666;
`,W=m.div`
  background: white;
  margin-bottom: 12px;
`,X=m.div`
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
`,Y=m.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Z=m.div`
  width: 20px;
  text-align: center;
  color: #666;
`,_=m.div`
  font-size: 16px;
  color: #333;
`,ee=m.div`
  background: #2ed8b6;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  min-width: 20px;
  text-align: center;
`,ie=m.div`
  color: #ccc;
  font-size: 14px;
`,ne=m.button`
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
`,oe=m.button`
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
`;function te(){var m,te;const{user:re,logout:se,userProfile:ae,getUserInfo:de}=i.useContext(v),{userProducts:le,loadUserProducts:ce}=i.useContext(w),xe=n(),[pe,ge]=i.useState(!0),[he,fe]=i.useState({selling:0,sold:0,buying:0,reviews:0});i.useEffect(()=>{re.isLoggedIn?ue():xe("/login")},[re.isLoggedIn,xe,ue]);const ue=i.useCallback(()=>e(this,null,function*(){try{ge(!0),yield ce(),fe({selling:re.transactionCount||0,sold:Math.floor(.7*(re.transactionCount||0)),buying:Math.floor(.3*(re.transactionCount||0)),reviews:re.reviewCount||0})}catch(e){}finally{ge(!1)}}),[re.transactionCount,re.reviewCount,ce]),be=[{icon:o.jsx(t,{}),text:"판매내역",path:"/mypage/sales",badge:he.selling},{icon:o.jsx(r,{}),text:"관심목록",path:"/wishlist",badge:re.favoriteCount},{icon:o.jsx(s,{}),text:"채팅",path:"/chat",badge:0},{icon:o.jsx(a,{}),text:"팔로잉",path:"/following",badge:(null==(m=re.following)?void 0:m.length)||0},{icon:o.jsx(d,{}),text:"설정",path:"/settings"},{icon:o.jsx(l,{}),text:"개인정보 처리방침",path:"/privacy"},{icon:o.jsx(c,{}),text:"비즈니스 계정",path:"/business"}];return pe?o.jsxs(k,{children:[o.jsx(y,{title:"마이페이지"}),o.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"로딩 중..."})]}):o.jsxs(k,{children:[o.jsx(y,{title:"마이페이지"}),o.jsxs(C,{children:[o.jsxs(oe,{onClick:()=>xe("/profile/edit"),children:[o.jsx(x,{})," 수정"]}),o.jsxs(z,{children:[o.jsxs(I,{children:[o.jsx(S,{imageUrl:re.profileImage,children:!re.profileImage&&(me=re.nickname,me?me.charAt(0).toUpperCase():"?")}),o.jsx(U,{onClick:()=>xe("/profile/photo"),children:o.jsx(p,{})})]}),o.jsxs(P,{children:[o.jsxs($,{children:[o.jsx(A,{children:re.nickname||"사용자"}),re.isVerified&&o.jsx(D,{children:o.jsx(g,{})}),re.isBusiness&&o.jsx(L,{children:"비즈니스"})]}),re.address&&o.jsxs(F,{children:[o.jsx(h,{}),re.region," ",re.district]}),o.jsxs(M,{children:[o.jsx(f,{}),(je=re.createdAt,je?(je.toDate?je.toDate():new Date(je)).toLocaleDateString("ko-KR",{year:"numeric",month:"long"}):"")," 가입"]}),o.jsx(N,{children:o.jsxs(T,{children:[o.jsx(u,{}),re.phoneNumber?o.jsxs("div",{children:[o.jsx(V,{children:null==(te=re.phoneNumber)?void 0:te.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3")}),re.phoneVerified&&o.jsxs(D,{style:{marginLeft:"6px",fontSize:"12px"},children:[o.jsx(g,{}),"인증완료"]})]}):o.jsx(B,{onClick:()=>xe("/profile/phone"),children:"전화번호 등록하기"})]})})]})]}),o.jsxs(E,{children:[o.jsxs(K,{children:[o.jsxs(R,{children:[o.jsx(b,{}),"매너온도"]}),o.jsxs(q,{children:[re.mannerScore,"°C"]})]}),o.jsx(G,{children:re.mannerScore>=40?"매우 좋은 거래자예요!":re.mannerScore>=36.5?"좋은 거래자예요!":"더 좋은 거래자가 되어보세요!"})]})]}),o.jsxs(H,{children:[o.jsxs(J,{onClick:()=>xe("/mypage/sales"),children:[o.jsx(O,{children:he.selling}),o.jsx(Q,{children:"판매중"})]}),o.jsxs(J,{onClick:()=>xe("/mypage/sold"),children:[o.jsx(O,{children:he.sold}),o.jsx(Q,{children:"판매완료"})]}),o.jsxs(J,{onClick:()=>xe("/mypage/buying"),children:[o.jsx(O,{children:he.buying}),o.jsx(Q,{children:"구매내역"})]}),o.jsxs(J,{onClick:()=>xe("/mypage/reviews"),children:[o.jsx(O,{children:he.reviews}),o.jsx(Q,{children:"받은후기"})]})]}),o.jsx(W,{children:be.map((e,i)=>o.jsxs(X,{onClick:()=>xe(e.path),children:[o.jsxs(Y,{children:[o.jsx(Z,{children:e.icon}),o.jsx(_,{children:e.text})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.badge>0&&o.jsx(ee,{children:e.badge}),o.jsx(ie,{children:"›"})]})]},i))}),o.jsxs(ne,{onClick:()=>e(this,null,function*(){if(window.confirm("정말 로그아웃하시겠습니까?"))try{yield se(),xe("/login")}catch(e){alert("로그아웃에 실패했습니다.")}}),children:[o.jsx(j,{}),"로그아웃"]})]});var je,me}export{te as default};
