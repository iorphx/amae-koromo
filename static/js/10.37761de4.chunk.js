(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[10],{565:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var r=t(0),n=t.n(r),o=t(255),i=t(8),l=t(126),c=t(23),d=t(97),m=t(6),u=t(3),s=function(e,a){var t=Object(m.d)()?1.5:2;return n.a.createElement(o.c,Object.assign({},e,{r:2.5*t,stroke:u.b.rankColors[e.payload.rank],onClick:function(){return window.open(i.GameRecord.getRecordLink(e.payload.game,e.payload.playerId),"_blank")}},a?{fill:u.b.rankColors[e.payload.rank],r:5*t}:{}))},p=function(e){return s(e,!0)},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.active,t=e.payload;if(!a||!t||!t.length)return null;var r=t[0].payload;return n.a.createElement("div",{className:"player-chart-tooltip"},n.a.createElement("h5",null,i.GameRecord.formatFullStartTime(r.game)," ",r.game.modeId?Object(i.modeLabel)(r.game.modeId):""," ",i.RANK_LABELS[r.rank]," ",r.delta>0?"+":"",r.delta,"pt"),r.game.players.map((function(e){return n.a.createElement("p",{key:e.accountId.toString()},n.a.createElement(l.a,{player:e,game:r.game,isActive:r.playerId===e.accountId}))})))};function y(e){var a=e.dataAdapter,t=e.playerId,l=e.aspect,u=void 0===l?2:l,y=e.numGames,f=void 0===y?Object(m.d)()?20:30:y,k=Object(r.useMemo)((function(){var e=[],r=a.getCount();if(!r)return e;for(var n=0;n<Math.min(r,f);n++){var o=a.getItem(n);if(!o||!("uuid"in o))break;var l=i.GameRecord.getRankIndexByPlayer(o,t);e.unshift({pos:3-l,rank:l,delta:0,cumulativeDelta:0,game:o,playerId:t})}for(var c=0,m=0,u=e;m<u.length;m++){var s=u[m],p=s.game;if(p.modeId){var v=p.players.filter((function(e){return e.accountId.toString()===t.toString()}))[0];s.delta=Object(d.e)(v.score,s.rank,p.modeId,new i.Level(v.level)),c+=s.delta,s.cumulativeDelta=c}}return e}),[a,f,t]);if(!k.length)return n.a.createElement(c.a,null);var g=k.some((function(e){return 0!==e.delta}));return n.a.createElement(o.i,{width:"100%",aspect:u,height:"auto"},n.a.createElement(o.f,{data:k,margin:{top:15,right:15,bottom:15,left:15}},n.a.createElement(o.k,{type:"number",domain:["dataMin","dataMax"],yAxisId:0,hide:!0}),n.a.createElement(o.k,{type:"number",domain:["dataMin","dataMax"],yAxisId:1,hide:!0}),g&&n.a.createElement(o.e,{isAnimationActive:!1,dataKey:"cumulativeDelta",type:"linear",stroke:"#969696",strokeWidth:1.5,yAxisId:1,dot:!1,activeDot:!1,strokeDasharray:"5 5"}),n.a.createElement(o.e,{isAnimationActive:!1,dataKey:"pos",type:"linear",stroke:"#b5c2ce",strokeWidth:3,dot:s,activeDot:p}),n.a.createElement(o.j,{cursor:!1,content:n.a.createElement(v,null)})))}}}]);
//# sourceMappingURL=10.37761de4.chunk.js.map