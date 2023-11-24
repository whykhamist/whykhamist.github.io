import{a as d,c as r,w as _,E,d as f,e as v,l as S,f as y,z as V,g,k as h,j as x,m as z,p as b,B as A,q as D,s as k,x as T,T as W,J as K}from"./index-2sZdn9Tb.js";const O={__name:"tDialog",props:{modelValue:{type:Boolean,default:!1},contain:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1},seamless:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},fullHeight:{type:Boolean,default:!1},blur:{type:Boolean,default:!1},position:{type:String,default:"center",validator:a=>["center","top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"].indexOf(a)>-1},transition:{type:String,default:"pop",validator:a=>["pop","slide-left","slide-right","slide-up","slide-down","pop-slide-left","pop-slide-right","pop-slide-up","pop-slide-down"].indexOf(a)>-1},wrapperClass:{type:[String,Array],default:""}},emits:["update:modelValue","open"],setup(a,{emit:w}){const s=a,B=w,c=d(!1),o=d(null),u=d(null),n=r({get(){return s.modelValue??c.value},set(e){c.value=e,B("update:modelValue",e),e&&o.value&&u.value.focus()}}),j=r(()=>[$(s.wrapperClass),(s.fullScreen||s.fullWidth)&&"w-full",(s.fullScreen||s.fullHeight)&&"h-full"]),C=r(()=>{const e=s.position;return[e=="center"&&"justify-center items-center",e=="top"&&"justify-center items-start",e=="left"&&"justify-start items-center",e=="right"&&"justify-end items-center",e=="bottom"&&"justify-center items-end",e=="top-left"&&"justify-start items-start",e=="top-right"&&"justify-end items-start",e=="bottom-left"&&"justify-start items-end",e=="bottom-right"&&"justify-end items-end"]}),l=r(()=>{var e;return((e=o.value)==null?void 0:e.parentElement)??null}),i=(e=!0)=>{e||!s.persistent?n.value=!1:L()},L=()=>{var t;const e=(t=u.value)==null?void 0:t.firstElementChild;e&&!e.classList.contains("animate-shake")&&(e.classList.add("animate-shake"),e.addEventListener("animationend",p=>{e.classList.remove("animate-shake")}))},$=e=>Array.isArray(e)?e:[e];return _(l,e=>{e&&n&&!s.seamless&&(o.value.focus(),l.value.classList.add("__dialog_open__"),s.blur&&[...l.value.children].forEach(t=>{t.classList.contains("__dialog__")||t.classList.add("__dialog_blur__")}))}),_(n,e=>{!e&&!s.seamless&&(l.value.classList.remove("__dialog_open__"),[...l.value.children].forEach(t=>{t.classList.contains("__dialog__")||t.classList.remove("__dialog_blur__")}))}),(e,t)=>{const p=E("trap-focus");return f(),v(K,{to:"body",disabled:a.contain},[S(W,{name:`dialog-${a.transition}`},{default:y(()=>[n.value?T((f(),v(V("div"),{key:0,class:g(["__dialog__ pointer-events-none absolute inset-0 z-[1030]",[!a.contain&&"z-[1030]",a.contain&&"z-20"]]),ref_key:"$el",ref:o,onKeyup:t[2]||(t[2]=h(m=>i(!1),["esc"]))},{default:y(()=>[k("div",{class:g(["__dialog_container__ pointer-events-none relative flex h-full w-full",C.value])},[a.seamless?b("",!0):(f(),z("div",{key:0,class:"__dialog_backdrop__ pointer-events-auto absolute inset-0 bg-background-accent bg-opacity-50 transition-opacity",onClick:t[0]||(t[0]=x(m=>i(!1),["stop"]))})),k("div",A(e.$attrs,{class:["__dialog_wrapper__ pointer-events-auto absolute",j.value],ref_key:"$contentWrapper",ref:u,onKeyup:t[1]||(t[1]=h(m=>i(!1),["esc"]))}),[D(e.$slots,"default",{close:()=>i(!0)})],16)],2)]),_:3},40,["class"])),[[p]]):b("",!0)]),_:3},8,["name"])],8,["disabled"])}}};export{O as default};
