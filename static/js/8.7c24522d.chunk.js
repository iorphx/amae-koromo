(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[8],{186:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d}));var a=n(3),r=n(52),c=n(0),l=n.n(c);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={selectedMode:""},m=l.a.createContext([o({},i),function(){}]),s=function(){return Object(c.useContext)(m)};function d(e){var t=e.children,n=Object(c.useReducer)((function(e,t){return o({},e,{},t)}),null,(function(){return o({},i)})),r=Object(a.a)(n,2),u=r[0],s=r[1],d=Object(c.useMemo)((function(){return[u,s]}),[u,s]);return l.a.createElement(m.Provider,{value:d},t)}},201:function(e,t,n){"use strict";var a=n(186),r=n(3),c=n(0),l=n.n(c),u=n(78);function o(){var e=Object(a.b)(),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(c.useCallback)((function(e){return o({selectedMode:e})}),[o]);return l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",{className:"col"},l.a.createElement(u.a,{mode:n.selectedMode,onChange:i})))}n.d(t,"a",(function(){return a.a})),n.d(t,"c",(function(){return a.b})),n.d(t,"b",(function(){return o}))},203:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return f}));var a=n(0),r=n.n(a),c=n(15),l=n(4),u=n(79),o=function(){throw new Error("Not intended for rendering")},i=function(){throw new Error("Not intended for rendering")},m=r.a.createContext([]);function s(){var e=Object(a.useContext)(m),t=Object(l.j)()||{path:""};return r.a.createElement("nav",{className:"nav nav-pills mb-3"},e.map((function(e){return r.a.createElement(c.c,{key:e.path,to:"".concat(t.path,"/").concat(e.path),className:"nav-link",activeClassName:"active"},e.title)})))}function d(e){var t=e.defaultPath,n=e.children,c=Object(a.useContext)(m),o=Object(l.j)()||{path:""};return r.a.createElement(l.d,null,c.map((function(e){return r.a.createElement(l.b,{key:e.path,path:"".concat(o.path,"/").concat(e.path)},r.a.createElement(u.Helmet,null,r.a.createElement("title",null,e.title)),e.children)})),r.a.createElement(l.b,null,r.a.createElement(l.a,{to:"".concat(o.path,"/").concat(t||c[0].path)})),n)}function f(e){var t=e.children;return r.a.createElement(m.Provider,{value:t[0].props.children.map((function(e){return e.props}))},t.slice(1))}},543:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(201),l=n(203),u=n(3),o=n(248),i=n(36),m=n(77),s=n(24),d="\u4e1c\u5357\u897f\u5317",f=["#003f5c","#7a5195","#ef5675","#ffa600"].map((function(e,t){return r.a.createElement(o.a,{fill:e,fillOpacity:1,key:"cell-".concat(t)})})),b=function(e){return e.rate>0?e.label:null},E=Math.PI/180,p=function(e){var t=e.value;if(!t)return null;t=t.toString();var n=e.viewBox,a=n.cx,c=n.cy,l=n.outerRadius,u=n.startAngle,o=function(e,t,n,a){return{x:e+Math.cos(-E*a)*n,y:t+Math.sin(-E*a)*n}}(a,c,l/2,u+function(e,t){return Math.sign(t-e)*Math.min(Math.abs(t-e),360)}(u,n.endAngle)/2),i=o.x,m=o.y;return r.a.createElement("g",null,r.a.createElement("text",{x:i,y:m-12,stroke:"#fff",strokeWidth:"0.5",fill:"#fff",textAnchor:"middle",dominantBaseline:"central"},t.split("\n")[0]),r.a.createElement("text",{x:i,y:m+12,stroke:"#fff",strokeWidth:"0.5",fill:"#fff",textAnchor:"middle",dominantBaseline:"central"},t.split("\n")[1]))};function h(e){var t=e.rates,n=e.numGames,c=e.aspect,l=void 0===c?1:c,u=Object(a.useMemo)((function(){return t.map((function(e,t){return{rate:e,count:Math.round(e*n),label:d[t],pieLabel:"".concat((100*e).toFixed(2),"%\n[").concat(Math.round(e*n),"]")}}))}),[t,n]);return r.a.createElement(o.i,{width:"100%",aspect:l,height:"auto"},r.a.createElement(o.h,null,r.a.createElement(o.g,{isAnimationActive:!1,data:u,nameKey:"label",dataKey:"rate",label:b},f,r.a.createElement(o.d,{dataKey:"pieLabel",position:"inside",fill:"#fff",content:p}))))}var v=n(186),O=n(41),j=["\u7b49\u7ea7","\u4e00\u4f4d\u7387","\u4e8c\u4f4d\u7387","\u4e09\u4f4d\u7387","\u56db\u4f4d\u7387","\u88ab\u98de\u7387","\u5e73\u5747\u987a\u4f4d","\u548c\u724c\u7387","\u653e\u94f3\u7387","\u526f\u9732\u7387","\u7acb\u76f4\u7387","\u81ea\u6478\u7387","\u6d41\u5c40\u7387","\u6d41\u542c\u7387","\u5bf9\u6218\u6570","\u5728\u4f4d\u8bb0\u5f55"];n.d(t,"default",(function(){return y}));var x=r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"rank-by-seat",title:"\u5750\u5e2d\u987a\u4f4d"},r.a.createElement((function(){var e=Object(i.g)(m.d,[]),t=Object(c.c)(),n=Object(u.a)(t,1)[0];if(!e)return r.a.createElement(s.a,null);var a=e[n.selectedMode||"0"];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("h3",{className:"text-center"},"\u5750\u5e2d\u5403\u4e00\u7387"),r.a.createElement(h,{rates:a[1],numGames:a.numGames})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("h3",{className:"text-center"},"\u5750\u5e2d\u5403\u56db\u7387"),r.a.createElement(h,{rates:a[4],numGames:a.numGames}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-right"},"\u7edf\u8ba1\u534a\u5e84\u6570\uff1a",a.numGames)))}),null)),r.a.createElement(l.b,{path:"data-by-rank",title:"\u7b49\u7ea7\u6570\u636e"},r.a.createElement((function(){var e=Object(i.g)(m.c,[]),t=Object(v.b)(),n=Object(u.a)(t,1)[0];if(!e)return r.a.createElement(s.a,null);var a=Object.entries(e[n.selectedMode||"0"]);return a.sort((function(e,t){return e[0].localeCompare(t[0])})),r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-responsive-xl table-striped table-sm table-hover text-center"},r.a.createElement("thead",{className:"vertical-table-header"},r.a.createElement("tr",null,j.map((function(e){return r.a.createElement("th",{key:e},r.a.createElement("div",null,e))})))),r.a.createElement("tbody",null,a.map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return r.a.createElement("tr",{key:n},r.a.createElement("td",{className:"text-nowrap"},new O.a(parseInt(n)).getTag()),a.basic.rank_rates.map((function(e,t){return r.a.createElement("td",{key:t},Object(i.c)(e))})),r.a.createElement("td",null,Object(i.c)(a.basic.negative_rate)),r.a.createElement("td",null,Object(i.a)(a.basic.avg_rank)),r.a.createElement("td",null,Object(i.c)(a.extended.\u548c\u724c\u7387)),r.a.createElement("td",null,Object(i.c)(a.extended.\u653e\u94f3\u7387)),r.a.createElement("td",null,Object(i.c)(a.extended.\u526f\u9732\u7387)),r.a.createElement("td",null,Object(i.c)(a.extended.\u7acb\u76f4\u7387)),r.a.createElement("td",null,Object(i.c)(a.extended.\u81ea\u6478\u7387)),r.a.createElement("td",null,Object(i.c)(a.extended.\u6d41\u5c40\u7387)),r.a.createElement("td",null,Object(i.c)(a.extended.\u6d41\u542c\u7387)),r.a.createElement("td",null,a.basic.count),r.a.createElement("td",null,a.num_players))})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-right"},"\u7edf\u8ba1\u534a\u5e84\u6570\uff1a",Math.floor(a.map((function(e){return Object(u.a)(e,2)[1].basic.count})).reduce((function(e,t){return e+t}),0)/4))))}),null)));function y(){return r.a.createElement(l.c,null,x,r.a.createElement(c.a,null,r.a.createElement(l.a,null),r.a.createElement(c.b,null),r.a.createElement(l.e,null)))}}}]);
//# sourceMappingURL=8.7c24522d.chunk.js.map