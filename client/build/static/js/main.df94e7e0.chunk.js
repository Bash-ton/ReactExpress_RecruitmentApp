(this.webpackJsonpid1201arkitektur=this.webpackJsonpid1201arkitektur||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){},276:function(e,t,n){},295:function(e,t,n){},296:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(11),c=n.n(s),i=(n(153),n(9)),a=n(10),o=n(23),l=n(24),u=(n(154),n(16)),d=n(127),j=n.n(d),p=function(){function e(){Object(i.a)(this,e)}return Object(a.a)(e,[{key:"apiAxios",value:function(){return j.a.create({baseURL:"/",withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json"}})}}]),e}(),b=n(25),h=function(){function e(){Object(i.a)(this,e),this.myExpertise=[],this.observers=[]}return Object(a.a)(e,[{key:"getExpertise",value:function(){return this.myExpertise}},{key:"removeExpertise",value:function(e){this.myExpertise=Object(b.a)(this.myExpertise.filter((function(t){return t.name!==e}))),this.notifyObserver()}},{key:"addExpertise",value:function(e,t){var n={name:e,year:t};this.myExpertise=[].concat(Object(b.a)(this.myExpertise),[n]),this.notifyObserver()}},{key:"getAllExpertise",value:function(){return["A-skills","B-skills","C-skills","D-skills","E-skills"]}},{key:"addObserver",value:function(e){var t=this;return this.observers=this.observers.concat(e),function(){return t.removeObserver(e)}}},{key:"notifyObserver",value:function(){this.observers.forEach((function(e){e()}))}},{key:"removeObserver",value:function(e){this.observers=this.observers.filter((function(t){return t!==e}))}}]),e}(),m=n(15),O=n(22),f=n(1);function x(e){var t=e.model,n=e.apiCall,s=Object(O.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),c=Object(O.c)((function(e){return e.UserReducer.userInfo[0].role})),i=Object(O.c)((function(e){return e.UserReducer.userInfo[0].email})),a=Object(r.useState)(!1),o=Object(m.a)(a,2),l=o[0],d=o[1],j=Object(u.f)();n.apiAxios().get("posts/postEmail="+i).then((function(e){return console.log(e.status),console.log(e),d(!0)})).catch((function(e){d(!1),400==e.response.status?console.log(e):j.replace(j.location.pathname,{errorStatusCode:e.response.status})})),Object(r.useEffect)((function(){"client"===c&&!1!==s||(window.location="/")}),[s,c]),Object(r.useEffect)((function(){"client"===c&&!1!==s||(window.location="/")}),[]);var p=Object(r.useState)(t.getAllExpertise()),h=Object(m.a)(p,2),x=h[0],y=h[1];Object(r.useEffect)((function(){return y(t.getAllExpertise())}),[]);var I=Object(r.useState)(t.getExpertise()),N=Object(m.a)(I,2),S=N[0],E=N[1];Object(r.useEffect)((function(){return t.addObserver((function(){E(t.getExpertise())}))}),[t]),Object(r.useEffect)((function(){return localStorage.setItem("formData",S)}));var L=n.apiAxios();return Object(f.jsx)("div",{children:"client"===c&&!0===s?Object(f.jsx)("div",{children:l?Object(f.jsx)("div",{children:"You have already made an application. Please wait for us to give you a response"}):Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{myExpertise:S,removeExpertise:function(e){t.removeExpertise(e),y([].concat(Object(b.a)(x),[e]))}}),Object(f.jsx)(g,{expertise:x,addExpertise:function(e,n){return t.addExpertise(e,n)},done:function(e){return L.post("posts",{startPeriod:e.start,endPeriod:e.end,dateOfBirth:{year:e.dateOfBirth.year,month:e.dateOfBirth.month,day:e.dateOfBirth.day},status:"unhandled",firstName:e.fname,lastName:e.lname,competence:S,email:e.email}).catch((function(e){400==e.response.status?console.log(e):j.replace(j.location.pathname,{errorStatusCode:e.response.status})}))},removeOption:function(e){return function(e){var t=x.filter((function(t){return t!==e}));y(t)}(e)}})]})}):""})}var v=function(e){var t=e.myExpertise,n=e.removeExpertise;return Object(f.jsx)("div",{children:t.map((function(e){return Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.year})]},e.name+e.year),Object(f.jsx)("button",{onClick:function(){return n(e.name)},children:"remove"})]})}))})},g=function(e){var t=e.expertise,n=e.addExpertise,s=e.done,c=e.removeOption,i=Object(O.c)((function(e){return e.UserReducer.userInfo}));console.log(i);var a=Object(r.useState)(0),o=Object(m.a)(a,2),l=o[0],u=o[1],d=Object(r.useState)(""),j=Object(m.a)(d,2),p=j[0],b=j[1],h=Object(r.useState)(""),x=Object(m.a)(h,2),v=x[0],g=x[1],y=Object(r.useState)(""),I=Object(m.a)(y,2),N=I[0],S=I[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"number",min:"0",placeholder:"years of experience",onChange:function(e){return u(e.target.value)}}),Object(f.jsxs)("select",{onChange:function(e){return b(e.target.value)},children:[Object(f.jsx)("option",{children:"choose your expertise"}),t.map((function(e){return Object(f.jsx)("option",{children:e},e)}))]}),Object(f.jsx)("button",{onClick:function(){n(p,l),c(p)},children:"add skill to application"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"text",min:"0",placeholder:"available start period",onChange:function(e){g(e.target.value)}}),Object(f.jsx)("input",{type:"text",min:"0",placeholder:"available end period",onChange:function(e){S(e.target.value)}}),Object(f.jsx)("button",{onClick:function(){!0===window.confirm("Are you sure you want to submit your application?")&&s({start:v,end:N,fname:i[0].fname,lname:i[0].lname,status:"unhandled",dateOfBirth:i[0].dateOfBirth,email:i[0].email})},children:"confirm and send application"})]})]})},y=n(54),I=n(79),N=n(21),S=n(331),E=n(330),L=n(26),D=function(e){return function(t,n){t({type:"LOG_IN_USER",role:e.data.role,fname:e.data.firstName,lname:e.data.lastName,dateOfBirth:e.data.dateOfBirth,email:e.data.email})}},w=(n(276),n(74)),k=n.n(w),C=function(e){var t=e.apiCall,n=Object(r.useState)("Sign up"),s=Object(m.a)(n,2),c=s[0],i=s[1],a=Object(r.useState)("Login"),o=Object(m.a)(a,2),l=o[0],d=o[1],j=Object(O.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),p=Object(O.c)((function(e){return e.UserReducer.userInfo[0].role})),b=Object(O.b)(),h=Object(r.useState)(!1),x=Object(m.a)(h,2),v=x[0],g=x[1],w=Object(u.f)();Object(r.useEffect)((function(){"client"===p?window.location="/user/application":"admin"===p&&(window.location="/admin/applications")}),[j]);var C=function(e){var t=e.placeholder,n=Object(I.a)(e,["placeholder"]),r=Object(N.d)(n),s=Object(m.a)(r,2),c=s[0],i=s[1],a=i.error&&i.touched?i.error:"";return Object(f.jsx)(S.a,Object(y.a)(Object(y.a)({placeholder:t},c),{},{helperText:a,error:!!a,type:n.type}))},A=L.c().shape({email:L.d().min(4,"Too Short!").required("Required").email("Invalid email"),password:L.d().min(4,"Too Short!").required("Required"),firstName:"Login"===c?L.d():L.d().required("Required"),lastName:"Login"===c?L.d():L.d().required("Required"),dateOfBirth:L.a().of(L.c().shape({year:"Login"===c?L.b():L.b().required("Required"),month:"Login"===c?L.b():L.b().min(1,"must be between 1 and 12").max(12,"must be between 1 and 31").required("Required"),day:"Login"===c?L.b():L.b().min(1,"must be between 1 and 31").max(31,"must be between 1 and 31").required("Required")}))});return Object(f.jsx)("div",{className:"outer-wrapper",children:v?Object(f.jsx)(k.a,{visible:v,type:"TailSpin",color:"#00BFFF",height:80,width:80}):Object(f.jsx)("div",{children:j?"":Object(f.jsx)("div",{className:"inner-wrapper",children:Object(f.jsx)(N.c,{initialValues:{username:"",email:"",password:"",firstName:"",lastName:"",dateOfBirth:[{year:"",month:"",day:""}]},onSubmit:function(e,n){var r=n.setSubmitting,s=n.resetForm;(r(!0),s(),g((function(e){return!e})),"Sign up"===c)?t.apiAxios().post("auth/register",{data:e}).then((function(n){t.apiAxios().post("auth/login",{email:e.email,password:e.password}).then((function(e){b(D(e))}),(function(e){g((function(e){return!e})),400==e.response.status?alert("Wrong email and/or password"):w.replace(w.location.pathname,{errorStatusCode:e.response.status})}))}),(function(e){g((function(e){return!e})),400==e.response.status?alert("email already in use"):w.replace(w.location.pathname,{errorStatusCode:e.response.status})})):t.apiAxios().post("auth/login",{email:e.email,password:e.password}).then((function(e){g((function(e){return!e})),b(D(e))}),(function(e){g((function(e){return!e})),400==e.response.status?alert("Wrong email and/or password"):w.replace(w.location.pathname,{errorStatusCode:e.response.status})}));r(!1)},validationSchema:A,children:function(e){var t=e.values,n=e.isSubmitting,r=e.resetForm,s=e.errors;return Object(f.jsxs)(N.b,{children:["Sign up"===c?Object(f.jsx)("div",{children:Object(f.jsx)("p",{children:"Create an account"})}):Object(f.jsx)("div",{children:"Log in"}),Object(f.jsx)("div",{children:Object(f.jsx)(C,{placeholder:"Email",name:"email",type:"input"})}),Object(f.jsx)("div",{children:Object(f.jsx)(C,{placeholder:"Password",name:"password",type:"password"})}),"Sign up"===c?Object(f.jsx)("div",{children:Object(f.jsx)(C,{placeholder:"Username",name:"username",type:"input"})}):"","Sign up"===c?Object(f.jsx)("div",{children:Object(f.jsx)(C,{placeholder:"First Name",name:"firstName",type:"input"})}):"","Sign up"===c?Object(f.jsx)("div",{children:Object(f.jsx)(C,{placeholder:"Last Name",name:"lastName",type:"input"})}):"",Object(f.jsx)("br",{}),"Sign up"===c?Object(f.jsxs)("div",{children:[Object(f.jsx)(C,{placeholder:"Year",name:"dateOfBirth[0].year",type:"number"}),Object(f.jsx)("br",{}),Object(f.jsx)(C,{placeholder:"Month",name:"dateOfBirth[0].month",type:"number"}),Object(f.jsx)("br",{}),Object(f.jsx)(C,{placeholder:"Day",name:"dateOfBirth[0].day",type:"number"})]}):"",Object(f.jsx)("div",{children:Object(f.jsx)(E.a,{disabled:n,type:"submit",children:c})}),Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(f.jsx)("pre",{children:JSON.stringify(s,null,2)}),Object(f.jsx)("div",{onClick:function(){"Login"===c?(i("Sign up"),d("Login")):(i("Login"),d("Sign up")),r()},children:l})]})}})})})})},A=function(){return Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)(N.c,{initialValues:{email:"",password:"",adminKey:""},onSubmit:function(e,t){var n=t.setSubmitting,r=t.resetForm;n(!0),r(),console.log("submit:",e),n(!1)},children:function(e){var t=e.values,n=e.isSubmitting;return Object(f.jsx)("div",{children:Object(f.jsxs)(N.b,{children:[Object(f.jsx)("div",{children:Object(f.jsx)(N.a,{placeholder:"Email",name:"email",type:"input",as:S.a})}),Object(f.jsx)("div",{children:Object(f.jsx)(N.a,{placeholder:"Password",name:"password",type:"password",as:S.a})}),Object(f.jsx)("div",{children:Object(f.jsx)(N.a,{placeholder:"Key",name:"adminKey",type:"password",as:S.a})}),Object(f.jsx)("div",{children:Object(f.jsx)(E.a,{disabled:n,type:"submit",children:"Sign up"})}),Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)})]})})}}),Object(f.jsx)("div",{onClick:function(){var e;e="/",window.location=e},children:"log in"})]})},U=n(333),B=n(332),R=function(e){var t,n,r=e.apiCall,s=e.item,c=Object(u.f)();return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:s.firstName}),Object(f.jsx)("td",{children:s.lastName}),Object(f.jsx)("td",{children:null===(t=s.competence)||void 0===t?void 0:t.map((function(e){return Object(f.jsxs)("div",{children:[e.name," ",e.year," year(s)"]})}))}),Object(f.jsx)("td",{children:s.startPeriod}),Object(f.jsx)("td",{children:s.endPeriod}),Object(f.jsx)("td",{children:null===(n=s.dateOfBirth)||void 0===n?void 0:n.map((function(e){return Object(f.jsxs)("div",{children:[e.year,"-",e.month,"-",e.day," "]})}))}),Object(f.jsx)("td",{children:s.date}),Object(f.jsx)("td",{children:Object(f.jsxs)("select",{name:"status",onChange:function(e){!function(e){r.apiAxios().post("posts/application",{status:e.target.value,email:s.email}).then((function(e){console.log(e)}),(function(e){400==e.response.status?console.log("Email is incorrect"):c.replace(c.location.pathname,{errorStatusCode:e.response.status})}))}(e)},children:["unhandled"===s.status?Object(f.jsx)("option",{selected:"selected",value:"unhandled",children:"unhandled"}):Object(f.jsx)("option",{value:"unhandled",children:"unhandled"}),"rejected"===s.status?Object(f.jsx)("option",{selected:"selected",value:"rejected",children:"rejected"}):Object(f.jsx)("option",{value:"rejected",children:"rejected"}),"accepted"===s.status?Object(f.jsx)("option",{selected:"selected",value:"accepted",children:"accepted"}):Object(f.jsx)("option",{value:"accepted",children:"accepted"})]})})]},s.id)},T=(n(295),function(e){var t=e.apiCall,n=e.applications;return Object(f.jsxs)("table",{className:"content-table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"fname"}),Object(f.jsx)("th",{children:"lname"}),Object(f.jsx)("th",{children:"skills"}),Object(f.jsx)("th",{children:"startP"}),Object(f.jsx)("th",{children:"endP"}),Object(f.jsx)("th",{children:"date of birth"}),Object(f.jsx)("th",{children:"application made at"}),Object(f.jsx)("th",{children:"application status"})]})}),Object(f.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(f.jsx)(R,{apiCall:t,item:e})}))})]})}),_=function(e){var t=e.apiCall,n=Object(r.useState)([]),s=Object(m.a)(n,2),c=s[0],i=s[1],a=Object(O.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),o=Object(O.c)((function(e){return e.UserReducer.userInfo[0].role})),l=Object(u.f)(),d=Object(r.useState)(!1),j=Object(m.a)(d,2),p=j[0],b=j[1];Object(r.useEffect)((function(){"admin"===o&&!1!==a||(window.location="/")}),[a,o]);var h=function(e){var t=e.label,n=Object(I.a)(e,["label"]),r=Object(N.d)(n),s=Object(m.a)(r,1)[0];return Object(f.jsx)(U.a,Object(y.a)(Object(y.a)({},s),{},{control:Object(f.jsx)(B.a,{}),label:t}))};return Object(f.jsx)("div",{children:p?Object(f.jsx)(k.a,{visible:p,type:"TailSpin",color:"#00BFFF",height:80,width:80}):Object(f.jsx)("div",{children:"admin"===o&&!0===a?Object(f.jsxs)("div",{children:[Object(f.jsx)(N.c,{initialValues:{competences:[]},onSubmit:function(e,n){var r=n.setSubmitting;r(!0);var s="posts";1===e.competences.length?s="posts/competence="+e.competences[0]:2===e.competences.length?s="posts/competence="+e.competences[0]+"&="+e.competences[1]:3===e.competences.length?s="posts/competence="+e.competences[0]+"&="+e.competences[1]+"&="+e.competences[2]:4===e.competences.length?s="posts/competence="+e.competences[0]+"&="+e.competences[1]+"&="+e.competences[2]+"&="+e.competences[3]:5===e.competences.length&&(s="posts/competence="+e.competences[0]+"&="+e.competences[1]+"&="+e.competences[2]+"&="+e.competences[3]+"&="+e.competences[4]),console.log(s),t.apiAxios().get(s).then((function(e){return r(!1),i(e.data),i(e.data)})).catch((function(e){b((function(e){return!e})),400==e.response.status?console.log(e):l.replace(l.location.pathname,{errorStatusCode:e.response.status})}))},children:function(e){var t=e.values,n=e.isSubmitting,r=e.errors;return Object(f.jsxs)(N.b,{children:[Object(f.jsx)(h,{name:"competences",value:"A-skills",type:"checkbox",label:"A-skills"}),Object(f.jsx)(h,{name:"competences",value:"B-skills",type:"checkbox",label:"B-skills"}),Object(f.jsx)(h,{name:"competences",value:"C-skills",type:"checkbox",label:"C-skills"}),Object(f.jsx)(h,{name:"competences",value:"D-skills",type:"checkbox",label:"D-skills"}),Object(f.jsx)(h,{name:"competences",value:"E-skills",type:"checkbox",label:"E-skills"}),Object(f.jsx)(E.a,{disabled:n,type:"submit",children:"Get Applications"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(f.jsx)("pre",{children:JSON.stringify(r,null,2)})]})]})}}),c.length>0?Object(f.jsx)(T,{apiCall:t,applications:c}):""]}):""})})},P=(n(296),function(){var e=Object(O.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),t=Object(O.b)();return Object(f.jsxs)("div",{className:"Header-wrapper",children:[Object(f.jsx)("div",{className:"logo",children:"Recruitment Logo Here"}),e?Object(f.jsx)("button",{className:"authButton",onClick:function(){return t((function(e,t){e({type:"LOG_OUT_USER"})}))},children:"Log out"}):""]})}),q=n(27),F=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"404 Error"}),Object(f.jsx)("p",{children:"The requested URL was not found on this server."}),Object(f.jsx)(q.b,{to:"/",children:Object(f.jsx)("button",{type:"button",children:"back to main app"})})]})},V=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"401 Error"}),Object(f.jsx)("p",{children:"Unauthorized access."}),Object(f.jsx)(q.b,{to:"/",children:Object(f.jsx)("button",{type:"button",children:"back to main app"})})]})},G=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"500 Error"}),Object(f.jsx)("p",{children:"Server encountered a internal error and cannot handle the request."}),Object(f.jsx)(q.b,{to:"/",children:Object(f.jsx)("button",{type:"button",children:"back to main app"})})]})},J=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"501 Error"}),Object(f.jsx)("p",{children:"Server encountered a error and currently cannot handle the request."}),Object(f.jsx)(q.b,{to:"/",children:Object(f.jsx)("button",{type:"button",children:"back to main app"})})]})},M=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"503 Error"}),Object(f.jsx)("p",{children:"Server encountered a error and currently cannot handle the request."}),Object(f.jsx)(q.b,{to:"/",children:Object(f.jsx)("button",{type:"button",children:"back to main app"})})]})},Y=function(e){var t=e.apiCall,n=[],r=[],s=[],c=[],i=[],a=[];return Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)(N.c,{initialValues:{VALUES:""},onSubmit:function(e,o){var l=o.setSubmitting,u=o.resetForm;l(!0),u();var d="",j="";console.log(e.VALUES),e.VALUES.includes("INSERT INTO person")||e.VALUES.includes('INSERT INTO "person"')?(j="MIGRATE_USER",d="person"):e.VALUES.includes("INSERT INTO competence_profile")||e.VALUES.includes('INSERT INTO "competence_profile"')?(j="MIGRATE_APPLICATION",d="competence_profile"):(j="MIGRATE_APPLICATION",d="availability");var p=e.VALUES.split("VALUES");console.log(p);var b=p[0].split("\\").join("");b=(b=(b=(b=(b=(b=b.split(d).join("")).split("INSERT INTO").join("")).split("(").join("")).split(")").join("")).split('"').join("")).split("\u2019").join(""),console.log(b.split("\u2019").join("")),b=(b=(b=b.split(" ").join("")).split(";").join("")).split(","),console.log(b),p=(p=(p=(p=(p=(p=(p=p[1].split("\\").join("")).split("(").join("")).split(")").join("")).split('"').join("")).split("\u2019").join("")).split("'").join("")).split(";").join(""),console.log(p);var h=p.split(" ").join("").split(",");console.log(h.length);var m={},O=0;if("person"===d?b.forEach((function(e){"_id"===e&&"NULL"!==h[O]?m.userID=O:"name"===e&&"NULL"!==h[O]?m.firstname=O:"surname"===e&&"NULL"!==h[O]?m.lastname=O:"ssn"===e&&"NULL"!==h[O]?m.dateOfBirth=O:"email"===e&&"NULL"!==h[O]?m.email=O:"password"===e&&"NULL"!==h[O]?m.password=O:"role_id"===e&&"NULL"!==h[O]?m.role=O:"username"===e&&"NULL"!==h[O]&&(m.username=O),O++})):"competence_profile"===d?b.forEach((function(e){"_id"===e&&"NULL"!==h[O]?m.compProfID=O:"person_id"===e&&"NULL"!==h[O]?m.userID=O:"competence_id"===e&&"NULL"!==h[O]?m.competenceID=O:"years_of_experience"===e&&"NULL"!==h[O]&&(m.compYear=O),O++})):b.forEach((function(e){"_id"===e&&"NULL"!==h[O]?m.availableID=O:"person_id"===e&&"NULL"!==h[O]?m.userID=O:"from_date"===e&&"NULL"!==h[O]?m.fromDate=O:"to_date"===e&&"NULL"!==h[O]&&(m.toDate=O),O++})),console.log(m),"MIGRATE_USER"===j){console.log(h);var f,x={};if(n.forEach((function(e){e.userID===h[m.userID]&&(console.log(e),x=e)})),console.log(m),console.log(m.email),console.log(h[m.firstname]),m.username>=0&&(x.username=h[m.username]),m.email>=0&&(x.email=h[m.email]),m.password>=0&&(x.password=h[m.password]),m.firstname>=0&&(x.firstName=h[m.firstname]),m.lastname>=0&&(x.lastName=h[m.lastname]),m.dateOfBirth>=0){x.dateOfBirth=h[m.dateOfBirth];var v=h[m.dateOfBirth].split("-").join(""),g=v.substring(0,4),y=v.substring(4,6),I=v.substring(6,8);x.dateOfBirth=[{year:parseInt(g),month:parseInt(y),day:parseInt(I)}]}if(m.role>=0)f=1===parseInt(h[m.role])?"admin":"client",x.role=f;if(console.log(x),x.userID=h[m.userID],console.log(h[m.userID]),console.log(Object.keys(x).length),Object.keys(x).length<8){n.push(x);var N="The following attributes are missing to be able to migrate this user to the new system:";x.email||(N+=" email,"),x.username||(N+=" username,"),x.password||(N+=" password,"),x.firstName||(N+=" firstName,"),x.lastName||(N+=" lastName,"),x.dateOfBirth||(N+=" dateOfBirth/ssn,"),(r=r.filter((function(e){return e.userID!==h[m.userID]}))).push({userID:h[m.userID],msg:N}),console.log(x),console.log(n)}else{console.log("DONE"),r=r.filter((function(e){return e.userID!==h[m.userID]})),console.log(x),i.push(x),t.apiAxios().post("auth/register",{data:{username:x.username,email:x.email,password:x.password,firstName:x.firstName,lastName:x.lastName,dateOfBirth:x.dateOfBirth,role:x.role}}).then((function(e){a.forEach((function(e){e.userID===h[m.userID]&&console.log(e)}))}),(function(e){console.log(e),alert("something went wrong")}))}}else if("MIGRATE_APPLICATION"===j){var S={};c.forEach((function(e){e.userID===h[m.userID]&&(console.log(e),S=e)}));var E="";if(m.compProfID>=0&&(S.compProfID=h[m.compProfID]),m.userID>=0&&(S.userID=h[m.userID]),m.competenceID>=0&&(S.competenceID=h[m.competenceID],E=1===h[m.competenceID]?"A-skills":"B-skills"),m.compYear>=0&&(S.compYear=h[m.compYear]),m.availableID>=0&&(S.availableID=h[m.availableID]),m.fromDate>=0&&(S.fromDate=h[m.fromDate]),m.toDate>=0&&(S.toDate=h[m.toDate]),console.log(Object.keys(S).length),Object.keys(S).length<7){c.push(S);var L="The following attributes are missing to be able to migrate this application to the new system:";S.compYear||(L+=" years_of_experience,"),S.fromDate||(L+=" available from_date,"),S.toDate||(L+=" available to_date,"),S.competenceID||(L+=" competenceID,"),(s=s.filter((function(e){return e.userID!==h[m.userID]}))).push({userID:h[m.userID],msg:L}),console.log(S),console.log(c)}else{console.log("DONE"),a.push(S);var D={};if(i.forEach((function(e){e.userID===h[m.userID]&&(console.log(e),D=e)})),s=s.filter((function(e){return e.userID!==h[m.userID]})),0===Object.keys(D).length)console.log("CHECK IF EXISTS IN DB INSTEAD AND CALL DB else update error messages");else console.log("CREATE APPLICATION AND SEND TO DB"),t.apiAxios().post("posts",{startPeriod:S.fromDate,endPeriod:S.toDate,dateOfBirth:D.dateOfBirth,status:"unhandled",firstName:D.firstName,lastName:D.lastName,competence:[{name:E,year:parseInt(S.compYear)}],email:D.email}).then((function(){console.log("application migration success!"),alert("application migration success!")})).catch((function(e){console.log(e),alert("something went wrong")}));console.log(S)}}console.log("submit:",e),l(!1)},children:function(e){var t=e.values,n=e.isSubmitting;return Object(f.jsx)("div",{children:Object(f.jsxs)(N.b,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:"Insert sql code here:"}),Object(f.jsx)(N.a,{placeholder:"values",name:"VALUES",type:"input",as:S.a})]}),Object(f.jsx)("div",{children:Object(f.jsx)(E.a,{disabled:n,type:"submit",children:"Create User"})}),Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(f.jsxs)("pre",{children:['Migration issues "users": ',JSON.stringify(r,null,2)]}),Object(f.jsxs)("pre",{children:['Migration issues "applications": ',JSON.stringify(s,null,2)]})]})})}})})},K=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={apiCall:new p,model:new h},r}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"applicationApp",children:[Object(f.jsx)("header",{className:"recruitmentApp",children:Object(f.jsx)(P,{})}),Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(f.jsx)(C,{apiCall:e.state.apiCall})}}),Object(f.jsx)(u.a,{exact:!0,path:"/admin/signup",render:function(){return Object(f.jsx)(A,{})}}),Object(f.jsx)(u.a,{exact:!0,path:"/user/application",render:function(){return Object(f.jsx)(x,{model:e.state.model,apiCall:e.state.apiCall})}}),Object(f.jsx)(u.a,{exact:!0,path:"/admin/applications",render:function(){return Object(f.jsx)(_,{apiCall:e.state.apiCall})}}),Object(f.jsx)(u.a,{exact:!0,path:"/admin/Migrate",render:function(){return Object(f.jsx)(Y,{apiCall:e.state.apiCall})}}),Object(f.jsx)(u.a,{exact:!0,path:"*",render:function(){return Object(f.jsx)(F,{})}})]})]})}}]),n}(r.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,335)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))},W=n(32),z=n(138),X=n(95),Q=n(139),Z=n.n(Q),$={userInfo:[{isLoggedIn:!1,role:null,fname:"",lname:"",dateOfBirth:"",email:""}]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN_USER":return{userInfo:[{isLoggedIn:!0,role:t.role,fname:t.fname,lname:t.lname,dateOfBirth:t.dateOfBirth,email:t.email}]};case"LOG_OUT_USER":return{userInfo:[{isLoggedIn:!1,role:null,fname:"",lname:"",dateOfBirth:"",email:""}]};default:return e}},te=Object(W.c)({UserReducer:ee}),ne={key:"root",storage:Z.a},re=Object(X.a)(ne,te),se=Object(W.d)(re,Object(W.a)(z.a)),ce=Object(X.b)(se),ie=n(140),ae=n(141),oe=function(e){var t=e.children,n=Object(u.g)();switch(Object(ae.get)(n.state,"errorStatusCode")){case 404:return Object(f.jsx)(F,{});case 401:return Object(f.jsx)(V,{});case 500:return Object(f.jsx)(G,{});case 501:return Object(f.jsx)(J,{});case 503:return Object(f.jsx)(M,{});default:return t}};c.a.render(Object(f.jsx)(O.a,{store:se,children:Object(f.jsx)(ie.a,{loading:null,persistor:ce,children:Object(f.jsx)(q.a,{children:Object(f.jsx)(oe,{children:Object(f.jsx)(K,{})})})})}),document.getElementById("root")),H()}},[[299,1,2]]]);
//# sourceMappingURL=main.df94e7e0.chunk.js.map