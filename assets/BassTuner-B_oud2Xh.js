import{r as x,j as e,T as A,i as r}from"./index-DGNRr8H-.js";const k="#2ed8b6",z="#1976d2",b=[{name:"G₂",freq:98,label:"1번줄 (G2)"},{name:"D₂",freq:73.42,label:"2번줄 (D2)"},{name:"A₁",freq:55,label:"3번줄 (A1)"},{name:"E₁",freq:41.2,label:"4번줄 (E1)"}];function M(n,g){return n-g}function W(n){return n==null?"":Math.abs(n)<1?"정확합니다!":n>0?"좀 더 낮게 조정해":"좀 더 높게 조정해"}function R(n,g){let i=n.length,f=0;for(let t=0;t<i;t++)f+=n[t]*n[t];if(f=Math.sqrt(f/i),f<.01)return-1;let s=0,m=i-1,d=.2;for(let t=0;t<i/2;t++)if(Math.abs(n[t])<d){s=t;break}for(let t=1;t<i/2;t++)if(Math.abs(n[i-t])<d){m=i-t;break}n=n.slice(s,m),i=n.length;let c=new Array(i).fill(0);for(let t=0;t<i;t++)for(let o=0;o<i-t;o++)c[t]=c[t]+n[o]*n[o+t];let p=0;for(;c[p]>c[p+1];)p++;let h=-1,u=-1;for(let t=p;t<i;t++)c[t]>h&&(h=c[t],u=t);return g/u}const T=r.div`
  width: 100vw;
  min-height: 100vh;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 180px;
`,C=r.div`
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
`,E=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 18px 0 10px 0;
`,q=r.div`
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
`,F=r.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`,D=r.div`
  font-size: 15px;
  color: #e0e2e6;
  font-weight: 500;
  margin-top: 2px;
  text-align: center;
`,$=r.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0;
  max-width: 480px;
  margin-top: 8px;
`,B=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  margin-right: 24px;
  margin-top: 8px;
`,H=r.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2.5px solid ${({$active:n})=>n?"#1976d2":"#e0e2e6"};
  background: ${({$active:n})=>n?"#1976d2":"#fff"};
  color: ${({$active:n})=>n?"#fff":"#222"};
  font-weight: 900;
  font-size: 24px;
  outline: none;
  cursor: pointer;
  box-shadow: ${({$active:n})=>n?"0 2px 8px #b2f0e6":"none"};
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
`,G=r.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0;
`,O=r.div`
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
`;r.div`
  font-size: 32px;
  font-weight: 800;
  color: ${z};
  letter-spacing: 2px;
  margin-bottom: 2px;
`;r.div`
  font-size: 18px;
  color: #222;
  font-weight: 700;
  margin-bottom: 0;
`;r.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 2px;
`;r.span`
  font-size: 38px;
  font-weight: 900;
  color: ${k};
  line-height: 1;
`;r.span`
  font-size: 22px;
  color: #888;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: 3px;
`;r.div`
  font-size: 19px;
  color: #444;
  margin-bottom: 18px;
  margin-top: 2px;
  font-weight: 600;
  text-align: center;
`;const P=r.div`
  margin-top: 10px;
  color: #888;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`,L=r.div`
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
`,_=(n,g=120)=>{const[i,f]=x.useState(n);return x.useEffect(()=>{let s,m=null,d=i,c=n;const p=h=>{m||(m=h);const u=Math.min((h-m)/g,1);f(d+(c-d)*u),u<1&&(s=requestAnimationFrame(p))};return d!==c&&(s=requestAnimationFrame(p)),()=>s&&cancelAnimationFrame(s)},[n]),i};function Z(){const[n,g]=x.useState(null),[i,f]=x.useState(null),[s,m]=x.useState(0),d=x.useRef(null),c=x.useRef(null),p=x.useRef(null),h=x.useRef(null);x.useEffect(()=>{let a=!1;async function t(){const o=await navigator.mediaDevices.getUserMedia({audio:!0}),w=new(window.AudioContext||window.webkitAudioContext);d.current=w;const l=w.createAnalyser();l.fftSize=2048,c.current=l;const j=w.createMediaStreamSource(o);j.connect(l),p.current=j;const v=new Float32Array(l.fftSize),S=()=>{if(a)return;l.getFloatTimeDomainData(v);const y=R(v,w.sampleRate);y>0?(g(y),f(M(y,b[s].freq))):(g(null),f(null)),h.current=requestAnimationFrame(S)};S()}return t(),()=>{a=!0,h.current&&cancelAnimationFrame(h.current),d.current&&d.current.close()}},[s]);const u=Math.max(-100,Math.min(100,i||0));return _(u),e.jsxs(T,{children:[e.jsx(A,{}),e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsxs(q,{children:["베이스 4현",e.jsx(F,{children:"▶"})]}),e.jsx(D,{children:"표준"})]}),e.jsxs($,{children:[e.jsx(B,{children:b.map((a,t)=>e.jsxs(H,{$active:t===s,onClick:()=>m(t),children:[e.jsx("span",{style:{fontSize:22,fontWeight:900,lineHeight:1},children:a.name.split("₁")[0].split("₂")[0]}),e.jsx("span",{style:{fontSize:15,fontWeight:500,lineHeight:1,marginTop:1},children:a.name.match(/₁|₂/)?a.name.match(/₁|₂/)[0].replace("₁","₁").replace("₂","₂"):""})]},a.name))}),e.jsxs(G,{children:[e.jsxs(O,{style:{background:"none",boxShadow:"none",borderRadius:0,padding:0,margin:"0 auto 18px auto",width:"100%",maxWidth:420,height:220},children:[e.jsxs("svg",{width:"100%",height:"180",viewBox:"0 0 340 180",style:{maxWidth:420,display:"block",margin:"0 auto"},children:[e.jsx("path",{d:"M20 150 A150 150 0 0 1 320 150",fill:"none",stroke:"#e0e2e6",strokeWidth:"14"}),Math.abs(i)<1&&e.jsx("path",{d:"M170 150 L153.16 52.64 A100 100 0 0 1 186.84 52.64 L170 150 Z",fill:"#1976d2",opacity:"0.22"}),[...Array(11)].map((a,t)=>{const o=-100+t*20,l=(o/200*180-90)*Math.PI/180,j=170+120*Math.cos(l),v=150+120*Math.sin(l),S=170+140*Math.cos(l),y=150+140*Math.sin(l);return e.jsxs("g",{children:[e.jsx("line",{x1:j,y1:v,x2:S,y2:y,stroke:o===0?"#1976d2":"#b0b3b8",strokeWidth:o===0?4:2}),e.jsx("text",{x:170+105*Math.cos(l),y:150+105*Math.sin(l)+7,textAnchor:"middle",fontSize:"18",fontWeight:o===0?700:400,fill:o===0?"#222":"#b0b3b8",children:o})]},o)}),e.jsxs("g",{style:{transform:`rotate(${Math.max(-100,Math.min(100,i||0))*.9}deg)`,transformOrigin:"170px 150px"},children:[e.jsx("rect",{x:"167",y:"150",width:"6",height:"-70",rx:"3",fill:"#222",filter:"url(#shadow)"}),e.jsx("circle",{cx:"170",cy:"150",r:"16",fill:"#fff",stroke:"#222",strokeWidth:"5"}),e.jsx("circle",{cx:"170",cy:"150",r:"9",fill:"#222"})]})]}),e.jsxs("div",{style:{position:"absolute",top:10,left:0,width:"100%",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:38,fontWeight:900,color:"#222",letterSpacing:2},children:b[s].name}),e.jsx("div",{style:{fontSize:22,color:"#222",fontWeight:900},children:b[s].freq.toFixed(1)})]})]}),e.jsxs("div",{style:{fontSize:"32px",fontWeight:900,color:"#222",textAlign:"center",marginTop:"18px",letterSpacing:"0.5px",lineHeight:1.1},children:[n?n.toFixed(1):"--",e.jsx("span",{style:{fontWeight:500,fontSize:"22px",marginLeft:2},children:"헤르츠"})]}),e.jsx("div",{style:{fontSize:"20px",color:"#888",textAlign:"center",marginTop:"4px",fontWeight:600},children:n?W(i):"소리를 들려주세요"})]})]}),e.jsx(P,{children:"표준튜닝: G₂(98.0) - D₂(73.4) - A₁(55.0) - E₁(41.2)"})]}),e.jsx(L,{children:e.jsxs("svg",{width:"180",height:"180",viewBox:"0 0 180 180",children:[e.jsx("path",{d:"M60 160 Q70 80 90 60 Q120 40 140 60 Q160 80 120 170 Z",fill:"#bfa07a",stroke:"#a88b6a",strokeWidth:"3"}),b.map((a,t)=>{const o=80+t*16;return e.jsx("line",{x1:o,y1:160,x2:o-2,y2:60,stroke:t===s?"#1976d2":"#d0d2d6",strokeWidth:t===s?4:2.2},a.name)}),b.map((a,t)=>{const o=78+t*16;return e.jsx("circle",{cx:o-2,cy:60,r:8,fill:t===s?"#1976d2":"#bbb",stroke:"#888",strokeWidth:"1.5"},a.name)})]})})]})}export{Z as default};
