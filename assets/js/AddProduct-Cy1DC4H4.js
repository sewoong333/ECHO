var e=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,d=(i,r,t)=>r in i?e(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,s=(e,i)=>{for(var r in i||(i={}))o.call(i,r)&&d(e,r,i[r]);if(t)for(var r of t(i))n.call(i,r)&&d(e,r,i[r]);return e},l=(e,t)=>i(e,r(t));import{u as a,r as c,j as p,c as x,T as h,J as g,e as b}from"./vendor-react-xhcWTtxo.js";import{d as f}from"./vendor-ui-28GTjlMA.js";import{P as u,U as m,I as j,a as v}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const y=f.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  box-sizing: border-box;
`,w=f.div`
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-primary);
  min-height: 100vh;
  position: relative;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 500px) {
    box-shadow: none;
  }
`,k=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
`,z=f.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #333;
  }
`,S=f.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`,$=f.button`
  background: ${e=>e.disabled?"var(--color-bg-tertiary)":"linear-gradient(135deg, var(--color-mint-main) 0%, var(--color-mint-dark) 100%)"};
  color: ${e=>e.disabled?"var(--color-text-tertiary)":"var(--color-text-inverse)"};
  border: none;
  border-radius: var(--radius-xl);
  padding: var(--space-lg) var(--space-xl);
  font-size: 1rem;
  font-weight: 600;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all var(--transition-fast);
  box-shadow: ${e=>e.disabled?"none":"var(--shadow-md)"};
  width: 100%;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: ${e=>e.disabled?"#f5f5f5":"linear-gradient(135deg, #25b89a 0%, #1ea085 100%)"};
    transform: ${e=>e.disabled?"none":"translateY(-1px)"};
    box-shadow: ${e=>e.disabled?"none":"0 4px 16px rgba(46, 216, 182, 0.3)"};
  }
  
  &:hover:before {
    left: 100%;
  }
  
  &:active {
    transform: ${e=>e.disabled?"none":"translateY(0)"};
  }
`,C=f.div`
  padding: 16px;
  padding-bottom: 100px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
`,I=f.div`
  margin-bottom: 24px;
`,P=f.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`,T=f.span`
  color: #2ed8b6;
  font-size: 14px;
`;f.div`
  margin-bottom: 24px;
`;const N=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`,R=f.div`
  width: 80px;
  height: 80px;
  border: 1px solid ${e=>e.hasImage?"#e0e0e0":"#d1d5db"};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background: ${e=>e.hasImage?"transparent":"#f9fafb"};
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2ed8b6;
    background: ${e=>e.hasImage?"transparent":"#f0fffe"};
  }
`,O=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`,D=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #9ca3af;
  text-align: center;
  padding: 8px;
`,L=f.div`
  font-size: 13px;
  color: #666;
  text-align: left;
  font-weight: 500;
  margin-bottom: 4px;
`,U=f.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`,W=f.div`
  margin-bottom: 20px;
  box-sizing: border-box;
  width: 100%;
`,A=f.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`,M=f.input`
  width: 100%;
  padding: 16px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.08);
  }
  
  &::placeholder {
    color: #aaa;
  }
`,E=f.textarea`
  width: 100%;
  padding: 16px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s ease;
  line-height: 1.5;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.08);
  }
  
  &::placeholder {
    color: #aaa;
  }
`,H=f.select`
  width: 100%;
  padding: 16px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.08);
  }
`,Y=f.div`
  position: relative;
  display: flex;
  align-items: center;
`,B=f(M)`
  text-align: left;
  padding-left: 16px;
`;f.div`
  position: absolute;
  right: 16px;
  color: #666;
  font-weight: 600;
  display: none;
`;const X=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,F=f.button`
  padding: 16px 12px;
  border: 2px solid ${e=>e.selected?"#2ed8b6":"#e0e0e0"};
  border-radius: 12px;
  background: ${e=>e.selected?"#f0fffe":"white"};
  color: ${e=>e.selected?"#2ed8b6":"#666"};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  &:hover {
    border-color: #2ed8b6;
    color: #2ed8b6;
    background: #f0fffe;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(46, 216, 182, 0.15);
  }
`;f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`,f.div`
  background: #f0f0f0;
  color: #666;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`,f.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  color: #333;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
  }
`;const J=f.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 16px;
  margin-top: 12px;
`,q=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,G=f.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2ed8b6;
    background: #f0fffe;
  }
`,K=f.input`
  width: 20px;
  height: 20px;
  accent-color: #2ed8b6;
  cursor: pointer;
`,Q=f.div`
  flex: 1;
`,V=f.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
`,Z=f.div`
  font-size: 13px;
  color: #666;
  line-height: 1.4;
`;f.p`
  font-size: 13px;
  color: #666;
  margin: 0;
  line-height: 1.4;
`;const _=f.div`
  color: #f44336;
  font-size: 12px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;f.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 460px;
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid #f0f0f0;
  backdrop-filter: blur(10px);
`,f.div`
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
`,f.div`
  width: 100%;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
`,f.div`
  height: 100%;
  background: linear-gradient(90deg, #2ed8b6 0%, #25b89a 100%);
  width: ${e=>e.progress}%;
  transition: width 0.3s ease;
`;const ee=f.input`
  display: none;
`,ie=[{value:"excellent",label:"매우 좋음",description:"거의 새 제품"},{value:"good",label:"좋음",description:"사용감 적음"},{value:"fair",label:"보통",description:"사용감 있음"},{value:"poor",label:"나쁨",description:"수리 필요"}];function re(){var e;const i=a(),{addProduct:r}=c.useContext(u),{user:t}=c.useContext(m),o=c.useRef(null),[n,d]=c.useState(!1),[f,v]=c.useState([]),[re,te]=c.useState({}),[oe,ne]=c.useState([]),[de,se]=c.useState(""),[le,ae]=c.useState(""),[ce,pe]=c.useState({title:"",description:"",category:"",price:"",condition:"",region:t.region||"",district:t.district||"",negotiable:!0,delivery:!1,pickup:!0,showPhoneNumber:!1}),xe=(e,i)=>{pe(r=>l(s({},r),{[e]:i})),re[e]&&te(i=>l(s({},i),{[e]:null}))},he=e=>{return o=this,n=function*(){if(e.preventDefault(),(()=>{const e={};return ce.title.trim()?ce.title.length<2&&(e.title="제목은 2글자 이상 입력해주세요."):e.title="제목을 입력해주세요.",ce.description.trim()?ce.description.length<10&&(e.description="상품 설명은 10글자 이상 입력해주세요."):e.description="상품 설명을 입력해주세요.",ce.category||(e.category="카테고리를 선택해주세요."),ce.price?(isNaN(ce.price)||parseInt(ce.price)<0)&&(e.price="올바른 가격을 입력해주세요."):e.price="가격을 입력해주세요.",ce.condition||(e.condition="상품 상태를 선택해주세요."),0===f.length&&(e.images="사진을 최소 1장 이상 등록해주세요."),te(e),0===Object.keys(e).length})()){if(!(null==t?void 0:t.isLoggedIn)||!(null==t?void 0:t.uid))return alert("로그인이 필요합니다. 로그인 페이지로 이동합니다."),void i("/login");d(!0);try{const e={title:ce.title,description:ce.description,category:ce.category,price:parseInt(ce.price),condition:ce.condition,region:ce.region||"",district:ce.district||"",images:f.slice(0,3).map(e=>e.url),tags:oe,isPriceNegotiable:ce.negotiable||!1,isDeliveryAvailable:ce.delivery||!1,preferredTransactionType:ce.pickup?"direct":"delivery",showPhoneNumber:!(!ce.showPhoneNumber||!t.phoneNumber)};yield r(e),alert("상품이 성공적으로 등록되었습니다!"),i("/")}catch(o){alert(`상품 등록에 실패했습니다: ${o.message}`)}finally{d(!1)}}},new Promise((i,r)=>{var t=i=>{try{s(n.next(i))}catch(e){r(e)}},d=i=>{try{s(n.throw(i))}catch(e){r(e)}},s=e=>e.done?i(e.value):Promise.resolve(e.value).then(t,d);s((n=n.apply(o,null)).next())});var o,n},ge=(()=>{let e=0;return ce.title.trim()&&e++,ce.description.trim()&&e++,ce.category&&e++,ce.price&&e++,ce.condition&&e++,f.length>0&&e++,ce.region&&ce.district&&e++,Math.round(e/7*100)})(),be=ce.title.trim().length>=2&&ce.description.trim().length>=10&&ce.category&&ce.price&&parseInt(ce.price)>0&&ce.condition&&f.length>0;return p.jsx(y,{children:p.jsxs(w,{children:[p.jsxs(k,{children:[p.jsx(z,{onClick:()=>i(-1),children:p.jsx(x,{})}),p.jsxs(S,{children:["상품등록 (",ge,"%)"]}),p.jsx("div",{})]}),p.jsx("form",{onSubmit:he,children:p.jsxs(C,{children:[p.jsxs(I,{children:[p.jsxs(P,{children:[p.jsx(h,{}),"사진 ",p.jsx(T,{children:"*"})]}),p.jsxs(N,{children:[f.map((e,i)=>p.jsxs(R,{hasImage:!0,children:[p.jsx(O,{src:e.url,alt:`상품 이미지 ${i+1}`}),p.jsx(U,{onClick:i=>{var r;i.stopPropagation(),r=e.id,v(e=>e.filter(e=>e.id!==r))},children:p.jsx(x,{})}),0===i&&p.jsx("div",{style:{position:"absolute",bottom:"4px",left:"4px",background:"rgba(46, 216, 182, 0.9)",color:"white",padding:"2px 6px",borderRadius:"4px",fontSize:"10px",fontWeight:"600"},children:"대표"})]},e.id)),f.length<10&&p.jsx(R,{hasImage:!1,onClick:()=>{var e;return null==(e=o.current)?void 0:e.click()},children:p.jsxs(D,{children:[p.jsx(h,{size:24}),p.jsx("div",{style:{fontSize:"10px",fontWeight:"500",lineHeight:1.2},children:0===f.length?"사진 추가":`${f.length}/10`})]})})]}),p.jsx(L,{children:"사진은 최대 10장까지 등록 가능해요."}),p.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#f8f9fa",borderRadius:"8px"},children:[p.jsx("div",{style:{fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#333"},children:"또는 이미지 URL로 추가하기"}),p.jsxs("div",{style:{display:"flex",gap:"8px"},children:[p.jsx(M,{type:"url",placeholder:"https://example.com/image.jpg",value:le,onChange:e=>ae(e.target.value),style:{flex:1}}),p.jsx("button",{type:"button",onClick:()=>{const e=le.trim();e&&(f.length>=10?alert("사진은 최대 10장까지 등록할 수 있습니다."):e.match(/\.(jpeg|jpg|gif|png|webp)$/i)||e.includes("imgur")||e.includes("cloudinary")?(v(i=>[...i,{id:Date.now()+Math.random(),file:null,url:e,uploaded:!0}]),ae("")):alert("올바른 이미지 URL을 입력해주세요. (jpg, png, gif, webp 확장자)"))},style:{padding:"8px 16px",background:"var(--color-mint-main)",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"추가"})]}),p.jsx("div",{style:{fontSize:"12px",color:"#666",marginTop:"4px"},children:"무료 이미지 호스팅: imgur.com, cloudinary.com 등 사용 권장"})]}),re.images&&p.jsxs(_,{children:[p.jsx(g,{}),re.images]}),p.jsx(ee,{ref:o,type:"file",accept:"image/*",multiple:!0,onChange:e=>{Array.from(e.target.files).forEach(e=>{if(f.length>=10)return void alert("사진은 최대 10장까지 등록할 수 있습니다.");if(e.size>10485760)return void alert("파일 크기는 10MB를 초과할 수 없습니다.");const i=new FileReader;i.onload=i=>{const r=new Image;r.onload=()=>{const i=document.createElement("canvas"),t=i.getContext("2d"),o=800;let{width:n,height:d}=r;n>d?n>o&&(d=d*o/n,n=o):d>o&&(n=n*o/d,d=o),i.width=n,i.height=d,t.drawImage(r,0,0,n,d);let s=i.toDataURL("image/jpeg",.75);s.length>4e5&&(s=i.toDataURL("image/jpeg",.6)),s.length>6e5&&(s=i.toDataURL("image/jpeg",.45)),v(i=>[...i,{id:Date.now()+Math.random(),file:e,url:s,uploaded:!1}])},r.src=i.target.result},i.readAsDataURL(e)})}})]}),p.jsxs(W,{children:[p.jsxs(A,{children:["제목 ",p.jsx(T,{children:"*"})]}),p.jsx(M,{type:"text",placeholder:"상품 제목을 입력하세요",value:ce.title,onChange:e=>xe("title",e.target.value),maxLength:40}),p.jsxs("div",{style:{textAlign:"right",fontSize:"12px",color:"#999",marginTop:"4px"},children:[ce.title.length,"/40"]}),re.title&&p.jsxs(_,{children:[p.jsx(g,{}),re.title]})]}),p.jsxs(W,{children:[p.jsxs(A,{children:["카테고리 ",p.jsx(T,{children:"*"})]}),p.jsxs(H,{value:ce.category,onChange:e=>xe("category",e.target.value),children:[p.jsx("option",{value:"",children:"카테고리를 선택하세요"}),Object.values(j).map(e=>p.jsx("option",{value:e.id,children:e.name},e.id))]}),re.category&&p.jsxs(_,{children:[p.jsx(g,{}),re.category]})]}),p.jsxs(W,{children:[p.jsxs(A,{children:["가격 ",p.jsx(T,{children:"*"})]}),p.jsx(Y,{children:p.jsx(B,{type:"number",placeholder:"₩ 가격을 입력해주세요.",value:ce.price,onChange:e=>xe("price",e.target.value)})}),re.price&&p.jsxs(_,{children:[p.jsx(g,{}),re.price]})]}),p.jsxs(W,{children:[p.jsxs(A,{children:["상품 상태 ",p.jsx(T,{children:"*"})]}),p.jsx(X,{children:ie.map(e=>p.jsxs(F,{type:"button",selected:ce.condition===e.value,onClick:()=>xe("condition",e.value),children:[p.jsx("div",{children:e.label}),p.jsx("div",{style:{fontSize:"11px",opacity:.7,marginTop:"4px"},children:e.description})]},e.value))}),re.condition&&p.jsxs(_,{children:[p.jsx(g,{}),re.condition]})]}),p.jsxs(W,{children:[p.jsxs(A,{children:["자세한 설명 ",p.jsx(T,{children:"*"})]}),p.jsx(E,{placeholder:"구로동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)\\n\\n신뢰할 수 있는 거래를 위해 자세히 적어주세요. 과학기술정보통신부, 한국 인터넷진흥원과 함께 해요.",value:ce.description,onChange:e=>xe("description",e.target.value),maxLength:1e3,rows:8}),p.jsxs("div",{style:{textAlign:"right",fontSize:"12px",color:"#999",marginTop:"4px"},children:[ce.description.length,"/1000"]}),re.description&&p.jsxs(_,{children:[p.jsx(g,{}),re.description]})]}),p.jsxs(W,{children:[p.jsxs(A,{children:["거래 희망 장소 ",p.jsx("span",{style:{color:"#999",fontSize:"12px"},children:"삭제"})]}),p.jsxs("div",{style:{padding:"16px",border:"1px solid #e0e0e0",borderRadius:"12px",background:"#f8f9fa",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:"16px",color:"#333",fontWeight:"500"},children:"구로동"}),p.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"서울특별시 구로구 구로동"})]}),p.jsx(b,{color:"#666"})]}),p.jsx("div",{style:{fontSize:"12px",color:"#999",marginTop:"8px"},children:"보여줄 동네 선택 >"}),p.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"#fff7e6",borderRadius:"8px",border:"1px solid #ffe0b3",display:"flex",alignItems:"flex-start",gap:"8px"},children:[p.jsx(g,{color:"#ff8c00",style:{marginTop:"2px",fontSize:"12px"}}),p.jsx("div",{style:{fontSize:"12px",color:"#666",lineHeight:"1.4"},children:"예일음에서 동네인증이 필요해요. 지금은 글을 작성중인 구로동에만 글을 올릴 수 있어요."})]})]}),p.jsxs(W,{children:[p.jsx(A,{children:"거래 옵션"}),p.jsxs(q,{children:[p.jsxs(G,{children:[p.jsx(K,{type:"checkbox",checked:ce.negotiable,onChange:e=>xe("negotiable",e.target.checked)}),p.jsxs(Q,{children:[p.jsx(V,{children:"가격 제안 받기"}),p.jsx(Z,{children:"구매자가 가격을 제안할 수 있어요"})]})]}),p.jsxs(G,{children:[p.jsx(K,{type:"checkbox",checked:ce.delivery,onChange:e=>xe("delivery",e.target.checked)}),p.jsxs(Q,{children:[p.jsx(V,{children:"택배 거래"}),p.jsx(Z,{children:"택배로 안전하게 거래할 수 있어요"})]})]}),p.jsxs(G,{children:[p.jsx(K,{type:"checkbox",checked:ce.pickup,onChange:e=>xe("pickup",e.target.checked)}),p.jsxs(Q,{children:[p.jsx(V,{children:"직거래"}),p.jsx(Z,{children:"직접 만나서 거래할 수 있어요"})]})]})]})]}),p.jsxs(W,{children:[p.jsx(A,{children:"연락처 옵션"}),p.jsx(q,{children:p.jsxs(G,{children:[p.jsx(K,{type:"checkbox",checked:ce.showPhoneNumber,onChange:e=>xe("showPhoneNumber",e.target.checked)}),p.jsxs(Q,{children:[p.jsx(V,{children:"전화번호 공개"}),p.jsx(Z,{children:t.phoneNumber?`안전번호(${null==(e=t.phoneNumber)?void 0:e.replace(/(\d{3})\d{4}(\d{4})/,"$1-****-$2")})로 번호를 공개해요`:"프로필에서 전화번호를 등록한 후 사용할 수 있어요"})]})]})}),ce.showPhoneNumber&&!t.phoneNumber&&p.jsx(J,{style:{marginTop:"12px",background:"#fff3e0",border:"1px solid #ffe0b3"},children:p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px"},children:[p.jsx(g,{color:"#ff8c00",style:{marginTop:"2px",fontSize:"12px"}}),p.jsx("div",{style:{fontSize:"12px",color:"#666",lineHeight:"1.4"},children:"전화번호 공개를 위해서는 먼저 프로필에서 전화번호를 등록하고 인증을 완료해주세요."})]})})]})]})}),p.jsx("div",{style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:"500px",padding:"16px 20px",background:"white",borderTop:"1px solid #f0f0f0",boxSizing:"border-box",zIndex:100},children:p.jsx($,{type:"submit",disabled:!be||n,onClick:he,style:{opacity:be?1:.5,cursor:be?"pointer":"not-allowed",width:"60% !important"},children:n?"등록 중...":"상품등록 완료"})})]})})}export{re as default};
