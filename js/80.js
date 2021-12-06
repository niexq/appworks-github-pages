"use strict";(self.webpackChunkappworks_github_pages=self.webpackChunkappworks_github_pages||[]).push([[80],{99419:function(e,t,n){var r=n(68713),o=n(80980),i=n(88094),l=n(54733),a=n(2928),p=n(59301),c=n(4676),s=n(68712),u=n.n(s),d=n(84278),m=n(92691),f=n.n(m),y=n(70726),w=n(76381),b=n(20763),h=n(10366),g=n(42201),C=n(17276),v,N,Z=h.Z.Popup,E=(N=v=function(e){function t(n,r){(0,i.Z)(this,t);var o=(0,l.Z)(this,e.call(this,n,r));return o.clickMenuItem=function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var l=o.props.selectMode;(t=o.props).onItemClick.apply(t,[e].concat(r)),"multiple"!==l&&o.onPopupVisibleChange(!1,"menuSelect")},o.selectMenu=function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];"selectedKeys"in o.props||o.setState({selectedKeys:e}),(t=o.props).onSelect.apply(t,[e].concat(r))},o.onPopupOpen=function(){var e=(0,c.findDOMNode)(o);o.props.autoWidth&&e&&o.menu&&(o.menu.style.width=e.offsetWidth+"px")},o.onPopupVisibleChange=function(e,t){"visible"in o.props||o.setState({visible:e}),o.props.onVisibleChange(e,t)},o._menuRefHandler=function(e){o.menu=(0,c.findDOMNode)(e);var t=o.props.menuProps.ref;"function"==typeof t&&t(e)},o.state={selectedKeys:n.defaultSelectedKeys,visible:n.defaultVisible},o}return(0,a.Z)(t,e),t.getDerivedStateFromProps=function e(t){var n={};return"visible"in t&&(n.visible=t.visible),"selectedKeys"in t&&(n.selectedKeys=t.selectedKeys),n},t.prototype.render=function e(){var n,i,l=this.props,a=l.prefix,c=l.style,s=l.className,u=l.label,d=l.popupTriggerType,m=l.popupContainer,h=l.popupStyle,g=l.popupClassName,v=l.popupProps,N=l.followTrigger,E=l.selectMode,S=l.menuProps,P=l.children,k=(0,o.Z)(l,["prefix","style","className","label","popupTriggerType","popupContainer","popupStyle","popupClassName","popupProps","followTrigger","selectMode","menuProps","children"]),O=this.state,T=f()(((n={})[a+"menu-btn"]=!0,n[a+"expand"]=O.visible,n.opened=O.visible,n),s),x=f()(((i={})[a+"menu-btn-popup"]=!0,i),g),I=p.createElement(y.Z,(0,r.Z)({style:c,className:T},C.j6.pickOthers(t.propTypes,k)),u," ",p.createElement(w.Z,{type:"arrow-down",className:a+"menu-btn-arrow"}));return p.createElement(Z,(0,r.Z)({},v,{followTrigger:N,visible:O.visible,onVisibleChange:this.onPopupVisibleChange,trigger:I,triggerType:d,container:m,onOpen:this.onPopupOpen,style:h,className:x}),p.createElement("div",{className:a+"menu-btn-spacing-tb"},p.createElement(b.Z,(0,r.Z)({},S,{ref:this._menuRefHandler,selectedKeys:O.selectedKeys,selectMode:E,onSelect:this.selectMenu,onItemClick:this.clickMenuItem}),P)))},t}(p.Component),v.propTypes={prefix:u().string,label:u().node,autoWidth:u().bool,popupTriggerType:u().oneOf(["click","hover"]),popupContainer:u().any,visible:u().bool,defaultVisible:u().bool,onVisibleChange:u().func,popupStyle:u().object,popupClassName:u().string,popupProps:u().object,followTrigger:u().bool,defaultSelectedKeys:u().array,selectedKeys:u().array,selectMode:u().oneOf(["single","multiple"]),onItemClick:u().func,onSelect:u().func,menuProps:u().object,style:u().object,className:u().string,children:u().any},v.defaultProps={prefix:"next-",autoWidth:!0,popupTriggerType:"click",onVisibleChange:C.Yl.noop,onItemClick:C.Yl.noop,onSelect:C.Yl.noop,defaultSelectedKeys:[],menuProps:{}},N);E.displayName="MenuButton",E.Item=b.Z.Item,E.Group=b.Z.Group,E.Divider=b.Z.Divider,t.Z=g.Z.config((0,d.polyfill)(E),{componentName:"MenuButton"})},55080:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(59301),o=n(32501),i=n(35367),l=n(28207),a=n(70726),p=n(99419),c=n(90384),s=n(11230),u=n(38802),d={buttonGroup:"SingleTreeTable--buttonGroup--3w_zh0P"};function m(e,t){return h(e)||b(e,t)||y(e,t)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],o=!0,i=!1,l,a;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(r.push(l.value),!t||r.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return r}}function h(e){if(Array.isArray(e))return e}var g=r.useState,C=[{id:"first",rowNo:"\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u56fd\u5185\u5b89\u5168\u7ba1\u7406\u6761\u4f8b",rowContent:"",children:[{id:1,rowNo:"\u7b2c\u4e00\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:2,rowNo:"\u7b2c\u4e8c\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:3,rowNo:"\u7b2c\u4e09\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:4,rowNo:"\u7b2c\u56db\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"}]},{id:"second",rowNo:"\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u6d77\u5546\u6cd5",rowContent:"",children:[{id:5,rowNo:"\u7b2c\u4e00\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:6,rowNo:"\u7b2c\u4e8c\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:7,rowNo:"\u7b2c\u4e09\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:8,rowNo:"\u7b2c\u56db\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"}]},{id:"third",rowNo:"\u7eb3\u7a0e\u62c5\u4fdd\u8bd5\u884c\u65b9\u6cd5",rowContent:"",children:[{id:9,rowNo:"\u7b2c\u4e00\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:10,rowNo:"\u7b2c\u4e8c\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:11,rowNo:"\u7b2c\u4e09\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:12,rowNo:"\u7b2c\u56db\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"}]},{id:"fourth",rowNo:"\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u62c5\u4fdd\u6cd5",rowContent:"",children:[{id:13,rowNo:"\u7b2c\u4e00\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:14,rowNo:"\u7b2c\u4e8c\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:15,rowNo:"\u7b2c\u4e09\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:16,rowNo:"\u7b2c\u56db\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"}]},{id:"fifth",rowNo:"\u7eb3\u7a0e\u62c5\u4fdd\u8bd5\u884c\u65b9\u6cd5",rowContent:"",children:[{id:17,rowNo:"\u7b2c\u4e00\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:18,rowNo:"\u7b2c\u4e8c\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:19,rowNo:"\u7b2c\u4e09\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"},{id:20,rowNo:"\u7b2c\u56db\u6761",rowContent:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9"}]}];function v(){var e,t=m(g(!1),2),n=t[0],o=t[1],i=function e(){l.Z.success("\u8bf7\u6c42\u6210\u529f")},f=function e(t,n,l){return r.createElement("div",{className:d.buttonGroup},r.createElement(a.Z,{type:"primary",text:!0,onClick:i},"\u5220\u9664"),l&&l.children&&r.createElement(r.Fragment,null,r.createElement(a.Z,{type:"primary",text:!0,onClick:function e(){return o(!0)}},"\u7f16\u8f91"),r.createElement(p.Z,{type:"primary",text:!0,popupProps:{autoFit:!0},label:"\u66f4\u591a"},r.createElement(p.Z.Item,{onClick:i},"\u63d0\u4ea4\u5ba1\u6838"),r.createElement(p.Z.Item,{onClick:i},"\u6253\u56de"))))};return r.createElement(c.Z,{free:!0,className:d.container},r.createElement(c.Z.Content,null,r.createElement(s.Z,{dataSource:C,hasBorder:!1,primaryKey:"id",isTree:!0,cellProps:function e(t,n,r,o){if(o.children&&0===n)return{colSpan:2}}},r.createElement(s.Z.Column,{title:"\u6cd5\u5f8b\u6761\u6587\u7f16\u53f7",dataIndex:"rowNo",width:140}),r.createElement(s.Z.Column,{title:"\u6cd5\u5f8b\u6761\u6587\u5185\u5bb9",dataIndex:"rowContent"}),r.createElement(s.Z.Column,{title:"\u64cd\u4f5c",dataIndex:"operation",width:180,cell:f})),r.createElement(u.Z,{title:"\u7f16\u8f91\u7a97\u53e3",visible:n,onClose:function e(){return o(!1)},onCancel:function e(){return o(!1)},onOk:function e(){i(),o(!1)}},"\u8fd9\u91cc\u662f\u7f16\u8f91\u5185\u5bb9")))}var N=o.Z.Cell,Z,E,S,P=function e(){return r.createElement(o.Z,{gap:20},r.createElement(N,{colSpan:12},r.createElement(i.Z,{title:"\u5355\u5c42\u6811\u8868",breadcrumbs:[{name:"\u5217\u8868\u9875\u9762"},{name:"\u8868\u683c\u5217\u8868"},{name:"\u5355\u5c42\u6811\u8868"}],description:"\u5355\u5c42\u6811\u8868\u5355\u5c42\u6811\u8868\u5355\u5c42\u6811\u8868\u5355\u5c42\u6811\u8868\u5355\u5c42\u6811\u8868\u5355\u5c42\u6811\u8868\u5355\u5c42\u6811\u8868\u5355\u5c42\u6811\u8868\u5355\u5c42\u6811\u8868\u5408\u5e76\u5355\u5143\u683c"})),r.createElement(N,{colSpan:12},r.createElement(v,null)))}},35367:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(59301),o=n(2070),i=n(88859),l=n(65149),a={pageHeader:"PageHeader--pageHeader--IvPvuqT",title:"PageHeader--title--3yDuSsx",description:"PageHeader--description--2J_BNVV"},p=["breadcrumbs","title","description"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n=u(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function u(e,t){if(null==e)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}var d,m=function e(t){var n=t.breadcrumbs,u=t.title,d=t.description,m=s(t,p);return r.createElement(o.Z,c({spacing:8,className:a.pageHeader},m),n&&n.length>0?r.createElement(i.Z,{className:a.breadcrumbs,separator:" / "},n.map((function(e,t){return r.createElement(i.Z.Item,{key:t,link:e.path},e.name)}))):null,u&&r.createElement(l.Z.Text,{className:a.title},u),d&&r.createElement(l.Z.Text,{className:a.description},d))}}}]);