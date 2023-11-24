import{C as S,c as u,W as w,b,d as a,e as f,f as h,p as n,h as i,q as l,m as s,g as c,i as p,t as g,y as z,s as d,T as $,l as B,B as A,z as M}from"./index-pkSQlspo.js";const O={key:1,class:"flex items-center self-stretch pr-1.5"},T={key:0,class:"flex items-center self-stretch pr-1.5"},N={key:0,class:"pointer-events-none absolute left-0 top-[0.625rem] origin-top-left -translate-y-[45%] scale-[0.65] select-none text-lg leading-none transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[45%] peer-focus:scale-[0.65]"},R={key:1,class:"flex items-center gap-1 self-stretch"},j={key:2,class:"absolute inset-x-0 bottom-0 translate-y-full px-2 pt-1 text-[11px] leading-none"},V={key:0,class:"absolute left-2 right-0 top-0.5 mt-0.5 text-[11px] font-semibold leading-none"},F={class:"rounded-full border-negative px-1 leading-tight text-negative dark:border dark:bg-negative/75 dark:text-light"},q={key:1,class:"absolute inset-x-2 top-1 text-[11px] leading-none text-gray-400"},D={key:2,class:"flex items-center self-stretch pl-1.5"},E={__name:"tFieldWrapper2",props:{tag:{type:String,default:"label"},id:{type:String,default:null},label:{type:String,default:null},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},hint:{type:String,default:null},error:{type:Boolean,default:null},errorMessage:{type:String,default:null},cursor:{type:String,default:"cursor-text",validator:e=>/^cursor-/.test(e)},onResize:{type:Function,default:null},innerClass:{type:[Object,String],default:"focus-within:bg-light focus-within:text-dark text-foreground focus-within:duration-700 !shadow-none"},innerStyle:{type:[Object,String],default:""},hintClass:{type:[Object,String],default:"text-end leading-none"}},setup(e){const t=e,o=S(),y=u(()=>({id:t.id??w.uniqid(),placeholder:" ","aria-label":t.label,readonly:t.readonly,disabled:t.disabled})),m=u(()=>{let r={"aria-disabled":t.disabled,"aria-readonly":t.readonly};return t.tag=="label"&&Object.assign(r,{for:y.value.id}),r}),v=u(()=>Array.isArray(t.innerClass)?t.innerClass:[t.innerClass]),x=u(()=>Array.isArray(t.hintClass)?t.hintClass:[t.hintClass]);return(r,I)=>{const C=b("SizeObserver"),k=b("TIcon");return a(),f(M(e.tag),A(m.value,{class:["group/outer relative flex flex-nowrap items-start leading-none",[(e.error!=null||e.hint!=null)&&"mb-5",e.disabled&&"!cursor-not-allowed"]]}),{default:h(()=>[e.onResize?(a(),f(C,{key:0,onResize:e.onResize},null,8,["onResize"])):n("",!0),i(o).before?(a(),s("div",O,[l(r.$slots,"before",{error:e.error})])):n("",!0),d("div",{class:c(["group/inner relative box-border flex flex-auto gap-1 rounded-lg border border-gray-500/25 px-2 shadow-md outline-2 outline-primary transition-all",[...v.value,e.cursor,e.error&&"!border-negative outline-negative",!e.readonly&&"focus-within:outline",e.readonly&&"border-dashed border-gray-700 focus-within:border-primary",e.disabled&&"pointer-events-none !cursor-not-allowed select-none !bg-gray-200"]]),style:p(e.innerStyle)},[i(o).prepend?(a(),s("div",T,[l(r.$slots,"prepend",{error:e.error})])):n("",!0),d("div",{class:c(["relative flex-auto pb-2 pt-2 leading-none",[!!e.label&&"!pb-1 !pt-1.5"]])},[l(r.$slots,"default",{attr:y.value,classNames:["peer w-full bg-inherit placeholder-transparent outline-none placeholder:select-none",!!e.label&&"mt-1.5"],error:e.error}),e.label||i(o).label?(a(),s("div",N,[d("div",{class:c(["font-medium leading-none group-focus-within/inner:text-primary",[e.error&&"animate-shake !text-negative",e.disabled&&"text-gray-400"]])},[l(r.$slots,"label",{error:e.error},()=>[z(g(e.label),1)])],2)])):n("",!0)],2),i(o).append||e.error?(a(),s("div",R,[l(r.$slots,"append",{error:e.error}),l(r.$slots,"error",{error:e.error},()=>[e.error?(a(),f(k,{key:0,name:"error",class:"text-negative"})):n("",!0)])])):n("",!0),e.error!=null&&e.errorMessage!=null||e.hint!=null?(a(),s("div",j,[B($,{enterFromClass:"opacity-0 -translate-y-full",leaveToClass:"opacity-0 -translate-y-full",enterActiveClass:"transition duration-300",leaveActiveClass:"transition duration-300"},{default:h(()=>[e.error?(a(),s("div",V,[l(r.$slots,"errorMessage",{error:e.error,errorMessage:e.errorMessage},()=>[d("span",F,g(e.errorMessage),1)])])):(a(),s("div",q,[l(r.$slots,"hint",{hint:e.hint},()=>[d("div",{class:c(x.value)},g(e.hint),3)])]))]),_:3})])):n("",!0)],6),i(o).after?(a(),s("div",D,[l(r.$slots,"after",{error:e.error})])):n("",!0)]),_:3},16,["class"])}}};export{E as default};
