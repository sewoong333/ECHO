import{r as e,j as r}from"./vendor-react-xhcWTtxo.js";import{d as i}from"./vendor-ui-28GTjlMA.js";import{T as a}from"./index-czRqZILZ.js";import"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const n=i.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0f7fa 100%);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  box-sizing: border-box;
`,t=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  min-width: 0;
  margin: 0 auto;
  padding: 0 0 80px 0;
  box-sizing: border-box;
  overflow-x: hidden;
`,o=i.section`
  width: 100%;
  max-width: 480px;
  background: linear-gradient(120deg, #2ed8b6 60%, #26c4a8 100%);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(46, 216, 182, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.2rem 14px 2.5rem 14px;
  margin: 0 auto 2.2rem auto;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`,s=i.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.1rem;
  flex-wrap: wrap;
`,l=i.span`
  background: #fff;
  color: #2ed8b6;
  font-weight: 700;
  font-size: 0.98rem;
  border-radius: 12px;
  padding: 0.32em 0.9em;
  box-shadow: 0 2px 8px rgba(46, 216, 182, 0.1);
  display: inline-block;
`,d=i.h1`
  font-size: 2.4rem;
  font-weight: 900;
  color: #222;
  background: none;
  text-shadow:
    0 2px 8px rgba(34, 34, 34, 0.1),
    0 0px 0px #fff;
  margin-bottom: 0.7rem;
  text-align: center;
  line-height: 1.3;
  word-break: keep-all;
`,x=i.p`
  font-size: 1.13rem;
  color: #f8fafc;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.2rem;
  line-height: 1.5;
`,c=i.a`
  display: block;
  width: 100%;
  max-width: 360px;
  margin: 1.7rem auto 0 auto;
  background: #222;
  color: #fff;
  font-size: 1.23rem;
  font-weight: 900;
  text-align: center;
  border-radius: 18px;
  padding: 1.3rem 0;
  box-shadow: 0 6px 24px rgba(34, 34, 34, 0.18);
  text-decoration: none;
  letter-spacing: 0.01em;
  border: 2.5px solid #fff;
  outline: 2.5px solid #2ed8b6;
  transition:
    background 0.18s,
    color 0.18s,
    box-shadow 0.18s,
    border 0.18s;
  &:active {
    background: #2ed8b6;
    color: #fff;
    transform: scale(0.98);
  }
  &:hover {
    background: #fff;
    color: #222;
    border: 2.5px solid #2ed8b6;
    outline: 2.5px solid #fff;
    box-shadow: 0 10px 32px rgba(46, 216, 182, 0.22);
  }
`,m=i.section`
  width: 100%;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  padding: 0 10px;
  box-sizing: border-box;
`,h=i.div`
  display: flex;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
`,g=i.button`
  flex: 1 1 0;
  min-width: 120px;
  background: ${({active:e})=>e?"linear-gradient(90deg, #2ed8b6 60%, #26c4a8 100%)":"#fff"}};
  color: ${({active:e})=>e?"#fff":"#1a4740"};
  border: none;
  border-radius: 18px;
  box-shadow: ${({active:e})=>e?"0 6px 24px rgba(46,216,182,0.18)":"0 2px 10px rgba(46,216,182,0.07)"};
  padding: 1.3rem 0.7rem;
  font-size: 1.13rem;
  font-weight: 800;
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s,
    box-shadow 0.18s,
    transform 0.18s;
  outline: ${({active:e})=>e?"2px solid #26c4a8":"none"};
  transform: ${({active:e})=>e?"scale(1.06)":"scale(1)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: linear-gradient(90deg, #2ed8b6 60%, #26c4a8 100%);
    color: #fff;
    transform: scale(1.06);
    box-shadow: 0 8px 28px rgba(46, 216, 182, 0.22);
  }
`,p=i.div`
  font-size: 0.97rem;
  color: #888;
  margin-bottom: 1.1rem;
  text-align: left;
`,b=i.div`
  display: flex;
  gap: 0.7rem;
  margin-bottom: 1.1rem;
`,f=i.input`
  flex: 1;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  border: 1.5px solid #e0e0e0;
  font-size: 1rem;
  background: #f8fafc;
  outline: none;
`,u=i.select`
  flex: 1;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  border: 1.5px solid #e0e0e0;
  font-size: 1rem;
  background: #f8fafc;
  outline: none;
`,j=i.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(46, 216, 182, 0.07);
  padding: 1.2rem 10px;
  margin-bottom: 1.2rem;
  text-align: center;
  font-size: 1.13rem;
  color: #1a4740;
  font-weight: 700;
`,v=i.section`
  width: 100%;
  max-width: 480px;
  margin: 0 auto 2.5rem auto;
  padding: 1.5rem 14px;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 4px 18px rgba(46, 216, 182, 0.1);
  box-sizing: border-box;
`,w=i.h2`
  font-size: 1.18rem;
  font-weight: 800;
  color: #2ed8b6;
  margin-bottom: 0.7rem;
`,y=i.p`
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 0.2rem;
  text-align: left;
`,k=i.div`
  display: flex;
  gap: 1.1rem;
  margin-bottom: 1.1rem;
  flex-wrap: wrap;
`,z=i.div`
  background: #e0f7fa;
  color: #2ed8b6;
  font-weight: 800;
  border-radius: 12px;
  padding: 0.7em 1.2em;
  font-size: 1.05rem;
  box-shadow: 0 2px 8px rgba(46, 216, 182, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5em;
`,S=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`,C=i.div`
  display: flex;
  align-items: flex-start;
  background: #f8fafc;
  border-radius: 12px;
  padding: 1rem 10px;
  gap: 1rem;
  border-left: 5px solid #2ed8b6;
`,P=i.div`
  width: 2.1rem;
  height: 2.1rem;
  background: #2ed8b6;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 800;
  margin-right: 0.7rem;
`,T=i(v)`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(46, 216, 182, 0.07);
  padding: 1.2rem 10px 1.5rem 10px;
  margin-bottom: 1.7rem;
`,A=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`,Y=i.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 1.1rem 12px;
  font-size: 1.08rem;
  color: #444;
  box-shadow: 0 2px 10px rgba(46, 216, 182, 0.1);
  display: flex;
  align-items: center;
  gap: 1.1rem;
`,B=i.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.7rem;
  border: 2.5px solid #2ed8b6;
`,M=i.div`
  flex: 1;
`,$=i.div`
  font-size: 1.05rem;
  color: #2ed8b6;
  font-weight: 900;
`,E=i.div`
  color: #ffb300;
  font-size: 1.25rem;
  margin-bottom: 0.2rem;
`,O=i(v)`
  background: linear-gradient(90deg, #fffde7 60%, #ffe082 100%);
  border: 2.5px solid #ffb300;
  box-shadow: 0 4px 18px rgba(255, 193, 7, 0.13);
  text-align: center;
`,W=i.h3`
  font-size: 1.13rem;
  font-weight: 800;
  color: #2ed8b6;
  margin-bottom: 0.7rem;
`,F=i.p`
  font-size: 1.01rem;
  color: #b26a00;
  margin-bottom: 0.2rem;
`,K=i(v)`
  background: #f8fafc;
  border: 2px solid #e0f7fa;
`,N=i.ul`
  padding-left: 1.1rem;
  li {
    font-size: 0.98rem;
    color: #444;
    margin-bottom: 0.5rem;
    list-style: disc inside;
  }
`,R=i.footer`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  color: #6c757d;
  font-size: 0.875rem;
  margin-top: 2.5rem;
`,q=[{key:"quick",label:"급매가격",desc:"당장 빨리 팔고 싶은 분",calc:e=>Math.round(.7*e)},{key:"consign",label:"위탁판매",desc:"천천히 팔아도 되는데 위탁으로 판매하고 싶은 분",calc:e=>Math.round(.9*e)},{key:"rental",label:"위탁임대",desc:"팔기는 아까운데 돈이 필요하신 분",calc:e=>Math.round(.08*e)}],J=[{label:"기타",value:"guitar"},{label:"피아노",value:"piano"},{label:"드럼",value:"drum"},{label:"신디사이저",value:"synth"},{label:"관악기",value:"wind"},{label:"현악기",value:"string"},{label:"기타(직접입력)",value:"custom"}],Q={guitar:["Fender","Gibson","Yamaha","Cort","Squier","기타(직접입력)"],piano:["Yamaha","Kawai","Samick","Young Chang","Roland","기타(직접입력)"],drum:["Yamaha","Pearl","Tama","Mapex","Roland","기타(직접입력)"],synth:["Roland","Korg","Yamaha","Nord","Arturia","기타(직접입력)"],wind:["Yamaha","Selmer","Jupiter","Yanagisawa","기타(직접입력)"],string:["Yamaha","Stentor","Eastman","기타(직접입력)"],custom:["직접입력"]},D={Fender:["Stratocaster","Telecaster","Jazzmaster","기타(직접입력)"],Gibson:["Les Paul","SG","ES-335","기타(직접입력)"],Yamaha:["C40","U1","P-45","P-125","기타(직접입력)"],Roland:["FP-30","TD-1DMK","FA-06","기타(직접입력)"],Korg:["Kross 2","Minilogue","기타(직접입력)"],Squier:["Affinity","Classic Vibe","기타(직접입력)"],"기타":["직접입력"],"기타(직접입력)":["직접입력"],"직접입력":["직접입력"]};function G(){const[i,G]=e.useState("quick"),[H,I]=e.useState("guitar"),[L,U]=e.useState(1),[V,X]=e.useState(""),[Z,_]=e.useState(!1),[ee,re]=e.useState(""),[ie,ae]=e.useState(""),[ne,te]=e.useState(!1),[oe,se]=e.useState(""),[le,de]=e.useState(null),[xe,ce]=e.useState(""),[me,he]=e.useState(""),[ge,pe]=e.useState(""),be="custom"===H?Number(V)||5e5:J.find(e=>e.value===H).base,fe=Number(L),ue=Math.round(be*fe);q.find(e=>e.key===i).calc(ue),q.find(e=>e.key===i).desc;const je="기타(직접입력)"===ee||"직접입력"===ee,ve="기타(직접입력)"===ie||"직접입력"===ie,we=("custom"===H?xe.trim():H)&&(je?me.trim():ee)&&(ve?ge.trim():ie)&&L;return r.jsxs(n,{children:[r.jsx(a,{}),r.jsxs(t,{children:[r.jsxs(o,{children:[r.jsxs(s,{children:[r.jsx(l,{children:"누적 거래 1,200건+"}),r.jsx(l,{children:"월 임대료 15만원+"}),r.jsx(l,{children:"만족도 98%"})]}),r.jsx(d,{children:"내 악기, 얼마에 팔거나 빌릴 수 있을까요?"}),r.jsxs(x,{children:["내 악기, 한 달에 얼마 벌 수 있을지 궁금하다면?",r.jsx("br",{}),"아래 ",r.jsx("b",{children:'"내 악기 예상금액 확인"'})," 버튼을 꼭 눌러보세요!",r.jsx("br",{}),"3가지 방법(급매/위탁/임대) 중 내 상황에 맞는 최적의 금액을 바로 확인할 수 있습니다."]}),r.jsxs(c,{href:"#simulator",style:{marginLeft:"auto",marginRight:"auto",display:"block"},children:[r.jsx("span",{role:"img","aria-label":"계산",children:"💸"})," ","내 악기 예상 금액 확인하기"]})]}),r.jsxs(m,{id:"simulator",children:[r.jsx(w,{children:"내 상황에 맞는 옵션을 선택하세요"}),r.jsx(h,{children:q.map(e=>r.jsx(g,{active:i===e.key,onClick:()=>{G(e.key),_(!1)},children:e.label},e.key))}),r.jsxs(p,{children:["아래에서 ",r.jsx("b",{children:"내 악기 종류와 상태"}),"를 선택하고,"," ",r.jsx("b",{children:'"예상금액 확인"'})," 버튼을 눌러보세요.",r.jsx("br",{}),"내 악기, 지금 팔면 얼마? 빌리면 한 달에 얼마?",r.jsx("br",{}),r.jsx("span",{style:{color:"#2ed8b6",fontWeight:700},children:"지금 바로 확인!"})]}),r.jsxs(b,{style:{flexDirection:"column",alignItems:"stretch",gap:"1.1rem",marginBottom:"1.1rem"},children:[r.jsxs("label",{style:{fontWeight:600,marginBottom:4},children:["악기 종류",r.jsxs(u,{value:H,onChange:e=>{I(e.target.value),re(""),ae(""),ce(""),_(!1)},children:[r.jsx("option",{value:"",children:"선택"}),J.map(e=>r.jsx("option",{value:e.value,children:e.label},e.value))]}),"custom"===H&&r.jsx(f,{type:"text",placeholder:"직접 입력",value:xe,onChange:e=>ce(e.target.value),style:{marginTop:6}})]}),r.jsxs("label",{style:{fontWeight:600,marginBottom:4},children:["브랜드",r.jsxs(u,{value:ee,onChange:e=>{re(e.target.value),ae(""),he(""),_(!1)},disabled:!H,children:[r.jsx("option",{value:"",children:"선택"}),(Q[H]||[]).map(e=>r.jsx("option",{value:e,children:e},e))]}),("기타(직접입력)"===ee||"직접입력"===ee)&&r.jsx(f,{type:"text",placeholder:"직접 입력",value:me,onChange:e=>he(e.target.value),style:{marginTop:6}})]}),r.jsxs("label",{style:{fontWeight:600,marginBottom:4},children:["모델명",r.jsxs(u,{value:ie,onChange:e=>{ae(e.target.value),pe(""),_(!1)},disabled:!ee,children:[r.jsx("option",{value:"",children:"선택"}),(D[ee]||[]).map(e=>r.jsx("option",{value:e,children:e},e))]}),("기타(직접입력)"===ie||"직접입력"===ie)&&r.jsx(f,{type:"text",placeholder:"직접 입력",value:ge,onChange:e=>pe(e.target.value),style:{marginTop:6}})]}),r.jsxs("label",{style:{fontWeight:600,marginBottom:4},children:["상태",r.jsxs(u,{value:L,onChange:e=>{U(e.target.value),_(!1)},children:[r.jsx("option",{value:"최상",children:"최상"}),r.jsx("option",{value:"양호",children:"양호"}),r.jsx("option",{value:"보통",children:"보통"}),r.jsx("option",{value:"하",children:"하"})]})]})]}),r.jsx(c,{as:"button",onClick:function(){return e=this,r=function*(){_(!1),se(""),de(null),te(!0);try{const e="custom"===H?xe:H,r="기타(직접입력)"===ee||"직접입력"===ee?me:ee,i="기타(직접입력)"===ie||"직접입력"===ie?ge:ie,a="/api/estimatePrice",n=yield fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instrument:e,brand:r,model:i,condition:L})}),t=yield n.text();if(!n.ok)throw new Error(`API 오류: ${n.status} ${t}`);const o=JSON.parse(t);de(o),_(!0)}catch(e){se("예상금액 조회에 실패했습니다. "+(e.message||""))}finally{te(!1)}},new Promise((i,a)=>{var n=e=>{try{o(r.next(e))}catch(i){a(i)}},t=e=>{try{o(r.throw(e))}catch(i){a(i)}},o=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,t);o((r=r.apply(e,null)).next())});var e,r},style:{margin:"0 auto 1.1rem auto",fontSize:"1.08rem",display:"block"},disabled:ne||!we,children:ne?"조회 중...":r.jsxs(r.Fragment,{children:[r.jsx("span",{role:"img","aria-label":"계산",children:"🔍"})," ","예상 금액 확인"]})}),oe&&r.jsx("div",{style:{color:"#ff4d4f",textAlign:"center",marginBottom:8},children:oe}),Z&&le&&r.jsxs(j,{children:["예상 시세:"," ",r.jsxs("span",{style:{color:"#2ed8b6",fontWeight:800},children:[le.average.toLocaleString(),"원"]}),r.jsxs("div",{style:{fontSize:13,color:"#888",marginTop:4},children:["참고 거래 ",le.count,"건"]})]})]}),r.jsxs(v,{children:[r.jsx(w,{children:"혹시 이런 고민 있으신가요?"}),r.jsxs(y,{children:["방치된 악기, 공간만 차지하고 있지 않나요? ",r.jsx("br",{}),"중고거래는 불안하고, 대여는 더더욱 걱정된다면? ",r.jsx("br",{}),r.jsx("b",{children:"내 악기의 가치를 지금 바로 확인해보세요!"})]})]}),r.jsxs(v,{children:[r.jsx(w,{children:"ECHO 검증 시스템"}),r.jsxs(k,{children:[r.jsx(z,{children:"✔ 실명 인증"}),r.jsx(z,{children:"🛡️ 사진·정보 검증"}),r.jsx(z,{children:"🌟 관리자 승인"}),r.jsx(z,{children:"💬 24시간 상담"})]}),r.jsx(y,{children:"3단계 검증으로 사고·분쟁 걱정 없이 안심!"}),r.jsx(y,{children:"ECHO 인증마크로 신뢰도 UP, 대여/판매 성공률 UP!"})]}),r.jsxs(v,{children:[r.jsx(w,{children:"진행 절차"}),r.jsxs(S,{children:[r.jsxs(C,{children:[r.jsx(P,{children:"1"}),r.jsxs("div",{children:[r.jsx("b",{children:"악기 등록"})," ",r.jsx("br",{}),"사진·정보 입력, 실명 인증"]})]}),r.jsxs(C,{children:[r.jsx(P,{children:"2"}),r.jsxs("div",{children:[r.jsx("b",{children:"ECHO 검증"})," ",r.jsx("br",{}),"관리자 확인 및 인증마크 부여"]})]}),r.jsxs(C,{children:[r.jsx(P,{children:"3"}),r.jsxs("div",{children:[r.jsx("b",{children:"공유/판매/임대 시작"})," ",r.jsx("br",{}),"검증 완료 후 안전하게 진행"]})]})]})]}),r.jsxs(T,{children:[r.jsx(w,{children:"실제 사용자 후기"}),r.jsx(A,{children:[{avatar:"https://randomuser.me/api/portraits/men/32.jpg",name:"김민수",stars:5,text:"급매로 바로 팔아서 공간도 확보, 현금도 생겼어요!"},{avatar:"https://randomuser.me/api/portraits/women/44.jpg",name:"이수진",stars:5,text:"위탁판매로 시세에 가깝게 팔 수 있어 만족!"},{avatar:"https://randomuser.me/api/portraits/men/65.jpg",name:"박지훈",stars:4,text:"위탁임대로 매달 임대료가 들어와요!"}].map(e=>r.jsxs(Y,{children:[r.jsx(B,{src:e.avatar,alt:e.name}),r.jsxs(M,{children:[r.jsxs(E,{children:["★".repeat(e.stars),"☆".repeat(5-e.stars)]}),r.jsx("div",{style:{marginBottom:"0.2rem"},children:e.text}),r.jsx($,{children:e.name})]})]},e.name))})]}),r.jsxs(O,{children:[r.jsx(W,{children:"선착순 100명 한정 혜택!"}),r.jsxs(F,{children:[r.jsx("b",{children:"내 악기 예상금액 확인"})," 후, 지금 검증받으면"," ",r.jsx("b",{children:"첫 거래 수수료 0%"})," + ",r.jsx("b",{children:"추가 보너스 지급"}),"!",r.jsx("br",{}),"선착순 100명 한정,"," ",r.jsx("span",{style:{color:"#2ed8b6"},children:"지금 바로 확인하세요!"})]}),r.jsxs(c,{href:"/product-register",children:[r.jsx("span",{role:"img","aria-label":"등록",children:"🎉"})," ","지금 바로 시작하기"]})]}),r.jsxs(K,{children:[r.jsx(w,{children:"자주 묻는 질문"}),r.jsxs(N,{children:[r.jsxs("li",{children:[r.jsx("b",{children:"Q. 내 악기 예상금액 확인은 무료인가요?"}),r.jsx("br",{}),"A. 네! 완전 무료입니다. 아래 버튼을 꼭 눌러보세요."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Q. 검증 소요 시간은?"}),r.jsx("br",{}),"A. 평균 1시간 이내, 최대 24시간 이내 완료!"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Q. 검증/등록 후 바로 판매·임대 가능한가요?"}),r.jsx("br",{}),"A. 네! 검증 완료 즉시 바로 시작할 수 있습니다."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Q. 문의는 어떻게 하나요?"}),r.jsx("br",{}),"A. 우측 하단 채팅버튼 또는 1:1 문의를 이용해 주세요."]})]})]}),r.jsxs(c,{href:"/product-register",style:{marginTop:"0.5rem",fontSize:"1.13rem",display:"inline-flex",alignItems:"center",gap:8},children:[r.jsx("span",{role:"img","aria-label":"등록",children:"🚀"})," ","내 악기 검증/등록하고 수익 시작하기"]}),r.jsx(R,{children:r.jsx("p",{children:"© 2025 Puregold. All rights reserved."})})]})]})}export{G as default};
