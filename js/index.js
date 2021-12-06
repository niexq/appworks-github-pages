var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,s=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&i(e,n,t[n]);if(a)for(var n of a(t))o.call(t,n)&&i(e,n,t[n]);return e},c=(e,a)=>t(e,n(a)),l=(e,t)=>{var n={};for(var i in e)r.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&a)for(var i of a(e))t.indexOf(i)<0&&o.call(e,i)&&(n[i]=e[i]);return n};import{a as p,_ as d,b as m,N as u,P as f,w as _,R as h,L as E,S as g,B as x,I as y,c as b,A as v,O as P,M as w,d as A,C as I,e as O,f as j,g as L,h as k,l as C,i as R,j as S,k as T,m as N,n as D,o as V,p as q,q as z,r as B,s as F,t as M,u as $,v as X,z as Z,x as H,y as K,D as U}from"./vendor.js";const W=undefined;(function e(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();var G="";const Y={},J={default:p.create(Y)};function Q(e){if(e){if(J[e])return J;J[e]=p.create(Y)}return J}const ee=({appConfig:e})=>{if(e.request){const{request:t={}}=e;if("[object Array]"===Object.prototype.toString.call(t))t.forEach((e=>{const t=e.instanceName?e.instanceName:"default";if(t){const n=undefined;te(e,Q(t)[t])}}));else{const e=undefined;te(t,Q().default)}}};function te(e,t){const n=e,{interceptors:a={}}=n,r=l(n,["interceptors"]);Object.keys(r).forEach((e=>{t.defaults[e]=r[e]})),a.request&&t.interceptors.request.use(a.request.onConfig||function(e){return e},a.request.onError||function(e){return Promise.reject(e)}),a.response&&t.interceptors.response.use(a.response.onConfig||function(e){return e},a.response.onError||function(e){return Promise.reject(e)})}function ne(e){ee({appConfig:e})}const ae=(e,t)=>`${e.toString()}\n\nThis is located at:${t}`,re={display:"flex",flexDirection:"column",alignItems:"center",margin:"100px 0",color:"#ed3131"},oe=({componentStack:e,error:t})=>d.exports.createElement("div",{style:re,title:ae(t,e)},d.exports.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"843",width:"60",height:"60"},d.exports.createElement("path",{d:"M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512s229.23 512 512 512c117.41 0 228.826-39.669 318.768-111.313 10.79-8.595 12.569-24.308 3.975-35.097-8.594-10.789-24.308-12.568-35.097-3.974C718.47 938.277 618.002 974.049 512 974.049 256.818 974.049 49.951 767.182 49.951 512S256.818 49.951 512 49.951 974.049 256.818 974.049 512c0 87.493-24.334 171.337-69.578 243.96-7.294 11.708-3.716 27.112 7.992 34.405 11.707 7.294 27.11 3.716 34.405-7.991C997.014 701.88 1024 608.898 1024 512z","p-id":"844",fill:"#cdcdcd"}),d.exports.createElement("path",{d:"M337.17 499.512c34.485 0 62.44-27.955 62.44-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438z m374.635 0c34.484 0 62.439-27.955 62.439-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438zM352.788 704.785c43.377-34.702 100.364-55.425 171.7-55.425 71.336 0 128.322 20.723 171.7 55.425 26.513 21.21 42.695 42.786 50.444 58.284 6.168 12.337 1.168 27.34-11.17 33.508-12.337 6.169-27.34 1.168-33.508-11.17-0.918-1.834-3.462-6.024-7.788-11.793-7.564-10.084-17.239-20.269-29.183-29.824-34.671-27.737-80.71-44.478-140.495-44.478-59.786 0-105.824 16.74-140.496 44.478-11.944 9.555-21.619 19.74-29.182 29.824-4.327 5.769-6.87 9.959-7.788 11.794-6.169 12.337-21.171 17.338-33.509 11.17-12.337-6.17-17.338-21.172-11.169-33.509 7.75-15.498 23.931-37.074 50.444-58.284z","p-id":"845",fill:"#cdcdcd"})),d.exports.createElement("h3",null,"Oops! Something went wrong."));class ie extends d.exports.Component{constructor(e){super(e),this.state={error:null,info:{componentStack:""}}}componentDidCatch(e,t){const{onError:n}=this.props;if("function"==typeof n)try{n.call(this,e,t.componentStack)}catch(a){}this.setState({error:e,info:t})}render(){const{children:e,Fallback:t}=this.props,{error:n,info:a}=this.state;return null!==n&&"function"==typeof t?d.exports.createElement(t,{componentStack:a&&a.componentStack,error:n}):e||null}}ie.defaultProps={Fallback:oe};var se=({appConfig:e,wrapperPageComponent:t,buildConfig:n,context:a,applyRuntimeAPI:r,getRuntimeValue:o,addProvider:i})=>{const{app:s={}}=e,{ErrorBoundaryFallback:c,onErrorBoundaryHandler:l,renderComponent:p,addProvider:d}=s;d&&i(d);const{parseSearchParams:m=!0}=s;m&&t(ce(r)),t(pe()),t(le(c,l)),o("enableRouter")};function ce(e){const t=undefined;return t=>{const n=undefined;return n=>{const a=e("getSearchParams");return d.exports.createElement(t,s({},Object.assign({},n,{searchParams:a})))}}}function le(e,t){const n=undefined;return n=>{const{pageConfig:a={}}=n,r=undefined;return r=>a.errorBoundary?d.exports.createElement(ie,{Fallback:e,onError:t},d.exports.createElement(n,s({},r))):d.exports.createElement(n,s({},r))}}function pe(){const e=undefined;return e=>{const{pageConfig:t}=e,{title:n,scrollToTop:a}=t||{},r=undefined;return t=>{const[r,o]=d.exports.useState(window.__ICE_PAGE_PROPS__);return d.exports.useEffect((()=>{n&&(document.title=n),a&&window.scrollTo(0,0),window.__ICE_PAGE_PROPS__?window.__ICE_PAGE_PROPS__=null:e.getInitialProps&&(async()=>{const{href:t,origin:n,pathname:a,search:r}=window.location,i=undefined,s=undefined,c=undefined,l={pathname:a,path:t.replace(n,""),query:m.parse(r),ssrError:window.__ICE_SSR_ERROR__},p=await e.getInitialProps(l);o(p)})()}),[]),d.exports.createElement(e,s({},Object.assign({},t,r)))}}}const de="modulepreload",me={},ue="/",fe=function e(t,n){return n&&0!==n.length?Promise.all(n.map((e=>{if((e=`/${e}`)in me)return;me[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":de,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>t())):t()};function _e(e,t){return t?{__LAZY__:!0,dynamicImport:e}:d.exports.lazy(e)}const he=undefined,Ee=undefined;var ge="_container_1iej5_1",xe="_content_1iej5_10";function ye({children:e}){return d.exports.createElement("div",{className:ge},d.exports.createElement("div",{className:xe},e))}const be=[{name:"\u6570\u636e\u9875\u9762",path:"/",icon:"chart-pie",children:[{name:"\u5206\u6790\u9875\u9762",path:"/dashboard/analysis"},{name:"\u5de5\u4f5c\u53f0",path:"/dashboard/workplace"}]},{name:"\u8868\u5355\u9875\u9762",path:"/",icon:"copy",children:[{name:"\u5355\u5217\u8868\u5355",path:"/form/basic"},{name:"\u4e24\u5217\u8868\u5355",path:"/form/two"},{name:"\u4e09\u5217\u8868\u5355",path:"/form/three"},{name:"\u56db\u5217\u8868\u5355",path:"/form/four"},{name:"\u5206\u6b65\u8868\u5355",path:"/form/step"},{name:"\u5206\u7c7b\u8868\u5355",path:"/form/classified"},{name:"\u5206\u7ec4\u8868\u5355",path:"/form/group"},{name:"\u6d41\u7a0b\u8868\u5355",path:"/form/flow"},{name:"\u5206\u7ea7\u8868\u5355",path:"/form/hierarchical"}]},{name:"\u5217\u8868\u9875\u9762",path:"/",icon:"chart-bar",children:[{name:"\u57fa\u7840\u5217\u8868",path:"/list/basic"},{name:"\u5361\u7247\u5217\u8868",path:"/list/card"},{name:"\u8868\u683c\u5217\u8868",path:"/",children:[{name:"\u57fa\u7840\u8fc7\u6ee4",path:"/list/table/filter"},{name:"\u5355\u5217\u8fc7\u6ee4",path:"/list/table/singlecol"},{name:"\u591a\u5217\u8fc7\u6ee4",path:"/list/table/mutilcol"},{name:"\u5e26\u64cd\u4f5c\u5217",path:"/list/table/action"},{name:"\u53ef\u5c55\u5f00\u8868",path:"/list/table/expand"},{name:"\u5355\u5c42\u6811\u8868",path:"/list/table/singletree"},{name:"\u5f39\u7a97\u8868\u683c",path:"/list/table/dialog"},{name:"\u5408\u5e76\u5355\u5143\u683c",path:"/list/table/mergecell"}]}]},{name:"\u8be6\u60c5\u9875\u9762",path:"/",icon:"calendar",children:[{name:"\u57fa\u7840\u8be6\u60c5",path:"/detail/basic"},{name:"\u9ad8\u7ea7\u8be6\u60c5",path:"/detail/advanced"}]},{name:"\u7ed3\u679c&\u7f3a\u7701",path:"/",icon:"warning",children:[{name:"\u6210\u529f\u9875\u9762",path:"/feedback/success"},{name:"\u5931\u8d25\u9875\u9762",path:"/feedback/fail"},{name:"403",path:"/feedback/403"},{name:"404",path:"/feedback/404"},{name:"500",path:"/feedback/500"}]},{name:"\u8bbe\u7f6e\u9875\u9762",path:"/",icon:"set",children:[{name:"\u7cfb\u7edf\u8bbe\u7f6e",path:"/settings"},{name:"\u4e2a\u4eba\u8bbe\u7f6e",path:"/person"}]},{name:"\u767b\u5f55&\u6ce8\u518c",path:"/",icon:"account",children:[{name:"\u767b\u5f55",path:"/user/login"},{name:"\u6ce8\u518c",path:"/user/register"}]}],{SubNav:ve}=u,Pe=u.Item,we={admin:!0,guest:!1};function Ae(e,t,n){return e?e.filter((e=>{let t=!0;return n&&e.auth&&e.auth instanceof Array&&e.auth.length&&(t=e.auth.some((e=>n[e]))),e.name&&!e.hideInMenu&&t})).map(((e,a)=>Ie(e,`${t}-${a}`,n))):[]}function Ie(e,t,n){if(e.children&&e.children.some((e=>e.name))){const a=Ae(e.children,t,n);if(a&&a.length>0){const t=undefined;return h.createElement(ve,{key:e.name,icon:e.icon,label:e.name},a)}return null}const a=undefined;return h.createElement(Pe,{key:e.path,icon:e.icon},h.createElement(E,{to:e.path},e.name))}const Oe=(e,t)=>{const[n,a]=d.exports.useState([]),{location:r}=e,{pathname:o}=r,{isCollapse:i}=t;return d.exports.useEffect((()=>{const e=be.find((e=>e.children&&t(e)));function t(e){return e.children.some((e=>e.children?t(e):e.path===o))}e&&!n.includes(e.name)&&a([...n,e.name])}),[o]),h.createElement(u,{type:"normal",openKeys:n,selectedKeys:[o],defaultSelectedKeys:[o],embeddable:!0,activeDirection:"right",iconOnly:i,hasArrow:!1,mode:i?"popup":"inline",onOpen:e=>{a(e)}},Ae(be,0,we))};Oe.contextTypes={isCollapse:f.bool};const je=_(Oe),Le=[{label:"\u641c\u7d22\u6761\u4ef6\u4e00",value:"\u641c\u7d22\u6761\u4ef6\u4e00"},{label:"\u641c\u7d22\u6761\u4ef6\u4e8c",value:"\u641c\u7d22\u6761\u4ef6\u4e8c"},{label:"\u641c\u7d22\u6761\u4ef6\u4e09",value:"\u641c\u7d22\u6761\u4ef6\u4e09"},{label:"\u641c\u7d22\u6761\u4ef6\u56db",value:"\u641c\u7d22\u6761\u4ef6\u56db"}];function ke(){const e=[],[t,n]=d.exports.useState(e);function a(){n(Le)}return h.createElement(g,{dataSource:t,shape:"simple",type:"dark",onChange:a})}const Ce=undefined,Re=undefined,Se=undefined,Te=undefined,Ne=undefined,De=undefined,Ve=undefined,qe=undefined;var ze="_noticeIcon_153xe_1",Be="_close_153xe_8",Fe="_noticeContainer_153xe_13",Me="_noticeItem_153xe_36",$e="_title_153xe_44",Xe="_footer_153xe_45",Ze="_empty_153xe_69",He="_clear_153xe_74";const{Popup:Ke}=P,Ue=undefined,We=({noticeList:e})=>{const[t,n]=d.exports.useState(2),[a,r]=d.exports.useState([]);function o(e){r([...a,e]),n(t-1)}function i(){const t=e.map((e=>e.id));n(0),r(t)}function s(){w.success("\u70b9\u51fb\u4e86\u67e5\u770b\u66f4\u591a\u64cd\u4f5c")}const c=e.filter((e=>-1===a.indexOf(e.id)));return h.createElement(Ke,{trigger:h.createElement("div",{className:ze},h.createElement(x,{count:t},h.createElement(y,{type:"email"}))),triggerType:"click"},h.createElement(b,{size:"small",divider:!1,className:Fe,header:h.createElement("div",{className:$e},h.createElement("h4",null,"\u901a\u77e5"),h.createElement("span",{className:He,onClick:i},"\u6e05\u7a7a\u901a\u77e5")),footer:h.createElement("div",{className:Xe},h.createElement("a",{onClick:s},"\u67e5\u770b\u66f4\u591a"))},c.map((e=>{const{id:t,name:n,avatar:a,message:r}=e;return h.createElement(b.Item,{className:Me,key:t,title:n,media:h.createElement(v,{size:32,src:a,alt:"avatar"}),extra:h.createElement("span",{className:Be,onClick:()=>o(t)},h.createElement(y,{type:"close",size:"xs"}))},r)})),0===c.length&&h.createElement(b.Item,{className:Ze},"\u4f60\u5df2\u67e5\u770b\u6240\u6709\u901a\u77e5")))};We.defaultProps={noticeList:[{id:1,name:"Aric",avatar:"https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",message:"\u65b0\u6807\u8bc6\u600e\u4e48\u53bb\u6389\uff1f"},{id:2,name:"Mark",avatar:"https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",message:"\u5982\u4f55\u67e5\u770b\u65b0\u589e\u9875\u9762\uff1f"}]};const Ge=undefined;var Ye="_link_tz9hn_1";const Je=()=>d.exports.createElement("div",{className:Ye},d.exports.createElement(E,{to:"/solution",title:"\u5b98\u65b9\u63a8\u8350\u65b9\u6848"},d.exports.createElement(y,{type:"smile"}))),Qe=undefined,et=undefined,tt=undefined,nt=undefined,at=undefined,rt=undefined;var ot="_headerAvatar_1lfqv_1",it="_avatarPopup_1lfqv_7",st="_menu_1lfqv_15",ct="_profile_1lfqv_32",lt="_avatar_1lfqv_7",pt="_content_1lfqv_45";const{Item:dt}=A,{Popup:mt}=P,ut=({name:e,avatar:t,mail:n})=>d.exports.createElement("div",{className:ct},d.exports.createElement("div",{className:lt},d.exports.createElement(v,{src:t,alt:"\u7528\u6237\u5934\u50cf"})),d.exports.createElement("div",{className:pt},d.exports.createElement("h4",null,e),d.exports.createElement("span",null,n))),ft=e=>{const{name:t,avatar:n}=e;return d.exports.createElement(mt,{trigger:d.exports.createElement("div",{className:ot},d.exports.createElement(v,{size:"small",src:n,alt:"\u7528\u6237\u5934\u50cf"}),d.exports.createElement("span",{style:{marginLeft:10}},t)),triggerType:"click"},d.exports.createElement("div",{className:it},d.exports.createElement(ut,s({},e)),d.exports.createElement(A,{className:st},d.exports.createElement(dt,null,d.exports.createElement(y,{size:"small",type:"account"}),"\u4e2a\u4eba\u8bbe\u7f6e"),d.exports.createElement(dt,null,d.exports.createElement(y,{size:"small",type:"set"}),"\u7cfb\u7edf\u8bbe\u7f6e"),d.exports.createElement(dt,null,d.exports.createElement(y,{size:"small",type:"exit"}),"\u9000\u51fa"))))};ft.defaultProps={name:"MyName",mail:"name@gmail.com",avatar:"https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"};const _t=undefined;var ht="_logo_xqvgj_1";function Et({image:e,text:t,url:n}){return d.exports.createElement("div",{className:"logo"},d.exports.createElement(E,{to:n||"/",className:ht},e&&d.exports.createElement("img",{src:e,alt:"logo"}),d.exports.createElement("span",null,t)))}const gt=undefined,xt=undefined,yt=undefined;var bt="_footer_5p3oq_1",vt="_logo_5p3oq_6",Pt="_copyright_5p3oq_11";function wt(){return d.exports.createElement("p",{className:bt},d.exports.createElement("span",{className:vt},"Alibaba Fusion"),d.exports.createElement("br",null),d.exports.createElement("span",{className:Pt},"\xa9 2019-\u73b0\u5728 Alibaba Fusion & ICE"))}function At({children:e}){const t=e=>{const t="undefined"!=typeof navigator&&navigator&&navigator.userAgent.match(/phone/gi);return e<680||t?"phone":e<1280&&e>680?"tablet":"desktop"},[n,a]=d.exports.useState(t(NaN));return"undefined"!=typeof window&&window.addEventListener("optimizedResize",(e=>{const n=e&&e.target&&e.target.innerWidth||NaN;a(t(n))})),h.createElement(I,{device:n},h.createElement(O,{style:{minHeight:"100vh"},type:"brand",fixedHeader:!1},h.createElement(O.Branding,null,h.createElement(Et,{image:"https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",text:"Logo"})),h.createElement(O.Navigation,{direction:"hoz",style:{marginRight:10}},h.createElement(ke,null)),h.createElement(O.Action,null,h.createElement(We,null),h.createElement(Je,null),h.createElement(ft,null)),h.createElement(O.Navigation,null,h.createElement(je,null)),h.createElement(O.Content,null,e),h.createElement(O.Footer,null,h.createElement(wt,null))))}!function(){const e=undefined;"undefined"!=typeof window&&function(e,t,n=window){let a=!1;const r=()=>{a||(a=!0,requestAnimationFrame((()=>{n.dispatchEvent(new CustomEvent(t)),a=!1})))};n.addEventListener(e,r)}("resize","optimizedResize")}();const It=undefined,Ot=undefined,jt=undefined,Lt=undefined,kt=undefined,Ct=undefined,Rt=undefined,St=undefined,Tt=undefined,Nt=undefined,Dt=undefined,Vt=undefined,qt=undefined,zt=undefined,Bt=undefined,Ft=undefined,Mt=undefined,$t=undefined,Xt=undefined,Zt=undefined,Ht=undefined,Kt=undefined,Ut=undefined,Wt=undefined,Gt=undefined,Yt=undefined,Jt=undefined,Qt=undefined,en=undefined,tn=undefined,nn=undefined,an=undefined,rn=undefined,on=undefined,sn=[{path:"/user",component:ye,children:[{path:"/login",component:_e((()=>fe((()=>import("./index2.js")),["js/index2.js","css/index4.css","js/vendor.js"])),!0)},{path:"/register",component:_e((()=>fe((()=>import("./index3.js")),["js/index3.js","css/index13.css","js/vendor.js"])),!0)},{path:"/",redirect:"/user/login"}]},{path:"/",component:At,children:[{path:"/solution",component:_e((()=>fe((()=>import("./index4.js")),["js/index4.js","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/dashboard/analysis",component:_e((()=>fe((()=>import("./index6.js")),["js/index6.js","css/index17.css","js/vendor.js","js/index5.js","css/index7.css","js/index7.js"])),!0)},{path:"/dashboard/workplace",component:_e((()=>fe((()=>import("./index8.js")),["js/index8.js","css/index8.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/form/basic",component:_e((()=>fe((()=>import("./index9.js")),["js/index9.js","css/index18.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/form/two",component:_e((()=>fe((()=>import("./index10.js")),["js/index10.js","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/form/three",component:_e((()=>fe((()=>import("./index11.js")),["js/index11.js","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/form/four",component:_e((()=>fe((()=>import("./index12.js")),["js/index12.js","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/form/step",component:_e((()=>fe((()=>import("./index13.js")),["js/index13.js","css/index11.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/form/classified",component:_e((()=>fe((()=>import("./index14.js")),["js/index14.js","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/form/hierarchical",component:_e((()=>fe((()=>import("./index15.js")),["js/index15.js","css/index16.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/form/group",component:_e((()=>fe((()=>import("./index16.js")),["js/index16.js","css/index26.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/form/flow",component:_e((()=>fe((()=>import("./index17.js")),["js/index17.js","css/index28.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/detail/basic",component:_e((()=>fe((()=>import("./index18.js")),["js/index18.js","css/index24.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/detail/advanced",component:_e((()=>fe((()=>import("./index19.js")),["js/index19.js","css/index10.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/list/basic",component:_e((()=>fe((()=>import("./index20.js")),["js/index20.js","css/index21.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/list/card",component:_e((()=>fe((()=>import("./index21.js")),["js/index21.js","css/index22.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/list/table/filter",component:_e((()=>fe((()=>import("./index22.js")),["js/index22.js","css/index6.css","js/vendor.js","js/index5.js","css/index7.css","js/index23.js","js/index7.js"])),!0)},{path:"/list/table/mutilcol",component:_e((()=>fe((()=>import("./index24.js")),["js/index24.js","css/index15.css","js/vendor.js","js/index5.js","css/index7.css","js/index23.js","js/index7.js","js/index25.js","js/index26.js"])),!0)},{path:"/list/table/singlecol",component:_e((()=>fe((()=>import("./index27.js")),["js/index27.js","css/index23.css","js/vendor.js","js/index5.js","css/index7.css","js/index23.js","js/index7.js"])),!0)},{path:"/list/table/expand",component:_e((()=>fe((()=>import("./index28.js")),["js/index28.js","css/index12.css","js/vendor.js","js/index5.js","css/index7.css","js/index23.js","js/index7.js"])),!0)},{path:"/list/table/action",component:_e((()=>fe((()=>import("./index29.js")),["js/index29.js","css/index27.css","js/vendor.js","js/index5.js","css/index7.css","js/index23.js","js/index7.js","js/index26.js"])),!0)},{path:"/list/table/mergecell",component:_e((()=>fe((()=>import("./index30.js")),["js/index30.js","js/vendor.js","js/index5.js","css/index7.css","js/index23.js","js/index7.js"])),!0)},{path:"/list/table/singletree",component:_e((()=>fe((()=>import("./index31.js")),["js/index31.js","css/index25.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/list/table/dialog",component:_e((()=>fe((()=>import("./index32.js")),["js/index32.js","css/index5.css","js/vendor.js","js/index5.js","css/index7.css","js/index23.js","js/index7.js","js/index25.js","js/index26.js"])),!0)},{path:"/list/table",component:_e((()=>fe((()=>import("./index33.js")),["js/index33.js","css/index2.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/feedback/fail",component:_e((()=>fe((()=>import("./index34.js")),["js/index34.js","css/index14.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/feedback/success",component:_e((()=>fe((()=>import("./index35.js")),["js/index35.js","css/index3.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/feedback/403",component:_e((()=>fe((()=>import("./index36.js")),["js/index36.js","css/index.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/feedback/404",component:_e((()=>fe((()=>import("./index37.js")),["js/index37.js","css/index20.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/feedback/500",component:_e((()=>fe((()=>import("./index38.js")),["js/index38.js","css/index.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/settings",component:_e((()=>fe((()=>import("./index39.js")),["js/index39.js","css/index19.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/person",component:_e((()=>fe((()=>import("./index40.js")),["js/index40.js","css/index9.css","js/vendor.js","js/index5.js","css/index7.css"])),!0)},{path:"/",redirect:"/dashboard/analysis"}]}];function cn(e,t){return(t||[]).reduce(((e,t)=>{const n=t(e);return e.pageConfig&&(n.pageConfig=e.pageConfig),e.getInitialProps&&(n.getInitialProps=e.getInitialProps),n}),e)}function ln(e,t){t&&["pageConfig","getInitialProps"].forEach((n=>{Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))}function pn(e,t,n,a){const{__LAZY__:r,dynamicImport:o,__LOADABLE__:i}=e||{};return i?C(o,{resolveComponent:e=>{const a=e.default;return ln(a,n),cn(a,t)},fallback:a}):r?d.exports.lazy((()=>o().then((e=>{if(t&&t.length){const a=e.default;return ln(a,n),c(s({},e),{default:cn(a,t)})}return e})))):(ln(e,n),cn(e,t))}function dn(e,t){return e.map((e=>{const n=e,{children:a,component:r,routeWrappers:o,wrappers:i}=n,c=l(n,["children","component","routeWrappers","wrappers"]);let p=a?[]:o;i&&i.length&&(p=p.concat(i));const d=s({},c);return r&&(d.component=pn(r,p,e,t)),a&&(d.children=dn(a,t)),d}))}function mn(e){const t=e,{type:n,children:a}=t,r=l(t,["type","children"]);let o=a;if(!o&&e.routes){const t=dn(e.routes,e.fallback);o=d.exports.createElement(un,{routes:t,fallback:e.fallback})}return"static"===n?d.exports.createElement(R,s({},r),o):d.exports.createElement(S,s({},r),o)}function un({routes:e,fallback:t}){return d.exports.createElement(j,null,e.map(((e,n)=>{const{children:a}=e;if(a){const a=e,{component:r,children:o}=a,i=l(a,["component","children"]),p=d.exports.createElement(un,{routes:o,fallback:t}),m=e=>r?d.exports.createElement(r,s({},e),p):p;return d.exports.createElement(k,c(s({key:n},i),{render:m}))}if(e.redirect){const t=e,{redirect:a}=t,r=l(t,["redirect"]);return d.exports.createElement(L,s({key:n,from:e.path,to:a},r))}{const a=e,{component:r}=a,o=l(a,["component"]);if(r){const e=window.__ICE_SSR_ENABLED__?e=>d.exports.createElement(r,s({},e)):e=>d.exports.createElement(d.exports.Suspense,{fallback:t||d.exports.createElement("div",null,"loading")},d.exports.createElement(r,s({},e)));return d.exports.createElement(k,c(s({key:n},o),{render:e}))}return console.error("[Router] component is required when config routes"),null}})))}function fn(...e){if(0===e.length)return"";const t=[],n=e.filter((e=>""!==e));return n.forEach(((e,a)=>{if("string"!=typeof e)throw new Error(`Path must be a string. Received ${e}`);let r=e;a>0&&(r=r.replace(/^[/]+/,"")),r=a<n.length-1?r.replace(/[/]+$/,""):r.replace(/[/]+$/,"/"),t.push(r)})),t.join("/")}function _n(e,t){return e.map((e=>{const n={};if(e.path){const a=fn(t||"",e.path);n.path="/"===a?"/":a.replace(/\/$/,"")}if(e.children)n.children=_n(e.children,n.path||e.path);else if(e.component){const t=e.component;t.pageConfig=Object.assign({},t.pageConfig,{componentName:t.name})}return s(s({},e),n)}))}const hn=({setRenderApp:e,appConfig:t,modifyRoutes:n,modifyRoutesComponent:a,buildConfig:r,context:o,applyRuntimeAPI:i})=>{const{router:p={}}=t;n((()=>_n(p.routes||sn,""))),a((()=>un)),p.modifyRoutes&&n(p.modifyRoutes);const m=r&&r.router&&r.router.lazy,u=undefined;e(((e,t,n={})=>()=>{let a=s(c(s({},p),{lazy:m}),n);a.history||(a.history=i("createHistory",{type:p.type,basename:p.basename}));const r=a,{fallback:o}=r,u=l(r,["fallback"]);return d.exports.createElement(mn,s({},u),t?d.exports.createElement(t,{routes:dn(e,o),fallback:o}):null)}))},En=async function(e){try{const t=e.instanceName?e.instanceName:"default",n=Q()[t];if("function"!=typeof n)throw new Error(`unknown ${t} in request method`);const a=await n(e);return n.defaults.withFullResponse||e.withFullResponse?a:a.data}catch(t){throw console.error(t),t}};var gn;T.forEach(["delete","get","head","options"],(function e(t){En[t]=function(e,n){return En(T.merge(n||{},{method:t,url:e}))}})),T.forEach(["post","put","patch"],(function e(t){En[t]=function(e,n,a){return En(T.merge(a||{},{method:t,url:e,data:n}))}})),En.CancelToken=p.CancelToken,En.isCancel=p.isCancel;const xn=N({user:{state:{name:"default",department:"",avatar:"",userid:null},effects:e=>({async fetchUserProfile(){const t=await En("/api/profile");"SUCCESS"===t.status&&e.user.update(t.data)}}),reducers:{update:(e,t)=>s(s({},e),t)}}});var yn=({addProvider:e,appConfig:t,context:{initialData:n={},createElement:a}})=>{const r=({children:e})=>{const r=t.store||{};let o={};return n.initialStates?o=n.initialStates:r.initialStates&&(o=r.initialStates),a(xn.Provider,{initialStates:o,children:e})};xn&&Object.prototype.hasOwnProperty.call(xn,"Provider")&&e(r)};const bn=d.exports.createContext(null),vn=({value:e={},children:t})=>{const[n,a]=d.exports.useState(e),r=(e={})=>{a(s(s({},n),e))};return d.exports.createElement(bn.Provider,{value:[n,r]},t)},Pn=()=>{const e=undefined;return d.exports.useContext(bn)};function wn(e){const t=undefined;return t=>{const[n,a]=Pn(),r=e;return d.exports.createElement(r,c(s({},t),{auth:n,setAuth:a}))}}const An=e=>t=>{const{pageConfig:n={}}=t,a=undefined;return wn((a=>{const r=a,{auth:o,setAuth:i}=r,c=l(r,["auth","setAuth"]),p=n.auth;if(p&&!Array.isArray(p))throw new Error("pageConfig.auth must be an array");const m=undefined;return!Array.isArray(p)||!p.length||Object.keys(o).filter((e=>!!p.includes(e)&&o[e])).length?d.exports.createElement(t,s({},c)):e.NoAuthFallback?"function"==typeof e.NoAuthFallback?d.exports.createElement(e.NoAuthFallback,null):e.NoAuthFallback:null}))};var In=({context:e,appConfig:t,addProvider:n,wrapperPageComponent:a})=>{const r=undefined,o=(e&&e.initialData?e.initialData:{}).auth||{},i=t.auth||{},s=undefined;n((({children:e})=>d.exports.createElement(vn,{value:o},e))),a(An(i))};function On(e){e.loadModule(se),e.loadModule(hn),e.loadModule(yn),e.loadModule(In)}const jn={mpa:!1,icestarkType:"es"},Ln={enableRouter:!0},kn=D({loadRuntimeModules:On,createElement:d.exports.createElement,runtimeAPI:{createHistory:V,getSearchParams:q},runtimeValue:Ln});function Cn(e){ne(e),z&&z(e),B({appConfig:e,buildConfig:jn,ErrorBoundary:ie,appLifecycle:{createBaseApp:kn,initAppLifeCycles:F,emitLifeCycles:M}})}var Rn={"app.i18n.demo":"i18n demo","app.i18n.content":"The card is an example for switch i18n."},Sn={"app.i18n.demo":"\u591a\u8bed\u8a00\u793a\u4f8b","app.i18n.content":"\u672c\u533a\u5757\u7528\u6765\u5c55\u793a\u591a\u8bed\u8a00\u5207\u6362\u80fd\u529b"};$([...X,...Z]);const Tn={"zh-CN":{nextLocale:K,appLocale:"zh",appMessages:Sn},"en-US":{nextLocale:U,appLocale:"en",appMessages:Rn}};function Nn(e){const{locale:t,children:n}=e,a=Tn[t]?Tn[t]:Tn["en-US"];return d.exports.createElement(H,{locale:a.appLocale,messages:a.appMessages},d.exports.createElement(I,{locale:a.nextLocale},d.exports.Children.only(n)))}function Dn(e){if(void 0!==e&&!/^([a-z]{2})-([A-Z]{2})$/.test(e))throw new Error("setLocale lang format error");"undefined"!=typeof window&&Vn()!==e&&(window.localStorage.setItem("lang",e),window.location.reload())}function Vn(){return"undefined"!=typeof window?(window.localStorage.getItem("lang")||window.localStorage.setItem("lang",navigator.language),localStorage.getItem("lang")||""):""}const qn=Vn(),zn=undefined;Cn({app:{rootId:"ice-container",addProvider:({children:e})=>d.exports.createElement(Nn,{locale:qn},e)}});export{Dn as a,Vn as g,xn as s};
