(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),l=n.n(s),o=n(3),r=n(7),i=n(0),d=function(e){var t=e.todo,n=e.onDelete;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"title",children:t.title}),Object(i.jsx)("div",{className:"desc",children:t.desc}),Object(i.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){n(t)},children:"Delete"}),Object(i.jsx)("hr",{})]})})},b=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"my-3",children:"Todos Item"}),0===e.todos.length?"todo list is empty":e.todos.map((function(t){return Object(i.jsx)(d,{todo:t,onDelete:e.onDelete},t.sno)}))]})})},j=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),r=Object(o.a)(l,2),d=r[0],b=r[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"my-3",children:"Add Todo"}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&d?(e.addTodo(c,d),s(""),b("")):alert("Title and description cannot be blanked")},children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(i.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},className:"form-control",id:"title"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(i.jsx)("input",{type:"text",value:d,onChange:function(e){b(e.target.value)},className:"form-control",id:"desc"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-success ",children:"Add Todo"})]})]})},u=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{class:"navbar-brand",href:"#",children:"Todo list"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{class:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{class:"nav-link",href:"#",children:"About"})})]})})]})})})};var m=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(a.useState)(e),n=Object(o.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(j,{addTodo:function(e,t){var n={sno:0==c.length?1:c[c.length-1].sno+1,title:e,desc:t};console.log(n),s([].concat(Object(r.a)(c),[n]))}}),Object(i.jsx)(b,{todos:c,onDelete:function(e){s(c.filter((function(t){return t!=e}))),localStorage.setItem("todos",JSON.stringify(c))}})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),h()}},[[13,1,2]]]);
//# sourceMappingURL=main.23d8d2cc.chunk.js.map