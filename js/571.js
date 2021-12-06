"use strict";(self.webpackChunkappworks_github_pages=self.webpackChunkappworks_github_pages||[]).push([[571],{97876:function(e,t,n){var r=n(68713),a=n(88094),l=n(54733),o=n(2928),i=n(59301),c=n(68712),u=n.n(c),p=n(92691),s=n.n(p),m=n(84278),d=n(42201),f=n(17276),y,b,v=(b=y=function(e){function t(){return(0,a.Z)(this,t),(0,l.Z)(this,e.apply(this,arguments))}return(0,o.Z)(t,e),t.prototype.render=function e(){var n,a=this.props,l=a.prefix,o=a.className,c=a.dashed,u=a.direction,p=a.orientation,m=a.children,d=f.j6.pickOthers(t.propTypes,this.props),y=s()(((n={})[l+"divider"]=!0,n[l+"divider-dashed"]=!!c,n[l+"divider-"+u]=!!u,n[l+"divider-with-text-"+p]=!!p&&m,n),o);return i.createElement("div",(0,r.Z)({role:"separator",className:y},d),m&&i.createElement("span",{className:l+"divider-inner-text"},m))},t}(i.Component),y.propTypes={prefix:u().string,children:u().any,className:u().string,dashed:u().bool,direction:u().oneOf(["hoz","ver"]),orientation:u().oneOf(["left","right","center"])},y.defaultProps={prefix:"next-",direction:"hoz",orientation:"center",dashed:!1},b);v.displayName="Divider",t.Z=d.Z.config((0,m.polyfill)(v))},99419:function(e,t,n){var r=n(68713),a=n(80980),l=n(88094),o=n(54733),i=n(2928),c=n(59301),u=n(4676),p=n(68712),s=n.n(p),m=n(84278),d=n(92691),f=n.n(d),y=n(70726),b=n(76381),v=n(20763),Z=n(10366),E=n(42201),h=n(17276),g,O,C=Z.Z.Popup,N=(O=g=function(e){function t(n,r){(0,l.Z)(this,t);var a=(0,o.Z)(this,e.call(this,n,r));return a.clickMenuItem=function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];var o=a.props.selectMode;(t=a.props).onItemClick.apply(t,[e].concat(r)),"multiple"!==o&&a.onPopupVisibleChange(!1,"menuSelect")},a.selectMenu=function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];"selectedKeys"in a.props||a.setState({selectedKeys:e}),(t=a.props).onSelect.apply(t,[e].concat(r))},a.onPopupOpen=function(){var e=(0,u.findDOMNode)(a);a.props.autoWidth&&e&&a.menu&&(a.menu.style.width=e.offsetWidth+"px")},a.onPopupVisibleChange=function(e,t){"visible"in a.props||a.setState({visible:e}),a.props.onVisibleChange(e,t)},a._menuRefHandler=function(e){a.menu=(0,u.findDOMNode)(e);var t=a.props.menuProps.ref;"function"==typeof t&&t(e)},a.state={selectedKeys:n.defaultSelectedKeys,visible:n.defaultVisible},a}return(0,i.Z)(t,e),t.getDerivedStateFromProps=function e(t){var n={};return"visible"in t&&(n.visible=t.visible),"selectedKeys"in t&&(n.selectedKeys=t.selectedKeys),n},t.prototype.render=function e(){var n,l,o=this.props,i=o.prefix,u=o.style,p=o.className,s=o.label,m=o.popupTriggerType,d=o.popupContainer,Z=o.popupStyle,E=o.popupClassName,g=o.popupProps,O=o.followTrigger,N=o.selectMode,S=o.menuProps,I=o.children,j=(0,a.Z)(o,["prefix","style","className","label","popupTriggerType","popupContainer","popupStyle","popupClassName","popupProps","followTrigger","selectMode","menuProps","children"]),w=this.state,x=f()(((n={})[i+"menu-btn"]=!0,n[i+"expand"]=w.visible,n.opened=w.visible,n),p),P=f()(((l={})[i+"menu-btn-popup"]=!0,l),E),k=c.createElement(y.Z,(0,r.Z)({style:u,className:x},h.j6.pickOthers(t.propTypes,j)),s," ",c.createElement(b.Z,{type:"arrow-down",className:i+"menu-btn-arrow"}));return c.createElement(C,(0,r.Z)({},g,{followTrigger:O,visible:w.visible,onVisibleChange:this.onPopupVisibleChange,trigger:k,triggerType:m,container:d,onOpen:this.onPopupOpen,style:Z,className:P}),c.createElement("div",{className:i+"menu-btn-spacing-tb"},c.createElement(v.Z,(0,r.Z)({},S,{ref:this._menuRefHandler,selectedKeys:w.selectedKeys,selectMode:N,onSelect:this.selectMenu,onItemClick:this.clickMenuItem}),I)))},t}(c.Component),g.propTypes={prefix:s().string,label:s().node,autoWidth:s().bool,popupTriggerType:s().oneOf(["click","hover"]),popupContainer:s().any,visible:s().bool,defaultVisible:s().bool,onVisibleChange:s().func,popupStyle:s().object,popupClassName:s().string,popupProps:s().object,followTrigger:s().bool,defaultSelectedKeys:s().array,selectedKeys:s().array,selectMode:s().oneOf(["single","multiple"]),onItemClick:s().func,onSelect:s().func,menuProps:s().object,style:s().object,className:s().string,children:s().any},g.defaultProps={prefix:"next-",autoWidth:!0,popupTriggerType:"click",onVisibleChange:h.Yl.noop,onItemClick:h.Yl.noop,onSelect:h.Yl.noop,defaultSelectedKeys:[],menuProps:{}},O);N.displayName="MenuButton",N.Item=v.Z.Item,N.Group=v.Z.Group,N.Divider=v.Z.Divider,t.Z=E.Z.config((0,m.polyfill)(N),{componentName:"MenuButton"})},55571:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(59301),a=n(32501),l=n(35367),o=n(4676),i=n(34699),c=n(38802),u=n(6214),p=n(90384),s=n(49118),m=n(41071),d=n(2070),f=n(70726),y=n(11230),b=n(97876),v=n(99419),Z={groupForm:"GroupForm--groupForm--15faRA5",card:"GroupForm--card--2cCIane",button:"GroupForm--button--3Ak0Whp",fixedButtons:"GroupForm--fixedButtons---mM0F4u",mainTable:"GroupForm--mainTable--x-EHxzG"};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return S(e)||N(e)||w(e)||C()}function C(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function S(e){if(Array.isArray(e))return x(e)}function I(e,t){return k(e)||P(e,t)||w(e,t)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],a=!0,l=!1,o,i;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return r}}function k(e){if(Array.isArray(e))return e}var T=r.useState,M=r.useEffect,A=r.useRef,D={basic:{},member:{},company:[{id:"1",name:"\u8682\u8681\u8bc1\u5238\u6295\u8d44\u6709\u9650\u516c\u53f8 A",business:"\u91d1\u878d\u8bc1\u5238\u4ee3\u7406",address:"1569 Cronin Ways Apt. 082",creatorName:"\u6b27\u9e4f"},{id:"2",name:"\u8682\u8681\u8bc1\u5238\u6295\u8d44\u6709\u9650\u516c\u53f8 B",business:"\u91d1\u878d\u8bc1\u5238\u4ee3\u7406",address:"4016 Kautzer Route Suite 366",creatorName:"\u962e\u5c0f\u4e94"},{id:"3",name:"\u8682\u8681\u8bc1\u5238\u6295\u8d44\u6709\u9650\u516c\u53f8 C",business:"\u91d1\u878d\u8bc1\u5238\u4ee3\u7406",address:"22 Haag Manor",creatorName:"\u962e\u5c0f\u4e8c"},{id:"4",name:"\u8682\u8681\u8bc1\u5238\u6295\u8d44\u6709\u9650\u516c\u53f8 D",business:"\u91d1\u878d\u8bc1\u5238\u4ee3\u7406",address:"1014 McLaughlin Unions",creatorName:"\u962e\u5c0f\u4e03"},{id:"5",name:"\u8682\u8681\u8bc1\u5238\u6295\u8d44\u6709\u9650\u516c\u53f8 E",business:"\u91d1\u878d\u8bc1\u5238\u4ee3\u7406",address:"8748 Devante Center",creatorName:"\u516c\u5b59\u80dc"},{id:"6",name:"\u8682\u8681\u8bc1\u5238\u6295\u8d44\u6709\u9650\u516c\u53f8 F",business:"\u91d1\u878d\u8bc1\u5238\u4ee3\u7406",address:"1014 McLaughlin Unions",creatorName:"\u66f9\u6b63"},{id:"7",name:"\u8682\u8681\u8bc1\u5238\u6295\u8d44\u6709\u9650\u516c\u53f8 G",business:"\u91d1\u878d\u8bc1\u5238\u4ee3\u7406",address:"8748 Devante Center",creatorName:"\u674e\u7acb"},{id:"8",name:"\u8682\u8681\u8bc1\u5238\u6295\u8d44\u6709\u9650\u516c\u53f8 H",business:"\u91d1\u878d\u8bc1\u5238\u4ee3\u7406",address:"1569 Cronin Ways Apt. 082",creatorName:"\u6a0a\u745e"}]},H,F=function e(t){var n=t.dataSource,a=void 0===n?D:n,l=t.onSubmit,E=void 0===l?function(){}:l,g=t.onCancel,C=void 0===g?function(){}:g,N,S=I(T(a),2),j=S[0],w=S[1],x=i.Z.useField({values:j.basic}),P=i.Z.useField({values:j.member}),k=A(null),H,F=I(T(0),2),K=F[0],V=F[1],B,q=I(T(0),2),G=q[0],W=q[1];M((function(){var e=(0,o.findDOMNode)(k.current),t=null==e?void 0:e.getBoundingClientRect();V(null==t?void 0:t.left),W(document.documentElement.offsetWidth-(null==t?void 0:t.left)-(null==t?void 0:t.width))}),[]);var _=function e(t,n,r){var a=O(j.company);a[t][n]=r,w(h(h({},j),{},{company:a}))},R=function e(t){var n=O(j.company);if(!n[t].id)return n.splice(t,1),void w(h(h({},j),{},{company:n}));c.Z.confirm({content:"\u786e\u5b9a\u8981\u5220\u9664\u516c\u53f8\uff1a".concat(n[t].name," ?"),onOk:function e(){n.splice(t,1),w(h(h({},j),{},{company:n}))}})},z=function e(){w(h(h({},j),{},{company:[].concat(O(j.company),[{edited:!0}])}))},U=function e(){E({basic:x.getValues(),member:P.getValues(),company:j.company})},Y=function e(t,n,a,l){return a.edited?r.createElement(u.Z,{style:{width:"100%"},onChange:function e(t){return _(n,l,t)},value:t||""}):t};return r.createElement("div",{className:Z.GroupForm},r.createElement(p.Z,{ref:k,free:!0,className:Z.Card},r.createElement(p.Z.Header,{title:"\u9879\u76ee\u6210\u5458\u4fe1\u606f"}),r.createElement(p.Z.Divider,null),r.createElement(p.Z.Content,null,r.createElement(s.Z,{field:x,responsive:!0,fullWidth:!0,labelAlign:"top"},r.createElement(s.Z.Item,{colSpan:4,label:"\u516c\u53f8\u7b80\u79f0",required:!0},r.createElement(u.Z,{name:"companyName",placeholder:"\u8bf7\u8f93\u5165\u516c\u53f8\u7b80\u79f0"})),r.createElement(s.Z.Item,{colSpan:4,label:"\u9879\u76ee\u4ee3\u53f7",required:!0},r.createElement(u.Z,{name:"projectNo",placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u4ee3\u53f7"})),r.createElement(s.Z.Item,{colSpan:4,label:"\u6295\u8d44\u59d4\u5458\u4f1a",required:!0},r.createElement(u.Z,{name:"investmentsCommittee",placeholder:"\u8bf7\u8f93\u5165\u6295\u8d44\u59d4\u5458\u4f1a"})),r.createElement(s.Z.Item,{colSpan:4,label:"\u9879\u76ee\u7c7b\u578b",required:!0},r.createElement(u.Z,{name:"projectType",placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u7c7b\u578b"})),r.createElement(s.Z.Item,{colSpan:4,label:"\u5173\u8054\u9879\u76ee",required:!0},r.createElement(m.Z,{name:"projectId",id:"relativeId",placeholder:"\u8bf7\u9009\u62e9\u5173\u8054\u9879\u76ee"},r.createElement(m.Z.Option,{value:1},"\u9879\u76ee\u4e00"),r.createElement(m.Z.Option,{value:2},"\u9879\u76ee\u4e8c"),r.createElement(m.Z.Option,{value:3},"\u9879\u76ee\u4e09")))))),r.createElement(p.Z,{free:!0,className:Z.Card},r.createElement(p.Z.Header,{title:"\u57fa\u7840\u4fe1\u606f"}),r.createElement(p.Z.Divider,null),r.createElement(p.Z.Content,null,r.createElement(s.Z,{field:P,responsive:!0,fullWidth:!0,labelAlign:"top"},r.createElement(s.Z.Item,{colSpan:4,label:"\u5408\u540c\u7c7b\u578b",required:!0},r.createElement(m.Z,{name:"contractType",placeholder:"\u8bf7\u9009\u62e9\u5408\u540c\u7c7b\u578b"},r.createElement(m.Z.Option,{value:1},"\u5408\u540c\u4e00"),r.createElement(m.Z.Option,{value:2},"\u5408\u540c\u4e8c"),r.createElement(m.Z.Option,{value:3},"\u5408\u540c\u4e09"))),r.createElement(s.Z.Item,{colSpan:4,label:"IC\u6210\u5458",required:!0},r.createElement(m.Z,{name:"icMemberId",placeholder:"\u8bf7\u9009\u62e9IC\u6210\u5458"},r.createElement(m.Z.Option,{value:1},"\u6210\u5458\u4e00"),r.createElement(m.Z.Option,{value:2},"\u6210\u5458\u4e8c"),r.createElement(m.Z.Option,{value:3},"\u6210\u5458\u4e09"))),r.createElement(s.Z.Item,{colSpan:4,label:"\u6cd5\u52a1\u8bc4\u5ba1\u4f1a",required:!0},r.createElement(m.Z,{name:"forensicId",placeholder:"\u8bf7\u9009\u62e9\u6cd5\u52a1\u8bc4\u5ba1"},r.createElement(m.Z.Option,{value:1},"\u6cd5\u52a1\u4e00"),r.createElement(m.Z.Option,{value:2},"\u6cd5\u52a1\u4e8c"),r.createElement(m.Z.Option,{value:3},"\u6cd5\u52a1\u4e09"))),r.createElement(s.Z.Item,{colSpan:4,label:"\u8d22\u52a1\u8bc4\u5ba1",required:!0},r.createElement(m.Z,{name:"financeId",placeholder:"\u8bf7\u9009\u62e9\u8d22\u52a1\u8bc4\u5ba1"},r.createElement(m.Z.Option,{value:1},"\u8d22\u52a1\u4e00"),r.createElement(m.Z.Option,{value:2},"\u8d22\u52a1\u4e8c"),r.createElement(m.Z.Option,{value:3},"\u8d22\u52a1\u4e09"))),r.createElement(s.Z.Item,{colSpan:4,label:"\u9879\u76ee\u8bc4\u5ba1",required:!0},r.createElement(m.Z,{name:"projectId",placeholder:"\u8bf7\u9009\u62e9\u9879\u76ee\u8bc4\u5ba1"},r.createElement(m.Z.Option,{value:1},"\u9879\u76ee\u4e00"),r.createElement(m.Z.Option,{value:2},"\u9879\u76ee\u4e8c"),r.createElement(m.Z.Option,{value:3},"\u9879\u76ee\u4e09")))))),r.createElement(p.Z,{free:!0,className:Z.Card},r.createElement(p.Z.Header,{title:"\u57fa\u7840\u4fe1\u606f"}),r.createElement(p.Z.Divider,null),r.createElement(p.Z.Content,null,r.createElement(d.Z,{direction:"row",margin:[0,0,16,0]},r.createElement(f.Z,{onClick:z,className:Z.Button,type:"primary"}," ","\u65b0\u589e")),r.createElement(y.Z,{dataSource:j.company,hasBorder:!1,className:Z.mainTable},r.createElement(y.Z.Column,{title:"\u76ee\u6807\u516c\u53f8",cell:function e(t,n,r){return Y(t,n,r,"name")},dataIndex:"name"}),r.createElement(y.Z.Column,{title:"\u4e3b\u8425\u4e1a\u52a1",cell:function e(t,n,r){return Y(t,n,r,"business")},dataIndex:"business"}),r.createElement(y.Z.Column,{title:"\u6ce8\u518c\u5730",cell:function e(t,n,r){return Y(t,n,r,"address")},dataIndex:"address"}),r.createElement(y.Z.Column,{title:"\u521b\u59cb\u4eba",cell:function e(t,n,r){return Y(t,n,r,"creatorName")},dataIndex:"creatorName"}),r.createElement(y.Z.Column,{title:"\u64cd\u4f5c",cell:function e(t,n,a){return a.edited?r.createElement("div",null,r.createElement(f.Z,{text:!0,type:"primary",onClick:function e(){return _(n,"edited",!1)}},"\u4fdd\u5b58"),r.createElement(b.Z,{direction:"ver"}),r.createElement(f.Z,{text:!0,type:"primary",onClick:function e(){return R(n)}},"\u5220\u9664")):r.createElement("div",null,r.createElement(f.Z,{type:"primary",onClick:function e(){return _(n,"edited",!0)},text:!0},"\u7f16\u8f91"),r.createElement(b.Z,{direction:"ver"}),r.createElement(f.Z,{type:"primary",text:!0,onClick:function e(){return R(n)}},"\u5220\u9664"),r.createElement(b.Z,{direction:"ver"}),r.createElement(v.Z,{type:"primary",popupTriggerType:"hover",label:"\u66f4\u591a",text:!0},r.createElement(v.Z.Item,null,"\u64cd\u4f5c\u4e00"),r.createElement(v.Z.Item,null,"\u64cd\u4f5c\u4e8c"),r.createElement(v.Z.Item,null,"\u64cd\u4f5c\u4e09")))}})))),r.createElement(d.Z,{direction:"row",spacing:16,style:{left:K,right:G},align:"center",justify:"center",className:Z.fixedButtons},r.createElement(f.Z,{className:Z.Button,onClick:U,type:"primary"},"\u63d0\u4ea4"),r.createElement(f.Z,{className:Z.Button,onClick:C},"\u53d6\u6d88")))},K=a.Z.Cell,V,B,q,G=function e(){return r.createElement(a.Z,{gap:20},r.createElement(K,{colSpan:12},r.createElement(l.Z,{title:"\u5206\u7ec4\u8868\u5355",description:"\u5206\u7ec4\u8868\u5355\u5206\u7ec4\u8868\u5355\u5206\u7ec4\u8868\u5355\u5206\u7ec4\u8868\u5355\u5206\u7ec4\u8868\u5355\u5206\u7ec4\u8868\u5355\u5206\u7ec4\u8868\u5355",breadcrumbs:[{name:"\u8868\u5355\u9875\u9762"},{name:"\u5206\u7ec4\u8868\u5355"}]})),r.createElement(K,{colSpan:12},r.createElement(F,null)))}},35367:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(59301),a=n(2070),l=n(88859),o=n(65149),i={pageHeader:"PageHeader--pageHeader--IvPvuqT",title:"PageHeader--title--3yDuSsx",description:"PageHeader--description--2J_BNVV"},c=["breadcrumbs","title","description"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var n=s(e,t),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function s(e,t){if(null==e)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}var m,d=function e(t){var n=t.breadcrumbs,s=t.title,m=t.description,d=p(t,c);return r.createElement(a.Z,u({spacing:8,className:i.pageHeader},d),n&&n.length>0?r.createElement(l.Z,{className:i.breadcrumbs,separator:" / "},n.map((function(e,t){return r.createElement(l.Z.Item,{key:t,link:e.path},e.name)}))):null,s&&r.createElement(o.Z.Text,{className:i.title},s),m&&r.createElement(o.Z.Text,{className:i.description},m))}}}]);