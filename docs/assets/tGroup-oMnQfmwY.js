import{c as s,d as a,m as r,g as l,s as o,t as n,p as i,l as g,f as b,T as f,q as p}from"./index-X5AUvwv7.js";const m={class:"absolute inset-x-0 bottom-0 translate-y-full px-2 pt-1 text-[11px] font-semibold leading-none"},v={key:0,class:"rounded-full border border-negative bg-negative/75 px-1 leading-tight text-light"},h={__name:"tGroup",props:{label:{type:String,default:null},labelPos:{type:String,default:"center",validator:e=>["left","center","right"].indexOf(e)>-1},bg:{type:String,default:"bg-light"},error:{type:Boolean,default:!1},errorMessage:{type:String,default:null}},setup(e){const t=e,d=s(()=>[t.bg,t.error&&"!border-negative mb-5"]),u=s(()=>[t.bg,t.labelPos=="left"&&"left-2",t.labelPos=="center"&&"left-1/2 -translate-x-1/2",t.labelPos=="right"&&"right-2",t.error&&"!text-negative !border-negative"]);return(c,y)=>(a(),r("div",{class:l(["group/tgroup relative rounded-lg border border-slate-400 transition-colors focus-within:border-primary",d.value])},[e.label?(a(),r("div",{key:0,class:l(["absolute top-0 -translate-y-1/2 rounded-full border border-slate-400 px-2 text-xs font-semibold uppercase leading-none text-gray-400/75 group-focus-within/tgroup:border-primary group-focus-within/tgroup:text-primary",u.value])},[o("div",{class:l([e.error&&"animate-shake "])},n(e.label),3)],2)):i("",!0),o("div",m,[g(f,{"enter-from-class":"-translate-y-full opacity-0","leave-to-class":"-translate-y-full opacity-0","enter-active-class":"transition duration-300","leave-active-class":"transition duration-300"},{default:b(()=>[e.error?(a(),r("div",v,n(e.errorMessage),1)):i("",!0)]),_:1})]),p(c.$slots,"default")],2))}};export{h as default};
