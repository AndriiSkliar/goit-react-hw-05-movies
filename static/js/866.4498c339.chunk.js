"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[866],{75:function(e,r,n){var t=n(861),s=n(757),a=n.n(s),i=n(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTBiYzc4N2E3Y2UyY2JkYjQwYjFlYmMzNGZjYTJmMCIsInN1YiI6IjY1NTNiZGFiNjdiNjEzNDVkYmMwMmRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHpHyLQruz3jLYmrNps4_zMlAKkULQZ-WSRGOBUyogg",i.Z.defaults.headers.common.Accept="application/json";var c=function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get(r);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();r.Z=c},10:function(e,r,n){n.d(r,{j:function(){return a}});var t="Error_errorBage__4lvnL",s=n(184),a=function(e){var r=e.error;return(0,s.jsxs)("p",{className:t,children:["Oops, some error occured... Error message: ",r]})}},866:function(e,r,n){n.r(r),n.d(r,{default:function(){return _}});var t=n(861),s=n(439),a=n(757),i=n.n(a),c=n(75),u=n(10),o=n(525),l=n(791),v=n(689),h="Reviews_reviewsWrapper__yOQT8",p="Reviews_reviewsList__1BB-J",f="Reviews_reviewsParagraph__A5bDx",d="Reviews_noReviews__mirjE",m=n(184),_=function(){var e=(0,l.useState)(null),r=(0,s.Z)(e,2),n=r[0],a=r[1],_=(0,l.useState)(!1),j=(0,s.Z)(_,2),w=j[0],N=j[1],Z=(0,l.useState)(null),x=(0,s.Z)(Z,2),J=x[0],g=x[1],y=(0,v.UO)().movieId;return(0,l.useEffect)((function(){if(null===n){var e="movie/".concat(y,"/reviews"),r=function(){var r=(0,t.Z)(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,N(!0),r.next=4,(0,c.Z)(e);case 4:n=r.sent,a(n),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),g(r.t0.message);case 11:return r.prev=11,N(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}}),[y,n]),(0,m.jsxs)("div",{className:h,children:[J&&(0,m.jsx)(u.j,{error:J}),w&&(0,m.jsx)(o.a,{}),null!==n&&n.results.length>0?(0,m.jsx)("ul",{className:p,children:n.results.map((function(e){var r=e.author,n=e.id,t=e.content;return(0,m.jsxs)("li",{children:[(0,m.jsx)("p",{className:f,children:r}),(0,m.jsx)("code",{children:t})]},n)}))}):null!==n&&(0,m.jsx)("p",{className:d,children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=866.4498c339.chunk.js.map