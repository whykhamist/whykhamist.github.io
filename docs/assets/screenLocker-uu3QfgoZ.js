import{u as S,a as w,ad as C,b as n,q as x,l as a,B as y,f as r,s as T}from"./index-pkSQlspo.js";const b={class:"absolute right-2 top-2"},V={__name:"screenLocker",props:{label:{type:[String,Number],default:null},icon:{type:String,default:"lock"},iconSize:{type:String,default:"md",validator:l=>["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl"].indexOf(l)>-1},iconClass:{type:[String,Array],default:()=>[]}},setup(l){const s=S(),e=w({show:!1,pin:new C().setName("PIN").setRules("required|maxLength:4")}),d=()=>{s.pin?s.lock():(e.value.pin.reset(),e.value.show=!0)},c=()=>{p()&&(s.setPin(e.value.pin.value),e.value.show=!1,e.value.pin.reset(),s.lock())},p=()=>(e.value.pin.validate(),!e.value.pin.error);return(i,o)=>{const u=n("TButton"),m=n("TPin"),v=n("TCardBody"),f=n("TCard"),g=n("TDialog");return x(i.$slots,"default",{},()=>[a(u,y({icon:l.icon,iconSize:l.iconSize,label:l.label,iconClass:l.iconClass,class:"my-1 rounded-full"},i.$attrs,{onClick:d}),null,16,["icon","iconSize","label","iconClass"]),a(g,{modelValue:e.value.show,"onUpdate:modelValue":o[2]||(o[2]=t=>e.value.show=t)},{default:r(()=>[a(f,{class:"relative w-[95dvw] max-w-xs bg-page-background"},{default:r(()=>[T("span",b,[a(u,{icon:"close",iconSize:"sm",class:"aspect-square rounded-full p-1",onClick:o[0]||(o[0]=t=>e.value.show=!1)})]),a(v,{class:"grid gap-5"},{default:r(()=>[a(m,{modelValue:e.value.pin.value,"onUpdate:modelValue":[o[1]||(o[1]=t=>e.value.pin.value=t),c],error:e.value.pin.error,errorMessage:e.value.pin.errorMessage,hint:"PIN",confirmation:"",allowKeystroke:""},null,8,["modelValue","error","errorMessage"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};export{V as default};
