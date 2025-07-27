import{r as e,u as r,j as o,X as i,ai as t,aj as n,ak as s}from"./vendor-react-xhcWTtxo.js";import{d as a}from"./vendor-ui-28GTjlMA.js";import{U as l,T as d,i as c,m as p}from"./index-czRqZILZ.js";import{L as x}from"./LocationPicker-DMFna4R7.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const h=[{value:"gear-review",label:"장비 리뷰"},{value:"performance",label:"연주/공연"},{value:"lesson",label:"강습/레슨"},{value:"collaboration",label:"합주/콜라보"},{value:"tips",label:"연주 팁"},{value:"music-share",label:"음악 공유"},{value:"free",label:"자유게시판"}];function u(){const[a,u]=e.useState(""),[O,X]=e.useState(""),[$,q]=e.useState("free"),[B,G]=e.useState(null),[H,J]=e.useState([]),[K,M]=e.useState([]),[Q,V]=e.useState(!1),[W,Y]=e.useState(!1),{user:Z}=e.useContext(l),_=r();return W?o.jsxs(g,{children:[o.jsx(d,{}),o.jsxs(F,{children:[o.jsx(i,{size:48,color:"#2ed8b6"}),o.jsx("h2",{children:"게시글이 성공적으로 작성되었습니다!"}),o.jsx("p",{children:"잠시 후 게시판으로 이동합니다."})]})]}):o.jsxs(g,{children:[o.jsx(d,{}),o.jsxs(b,{children:[o.jsxs(f,{children:[o.jsx(m,{onClick:()=>_("/musiclife"),children:o.jsx(t,{size:20})}),o.jsx("h1",{children:"게시글 작성"}),o.jsx("div",{})]}),o.jsx("p",{children:"음악과 관련된 이야기를 자유롭게 나눠보세요"})]}),o.jsxs(j,{onSubmit:e=>{return r=this,o=function*(){e.preventDefault();const r=a.length<2?"제목을 2글자 이상 입력해주세요.":O.length<10?"내용을 10글자 이상 입력해주세요.":$?null:"카테고리를 선택해주세요.";if(r)alert(r);else{V(!0);try{if(!(null==Z?void 0:Z.uid))throw new Error("로그인이 필요합니다.");const e=[];for(const r of H){const o=yield c.uploadProductImage(r,Z.uid);e.push(o.url)}yield p.createPost({title:a,content:O,category:$,location:B?{name:B.name,address:B.address,roadAddress:B.roadAddress,coordinates:{lat:B.y,lng:B.x}}:null,images:e,authorId:Z.uid,authorName:Z.nickname||Z.displayName||"익명",createdAt:new Date,viewCount:0,commentCount:0,likes:0}),Y(!0),setTimeout(()=>{_("/musiclife")},1500)}catch(o){alert("게시글 작성 실패: "+o.message)}finally{V(!1)}}},new Promise((i,t)=>{var n=r=>{try{a(o.next(r))}catch(e){t(e)}},s=r=>{try{a(o.throw(r))}catch(e){t(e)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,s);a((o=o.apply(r,null)).next())});var r,o},children:[o.jsxs(v,{children:[o.jsx(w,{children:"기본 정보"}),o.jsxs(y,{children:[o.jsx(k,{children:"카테고리 *"}),o.jsx(C,{value:$,onChange:e=>q(e.target.value),children:h.map(e=>o.jsx("option",{value:e.value,children:e.label},e.value))})]}),o.jsxs(y,{children:[o.jsx(k,{children:"제목 *"}),o.jsx(z,{type:"text",value:a,onChange:e=>u(e.target.value),placeholder:"제목을 입력하세요",maxLength:100}),o.jsxs(L,{children:[a.length,"/100"]})]})]}),o.jsxs(v,{children:[o.jsx(w,{children:"위치 정보"}),o.jsxs(y,{children:[o.jsx(k,{children:"위치 (선택사항)"}),o.jsx(x,{value:B,onChange:G,placeholder:"모임 장소나 관련 위치를 선택해주세요"}),o.jsx(P,{children:"연주/공연, 강습/레슨, 합주/콜라보 등의 경우 위치 정보를 추가하면 더 많은 사람들이 찾을 수 있어요"})]})]}),o.jsxs(v,{children:[o.jsx(w,{children:"내용"}),o.jsxs(y,{children:[o.jsx(k,{children:"본문 *"}),o.jsx(S,{value:O,onChange:e=>X(e.target.value),placeholder:"내용을 입력하세요\n\n• 음악 관련 정보나 경험을 공유해주세요\n• 서로 존중하는 마음으로 소통해주세요\n• 상업적 홍보는 자제해주세요",rows:12,maxLength:2e3}),o.jsxs(L,{children:[O.length,"/2000"]})]})]}),o.jsxs(v,{children:[o.jsx(w,{children:"이미지 첨부"}),o.jsxs(A,{children:[o.jsxs(U,{children:[o.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:e=>{const r=Array.from(e.target.files);if(r.length+H.length>5)return void alert("최대 5장까지만 업로드할 수 있습니다.");const o=[...H,...r],i=[...K,...r.map(e=>URL.createObjectURL(e))];J(o),M(i)},id:"image-upload",style:{display:"none"}}),o.jsxs("label",{htmlFor:"image-upload",children:[o.jsx(n,{size:24}),o.jsx("span",{children:"사진 추가"}),o.jsxs("small",{children:[H.length,"/5"]})]})]}),K.length>0&&o.jsx(D,{children:K.map((e,r)=>o.jsxs(I,{children:[o.jsx("img",{src:e,alt:`첨부 이미지 ${r+1}`}),o.jsx(N,{onClick:()=>(e=>{J(H.filter((r,o)=>o!==e)),M(K.filter((r,o)=>o!==e))})(r),children:o.jsx(s,{size:16})})]},r))})]})]}),o.jsxs(R,{children:[o.jsx(T,{type:"button",onClick:()=>_("/musiclife"),children:"취소"}),o.jsx(E,{type:"submit",disabled:Q,children:Q?"작성 중...":"게시글 작성"})]})]})]})}const g=a.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding-bottom: 80px;
`,b=a.div`
  background: white;
  padding: 24px;
  border-bottom: 1px solid #eee;
`,f=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  h1 {
    font-size: 22px;
    font-weight: 700;
    color: #333;
  }
`,m=a.button`
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
`,j=a.form`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`,v=a.div`
  background: white;
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
`,w=a.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #2ed8b6;
`,y=a.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,k=a.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`,z=a.input`
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
`,C=a.select`
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
`,S=a.textarea`
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
`,L=a.div`
  font-size: 12px;
  color: #999;
  text-align: right;
  margin-top: 4px;
`,P=a.div`
  font-size: 13px;
  color: #666;
  margin-top: 8px;
  line-height: 1.4;
`,A=a.div`
  margin-top: 12px;
`,U=a.div`
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
`,D=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
`,I=a.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,N=a.button`
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
`,R=a.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 32px;
`,T=a.button`
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
`,E=a.button`
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
`,F=a.div`
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
`;export{u as default};
