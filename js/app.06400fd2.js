(()=>{var e={907:(e,t,l)=>{"use strict";l(8964),l(702);var a=l(1957),o=l(1947),r=l(499),s=l(9835);function n(e,t,l,a,o,r){const n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(n)}const i=(0,s.aZ)({name:"App"});var c=l(1639);const u=(0,c.Z)(i,[["render",n]]),d=u;var m=l(3340),p=l(1809);const f=(0,m.h)((()=>{const e=(0,p.WB)();return e}));var g=l(8339),h=l(6970);var v=l(3246),b=l(1123),w=l(4458),y=l(3190),_=l(9984),k=l.n(_);const q={};k()(q,"components",{QList:v.Z,QExpansionItem:b.Z,QCard:w.Z,QCardSection:y.Z});var W=l(9278),x=l(4197);(0,p.WB)();const{defineStore:Z,BaseModel:Q}=(0,W.eA)({clients:{api:x.api},idField:"id"});class P extends Q{}const C="todos",U=Z({servicePath:C,Model:P,getters:{thegetter(){return C.items}}});x.api.service(C).hooks({});var V=l(6928),j=l(4376);const z=e=>((0,s.dD)("data-v-e30f88a2"),e=e(),(0,s.Cn)(),e),S={class:"q-pa-md q-gutter-sm",style:{height:"80px"}},E=["src"],T={class:"row items-center all-pointer-events"},H={class:"div1 row flex justify-between q-mt-md"},A={class:"column"},O=z((()=>(0,s._)("span",{class:"q-mb-none text-caption"},"Spätestens wann?",-1))),L={class:"row datumsrow"},B={class:"column"},I=z((()=>(0,s._)("span",{class:"q-mb-none text-right text-caption"},"Priorität?",-1))),M={class:"q-my-md flex justify-between text-caption"},D={key:0,class:"text-center"},Y=z((()=>(0,s._)("div",{class:"text-center text-h6 text-grey q-pa-md"},"Keine Tasks vorhanden",-1))),F=[Y],K=["src"],R={class:"row"},N={__name:"IndexPage",setup(e){const t=U(),l=(0,V.a)(),o=(0,r.iH)(null),n=(0,r.iH)(""),i=(0,r.iH)("default"),c=(0,r.iH)("2022-09-26"),u=(0,r.iH)("14:45");(0,s.bv)((()=>{t.find().then((e=>{}))}));const d=e=>0!=e,m=(0,s.Fl)((()=>t.items.filter((e=>e.done)))),p=e=>{const t=j.ZP.addToDate(e,{hours:2}),l=j.ZP.formatDate(t,"DD.MM.YY HH:mm:ss")+" Uhr";return l},f=(0,s.Fl)((()=>t.items.filter((e=>!e.done)))),g=()=>{let e=`${c.value} ${u.value}:00`;t.create({text:n.value,importance:i.value,creater_id:l.user.id,pending_date:e,profile_img:l.user.profile_img}).then((e=>{console.log("res :>> ",e),n.value="",o.value.focus()})).catch((e=>{console.log("err :>> ",e)}))},v=e=>{t.patch(e.id,{done:!e.done}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},b=e=>{let l=e.importance;const a=e=>("default"===l?l="high":"high"===l&&(l="default"),l);t.patch(e.id,{importance:a()}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},w=e=>{t.remove(e.id).then((e=>{n.value="",o.value.focus()})).catch((e=>{console.log(e)}))};return(e,l)=>{const y=(0,s.up)("q-avatar"),_=(0,s.up)("q-icon"),k=(0,s.up)("q-tooltip"),q=(0,s.up)("q-btn"),W=(0,s.up)("q-input"),x=(0,s.up)("q-btn-toggle"),Z=(0,s.up)("q-card-section"),Q=(0,s.up)("q-card"),P=(0,s.up)("q-checkbox"),C=(0,s.up)("q-item-section"),U=(0,s.up)("q-item-label"),V=(0,s.up)("q-item"),j=(0,s.up)("q-list"),z=(0,s.up)("q-scroll-area"),Y=(0,s.up)("q-page"),N=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.j4)(Y,{class:"q-pa-md constrain"},{default:(0,s.w5)((()=>[(0,s._)("div",S,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(e=>(0,s.Wm)(y,{key:e,size:"40px",class:"overlapping",style:(0,h.j5)(`left: ${25*e}px`)},{default:(0,s.w5)((()=>[(0,s._)("img",{src:`https://cdn.quasar.dev/img/avatar${e+1}.jpg`},null,8,E)])),_:2},1032,["style"]))),64))]),(0,s.Wm)(Q,{dark:""},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-px-sm q-gutter-sm diveingabe"},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{dark:"",autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",clearable:"","clear-icon":"close",dense:"",outlined:"",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e),label:"Enter a Todo *",ref_key:"todoInput",ref:o,onKeydown:(0,a.D2)((0,a.iM)(g,["prevent"]),["enter"])},{label:(0,s.w5)((()=>[(0,s._)("div",T,[(0,s.Wm)(_,{class:"q-mr-xs",size:"24px",name:"add"}),(0,s.Uk)(" Todo "),(0,s.Wm)(k,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,s.w5)((()=>[(0,s.Uk)("Enter a Todo")])),_:1})])])),after:(0,s.w5)((()=>[(0,s.Wm)(q,{loading:(0,r.SU)(t).isCreatePending,disabled:!n.value.length,onClick:g,class:"",color:"primary",icon:"send"},null,8,["loading","disabled"])])),_:1},8,["modelValue","onKeydown"]),(0,s._)("div",H,[(0,s._)("div",A,[O,(0,s._)("div",L,[(0,s.Wm)(W,{dark:"",class:"spaetestens",dense:"",modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=e=>c.value=e),type:"date",outlined:""},null,8,["modelValue"]),(0,s.Wm)(W,{dark:"",dense:"",modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=e=>u.value=e),type:"time",outlined:""},null,8,["modelValue"])])]),(0,s._)("div",null,[(0,s._)("div",B,[I,(0,s.Wm)(x,{size:"sm",class:"my-custom-toggle",modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=e=>i.value=e),"toggle-color":"primary",options:[{label:"",value:"default",slot:"one"},{label:"",value:"high",slot:"two"}]},{one:(0,s.w5)((()=>[(0,s.Wm)(k,{anchor:"top middle",self:"center middle"},{default:(0,s.w5)((()=>[(0,s.Uk)("Normal")])),_:1}),(0,s.Wm)(_,{class:"q-ml-lg",right:"",name:"flage",color:"green-4"})])),two:(0,s.w5)((()=>[(0,s.Wm)(k,{anchor:"top middle",self:"center middle"},{default:(0,s.w5)((()=>[(0,s.Uk)("High")])),_:1}),(0,s.Wm)(_,{class:"q-ml-lg",right:"",name:"flage",color:"red-4"})])),_:1},8,["modelValue"])])])])])),_:1})])),_:1}),(0,s._)("div",M,[(0,s._)("span",null,"Offen: "+(0,h.zw)((0,r.SU)(f).length),1),(0,s._)("span",null,"Erledigt: "+(0,h.zw)((0,r.SU)(m).length),1)]),(0,s.Wm)(z,{style:{height:"35vh","max-width":"100vw"},class:"bg-white"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{class:"q-gutter-y-md"},{default:(0,s.w5)((()=>[(0,r.SU)(t).items.length?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)((0,r.SU)(t).items,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(V,{style:(0,h.j5)(["default"==e.importance?"border-left: 5px solid #81c784":"high"==e.importance?"border-left: 5px solid #e57373":"",{"border-radius":"7px","border-top":"1px solid #cfcfcf","border-right":"1px solid #cfcfcf","border-bottom":"1px solid #cfcfcf"}]),key:e.id,class:(0,h.C_)(["q-pl-sm itemClass",e.done?"bg-grey-2":"bg-white"]),clickable:"",onClick:t=>v(e)},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{class:"q-pr-none",side:"",top:""},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{"model-value":d(e.done),onClick:t=>v(e)},null,8,["model-value","onClick"])])),_:2},1024),(0,s.Wm)(C,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.profile_img},null,8,K)])),_:2},1024)])),_:2},1024),(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s.Wm)(U,{class:(0,h.C_)(["not-selectable",e.done?"text-strike":""])},{default:(0,s.w5)((()=>[(0,s.Uk)((0,h.zw)(e.text),1)])),_:2},1032,["class"]),(0,s.Wm)(U,{class:(0,h.C_)(["not-selectable",e.done?"text-strike":""]),caption:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,h.zw)(p(e.pending_date)),1)])),_:2},1032,["class"])])),_:2},1024),(0,s.Wm)(C,{avatar:""},{default:(0,s.w5)((()=>[(0,s._)("div",R,[(0,s.Wm)(_,{color:"default"==e.importance?"green-4":"high"==e.importance?"red-4":"",onClick:(0,a.iM)((t=>b(e)),["stop"]),class:"",name:"flage",size:"sm"},null,8,["color","onClick"]),(0,s.Wm)(_,{onClick:(0,a.iM)((t=>w(e)),["stop"]),color:"black",name:"delete",size:"sm"},null,8,["onClick"])])])),_:2},1024)])),_:2},1032,["style","class","onClick"])),[[N,{color:"blue-5"}]]))),128)):((0,s.wg)(),(0,s.iD)("div",D,F))])),_:1})])),_:1})])),_:1})}}};var $=l(9885),X=l(1302),G=l(9687),J=l(2857),ee=l(6858),te=l(8879),le=l(8983),ae=l(6663),oe=l(490),re=l(1233),se=l(1221),ne=l(3115),ie=l(8149),ce=l(1136);const ue=(0,c.Z)(N,[["__scopeId","data-v-e30f88a2"]]),de=ue;k()(N,"components",{QPage:$.Z,QAvatar:X.Z,QCard:w.Z,QCardSection:y.Z,QInput:G.Z,QIcon:J.Z,QTooltip:ee.Z,QBtn:te.Z,QBtnToggle:le.Z,QScrollArea:ae.Z,QList:v.Z,QItem:oe.Z,QItemSection:re.Z,QCheckbox:se.Z,QItemLabel:ne.Z,QField:ie.Z}),k()(N,"directives",{Ripple:ce.Z});var me=l(9302);const pe=(0,s._)("div",{class:"text-h6 text-center"},"Login",-1),fe={class:"row items-center all-pointer-events"},ge={class:"row items-center all-pointer-events"},he={class:"q-gutter-y-md q-mt-md"},ve=(0,s._)("div",{class:"text-h6 text-center"},"Register",-1),be={class:"row items-center all-pointer-events"},we={class:"row items-center all-pointer-events"},ye={class:"q-gutter-y-md q-mt-md"},_e={__name:"AuthPage",setup(e){const t=(0,g.tv)(),l=(0,V.a)(),a=(0,r.iH)("login"),o=(0,r.iH)("test@test.com"),n=(0,r.iH)("123123123"),i=(0,r.iH)(!0),c=(0,r.iH)(!1),u=(0,me.Z)(),d=e=>{u.notify({icon:"tag_faces",type:"info",message:`<strong>Hi, <span class="text-blue-grey-9">${e}</span> !</strong>`,timeout:1e3,position:"top-right",html:!0,progress:!0})},m=()=>{c.value=!0;let e={email:o.value,password:n.value,strategy:"local"};l.authenticate(e).then((e=>{c.value=!1,l.error=null,console.log("LoginPage Authenticate :>> ",e),t.push({name:"home"}),d(e.user.name)})).catch((e=>{c.value=!1,console.log("LoginPage Authenticate :>> ",e)}))},p=()=>{o.value="",n.value=""};return(e,t)=>{const l=(0,s.up)("q-tab"),r=(0,s.up)("q-tabs"),u=(0,s.up)("q-separator"),d=(0,s.up)("q-icon"),f=(0,s.up)("q-tooltip"),g=(0,s.up)("q-input"),h=(0,s.up)("q-btn"),v=(0,s.up)("q-form"),b=(0,s.up)("q-tab-panel"),w=(0,s.up)("q-tab-panels"),y=(0,s.up)("q-card"),_=(0,s.up)("q-spinner-bars"),k=(0,s.up)("q-inner-loading"),q=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(q,{class:"q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{class:"constrain"},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"login",label:"login"}),(0,s.Wm)(l,{name:"register",label:"register"})])),_:1},8,["modelValue"]),(0,s.Wm)(u),(0,s.Wm)(w,{modelValue:a.value,"onUpdate:modelValue":t[7]||(t[7]=e=>a.value=e),animated:"",swipeable:""},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{name:"login"},{default:(0,s.w5)((()=>[pe,(0,s.Wm)(v,{onSubmit:m,onReset:p,class:"q-gutter-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",clearable:"","clear-icon":"close",dense:"",outlined:"",modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value=e),label:"Your EmailAdress *",hint:"","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type your EmailAdress"]},{label:(0,s.w5)((()=>[(0,s._)("div",fe,[(0,s.Wm)(d,{class:"q-mr-xs",size:"24px",name:"mail"}),(0,s.Uk)(" Email "),(0,s.Wm)(f,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,s.w5)((()=>[(0,s.Uk)("Email address")])),_:1})])])),_:1},8,["modelValue","rules"]),(0,s.Wm)(g,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",clearable:"","clear-icon":"close",dense:"",outlined:"",type:i.value?"password":"text",modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=e=>n.value=e),label:"Your password *","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type your password"]},{label:(0,s.w5)((()=>[(0,s._)("div",ge,[(0,s.Wm)(d,{class:"q-mr-xs",size:"24px",name:"lock"}),(0,s.Uk)(" Password "),(0,s.Wm)(f,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,s.w5)((()=>[(0,s.Uk)("Email address")])),_:1})])])),append:(0,s.w5)((()=>[(0,s.Wm)(d,{name:i.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[2]||(t[2]=e=>i.value=!i.value)},null,8,["name"])])),_:1},8,["type","modelValue","rules"]),(0,s._)("div",he,[(0,s.Wm)(h,{label:"Login",type:"submit",class:"full-width",color:"primary"}),(0,s.Wm)(h,{label:"Reset",type:"reset",color:"primary",flat:"",class:"full-width"})])])),_:1})])),_:1}),(0,s.Wm)(b,{name:"register"},{default:(0,s.w5)((()=>[ve,(0,s.Wm)(v,{onSubmit:m,onReset:p,class:"q-gutter-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",clearable:"","clear-icon":"close",dense:"",outlined:"",modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=e=>o.value=e),label:"Your EmailAdress *",hint:"","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type your EmailAdress"]},{label:(0,s.w5)((()=>[(0,s._)("div",be,[(0,s.Wm)(d,{class:"q-mr-xs",size:"24px",name:"mail"}),(0,s.Uk)(" Email "),(0,s.Wm)(f,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,s.w5)((()=>[(0,s.Uk)("Email address")])),_:1})])])),_:1},8,["modelValue","rules"]),(0,s.Wm)(g,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",clearable:"","clear-icon":"close",dense:"",outlined:"",type:i.value?"password":"text",modelValue:n.value,"onUpdate:modelValue":t[6]||(t[6]=e=>n.value=e),label:"Your password *","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type your password"]},{label:(0,s.w5)((()=>[(0,s._)("div",we,[(0,s.Wm)(d,{class:"q-mr-xs",size:"24px",name:"lock"}),(0,s.Uk)(" Password "),(0,s.Wm)(f,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,s.w5)((()=>[(0,s.Uk)("Email address")])),_:1})])])),append:(0,s.w5)((()=>[(0,s.Wm)(d,{name:i.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[5]||(t[5]=e=>i.value=!i.value)},null,8,["name"])])),_:1},8,["type","modelValue","rules"]),(0,s._)("div",ye,[(0,s.Wm)(h,{label:"Login",type:"submit",class:"full-width",color:"primary"}),(0,s.Wm)(h,{label:"Reset",type:"reset",color:"primary",flat:"",class:"full-width"})])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(k,{showing:c.value,dark:""},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{color:"primary",size:"5em"})])),_:1},8,["showing"])])),_:1})}}};var ke=l(2230),qe=l(900),We=l(926),xe=l(9800),Ze=l(4106),Qe=l(8326),Pe=l(3175),Ce=l(854),Ue=l(3382);const Ve=_e,je=Ve;k()(_e,"components",{QPage:$.Z,QCard:w.Z,QTabs:ke.Z,QTab:qe.Z,QSeparator:We.Z,QTabPanels:xe.Z,QTabPanel:Ze.Z,QForm:Qe.Z,QInput:G.Z,QIcon:J.Z,QTooltip:ee.Z,QToggle:Pe.Z,QBtn:te.Z,QInnerLoading:Ce.Z,QSpinnerBars:Ue.Z});const ze=(0,s._)("h4",null,"Profile Page",-1),Se={__name:"ProfilePage",setup(e){(0,g.tv)(),(0,V.a)(),(0,r.iH)("login"),(0,r.iH)("test@test.com"),(0,r.iH)("123123123"),(0,r.iH)(!0),(0,r.iH)(!1),(0,me.Z)();return(e,t)=>{const l=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(l,{class:"q-pa-md"},{default:(0,s.w5)((()=>[ze])),_:1})}}},Ee=Se,Te=Ee;k()(Se,"components",{QPage:$.Z});const He=[{path:"/",component:()=>Promise.all([l.e(736),l.e(969)]).then(l.bind(l,5969)),children:[{path:"",component:de,name:"home"},{path:"/auth",component:je,name:"auth"},{path:"/profile",component:Te,name:"profile"}]},{path:"/:catchAll(.*)*",component:()=>l.e(862).then(l.bind(l,1862))}],Ae=He,Oe=(0,m.BC)((function(){const e=g.r5,t=(0,g.p7)({scrollBehavior:()=>({left:0,top:0}),routes:Ae,history:e("")});return t}));async function Le(e,t){const l=e(d);l.use(o.Z,t);const a="function"===typeof f?await f({}):f;l.use(a);const s=(0,r.Xl)("function"===typeof Oe?await Oe({store:a}):Oe);return a.use((({store:e})=>{e.router=s})),{app:l,store:a,router:s}}var Be=l(6827);const Ie={config:{},plugins:{Notify:Be.Z}},Me="";async function De({app:e,router:t,store:l},a){let o=!1;const r=e=>{try{return t.resolve(e).href}catch(l){}return Object(e)===e?null:e},s=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=r(e);null!==t&&(window.location.href=t,window.location.reload())},n=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<a.length;c++)try{await a[c]({app:e,router:t,store:l,ssrContext:null,redirect:s,urlPath:n,publicPath:Me})}catch(i){return i&&i.url?void s(i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&(e.use(t),e.mount("#q-app"))}Le(a.ri,Ie).then((e=>{const[t,a]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(l.bind(l,4197)),Promise.resolve().then(l.bind(l,8812))]).then((t=>{const l=a(t).filter((e=>"function"===typeof e));De(e,l)}))}))},8812:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>s});var a=l(3340),o=l(6928);const r=(0,o.a)(),s=(0,a.xr)((async({app:e,router:t})=>{r.authenticate().then((e=>{t.beforeEach(((e,t)=>(console.log("to then-BLOCK:>> ",e),"auth"===e.name||r.isAuthenticated?("auth"!==e.name||!r.isAuthenticated)&&void 0:{name:"auth"})))})).catch((e=>{t.beforeEach(((e,t)=>(console.log("to error-BLOCK:>> ",e),"auth"===e.name||r.isAuthenticated?("auth"!==e.name||!r.isAuthenticated)&&void 0:{name:"auth"})))}))}))},4197:(e,t,l)=>{"use strict";l.r(t),l.d(t,{api:()=>d});var a=l(4793),o=l.n(a),r=l(6978),s=l.n(r),n=l(124),i=l.n(n),c=l(3819);l(7963);const u=(0,c.ZP)("https://feathersbackend.onrender.com",{transports:["websocket"]}),d=o()().configure(s()(u)).configure(i()({storage:window.localStorage}))},6928:(e,t,l)=>{"use strict";l.d(t,{a:()=>r});var a=l(9278),o=l(4197);const r=(0,a.nm)({feathersClient:o.api,state:()=>({user:null})})},4654:()=>{}},t={};function l(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,l),r.loaded=!0,r.exports}l.m=e,(()=>{var e=[];l.O=(t,a,o,r)=>{if(!a){var s=1/0;for(u=0;u<e.length;u++){for(var[a,o,r]=e[u],n=!0,i=0;i<a.length;i++)(!1&r||s>=r)&&Object.keys(l.O).every((e=>l.O[e](a[i])))?a.splice(i--,1):(n=!1,r<s&&(s=r));if(n){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]}})(),(()=>{l.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return l.d(t,{a:t}),t}})(),(()=>{l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,a)=>(l.f[a](e,t),t)),[]))})(),(()=>{l.u=e=>"js/"+e+"."+{862:"e8a123ff",969:"0b5592cc"}[e]+".js"})(),(()=>{l.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"29ec8de6",736:"592caa19"}[e]+".css"})(),(()=>{l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-project:";l.l=(a,o,r,s)=>{if(e[a])e[a].push(o);else{var n,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){n=d;break}}n||(i=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,l.nc&&n.setAttribute("nonce",l.nc),n.setAttribute("data-webpack",t+r),n.src=a),e[a]=[o];var m=(t,l)=>{n.onerror=n.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(l))),t)return t(l)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),i&&document.head.appendChild(n)}}})(),(()=>{l.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{l.p=""})(),(()=>{var e={143:0};l.f.j=(t,a)=>{var o=l.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise(((l,a)=>o=e[t]=[l,a]));a.push(o[2]=r);var s=l.p+l.u(t),n=new Error,i=a=>{if(l.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;n.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",n.name="ChunkLoadError",n.type=r,n.request=s,o[1](n)}};l.l(s,i,"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,a)=>{var o,r,[s,n,i]=a,c=0;if(s.some((t=>0!==e[t]))){for(o in n)l.o(n,o)&&(l.m[o]=n[o]);if(i)var u=i(l)}for(t&&t(a);c<s.length;c++)r=s[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},a=globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=l.O(void 0,[736],(()=>l(907)));a=l.O(a)})();