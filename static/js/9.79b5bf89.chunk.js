(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[9],{151:function(e,t,c){"use strict";c.d(t,"b",(function(){return o})),c.d(t,"d",(function(){return b})),c.d(t,"a",(function(){return O})),c.d(t,"e",(function(){return h})),c.d(t,"c",(function(){return x}));var n=c(23),a=c(0),l=c(1),r=c.n(l),s=c(31),i=c(12),d=c(69),j=c(137),o=function(){throw new Error("Not intended for rendering")},b=function(){throw new Error("Not intended for rendering")},u=r.a.createContext([]);function O(e){var t=e.className,c=void 0===t?"":t,n=e.replace,r=void 0!==n&&n,d=e.keepState,o=void 0!==d&&d,b=Object(j.a)("navButtons").t,O=Object(l.useContext)(u),h=(Object(i.k)()||{url:""}).url.replace(/\/+$/,"");return Object(a.jsx)("nav",{className:"nav nav-pills mb-3 ".concat(c),children:O.filter((function(e){return!e.disabled})).map((function(e){return Object(a.jsx)(s.c,{to:function(t){return{pathname:"".concat(h,"/").concat(e.path),state:o?t.state:void 0}},replace:r,exact:!!e.exact,className:"nav-link",activeClassName:"active",children:b(e.title)},e.path)}))})}function h(e){var t=e.defaultRenderDirectly,c=void 0!==t&&t,r=e.mutateTitle,s=void 0===r||r,o=e.children,b=Object(j.a)("navButtons").t,O=Object(l.useContext)(u),h=Object(i.k)()||{url:""},x=Object(i.i)(),p=h.url.replace(/\/+$/,"");return Object(a.jsxs)(i.d,{children:[O.filter((function(e){return!e.disabled})).map((function(e){return Object(a.jsxs)(i.b,{exact:e.exact,path:"".concat(p,"/").concat(e.path),children:[s&&Object(a.jsx)(d.Helmet,{children:Object(a.jsx)("title",{children:b(e.title)})}),e.children]},e.path)})),Object(a.jsx)(i.b,{children:c?O[0].children:Object(a.jsx)(i.a,{to:Object(n.a)(Object(n.a)({},x),{},{pathname:"".concat(p,"/").concat(O[0].path)}),push:!1})}),o]})}function x(e){var t=e.children;return Object(a.jsx)(u.Provider,{value:t[0].props.children.map((function(e){return e.props})),children:t.slice(1)})}},485:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return Y}));var n,a=c(11),l=c(0),r=c(1),s=c.n(r),i=c(38),d=c(69),j=c(70),o=c(13),b=c(6),u=c(26),O=c(90),h=c(32),x=c(48),p=c(9),m=c.n(p),f=c(86),v=c(8);!function(e){e.All="\u5168\u90e8",e.Last4Weeks="\u6700\u8fd1\u56db\u5468",e.Custom="\u81ea\u5b9a\u4e49"}(n||(n={}));var y=Object.keys(n).map((function(e){return{key:n[e],label:n[e],value:n[e]}})),g=[{key:"All",label:"\u5168\u90e8",value:"\u5168\u90e8"}].concat(v.b.rankColors.map((function(e,t){return{key:(t+1).toString(),label:Object(b.getRankLabelByIndex)(t),value:(t+1).toString()}})));function N(e){var t=e.showLevel,c=void 0!==t&&t,s=e.availableModes,i=void 0===s?[]:s,d=Object(h.c)(),j=Object(a.a)(d,2),o=j[0],b=j[1],u=Object(r.useState)((function(){return"player"!==o.type?n.All:o.startDate?n.Custom:n.All})),p=Object(a.a)(u,2),N=p[0],k=p[1],M=Object(r.useState)((function(){return"player"===o.type&&o.startDate?o.startDate:v.b.dateMin})),I=Object(a.a)(M,2),w=I[0],S=I[1],P=Object(r.useState)((function(){return"player"===o.type&&o.endDate?o.endDate:m()()})),D=Object(a.a)(P,2),L=D[0],C=D[1];Object(r.useEffect)((function(){if("player"===o.type)switch(N){case n.All:b({type:"player",playerId:o.playerId,startDate:null,endDate:null});break;case n.Last4Weeks:b({type:"player",playerId:o.playerId,startDate:m()().subtract(27,"day"),endDate:null});break;case n.Custom:if(m()(L).isBefore(w))return void C(m()().endOf("day"));b({type:"player",playerId:o.playerId,startDate:w,endDate:L})}}),[o,N,w,L,b]);var A=Object(r.useCallback)((function(e){e.length&&"player"===o.type&&function(e,t,c){try{localStorage.setItem("".concat(e).concat(v.b.canonicalDomain).concat(t),JSON.stringify(c))}catch(n){}}("modePreference",o.playerId,e),b({type:"player",selectedModes:e})}),[o,b]),F=Object(r.useCallback)((function(e){return b({type:"player",searchText:e.currentTarget.value})}),[b]),G=Object(r.useCallback)((function(e){return b({type:"player",rank:parseInt(e)||null})}),[b]);return"player"!==o.type?null:Object(l.jsxs)("div",{className:"player-details-settings",children:[Object(l.jsxs)("div",{className:"setting",children:[Object(l.jsx)(O.a,{title:"\u65f6\u95f4",inline:!0,children:Object(l.jsx)(x.a,{type:"radio",selectedItems:[N],items:y,groupKey:"PlayerDetailsDateRangeSelector",onChange:function(e){return k(e[0].value)}})}),N===n.Custom?Object(l.jsx)("div",{className:"custom-period",children:Object(l.jsxs)(O.a,{inline:!0,children:[Object(l.jsx)(x.b,{min:v.b.dateMin,onChange:S,date:w,className:"form-control"}),Object(l.jsx)(x.b,{min:v.b.dateMin,onChange:C,date:L,className:"form-control"})]})}):null]}),c&&i.length>0&&Object(l.jsx)("div",{className:"setting",children:Object(l.jsx)(O.a,{title:"\u7b49\u7ea7",inline:!0,children:Object(l.jsx)(f.a,{type:"checkbox",mode:o.selectedModes,onChange:A,availableModes:i})})}),Object(l.jsx)("div",{className:"setting",children:Object(l.jsx)(O.a,{title:"\u987a\u4f4d",inline:!0,children:Object(l.jsx)(x.a,{type:"radio",selectedItems:[(o.rank||"All").toString()],items:g,groupKey:"PlayerDetailsRankSelector",onChange:function(e){return G(e[0].key)}})})}),o.searchText?Object(l.jsx)("div",{className:"setting",children:Object(l.jsx)(O.a,{title:"\u67e5\u627e\u73a9\u5bb6",children:Object(l.jsx)("input",{type:"text",className:"form-control",value:o.searchText,onChange:F})})}):null]})}var k=c(137);function M(e){var t=e.label,c=e.description,n=e.className,a=void 0===n?"":n,r=e.i18nNamespace,s=e.children,i=Object(k.a)(r).t;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("dt",{className:"text-nowrap ".concat(a),children:i(t)}),Object(l.jsx)("dd",{className:"text-right ".concat(a),"data-tip":c?i(c):"","data-html":"true",children:s})]})}var I=[b.GameMode.\u7389,b.GameMode.\u738b\u5ea7,b.GameMode.\u4e09\u7389,b.GameMode.\u4e09\u738b\u5ea7,b.GameMode.\u738b\u5ea7\u4e1c,b.GameMode.\u7389\u4e1c,b.GameMode.\u4e09\u738b\u5ea7\u4e1c,b.GameMode.\u4e09\u7389\u4e1c];function w(e){var t=e.metadata,c=Object(h.c)(),n=Object(a.a)(c,1)[0],r=Object(k.a)().t;if(!v.b.features.estimatedStableLevel)return null;var s=b.LevelWithDelta.getAdjustedLevel(t.level);if(!("selectedModes"in n)||1!==n.selectedModes.length)return null;var i=n.selectedModes[0];if(!I.includes(i))return null;var d=t.count<100,j=b.PlayerMetadata.calculateExpectedGamePoint(t,i),u=null;if(s.getMaxPoint()&&s.isAllowedMode(i)){var O=s.isSame(new b.Level(t.level.id))?t.level.score+t.level.delta:s.getStartingPoint();u=j>0?(s.getMaxPoint()-O)/j:O/j}var x=u?r("\uff0c\u62ec\u53f7\u5185\u4e3a\u9884\u8ba1{{ label }}\u6bb5\u573a\u6570",{label:r(u>0?"\u5347":"\u964d")}):"",p=b.PlayerMetadata.getStableLevelComponents(t,i),m="\u4e00\u4e8c\u4e09\u56db".slice(0,p.length),f=Object(b.modeLabel)(i);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{label:"\u5b89\u5b9a\u6bb5\u4f4d",description:"".concat(r("\u5728{{ modeL }}\u4e4b\u95f4\u4e00\u76f4\u8fdb\u884c\u5bf9\u5c40\uff0c\u9884\u6d4b\u6700\u7ec8\u80fd\u8fbe\u5230\u7684\u6bb5\u4f4d\u3002",{modeL:f})).concat(3===m.length?r("\u62ec\u53f7\u5185\u4e3a\u5b89\u5b9a\u6bb5\u4f4d\u65f6\u7684\u5206\u6570\u671f\u671b\u3002"):"").concat(d?r("\uff08\u6570\u636e\u91cf\u4e0d\u8db3\uff0c\u8ba1\u7b97\u7ed3\u679c\u53ef\u80fd\u6709\u8f83\u5927\u504f\u5dee\uff09"):"","<br/>").concat(r("{{ levelNames1 }}\u4f4d\u5e73\u5747 Pt / {{ levelName2 }}\u4f4d\u5e73\u5747\u5f97\u70b9 Pt\uff1a",{levelNames1:m.slice(0,m.length-1),levelName2:m[m.length-1]}),"[").concat(p.map((function(e){return e.toFixed(2)})).join("/"),"]<br/>").concat(r("\u5f97\u70b9\u6548\u7387\uff08\u5404\u987a\u4f4d\u5e73\u5747 Pt \u53ca\u5e73\u5747\u5f97\u70b9 Pt \u7684\u52a0\u6743\u5e73\u5747\u503c\uff09\uff1a")).concat(Object(o.a)(b.PlayerMetadata.calculateExpectedGamePoint(t,i,void 0,!1))),className:d?"font-italic font-lighter text-muted":"",children:Object(l.jsxs)("span",{children:[b.PlayerMetadata.estimateStableLevel2(t,i),d&&"?"]})}),Object(l.jsx)(M,{label:"\u5206\u6570\u671f\u671b",description:"".concat(r("\u5728{{ modeL }}\u4e4b\u95f4\u6bcf\u5c40\u83b7\u5f97\u70b9\u6570\u7684\u6570\u5b66\u671f\u671b\u503c{{ changeLevelMsg }}",{changeLevelMsg:x,modeL:f})).concat(d?r("\uff08\u6570\u636e\u91cf\u4e0d\u8db3\uff0c\u8ba1\u7b97\u7ed3\u679c\u53ef\u80fd\u6709\u8f83\u5927\u504f\u5dee\uff09"):""),className:d?"font-italic font-lighter text-muted":"",children:Object(l.jsxs)("span",{children:[j.toFixed(1),u?" (".concat(Math.abs(u).toFixed(0),")"):"",d&&"?"]})})]})}var S=c(55),P=c(151),D=c(12),L=c(63),C=c(31),A=c(47),F=c(97);function G(e){var t=e.numGames,c=void 0===t?100:t,n=e.numDisplay,i=void 0===n?10:n,d=e.currentAccountId,O=void 0===d?0:d,x=Object(k.a)().t,p=Object(j.c)(),m=Object(h.c)(),f=Object(a.a)(m,2)[1],v=p.getCount(),y=Math.min(v,c),g=Object(r.useMemo)((function(){if(v<=0)return null;for(var e={},t=0;t<y;t++){var c=p.getItem(t);if(!("uuid"in c))return null;var n=c.players.find((function(e){return e.accountId===O}));if(!n)throw new Error("Can't find current player, shouldn't happen");var a,l=Object(L.a)(c.players);try{for(l.s();!(a=l.n()).done;){var r=a.value;if(r.accountId!==O){e[r.accountId]||(e[r.accountId]={player:r,count:0,resultSelf:new Array(c.players.length).fill(0),resultOpponent:new Array(c.players.length).fill(0),pointSelf:0,pointOpponent:0,win:0});var s=e[r.accountId];s.count++;var i=b.GameRecord.getRankIndexByPlayer(c,O),d=b.GameRecord.getRankIndexByPlayer(c,r);s.resultSelf[i]++,s.resultOpponent[d]++,i<d&&s.win++,s.pointSelf+=Object(b.calculateDeltaPoint)(n.score,i,c.modeId,new b.Level(n.level),!0,!0),s.pointOpponent+=Object(b.calculateDeltaPoint)(r.score,d,c.modeId,new b.Level(r.level),!0,!0)}}}catch(o){l.e(o)}finally{l.f()}}var j=Object.values(e);return j.sort((function(e,t){return t.count-e.count})),j}),[v,p,y,O]);return v<=0?null:g?Object(l.jsx)("dl",{className:"row",children:g.slice(0,i).map((function(e){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsxs)("div",{style:{display:"none"},id:"smr-statistic-tip-".concat(O,"-").concat(e.player.accountId),children:[Object(l.jsxs)("p",{className:"mt-2",children:[x("\u80dc\u7387\uff1a"),Object(o.c)(e.win/e.count)]}),Object(l.jsxs)("table",{className:"table table-dark mb-1 text-nowrap table-sm text-right",style:{display:"inline-table",backgroundColor:"transparent"},children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),Object(l.jsx)("th",{children:x("\u73a9\u5bb6")}),Object(l.jsx)("th",{children:x("\u5bf9\u624b")})]})}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-left",children:x("\u5e73\u5747\u987a\u4f4d")}),Object(l.jsx)("td",{children:Object(o.a)(b.RankRates.getAvg(e.resultSelf))}),Object(l.jsx)("td",{children:Object(o.a)(b.RankRates.getAvg(e.resultOpponent))})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-left",children:x("\u5e73\u5747\u5f97\u70b9")}),Object(l.jsx)("td",{children:Object(o.a)(e.pointSelf/e.count)}),Object(l.jsx)("td",{children:Object(o.a)(e.pointOpponent/e.count)})]}),["\u4e00","\u4e8c","\u4e09","\u56db"].slice(0,e.resultSelf.length).map((function(t,c){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-left",children:x(t+"\u4f4d")}),Object(l.jsxs)("td",{children:[Object(o.c)(e.resultSelf[c]/e.count)," (",e.resultSelf[c],")"]}),Object(l.jsxs)("td",{children:[Object(o.c)(e.resultOpponent[c]/e.count)," (",e.resultOpponent[c],")"]})]},c)}))]})]})]}),Object(l.jsxs)("dt",{className:"col-8 col-lg-4 font-weight-normal",children:[Object(l.jsx)(C.b,{to:Object(A.generatePlayerPathById)(e.player.accountId),children:e.player.nickname}),Object(l.jsx)("button",{className:"button-link ml-2",onClick:function(){return f({type:"player",searchText:e.player.nickname})},children:Object(l.jsx)(F.a,{})})]}),Object(l.jsx)("dd",{className:"col-4 col-lg-2 text-right",children:Object(l.jsxs)("span",{"data-tip":"##smr-statistic-tip-".concat(O,"-").concat(e.player.accountId),"data-html":!0,"data-place":Object(o.d)()?"left":"top",children:[" ",Object(o.c)(e.count/y)," (",e.count,")"]})})]},e.player.accountId)}))}):Object(l.jsx)(u.a,{})}function R(e){var t=e.numDisplay,c=void 0===t?10:t,n=e.currentAccountId,a=void 0===n?0:n;return Object(l.jsxs)(P.c,{children:[Object(l.jsxs)(P.d,{children:[Object(l.jsx)(P.b,{path:"latest",title:"\u6700\u8fd1 100 \u5c40",children:Object(l.jsx)(G,{currentAccountId:a,numDisplay:c})}),Object(l.jsx)(P.b,{path:"all",title:"\u5168\u90e8",children:Object(l.jsx)(G,{currentAccountId:a,numDisplay:c,numGames:2147483647})})]}),Object(l.jsx)(P.a,{className:"mt-n3"}),Object(l.jsx)(P.e,{mutateTitle:!1})]})}var _=Object(i.a)({loader:function(){return Promise.all([c.e(0),c.e(10)]).then(c.bind(null,481))},loading:function(){return Object(l.jsx)(u.a,{})}}),E=Object(i.a)({loader:function(){return Promise.all([c.e(0),c.e(11)]).then(c.bind(null,482))},loading:function(){return Object(l.jsx)(u.a,{})}}),T=Object(i.a)({loader:function(){return Promise.all([c.e(0),c.e(8)]).then(c.bind(null,483))},loading:function(){return Object(l.jsx)(u.a,{})}}),B=c.e(12).then(c.bind(null,484)),W=Object(i.a)({loader:function(){return B},loading:function(){return null}});function J(e){var t=e.metadata,c=e.view,n=Object(o.h)(t.extended_stats);if(Object(r.useEffect)(o.g,[!!n]),!n)return null;var a=c;return Object(l.jsx)(a,{stats:n,metadata:t})}function H(e){var t=e.stats;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{label:"\u548c\u724c\u7387",description:"\u548c\u724c\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(o.c)(t.\u548c\u724c\u7387||0)}),Object(l.jsx)(M,{label:"\u653e\u94f3\u7387",description:"\u653e\u94f3\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(o.c)(t.\u653e\u94f3\u7387||0)}),Object(l.jsx)(M,{label:"\u81ea\u6478\u7387",description:"\u81ea\u6478\u5c40\u6570 / \u548c\u724c\u5c40\u6570",children:Object(o.c)(t.\u81ea\u6478\u7387||0)}),Object(l.jsx)(M,{label:"\u9ed8\u80e1\u7387",description:"\u95e8\u6e05\u9ed8\u542c\u548c\u724c\u5c40\u6570 / \u548c\u724c\u5c40\u6570",children:Object(o.c)(t.\u9ed8\u542c\u7387||0)}),Object(l.jsx)(M,{label:"\u6d41\u5c40\u7387",description:"\u6d41\u5c40\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(o.c)(t.\u6d41\u5c40\u7387||0)}),Object(l.jsx)(M,{label:"\u6d41\u542c\u7387",description:"\u6d41\u5c40\u542c\u724c\u5c40\u6570 / \u6d41\u5c40\u5c40\u6570",children:Object(o.c)(t.\u6d41\u542c\u7387||0)}),Object(l.jsx)(M,{label:"\u526f\u9732\u7387",description:"\u526f\u9732\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(o.c)(t.\u526f\u9732\u7387||0)}),Object(l.jsx)(M,{label:"\u7acb\u76f4\u7387",description:"\u7acb\u76f4\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(o.c)(t.\u7acb\u76f4\u7387||0)}),Object(l.jsx)(M,{label:"\u548c\u4e86\u5de1\u6570",children:(t.\u548c\u4e86\u5de1\u6570||0).toFixed(3)}),Object(l.jsx)(M,{label:"\u5e73\u5747\u6253\u70b9",children:t.\u5e73\u5747\u6253\u70b9||0}),Object(l.jsx)(M,{label:"\u5e73\u5747\u94f3\u70b9",children:t.\u5e73\u5747\u94f3\u70b9||0})]})}function K(e){var t=new S.a(e.id);return e.score+e.delta<t.getStartingPoint()?{id:e.id,score:t.getStartingPoint(),delta:0}:e}function $(e){var t,c,n=e.stats,a=e.metadata;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{label:"\u6700\u9ad8\u7b49\u7ea7",children:b.LevelWithDelta.getTag((null===(t=a.cross_stats)||void 0===t?void 0:t.max_level)||a.max_level)}),Object(l.jsx)(M,{label:"\u6700\u9ad8\u5206\u6570",className:"no-width",children:b.LevelWithDelta.formatAdjustedScore(K((null===(c=a.cross_stats)||void 0===c?void 0:c.max_level)||a.max_level))}),Object(l.jsx)(M,{label:"\u6700\u5927\u8fde\u5e84",children:n.\u6700\u5927\u8fde\u5e84||0}),Object(l.jsx)(M,{label:"\u91cc\u5b9d\u7387",description:"\u4e2d\u91cc\u5b9d\u5c40\u6570 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570",children:Object(o.c)(n.\u91cc\u5b9d\u7387||0)}),Object(l.jsx)(M,{label:"\u88ab\u70b8\u7387",description:"\u88ab\u70b8\u5e84\uff08\u6ee1\u8d2f\u6216\u4ee5\u4e0a\uff09\u6b21\u6570 / \u88ab\u81ea\u6478\u6b21\u6570",children:Object(o.c)(n.\u88ab\u70b8\u7387||0)}),Object(l.jsx)(M,{label:"\u5e73\u5747\u88ab\u70b8\u70b9\u6570",description:"\u88ab\u70b8\u5e84\uff08\u6ee1\u8d2f\u6216\u4ee5\u4e0a\uff09\u70b9\u6570 / \u6b21\u6570",children:n.\u5e73\u5747\u88ab\u70b8\u70b9\u6570||0}),Object(l.jsx)(M,{label:"\u653e\u94f3\u65f6\u7acb\u76f4\u7387",description:"\u653e\u94f3\u65f6\u7acb\u76f4\u6b21\u6570 / \u653e\u94f3\u6b21\u6570",children:Object(o.c)(n.\u653e\u94f3\u65f6\u7acb\u76f4\u7387||0)}),Object(l.jsx)(M,{label:"\u653e\u94f3\u65f6\u526f\u9732\u7387",description:"\u653e\u94f3\u65f6\u526f\u9732\u6b21\u6570 / \u653e\u94f3\u6b21\u6570",children:Object(o.c)(n.\u653e\u94f3\u65f6\u526f\u9732\u7387||0)}),Object(l.jsx)(M,{label:"\u526f\u9732\u540e\u653e\u94f3\u7387",description:"\u653e\u94f3\u65f6\u526f\u9732\u6b21\u6570 / \u526f\u9732\u6b21\u6570",className:"no-width",children:Object(o.c)(n.\u526f\u9732\u540e\u653e\u94f3\u7387||0)}),Object(l.jsx)(M,{label:"\u526f\u9732\u540e\u548c\u724c\u7387",description:"\u526f\u9732\u540e\u548c\u724c\u6b21\u6570 / \u526f\u9732\u6b21\u6570",children:Object(o.c)(n.\u526f\u9732\u540e\u548c\u724c\u7387||0)}),Object(l.jsx)(M,{label:"\u526f\u9732\u540e\u6d41\u5c40\u7387",description:"\u526f\u9732\u540e\u6d41\u5c40\u6b21\u6570 / \u526f\u9732\u6b21\u6570",children:Object(o.c)(n.\u526f\u9732\u540e\u6d41\u5c40\u7387||0)}),Object(l.jsx)(M,{label:"\u603b\u8ba1\u5c40\u6570",children:n.count})]})}function q(e){var t=e.stats;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{label:"\u7acb\u76f4\u7387",description:"\u7acb\u76f4\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(o.c)(t.\u7acb\u76f4\u7387||0)}),Object(l.jsx)(M,{label:"\u7acb\u76f4\u548c\u4e86",description:"\u7acb\u76f4\u548c\u4e86\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570",children:Object(o.c)(t.\u7acb\u76f4\u540e\u548c\u724c\u7387||0)}),Object(l.jsx)(M,{label:"\u7acb\u76f4\u653e\u94f3",description:"\u7acb\u76f4\u653e\u94f3\u5c40\u6570\uff08\u542b\u7acb\u76f4\u77ac\u95f4 / \u4e0d\u542b\u7acb\u76f4\u77ac\u95f4\uff09 / \u7acb\u76f4\u5c40\u6570",children:Object(l.jsxs)(l.Fragment,{children:[Object(o.c)(t.\u7acb\u76f4\u540e\u653e\u94f3\u7387||0),Object(l.jsx)("br",{}),Object(o.c)(t.\u7acb\u76f4\u540e\u975e\u77ac\u95f4\u653e\u94f3\u7387||0)]})}),Object(l.jsx)(M,{label:"\u7acb\u76f4\u6536\u652f",description:"\u7acb\u76f4\u603b\u6536\u652f\uff08\u542b\u4f9b\u6258\uff09 / \u7acb\u76f4\u5c40\u6570",children:t.\u7acb\u76f4\u6536\u652f||0}),Object(l.jsx)(M,{label:"\u7acb\u76f4\u6536\u5165",description:"\u7acb\u76f4\u548c\u4e86\u6536\u5165\uff08\u542b\u4f9b\u6258\uff09 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570",children:t.\u7acb\u76f4\u6536\u5165||0}),Object(l.jsx)(M,{label:"\u7acb\u76f4\u652f\u51fa",description:"\u7acb\u76f4\u653e\u94f3\u652f\u51fa\uff08\u542b\u7acb\u76f4\u68d2\uff09 / \u7acb\u76f4\u653e\u94f3\u5c40\u6570",children:t.\u7acb\u76f4\u652f\u51fa||0}),Object(l.jsx)(M,{label:"\u5148\u5236\u7387",description:"\u5148\u5236\u7acb\u76f4\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570",children:Object(o.c)(t.\u5148\u5236\u7387||0)}),Object(l.jsx)(M,{label:"\u8ffd\u7acb\u7387",description:"\u8ffd\u7acb\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570",children:Object(o.c)(t.\u8ffd\u7acb\u7387||0)}),Object(l.jsx)(M,{label:"\u88ab\u8ffd\u7387",description:"\u88ab\u8ffd\u7acb\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570",children:Object(o.c)(t.\u88ab\u8ffd\u7387||0)}),Object(l.jsx)(M,{label:"\u7acb\u76f4\u5de1\u76ee",children:Object(o.a)(t.\u7acb\u76f4\u5de1\u76ee||0)}),Object(l.jsx)(M,{label:"\u7acb\u76f4\u6d41\u5c40",description:"\u7acb\u76f4\u6d41\u5c40\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570",children:Object(o.c)(t.\u7acb\u76f4\u540e\u6d41\u5c40\u7387||0)}),Object(l.jsx)(M,{label:"\u4e00\u53d1\u7387",description:"\u4e00\u53d1\u5c40\u6570 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570",children:Object(o.c)(t.\u4e00\u53d1\u7387||0)}),Object(l.jsx)(M,{label:"\u632f\u542c\u7387",description:"\u632f\u542c\u7acb\u76f4\u5c40\u6570\uff08\u4e0d\u542b\u7acb\u76f4\u89c1\u9003\uff09 / \u7acb\u76f4\u5c40\u6570",children:Object(o.c)(t.\u632f\u542c\u7acb\u76f4\u7387||0)})]})}function z(e){var t,c,n=e.metadata;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{label:"\u8bb0\u5f55\u573a\u6570",children:n.count}),Object(l.jsx)(M,{label:"\u8bb0\u5f55\u7b49\u7ea7",children:b.LevelWithDelta.getTag((null===(t=n.cross_stats)||void 0===t?void 0:t.level)||n.level)}),Object(l.jsx)(M,{label:"\u8bb0\u5f55\u5206\u6570",children:b.LevelWithDelta.formatAdjustedScore((null===(c=n.cross_stats)||void 0===c?void 0:c.level)||n.level)}),Object(l.jsx)(J,{metadata:n,view:H}),Object(l.jsx)(M,{label:"\u5e73\u5747\u987a\u4f4d",children:n.avg_rank.toFixed(3)}),Object(l.jsx)(M,{label:"\u88ab\u98de\u7387",children:Object(o.c)(n.negative_rate)}),Object(l.jsx)(w,{metadata:n})]})}function Q(e){var t=e.stats;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{label:"\u5f79\u6ee1",description:"\u548c\u51fa\u5f79\u6ee1\u6b21\u6570",children:t.\u5f79\u6ee1||0}),Object(l.jsx)(M,{label:"\u7d2f\u8ba1\u5f79\u6ee1",description:"\u548c\u51fa\u7d2f\u8ba1\u5f79\u6ee1\u6b21\u6570",children:t.\u7d2f\u8ba1\u5f79\u6ee1||0}),Object(l.jsx)(M,{label:"\u6700\u5927\u7d2f\u8ba1\u756a\u6570",description:"\u548c\u51fa\u7684\u6700\u5927\u756a\u6570\uff08\u4e0d\u542b\u5f79\u6ee1\u5f79\uff09",children:t.\u6700\u5927\u7d2f\u8ba1\u756a\u6570||0}),Object(l.jsx)(M,{label:"\u6d41\u6ee1",description:"\u6d41\u6ee1\u6b21\u6570",children:t.\u6d41\u6ee1||0}),Object(l.jsx)(M,{label:"\u4e24\u7acb\u76f4",description:"\u4e24\u7acb\u76f4\u6b21\u6570",children:t.W\u7acb\u76f4||0}),Object(l.jsx)(M,{label:"\u5e73\u5747\u8d77\u624b\u5411\u542c",children:Object(o.a)(t.\u5e73\u5747\u8d77\u624b\u5411\u542c)})]})}function U(e){var t=e.stats,c=e.metadata,n=Object(k.a)().t;return t.\u6700\u8fd1\u5927\u94f3?Object(l.jsxs)("div",{children:[Object(l.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",className:"d-flex justify-content-between font-weight-bold",href:b.GameRecord.getRecordLink(t.\u6700\u8fd1\u5927\u94f3.id,c.id),children:[Object(l.jsx)("span",{children:b.FanStatEntryList.formatFanSummary(t.\u6700\u8fd1\u5927\u94f3.fans)}),Object(l.jsx)("span",{children:b.GameRecord.formatFullStartTime(t.\u6700\u8fd1\u5927\u94f3.start_time)})]}),Object(l.jsx)("dl",{className:"stats-list mt-2",children:t.\u6700\u8fd1\u5927\u94f3.fans.map((function(e){return Object(l.jsx)(M,{label:e.label,children:b.FanStatEntry2.formatFan(e)},e.label)}))})]}):Object(l.jsx)("p",{className:"text-center",children:n("\u65e0\u8d85\u8fc7\u6ee1\u8d2f\u5927\u94f3")})}function V(e){var t=e.metadata,c=Object(D.i)();return Object(r.useEffect)((function(){B.then((function(e){return e.default.rebuild()}))}),[c.pathname]),Object(l.jsxs)(P.c,{children:[Object(l.jsxs)(P.d,{children:[Object(l.jsx)(P.b,{path:"",exact:!0,title:"\u57fa\u672c",children:Object(l.jsx)("dl",{className:"stats-list",children:Object(l.jsx)(z,{metadata:t})})}),Object(l.jsx)(P.b,{path:"riichi",title:"\u7acb\u76f4",children:Object(l.jsx)("dl",{className:"stats-list",children:Object(l.jsx)(J,{metadata:t,view:q})})}),Object(l.jsx)(P.b,{path:"extended",title:"\u66f4\u591a",children:Object(l.jsx)("dl",{className:"stats-list",children:Object(l.jsx)(J,{metadata:t,view:$})})}),Object(l.jsx)(P.b,{path:"win-lose",title:"\u548c\u94f3\u5206\u5e03",children:Object(l.jsx)(J,{metadata:t,view:T})}),Object(l.jsx)(P.b,{path:"luck",title:"\u8840\u7edf",children:Object(l.jsx)("dl",{className:"stats-list",children:Object(l.jsx)(J,{metadata:t,view:Q})})}),Object(l.jsx)(P.b,{path:"largest-lost",title:"\u6700\u8fd1\u5927\u94f3",children:Object(l.jsx)(J,{metadata:t,view:U})}),Object(l.jsx)(P.b,{path:"same-match",title:"\u6700\u5e38\u540c\u684c",children:Object(l.jsx)(R,{currentAccountId:t.id})})]}),Object(l.jsx)(P.a,{className:"mt-3",replace:!0,keepState:!0}),Object(l.jsx)(P.e,{mutateTitle:!1})]})}function X(e){var t;return e&&e.indexOf&&0===e.indexOf("##")&&(null===(t=document.getElementById(e.slice(2)))||void 0===t?void 0:t.innerHTML)||e}function Y(){var e=Object(k.a)().t,t=Object(j.c)(),c=t.getMetadata(),n=Object(h.c)(),s=Object(a.a)(n,2),i=s[0],b=s[1],O=Object(r.useMemo)((function(){var e;return(null===c||void 0===c||null===(e=c.cross_stats)||void 0===e?void 0:e.played_modes)||[]}),[c]);Object(r.useEffect)((function(){if(!("player"!==i.type||v.b.availableModes.length<2)){if(!i.selectedModes.length){var e=function(e,t,c){try{var n;return null!==(n=JSON.parse(localStorage.getItem("".concat(e).concat(v.b.canonicalDomain).concat(t))||""))&&void 0!==n?n:c}catch(a){return c}}("modePreference",i.playerId,[]);if(e&&e.length)return void b({type:"player",playerId:i.playerId,selectedModes:e})}if(O.length){var t=i.selectedModes.filter((function(e){return O.includes(e)}));t.length||t.push(v.b.modePreference.find((function(e){return O.includes(e)}))||O[0]),(t.length!==i.selectedModes.length||t.some((function(e){return!i.selectedModes.includes(e)})))&&b({type:"player",playerId:i.playerId,selectedModes:t})}}}),[O,i,b]),Object(r.useEffect)((function(){B.then((function(e){return e.default.rebuild()}))})),Object(r.useEffect)(o.g,[!!c]);var x=c&&c.nickname;return Object(l.jsxs)("div",{children:[x?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d.Helmet,{children:Object(l.jsx)("title",{children:null===c||void 0===c?void 0:c.nickname})}),Object(l.jsxs)("h2",{className:"text-center",children:[e("\u73a9\u5bb6\uff1a"),null===c||void 0===c?void 0:c.nickname]}),Object(l.jsxs)("div",{className:"row mt-4",children:[Object(l.jsxs)("div",{className:"col-md-8",children:[Object(l.jsx)("h3",{className:"text-center mb-4",children:e("\u6700\u8fd1\u8d70\u52bf")}),Object(l.jsx)(E,{dataAdapter:t,playerId:c.id,aspect:6}),Object(l.jsx)(V,{metadata:c})]}),Object(l.jsxs)("div",{className:"col-md-4",children:[Object(l.jsx)("h3",{className:"text-center mb-4",children:e("\u7d2f\u8ba1\u6218\u7ee9")}),Object(l.jsx)(_,{metadata:c})]})]})]}):Object(l.jsx)(u.a,{}),Object(l.jsx)(N,{showLevel:!0,availableModes:O}),Object(l.jsx)(W,{effect:"solid",multiline:!0,place:"top",getContent:X,className:"stat-tooltip"})]})}}}]);
//# sourceMappingURL=9.79b5bf89.chunk.js.map