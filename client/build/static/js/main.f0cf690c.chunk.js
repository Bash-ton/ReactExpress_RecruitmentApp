(this.webpackJsonpid1201arkitektur=this.webpackJsonpid1201arkitektur||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},279:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(11),r=n.n(s),a=(n(151),n(9)),c=n(10),o=n(22),l=n(23),u=(n(152),n(15)),d=n(126),j=n.n(d),p=function(){function e(){Object(a.a)(this,e)}return Object(c.a)(e,[{key:"apiAxios",value:function(){return j.a.create({baseURL:"/",withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json"}})}}]),e}(),m=n(24),b=function(){function e(){Object(a.a)(this,e),this.myExpertise=[],this.observers=[]}return Object(c.a)(e,[{key:"getExpertise",value:function(){return this.myExpertise}},{key:"removeExpertise",value:function(e){this.myExpertise=Object(m.a)(this.myExpertise.filter((function(t){return t.name!==e}))),this.notifyObserver()}},{key:"addExpertise",value:function(e,t){var n={name:e,year:t};this.myExpertise=[].concat(Object(m.a)(this.myExpertise),[n]),this.notifyObserver()}},{key:"getAllExpertise",value:function(){return["A-skills","B-skills","C-skills","D-skills","E-skills"]}},{key:"addObserver",value:function(e){var t=this;return this.observers=this.observers.concat(e),function(){return t.removeObserver(e)}}},{key:"notifyObserver",value:function(){this.observers.forEach((function(e){e()}))}},{key:"removeObserver",value:function(e){this.observers=this.observers.filter((function(t){return t!==e}))}}]),e}(),h=n(18),O=n(25),f=n(2);function x(e){var t=e.model,n=e.apiCall,s=Object(O.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),r=Object(O.c)((function(e){return e.UserReducer.userInfo[0].role})),a=Object(i.useState)(!1),c=Object(h.a)(a,2),o=c[0],l=c[1];n.apiAxios().get("posts/postEmail=client@kth.se").then((function(e){return console.log(e.status),console.log(e),l(!0)})).catch((function(e){console.log(e),l(!1)})),Object(i.useEffect)((function(){"client"===r&&!1!==s||(window.location="/")}),[s,r]),Object(i.useEffect)((function(){"client"===r&&!1!==s||(window.location="/")}),[]);var u=Object(i.useState)(t.getAllExpertise()),d=Object(h.a)(u,2),j=d[0],p=d[1];Object(i.useEffect)((function(){return p(t.getAllExpertise())}),[]);var b=Object(i.useState)(t.getExpertise()),x=Object(h.a)(b,2),y=x[0],I=x[1];Object(i.useEffect)((function(){return t.addObserver((function(){I(t.getExpertise())}))}),[t]),Object(i.useEffect)((function(){return localStorage.setItem("formData",y)}));var N=n.apiAxios();return Object(f.jsx)("div",{children:"client"===r&&!0===s?Object(f.jsx)("div",{children:o?Object(f.jsx)("div",{children:"You have already made an application. Please wait for us to give you a response"}):Object(f.jsxs)("div",{children:[Object(f.jsx)(g,{myExpertise:y,removeExpertise:function(e){t.removeExpertise(e),p([].concat(Object(m.a)(j),[e]))}}),Object(f.jsx)(v,{expertise:j,addExpertise:function(e,n){return t.addExpertise(e,n)},done:function(e){return N.post("posts",{startPeriod:e.start,endPeriod:e.end,dateOfBirth:{year:e.dateOfBirth.year,month:e.dateOfBirth.month,day:e.dateOfBirth.day},status:"unhandled",firstName:e.fname,lastName:e.lname,competence:y,email:e.email})},removeOption:function(e){return function(e){var t=j.filter((function(t){return t!==e}));p(t)}(e)}})]})}):""})}var g=function(e){var t=e.myExpertise,n=e.removeExpertise;return Object(f.jsx)("div",{children:t.map((function(e){return Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.year})]},e.name+e.year),Object(f.jsx)("button",{onClick:function(){return n(e.name)},children:"remove"})]})}))})},v=function(e){var t=e.expertise,n=e.addExpertise,s=e.done,r=e.removeOption,a=Object(O.c)((function(e){return e.UserReducer.userInfo}));console.log(a);var c=Object(i.useState)(0),o=Object(h.a)(c,2),l=o[0],u=o[1],d=Object(i.useState)(""),j=Object(h.a)(d,2),p=j[0],m=j[1],b=Object(i.useState)(""),x=Object(h.a)(b,2),g=x[0],v=x[1],y=Object(i.useState)(""),I=Object(h.a)(y,2),N=I[0],E=I[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"number",min:"0",placeholder:"years of experience",onChange:function(e){return u(e.target.value)}}),Object(f.jsxs)("select",{onChange:function(e){return m(e.target.value)},children:[Object(f.jsx)("option",{children:"choose your expertise"}),t.map((function(e){return Object(f.jsx)("option",{children:e},e)}))]}),Object(f.jsx)("button",{onClick:function(){n(p,l),r(p)},children:"add skill to application"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"text",min:"0",placeholder:"available start period",onChange:function(e){v(e.target.value)}}),Object(f.jsx)("input",{type:"text",min:"0",placeholder:"available end period",onChange:function(e){E(e.target.value)}}),Object(f.jsx)("button",{onClick:function(){!0===window.confirm("Are you sure you want to submit your application?")&&s({start:g,end:N,fname:a[0].fname,lname:a[0].lname,status:"unhandled",dateOfBirth:a[0].dateOfBirth,email:a[0].email})},children:"confirm and send application"})]})]})},y=n(53),I=n(77),N=n(21),E=n(311),L=n(310),D=n(26),S=function(e){return function(t,n){t({type:"LOG_IN_USER",role:e.data.role,fname:e.data.firstName,lname:e.data.lastName,dateOfBirth:e.data.dateOfBirth,email:e.data.email})}},w=(n(273),function(e){var t=e.apiCall,n=Object(i.useState)("Sign up"),s=Object(h.a)(n,2),r=s[0],a=s[1],c=Object(i.useState)("Login"),o=Object(h.a)(c,2),l=o[0],u=o[1],d=Object(O.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),j=Object(O.c)((function(e){return e.UserReducer.userInfo[0].role})),p=Object(O.b)();Object(i.useEffect)((function(){"client"===j?window.location="/user/application":"admin"===j&&(window.location="/admin/applications")}),[d]);var m=function(e){var t=e.placeholder,n=Object(I.a)(e,["placeholder"]),i=Object(N.d)(n),s=Object(h.a)(i,2),r=s[0],a=s[1],c=a.error&&a.touched?a.error:"";return Object(f.jsx)(E.a,Object(y.a)(Object(y.a)({placeholder:t},r),{},{helperText:c,error:!!c,type:n.type}))},b=D.c().shape({email:D.d().min(4,"Too Short!").required("Required").email("Invalid email"),password:D.d().min(4,"Too Short!").required("Required"),firstName:"Login"===r?D.d():D.d().required("Required"),lastName:"Login"===r?D.d():D.d().required("Required"),dateOfBirth:D.a().of(D.c().shape({year:"Login"===r?D.b():D.b().required("Required"),month:"Login"===r?D.b():D.b().min(1,"must be between 1 and 12").max(12,"must be between 1 and 31").required("Required"),day:"Login"===r?D.b():D.b().min(1,"must be between 1 and 31").max(31,"must be between 1 and 31").required("Required")}))});return Object(f.jsx)("div",{className:"outer-wrapper",children:d?"":Object(f.jsx)("div",{className:"inner-wrapper",children:Object(f.jsx)(N.c,{initialValues:{username:"",email:"",password:"",firstName:"",lastName:"",dateOfBirth:[{year:"",month:"",day:""}]},onSubmit:function(e,n){var i=n.setSubmitting,s=n.resetForm;(i(!0),s(),"Sign up"===r)?t.apiAxios().post("auth/register",{data:e}).then((function(n){t.apiAxios().post("auth/login",{email:e.email,password:e.password}).then((function(e){p(S(e))}),(function(e){console.log(e)}))}),(function(e){console.log(e),alert("email already in use")})):t.apiAxios().post("auth/login",{email:e.email,password:e.password}).then((function(e){p(S(e))}),(function(){alert("Wrong email and/or password")}));i(!1)},validationSchema:b,children:function(e){var t=e.values,n=e.isSubmitting,i=e.resetForm,s=e.errors;return Object(f.jsxs)(N.b,{children:["Sign up"===r?Object(f.jsx)("div",{children:Object(f.jsx)("p",{children:"Create an account"})}):Object(f.jsx)("div",{children:"Log in"}),Object(f.jsx)("div",{children:Object(f.jsx)(m,{placeholder:"Email",name:"email",type:"input"})}),Object(f.jsx)("div",{children:Object(f.jsx)(m,{placeholder:"Password",name:"password",type:"password"})}),"Sign up"===r?Object(f.jsx)("div",{children:Object(f.jsx)(m,{placeholder:"Username",name:"username",type:"input"})}):"","Sign up"===r?Object(f.jsx)("div",{children:Object(f.jsx)(m,{placeholder:"First Name",name:"firstName",type:"input"})}):"","Sign up"===r?Object(f.jsx)("div",{children:Object(f.jsx)(m,{placeholder:"Last Name",name:"lastName",type:"input"})}):"",Object(f.jsx)("br",{}),"Sign up"===r?Object(f.jsxs)("div",{children:[Object(f.jsx)(m,{placeholder:"Year",name:"dateOfBirth[0].year",type:"number"}),Object(f.jsx)("br",{}),Object(f.jsx)(m,{placeholder:"Month",name:"dateOfBirth[0].month",type:"number"}),Object(f.jsx)("br",{}),Object(f.jsx)(m,{placeholder:"Day",name:"dateOfBirth[0].day",type:"number"})]}):"",Object(f.jsx)("div",{children:Object(f.jsx)(L.a,{disabled:n,type:"submit",children:r})}),Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(f.jsx)("pre",{children:JSON.stringify(s,null,2)}),Object(f.jsx)("div",{onClick:function(){"Login"===r?(a("Sign up"),u("Login")):(a("Login"),u("Sign up")),i()},children:l})]})}})})})}),k=function(){return Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)(N.c,{initialValues:{email:"",password:"",adminKey:""},onSubmit:function(e,t){var n=t.setSubmitting,i=t.resetForm;n(!0),i(),console.log("submit:",e),n(!1)},children:function(e){var t=e.values,n=e.isSubmitting;return Object(f.jsx)("div",{children:Object(f.jsxs)(N.b,{children:[Object(f.jsx)("div",{children:Object(f.jsx)(N.a,{placeholder:"Email",name:"email",type:"input",as:E.a})}),Object(f.jsx)("div",{children:Object(f.jsx)(N.a,{placeholder:"Password",name:"password",type:"password",as:E.a})}),Object(f.jsx)("div",{children:Object(f.jsx)(N.a,{placeholder:"Key",name:"adminKey",type:"password",as:E.a})}),Object(f.jsx)("div",{children:Object(f.jsx)(L.a,{disabled:n,type:"submit",children:"Sign up"})}),Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)})]})})}}),Object(f.jsx)("div",{onClick:function(){var e;e="/",window.location=e},children:"log in"})]})},A=n(313),C=n(312),U=function(e){var t,n,i=e.apiCall,s=e.item;return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:s.firstName}),Object(f.jsx)("td",{children:s.lastName}),Object(f.jsx)("td",{children:null===(t=s.competence)||void 0===t?void 0:t.map((function(e){return Object(f.jsxs)("div",{children:[e.name," ",e.year," year(s)"]})}))}),Object(f.jsx)("td",{children:s.startPeriod}),Object(f.jsx)("td",{children:s.endPeriod}),Object(f.jsx)("td",{children:null===(n=s.dateOfBirth)||void 0===n?void 0:n.map((function(e){return Object(f.jsxs)("div",{children:[e.year,"-",e.month,"-",e.day," "]})}))}),Object(f.jsx)("td",{children:s.date}),Object(f.jsx)("td",{children:Object(f.jsxs)("select",{name:"status",onChange:function(e){!function(e){i.apiAxios().post("posts/application",{status:e.target.value,email:s.email}).then((function(e){console.log(e)}),(function(e){console.log(e)}))}(e)},children:["unhandled"===s.status?Object(f.jsx)("option",{selected:"selected",value:"unhandled",children:"unhandled"}):Object(f.jsx)("option",{value:"unhandled",children:"unhandled"}),"rejected"===s.status?Object(f.jsx)("option",{selected:"selected",value:"rejected",children:"rejected"}):Object(f.jsx)("option",{value:"rejected",children:"rejected"}),"accepted"===s.status?Object(f.jsx)("option",{selected:"selected",value:"accepted",children:"accepted"}):Object(f.jsx)("option",{value:"accepted",children:"accepted"})]})})]},s.id)},B=(n(274),function(e){var t=e.apiCall,n=e.applications;return Object(f.jsxs)("table",{className:"content-table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"fname"}),Object(f.jsx)("th",{children:"lname"}),Object(f.jsx)("th",{children:"skills"}),Object(f.jsx)("th",{children:"startP"}),Object(f.jsx)("th",{children:"endP"}),Object(f.jsx)("th",{children:"date of birth"}),Object(f.jsx)("th",{children:"application made at"}),Object(f.jsx)("th",{children:"application status"})]})}),Object(f.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(f.jsx)(U,{apiCall:t,item:e})}))})]})}),R=function(e){var t=e.apiCall,n=Object(i.useState)([]),s=Object(h.a)(n,2),r=s[0],a=s[1],c=Object(O.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),o=Object(O.c)((function(e){return e.UserReducer.userInfo[0].role}));Object(i.useEffect)((function(){"admin"===o&&!1!==c||(window.location="/")}),[c,o]);var l=function(e){var t=e.label,n=Object(I.a)(e,["label"]),i=Object(N.d)(n),s=Object(h.a)(i,1)[0];return Object(f.jsx)(A.a,Object(y.a)(Object(y.a)({},s),{},{control:Object(f.jsx)(C.a,{}),label:t}))};return Object(f.jsx)("div",{children:"admin"===o&&!0===c?Object(f.jsxs)("div",{children:[Object(f.jsx)(N.c,{initialValues:{competences:[]},onSubmit:function(e,n){var i=n.setSubmitting;i(!0);var s="posts";1===e.competences.length?s="posts/competence="+e.competences[0]:2===e.competences.length?s="posts/competence="+e.competences[0]+"&="+e.competences[1]:3===e.competences.length?s="posts/competence="+e.competences[0]+"&="+e.competences[1]+"&="+e.competences[2]:4===e.competences.length?s="posts/competence="+e.competences[0]+"&="+e.competences[1]+"&="+e.competences[2]+"&="+e.competences[3]:5===e.competences.length&&(s="posts/competence="+e.competences[0]+"&="+e.competences[1]+"&="+e.competences[2]+"&="+e.competences[3]+"&="+e.competences[4]),console.log(s),t.apiAxios().get(s).then((function(e){return i(!1),a(e.data),a(e.data)}))},children:function(e){var t=e.values,n=e.isSubmitting,i=e.errors;return Object(f.jsxs)(N.b,{children:[Object(f.jsx)(l,{name:"competences",value:"A-skills",type:"checkbox",label:"A-skills"}),Object(f.jsx)(l,{name:"competences",value:"B-skills",type:"checkbox",label:"B-skills"}),Object(f.jsx)(l,{name:"competences",value:"C-skills",type:"checkbox",label:"C-skills"}),Object(f.jsx)(l,{name:"competences",value:"D-skills",type:"checkbox",label:"D-skills"}),Object(f.jsx)(l,{name:"competences",value:"E-skills",type:"checkbox",label:"E-skills"}),Object(f.jsx)(L.a,{disabled:n,type:"submit",children:"Get Applications"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(f.jsx)("pre",{children:JSON.stringify(i,null,2)})]})]})}}),r.length>0?Object(f.jsx)(B,{apiCall:t,applications:r}):""]}):""})},T=(n(275),function(){var e=Object(O.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),t=Object(O.b)();return Object(f.jsxs)("div",{className:"Header-wrapper",children:[Object(f.jsx)("div",{className:"logo",children:"Recruitment Logo Here"}),e?Object(f.jsx)("button",{className:"authButton",onClick:function(){return t((function(e,t){e({type:"LOG_OUT_USER"})}))},children:"Log out"}):""]})}),_=function(e){var t=e.apiCall,n=[],i=[],s=[],r=[],a=[],c=[];return Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)(N.c,{initialValues:{VALUES:""},onSubmit:function(e,o){var l=o.setSubmitting,u=o.resetForm;l(!0),u();var d="",j="";console.log(e.VALUES),e.VALUES.includes("INSERT INTO person")||e.VALUES.includes('INSERT INTO "person"')?(j="MIGRATE_USER",d="person"):e.VALUES.includes("INSERT INTO competence_profile")||e.VALUES.includes('INSERT INTO "competence_profile"')?(j="MIGRATE_APPLICATION",d="competence_profile"):(j="MIGRATE_APPLICATION",d="availability");var p=e.VALUES.split("VALUES");console.log(p);var m=p[0].split("\\").join("");m=(m=(m=(m=(m=(m=m.split(d).join("")).split("INSERT INTO").join("")).split("(").join("")).split(")").join("")).split('"').join("")).split("\u2019").join(""),console.log(m.split("\u2019").join("")),m=(m=(m=m.split(" ").join("")).split(";").join("")).split(","),console.log(m),p=(p=(p=(p=(p=(p=(p=p[1].split("\\").join("")).split("(").join("")).split(")").join("")).split('"').join("")).split("\u2019").join("")).split("'").join("")).split(";").join(""),console.log(p);var b=p.split(" ").join("").split(",");console.log(b.length);var h={},O=0;if("person"===d?m.forEach((function(e){"_id"===e&&"NULL"!==b[O]?h.userID=O:"name"===e&&"NULL"!==b[O]?h.firstname=O:"surname"===e&&"NULL"!==b[O]?h.lastname=O:"ssn"===e&&"NULL"!==b[O]?h.dateOfBirth=O:"email"===e&&"NULL"!==b[O]?h.email=O:"password"===e&&"NULL"!==b[O]?h.password=O:"role_id"===e&&"NULL"!==b[O]?h.role=O:"username"===e&&"NULL"!==b[O]&&(h.username=O),O++})):"competence_profile"===d?m.forEach((function(e){"_id"===e&&"NULL"!==b[O]?h.compProfID=O:"person_id"===e&&"NULL"!==b[O]?h.userID=O:"competence_id"===e&&"NULL"!==b[O]?h.competenceID=O:"years_of_experience"===e&&"NULL"!==b[O]&&(h.compYear=O),O++})):m.forEach((function(e){"_id"===e&&"NULL"!==b[O]?h.availableID=O:"person_id"===e&&"NULL"!==b[O]?h.userID=O:"from_date"===e&&"NULL"!==b[O]?h.fromDate=O:"to_date"===e&&"NULL"!==b[O]&&(h.toDate=O),O++})),console.log(h),"MIGRATE_USER"===j){console.log(b);var f,x={};if(n.forEach((function(e){e.userID===b[h.userID]&&(console.log(e),x=e)})),console.log(h),console.log(h.email),console.log(b[h.firstname]),h.username>=0&&(x.username=b[h.username]),h.email>=0&&(x.email=b[h.email]),h.password>=0&&(x.password=b[h.password]),h.firstname>=0&&(x.firstName=b[h.firstname]),h.lastname>=0&&(x.lastName=b[h.lastname]),h.dateOfBirth>=0){x.dateOfBirth=b[h.dateOfBirth];var g=b[h.dateOfBirth].split("-").join(""),v=g.substring(0,4),y=g.substring(4,6),I=g.substring(6,8);x.dateOfBirth=[{year:parseInt(v),month:parseInt(y),day:parseInt(I)}]}if(h.role>=0)f=1===parseInt(b[h.role])?"admin":"client",x.role=f;if(console.log(x),x.userID=b[h.userID],console.log(b[h.userID]),console.log(Object.keys(x).length),Object.keys(x).length<8){n.push(x);var N="The following attributes are missing to be able to migrate this user to the new system:";x.email||(N+=" email,"),x.username||(N+=" username,"),x.password||(N+=" password,"),x.firstName||(N+=" firstName,"),x.lastName||(N+=" lastName,"),x.dateOfBirth||(N+=" dateOfBirth/ssn,"),(i=i.filter((function(e){return e.userID!==b[h.userID]}))).push({userID:b[h.userID],msg:N}),console.log(x),console.log(n)}else{console.log("DONE"),i=i.filter((function(e){return e.userID!==b[h.userID]})),console.log(x),a.push(x),t.apiAxios().post("auth/register",{data:{username:x.username,email:x.email,password:x.password,firstName:x.firstName,lastName:x.lastName,dateOfBirth:x.dateOfBirth,role:x.role}}).then((function(e){c.forEach((function(e){e.userID===b[h.userID]&&console.log(e)}))}),(function(e){console.log(e),alert("something went wrong")}))}}else if("MIGRATE_APPLICATION"===j){var E={};r.forEach((function(e){e.userID===b[h.userID]&&(console.log(e),E=e)}));var L="";if(h.compProfID>=0&&(E.compProfID=b[h.compProfID]),h.userID>=0&&(E.userID=b[h.userID]),h.competenceID>=0&&(E.competenceID=b[h.competenceID],L=1===b[h.competenceID]?"A-skills":"B-skills"),h.compYear>=0&&(E.compYear=b[h.compYear]),h.availableID>=0&&(E.availableID=b[h.availableID]),h.fromDate>=0&&(E.fromDate=b[h.fromDate]),h.toDate>=0&&(E.toDate=b[h.toDate]),console.log(Object.keys(E).length),Object.keys(E).length<7){r.push(E);var D="The following attributes are missing to be able to migrate this application to the new system:";E.compYear||(D+=" years_of_experience,"),E.fromDate||(D+=" available from_date,"),E.toDate||(D+=" available to_date,"),E.competenceID||(D+=" competenceID,"),(s=s.filter((function(e){return e.userID!==b[h.userID]}))).push({userID:b[h.userID],msg:D}),console.log(E),console.log(r)}else{console.log("DONE"),c.push(E);var S={};if(a.forEach((function(e){e.userID===b[h.userID]&&(console.log(e),S=e)})),s=s.filter((function(e){return e.userID!==b[h.userID]})),0===Object.keys(S).length)console.log("CHECK IF EXISTS IN DB INSTEAD AND CALL DB else update error messages");else console.log("CREATE APPLICATION AND SEND TO DB"),console.log("startPeriod "+E.fromDate,"endPeriod "+E.toDate,"dateOfBirth "+S.dateOfBirth,"status unhandled","firstName "+S.firstName,"lastName "+S.lastName,"competence [{name "+L,"year "+E.compYear,"}]","email "+S.email),t.apiAxios().post("posts",{startPeriod:E.fromDate,endPeriod:E.toDate,dateOfBirth:S.dateOfBirth,status:"unhandled",firstName:S.firstName,lastName:S.lastName,competence:[{name:L,year:parseInt(E.compYear)}],email:S.email}).then((function(){console.log("application migration success!"),alert("application migration success!")})).catch((function(e){console.log(e),alert("something went wrong")}));console.log(E)}}console.log("submit:",e),l(!1)},children:function(e){var t=e.values,n=e.isSubmitting;return Object(f.jsx)("div",{children:Object(f.jsxs)(N.b,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:"Insert sql code here:"}),Object(f.jsx)(N.a,{placeholder:"values",name:"VALUES",type:"input",as:E.a})]}),Object(f.jsx)("div",{children:Object(f.jsx)(L.a,{disabled:n,type:"submit",children:"Create User"})}),Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(f.jsxs)("pre",{children:['Migration issues "users": ',JSON.stringify(i,null,2)]}),Object(f.jsxs)("pre",{children:['Migration issues "applications": ',JSON.stringify(s,null,2)]})]})})}})})},P=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={apiCall:new p,model:new b},i}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"applicationApp",children:[Object(f.jsx)("header",{className:"recruitmentApp",children:Object(f.jsx)(T,{})}),Object(f.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(f.jsx)(w,{apiCall:e.state.apiCall})}}),Object(f.jsx)(u.a,{exact:!0,path:"/admin/signup",render:function(){return Object(f.jsx)(k,{})}}),Object(f.jsx)(u.a,{exact:!0,path:"/user/application",render:function(){return Object(f.jsx)(x,{model:e.state.model,apiCall:e.state.apiCall})}}),Object(f.jsx)(u.a,{exact:!0,path:"/admin/applications",render:function(){return Object(f.jsx)(R,{apiCall:e.state.apiCall})}}),Object(f.jsx)(u.a,{exact:!0,path:"/admin/Migrate",render:function(){return Object(f.jsx)(_,{apiCall:e.state.apiCall})}})]})}}]),n}(i.Component),q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,315)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),r(e),a(e)}))},V=n(31),F=n(137),G=n(93),J=n(138),M=n.n(J),Y={userInfo:[{isLoggedIn:!1,role:null,fname:"",lname:"",dateOfBirth:"",email:""}]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN_USER":return{userInfo:[{isLoggedIn:!0,role:t.role,fname:t.fname,lname:t.lname,dateOfBirth:t.dateOfBirth,email:t.email}]};case"LOG_OUT_USER":return{userInfo:[{isLoggedIn:!1,role:null,fname:"",lname:"",dateOfBirth:"",email:""}]};default:return e}},H=Object(V.c)({UserReducer:K}),W={key:"root",storage:M.a},X=Object(G.a)(W,H),z=Object(V.d)(X,Object(V.a)(F.a)),Q=Object(G.b)(z),Z=n(88),$=n(139);r.a.render(Object(f.jsx)(O.a,{store:z,children:Object(f.jsx)($.a,{loading:null,persistor:Q,children:Object(f.jsx)(Z.a,{children:Object(f.jsx)(P,{})})})}),document.getElementById("root")),q()}},[[279,1,2]]]);
//# sourceMappingURL=main.f0cf690c.chunk.js.map