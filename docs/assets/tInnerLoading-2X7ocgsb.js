import{r as d,u as S,a as c,c as g,w as f,n as k,o as p,b as x,d as v,e as B,f as w,g as h,h as F,i as T,j as R,k as C,l as E,t as L,m as N,p as m,q as V,s as z,v as D,x as O,T as $}from"./index-X5AUvwv7.js";const j={key:0,class:"italic"},M={__name:"tInnerLoading",props:{text:{type:String,default:null},active:{type:Boolean,default:!1},isFullScreen:{type:Boolean,default:!1},lockFocus:{type:Boolean,default:!1}},setup(e){const n=e;let a=d({}),r=d({"border-top-left-radius":0,"border-top-right-radius":0,"border-bottom-left-radius":0,"border-bottom-right-radius":0});S();const s=c(null),l=c(null);g(()=>!l.value&&n.active);function u(){return window.getComputedStyle(s.value.parentElement)}const b=()=>{r["border-top-left-radius"]=a.borderTopLeftRadius??0,r["border-top-right-radius"]=a.borderTopRightRadius??0,r["border-bottom-left-radius"]=a.borderBottomLeftRadius??0,r["border-bottom-right-radius"]=a.borderBottomRightRadius??0};return f(()=>n.active,(i,t)=>{i&&(a=u(),b(),s.value.parentElement.nodeName!="BODY"&&a.position!="relative")}),f(l,i=>{!i&&n.lockFocus&&k(()=>{var t;(t=s.value)==null||t.focus()})}),p(()=>{a=u()}),(i,t)=>{const y=x("TSpinnerOrbit");return v(),B($,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0","enter-active-class":"transition duration-300","leave-active-class":"transition duration-300",onBeforeLeave:t[2]||(t[2]=o=>l.value=!0),onAfterEnter:t[3]||(t[3]=o=>l.value=!1)},{default:w(()=>[O(z("div",{ref_key:"el",ref:s,tabindex:"0",class:h(["inset-0 z-[9999] flex flex-col items-center justify-center bg-background/50 text-foreground outline-none",[e.isFullScreen&&"fixed",!e.isFullScreen&&"absolute"]]),style:T(e.isFullScreen?[]:F(r)),onKeydown:t[0]||(t[0]=C(R(()=>{var o;e.active&&e.lockFocus&&((o=s.value)==null||o.focus())},["prevent","stop"]),["tab"])),onBlur:t[1]||(t[1]=()=>{var o;e.active&&e.lockFocus&&((o=s.value)==null||o.focus())})},[e.active?V(i.$slots,"default",{key:0},()=>[E(y,{class:"h-8 w-8"}),e.text?(v(),N("div",j,L(e.text),1)):m("",!0)]):m("",!0)],38),[[D,e.active]])]),_:3})}}};export{M as default};
