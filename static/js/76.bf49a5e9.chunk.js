"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(439),c=a(689),r=a(791),s="Cast_ActorItem__q8CZH",i="Cast_Img__iIIvK",u=a(184),h=function(){var e=(0,c.UO)().movieId,t=(0,r.useState)([]),a=(0,n.Z)(t,2),h=a[0],l=a[1],o=(0,r.useState)(null),m=(0,n.Z)(o,2),f=m[0],p=m[1];return(0,r.useEffect)((function(){e&&fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=e77ae0ac56a28e832d749f387f422ca1&language=en-US")).then((function(e){return e.json()})).then((function(e){return l(e.cast)})).catch((function(e){p(e)}))}),[e]),(0,u.jsxs)(u.Fragment,{children:[f&&(0,u.jsx)("h1",{children:f.message}),(0,u.jsx)("ul",{children:h&&h.map((function(e){return(0,u.jsxs)("li",{className:s,children:[(0,u.jsx)("img",{className:i,src:e.profile_path?"https://image.tmdb.org/t/p/w500"+e.profile_path:e.image,alt:e.title}),(0,u.jsx)("p",{children:e.name}),(0,u.jsxs)("p",{children:["\u0421haracter: ",e.character]})]},e.id)}))})]})}}}]);
//# sourceMappingURL=76.bf49a5e9.chunk.js.map