import{r as e,j as t}from"./vendor-react-xhcWTtxo.js";import{d as i}from"./vendor-ui-28GTjlMA.js";import{T as n}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const r=[{name:"G₂",freq:98,label:"1번줄 (G2)"},{name:"D₂",freq:73.42,label:"2번줄 (D2)"},{name:"A₁",freq:55,label:"3번줄 (A1)"},{name:"E₁",freq:41.2,label:"4번줄 (E1)"}];function o(e){return null==e?"":Math.abs(e)<1?"정확합니다!":e>0?"좀 더 낮게 조정해":"좀 더 높게 조정해"}const a=i.div`
  width: 100vw;
  min-height: 100vh;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 180px;
`,l=i.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  background: none;
  z-index: 2;
`,s=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 18px 0 10px 0;
`,d=i.div`
  background: #1976d2;
  border-radius: 22px;
  display: flex;
  align-items: center;
  padding: 0 22px 0 22px;
  height: 44px;
  box-shadow: 0 2px 8px #b2f0e6;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
  position: relative;
`,x=i.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`,c=i.div`
  font-size: 15px;
  color: #e0e2e6;
  font-weight: 500;
  margin-top: 2px;
  text-align: center;
`,f=i.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0;
  max-width: 480px;
  margin-top: 8px;
`,p=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  margin-right: 24px;
  margin-top: 8px;
`,h=i.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2.5px solid ${({$active:e})=>e?"#1976d2":"#e0e2e6"};
  background: ${({$active:e})=>e?"#1976d2":"#fff"};
  color: ${({$active:e})=>e?"#fff":"#222"};
  font-weight: 900;
  font-size: 24px;
  outline: none;
  cursor: pointer;
  box-shadow: ${({$active:e})=>e?"0 2px 8px #b2f0e6":"none"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition:
    background 0.18s,
    color 0.18s,
    border 0.18s;
  letter-spacing: 1px;
  padding: 0;
`,m=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0;
`,g=i.div`
  width: 100%;
  max-width: 340px;
  height: 220px;
  margin: 0 auto 18px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 32px;
  box-shadow:
    0 4px 32px 0 rgba(46, 216, 182, 0.1),
    0 1.5px 8px 0 #b2f0e6;
  padding-top: 12px;
  padding-bottom: 18px;
  @media (max-width: 480px) {
    max-width: 98vw;
    height: 180px;
    border-radius: 18px;
    padding-top: 6px;
    padding-bottom: 10px;
  }
`;i.div`
  font-size: 32px;
  font-weight: 800;
  color: ${"#1976d2"};
  letter-spacing: 2px;
  margin-bottom: 2px;
`,i.div`
  font-size: 18px;
  color: #222;
  font-weight: 700;
  margin-bottom: 0;
`,i.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 2px;
`,i.span`
  font-size: 38px;
  font-weight: 900;
  color: ${"#2ed8b6"};
  line-height: 1;
`,i.span`
  font-size: 22px;
  color: #888;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: 3px;
`,i.div`
  font-size: 19px;
  color: #444;
  margin-bottom: 18px;
  margin-top: 2px;
  font-weight: 600;
  text-align: center;
`;const u=i.div`
  margin-top: 10px;
  color: #888;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`,b=i.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: 200px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`;function j(){const[i,j]=e.useState(null),[y,w]=e.useState(null),[v,k]=e.useState(0),z=e.useRef(null),M=e.useRef(null),A=e.useRef(null),S=e.useRef(null);return e.useEffect(()=>{let e=!1;return function(){return t=this,i=function*(){const t=yield navigator.mediaDevices.getUserMedia({audio:!0}),i=new(window.AudioContext||window.webkitAudioContext);z.current=i;const n=i.createAnalyser();n.fftSize=2048,M.current=n;const o=i.createMediaStreamSource(t);o.connect(n),A.current=o;const a=new Float32Array(n.fftSize),l=()=>{if(e)return;n.getFloatTimeDomainData(a);const t=function(e,t){let i=e.length,n=0;for(let x=0;x<i;x++)n+=e[x]*e[x];if(n=Math.sqrt(n/i),n<.01)return-1;let r=0,o=i-1;for(let x=0;x<i/2;x++)if(Math.abs(e[x])<.2){r=x;break}for(let x=1;x<i/2;x++)if(Math.abs(e[i-x])<.2){o=i-x;break}i=(e=e.slice(r,o)).length;let a=new Array(i).fill(0);for(let x=0;x<i;x++)for(let t=0;t<i-x;t++)a[x]=a[x]+e[t]*e[t+x];let l=0;for(;a[l]>a[l+1];)l++;let s=-1,d=-1;for(let x=l;x<i;x++)a[x]>s&&(s=a[x],d=x);return t/d}(a,i.sampleRate);t>0?(j(t),w(function(e,t){return e-t}(t,r[v].freq))):(j(null),w(null)),S.current=requestAnimationFrame(l)};l()},new Promise((e,n)=>{var r=e=>{try{a(i.next(e))}catch(t){n(t)}},o=e=>{try{a(i.throw(e))}catch(t){n(t)}},a=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,o);a((i=i.apply(t,null)).next())});var t,i}(),()=>{e=!0,S.current&&cancelAnimationFrame(S.current),z.current&&z.current.close()}},[v]),((t,i=120)=>{const[n,r]=e.useState(t);e.useEffect(()=>{let e,o=null,a=n,l=t;const s=t=>{o||(o=t);const n=Math.min((t-o)/i,1);r(a+(l-a)*n),n<1&&(e=requestAnimationFrame(s))};return a!==l&&(e=requestAnimationFrame(s)),()=>e&&cancelAnimationFrame(e)},[t])})(Math.max(-100,Math.min(100,y||0))),t.jsxs(a,{children:[t.jsx(n,{}),t.jsxs(l,{children:[t.jsxs(s,{children:[t.jsxs(d,{children:["베이스 4현",t.jsx(x,{children:"▶"})]}),t.jsx(c,{children:"표준"})]}),t.jsxs(f,{children:[t.jsx(p,{children:r.map((e,i)=>t.jsxs(h,{$active:i===v,onClick:()=>k(i),children:[t.jsx("span",{style:{fontSize:22,fontWeight:900,lineHeight:1},children:e.name.split("₁")[0].split("₂")[0]}),t.jsx("span",{style:{fontSize:15,fontWeight:500,lineHeight:1,marginTop:1},children:e.name.match(/₁|₂/)?e.name.match(/₁|₂/)[0].replace("₁","₁").replace("₂","₂"):""})]},e.name))}),t.jsxs(m,{children:[t.jsxs(g,{style:{background:"none",boxShadow:"none",borderRadius:0,padding:0,margin:"0 auto 18px auto",width:"100%",maxWidth:420,height:220},children:[t.jsxs("svg",{width:"100%",height:"180",viewBox:"0 0 340 180",style:{maxWidth:420,display:"block",margin:"0 auto"},children:[t.jsx("path",{d:"M20 150 A150 150 0 0 1 320 150",fill:"none",stroke:"#e0e2e6",strokeWidth:"14"}),Math.abs(y)<1&&t.jsx("path",{d:"M170 150 L153.16 52.64 A100 100 0 0 1 186.84 52.64 L170 150 Z",fill:"#1976d2",opacity:"0.22"}),[...Array(11)].map((e,i)=>{const n=20*i-100,r=(n/200*180-90)*Math.PI/180,o=170+120*Math.cos(r),a=150+120*Math.sin(r),l=170+140*Math.cos(r),s=150+140*Math.sin(r);return t.jsxs("g",{children:[t.jsx("line",{x1:o,y1:a,x2:l,y2:s,stroke:0===n?"#1976d2":"#b0b3b8",strokeWidth:0===n?4:2}),t.jsx("text",{x:170+105*Math.cos(r),y:150+105*Math.sin(r)+7,textAnchor:"middle",fontSize:"18",fontWeight:0===n?700:400,fill:0===n?"#222":"#b0b3b8",children:n})]},n)}),t.jsxs("g",{style:{transform:`rotate(${.9*Math.max(-100,Math.min(100,y||0))}deg)`,transformOrigin:"170px 150px"},children:[t.jsx("rect",{x:"167",y:"150",width:"6",height:"-70",rx:"3",fill:"#222",filter:"url(#shadow)"}),t.jsx("circle",{cx:"170",cy:"150",r:"16",fill:"#fff",stroke:"#222",strokeWidth:"5"}),t.jsx("circle",{cx:"170",cy:"150",r:"9",fill:"#222"})]})]}),t.jsxs("div",{style:{position:"absolute",top:10,left:0,width:"100%",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:38,fontWeight:900,color:"#222",letterSpacing:2},children:r[v].name}),t.jsx("div",{style:{fontSize:22,color:"#222",fontWeight:900},children:r[v].freq.toFixed(1)})]})]}),t.jsxs("div",{style:{fontSize:"32px",fontWeight:900,color:"#222",textAlign:"center",marginTop:"18px",letterSpacing:"0.5px",lineHeight:1.1},children:[i?i.toFixed(1):"--",t.jsx("span",{style:{fontWeight:500,fontSize:"22px",marginLeft:2},children:"헤르츠"})]}),t.jsx("div",{style:{fontSize:"20px",color:"#888",textAlign:"center",marginTop:"4px",fontWeight:600},children:i?o(y):"소리를 들려주세요"})]})]}),t.jsx(u,{children:"표준튜닝: G₂(98.0) - D₂(73.4) - A₁(55.0) - E₁(41.2)"})]}),t.jsx(b,{children:t.jsxs("svg",{width:"180",height:"180",viewBox:"0 0 180 180",children:[t.jsx("path",{d:"M60 160 Q70 80 90 60 Q120 40 140 60 Q160 80 120 170 Z",fill:"#bfa07a",stroke:"#a88b6a",strokeWidth:"3"}),r.map((e,i)=>{const n=80+16*i;return t.jsx("line",{x1:n,y1:160,x2:n-2,y2:60,stroke:i===v?"#1976d2":"#d0d2d6",strokeWidth:i===v?4:2.2},e.name)}),r.map((e,i)=>{const n=78+16*i;return t.jsx("circle",{cx:n-2,cy:60,r:8,fill:i===v?"#1976d2":"#bbb",stroke:"#888",strokeWidth:"1.5"},e.name)})]})})]})}export{j as default};
