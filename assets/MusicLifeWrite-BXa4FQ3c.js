import{r as s,U as A,u as E,j as e,T as y,k as M,ae as N,l as D,m as H,n as _,a9 as G,i as t}from"./index-C0jD-Qlp.js";const O=[{value:"gear-review",label:"장비 리뷰"},{value:"performance",label:"연주/공연"},{value:"lesson",label:"강습/레슨"},{value:"collaboration",label:"합주/콜라보"},{value:"tips",label:"연주 팁"},{value:"music-share",label:"음악 공유"},{value:"free",label:"자유게시판"}];function ae(){const[l,z]=s.useState(""),[c,I]=s.useState(""),[p,U]=s.useState("free"),[a,j]=s.useState([]),[d,v]=s.useState([]),[w,k]=s.useState(!1),[L,B]=s.useState(!1),{user:i}=s.useContext(A),x=E(),F=o=>{const r=Array.from(o.target.files);if(r.length+a.length>5){alert("최대 5장까지만 업로드할 수 있습니다.");return}const n=[...a,...r],u=[...d,...r.map(g=>URL.createObjectURL(g))];j(n),v(u)},T=o=>{j(a.filter((r,n)=>n!==o)),v(d.filter((r,n)=>n!==o))},P=()=>l.length<2?"제목을 2글자 이상 입력해주세요.":c.length<10?"내용을 10글자 이상 입력해주세요.":p?null:"카테고리를 선택해주세요.",R=async o=>{o.preventDefault();const r=P();if(r){alert(r);return}k(!0);try{if(!(i!=null&&i.uid))throw new Error("로그인이 필요합니다.");const n=[];for(const u of a){const g=await _.uploadProductImage(u,i.uid);n.push(g.url)}await G.createPost({title:l,content:c,category:p,images:n,authorId:i.uid,authorName:i.nickname||i.displayName||"익명",createdAt:new Date,viewCount:0,commentCount:0,likes:0}),B(!0),setTimeout(()=>{x("/musiclife")},1500)}catch(n){console.error("게시글 작성 실패:",n),alert("게시글 작성 실패: "+n.message)}finally{k(!1)}};return L?e.jsxs(C,{children:[e.jsx(y,{}),e.jsxs(se,{children:[e.jsx(M,{size:48,color:"#2ed8b6"}),e.jsx("h2",{children:"게시글이 성공적으로 작성되었습니다!"}),e.jsx("p",{children:"잠시 후 게시판으로 이동합니다."})]})]}):e.jsxs(C,{children:[e.jsx(y,{}),e.jsxs(W,{children:[e.jsxs(X,{children:[e.jsx($,{onClick:()=>x("/musiclife"),children:e.jsx(N,{size:20})}),e.jsx("h1",{children:"게시글 작성"}),e.jsx("div",{})]}),e.jsx("p",{children:"음악과 관련된 이야기를 자유롭게 나눠보세요"})]}),e.jsxs(q,{onSubmit:R,children:[e.jsxs(h,{children:[e.jsx(b,{children:"기본 정보"}),e.jsxs(f,{children:[e.jsx(m,{children:"카테고리 *"}),e.jsx(K,{value:p,onChange:o=>U(o.target.value),children:O.map(o=>e.jsx("option",{value:o.value,children:o.label},o.value))})]}),e.jsxs(f,{children:[e.jsx(m,{children:"제목 *"}),e.jsx(J,{type:"text",value:l,onChange:o=>z(o.target.value),placeholder:"제목을 입력하세요",maxLength:100}),e.jsxs(S,{children:[l.length,"/100"]})]})]}),e.jsxs(h,{children:[e.jsx(b,{children:"내용"}),e.jsxs(f,{children:[e.jsx(m,{children:"본문 *"}),e.jsx(Q,{value:c,onChange:o=>I(o.target.value),placeholder:`내용을 입력하세요

• 음악 관련 정보나 경험을 공유해주세요
• 서로 존중하는 마음으로 소통해주세요
• 상업적 홍보는 자제해주세요`,rows:12,maxLength:2e3}),e.jsxs(S,{children:[c.length,"/2000"]})]})]}),e.jsxs(h,{children:[e.jsx(b,{children:"이미지 첨부"}),e.jsxs(V,{children:[e.jsxs(Y,{children:[e.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:F,id:"image-upload",style:{display:"none"}}),e.jsxs("label",{htmlFor:"image-upload",children:[e.jsx(D,{size:24}),e.jsx("span",{children:"사진 추가"}),e.jsxs("small",{children:[a.length,"/5"]})]})]}),d.length>0&&e.jsx(Z,{children:d.map((o,r)=>e.jsxs(ee,{children:[e.jsx("img",{src:o,alt:`첨부 이미지 ${r+1}`}),e.jsx(te,{onClick:()=>T(r),children:e.jsx(H,{size:16})})]},r))})]})]}),e.jsxs(oe,{children:[e.jsx(re,{type:"button",onClick:()=>x("/musiclife"),children:"취소"}),e.jsx(ne,{type:"submit",disabled:w,children:w?"작성 중...":"게시글 작성"})]})]})]})}const C=t.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding-bottom: 80px;
`,W=t.div`
  background: white;
  padding: 24px;
  border-bottom: 1px solid #eee;
`,X=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  h1 {
    font-size: 22px;
    font-weight: 700;
    color: #333;
  }
`,$=t.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s ease;
  
  &:hover {
    background: #f0f0f0;
  }
`,q=t.form`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`,h=t.div`
  background: white;
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
`,b=t.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #2ed8b6;
`,f=t.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,m=t.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`,J=t.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
  
  &::placeholder {
    color: #999;
  }
`,K=t.select`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`,Q=t.textarea`
  width: 100%;
  padding: 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  transition: border-color 0.2s ease;
  line-height: 1.6;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
  
  &::placeholder {
    color: #999;
    line-height: 1.6;
  }
`,S=t.div`
  font-size: 12px;
  color: #999;
  text-align: right;
  margin-top: 4px;
`,V=t.div`
  margin-top: 12px;
`,Y=t.div`
  margin-bottom: 16px;
  
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
    border: 2px dashed #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #fafafa;
    
    &:hover {
      border-color: #2ed8b6;
      background: #f0fffe;
    }
    
    span {
      margin-top: 8px;
      font-size: 14px;
      color: #666;
    }
    
    small {
      margin-top: 4px;
      font-size: 12px;
      color: #999;
    }
  }
`,Z=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
`,ee=t.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,te=t.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(0,0,0,0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(0,0,0,0.9);
  }
`,oe=t.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 32px;
`,re=t.button`
  padding: 14px 24px;
  background: #f8f9fa;
  color: #666;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e9ecef;
    color: #333;
  }
`,ne=t.button`
  padding: 14px 24px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover:not(:disabled) {
    background: #26c4a8;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,se=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  
  h2 {
    margin: 16px 0 8px;
    color: #333;
    font-size: 20px;
  }
  
  p {
    color: #666;
    font-size: 14px;
  }
`;export{ae as default};
