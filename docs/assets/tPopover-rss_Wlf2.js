import{a as w,N as U,$ as k,K as _,c as x,L as ee,I as te,o as ce,M as fe,O as le,w as ve,b as j,d as T,e as R,f as M,h as B,g as Y,j as pe,p as V,t as me,m as Z,s as be,q as J,l as z,i as he,a3 as ge,x as ye}from"./index-X5AUvwv7.js";import{f as we,g as Se,m as W,o as l,E as ne,u as D,c as Pe,l as H,V as Ce,y as xe,w as Ee,h as Oe,H as oe,t as q,P as A,b as L,p as ke,N as Q,a as $e,i as X,U as Te,d as Be}from"./headlessui-float-7kWDVlSA.js";import{a as G,f as K}from"./hidden-S2iKyMKq.js";import"./floating-ui.vue.esm-4jgX_A2q.js";var N=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(N||{});function Ne(){let t=w(0);return we("keydown",f=>{f.key==="Tab"&&(t.value=f.shiftKey?1:0)}),t}function Fe(t,f,m,d){Se.isServer||U(b=>{t=t??window,t.addEventListener(f,m,d),b(()=>t.removeEventListener(f,m,d))})}function Ie({defaultContainers:t=[],portals:f,mainTreeNodeRef:m}={}){let d=w(null),b=W(d);function e(){var s;let u=[];for(let r of t)r!==null&&(r instanceof HTMLElement?u.push(r):"value"in r&&r.value instanceof HTMLElement&&u.push(r.value));if(f!=null&&f.value)for(let r of f.value)u.push(r);for(let r of(s=b==null?void 0:b.querySelectorAll("html > *, body > *"))!=null?s:[])r!==document.body&&r!==document.head&&r instanceof HTMLElement&&r.id!=="headlessui-portal-root"&&(r.contains(l(d))||u.some(E=>r.contains(E))||u.push(r));return u}return{resolveContainers:e,contains(s){return e().some(u=>u.contains(s))},mainTreeNodeRef:d,MainTreeNode(){return m!=null?null:k(K,{features:G.Hidden,ref:d})}}}var Me=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Me||{});let ae=Symbol("PopoverContext");function se(t){let f=le(ae,null);if(f===null){let m=new Error(`<${t} /> is missing a parent <${re.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,se),m}return f}let ze=Symbol("PopoverGroupContext");function Ae(){return le(ze,null)}let Le=Symbol("PopoverPanelContext"),re=_({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:f,attrs:m,expose:d}){var b;let e=w(null);d({el:e,$el:e});let s=w(1),u=w(null),r=w(null),E=w(null),h=w(null),O=x(()=>W(e)),$=x(()=>{var n,a;if(!l(u)||!l(h))return!1;for(let I of document.querySelectorAll("body > *"))if(Number(I==null?void 0:I.contains(l(u)))^Number(I==null?void 0:I.contains(l(h))))return!0;let c=ne(),C=c.indexOf(l(u)),F=(C+c.length-1)%c.length,ue=(C+1)%c.length,ie=c[F],de=c[ue];return!((n=l(h))!=null&&n.contains(ie))&&!((a=l(h))!=null&&a.contains(de))}),p={popoverState:s,buttonId:w(null),panelId:w(null),panel:h,button:u,isPortalled:$,beforePanelSentinel:r,afterPanelSentinel:E,togglePopover(){s.value=D(s.value,{0:1,1:0})},closePopover(){s.value!==1&&(s.value=1)},close(n){p.closePopover();let a=(()=>n?n instanceof HTMLElement?n:n.value instanceof HTMLElement?l(n):l(p.button):l(p.button))();a==null||a.focus()}};ee(ae,p),Pe(x(()=>D(s.value,{0:H.Open,1:H.Closed})));let g={buttonId:p.buttonId,panelId:p.panelId,close(){p.closePopover()}},S=Ae(),i=S==null?void 0:S.registerPopover,[v,o]=Ce(),y=Ie({mainTreeNodeRef:S==null?void 0:S.mainTreeNodeRef,portals:v,defaultContainers:[u,h]});function P(){var n,a,c,C;return(C=S==null?void 0:S.isFocusWithinPopoverGroup())!=null?C:((n=O.value)==null?void 0:n.activeElement)&&(((a=l(u))==null?void 0:a.contains(O.value.activeElement))||((c=l(h))==null?void 0:c.contains(O.value.activeElement)))}return U(()=>i==null?void 0:i(g)),Fe((b=O.value)==null?void 0:b.defaultView,"focus",n=>{var a,c;n.target!==window&&n.target instanceof HTMLElement&&s.value===0&&(P()||u&&h&&(y.contains(n.target)||(a=l(p.beforePanelSentinel))!=null&&a.contains(n.target)||(c=l(p.afterPanelSentinel))!=null&&c.contains(n.target)||p.closePopover()))},!0),xe(y.resolveContainers,(n,a)=>{var c;p.closePopover(),Ee(a,Oe.Loose)||(n.preventDefault(),(c=l(u))==null||c.focus())},x(()=>s.value===0)),()=>{let n={open:s.value===0,close:p.close};return k(te,[k(o,{},()=>oe({theirProps:{...t,...m},ourProps:{ref:e},slot:n,slots:f,attrs:m,name:"Popover"})),k(y.MainTreeNode)])}}}),De=_({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${q()}`}},inheritAttrs:!1,setup(t,{attrs:f,slots:m,expose:d}){let{focus:b}=t,e=se("PopoverPanel"),s=x(()=>W(e.panel)),u=`headlessui-focus-sentinel-before-${q()}`,r=`headlessui-focus-sentinel-after-${q()}`;d({el:e.panel,$el:e.panel}),ce(()=>{e.panelId.value=t.id}),fe(()=>{e.panelId.value=null}),ee(Le,e.panelId),U(()=>{var i,v;if(!b||e.popoverState.value!==0||!e.panel)return;let o=(i=s.value)==null?void 0:i.activeElement;(v=l(e.panel))!=null&&v.contains(o)||A(l(e.panel),L.First)});let E=ke(),h=x(()=>E!==null?(E.value&H.Open)===H.Open:e.popoverState.value===0);function O(i){var v,o;switch(i.key){case $e.Escape:if(e.popoverState.value!==0||!l(e.panel)||s.value&&!((v=l(e.panel))!=null&&v.contains(s.value.activeElement)))return;i.preventDefault(),i.stopPropagation(),e.closePopover(),(o=l(e.button))==null||o.focus();break}}function $(i){var v,o,y,P,n;let a=i.relatedTarget;a&&l(e.panel)&&((v=l(e.panel))!=null&&v.contains(a)||(e.closePopover(),((y=(o=l(e.beforePanelSentinel))==null?void 0:o.contains)!=null&&y.call(o,a)||(n=(P=l(e.afterPanelSentinel))==null?void 0:P.contains)!=null&&n.call(P,a))&&a.focus({preventScroll:!0})))}let p=Ne();function g(){let i=l(e.panel);if(!i)return;function v(){D(p.value,{[N.Forwards]:()=>{var o;A(i,L.First)===X.Error&&((o=l(e.afterPanelSentinel))==null||o.focus())},[N.Backwards]:()=>{var o;(o=l(e.button))==null||o.focus({preventScroll:!0})}})}v()}function S(){let i=l(e.panel);if(!i)return;function v(){D(p.value,{[N.Forwards]:()=>{let o=l(e.button),y=l(e.panel);if(!o)return;let P=ne(),n=P.indexOf(o),a=P.slice(0,n+1),c=[...P.slice(n+1),...a];for(let C of c.slice())if(C.dataset.headlessuiFocusGuard==="true"||y!=null&&y.contains(C)){let F=c.indexOf(C);F!==-1&&c.splice(F,1)}A(c,L.First,{sorted:!1})},[N.Backwards]:()=>{var o;A(i,L.Previous)===X.Error&&((o=l(e.button))==null||o.focus())}})}v()}return()=>{let i={open:e.popoverState.value===0,close:e.close},{id:v,focus:o,...y}=t,P={ref:e.panel,id:v,onKeydown:O,onFocusout:b&&e.popoverState.value===0?$:void 0,tabIndex:-1};return oe({ourProps:P,theirProps:{...f,...y},attrs:f,slot:i,slots:{...m,default:(...n)=>{var a;return[k(te,[h.value&&e.isPortalled.value&&k(K,{id:u,ref:e.beforePanelSentinel,features:G.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:g}),(a=m.default)==null?void 0:a.call(m,...n),h.value&&e.isPortalled.value&&k(K,{id:r,ref:e.afterPanelSentinel,features:G.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S})])]}},features:Q.RenderStrategy|Q.Static,visible:h.value,name:"PopoverPanel"})}}});const He={key:1,class:"leading-none"},je={class:"absolute left-0 top-0 overflow-hidden rounded-md bg-background"},Ke={__name:"tPopover",props:{label:{type:String,default:""},icon:{type:String,default:null},shown:{type:Boolean,default:!1},iconSize:{type:String,default:"md",validator:t=>["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl"].indexOf(t)>-1},btnClass:{type:[String,Array],default:()=>[]},contentClass:{type:[String,Array],default:()=>[]},focusClass:{type:String,default:"bg-foreground"},focusDisabled:{type:Boolean,default:!1},ripple:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},closeOnOutsideClick:{type:Boolean,default:!0},placement:{type:String,default:"bottom-end",validator:t=>["left","top","right","bottom","left-start","top-start","right-start","bottom-start","left-end","top-end","right-end","bottom-end"].indexOf(t)>-1},offset:{type:Number,default:5},arrow:{type:Boolean,default:!1}},emits:["clickedOutside","update:shown"],setup(t,{expose:f,emit:m}){const d=t,b=m,e=w(!1),s=w({width:0,height:0}),u=x(()=>d.shown),r=x(()=>Array.isArray(d.contentClass)?d.contentClass:[d.contentClass]),E=x(()=>Array.isArray(d.btnClass)?d.btnClass:[d.btnClass]),h=()=>{e.value=!e.value,b("update:shown",e.value)},O=g=>{d.closeOnOutsideClick&&$(),b("clickedOutside",g)},$=()=>{e.value=!1,b("update:shown",e.value)},p=g=>{s.value={width:g.width,height:g.height}};return ve(u,g=>{e.value=g}),f({close}),(g,S)=>{const i=j("TIcon"),v=j("TButton"),o=j("SizeObserver");return T(),R(B(re),{class:"flex items-center justify-center leading-none"},{default:M(()=>[z(B(Te),{placement:t.placement,offset:t.offset||(t.arrow?10:t.offset),shift:6,flip:10,arrow:5,show:e.value,portal:"",enter:"transition duration-200 ease-out","enter-from":"opacity-0 -translate-y-1","enter-to":"opacity-100 translate-y-0",leave:"transition duration-150 ease-in","leave-from":"opacity-100 translate-y-0","leave-to":"opacity-0 -translate-y-1"},{default:M(()=>[z(v,{class:Y(["relative overflow-hidden leading-none !outline-none outline-offset-0 focus:outline-primary",[...E.value,e.value&&"pointer-events-none"]]),disabled:t.disabled,focusDisabled:t.focusDisabled,ripple:t.ripple,onClick:S[0]||(S[0]=pe(y=>h(),["stop"]))},{default:M(()=>[J(g.$slots,"button",{},()=>[be("div",{class:Y(["pointer-events-none flex flex-auto items-center justify-center gap-1 font-semibold leading-none",r.value])},[t.icon?(T(),R(i,{key:0,name:t.icon,size:t.iconSize},null,8,["name","size"])):V("",!0),t.label?(T(),Z("span",He,me(t.label),1)):V("",!0)],2)])]),_:3},8,["class","disabled","focusDisabled","ripple"]),z(B(De),{static:"",class:"relative rounded-md border border-foreground/25 bg-background text-foreground shadow-lg focus:outline-none",style:he({width:`${s.value.width+1.5}px`,height:`${s.value.height+1.5}px`})},{default:M(()=>[t.arrow?(T(),R(B(Be),{key:0,class:"absolute h-5 w-5 rotate-45 border border-foreground/25 bg-background text-foreground"})):V("",!0),ye((T(),Z("div",je,[J(g.$slots,"default",{close:()=>$(),visible:e.value}),z(o,{onResize:p})])),[[B(ge),O]])]),_:3},8,["style"])]),_:3},8,["placement","offset","show"])]),_:3})}}};export{Ke as default};
