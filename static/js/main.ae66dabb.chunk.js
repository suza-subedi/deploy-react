(this.webpackJsonpmj=this.webpackJsonpmj||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(19),i=n.n(a),o=(n(86),n(87),n(118)),d=n(119),s=n(115),l=n(80),j=n(13),b=n(11),u=n.n(b),h=n(21),O=n(12),x=n(79),p=n(117),f=n(53),g=n(55),m=n(33),y=n(18),C=n(63),v=n(116),k=n(37),A=n(64),S=n(52),D=n(30),w=(n(77),n(73),n(3));0===D.a.apps.length&&D.a.initializeApp({apiKey:"AIzaSyCXKHXAiwql_af1ZzXii6zfVp9wziP-Ofg",authDomain:"first-starting-project.firebaseapp.com",projectId:"first-starting-project",storageBucket:"first-starting-project.appspot.com",messagingSenderId:"STOM674383756903",appId:"1:674383756903:web:93c5c8dd935c7eca06dec2",measurementId:"G-W6NS8K76HK"});var I=D.a.firestore(),F=(D.a.auth(),[{id:0,name:"-- All --"},{id:1,name:"Food"},{id:2,name:"Fun"},{id:3,name:"Transportation"},{id:4,name:"Uncategorized"},{id:5,name:"Books"}]);function E(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(A.a)(),i=a.register,o=a.handleSubmit,d=Object(c.useState)(!1),s=Object(O.a)(d,2),l=s[0],j=s[1],b=Object(c.useState)([]),D=Object(O.a)(b,2),E=D[0],B=D[1],z=Object(c.useState)(0),P=Object(O.a)(z,2),R=P[0],L=P[1],H=Object(c.useState)(!1),M=Object(O.a)(H,2),V=M[0],J=M[1],K=Object(c.useState)({id:null,createdAt:new Date,description:"",amount:null,category:null}),N=Object(O.a)(K,2),q=N[0],_=N[1],X=I.collection("money"),U=X.orderBy("createdAt","asc").limitToLast(100),G=Object(S.a)(U,{idField:"id"}),W=Object(O.a)(G,1)[0];console.log("REACT_APP_PROJECT_ID","first-starting-project"),Object(c.useEffect)((function(){if(W){var e=0,t=W.map((function(t,n){return e+=t.amount,Object(w.jsx)(T,{data:t,i:n,onDeleteClick:Y,onEditClick:$})}));B(t),L(e)}}),[W]);var Z=function(){_({id:null,createdAt:new Date,description:"",amount:0,category:F[0]}),r({}),j(!1),J(!1)},Q=function(){var e=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c={description:t.description,amount:parseFloat(t.amount),createdAt:new Date(t.createdAt),category:n},console.log("onSubmit",c),!V){e.next=8;break}return console.log("UPDATING!!!!",t.id),e.next=6,X.doc(t.id).set(c).then((function(){return console.log("moneyRef has been set")})).catch((function(e){console.error("Error: ",e),alert(e)}));case 6:e.next=10;break;case 8:return e.next=10,X.add(c).then((function(){return console.log("New record has been added.")})).catch((function(e){console.error("Errror:",e),alert(e)}));case 10:Z();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){console.log("handleDeleteClick in Journal",e),window.confirm("Are you sure to delete this record?")&&X.doc(e).delete()},$=function(e){var t={id:e.id,description:e.description,amount:parseFloat(e.amount),createdAt:e.createdAt.toDate(),category:n};console.log("handleEditClick",t),_(t),r(e.category),j(!0),J(!0)};return Object(w.jsxs)(f.a,{children:[Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(y.a,{children:[Object(w.jsx)("h1",{children:"Journal"}),Object(w.jsxs)(x.a,{variant:"outline-dark",onClick:function(){return j(!0)},children:[Object(w.jsx)(k.b,{})," Add"]})]}),Object(w.jsxs)(y.a,{children:["Category:",Object(w.jsx)(C.a,{options:F,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(e){if(console.log("filter",e),W){var t=0,n=W.filter((function(t){return 0==e.id||t.category.id==e.id})).map((function(e,n){return console.log("filter",e),t+=e.amount,Object(w.jsx)(T,{data:e,i:n})}));B(n),L(t)}}})]})]}),Object(w.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"#"}),Object(w.jsx)("th",{children:"Date"}),Object(w.jsx)("th",{children:"Description"}),Object(w.jsx)("th",{children:"Category"}),Object(w.jsx)("th",{children:"Amount"}),Object(w.jsx)("th",{children:"Edit"}),Object(w.jsx)("th",{children:"Delete"})]})}),Object(w.jsx)("tbody",{children:E}),Object(w.jsx)("tfooter",{children:Object(w.jsx)("td",{colSpan:5,children:Object(w.jsxs)("h2",{children:["Total: ",R]})})})]}),Object(w.jsx)(p.a,{show:l,onHide:Z,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(w.jsxs)("form",{onSubmit:o(Q),children:[Object(w.jsx)("input",{type:"hidden",placeholder:"ID",ref:i({required:!1}),name:"id",id:"id",defaultValue:q.id}),Object(w.jsx)(p.a.Header,{closeButton:!0,children:Object(w.jsx)(p.a.Title,{children:V?"Edit Record":"Add New Record"})}),Object(w.jsxs)(p.a.Body,{children:[Object(w.jsxs)(m.a,{children:[Object(w.jsx)(y.a,{children:Object(w.jsx)("label",{htmlFor:"createdAt",children:"Date"})}),Object(w.jsx)(y.a,{children:Object(w.jsx)("input",{type:"date",placeholder:"Date",ref:i({required:!0}),name:"createdAt",id:"createdAt",defaultValue:Object(v.a)(q.createdAt,"yyyy-MM-dd")})})]}),Object(w.jsxs)(m.a,{children:[Object(w.jsx)(y.a,{children:Object(w.jsx)("label",{htmlFor:"category",children:"Category"})}),Object(w.jsx)(y.a,{children:Object(w.jsx)(C.a,{id:"category",name:"category",value:n,placeholder:"Category",options:F.filter((function(e){return 0!=e.id})),onChange:function(e){console.log("handleCategoryChange",e),r(e)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}})})]}),Object(w.jsxs)(m.a,{children:[Object(w.jsx)(y.a,{children:Object(w.jsx)("label",{htmlFor:"description",children:"Description"})}),Object(w.jsx)(y.a,{children:Object(w.jsx)("input",{type:"text",placeholder:"Description",ref:i({required:!0}),name:"description",id:"description",defaultValue:q.description})})]}),Object(w.jsxs)(m.a,{children:[Object(w.jsx)(y.a,{children:Object(w.jsx)("label",{htmlFor:"amount",children:"Amount"})}),Object(w.jsx)(y.a,{children:Object(w.jsx)("input",{type:"number",step:"any",min:"0",placeholder:"Amount",ref:i({required:!0}),name:"amount",id:"amount",defaultValue:q.amount})})]})]}),Object(w.jsxs)(p.a.Footer,{children:[Object(w.jsx)(x.a,{variant:"secondary",onClick:Z,children:"Close"}),Object(w.jsx)(x.a,{variant:V?"success":"primary",type:"submit",children:V?"Save Record":"Add Record"})]})]})})]})}function T(e){var t=e.data;e.i;return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{}),Object(w.jsx)("td",{children:Object(v.a)(t.createdAt.toDate(),"yyyy-MM-dd")}),Object(w.jsx)("td",{children:t.description}),Object(w.jsx)("td",{children:t.category.name}),Object(w.jsx)("td",{children:t.amount}),Object(w.jsx)("td",{children:Object(w.jsx)(k.a,{onClick:function(){return e.onEditClick(t)}})}),Object(w.jsx)("td",{children:Object(w.jsx)(k.c,{onClick:function(){return e.onDeleteClick(t.id)}})})]})}0===D.a.apps.length&&D.a.initializeApp({apiKey:"AIzaSyCXKHXAiwql_af1ZzXii6zfVp9wziP-Ofg",authDomain:"first-starting-project.firebaseapp.com",projectId:"first-starting-project",storageBucket:"first-starting-project.appspot.com",messagingSenderId:"STOM674383756903",appId:"1:674383756903:web:93c5c8dd935c7eca06dec2",measurementId:"G-W6NS8K76HK"});var B=D.a.firestore(),z=(D.a.auth(),[{id:-1,name:"Uncategorized"},{id:0,name:"-- All --"},{id:1,name:"Food"},{id:2,name:"Fun"},{id:3,name:"Transportation"},{id:4,name:"Books"},{id:5,name:"Home"}]);function P(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=(t[0],t[1]),r=Object(A.a)(),a=r.register,i=r.handleSubmit,o=Object(c.useState)(!1),d=Object(O.a)(o,2),s=d[0],l=d[1],j=Object(c.useState)([]),b=Object(O.a)(j,2),C=b[0],v=b[1],D=Object(c.useState)(0),I=Object(O.a)(D,2),F=(I[0],I[1],Object(c.useState)(!1)),E=Object(O.a)(F,2),T=E[0],P=E[1],L=Object(c.useState)({id:null,createdAt:new Date,description:"",amount:null,category:null}),H=Object(O.a)(L,2),M=H[0],V=H[1],J=B.collection("money2"),K=J.orderBy("id","asc").limitToLast(100),N=Object(S.a)(K,{idField:"id"}),q=Object(O.a)(N,1)[0];console.log("REACT_APP_PROJECT_ID","first-starting-project"),Object(c.useEffect)((function(){if(q){var e=q.map((function(e,t){return Object(w.jsx)(R,{data:e,i:t,onDeleteClick:U,onEditClick:G})}));v(e)}}),[q]);var _=function(){V({id:null,category:""}),n({}),l(!1),P(!1)},X=function(){var e=Object(h.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={id:parseFloat(t.id),category:t.category},console.log("onSubmit",n),!T){e.next=8;break}return console.log("UPDATING!!!!",t.id),e.next=6,J.doc(t.id).set(n).then((function(){return console.log("money2Ref has been set")})).catch((function(e){console.error("Error: ",e),alert(e)}));case 6:e.next=10;break;case 8:return e.next=10,J.add(n).then((function(){return console.log("New category has been added.")})).catch((function(e){console.error("Error:",e),alert(e)}));case 10:_();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){console.log("handleDeleteClick in Journal",e),window.confirm("Are you sure to delete this category?")&&J.doc(e).delete()},G=function(e){var t={id:parseFloat(e.id),category:e.category};console.log("handleEditClick",t),V(t),n(e.category),l(!0),P(!0)};return Object(w.jsxs)(f.a,{children:[Object(w.jsx)(m.a,{children:Object(w.jsxs)(y.a,{children:[Object(w.jsx)("h1",{children:"Category Management"}),Object(w.jsxs)(x.a,{variant:"outline-dark",onClick:function(){return l(!0)},children:[Object(w.jsx)(k.b,{})," Add"]})]})}),Object(w.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Id"}),Object(w.jsx)("th",{children:"Categories"}),Object(w.jsx)("th",{children:"Delete"}),Object(w.jsx)("th",{children:"Edit"})]})}),Object(w.jsx)("tbody",{children:C})]}),Object(w.jsx)(p.a,{show:s,onHide:_,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(w.jsxs)("form",{onSubmit:i(X),children:[Object(w.jsx)("input",{type:"hidden",placeholder:"ID",ref:a({required:!1}),name:"id",id:"id",defaultValue:M.id}),Object(w.jsx)(p.a.Header,{closeButton:!0,children:Object(w.jsx)(p.a.Title,{children:T?"Update Category":"Add New Category"})}),Object(w.jsx)(p.a.Body,{children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)(y.a,{children:Object(w.jsx)("label",{htmlFor:"category",children:"Category"})}),Object(w.jsx)(y.a,{children:Object(w.jsx)("input",{type:"category",placeholder:"Category",ref:a({required:!0}),options:z.filter((function(e){return 0!=e.id})),onChange:function(e){console.log("handleCategoryChange",e),n(e)},name:"category",id:"category",getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}})})]})}),Object(w.jsxs)(p.a.Footer,{children:[Object(w.jsx)(x.a,{variant:"secondary",onClick:_,children:"Close"}),Object(w.jsx)(x.a,{variant:"primary",type:"submit",children:T?"Save Record":"Add Record"})]})]})})]})}function R(e){var t=e.data;e.i;return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{}),Object(w.jsx)("td",{children:t.category}),Object(w.jsx)("td",{children:Object(w.jsx)(k.c,{onClick:function(){return e.onDeleteClick(t.id)}})}),Object(w.jsx)("td",{children:Object(w.jsx)(k.a,{onClick:function(){return e.onEditClick(t)}})})]})}function L(){return Object(w.jsx)("h1",{children:"Home"})}var H=function(){return Object(w.jsxs)(l.a,{children:[Object(w.jsxs)(o.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(w.jsx)(o.a.Brand,{href:"/",children:"Money Journey"}),Object(w.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(w.jsxs)(o.a.Collapse,{id:"responsive-navbar-nav",children:[Object(w.jsxs)(d.a,{className:"mr-auto",children:[Object(w.jsx)(d.a.Link,{href:"/journal",children:"Journal"}),Object(w.jsx)(d.a.Link,{href:"/category",children:"Category"}),Object(w.jsxs)(s.a,{title:"Dropdown",id:"collasible-nav-dropdown",children:[Object(w.jsx)(s.a.Item,{href:"#action/3.1",children:"Action"}),Object(w.jsx)(s.a.Item,{href:"#action/3.2",children:"Another action"}),Object(w.jsx)(s.a.Item,{href:"#action/3.3",children:"Something"}),Object(w.jsx)(s.a.Divider,{}),Object(w.jsx)(s.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(w.jsxs)(d.a,{children:[Object(w.jsx)(d.a.Link,{href:"#deets",children:"More deets"}),Object(w.jsx)(d.a.Link,{eventKey:2,href:"#memes",children:"Sign Out"})]})]})]}),Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{path:"/journal",children:Object(w.jsx)(E,{})}),Object(w.jsx)(j.a,{path:"/category",children:Object(w.jsx)(P,{})}),Object(w.jsx)(j.a,{path:"/",children:Object(w.jsx)(L,{})})]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(H,{})}),document.getElementById("root")),M()},86:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.ae66dabb.chunk.js.map