import{d as t,m as l,I as s,q as o,i as r,s as a}from"./index-2sZdn9Tb.js";const i=a("div",{class:"absolute inset-y-0 left-[50%] animate-progInc select-none overflow-hidden rounded-full bg-primary"},null,-1),d=a("div",{class:"absolute inset-y-0 left-[50%] animate-progDec select-none overflow-hidden rounded-full bg-primary"},null,-1),f={__name:"tProgressBar",props:{value:Number,indeterminate:{type:Boolean,default:!1}},setup(e){return(n,u)=>e.indeterminate?(t(),l(s,{key:0},[i,d],64)):(t(),l("div",{key:1,class:"absolute inset-y-0 left-0 flex select-none items-center justify-center overflow-hidden rounded-full bg-primary transition-all duration-500",style:r({width:`${e.value}%`})},[o(n.$slots,"default",{value:e.value})],4))}};export{f as default};
