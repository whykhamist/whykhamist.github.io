import{c as l,d as i,m as u,s as a,t as n}from"./index-pkSQlspo.js";const d={class:"flex items-center gap-1 text-sm font-semibold italic text-gray-400"},m={class:"flex-auto leading-none"},f={class:"leading-none"},g={__name:"pageResultCount",props:{count:Number,total:Number,limit:Number,offset:Number},setup(o){const t=o,r=l(()=>{var s=t.offset+1,e=t.offset+t.count;e=e>t.total?t.total:e;var c="Showing "+s+" - "+e+" of "+t.total;return c});return(s,e)=>(i(),u("div",d,[a("div",m,"About "+n(o.total)+" results",1),a("div",f,n(r.value),1)]))}};export{g as default};
