import{u as S,r as s,U as C,P as B,j as t,T as I,ag as L,aa as $,ah as F,ai as h,aj as T,ak as q,al as A,am as H,an as M,ao as P,i as e}from"./index-CH1wDzjU.js";const R={profile:"https://i.ibb.co/3y0Qw1K/profile-demo.jpg"},m=e.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
`,E=e.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 18px 0 18px;
`,U=e.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #222;
  cursor: pointer;
  margin-right: 8px;
`,K=e.div`
  font-size: 22px;
  font-weight: 800;
  color: #222;
  flex: 1;
`,N=e.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 8px;
`;e.button`
  background: #2ed8b6;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 7px 18px;
  margin: 0;
  cursor: pointer;
  align-self: flex-start;
`;e.div`
  display: flex;
  align-items: center;
  margin: 18px 0 0 0;
  width: 100%;
  max-width: 480px;
  border-bottom: 1.5px solid #eee;
`;e.div`
  flex: 1;
  text-align: center;
  font-size: 17px;
  font-weight: ${({$active:n})=>n?800:600};
  color: ${({$active:n})=>n?"#222":"#bbb"};
  padding-bottom: 12px;
  border-bottom: ${({$active:n})=>n?"2.5px solid #222":"none"};
  cursor: pointer;
`;const D=e.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  padding: 12px 18px 0 18px;
`;e.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;e.label`
  font-size: 16px;
  color: #222;
  font-weight: 500;
`;const Q=e.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 8px;
`,W=e.div`
  display: flex;
  align-items: flex-start;
  padding: 18px 0 0 0;
  border-bottom: 1.5px solid #f2f2f2;
`,G=e.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;
  object-fit: cover;
  margin-left: 18px;
  margin-right: 16px;
`,J=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,O=e.div`
  font-size: 17px;
  font-weight: 700;
  color: #222;
  margin-bottom: 6px;
  margin-top: 2px;
  line-height: 1.3;
`,V=e.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 2px;
`,X=e.div`
  font-size: 18px;
  font-weight: 800;
  color: #222;
  margin-bottom: 2px;
`,Y=e.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2px;
`,c=e.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #bbb;
  gap: 3px;
`,Z=e.div`
  display: flex;
  gap: 10px;
  margin: 14px 0 18px 124px;
`,x=e.button`
  flex: 1;
  background: #f7f8fa;
  color: #222;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: 13px 0;
  cursor: pointer;
`,u=e(x)`
  width: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,d=e.button`
  background: ${({$active:n})=>n?"#222":"none"};
  color: ${({$active:n})=>n?"#fff":"#222"};
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 7px 18px;
  margin: 0;
  cursor: pointer;
  align-self: flex-start;
`;function tt(){const n=S(),{user:a}=s.useContext(C),{likes:b,chatRooms:j}=s.useContext(B),[v,w]=s.useState([]),[y,z]=s.useState(!0),[o,l]=s.useState("all");s.useEffect(()=>{const i=async()=>{try{const r=T(q(A,"products"),H("author","==",a.nickname),M("createdAt","desc")),k=(await P(r)).docs.map(g=>({id:g.id,...g.data()}));w(k)}catch(r){console.error("판매내역 불러오기 실패:",r)}finally{z(!1)}};a.isLoggedIn&&i()},[a]);const p=v.filter(i=>o==="all"?!0:o==="active"?!i.sold:o==="sold"?i.sold:!0);return y?t.jsxs(m,{children:[t.jsx(I,{}),t.jsx("div",{style:{textAlign:"center",padding:"40px 0"},children:"로딩중..."})]}):t.jsxs(m,{children:[t.jsxs(E,{children:[t.jsx(U,{onClick:()=>n(-1),children:t.jsx(L,{})}),t.jsx(K,{children:"판매내역"}),t.jsx(N,{src:R.profile,alt:"profile"})]}),t.jsxs(D,{children:[t.jsx(d,{$active:o==="all",onClick:()=>l("all"),children:"전체"}),t.jsx(d,{$active:o==="active",onClick:()=>l("active"),children:"판매중"}),t.jsx(d,{$active:o==="sold",onClick:()=>l("sold"),children:"판매완료"})]}),t.jsxs(Q,{children:[p.length===0&&t.jsx("div",{style:{color:"#bbb",textAlign:"center",marginTop:40},children:"상품이 없습니다."}),p.map((i,r)=>t.jsxs("div",{children:[t.jsxs(W,{children:[t.jsx(G,{src:i.image||"https://via.placeholder.com/90",alt:"썸네일"}),t.jsxs(J,{children:[t.jsx(O,{children:i.title}),t.jsxs(V,{children:[i.location," · ",i.time||"방금 전"]}),t.jsxs(X,{children:[Number(i.price).toLocaleString("ko-KR"),"원"]}),t.jsxs(Y,{children:[t.jsxs(c,{children:[t.jsx($,{size:16}),j?.[i.id]?.length||0]}),t.jsxs(c,{children:[t.jsx(F,{size:16}),b.filter(f=>f===i.id).length]}),t.jsxs(c,{children:["👁",i.views||0]})]})]}),t.jsx(u,{children:t.jsx(h,{size:22})})]}),t.jsxs(Z,{children:[t.jsx(x,{children:"끌어올리기"}),t.jsx(x,{children:"홍보하기"}),t.jsx(u,{children:t.jsx(h,{size:22})})]})]},r))]})]})}export{tt as default};
