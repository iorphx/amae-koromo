(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[7],{206:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return E}));var n=a(0),l=a.n(n),c=a(22),r=a(6),m=a(87),i=function(){throw new Error("Not intended for rendering")},o=function(){throw new Error("Not intended for rendering")},u=l.a.createContext([]);function s(e){var t=e.className,a=void 0===t?"":t,m=Object(n.useContext)(u),i=Object(r.j)()||{url:""};return l.a.createElement("nav",{className:"nav nav-pills mb-3 ".concat(a)},m.map((function(e){return l.a.createElement(c.c,{key:e.path,to:"".concat(i.url,"/").concat(e.path),className:"nav-link",activeClassName:"active"},e.title)})))}function d(e){var t=e.defaultPath,a=e.mutateTitle,c=void 0===a||a,i=e.children,o=Object(n.useContext)(u),s=Object(r.j)()||{url:""};return l.a.createElement(r.d,null,o.map((function(e){return l.a.createElement(r.b,{key:e.path,path:"".concat(s.url,"/").concat(e.path)},c&&l.a.createElement(m.Helmet,null,l.a.createElement("title",null,e.title)),e.children)})),l.a.createElement(r.b,null,l.a.createElement(r.a,{to:"".concat(s.url,"/").concat(t||o[0].path)})),i)}function E(e){var t=e.children;return l.a.createElement(u.Provider,{value:t[0].props.children.map((function(e){return e.props}))},t.slice(1))}},545:function(e,t,a){"use strict";a.r(t);var n,l=a(0),c=a.n(l),r=a(36),m=a(87),i=a(57),o=a(25),u=a(10),s=a(17),d=a(3),E=a(35),b=a(90),p=a(11),f=a(43),v=a(1),h=a.n(v),j=a(89);!function(e){e.All="\u5168\u90e8",e.Last4Weeks="\u6700\u8fd1\u56db\u5468",e.Custom="\u81ea\u5b9a\u4e49"}(n||(n={}));var y=Object.keys(n).map((function(e){return{key:n[e],label:n[e]}}));function g(e){var t=e.showLevel,a=void 0!==t&&t,r=Object(p.c)(),m=Object(d.a)(r,2),i=m[0],o=m[1],u=Object(l.useState)((function(){return"player"!==i.type?n.All:i.startDate?i.endDate&&!h()(i.endDate).isSame(h()(),"day")||!h()(i.startDate).isSame(h()().subtract(27,"day"),"day")?n.Custom:n.Last4Weeks:n.All})),s=Object(d.a)(u,2),v=s[0],g=s[1],O=Object(l.useState)((function(){return"player"===i.type&&i.startDate?i.startDate:E.b})),N=Object(d.a)(O,2),w=N[0],x=N[1],D=Object(l.useState)((function(){return"player"===i.type&&i.endDate?i.endDate:h()()})),k=Object(d.a)(D,2),I=k[0],M=k[1];Object(l.useEffect)((function(){if("player"===i.type)switch(v){case n.All:o({type:"player",playerId:i.playerId,startDate:null,endDate:null,selectedMode:void 0});break;case n.Last4Weeks:o({type:"player",playerId:i.playerId,startDate:h()().subtract(27,"day"),endDate:null});break;case n.Custom:o({type:"player",playerId:i.playerId,startDate:w,endDate:I})}}),[i,v,w,I,o]);var S=Object(l.useCallback)((function(e){return o({type:"player",selectedMode:e})}),[o]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement(b.a,{title:"\u65f6\u95f4",inline:!0},c.a.createElement(f.a,{type:"radio",selectedItemKey:v,items:y,groupKey:"PlayerDetailsDateRangeSelector",onChange:g}))),a&&c.a.createElement("div",{className:"col-6"},c.a.createElement(b.a,{title:"\u7b49\u7ea7",inline:!0},c.a.createElement(j.a,{mode:i.selectedMode,onChange:S})))),v===n.Custom?c.a.createElement("div",{className:"row mt-n3"},c.a.createElement("div",{className:"col-6"},c.a.createElement(b.a,{inline:!0},c.a.createElement(f.b,{min:E.b,onChange:x,date:w,className:"form-control"}),c.a.createElement(f.b,{min:E.b,onChange:M,date:I,className:"form-control"})))):null)}function O(e){var t=e.label,a=e.description,n=e.className,l=void 0===n?"":n,r=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("dt",{className:"col-2 col-lg-1 text-nowrap ".concat(l)},t),c.a.createElement("dd",{className:"col-4 col-lg-3 text-right ".concat(l),"data-tip":a||""},r))}function N(e){var t=e.metadata,a=Object(p.c)(),n=Object(d.a)(a,1)[0],l=u.LevelWithDelta.getAdjustedLevel(t.level),r=n.selectedMode?parseInt(n.selectedMode):"\u9b42"===u.LevelWithDelta.getTag(t.level)?u.GameMode.\u738b\u5ea7:u.GameMode.\u7389,m=t.count<100,i=u.PlayerMetadata.calculateExpectedGamePoint(t,r),o=null;if(l.getMaxPoint()&&l.isAllowedMode(r)){var s=l.isSame(new u.Level(t.level.id))?t.level.score+t.level.delta:l.getStartingPoint();o=i>0?(l.getMaxPoint()-s)/i:s/i}var E=o?"\uff0c\u62ec\u53f7\u5185\u4e3a\u9884\u8ba1".concat(o>0?"\u5347":"\u964d","\u6bb5\u573a\u6570"):"";return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{label:"\u5b89\u5b9a\u6bb5\u4f4d",description:"\u5728".concat(u.GameMode[r],"\u4e4b\u95f4\u4e00\u76f4\u8fdb\u884c\u5bf9\u5c40\uff0c\u9884\u6d4b\u6700\u7ec8\u80fd\u8fbe\u5230\u7684\u6bb5\u4f4d\u3002").concat(m?"\uff08\u6570\u636e\u91cf\u4e0d\u8db3\uff0c\u8ba1\u7b97\u7ed3\u679c\u53ef\u80fd\u6709\u8f83\u5927\u504f\u5dee\uff09":"","<br/>\u4e00\u4e8c\u4e09\u4f4d\u5e73\u5747 Pt / \u56db\u4f4d\u5e73\u5747\u5f97\u70b9 Pt\uff1a[").concat(u.PlayerMetadata.getStableLevelComponents(t,r).map((function(e){return e.toFixed(2)})).join("/"),"]"),className:m?"font-italic font-lighter text-muted":""},c.a.createElement("span",null,u.PlayerMetadata.estimateStableLevel2(t,r),m&&"?")),c.a.createElement(O,{label:"\u5206\u6570\u671f\u671b",description:"\u5728".concat(u.GameMode[r],"\u4e4b\u95f4\u6bcf\u5c40\u83b7\u5f97\u70b9\u6570\u7684\u6570\u5b66\u671f\u671b\u503c").concat(E).concat(m?"\uff08\u6570\u636e\u91cf\u4e0d\u8db3\uff0c\u8ba1\u7b97\u7ed3\u679c\u53ef\u80fd\u6709\u8f83\u5927\u504f\u5dee\uff09":""),className:m?"font-italic font-lighter text-muted":""},c.a.createElement("span",null,i.toFixed(1),o?" (".concat(Math.abs(o).toFixed(0),")"):"",m&&"?")))}var w=a(55),x=a(206),D=a(6),k=a(22),I=a(58);function M(e){var t=e.numGames,a=void 0===t?100:t,n=e.numDisplay,r=void 0===n?10:n,m=e.currentAccountId,u=void 0===m?0:m,d=Object(i.c)(),E=d.getCount(),b=Math.min(E,a),p=Object(l.useMemo)((function(){if(E<=0)return null;for(var e={},t=0;t<b;t++){var a=d.getItem(t);if(!("uuid"in a))return null;var n=!0,l=!1,c=void 0;try{for(var r,m=a.players[Symbol.iterator]();!(n=(r=m.next()).done);n=!0){var i=r.value;i.accountId!==u&&(e[i.accountId]||(e[i.accountId]={player:i,count:0}),e[i.accountId].count++)}}catch(s){l=!0,c=s}finally{try{n||null==m.return||m.return()}finally{if(l)throw c}}}var o=Object.values(e);return o.sort((function(e,t){return t.count-e.count})),o}),[E,d,b,u]);return E<=0?null:p?c.a.createElement("dl",{className:"row"},p.slice(0,r).map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("dt",{className:"col-8 col-lg-4 font-weight-normal"},c.a.createElement(k.b,{to:Object(I.generatePlayerPathById)(e.player.accountId)},e.player.nickname)),c.a.createElement("dd",{className:"col-4 col-lg-2 text-right"},Object(o.c)(e.count/b)," (",e.count,")"))}))):c.a.createElement(s.a,null)}function S(e){var t=e.numDisplay,a=void 0===t?10:t,n=e.currentAccountId,l=void 0===n?0:n;return c.a.createElement(x.c,null,c.a.createElement(x.d,null,c.a.createElement(x.b,{path:"latest",title:"\u6700\u8fd1 100 \u5c40"},c.a.createElement(M,{currentAccountId:l,numDisplay:a})),c.a.createElement(x.b,{path:"all",title:"\u5168\u90e8"},c.a.createElement(M,{currentAccountId:l,numDisplay:a,numGames:2147483647}))),c.a.createElement(x.a,{className:"mt-n3"}),c.a.createElement(x.e,{mutateTitle:!1}))}a.d(t,"default",(function(){return J}));var F=Object(r.a)({loader:function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,542))},loading:function(){return c.a.createElement(s.a,null)}}),P=Object(r.a)({loader:function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,543))},loading:function(){return c.a.createElement(s.a,null)}}),L=a.e(4).then(a.t.bind(null,544,7)),C=Object(r.a)({loader:function(){return L},loading:function(){return null}});function A(e){var t=e.metadata,a=e.view,n=Object(o.g)(t.extended_stats);if(Object(l.useEffect)(o.f,[!!n]),!n)return null;var r=a;return c.a.createElement(r,{stats:n,metadata:t})}function W(e){var t=e.stats;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{label:"\u548c\u724c\u7387",description:"\u548c\u724c\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u548c\u724c\u7387||0)),c.a.createElement(O,{label:"\u653e\u94f3\u7387",description:"\u653e\u94f3\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u653e\u94f3\u7387||0)),c.a.createElement(O,{label:"\u81ea\u6478\u7387",description:"\u81ea\u6478\u5c40\u6570 / \u548c\u724c\u5c40\u6570"},Object(o.c)(t.\u81ea\u6478\u7387||0)),c.a.createElement(O,{label:"\u9ed8\u80e1\u7387",description:"\u95e8\u6e05\u9ed8\u542c\u548c\u724c\u5c40\u6570 / \u548c\u724c\u5c40\u6570"},Object(o.c)(t.\u9ed8\u542c\u7387||0)),c.a.createElement(O,{label:"\u6d41\u5c40\u7387",description:"\u6d41\u5c40\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u6d41\u5c40\u7387||0)),c.a.createElement(O,{label:"\u6d41\u542c\u7387",description:"\u6d41\u5c40\u542c\u724c\u5c40\u6570 / \u6d41\u5c40\u5c40\u6570"},Object(o.c)(t.\u6d41\u542c\u7387||0)),c.a.createElement(O,{label:"\u526f\u9732\u7387",description:"\u526f\u9732\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u526f\u9732\u7387||0)),c.a.createElement(O,{label:"\u7acb\u76f4\u7387",description:"\u7acb\u76f4\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u7acb\u76f4\u7387||0)),c.a.createElement(O,{label:"\u548c\u4e86\u5de1\u6570"},(t.\u548c\u4e86\u5de1\u6570||0).toFixed(3)),c.a.createElement(O,{label:"\u5e73\u5747\u6253\u70b9"},t.\u5e73\u5747\u6253\u70b9||0),c.a.createElement(O,{label:"\u5e73\u5747\u94f3\u70b9"},t.\u5e73\u5747\u94f3\u70b9||0))}function G(e){var t=e.stats,a=e.metadata;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{label:"\u6700\u9ad8\u7b49\u7ea7"},u.LevelWithDelta.getTag(a.max_level)),c.a.createElement(O,{label:"\u6700\u9ad8\u5206\u6570"},u.LevelWithDelta.formatAdjustedScore(function(e){var t=new w.a(e.id);return e.score+e.delta<t.getStartingPoint()?{id:e.id,score:t.getStartingPoint(),delta:0}:e}(a.max_level))),c.a.createElement(O,{label:"\u6700\u5927\u8fde\u5e84"},t.\u6700\u5927\u8fde\u5e84||0),c.a.createElement(O,{label:"\u4e00\u53d1\u7387",description:"\u4e00\u53d1\u5c40\u6570 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570"},Object(o.c)(t.\u4e00\u53d1\u7387||0)),c.a.createElement(O,{label:"\u91cc\u5b9d\u7387",description:"\u4e2d\u91cc\u5b9d\u5c40\u6570 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570"},Object(o.c)(t.\u91cc\u5b9d\u7387||0)),c.a.createElement(O,{label:"\u88ab\u70b8\u7387",description:"\u88ab\u70b8\u5e84\uff08\u6ee1\u8d2f\u6216\u4ee5\u4e0a\uff09\u6b21\u6570 / \u88ab\u81ea\u6478\u6b21\u6570"},Object(o.c)(t.\u88ab\u70b8\u7387||0)),c.a.createElement(O,{label:"\u5e73\u5747\u88ab\u70b8\u70b9\u6570",description:"\u88ab\u70b8\u5e84\uff08\u6ee1\u8d2f\u6216\u4ee5\u4e0a\uff09\u70b9\u6570 / \u6b21\u6570"},t.\u5e73\u5747\u88ab\u70b8\u70b9\u6570||0),c.a.createElement(O,{label:"\u653e\u94f3\u65f6\u7acb\u76f4\u7387",description:"\u653e\u94f3\u65f6\u7acb\u76f4\u6b21\u6570 / \u653e\u94f3\u6b21\u6570"},Object(o.c)(t.\u653e\u94f3\u65f6\u7acb\u76f4\u7387||0)),c.a.createElement(O,{label:"\u653e\u94f3\u65f6\u526f\u9732\u7387",description:"\u653e\u94f3\u65f6\u526f\u9732\u6b21\u6570 / \u653e\u94f3\u6b21\u6570"},Object(o.c)(t.\u653e\u94f3\u65f6\u526f\u9732\u7387||0)),c.a.createElement(O,{label:"\u7acb\u76f4\u540e\u653e\u94f3\u7387",description:"\u653e\u94f3\u65f6\u7acb\u76f4\u6b21\u6570 / \u7acb\u76f4\u6b21\u6570"},Object(o.c)(t.\u7acb\u76f4\u540e\u653e\u94f3\u7387||0)),c.a.createElement(O,{label:"\u526f\u9732\u540e\u653e\u94f3\u7387",description:"\u653e\u94f3\u65f6\u526f\u9732\u6b21\u6570 / \u526f\u9732\u6b21\u6570"},Object(o.c)(t.\u526f\u9732\u540e\u653e\u94f3\u7387||0)),c.a.createElement(O,{label:"\u7acb\u76f4\u540e\u548c\u724c\u7387",description:"\u7acb\u76f4\u540e\u548c\u724c\u6b21\u6570 / \u7acb\u76f4\u6b21\u6570"},Object(o.c)(t.\u7acb\u76f4\u540e\u548c\u724c\u7387||0)),c.a.createElement(O,{label:"\u526f\u9732\u540e\u548c\u724c\u7387",description:"\u526f\u9732\u540e\u548c\u724c\u6b21\u6570 / \u526f\u9732\u6b21\u6570"},Object(o.c)(t.\u526f\u9732\u540e\u548c\u724c\u7387||0)),c.a.createElement(O,{label:"\u7acb\u76f4\u540e\u6d41\u5c40\u7387",description:"\u7acb\u76f4\u540e\u6d41\u5c40\u6b21\u6570 / \u7acb\u76f4\u6b21\u6570"},Object(o.c)(t.\u7acb\u76f4\u540e\u6d41\u5c40\u7387||0)),c.a.createElement(O,{label:"\u526f\u9732\u540e\u6d41\u5c40\u7387",description:"\u526f\u9732\u540e\u6d41\u5c40\u6b21\u6570 / \u526f\u9732\u6b21\u6570"},Object(o.c)(t.\u526f\u9732\u540e\u6d41\u5c40\u7387||0)))}function T(e){var t=e.metadata;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{label:"\u8bb0\u5f55\u573a\u6570"},t.count),c.a.createElement(O,{label:"\u8bb0\u5f55\u7b49\u7ea7"},u.LevelWithDelta.getTag(t.level)),c.a.createElement(O,{label:"\u8bb0\u5f55\u5206\u6570"},u.LevelWithDelta.formatAdjustedScore(t.level)),c.a.createElement(A,{metadata:t,view:W}),c.a.createElement(O,{label:"\u5e73\u5747\u987a\u4f4d"},t.avg_rank.toFixed(3)),c.a.createElement(O,{label:"\u88ab\u98de\u7387"},Object(o.c)(t.negative_rate)),c.a.createElement(N,{metadata:t}))}function _(e){var t=e.stats;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{label:"\u5f79\u6ee1",description:"\u548c\u51fa\u5f79\u6ee1\u6b21\u6570"},t.\u5f79\u6ee1||0),c.a.createElement(O,{label:"\u7d2f\u8ba1\u5f79\u6ee1",description:"\u548c\u51fa\u7d2f\u8ba1\u5f79\u6ee1\u6b21\u6570"},t.\u7d2f\u8ba1\u5f79\u6ee1||0),c.a.createElement(O,{label:"\u6700\u5927\u7d2f\u8ba1\u756a\u6570",description:"\u548c\u51fa\u7684\u6700\u5927\u756a\u6570\uff08\u4e0d\u542b\u5f79\u6ee1\u5f79\uff09"},t.\u6700\u5927\u7d2f\u8ba1\u756a\u6570||0),c.a.createElement(O,{label:"\u6d41\u6ee1",description:"\u6d41\u6ee1\u6b21\u6570"},t.\u6d41\u6ee1||0),c.a.createElement(O,{label:"\u4e24\u7acb\u76f4",description:"\u4e24\u7acb\u76f4\u6b21\u6570"},t.W\u7acb\u76f4||0),c.a.createElement(O,{label:"\u5e73\u5747\u8d77\u624b\u5411\u542c"},Object(o.a)(t.\u5e73\u5747\u8d77\u624b\u5411\u542c)))}function R(e){var t=e.stats,a=e.metadata;return t.\u6700\u8fd1\u5927\u94f3?c.a.createElement("div",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"d-flex justify-content-between font-weight-bold",href:u.GameRecord.getRecordLink(t.\u6700\u8fd1\u5927\u94f3.id,a.id)},c.a.createElement("span",null,u.FanStatEntryList.formatFanSummary(t.\u6700\u8fd1\u5927\u94f3.fans)),c.a.createElement("span",null,u.GameRecord.formatFullStartTime(t.\u6700\u8fd1\u5927\u94f3.start_time))),c.a.createElement("dl",{className:"row mt-2"},t.\u6700\u8fd1\u5927\u94f3.fans.map((function(e){return c.a.createElement(O,{key:e.label,label:e.label},u.FanStatEntry2.formatFan(e))})))):c.a.createElement("p",{className:"text-center"},"\u65e0\u6ee1\u8d2f\u6216\u4ee5\u4e0a\u5927\u94f3")}function H(e){var t=e.metadata,a=Object(D.h)();return Object(l.useEffect)((function(){L.then((function(e){return e.rebuild()}))}),[a.pathname]),c.a.createElement(x.c,null,c.a.createElement(x.d,null,c.a.createElement(x.b,{path:"basic",title:"\u57fa\u672c\u6570\u636e"},c.a.createElement("dl",{className:"row"},c.a.createElement(T,{metadata:t}))),c.a.createElement(x.b,{path:"extended",title:"\u66f4\u591a\u6570\u636e"},c.a.createElement("dl",{className:"row"},c.a.createElement(A,{metadata:t,view:G}))),c.a.createElement(x.b,{path:"luck",title:"\u8840\u7edf"},c.a.createElement("dl",{className:"row"},c.a.createElement(A,{metadata:t,view:_}))),c.a.createElement(x.b,{path:"largest-lost",title:"\u6700\u8fd1\u5927\u94f3"},c.a.createElement(A,{metadata:t,view:R})),c.a.createElement(x.b,{path:"same-match",title:"\u6700\u5e38\u540c\u684c"},c.a.createElement(S,{currentAccountId:t.id}))),c.a.createElement(x.a,{className:"mt-3"}),c.a.createElement(x.e,{mutateTitle:!1}))}function J(){var e=Object(i.c)(),t=e.getMetadata();return Object(l.useEffect)((function(){L.then((function(e){return e.rebuild()}))})),Object(l.useEffect)(o.f,[!!t]),t&&t.nickname?c.a.createElement("div",null,c.a.createElement(m.Helmet,null,c.a.createElement("title",null,t.nickname)),c.a.createElement("h2",{className:"text-center"},"\u73a9\u5bb6\uff1a",t.nickname),c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("h3",{className:"text-center mb-4"},"\u6700\u8fd1\u8d70\u52bf"),c.a.createElement(P,{dataAdapter:e,playerId:t.id,aspect:6}),c.a.createElement(H,{metadata:t})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("h3",{className:"text-center mb-4"},"\u7d2f\u8ba1\u6218\u7ee9"),c.a.createElement(F,{metadata:t}))),c.a.createElement(g,{showLevel:!0}),c.a.createElement(C,{effect:"solid",multiline:!0,place:"top"})):c.a.createElement(s.a,null)}}}]);
//# sourceMappingURL=7.6e81f65a.chunk.js.map