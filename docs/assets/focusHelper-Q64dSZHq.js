import{a as l,o as u,F as i,d as f,e as v,g as p,z as m}from"./index-2sZdn9Tb.js";const h={__name:"focusHelper",props:{tag:{type:String,default:"span"},color:{type:String,default:"bg-foreground"},disabled:{type:Boolean,default:!1}},setup(n){const c=n,a={active:["mouseenter","focus"],inactive:["mouseleave","blur"]},t=l(),o=l(!1),s=()=>{c.disabled||(o.value=!0)},r=()=>{o.value=!1};return u(()=>{a.active.forEach(e=>{t.value.parentElement.addEventListener(e,s)}),a.inactive.forEach(e=>{t.value.parentElement.addEventListener(e,r)})}),i(()=>{a.active.forEach(e=>{t.value.parentElement.removeEventListener(e,s)}),a.inactive.forEach(e=>{t.value.parentElement.removeEventListener(e,r)})}),(e,d)=>(f(),v(m(n.tag),{class:p(["pointer-events-none absolute inset-0 !block h-full w-full transition-opacity",[n.color,o.value?"opacity-20":"opacity-0"]]),ref_key:"focushelperel",ref:t},null,8,["class"]))}};export{h as default};
