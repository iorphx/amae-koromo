(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[7],{205:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(0),r=t.n(n),o=t(26),c=t(289),l=t(12),i=t(42),u=r.a.memo((function(e){var a=e.player,t=e.game,n=e.isActive,u=e.hideDetailLink,m=a.nickname,d=a.level,p=a.score,s=a.accountId,f=0===l.b.getRankIndexByPlayer(t,a);return r.a.createElement("span",{className:"player ".concat(f&&"font-weight-bold"," ").concat(n&&"active-player")},r.a.createElement("a",{href:l.b.getRecordLink(t,a),title:"\u67e5\u770b\u724c\u8c31",target:"_blank",rel:"noopener noreferrer"},"[",Object(l.g)(d),"] ",m," ",void 0!==p&&"[".concat(p,"]"))," ",u||n?null:r.a.createElement(o.b,{title:"\u73a9\u5bb6\u8bb0\u5f55",to:Object(i.c)(s)},r.a.createElement(c.a,null)))}))},515:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var n=t(0),r=t.n(n),o=t(288),c=t(12),l=t(41),i=t(205),u=t(36),m=function(e,a){return r.a.createElement(o.c,Object.assign({},e,{r:5,stroke:c.e[e.payload.rank],onClick:function(){return window.open(c.b.getRecordLink(e.payload.game,e.payload.playerId),"_blank")}},a?{fill:c.e[e.payload.rank],r:10}:{}))},d=function(e){return m(e,!0)},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.active,t=e.payload;if(!a||!t||!t.length)return null;var n=t[0].payload;return r.a.createElement("div",{className:"player-chart-tooltip"},r.a.createElement("h5",null,c.b.formatFullStartTime(n.game)," ",l.a[n.game.modeId]," ",c.f[n.rank]),n.game.players.map((function(e){return r.a.createElement("p",{key:e.accountId.toString()},r.a.createElement(i.a,{player:e,game:n.game,isActive:n.playerId===e.accountId,hideDetailLink:!0}))})))};function s(e){var a=e.dataAdapter,t=e.playerId,l=e.aspect,i=void 0===l?2:l,s=e.numGames,f=void 0===s?20:s,g=Object(n.useMemo)((function(){var e=[],n=a.getCount();if(!n)return e;for(var r=0;r<Math.min(n,f);r++){var o=a.getItem(r);if(!("uuid"in o))break;var l=c.b.getRankIndexByPlayer(o,t);e.unshift({pos:3-l,rank:l,game:o,playerId:t})}return e}),[a,f,t]);return g.length?r.a.createElement(o.i,{width:"100%",aspect:i,height:"auto"},r.a.createElement(o.f,{data:g,margin:{top:15,right:15,bottom:15,left:15}},r.a.createElement(o.e,{isAnimationActive:!1,dataKey:"pos",type:"linear",stroke:"#b5c2ce",strokeWidth:3,dot:m,activeDot:d}),r.a.createElement(o.j,{cursor:!1,content:r.a.createElement(p,null)}))):r.a.createElement(u.a,null)}}}]);
//# sourceMappingURL=7.1276bdf2.chunk.js.map