"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(439),s=n(689),c=n(791),i="Reviews_ReviewsList__pyBOr",a=n(184),u=function(){var e=(0,s.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),u=n[0],h=n[1],o=(0,c.useState)(null),l=(0,r.Z)(o,2),f=l[0],d=l[1];return(0,c.useEffect)((function(){e&&fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=e77ae0ac56a28e832d749f387f422ca1&language=en-US")).then((function(e){return e.json()})).then((function(e){return h(e.results)})).catch((function(e){d(e)}))}),[e]),(0,a.jsxs)(a.Fragment,{children:[f&&(0,a.jsx)("h1",{children:f.message}),(0,a.jsxs)("ul",{className:i,children:[u&&u.map((function(e){return(0,a.jsxs)("li",{children:[(0,a.jsxs)("h3",{children:["Author: ",e.author]}),(0,a.jsx)("p",{children:e.content})]},e.id)})),0===u.length&&(0,a.jsx)("h3",{children:"We don`t have any reviews for this movie"})]})]})}}}]);
//# sourceMappingURL=168.8ac32d6e.chunk.js.map