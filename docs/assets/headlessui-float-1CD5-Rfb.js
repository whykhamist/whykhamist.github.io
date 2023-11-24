import{a8 as Q,$ as E,I as we,O as P,L,n as Ee,N as k,a as g,c as F,K as Z,o as j,M as J,J as ke,w as D,g as He,B as q,a9 as me,a4 as ze,h as Ve,F as We,p as he,T as _e}from"./index-2sZdn9Tb.js";import{u as qe,b as Ke,o as Ge,f as Xe,s as Ye,c as Je,a as Qe,h as Ze}from"./floating-ui.vue.esm-W96sor2j.js";function V(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,V),a}var Te=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Te||{}),N=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(N||{});function fe({visible:e=!0,features:t=0,ourProps:n,theirProps:a,...r}){var l;let s=Se(a,n),i=Object.assign(r,{props:s});if(e||t&2&&s.static)return re(i);if(t&1){let c=(l=s.unmount)==null||l?0:1;return V(c,{0(){return null},1(){return re({...r,props:{...s,hidden:!0,style:{display:"none"}}})}})}return re(i)}function re({props:e,attrs:t,slots:n,slot:a,name:r}){var l,s;let{as:i,...c}=Ce(e,["unmount","static"]),f=(l=n.default)==null?void 0:l.call(n,a),d={};if(a){let v=!1,p=[];for(let[m,u]of Object.entries(a))typeof u=="boolean"&&(v=!0),u===!0&&p.push(m);v&&(d["data-headlessui-state"]=p.join(" "))}if(i==="template"){if(f=Fe(f??[]),Object.keys(c).length>0||Object.keys(t).length>0){let[v,...p]=f??[];if(!et(v)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(c).concat(Object.keys(t)).map(h=>h.trim()).filter((h,y,S)=>S.indexOf(h)===y).sort((h,y)=>h.localeCompare(y)).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let m=Se((s=v.props)!=null?s:{},c),u=Q(v,m);for(let h in m)h.startsWith("on")&&(u.props||(u.props={}),u.props[h]=m[h]);return u}return Array.isArray(f)&&f.length===1?f[0]:f}return E(i,Object.assign({},c,d),{default:()=>f})}function Fe(e){return e.flatMap(t=>t.type===we?Fe(t.children):[t])}function Se(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let a of e)for(let r in a)r.startsWith("on")&&typeof a[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(a[r])):t[r]=a[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(a=>[a,void 0])));for(let a in n)Object.assign(t,{[a](r,...l){let s=n[a];for(let i of s){if(r instanceof Event&&r.defaultPrevented)return;i(r,...l)}}});return t}function tn(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Ce(e,t=[]){let n=Object.assign({},e);for(let a of t)a in n&&delete n[a];return n}function et(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let tt=0;function nt(){return++tt}function rt(){return nt()}var at=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(at||{});function K(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let Oe=Symbol("Context");var $=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))($||{});function lt(){return xe()!==null}function xe(){return P(Oe,null)}function ot(e){L(Oe,e)}var it=Object.defineProperty,st=(e,t,n)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ge=(e,t,n)=>(st(e,typeof t!="symbol"?t+"":t,n),n);class ut{constructor(){ge(this,"current",this.detect()),ge(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let ee=new ut;function te(e){if(ee.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=K(e);if(t)return t.ownerDocument}return document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var ft=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(ft||{}),dt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(dt||{}),ct=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ct||{});function Ae(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var $e=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))($e||{});function Pe(e,t=0){var n;return e===((n=te(e))==null?void 0:n.body)?!1:V(t,{0(){return e.matches(le)},1(){let a=e;for(;a!==null;){if(a.matches(le))return!0;a=a.parentElement}return!1}})}function nn(e){let t=te(e);Ee(()=>{t&&!Pe(t.activeElement,0)&&vt(e)})}var pt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(pt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function vt(e){e==null||e.focus({preventScroll:!0})}let mt=["textarea","input"].join(",");function ht(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,mt))!=null?n:!1}function gt(e,t=n=>n){return e.slice().sort((n,a)=>{let r=t(n),l=t(a);if(r===null||l===null)return 0;let s=r.compareDocumentPosition(l);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function rn(e,t){return yt(Ae(),t,{relativeTo:e})}function yt(e,t,{sorted:n=!0,relativeTo:a=null,skipElements:r=[]}={}){var l;let s=(l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?l:document,i=Array.isArray(e)?n?gt(e):e:Ae(e);r.length>0&&i.length>1&&(i=i.filter(u=>!r.includes(u))),a=a??s.activeElement;let c=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(a))-1;if(t&4)return Math.max(0,i.indexOf(a))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},v=0,p=i.length,m;do{if(v>=p||v+p<=0)return 0;let u=f+v;if(t&16)u=(u+p)%p;else{if(u<0)return 3;if(u>=p)return 1}m=i[u],m==null||m.focus(d),v+=c}while(m!==s.activeElement);return t&6&&ht(m)&&m.select(),2}function X(e,t,n){ee.isServer||k(a=>{document.addEventListener(e,t,n),a(()=>document.removeEventListener(e,t,n))})}function bt(e,t,n){ee.isServer||k(a=>{window.addEventListener(e,t,n),a(()=>window.removeEventListener(e,t,n))})}function an(e,t,n=F(()=>!0)){function a(l,s){if(!n.value||l.defaultPrevented)return;let i=s(l);if(i===null||!i.getRootNode().contains(i))return;let c=function f(d){return typeof d=="function"?f(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let f of c){if(f===null)continue;let d=f instanceof HTMLElement?f:K(f);if(d!=null&&d.contains(i)||l.composed&&l.composedPath().includes(d))return}return!Pe(i,$e.Loose)&&i.tabIndex!==-1&&l.preventDefault(),t(l,i)}let r=g(null);X("pointerdown",l=>{var s,i;n.value&&(r.value=((i=(s=l.composedPath)==null?void 0:s.call(l))==null?void 0:i[0])||l.target)},!0),X("mousedown",l=>{var s,i;n.value&&(r.value=((i=(s=l.composedPath)==null?void 0:s.call(l))==null?void 0:i[0])||l.target)},!0),X("click",l=>{r.value&&(a(l,()=>r.value),r.value=null)},!0),X("touchend",l=>a(l,()=>l.target instanceof HTMLElement?l.target:null),!0),bt("blur",l=>a(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function wt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function de(){let e=[],t={addEventListener(n,a,r,l){return n.addEventListener(a,r,l),t.add(()=>n.removeEventListener(a,r,l))},requestAnimationFrame(...n){let a=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(a))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let a=setTimeout(...n);t.add(()=>clearTimeout(a))},microTask(...n){let a={current:!0};return wt(()=>{a.current&&n[0]()}),t.add(()=>{a.current=!1})},style(n,a,r){let l=n.style.getPropertyValue(a);return Object.assign(n.style,{[a]:r}),this.add(()=>{Object.assign(n.style,{[a]:l})})},group(n){let a=de();return n(a),this.add(()=>a.dispose())},add(n){return e.push(n),()=>{let a=e.indexOf(n);if(a>=0)for(let r of e.splice(a,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}let Et=Symbol("ForcePortalRootContext");function Tt(){return P(Et,!1)}function Ft(e){let t=te(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let a=t.createElement("div");return a.setAttribute("id","headlessui-portal-root"),t.body.appendChild(a)}let St=Z({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let a=g(null),r=F(()=>te(a)),l=Tt(),s=P(Ct,null),i=g(l===!0||s==null?Ft(a.value):s.resolveTarget());k(()=>{l||s!=null&&(i.value=s.resolveTarget())});let c=P(oe,null);return j(()=>{let f=K(a);f&&c&&J(c.register(f))}),J(()=>{var f,d;let v=(f=r.value)==null?void 0:f.getElementById("headlessui-portal-root");v&&i.value===v&&i.value.children.length<=0&&((d=i.value.parentElement)==null||d.removeChild(i.value))}),()=>{if(i.value===null)return null;let f={ref:a,"data-headlessui-portal":""};return E(ke,{to:i.value},fe({ourProps:f,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),oe=Symbol("PortalParentContext");function ln(){let e=P(oe,null),t=g([]);function n(l){return t.value.push(l),e&&e.register(l),()=>a(l)}function a(l){let s=t.value.indexOf(l);s!==-1&&t.value.splice(s,1),e&&e.unregister(l)}let r={register:n,unregister:a,portals:t};return[t,Z({name:"PortalWrapper",setup(l,{slots:s}){return L(oe,r),()=>{var i;return(i=s.default)==null?void 0:i.call(s)}}})]}let Ct=Symbol("PortalGroupContext");function Ot(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function ae(e,...t){e&&t.length>0&&e.classList.add(...t)}function Y(e,...t){e&&t.length>0&&e.classList.remove(...t)}var ie=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(ie||{});function xt(e,t){let n=de();if(!e)return n.dispose;let{transitionDuration:a,transitionDelay:r}=getComputedStyle(e),[l,s]=[a,r].map(i=>{let[c=0]=i.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):parseFloat(f)*1e3).sort((f,d)=>d-f);return c});return l!==0?n.setTimeout(()=>t("finished"),l+s):t("finished"),n.add(()=>t("cancelled")),n.dispose}function ye(e,t,n,a,r,l){let s=de(),i=l!==void 0?Ot(l):()=>{};return Y(e,...r),ae(e,...t,...n),s.nextFrame(()=>{Y(e,...n),ae(e,...a),s.add(xt(e,c=>(Y(e,...a,...t),ae(e,...r),i(c))))}),s.add(()=>Y(e,...t,...n,...a,...r)),s.add(()=>i("cancelled")),s.dispose}function M(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let ce=Symbol("TransitionContext");var At=(e=>(e.Visible="visible",e.Hidden="hidden",e))(At||{});function $t(){return P(ce,null)!==null}function Pt(){let e=P(ce,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Nt(){let e=P(pe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let pe=Symbol("NestingContext");function ne(e){return"children"in e?ne(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Ne(e){let t=g([]),n=g(!1);j(()=>n.value=!0),J(()=>n.value=!1);function a(l,s=N.Hidden){let i=t.value.findIndex(({id:c})=>c===l);i!==-1&&(V(s,{[N.Unmount](){t.value.splice(i,1)},[N.Hidden](){t.value[i].state="hidden"}}),!ne(t)&&n.value&&(e==null||e()))}function r(l){let s=t.value.find(({id:i})=>i===l);return s?s.state!=="visible"&&(s.state="visible"):t.value.push({id:l,state:"visible"}),()=>a(l,N.Unmount)}return{children:t,register:r,unregister:a}}let je=Te.RenderStrategy,Le=Z({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:r}){let l=g(0);function s(){l.value|=$.Opening,t("beforeEnter")}function i(){l.value&=~$.Opening,t("afterEnter")}function c(){l.value|=$.Closing,t("beforeLeave")}function f(){l.value&=~$.Closing,t("afterLeave")}if(!$t()&&lt())return()=>E(Lt,{...e,onBeforeEnter:s,onAfterEnter:i,onBeforeLeave:c,onAfterLeave:f},a);let d=g(null),v=F(()=>e.unmount?N.Unmount:N.Hidden);r({el:d,$el:d});let{show:p,appear:m}=Pt(),{register:u,unregister:h}=Nt(),y=g(p.value?"visible":"hidden"),S={value:!0},T=rt(),C={value:!1},B=Ne(()=>{!C.value&&y.value!=="hidden"&&(y.value="hidden",h(T),f())});j(()=>{let x=u(T);J(x)}),k(()=>{if(v.value===N.Hidden&&T){if(p.value&&y.value!=="visible"){y.value="visible";return}V(y.value,{hidden:()=>h(T),visible:()=>u(T)})}});let I=M(e.enter),O=M(e.enterFrom),U=M(e.enterTo),b=M(e.entered),A=M(e.leave),H=M(e.leaveFrom),w=M(e.leaveTo);j(()=>{k(()=>{if(y.value==="visible"){let x=K(d);if(x instanceof Comment&&x.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function W(x){let _=S.value&&!m.value,R=K(d);!R||!(R instanceof HTMLElement)||_||(C.value=!0,p.value&&s(),p.value||c(),x(p.value?ye(R,I,O,U,b,G=>{C.value=!1,G===ie.Finished&&i()}):ye(R,A,H,w,b,G=>{C.value=!1,G===ie.Finished&&(ne(B)||(y.value="hidden",h(T),f()))})))}return j(()=>{D([p],(x,_,R)=>{W(R),S.value=!1},{immediate:!0})}),L(pe,B),ot(F(()=>V(y.value,{visible:$.Open,hidden:$.Closed})|l.value)),()=>{let{appear:x,show:_,enter:R,enterFrom:G,enterTo:Gt,entered:Xt,leave:Yt,leaveFrom:Jt,leaveTo:Qt,...ve}=e,Me={ref:d},De={...ve,...m.value&&p.value&&ee.isServer?{class:He([n.class,ve.class,...I,...O])}:{}};return fe({theirProps:De,ourProps:Me,slot:{},slots:a,attrs:n,features:je,visible:y.value==="visible",name:"TransitionChild"})}}}),jt=Le,Lt=Z({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a}){let r=xe(),l=F(()=>e.show===null&&r!==null?(r.value&$.Open)===$.Open:e.show);k(()=>{if(![!0,!1].includes(l.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let s=g(l.value?"visible":"hidden"),i=Ne(()=>{s.value="hidden"}),c=g(!0),f={show:l,appear:F(()=>e.appear||!c.value)};return j(()=>{k(()=>{c.value=!1,l.value?s.value="visible":ne(i)||(s.value="hidden")})}),L(pe,i),L(ce,f),()=>{let d=Ce(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),v={unmount:e.unmount};return fe({ourProps:{...v,as:"template"},theirProps:{},slot:{},slots:{...a,default:()=>[E(jt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...v,...d},a.default)]},attrs:{},features:je,visible:s.value==="visible",name:"Transition"})}}});var Bt=Object.defineProperty,It=(e,t,n)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ut=(e,t,n)=>(It(e,typeof t!="symbol"?t+"":t,n),n);function se(e){return e==null||e.value==null?null:e.value instanceof Node?e.value:"$el"in e.value&&e.value.$el?se(g(e.value.$el)):"getBoundingClientRect"in e.value?e.value:null}function z(e){const t=typeof window<"u"?window.devicePixelRatio:1;return Math.round(e*t)/t}class Rt{constructor(){Ut(this,"current",this.detect())}set(t){this.current!==t&&(this.current=t)}reset(){this.set(this.detect())}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}const Be=new Rt;function Ie(e){return e.reduce((t,n)=>n.type===we?t.concat(Ie(n.children)):t.concat(n),[])}function ue(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}function be(e){return e=Ve(e),e&&(e==null?void 0:e.nodeType)!==Node.COMMENT_NODE}function Mt(e,t,n,a,r){D([()=>r.offset,()=>r.flip,()=>r.shift,()=>r.autoPlacement,()=>r.arrow,()=>r.hide,()=>r.middleware],()=>{const l=[];(typeof r.offset=="number"||typeof r.offset=="object"||typeof r.offset=="function")&&l.push(Ge(r.offset)),(r.flip===!0||typeof r.flip=="number"||typeof r.flip=="object")&&l.push(Xe({padding:typeof r.flip=="number"?r.flip:void 0,...typeof r.flip=="object"?r.flip:{}})),(r.shift===!0||typeof r.shift=="number"||typeof r.shift=="object")&&l.push(Ye({padding:typeof r.shift=="number"?r.shift:void 0,...typeof r.shift=="object"?r.shift:{}})),(r.autoPlacement===!0||typeof r.autoPlacement=="object")&&l.push(Je(typeof r.autoPlacement=="object"?r.autoPlacement:void 0)),(r.arrow===!0||typeof r.arrow=="number")&&l.push(Qe({element:a,padding:r.arrow===!0?0:r.arrow})),l.push(...typeof r.middleware=="function"?r.middleware({referenceEl:t,floatingEl:n}):r.middleware||[]),(r.hide===!0||typeof r.hide=="object")&&l.push(Ze(typeof r.hide=="object"?r.hide:void 0)),e.value=l},{immediate:!0})}function Dt(e,t,n){let a=()=>{};j(()=>{if(e&&Be.isClient&&typeof ResizeObserver<"u"&&t.value&&t.value instanceof Element){const r=new ResizeObserver(([l])=>{n.value=l.borderBoxSize.reduce((s,{inlineSize:i})=>s+i,0)});r.observe(t.value),a=()=>{r.disconnect(),n.value=null}}}),We(()=>{a()})}const kt=e=>{switch(e){case"top":return"origin-bottom";case"bottom":return"origin-top";case"left":return"origin-right";case"right":return"origin-left";case"top-start":case"right-end":return"origin-bottom-left";case"top-end":case"left-end":return"origin-bottom-right";case"right-start":case"bottom-start":return"origin-top-left";case"left-start":case"bottom-end":return"origin-top-right";default:return"origin-center"}};function Ht(e,t){const n=F(()=>{if(typeof e.originClass=="function")return e.originClass(t.value);if(typeof e.originClass=="string")return e.originClass;if(e.tailwindcssOriginClass)return kt(t.value)}),a=F(()=>e.enter||n.value?`${e.enter||""} ${n.value||""}`:void 0),r=F(()=>e.leave||n.value?`${e.leave||""} ${n.value||""}`:void 0);return{originClassRef:n,enterActiveClassRef:a,leaveActiveClassRef:r}}const zt=Symbol("ReferenceContext"),Vt=Symbol("FloatingContext"),Ue=Symbol("ArrowContext");function Re(e){const t=P(Ue,null);if(t===null){const n=new Error(`<${e} /> must be in the <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Re),n}return t}const o={as:{type:[String,Function],default:"template"},floatingAs:{type:[String,Function],default:"div"},show:{type:Boolean,default:null},placement:{type:String,default:"bottom-start"},strategy:{type:String,default:"absolute"},offset:[Number,Function,Object],shift:{type:[Boolean,Number,Object],default:!1},flip:{type:[Boolean,Number,Object],default:!1},arrow:{type:[Boolean,Number],default:!1},autoPlacement:{type:[Boolean,Object],default:!1},hide:{type:[Boolean,Object],default:!1},autoUpdate:{type:[Boolean,Object],default:!0},zIndex:{type:[Number,String],default:9999},transitionName:String,transitionType:String,enter:String,enterFrom:String,enterTo:String,leave:String,leaveFrom:String,leaveTo:String,originClass:[String,Function],tailwindcssOriginClass:{type:Boolean,default:!1},portal:{type:Boolean,default:!1},transform:{type:Boolean,default:!1},adaptiveWidth:{type:Boolean,default:!1},composable:{type:Boolean,default:!1},dialog:{type:Boolean,default:!1},middleware:{type:[Array,Function],default:()=>[]}};function Wt(e,t,n,a){const{referenceRef:r}=a,l=t,s=q(n,{ref:r}),i=Q(e,l.as==="template"?s:{});return l.as==="template"?i:typeof l.as=="string"?E(l.as,s,[i]):E(l.as,s,()=>[i])}function _t(e,t,n,a){const{floatingRef:r,props:l,mounted:s,show:i,x:c,y:f,placement:d,strategy:v,referenceElWidth:p,updateFloating:m}=a,u=q({...l,as:l.floatingAs},t),{enterActiveClassRef:h,leaveActiveClassRef:y}=Ht(u,d),S={enterActiveClass:h.value,enterFromClass:u.enterFrom,enterToClass:u.enterTo,leaveActiveClass:y.value,leaveFromClass:u.leaveFrom,leaveToClass:u.leaveTo},T={name:u.transitionName,type:u.transitionType,appear:!0,...u.transitionName?{}:S,onBeforeEnter(){i.value=!0},onAfterLeave(){i.value=!1}},C={enter:h.value,enterFrom:u.enterFrom,enterTo:u.enterTo,leave:y.value,leaveFrom:u.leaveFrom,leaveTo:u.leaveTo,onBeforeEnter:T.onBeforeEnter,onAfterLeave:T.onAfterLeave},B={style:{...!u.dialog&&u.transform?{position:v.value,zIndex:u.zIndex,top:"0px",left:"0px",right:"auto",bottom:"auto",transform:`translate(${z(c.value||0)}px,${z(f.value||0)}px)`}:{position:v.value,zIndex:u.zIndex,top:`${z(f.value||0)}px`,left:`${z(c.value||0)}px`},width:u.adaptiveWidth&&typeof p.value=="number"?`${p.value}px`:void 0}};function I(b){return u.portal?E(St,()=>b):b}function O(b){const A=q(B,n,u.dialog?{}:{ref:r});return u.as==="template"?b:typeof u.as=="string"?E(u.as,A,b):E(u.as,A,()=>b)}function U(){function b(){var A;const H=u.as==="template"?q(B,n,u.dialog?{}:{ref:r}):null,w=Q(e,H);return((A=w.props)==null?void 0:A.unmount)===!1?(m(),w):typeof u.show!="boolean"||u.show?w:he()}return Be.isServer?s.value&&u.show?b():he():u.transitionChild?E(Le,{key:`placement-${d.value}`,...u.dialog?{ref:r}:{},as:"template",...C},b):E(_e,{...u.dialog?{ref:r}:{},...T},b)}return I(O(U()))}function qt(e,t,n,a,r){const l=g(!1),s=me(a,"placement"),i=me(a,"strategy"),c=ze({}),f=g(null),d=g(void 0),v=g(void 0),p=F(()=>se(t)),m=F(()=>se(n)),u=F(()=>be(p)&&be(m)),{x:h,y,placement:S,strategy:T,middlewareData:C,update:B}=qe(p,m,{placement:s,strategy:i,middleware:c}),I=g(null);j(()=>{l.value=!0}),D(e,(w,W)=>{w&&!W?r("show"):!w&&W&&r("hide")},{immediate:!0});function O(){u.value&&(B(),r("update"))}D([s,i,c],O,{flush:"sync"}),Mt(c,p,m,f,a),D(C,()=>{const w=C.value.arrow;d.value=w==null?void 0:w.x,v.value=w==null?void 0:w.y}),Dt(a.adaptiveWidth,p,I),D(e,async(w,W,x)=>{if(await Ee(),e.value&&u.value&&a.autoUpdate){const _=Ke(p.value,m.value,O,typeof a.autoUpdate=="object"?a.autoUpdate:void 0);x(_)}},{flush:"post",immediate:!0});const U=g(!0);D(p,()=>{!(p.value instanceof Element)&&u.value&&U.value&&(U.value=!1,window.requestAnimationFrame(()=>{U.value=!0,O()}))},{flush:"sync"});const b={referenceRef:t,placement:S},A={floatingRef:n,props:a,mounted:l,show:e,x:h,y,placement:S,strategy:T,referenceElWidth:I,updateFloating:O},H={ref:f,placement:S,x:d,y:v};return L(Ue,H),{referenceApi:b,floatingApi:A,arrowApi:H,x:h,y,placement:S,strategy:T,referenceEl:p,floatingEl:m,middlewareData:C,update:O}}const on={name:"Float",inheritAttrs:!1,props:o,emits:["show","hide","update"],setup(e,{emit:t,slots:n,attrs:a}){const r=g(e.show??!1),l=g(null),s=g(null),{referenceApi:i,floatingApi:c,placement:f}=qt(r,l,s,e,t);function d(p){return e.as==="template"?p:typeof e.as=="string"?E(e.as,a,p):E(e.as,a,()=>p)}const v={placement:f.value};return e.composable||e.dialog?(L(zt,i),L(Vt,c),()=>{if(n.default)return d(n.default(v))}):()=>{if(!n.default)return;const[p,m]=Ie(n.default(v)).filter(ue);if(!ue(p))return;const u=Wt(p,{as:"template"},{},i),h=_t(m,{as:e.floatingAs},{},c);return d([u,h])}}};o.as;o.floatingAs,o.transitionName,o.transitionType,o.enter,o.enterFrom,o.enterTo,o.leave,o.leaveFrom,o.leaveTo,o.originClass,o.tailwindcssOriginClass;const Kt={as:{...o.as,default:"div"},offset:{type:Number,default:4}},sn={name:"FloatArrow",props:Kt,setup(e,{slots:t,attrs:n}){const{ref:a,placement:r,x:l,y:s}=Re("FloatArrow");return()=>{var i;const c={top:"bottom",right:"left",bottom:"top",left:"right"}[r.value.split("-")[0]],f={left:typeof l.value=="number"?`${z(l.value)}px`:void 0,top:typeof s.value=="number"?`${z(s.value)}px`:void 0,right:void 0,bottom:void 0,[c]:`${e.offset*-1}px`};if(e.as==="template"){const d={placement:r.value},v=(i=t.default)==null?void 0:i.call(t,d)[0];return!v||!ue(v)?void 0:Q(v,{ref:a,style:f})}return E(e.as,q(n,{ref:a,style:f}))}}};o.as,o.show,o.placement,o.strategy,o.offset,o.shift,o.flip,o.arrow,o.autoPlacement,o.hide,o.autoUpdate,o.zIndex,o.transitionName,o.transitionType,o.enter,o.enterFrom,o.enterTo,o.leave,o.leaveFrom,o.leaveTo,o.originClass,o.tailwindcssOriginClass,o.portal,o.transform,o.middleware;o.as,o.placement,o.strategy,o.offset,o.shift,{...o.flip},o.arrow,o.autoPlacement,o.hide,o.autoUpdate,o.zIndex,o.transitionName,o.transitionType,o.enter,o.enterFrom,o.enterTo,o.leave,o.leaveFrom,o.leaveTo,o.originClass,o.tailwindcssOriginClass,o.transform,o.middleware;o.as,o.placement,o.strategy,o.offset,o.shift,o.flip,o.arrow,o.autoPlacement,o.hide,o.autoUpdate,o.zIndex,o.transitionName,o.transitionType,o.enter,o.enterFrom,o.enterTo,o.leave,o.leaveFrom,o.leaveTo,o.originClass,o.tailwindcssOriginClass,o.transform,o.middleware;export{Ae as E,fe as H,tn as K,Te as N,gt as O,yt as P,Ce as T,on as U,ln as V,nn as _,at as a,ft as b,ot as c,sn as d,de as e,bt as f,ee as g,$e as h,dt as i,$ as l,te as m,K as o,xe as p,rt as t,V as u,rn as v,Pe as w,an as y};
