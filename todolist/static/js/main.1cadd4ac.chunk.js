(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=(n(24),n(1)),u=n(2),i=n(4),l=n(3),p=n(5),d=(n(26),function(){return r.a.createElement("h1",null,"To Do List")}),h=n(6),m=n(9),b=(n(32),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).addTasksByEnter=function(e){var t=e.currentTarget.value.trim();"Enter"==e.key&&""!==t&&(n.props.addTask(e.target.value),n.props.inputChange(""))},n.addTasks=function(e){""!==document.getElementById("addInput").value.trim()&&n.props.addTask(document.getElementById("addInput").value),n.props.inputChange("")},n.addInputChnage=function(e){n.props.inputChange(e.target.value)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return r.a.createElement("div",{className:"add-tasks"},r.a.createElement("input",(e={type:"text",name:"input",id:"addInput",value:this.props.inputValue,onChange:this.addInputChnage,onKeyPress:this.addTasksByEnter},Object(m.a)(e,"value",this.props.inputValue),Object(m.a)(e,"className","addInp"),Object(m.a)(e,"placeholder","Add task..."),e)),r.a.createElement("button",{onClick:this.addTasks,className:"addButton"}," ",r.a.createElement("span",null,"+"),"Add!"))}}]),t}(a.Component)),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(b,{addTask:this.props.addTask,inputChange:this.props.inputChange,inputValue:this.props.inputValue})}}]),t}(a.Component),O={addTask:function(e){return{type:"ADD_TASK",payload:e}},inputChange:function(e){return{type:"INPUT_CHANGE",payload:e}}},f=Object(h.b)(function(e){return{inputValue:e.ToDoReducer.inputValue}},O)(k),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).removeTaskes=function(){n.props.removeTask(n.props.id)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"task slideRight"},r.a.createElement("input",{type:"checkbox",id:this.props.id,name:"done"}),r.a.createElement("label",{htmlFor:this.props.id},r.a.createElement("p",null,this.props.task)),r.a.createElement("button",{onClick:this.removeTaskes,className:"remove"},"remove"))}}]),t}(a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(j,{removeTask:this.props.removeTask,id:this.props.id,task:this.props.task})}}]),t}(a.Component),y={removeTask:function(e){return{type:"REMOVE_TASK",payload:e}}},E=Object(h.b)(function(e){return{}},y)(v),T=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tasks-container"},this.props.tasks.map(function(e,t){return r.a.createElement(E,{key:t,id:t,task:e})}))}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T,{tasks:this.props.tasks})}}]),t}(a.Component),C=Object(h.b)(function(e){return{tasks:e.ToDoReducer.tasks}},{})(g),w=function(){return r.a.createElement("div",{className:"form"},r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(C,null))},A=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"background"},r.a.createElement(w,null))}}]),t}(a.Component),N=n(8),I=n(11),V={tasks:[],inputValue:""},D=Object(N.b)({ToDoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return Object(I.a)({},e,{tasks:e.tasks.concat(t.payload)});case"INPUT_CHANGE":return Object(I.a)({},e,{inputValue:t.payload});case"REMOVE_TASK":return Object(I.a)({},e,{tasks:e.tasks.filter(function(e,n,a){return n!=t.payload})})}return e}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=Object(N.c)(D);o.a.render(r.a.createElement(h.a,{store:B},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.1cadd4ac.chunk.js.map