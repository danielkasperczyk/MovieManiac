(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-595a7202"],{"011b":function(t,e,i){},"4b82":function(t,e,i){"use strict";i("011b")},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("b0af"),s=i("80d2");const n=Object(s["h"])("v-card__actions"),r=Object(s["h"])("v-card__subtitle"),o=Object(s["h"])("v-card__text"),c=Object(s["h"])("v-card__title");a["a"]},cf2c:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.posterImage?i("v-card",{staticClass:"ma-2 text-center",attrs:{"max-width":t.cardWidth},on:{click:t.goToDetails}},[i("div",[i("v-img",{attrs:{src:t.posterImage,alt:"no image",transition:"fade-transition"}}),i("div",{staticClass:"d-flex flex-column align-center"},[i("v-card-title",{staticClass:"subtitle-1"},[t._v(t._s(t.movie.title))])],1)],1)]):t._e()},s=[],n=i("2b0e"),r=i("5510"),o=n["a"].extend({name:"MoviesItem",props:["movie"],computed:{isMobile:function(){return this.$vuetify.breakpoint.mobile},posterImage:function(){var t=this.movie.poster_path;return t?Object(r["a"])("poster",t):"https://source.unsplash.com/user/anniespratt/yI3weKNBRTc"},cardWidth:function(){return this.isMobile?"120px":"250px"},movieId:function(){return""+this.movie.id}},methods:{goToDetails:function(){this.$router.push({name:"movieDetails",params:{movieId:this.movieId}})}}}),c=o,u=(i("4b82"),i("2877")),d=i("6544"),l=i.n(d),m=i("b0af"),v=i("99d9"),p=i("adda"),b=Object(u["a"])(c,a,s,!1,null,"28d92345",null);e["default"]=b.exports;l()(b,{VCard:m["a"],VCardTitle:v["a"],VImg:p["a"]})}}]);
//# sourceMappingURL=chunk-595a7202.4234d3e2.js.map