(self.webpackChunkappworks_github_pages=self.webpackChunkappworks_github_pages||[]).push([[558],{96558:function(t,e,n){"use strict";n.d(e,{Z:function(){return wt}});var r=n(59301),i=n(73516),o=n.n(i),a=n(39940),u=n.n(a);function c(){return"undefined"==typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState}function l(){return void 0===navigator.onLine||navigator.onLine}var f=new Map,s=function t(e,n,r){var i=f.get(e);(null==i?void 0:i.timer)&&clearTimeout(i.timer);var o=void 0;n>-1&&(o=setTimeout((function(){f.delete(e)}),n)),f.set(e,{data:r,timer:o,startTime:(new Date).getTime()})},h=function t(e){var n=f.get(e);return{data:null==n?void 0:n.data,startTime:null==n?void 0:n.startTime}},d=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],a;try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(t){a={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},v=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(d(arguments[e]));return t};function p(t,e){var n=!1;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];n||(n=!0,t.apply(void 0,v(r)),setTimeout((function(){n=!1}),e))}}var g=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],a;try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(t){a={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},y=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(g(arguments[e]));return t};function b(t){var e=(0,r.useRef)((function(){throw new Error("Cannot call an event handler while rendering.")}));e.current=t;var n=(0,r.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=e.current;if(r)return r.apply(void 0,y(t))}),[e]);if("function"==typeof t)return n}var m=b,O,w=function t(e,n){var i=(0,r.useRef)(!1);(0,r.useEffect)((function(){return function(){i.current=!1}}),[]),(0,r.useEffect)((function(){if(i.current)return e();i.current=!0}),n)},S=[];function j(t){return S.push(t),function e(){var n=S.indexOf(t);S.splice(n,1)}}var T=!1;if("undefined"!=typeof window&&window.addEventListener&&!T){var E=function t(){if(c()&&l())for(var e=0;e<S.length;e++){var n;(0,S[e])()}};window.addEventListener("visibilitychange",E,!1),window.addEventListener("focus",E,!1),T=!0}var P=j,x=[];function R(t){return x.push(t),function e(){var n=x.indexOf(t);x.splice(n,1)}}var F=!1;if("undefined"!=typeof window&&window.addEventListener&&!F){var k=function t(){if(c())for(var e=0;e<x.length;e++){var n;(0,x[e])()}};window.addEventListener("visibilitychange",k,!1),F=!0}var D=R,C=function(){return C=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},C.apply(this,arguments)},I=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],a;try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(t){a={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},z=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(I(arguments[e]));return t},M="AHOOKS_USE_REQUEST_DEFAULT_KEY",W=function(){function t(t,e,n,r){this.count=0,this.pollingWhenVisibleFlag=!1,this.pollingTimer=void 0,this.loadingDelayTimer=void 0,this.unsubscribe=[],this.that=this,this.state={loading:!1,params:[],data:void 0,error:void 0,run:this.run.bind(this.that),mutate:this.mutate.bind(this.that),refresh:this.refresh.bind(this.that),cancel:this.cancel.bind(this.that),unmount:this.unmount.bind(this.that)},this.service=t,this.config=e,this.subscribe=n,r&&(this.state=C(C({},this.state),r)),this.debounceRun=this.config.debounceInterval?o()(this._run,this.config.debounceInterval):void 0,this.throttleRun=this.config.throttleInterval?u()(this._run,this.config.throttleInterval):void 0,this.limitRefresh=p(this.refresh.bind(this),this.config.focusTimespan),this.config.pollingInterval&&this.unsubscribe.push(D(this.rePolling.bind(this))),this.config.refreshOnWindowFocus&&this.unsubscribe.push(P(this.limitRefresh.bind(this)))}return t.prototype.setState=function(t){void 0===t&&(t={}),this.state=C(C({},this.state),t),this.subscribe(this.state)},t.prototype._run=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.pollingTimer&&clearTimeout(this.pollingTimer),this.loadingDelayTimer&&clearTimeout(this.loadingDelayTimer),this.count+=1;var r=this.count;return this.setState({loading:!this.config.loadingDelay,params:e}),this.config.loadingDelay&&(this.loadingDelayTimer=setTimeout((function(){t.setState({loading:!0})}),this.config.loadingDelay)),this.service.apply(this,z(e)).then((function(n){if(r!==t.count)return new Promise((function(){}));t.loadingDelayTimer&&clearTimeout(t.loadingDelayTimer);var i=t.config.formatResult?t.config.formatResult(n):n;return t.setState({data:i,error:void 0,loading:!1}),t.config.onSuccess&&t.config.onSuccess(i,e),i})).catch((function(n){if(r!==t.count)return new Promise((function(){}));if(t.loadingDelayTimer&&clearTimeout(t.loadingDelayTimer),t.setState({data:void 0,error:n,loading:!1}),t.config.onError&&t.config.onError(n,e),t.config.throwOnError)throw n;return console.error(n),Promise.reject("useRequest has caught the exception, if you need to handle the exception yourself, you can set options.throwOnError to true.")})).finally((function(){if(r===t.count&&t.config.pollingInterval){if(!c()&&!t.config.pollingWhenHidden)return void(t.pollingWhenVisibleFlag=!0);t.pollingTimer=setTimeout((function(){t._run.apply(t,z(e))}),t.config.pollingInterval)}}))},t.prototype.run=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.debounceRun?(this.debounceRun.apply(this,z(t)),Promise.resolve(null)):this.throttleRun?(this.throttleRun.apply(this,z(t)),Promise.resolve(null)):this._run.apply(this,z(t))},t.prototype.cancel=function(){this.debounceRun&&this.debounceRun.cancel(),this.throttleRun&&this.throttleRun.cancel(),this.loadingDelayTimer&&clearTimeout(this.loadingDelayTimer),this.pollingTimer&&clearTimeout(this.pollingTimer),this.pollingWhenVisibleFlag=!1,this.count+=1,this.setState({loading:!1})},t.prototype.refresh=function(){return this.run.apply(this,z(this.state.params))},t.prototype.rePolling=function(){this.pollingWhenVisibleFlag&&(this.pollingWhenVisibleFlag=!1,this.refresh())},t.prototype.mutate=function(t){"function"==typeof t?this.setState({data:t(this.state.data)||{}}):this.setState({data:t})},t.prototype.unmount=function(){this.cancel(),this.unsubscribe.forEach((function(t){t()}))},t}();function K(t,e){var n=e||{},i=n.refreshDeps,o=void 0===i?[]:i,a=n.manual,u=void 0!==a&&a,c=n.onSuccess,l=void 0===c?function(){}:c,f=n.onError,d=void 0===f?function(){}:f,v=n.defaultLoading,p=void 0!==v&&v,g=n.loadingDelay,y=n.pollingInterval,b=void 0===y?0:y,O=n.pollingWhenHidden,S=void 0===O||O,j=n.defaultParams,T=void 0===j?[]:j,E=n.refreshOnWindowFocus,P=void 0!==E&&E,x=n.focusTimespan,R=void 0===x?5e3:x,F=n.fetchKey,k=n.cacheKey,D=n.cacheTime,K=void 0===D?3e5:D,V=n.staleTime,_=void 0===V?0:V,L=n.debounceInterval,N=n.throttleInterval,$=n.initialData,H=n.ready,q=void 0===H||H,U=n.throwOnError,Y=void 0!==U&&U,Z=(0,r.useRef)(M),A=m(t),Q=m(l),B=m(d),G=m(F),J;"formatResult"in n&&(J=n.formatResult);var X,tt={formatResult:m(J),onSuccess:Q,onError:B,loadingDelay:g,pollingInterval:b,pollingWhenHidden:S,refreshOnWindowFocus:!u&&P,focusTimespan:R,debounceInterval:L,throttleInterval:N,throwOnError:Y},et=m((function(t,e){it((function(n){return n[t]=e,C({},n)}))})),nt=I((0,r.useState)((function(){var t;if(k){var e=null===(t=h(k))||void 0===t?void 0:t.data;if(e){Z.current=e.newstFetchKey;var n={};return Object.keys(e.fetches).forEach((function(t){var r=e.fetches[t],i=new W(A,tt,et.bind(null,t),{loading:r.loading,params:r.params,data:r.data,error:r.error});n[t]=i.state})),n}}return{}})),2),rt=nt[0],it=nt[1],ot=(0,r.useRef)(rt);ot.current=rt;var at=(0,r.useRef)(),ut=(0,r.useCallback)((function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(q){if(G){var n=G.apply(void 0,z(t));Z.current=void 0===n?M:n}var r=Z.current,i=ot.current[r];if(!i){var o=new W(A,tt,et.bind(null,r),{data:$});i=o.state,it((function(t){return t[r]=i,C({},t)}))}return i.run.apply(i,z(t))}at.current=t}),[F,et,q]),ct=(0,r.useRef)(ut);ct.current=ut,w((function(){k&&s(k,K,{fetches:rt,newstFetchKey:Z.current})}),[k,rt]);var lt=(0,r.useRef)(!1);w((function(){q&&(!lt.current&&at.current&&ct.current.apply(ct,z(at.current)),lt.current=!0)}),[q]),(0,r.useEffect)((function(){var t;if(!u)if(Object.keys(rt).length>0){var e=k&&(null===(t=h(k))||void 0===t?void 0:t.startTime)||0;-1===_||(new Date).getTime()-e<=_||Object.values(rt).forEach((function(t){t.refresh()}))}else ct.current.apply(ct,z(T))}),[]);var ft=(0,r.useCallback)((function(){Object.values(ot.current).forEach((function(t){t.unmount()})),Z.current=M,it({}),ot.current={}}),[it]);w((function(){u||Object.values(ot.current).forEach((function(t){t.refresh()}))}),z(o)),(0,r.useEffect)((function(){return function(){Object.values(ot.current).forEach((function(t){t.unmount()}))}}),[]);var st=(0,r.useCallback)((function(t){return function(){console.warn("You should't call "+t+" when service not executed once.")}}),[]);return C(C({loading:q&&!u||p,data:$,error:void 0,params:[],cancel:st("cancel"),refresh:st("refresh"),mutate:st("mutate")},rt[Z.current]||{}),{run:ut,fetches:rt,reset:ft})}var V=K,_=function(){return _=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},_.apply(this,arguments)},L=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},N=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],a;try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(t){a={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},$=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(N(arguments[e]));return t};function H(t,e){var n=e.refreshDeps,i=void 0===n?[]:n,o=e.ref,a=e.isNoMore,u=e.threshold,c=void 0===u?100:u,l=e.fetchKey,f=L(e,["refreshDeps","ref","isNoMore","threshold","fetchKey"]),s=N((0,r.useState)(!1),2),h=s[0],d=s[1];(0,r.useEffect)((function(){e.fetchKey&&console.warn("useRequest loadMore mode don't need fetchKey!")}),[]);var v=V(t,_(_({},f),{fetchKey:function t(e){var n;return(null===(n=null==e?void 0:e.list)||void 0===n?void 0:n.length)||0},onSuccess:function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];d(!1),e.onSuccess&&e.onSuccess.apply(e,$(n))}})),p=v.data,g=v.run,y=v.params,b=v.reset,m=v.loading,O=v.fetches,S=(0,r.useCallback)((function(){b();var t,e=N(y).slice(1);g.apply(void 0,$([void 0],e))}),[g,b,y]),j=(0,r.useRef)(S);j.current=S,w((function(){e.manual||j.current()}),$(i));var T=(0,r.useMemo)((function(){var t=[],e=p;return Object.values(O).forEach((function(n){var r,i;(null===(r=n.data)||void 0===r?void 0:r.list)&&(t=t.concat(null===(i=n.data)||void 0===i?void 0:i.list)),n.loading||(e=n.data)})),_(_({},e),{list:t})}),[O,p]),E=!!a&&(!m&&!h&&a(T)),P=(0,r.useCallback)((function(){if(!E){d(!0);var t,e=N(y).slice(1);g.apply(void 0,$([T],e))}}),[E,g,T,y]),x=function t(){!m&&!h&&o&&o.current&&o.current.scrollHeight-o.current.scrollTop<=o.current.clientHeight+c&&P()},R=(0,r.useRef)(x);return R.current=x,(0,r.useEffect)((function(){if(!o||!o.current)return function(){};var t=function t(){return R.current()};return o.current.addEventListener("scroll",t),function(){o&&o.current&&o.current.removeEventListener("scroll",t)}}),[R]),_(_({},v),{data:T,reload:S,loading:m&&0===T.list.length,loadMore:P,loadingMore:h,noMore:E})}var q=H,U=function(){return U=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},U.apply(this,arguments)},Y=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},Z=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],a;try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(t){a={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},A=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Z(arguments[e]));return t};function Q(t,e){var n=e.paginated,i=e.defaultPageSize,o=void 0===i?10:i,a=e.refreshDeps,u=void 0===a?[]:a,c=e.fetchKey,l=Y(e,["paginated","defaultPageSize","refreshDeps","fetchKey"]);(0,r.useEffect)((function(){c&&console.error("useRequest pagination's fetchKey will not work!")}),[]);var f=V(t,U({defaultParams:[{current:1,pageSize:o}]},l)),s=f.data,h=f.params,d=f.run,v=f.loading,p=Y(f,["data","params","run","loading"]),g=h&&h[0]?h[0]:{},y=g.current,b=void 0===y?1:y,m=g.pageSize,O=void 0===m?o:m,S=g.sorter,j=void 0===S?{}:S,T=g.filters,E=void 0===T?{}:T,P=(0,r.useCallback)((function(t){var e=Z(h),n=e[0],r=e.slice(1);d.apply(void 0,A([U(U({},n),t)],r))}),[d,h]),x=(null==s?void 0:s.total)||0,R=(0,r.useMemo)((function(){return Math.ceil(x/O)}),[O,x]),F=(0,r.useCallback)((function(t,e){var n=t<=0?1:t,r=e<=0?1:e,i=Math.ceil(x/r);n>i&&(n=Math.max(1,i)),P({current:n,pageSize:r})}),[x,P]),k=(0,r.useCallback)((function(t){F(t,O)}),[F,O]),D=(0,r.useCallback)((function(t){F(b,t)}),[F,b]),C=(0,r.useRef)(k);C.current=k,w((function(){e.manual||C.current(1)}),A(u));var I=(0,r.useCallback)((function(t,e,n){P({current:t.current,pageSize:t.pageSize||o,filters:e,sorter:n})}),[E,j,P]);return U({loading:v,data:s,params:h,run:d,pagination:{current:b,pageSize:O,total:x,totalPage:R,onChange:F,changeCurrent:k,changePageSize:D},tableProps:{dataSource:(null==s?void 0:s.list)||[],loading:v,onChange:I,pagination:{current:b,pageSize:O,total:x}},sorter:j,filters:E},p)}var B=Q,G=r.createContext({});G.displayName="UseRequestConfigContext";var J=G,X=function(){return X=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},X.apply(this,arguments)},tt=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},et=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],a;try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(t){a={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},nt=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(et(arguments[e]));return t};function rt(t,e){void 0===e&&(e={});var n=(0,r.useContext)(J),i=X(X({},n),e),o=i.paginated,a=i.loadMore,u=i.requestMethod,c=(0,r.useRef)(o),l=(0,r.useRef)(a);if(c.current!==o)throw Error("You should not modify the paginated of options");if(l.current!==a)throw Error("You should not modify the loadMore of options");c.current=o,l.current=a;var f=function t(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return fetch.apply(void 0,nt(e)).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)}))},s=u||f,h;switch(typeof t){case"string":h=function e(){return s(t)};break;case"object":var d=t.url,v=tt(t,["url"]);h=function e(){return u?u(t):f(d,v)};break;default:h=function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new Promise((function(e,r){var i=t.apply(void 0,nt(n)),o=i;if(!i.then)switch(typeof i){case"string":o=s(i);break;case"object":var a=i.url,c=tt(i,["url"]);o=u?u(i):f(a,c)}o.then(e).catch(r)}))}}return a?q(h,i):o?B(h,i):V(h,i)}var it=J.Provider,ot=null,at=rt,ut,ct=function t(e,n){var i=(0,r.useRef)(!1);(0,r.useEffect)((function(){if(i.current)return e();i.current=!0}),n)},lt=n(25285),ft=function(){return ft=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},ft.apply(this,arguments)},st=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},ht=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],a;try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(t){a={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},dt=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(ht(arguments[e]));return t};function vt(t,e){var n=e.form,i=e.refreshDeps,o=void 0===i?[]:i,a=e.manual,u=e.defaultType,c=void 0===u?"simple":u,l=e.defaultParams,f=st(e,["form","refreshDeps","manual","defaultType","defaultParams"]),s=at(t,ft(ft({},f),{paginated:!0,manual:!0})),h=s.params,d=s.run,v=h[2]||{},p=ht((0,r.useState)(v.type||c),2),g=p[0],y=p[1],b=ht((0,r.useState)(v.allFormData||l&&l[1]||{}),2),m=b[0],O=b[1],w=(0,r.useCallback)((function(){if(!n)return{};if(n.getFieldInstance){var t=n.getFieldsValue(),e={};return Object.keys(t).forEach((function(r){n.getFieldInstance&&!n.getFieldInstance(r)||(e[r]=t[r])})),e}return n.getFieldsValue(null,(function(){return!0}))}),[n]),S=(0,r.useRef)(n);S.current=n,(0,r.useEffect)((function(){if(S.current)if(S.current.getFieldInstance){var t={};Object.keys(m).forEach((function(e){S.current.getFieldInstance&&!S.current.getFieldInstance(e)||(t[e]=m[e])})),S.current.setFieldsValue(t)}else S.current.setFieldsValue(m)}),[g]),(0,r.useEffect)((function(){h.length>0?d.apply(void 0,dt(h)):a||E(l)}),[]);var j=(0,r.useCallback)((function(){var t=w(),e;O(ft(ft({},m),t)),y("simple"===g?"advance":"simple")}),[g,m,w]),T=(0,r.useCallback)((function(){var t=w();if(!n)return Promise.resolve();var e=Object.keys(t);return n.getInternalHooks?n.validateFields(e):new Promise((function(t,r){n.validateFields(e,(function(e,n){e?r(e):t(n)}))}))}),[n]),E=(0,r.useCallback)((function(t){setTimeout((function(){T().then((function(){var n=w(),r=ft(ft({},m),n);O(r),d(t?t[0]:ft(ft({pageSize:e.defaultPageSize||10},h[0]||{}),{current:1}),n,{allFormData:r,type:g})})).catch((function(t){return t}))}))}),[w,d,h,m,g]),P=(0,r.useCallback)((function(){n&&n.resetFields(),E()}),[n,E]),x=(0,lt.Z)(P);ct((function(){a||x()}),dt(o));var R=(0,lt.Z)((function(t){t&&t.preventDefault&&t.preventDefault(),E()}));return ft(ft({},s),{search:{submit:R,type:g,changeType:j,reset:P}})}var pt=vt,gt=function(){return gt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},gt.apply(this,arguments)},yt=function t(e){return{getFieldInstance:function t(n){return e.getNames().includes(n)},setFieldsValue:e.setValues,getFieldsValue:e.getValues,resetFields:e.resetToDefault,validateFields:function t(n,r){e.validate(r)}}},bt=function t(e){var n={dataSource:e.tableProps.dataSource,loading:e.tableProps.loading,onSort:function t(n,r){e.tableProps.onChange({current:e.pagination.current,pageSize:e.pagination.pageSize},e.filters,{field:n,order:r})},onFilter:function t(n){e.tableProps.onChange({current:e.pagination.current,pageSize:e.pagination.pageSize},n,e.sorter)}},r={onChange:e.pagination.changeCurrent,onPageSizeChange:e.pagination.changePageSize,current:e.pagination.current,pageSize:e.pagination.pageSize,total:e.pagination.total};return gt(gt({},e),{tableProps:n,paginationProps:r})},mt=function(){return mt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},mt.apply(this,arguments)};function Ot(t,e){var n=pt(t,mt(mt({},e),{form:e.field?yt(e.field):void 0}));return bt(n)}var wt=Ot},25285:function(t,e,n){"use strict";var r=n(59301);function i(t){var e=(0,r.useRef)(t);e.current=t;var n=(0,r.useRef)();return n.current||(n.current=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.current.apply(this,t)}),n.current}e.Z=i},73516:function(t,e,n){var r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,h="object"==typeof self&&self&&self.Object===Object&&self,d=s||h||Function("return this")(),v,p=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return d.Date.now()};function m(t,e,n){var i,o,a,u,c,l,f=0,s=!1,h=!1,d=!0;if("function"!=typeof t)throw new TypeError(r);function v(e){var n=i,r=o;return i=o=void 0,f=e,u=t.apply(r,n)}function p(t){return f=t,c=setTimeout(S,e),s?v(t):u}function m(t){var n,r,i=e-(t-l);return h?y(i,a-(t-f)):i}function w(t){var n=t-l,r;return void 0===l||n>=e||n<0||h&&t-f>=a}function S(){var t=b();if(w(t))return T(t);c=setTimeout(S,m(t))}function T(t){return c=void 0,d&&i?v(t):(i=o=void 0,u)}function E(){void 0!==c&&clearTimeout(c),f=0,i=l=o=c=void 0}function P(){return void 0===c?u:T(b())}function x(){var t=b(),n=w(t);if(i=arguments,o=this,l=t,n){if(void 0===c)return p(l);if(h)return c=setTimeout(S,e),v(l)}return void 0===c&&(c=setTimeout(S,e)),u}return e=j(e)||0,O(n)&&(s=!!n.leading,a=(h="maxWait"in n)?g(j(n.maxWait)||0,e):a,d="trailing"in n?!!n.trailing:d),x.cancel=E,x.flush=P,x}function O(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function w(t){return!!t&&"object"==typeof t}function S(t){return"symbol"==typeof t||w(t)&&p.call(t)==o}function j(t){if("number"==typeof t)return t;if(S(t))return i;if(O(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=O(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=c.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):u.test(t)?i:+t}t.exports=m},39940:function(t,e,n){var r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,h="object"==typeof self&&self&&self.Object===Object&&self,d=s||h||Function("return this")(),v,p=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return d.Date.now()};function m(t,e,n){var i,o,a,u,c,l,f=0,s=!1,h=!1,d=!0;if("function"!=typeof t)throw new TypeError(r);function v(e){var n=i,r=o;return i=o=void 0,f=e,u=t.apply(r,n)}function p(t){return f=t,c=setTimeout(S,e),s?v(t):u}function m(t){var n,r,i=e-(t-l);return h?y(i,a-(t-f)):i}function O(t){var n=t-l,r;return void 0===l||n>=e||n<0||h&&t-f>=a}function S(){var t=b();if(O(t))return j(t);c=setTimeout(S,m(t))}function j(t){return c=void 0,d&&i?v(t):(i=o=void 0,u)}function E(){void 0!==c&&clearTimeout(c),f=0,i=l=o=c=void 0}function P(){return void 0===c?u:j(b())}function x(){var t=b(),n=O(t);if(i=arguments,o=this,l=t,n){if(void 0===c)return p(l);if(h)return c=setTimeout(S,e),v(l)}return void 0===c&&(c=setTimeout(S,e)),u}return e=T(e)||0,w(n)&&(s=!!n.leading,a=(h="maxWait"in n)?g(T(n.maxWait)||0,e):a,d="trailing"in n?!!n.trailing:d),x.cancel=E,x.flush=P,x}function O(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(r);return w(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(t,e,{leading:i,maxWait:e,trailing:o})}function w(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function S(t){return!!t&&"object"==typeof t}function j(t){return"symbol"==typeof t||S(t)&&p.call(t)==o}function T(t){if("number"==typeof t)return t;if(j(t))return i;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=c.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):u.test(t)?i:+t}t.exports=O}}]);