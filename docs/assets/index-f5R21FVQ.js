import{a as v,a1 as $,c as E,b as G,d as j,m as I,s as O,l as k,B as P,h as T,f as U,z as A,e as D,T as M,g as S}from"./index-2sZdn9Tb.js";const q={class:"flex items-center px-4"},H={class:"flex flex-auto flex-col"},Q={__name:"index",props:{tabs:Object,tab:Number,progressClass:{type:[String,Object],default:"before:!bg-primary !bg-gray-300/75 !min-h-[0.35rem]"},stepClasses:{type:Object,default:()=>({})}},emits:["update:modelValue","update:tab","submit","error"],setup(r,{expose:V,emit:B}){const n=r,b=B,d=v(!1),f=v([]),m=v([]),l=v({}),t=$(n,"tab",b),w=E(()=>Object.assign({},{bgClass:"!bg-background-accent",activeClass:"bg-primary",activeIconClass:"text-light",activeLabelClass:"text-primary",idleClass:"bg-gray-400/75",idleIconClass:"text-dark",idleLabelClass:"text-foreground"},n.stepClasses)),F=E(()=>Object.values(l.value).some(e=>e.error)),p=()=>{i(t.value+1)},x=()=>{i(t.value-1)},C=async e=>{if(t.value>e)i(e);else for(let a=t.value;a<e;a++)g(f.value)&&!F.value&&(i(t.value+1),await new Promise(o=>setTimeout(o,300)))},i=e=>{e==n.tabs.length?b("submit"):e>=n.tabs.length?t.value=n.tabs.length-1:(t.value<e&&g(f.value)||t.value>e)&&(t.value=e)},N=e=>{f.value=e,Object.assign(m.value,{[n.tabs[t.value].name]:e})},g=(e=null)=>{let a=Object.keys(l.value);a.forEach(s=>{l.value[s].resetError()}),e==null?a.forEach(s=>{l.value[s].validate()}):e.forEach(s=>{l.value[s].validate()});let o=!Object.values(l.value).some(s=>s.error);if(!o){let s={};a.filter(u=>l.value[u].error).forEach(u=>{Object.assign(s,{[u]:["error"]})}),h(s,!1)}return o},h=(e,a=!1)=>{let o=Object.keys(e),s=-1,u=n.tabs.map(c=>c.name),y=[];u.forEach(c=>{if(m.value[c]){let z=m.value[c].some(L=>o.includes(L));s<0&&z&&(s=u.indexOf(c),y.push(c))}}),b("error",y),s>-1&&a&&i(s)};return V({nextPage:p,prevPage:x,jumpPage:C,changePage:i,validate:g,reset:()=>{Object.values(l.value).forEach(a=>{a.reset()}),i(0)},onError:e=>h(e,!0),editor:l}),(e,a)=>{const o=G("TTabProgress");return j(),I("div",{class:S(["relative flex flex-col",[d.value&&"overflow-hidden"]])},[O("div",q,[k(o,P({modelValue:T(t),"onUpdate:modelValue":C,pages:r.tabs,progressClass:r.progressClass},w.value,{class:"mb-5 flex-auto"}),null,16,["modelValue","pages","progressClass"])]),O("div",H,[k(M,{"enter-from-class":"opacity-0 blur-md","leave-to-class":"opacity-0 blur-md","enter-active-class":"transition duration-300 delay-300 inset-x-0 absolute","leave-active-class":"transition duration-300 inset-x-0 absolute",onBeforeLeave:a[1]||(a[1]=s=>d.value=!0),onAfterEnter:a[2]||(a[2]=s=>d.value=!1)},{default:U(()=>[(j(),D(A(r.tabs[r.tab].component),P({key:`wiz_tab_${r.tabs[r.tab].name}`,inputFields:l.value,"onUpdate:inputFields":a[0]||(a[0]=s=>l.value=s)},r.tabs[T(t)].bindings??{},{onNext:p,onPrev:x,onFields:N}),null,16,["inputFields"]))]),_:1})])],2)}}};export{Q as default};
