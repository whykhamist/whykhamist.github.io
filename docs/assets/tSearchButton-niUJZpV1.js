import{b as s,d,e as u,f,l as r,t as p,s as a,j as m}from"./index-X5AUvwv7.js";const x={class:"pointer-events-none flex flex-auto items-center px-2"},b={class:"flex-auto leading-none"},_={__name:"tSearchButton",props:{label:{type:String,default:"Search"},icon:{type:String,default:"search"}},emits:["search","reset"],setup(t,{emit:l}){const o=l;return(g,e)=>{const c=s("TIcon"),n=s("TButton");return d(),u(n,{class:"w-64 rounded-full border border-slate-500 bg-light/25 px-1.5 py-0.5 text-start text-foreground shadow-inner",onClick:e[1]||(e[1]=i=>o("search"))},{default:f(()=>[a("div",x,[r(c,{name:t.icon,class:"mr-1"},null,8,["name"]),a("div",b,p(t.label),1),r(n,{icon:"refresh",class:"pointer-events-auto box-border rounded-full border-2 bg-foreground/10",darkFocus:"",onClick:e[0]||(e[0]=m(i=>o("reset"),["stop"]))})])]),_:1})}}};export{_ as default};
