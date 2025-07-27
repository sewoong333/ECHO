var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,o,i)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,a=(e,t)=>{for(var o in t||(t={}))n.call(t,o)&&s(e,o,t[o]);if(i)for(var o of i(t))r.call(t,o)&&s(e,o,t[o]);return e},d=(e,i)=>t(e,o(i)),l=(e,t,o)=>new Promise((i,n)=>{var r=e=>{try{a(o.next(e))}catch(t){n(t)}},s=e=>{try{a(o.throw(e))}catch(t){n(t)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(r,s);a((o=o.apply(e,t)).next())});import{r as c,u as p,j as m,o as h,p as f,q as u,s as x,P as v,Q as g}from"./vendor-react-xhcWTtxo.js";import{d as j}from"./vendor-ui-28GTjlMA.js";import{U as b}from"./index-czRqZILZ.js";import{C as w}from"./vendor-others-BwC04hQF.js";import"./vendor-firebase-Cl2QMYMN.js";const y=void 0,C=void 0,z=j.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #fff;
  box-sizing: border-box;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,S=j.div`
  font-size: 32px;
  font-weight: 800;
  color: var(--color-mint-main);
  margin-bottom: 1em;
`,k=j.h1`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5em;
  text-align: center;
`,O=j.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 2em;
`,P=j.div`
  position: relative;
  width: 100%;
`,$=j.input`
  width: 100%;
  height: 50px;
  padding: 0 1em 0 3em;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s;
  background: #f8f9fa;

  &:focus {
    border-color: var(--color-mint-main);
    background: #fff;
    box-shadow: 0 0 0 2px rgba(46, 216, 182, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`,T=j.div`
  position: absolute;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`,D=j.button`
  width: 100%;
  height: 50px;
  background: ${e=>e.disabled?"#ccc":"var(--color-mint-main)"};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.2s;

  &:hover {
    background: ${e=>e.disabled?"#ccc":"#28c6a6"};
  }
`,E=j(D)`
  width: auto;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  height: 36px;
  padding: 0 1em;
  font-size: 14px;
  background: ${e=>e.verified?"#28c6a6":"var(--color-mint-main)"};
`,M=j.div`
  color: #2ed8b6;
  font-size: 14px;
  margin-top: 0.5em;
`,H=j.div`
  color: var(--color-mint-main);
  font-size: 14px;
  margin-top: 0.5em;
`,A=j.button`
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0;
`;function Y(){const[e,t]=c.useState({email:"",password:"",passwordConfirm:"",nickname:"",phone:""}),[o,i]=c.useState(!1),[n,r]=c.useState(!1),[s,j]=c.useState(""),[Y,I]=c.useState(""),[L,U]=c.useState({sent:!1,code:"",verified:!1,verificationCode:""}),{user:Z,signupWithEmail:q}=c.useContext(b),B=p(),J=e=>{const{name:o,value:i}=e.target;t(e=>d(a({},e),{[o]:i})),j("")};return Z.isLoggedIn?(B("/"),null):m.jsxs(z,{children:[m.jsx(S,{children:"ECHO"}),m.jsx(k,{children:"회원가입"}),m.jsxs(O,{onSubmit:t=>l(this,null,function*(){var o;if(t.preventDefault(),j(""),I(""),e.email&&e.password&&e.passwordConfirm&&e.nickname&&e.phone)if(o=e.password,/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(o))if(e.password===e.passwordConfirm)if(L.verified)try{yield q({email:e.email,password:e.password,nickname:e.nickname,phone:e.phone}),I("회원가입이 완료되었습니다! 이메일로 인증 링크가 발송되었습니다. 인증 후 로그인해 주세요."),setTimeout(()=>B("/login"),3e3)}catch(i){j("회원가입에 실패했습니다. "+i.message)}else j("휴대폰 인증을 완료해주세요.");else j("비밀번호가 일치하지 않습니다.");else j("비밀번호는 8자 이상이며, 영문, 숫자, 특수문자를 포함해야 합니다.");else j("모든 필드를 입력해주세요.")}),children:[m.jsxs(P,{children:[m.jsx(T,{children:m.jsx(h,{size:20})}),m.jsx($,{type:"email",name:"email",placeholder:"이메일",value:e.email,onChange:J})]}),m.jsxs(P,{children:[m.jsx(T,{children:m.jsx(f,{size:20})}),m.jsx($,{type:o?"text":"password",name:"password",placeholder:"비밀번호 (영문, 숫자, 특수문자 포함 8자 이상)",value:e.password,onChange:J}),m.jsx(A,{type:"button",onClick:()=>i(!o),children:o?m.jsx(u,{size:20}):m.jsx(x,{size:20})})]}),m.jsxs(P,{children:[m.jsx(T,{children:m.jsx(f,{size:20})}),m.jsx($,{type:n?"text":"password",name:"passwordConfirm",placeholder:"비밀번호 확인",value:e.passwordConfirm,onChange:J}),m.jsx(A,{type:"button",onClick:()=>r(!n),children:n?m.jsx(u,{size:20}):m.jsx(x,{size:20})})]}),m.jsxs(P,{children:[m.jsx(T,{children:m.jsx(v,{size:20})}),m.jsx($,{type:"text",name:"nickname",placeholder:"닉네임",value:e.nickname,onChange:J})]}),m.jsxs(P,{children:[m.jsx(T,{children:m.jsx(g,{size:20})}),m.jsx($,{type:"tel",name:"phone",placeholder:"휴대폰 번호 (- 없이 입력)",value:e.phone,onChange:J,disabled:L.verified}),m.jsx(E,{type:"button",onClick:L.sent?e=>l(this,null,function*(){e.preventDefault(),L.code===L.verificationCode?(U(e=>d(a({},e),{verified:!0})),I("휴대폰 인증이 완료되었습니다."),j("")):j("인증번호가 일치하지 않습니다.")}):t=>l(this,null,function*(){var o;if(t.preventDefault(),o=e.phone,/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(o))try{const t=Math.random().toString().slice(2,8);yield((e,t)=>l(void 0,null,function*(){try{const o=(new Date).getTime().toString(),i=(e=>{const t="\n",o=["POST"," ",new URL(y).pathname,t,e,t,C].join("");return w.HmacSHA256(o,void 0).toString(w.enc.Base64)})(o),n={type:"SMS",contentType:"COMM",countryCode:"82",from:void 0,content:`[ECHO] 인증번호는 [${t}] 입니다.`,messages:[{to:e}]},r=yield fetch(y,{method:"POST",headers:{"Content-Type":"application/json","x-ncp-apigw-timestamp":o,"x-ncp-iam-access-key":C,"x-ncp-apigw-signature-v2":i},body:JSON.stringify(n)});if(!r.ok)throw new Error("SMS 발송에 실패했습니다.");return yield r.json()}catch(s){throw s}}))(e.phone,t),U(e=>d(a({},e),{sent:!0,verificationCode:t})),I("인증번호가 발송되었습니다. 3분 이내에 입력해주세요."),j("")}catch(i){j("인증번호 발송에 실패했습니다. "+i.message)}else j("올바른 휴대폰 번호를 입력해주세요.")}),verified:L.verified,disabled:L.verified,children:L.verified?"인증완료":L.sent?"인증확인":"인증번호 발송"})]}),L.sent&&!L.verified&&m.jsxs(P,{children:[m.jsx(T,{children:m.jsx(f,{size:20})}),m.jsx($,{type:"text",placeholder:"인증번호 6자리",value:L.code,onChange:e=>U(t=>d(a({},t),{code:e.target.value}))})]}),s&&m.jsx(M,{children:s}),Y&&m.jsx(H,{children:Y}),m.jsx(D,{type:"submit",disabled:!1===L.verified,children:"회원가입"})]})]})}export{Y as default};
