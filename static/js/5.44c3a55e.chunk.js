(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[5],{166:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return d}));var c=n(11),r=n(23),a=n(0),i=n(1),s={selectedModes:[]},l=n.n(i).a.createContext([Object(r.a)({},s),function(){}]),o=function(){return Object(i.useContext)(l)};function d(e){var t=e.children,n=Object(i.useReducer)((function(e,t){return Object(r.a)(Object(r.a)({},e),t)}),null,(function(){return Object(r.a)({},s)})),o=Object(c.a)(n,2),d=o[0],u=o[1],j=Object(i.useMemo)((function(){return[d,u]}),[d,u]);return Object(a.jsx)(l.Provider,{value:j,children:t})}},178:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return O})),n.d(t,"c",(function(){return f}));var c=n(23),r=n(0),a=n(1),i=n.n(a),s=n(31),l=n(12),o=n(69),d=n(112),u=function(){throw new Error("Not intended for rendering")},j=function(){throw new Error("Not intended for rendering")},b=i.a.createContext([]);function h(e){var t=e.className,n=void 0===t?"":t,i=e.replace,o=void 0!==i&&i,u=e.keepState,j=void 0!==u&&u,h=e.withQueryString,O=void 0!==h&&h,f=Object(d.a)("navButtons").t,x=Object(a.useContext)(b),v=(Object(l.k)()||{url:""}).url.replace(/\/+$/,"");return Object(r.jsx)("nav",{className:"nav nav-pills mb-3 ".concat(n),children:x.filter((function(e){return!e.disabled})).map((function(e){return Object(r.jsx)(s.c,{to:function(t){return Object(c.a)({pathname:"".concat(v,"/").concat(e.path),state:j?t.state:void 0},O&&t.search?{search:t.search}:{})},replace:o,exact:!!e.exact,className:"nav-link",activeClassName:"active",children:f(e.title)},e.path)}))})}function O(e){var t=e.defaultRenderDirectly,n=void 0!==t&&t,i=e.mutateTitle,s=void 0===i||i,u=e.children,j=Object(d.a)("navButtons").t,h=Object(a.useContext)(b),O=Object(l.k)()||{url:""},f=Object(l.i)(),x=O.url.replace(/\/+$/,"");return Object(r.jsxs)(l.d,{children:[h.filter((function(e){return!e.disabled})).map((function(e){return Object(r.jsxs)(l.b,{exact:e.exact,path:"".concat(x,"/").concat(e.path),children:[s&&Object(r.jsx)(o.Helmet,{children:Object(r.jsx)("title",{children:j(e.title)})}),e.children]},e.path)})),Object(r.jsx)(l.b,{children:n?h.filter((function(e){return!e.disabled}))[0].children:Object(r.jsx)(l.a,{to:Object(c.a)(Object(c.a)({},f),{},{pathname:"".concat(x,"/").concat(h.filter((function(e){return!e.disabled}))[0].path)}),push:!1})}),u]})}function f(e){var t=e.children;return Object(r.jsx)(b.Provider,{value:t[0].props.children.map((function(e){return e.props})),children:t.slice(1)})}},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return c.a})),n.d(t,"c",(function(){return c.b})),n.d(t,"b",(function(){return o}));var c=n(166),r=n(11),a=n(0),i=n(1),s=n(86),l=n(9);function o(e){var t=e.type,n=void 0===t?"radio":t,o=e.availableModes,d=void 0===o?l.b.availableModes:o,u=e.autoSelectFirst,j=void 0!==u&&u,b=e.oneOrAll,h=void 0!==b&&b,O=e.allowedCombinations,f=void 0===O?null:O;f=Object(i.useMemo)((function(){return f||(h?[d]:null)}),[f,h,d]);var x=Object(c.b)(),v=Object(r.a)(x,2),m=v[0],g=v[1],p=Object(i.useCallback)((function(e){if(d.length&&(e=e.filter((function(e){return d.includes(e)}))).length)if("radio"!==n){if(e.length>1&&f)if(!f.some((function(t){return e.length===t.length&&e.every((function(e){return t.includes(e)}))}))){var t=f.filter((function(t){return e.every((function(e){return t.includes(e)}))}));if(t.length>0){var c=m.selectedModes.find((function(t){return!e.includes(t)}));if(c){var r=t.filter((function(e){return!e.includes(c)}));if(!r.length)return;t=r}}if(t.length>0)e=t[0];else{var a=e.find((function(e){return!m.selectedModes.includes(e)}));if(!a)return;e=[a]}}e.length===m.selectedModes.length&&e.every((function(e){return m.selectedModes.includes(e)}))||g({selectedModes:e})}else m.selectedModes[0]!==e[0]&&g({selectedModes:[e[0]]})}),[g,d,m,f,n]);return Object(i.useEffect)((function(){if(d.length){var e=(m.selectedModes||[]).filter((function(e){return d.includes(e)}));f&&e.length>1&&!f.some((function(t){return t.length===e.length&&t.every((function(t){return e.includes(t)}))}))&&(e=[]),"radio"===n&&e.length>1&&(e=[e[0]]),e.length?e.length===m.selectedModes.length&&e.every((function(e){return m.selectedModes.includes(e)}))||g({selectedModes:e}):j?g({selectedModes:[d[0]]}):f&&g({selectedModes:f[0]})}}),[j,d,m.selectedModes,f,n,g]),l.b.availableModes.length<2?null:Object(a.jsx)("div",{className:"row mb-3",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)(s.a,{type:n,mode:m.selectedModes,onChange:p,availableModes:d})})})}},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(23),r=n(0),a=n(1),i=n(261),s=["#003f5c","#7a5195","#ef5675","#ffa600"],l=Math.PI/180,o=function(e){var t=e.lineHeight,n=void 0===t?24:t,c=e.innerLabelFontSize,a=void 0===c?"1rem":c;return function(e){var t=e.value;if(!t)return null;var c=t.toString().trim().split("\n"),i=e.viewBox,s=i.cx,o=i.cy,d=i.outerRadius,u=i.startAngle,j=function(e,t,n,c){return{x:e+Math.cos(-l*c)*n,y:t+Math.sin(-l*c)*n}}(s,o,d/2,u+function(e,t){return Math.sign(t-e)*Math.min(Math.abs(t-e),360)}(u,i.endAngle)/2),b=j.x,h=j.y-(c.length-1)*(n/2);return Object(r.jsx)("g",{children:c.map((function(e,t){return Object(r.jsx)("text",{x:b,y:h+t*n,stroke:"#fff",strokeWidth:"0.5",fill:"#fff",fontSize:a,textAnchor:"middle",dominantBaseline:"central",children:e},t)}))})}};function d(e){return e.innerLabel||""}function u(e){return e.outerLabel||""}function j(e){var t=e.items,n=e.innerLabel,l=void 0===n?d:n,j=e.outerLabel,b=void 0===j?u:j,h=e.outerLabelOffset,O=void 0===h?0:h,f=e.innerLabelLineHeight,x=void 0===f?24:f,v=e.startAngle,m=void 0===v?0:v,g=e.colors,p=void 0===g?s:g,M=e.innerLabelFontSize,y=void 0===M?"1rem":M,N=e.aspect,k=void 0===N?1:N,S=Object(a.useMemo)((function(){return Array(t.length).fill(0).map((function(e,t){return Object(r.jsx)(i.a,{fill:p[t%p.length],fillOpacity:1},"cell-".concat(t))}))}),[t.length,p]),w=Object(a.useMemo)((function(){return o({lineHeight:x,innerLabelFontSize:y})}),[x,y]),F=Object(a.useMemo)((function(){var e=function(e){return b(e)};return e.offsetRadius=O,e}),[b,O]);return Object(r.jsx)(i.i,{width:"100%",aspect:k,height:"auto",children:Object(r.jsx)(i.h,{children:Object(r.jsxs)(i.g,{isAnimationActive:!1,data:t,nameKey:"outerLabel",dataKey:"value",label:F,startAngle:m,endAngle:m+360,children:[S,Object(r.jsx)(i.d,Object(c.a)({valueAccessor:l,dataKey:void 0,position:"inside",content:w},{fill:"#fff"}))]})})})}},821:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var c=n(0),r=n(1),a=n(180),i=n(178),s=n(11),l=n(13),o=n(87),d=n(26),u=n(289),j=n(112),b=n(9);function h(e){var t=e.rates,n=e.numGames,a=e.aspect,i=void 0===a?1:a,s=Object(j.a)().t,l=Object(r.useMemo)((function(){return t.map((function(e,t){return{value:e,outerLabel:s("\u4e1c\u5357\u897f\u5317"[t]),innerLabel:"".concat((100*e).toFixed(2),"%\n[").concat(Math.round(e*n),"]")}}))}),[t,n,s]);return Object(c.jsx)(u.a,{aspect:i,items:l})}function O(){var e=Object(j.a)().t,t=Object(l.i)(o.e,[],"getRankRateBySeat"),n=Object(a.c)(),r=Object(s.a)(n,1)[0];if(!t)return Object(c.jsx)(d.a,{});var i=b.b.availableModes.length?r.selectedModes&&r.selectedModes.length&&t[r.selectedModes[0]]:t[0];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.b,{autoSelectFirst:!0}),i?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-lg-6",children:[Object(c.jsx)("h3",{className:"text-center",children:e("\u5750\u5e2d\u5403\u4e00\u7387")}),Object(c.jsx)(h,{rates:i[1],numGames:i.numGames})]}),Object(c.jsxs)("div",{className:"col-lg-6",children:[Object(c.jsx)("h3",{className:"text-center",children:e("\u5750\u5e2d\u5403".concat(i.length>4?"\u56db":"\u4e09","\u7387"))}),Object(c.jsx)(h,{rates:i[i.length-1],numGames:i.numGames})]})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col text-right",children:[e("\u7edf\u8ba1\u534a\u5e84\u6570\uff1a"),i.numGames]})})]}):Object(c.jsx)(c.Fragment,{})]})}var f=n(43),x=n(166),v=n(55),m=["\u7b49\u7ea7"].concat(["\u4e00\u4f4d\u7387","\u4e8c\u4f4d\u7387","\u4e09\u4f4d\u7387","\u56db\u4f4d\u7387"].slice(0,b.b.rankColors.length),["\u88ab\u98de\u7387","\u5e73\u5747\u987a\u4f4d","\u548c\u724c\u7387","\u653e\u94f3\u7387","\u526f\u9732\u7387","\u7acb\u76f4\u7387","\u81ea\u6478\u7387","\u6d41\u5c40\u7387","\u6d41\u542c\u7387","\u5bf9\u6218\u6570","\u5728\u4f4d\u8bb0\u5f55"]);function g(){var e=Object(j.a)().t,t=Object(x.b)(),n=Object(s.a)(t,1)[0],i=Object(r.useMemo)((function(){return Object(f.a)(n.selectedModes).sort((function(e,t){return e-t}))}),[n]),u=Object(l.i)((function(){return i&&i.length?Object(o.d)(i):Promise.resolve(null)}),[i],"getGlobalStatistics_"+i.join(".")),h=Object(r.useMemo)((function(){if(u){var e=u[i.join(".")];if(e){var t=Object.entries(e);if(t)return t.sort((function(e,t){return e[0].localeCompare(t[0])})),t}}}),[u,i]),O=h&&Object.values(h)[0][1].num_players,g=Object(r.useMemo)((function(){return O?m:m.slice(0,m.length-1)}),[O]);return b.b.features.statisticsSubPages.dataByRank?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.b,{type:"checkbox",availableModes:b.b.features.statisticsSubPages.dataByRank,autoSelectFirst:!0}),h?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("table",{className:"table table-responsive-xl table-striped table-sm table-hover text-center",children:[Object(c.jsx)("thead",{className:"vertical-table-header",children:Object(c.jsx)("tr",{children:g.map((function(t){return Object(c.jsx)("th",{children:Object(c.jsx)("div",{children:e(t)})},t)}))})}),Object(c.jsx)("tbody",{children:h.map((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text-nowrap",children:new v.a(parseInt(n)).getTag()}),r.basic.rank_rates.slice(0,b.b.rankColors.length).map((function(e,t){return Object(c.jsx)("td",{children:Object(l.c)(e)},t)})),Object(c.jsx)("td",{children:Object(l.c)(r.basic.negative_rate)}),Object(c.jsx)("td",{children:Object(l.a)(r.basic.avg_rank)}),Object(c.jsx)("td",{children:Object(l.c)(r.extended.\u548c\u724c\u7387)}),Object(c.jsx)("td",{children:Object(l.c)(r.extended.\u653e\u94f3\u7387)}),Object(c.jsx)("td",{children:Object(l.c)(r.extended.\u526f\u9732\u7387)}),Object(c.jsx)("td",{children:Object(l.c)(r.extended.\u7acb\u76f4\u7387)}),Object(c.jsx)("td",{children:Object(l.c)(r.extended.\u81ea\u6478\u7387)}),Object(c.jsx)("td",{children:Object(l.c)(r.extended.\u6d41\u5c40\u7387)}),Object(c.jsx)("td",{children:Object(l.c)(r.extended.\u6d41\u542c\u7387)}),Object(c.jsx)("td",{children:r.basic.count}),O&&Object(c.jsx)("td",{children:r.num_players})]},n)}))})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col text-right",children:[e("\u7edf\u8ba1\u534a\u5e84\u6570\uff1a"),Math.floor(h.map((function(e){return Object(s.a)(e,2)[1].basic.count})).reduce((function(e,t){return e+t}),0)/b.b.rankColors.length)]})})]}):Object(c.jsx)(d.a,{})]}):Object(c.jsx)(c.Fragment,{})}var p=n(23),M=n(5),y=[void 0,function(e,t){return e.count-t.count},function(e,t){return t.count-e.count}];function N(){var e=Object(j.a)().t,t=Object(l.i)(o.c,[],"getFanStats"),n=Object(r.useState)(0),a=Object(s.a)(n,2),i=a[0],u=a[1],h=Object(r.useMemo)((function(){if(t){if(!y[i])return t;for(var e=Object(p.a)({},t),n=0,c=Object.keys(e);n<c.length;n++){var r=c[n];e[r]=Object(p.a)(Object(p.a)({},e[r]),{},{entries:Object(f.a)(e[r].entries).sort(y[i])})}return e}}),[t,i]);return h?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"row",children:Object.entries(h).map((function(e){var t=Object(s.a)(e,2),n=t[0],c=t[1];return[parseInt(n,10),c]})).sort((function(e,t){var n=Object(s.a)(e,1)[0],c=Object(s.a)(t,1)[0];return b.b.availableModes.indexOf(n)-b.b.availableModes.indexOf(c)})).map((function(t){var n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(c.jsxs)("div",{className:"col-xl-4",children:[Object(c.jsx)("h2",{className:"text-center",children:e(Object(M.modeLabelNonTranslated)(r))}),Object(c.jsxs)("p",{className:"text-center",children:[e("\u8bb0\u5f55\u548c\u51fa\u5c40\u6570\uff1a"),a.count]}),Object(c.jsxs)("table",{className:"table table-striped",children:[Object(c.jsx)("thead",{onClick:function(){return u((i+1)%y.length)},className:"cursor-pointer",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:e("\u5f79")}),Object(c.jsx)("th",{className:"text-right",children:e("\u8bb0\u5f55\u6570")}),Object(c.jsx)("th",{className:"text-right",children:e("\u6bd4\u7387")})]})}),Object(c.jsx)("tbody",{children:a.entries.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e(t.label)}),Object(c.jsx)("td",{className:"text-right",children:t.count}),Object(c.jsx)("td",{className:"text-right",children:t.count?t.count/a.count<1e-4?"<0.01%":Object(l.c)(t.count/a.count):""})]},t.label)}))})]})]},r)}))})}):Object(c.jsx)(d.a,{})}var k=Object(c.jsxs)(i.d,{children:[Object(c.jsx)(i.b,{path:"rank-by-seat",title:"\u5750\u5e2d\u987a\u4f4d",disabled:!b.b.features.statisticsSubPages.rankBySeat,children:Object(c.jsx)(O,{})}),Object(c.jsx)(i.b,{path:"data-by-rank",title:"\u7b49\u7ea7\u6570\u636e",disabled:!b.b.features.statisticsSubPages.dataByRank,children:Object(c.jsx)(g,{})}),Object(c.jsx)(i.b,{path:"fan-stats",title:"\u548c\u51fa\u5f79\u79cd\u7edf\u8ba1",disabled:!b.b.features.statisticsSubPages.fanStats,children:Object(c.jsx)(N,{})})]});function S(){return Object(c.jsxs)(i.c,{children:[k,Object(c.jsxs)(a.a,{children:[Object(c.jsx)(i.a,{}),Object(c.jsx)(i.e,{})]})]})}}}]);
//# sourceMappingURL=5.44c3a55e.chunk.js.map