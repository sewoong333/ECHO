import{r as a,u as S,a8 as z,j as e,T as P,a9 as L,aa as F,f as M,ab as B,e as E,ac as D,i as o}from"./index-CSkq5290.js";const h=[{value:"all",label:"전체"},{value:"gear-review",label:"장비 리뷰"},{value:"performance",label:"연주/공연"},{value:"lesson",label:"강습/레슨"},{value:"collaboration",label:"합주/콜라보"},{value:"tips",label:"연주 팁"},{value:"music-share",label:"음악 공유"},{value:"free",label:"자유게시판"}];function se(){const[i,m]=a.useState([]),[v,u]=a.useState(!0),[c,j]=a.useState(""),[d,w]=a.useState("all"),[l,y]=a.useState("latest"),x=S();a.useEffect(()=>{p()},[d,l]);const p=async()=>{u(!0);try{let n=await z.getPosts();d!=="all"&&(n=n.filter(r=>r.category===d)),c&&(n=n.filter(r=>r.title.toLowerCase().includes(c.toLowerCase())||r.content.toLowerCase().includes(c.toLowerCase()))),l==="latest"?n.sort((r,s)=>new Date(s.createdAt)-new Date(r.createdAt)):l==="popular"?n.sort((r,s)=>(s.commentCount||0)-(r.commentCount||0)):l==="views"&&n.sort((r,s)=>(s.viewCount||0)-(r.viewCount||0)),m(n)}catch(t){console.error("게시글 로딩 실패:",t)}finally{u(!1)}},g=()=>{p()},C=t=>{const n=new Date(t),s=(new Date-n)/(1e3*60*60);return s<24?`${Math.floor(s)}시간 전`:s<24*7?`${Math.floor(s/24)}일 전`:n.toLocaleDateString("ko-KR",{month:"short",day:"numeric"})},k=t=>{const n=h.find(r=>r.value===t);return n?n.label:"자유게시판"};return e.jsxs(T,{children:[e.jsx(P,{}),e.jsxs($,{children:[e.jsxs(H,{children:[e.jsx("h1",{children:"🎵 음악생활"}),e.jsxs(I,{onClick:()=>x("/musiclife/write"),children:[e.jsx(L,{size:16}),e.jsx("span",{children:"글쓰기"})]})]}),e.jsx("p",{children:"뮤지션들의 소통 공간입니다"})]}),e.jsxs(A,{children:[e.jsxs(K,{children:[e.jsx(N,{type:"text",placeholder:"제목, 내용으로 검색...",value:c,onChange:t=>j(t.target.value),onKeyPress:t=>t.key==="Enter"&&g()}),e.jsx(R,{onClick:g,children:e.jsx(F,{size:18})})]}),e.jsxs(U,{children:[e.jsx(W,{value:d,onChange:t=>w(t.target.value),children:h.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))}),e.jsxs(Y,{value:l,onChange:t=>y(t.target.value),children:[e.jsx("option",{value:"latest",children:"최신순"}),e.jsx("option",{value:"popular",children:"댓글순"}),e.jsx("option",{value:"views",children:"조회순"})]})]})]}),e.jsx(q,{children:v?e.jsx(ee,{children:"게시글을 불러오는 중..."}):i.length===0?e.jsxs(te,{children:[e.jsx("p",{children:"게시글이 없습니다."}),e.jsx(oe,{onClick:()=>x("/musiclife/write"),children:"첫 게시글 작성하기"})]}):i.map(t=>{var n;return e.jsxs(G,{onClick:()=>x(`/musiclife/${t.id}`),children:[e.jsxs(J,{children:[e.jsx(O,{category:t.category,children:k(t.category)}),e.jsxs(Q,{children:[e.jsxs(b,{children:[e.jsx(M,{size:12}),e.jsx("span",{children:t.authorName})]}),e.jsxs(b,{children:[e.jsx(B,{size:12}),e.jsx("span",{children:C(t.createdAt)})]})]})]}),e.jsx(V,{children:t.title}),e.jsx(X,{children:((n=t.content)==null?void 0:n.length)>100?`${t.content.substring(0,100)}...`:t.content}),e.jsx(Z,{children:e.jsxs(_,{children:[e.jsxs(f,{children:[e.jsx(E,{size:14}),e.jsx("span",{children:t.viewCount||0})]}),e.jsxs(f,{children:[e.jsx(D,{size:14}),e.jsx("span",{children:t.commentCount||0})]})]})})]},t.id)})}),i.length>0&&e.jsx(ne,{onClick:p,children:"더 보기"})]})}const T=o.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding-bottom: 80px;
`,$=o.div`
  background: white;
  padding: 24px;
  border-bottom: 1px solid #eee;
  text-align: center;
`,H=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #333;
  }
`,I=o.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
`,A=o.div`
  background: white;
  padding: 20px 24px;
  border-bottom: 1px solid #eee;
`,K=o.div`
  display: flex;
  margin-bottom: 16px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`,N=o.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-right: none;
  border-radius: 8px 0 0 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`,R=o.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  padding: 0 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
`,U=o.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`,W=o.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`,Y=o.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`,q=o.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`,G=o.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }
`,J=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,O=o.span`
  background: ${i=>{switch(i.category){case"gear-review":return"#2ed8b6";case"performance":return"#4ecdc4";case"lesson":return"#45b7d1";case"collaboration":return"#96ceb4";case"tips":return"#ffeaa7";case"music-share":return"#dda0dd";default:return"#95a5a6"}}};
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 500;
`,Q=o.div`
  display: flex;
  gap: 12px;
`,b=o.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 12px;
`,V=o.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
`,X=o.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
`,Z=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_=o.div`
  display: flex;
  gap: 16px;
`,f=o.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #999;
  font-size: 13px;
`,ee=o.div`
  text-align: center;
  color: #666;
  padding: 40px;
`,te=o.div`
  text-align: center;
  padding: 40px;
  
  p {
    color: #666;
    margin-bottom: 16px;
  }
`,oe=o.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
`,ne=o.button`
  display: block;
  margin: 20px auto;
  background: transparent;
  color: #2ed8b6;
  border: 2px solid #2ed8b6;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #2ed8b6;
    color: white;
  }
`;export{se as default};
