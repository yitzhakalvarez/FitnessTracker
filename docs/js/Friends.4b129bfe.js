(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Friends"],{"6c40":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[s("h2",{staticClass:"title is-2"},[e._v("List of users")]),s("div",{staticClass:"card"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"},[s("p",[s("strong",[e._v("User: "+e._s(e.session.user.name)),s("br")])]),s("p",[s("strong",[e._v("User ID: "+e._s(e.session.user_id)),s("br")])]),s("div",{staticClass:"control"},[s("router-link",{staticClass:"button is-rounded",attrs:{to:"/users"}},[e._v("Add Friends")])],1)]),s("div",{staticClass:"column is-one-third is-offset-one-quarter"},[s("div",{staticClass:"control"},[s("a",{staticClass:"button is-rounded",on:{click:function(t){return t.preventDefault(),e.releasedeleteforms(t)}}},[e._v(" Remove Friends ")])]),1==e.deletefriend?s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Enter the id of the user you want to delete:")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.friendid,expression:"friendid"}],staticClass:"input",attrs:{type:"Number",placeholder:"User ID"},domProps:{value:e.friendid},on:{input:function(t){t.target.composing||(e.friendid=t.target.value)}}})]),1==e.deletefriend?s("div",{staticClass:"control"},[s("label",{staticClass:"label"},[e._v("Look at your friends")]),s("a",{staticClass:"button is-rounded",on:{click:function(t){return t.preventDefault(),e.deletefriendfromtable(t)}}},[e._v(" Delete a friend! ")])]):e._e()]):e._e()])]),s("table",{staticClass:"table is-narrow is-hoverable is-fullwidth"},[e._m(0),s("tbody",e._l(e.list,(function(t,r){return s("tr",{key:r,attrs:{i:r,post:t}},[s("th",[e._v(e._s(t.id))]),s("td",[e._v(e._s(t.Firstname))]),s("td",[e._v(e._s(t.Lastname))]),s("td",[e._v(e._s(t.DOB))]),s("td",[e._v(e._s(t.User_Type))])])})),0)])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("id")]),s("th",[e._v("Friends Firstname")]),s("th",[e._v("Friends Last Name")]),s("th",[e._v("DOB")]),s("th",[e._v("Type")])])])}],i=(s("96cf"),s("1da1")),a=s("bea6"),o=s("5147"),l={data:function(){return{list:[],session:o["a"],deleteuserfriend:0,friendid:null,deletefriend:0}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=o["a"].user_id,t.next=3,Object(a["f"])(s);case 3:e.list=t.sent;case 4:case"end":return t.stop()}}),t)})))()},components:{},methods:{created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=o["a"].user_id,t.next=3,Object(a["f"])(s);case 3:e.list=t.sent;case 4:case"end":return t.stop()}}),t)})))()},deletefriendfromtable:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=o["a"].user_id,t.next=3,Object(a["b"])(e.friendid,s);case 3:return t.sent,t.next=6,Object(a["f"])(s);case 6:e.list=t.sent;case 7:case"end":return t.stop()}}),t)})))()},releasedeleteforms:function(){this.deletefriend=1}}},d=l,c=s("2877"),u=Object(c["a"])(d,r,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=Friends.4b129bfe.js.map