(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[9],{114:function(t,e,n){},115:function(t,e,n){},116:function(t,e,n){},137:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n(1),c=n(64),o=n.n(c),i=n(65),s=n(6),l=(n(114),n(5)),u=n.n(l),h=n(25),d=n(79),f=n(96),p=n(66),b=n(17),m=n(10),v=n(0),j=n(62),g=n(63),y=(n(115),function(t){var e=t.className,n=t.resize,c=void 0===n?"none":n,o=t.value,i=t.onChange,l=t.minRows,h=void 0===l?1:l,d=t.maxRows,f=Object(m.a)(t,["className","resize","value","onChange","minRows","maxRows"]),p=Object(v.useState)(h),b=Object(s.a)(p,2),j=b[0],g=b[1],y=Object(v.useState)(),O=Object(s.a)(y,2),x=O[0],_=O[1],w=Object(v.useRef)();Object(v.useEffect)((function(){var t=getComputedStyle(w.current),e=parseInt(t.lineHeight,10),n=parseInt(t.paddingTop,10)+parseInt(t.paddingBottom,10);_({lineHeight:e,paddingHeight:n})}),[]);return Object(a.jsx)("textarea",Object(r.a)({className:u()("textarea",e),ref:w,onChange:function(t){i(t);var e=x.lineHeight,n=x.paddingHeight,r=t.target.rows;t.target.rows=h;var a=~~((t.target.scrollHeight-n)/e);a===r&&(t.target.rows=a),d&&a>=d&&(t.target.rows=d,t.target.scrollTop=t.target.scrollHeight),g(d&&a>d?d:a)},style:{"--resize":c},rows:j,value:o},f))}),O=n(12),x=n(24),_=n(13),w=n(2),N=(n(116),function(t){var e=t.id,n=t.label,c=(t.hasValue,t.value),o=t.multiline,i=t.className,l=t.style,h=t.error,d=t.onBlur,f=Object(m.a)(t,["id","label","hasValue","value","multiline","className","style","error","onBlur"]),p=Object(v.useState)(!1),N=Object(s.a)(p,2),E=N[0],L=N[1],S=Object(O.c)(),k=Object(v.useRef)(),H=e||"input-".concat(S),M="".concat(H,"-label"),R="".concat(H,"-error"),T=o?y:"input";return Object(a.jsxs)("div",{className:u()("input",i,{"input--error":!!h}),style:l,children:[Object(a.jsxs)("div",{className:"input__content",children:[Object(a.jsx)("label",{className:u()("input__label",{"input__label--focused":E,"input__label--has-value":!!c}),id:M,htmlFor:H,children:n}),Object(a.jsx)(T,Object(r.a)({className:"input__element",id:H,"aria-labelledby":M,"aria-describedby":h?R:void 0,onFocus:function(){return L(!0)},onBlur:function(t){L(!1),d&&d(t)},value:c},f)),Object(a.jsx)("div",{className:u()("input__underline",{"input__underline--focused":E})})]}),Object(a.jsx)(j.a,{component:null,children:!!h&&Object(a.jsx)(g.a,{timeout:Object(w.b)(_.b.base.durationM),children:function(t){var e;return Object(a.jsx)("div",{className:u()("input__error","input__error--".concat(t)),id:R,role:"alert",style:{"--height":Object(x.a)(t)?Object(w.d)(null===(e=k.current)||void 0===e?void 0:e.getBoundingClientRect().height):"0px"},children:Object(a.jsxs)("div",{className:"input__error-message",ref:k,children:[Object(a.jsx)(b.a,{icon:"error"}),h]})})}})})]})}),E=n(69),L=n(67),S=n(23),k=n(31),H=_.b.base.durationS;function M(t){var e=t.status,n=t.errorMessage,r=t.fallback;if(200===e)return!1;return n||({500:"There was a problem with the server, try again later",404:"There was a problem connecting to the server. Make sure you are connected to the internet"}[e]||(void 0===r?"There was a problem with your request":r))}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(w.c)(0),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=Object(w.b)(t)*n;return{"--delay":Object(w.c)((Object(w.b)(e)+r).toFixed(0))}}e.default=function(){var t=Object(O.j)().status,e=Object(v.useRef)(),n=Object(O.b)(""),c=Object(O.b)(""),l=Object(v.useState)(!1),m=Object(s.a)(l,2),y=m[0],T=m[1],C=Object(v.useState)(!1),F=Object(s.a)(C,2),P=F[0],G=F[1],z=Object(v.useState)(""),B=Object(s.a)(z,2),I=B[0],W=B[1];Object(O.k)();var D=Object(v.useCallback)(function(){var t=Object(i.a)(o.a.mark((function t(e){var r,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),W(""),!y){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,T(!0),t.next=8,fetch("https://api.hamishw.com/message",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.value,message:c.value})});case 8:return r=t.sent,t.next=11,r.json();case 11:if(a=t.sent,!(i=M({status:null===r||void 0===r?void 0:r.status,errorMessage:null===a||void 0===a?void 0:a.error,fallback:"There was a problem sending your message"}))){t.next=15;break}throw new Error(i);case 15:G(!0),T(!1),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(4),T(!1),W(t.t0.message);case 23:case"end":return t.stop()}}),t,null,[[4,19]])})));return function(e){return t.apply(this,arguments)}}(),[n.value,c.value,y]);return Object(a.jsxs)(E.a,{className:u()("contact","contact--".concat(t)),children:[Object(a.jsxs)(S.a,{children:[Object(a.jsx)("title",{children:"Contact | Hamish Williams"}),Object(a.jsx)("meta",{name:"description",content:"Send me a message if you\u2019re interested in discussing a project or if you just want to say hi"})]}),Object(a.jsxs)(j.a,{component:null,children:[!P&&Object(a.jsx)(g.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:1600,onEnter:x.b,children:function(t){return Object(a.jsxs)("form",{className:"contact__form",method:"post",onSubmit:D,children:[Object(a.jsx)(p.a,{className:u()("contact__title","contact__title--".concat(t),{"contact__title--hidden":k.a}),level:3,as:"h1",style:R(_.b.base.durationXS,H,.3),children:Object(a.jsx)(d.a,{text:"Say hello",start:"exited"!==t&&!k.a,delay:300})}),Object(a.jsx)(f.a,{className:u()("contact__divider","contact__divider--".concat(t),{"contact__divider--hidden":k.a}),style:R(_.b.base.durationXS,H,.4)}),Object(a.jsx)(N,Object(r.a)({required:!0,className:u()("contact__input","contact__input--".concat(t),{"contact__input--hidden":k.a}),style:R(_.b.base.durationXS,H),autoComplete:"email",label:"Your Email",type:"email",maxLength:512},n)),Object(a.jsx)(N,Object(r.a)({required:!0,multiline:!0,className:u()("contact__input","contact__input--".concat(t),{"contact__input--hidden":k.a}),style:R(_.b.base.durationS,H),autoComplete:"off",label:"Message",maxLength:4096},c)),Object(a.jsx)(j.a,{component:null,children:!!I&&Object(a.jsx)(g.a,{timeout:Object(w.b)(_.b.base.durationM),children:function(t){var n;return Object(a.jsx)("div",{className:u()("contact__form-error","contact__form-error--".concat(t)),style:{"--height":Object(x.a)(t)?Object(w.d)(null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect().height):"0px"},children:Object(a.jsx)("div",{className:"contact__form-error-content",ref:e,children:Object(a.jsxs)("div",{className:"contact__form-error-message",children:[Object(a.jsx)(b.a,{className:"contact__form-error-icon",icon:"error"}),I]})})})}})}),Object(a.jsx)(h.a,{className:u()("contact__button","contact__button--".concat(t),{"contact__button--hidden":k.a,"contact__button--sending":y}),style:R(_.b.base.durationM,H),disabled:y,loading:y,loadingText:"Sending...",icon:"send",type:"submit",children:"Send Message"})]})}}),P&&Object(a.jsx)(g.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEnter:x.b,timeout:0,children:function(t){return Object(a.jsxs)("div",{className:"contact__complete","aria-live":"polite",children:[Object(a.jsx)(p.a,{level:3,as:"h3",className:u()("contact__complete-title","contact__complete-title--".concat(t)),children:"Message Sent"}),Object(a.jsx)(L.a,{size:"l",className:u()("contact__complete-text","contact__complete-text--".concat(t)),style:R(_.b.base.durationXS),children:"I\u2019ll get back to you within a couple days, sit tight"}),Object(a.jsx)(h.a,{secondary:!0,iconHoverShift:!0,className:u()("contact__complete-button","contact__complete-button--".concat(t)),style:R(_.b.base.durationM),href:"/",icon:"chevronRight",children:"Back to homepage"})]})}})]})]})}},64:function(t,e,n){t.exports=n(70)},65:function(t,e,n){"use strict";function r(t,e,n,r,a,c,o){try{var i=t[c](o),s=i.value}catch(l){return void n(l)}i.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,c){var o=t.apply(e,n);function i(t){r(o,a,c,i,s,"next",t)}function s(t){r(o,a,c,i,s,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return a}))},66:function(t,e,n){"use strict";var r=n(3),a=n(1),c=n(10),o=n(0),i=n(5),s=n.n(i),l=n(23),u=n.p+"static/media/gotham-bold.73ce573b.woff2";n(68),e.a=function(t){var e=t.children,n=t.level,i=void 0===n?1:n,h=t.as,d=t.align,f=void 0===d?"auto":d,p=t.weight,b=void 0===p?"medium":p,m=t.className,v=Object(c.a)(t,["children","level","as","align","weight","className"]),j=Math.min(Math.max(i,0),4),g=h||"h".concat(Math.max(j,1));return Object(a.jsxs)(o.Fragment,{children:["bold"===b&&Object(a.jsxs)(l.a,{children:[Object(a.jsx)("link",{rel:"preload",href:u,as:"font",crossorigin:""}),Object(a.jsx)("style",{children:"\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(".concat(u,") format('woff2');\n                font-display: swap;\n              }\n            ")})]}),Object(a.jsx)(g,Object(r.a)(Object(r.a)({className:s()(m,"heading","heading--align-".concat(f),"heading--level-".concat(j),"heading--weight-".concat(b))},v),{},{children:e}))]})}},67:function(t,e,n){"use strict";var r=n(3),a=n(1),c=n(10),o=n(5),i=n.n(o);n(71);e.a=function(t){var e=t.children,n=t.size,o=void 0===n?"m":n,s=t.as,l=void 0===s?"p":s,u=t.align,h=void 0===u?"auto":u,d=t.weight,f=void 0===d?"auto":d,p=t.secondary,b=t.className,m=Object(c.a)(t,["children","size","as","align","weight","secondary","className"]);return Object(a.jsx)(l,Object(r.a)(Object(r.a)({className:i()(b,"text","text--align-".concat(h),"text--size-".concat(o),"text--weight-".concat(f),{"text--secondary":p})},m),{},{children:e}))}},68:function(t,e,n){},69:function(t,e,n){"use strict";var r=n(3),a=n(1),c=n(10),o=n(0),i=n(5),s=n.n(i),l=(n(73),Object(o.forwardRef)((function(t,e){var n=t.as,o=void 0===n?"div":n,i=t.children,l=t.className,u=Object(c.a)(t,["as","children","className"]);return Object(a.jsx)(o,Object(r.a)(Object(r.a)({className:s()("section",l),ref:e},u),{},{children:i}))})));e.a=l},70:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(M){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,c=Object.create(a.prototype),o=new S(r||[]);return c._invoke=function(t,e,n){var r=h;return function(a,c){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw c;return H()}for(n.method=a,n.arg=c;;){var o=n.delegate;if(o){var i=N(o,n);if(i){if(i===b)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:d,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,o),c}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(M){return{type:"throw",arg:M}}}t.wrap=l;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",b={};function m(){}function v(){}function j(){}var g={};g[c]=function(){return this};var y=Object.getPrototypeOf,O=y&&y(y(k([])));O&&O!==n&&r.call(O,c)&&(g=O);var x=j.prototype=m.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(a,c,o,i){var s=u(t[a],t,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,i)}),(function(t){n("throw",t,o,i)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return n("throw",t,o,i)}))}i(s.arg)}var a;this._invoke=function(t,r){function c(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(c,c):c()}}function N(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,N(t,n),"throw"===n.method))return b;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,b;var c=a.arg;return c?c.done?(n[t.resultName]=c.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var n=t[c];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:H}}function H(){return{value:e,done:!0}}return v.prototype=x.constructor=j,j.constructor=v,v.displayName=s(j,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,n,r,a,c){void 0===c&&(c=Promise);var o=new w(l(e,n,r,a),c);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(x),s(x,i,"Generator"),x[c]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return i.type="throw",i.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=t,o.arg=e,c?(this.method="next",this.next=c.finallyLoc,b):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},t}(t.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},71:function(t,e,n){},73:function(t,e,n){},79:function(t,e,n){"use strict";var r=n(3),a=n(1),c=n(10),o=n(0),i=n(5),s=n.n(i),l=n(12),u=n(78),h=n(26),d=n(31),f=(n(81),["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"]),p="glyph",b="value";var m=function(t){var e=t.text,n=t.start,i=void 0===n||n,m=t.delay,v=void 0===m?0:m,j=t.className,g=Object(c.a)(t,["text","start","delay","className"]),y=Object(o.useRef)([{type:p,value:""}]),O=Object(o.useRef)(),x=Object(l.h)();return Object(o.useEffect)((function(){var t,n=O.current,r=e.split(""),a=function(){var t=y.current.map((function(t){return'<span class="decoder-text__'.concat(t.type,'">').concat(t.value,"</span>")}));n.innerHTML=t.join("")},c=Object(u.g)(0,(function(t){y.current=function(t,e,n){return t.map((function(t,r){if(r<n)return{type:b,value:t};if(n%1<.5){var a=Math.floor(Math.random()*f.length);return{type:p,value:f[a]}}return{type:p,value:e[r].value}}))}(r,y.current,t),a()}));return!i||t||x||d.a||(t=Object(u.a)(Object(u.b)(v),Object(u.e)({from:0,to:r.length,stiffness:8,damping:5})).start(c)),x&&(y.current=r.map((function(t,e){return{type:b,value:r[e]}})),a()),function(){t&&t.stop()}}),[x,i,v,e]),Object(a.jsxs)("span",Object(r.a)(Object(r.a)({className:s()("decoder-text",j)},g),{},{children:[Object(a.jsx)(h.a,{className:"decoder-text__label",children:e}),Object(a.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:O})]}))};e.a=Object(o.memo)(m)},81:function(t,e,n){},96:function(t,e,n){"use strict";var r=n(1),a=n(3),c=n(5),o=n.n(c),i=n(2),s=(n(98),function(t){var e=t.lineWidth,n=t.lineHeight,c=t.notchWidth,s=t.notchHeight,l=t.collapseDelay,u=t.collapsed,h=t.className,d=t.style;return Object(r.jsxs)("div",{className:o()("divider",h),style:Object(a.a)({"--lineWidth":e,"--lineHeight":n,"--notchWidth":c,"--notchHeight":s,"--collapseDelay":Object(i.c)(l)},d),children:[Object(r.jsx)("div",{className:o()("divider__line",{"divider__line--collapsed":u})}),Object(r.jsx)("div",{className:o()("divider__notch",{"divider__notch--collapsed":u}),style:{"--collapseDelay":Object(i.c)(l+160)}})]})});s.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0},e.a=s},98:function(t,e,n){}}]);
//# sourceMappingURL=9.b5411f36.chunk.js.map