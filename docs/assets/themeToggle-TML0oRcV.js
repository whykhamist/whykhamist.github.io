import{u,b as s,d as l,m as a,s as r,t as c,h as o,l as d,p as g}from"./index-2sZdn9Tb.js";const f={class:"group relative flex items-center justify-center gap-1 leading-none"},p={class:"sr-only"},h={key:0,class:"font-semibold leading-none"},S={__name:"themeToggle",props:{label:{type:String,default:null},lightIcon:{type:String,default:"light_mode"},darkIcon:{type:String,default:"dark_mode"},focusClass:{type:[String,Object],default:"bg-foreground"}},setup(e){const t=u();return(y,n)=>{const i=s("TIcon"),m=s("FocusHelper");return l(),a("button",{class:"relative my-1 leading-none transition-colors",onClick:n[0]||(n[0]=k=>o(t).toggleTheme(!1))},[r("div",f,[r("span",p,c(o(t).theme.dark?"light":"dark")+" mode ",1),d(i,{name:o(t).theme.dark?e.lightIcon:e.darkIcon},null,8,["name"]),e.label?(l(),a("div",h,c(e.label),1)):g("",!0)]),d(m,{color:e.focusClass},null,8,["color"])])}}};export{S as default};
