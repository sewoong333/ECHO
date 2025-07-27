import{u as oe,r as c,P as re,U as ne,j as e,q as G,Z as M,z as f,ag as se,X as ae,ah as U,i as o}from"./index-C0jD-Qlp.js";const de=o.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  box-sizing: border-box;
`,le=o.div`
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-primary);
  min-height: 100vh;
  position: relative;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 500px) {
    box-shadow: none;
  }
`,ce=o.div`
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
`,pe=o.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #333;
  }
`,xe=o.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`,ge=o.button`
  background: ${r=>r.disabled?"var(--color-bg-tertiary)":"linear-gradient(135deg, var(--color-mint-main) 0%, var(--color-mint-dark) 100%)"};
  color: ${r=>r.disabled?"var(--color-text-tertiary)":"var(--color-text-inverse)"};
  border: none;
  border-radius: var(--radius-xl);
  padding: var(--space-lg) var(--space-xl);
  font-size: 1rem;
  font-weight: 600;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  transition: all var(--transition-fast);
  box-shadow: ${r=>r.disabled?"none":"var(--shadow-md)"};
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
    background: ${r=>r.disabled?"#f5f5f5":"linear-gradient(135deg, #25b89a 0%, #1ea085 100%)"};
    transform: ${r=>r.disabled?"none":"translateY(-1px)"};
    box-shadow: ${r=>r.disabled?"none":"0 4px 16px rgba(46, 216, 182, 0.3)"};
  }
  
  &:hover:before {
    left: 100%;
  }
  
  &:active {
    transform: ${r=>r.disabled?"none":"translateY(0)"};
  }
`,he=o.div`
  padding: 16px;
  padding-bottom: 100px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
`,fe=o.div`
  margin-bottom: 24px;
`,be=o.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`,y=o.span`
  color: #2ed8b6;
  font-size: 14px;
`;o.div`
  margin-bottom: 24px;
`;const ue=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`,O=o.div`
  width: 80px;
  height: 80px;
  border: 1px solid ${r=>r.hasImage?"#e0e0e0":"#d1d5db"};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background: ${r=>r.hasImage?"transparent":"#f9fafb"};
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2ed8b6;
    background: ${r=>r.hasImage?"transparent":"#f0fffe"};
  }
`,me=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`,je=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #9ca3af;
  text-align: center;
  padding: 8px;
`,ve=o.div`
  font-size: 13px;
  color: #666;
  text-align: left;
  font-weight: 500;
  margin-bottom: 4px;
`,ye=o.button`
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
`,b=o.div`
  margin-bottom: 20px;
  box-sizing: border-box;
  width: 100%;
`,u=o.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`,L=o.input`
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
`,we=o.textarea`
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
`,ke=o.select`
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
`,ze=o.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ie=o(L)`
  text-align: left;
  padding-left: 16px;
`;o.div`
  position: absolute;
  right: 16px;
  color: #666;
  font-weight: 600;
  display: none;
`;const Ce=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,Se=o.button`
  padding: 16px 12px;
  border: 2px solid ${r=>r.selected?"#2ed8b6":"#e0e0e0"};
  border-radius: 12px;
  background: ${r=>r.selected?"#f0fffe":"white"};
  color: ${r=>r.selected?"#2ed8b6":"#666"};
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
`;o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`;o.div`
  background: #f0f0f0;
  color: #666;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;o.input`
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
`;const Te=o.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 16px;
  margin-top: 12px;
`,X=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,z=o.label`
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
`,I=o.input`
  width: 20px;
  height: 20px;
  accent-color: #2ed8b6;
  cursor: pointer;
`,C=o.div`
  flex: 1;
`,S=o.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
`,T=o.div`
  font-size: 13px;
  color: #666;
  line-height: 1.4;
`;o.p`
  font-size: 13px;
  color: #666;
  margin: 0;
  line-height: 1.4;
`;const w=o.div`
  color: #f44336;
  font-size: 12px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;o.div`
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
`;o.div`
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
`;o.div`
  width: 100%;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
`;o.div`
  height: 100%;
  background: linear-gradient(90deg, #2ed8b6 0%, #25b89a 100%);
  width: ${r=>r.progress}%;
  transition: width 0.3s ease;
`;const $e=o.input`
  display: none;
`,Re=[{value:"excellent",label:"매우 좋음",description:"거의 새 제품"},{value:"good",label:"좋음",description:"사용감 적음"},{value:"fair",label:"보통",description:"사용감 있음"},{value:"poor",label:"나쁨",description:"수리 필요"}];function De(){var W;const r=oe(),{addProduct:Y}=c.useContext(re),{user:n}=c.useContext(ne),N=c.useRef(null),[D,E]=c.useState(!1),[l,$]=c.useState([]),[d,F]=c.useState({}),[q,Pe]=c.useState([]),[Ue,Le]=c.useState(""),[A,B]=c.useState(""),[t,V]=c.useState({title:"",description:"",category:"",price:"",condition:"",region:n.region||"",district:n.district||"",negotiable:!0,delivery:!1,pickup:!0,showPhoneNumber:!1}),p=(i,s)=>{V(a=>({...a,[i]:s})),d[i]&&F(a=>({...a,[i]:null}))},Z=i=>{Array.from(i.target.files).forEach(a=>{if(l.length>=10){alert("사진은 최대 10장까지 등록할 수 있습니다.");return}if(a.size>10*1024*1024){alert("파일 크기는 10MB를 초과할 수 없습니다.");return}const x=new FileReader;x.onload=P=>{const m=new Image;m.onload=()=>{const j=document.createElement("canvas"),ie=j.getContext("2d"),v=800;let{width:g,height:h}=m;g>h?g>v&&(h=h*v/g,g=v):h>v&&(g=g*v/h,h=v),j.width=g,j.height=h,ie.drawImage(m,0,0,g,h);let k=j.toDataURL("image/jpeg",.75);k.length>4e5&&(k=j.toDataURL("image/jpeg",.6)),k.length>6e5&&(k=j.toDataURL("image/jpeg",.45)),$(te=>[...te,{id:Date.now()+Math.random(),file:a,url:k,uploaded:!1}])},m.src=P.target.result},x.readAsDataURL(a)})},_=i=>{$(s=>s.filter(a=>a.id!==i))},J=()=>{const i=A.trim();if(i){if(l.length>=10){alert("사진은 최대 10장까지 등록할 수 있습니다.");return}if(!i.match(/\.(jpeg|jpg|gif|png|webp)$/i)&&!i.includes("imgur")&&!i.includes("cloudinary")){alert("올바른 이미지 URL을 입력해주세요. (jpg, png, gif, webp 확장자)");return}$(s=>[...s,{id:Date.now()+Math.random(),file:null,url:i,uploaded:!0}]),B("")}},K=()=>{const i={};return t.title.trim()?t.title.length<2&&(i.title="제목은 2글자 이상 입력해주세요."):i.title="제목을 입력해주세요.",t.description.trim()?t.description.length<10&&(i.description="상품 설명은 10글자 이상 입력해주세요."):i.description="상품 설명을 입력해주세요.",t.category||(i.category="카테고리를 선택해주세요."),t.price?(isNaN(t.price)||parseInt(t.price)<0)&&(i.price="올바른 가격을 입력해주세요."):i.price="가격을 입력해주세요.",t.condition||(i.condition="상품 상태를 선택해주세요."),l.length===0&&(i.images="사진을 최소 1장 이상 등록해주세요."),F(i),Object.keys(i).length===0},Q=()=>{let i=0;const s=7;return t.title.trim()&&i++,t.description.trim()&&i++,t.category&&i++,t.price&&i++,t.condition&&i++,l.length>0&&i++,t.region&&t.district&&i++,Math.round(i/s*100)},H=async i=>{var s,a;if(i.preventDefault(),!!K()){if(console.log("🔍 현재 사용자 상태 확인:",{user:n,isLoggedIn:n==null?void 0:n.isLoggedIn,uid:n==null?void 0:n.uid,email:n==null?void 0:n.email,nickname:n==null?void 0:n.nickname}),!(n!=null&&n.isLoggedIn)||!(n!=null&&n.uid)){console.log("❌ 로그인 체크 실패:",{isLoggedIn:n==null?void 0:n.isLoggedIn,uid:n==null?void 0:n.uid,userObject:n}),alert("로그인이 필요합니다. 로그인 페이지로 이동합니다."),r("/login");return}console.log("✅ 사용자 인증 확인됨 - 상품 등록 진행"),E(!0);try{const x={title:t.title,description:t.description,category:t.category,price:parseInt(t.price),condition:t.condition,region:t.region||"",district:t.district||"",images:l.slice(0,3).map(m=>m.url),tags:q,isPriceNegotiable:t.negotiable||!1,isDeliveryAvailable:t.delivery||!1,preferredTransactionType:t.pickup?"direct":"delivery",showPhoneNumber:!!(t.showPhoneNumber&&n.phoneNumber)};console.log("📦 전송할 상품 데이터:",x),console.log("👤 현재 사용자:",n),console.log("🔐 Firebase Auth 상태:",{currentUser:U.currentUser,uid:(s=U.currentUser)==null?void 0:s.uid,email:(a=U.currentUser)==null?void 0:a.email});const P=await Y(x);console.log("✅ 상품 등록 성공:",P),alert("상품이 성공적으로 등록되었습니다!"),r("/")}catch(x){console.error("❌ 상품 등록 실패:",x),console.error("❌ 에러 스택:",x.stack),alert(`상품 등록에 실패했습니다: ${x.message}`)}finally{E(!1)}}},ee=Q(),R=t.title.trim().length>=2&&t.description.trim().length>=10&&t.category&&t.price&&parseInt(t.price)>0&&t.condition&&l.length>0;return e.jsx(de,{children:e.jsxs(le,{children:[e.jsxs(ce,{children:[e.jsx(pe,{onClick:()=>r(-1),children:e.jsx(G,{})}),e.jsxs(xe,{children:["상품등록 (",ee,"%)"]}),e.jsx("div",{})]}),e.jsx("form",{onSubmit:H,children:e.jsxs(he,{children:[e.jsxs(fe,{children:[e.jsxs(be,{children:[e.jsx(M,{}),"사진 ",e.jsx(y,{children:"*"})]}),e.jsxs(ue,{children:[l.map((i,s)=>e.jsxs(O,{hasImage:!0,children:[e.jsx(me,{src:i.url,alt:`상품 이미지 ${s+1}`}),e.jsx(ye,{onClick:a=>{a.stopPropagation(),_(i.id)},children:e.jsx(G,{})}),s===0&&e.jsx("div",{style:{position:"absolute",bottom:"4px",left:"4px",background:"rgba(46, 216, 182, 0.9)",color:"white",padding:"2px 6px",borderRadius:"4px",fontSize:"10px",fontWeight:"600"},children:"대표"})]},i.id)),l.length<10&&e.jsx(O,{hasImage:!1,onClick:()=>{var i;return(i=N.current)==null?void 0:i.click()},children:e.jsxs(je,{children:[e.jsx(M,{size:24}),e.jsx("div",{style:{fontSize:"10px",fontWeight:"500",lineHeight:1.2},children:l.length===0?"사진 추가":`${l.length}/10`})]})})]}),e.jsx(ve,{children:"사진은 최대 10장까지 등록 가능해요."}),e.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#f8f9fa",borderRadius:"8px"},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#333"},children:"또는 이미지 URL로 추가하기"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(L,{type:"url",placeholder:"https://example.com/image.jpg",value:A,onChange:i=>B(i.target.value),style:{flex:1}}),e.jsx("button",{type:"button",onClick:J,style:{padding:"8px 16px",background:"var(--color-mint-main)",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"추가"})]}),e.jsx("div",{style:{fontSize:"12px",color:"#666",marginTop:"4px"},children:"무료 이미지 호스팅: imgur.com, cloudinary.com 등 사용 권장"})]}),d.images&&e.jsxs(w,{children:[e.jsx(f,{}),d.images]}),e.jsx($e,{ref:N,type:"file",accept:"image/*",multiple:!0,onChange:Z})]}),e.jsxs(b,{children:[e.jsxs(u,{children:["제목 ",e.jsx(y,{children:"*"})]}),e.jsx(L,{type:"text",placeholder:"상품 제목을 입력하세요",value:t.title,onChange:i=>p("title",i.target.value),maxLength:40}),e.jsxs("div",{style:{textAlign:"right",fontSize:"12px",color:"#999",marginTop:"4px"},children:[t.title.length,"/40"]}),d.title&&e.jsxs(w,{children:[e.jsx(f,{}),d.title]})]}),e.jsxs(b,{children:[e.jsxs(u,{children:["카테고리 ",e.jsx(y,{children:"*"})]}),e.jsxs(ke,{value:t.category,onChange:i=>p("category",i.target.value),children:[e.jsx("option",{value:"",children:"카테고리를 선택하세요"}),Object.values(se).map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]}),d.category&&e.jsxs(w,{children:[e.jsx(f,{}),d.category]})]}),e.jsxs(b,{children:[e.jsxs(u,{children:["가격 ",e.jsx(y,{children:"*"})]}),e.jsx(ze,{children:e.jsx(Ie,{type:"number",placeholder:"₩ 가격을 입력해주세요.",value:t.price,onChange:i=>p("price",i.target.value)})}),d.price&&e.jsxs(w,{children:[e.jsx(f,{}),d.price]})]}),e.jsxs(b,{children:[e.jsxs(u,{children:["상품 상태 ",e.jsx(y,{children:"*"})]}),e.jsx(Ce,{children:Re.map(i=>e.jsxs(Se,{type:"button",selected:t.condition===i.value,onClick:()=>p("condition",i.value),children:[e.jsx("div",{children:i.label}),e.jsx("div",{style:{fontSize:"11px",opacity:.7,marginTop:"4px"},children:i.description})]},i.value))}),d.condition&&e.jsxs(w,{children:[e.jsx(f,{}),d.condition]})]}),e.jsxs(b,{children:[e.jsxs(u,{children:["자세한 설명 ",e.jsx(y,{children:"*"})]}),e.jsx(we,{placeholder:"구로동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)\\n\\n신뢰할 수 있는 거래를 위해 자세히 적어주세요. 과학기술정보통신부, 한국 인터넷진흥원과 함께 해요.",value:t.description,onChange:i=>p("description",i.target.value),maxLength:1e3,rows:8}),e.jsxs("div",{style:{textAlign:"right",fontSize:"12px",color:"#999",marginTop:"4px"},children:[t.description.length,"/1000"]}),d.description&&e.jsxs(w,{children:[e.jsx(f,{}),d.description]})]}),e.jsxs(b,{children:[e.jsxs(u,{children:["거래 희망 장소 ",e.jsx("span",{style:{color:"#999",fontSize:"12px"},children:"삭제"})]}),e.jsxs("div",{style:{padding:"16px",border:"1px solid #e0e0e0",borderRadius:"12px",background:"#f8f9fa",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"16px",color:"#333",fontWeight:"500"},children:"구로동"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"서울특별시 구로구 구로동"})]}),e.jsx(ae,{color:"#666"})]}),e.jsx("div",{style:{fontSize:"12px",color:"#999",marginTop:"8px"},children:"보여줄 동네 선택 >"}),e.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"#fff7e6",borderRadius:"8px",border:"1px solid #ffe0b3",display:"flex",alignItems:"flex-start",gap:"8px"},children:[e.jsx(f,{color:"#ff8c00",style:{marginTop:"2px",fontSize:"12px"}}),e.jsx("div",{style:{fontSize:"12px",color:"#666",lineHeight:"1.4"},children:"예일음에서 동네인증이 필요해요. 지금은 글을 작성중인 구로동에만 글을 올릴 수 있어요."})]})]}),e.jsxs(b,{children:[e.jsx(u,{children:"거래 옵션"}),e.jsxs(X,{children:[e.jsxs(z,{children:[e.jsx(I,{type:"checkbox",checked:t.negotiable,onChange:i=>p("negotiable",i.target.checked)}),e.jsxs(C,{children:[e.jsx(S,{children:"가격 제안 받기"}),e.jsx(T,{children:"구매자가 가격을 제안할 수 있어요"})]})]}),e.jsxs(z,{children:[e.jsx(I,{type:"checkbox",checked:t.delivery,onChange:i=>p("delivery",i.target.checked)}),e.jsxs(C,{children:[e.jsx(S,{children:"택배 거래"}),e.jsx(T,{children:"택배로 안전하게 거래할 수 있어요"})]})]}),e.jsxs(z,{children:[e.jsx(I,{type:"checkbox",checked:t.pickup,onChange:i=>p("pickup",i.target.checked)}),e.jsxs(C,{children:[e.jsx(S,{children:"직거래"}),e.jsx(T,{children:"직접 만나서 거래할 수 있어요"})]})]})]})]}),e.jsxs(b,{children:[e.jsx(u,{children:"연락처 옵션"}),e.jsx(X,{children:e.jsxs(z,{children:[e.jsx(I,{type:"checkbox",checked:t.showPhoneNumber,onChange:i=>p("showPhoneNumber",i.target.checked)}),e.jsxs(C,{children:[e.jsx(S,{children:"전화번호 공개"}),e.jsx(T,{children:n.phoneNumber?`안전번호(${(W=n.phoneNumber)==null?void 0:W.replace(/(\d{3})\d{4}(\d{4})/,"$1-****-$2")})로 번호를 공개해요`:"프로필에서 전화번호를 등록한 후 사용할 수 있어요"})]})]})}),t.showPhoneNumber&&!n.phoneNumber&&e.jsx(Te,{style:{marginTop:"12px",background:"#fff3e0",border:"1px solid #ffe0b3"},children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px"},children:[e.jsx(f,{color:"#ff8c00",style:{marginTop:"2px",fontSize:"12px"}}),e.jsx("div",{style:{fontSize:"12px",color:"#666",lineHeight:"1.4"},children:"전화번호 공개를 위해서는 먼저 프로필에서 전화번호를 등록하고 인증을 완료해주세요."})]})})]})]})}),e.jsx("div",{style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:"500px",padding:"16px 20px",background:"white",borderTop:"1px solid #f0f0f0",boxSizing:"border-box",zIndex:100},children:e.jsx(ge,{type:"submit",disabled:!R||D,onClick:H,style:{opacity:R?1:.5,cursor:R?"pointer":"not-allowed",width:"60% !important"},children:D?"등록 중...":"상품등록 완료"})})]})})}export{De as default};
