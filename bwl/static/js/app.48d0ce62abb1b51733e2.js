webpackJsonp([1],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.task.content,expression:"task.content"}],class:["edit",{focus:t.isFocus}],attrs:{type:"text",placeholder:"请添加任务"},domProps:{value:t.task.content},on:{keydown:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.addTask(n):null},focus:function(n){t.isFocus=!t.isFocus},blur:function(n){t.isFocus=!t.isFocus},input:function(n){n.target.composing||t.$set(t.task,"content",n.target.value)}}}),t._v(" "),e("div",{staticClass:"list"},[t._l(t.list,function(n,s){return e("div",{staticClass:"unit"},[e("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:n.finished},on:{click:function(n){t.changeState(s)}}}),t._v(" "),e("span",{class:{finish:n.finished}},[t._v("\n  "+t._s(n.content)+"\n")]),t._v(" "),e("button",{staticClass:"del",on:{click:function(n){t.removeTask(s)}}},[t._v("delete")])])}),t._v(" "),0===t.list.length?e("p",{staticClass:"empty"},[t._v("\n\t\t\t\t暂无任务\n\t\t\t")]):t._e()],2)])},staticRenderFns:[]};var o={name:"App",components:{MyMemorandom:e("VU/8")({name:"first",data:function(){return{task:{content:"",finished:!1,deleted:!1},list:[],isFocus:!1}},methods:{addTask:function(){this.list.push(this.task),this.task={content:"",finished:!1,deleted:!1}},removeTask:function(t){this.list.splice(t,1)},changeState:function(t){var n=this.list[t].finished;this.list[t].finished=!n}}},i,!1,function(t){e("UbS1")},null,null).exports}},c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("MyMemorandom")],1)},staticRenderFns:[]};var a=e("VU/8")(o,c,!1,function(t){e("SYg5")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:a},template:"<App/>"})},SYg5:function(t,n){},UbS1:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.48d0ce62abb1b51733e2.js.map