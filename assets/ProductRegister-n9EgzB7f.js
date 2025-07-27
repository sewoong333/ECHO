import{r as s,u as H,U as O,j as e,T as I,k as X,l as Y,m as $,n as q,p as J,i as o}from"./index-DGNRr8H-.js";const K=[{value:"guitar",label:"기타"},{value:"bass",label:"베이스"},{value:"drums",label:"드럼"},{value:"keyboard",label:"키보드/피아노"},{value:"violin",label:"바이올린"},{value:"saxophone",label:"색소폰"},{value:"amplifier",label:"앰프"},{value:"effects",label:"이펙터"},{value:"accessories",label:"액세서리"},{value:"other",label:"기타"}],Q=[{value:"new",label:"새 제품"},{value:"like-new",label:"거의 새 제품"},{value:"good",label:"양호"},{value:"fair",label:"보통"},{value:"poor",label:"수리 필요"}];function ue(){const[u,L]=s.useState(""),[d,F]=s.useState(""),[p,R]=s.useState(""),[x,T]=s.useState(""),[g,B]=s.useState(""),[h,E]=s.useState(""),[c,S]=s.useState([]),[b,y]=s.useState([]),[z,C]=s.useState(!1),[A,D]=s.useState(!1),m=H(),{user:i}=s.useContext(O);s.useEffect(()=>{!i.loading&&!i.isLoggedIn&&(alert("상품 등록을 위해 로그인이 필요합니다."),m("/login"))},[i.loading,i.isLoggedIn,m]);const M=t=>{const r=Array.from(t.target.files);if(r.length+c.length>10){alert("최대 10장까지만 업로드할 수 있습니다.");return}const n=[...c,...r],f=[...b,...r.map(v=>URL.createObjectURL(v))];S(n),y(f)},N=t=>{S(c.filter((r,n)=>n!==t)),y(b.filter((r,n)=>n!==t))},G=()=>u.length<2?"제목을 2글자 이상 입력해주세요.":!d||Number(d)<1e3?"가격을 1,000원 이상 입력해주세요.":p.length<10?"상품 설명을 10글자 이상 입력해주세요.":x?g?h.trim()?null:"거래 지역을 입력해주세요.":"상품 상태를 선택해주세요.":"카테고리를 선택해주세요.",_=async t=>{t.preventDefault();const r=G();if(r){alert(r);return}C(!0);try{if(!(i!=null&&i.uid))throw new Error("로그인이 필요합니다.");const n=[];for(const f of c){const v=await q.uploadProductImage(f,i.uid);n.push(v.url)}await J.createProduct({title:u,price:Number(d),description:p,category:x,condition:g,location:h,images:n,createdAt:new Date,sellerId:i.uid,status:"active",views:0,likes:0},i.uid),D(!0),setTimeout(()=>{m("/")},1500)}catch(n){console.error("상품 등록 실패:",n),alert("상품 등록 실패: "+n.message)}finally{C(!1)}};return A?e.jsxs(P,{children:[e.jsx(I,{}),e.jsxs(de,{children:[e.jsx(X,{size:48,color:"#2ed8b6"}),e.jsx("h2",{children:"상품이 성공적으로 등록되었습니다!"}),e.jsx("p",{children:"잠시 후 메인 페이지로 이동합니다."})]})]}):e.jsxs(P,{children:[e.jsx(I,{}),e.jsxs(V,{children:[e.jsx("h1",{children:"상품 등록"}),e.jsx("p",{children:"판매하실 악기 정보를 입력해주세요"})]}),e.jsxs(W,{onSubmit:_,children:[e.jsxs(j,{children:[e.jsx(w,{children:"기본 정보"}),e.jsxs(a,{children:[e.jsx(l,{children:"상품명 *"}),e.jsx(k,{value:u,onChange:t=>L(t.target.value),placeholder:"예: Gibson Les Paul Standard"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"가격 *"}),e.jsxs(te,{children:[e.jsx(k,{value:d,onChange:t=>F(t.target.value.replace(/[^0-9]/g,"")),placeholder:"예: 1500000",type:"text"}),e.jsx(oe,{children:"원"})]})]}),e.jsxs(a,{children:[e.jsx(l,{children:"카테고리 *"}),e.jsxs(U,{value:x,onChange:t=>T(t.target.value),children:[e.jsx("option",{value:"",children:"카테고리를 선택하세요"}),K.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))]})]}),e.jsxs(a,{children:[e.jsx(l,{children:"상품 상태 *"}),e.jsxs(U,{value:g,onChange:t=>B(t.target.value),children:[e.jsx("option",{value:"",children:"상태를 선택하세요"}),Q.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))]})]}),e.jsxs(a,{children:[e.jsx(l,{children:"거래 지역 *"}),e.jsx(k,{value:h,onChange:t=>E(t.target.value),placeholder:"예: 서울 강남구"})]})]}),e.jsxs(j,{children:[e.jsx(w,{children:"상품 설명"}),e.jsxs(a,{children:[e.jsx(l,{children:"상세 설명 *"}),e.jsx(Z,{value:p,onChange:t=>R(t.target.value),placeholder:"상품의 상태, 구매 시기, 사용 빈도 등을 자세히 적어주세요.",rows:6}),e.jsxs(ee,{children:[p.length,"/1000"]})]})]}),e.jsxs(j,{children:[e.jsx(w,{children:"상품 이미지"}),e.jsxs(re,{children:[e.jsxs(se,{children:[e.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:M,id:"image-upload",style:{display:"none"}}),e.jsxs("label",{htmlFor:"image-upload",children:[e.jsx(Y,{size:24}),e.jsx("span",{children:"사진 추가"}),e.jsxs("small",{children:[c.length,"/10"]})]})]}),e.jsx(ne,{children:b.map((t,r)=>e.jsxs(ie,{children:[e.jsx("img",{src:t,alt:`미리보기 ${r+1}`}),e.jsx(ae,{onClick:()=>N(r),children:e.jsx($,{size:16})}),r===0&&e.jsx(le,{children:"대표"})]},r))})]})]}),e.jsx(ce,{type:"submit",disabled:z,children:z?"등록 중...":"상품 등록하기"})]})]})}const P=o.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding-bottom: 80px;
`,V=o.div`
  background: white;
  padding: 24px;
  border-bottom: 1px solid #eee;
  text-align: center;
  
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
  }
  
  p {
    color: #666;
    font-size: 14px;
  }
`,W=o.form`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;
`,j=o.div`
  background: white;
  margin: 16px 0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
`,w=o.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #2ed8b6;
`,a=o.div`
  margin-bottom: 20px;
`,l=o.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`,k=o.input`
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
`,U=o.select`
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
`,Z=o.textarea`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
  
  &::placeholder {
    color: #999;
  }
`,ee=o.div`
  font-size: 12px;
  color: #999;
  text-align: right;
  margin-top: 4px;
`,te=o.div`
  position: relative;
`,oe=o.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 16px;
`,re=o.div`
  margin-top: 12px;
`,se=o.div`
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
`,ne=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
`,ie=o.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,ae=o.button`
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
`,le=o.span`
  position: absolute;
  bottom: 4px;
  left: 4px;
  background: #2ed8b6;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
`,ce=o.button`
  width: 100%;
  max-width: 600px;
  margin: 32px auto 0;
  display: block;
  padding: 16px 24px;
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
`,de=o.div`
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
`;export{ue as default};
