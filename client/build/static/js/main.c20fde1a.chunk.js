(this.webpackJsonpid1201arkitektur=this.webpackJsonpid1201arkitektur||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},278:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(11),r=n.n(c),a=(n(151),n(9)),s=n(10),l=n(21),o=n(22),d=(n(152),n(15)),u=n(126),j=n.n(u),b=function(){function e(){Object(a.a)(this,e)}return Object(s.a)(e,[{key:"apiAxios",value:function(){return j.a.create({baseURL:"/",withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json"}})}}]),e}(),p=n(23),O=function(){function e(){Object(a.a)(this,e),this.myExpertise=[],this.observers=[]}return Object(s.a)(e,[{key:"getExpertise",value:function(){return this.myExpertise}},{key:"removeExpertise",value:function(e){this.myExpertise=Object(p.a)(this.myExpertise.filter((function(t){return t.name!==e}))),this.notifyObserver()}},{key:"addExpertise",value:function(e,t){var n={name:e,year:t};this.myExpertise=[].concat(Object(p.a)(this.myExpertise),[n]),this.notifyObserver()}},{key:"getAllExpertise",value:function(){return["A-skills","B-skills","C-skills","D-skills","E-skills"]}},{key:"addObserver",value:function(e){var t=this;return this.observers=this.observers.concat(e),function(){return t.removeObserver(e)}}},{key:"notifyObserver",value:function(){this.observers.forEach((function(e){e()}))}},{key:"removeObserver",value:function(e){this.observers=this.observers.filter((function(t){return t!==e}))}}]),e}(),h=n(18),m=n(24),f=n(2);function x(e){var t=e.model,n=e.apiCall,c=Object(m.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),r=Object(m.c)((function(e){return e.UserReducer.userInfo[0].role})),a=Object(i.useState)(!1),s=Object(h.a)(a,2),l=s[0],o=s[1];n.apiAxios().get("posts/postEmail=client@kth.se").then((function(e){return console.log(e.status),console.log(e),o(!0)})).catch((function(e){console.log(e),o(!1)})),Object(i.useEffect)((function(){"client"===r&&!1!==c||(window.location="/")}),[c,r]),Object(i.useEffect)((function(){"client"===r&&!1!==c||(window.location="/")}),[]);var d=Object(i.useState)(t.getAllExpertise()),u=Object(h.a)(d,2),j=u[0],b=u[1];Object(i.useEffect)((function(){return b(t.getAllExpertise())}),[]);var O=Object(i.useState)(t.getExpertise()),x=Object(h.a)(O,2),y=x[0],k=x[1];Object(i.useEffect)((function(){return t.addObserver((function(){k(t.getExpertise())}))}),[t]),Object(i.useEffect)((function(){return localStorage.setItem("formData",y)}));var w=n.apiAxios();return Object(f.jsx)("div",{children:"client"===r&&!0===c?Object(f.jsx)("div",{children:l?Object(f.jsx)("div",{children:"You have already made an application. Please wait for us to give you a response"}):Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{myExpertise:y,removeExpertise:function(e){t.removeExpertise(e),b([].concat(Object(p.a)(j),[e]))}}),Object(f.jsx)(g,{expertise:j,addExpertise:function(e,n){return t.addExpertise(e,n)},done:function(e){return w.post("posts",{startPeriod:e.start,endPeriod:e.end,dateOfBirth:{year:e.dateOfBirth.year,month:e.dateOfBirth.month,day:e.dateOfBirth.day},status:"unhandled",firstName:e.fname,lastName:e.lname,competence:y,email:e.email})},removeOption:function(e){return function(e){var t=j.filter((function(t){return t!==e}));b(t)}(e)}})]})}):""})}var v=function(e){var t=e.myExpertise,n=e.removeExpertise;return Object(f.jsx)("div",{children:t.map((function(e){return Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.year})]},e.name+e.year),Object(f.jsx)("button",{onClick:function(){return n(e.name)},children:"remove"})]})}))})},g=function(e){var t=e.expertise,n=e.addExpertise,c=e.done,r=e.removeOption,a=Object(m.c)((function(e){return e.UserReducer.userInfo}));console.log(a);var s=Object(i.useState)(0),l=Object(h.a)(s,2),o=l[0],d=l[1],u=Object(i.useState)(""),j=Object(h.a)(u,2),b=j[0],p=j[1],O=Object(i.useState)(""),x=Object(h.a)(O,2),v=x[0],g=x[1],y=Object(i.useState)(""),k=Object(h.a)(y,2),w=k[0],S=k[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"number",min:"0",placeholder:"years of experience",onChange:function(e){return d(e.target.value)}}),Object(f.jsxs)("select",{onChange:function(e){return p(e.target.value)},children:[Object(f.jsx)("option",{children:"choose your expertise"}),t.map((function(e){return Object(f.jsx)("option",{children:e},e)}))]}),Object(f.jsx)("button",{onClick:function(){n(b,o),r(b)},children:"add skill to application"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"text",min:"0",placeholder:"available start period",onChange:function(e){g(e.target.value)}}),Object(f.jsx)("input",{type:"text",min:"0",placeholder:"available end period",onChange:function(e){S(e.target.value)}}),Object(f.jsx)("button",{onClick:function(){!0===window.confirm("Are you sure you want to submit your application?")&&c({start:v,end:w,fname:a[0].fname,lname:a[0].lname,status:"unhandled",dateOfBirth:a[0].dateOfBirth,email:a[0].email})},children:"confirm and send application"})]})]})},y=n(53),k=n(77),w=n(26),S=n(310),E=n(309),C=n(25),N=function(e){return function(t,n){t({type:"LOG_IN_USER",role:e.data.role,fname:e.data.firstName,lname:e.data.lastName,dateOfBirth:e.data.dateOfBirth,email:e.data.email})}},L=function(e){var t=e.apiCall,n=Object(i.useState)("Sign up"),c=Object(h.a)(n,2),r=c[0],a=c[1],s=Object(i.useState)("Login"),l=Object(h.a)(s,2),o=l[0],d=l[1],u=Object(m.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),j=Object(m.c)((function(e){return e.UserReducer.userInfo[0].role})),b=Object(m.b)();Object(i.useEffect)((function(){"client"===j?window.location="/user/application":"admin"===j&&(window.location="/admin/applications")}),[u]);var p=function(e){var t=e.placeholder,n=Object(k.a)(e,["placeholder"]),i=Object(w.d)(n),c=Object(h.a)(i,2),r=c[0],a=c[1],s=a.error&&a.touched?a.error:"";return Object(f.jsx)(S.a,Object(y.a)(Object(y.a)({placeholder:t},r),{},{helperText:s,error:!!s,type:n.type}))},O=C.c().shape({email:C.d().min(4,"Too Short!").required("Required").email("Invalid email"),password:C.d().min(4,"Too Short!").required("Required"),firstName:"Login"===r?C.d():C.d().required("Required"),lastName:"Login"===r?C.d():C.d().required("Required"),dateOfBirth:C.a().of(C.c().shape({year:"Login"===r?C.b():C.b().required("Required"),month:"Login"===r?C.b():C.b().min(1,"must be between 1 and 12").max(12,"must be between 1 and 31").required("Required"),day:"Login"===r?C.b():C.b().min(1,"must be between 1 and 31").max(31,"must be between 1 and 31").required("Required")}))});return Object(f.jsx)("div",{children:u?"":Object(f.jsx)("div",{children:Object(f.jsx)(w.c,{initialValues:{username:"",email:"",password:"",firstName:"",lastName:"",dateOfBirth:[{year:"",month:"",day:""}]},onSubmit:function(e,n){var i=n.setSubmitting,c=n.resetForm;(i(!0),c(),"Sign up"===r)?t.apiAxios().post("auth/register",{data:e}).then((function(n){t.apiAxios().post("auth/login",{email:e.email,password:e.password}).then((function(e){b(N(e))}),(function(e){console.log(e)}))}),(function(e){console.log(e),alert("email already in use")})):t.apiAxios().post("auth/login",{email:e.email,password:e.password}).then((function(e){b(N(e))}),(function(){alert("Wrong email and/or password")}));i(!1)},validationSchema:O,children:function(e){var t=e.values,n=e.isSubmitting,i=e.resetForm,c=e.errors;return Object(f.jsxs)(w.b,{children:[Object(f.jsx)("div",{children:Object(f.jsx)(p,{placeholder:"Email",name:"email",type:"input"})}),Object(f.jsx)("div",{children:Object(f.jsx)(p,{placeholder:"Password",name:"password",type:"password"})}),"Sign up"===r?Object(f.jsx)("div",{children:Object(f.jsx)(p,{placeholder:"Username",name:"username",type:"input"})}):"","Sign up"===r?Object(f.jsx)("div",{children:Object(f.jsx)(p,{placeholder:"First Name",name:"firstName",type:"input"})}):"","Sign up"===r?Object(f.jsx)("div",{children:Object(f.jsx)(p,{placeholder:"Last Name",name:"lastName",type:"input"})}):"","Sign up"===r?Object(f.jsxs)("div",{children:[Object(f.jsx)(p,{placeholder:"Year",name:"dateOfBirth[0].year",type:"number"}),Object(f.jsx)(p,{placeholder:"Month",name:"dateOfBirth[0].month",type:"number"}),Object(f.jsx)(p,{placeholder:"Day",name:"dateOfBirth[0].day",type:"number"})]}):"",Object(f.jsx)("div",{children:Object(f.jsx)(E.a,{disabled:n,type:"submit",children:r})}),Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(f.jsx)("pre",{children:JSON.stringify(c,null,2)}),Object(f.jsx)("div",{onClick:function(){"Login"===r?(a("Sign up"),d("Login")):(a("Login"),d("Sign up")),i()},children:o})]})}})})})},B=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(w.c,{initialValues:{email:"",password:"",adminKey:""},onSubmit:function(e,t){var n=t.setSubmitting,i=t.resetForm;n(!0),i(),console.log("submit:",e),n(!1)},children:function(e){var t=e.values,n=e.isSubmitting;return Object(f.jsxs)(w.b,{children:[Object(f.jsx)(w.a,{placeholder:"Email",name:"email",type:"input",as:S.a}),Object(f.jsx)("div",{children:Object(f.jsx)(w.a,{placeholder:"Password",name:"password",type:"password",as:S.a})}),Object(f.jsx)("div",{children:Object(f.jsx)(w.a,{placeholder:"Key",name:"adminKey",type:"password",as:S.a})}),Object(f.jsx)("div",{children:Object(f.jsx)(E.a,{disabled:n,type:"submit",children:"Sign up"})}),Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)})]})}}),Object(f.jsx)("div",{onClick:function(){var e;e="/",window.location=e},children:"log in"})]})},I=n(312),R=n(311),A=function(e){var t,n,i=e.apiCall,c=e.item;return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:c.firstName}),Object(f.jsx)("td",{children:c.lastName}),Object(f.jsx)("td",{children:null===(t=c.competence)||void 0===t?void 0:t.map((function(e){return Object(f.jsxs)("div",{children:[e.name," ",e.year," year(s)"]})}))}),Object(f.jsx)("td",{children:c.startPeriod}),Object(f.jsx)("td",{children:c.endPeriod}),Object(f.jsx)("td",{children:null===(n=c.dateOfBirth)||void 0===n?void 0:n.map((function(e){return Object(f.jsxs)("div",{children:[e.year,"-",e.month,"-",e.day," "]})}))}),Object(f.jsx)("td",{children:c.date}),Object(f.jsx)("td",{children:Object(f.jsxs)("select",{name:"status",onChange:function(e){!function(e){i.apiAxios().post("posts/application",{status:e.target.value,email:c.email}).then((function(e){console.log(e)}),(function(e){console.log(e)}))}(e)},children:["unhandled"===c.status?Object(f.jsx)("option",{selected:"selected",value:"unhandled",children:"unhandled"}):Object(f.jsx)("option",{value:"unhandled",children:"unhandled"}),"rejected"===c.status?Object(f.jsx)("option",{selected:"selected",value:"rejected",children:"rejected"}):Object(f.jsx)("option",{value:"rejected",children:"rejected"}),"accepted"===c.status?Object(f.jsx)("option",{selected:"selected",value:"accepted",children:"accepted"}):Object(f.jsx)("option",{value:"accepted",children:"accepted"})]})})]},c.id)},U=(n(273),function(e){var t=e.apiCall,n=e.applications;return Object(f.jsxs)("table",{className:"content-table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"fname"}),Object(f.jsx)("th",{children:"lname"}),Object(f.jsx)("th",{children:"skills"}),Object(f.jsx)("th",{children:"startP"}),Object(f.jsx)("th",{children:"endP"}),Object(f.jsx)("th",{children:"date of birth"}),Object(f.jsx)("th",{children:"application made at"}),Object(f.jsx)("th",{children:"application status"})]})}),Object(f.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(f.jsx)(A,{apiCall:t,item:e})}))})]})}),q=function(e){var t=e.apiCall,n=Object(i.useState)([]),c=Object(h.a)(n,2),r=c[0],a=c[1],s=Object(m.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),l=Object(m.c)((function(e){return e.UserReducer.userInfo[0].role}));Object(i.useEffect)((function(){"admin"===l&&!1!==s||(window.location="/")}),[s,l]);var o=function(e){var t=e.label,n=Object(k.a)(e,["label"]),i=Object(w.d)(n),c=Object(h.a)(i,1)[0];return Object(f.jsx)(I.a,Object(y.a)(Object(y.a)({},c),{},{control:Object(f.jsx)(R.a,{}),label:t}))};return Object(f.jsx)("div",{children:"admin"===l&&!0===s?Object(f.jsxs)("div",{children:[Object(f.jsx)(w.c,{initialValues:{competences:[]},onSubmit:function(e,n){var i=n.setSubmitting;i(!0);var c="posts";2===e.competences.length?c="posts/competence/or="+e.competences[0]+"&="+e.competences[1]:1===e.competences.length&&(c="posts/competence="+e.competences[0]),t.apiAxios().get(c).then((function(e){return i(!1),a(e.data),a(e.data)}))},children:function(e){var t=e.values,n=e.isSubmitting,i=e.errors;return Object(f.jsxs)(w.b,{children:[Object(f.jsx)(o,{name:"competences",value:"A-skills",type:"checkbox",label:"A-skills"}),Object(f.jsx)(o,{name:"competences",value:"B-skills",type:"checkbox",label:"B-skills"}),Object(f.jsx)(o,{name:"competences",value:"C-skills",type:"checkbox",label:"C-skills"}),Object(f.jsx)(o,{name:"competences",value:"D-skills",type:"checkbox",label:"D-skills"}),Object(f.jsx)(o,{name:"competences",value:"E-skills",type:"checkbox",label:"E-skills"}),Object(f.jsx)(E.a,{disabled:n,type:"submit",children:"Get Applications"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(f.jsx)("pre",{children:JSON.stringify(i,null,2)})]})]})}}),r.length>0?Object(f.jsx)(U,{apiCall:t,applications:r}):""]}):""})},P=(n(274),function(){var e=Object(m.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),t=Object(m.b)();return Object(f.jsxs)("div",{className:"Header-wrapper",children:[Object(f.jsx)("div",{className:"logo",children:"Recruitment Logo Here"}),e?Object(f.jsx)("button",{className:"authButton",onClick:function(){return t((function(e,t){e({type:"LOG_OUT_USER"})}))},children:"Log out"}):""]})}),F=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={apiCall:new b,model:new O},i}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"applicationApp",children:[Object(f.jsx)("header",{className:"recruitmentApp",children:Object(f.jsx)(P,{})}),Object(f.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(f.jsx)(L,{apiCall:e.state.apiCall})}}),Object(f.jsx)(d.a,{exact:!0,path:"/admin/signup",render:function(){return Object(f.jsx)(B,{})}}),Object(f.jsx)(d.a,{exact:!0,path:"/user/application",render:function(){return Object(f.jsx)(x,{model:e.state.model,apiCall:e.state.apiCall})}}),Object(f.jsx)(d.a,{exact:!0,path:"/admin/applications",render:function(){return Object(f.jsx)(q,{apiCall:e.state.apiCall})}})]})}}]),n}(i.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,314)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))},_=n(31),J=n(137),D=n(92),G=n(138),K=n.n(G),V={userInfo:[{isLoggedIn:!1,role:null,fname:"",lname:"",dateOfBirth:"",email:""}]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN_USER":return{userInfo:[{isLoggedIn:!0,role:t.role,fname:t.fname,lname:t.lname,dateOfBirth:t.dateOfBirth,email:t.email}]};case"LOG_OUT_USER":return{userInfo:[{isLoggedIn:!1,role:null,fname:"",lname:"",dateOfBirth:"",email:""}]};default:return e}},Y=Object(_.c)({UserReducer:H}),M={key:"root",storage:K.a},W=Object(D.a)(M,Y),z=Object(_.d)(W,Object(_.a)(J.a)),Q=Object(D.b)(z),X=n(87),Z=n(139);r.a.render(Object(f.jsx)(m.a,{store:z,children:Object(f.jsx)(Z.a,{loading:null,persistor:Q,children:Object(f.jsx)(X.a,{children:Object(f.jsx)(F,{})})})}),document.getElementById("root")),T()}},[[278,1,2]]]);
//# sourceMappingURL=main.c20fde1a.chunk.js.map