var g=Object.defineProperty;var T=(o,e,t)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var n=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{c as r,d as i,m as c,s as O,h as a,t as u,p as R}from"./index-pkSQlspo.js";const m="Oops, it looks like you entered an incorrect value. Please try again.",f="Oops, it looks like you selected an invalid option. Please try again.",P="We're having trouble connecting to the server. Please try again later.",N="The request took too long to complete. Please try again later.",D="We're having trouble connecting to the network. Please check your connection and try again.",A="We're having trouble connecting to the server. Please try again later.",v="Sorry, this feature is no longer supported. Please try a different option.",k="We're sorry, but we were unable to process your request due to an unexpected error. Please try again later.",b="Oops, it looks like the request you made was invalid. Please try again.",I="Request cancelled. Please try again.",S="Sorry, this feature is not supported at this time. Please try a different option.",q="Oops, it looks like the URL you entered is invalid. Please try again with a valid URL.",p={400:"It's not you, It's this link (It appears to be broken ) Try this, Retype the web address or go back to the last page by closing this",401:"Oops! Seems like You do not have permission to view this directory or page using the credentials that you supplied. Try again. ",402:"Sorry, access to this page requires payment. Please complete the payment process to continue.",403:"Whoops! It looks like you don't have permission to access this page. If you think this is a mistake, please contact us for assistance.",404:"Hmmm, we can't seem to find the page/data you're looking for.",405:"Whoops! The method you're using to access this page is not allowed. Please try a different method.",406:"Whoops! The server can't produce the requested data in the format requested by the client.",407:"Sorry, you need to authenticate with a proxy server before accessing this page.",408:"Whoops! The server took too long to respond. Please try again later.",409:"Whoops! There was a conflict with the request you're trying to make. Please resolve the conflict and try again.",410:"Sorry, the page you're looking for has been removed and is no longer available.",411:"Whoops! The server requires a content length to be specified in the request.",412:"Whoops! One or more conditions in the request failed. Please check your request and try again.",413:"Whoops! The request payload is too large for the server to process.",414:"Whoops! The URI you're trying to access is too long for the server to process.",415:"Whoops! The media type you're trying to use is not supported by the server.",416:"Whoops! The range specified in the request can't be satisfied by the server.",417:"Whoops! The server couldn't meet the expectations specified in the request.",418:"I'm a teapot, not a coffee machine. Please don't ask me to brew coffee!",421:"Oops! Looks like we're having trouble processing your request at the moment.",422:"There was a problem with the information you submitted. Please check and try again.",423:"This resource is temporarily locked. Please try again later.",424:"The previous request failed, causing this one to fail as well. Let's try again.",425:"Sorry, but the request method you're using isn't supported for this resource.",426:"Please switch to a different protocol and try your request again.",428:"Your request must include some conditions. Please try again with the necessary conditions.",429:"Whoa! You're sending requests too quickly. Please slow down and try again.",431:"The server is having trouble processing your request because it has too many headers. Can you try removing some headers and try again?",451:"The requested resource cannot be accessed due to legal reasons.",500:"Uh Oh!!! Something went wrong at our end. Don't worry, It's not you :) It's Us :( , sorry about that ",501:"Sorry, the feature you're trying to access is not yet available. We're working hard to bring it to you soon.",502:"Whoops! It looks like there's a problem with our server. We're working to fix it as quickly as possible. Please try again later.",503:"Sorry, our servers are currently undergoing maintenance. We'll be back up and running shortly. Please check back soon.",504:"Whoops! The server took too long to respond. We're working to fix it as quickly as possible. Please try again later.",505:"Sorry, the version of HTTP you're using is not supported. Please try accessing the site with a different browser or upgrade your current browser.",506:"This request can't be processed because the server is experiencing some kind of conflict.",507:"The server is out of storage space. Please try your request again later.",508:"The server has hit its request limit. Please try again later or contact support if the problem persists.",510:"The server needs more information to fulfill your request. Please try again with the necessary information.",511:"Whoops! It looks like you need to be connected to the network to access this page. Please connect and try again.",ERR_BAD_OPTION_VALUE:m,ERR_BAD_OPTION:f,ECONNABORTED:P,ETIMEDOUT:N,ERR_NETWORK:D,ERR_FR_TOO_MANY_REDIRECTS:A,ERR_DEPRECATED:v,ERR_BAD_RESPONSE:k,ERR_BAD_REQUEST:b,ERR_CANCELED:I,ERR_NOT_SUPPORT:S,ERR_INVALID_URL:q},w="Bad Option Value",U="Bad Option",C="Connection Aborted",B="Timed Out",L="Network Error",W="Too Many Redirects",x="Deprecated",M="Bad Response",V="Bad Request",$="Cancelled",F="Not Supported",Y="Invalid URL",y={400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Request",431:"Request Header Fields Too Large",451:"Unavailable forr Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Out of Resources",504:"Gateway Time-Out",505:"HTTP Version Not Supported",506:"Variant Also Negostiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required",ERR_BAD_OPTION_VALUE:w,ERR_BAD_OPTION:U,ECONNABORTED:C,ETIMEDOUT:B,ERR_NETWORK:L,ERR_FR_TOO_MANY_REDIRECTS:W,ERR_DEPRECATED:x,ERR_BAD_RESPONSE:M,ERR_BAD_REQUEST:V,ERR_CANCELED:$,ERR_NOT_SUPPORT:F,ERR_INVALID_URL:Y};class H{constructor(e=null){n(this,"ClientCodes",[400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,421,422,423,424,425,426,428,429,431,451]);n(this,"ServerCodes",[500,501,502,503,504,505,506,507,508,510,511]);n(this,"JSCodes",["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"]);this.response=e,this.code=e.status??e.code,this.error=y[this.code],this.message=p[this.code]}}const K={class:"flex items-center justify-center"},Q={class:"flex max-w-xs flex-col text-center"},j={key:0,class:"text-9xl font-semibold"},G={key:1,class:"text-2xl font-semibold"},z={key:2,class:"flex justify-center text-center text-sm italic"},ee={__name:"errorTemplate",props:{response:{type:Object,default:null},code:{type:Number,default:null},error:{type:String,default:null},description:{type:String,default:null}},setup(o){const e=o,t=r(()=>{var s;return((s=e.response)==null?void 0:s.response)??e.response??null}),_=r(()=>{var s;return isNaN(((s=t.value)==null?void 0:s.status)??e.code)});let l=r(()=>t.value?new H(t.value):{code:e.code,message:p[e.code],error:y[e.code]}),d=r(()=>e.code??l.value.code),h=r(()=>e.error??l.value.error),E=r(()=>e.description??l.value.message);return(s,J)=>(i(),c("div",K,[O("div",Q,[a(d)&&!_.value?(i(),c("div",j,u(a(d))+"! ",1)):R("",!0),a(h)?(i(),c("div",G,u(a(h)),1)):R("",!0),a(E)?(i(),c("div",z,u(a(E)),1)):R("",!0)])]))}};export{ee as default};
