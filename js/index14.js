import{ab as e,_ as t,Q as a,F as l,E as r,V as n,a3 as o,G as s,W as c,T as m,M as p,K as x}from"./vendor.js";import{P as i}from"./index5.js";const d={job:{address:"\u7f8e\u56fd \u6d1b\u6749\u77f6"},treatment:{rsu:!0}},E=x=>{const{dataSource:i=d,onSubmit:E=(()=>{}),onCancel:u=(()=>{})}=x,b=e.useField({values:i.job}),S=e.useField({values:i.treatment}),h=async()=>{const{errors:e}=await b.validatePromise(),{errors:t}=await S.validatePromise();if(t||e)return void console.log("errors",e,t);const a={job:b.getValues(),treatment:S.getValues()};console.log("values:",a),E(a),p.success("\u63d0\u4ea4\u6210\u529f")};return t.exports.createElement("div",null,t.exports.createElement(a,{free:!0},t.exports.createElement(a.Header,{title:"\u5de5\u4f5c\u7ecf\u5386"}),t.exports.createElement(a.Divider,null),t.exports.createElement(a.BulletHeader,{title:"\u5206\u7c7b\u4fe1\u606f"}),t.exports.createElement(a.Content,null,t.exports.createElement(l,{field:b,responsive:!0,fullWidth:!0,labelAlign:"top"},t.exports.createElement(l.Item,{colSpan:4,label:"\u5de5\u4f5c\u5730\u5740"},t.exports.createElement(r,{name:"address",placeholder:"\u8bf7\u8f93\u5165\u5de5\u4f5c\u5730\u5740"})),t.exports.createElement(l.Item,{colSpan:4,label:"\u804c\u4f4d"},t.exports.createElement(r,{name:"position",placeholder:"\u8bf7\u8f93\u5165\u804c\u4f4d\u540d\u79f0"})),t.exports.createElement(l.Item,{colSpan:4,label:"\u516c\u53f8\u540d\u79f0"},t.exports.createElement(r,{name:"companyName",placeholder:"\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0"})),t.exports.createElement(l.Item,{colSpan:4,label:"\u5e01\u79cd",required:!0},t.exports.createElement(n,{name:"currency",placeholder:"\u8bf7\u9009\u62e9\u5e01\u79cd"},t.exports.createElement(n.Option,{value:"CNY"},"\xa5 CNY"),t.exports.createElement(n.Option,{value:"USD"},"$ USD"))),t.exports.createElement(l.Item,{colSpan:4,label:"\u5e74\u85aa",required:!0},t.exports.createElement(r,{name:"annualSalary",placeholder:"\u8bf7\u8f93\u5165\u85aa\u8d44\u4fe1\u606f",addonTextAfter:"CNY"})),t.exports.createElement(l.Item,{colSpan:4,label:"\u671f\u671b\u5e74\u85aa"},t.exports.createElement(r,{name:"expectAnnualSalary",placeholder:"\u8bf7\u8f93\u5165\u671f\u671b\u85aa\u8d44",addonTextAfter:"CNY"})))),t.exports.createElement(a.BulletHeader,{title:"\u5206\u7c7b\u4fe1\u606f"}),t.exports.createElement(a.Content,null,t.exports.createElement(l,{field:S,responsive:!0,fullWidth:!0,labelAlign:"top"},t.exports.createElement(l.Item,{colSpan:4,label:"\u6708\u85aa",required:!0},t.exports.createElement(r,{name:"monthlySalary",placeholder:"\u8bf7\u8f93\u5165\u6708\u85aa"})),t.exports.createElement(l.Item,{colSpan:4,label:"\u6708\u6570"},t.exports.createElement(r,{name:"monthNumber",placeholder:"\u8bf7\u8f93\u5165\u5728\u804c\u6708\u6570"})),t.exports.createElement(l.Item,{colSpan:4,label:"\u6d25\u8d34"},t.exports.createElement(r,{name:"bonus",placeholder:"\u8bf7\u8f93\u5165\u6d25\u8d34"})),t.exports.createElement(l.Item,{colSpan:4,label:"\u5e74\u5ea6\u76ee\u6807\u5956\u91d1"},t.exports.createElement(r,{name:"targetBonus",placeholder:"\u8bf7\u8f93\u5165\u5e74\u5ea6\u76ee\u6807\u5956\u91d1"})),t.exports.createElement(l.Item,{colSpan:4,label:"\u53bb\u5e74\u5b9e\u9645\u5956\u91d1"},t.exports.createElement(r,{name:"lastYearBonus",placeholder:"\u8bf7\u8f93\u5165\u5b9e\u9645\u5956\u91d1"})),t.exports.createElement(l.Item,{colSpan:4,label:"\u9009\u9879/RSU"},t.exports.createElement(o.Group,{name:"rsu","aria-labelledby":"rsu"},t.exports.createElement(o,{id:"has-rsu",value:!0},"\u662f"),t.exports.createElement(o,{id:"has-not-rsu",value:!1},"\u5426"))),t.exports.createElement(l.Item,{colSpan:8,label:"\u9009\u9879/RSU \u63cf\u8ff0"},t.exports.createElement(r.TextArea,{name:"rsuDesc",placeholder:"\u8bf7\u8f93\u5165",showLimitHint:!0,maxLength:500}))),t.exports.createElement(s,null),t.exports.createElement(l.Item,{colSpan:12},t.exports.createElement(c,{spacing:8,direction:"row"},t.exports.createElement(l.Submit,{type:"primary",onClick:h,validate:!0},"\u63d0\u4ea4"),t.exports.createElement(m,{onClick:u,type:"secondary"},"\u53d6\u6d88"))))))},{Cell:u}=x,b=undefined,S=()=>t.exports.createElement(x,{gap:20},t.exports.createElement(u,{colSpan:12},t.exports.createElement(i,{title:"\u5206\u7c7b\u8868\u5355",description:"\u5206\u7c7b\u8868\u5355\u5206\u7c7b\u8868\u5355\u5206\u7c7b\u8868\u5355\u5206\u7c7b\u8868\u5355\u5206\u7c7b\u8868\u5355\u5206\u7c7b\u8868\u5355\u5206\u7c7b\u8868\u5355",breadcrumbs:[{name:"\u8868\u5355\u9875\u9762"},{name:"\u5206\u7c7b\u8868\u5355"}]})),t.exports.createElement(u,{colSpan:12},t.exports.createElement(E,null)));export{S as default};
