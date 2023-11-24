import{O as $,W as F,a as i,c as g,w as x,o as I,b as u,d as b,m as P,s as t,t as _,e as k,p as y,f as U,y as q,l as r,g as A}from"./index-2sZdn9Tb.js";const E={class:"flex-auto"},H={class:"grid gap-1 p-1"},M={class:"flex items-center gap-1 text-sm"},W={class:"flex-auto leading-none"},G=t("span",{class:"font-semibold"},"Filter:",-1),J={class:"flex items-center justify-end gap-1"},Q={__name:"selectionColumn",props:{modelValue:Object,api:String,label:String,columnName:String,currentColumn:String,key:String,searchable:{type:Boolean,default:!1},sortable:{type:Boolean,default:!1},order:{type:String,default:"desc",validator:e=>["asc","desc"].indexOf(e.toLowerCase())>-1},formatData:{type:Function,default:e=>e}},emits:["update:modelValue","update:order","sort"],setup(e,{emit:w}){var C;const S=$("$api"),a=e,d=w,V={value:null,label:"None"};F.uniqid();const m=i(!1),n=i(((C=a.modelValue)==null?void 0:C.value)??null),p=i(!1),c=i([]),T=g(()=>a.modelValue),f=g({get:()=>a.order,set:l=>d("update:order",l)}),B=g(()=>a.columnName==a.currentColumn),N=()=>{a.sortable&&(f.value=f.value=="asc"?"desc":"asc",d("sort",a.columnName))},z=()=>{m.value=!0,S.get(a.api).then(l=>{c.value=a.formatData(l.data.data),c.value.unshift(V)}).finally(()=>{m.value=!1})},D=l=>{d("update:modelValue",c.value.find(o=>o.value==n.value))};return x(T,l=>{n.value=l==null?void 0:l.value}),I(()=>{z()}),x(p,l=>{var o;l||(n.value=((o=a.modelValue)==null?void 0:o.value)??null)}),(l,o)=>{const O=u("TIcon"),v=u("TButton"),j=u("TList"),L=u("TPopover");return b(),P("div",{class:A(["group flex items-center",[e.sortable&&"cursor-pointer select-none"]]),onClick:N},[t("div",E,_(e.label),1),e.sortable&&B.value?(b(),k(O,{key:0,name:f.value=="desc"?"arrow_drop_up":"arrow_drop_down",size:"xs"},null,8,["name"])):y("",!0),e.searchable?(b(),k(L,{key:1,shown:p.value,"onUpdate:shown":o[1]||(o[1]=s=>p.value=s),arrow:"",icon:"filter_alt",iconSize:"xs",btnClass:"rounded-lg p-0.5"},{default:U(({close:s})=>[t("div",H,[t("div",M,[t("div",W,[G,q(" "+_(e.label),1)]),r(v,{icon:"close",iconSize:"sm",onClick:s,class:"rounded-full"},null,8,["onClick"])]),r(j,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=h=>n.value=h),label:e.label,options:c.value,loading:m.value,portal:!1,class:"min-w-[12rem]",innerClass:"text-dark bg-light"},null,8,["modelValue","label","options","loading"]),t("div",J,[r(v,{label:"Ok",class:"rounded-lg bg-primary bg-glossy px-2 py-1 text-light",onClick:h=>(D(),s())},null,8,["onClick"]),r(v,{label:"Cancel",class:"rounded-lg px-2 py-1",onClick:s},null,8,["onClick"])])])]),_:1},8,["shown"])):y("",!0)],2)}}};export{Q as default};
