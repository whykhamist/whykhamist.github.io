import{a as b,c as r,w as C,b as i,d as u,e as p,f as S,p as k,s as B,af as T}from"./index-pkSQlspo.js";const F={class:"pointer-events-none flex aspect-square items-center justify-center rounded-full border-4 border-light leading-none outline outline-1 outline-dark/50"},M={__name:"capture",props:{stream:Object,prefix:{type:String,default:"IMG"}},emits:["loading","capture"],setup(d,{emit:m}){const c=d,l=m,s=b(!1),o=r(()=>{let[e]=c.stream.getVideoTracks();return e});r(()=>o.value.getSettings()),r(()=>o.value.getCapabilities());const g=async()=>{s.value=!0,new ImageCapture(o.value).grabFrame().then(async t=>{let a=await $(t),n=new File([a],_(a.type),{type:a.type});l("capture",n)}).finally(()=>{s.value=!1})},_=e=>`${h()}.${f(e)}`,h=()=>{let e=new Date,t=`${e.getMonth()}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0"),n=`${e.getFullYear()}${t}${a}`,v=`${e.getHours()}`.padStart(2,"0"),w=`${e.getMinutes()}`.padStart(2,"0"),x=`${e.getSeconds()}`.padStart(2,"0"),y=`${v}${w}${x}`;return`${c.prefix}_${n}_${y}`},f=e=>T.extension(e),$=async e=>{const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("bitmaprenderer").transferFromImageBitmap(e),await new Promise(n=>t.toBlob(n))};return C(s,e=>{l("loading")}),(e,t)=>{const a=i("TIcon"),n=i("TButton");return u(),p(n,{class:"noTapHighlight aspect-square w-16 rounded-full p-1",disabled:s.value,onClick:g},{default:S(()=>[B("div",F,[s.value?(u(),p(a,{key:0,name:"motion_photos_on",size:"xl",class:"animate-spin text-light"})):k("",!0)])]),_:1},8,["disabled"])}}};export{M as default};
