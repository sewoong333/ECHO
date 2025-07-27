var r=Object.defineProperty,e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,t=(e,o,a)=>o in e?r(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a;import{r as l,j as s,au as i,J as d,av as c,A as n,m,aw as h}from"./vendor-react-xhcWTtxo.js";import{d as v}from"./vendor-ui-28GTjlMA.js";import{U as x,l as u,d as g}from"./index-czRqZILZ.js";import{j as p,c as j,q as b,o as f,n as y}from"./vendor-firebase-Cl2QMYMN.js";import"./vendor-others-BwC04hQF.js";const w=v.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,N=v.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2rem;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--color-text-secondary);
  }
`,O=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,R=v.div`
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  
  .icon {
    font-size: 2rem;
    color: var(--color-mint-main);
    margin-bottom: 1rem;
  }
  
  .value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }
  
  .label {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
  }
  
  .change {
    font-size: 0.75rem;
    margin-top: 0.5rem;
    
    &.positive {
      color: var(--color-green);
    }
    
    &.negative {
      color: var(--color-red);
    }
  }
`,S=v.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,z=v.div`
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  
  h3 {
    margin-bottom: 1rem;
    color: var(--color-text-primary);
  }
`,A=v.div`
  overflow-x: auto;
`,E=v.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--color-border-light);
  }
  
  th {
    background: var(--color-bg-secondary);
    font-weight: 600;
    color: var(--color-text-primary);
  }
  
  td {
    color: var(--color-text-secondary);
  }
  
  tr:hover {
    background: var(--color-bg-secondary);
  }
`,L=v.div`
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border-light);
  
  .level {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
    margin-right: 0.5rem;
    
    &.ERROR {
      background: var(--color-red);
      color: white;
    }
    
    &.WARN {
      background: var(--color-yellow);
      color: white;
    }
    
    &.INFO {
      background: var(--color-blue);
      color: white;
    }
  }
  
  .message {
    font-size: 0.875rem;
    color: var(--color-text-primary);
    margin-bottom: 0.25rem;
  }
  
  .meta {
    font-size: 0.75rem;
    color: var(--color-text-tertiary);
  }
`,k=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  
  .icon {
    font-size: 4rem;
    color: var(--color-red);
    margin-bottom: 1rem;
  }
  
  h2 {
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--color-text-secondary);
  }
`;function P(){var r,v;const{user:P}=l.useContext(x),[I,U]=l.useState({totalUsers:0,totalProducts:0,totalChats:0,totalViews:0}),[C,D]=l.useState([]),[F,V]=l.useState([]),[W,B]=l.useState(!0),G=(null==(r=null==P?void 0:P.email)?void 0:r.includes("admin"))||(null==(v=null==P?void 0:P.email)?void 0:v.includes("manager"));l.useEffect(()=>{G?H():u.security("Unauthorized admin access attempt",{userId:null==P?void 0:P.uid,email:null==P?void 0:P.email})},[G,P,H]);const H=l.useCallback(()=>{return r=this,l=function*(){try{B(!0);const[r,l]=yield Promise.all([p(j(g,"products")),p(j(g,"users"))]),s=b(j(g,"products"),f("createdAt","desc"),y(10)),i=yield p(s);U({totalUsers:l.size,totalProducts:r.size,totalChats:0,totalViews:r.docs.reduce((r,e)=>r+(e.data().views||0),0)}),D(i.docs.map(r=>((r,l)=>{for(var s in l||(l={}))o.call(l,s)&&t(r,s,l[s]);if(e)for(var s of e(l))a.call(l,s)&&t(r,s,l[s]);return r})({id:r.id},r.data()))),V(u.exportLogs(u.constructor.LEVELS.WARN).slice(-10)),u.userAction("Admin dashboard viewed",{userId:null==P?void 0:P.uid})}catch(r){u.error("Failed to fetch dashboard data",r,"admin")}finally{B(!1)}},new Promise((e,o)=>{var a=r=>{try{s(l.next(r))}catch(e){o(e)}},t=r=>{try{s(l.throw(r))}catch(e){o(e)}},s=r=>r.done?e(r.value):Promise.resolve(r.value).then(a,t);s((l=l.apply(r,null)).next())});var r,l},[null==P?void 0:P.uid]);return P?G?W?s.jsx(w,{children:s.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"데이터를 불러오는 중..."})}):s.jsxs(w,{children:[s.jsxs(N,{children:[s.jsx("h1",{children:"관리자 대시보드"}),s.jsx("p",{children:"ECHO 플랫폼 운영 현황을 확인하세요"})]}),s.jsxs(O,{children:[s.jsxs(R,{children:[s.jsx(c,{className:"icon"}),s.jsx("div",{className:"value",children:I.totalUsers.toLocaleString()}),s.jsx("div",{className:"label",children:"총 사용자 수"})]}),s.jsxs(R,{children:[s.jsx(n,{className:"icon"}),s.jsx("div",{className:"value",children:I.totalProducts.toLocaleString()}),s.jsx("div",{className:"label",children:"등록된 상품 수"})]}),s.jsxs(R,{children:[s.jsx(m,{className:"icon"}),s.jsx("div",{className:"value",children:I.totalChats.toLocaleString()}),s.jsx("div",{className:"label",children:"총 채팅 수"})]}),s.jsxs(R,{children:[s.jsx(h,{className:"icon"}),s.jsx("div",{className:"value",children:I.totalViews.toLocaleString()}),s.jsx("div",{className:"label",children:"총 조회 수"})]})]}),s.jsxs(S,{children:[s.jsxs(z,{children:[s.jsx("h3",{children:"최근 등록된 상품"}),s.jsx(A,{children:s.jsxs(E,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"제목"}),s.jsx("th",{children:"가격"}),s.jsx("th",{children:"판매자"}),s.jsx("th",{children:"등록일"})]})}),s.jsx("tbody",{children:C.map(r=>{var e;return s.jsxs("tr",{children:[s.jsx("td",{children:r.title}),s.jsxs("td",{children:[null==(e=r.price)?void 0:e.toLocaleString(),"원"]}),s.jsx("td",{children:r.sellerId}),s.jsx("td",{children:new Date(r.createdAt).toLocaleDateString()})]},r.id)})})]})})]}),s.jsxs(z,{children:[s.jsx("h3",{children:"최근 시스템 로그"}),s.jsx("div",{style:{maxHeight:"400px",overflowY:"auto"},children:F.map((r,e)=>s.jsx(L,{children:s.jsxs("div",{children:[s.jsx("span",{className:`level ${["ERROR","WARN","INFO","DEBUG"][r.level]}`,children:["ERROR","WARN","INFO","DEBUG"][r.level]}),s.jsx("div",{className:"message",children:r.message}),s.jsxs("div",{className:"meta",children:[new Date(r.timestamp).toLocaleString()," | ",r.category]})]})},e))})]})]})]}):s.jsxs(k,{children:[s.jsx(d,{className:"icon"}),s.jsx("h2",{children:"접근 권한이 없습니다"}),s.jsx("p",{children:"이 페이지는 관리자만 접근할 수 있습니다."})]}):s.jsxs(k,{children:[s.jsx(i,{className:"icon"}),s.jsx("h2",{children:"로그인이 필요합니다"}),s.jsx("p",{children:"관리자 대시보드에 접근하려면 로그인해주세요."})]})}export{P as default};
