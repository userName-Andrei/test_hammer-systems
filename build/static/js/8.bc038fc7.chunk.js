(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[8],{280:function(e,t,c){"use strict";var a=c(3),n=c(4),r=c(22),o=c(0),s=c(6),i=c.n(s),l=c(477),b=c(73),u=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c};var f=["xs","sm","md","lg","xl","xxl"],j=o.forwardRef((function(e,t){var c,s=o.useContext(b.b),j=s.getPrefixCls,d=s.direction,p=o.useContext(l.a),m=p.gutter,O=p.wrap,h=e.prefixCls,x=e.span,g=e.order,y=e.offset,v=e.push,w=e.pull,N=e.className,C=e.children,P=e.flex,E=e.style,k=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),A=j("col",h),R={};f.forEach((function(t){var c,o={},s=e[t];"number"===typeof s?o.span=s:"object"===Object(r.a)(s)&&(o=s||{}),delete k[t],R=Object(n.a)(Object(n.a)({},R),(c={},Object(a.a)(c,"".concat(A,"-").concat(t,"-").concat(o.span),void 0!==o.span),Object(a.a)(c,"".concat(A,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),Object(a.a)(c,"".concat(A,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(a.a)(c,"".concat(A,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),Object(a.a)(c,"".concat(A,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(a.a)(c,"".concat(A,"-rtl"),"rtl"===d),c))}));var S=i()(A,(c={},Object(a.a)(c,"".concat(A,"-").concat(x),void 0!==x),Object(a.a)(c,"".concat(A,"-order-").concat(g),g),Object(a.a)(c,"".concat(A,"-offset-").concat(y),y),Object(a.a)(c,"".concat(A,"-push-").concat(v),v),Object(a.a)(c,"".concat(A,"-pull-").concat(w),w),c),N,R),T=Object(n.a)({},E);return m&&(T=Object(n.a)(Object(n.a)(Object(n.a)({},m[0]>0?{paddingLeft:m[0]/2,paddingRight:m[0]/2}:{}),m[1]>0?{paddingTop:m[1]/2,paddingBottom:m[1]/2}:{}),T)),P&&(T.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),"auto"!==P||!1!==O||T.minWidth||(T.minWidth=0)),o.createElement("div",Object(n.a)({},k,{style:T,className:S,ref:t}),C)}));j.displayName="Col",t.a=j},281:function(e,t,c){"use strict";var a=c(4),n=c(3),r=c(22),o=c(8),s=c(0),i=c(6),l=c.n(i),b=c(73),u=c(477),f=c(58),j=c(167),d=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c},p=(Object(f.a)("top","middle","bottom","stretch"),Object(f.a)("start","end","center","space-around","space-between"),s.forwardRef((function(e,t){var c,i=e.prefixCls,f=e.justify,p=e.align,m=e.className,O=e.style,h=e.children,x=e.gutter,g=void 0===x?0:x,y=e.wrap,v=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=s.useContext(b.b),N=w.getPrefixCls,C=w.direction,P=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),E=Object(o.a)(P,2),k=E[0],A=E[1],R=s.useRef(g);s.useEffect((function(){var e=j.a.subscribe((function(e){var t=R.current||0;(!Array.isArray(t)&&"object"===Object(r.a)(t)||Array.isArray(t)&&("object"===Object(r.a)(t[0])||"object"===Object(r.a)(t[1])))&&A(e)}));return function(){return j.a.unsubscribe(e)}}),[]);var S=N("row",i),T=function(){var e=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(t,c){if("object"===Object(r.a)(t))for(var a=0;a<j.b.length;a++){var n=j.b[a];if(k[n]&&void 0!==t[n]){e[c]=t[n];break}}else e[c]=t||0})),e}(),D=l()(S,(c={},Object(n.a)(c,"".concat(S,"-no-wrap"),!1===y),Object(n.a)(c,"".concat(S,"-").concat(f),f),Object(n.a)(c,"".concat(S,"-").concat(p),p),Object(n.a)(c,"".concat(S,"-rtl"),"rtl"===C),c),m),W=Object(a.a)(Object(a.a)(Object(a.a)({},T[0]>0?{marginLeft:T[0]/-2,marginRight:T[0]/-2}:{}),T[1]>0?{marginTop:T[1]/-2,marginBottom:T[1]/2}:{}),O);return s.createElement(u.a.Provider,{value:{gutter:T,wrap:y}},s.createElement("div",Object(a.a)({},v,{className:D,style:W,ref:t}),h))})));p.displayName="Row",t.a=p},477:function(e,t,c){"use strict";var a=c(0),n=Object(a.createContext)({});t.a=n},483:function(e,t,c){"use strict";var a=c(281);t.a=a.a},484:function(e,t,c){"use strict";var a=c(280);t.a=a.a},510:function(e,t,c){"use strict";c.r(t);var a=c(2),n=(c(0),c(483)),r=c(484),o=c(113),s=c(464),i=c(33),l=c(50),b=c(169),u=c(38);t.default=function(){var e=Object(u.d)((function(e){return e.theme.currentTheme}));return Object(a.jsx)("div",{className:"h-100 ".concat("light"===e?"bg-white":""),children:Object(a.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===e?"logo.png":"logo-white.png"),alt:""})}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(n.a,{align:"middle",children:[Object(a.jsxs)(r.a,{xs:24,sm:24,md:8,children:[Object(a.jsx)("h1",{className:"font-weight-bold mb-4 display-4",children:"Page not found"}),Object(a.jsx)("p",{className:"font-size-md mb-4",children:"We've noticed you lost your way, no worries, we will help you to found the correct path."}),Object(a.jsx)(l.b,{to:"/app",children:Object(a.jsx)(o.a,{type:"primary",icon:Object(a.jsx)(s.a,{}),children:"Go back"})})]}),Object(a.jsx)(r.a,{xs:24,sm:24,md:{span:14,offset:2},children:Object(a.jsx)("img",{className:"img-fluid mt-md-0 mt-4",src:"/img/others/img-20.png",alt:""})})]})}),Object(a.jsxs)(b.a,{mobileFlex:!1,justifyContent:"between",children:[Object(a.jsxs)("span",{children:["Copyright  \xa9  ","".concat((new Date).getFullYear())," ",Object(a.jsx)("span",{className:"font-weight-semibold",children:"".concat(i.b)})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(a.jsx)("span",{className:"mx-2 text-muted",children:" | "}),Object(a.jsx)("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})]})]})})}}}]);
//# sourceMappingURL=8.bc038fc7.chunk.js.map