(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Admin"],{3530:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[s("strong",[e._v("Dashboard")]),s("div",{staticClass:"card"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds"},[s("div",{staticClass:"control"},[s("a",{staticClass:"button is-rounded is-warning",on:{click:function(t){return t.preventDefault(),e.releasedeleteforms(t)}}},[e._v(" Want to delete a user? ")])]),1==e.deleteid?s("div",{staticClass:"field"},[e._m(0),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userid,expression:"userid"}],staticClass:"input",attrs:{type:"Number",placeholder:"User ID"},domProps:{value:e.userid},on:{input:function(t){t.target.composing||(e.userid=t.target.value)}}})]),1==e.deleteid?s("div",{staticClass:"control"},[s("a",{staticClass:"button is-rounded is-danger",on:{click:function(t){return t.preventDefault(),e.deleteuser(t)}}},[e._v(" Delete User ")])]):e._e()]):e._e()])])]),s("div",{staticClass:"card"},[s("table",{staticClass:"table is-narrow is-hoverable is-fullwidth"},[e._m(1),s("tbody",e._l(e.list,(function(t,r){return s("tr",{key:r,attrs:{i:r,post:t}},[s("th",[e._v(e._s(t.id))]),s("td",[e._v(e._s(t.Username))]),s("td",[e._v(e._s(t.Firstname))]),s("td",[e._v(e._s(t.Lastname))]),s("td",[e._v(" "+e._s(t.DOB))]),s("td",[e._v(e._s(t.Password))]),s("td",[e._v(e._s(t.User_Type))])])})),0)])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter User's ID:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("I.D.")]),s("th",[e._v("Username")]),s("th",[e._v("First Name")]),s("th",[e._v("Last Name")]),s("th",[e._v("D.O.B")]),s("th",[e._v("Password")]),s("th",[e._v("User Type")])])])}],a=(s("96cf"),s("1da1")),i=s("bea6"),c=(s("5147"),{data:function(){return{list:[],deleteid:0,userid:null}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["e"])();case 2:e.list=t.sent;case 3:case"end":return t.stop()}}),t)})))()},components:{},methods:{releasedeleteforms:function(){this.deleteid=1},deleteuser:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["c"])(e.userid);case 2:return t.sent,t.next=5,Object(i["e"])();case 5:e.list=t.sent;case 6:case"end":return t.stop()}}),t)})))()}}}),l=c,u=s("2877"),o=Object(u["a"])(l,r,n,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=Admin.69e36298.js.map