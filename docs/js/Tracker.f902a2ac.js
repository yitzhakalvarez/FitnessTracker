(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Tracker"],{"9de4":function(e,t,s){"use strict";s.d(t,"d",(function(){return n})),s.d(t,"a",(function(){return r})),s.d(t,"g",(function(){return a})),s.d(t,"b",(function(){return c})),s.d(t,"e",(function(){return o})),s.d(t,"f",(function(){return l})),s.d(t,"h",(function(){return u})),s.d(t,"c",(function(){return d}));var i=s("773f");s("5147");function n(e){return Object(i["a"])("Exercises/UserTable",{User_id:e})}function r(e,t,s,n,r,a,c,o,l,u){return Object(i["a"])("Exercises",{Time_Spent:e,Calories_Burned:t,Favorite_Exercise:s,Exercise_Type_id:n,Distance:r,Exercise_Sets:a,Reps_Per_Set:c,Lifting_Weight:o,BodyWeight:l,User_id:u})}function a(e){return Object(i["a"])("reactions",{Exercise_id:e,Owner_id:1})}function c(e,t,s){return Object(i["a"])("comments",{Exercise_id:e,Owner_id:t,Text:s})}function o(){return Object(i["a"])("exercisetypes")}function l(){return Object(i["a"])("names_exercises/getexercisenames")}function u(e,t,s,n,r,a,c,o,l,u,d){return Object(i["a"])("Exercises/updatexercise",{id:e,Time_Spent:t,Calories_Burned:s,Favorite_Exercise:n,Exercise_Type_id:r,Distance:a,Exercise_Sets:c,Reps_Per_Set:o,Lifting_Weight:l,BodyWeight:u,User_id:d})}function d(e,t){return Object(i["a"])("Exercises/delete",{id:e,User_id:t})}},cc57:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[s("strong",[e._v("Fitness Page")]),s("div",{staticClass:"container"},[s("Fitness"),s("router-view")],1)])},n=[],r=(s("96cf"),s("1da1")),a=s("5147"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",[s("p",[s("strong",[e._v("User: "+e._s(e.session.user.name)),s("br")])]),s("p",[s("strong",[e._v("User ID: "+e._s(e.session.user_id)),s("br")])]),s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.created(t)}}},[e._v(" View All Exercises ")])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[e._m(0),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.bodyweight,expression:"bodyweight"}],staticClass:"input",attrs:{type:"Number",placeholder:"Weight"},domProps:{value:e.bodyweight},on:{input:function(t){t.target.composing||(e.bodyweight=t.target.value)}}}),s("p",[s("strong",[e._v("You entered "+e._s(e.bodyweight)+"kg for your bodyweight")])])])])])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"},[e.bodyweight>0?s("div",{staticClass:"control"},[e._m(1),s("div",{staticClass:"dropdown is-active"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.exercise_Type_id,expression:"exercise_Type_id"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.exercise_Type_id=t.target.multiple?s:s[0]}}},e._l(e.options,(function(t){return s("option",{key:t.value},[e._v(" "+e._s(t.text)+" ")])})),0),s("span",[e._v(" Selected: "+e._s(e.exercise_Type_id))])])]):e._e()]),s("div",{staticClass:"column is-one-third"},[2==e.exercise_Type_id||3==e.exercise_Type_id||4==e.exercise_Type_id||5==e.exercise_Type_id?s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[s("strong",[e._v("You selected: "+e._s(e.options[e.exercise_Type_id-1].text))])]),s("div",{staticClass:"control"},[e._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:e.distance,expression:"distance"}],staticClass:"input",attrs:{type:"Number",placeholder:"Miles Ran"},domProps:{value:e.distance},on:{input:function(t){t.target.composing||(e.distance=t.target.value)}}}),s("p",[s("strong",[e._v("You entered "+e._s(e.distance)+" miles for the distance you travelled")])])]),s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.releaseaddexerciseform(t)}}},[e._v(" Continue ")])])]):e._e(),1==e.exercise_Type_id||6==e.exercise_Type_id?s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[s("strong",[e._v("You selected: "+e._s(e.options[e.exercise_Type_id-1].text))])]),s("div",{staticClass:"control"},[e._m(3),s("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],staticClass:"input",attrs:{type:"Number",placeholder:"Weight"},domProps:{value:e.weight},on:{input:function(t){t.target.composing||(e.weight=t.target.value)}}}),s("p",[s("strong",[e._v("You entered "+e._s(e.weight)+"kg for the amount of weight you lifted")])])]),s("div",{staticClass:"control"},[e._m(4),s("input",{directives:[{name:"model",rawName:"v-model",value:e.sets,expression:"sets"}],staticClass:"input",attrs:{type:"Number",placeholder:"Sets"},domProps:{value:e.sets},on:{input:function(t){t.target.composing||(e.sets=t.target.value)}}}),s("p",[s("strong",[e._v("You entered "+e._s(e.sets)+" for the amount of sets you did")])])]),s("div",{staticClass:"control"},[e._m(5),s("input",{directives:[{name:"model",rawName:"v-model",value:e.reps,expression:"reps"}],staticClass:"input",attrs:{type:"Number",placeholder:"Reps"},domProps:{value:e.reps},on:{input:function(t){t.target.composing||(e.reps=t.target.value)}}}),s("p",[s("strong",[e._v("You entered "+e._s(e.reps)+" for the amount of reps you did")])])]),s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.releaseaddexerciseform(t)}}},[e._v(" Continue ")])])]):e._e()]),1==e.addexerciseto?s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[e._m(6),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.time_Spent,expression:"time_Spent"}],staticClass:"input",attrs:{type:"Number",placeholder:"Enter the amount of minutes you spent exercising"},domProps:{value:e.time_Spent},on:{input:function(t){t.target.composing||(e.time_Spent=t.target.value)}}}),s("p",[s("strong",[e._v("You entered "+e._s(e.time_Spent)+" minutes for the amount of time you spent exercising")])])]),s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addexercise(t)}}},[e._v(" Enter Exercise ")])])])]):e._e()]),s("table",{staticClass:"table is-narrow is-hoverable is-fullwidth"},[e._m(7),s("tbody",e._l(e.list,(function(t,i){return s("tr",{key:i,attrs:{i:i,post:t}},[s("th",[e._v(e._s(t.id))]),s("td",[e._v(e._s(t.Exercise_Type))]),s("td",[e._v(e._s(t.BodyWeight)+" kg")]),s("td",[e._v(e._s(t.Time_Spent)+" minutes")]),s("td",[e._v(e._s(t.Distance)+" miles")]),s("td",[e._v(e._s(t.Lifting_Weight)+" kg")]),s("td",[e._v(e._s(t.Exercise_Sets))]),s("td",[e._v(e._s(t.Reps_Per_Set))]),s("td",[e._v(e._s(t.Calories_Burned)+" kcal")])])})),0)]),s("div",{staticClass:"card"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds"},[s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.releaseupdateforms(t)}}},[e._v(" Want to update a row on the exercise table? ")])]),1==e.updatexercise?s("div",{staticClass:"field"},[e._m(8),e._m(9),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.updatexercise_id,expression:"updatexercise_id"}],staticClass:"input",attrs:{type:"Number",placeholder:"Exercise ID"},domProps:{value:e.updatexercise_id},on:{input:function(t){t.target.composing||(e.updatexercise_id=t.target.value)}}})])]):e._e(),1==e.updatexercise?s("div",{staticClass:"field"},[e._m(10),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.updatebodyweight,expression:"updatebodyweight"}],staticClass:"input",attrs:{type:"Number",placeholder:"Exercise ID"},domProps:{value:e.updatebodyweight},on:{input:function(t){t.target.composing||(e.updatebodyweight=t.target.value)}}}),s("p",[s("strong",[e._v("You entered "+e._s(e.updatebodyweight)+"kg for your new bodyweight")])])])]):e._e(),1==e.updatexercise?s("div",{staticClass:"control"},[e._m(11),s("div",{staticClass:"dropdown is-active"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.update_exercise_type_id,expression:"update_exercise_type_id"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.update_exercise_type_id=t.target.multiple?s:s[0]}}},e._l(e.update_options,(function(t){return s("option",{key:t.value},[e._v(" "+e._s(t.text)+" ")])})),0),s("span",[e._v(" Selected: "+e._s(e.update_exercise_type_id))])])]):e._e(),1!=e.updatexercise||2!=e.update_exercise_type_id&&3!=e.update_exercise_type_id&&4!=e.update_exercise_type_id&&5!=e.update_exercise_type_id?e._e():s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[s("strong",[e._v("You selected: "+e._s(e.update_options[e.update_exercise_type_id-1].text))])]),s("div",{staticClass:"control"},[e._m(12),s("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedistance,expression:"updatedistance"}],staticClass:"input",attrs:{type:"Number",placeholder:"Miles Ran"},domProps:{value:e.updatedistance},on:{input:function(t){t.target.composing||(e.updatedistance=t.target.value)}}}),s("p",[s("strong",[e._v("You entered "+e._s(e.updatedistance)+"miles for the distance you travelled")])])])]),1!=e.updatexercise||1!=e.update_exercise_type_id&&6!=e.update_exercise_type_id?e._e():s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[s("strong",[e._v("You selected: "+e._s(e.update_options[e.update_exercise_type_id-1].text))])]),s("div",{staticClass:"control"},[e._m(13),s("input",{directives:[{name:"model",rawName:"v-model",value:e.updateweight,expression:"updateweight"}],staticClass:"input",attrs:{type:"Number",placeholder:"Weight"},domProps:{value:e.updateweight},on:{input:function(t){t.target.composing||(e.updateweight=t.target.value)}}}),s("p",[s("strong",[e._v("You entered "+e._s(e.updateweight)+"kg for your updated lifting weight")])])]),s("div",{staticClass:"control"},[e._m(14),s("input",{directives:[{name:"model",rawName:"v-model",value:e.updatesets,expression:"updatesets"}],staticClass:"input",attrs:{type:"Number",placeholder:"Sets"},domProps:{value:e.updatesets},on:{input:function(t){t.target.composing||(e.updatesets=t.target.value)}}})]),s("div",{staticClass:"control"},[e._m(15),s("input",{directives:[{name:"model",rawName:"v-model",value:e.updatereps,expression:"updatereps"}],staticClass:"input",attrs:{type:"Number",placeholder:"Reps"},domProps:{value:e.updatereps},on:{input:function(t){t.target.composing||(e.updatereps=t.target.value)}}})])]),1==e.updatexercise?s("div",{staticClass:"field"},[e._m(16),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.update_time_Spent,expression:"update_time_Spent"}],staticClass:"input",attrs:{type:"Number",placeholder:"Enter the amount of minutes you spent exercising"},domProps:{value:e.update_time_Spent},on:{input:function(t){t.target.composing||(e.update_time_Spent=t.target.value)}}}),s("p",[s("strong",[e._v("You entered "+e._s(e.update_time_Spent)+"minutes for the amount of time you spent exercising")])])]),s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.updatexercisetable(t)}}},[e._v(" Update Exercise Row ")])])]):e._e()]),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.releasedeleteforms(t)}}},[e._v(" Want to delete a row on the exercise table? ")])]),1==e.deletexercise?s("div",{staticClass:"field"},[e._m(17),e._m(18),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.deletexercise_id,expression:"deletexercise_id"}],staticClass:"input",attrs:{type:"Number",placeholder:"Exercise ID:"},domProps:{value:e.deletexercise_id},on:{input:function(t){t.target.composing||(e.deletexercise_id=t.target.value)}}})])]):e._e(),1==e.deletexercise?s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.deleteexerciserow(t)}}},[e._v(" Delete Exercise Row ")])]):e._e()])])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Please Enter Your Weight in KG(has to be greater than zero):")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("strong",[e._v("Please Select An Excercise:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter the distance you travelled in miles:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter the amount of weight you lifted in KG: ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter the amount of sets:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter the amount reps:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter the amount of time you spent exercising in minutes and then once you have finished entering all your information press the add exercise button:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("id")]),s("th",[e._v("Exercise")]),s("th",[e._v("Body Weight")]),s("th",[e._v("Time Spent Exercising ")]),s("th",[e._v("Distance")]),s("th",[e._v("Lifting Weight")]),s("th",[e._v("Sets")]),s("th",[e._v("Reps")]),s("th",[e._v("Calories Burned")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",[s("strong",[e._v("Update Your Exercises With The Following Fields")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter Exercise ID:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter your new bodyweight in kg:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("strong",[e._v("Please Select An Excercise:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter the distance you travelled in miles:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter the amount of weight you lifted in kg:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter the amount of sets:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter the amount reps:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter the amount of time you spent exercising and then once you have finished entering all your information press the add exercise button:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",[s("strong",[e._v("Update Your Exercises With The Following Fields")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"label"},[s("strong",[e._v("Enter Exercise ID:")])])}],l=s("9de4"),u={data:function(){return{session:a["a"],bodyweight:0,exercise_id:0,updatexercise_id:0,deletexercise_id:0,addexerciseto:0,updatexercise:0,deletexercise:0,favorite_Exercise:1,list:[],reps:0,weight:0,distance:0,time_Spent:0,sets:0,exercise_Type_id:null,options:[{value:1,text:"Bench Press"},{value:2,text:"Running"},{value:3,text:"Bicycling"},{value:4,text:"Swimming"},{value:5,text:"Walking"},{value:6,text:"Squatting"}],update_exercise_type_id:null,update_time_Spent:0,updatebodyweight:0,updatedistance:0,updatesets:0,updatereps:0,updateweight:0,update_options:[{value:1,text:"Bench Press"},{value:2,text:"Running"},{value:3,text:"Bicycling"},{value:4,text:"Swimming"},{value:5,text:"Walking"},{value:6,text:"Squatting"}]}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=a["a"].user_id,console.log(s),t.next=4,Object(l["d"])(s);case 4:e.list=t.sent;case 5:case"end":return t.stop()}}),t)})))()},methods:{created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=a["a"].user_id,t.next=3,Object(l["d"])(s);case 3:e.list=t.sent;case 4:case"end":return t.stop()}}),t)})))()},addexercise:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=a["a"].user_id,t.next=3,Object(l["e"])();case 3:return i=t.sent,n=e.calculatecalories(i[e.exercise_Type_id-1].MET_Score,e.bodyweight,e.time_Spent),t.next=7,Object(l["a"])(e.time_Spent,n,e.favorite_Exercise,e.exercise_Type_id,e.distance,e.sets,e.reps,e.weight,e.bodyweight,s);case 7:return t.sent,e.addexercise=1,t.next=11,Object(l["d"])(s);case 11:e.list=t.sent;case 12:case"end":return t.stop()}}),t)})))()},updatexercisetable:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=a["a"].user_id,t.next=3,Object(l["e"])();case 3:return i=t.sent,n=e.calculatecalories(i[e.update_exercise_type_id-1].MET_Score,e.updatebodyweight,e.update_time_Spent),console.log("this is the calories burned"),console.log(n),t.next=9,Object(l["h"])(e.updatexercise_id,e.update_time_Spent,n,e.favorite_Exercise,e.update_exercise_type_id,e.updatedistance,e.updatesets,e.updatereps,e.updateweight,e.updatebodyweight,s);case 9:return t.sent,e.updatexercise=0,t.next=13,Object(l["d"])(s);case 13:e.list=t.sent;case 14:case"end":return t.stop()}}),t)})))()},deleteexerciserow:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=a["a"].user_id,t.next=3,Object(l["c"])(e.deletexercise_id,s);case 3:return t.sent,e.deletexercise=0,t.next=7,Object(l["d"])(s);case 7:e.list=t.sent;case 8:case"end":return t.stop()}}),t)})))()},comment:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["b"])(e.post.id,e.commentText);case 2:s=t.sent,e.fitnessstuff.Comments.push(s);case 4:case"end":return t.stop()}}),t)})))()},calculatecalories:function(e,t,s){var i=3.5*e*t/200,n=i*s;return n},releaseupdateforms:function(){this.updatexercise=1},releasedeleteforms:function(){this.deletexercise=1},releaseaddexerciseform:function(){this.addexerciseto=1}}},d=u,p=s("2877"),_=Object(p["a"])(d,c,o,!1,null,null,null),v=_.exports,m={data:function(){return{exercises:[]}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["d"])();case 2:e.exercises=t.sent;case 3:case"end":return t.stop()}}),t)})))()},components:{Fitness:v}},f=m,g=Object(p["a"])(f,i,n,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=Tracker.f902a2ac.js.map