import{m as f}from"./headlessui-float-1CD5-Rfb.js";import{N as d}from"./index-2sZdn9Tb.js";function N({container:e,accept:r,walk:n,enabled:t}){d(()=>{let a=e.value;if(!a||t!==void 0&&!t.value)return;let c=f(e);if(!c)return;let l=Object.assign(i=>r(i),{acceptNode:r}),o=c.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,l,!1);for(;o.nextNode();)n(o.currentNode)})}export{N as p};
