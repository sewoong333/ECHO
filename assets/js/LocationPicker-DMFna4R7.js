import{r as e,j as o,i as r,c as a,F as i,al as n}from"./vendor-react-xhcWTtxo.js";import{d}from"./vendor-ui-28GTjlMA.js";const s=d.div`
  width: 100%;
  position: relative;
`,t=d.div`
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid ${e=>e.focused?"var(--color-primary)":"#e0e0e0"};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: var(--color-primary);
  }
`,l=d.div`
  color: var(--color-primary);
  margin-right: 12px;
  font-size: 18px;
`,c=d.div`
  flex: 1;
  color: ${e=>e.hasLocation?"var(--color-text-primary)":"#999"};
  font-size: 16px;
`,p=d.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f5f5f5;
    color: var(--color-red);
  }
`,x=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,u=d.div`
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,m=d.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,g=d.h3`
  margin: 0;
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
`,v=d.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  
  &:hover {
    background: #f5f5f5;
  }
`,f=d.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
`,h=d.div`
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 12px 16px;
  border: 2px solid transparent;
  
  &:focus-within {
    border-color: var(--color-primary);
    background: white;
  }
`,b=d.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  margin-left: 12px;
  
  &::placeholder {
    color: #999;
  }
`,k=d.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  transition: background 0.2s ease;
  
  &:hover {
    background: #f8f9fa;
  }
`,w=d.div`
  color: var(--color-primary);
  margin-right: 12px;
  font-size: 16px;
`,j=d.div`
  color: var(--color-primary);
  font-weight: 500;
  font-size: 16px;
`,y=d.div`
  flex: 1;
  overflow-y: auto;
  max-height: 400px;
`,z=d.div`
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,C=d.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 4px;
`,_=d.div`
  font-size: 14px;
  color: #666;
`,A=d.div`
  padding: 40px 20px;
  text-align: center;
  color: #999;
  font-size: 16px;
`,S=({value:d,onChange:S,placeholder:P="위치를 선택해주세요"})=>{const[F,E]=e.useState(!1),[L,T]=e.useState(""),[$,K]=e.useState([]),[O,G]=e.useState(!1),H=e.useRef(null);e.useEffect(()=>{if(!window.kakao||!window.kakao.maps){const e=document.createElement("script");e.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=undefined&libraries=services&autoload=false",e.onload=()=>{window.kakao.maps.load(()=>{})},document.head.appendChild(e)}},[]);return e.useEffect(()=>(H.current&&clearTimeout(H.current),L.trim()?H.current=setTimeout(()=>{var e,o;e=L,o=function*(){var o,r;e.trim()&&(null==(r=null==(o=window.kakao)?void 0:o.maps)?void 0:r.services)?(G(!0),(new window.kakao.maps.services.Places).keywordSearch(e,(e,o)=>{if(G(!1),o===window.kakao.maps.services.Status.OK){const o=e.slice(0,10).map(e=>({id:e.id,name:e.place_name,address:e.address_name,roadAddress:e.road_address_name,x:parseFloat(e.x),y:parseFloat(e.y),category:e.category_group_name}));K(o)}else K([])})):K([])},new Promise((e,r)=>{var a=e=>{try{n(o.next(e))}catch(a){r(a)}},i=e=>{try{n(o.throw(e))}catch(a){r(a)}},n=o=>o.done?e(o.value):Promise.resolve(o.value).then(a,i);n((o=o.apply(void 0,null)).next())})},300):K([]),()=>{H.current&&clearTimeout(H.current)}),[L]),o.jsxs(s,{children:[o.jsxs(t,{onClick:()=>E(!0),focused:F,children:[o.jsx(l,{children:o.jsx(r,{})}),o.jsx(c,{hasLocation:d,children:d?d.roadAddress||d.address||d.name:P}),d&&o.jsx(p,{onClick:e=>{e.stopPropagation(),S(null)},children:o.jsx(a,{})})]}),F&&o.jsx(x,{onClick:()=>E(!1),children:o.jsxs(u,{onClick:e=>e.stopPropagation(),children:[o.jsxs(m,{children:[o.jsx(g,{children:"위치 검색"}),o.jsx(v,{onClick:()=>E(!1),children:o.jsx(a,{})})]}),o.jsx(f,{children:o.jsxs(h,{children:[o.jsx(i,{color:"#999"}),o.jsx(b,{type:"text",placeholder:"동명, 건물명, 도로명으로 검색",value:L,onChange:e=>T(e.target.value),autoFocus:!0})]})}),o.jsxs(k,{onClick:()=>{navigator.geolocation?(G(!0),navigator.geolocation.getCurrentPosition(e=>{var o,r;const{latitude:a,longitude:i}=e.coords;(null==(r=null==(o=window.kakao)?void 0:o.maps)?void 0:r.services)&&(new window.kakao.maps.services.Geocoder).coord2Address(i,a,(e,o)=>{var r;if(G(!1),o===window.kakao.maps.services.Status.OK){const o=e[0],n={name:"현재 위치",address:o.address.address_name,roadAddress:(null==(r=o.road_address)?void 0:r.address_name)||o.address.address_name,x:i,y:a};S(n),E(!1)}else alert("현재 위치를 가져올 수 없습니다.")})},()=>{G(!1),alert("위치 권한을 허용해주세요.")},{enableHighAccuracy:!0,timeout:1e4,maximumAge:3e5})):alert("위치 서비스가 지원되지 않습니다.")},disabled:O,children:[o.jsx(w,{children:o.jsx(n,{})}),o.jsx(j,{children:O?"위치 확인 중...":"현재 위치 사용"})]}),o.jsxs(y,{children:[O&&L&&o.jsx(A,{children:"검색 중..."}),!O&&L&&0===$.length&&o.jsx(A,{children:"검색 결과가 없습니다."}),$.map(e=>o.jsxs(z,{onClick:()=>(S(e),E(!1),T(""),void K([])),children:[o.jsx(C,{children:e.name}),o.jsxs(_,{children:[e.roadAddress||e.address,e.category&&` • ${e.category}`]})]},e.id))]})]})})]})};export{S as L};
