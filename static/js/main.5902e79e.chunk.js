(this["webpackJsonptodo-list-react-hooks"]=this["webpackJsonptodo-list-react-hooks"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),r=c(7),i=c.n(r),a=(c(12),c(3)),u=c(2),j=c(0),s=Object(n.createContext)(),l=function(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),o=c[0],r=c[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoStore"));e&&r(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todoStore",JSON.stringify(o))}),[o]),Object(j.jsx)(s.Provider,{value:[o,r],children:e.children})};function b(){var e=Object(n.useContext)(s),t=Object(u.a)(e,2),c=t[0],o=t[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),l=i[0],b=i[1],d=Object(n.useRef)();return Object(n.useEffect)((function(){d.current.focus()}),[]),Object(j.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),o([].concat(Object(a.a)(c),[{name:l,complete:!1}])),b(""),d.current.focus()},children:[Object(j.jsx)("input",{type:"text",name:"todos",id:"todos",ref:d,required:!0,placeholder:"\u65b0\u3057\u3044\u30bf\u30b9\u30af\u3092\u767b\u9332\u3057\u3066\u304f\u3060\u3055\u3044",value:l,onChange:function(e){return b(e.target.value.toLowerCase())}}),Object(j.jsx)("button",{type:"submit",children:"\u8ffd\u52a0"})]})}function d(e){var t=e.todo,c=e.id,o=e.checkComplete,r=e.handleEditTodos,i=Object(n.useState)(!1),a=Object(u.a)(i,2),s=a[0],l=a[1],b=Object(n.useState)(t.name),d=Object(u.a)(b,2),O=d[0],f=d[1];return s?Object(j.jsxs)("li",{children:[Object(j.jsx)("input",{type:"text",id:"editValue",value:O,name:"editValue",onChange:function(e){return f(e.target.value.toLowerCase())}}),Object(j.jsx)("button",{onClick:function(){return function(e){l(!1),O?r(O,e):f(t.name)}(c)},children:"\u4fdd\u5b58"})]}):Object(j.jsxs)("li",{children:[Object(j.jsxs)("label",{htmlFor:c,className:t.complete?"active":"",children:[Object(j.jsx)("input",{type:"checkbox",id:c,checked:t.complete,onChange:function(){return o(c)}}),t.name]}),Object(j.jsx)("button",{disabled:t.complete,onClick:function(){l(!0)},children:"\u7de8\u96c6"})]})}function O(){var e=Object(n.useContext)(s),t=Object(u.a)(e,2),c=t[0],o=t[1],r=function(e){var t=Object(a.a)(c);t.forEach((function(t,c){c===e&&(t.complete=!t.complete)})),o(t)},i=function(e,t){var n=Object(a.a)(c);n.forEach((function(c,n){n===t&&(c.name=e)})),o(n)};return Object(j.jsx)("ul",{children:c.map((function(e,t){return Object(j.jsx)(d,{todo:e,id:t,checkComplete:r,handleEditTodos:i},t)}))})}function f(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],o=t[1],r=Object(n.useContext)(s),i=Object(u.a)(r,2),l=i[0],b=i[1],d=function(){return l.filter((function(e){return!1===e.complete}))};return Object(j.jsx)(j.Fragment,{children:0===l.length?Object(j.jsx)("h2",{children:"\u304a\u3081\u3067\u3068\u3046\uff01 \u30bf\u30b9\u30af\u304c\u306a\u304f\u306a\u308a\u307e\u3057\u305f"}):Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("label",{htmlFor:"all",children:[Object(j.jsx)("input",{type:"checkbox",name:"all",id:"all",onChange:function(){var e=Object(a.a)(l);e.forEach((function(e){e.complete=!c})),b(e),o(!c)},checked:c}),"\u3059\u3079\u3066"]}),Object(j.jsxs)("p",{children:[d().length,"\u500b\u306e ToDo \u304c\u3042\u308a\u307e\u3059"]}),Object(j.jsx)("button",{id:"delete",onClick:function(){b(d()),o(!1)},children:"\u524a\u9664"})]})})}var h=function(){return Object(j.jsx)(l,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"To Do \u30ea\u30b9\u30c8"}),Object(j.jsx)(b,{}),Object(j.jsx)(O,{}),Object(j.jsx)(f,{})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.5902e79e.chunk.js.map