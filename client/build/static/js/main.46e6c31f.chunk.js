(this.webpackJsonpid1201arkitektur=this.webpackJsonpid1201arkitektur||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){},276:function(e,t,n){},295:function(e,t,n){},296:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(11),i=n.n(r),a=(n(153),n(9)),o=n(10),c=n(22),l=n(23),u=(n(154),n(16)),d=n(127),p=n.n(d),j=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,[{key:"apiAxios",value:function(){return p.a.create({baseURL:"/",withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json"}})}}]),e}(),m=n(24),b=function(){function e(){Object(a.a)(this,e),this.myExpertise=[],this.observers=[]}return Object(o.a)(e,[{key:"getExpertise",value:function(){return this.myExpertise}},{key:"removeExpertise",value:function(e){this.myExpertise=Object(m.a)(this.myExpertise.filter((function(t){return t.name!==e}))),this.notifyObserver()}},{key:"addExpertise",value:function(e,t){var n={name:e,year:t};this.myExpertise=[].concat(Object(m.a)(this.myExpertise),[n]),this.notifyObserver()}},{key:"getAllExpertise",value:function(){return["A-skills","B-skills","C-skills","D-skills","E-skills"]}},{key:"addObserver",value:function(e){var t=this;return this.observers=this.observers.concat(e),function(){return t.removeObserver(e)}}},{key:"notifyObserver",value:function(){this.observers.forEach((function(e){e()}))}},{key:"removeObserver",value:function(e){this.observers=this.observers.filter((function(t){return t!==e}))}}]),e}(),h=n(15),f=n(25),O=n(1);function x(e){var t=e.model,n=e.apiCall,r=Object(f.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),i=Object(f.c)((function(e){return e.UserReducer.userInfo[0].role})),a=Object(s.useState)(!1),o=Object(h.a)(a,2),c=o[0],l=o[1],d=Object(u.f)();n.apiAxios().get("posts/postEmail=client@kth.se").then((function(e){return console.log(e.status),console.log(e),l(!0)})).catch((function(e){l(!1),400==e.response.status?console.log(e):d.replace(d.location.pathname,{errorStatusCode:e.response.status})})),Object(s.useEffect)((function(){"client"===i&&!1!==r||(window.location="/")}),[r,i]),Object(s.useEffect)((function(){"client"===i&&!1!==r||(window.location="/")}),[]);var p=Object(s.useState)(t.getAllExpertise()),j=Object(h.a)(p,2),b=j[0],x=j[1];Object(s.useEffect)((function(){return x(t.getAllExpertise())}),[]);var I=Object(s.useState)(t.getExpertise()),N=Object(h.a)(I,2),D=N[0],y=N[1];Object(s.useEffect)((function(){return t.addObserver((function(){y(t.getExpertise())}))}),[t]),Object(s.useEffect)((function(){return localStorage.setItem("formData",D)}));var L=n.apiAxios();return Object(O.jsx)("div",{children:"client"===i&&!0===r?Object(O.jsx)("div",{children:c?Object(O.jsx)("div",{children:"You have already made an application. Please wait for us to give you a response"}):Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{myExpertise:D,removeExpertise:function(e){t.removeExpertise(e),x([].concat(Object(m.a)(b),[e]))}}),Object(O.jsx)(v,{expertise:b,addExpertise:function(e,n){return t.addExpertise(e,n)},done:function(e){return L.post("posts",{startPeriod:e.start,endPeriod:e.end,dateOfBirth:{year:e.dateOfBirth.year,month:e.dateOfBirth.month,day:e.dateOfBirth.day},status:"unhandled",firstName:e.fname,lastName:e.lname,competence:D,email:e.email}).catch((function(e){400==e.response.status?console.log(e):d.replace(d.location.pathname,{errorStatusCode:e.response.status})}))},removeOption:function(e){return function(e){var t=b.filter((function(t){return t!==e}));x(t)}(e)}})]})}):""})}var g=function(e){var t=e.myExpertise,n=e.removeExpertise;return Object(O.jsx)("div",{children:t.map((function(e){return Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.year})]},e.name+e.year),Object(O.jsx)("button",{onClick:function(){return n(e.name)},children:"remove"})]})}))})},v=function(e){var t=e.expertise,n=e.addExpertise,r=e.done,i=e.removeOption,a=Object(f.c)((function(e){return e.UserReducer.userInfo}));console.log(a);var o=Object(s.useState)(0),c=Object(h.a)(o,2),l=c[0],u=c[1],d=Object(s.useState)(""),p=Object(h.a)(d,2),j=p[0],m=p[1],b=Object(s.useState)(""),x=Object(h.a)(b,2),g=x[0],v=x[1],I=Object(s.useState)(""),N=Object(h.a)(I,2),D=N[0],y=N[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"number",min:"0",placeholder:"years of experience",onChange:function(e){return u(e.target.value)}}),Object(O.jsxs)("select",{onChange:function(e){return m(e.target.value)},children:[Object(O.jsx)("option",{children:"choose your expertise"}),t.map((function(e){return Object(O.jsx)("option",{children:e},e)}))]}),Object(O.jsx)("button",{onClick:function(){n(j,l),i(j)},children:"add skill to application"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",min:"0",placeholder:"available start period",onChange:function(e){v(e.target.value)}}),Object(O.jsx)("input",{type:"text",min:"0",placeholder:"available end period",onChange:function(e){y(e.target.value)}}),Object(O.jsx)("button",{onClick:function(){!0===window.confirm("Are you sure you want to submit your application?")&&r({start:g,end:D,fname:a[0].fname,lname:a[0].lname,status:"unhandled",dateOfBirth:a[0].dateOfBirth,email:a[0].email})},children:"confirm and send application"})]})]})},I=n(54),N=n(79),D=n(21),y=n(333),L=n(332),E=n(26),S=function(e){return function(t,n){t({type:"LOG_IN_USER",role:e.data.role,fname:e.data.firstName,lname:e.data.lastName,dateOfBirth:e.data.dateOfBirth,email:e.data.email})}},w=(n(276),n(74)),A=n.n(w),U=function(e){var t=e.apiCall,n=Object(s.useState)("Sign up"),r=Object(h.a)(n,2),i=r[0],a=r[1],o=Object(s.useState)("Login"),c=Object(h.a)(o,2),l=c[0],d=c[1],p=Object(f.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),j=Object(f.c)((function(e){return e.UserReducer.userInfo[0].role})),m=Object(f.b)(),b=Object(s.useState)(!1),x=Object(h.a)(b,2),g=x[0],v=x[1],w=Object(u.f)();Object(s.useEffect)((function(){"client"===j?window.location="/user/application":"admin"===j&&(window.location="/admin/applications")}),[p]);var U=function(e){var t=e.placeholder,n=Object(N.a)(e,["placeholder"]),s=Object(D.d)(n),r=Object(h.a)(s,2),i=r[0],a=r[1],o=a.error&&a.touched?a.error:"";return Object(O.jsx)(y.a,Object(I.a)(Object(I.a)({placeholder:t},i),{},{helperText:o,error:!!o,type:n.type}))},k=E.c().shape({email:E.d().min(4,"Too Short!").required("Required").email("Invalid email"),password:E.d().min(4,"Too Short!").required("Required"),firstName:"Login"===i?E.d():E.d().required("Required"),lastName:"Login"===i?E.d():E.d().required("Required"),dateOfBirth:E.a().of(E.c().shape({year:"Login"===i?E.b():E.b().required("Required"),month:"Login"===i?E.b():E.b().min(1,"must be between 1 and 12").max(12,"must be between 1 and 31").required("Required"),day:"Login"===i?E.b():E.b().min(1,"must be between 1 and 31").max(31,"must be between 1 and 31").required("Required")}))});return Object(O.jsx)("div",{className:"outer-wrapper",children:g?Object(O.jsx)(A.a,{visible:g,type:"TailSpin",color:"#00BFFF",height:80,width:80}):Object(O.jsx)("div",{children:p?"":Object(O.jsx)("div",{className:"inner-wrapper",children:Object(O.jsx)(D.c,{initialValues:{username:"",email:"",password:"",firstName:"",lastName:"",dateOfBirth:[{year:"",month:"",day:""}]},onSubmit:function(e,n){var s=n.setSubmitting,r=n.resetForm;(s(!0),r(),v((function(e){return!e})),"Sign up"===i)?t.apiAxios().post("auth/register",{data:e}).then((function(n){t.apiAxios().post("auth/login",{email:e.email,password:e.password}).then((function(e){m(S(e))}),(function(e){v((function(e){return!e})),400==e.response.status?alert("Wrong email and/or password"):w.replace(w.location.pathname,{errorStatusCode:e.response.status})}))}),(function(e){v((function(e){return!e})),400==e.response.status?alert("email already in use"):w.replace(w.location.pathname,{errorStatusCode:e.response.status})})):t.apiAxios().post("auth/login",{email:e.email,password:e.password}).then((function(e){v((function(e){return!e})),m(S(e))}),(function(e){v((function(e){return!e})),400==e.response.status?alert("Wrong email and/or password"):w.replace(w.location.pathname,{errorStatusCode:e.response.status})}));s(!1)},validationSchema:k,children:function(e){var t=e.values,n=e.isSubmitting,s=e.resetForm,r=e.errors;return Object(O.jsxs)(D.b,{children:["Sign up"===i?Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Create an account"})}):Object(O.jsx)("div",{children:"Log in"}),Object(O.jsx)("div",{children:Object(O.jsx)(U,{placeholder:"Email",name:"email",type:"input"})}),Object(O.jsx)("div",{children:Object(O.jsx)(U,{placeholder:"Password",name:"password",type:"password"})}),"Sign up"===i?Object(O.jsx)("div",{children:Object(O.jsx)(U,{placeholder:"Username",name:"username",type:"input"})}):"","Sign up"===i?Object(O.jsx)("div",{children:Object(O.jsx)(U,{placeholder:"First Name",name:"firstName",type:"input"})}):"","Sign up"===i?Object(O.jsx)("div",{children:Object(O.jsx)(U,{placeholder:"Last Name",name:"lastName",type:"input"})}):"",Object(O.jsx)("br",{}),"Sign up"===i?Object(O.jsxs)("div",{children:[Object(O.jsx)(U,{placeholder:"Year",name:"dateOfBirth[0].year",type:"number"}),Object(O.jsx)("br",{}),Object(O.jsx)(U,{placeholder:"Month",name:"dateOfBirth[0].month",type:"number"}),Object(O.jsx)("br",{}),Object(O.jsx)(U,{placeholder:"Day",name:"dateOfBirth[0].day",type:"number"})]}):"",Object(O.jsx)("div",{children:Object(O.jsx)(L.a,{disabled:n,type:"submit",children:i})}),Object(O.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(O.jsx)("pre",{children:JSON.stringify(r,null,2)}),Object(O.jsx)("div",{onClick:function(){"Login"===i?(a("Sign up"),d("Login")):(a("Login"),d("Sign up")),s()},children:l})]})}})})})})},k=function(){return Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(D.c,{initialValues:{email:"",password:"",adminKey:""},onSubmit:function(e,t){var n=t.setSubmitting,s=t.resetForm;n(!0),s(),console.log("submit:",e),n(!1)},children:function(e){var t=e.values,n=e.isSubmitting;return Object(O.jsx)("div",{children:Object(O.jsxs)(D.b,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(D.a,{placeholder:"Email",name:"email",type:"input",as:y.a})}),Object(O.jsx)("div",{children:Object(O.jsx)(D.a,{placeholder:"Password",name:"password",type:"password",as:y.a})}),Object(O.jsx)("div",{children:Object(O.jsx)(D.a,{placeholder:"Key",name:"adminKey",type:"password",as:y.a})}),Object(O.jsx)("div",{children:Object(O.jsx)(L.a,{disabled:n,type:"submit",children:"Sign up"})}),Object(O.jsx)("pre",{children:JSON.stringify(t,null,2)})]})})}}),Object(O.jsx)("div",{onClick:function(){var e;e="/",window.location=e},children:"log in"})]})},C=n(335),B=n(334),T=function(e){var t,n,s=e.apiCall,r=e.item,i=Object(u.f)();return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:r.firstName}),Object(O.jsx)("td",{children:r.lastName}),Object(O.jsx)("td",{children:null===(t=r.competence)||void 0===t?void 0:t.map((function(e){return Object(O.jsxs)("div",{children:[e.name," ",e.year," year(s)"]})}))}),Object(O.jsx)("td",{children:r.startPeriod}),Object(O.jsx)("td",{children:r.endPeriod}),Object(O.jsx)("td",{children:null===(n=r.dateOfBirth)||void 0===n?void 0:n.map((function(e){return Object(O.jsxs)("div",{children:[e.year,"-",e.month,"-",e.day," "]})}))}),Object(O.jsx)("td",{children:r.date}),Object(O.jsx)("td",{children:Object(O.jsxs)("select",{name:"status",onChange:function(e){!function(e){s.apiAxios().post("posts/application",{status:e.target.value,email:r.email}).then((function(e){console.log(e)}),(function(e){400==e.response.status?console.log("Email is incorrect"):i.replace(i.location.pathname,{errorStatusCode:e.response.status})}))}(e)},children:["unhandled"===r.status?Object(O.jsx)("option",{selected:"selected",value:"unhandled",children:"unhandled"}):Object(O.jsx)("option",{value:"unhandled",children:"unhandled"}),"rejected"===r.status?Object(O.jsx)("option",{selected:"selected",value:"rejected",children:"rejected"}):Object(O.jsx)("option",{value:"rejected",children:"rejected"}),"accepted"===r.status?Object(O.jsx)("option",{selected:"selected",value:"accepted",children:"accepted"}):Object(O.jsx)("option",{value:"accepted",children:"accepted"})]})})]},r.id)},_=(n(295),function(e){var t=e.apiCall,n=e.applications;return Object(O.jsxs)("table",{className:"content-table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"fname"}),Object(O.jsx)("th",{children:"lname"}),Object(O.jsx)("th",{children:"skills"}),Object(O.jsx)("th",{children:"startP"}),Object(O.jsx)("th",{children:"endP"}),Object(O.jsx)("th",{children:"date of birth"}),Object(O.jsx)("th",{children:"application made at"}),Object(O.jsx)("th",{children:"application status"})]})}),Object(O.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(O.jsx)(T,{apiCall:t,item:e})}))})]})}),R=function(e){var t=e.apiCall,n=Object(s.useState)([]),r=Object(h.a)(n,2),i=r[0],a=r[1],o=Object(f.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),c=Object(f.c)((function(e){return e.UserReducer.userInfo[0].role})),l=Object(u.f)(),d=Object(s.useState)(!1),p=Object(h.a)(d,2),j=p[0],m=p[1];Object(s.useEffect)((function(){"admin"===c&&!1!==o||(window.location="/")}),[o,c]);var b=function(e){var t=e.label,n=Object(N.a)(e,["label"]),s=Object(D.d)(n),r=Object(h.a)(s,1)[0];return Object(O.jsx)(C.a,Object(I.a)(Object(I.a)({},r),{},{control:Object(O.jsx)(B.a,{}),label:t}))};return Object(O.jsx)("div",{children:j?Object(O.jsx)(A.a,{visible:j,type:"TailSpin",color:"#00BFFF",height:80,width:80}):Object(O.jsx)("div",{children:"admin"===c&&!0===o?Object(O.jsxs)("div",{children:[Object(O.jsx)(D.c,{initialValues:{competences:[]},onSubmit:function(e,n){var s=n.setSubmitting;s(!0);var r="posts";1===e.competences.length?r="posts/competence="+e.competences[0]:2===e.competences.length?r="posts/competence="+e.competences[0]+"&="+e.competences[1]:3===e.competences.length?r="posts/competence="+e.competences[0]+"&="+e.competences[1]+"&="+e.competences[2]:4===e.competences.length?r="posts/competence="+e.competences[0]+"&="+e.competences[1]+"&="+e.competences[2]+"&="+e.competences[3]:5===e.competences.length&&(r="posts/competence="+e.competences[0]+"&="+e.competences[1]+"&="+e.competences[2]+"&="+e.competences[3]+"&="+e.competences[4]),console.log(r),t.apiAxios().get(r).then((function(e){return s(!1),a(e.data),a(e.data)})).catch((function(e){m((function(e){return!e})),400==e.response.status?console.log(e):l.replace(l.location.pathname,{errorStatusCode:e.response.status})}))},children:function(e){var t=e.values,n=e.isSubmitting,s=e.errors;return Object(O.jsxs)(D.b,{children:[Object(O.jsx)(b,{name:"competences",value:"A-skills",type:"checkbox",label:"A-skills"}),Object(O.jsx)(b,{name:"competences",value:"B-skills",type:"checkbox",label:"B-skills"}),Object(O.jsx)(b,{name:"competences",value:"C-skills",type:"checkbox",label:"C-skills"}),Object(O.jsx)(b,{name:"competences",value:"D-skills",type:"checkbox",label:"D-skills"}),Object(O.jsx)(b,{name:"competences",value:"E-skills",type:"checkbox",label:"E-skills"}),Object(O.jsx)(L.a,{disabled:n,type:"submit",children:"Get Applications"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(O.jsx)("pre",{children:JSON.stringify(s,null,2)})]})]})}}),i.length>0?Object(O.jsx)(_,{apiCall:t,applications:i}):""]}):""})})},P=(n(296),function(){var e=Object(f.c)((function(e){return e.UserReducer.userInfo[0].isLoggedIn})),t=Object(f.b)();return Object(O.jsxs)("div",{className:"Header-wrapper",children:[Object(O.jsx)("div",{className:"logo",children:"Recruitment Logo Here"}),e?Object(O.jsx)("button",{className:"authButton",onClick:function(){return t((function(e,t){e({type:"LOG_OUT_USER"})}))},children:"Log out"}):""]})}),q=n(27),F=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"404 Error"}),Object(O.jsx)("p",{children:"The requested URL was not found on this server."}),Object(O.jsx)(q.b,{to:"/",children:Object(O.jsx)("button",{type:"button",children:"back to main app"})})]})},G=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"401 Error"}),Object(O.jsx)("p",{children:"Unauthorized access."}),Object(O.jsx)(q.b,{to:"/",children:Object(O.jsx)("button",{type:"button",children:"back to main app"})})]})},Y=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"500 Error"}),Object(O.jsx)("p",{children:"Server encountered a internal error and cannot handle the request."}),Object(O.jsx)(q.b,{to:"/",children:Object(O.jsx)("button",{type:"button",children:"back to main app"})})]})},V=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"501 Error"}),Object(O.jsx)("p",{children:"Server encountered a error and currently cannot handle the request."}),Object(O.jsx)(q.b,{to:"/",children:Object(O.jsx)("button",{type:"button",children:"back to main app"})})]})},M=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"503 Error"}),Object(O.jsx)("p",{children:"Server encountered a error and currently cannot handle the request."}),Object(O.jsx)(q.b,{to:"/",children:Object(O.jsx)("button",{type:"button",children:"back to main app"})})]})},J=(n(297),function(e){var t=e.apiCall,n=[],s=[],r=[],i=[],a=[],o=[],c=function(e){var c="",l="";console.log(e),e.includes("INSERT INTO person")||e.includes('INSERT INTO "person"')?(l="MIGRATE_USER",c="person"):e.includes("INSERT INTO competence_profile")||e.includes('INSERT INTO "competence_profile"')?(l="MIGRATE_APPLICATION",c="competence_profile"):(l="MIGRATE_APPLICATION",c="availability");var u=e.split("VALUES");console.log(u);var d=u[0].split("\\").join("");d=(d=(d=(d=(d=(d=(d=d.split(c).join("")).split("INSERT INTO"))[1].split("(").join("")).split("\u21b5").join("")).split(")").join("")).split('"').join("")).split("\u2019").join(""),console.log(d.split("\u2019").join("")),d=(d=(d=d.split(" ").join("")).split(";").join("")).split(","),console.log(d),u=(u=(u=(u=(u=(u=(u=(u=u[1].split("\\").join("")).split("(").join("")).split(")").join("")).split("\u21b5").join("")).split('"').join("")).split("\u2019").join("")).split("'").join("")).split(";").join(""),console.log(u);var p=u.split(" ").join("").split(",");console.log(p.length);var j={},m=0;if("person"===c?d.forEach((function(e){"_id"===e&&"NULL"!==p[m]?j.userID=m:"name"===e&&"NULL"!==p[m]?j.firstname=m:"surname"===e&&"NULL"!==p[m]?j.lastname=m:"ssn"===e&&"NULL"!==p[m]?j.dateOfBirth=m:"email"===e&&"NULL"!==p[m]?j.email=m:"password"===e&&"NULL"!==p[m]?j.password=m:"role_id"===e&&"NULL"!==p[m]?j.role=m:"username"===e&&"NULL"!==p[m]&&(j.username=m),m++})):"competence_profile"===c?d.forEach((function(e){"_id"===e&&"NULL"!==p[m]?j.compProfID=m:"person_id"===e&&"NULL"!==p[m]?j.userID=m:"competence_id"===e&&"NULL"!==p[m]?j.competenceID=m:"years_of_experience"===e&&"NULL"!==p[m]&&(j.compYear=m),m++})):d.forEach((function(e){"_id"===e&&"NULL"!==p[m]?j.availableID=m:"person_id"===e&&"NULL"!==p[m]?j.userID=m:"from_date"===e&&"NULL"!==p[m]?j.fromDate=m:"to_date"===e&&"NULL"!==p[m]&&(j.toDate=m),m++})),console.log(j),"MIGRATE_USER"===l){console.log(p);var b,h={};if(n.forEach((function(e){e.userID===p[j.userID]&&(console.log(e),h=e)})),console.log(j),console.log(j.email),console.log(p[j.firstname]),j.username>=0&&(h.username=p[j.username]),j.email>=0&&(h.email=p[j.email]),j.password>=0&&(h.password=p[j.password]),j.firstname>=0&&(h.firstName=p[j.firstname]),j.lastname>=0&&(h.lastName=p[j.lastname]),j.dateOfBirth>=0){h.dateOfBirth=p[j.dateOfBirth];var f=p[j.dateOfBirth].split("-").join(""),O=f.substring(0,4),x=f.substring(4,6),g=f.substring(6,8);h.dateOfBirth=[{year:parseInt(O),month:parseInt(x),day:parseInt(g)}]}if(j.role>=0)b=1===parseInt(p[j.role])?"admin":"client",h.role=b;if(console.log(h),h.userID=p[j.userID],console.log(p[j.userID]),console.log(Object.keys(h).length),Object.keys(h).length<8){n.push(h);var v="The following attributes are missing to be able to migrate this user to the new system:";h.email||(v+=" email,"),h.username||(v+=" username,"),h.password||(v+=" password,"),h.firstName||(v+=" firstName,"),h.lastName||(v+=" lastName,"),h.dateOfBirth||(v+=" dateOfBirth/ssn,"),(s=s.filter((function(e){return e.userID!==p[j.userID]}))).push({userID:p[j.userID],msg:v}),console.log(h),console.log(n)}else{console.log("DONE"),s=s.filter((function(e){return e.userID!==p[j.userID]})),console.log(h),a.push(h),t.apiAxios().post("auth/register",{data:{username:h.username,email:h.email,password:h.password,firstName:h.firstName,lastName:h.lastName,dateOfBirth:h.dateOfBirth,role:h.role}}).then((function(e){o.forEach((function(e){e.userID===p[j.userID]&&(console.log(e),console.log(h),t.apiAxios().post("posts",{startPeriod:e.fromDate,endPeriod:e.toDate,dateOfBirth:h.dateOfBirth,status:"unhandled",firstName:h.firstName,lastName:h.lastName,competence:[{name:e.compName,year:parseInt(e.compYear)}],email:h.email}).then((function(){console.log("application migration success!"),alert("application migration success!")})).catch((function(e){console.log(e),alert("something went wrong")})))}))}),(function(e){console.log(e),alert("something went wrong")}))}}else if("MIGRATE_APPLICATION"===l){var I={};i.forEach((function(e){e.userID===p[j.userID]&&(console.log(e),I=e)}));var N="";if(j.compProfID>=0&&(I.compProfID=p[j.compProfID]),j.userID>=0&&(I.userID=p[j.userID]),j.competenceID>=0&&(I.competenceID=p[j.competenceID],1===p[j.competenceID]?(N="A-skills",I.compName=N):(N="B-skills",I.compName=N)),j.compYear>=0&&(I.compYear=p[j.compYear]),j.availableID>=0&&(I.availableID=p[j.availableID]),j.fromDate>=0&&(I.fromDate=p[j.fromDate]),j.toDate>=0&&(I.toDate=p[j.toDate]),console.log(Object.keys(I).length),Object.keys(I).length<7){i.push(I);var D="The following attributes are missing to be able to migrate this application to the new system:";I.compYear||(D+=" years_of_experience,"),I.fromDate||(D+=" available from_date,"),I.toDate||(D+=" available to_date,"),I.competenceID||(D+=" competenceID,"),(r=r.filter((function(e){return e.userID!==p[j.userID]}))).push({userID:p[j.userID],msg:D}),console.log(I),console.log(i)}else{console.log("DONE"),o.push(I);var y={};if(a.forEach((function(e){e.userID===p[j.userID]&&(console.log(e),y=e)})),r=r.filter((function(e){return e.userID!==p[j.userID]})),0===Object.keys(y).length)console.log("CHECK IF EXISTS IN DB INSTEAD AND CALL DB else update error messages");else console.log("CREATE APPLICATION AND SEND TO DB"),t.apiAxios().post("posts",{startPeriod:I.fromDate,endPeriod:I.toDate,dateOfBirth:y.dateOfBirth,status:"unhandled",firstName:y.firstName,lastName:y.lastName,competence:[{name:N,year:parseInt(I.compYear)}],email:y.email}).then((function(){console.log("application migration success!"),alert("application migration success!")})).catch((function(e){console.log(e),alert("something went wrong")}));console.log(I)}}};return Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("input",{type:"file",onChange:function(e){!function(e){var t=new FileReader;t.onload=function(e){for(var n=1,s=t.result.split(";")[0];"string"==typeof s;)(s.includes("person")||s.includes("competence_profile")||s.includes("availability"))&&c(s),s=t.result.split(";")[n++]},t.readAsText(e[0])}(e.target.files)}}),Object(O.jsx)(D.c,{initialValues:{VALUES:""},onSubmit:function(e,c){var l=c.setSubmitting,u=c.resetForm;if(""!==e.VALUES){l(!0),u();var d="",p="";console.log(e.VALUES),e.VALUES.includes("INSERT INTO person")||e.VALUES.includes('INSERT INTO "person"')?(p="MIGRATE_USER",d="person"):e.VALUES.includes("INSERT INTO competence_profile")||e.VALUES.includes('INSERT INTO "competence_profile"')?(p="MIGRATE_APPLICATION",d="competence_profile"):(p="MIGRATE_APPLICATION",d="availability");var j=e.VALUES.split("VALUES");console.log(j);var m=j[0].split("\\").join("");m=(m=(m=(m=(m=(m=m.split(d).join("")).split("INSERT INTO").join("")).split("(").join("")).split(")").join("")).split('"').join("")).split("\u2019").join(""),console.log(m.split("\u2019").join("")),m=(m=(m=m.split(" ").join("")).split(";").join("")).split(","),console.log(m),j=(j=(j=(j=(j=(j=(j=j[1].split("\\").join("")).split("(").join("")).split(")").join("")).split('"').join("")).split("\u2019").join("")).split("'").join("")).split(";").join(""),console.log(j);var b=j.split(" ").join("").split(",");console.log(b.length);var h={},f=0;if("person"===d?m.forEach((function(e){"_id"===e&&"NULL"!==b[f]?h.userID=f:"name"===e&&"NULL"!==b[f]?h.firstname=f:"surname"===e&&"NULL"!==b[f]?h.lastname=f:"ssn"===e&&"NULL"!==b[f]?h.dateOfBirth=f:"email"===e&&"NULL"!==b[f]?h.email=f:"password"===e&&"NULL"!==b[f]?h.password=f:"role_id"===e&&"NULL"!==b[f]?h.role=f:"username"===e&&"NULL"!==b[f]&&(h.username=f),f++})):"competence_profile"===d?m.forEach((function(e){"_id"===e&&"NULL"!==b[f]?h.compProfID=f:"person_id"===e&&"NULL"!==b[f]?h.userID=f:"competence_id"===e&&"NULL"!==b[f]?h.competenceID=f:"years_of_experience"===e&&"NULL"!==b[f]&&(h.compYear=f),f++})):m.forEach((function(e){"_id"===e&&"NULL"!==b[f]?h.availableID=f:"person_id"===e&&"NULL"!==b[f]?h.userID=f:"from_date"===e&&"NULL"!==b[f]?h.fromDate=f:"to_date"===e&&"NULL"!==b[f]&&(h.toDate=f),f++})),console.log(h),"MIGRATE_USER"===p){console.log(b);var O,x={};if(n.forEach((function(e){e.userID===b[h.userID]&&(console.log(e),x=e)})),console.log(h),console.log(h.email),console.log(b[h.firstname]),h.username>=0&&(x.username=b[h.username]),h.email>=0&&(x.email=b[h.email]),h.password>=0&&(x.password=b[h.password]),h.firstname>=0&&(x.firstName=b[h.firstname]),h.lastname>=0&&(x.lastName=b[h.lastname]),h.dateOfBirth>=0){x.dateOfBirth=b[h.dateOfBirth];var g=b[h.dateOfBirth].split("-").join(""),v=g.substring(0,4),I=g.substring(4,6),N=g.substring(6,8);x.dateOfBirth=[{year:parseInt(v),month:parseInt(I),day:parseInt(N)}]}if(h.role>=0)O=1===parseInt(b[h.role])?"admin":"client",x.role=O;if(console.log(x),x.userID=b[h.userID],console.log(b[h.userID]),console.log(Object.keys(x).length),Object.keys(x).length<8){n.push(x);var D="The following attributes are missing to be able to migrate this user to the new system:";x.email||(D+=" email,"),x.username||(D+=" username,"),x.password||(D+=" password,"),x.firstName||(D+=" firstName,"),x.lastName||(D+=" lastName,"),x.dateOfBirth||(D+=" dateOfBirth/ssn,"),(s=s.filter((function(e){return e.userID!==b[h.userID]}))).push({userID:b[h.userID],msg:D}),console.log(x),console.log(n)}else{console.log("DONE"),s=s.filter((function(e){return e.userID!==b[h.userID]})),console.log(x),a.push(x),t.apiAxios().post("auth/register",{data:{username:x.username,email:x.email,password:x.password,firstName:x.firstName,lastName:x.lastName,dateOfBirth:x.dateOfBirth,role:x.role}}).then((function(e){o.forEach((function(e){e.userID===b[h.userID]&&(console.log(e),t.apiAxios().post("posts",{startPeriod:e.fromDate,endPeriod:e.toDate,dateOfBirth:x.dateOfBirth,status:"unhandled",firstName:x.firstName,lastName:x.lastName,competence:[{name:e.compName,year:parseInt(e.compYear)}],email:x.email}).then((function(){console.log("application migration success!"),alert("application migration success!")})).catch((function(e){console.log(e),alert("something went wrong")})))}))}),(function(e){console.log(e),alert("something went wrong")}))}}else if("MIGRATE_APPLICATION"===p){var y={};i.forEach((function(e){e.userID===b[h.userID]&&(console.log(e),y=e)}));var L="";if(h.compProfID>=0&&(y.compProfID=b[h.compProfID]),h.userID>=0&&(y.userID=b[h.userID]),h.competenceID>=0&&(y.competenceID=b[h.competenceID],1===b[h.competenceID]?(L="A-skills",y.compName=L):(L="B-skills",y.compName=L)),h.compYear>=0&&(y.compYear=b[h.compYear]),h.availableID>=0&&(y.availableID=b[h.availableID]),h.fromDate>=0&&(y.fromDate=b[h.fromDate]),h.toDate>=0&&(y.toDate=b[h.toDate]),console.log(Object.keys(y).length),Object.keys(y).length<7){i.push(y);var E="The following attributes are missing to be able to migrate this application to the new system:";y.compYear||(E+=" years_of_experience,"),y.fromDate||(E+=" available from_date,"),y.toDate||(E+=" available to_date,"),y.competenceID||(E+=" competenceID,"),(r=r.filter((function(e){return e.userID!==b[h.userID]}))).push({userID:b[h.userID],msg:E}),console.log(y),console.log(i)}else{console.log("DONE"),o.push(y);var S={};if(a.forEach((function(e){e.userID===b[h.userID]&&(console.log(e),S=e)})),r=r.filter((function(e){return e.userID!==b[h.userID]})),0===Object.keys(S).length)console.log("CHECK IF EXISTS IN DB INSTEAD AND CALL DB else update error messages");else console.log("CREATE APPLICATION AND SEND TO DB"),t.apiAxios().post("posts",{startPeriod:y.fromDate,endPeriod:y.toDate,dateOfBirth:S.dateOfBirth,status:"unhandled",firstName:S.firstName,lastName:S.lastName,competence:[{name:L,year:parseInt(y.compYear)}],email:S.email}).then((function(){console.log("application migration success!"),alert("application migration success!")})).catch((function(e){console.log(e),alert("something went wrong")}));console.log(y)}}console.log("submit:",e),l(!1)}},children:function(e){var t=e.values,n=e.isSubmitting;return Object(O.jsx)("div",{children:Object(O.jsxs)(D.b,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"Insert sql code here:"}),Object(O.jsx)(D.a,{placeholder:"values",name:"VALUES",type:"input",as:y.a})]}),Object(O.jsx)("div",{children:Object(O.jsx)(L.a,{disabled:n,type:"submit",children:"Get result"})}),Object(O.jsx)("pre",{children:JSON.stringify(t,null,2)}),Object(O.jsxs)("pre",{children:['Migration issues "users": ',JSON.stringify(s,null,2)]}),Object(O.jsxs)("pre",{children:['Migration issues "applications": ',JSON.stringify(r,null,2)]})]})})}})]})}),K=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={apiCall:new j,model:new b},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"applicationApp",children:[Object(O.jsx)("header",{className:"recruitmentApp",children:Object(O.jsx)(P,{})}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(U,{apiCall:e.state.apiCall})}}),Object(O.jsx)(u.a,{exact:!0,path:"/admin/signup",render:function(){return Object(O.jsx)(k,{})}}),Object(O.jsx)(u.a,{exact:!0,path:"/user/application",render:function(){return Object(O.jsx)(x,{model:e.state.model,apiCall:e.state.apiCall})}}),Object(O.jsx)(u.a,{exact:!0,path:"/admin/applications",render:function(){return Object(O.jsx)(R,{apiCall:e.state.apiCall})}}),Object(O.jsx)(u.a,{exact:!0,path:"/admin/Migrate",render:function(){return Object(O.jsx)(J,{apiCall:e.state.apiCall})}}),Object(O.jsx)(u.a,{exact:!0,path:"*",render:function(){return Object(O.jsx)(F,{})}})]})]})}}]),n}(s.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,337)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),i(e),a(e)}))},W=n(32),X=n(138),z=n(95),Q=n(139),Z=n.n(Q),$={userInfo:[{isLoggedIn:!1,role:null,fname:"",lname:"",dateOfBirth:"",email:""}]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN_USER":return{userInfo:[{isLoggedIn:!0,role:t.role,fname:t.fname,lname:t.lname,dateOfBirth:t.dateOfBirth,email:t.email}]};case"LOG_OUT_USER":return{userInfo:[{isLoggedIn:!1,role:null,fname:"",lname:"",dateOfBirth:"",email:""}]};default:return e}},te=Object(W.c)({UserReducer:ee}),ne={key:"root",storage:Z.a},se=Object(z.a)(ne,te),re=Object(W.d)(se,Object(W.a)(X.a)),ie=Object(z.b)(re),ae=n(140),oe=n(141),ce=function(e){var t=e.children,n=Object(u.g)();switch(Object(oe.get)(n.state,"errorStatusCode")){case 404:return Object(O.jsx)(F,{});case 401:return Object(O.jsx)(G,{});case 500:return Object(O.jsx)(Y,{});case 501:return Object(O.jsx)(V,{});case 503:return Object(O.jsx)(M,{});default:return t}};i.a.render(Object(O.jsx)(f.a,{store:re,children:Object(O.jsx)(ae.a,{loading:null,persistor:ie,children:Object(O.jsx)(q.a,{children:Object(O.jsx)(ce,{children:Object(O.jsx)(K,{})})})})}),document.getElementById("root")),H()}},[[301,1,2]]]);
//# sourceMappingURL=main.46e6c31f.chunk.js.map