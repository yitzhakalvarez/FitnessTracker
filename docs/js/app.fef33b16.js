(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},i={app:0},r=[];function o(t){return l.p+"js/"+({Admin:"Admin",Calendar:"Calendar",Feed:"Feed",Friends:"Friends",Tracker:"Tracker",Users:"Users",about:"about",autoselect:"autoselect",timer:"timer"}[t]||t)+"."+{Admin:"69e36298",Calendar:"3e3ac7c3",Feed:"32e1eb90",Friends:"404aa16f",Tracker:"fed1edf5",Users:"76809fe0",about:"f4ebff7d",autoselect:"660533c7",timer:"1b042796"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={Calendar:1,Feed:1,timer:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({Admin:"Admin",Calendar:"Calendar",Feed:"Feed",Friends:"Friends",Tracker:"Tracker",Users:"Users",about:"about",autoselect:"autoselect",timer:"timer"}[t]||t)+"."+{Admin:"31d6cfe0",Calendar:"8117c14f",Feed:"d52b9e9f",Friends:"31d6cfe0",Tracker:"31d6cfe0",Users:"31d6cfe0",about:"31d6cfe0",autoselect:"31d6cfe0",timer:"40b3ccaf"}[t]+".css",i=l.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===n||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete s[t],f.parentNode.removeChild(f),a(r)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){s[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}i[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2cfd":function(t,e,a){"use strict";var n=a("e314"),s=a.n(n);s.a},5147:function(t,e,a){"use strict";a("a434");var n={user:null,username:null,user_id:null,usertype:null,notifications:[],addNotification:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.notifications.push({text:t,type:e})},deleteNotification:function(t){this.notifications.splice(t,1)}};e["a"]=n},"53c4":function(t,e,a){},"56d5":function(t,e,a){"use strict";var n=a("b7a6"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Nav"),a("div",{staticClass:"container"},[a("Notifications"),a("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar container is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[t._m(0),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.isActive=!t.isActive}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/tracker"}},[t._v("Tracker")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/feed"}},[t._v("Feed")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/calendar"}},[t._v("Calendar")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/timer"}},[t._v("Timer")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/autoselect"}},[t._v("Select")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v("Friends")]),a("div",{staticClass:"navbar-dropdown"},[a("a",{staticClass:"navbar-item"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/users"}},[t._v("Add Friends")])],1),a("a",{staticClass:"navbar-item"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/friends"}},[a("strong",[t._v("Friends")])])],1)])]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" Admin ")]),a("div",{staticClass:"navbar-dropdown"},[a("a",{staticClass:"navbar-item"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/admin"}},[t._v("Users")])],1)])])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("LoginBadge"),a("Signout")],1)])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-item",attrs:{href:"/"}},[n("img",{attrs:{src:a("838b"),height:"28"}}),n("strong",{staticClass:"is-size-4"},[t._v("Fitness Tracker")])])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"LoginBadge"}},[t.session.user?a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.session.user.profile,alt:"Placeholder image"}})])]),a("div",{staticClass:"media-content"},[a("p",{staticClass:"has-text-weight-bold"},[t._v(t._s(t.session.user.name))]),a("p",{staticClass:"is-size-7"},[t._v("@"+t._s(t.session.user.handle))])])]):a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button is-rounded is-primary",attrs:{to:"/register"}},[t._v("Register")]),a("router-link",{staticClass:"button is-rounded is-light",attrs:{to:"/login"}},[t._v("Log in")])],1)])},c=[],u=a("5147"),d={data:function(){return{session:u["a"]}}},f=d,m=a("2877"),v=Object(m["a"])(f,l,c,!1,null,null,null),A=v.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"LoginBadge"}},[t.session.user?a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("a",{staticClass:"button is-rounded is-danger",on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[a("strong",[t._v("Log Out")])])])]):t._e()])},b=[],g={data:function(){return{session:u["a"]}},methods:{signout:function(){u["a"].user=null,u["a"].username=null,u["a"].user_id=null,u["a"].addNotification("You have succesfully signed out"),this.$router.push("Login")}}},C=g,h=Object(m["a"])(C,p,b,!1,null,null,null),w=h.exports,_={data:function(){return{isActive:!1,session:u["a"],isAdmin:u["a"].usertype}},methods:{},components:{LoginBadge:A,Signout:w}},y=_,E=Object(m["a"])(y,r,o,!1,null,null,null),T=E.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"notifications"}},t._l(t.session.notifications,(function(e,n){return a("div",{key:n,staticClass:"notification",class:"is-"+e.type},[a("button",{staticClass:"delete",on:{click:function(e){return t.deleteNotification(n)}}}),t._v(" "+t._s(e.text)+" ")])})),0)},N=[],O={data:function(){return{session:u["a"]}},methods:{deleteNotification:function(t){u["a"].deleteNotification(t)}}},j=O,F=(a("cf45"),Object(m["a"])(j,k,N,!1,null,null,null)),x=F.exports,U={components:{Nav:T,Notifications:x}},P=U,B=Object(m["a"])(P,s,i,!1,null,null,null),S=B.exports,R=(a("d3b7"),a("8c4f")),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("section",{staticClass:"hero is-dark"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v(" Welcome to Yitzhak's Fitness Tracker ")]),a("h2",{staticClass:"subtitle"},[t._v(" Make sure you register to keep up with your calories count. ")]),a("div",{staticClass:"control"},[a("router-link",{staticClass:"button is-primary is-medium is-rounded",attrs:{to:"/register"}},[t._v("Register")])],1)])])]),a("Nav")],1)},K=[],H={name:"Home",components:{}},J=H,z=(a("56d5"),Object(m["a"])(J,L,K,!1,null,"76770600",null)),I=z.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("h2",{staticStyle:{"text-align":"center"}},[t._v("Login with Social Media or Manually")]),t._m(0),a("div",{staticClass:"col"},[a("button",{staticClass:"fb btn",on:{click:function(e){return e.preventDefault(),t.fbLogin(e)}}},[a("i",{staticClass:"fab fa-facebook"}),t._v(" Login with Facebook ")]),a("button",{staticClass:"google btn",on:{click:function(e){return e.preventDefault(),t.googleLogin(e)}}},[a("i",{staticClass:"fab fa-google"}),t._v(" Login with Google ")]),a("button",{staticClass:"github btn",on:{click:function(e){return e.preventDefault(),t.githubLogin(e)}}},[a("i",{staticClass:"fab fa-github"}),t._v(" Login with GitHub ")]),a("button",{staticClass:"twitter btn",on:{click:function(e){return e.preventDefault(),t.twitterLogin(e)}}},[a("i",{staticClass:"fab fa-twitter"}),t._v(" Login with Twitter ")])]),a("div",{staticClass:"col"},[t._m(1),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:""}},[t._v("E-Mail:")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",id:"email",placeholder:"john.doe@gmail.com",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(2)])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:""}},[t._v("Password:")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",id:"loginPassword",placeholder:"*******",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(3)])]),a("div",{staticClass:"control"},[a("button",{staticClass:"login btn",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v(" Login ")])])])]),a("div",{staticClass:"bottom-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("router-link",{staticClass:"btn",staticStyle:{color:"white"},attrs:{to:"/register"}},[t._v("Register")])],1),t._m(4)])])])])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vl"},[a("span",{staticClass:"vl-innertext"},[t._v("or")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hide-md-lg"},[a("p",[t._v("Or sign in manually:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fa fa-lock"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("a",{staticClass:"btn",staticStyle:{color:"white"}},[t._v("Forgot password?")])])}],Y=(a("96cf"),a("1da1")),W=a("bea6"),X={data:function(){return{email:"",password:""}},methods:{Login:function(){var t=this;return Object(Y["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(W["g"])(t.email,t.password);case 2:a=e.sent,a?(u["a"].user={name:a[0].Firstname+" "+a[0].Lastname,handle:a[0].Value},u["a"].user_id=a[0].User_id,u["a"].usertype=a[0].User_Type,u["a"].username=a[0].Username,u["a"].addNotification("Yay! You logged in","success"),t.$router.push("Tracker")):u["a"].addNotification("wrong email or password");case 4:case"end":return e.stop()}}),e)})))()}}},Q=X,q=(a("d6db"),Object(m["a"])(Q,D,M,!1,null,null,null)),G=q.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{attrs:{id:"app"}},[a("div",{staticClass:"section"},[t._m(0),a("div",{staticClass:"title"},[t._v("Sign Up")]),a("div",{staticClass:"subtitle"},[t._v("With Your Email")]),a("form",{attrs:{id:"register-form"}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"username"}},[t._v("Username:")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username",name:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._m(1)]),a("label",{staticClass:"label",attrs:{for:"email"}},[t._v("E-Mail:")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(2)]),a("div",{staticClass:"columns row-one"},[a("div",{staticClass:"column"},[a("label",{staticClass:"label",attrs:{for:"firstName"}},[t._v("First Name:")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstname,expression:"firstname"}],staticClass:"input",attrs:{type:"text",placeholder:"First Name",name:"firstName"},domProps:{value:t.firstname},on:{input:function(e){e.target.composing||(t.firstname=e.target.value)}}})])]),a("div",{staticClass:"column"},[a("label",{staticClass:"label",attrs:{for:"lastName"}},[t._v("Last Name:")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"lastname"}],staticClass:"input",attrs:{type:"text",placeholder:"Last Name",name:"lastName"},domProps:{value:t.lastname},on:{input:function(e){e.target.composing||(t.lastname=e.target.value)}}})])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("label",{staticClass:"label",attrs:{for:"password"}},[t._v("Password:")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(3)])])]),a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control"},[a("router-link",{staticClass:"button is-danger is-medium is-rounded",attrs:{to:"/login"}},[t._v("Cancel")])],1),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary is-medium is-rounded",on:{click:function(e){return e.preventDefault(),t.signup(e)}}},[t._v(" Register ")])])])])])])])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"media is-pulled-right"},[a("div",{staticClass:"media-content"},[a("span",{staticClass:"has-text-center"},[t._v("Connect With:")]),a("br"),a("div",{staticClass:"field is-grouped"}),a("div",{staticClass:"control"},[a("button",{staticClass:"github button is-rounded githubSignin"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-github"})]),a("p",[t._v("Sign In")])]),a("button",{staticClass:"google button is-rounded googleSignin"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-google"})]),a("p",[t._v("Sign In")])]),a("button",{staticClass:"fb button is-rounded facebookSignin"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-facebook"})]),a("p",[t._v("Sign In")])]),a("button",{staticClass:"twitter button is-rounded twitterSignin"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-twitter"})]),a("p",[t._v("Sign In")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-left"},[a("i",{staticClass:"fa"},[t._v("user")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-left"},[a("i",{staticClass:"fa"},[t._v("envelope-square")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-left"},[a("i",{staticClass:"fa"},[t._v("key")])])}],$={data:function(){return{email:"",password:"",username:"",firstname:"",lastname:""}},methods:{signup:function(){var t=this;return Object(Y["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.year+"-"+t.month+"-"+t.day,e.next=3,Object(W["h"])(t.username,t.firstname,t.lastname,a,t.password,t.email);case 3:u["a"].addNotification("Registered Success"),t.$router.push("Login");case 5:case"end":return e.stop()}}),e)})))()}}},tt=$,et=(a("2cfd"),Object(m["a"])(tt,Z,V,!1,null,null,null)),at=et.exports;n["a"].use(R["a"]);var nt=[{path:"/",name:"Home",component:I},{path:"/login",name:"Login",component:G},{path:"/calendar",name:"Calendar",component:function(){return a.e("Calendar").then(a.bind(null,"ac0f"))}},{path:"/timer",name:"Timer",component:function(){return a.e("timer").then(a.bind(null,"69a5"))}},{path:"/users",name:"Users",component:function(){return a.e("Users").then(a.bind(null,"ed81"))},beforeEnter:rt},{path:"/autoselect",name:"Autoselect",component:function(){return a.e("autoselect").then(a.bind(null,"98d9"))}},{path:"/register",name:"Register",component:at},{path:"/friends",name:"Friends",component:function(){return a.e("Friends").then(a.bind(null,"6c40"))},beforeEnter:rt},{path:"/feed",name:"Feed",component:function(){return a.e("Feed").then(a.bind(null,"4787"))},beforeEnter:rt},{path:"/admin",name:"Admin",component:function(){return a.e("Admin").then(a.bind(null,"3530"))},beforeEnter:rt},{path:"/tracker",name:"Tracker",component:function(){return a.e("Tracker").then(a.bind(null,"cc57"))},beforeEnter:rt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],st=new R["a"]({mode:"history",base:"",routes:nt}),it=st;function rt(t,e,a){u["a"].user?a():a("Login")}var ot=a("289d");a("5abe"),a("15f5");n["a"].use(ot["a"]),n["a"].config.productionTip=!1,new n["a"]({router:it,render:function(t){return t(S)}}).$mount("#app")},"773f":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("d3b7");var n=Object({NODE_ENV:"production",BASE_URL:""}).API_ROOT||"/";function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?fetch(n+t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})):fetch(n+t).then((function(t){return t.json()}))}},"838b":function(t,e){t.exports="data:image/png;base64,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"},b7a6:function(t,e,a){},bea6:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"g",(function(){return r})),a.d(e,"h",(function(){return o})),a.d(e,"f",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return d}));var n=a("773f");a("5147");function s(){return Object(n["a"])("users")}function i(){return Object(n["a"])("users/usertableforadmin")}function r(t,e){return Object(n["a"])("users/login",{email:t,password:e})}function o(t,e,a,s,i,r){return Object(n["a"])("users/register",{UserName:t,FirstName:e,LastName:a,DOB:s,Password:i,Email:r})}function l(t){return Object(n["a"])("friendlist/friendslist",{Owner_id:t})}function c(t){return Object(n["a"])("users/delete",{id:t})}function u(t,e){return Object(n["a"])("friendlist/add_Friend",{Friends_id:t,Owner_id:e})}function d(t,e){return Object(n["a"])("friendlist/delete_Friend",{Friends_id:t,Owner_id:e})}},cf45:function(t,e,a){"use strict";var n=a("53c4"),s=a.n(n);s.a},d6db:function(t,e,a){"use strict";var n=a("e67a"),s=a.n(n);s.a},e314:function(t,e,a){},e67a:function(t,e,a){}});
//# sourceMappingURL=app.fef33b16.js.map