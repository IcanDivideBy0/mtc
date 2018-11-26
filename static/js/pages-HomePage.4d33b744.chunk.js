(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{43:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return b});var a=t(3),i=t(0),r=t.n(i),u=t(2),o=t(22),c=t(7),l=t(31);function s(){var n=Object(a.a)(["\n  &.card {\n    border-radius: 2px;\n    overflow: hidden;\n    background-color: #f7f4f3;\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n\n    ",", "," {\n      padding: 0 ","px;\n    }\n  }\n\n  &:not(.card) {\n    & > *:first-child {\n      margin-top: 0;\n    }\n    & > *:last-child {\n      margin-bottom: 0;\n    }\n\n    "," {\n      border-radius: 2px;\n      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n    }\n  }\n\n  @supports (display: grid) {\n    @media "," {\n      &.acupuncture,\n      &.tuina,\n      &.ventouses,\n      &.qi-gong {\n        display: grid;\n        grid-column-gap: calc(",'px * 2);\n        grid-template-columns: repeat(3, 1fr);\n        grid-template-rows: repeat(auto, 1fr);\n        grid-template-areas:\n          "media . ."\n          "media . ."\n          "media . ."\n          "media . .";\n\n        '," {\n          grid-area: media;\n        }\n\n        ",", "," {\n          grid-column: span 2;\n          padding: 0 16px 0 0;\n        }\n        "," {\n          margin: 0.3em 0 0.5em;\n        }\n        ",' {\n          margin: 0 0 0.5em;\n        }\n      }\n\n      &.tuina,\n      &.qi-gong {\n        grid-template-areas:\n          ". . media"\n          ". . media"\n          ". . media"\n          ". . media";\n\n        ',", "," {\n          padding: 0 0 0 16px;\n        }\n      }\n    }\n  }\n"]);return s=function(){return n},n}function d(){var n=Object(a.a)([""]);return d=function(){return n},n}function m(){var n=Object(a.a)([""]);return m=function(){return n},n}function p(){var n=Object(a.a)(["\n  width: 100%;\n  padding-top: ","%;\n  position: relative;\n  overflow: hidden;\n\n  img,\n  .lazyload-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    pointer-events: none;\n    user-select: none;\n  }\n"]);return p=function(){return n},n}function g(){var n=Object(a.a)(["\n  display: block;\n\n  & > * {\n    margin: ","px 0;\n\n    @media "," {\n      margin: calc(","px * 2) 0;\n    }\n\n    &:first-child,\n    &:last-child {\n      margin: 0;\n    }\n  }\n\n  @supports (display: grid) {\n    display: grid;\n    grid-gap: ",'px;\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-areas:\n      "intro"\n      "acupuncture"\n      "tuina"\n      "ventouses"\n      "qi-gong"\n      "infos";\n\n    & > * {\n      margin: initial;\n    }\n\n    .intro {\n      grid-area: intro;\n    }\n    .acupuncture {\n      grid-area: acupuncture;\n    }\n    .tuina {\n      grid-area: tuina;\n    }\n    .ventouses {\n      grid-area: ventouses;\n    }\n    .qi-gong {\n      grid-area: qi-gong;\n    }\n    .infos {\n      grid-area: infos;\n    }\n\n    @media ',' {\n      grid-template-columns: repeat(2, 1fr);\n\n      grid-template-areas:\n        "intro intro"\n        "acupuncture tuina"\n        "ventouses qi-gong"\n        "infos infos";\n    }\n\n    @media '," {\n      grid-gap: calc(","px * 2);\n    }\n\n    @media ",' {\n      grid-template-columns: repeat(4, 1fr);\n\n      grid-template-areas:\n        "intro intro intro intro"\n        "acupuncture acupuncture acupuncture infos"\n        "tuina tuina tuina infos"\n        "ventouses ventouses ventouses infos"\n        "qi-gong qi-gong qi-gong infos";\n    }\n  }\n']);return g=function(){return n},n}var f=Object(u.d)(c.a)(g(),function(n){return n.theme.gridGutter},function(n){return n.theme.devices.medium.query},function(n){return n.theme.gridGutter},function(n){return n.theme.gridGutter},function(n){return n.theme.devices.small.query},function(n){return n.theme.devices.medium.query},function(n){return n.theme.gridGutter},function(n){return n.theme.devices.large.query}),x=u.d.div(p(),function(n){return 1/n.ratio*100}),v=u.d.h1(m()),h=u.d.p(d()),E=u.d.article(s(),v,h,function(n){return n.theme.gridGutter},x,function(n){return n.theme.devices.large.query},function(n){return n.theme.gridGutter},x,v,h,v,h,v,h),q=Object(o.c)({xLarge:function(n){return Math.floor((n-160)/4)+"px"},large:function(n){return Math.floor((n-160)/4)+"px"},medium:function(n){return Math.floor((n-96)/2)+"px"},small:function(n){return Math.floor((n-48)/2)+"px"}},"calc(100vw - 16px * 2)");function b(){return r.a.createElement(f,{padded:!0},r.a.createElement(E,{className:"intro"},r.a.createElement(h,null,"Ullamco proident voluptate magna cupidatat. Nulla dolore ullamco proident anim ipsum eiusmod non deserunt est ea ut veniam esse. Nisi tempor incididunt eiusmod ut ea qui ut ut sunt officia aliqua. Laborum fugiat quis voluptate occaecat culpa nulla sit consequat pariatur duis eiusmod voluptate veniam excepteur.")),r.a.createElement(E,{className:"card acupuncture"},r.a.createElement(x,{ratio:2},r.a.createElement(l.a,{lazy:!0,lazyHeight:200,srcSet:[t(75)+" 320w"],sizes:q,src:t(75),alt:""})),r.a.createElement(v,null,"Acupuncture"),r.a.createElement(h,null,"Incididunt proident elit proident mollit ex sint Lorem reprehenderit ea velit Lorem Lorem eiusmod laboris. Aliqua et ea est consectetur eiusmod magna esse esse sit.")),r.a.createElement(E,{className:"card tuina"},r.a.createElement(x,{ratio:2},r.a.createElement(l.a,{lazy:!0,lazyHeight:200,srcSet:[t(76)+" 320w"],sizes:q,src:t(76),alt:""})),r.a.createElement(v,null,"Tuina"),r.a.createElement(h,null,"Irure id non cupidatat adipisicing fugiat labore elit non. Exercitation veniam elit elit occaecat. Aliqua labore magna id pariatur dolor id minim magna dolor.")),r.a.createElement(E,{className:"card ventouses"},r.a.createElement(x,{ratio:2},r.a.createElement(l.a,{lazy:!0,lazyHeight:200,srcSet:[t(77)+" 320w"],sizes:q,src:t(77),alt:""})),r.a.createElement(v,null,"Ventouses"),r.a.createElement(h,null,"Nulla amet eiusmod dolore quis est enim cillum non duis tempor et cupidatat minim. Eiusmod est tempor qui consectetur officia culpa sint pariatur ad.")),r.a.createElement(E,{className:"card qi-gong"},r.a.createElement(x,{ratio:2},r.a.createElement(l.a,{lazy:!0,lazyHeight:200,srcSet:[t(78)+" 320w"],sizes:q,src:t(78),alt:""})),r.a.createElement(v,null,"Qi-Gong"),r.a.createElement(h,null,"Laborum minim commodo amet commodo aliquip quis quis. Pariatur dolor et elit minim magna qui adipisicing. Exercitation voluptate eiusmod irure.")),r.a.createElement(E,{className:"infos"},r.a.createElement(v,null,"Infos"),r.a.createElement(h,null,"Consectetur enim incididunt ut nostrud officia ad magna magna proident minim eu aliquip anim. Dolore pariatur duis in qui.")))}},75:function(n,e,t){n.exports=t.p+"static/media/acupuncture.70fa339e.jpg"},76:function(n,e,t){n.exports=t.p+"static/media/tuina.806bc8cc.jpg"},77:function(n,e,t){n.exports=t.p+"static/media/ventouses.12805406.jpg"},78:function(n,e,t){n.exports=t.p+"static/media/qi-gong.40a30204.jpg"}}]);
//# sourceMappingURL=pages-HomePage.4d33b744.chunk.js.map