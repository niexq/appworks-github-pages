"use strict";(self.webpackChunkappworks_github_pages=self.webpackChunkappworks_github_pages||[]).push([[300],{84300:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(59301),a=r(32501),l=r(35367),c=r(49118),i=r(34699),o=r(90384),s=r(41071),u=r(11230),m=r(98007),p=r(70726),f=r(96558),d,b=function e(){return n.createElement("div",{className:"table-empty-block"},n.createElement("div",{className:"result-image"},n.createElement("img",{alt:"data empty",src:"//img.alicdn.com/tfs/TB1_yJXFkL0gK0jSZFAXXcA9pXa-1112-758.png"})),n.createElement("div",{className:"result-title"},"\u6570\u636e\u4e3a\u7a7a"))},y,g=function e(t){var r=t.onRefresh;return n.createElement("div",{className:"table-empty-block"},n.createElement("div",{className:"result-image"},n.createElement("img",{alt:"data empty",src:"//img.alicdn.com/tfs/TB1_yJXFkL0gK0jSZFAXXcA9pXa-1112-758.png"})),n.createElement("div",{className:"result-title"},n.createElement(p.Z,{type:"secondary",onClick:r},"\u91cd\u65b0\u52a0\u8f7d")))},h={filterTable:"FilterTable--filterTable--1YHUXN3"};function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){return x(e)||k(e,t)||P(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function P(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n=[],a=!0,l=!1,c,i;try{for(r=r.call(e);!(a=(c=r.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return n}}function x(e){if(Array.isArray(e))return e}var C=c.Z.Item,N=function e(t,r){var n=t.current,a=t.pageSize;if(console.log(n,a,r),!r.status||"normal"===r.status){var l="page=".concat(n,"&size=").concat(a);return Object.entries(r).forEach((function(e){var t=j(e,2),r=t[0],n=t[1];n&&(l+="&".concat(r,"=").concat(n))})),fetch("https://randomuser.me/api?results=".concat(a,"&").concat(l)).then((function(e){return e.json()})).then((function(e){return{total:55,list:e.results.slice(0,10)}}))}return"empty"===r.status?Promise.resolve([]):"exception"===r.status?new Promise((function(e,t){setTimeout((function(){t(new Error("data exception"))}),1e3)})):Promise.resolve([])},A={"name.last":140,email:500,phone:500,gender:140},I,T=function e(){var t,r=j((0,n.useState)(A),2),a=r[0],l=r[1],d=i.Z.useField([]),y=(0,f.Z)(N,{field:d}),E=y.paginationProps,Z=y.tableProps,w=y.search,P=y.error,S=y.refresh,k=w.submit,x=w.reset,I=function e(t,r){var n=O({},a);n[t]+=r,l(n)};return n.createElement("div",{className:h.FilterTable},n.createElement(o.Z,{free:!0},n.createElement(o.Z.Content,null,n.createElement(c.Z,{className:"filter-form",responsive:!0,fullWidth:!0,labelAlign:"top",field:d},n.createElement(C,{colSpan:3,label:"\u6570\u636e\u72b6\u6001",required:!0,requiredMessage:"\u5fc5\u586b"},n.createElement(s.Z,{name:"status",dataSource:[{label:"\u6b63\u5e38\u72b6\u6001",value:"normal"},{label:"\u7a7a\u6570\u636e\u72b6\u6001",value:"empty"},{label:"\u6570\u636e\u5f02\u5e38\u72b6\u6001",value:"exception"}]})),n.createElement(C,{colSpan:7}),n.createElement(C,{colSpan:2,style:{display:"flex",alignItems:"center"}},n.createElement(c.Z.Submit,{type:"primary",onClick:k,validate:!0,style:{marginRight:"20px"}},"\u63d0\u4ea4"),n.createElement(c.Z.Reset,{onClick:x},"\u91cd\u7f6e"))))),n.createElement(o.Z,{free:!0},n.createElement(o.Z.Content,null,n.createElement(u.Z,v({},Z,{onResizeChange:I,emptyContent:P?n.createElement(g,{onRefresh:S}):n.createElement(b,null),primaryKey:"email"}),n.createElement(u.Z.Column,{title:"name",dataIndex:"name.last",resizable:!0,width:a["name.last"]}),n.createElement(u.Z.Column,{title:"email",dataIndex:"email",resizable:!0,width:a.email}),n.createElement(u.Z.Column,{title:"phone",dataIndex:"phone",resizable:!0,width:a.phone}),n.createElement(u.Z.Column,{title:"gender",dataIndex:"gender",resizable:!0,width:a.gender})),n.createElement(m.Z,v({style:{marginTop:16,textAlign:"right"},totalRender:function e(t){return n.createElement(n.Fragment,null,"\u5171"," ",n.createElement(p.Z,{text:!0,type:"primary"},t)," ","\u4e2a\u8bb0\u5f55")}},E)))))},X=a.Z.Cell,F,z,H,_=function e(){return n.createElement(a.Z,{gap:20},n.createElement(X,{colSpan:12},n.createElement(l.Z,{title:"\u57fa\u7840\u8fc7\u6ee4",breadcrumbs:[{name:"\u5217\u8868\u9875\u9762"},{name:"\u8868\u683c\u5217\u8868"},{name:"\u57fa\u7840\u8fc7\u6ee4"}],description:"\u57fa\u7840\u8fc7\u6ee4\u57fa\u7840\u8fc7\u6ee4\u57fa\u7840\u8fc7\u6ee4\u57fa\u7840\u8fc7\u6ee4\u57fa\u7840\u8fc7\u6ee4\u57fa\u7840\u8fc7\u6ee4\u57fa\u7840\u8fc7\u6ee4\u57fa\u7840\u8fc7\u6ee4\u57fa\u7840\u8fc7\u6ee4\u57fa\u7840\u8fc7\u6ee4"})),n.createElement(X,{colSpan:12},n.createElement(T,null)))}},35367:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(59301),a=r(2070),l=r(88859),c=r(65149),i={pageHeader:"PageHeader--pageHeader--IvPvuqT",title:"PageHeader--title--3yDuSsx",description:"PageHeader--description--2J_BNVV"},o=["breadcrumbs","title","description"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var r=m(e,t),n,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){if(null==e)return{};var r={},n=Object.keys(e),a,l;for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}var p,f=function e(t){var r=t.breadcrumbs,m=t.title,p=t.description,f=u(t,o);return n.createElement(a.Z,s({spacing:8,className:i.pageHeader},f),r&&r.length>0?n.createElement(l.Z,{className:i.breadcrumbs,separator:" / "},r.map((function(e,t){return n.createElement(l.Z.Item,{key:t,link:e.path},e.name)}))):null,m&&n.createElement(c.Z.Text,{className:i.title},m),p&&n.createElement(c.Z.Text,{className:i.description},p))}}}]);