import{c as u,b as v,d as g,m as b,l as f,g as o,I as j,P as O,i as V,s as d,t as k,p as B}from"./index-pkSQlspo.js";const N={key:0,class:"relative px-3 py-5"},T=["onClick"],$={class:"relative flex items-center justify-center"},A={__name:"tTabProgress",props:{modelValue:Number,pages:{type:Object,default:()=>[]},delay:{type:Number,default:300},spacing:{type:String,default:"between",validator:l=>["between","evenly"].indexOf(l)>-1},vertical:{type:Boolean,default:!1},labelPosition:{type:String,default:"bottom",validator:l=>["left","top","right","bottom"].indexOf(l)>-1},progressClass:{type:[String,Object],default:""},bgClass:{type:[String,Object],default:"!bg-background-accent"},activeClass:{type:[String,Object],default:"bg-primary"},activeIconClass:{type:[String,Object],default:"text-light"},activeLabelClass:{type:[String,Object],default:"text-primary"},idleClass:{type:[String,Object],default:"bg-gray-400/75"},idleIconClass:{type:[String,Object],default:"text-dark"},idleLabelClass:{type:[String,Object],default:"text-foreground"}},emits:["update:modelValue"],setup(l,{emit:C}){const t=l,m=C,y=u(()=>Array.isArray(t.progressClass)?t.progressClass:[t.progressClass]),p=u(()=>{let e="-bottom-6 left-1/2 -translate-x-1/2";return t.labelPosition=="left"?e="right-full -translate-x-2 top-1/2 -translate-y-1/2":t.labelPosition=="top"?e="-top-6 left-1/2 -translate-x-1/2":t.labelPosition=="right"&&(e="left-full translate-x-2 top-1/2 -translate-y-1/2"),e}),r=u(()=>t.spacing=="between"?I():x()),h=u(()=>t.spacing=="between"?S():L()),x=()=>{let a=100/((t.pages.length??0)+1);return(t.modelValue+1)*a},I=()=>{let e=t.pages.length??0;return t.modelValue<1?2:t.modelValue==e-1?98:100/(e-1)*t.modelValue},L=()=>{let e=[],a=t.pages,n=100/(a.length+1);for(let c in a)e.push(i(t.pages[c],(c*1+1)*n));return e},S=()=>{let e=[],a=t.pages.length;if(a>1){e.push(i(t.pages[0],2));for(let n=1;n<a-1;n++)e.push(i(t.pages[n],100/(a-1)*n));e.push(i(t.pages[a-1],98))}return e},i=(e,a)=>({pos:a,label:e.label,icon:e.icon,bgClass:e.bgClass,activeClass:e.activeClass,activeIconClass:e.activeIconClass,activeLabelClass:e.activeLabelClass,idleClass:e.idleClass,idleIconClass:e.idleIconClass,idleLabelClass:e.idleLabelClass}),w=e=>t.vertical?{top:`${e}%`}:{left:`${e}%`};return(e,a)=>{const n=v("TProgress"),c=v("TIcon");return l.pages.length>1?(g(),b("div",N,[f(n,{value:r.value,class:o([l.vertical&&"!min-w-[0.5rem]",!l.vertical&&"!min-h-[0.5rem]",...y.value]),vertical:l.vertical},null,8,["value","class","vertical"]),(g(!0),b(j,null,O(h.value,(s,P)=>(g(),b("div",{key:`progress_indicator_${s.label.toLowerCase()}`,class:o(["group absolute flex aspect-square w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full delay-150",[l.vertical&&"left-1/2",!l.vertical&&"top-1/2",s.bgClass??l.bgClass]]),style:V(w(s.pos)),onClick:E=>m("update:modelValue",P)},[d("div",{class:o(["absolute inset-0 rounded-full transition-colors",{[s.activeClass??l.activeClass]:r.value>=s.pos,"!bg-opacity-50":r.value<=s.pos}])},null,2),d("div",{class:o(["absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full delay-150",[r.value>=s.pos&&(s.activeClass??l.activeClass),r.value<s.pos&&(s.idleClass??l.idleClass)]])},null,2),d("div",$,[f(c,{name:s.icon??"help_outline",class:o(["transition-all delay-150",[!s.icon&&"opacity-0",r.value<s.pos?s.idleIconClass??l.idleIconClass:s.activeIconClass??l.activeIconClass]])},null,8,["name","class"]),d("span",{class:o(["absolute whitespace-nowrap text-xs font-bold transition-colors delay-150",[r.value>=s.pos?s.activeLabelClass??l.activeLabelClass:s.idleLabelClass??l.idleLabelClass,p.value]])},k(s.label),3)])],14,T))),128))])):B("",!0)}}};export{A as default};
