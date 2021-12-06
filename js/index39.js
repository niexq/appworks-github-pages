import{F as e,_ as t,a5 as a,Q as n,W as r,K as l,A as o,aa as s,T as c,E as p,a3 as m,a6 as i,I as d,Y as x,J as g,af as u,M as E}from"./vendor.js";import{P as _}from"./index5.js";const f=undefined,b=undefined,v=undefined,S=undefined,X=undefined,h=undefined,w=undefined,C=undefined,T=undefined,y=undefined,N=undefined,B=undefined;var j={customTab:"_customTab_rwxd9_1",customTabHead:"_customTabHead_rwxd9_1",baseSettingContainer:"_baseSettingContainer_rwxd9_11",baseSetting:"_baseSetting_rwxd9_11",uploadButton:"_uploadButton_rwxd9_20",changeLogo:"_changeLogo_rwxd9_25",h3:"_h3_rwxd9_33",p:"_p_rwxd9_38",privilegeContentRow:"_privilegeContentRow_rwxd9_45",userName:"_userName_rwxd9_53",privilegeName:"_privilegeName_rwxd9_59",logoContent:"_logoContent_rwxd9_65"};const{useState:k,useEffect:K}=g,{Cell:H}=l,I=e.Item,F=[{name:"\u963f\u4e0d\u601d\xb7\u5e03\u840a\u6069\xb7\u9127\u4e0d\u5229\u591a",logo:"https://img.alicdn.com/tfs/TB1WsE2n5_1gK0jSZFqXXcpaXXa-183-183.png",privilege:"\u7ba1\u7406\u5458"},{name:"\u6212\u94b1",logo:"https://img.alicdn.com/tfs/TB1cjwYnVT7gK0jSZFpXXaTkpXa-183-183.png",privilege:"\u7ba1\u7406\u5458"},{name:"\u683c\u6797\u5fb7\u6c83",logo:"https://img.alicdn.com/tfs/TB1l7g0nYr1gK0jSZR0XXbP8XXa-183-183.png",privilege:"\u7ba1\u7406\u5458"},{name:"\u54c8\u5229\u73bb\u7279",logo:"https://img.alicdn.com/tfs/TB1WUurnubviK0jSZFNXXaApXXa-183-183.png",privilege:"\u7ba1\u7406\u5458"},{name:"\u5c0f\u5929\u72fc\u661f",logo:"https://img.alicdn.com/tfs/TB10Ts2n1L2gK0jSZFmXXc7iXXa-183-183.png",privilege:"\u6210\u5458"},{name:"\u7f57\u6069",logo:"https://img.alicdn.com/tfs/TB1HHwYnVY7gK0jSZKzXXaikpXa-183-183.png",privilege:"\u6210\u5458"},{name:"\u4f0f\u5730\u9b54",logo:"https://img.alicdn.com/tfs/TB1T_WrnubviK0jSZFNXXaApXXa-183-183.png",privilege:"\u6210\u5458"},{name:"\u8d6b\u654f",logo:"https://img.alicdn.com/tfs/TB1D_GrnubviK0jSZFNXXaApXXa-183-183.png",privilege:"\u6210\u5458"}],Z={name:"lily",type:"private",description:"Fusion\u662f\u4e00\u5957\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u8bbe\u8ba1\u7cfb\u7edf\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u89e3\u51b3\u4ea7\u54c1\u4f53\u9a8c\u4e00\u81f4\u6027\u95ee\u9898\u3001\u8bbe\u8ba1\u7814\u53d1\u534f\u540c\u95ee\u9898\uff0c\u4ee5\u53caUI\u5f00\u53d1\u6548\u7387\u95ee\u9898\u3002"},A=(e,t)=>{t?console.log("errors",t):(console.log("values:",e),E.success("\u66f4\u65b0\u6210\u529f"))},q=g=>{const{dataSource:E=Z,onSubmit:_=A}=g,[f,b]=k([]),[v,S]=k(!1),[X,h]=k(E);K((()=>{b(F),S(!0)}),[v]);const w=e=>{h(e)},C=()=>{u.confirm({title:"\u9000\u51fa\u9879\u76ee",content:"\u786e\u5b9a\u9000\u51fa\u8be5\u9879\u76ee\uff1f",messageProps:{type:"warning"},onOk:()=>console.log("ok"),onCancel:()=>console.log("cancel")})};return t.exports.createElement("div",{className:j.SettingPersonBlock},t.exports.createElement(a,{className:j.customTab,navClassName:j.customTabHead},t.exports.createElement(a.Item,{title:"\u57fa\u7840\u8bbe\u7f6e",key:"basic"},t.exports.createElement(n,{free:!0},t.exports.createElement(n.Content,null,t.exports.createElement(r,{className:j.baseSettingContainer},t.exports.createElement(e,{className:j.baseSetting,value:X,labelAlign:"top",onChange:w,responsive:!0},t.exports.createElement(I,{label:"\u9879\u76ee\u5c01\u9762",colSpan:12},t.exports.createElement(l,{gap:10},t.exports.createElement(H,{colSpan:2},t.exports.createElement(o,{shape:"circle",size:64,icon:"account"})),t.exports.createElement(H,{colSpan:10,className:j.changeLogo},t.exports.createElement(r,{spacing:12},t.exports.createElement(I,null,t.exports.createElement(s,{name:"pic"},t.exports.createElement(c,{className:j.uploadButton,type:"normal"},"\u66f4\u65b0\u5934\u50cf"))),t.exports.createElement(r,null,t.exports.createElement("p",null,"* \u5934\u50cf\u5c3d\u91cf\u4e0a\u4f20\u8d85\u8fc7 80px*80px, \u4f46\u4e0d\u8981\u592a\u5927\u4e86\u3002"),t.exports.createElement("p",null,"* \u8bf7\u4e0a\u4f20\u4e24\u500d\u56fe\u4fdd\u8bc1\u6e05\u6670\u5ea6")))))),t.exports.createElement(I,{label:"\u9879\u76ee\u540d\u79f0",required:!0,requiredMessage:"\u5fc5\u586b",colSpan:12},t.exports.createElement(p,{placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0",name:"name"})),t.exports.createElement(I,{label:"\u9879\u76ee\u6240\u5c5e\u5206\u7c7b",required:!0,requiredMessage:"\u5fc5\u586b",colSpan:12},t.exports.createElement(p,{placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u5206\u7c7b",name:"category"})),t.exports.createElement(I,{colSpan:12,label:"\u9879\u76ee\u6743\u9650"},t.exports.createElement(m.Group,{name:"type","aria-labelledby":"authority of project"},t.exports.createElement(m,{id:"private",value:"private"},"\u79c1\u5bc6\u9879\u76ee"),t.exports.createElement(m,{id:"internal",value:"internal"},"\u5185\u90e8\u9879\u76ee"),t.exports.createElement(m,{id:"public",value:"public"},"\u5f00\u653e\u9879\u76ee"))),t.exports.createElement(I,{label:"\u9879\u76ee\u63cf\u8ff0",colSpan:12},t.exports.createElement(p.TextArea,{placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u63cf\u8ff0",name:"description"})),t.exports.createElement(I,{colSpan:12},t.exports.createElement(r,{spacing:8,direction:"row"},t.exports.createElement(e.Submit,{type:"primary",onClick:_,validate:!0},"\u4fdd\u5b58")))))))),t.exports.createElement(a.Item,{title:"\u6743\u9650\u8bbe\u7f6e",key:"privilege"},t.exports.createElement(n,{free:!0,contentHeight:600},t.exports.createElement(n.Header,{title:"\u6743\u9650\u8bbe\u7f6e",extra:t.exports.createElement(r,{spacing:10,direction:"row"},t.exports.createElement(c,{type:"secondary"},"\u8bbe\u7f6e\u89d2\u8272 1 \u6743\u9650"),t.exports.createElement(c,{type:"primary"},"\u65b0\u589e"))}),t.exports.createElement(n.Content,null,t.exports.createElement(i,{dataSource:f,hasHeader:!1,hasBorder:!1},t.exports.createElement(i.Column,{dataIndex:"logo",cell:e=>t.exports.createElement(o,{src:e}),width:50}),t.exports.createElement(i.Column,{dataIndex:"name"}),t.exports.createElement(i.Column,{dataIndex:"privilege"}),t.exports.createElement(i.Column,{cell:()=>t.exports.createElement(d,{type:"ellipsis"})}))))),t.exports.createElement(a.Item,{title:"\u66f4\u591a\u8bbe\u7f6e",key:"more"},t.exports.createElement(n,{free:!0},t.exports.createElement(n.Content,null,t.exports.createElement(r,{spacing:12},t.exports.createElement(x.H3,{className:j.h3},"\u9000\u51fa\u9879\u76ee"),t.exports.createElement(x.Text,{className:j.p},"\u4e00\u65e6\u4f60\u9000\u51fa\u8fd9\u4e2a\u9879\u76ee\uff0c\u4f60\u5c06\u65e0\u6cd5\u8bbf\u95ee\u8fd9\u4e2a\u9879\u76ee\u7684\u4efb\u4f55\u5185\u5bb9\u3002"),t.exports.createElement("span",null,t.exports.createElement(c,{type:"normal",warning:!0,onClick:C},"\u9000\u51fa\u9879\u76ee"))))))))},{Cell:Y}=l,L=undefined,P=()=>t.exports.createElement(l,null,t.exports.createElement(Y,{colSpan:12},t.exports.createElement(_,{title:"\u7cfb\u7edf\u8bbe\u7f6e",breadcrumbs:[{name:"\u8bbe\u7f6e\u9875\u9762"},{name:"\u7cfb\u7edf\u8bbe\u7f6e"}],description:"\u7cfb\u7edf\u8bbe\u7f6e\u63cf\u8ff0\u7cfb\u7edf\u8bbe\u7f6e\u63cf\u8ff0\u7cfb\u7edf\u8bbe\u7f6e\u63cf\u8ff0\u7cfb\u7edf\u8bbe\u7f6e\u63cf\u8ff0\u7cfb\u7edf\u8bbe\u7f6e\u63cf\u8ff0\u7cfb\u7edf\u8bbe\u7f6e\u63cf\u8ff0\u7cfb\u7edf\u8bbe\u7f6e\u63cf\u8ff0"})),t.exports.createElement(Y,{colSpan:12},t.exports.createElement(q,null)));export{P as default};