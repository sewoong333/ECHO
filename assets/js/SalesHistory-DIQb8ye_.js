var e=Object.defineProperty,i=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(i,t,r)=>t in i?e(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r;import{u as o,r as s,j as a,am as l,ah as d,an as x,ao as c}from"./vendor-react-xhcWTtxo.js";import{d as p}from"./vendor-ui-28GTjlMA.js";import{U as f,P as h,T as g,d as m}from"./index-czRqZILZ.js";import{q as b,c as u,w as j,o as v,j as w}from"./vendor-firebase-Cl2QMYMN.js";import"./vendor-others-BwC04hQF.js";const y=p.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
`,z=p.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 18px 0 18px;
`,$=p.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #222;
  cursor: pointer;
  margin-right: 8px;
`,k=p.div`
  font-size: 22px;
  font-weight: 800;
  color: #222;
  flex: 1;
`,C=p.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 8px;
`;p.button`
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
`,p.div`
  display: flex;
  align-items: center;
  margin: 18px 0 0 0;
  width: 100%;
  max-width: 480px;
  border-bottom: 1.5px solid #eee;
`,p.div`
  flex: 1;
  text-align: center;
  font-size: 17px;
  font-weight: ${({$active:e})=>e?800:600};
  color: ${({$active:e})=>e?"#222":"#bbb"};
  padding-bottom: 12px;
  border-bottom: ${({$active:e})=>e?"2.5px solid #222":"none"};
  cursor: pointer;
`;const O=p.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  padding: 12px 18px 0 18px;
`;p.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`,p.label`
  font-size: 16px;
  color: #222;
  font-weight: 500;
`;const P=p.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 8px;
`,S=p.div`
  display: flex;
  align-items: flex-start;
  padding: 18px 0 0 0;
  border-bottom: 1.5px solid #f2f2f2;
`,A=p.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;
  object-fit: cover;
  margin-left: 18px;
  margin-right: 16px;
`,E=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,I=p.div`
  font-size: 17px;
  font-weight: 700;
  color: #222;
  margin-bottom: 6px;
  margin-top: 2px;
  line-height: 1.3;
`,K=p.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 2px;
`,L=p.div`
  font-size: 18px;
  font-weight: 800;
  color: #222;
  margin-bottom: 2px;
`,R=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2px;
`,T=p.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #bbb;
  gap: 3px;
`,q=p.div`
  display: flex;
  gap: 10px;
  margin: 14px 0 18px 124px;
`,N=p.button`
  flex: 1;
  background: #f7f8fa;
  color: #222;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: 13px 0;
  cursor: pointer;
`,Q=p(N)`
  width: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,U=p.button`
  background: ${({$active:e})=>e?"#222":"none"};
  color: ${({$active:e})=>e?"#fff":"#222"};
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 7px 18px;
  margin: 0;
  cursor: pointer;
  align-self: flex-start;
`;function B(){const e=o(),{user:p}=s.useContext(f),{likes:B,chatRooms:D}=s.useContext(h),[F,G]=s.useState([]),[H,J]=s.useState(!0),[M,V]=s.useState("all");s.useEffect(()=>{p.isLoggedIn&&(()=>{return e=this,o=function*(){try{const e=b(u(m,"products"),j("author","==",p.nickname),v("createdAt","desc")),o=(yield w(e)).docs.map(e=>((e,o)=>{for(var s in o||(o={}))t.call(o,s)&&n(e,s,o[s]);if(i)for(var s of i(o))r.call(o,s)&&n(e,s,o[s]);return e})({id:e.id},e.data()));G(o)}catch(e){}finally{J(!1)}},new Promise((i,t)=>{var r=e=>{try{s(o.next(e))}catch(i){t(i)}},n=e=>{try{s(o.throw(e))}catch(i){t(i)}},s=e=>e.done?i(e.value):Promise.resolve(e.value).then(r,n);s((o=o.apply(e,null)).next())});var e,o})()},[p]);const W=F.filter(e=>"all"===M||("active"===M?!e.sold:"sold"!==M||e.sold));return H?a.jsxs(y,{children:[a.jsx(g,{}),a.jsx("div",{style:{textAlign:"center",padding:"40px 0"},children:"로딩중..."})]}):a.jsxs(y,{children:[a.jsxs(z,{children:[a.jsx($,{onClick:()=>e(-1),children:a.jsx(l,{})}),a.jsx(k,{children:"판매내역"}),a.jsx(C,{src:"https://i.ibb.co/3y0Qw1K/profile-demo.jpg",alt:"profile"})]}),a.jsxs(O,{children:[a.jsx(U,{$active:"all"===M,onClick:()=>V("all"),children:"전체"}),a.jsx(U,{$active:"active"===M,onClick:()=>V("active"),children:"판매중"}),a.jsx(U,{$active:"sold"===M,onClick:()=>V("sold"),children:"판매완료"})]}),a.jsxs(P,{children:[0===W.length&&a.jsx("div",{style:{color:"#bbb",textAlign:"center",marginTop:40},children:"상품이 없습니다."}),W.map((e,i)=>{var t;return a.jsxs("div",{children:[a.jsxs(S,{children:[a.jsx(A,{src:e.image||"https://via.placeholder.com/90",alt:"썸네일"}),a.jsxs(E,{children:[a.jsx(I,{children:e.title}),a.jsxs(K,{children:[e.location," · ",e.time||"방금 전"]}),a.jsxs(L,{children:[Number(e.price).toLocaleString("ko-KR"),"원"]}),a.jsxs(R,{children:[a.jsxs(T,{children:[a.jsx(d,{size:16}),(null==(t=null==D?void 0:D[e.id])?void 0:t.length)||0]}),a.jsxs(T,{children:[a.jsx(x,{size:16}),B.filter(i=>i===e.id).length]}),a.jsxs(T,{children:["👁",e.views||0]})]})]}),a.jsx(Q,{children:a.jsx(c,{size:22})})]}),a.jsxs(q,{children:[a.jsx(N,{children:"끌어올리기"}),a.jsx(N,{children:"홍보하기"}),a.jsx(Q,{children:a.jsx(c,{size:22})})]})]},i)})]})]})}export{B as default};
