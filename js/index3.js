import{_ as e,P as t,F as r,E as n,J as s,M as a,K as l}from"./vendor.js";function o(t,r){const n=e.exports.useRef(null);e.exports.useEffect((()=>{n.current=t})),e.exports.useEffect((()=>{const e=undefined;if(null!==r){const e=setInterval((()=>{n.current()}),r||0);return()=>clearInterval(e)}}),[r])}const c=undefined,i=undefined,d=undefined,u=undefined,p=undefined,m=undefined,_=undefined,f=undefined,x=undefined,E=undefined,g=undefined,v=undefined,h=undefined,N=undefined;var q="_registerBlock_tvlu9_1",B="_innerBlock_tvlu9_7",k="_innerBlockLogo_tvlu9_12",w="_innerBlockDesc_tvlu9_16",y="_innerBlockLine_tvlu9_21",L="_innerBeforeInput_tvlu9_28",z="_innerBeforeLine_tvlu9_33",M="_innerAfterInput_tvlu9_37",P="_innerAfterLine_tvlu9_42",T="_sendCode_tvlu9_47",b="_otherLogin_tvlu9_52",C="_icon_tvlu9_57",I="_innerBlockLink_tvlu9_61",S="_submitBtn_tvlu9_67";const{useState:A}=s,{Item:K}=r;function j(){const[t,s]=A({email:"",password:"",rePassword:"",phone:"",code:""}),[l,c]=A(!1),[i,d]=A(59);o((()=>{d(i-1),i<=0&&(c(!1),d(59))}),l?1e3:null);const u=e=>{s(e)},p=(e,t)=>{t||c(!0)},m=(e,r,n)=>r&&r!==t.password?n("\u5bc6\u7801\u4e0d\u4e00\u81f4"):n(),_=(e,t)=>{t?console.log("errors",t):(console.log("values:",e),a.success("\u6ce8\u518c\u6210\u529f"))};return e.exports.createElement("div",{className:q},e.exports.createElement("div",{className:B},e.exports.createElement("a",{href:"#"},e.exports.createElement("img",{className:k,src:"https://img.alicdn.com/tfs/TB1KtN6mKH2gK0jSZJnXXaT1FXa-1014-200.png",alt:"logo"})),e.exports.createElement("p",{className:w},"\u6ce8\u518c\u8d26\u53f7"),e.exports.createElement(r,{value:t,onChange:u,size:"large"},e.exports.createElement(K,{format:"email",required:!0,requiredMessage:"\u5fc5\u586b"},e.exports.createElement(n,{name:"email",size:"large",maxLength:20,placeholder:"\u90ae\u7bb1"})),e.exports.createElement(K,{required:!0,requiredMessage:"\u5fc5\u586b"},e.exports.createElement(n.Password,{name:"password",size:"large",htmlType:"password",placeholder:"\u81f3\u5c11\u516d\u4f4d\u5bc6\u7801\uff0c\u533a\u5206\u5927\u5c0f\u5199"})),e.exports.createElement(K,{required:!0,requiredTrigger:"onFocus",requiredMessage:"\u5fc5\u586b",validator:m},e.exports.createElement(n.Password,{name:"rePassword",size:"large",htmlType:"password",placeholder:"\u786e\u8ba4\u5bc6\u7801"})),e.exports.createElement(K,{format:"tel",required:!0,requiredMessage:"\u5fc5\u586b",asterisk:!1},e.exports.createElement(n,{name:"phone",size:"large",innerBefore:e.exports.createElement("span",{className:L},"+86",e.exports.createElement("span",{className:z})),maxLength:20,placeholder:"\u624b\u673a\u53f7"})),e.exports.createElement(K,{required:!0,requiredMessage:"\u5fc5\u586b"},e.exports.createElement(n,{name:"code",size:"large",innerAfter:e.exports.createElement("span",{className:M},e.exports.createElement("span",{className:P}),e.exports.createElement(r.Submit,{text:!0,type:"primary",style:{width:64},disabled:!!l,validate:["phone"],onClick:p,className:T},l?`${i}\u79d2\u540e\u518d\u8bd5`:"\u83b7\u53d6\u9a8c\u8bc1\u7801")),maxLength:20,placeholder:"\u9a8c\u8bc1\u7801"})),e.exports.createElement(K,null,e.exports.createElement(r.Submit,{type:"primary",onClick:_,className:S,validate:!0},"\u6ce8\u518c\u8d26\u53f7")),e.exports.createElement(K,{style:{textAlign:"center"}},e.exports.createElement("a",{href:"/",className:I},"\u4f7f\u7528\u5df2\u6709\u8d26\u53f7\u767b\u5f55")))))}j.propTypes={value:t.object},j.defaultProps={value:{}};const{Cell:F}=l,X=undefined,J=()=>e.exports.createElement(l,{gap:20},e.exports.createElement(F,{colSpan:12},e.exports.createElement(j,null)));export{J as default};
