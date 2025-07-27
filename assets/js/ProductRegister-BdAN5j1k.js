var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,l=(e,r)=>{for(var t in r||(r={}))o.call(r,t)&&n(e,t,r[t]);if(a)for(var t of a(r))i.call(r,t)&&n(e,t,r[t]);return e},s=(e,a)=>r(e,t(a)),d=(e,r,t)=>new Promise((a,o)=>{var i=e=>{try{l(t.next(e))}catch(r){o(r)}},n=e=>{try{l(t.throw(e))}catch(r){o(r)}},l=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,n);l((t=t.apply(e,r)).next())});import{r as c,j as m,T as u,c as g,U as h,V as p,W as b,u as v,X as x}from"./vendor-react-xhcWTtxo.js";import{d as f}from"./vendor-ui-28GTjlMA.js";import{l as y,s as j,U as w,T as z,p as k}from"./index-czRqZILZ.js";import{r as S,V as I,x as $,t as P}from"./vendor-firebase-Cl2QMYMN.js";import{L as C}from"./LocationPicker-DMFna4R7.js";import"./vendor-others-BwC04hQF.js";const D=new class{constructor(){this.maxFileSize=5242880,this.allowedTypes=["image/jpeg","image/jpg","image/png","image/webp"],this.maxDimension=1920,this.thumbnailSize=300,this.compressionQuality=.8}validateFile(e){const r=[];return e?(this.allowedTypes.includes(e.type)||r.push("지원하지 않는 파일 형식입니다. (JPG, PNG, WebP만 지원)"),e.size>this.maxFileSize&&r.push(`파일 크기가 너무 큽니다. (최대 ${this.maxFileSize/1024/1024}MB)`),r):(r.push("파일이 선택되지 않았습니다."),r)}optimizeImage(e){return d(this,arguments,function*(e,r={}){const{maxWidth:t=this.maxDimension,maxHeight:a=this.maxDimension,quality:o=this.compressionQuality,outputFormat:i="webp"}=r;return new Promise((r,n)=>{const l=document.createElement("canvas"),s=l.getContext("2d"),d=new Image;d.onload=()=>{try{const{width:c,height:m}=d;let{width:u,height:g}=this.calculateDimensions(c,m,t,a);l.width=u,l.height=g,s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high",s.drawImage(d,0,0,u,g);const h=this.getBestMimeType(i);l.toBlob(t=>{if(t){const a=e.size,o=t.size,i=((a-o)/a*100).toFixed(1);y.performance("Image optimization",{originalSize:a,optimizedSize:o,compressionRatio:`${i}%`,originalDimensions:`${c}x${m}`,optimizedDimensions:`${u}x${g}`,outputFormat:h}),r(t)}else n(new Error("이미지 최적화에 실패했습니다."))},h,o)}catch(c){n(c)}},d.onerror=()=>{n(new Error("이미지를 로드할 수 없습니다."))},d.src=URL.createObjectURL(e)})})}createThumbnail(e){return d(this,null,function*(){return this.optimizeImage(e,{maxWidth:this.thumbnailSize,maxHeight:this.thumbnailSize,quality:.7,outputFormat:"webp"})})}calculateDimensions(e,r,t,a){let o=e,i=r;if(o<=t&&i<=a)return{width:o,height:i};const n=o/i;return o>i?(o=Math.min(o,t),i=o/n):(i=Math.min(i,a),o=i*n),{width:Math.round(o),height:Math.round(i)}}getBestMimeType(e){const r=0===document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp");return"webp"===e&&r?"image/webp":"image/jpeg"}uploadToStorage(e,r){return d(this,arguments,function*(e,r,t={}){try{const{createThumbnail:a=!0,onProgress:o=()=>{},metadata:i={}}=t,n=this.validateFile(e);if(n.length>0)throw new Error(n[0]);const s={};y.info("Starting image optimization and upload",{fileName:e.name,path:r});const d=yield this.optimizeImage(e),c=S(j,`${r}/main.webp`),m=I(c,d,{contentType:"image/webp",customMetadata:l({originalName:e.name,optimized:"true"},i)});if(yield new Promise((e,r)=>{m.on("state_changed",e=>{const r=e.bytesTransferred/e.totalBytes*100;o(r,"main")},r,e)}),s.main=yield $(c),a){const t=yield this.createThumbnail(e),a=S(j,`${r}/thumbnail.webp`),n=I(a,t,{contentType:"image/webp",customMetadata:l({originalName:e.name,optimized:"true",type:"thumbnail"},i)});yield new Promise((e,r)=>{n.on("state_changed",e=>{const r=e.bytesTransferred/e.totalBytes*100;o(r,"thumbnail")},r,e)}),s.thumbnail=yield $(a)}return y.info("Image upload completed",{path:r,mainUrl:s.main,thumbnailUrl:s.thumbnail}),s}catch(a){throw y.error("Image upload failed",a,"image-upload"),a}})}deleteFromStorage(e){return d(this,null,function*(){try{const r=S(j,`${e}/main.webp`),t=S(j,`${e}/thumbnail.webp`);yield Promise.allSettled([P(r),P(t)]),y.info("Images deleted from storage",{imagePath:e})}catch(r){throw y.error("Failed to delete images",r,"image-delete"),r}})}uploadMultipleImages(e,r){return d(this,arguments,function*(e,r,t={}){const a=[],{maxImages:o=10,onProgress:i=()=>{},onImageComplete:n=()=>{}}=t;if(e.length>o)throw new Error(`최대 ${o}개의 이미지만 업로드할 수 있습니다.`);for(let c=0;c<e.length;c++){const o=e[c],m=`${r}/image_${c+1}`;try{const e=yield this.uploadToStorage(o,m,s(l({},t),{onProgress:(e,r)=>{i(c,e,r)}}));a.push({index:c,path:m,urls:e,originalName:o.name}),n(c,e)}catch(d){y.error(`Failed to upload image ${c+1}`,d,"multi-image-upload"),a.push({index:c,error:d.message,originalName:o.name})}}return a})}extractImageInfo(e){try{const r=new URL(e).pathname.split("/");return{bucket:r[2],path:decodeURIComponent(r.slice(4).join("/")),isOptimized:e.includes(".webp"),isFirebaseStorage:e.includes("firebasestorage.googleapis.com")}}catch(r){return null}}},F=f.div`
  width: 100%;
`,N=f.div`
  border: 2px dashed ${e=>e.isDragOver?"var(--color-mint-main)":"var(--color-border-medium)"};
  border-radius: var(--radius-xl);
  padding: 2rem;
  text-align: center;
  background: ${e=>e.isDragOver?"var(--color-mint-glass)":"var(--color-bg-secondary)"};
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-bottom: 1rem;

  &:hover {
    border-color: var(--color-mint-main);
    background: var(--color-mint-glass);
  }

  .icon {
    font-size: 2rem;
    color: var(--color-mint-main);
    margin-bottom: 1rem;
  }

  .text {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .sub-text {
    color: var(--color-text-tertiary);
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
`,O=f.input`
  display: none;
`,U=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,L=f.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
`,T=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,R=f.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--color-red);
    transform: scale(1.1);
  }
`,M=f.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;

  .progress-bar {
    height: 100%;
    background: var(--color-mint-main);
    transition: width 0.3s ease;
    width: ${e=>e.progress}%;
  }
`,E=f.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,A=f.div`
  color: var(--color-red);
  font-size: 0.875rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: var(--color-red);
  background-opacity: 0.1;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-red);
`,_=f.div`
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  margin-top: 0.5rem;
  line-height: 1.4;
`;function B({images:e=[],onChange:r,maxImages:t=10,disabled:a=!1,showImageInfo:o=!0}){const[i,n]=c.useState(!1),[v,x]=c.useState({}),[f,j]=c.useState([]),w=c.useRef(null),z=c.useCallback(o=>d(this,null,function*(){if(a)return;const i=Array.from(o),n=t-e.length;if(i.length>n)return void j([`최대 ${t}개의 이미지만 업로드할 수 있습니다. (현재 ${e.length}개)`]);const d=[];if(i.forEach((e,r)=>{const t=D.validateFile(e);t.length>0&&d.push(`파일 ${r+1}: ${t[0]}`)}),d.length>0)return void j(d);j([]);const c=[...e];for(let e=0;e<i.length;e++){const t=i[e],a=`temp_${Date.now()}_${e}`,o=URL.createObjectURL(t),n={id:a,url:o,file:t,uploading:!0,progress:0};c.push(n),r(c);try{const i=`products/${Date.now()}_${Math.random().toString(36).substr(2,9)}`,n=yield D.uploadToStorage(t,i,{createThumbnail:!0,onProgress:(e,t)=>{x(r=>s(l({},r),{[a]:{progress:e,type:t}}));const o=c.findIndex(e=>e.id===a);-1!==o&&(c[o]=s(l({},c[o]),{progress:e}),r([...c]))}}),d=c.findIndex(e=>e.id===a);-1!==d&&(URL.revokeObjectURL(o),c[d]={id:`uploaded_${Date.now()}_${e}`,url:n.main,thumbnailUrl:n.thumbnail,path:i,uploading:!1,uploaded:!0,originalName:t.name,size:t.size},r([...c]),x(e=>{const r=l({},e);return delete r[a],r}),y.userAction("Image uploaded successfully",{fileName:t.name,fileSize:t.size,uploadPath:i}))}catch(m){const e=c.findIndex(e=>e.id===a);-1!==e&&(URL.revokeObjectURL(o),c.splice(e,1),r([...c])),j(e=>[...e,`${t.name}: ${m.message}`]),y.error("Image upload failed",m,"image-upload")}}}),[e,r,t,a]),k=c.useCallback(e=>{e.preventDefault(),a||n(!0)},[a]),S=c.useCallback(e=>{e.preventDefault(),n(!1)},[]),I=c.useCallback(e=>{if(e.preventDefault(),n(!1),!a){const r=e.dataTransfer.files;z(r)}},[a,z]),$=c.useCallback(e=>{a||(z(e.target.files),e.target.value="")},[a,z]),P=c.useCallback(t=>{if(a)return;const o=e[t];o.path&&o.uploaded&&D.deleteFromStorage(o.path).catch(e=>{y.error("Failed to delete image from storage",e,"image-delete")}),o.url&&o.url.startsWith("blob:")&&URL.revokeObjectURL(o.url);const i=e.filter((e,r)=>r!==t);r(i),y.userAction("Image removed",{imageId:o.id,originalName:o.originalName})},[e,r,a]),C=c.useCallback(()=>{var e;a||null==(e=w.current)||e.click()},[a]);return m.jsxs(F,{children:[m.jsxs(N,{isDragOver:i,onDragOver:k,onDragLeave:S,onDrop:I,onClick:C,children:[m.jsx(u,{className:"icon"}),m.jsx("div",{className:"text",children:"이미지를 드래그하여 올리거나 클릭하여 선택하세요"}),m.jsxs("div",{className:"sub-text",children:["JPG, PNG, WebP 형식 · 최대 5MB · ",t,"개까지"]})]}),m.jsx(O,{ref:w,type:"file",multiple:!0,accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:$,disabled:a}),f.length>0&&m.jsx(A,{children:f.map((e,r)=>m.jsx("div",{children:e},r))}),e.length>0&&m.jsx(U,{children:e.map((e,r)=>m.jsxs(L,{children:[m.jsx(T,{src:e.thumbnailUrl||e.url,alt:`이미지 ${r+1}`,loading:"lazy"}),!a&&m.jsx(R,{onClick:e=>{e.stopPropagation(),P(r)},children:m.jsx(g,{})}),e.uploading&&m.jsxs(m.Fragment,{children:[m.jsx(M,{progress:e.progress||0,children:m.jsx("div",{className:"progress-bar"})}),m.jsxs(E,{children:[m.jsx(h,{className:"spinner"}),"업로드 중... ",Math.round(e.progress||0),"%"]})]}),e.uploaded&&m.jsxs(E,{style:{background:"rgba(0, 200, 100, 0.8)"},children:[m.jsx(p,{}),"완료"]})]},e.id||r))}),o&&e.length>0&&m.jsxs(_,{children:[m.jsx(b,{})," ",e.length,"/",t,"개 이미지 · 업로드된 이미지는 자동으로 최적화됩니다"]})]})}const W=[{value:"guitar",label:"기타"},{value:"bass",label:"베이스"},{value:"piano",label:"피아노/키보드"},{value:"drums",label:"드럼"},{value:"wind",label:"관악기"},{value:"string",label:"현악기"},{value:"audio",label:"음향장비"},{value:"other",label:"기타"}],G=[{value:"excellent",label:"최상 (거의 새것)"},{value:"good",label:"상 (깨끗함)"},{value:"fair",label:"중 (사용감 있음)"},{value:"poor",label:"하 (수리 필요)"}],Q=f.div`
  min-height: 100vh;
  background: var(--color-bg-secondary);
`,q=f.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background: var(--color-bg-primary);
  min-height: 100vh;
`,H=f.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 2rem;
  text-align: center;
`,J=f.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,V=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Y=f.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-primary);
`,X=f.input`
  padding: 0.75rem;
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  transition: all var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-mint-main);
    box-shadow: 0 0 0 3px var(--color-mint-glass);
  }

  &:disabled {
    background: var(--color-bg-tertiary);
    cursor: not-allowed;
  }
`,K=f.textarea`
  padding: 0.75rem;
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-mint-main);
    box-shadow: 0 0 0 3px var(--color-mint-glass);
  }

  &:disabled {
    background: var(--color-bg-tertiary);
    cursor: not-allowed;
  }
`,Z=f.select`
  padding: 0.75rem;
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  background: var(--color-bg-primary);
  transition: all var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-mint-main);
    box-shadow: 0 0 0 3px var(--color-mint-glass);
  }

  &:disabled {
    background: var(--color-bg-tertiary);
    cursor: not-allowed;
  }
`;f(X)`
  text-align: right;
  
  &::after {
    content: '원';
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-secondary);
  }
`;const ee=f.button`
  padding: 1rem;
  background: var(--color-mint-main);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background: var(--color-mint-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:disabled {
    background: var(--color-border-medium);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,re=f.div`
  color: var(--color-red);
  font-size: 0.875rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: var(--color-red);
  background-opacity: 0.1;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-red);
`,te=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  
  .icon {
    font-size: 3rem;
    color: var(--color-green);
    margin-bottom: 1rem;
  }
  
  h2 {
    margin: 0 0 0.5rem 0;
    color: var(--color-text-primary);
    font-size: 1.25rem;
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
  }
`,ae=f.div`
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  text-align: right;
  margin-top: 0.25rem;
`,oe=f.div`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
  line-height: 1.4;
`;function ie(){const[e,r]=c.useState(""),[t,a]=c.useState(""),[o,i]=c.useState(""),[n,l]=c.useState(""),[s,u]=c.useState(""),[g,h]=c.useState(null),[p,b]=c.useState([]),[f,j]=c.useState(!1),[S,I]=c.useState(!1),[$,P]=c.useState(""),D=v(),{user:F}=c.useContext(w);return c.useEffect(()=>{F.loading||F.isLoggedIn||(alert("상품 등록을 위해 로그인이 필요합니다."),D("/login"))},[F.loading,F.isLoggedIn,D]),S?m.jsxs(Q,{children:[m.jsx(z,{}),m.jsx(q,{children:m.jsxs(te,{children:[m.jsx(x,{className:"icon"}),m.jsx("h2",{children:"상품이 등록되었습니다!"}),m.jsx("p",{children:"상품 페이지로 이동합니다..."})]})})]}):m.jsxs(Q,{children:[m.jsx(z,{}),m.jsxs(q,{children:[m.jsx(H,{children:"상품 등록"}),m.jsxs(J,{onSubmit:r=>d(this,null,function*(){var a;r.preventDefault();const i=e.length<2?"제목을 2글자 이상 입력해주세요.":!t||Number(t)<1e3?"가격을 1,000원 이상 입력해주세요.":o.length<10?"상품 설명을 10글자 이상 입력해주세요.":n?s?0===p.filter(e=>e.uploaded).length?"최소 1장의 이미지를 업로드해주세요.":null:"상품 상태를 선택해주세요.":"카테고리를 선택해주세요.";if(i)P(i);else{j(!0),P("");try{if(!(null==F?void 0:F.uid))throw new Error("로그인이 필요합니다.");const r=p.filter(e=>e.uploaded&&e.url).map(e=>e.url),i=p.filter(e=>e.uploaded&&e.thumbnailUrl).map(e=>e.thumbnailUrl),l={title:e.trim(),price:Number(t),description:o.trim(),category:n,condition:s,location:g?{name:g.name,address:g.address,roadAddress:g.roadAddress,coordinates:{lat:g.y,lng:g.x}}:null,images:r,thumbnails:i,createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString(),sellerId:F.uid,sellerName:F.displayName||(null==(a=F.email)?void 0:a.split("@")[0])||"익명",status:"active",views:0,likes:0,chatCount:0},d=yield k.createProduct(l,F.uid);y.userAction("Product created",{productId:d,category:n,price:Number(t),imageCount:r.length}),I(!0),setTimeout(()=>{D(`/product/${d}`)},2e3)}catch(l){y.error("Product creation failed",l,"product-register"),P(l.message||"상품 등록 중 오류가 발생했습니다.")}finally{j(!1)}}}),children:[m.jsxs(V,{children:[m.jsx(Y,{htmlFor:"images",children:"상품 이미지 *"}),m.jsx(B,{images:p,onChange:e=>{b(e)},maxImages:10,disabled:f,showImageInfo:!0})]}),m.jsxs(V,{children:[m.jsx(Y,{htmlFor:"title",children:"제목 *"}),m.jsx(X,{id:"title",type:"text",value:e,onChange:e=>r(e.target.value),placeholder:"상품 제목을 입력하세요",maxLength:100,disabled:f}),m.jsxs(ae,{children:[e.length,"/100"]})]}),m.jsxs(V,{children:[m.jsx(Y,{htmlFor:"category",children:"카테고리 *"}),m.jsxs(Z,{id:"category",value:n,onChange:e=>l(e.target.value),disabled:f,children:[m.jsx("option",{value:"",children:"카테고리 선택"}),W.map(e=>m.jsx("option",{value:e.value,children:e.label},e.value))]})]}),m.jsxs(V,{children:[m.jsx(Y,{htmlFor:"price",children:"가격 *"}),m.jsx(X,{id:"price",type:"text",value:(N=t,N?Number(N).toLocaleString():""),onChange:e=>{const r=e.target.value.replace(/[^0-9]/g,"");a(r)},placeholder:"0",disabled:f})]}),m.jsxs(V,{children:[m.jsx(Y,{children:"거래 희망 위치 (선택사항)"}),m.jsx(C,{value:g,onChange:h,placeholder:"거래를 희망하는 위치를 선택해주세요"}),m.jsx(oe,{children:"위치를 설정하면 근처에 있는 구매자들이 더 쉽게 찾을 수 있어요"})]}),m.jsxs(V,{children:[m.jsx(Y,{htmlFor:"condition",children:"상품 상태 *"}),m.jsxs(Z,{id:"condition",value:s,onChange:e=>u(e.target.value),disabled:f,children:[m.jsx("option",{value:"",children:"상태 선택"}),G.map(e=>m.jsx("option",{value:e.value,children:e.label},e.value))]})]}),m.jsxs(V,{children:[m.jsx(Y,{htmlFor:"description",children:"상품 설명 *"}),m.jsx(K,{id:"description",value:o,onChange:e=>i(e.target.value),placeholder:"상품에 대한 자세한 설명을 작성해주세요",maxLength:2e3,disabled:f}),m.jsxs(ae,{children:[o.length,"/2000"]})]}),$&&m.jsx(re,{children:$}),m.jsx(ee,{type:"submit",disabled:f,children:f?"등록 중...":"상품 등록하기"})]})]})]});var N}export{ie as default};
