var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,l=(e,o)=>{for(var t in o||(o={}))i.call(o,t)&&r(e,t,o[t]);if(a)for(var t of a(o))n.call(o,t)&&r(e,t,o[t]);return e},s=(e,a)=>o(e,t(a));import{r as d,j as c,i as p,k as u,l as x}from"./vendor-react-xhcWTtxo.js";import{d as h}from"./vendor-ui-28GTjlMA.js";import{p as f,m,T as g}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const v=h.div`
  width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
`,w=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`,y=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,b=h.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
`,j=h.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 8px;
`,k=h.button`
  padding: 8px 16px;
  border: 2px solid ${e=>e.active?"var(--color-primary)":"#e0e0e0"};
  background: ${e=>e.active?"var(--color-primary)":"white"};
  color: ${e=>e.active?"white":"#666"};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    border-color: var(--color-primary);
  }
`,M=h.div`
  width: 100%;
  height: 60vh;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(46, 216, 182, 0.15);
  margin-bottom: 20px;
  position: relative;
`,C=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  color: #666;
  font-size: 16px;
`,L=h.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,P=h.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`,z=h.div`
  display: flex;
  align-items: center;
  justify-content: between;
  margin-bottom: 8px;
`,$=h.h3`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
  flex: 1;
`,S=h.span`
  background: var(--color-primary);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`,O=h.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;
  margin: 8px 0;
  
  svg {
    margin-right: 6px;
  }
`,E=h.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 12px;
  color: #999;
  margin-top: 8px;
`,I=h.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,q=h.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-size: 16px;
`,A=[{value:"all",label:"전체"},{value:"products",label:"중고악기"},{value:"musiclife",label:"음악생활"},{value:"guitar",label:"기타"},{value:"piano",label:"피아노"},{value:"drums",label:"드럼"},{value:"performance",label:"공연"},{value:"lesson",label:"레슨"},{value:"nearby",label:"내 주변"}];function B(){const[e,o]=d.useState([]),[t,a]=d.useState(!0),[i,n]=d.useState("all"),[r,h]=d.useState(null),[B,N]=d.useState(null),[T,W]=d.useState([]),D=d.useRef(null);d.useEffect(()=>{const e=document.createElement("script");return e.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=undefined&autoload=false",e.onload=()=>{window.kakao.maps.load(()=>{const e=D.current,o={center:new window.kakao.maps.LatLng(37.5665,126.978),level:8},t=new window.kakao.maps.Map(e,o);N(t)})},document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]),d.useEffect(()=>{R()},[R]),d.useEffect(()=>{B&&e.length>0&&Y()},[B,e.length,Y]);const R=d.useCallback(()=>{return e=this,t=function*(){a(!0);try{let e=[];if("all"===i||"products"===i||"nearby"===i||["guitar","piano","drums"].includes(i)){const o=(yield f.getProducts({limit:100,category:["guitar","piano","drums"].includes(i)?i:void 0})).filter(e=>e.location&&e.location.coordinates).map(e=>s(l({},e),{type:"product",displayCategory:F(e.category)}));e.push(...o)}if("all"===i||"musiclife"===i||"nearby"===i||["performance","lesson"].includes(i)){const o=(yield m.getPosts({limit:100,category:["performance","lesson"].includes(i)?i:void 0})).filter(e=>e.location&&e.location.coordinates).map(e=>s(l({},e),{type:"musiclife",displayCategory:F(e.category)}));e.push(...o)}"nearby"===i&&r&&(e=e.filter(e=>{var o;return!!(null==(o=e.location)?void 0:o.coordinates)&&G(r.lat,r.lng,e.location.coordinates.lat,e.location.coordinates.lng)<=10})),o(e)}catch(e){}finally{a(!1)}},new Promise((o,a)=>{var i=e=>{try{r(t.next(e))}catch(o){a(o)}},n=e=>{try{r(t.throw(e))}catch(o){a(o)}},r=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,n);r((t=t.apply(e,null)).next())});var e,t},[i,r]),Y=d.useCallback(()=>{T.forEach(e=>e.setMap(null));const o=[];if(e.forEach(e=>{var t;if(!(null==(t=e.location)?void 0:t.coordinates))return;const{lat:a,lng:i}=e.location.coordinates,n=new window.kakao.maps.LatLng(a,i),r=new window.kakao.maps.Marker({position:n,map:B}),l=`\n        <div style="padding: 12px; min-width: 200px; max-width: 300px;">\n          <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #333;">\n            ${e.title}\n          </div>\n          <div style="font-size: 12px; color: #666; margin-bottom: 8px;">\n            ${e.displayCategory}\n          </div>\n          <div style="font-size: 12px; color: #888;">\n            📍 ${e.location.roadAddress||e.location.address}\n          </div>\n          ${"product"===e.type&&e.price?`\n            <div style="font-size: 12px; color: #2ed8b6; font-weight: 600; margin-top: 4px;">\n              ${e.price.toLocaleString()}원\n            </div>\n          `:""}\n        </div>\n      `,s=new window.kakao.maps.InfoWindow({content:l});window.kakao.maps.event.addListener(r,"click",()=>{s.open(B,r),setTimeout(()=>{s.close()},3e3)}),o.push(r)}),W(o),o.length>0){const o=new window.kakao.maps.LatLngBounds;e.forEach(e=>{var t;if(null==(t=e.location)?void 0:t.coordinates){const{lat:t,lng:a}=e.location.coordinates;o.extend(new window.kakao.maps.LatLng(t,a))}}),B.setBounds(o)}},[B,e,T]),F=e=>({guitar:"🎸 기타",bass:"🎸 베이스",piano:"🎹 피아노",drums:"🥁 드럼",wind:"🎺 관악기",string:"🎻 현악기",audio:"🔊 음향장비",performance:"🎤 공연",lesson:"📚 레슨",collaboration:"🤝 합주","gear-review":"⭐ 장비리뷰",tips:"💡 연주팁","music-share":"🎵 음악공유",free:"💬 자유게시판"}[e]||"🎶 기타"),G=(e,o,t,a)=>{const i=(t-e)*Math.PI/180,n=(a-o)*Math.PI/180,r=Math.sin(i/2)*Math.sin(i/2)+Math.cos(e*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2);return 2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))*6371};return c.jsxs(v,{children:[c.jsx(g,{}),c.jsxs(w,{children:[c.jsx(y,{children:c.jsx(b,{children:"동네지도"})}),c.jsx(j,{children:A.map(e=>c.jsx(k,{active:i===e.value,onClick:()=>{return o=e.value,n(o),void("nearby"!==o||r||(navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{const{latitude:o,longitude:t}=e.coords;if(h({lat:o,lng:t}),B){const e=new window.kakao.maps.LatLng(o,t);B.setCenter(e),B.setLevel(5)}},()=>{alert("위치 권한을 허용해주세요.")}):alert("위치 서비스가 지원되지 않습니다.")));var o},children:e.label},e.value))}),c.jsx(M,{children:B?c.jsx("div",{ref:D,style:{width:"100%",height:"100%"}}):c.jsx(C,{children:"지도를 로딩중입니다..."})}),c.jsx(L,{children:t?c.jsx(q,{children:"게시물을 불러오는 중..."}):0===e.length?c.jsxs(q,{children:["현재 위치 정보가 있는 게시물이 없습니다.",c.jsx("br",{}),"상품 등록이나 음악생활 글 작성 시 위치를 추가해보세요!"]}):e.map(e=>c.jsxs(P,{onClick:()=>(e=>{"product"===e.type?window.location.href=`/product/${e.id}`:window.location.href=`/musiclife/${e.id}`})(e),children:[c.jsxs(z,{children:[c.jsx($,{children:e.title}),c.jsx(S,{children:e.displayCategory})]}),c.jsxs(O,{children:[c.jsx(p,{}),e.location.roadAddress||e.location.address]}),"product"===e.type&&e.price&&c.jsxs("div",{style:{fontSize:"16px",fontWeight:"600",color:"var(--color-primary)",margin:"8px 0"},children:[e.price.toLocaleString(),"원"]}),c.jsxs(E,{children:[c.jsxs(I,{children:[c.jsx(u,{}),e.views||e.viewCount||0]}),c.jsxs(I,{children:[c.jsx(x,{}),e.likes||e.likeCount||0]}),c.jsxs(I,{children:["작성자: ",e.sellerName||e.authorName||"익명"]})]})]},`${e.type}-${e.id}`))})]})]})}export{B as default};
