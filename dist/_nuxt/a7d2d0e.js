(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{175:function(t,e,r){"use strict";r.r(e);var o={facebook:{url:"https://www.facebook.com/",icon:["fab","facebook"]},website:{url:"",icon:["fas","globe"]},instagram:{url:"https://www.instagram.com/",icon:["fab","instagram"]}},n={name:"IconComponent",props:{link:{type:String,default:null},icon:{type:String,default:null}},data:function(){return{dbIcon:o}}},c=(r(195),r(20)),d={components:{iconComponent:Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.link?r("a",{attrs:{href:t.dbIcon[t.icon].url+t.link}},[r("fa",{staticClass:"icon",attrs:{icon:t.dbIcon[t.icon].icon}})],1):t._e()}),[],!1,null,"8efc7a2a",null).exports},layout:"memberOfTeam",props:{data:{type:Object,default:null}}},m=(r(197),Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"member"},[r("div",{staticClass:"member-inner"},[r("div",{staticClass:"member-front bgColor",style:t.data.style},[r("img",{staticClass:"svg dropShadow",attrs:{src:t.data.svg,alt:t.data.img}})]),t._v(" "),r("div",{staticClass:"member-back bgColor"},[r("h2",[t._v(t._s(t.data.firstName)+" "+t._s(t.data.lastName))]),t._v(" "),t._l(t.data.roles,(function(e,o){return r("h3",{key:o},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),r("p",[t._v(t._s(t.data.description))]),t._v(" "),r("div",{staticClass:"rs dropShadow"},[r("iconComponent",{attrs:{icon:"facebook",link:t.data.facebook}}),t._v(" "),r("iconComponent",{attrs:{icon:"instagram",link:t.data.instagram}}),t._v(" "),r("iconComponent",{attrs:{icon:"website",link:t.data.website}})],1)],2)])])}),[],!1,null,"718b32cc",null));e.default=m.exports},187:function(t,e,r){var content=r(196);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("20decb7a",content,!0,{sourceMap:!1})},188:function(t,e,r){var content=r(198);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("1a0d2c1c",content,!0,{sourceMap:!1})},195:function(t,e,r){"use strict";r(187)},196:function(t,e,r){var o=r(49)(!1);o.push([t.i,".icon[data-v-8efc7a2a]{width:2rem;height:2rem;margin:1rem}",""]),t.exports=o},197:function(t,e,r){"use strict";r(188)},198:function(t,e,r){var o=r(49)(!1);o.push([t.i,".svg[data-v-718b32cc]{margin:1rem auto;height:3rem}h3[data-v-718b32cc]{padding-bottom:.1rem;margin:0}p[data-v-718b32cc]{margin:1rem auto 0;height:100%;width:90%}.member[data-v-718b32cc]{height:18rem;width:18rem;perspective:62rem;background-color:transparent}.member-inner[data-v-718b32cc]{position:relative;width:100%;height:100%;-webkit-animation:rotate-data-v-718b32cc 1s;animation:rotate-data-v-718b32cc 1s;transition:transform .8s;transform-style:preserve-3d}.member-back[data-v-718b32cc],.member:hover .member-inner[data-v-718b32cc]{transform:rotateY(180deg)}.member-back[data-v-718b32cc],.member-front[data-v-718b32cc]{position:absolute;width:100%;height:100%;border-radius:2rem;-webkit-backface-visibility:hidden;backface-visibility:hidden}.member-front[data-v-718b32cc]{display:flex;flex-direction:row;align-items:flex-end;background-repeat:no-repeat;background-size:cover}.member-front *[data-v-718b32cc]{color:#fff}.member-back[data-v-718b32cc]{display:flex;flex-direction:column;align-items:stretch}@-webkit-keyframes rotate-data-v-718b32cc{0%{transform:rotateY(100deg)}to{transform:rotateY(0)}}@keyframes rotate-data-v-718b32cc{0%{transform:rotateY(100deg)}to{transform:rotateY(0)}}",""]),t.exports=o}}]);