(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},15:function(e,t,n){},16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),l=n.n(c),r=(n(15),n(2)),i=(n(16),n(3)),s=n(4),u=n(5),m=Object(a.createContext)();function d(e){var t=Object(a.useState)([{id:1,title:"Programmers count from Zero"},{id:2,title:"It has CRUD functionality."},{id:3,title:"It's a todo list app"}]),n=Object(r.a)(t,2),c=n[0],l=n[1];return o.a.createElement(m.Provider,{value:[c,l]},e.children)}var p=function(){var e=Object(a.useContext)(m),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),s=Object(r.a)(l,2),u=s[0],d=s[1],p=Object(a.useState)(n.length+1),f=Object(r.a)(p,2),b=f[0],v=f[1],h=document.querySelector(".sandip-btn");return o.a.createElement("div",{className:"data-submit"},o.a.createElement("input",{type:"text",placeholder:"What's your focus today",value:u,onChange:function(e){return d(e.target.value)}}),o.a.createElement("button",{className:"sandip-btn",onClick:function(e){v((function(e){return e+1})),c([].concat(Object(i.a)(n),[{id:b,title:u}])),d(""),function(e){var t=e.clientX-e.target.offsetLeft,n=e.clientY-e.target.offsetTop,a=document.createElement("span");h.appendChild(a),a.style.left=t+"px",a.style.top=n+"px",setTimeout((function(){a.remove()}),5e3)}(e)},disabled:!u.length},"Add"))};var f={hidden:{pointerEvents:"none",opacity:0,transform:"translate(-50%, -50%) scale(.8)"},show:{opacity:1,pointerEvents:"all",transform:"translate(-50%, -50%) scale(1)"}},b=function(){var e=Object(a.useContext)(m),t=Object(r.a)(e,2),n=t[0],c=t[1],l=o.a.createElement(s.a,{icon:u.c}),d=o.a.createElement(s.a,{icon:u.a}),b=o.a.createElement(s.a,{icon:u.b}),v=Object(a.useState)(""),h=Object(r.a)(v,2),E=h[0],g=h[1],j=Object(a.useState)(!1),O=Object(r.a)(j,2),y=O[0],C=O[1],x=Object(a.useState)(0),k=Object(r.a)(x,2),N=k[0],w=k[1],S=function(e){var t=Object(i.a)(n);t.splice(e.target.id,1),c(t)},Y=function(e){C(!0),w(e.target.id),g(n[e.target.id].title)},B=document.querySelector(".edit-box button.sandip-btn");return o.a.createElement("div",{className:"todo"},o.a.createElement(p,null),o.a.createElement("ul",{className:"todo-list"},n.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("span",null,t," : ",e.title),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:S,id:t},l),o.a.createElement("button",{type:"button",id:t,onClick:Y},d)))}))),o.a.createElement("div",{className:"edit-box",style:y?f.show:f.hidden},o.a.createElement("input",{type:"text",value:E,onChange:function(e){return g(e.target.value)}}),o.a.createElement("button",{className:"sandip-btn",onClick:function(e){!function(){var e=Object(i.a)(n);e[N].title=E,c(e),g(""),C(!1)}(),function(e){var t=e.clientX-e.target.getBoundingClientRect().left,n=e.clientY-e.target.getBoundingClientRect().top;console.log("ripple",e.clientX,e.clientY),console.log("ripple offset",e.target.offsetLeft,e.target.offsetTop);var a=document.createElement("span");B.appendChild(a),a.style.left=t+"px",a.style.top=n+"px",setTimeout((function(){a.remove()}),6e3)}(e)},disabled:!E.length},"Save"),o.a.createElement("button",{onClick:function(){return C(!1)},id:"close"},b)))};var v=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("h2",null,"Welcome ",o.a.createElement("span",{className:""===n.trim()?"name-placeholder":"name"},""===n.trim()?"Your Name":n)),o.a.createElement("input",{type:"text",className:"name-input",placeholder:"Your name",value:n,onChange:function(e){return c(e.target.value)}}),o.a.createElement(d,null,o.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.a9513313.chunk.js.map