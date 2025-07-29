import{u as I,r as l,U as z,P as E,j as e,y as x,R as L,K as P,V as D,q as F,i as n}from"./index-CGuM-vkb.js";const p=n.div`
  width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
`,h=n.div`
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
`,f=n.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`,g=n.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`,j=n.div`
  flex: 1;
  padding: 72px 16px 90px;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
`,A=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  color: #666;
`,B=n.div`
  font-size: 64px;
  color: #ddd;
  margin-bottom: 16px;
`,M=n.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`,T=n.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
`,$=n.button`
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
`,R=n.div`
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
`,S=n.div`
  display: flex;
  gap: 12px;
`,U=n.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  background: #f5f5f5;
`,W=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,H=n.h3`
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
`,N=n.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 8px;
`,Y=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #666;
`,q=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`,m=n.button`
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
`,K=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  font-size: 14px;
  color: #666;
`;function X(){const i=I(),{user:r}=l.useContext(z),{products:c,toggleLike:u}=l.useContext(E),[b,v]=l.useState(!0),d=c.filter(t=>t.isLikedByUser);l.useEffect(()=>{!r.loading&&c.length>=0&&v(!1)},[r.loading,c]),l.useEffect(()=>{!r.loading&&!r.isLoggedIn&&i("/login")},[r.loading,r.isLoggedIn,i]);const w=async(t,a)=>{t.stopPropagation();try{await u(a)}catch(o){console.error("찜 해제 실패:",o)}},k=t=>(t==null?void 0:t.toLocaleString())||"가격 문의",y=t=>{if(!t)return"";const a=new Date,o=t.toDate?t.toDate():new Date(t),C=a-o,s=Math.floor(C/(1e3*60*60*24));return s===0?"오늘":s===1?"어제":s<7?`${s}일 전`:s<30?`${Math.floor(s/7)}주 전`:`${Math.floor(s/30)}개월 전`};return b?e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(f,{onClick:()=>i(-1),children:e.jsx(x,{})}),e.jsx(g,{children:"찜한 상품"}),e.jsx("div",{})]}),e.jsx(K,{children:"로딩 중..."})]}):d.length===0?e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(f,{onClick:()=>i(-1),children:e.jsx(x,{})}),e.jsx(g,{children:"찜한 상품"}),e.jsx("div",{})]}),e.jsx(j,{children:e.jsxs(A,{children:[e.jsx(B,{children:e.jsx(L,{})}),e.jsx(M,{children:"찜한 상품이 없어요"}),e.jsxs(T,{children:["마음에 드는 악기를 찾아서",e.jsx("br",{}),"하트 버튼을 눌러보세요!"]}),e.jsx($,{onClick:()=>i("/"),children:"악기 둘러보기"})]})})]}):e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(f,{onClick:()=>i(-1),children:e.jsx(x,{})}),e.jsxs(g,{children:["찜한 상품 (",d.length,")"]}),e.jsx("div",{})]}),e.jsx(j,{children:d.map(t=>{var a;return e.jsx(R,{onClick:()=>i(`/product/${t.id}`),children:e.jsxs(S,{children:[e.jsx(U,{src:((a=t.images)==null?void 0:a[0])||"/placeholder-instrument.jpg",alt:t.title,onError:o=>{o.target.src="/placeholder-instrument.jpg"}}),e.jsxs(W,{children:[e.jsx(H,{children:t.title}),e.jsxs(N,{children:[k(t.price),"원"]}),e.jsxs(Y,{children:[e.jsx("span",{children:t.location||"지역 미설정"}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx(P,{})," ",t.viewCount||0]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:y(t.createdAt)})]}),e.jsxs(q,{children:[e.jsxs(m,{onClick:o=>{o.stopPropagation(),i(`/product/${t.id}`)},children:[e.jsx(D,{}),"상품 보기"]}),e.jsxs(m,{className:"remove",onClick:o=>w(o,t.id),children:[e.jsx(F,{}),"찜 해제"]})]})]})]})},t.id)})})]})}export{X as default};
