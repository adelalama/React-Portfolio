(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var a=i(1),c=i.n(a),r=i(7),s=i.n(r),A=(i(13),i(14),i(3)),n=(i(2),i(0));var l=function(e){return Object(n.jsx)("ul",{className:"nav ",children:["About Me","Portfolio","Contact","Resume"].map((function(t){return Object(n.jsx)("li",{className:"",children:Object(n.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)}))})},d=i.p+"static/media/cover4.658a0092.jpg",o=i.p+"static/media/prof.befa12f1.jpg";var h=function(){return Object(n.jsxs)("section",{className:"",children:[Object(n.jsx)("h1",{id:"about",children:"Alejandro De La Lama"}),Object(n.jsx)("img",{src:d,className:"hero",alt:"cover"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-4 ip-picture",children:Object(n.jsx)("img",{src:o,className:"ip-picture",alt:""})}),Object(n.jsxs)("div",{className:"col-7 ip-desc",children:[Object(n.jsx)("h4",{children:"About me"}),Object(n.jsx)("p",{children:"My name is Alejandro, im a 27 year old from Mexico City. Helvetica put a bird on it church-key Blue Bottle banjo bespoke brunch Etsy authentic Marfa quinoa typewriter plaid direct trade small batch wayfarers bicycle rights cliche craft beer gastropub single-origin coffee Godard Carles you probably haven't heard of them irony pickled kitsch synth sriracha gentrify literally heirloom blog Truffaut paleo scenester"})]})]})]})},j=i(4),g=i(6);var b=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(A.a)(e,2),i=t[0],c=t[1],r=i.name,s=i.email,l=i.message,d=Object(a.useState)(""),o=Object(A.a)(d,2),h=o[0];function b(e){c(Object(g.a)(Object(g.a)({},i),{},Object(j.a)({},e.target.name,e.target.value)))}return o[1],Object(n.jsxs)("section",{className:"",children:[Object(n.jsx)("h1",{className:"contact-container",children:"Contact"}),Object(n.jsxs)("form",{id:"contact-form",className:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(i)},children:[Object(n.jsx)("div",{children:Object(n.jsx)("label",{htmlFor:"name",children:"Name:"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"form-input",type:"text",name:"name",defaultValue:r,onBlur:b})}),Object(n.jsx)("div",{children:Object(n.jsx)("label",{htmlFor:"email",children:"Email Address:"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"form-input",type:"email",name:"email",defaultValue:s,onBlur:b})}),Object(n.jsx)("div",{children:Object(n.jsx)("label",{htmlFor:"message",children:"Message:"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("textarea",{className:"form-input",name:"message",rows:"5",defaultValue:l,onBlur:b}),h&&Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"error-text",children:h})})]}),Object(n.jsx)("button",{type:"submit",children:"Submit"})]})]})},p=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"resume-list",children:"Resume"}),Object(n.jsx)("div",{className:"resume-link",children:Object(n.jsx)("a",{href:"#",target:"blank",alt:"Resume",children:"Resume"})})]})},S=i(8);function m(e){return Object(n.jsx)("div",{className:"card-container col-12",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{alt:e.name,src:e.image,className:"card-img"}),Object(n.jsx)("h3",{children:e.name}),Object(n.jsx)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",children:"Github"}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:e.deployedapp,target:"_blank",rel:"noopener noreferrer",children:"Deployed Application"})})]})})}function B(e){return Object(n.jsx)("div",{className:"",children:e.children})}var x=function(){var e=Object(a.useState)(S),t=Object(A.a)(e,2),i=t[0];return t[1],Object(n.jsxs)(B,{children:[Object(n.jsx)("h1",{className:"project-list",children:"Project List"}),i.map((function(e){return function(e){return Object(n.jsx)(m,{name:e.name,image:e.image,id:e.id,github:e.github,deployedapp:e.deployedapp},e.id)}(e)}))]})};var C=function(){var e=Object(a.useState)("About"),t=Object(A.a)(e,2),i=t[0],c=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(l,{currentPage:i,handlePageChange:c}),Object(n.jsx)("div",{children:function(){switch(i){case"About":return Object(n.jsx)(h,{});case"Portfolio":return Object(n.jsx)(x,{});case"Contact":return Object(n.jsx)(b,{});case"Resume":return Object(n.jsx)(p,{});default:return Object(n.jsx)(h,{})}}()})]})},J=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("a",{href:"https://github.com/adelalama",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{alt:"Github",className:"github-img",src:"data:image/png;base64,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"})}),Object(n.jsx)("a",{href:"",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{alt:"LinkedIn",className:"linkedin-img",src:"data:image/png;base64,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"})})]})})};var u=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:Object(n.jsx)(C,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(J,{})})]})},w=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(t){var i=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;i(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),w()},8:function(e){e.exports=JSON.parse('[{"id":1,"name":"Budget Tracker","image":"https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80","github":"https://github.com/adelalama/Budget-Tracker","deployedapp":"http://morning-caverns-38992.herokuapp.com/","description":"Budget Tracker"},{"id":2,"name":"Weather Dashboard","image":"https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","github":"https://github.com/adelalama/Weather-Dashboard","deployedapp":"https://adelalama.github.io/Weather-Dashboard/","description":"Weather Dashboard"},{"id":3,"name":"Vagabundos","image":"https://images.unsplash.com/photo-1488085061387-422e29b40080?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80","github":"https://github.com/jorgeatcabo/vagabundos-application","deployedapp":" https://jorgeatcabo.github.io/project-1/","description":"Flight and travel web app"},{"id":4,"name":"Tech Blog","image":"https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","github":"https://github.com/adelalama/Tech-Blog","deployedapp":"https://floating-ridge-41504.herokuapp.com/","description":"Tech Blog"},{"id":5,"name":"Paw Book","image":"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","github":"https://github.com/stamm2911/Pawbook-app","deployedapp":"https://stormy-savannah-69028.herokuapp.com/login","description":"Paw Book"},{"id":6,"name":"Work Day Planner","image":"https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","github":"https://github.com/adelalama/Calendar","deployedapp":"https://adelalama.github.io/Calendar/","description":"Work Day Planner"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.d82bce67.chunk.js.map