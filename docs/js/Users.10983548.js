(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Users"],{ed81:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("h2",{staticClass:"title is-2"},[t._v("Users Page")]),s("div",{staticClass:"card"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds"},[s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.releasefriendforms(e)}}},[t._v(" See someone you want to add to your friends list? ")])]),1==t.addfriendid?s("div",{staticClass:"field"},[t._m(0),t._m(1),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.friendid,expression:"friendid"}],staticClass:"input",attrs:{type:"Number",placeholder:"User ID"},domProps:{value:t.friendid},on:{input:function(e){e.target.composing||(t.friendid=e.target.value)}}})]),1==t.addfriendid?s("div",{staticClass:"control"},[t._m(2),s("a",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.addnewfriend(e)}}},[t._v(" Add a friend! ")])]):t._e()]):t._e()]),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"control"},[s("router-link",{staticClass:"button is-link is-danger",attrs:{to:"/friendlist"}},[s("strong",[t._v("Look at friendslist")])])],1)])])]),s("div",{staticClass:"card"},[s("table",{staticClass:"table is-narrow is-hoverable is-fullwidth"},[t._m(3),s("tbody",t._l(t.list,(function(e,n){return s("tr",{key:n,attrs:{i:n,post:e}},[s("th",[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.Username))]),s("td",[t._v(t._s(e.Firstname))]),s("td",[t._v(t._s(e.Lastname))]),s("td",[t._v(" "+t._s(e.DOB))]),s("td",[t._v(t._s(e.User_Type))])])})),0)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[s("strong",[t._v("Add a friend with the following inputs!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"label"},[s("strong",[t._v("Enter the id of the user you want to add:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"label"},[s("strong",[t._v("After you hit the add friend button hit the view friends button to look at your list of friends:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("id")]),s("th",[t._v("Username")]),s("th",[t._v("First Name")]),s("th",[t._v("Last Name")]),s("th",[t._v("DOB")]),s("th",[t._v("User Type")])])])}],r=(s("96cf"),s("1da1")),a=s("bea6"),d=s("5147"),o={data:function(){return{list:[],addfriendid:0,friendid:null}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["d"])();case 2:t.list=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{},methods:{releasefriendforms:function(){this.addfriendid=1},addnewfriend:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=d["a"].user_id,console.log(t.friendid),console.log(s),e.next=5,Object(a["a"])(t.friendid,s);case 5:e.sent;case 6:case"end":return e.stop()}}),e)})))()}}},l=o,c=s("2877"),u=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=Users.10983548.js.map