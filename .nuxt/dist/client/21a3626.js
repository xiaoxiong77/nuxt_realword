(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return m}));var n=r(61),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})}},185:function(t,e,r){var n=r(6),c=r(23),o=r(10),l=r(186),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),d=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=d.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(m,"")),t};t.exports=d},186:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},195:function(t,e,r){"use strict";var n=r(4),c=r(18),o=r(22),l=r(117),f=r(62),v=r(10),m=r(43).f,d=r(63).f,_=r(9).f,h=r(185).trim,C=n.Number,O=C,y=C.prototype,x="Number"==o(r(78)(y)),k="trim"in String.prototype,E=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(x?v((function(){y.valueOf.call(r)})):"Number"!=o(r))?l(new O(E(e)),r,C):E(e)};for(var j,N=r(8)?m(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;N.length>w;w++)c(O,j=N[w])&&!c(C,j)&&_(C,j,d(O,j));C.prototype=y,y.constructor=C,r(11)(n,"Number",C)}},196:function(t,e,r){var n=r(6),c=r(197);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},197:function(t,e,r){var n=r(4).parseInt,c=r(185).trim,o=r(186),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},256:function(t,e,r){"use strict";r.r(e);r(77),r(30),r(60);var n=r(56),c=(r(31),r(13),r(44),r(41)),o=(r(195),r(196),r(29),r(3)),l=r(181),f=r(61),v=r(40);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"HomePage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,v,m,d,_,h,C,O,y,x,k,E,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=Number.parseInt(r.page||1),v=20,m=r.tag,d=r.tab||"global_feed",_=n.state.user&&"your_feed"===d?l.f:l.d,e.next=8,Promise.all([_({limit:v,offset:(o-1)*v,tag:m}),Object(f.b)({method:"GET",url:"/api/tags"})]);case 8:return h=e.sent,C=Object(c.a)(h,2),O=C[0],y=C[1],x=O.data,k=x.articles,E=x.articlesCount,j=y.data.tags,k.forEach((function(article){return article.favoriteDisable=!1})),e.abrupt("return",{articles:k,articlesCount:E,limit:v,page:o,tags:j,tag:m,tab:d});case 16:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],computed:d(d({},Object(v.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisable=!0,!article.favorited){t.next=8;break}return t.next=4,Object(l.b)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(l.a)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisable=!1;case 13:case"end":return t.stop()}}),t)})))()}}},h=r(20),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"your_feed"}}}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"global_feed"}}}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tag",tag:t.tag}}}},[t._v("#"+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:"{\n                                    name: 'profile',\n                                    params: {\n                                        username: article.author.username\n                                    }\n                                }"}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{attrs:{to:"{\n                                        name: 'profile',\n                                        params: {\n                                            username: article.author.username\n                                        }\n                                    }"}},[t._v("\n                                    "+t._s(article.author.username)+"\n                                ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisable},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n                            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:e,tab:"tag"}}}},[t._v(t._s(e))])})),1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);