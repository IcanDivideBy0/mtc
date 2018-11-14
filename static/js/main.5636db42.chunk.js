(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{28:function(n,e,t){"use strict";(function(n){var a=t(4),r=t(0),c=t.n(r),o=t(56),u=t(8),i=t(55),l=t(10),m=t(3),s=t(7),f=t(29);function d(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n"]);return d=function(){return n},n}var v=Object(m.c)(s.a)(d()),b={fallback:c.a.createElement(v,null,c.a.createElement(s.b,null))},h=function(n){return function(e){return c.a.createElement(n,e)}},E=h(Object(l.a)({chunkName:function(){return"home-components/HomePage"},isReady:function(n){return!!t.m[this.resolve(n)]},requireAsync:function(){return t.e(1).then(t.bind(null,31))},requireSync:function n(e){var a=this.resolve(e);return t(a)},resolve:function(){return 31}},b)),p=h(Object(l.a)({chunkName:function(){return"contact-components/ContactPage"},isReady:function(n){return!!t.m[this.resolve(n)]},requireAsync:function(){return t.e(2).then(t.bind(null,32))},requireSync:function n(e){var a=this.resolve(e);return t(a)},resolve:function(){return 32}},b));function O(n){var e=n.match;return c.a.createElement(o.a,null,c.a.createElement(u.a,{exact:!0,path:e.url,component:E}),c.a.createElement(u.a,{exact:!0,path:e.url+"contact",component:p}),c.a.createElement(u.a,{component:f.a}))}e.a=Object(i.a)(O)}).call(this,"/")},29:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var a=t(0),r=t.n(a),c=t(7);function o(){return r.a.createElement(c.a,null,"Not found!")}},34:function(n,e,t){n.exports=t(54)},54:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(9),o=t.n(c),u=t(10),i=t(58);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(4),m=t(55),s=t(3),f=t(23),d=t(17),v=t(57),b=t(24),h=t.n(b);function E(){var n=Object(l.a)(["\n  flex: 1;\n  display: flex;\n\n  .nav-link {\n    display: block;\n    flex: 1;\n    text-align: center;\n\n    &.active {\n      border-bottom: 1px solid #000;\n    }\n  }\n"]);return E=function(){return n},n}function p(){var n=Object(l.a)(["\n  .nav-list {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: space-around;\n  }\n"]);return p=function(){return n},n}function O(){var n=Object(l.a)(["\n  background-color: #fff;\n\n  &.home {\n    background-color: red;\n  }\n"]);return O=function(){return n},n}var j=s.c.header(O()),x=Object(s.c)(function(n){var e=n.className,t=Object(d.a)(n,["className"]);return r.a.createElement("nav",{className:e},r.a.createElement("ul",Object.assign({className:"nav-list"},t)))})(p()),g=Object(s.c)(function(n){var e=n.className,t=Object(d.a)(n,["className"]);return r.a.createElement("li",{className:e},r.a.createElement(v.a,Object.assign({className:"nav-link"},t)))})(E());var y=Object(m.a)(function(n){var e=n.location;return r.a.createElement(j,{className:h()({home:"/"===e.pathname})},r.a.createElement(x,null,r.a.createElement(g,{exact:!0,to:"/"},"Home"),r.a.createElement(g,{exact:!0,to:"/contact"},"Contact")))}),w=t(7);function N(){var n=Object(l.a)([""]);return N=function(){return n},n}var _=Object(s.c)(w.a)(N());function k(){return r.a.createElement(_,null,"Hello AppFooter!")}var A=t(28),L={gridGutter:16,breakpoints:[720,840,960,1024,1280]};function C(){var n=Object(l.a)(["\n  flex: 1;\n"]);return C=function(){return n},n}function D(){var n=Object(l.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"]);return D=function(){return n},n}var H=s.c.div(D()),S=s.c.div(C());var q=Object(m.a)(function(n){var e=n.location;return r.a.createElement(s.a,{theme:L},r.a.createElement(H,{className:"App"},r.a.createElement(f.Helmet,null,r.a.createElement("title",null,"MTC"),r.a.createElement("link",{rel:"canonical",href:"/mtc"+e.pathname+e.search}),r.a.createElement("meta",{name:"description",content:"Medecine traditionnelle chinoise"})),r.a.createElement(y,null),r.a.createElement(S,null,r.a.createElement(A.a,null)),r.a.createElement(k,null)))}),B=r.a.createElement(i.a,{basename:"/mtc"},r.a.createElement(q,null)),P=document.getElementById("root");window.REACT_APP_SSR?Object(u.b)(function(){return o.a.hydrate(B,P)}):o.a.render(B,P),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},7:function(n,e,t){"use strict";var a=t(4),r=t(3);function c(){var n=Object(a.a)(["\n        @media screen and (min-width: ","px) {\n          max-width: calc(\n            ","px - ","px\n          );\n        }\n      "]);return c=function(){return n},n}function o(){var n=Object(a.a)(["\n  width: 100%;\n  margin: 0 auto;\n  max-width: calc(100vw - ","px)\n    ",";\n\n  ",";\n"]);return o=function(){return n},n}var u=r.c.div(o(),function(n){return 2*n.theme.gridGutter},function(n){return n.fullWidth&&"!important"},function(n){return n.theme.breakpoints.map(function(n){return Object(r.b)(c(),n,n,function(n){return 2*n.theme.gridGutter})})}),i=t(0),l=t.n(i);function m(){return l.a.createElement("div",null,"Loading\u2026")}t.d(e,"a",function(){return u}),t.d(e,"b",function(){return m})}},[[34,4,3]]]);
//# sourceMappingURL=main.5636db42.chunk.js.map