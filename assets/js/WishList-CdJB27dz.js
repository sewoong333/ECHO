import{u as e,r as i,j as o,Z as r,n as t,k as n,at as s,c as l}from"./vendor-react-xhcWTtxo.js";import{d}from"./vendor-ui-28GTjlMA.js";import{U as a,P as c}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const x=d.div`
  width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
`,p=d.div`
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
`,h=d.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,g=d.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`,f=d.div`
  flex: 1;
  padding: 72px 16px 90px;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
`,j=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  color: #666;
`,u=d.div`
  font-size: 64px;
  color: #ddd;
  margin-bottom: 16px;
`,b=d.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`,m=d.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
`,v=d.button`
  padding: 12px 24px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #26c4a8;
    transform: translateY(-1px);
  }
`,w=d.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`,k=d.div`
  display: flex;
  gap: 12px;
`,y=d.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  background: #f5f5f5;
`,z=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,C=d.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,L=d.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 8px;
`,P=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #666;
`,$=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`,D=d.button`
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  color: #666;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    border-color: #2ed8b6;
    color: #2ed8b6;
  }
  
  &.remove {
    color: #f56565;
    
    &:hover {
      border-color: #f56565;
      background: #fff5f5;
    }
  }
`,E=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  font-size: 14px;
  color: #666;
`;function M(){const d=e(),{user:M}=i.useContext(a),{products:I,toggleLike:S}=i.useContext(c),[U,Y]=i.useState(!0),A=I.filter(e=>e.isLikedByUser);i.useEffect(()=>{!M.loading&&I.length>=0&&Y(!1)},[M.loading,I]),i.useEffect(()=>{M.loading||M.isLoggedIn||d("/login")},[M.loading,M.isLoggedIn,d]);const B=(e,i)=>{return o=this,r=function*(){e.stopPropagation();try{yield S(i)}catch(o){}},new Promise((i,t)=>{var n=i=>{try{l(r.next(i))}catch(e){t(e)}},s=i=>{try{l(r.throw(i))}catch(e){t(e)}},l=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,s);l((r=r.apply(o,null)).next())});var o,r},N=e=>{if(!e)return"";const i=new Date-(e.toDate?e.toDate():new Date(e)),o=Math.floor(i/864e5);return 0===o?"오늘":1===o?"어제":o<7?`${o}일 전`:o<30?`${Math.floor(o/7)}주 전`:`${Math.floor(o/30)}개월 전`};return U?o.jsxs(x,{children:[o.jsxs(p,{children:[o.jsx(h,{onClick:()=>d(-1),children:o.jsx(r,{})}),o.jsx(g,{children:"찜한 상품"}),o.jsx("div",{})]}),o.jsx(E,{children:"로딩 중..."})]}):0===A.length?o.jsxs(x,{children:[o.jsxs(p,{children:[o.jsx(h,{onClick:()=>d(-1),children:o.jsx(r,{})}),o.jsx(g,{children:"찜한 상품"}),o.jsx("div",{})]}),o.jsx(f,{children:o.jsxs(j,{children:[o.jsx(u,{children:o.jsx(t,{})}),o.jsx(b,{children:"찜한 상품이 없어요"}),o.jsxs(m,{children:["마음에 드는 악기를 찾아서",o.jsx("br",{}),"하트 버튼을 눌러보세요!"]}),o.jsx(v,{onClick:()=>d("/"),children:"악기 둘러보기"})]})})]}):o.jsxs(x,{children:[o.jsxs(p,{children:[o.jsx(h,{onClick:()=>d(-1),children:o.jsx(r,{})}),o.jsxs(g,{children:["찜한 상품 (",A.length,")"]}),o.jsx("div",{})]}),o.jsx(f,{children:A.map(e=>{var i,r;return o.jsx(w,{onClick:()=>d(`/product/${e.id}`),children:o.jsxs(k,{children:[o.jsx(y,{src:(null==(i=e.images)?void 0:i[0])||"/placeholder-instrument.jpg",alt:e.title,onError:e=>{e.target.src="/placeholder-instrument.jpg"}}),o.jsxs(z,{children:[o.jsx(C,{children:e.title}),o.jsxs(L,{children:[(r=e.price,(null==r?void 0:r.toLocaleString())||"가격 문의"),"원"]}),o.jsxs(P,{children:[o.jsx("span",{children:e.location||"지역 미설정"}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:[o.jsx(n,{})," ",e.viewCount||0]}),o.jsx("span",{children:"•"}),o.jsx("span",{children:N(e.createdAt)})]}),o.jsxs($,{children:[o.jsxs(D,{onClick:i=>{i.stopPropagation(),d(`/product/${e.id}`)},children:[o.jsx(s,{}),"상품 보기"]}),o.jsxs(D,{className:"remove",onClick:i=>B(i,e.id),children:[o.jsx(l,{}),"찜 해제"]})]})]})]})},e.id)})})]})}export{M as default};
