(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ce9b"],{ce9b:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"characterdetail container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8 offset-2 mt-5"},[t.showLoading?e("div",{staticClass:"loading"},[e("small",[t._v("Fetching character details")])]):e("div",[e("h1",{staticClass:"text-center"},[t._v(t._s(t.character.name||t.character.aliases[0]))]),e("p",{staticClass:"text-center"},[e("small",[e("i",[t._v("("+t._s(t.character.aliases[0])+")")])])]),t.character.books.length?e("p",{staticClass:"text-center"},[t._v("This character appears in "+t._s(t._f("pluralize")(t.character.books.length,"book")))]):t._e(),e("hr"),e("table",{staticClass:"table table-borderless"},[e("tbody",[e("tr",[e("td",[e("b",[t._v("Gender")]),e("span",{staticClass:"float-right"},[t._v(t._s(t.character.gender||"Not available"))])])]),e("tr",[e("td",[e("b",[t._v("Culture")]),e("span",{staticClass:"float-right"},[t._v(t._s(t.character.culture||"Not available"))])])]),e("tr",[e("td",[e("b",[t._v("Born")]),e("span",{staticClass:"float-right"},[t._v(t._s(t.character.born||"Not available"))])])]),e("tr",[e("td",[e("b",[t._v("Died")]),e("span",{staticClass:"float-right"},[t._v(t._s(t.character.died||"Not available"))])])])])])])])])])},s=[],c=(e("cadf"),e("551c"),e("097d"),e("6d46")),i={name:"characterdetail",data:function(){return{character:{},showLoading:!1}},computed:{releaseDate:function(){var t=new Date(this.character.released),a=t.getDate(),e=t.getMonth()+1,r=t.getFullYear();a<10&&(a="0"+a),e<10&&(e="0"+e);return a+"/"+e+"/"+r}},created:function(){var t=this;console.log("character detail component is loaded"),this.showLoading=!0;var a=window.location.pathname,e=a.substring(a.lastIndexOf("/")+1);c["a"].getCharacter(e).then(function(a){t.character=a.data}).catch(function(t){swal({position:"top-end",type:"error",title:"Error occured while fetching the character details",showConfirmButton:!1,timer:2e3,backdrop:!1})}).finally(function(){t.showLoading=!1})}},l=i,n=e("2877"),o=Object(n["a"])(l,r,s,!1,null,null,null);o.options.__file="CharacterDetail.vue";a["default"]=o.exports}}]);
//# sourceMappingURL=ce9b.796750c4.js.map