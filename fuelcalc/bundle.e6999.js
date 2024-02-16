!function(t){function e(r){if(n[r])return n[r].exports;var _=n[r]={i:r,l:!1,exports:{}};return t[r].call(_.exports,_,_.exports,e),_.l=!0,_.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var _ in t)e.d(r,_,function(e){return t[e]}.bind(null,_));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/ui/fuelcalc",e(e.s="xr6w")}({KC4l:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function _(t){var e=t.parentNode;e&&e.removeChild(t)}function o(t,e,n){var r,_,o,i={};for(o in e)"key"==o?r=e[o]:"ref"==o?_=e[o]:i[o]=e[o];if(arguments.length>2&&(i.children=arguments.length>3?x.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===i[o]&&(i[o]=t.defaultProps[o]);return l(t,i,r,_,null)}function l(t,e,n,r,_){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==_?++E:_,__i:-1,__u:0};return null==_&&null!=L.vnode&&L.vnode(o),o}function i(t){return t.children}function u(t,e){this.props=t,this.context=e}function c(t,e){if(null==e)return t.__?c(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?c(t):null}function a(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return a(t)}}function s(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!f.__r++||N!==L.debounceRendering)&&((N=L.debounceRendering)||M)(f)}function f(){var t,e,n,_,o,l,i,u,s;for(H.sort(A);t=H.shift();)t.__d&&(e=H.length,_=void 0,l=(o=(n=t).__v).__e,u=[],s=[],(i=n.__P)&&((_=r({},o)).__v=o.__v+1,L.vnode&&L.vnode(_),O(i,_,o,n.__n,void 0!==i.ownerSVGElement,32&o.__u?[l]:null,u,null==l?c(o):l,!!(32&o.__u),s),_.__.__k[_.__i]=_,k(u,_,s),_.__e!=l&&a(_)),H.length>e&&H.sort(A));f.__r=0}function p(t,e,n,r,_,o,l,i,u,c,a){var s,f,p,m,v,y=r&&r.__k||U,b=e.length;for(n.__d=u,h(n,e,y),u=n.__d,s=0;s<b;s++)null!=(p=n.__k[s])&&"boolean"!=typeof p&&"function"!=typeof p&&(f=-1===p.__i?D:y[p.__i]||D,p.__i=s,O(t,p,f,_,o,l,i,u,c,a),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&S(f.ref,null,p),a.push(p.ref,p.__c||m,p)),null==v&&null!=m&&(v=m),65536&p.__u||f.__k===p.__k?u=d(p,u,t):"function"==typeof p.type&&void 0!==p.__d?u=p.__d:m&&(u=m.nextSibling),p.__d=void 0,p.__u&=-196609);n.__d=u,n.__e=v}function h(t,e,n){var r,_,o,u,a,s=e.length,f=n.length,p=f,h=0;for(t.__k=[],r=0;r<s;r++)null!=(_=t.__k[r]=null==(_=e[r])||"boolean"==typeof _||"function"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _||_.constructor==String?l(null,_,null,null,_):W(_)?l(i,{children:_},null,null,null):void 0===_.constructor&&_.__b>0?l(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)?(_.__=t,_.__b=t.__b+1,a=m(_,n,u=r+h,p),_.__i=a,o=null,-1!==a&&(p--,(o=n[a])&&(o.__u|=131072)),null==o||null===o.__v?(-1==a&&h--,"function"!=typeof _.type&&(_.__u|=65536)):a!==u&&(a===u+1?h++:a>u?p>s-u?h+=a-u:h--:h=a<u&&a==u-1?a-u:0,a!==r+h&&(_.__u|=65536))):(o=n[r])&&null==o.key&&o.__e&&(o.__e==t.__d&&(t.__d=c(o)),C(o,o,!1),n[r]=null,p--);if(p)for(r=0;r<f;r++)null!=(o=n[r])&&0==(131072&o.__u)&&(o.__e==t.__d&&(t.__d=c(o)),C(o,o))}function d(t,e,n){var r,_;if("function"==typeof t.type){for(r=t.__k,_=0;r&&_<r.length;_++)r[_]&&(r[_].__=t,e=d(r[_],e,n));return e}return t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e),e&&e.nextSibling}function m(t,e,n,r){var _=t.key,o=t.type,l=n-1,i=n+1,u=e[n];if(null===u||u&&_==u.key&&o===u.type)return n;if(r>(null!=u&&0==(131072&u.__u)?1:0))for(;l>=0||i<e.length;){if(l>=0){if((u=e[l])&&0==(131072&u.__u)&&_==u.key&&o===u.type)return l;l--}if(i<e.length){if((u=e[i])&&0==(131072&u.__u)&&_==u.key&&o===u.type)return i;i++}}return-1}function v(t,e,n){"-"===e[0]?t.setProperty(e,null==n?"":n):t[e]=null==n?"":"number"!=typeof n||F.test(e)?n:n+"px"}function y(t,e,n,r,_){var o;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||v(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||v(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r?n.u=r.u:(n.u=Date.now(),t.addEventListener(e,o?g:b,o)):t.removeEventListener(e,o?g:b,o);else{if(_)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==e&&"height"!==e&&"href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&"rowSpan"!==e&&"colSpan"!==e&&"role"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&"-"!==e[4]?t.removeAttribute(e):t.setAttribute(e,n))}}function b(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(L.event?L.event(t):t)}function g(t){return this.l[t.type+!0](L.event?L.event(t):t)}function O(t,e,n,_,o,l,c,a,s,f){var h,d,m,v,y,b,g,O,k,S,C,P,T,x,E,H=e.type;if(void 0!==e.constructor)return null;128&n.__u&&(s=!!(32&n.__u),l=[a=e.__e=n.__e]),(h=L.__b)&&h(e);t:if("function"==typeof H)try{if(O=e.props,k=(h=H.contextType)&&_[h.__c],S=h?k?k.props.value:h.__:_,n.__c?g=(d=e.__c=n.__c).__=d.__E:("prototype"in H&&H.prototype.render?e.__c=d=new H(O,S):(e.__c=d=new u(O,S),d.constructor=H,d.render=w),k&&k.sub(d),d.props=O,d.state||(d.state={}),d.context=S,d.__n=_,m=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=H.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,H.getDerivedStateFromProps(O,d.__s))),v=d.props,y=d.state,d.__v=e,m)null==H.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==H.getDerivedStateFromProps&&O!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(O,S),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(O,d.__s,S)||e.__v===n.__v)){for(e.__v!==n.__v&&(d.props=O,d.state=d.__s,d.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),C=0;C<d._sb.length;C++)d.__h.push(d._sb[C]);d._sb=[],d.__h.length&&c.push(d);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(O,d.__s,S),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,y,b)}))}if(d.context=S,d.props=O,d.__P=t,d.__e=!1,P=L.__r,T=0,"prototype"in H&&H.prototype.render){for(d.state=d.__s,d.__d=!1,P&&P(e),h=d.render(d.props,d.state,d.context),x=0;x<d._sb.length;x++)d.__h.push(d._sb[x]);d._sb=[]}else do{d.__d=!1,P&&P(e),h=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++T<25);d.state=d.__s,null!=d.getChildContext&&(_=r(r({},_),d.getChildContext())),m||null==d.getSnapshotBeforeUpdate||(b=d.getSnapshotBeforeUpdate(v,y)),p(t,W(E=null!=h&&h.type===i&&null==h.key?h.props.children:h)?E:[E],e,n,_,o,l,c,a,s,f),d.base=e.__e,e.__u&=-161,d.__h.length&&c.push(d),g&&(d.__E=d.__=null)}catch(t){e.__v=null,s||null!=l?(e.__e=a,e.__u|=s?160:32,l[l.indexOf(a)]=null):(e.__e=n.__e,e.__k=n.__k),L.__e(t,e,n)}else null==l&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=j(n.__e,e,n,_,o,l,c,s,f);(h=L.diffed)&&h(e)}function k(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)S(n[r],n[++r],n[++r]);L.__c&&L.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){L.__e(t,e.__v)}}))}function j(t,e,n,r,o,l,i,u,a){var s,f,h,d,m,v,b,g=n.props,O=e.props,k=e.type;if("svg"===k&&(o=!0),null!=l)for(s=0;s<l.length;s++)if((m=l[s])&&"setAttribute"in m==!!k&&(k?m.localName===k:3===m.nodeType)){t=m,l[s]=null;break}if(null==t){if(null===k)return document.createTextNode(O);t=o?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,O.is&&O),l=null,u=!1}if(null===k)g===O||u&&t.data===O||(t.data=O);else{if(l=l&&x.call(t.childNodes),g=n.props||D,!u&&null!=l)for(g={},s=0;s<t.attributes.length;s++)g[(m=t.attributes[s]).name]=m.value;for(s in g)m=g[s],"children"==s||("dangerouslySetInnerHTML"==s?h=m:"key"===s||s in O||y(t,s,null,m,o));for(s in O)m=O[s],"children"==s?d=m:"dangerouslySetInnerHTML"==s?f=m:"value"==s?v=m:"checked"==s?b=m:"key"===s||u&&"function"!=typeof m||g[s]===m||y(t,s,m,g[s],o);if(f)u||h&&(f.__html===h.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(h&&(t.innerHTML=""),p(t,W(d)?d:[d],e,n,r,o&&"foreignObject"!==k,l,i,l?l[0]:n.__k&&c(n,0),u,a),null!=l)for(s=l.length;s--;)null!=l[s]&&_(l[s]);u||(s="value",void 0!==v&&(v!==t[s]||"progress"===k&&!v||"option"===k&&v!==g[s])&&y(t,s,v,g[s],!1),s="checked",void 0!==b&&b!==t[s]&&y(t,s,b,g[s],!1))}return t}function S(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){L.__e(t,n)}}function C(t,e,n){var r,o;if(L.unmount&&L.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||S(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){L.__e(t,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&C(r[o],e,n||"function"!=typeof t.type);n||null==t.__e||_(t.__e),t.__=t.__e=t.__d=void 0}function w(t,e,n){return this.constructor(t,n)}function P(t,e,n){var r,_,l,u;L.__&&L.__(t,e),_=(r="function"==typeof n)?null:n&&n.__k||e.__k,l=[],u=[],O(e,t=(!r&&n||e).__k=o(i,null,[t]),_||D,D,void 0!==e.ownerSVGElement,!r&&n?[n]:_?null:e.firstChild?x.call(e.childNodes):null,l,!r&&n?n:_?_.__e:e.firstChild,r,u),k(l,t,u)}function T(t,e){P(t,e,T)}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return L})),n.d(e,"d",(function(){return P}));var x,L,E,H,N,M,A,D={},U=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,W=Array.isArray;x=U.slice,L={__e:function(t,e,n,r){for(var _,o,l;e=e.__;)if((_=e.__c)&&!_.__)try{if((o=_.constructor)&&null!=o.getDerivedStateFromError&&(_.setState(o.getDerivedStateFromError(t)),l=_.__d),null!=_.componentDidCatch&&(_.componentDidCatch(t,r||{}),l=_.__d),l)return _.__E=_}catch(e){t=e}throw t}},E=0,u.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),s(this))},u.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),s(this))},u.prototype.render=i,H=[],M="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,A=function(t,e){return t.__v.__b-e.__v.__b},f.__r=0},QfWi:function(t,e,n){"use strict";function r(t,e){j.c.__h&&j.c.__h(g,t,w||e),w=0;var n=g.__H||(g.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:T}),n.__[t]}function _(t){return w=1,function(t,e,n){var _=r(b++,2);if(_.t=t,!_.__c&&(_.__=[n?n(e):a(void 0,e),function(t){var e=_.__N?_.__N[0]:_.__[0],n=_.t(e,t);e!==n&&(_.__N=[n,_.__[1]],_.__c.setState({}))}],_.__c=g,!g.u)){var o=function(t,e,n){if(!_.__c.__H)return!0;var r=_.__c.__H.__.filter((function(t){return t.__c}));if(r.every((function(t){return!t.__N})))return!l||l.call(this,t,e,n);var o=!1;return r.forEach((function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(o=!0)}})),!(!o&&_.__c.props===t)&&(!l||l.call(this,t,e,n))};g.u=!0;var l=g.shouldComponentUpdate,i=g.componentWillUpdate;g.componentWillUpdate=function(t,e,n){if(this.__e){var r=l;l=void 0,o(t,e,n),l=r}i&&i.call(this,t,e,n)},g.shouldComponentUpdate=o}return _.__N||_.__}(a,t)}function o(){for(var t;t=P.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(i),t.__H.__h.forEach(u),t.__H.__h=[]}catch(e){t.__H.__h=[],j.c.__e(e,t.__v)}}function l(t){var e,n=function(){clearTimeout(r),M&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);M&&(e=requestAnimationFrame(n))}function i(t){var e=g,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),g=e}function u(t){var e=g;t.__c=t.__(),g=e}function c(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function a(t,e){return"function"==typeof e?e(t):e}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,_,o,l,i=[],u=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==e);u=!0);}catch(t){c=!0,_=t}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw _}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function d(t){var e=function(t,e){if("object"!=p(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==p(e)?e:String(e)}function m(){var t,e,n,o=s(_(new D),2),l=o[0],i=o[1];return t=function(){l.onChange=function(){return i(new D(l))}},e=[l],n=r(b++,3),!j.c.__s&&c(n.__H,e)&&(n.__=t,n.i=e,g.__H.__h.push(n)),l}function v(t){return Math.floor(t)}function y(t,e){console.log(e),e.set(t.target.name,t.target.value)}n.r(e);var b,g,O,k,j=n("KC4l"),S="header__OVZyn",C=function(){return Object(j.a)("header",{class:S},Object(j.a)("h1",null,"Fuel Calculator"))},w=0,P=[],T=[],x=j.c.__b,L=j.c.__r,E=j.c.diffed,H=j.c.__c,N=j.c.unmount;j.c.__b=function(t){g=null,x&&x(t)},j.c.__r=function(t){L&&L(t),b=0;var e=(g=t.__c).__H;e&&(O===g?(e.__h=[],g.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=T,t.__N=t.i=void 0}))):(e.__h.forEach(i),e.__h.forEach(u),e.__h=[],b=0)),O=g},j.c.diffed=function(t){E&&E(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==P.push(e)&&k===j.c.requestAnimationFrame||((k=j.c.requestAnimationFrame)||l)(o)),e.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==T&&(t.__=t.__V),t.i=void 0,t.__V=T}))),O=g=null},j.c.__c=function(t,e){e.some((function(t){try{t.__h.forEach(i),t.__h=t.__h.filter((function(t){return!t.__||u(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],j.c.__e(n,t.__v)}})),H&&H(t,e)},j.c.unmount=function(t){N&&N(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{i(t)}catch(t){e=t}})),n.__H=void 0,e&&j.c.__e(e,n.__v))};var M="function"==typeof requestAnimationFrame,A={},D=function(){function t(t){this.laptimeM=2,this.laptimeS=10,this.raceLength=20,this.literPerLap=2.6,this.maxTank=105,this.onChange=function(){},t&&(this.setState=t.setState,this.laptimeM=t.laptimeM,this.laptimeS=t.laptimeS,this.raceLength=t.raceLength,this.literPerLap=t.literPerLap,this.maxTank=t.maxTank,this.onChange=t.onChange),this.compute()}var e,n,r;return e=t,n=[{key:"set",value:function(t,e){var n=e;"string"==typeof e&&(n=-1!==e.indexOf(".")?parseFloat(e):parseInt(e,10)),console.log("set attr ".concat(t," ").concat(e," => ").concat(n)),isNaN(n)?console.error("Try to set ".concat(t," to a value which is not a number")):(this[t]=n,this.compute(),this.onChange())}},{key:"compute",value:function(){this.laps=60*this.raceLength/(60*this.laptimeM+this.laptimeS+.5)+1,this.litersTotal=this.laps*this.literPerLap+1.5,this.pitstopRequired=this.litersTotal/this.maxTank,this.possibleLapsOnTank=this.maxTank/this.literPerLap-.5}}],n&&h(e.prototype,n),r&&h(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),U=function(){var t=m();return Object(j.a)("form",{class:A.form},Object(j.a)("div",{class:"row"},Object(j.a)("div",{class:"col-sm"},Object(j.a)("div",{class:"container"},Object(j.a)("div",{class:"form-group"},Object(j.a)("label",null,"Lap time (minutes / seconds)"),Object(j.a)("div",{class:"form-row"},Object(j.a)("div",{class:"col"},Object(j.a)("input",{type:"number",class:"form-control",value:t.laptimeM,name:"laptimeM",onChange:function(e){return y(e,t)}})),Object(j.a)("div",{class:"col"},Object(j.a)("input",{type:"number",class:"form-control",value:t.laptimeS,name:"laptimeS",onChange:function(e){return y(e,t)}})))),Object(j.a)("div",{class:"form-group"},Object(j.a)("label",null,"Race length (minutes)"),Object(j.a)("input",{type:"number",class:"form-control",value:t.raceLength,name:"raceLength",onChange:function(e){return y(e,t)}})),Object(j.a)("div",{class:"form-group"},Object(j.a)("label",null,"Consumption (liters/lap)"),Object(j.a)("input",{type:"number",class:"form-control",value:t.literPerLap,name:"literPerLap",onChange:function(e){return y(e,t)}})),Object(j.a)("div",{class:"form-group"},Object(j.a)("label",null,"Max tank capacity (liters)"),Object(j.a)("input",{type:"number",class:"form-control",value:t.maxTank,name:"maxTank",onChange:function(e){return y(e,t)}})))),Object(j.a)("div",{class:"col-sm"},Object(j.a)("div",{class:"container"},Object(j.a)("div",{class:"form-group"},Object(j.a)("label",null,"Total fuel needed (liters)"),Object(j.a)("input",{type:"number",class:"form-control",value:v(t.litersTotal),readOnly:!0})),Object(j.a)("div",{class:"form-group"},Object(j.a)("label",null,"Total Laps (with formation lap)"),Object(j.a)("input",{type:"number",class:"form-control",value:v(t.laps),readOnly:!0})),Object(j.a)("div",{class:"form-group"},Object(j.a)("label",null,"Number of pit stop required"),Object(j.a)("input",{type:"number",class:"form-control",value:v(t.pitstopRequired),readOnly:!0})),Object(j.a)("div",{class:"form-group"},Object(j.a)("label",null,"Possible laps on tank"),Object(j.a)("input",{type:"number",class:"form-control",value:v(t.possibleLapsOnTank),readOnly:!0}))))))};e.default=function(){return Object(j.a)("div",{id:"app",className:"container"},Object(j.a)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"}),Object(j.a)(C,null),Object(j.a)(U,null))}},xr6w:function(t,e,n){"use strict";n.r(e);var r=n("KC4l"),_=r.a,o=r.d,l=r.b,i=function(t){return t&&t.default?t.default:t},u=function(t){return"/"===t[t.length-1]?t:t+"/"};if("function"==typeof i(n("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=i(n("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var a={preRenderData:e},s=e.url?u(e.url):"";(l&&s===u(location.pathname)?l:o)(_(t,{CLI_DATA:a}),document.body,c)}()}}});
//# sourceMappingURL=bundle.e6999.js.map