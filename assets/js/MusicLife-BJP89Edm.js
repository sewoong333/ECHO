import{r as e,u as r,j as t,ae as n,af as o,P as a,ag as i,s,ah as l}from"./vendor-react-xhcWTtxo.js";import{d}from"./vendor-ui-28GTjlMA.js";import{m as c,T as p}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const x=[{value:"all",label:"전체"},{value:"gear-review",label:"장비 리뷰"},{value:"performance",label:"연주/공연"},{value:"lesson",label:"강습/레슨"},{value:"collaboration",label:"합주/콜라보"},{value:"tips",label:"연주 팁"},{value:"music-share",label:"음악 공유"},{value:"free",label:"자유게시판"}];function u(){const[d,u]=e.useState([]),[B,F]=e.useState(!0),[G,H]=e.useState(""),[I,J]=e.useState("all"),[O,Q]=e.useState("latest"),U=r(),V=e.useCallback(()=>{return e=this,r=function*(){F(!0);try{let e=yield c.getPosts();"all"!==I&&(e=e.filter(e=>e.category===I)),G&&(e=e.filter(e=>e.title.toLowerCase().includes(G.toLowerCase())||e.content.toLowerCase().includes(G.toLowerCase()))),"latest"===O?e.sort((e,r)=>new Date(r.createdAt)-new Date(e.createdAt)):"popular"===O?e.sort((e,r)=>(r.commentCount||0)-(e.commentCount||0)):"views"===O&&e.sort((e,r)=>(r.viewCount||0)-(e.viewCount||0)),u(e)}catch(e){}finally{F(!1)}},new Promise((t,n)=>{var o=e=>{try{i(r.next(e))}catch(t){n(t)}},a=e=>{try{i(r.throw(e))}catch(t){n(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,a);i((r=r.apply(e,null)).next())});var e,r},[I,O,G]);e.useEffect(()=>{V()},[V]);const W=()=>{V()},X=e=>{const r=new Date(e),t=(new Date-r)/36e5;return t<24?`${Math.floor(t)}시간 전`:t<168?`${Math.floor(t/24)}일 전`:r.toLocaleDateString("ko-KR",{month:"short",day:"numeric"})},Z=e=>{const r=x.find(r=>r.value===e);return r?r.label:"자유게시판"};return t.jsxs(h,{children:[t.jsx(p,{}),t.jsxs(g,{children:[t.jsxs(b,{children:[t.jsx("h1",{children:"🎵 음악생활"}),t.jsxs(f,{onClick:()=>U("/musiclife/write"),children:[t.jsx(n,{size:16}),t.jsx("span",{children:"글쓰기"})]})]}),t.jsx("p",{children:"뮤지션들의 소통 공간입니다"})]}),t.jsxs(v,{children:[t.jsxs(m,{children:[t.jsx(j,{type:"text",placeholder:"제목, 내용으로 검색...",value:G,onChange:e=>H(e.target.value),onKeyPress:e=>"Enter"===e.key&&W()}),t.jsx(w,{onClick:W,children:t.jsx(o,{size:18})})]}),t.jsxs(y,{children:[t.jsx(k,{value:I,onChange:e=>J(e.target.value),children:x.map(e=>t.jsx("option",{value:e.value,children:e.label},e.value))}),t.jsxs(C,{value:O,onChange:e=>Q(e.target.value),children:[t.jsx("option",{value:"latest",children:"최신순"}),t.jsx("option",{value:"popular",children:"댓글순"}),t.jsx("option",{value:"views",children:"조회순"})]})]})]}),t.jsx(z,{children:B?t.jsx(R,{children:"게시글을 불러오는 중..."}):0===d.length?t.jsxs(T,{children:[t.jsx("p",{children:"게시글이 없습니다."}),t.jsx(Y,{onClick:()=>U("/musiclife/write"),children:"첫 게시글 작성하기"})]}):d.map(e=>{var r;return t.jsxs(S,{onClick:()=>U(`/musiclife/${e.id}`),children:[t.jsxs(D,{children:[t.jsx(L,{category:e.category,children:Z(e.category)}),t.jsxs(P,{children:[t.jsxs($,{children:[t.jsx(a,{size:12}),t.jsx("span",{children:e.authorName})]}),t.jsxs($,{children:[t.jsx(i,{size:12}),t.jsx("span",{children:X(e.createdAt)})]})]})]}),t.jsx(A,{children:e.title}),t.jsx(E,{children:(null==(r=e.content)?void 0:r.length)>100?`${e.content.substring(0,100)}...`:e.content}),t.jsx(K,{children:t.jsxs(M,{children:[t.jsxs(N,{children:[t.jsx(s,{size:14}),t.jsx("span",{children:e.viewCount||0})]}),t.jsxs(N,{children:[t.jsx(l,{size:14}),t.jsx("span",{children:e.commentCount||0})]})]})})]},e.id)})}),d.length>0&&t.jsx(q,{onClick:V,children:"더 보기"})]})}const h=d.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding-bottom: 80px;
`,g=d.div`
  background: white;
  padding: 24px;
  border-bottom: 1px solid #eee;
  text-align: center;
`,b=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #333;
  }
`,f=d.button`
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
`,v=d.div`
  background: white;
  padding: 20px 24px;
  border-bottom: 1px solid #eee;
`,m=d.div`
  display: flex;
  margin-bottom: 16px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`,j=d.input`
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
`,w=d.button`
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
`,y=d.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`,k=d.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`,C=d.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`,z=d.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`,S=d.div`
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
`,D=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,L=d.span`
  background: ${e=>{switch(e.category){case"gear-review":return"#2ed8b6";case"performance":return"#4ecdc4";case"lesson":return"#45b7d1";case"collaboration":return"#96ceb4";case"tips":return"#ffeaa7";case"music-share":return"#dda0dd";default:return"#95a5a6"}}};
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 500;
`,P=d.div`
  display: flex;
  gap: 12px;
`,$=d.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 12px;
`,A=d.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
`,E=d.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
`,K=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,M=d.div`
  display: flex;
  gap: 16px;
`,N=d.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #999;
  font-size: 13px;
`,R=d.div`
  text-align: center;
  color: #666;
  padding: 40px;
`,T=d.div`
  text-align: center;
  padding: 40px;
  
  p {
    color: #666;
    margin-bottom: 16px;
  }
`,Y=d.button`
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
`,q=d.button`
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
`;export{u as default};
