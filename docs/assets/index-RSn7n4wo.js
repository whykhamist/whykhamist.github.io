import{d as r,e as i,z as n,A as t,_ as o}from"./index-2sZdn9Tb.js";const d={__name:"index",props:{type:{type:String,default:"text",validator:e=>["text","radio","file"].indexOf(e)>-1}},setup(e){const _={text:t(()=>o(()=>import("./text-LMKTfIU7.js"),__vite__mapDeps([0,1,2]))),radio:t(()=>o(()=>import("./radiobox-aAOIp7Rq.js"),__vite__mapDeps([3,1,2]))),file:t(()=>o(()=>import("./file-xnXpi27z.js"),__vite__mapDeps([4,5,1,2])))};return(a,p)=>(r(),i(n(_[e.type]??_.text)))}};export{d as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/text-LMKTfIU7.js","assets/index-2sZdn9Tb.js","assets/index-6bvjz7fl.css","assets/radiobox-aAOIp7Rq.js","assets/file-xnXpi27z.js","assets/_plugin-vue_export-helper-x3n3nnut.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}