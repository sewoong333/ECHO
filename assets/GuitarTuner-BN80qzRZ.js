import{r as x,j as t,T as k,i}from"./index-D7Jk6aBN.js";const S="#2ed8b6",y="#1976d2",b=[{name:"E₄",freq:329.63,label:"1번줄 (E4)"},{name:"B₃",freq:246.94,label:"2번줄 (B3)"},{name:"G₃",freq:196,label:"3번줄 (G3)"},{name:"D₃",freq:146.83,label:"4번줄 (D3)"},{name:"A₂",freq:110,label:"5번줄 (A2)"},{name:"E₂",freq:82.41,label:"6번줄 (E2)"}];function M(n,g){return n-g}function R(n){return n==null?"":Math.abs(n)<1?"정확합니다!":n>0?"좀 더 낮게 조정해":"좀 더 높게 조정해"}function E(n,g){let o=n.length,f=0;for(let e=0;e<o;e++)f+=n[e]*n[e];if(f=Math.sqrt(f/o),f<.01)return-1;let r=0,m=o-1,d=.2;for(let e=0;e<o/2;e++)if(Math.abs(n[e])<d){r=e;break}for(let e=1;e<o/2;e++)if(Math.abs(n[o-e])<d){m=o-e;break}n=n.slice(r,m),o=n.length;let c=new Array(o).fill(0);for(let e=0;e<o;e++)for(let s=0;s<o-e;s++)c[e]=c[e]+n[s]*n[s+e];let p=0;for(;c[p]>c[p+1];)p++;let h=-1,u=-1;for(let e=p;e<o;e++)c[e]>h&&(h=c[e],u=e);return g/u}const W=i.div`
  width: 100vw;
  min-height: 100vh;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 180px;
`,q=i.div`
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
`,T=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 18px 0 10px 0;
`,C=i.div`
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
`,F=i.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`,$=i.div`
  font-size: 15px;
  color: #e0e2e6;
  font-weight: 500;
  margin-top: 2px;
  text-align: center;
`;i.div`
  background: ${y};
  border-radius: 22px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  height: 44px;
  box-shadow: 0 2px 8px #b2f0e6;
  cursor: pointer;
`;i.select`
  font-size: 18px;
  font-weight: 700;
  border-radius: 22px;
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  padding: 10px 0 10px 0;
  appearance: none;
  min-width: 110px;
`;i.span`
  color: ${y};
  font-weight: 600;
  font-size: 15px;
  margin-left: 12px;
`;const B=i.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0;
  max-width: 420px;
`,D=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  margin-right: 24px;
  margin-top: 8px;
`,G=i.button`
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
`,H=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,P=i.div`
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
  color: ${y};
  letter-spacing: 2px;
  margin-bottom: 2px;
`;i.div`
  font-size: 18px;
  color: #222;
  font-weight: 700;
  margin-bottom: 0;
`;const O=i.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 2px;
`,_=i.span`
  font-size: 38px;
  font-weight: 900;
  color: ${S};
  line-height: 1;
`,I=i.span`
  font-size: 22px;
  color: #888;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: 3px;
`,L=i.div`
  font-size: 19px;
  color: #444;
  margin-bottom: 18px;
  margin-top: 2px;
  font-weight: 600;
  text-align: center;
`,N=i.div`
  margin-top: 10px;
  color: #888;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`,U=i.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`,Z=(n,g=120)=>{const[o,f]=x.useState(n);return x.useEffect(()=>{let r,m=null,d=o,c=n;const p=h=>{m||(m=h);const u=Math.min((h-m)/g,1);f(d+(c-d)*u),u<1&&(r=requestAnimationFrame(p))};return d!==c&&(r=requestAnimationFrame(p)),()=>r&&cancelAnimationFrame(r)},[n]),o};function X(){const[n,g]=x.useState(null),[o,f]=x.useState(null),[r,m]=x.useState(0),d=x.useRef(null),c=x.useRef(null),p=x.useRef(null),h=x.useRef(null);x.useEffect(()=>{let a=!1;async function e(){const s=await navigator.mediaDevices.getUserMedia({audio:!0}),w=new(window.AudioContext||window.webkitAudioContext);d.current=w;const l=w.createAnalyser();l.fftSize=2048,c.current=l;const v=w.createMediaStreamSource(s);v.connect(l),p.current=v;const A=new Float32Array(l.fftSize),z=()=>{if(a)return;l.getFloatTimeDomainData(A);const j=E(A,w.sampleRate);j>0?(g(j),f(M(j,b[r].freq))):(g(null),f(null)),h.current=requestAnimationFrame(z)};z()}return e(),()=>{a=!0,h.current&&cancelAnimationFrame(h.current),d.current&&d.current.close()}},[r]);const u=Math.max(-100,Math.min(100,o||0));return Z(u),t.jsxs(W,{children:[t.jsx(k,{}),t.jsxs(q,{children:[t.jsxs(T,{children:[t.jsxs(C,{children:["기타 6현",t.jsx(F,{children:"▶"})]}),t.jsx($,{children:"표준"})]}),t.jsxs(B,{children:[t.jsx(D,{children:b.map((a,e)=>t.jsxs(G,{$active:e===r,onClick:()=>m(e),children:[t.jsx("span",{style:{fontSize:22,fontWeight:900,lineHeight:1},children:a.name.split("₁")[0].split("₂")[0].split("₃")[0].split("₄")[0]}),t.jsx("span",{style:{fontSize:15,fontWeight:500,lineHeight:1,marginTop:1},children:a.name.match(/₁|₂|₃|₄/)?a.name.match(/₁|₂|₃|₄/)[0]:""})]},a.name))}),t.jsxs(H,{children:[t.jsxs(P,{style:{background:"none",boxShadow:"none",borderRadius:0,padding:0,margin:"0 auto 18px auto",width:"100%",maxWidth:420,height:220},children:[t.jsxs("svg",{width:"100%",height:"180",viewBox:"0 0 340 180",style:{maxWidth:420,display:"block",margin:"0 auto"},children:[t.jsx("path",{d:"M20 150 A150 150 0 0 1 320 150",fill:"none",stroke:"#e0e2e6",strokeWidth:"14"}),Math.abs(o)<1&&t.jsx("path",{d:"M170 150 L153.16 52.64 A100 100 0 0 1 186.84 52.64 L170 150 Z",fill:"#1976d2",opacity:"0.22"}),[...Array(11)].map((a,e)=>{const s=-100+e*20,l=(s/200*180-90)*Math.PI/180,v=170+120*Math.cos(l),A=150+120*Math.sin(l),z=170+140*Math.cos(l),j=150+140*Math.sin(l);return t.jsxs("g",{children:[t.jsx("line",{x1:v,y1:A,x2:z,y2:j,stroke:s===0?"#1976d2":"#b0b3b8",strokeWidth:s===0?4:2}),t.jsx("text",{x:170+105*Math.cos(l),y:150+105*Math.sin(l)+7,textAnchor:"middle",fontSize:"18",fontWeight:s===0?700:400,fill:s===0?"#222":"#b0b3b8",children:s})]},s)}),t.jsxs("g",{style:{transform:`rotate(${Math.max(-100,Math.min(100,o||0))*.9}deg)`,transformOrigin:"170px 150px"},children:[t.jsx("rect",{x:"167",y:"150",width:"6",height:"-70",rx:"3",fill:"#222"}),t.jsx("circle",{cx:"170",cy:"150",r:"16",fill:"#fff",stroke:"#222",strokeWidth:"5"}),t.jsx("circle",{cx:"170",cy:"150",r:"9",fill:"#222"})]})]}),t.jsxs("div",{style:{position:"absolute",top:10,left:0,width:"100%",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:38,fontWeight:900,color:"#222",letterSpacing:2},children:b[r].name}),t.jsx("div",{style:{fontSize:22,color:"#222",fontWeight:900},children:b[r].freq.toFixed(1)})]})]}),t.jsxs(O,{children:[t.jsx(_,{children:n?n.toFixed(1):"--"}),t.jsx(I,{children:"Hz"})]}),t.jsx(L,{children:R(o)})]})]}),t.jsx(N,{children:"표준튜닝: E₄(329.6) - B₃(246.9) - G₃(196.0) - D₃(146.8) - A₂(110.0) - E₂(82.4)"})]}),t.jsx(U,{children:t.jsxs("svg",{width:"180",height:"180",viewBox:"0 0 180 180",children:[t.jsx("rect",{x:"70",y:"60",width:"40",height:"90",rx:"20",fill:"#bfa07a"}),b.map((a,e)=>t.jsx("line",{x1:90+(e-2.5)*10,y1:150,x2:90+(e-2.5)*10,y2:60,stroke:e===r?y:"#bbb",strokeWidth:e===r?4:2.5},a.name)),b.map((a,e)=>t.jsx("circle",{cx:90+(e-2.5)*10,cy:60,r:7,fill:e===r?y:"#888"},a.name))]})})]})}export{X as default};
