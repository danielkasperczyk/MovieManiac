(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-287cf553","chunk-595a7202"],{"011b":function(t,e,a){},"4b82":function(t,e,a){"use strict";a("011b")},5510:function(t,e,a){"use strict";var i=function(t,e){void 0===t&&(t="original");var a="";switch(t){case"original":a="https://image.tmdb.org/t/p/original/"+e;break;case"small":a="https://image.tmdb.org/t/p/w500/"+e;break;case"poster":a="https://image.tmdb.org/t/p/w342/"+e;break;default:break}return a};e["a"]=i},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("b0af"),s=a("80d2");const r=Object(s["h"])("v-card__actions"),n=Object(s["h"])("v-card__subtitle"),o=Object(s["h"])("v-card__text"),c=Object(s["h"])("v-card__title");i["a"]},cf2c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.posterImage?a("v-card",{staticClass:"ma-2 text-center",attrs:{"max-width":t.cardWidth},on:{click:t.goToDetails}},[a("div",[a("v-img",{attrs:{src:t.posterImage,alt:"no image",transition:"fade-transition"}}),a("div",{staticClass:"d-flex flex-column align-center"},[a("v-card-title",{staticClass:"subtitle-1"},[t._v(t._s(t.movie.title))])],1)],1)]):t._e()},s=[],r=a("2b0e"),n=a("5510"),o=r["a"].extend({name:"MoviesItem",props:["movie"],computed:{isMobile:function(){return this.$vuetify.breakpoint.mobile},posterImage:function(){var t=this.movie.poster_path;return t?Object(n["a"])("poster",t):"https://source.unsplash.com/user/anniespratt/yI3weKNBRTc"},cardWidth:function(){return this.isMobile?"120px":"250px"},movieId:function(){return""+this.movie.id}},methods:{goToDetails:function(){this.$router.push({name:"movieDetails",params:{movieId:this.movieId}})}}}),c=o,u=(a("4b82"),a("2877")),d=a("6544"),l=a.n(d),m=a("b0af"),p=a("99d9"),b=a("adda"),v=Object(u["a"])(c,i,s,!1,null,"28d92345",null);e["default"]=v.exports;l()(v,{VCard:m["a"],VCardTitle:p["a"],VImg:b["a"]})}}]);
//# sourceMappingURL=chunk-287cf553.05d55e31.js.map