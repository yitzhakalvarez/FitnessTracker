(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Users"],{ed81:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[s("strong",[e._v("Users Page")]),s("div",{staticClass:"card"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-thirds"},[s("div",{staticClass:"control"},[s("a",{staticClass:"button is-rounded is-info",on:{click:function(t){return t.preventDefault(),e.releasefriendforms(t)}}},[e._v(" Add friend to list ")])]),1==e.addfriendid?s("div",{staticClass:"field"},[e._m(0),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.friendid,expression:"friendid"}],staticClass:"input",attrs:{type:"Number",placeholder:"User ID"},domProps:{value:e.friendid},on:{input:function(t){t.target.composing||(e.friendid=t.target.value)}}})]),1==e.addfriendid?s("div",{staticClass:"control"},[s("a",{staticClass:"button is-rounded is-success",on:{click:function(t){return t.preventDefault(),e.addnewfriend(t)}}},[e._v(" Click add friend! ")])]):e._e()]):e._e(),s("div",{staticClass:"control"},[s("router-link",{staticClass:"button is-rounded is-black",attrs:{to:"/friends"}},[e._v("Find Friends")])],1)])])]),s("div",{staticClass:"card"},[s("table",{staticClass:"table is-narrow is-hoverable is-fullwidth"},[e._m(1),s("tbody",e._l(e.list,(function(t,n){return s("tr",{key:n,attrs:{i:n,post:t}},[s("th",[e._v(e._s(t.id))]),s("td",[e._v(e._s(t.Username))]),s("td",[e._v(e._s(t.Firstname))]),s("td",[e._v(e._s(t.Lastname))]),s("td",[e._v(" "+e._s(t.DOB))]),s("td",[e._v(e._s(t.User_Type))])])})),0)])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter User's ID:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("I.D.")]),s("th",[e._v("Username")]),s("th",[e._v("First Name")]),s("th",[e._v("Last Name")]),s("th",[e._v("D.O.B")]),s("th",[e._v("User Type")])])])}],i=(s("96cf"),s("1da1")),a=s("bea6"),d=s("5147"),c={data:function(){return{list:[],addfriendid:0,friendid:null}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["d"])();case 2:e.list=t.sent;case 3:case"end":return t.stop()}}),t)})))()},components:{},methods:{releasefriendforms:function(){this.addfriendid=1},addnewfriend:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=d["a"].user_id,console.log(e.friendid),console.log(s),t.next=5,Object(a["a"])(e.friendid,s);case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()}}},o=c,l=s("2877"),u=Object(l["a"])(o,n,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=Users.76809fe0.js.map