"use strict";(self.webpackChunkreact_simple_movie=self.webpackChunkreact_simple_movie||[]).push([[446],{4453:function(e,t,n){n(2791);var i=n(3504),r=n(184);t.Z=function(e){var t=e.onClick,n=e.className,a=e.children,o=e.fluid,c=e.outline,s=void 0!==c&&c,l=e.to,d=void 0===l?"":l,u=e.loading,v=void 0!==u&&u,m=(0,r.jsx)("button",{onClick:t,className:"".concat(v?"opacity-60 pointer-events-none":" hover:opacity-90"," ").concat(s?"bg-transparent text-primary border border-primary":"bg-primary text-white"," duration-100 py-3 px-6 rounded-lg capitalize  gap-1  flex items-center justify-center ").concat(n," ").concat(o?"w-full":"w-auto"),children:v?(0,r.jsx)("span",{children:"Loading . . ."}):a});return d?(0,r.jsx)(i.rU,{to:d,children:m}):m}},1356:function(e,t,n){var i=n(885),r=n(2791),a=n(6871),o=n(184);t.Z=function(e){var t=(0,r.useState)(!1),n=(0,i.Z)(t,2),c=n[0],s=n[1],l=(0,a.TH)();return(0,r.useLayoutEffect)((function(){s(!0),setTimeout((function(){s(!1)}),1e3)}),[l]),e.children?(0,o.jsxs)(o.Fragment,{children:[c&&(0,o.jsxs)("div",{className:"loading-container page-loading",children:[(0,o.jsxs)("div",{className:"lds-ripple",children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]}),(0,o.jsx)("p",{className:"content",children:"Loading . . ."})]}),!c&&e.children]}):(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"loading-container",children:[(0,o.jsxs)("div",{className:"lds-ripple",children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]}),(0,o.jsx)("p",{className:"content",children:"Loading . . ."})]})})}},8729:function(e,t,n){n(2791);var i=n(3504),r=n(3197),a=n(4453),o=n(9126),c=n(2419),s=n(6902),l=n(199),d=n(4809),u=n(184);t.Z=function(e){var t=e.movieid,n=e.item,v=void 0===n?"":n,m=e.mediaType,p={mediaType:m},f=(0,c.ZP)(r.bl.getMoviebyID(t,m),r._i),h=f.data,x=(f.error,t?h:v),g=null===x||void 0===x?void 0:x.title,j=null===x||void 0===x?void 0:x.vote_average,b=null===x||void 0===x?void 0:x.release_date,y=null===x||void 0===x?void 0:x.poster_path,w=null===x||void 0===x?void 0:x.name,N=null===x||void 0===x?void 0:x.first_air_date,k=null===x||void 0===x?void 0:x.id,_=(0,s.s)(k);return x&&(0,u.jsxs)("div",{className:"flex flex-col h-full p- text-white rounded-lg select-none movie-card bg-slate-400",children:[(0,u.jsxs)("div",{className:"relative",children:[_?(0,u.jsx)("div",{className:"absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-primary top-3 right-3",children:(0,u.jsx)(d.Z,{id:k,mediaType:m})}):(0,u.jsx)(l.m,{id:k,mediaType:m}),(0,u.jsx)("img",{className:"w-full object-cover rounded-lg mb-5 max-h-[600px]",src:r.bl.getImageUrl(y,"w500"),alt:""})]}),(0,u.jsx)("h3",{className:"mb-3 text-xl text-bold",children:g||w}),(0,u.jsxs)("div",{className:"flex flex-col justify-end flex-1",children:[(0,u.jsxs)("div",{className:"flex items-center justify-between mb-5 text-sm opacity-50",children:[(0,u.jsx)("span",{children:new Date(b||N).getFullYear()}),(0,u.jsxs)("span",{className:"flex items-center gap-1",children:[j&&j.toFixed(1),(0,u.jsx)(o.kum,{})]})]}),(0,u.jsx)(i.rU,{to:"/".concat(m,"/").concat(k),state:p,children:(0,u.jsx)(a.Z,{fluid:!0,children:"go to movie details"})})]})]})}},3197:function(e,t,n){n.d(t,{KM:function(){return r},_i:function(){return i},bl:function(){return c}});var i=function(e){return fetch(e).then((function(e){return e.json()}))},r="https://tl-movie.vercel.app",a="3d673b2d8e40eafc68577fae5a6a1f4b",o="https://api.themoviedb.org/3",c={getMoviebyID:function(e,t){return"".concat(o,"/").concat(t,"/").concat(e,"?api_key=").concat(a)},getMovieSearch:function(e){return"".concat(o,"/search/movie?api_key=").concat(a,"&query=").concat(e)},getMovieList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all";return"popular"===e||"top_rated"===e||"now_playing"===e?"".concat(o,"/").concat(n,"/").concat(e,"?api_key=").concat(a,"&page=").concat(t):"discover"===e?" ".concat(o,"/").concat(e,"/").concat(n,"?api_key=").concat(a,"&page=").concat(t):" ".concat(o,"/").concat(e,"/").concat(n,"/day?api_key=").concat(a,"&page=").concat(t)},getMovieDetail:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"movie";return"".concat(o,"/").concat(t,"/").concat(e,"?api_key=").concat(a)},getImageUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"original";return"https://image.tmdb.org/t/p/".concat(t,"/").concat(e)},getDetailMeta:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"movie";return"".concat(o,"/").concat(n,"/").concat(e,"/").concat(t,"?api_key=").concat(a)},getYoutubeVideo:function(e){return"https://www.youtube.com/embed/".concat(e)}}},6902:function(e,t,n){n.d(t,{s:function(){return r}});n(2791);var i=n(1665),r=function(e){var t=(0,i.a)().userInfo;return!(!t||!e)&&!!(t.listFavorite&&t.listFavorite.find((function(t){return t.id===e})))}},8446:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});n(2791);var i=n(3504),r=n(3197),a=n(2419),o=n(7092),c=n(1281),s=n(6871),l=n(4453),d=n(1356),u=n(199),v=n(1665),m=n(6902),p=n(4809),f=n(184);function h(e){var t=e.item,n=e.mediaType,i=(0,v.a)().userInfo,o=(0,m.s)(null===t||void 0===t?void 0:t.id),c=(0,s.s0)(),h=t.poster_path,x=t.backdrop_path,g=t.title,j=t.id,b=(0,a.ZP)(r.bl.getMovieDetail(j),r._i),y=b.data;if(b.error)return(0,f.jsx)("div",{children:"failed to load"});if(!y)return(0,f.jsx)(d.Z,{});var w=y.genres;return(0,f.jsxs)("div",{className:"relative w-full h-full overflow-hidden rounded-lg",children:[(0,f.jsx)("div",{className:"hidden w-full h-full bg-no-repeat bg-cover md:block",style:{backgroundImage:"url(".concat(r.bl.getImageUrl(x),"), \n          linear-gradient(#e66465, #9198e5)")}}),(0,f.jsx)("img",{className:"object-contain w-full h-full rounded-lg overlay absolute",src:r.bl.getImageUrl(h,"w500"),alt:""}),(0,f.jsxs)("div",{className:"absolute bottom-0 left-0 w-full p-3 text-white content",children:[(0,f.jsx)("h2",{className:"mb-6 text-4xl font-bold text-white capitalize",children:g}),(0,f.jsx)("div",{className:"flex flex-wrap items-center mb-8",children:null===w||void 0===w?void 0:w.map((function(e){return(0,f.jsx)("div",{className:"inline-block px-4 py-1 mb-2 mr-3 border border-white rounded-md",children:e.name},e.id)}))}),(0,f.jsxs)("div",{className:"inline-flex gap-5",children:[(0,f.jsx)(l.Z,{onClick:function(){return c("/movie/".concat(j))},className:"w-auto",children:"Go To movie details"}),o?(0,f.jsx)("div",{className:"flex items-center justify-center w-8 h-8 m-auto rounded-full bg-primary",children:(0,f.jsx)(p.Z,{id:j,mediaType:n})}):(0,f.jsx)(l.Z,{outline:!0,onClick:function(e){return(0,u.R)(e,j,n,i)},children:"Add to favorite"})]})]})]})}var x=function(){c.ZP.use([c.pt]);var e=(0,a.ZP)(r.bl.getMovieList("popular",1,"movie"),r._i).data,t=(null===e||void 0===e?void 0:e.results)||[];return(0,f.jsx)("section",{className:"banner h-[500px] page-container mb-20 overflow-hidden",children:(0,f.jsx)(o.tq,{grabCursor:"true",slidesPerView:1,autoplay:{delay:8e3},children:t.length>0&&t.slice(0,10).map((function(e){return(0,f.jsx)(o.o5,{children:(0,f.jsx)(h,{item:e,mediaType:"movie"})},e.id)}))})})},g=n(8729),j=(n(2532),function(e){var t=e.type,n=void 0===t?"now_playing":t,i=e.mediaType,c=void 0===i?"movie":i,s=(0,a.ZP)(r.bl.getMovieList(n,1,"movie"),r._i),l=s.data,d=(s.error,(null===l||void 0===l?void 0:l.results)||[]);return(0,f.jsx)("div",{className:"movie-list",children:(0,f.jsx)(o.tq,{grapcursor:"true",spaceBetween:40,slidesPerView:1,breakpoints:{620:{slidesPerView:2},950:{slidesPerView:3},1440:{slidesPerView:4}},children:d.length>0&&d.map((function(e){return(0,f.jsx)(o.o5,{children:(0,f.jsx)(g.Z,{item:e,mediaType:c})},e.id)}))})})}),b=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x,{}),(0,f.jsxs)("section",{className:"movies-layout page-container pb-10",children:[(0,f.jsx)(i.OL,{to:"/discover",children:(0,f.jsx)("h2",{className:"section-title text-black",children:"Discover"})}),(0,f.jsx)(j,{})]}),(0,f.jsxs)("section",{className:"movies-layout page-container",children:[(0,f.jsx)(i.OL,{to:"/discover",children:(0,f.jsx)("h2",{className:"section-title text-black",children:"Trending"})}),(0,f.jsx)(j,{type:"trending"})]})]})}},4809:function(e,t,n){var i=n(4165),r=n(2982),a=n(5861),o=n(9062),c=n(8820),s=n(1665),l=n(1367),d=n(184),u=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n,a,c){var s,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=8;break}return t.preventDefault(),s=c.listFavorite.filter((function(e){return e.id!==n})),d=(0,o.JU)(l.db,"users",null===c||void 0===c?void 0:c.id),e.next=6,(0,o.r7)(d,{listFavorite:(0,r.Z)(s)}).then((function(){console.log("Success")}));case 6:e.next=9;break;case 8:console.log("Failed");case 9:case"end":return e.stop()}}),e)})));return function(t,n,i,r){return e.apply(this,arguments)}}();t.Z=function(e){var t=e.id,n=e.mediaType,i=e.className,r=void 0===i?"":i,a=(0,s.a)().userInfo;return(0,d.jsx)("span",{onClick:function(e){return u(e,t,n,a)},className:"cursor-pointer ".concat(r),children:(0,d.jsx)(c.M_L,{})})}},199:function(e,t,n){n.d(t,{R:function(){return u},m:function(){return v}});var i=n(4165),r=n(5861),a=n(9062),o=(n(2791),n(1665)),c=n(1367),s=n(8820),l=n(9085),d=n(184),u=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t,n,r,o){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=7;break}return t.preventDefault(),s=(0,a.JU)(c.db,"users",o.id),e.next=5,(0,a.r7)(s,{listFavorite:(0,a.vr)({id:n,type:r})}).then((function(){console.log("Success")}));case 5:e.next=8;break;case 7:l.Am.error("You have to sign in first!");case 8:case"end":return e.stop()}}),e)})));return function(t,n,i,r){return e.apply(this,arguments)}}(),v=function(e){var t=e.id,n=e.mediaType,i=(0,o.a)().userInfo;return(0,d.jsxs)("span",{className:"absolute flex items-center justify-center w-8 h-8 leading-none duration-200 rounded-full cursor-pointer hover:gap-3 top-3 right-3 bg-white/30 backdrop-blur-sm group hover:bg-primary hover:w-auto hover:px-3",onClick:function(e){return u(e,t,n,i)},children:[(0,d.jsx)(s.Lfi,{}),(0,d.jsx)("span",{className:"hidden text-transparent group-hover:block group-hover:text-white",children:"Add to favorite"})]})}}}]);
//# sourceMappingURL=446.4b1b040a.chunk.js.map