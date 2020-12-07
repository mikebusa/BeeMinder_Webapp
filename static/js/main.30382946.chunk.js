(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,a){e.exports=a(137)},137:function(e,t,a){"use strict";a.r(t),a.d(t,"APP_ID",(function(){return Re}));var n=a(0),r=a.n(n),l=a(45),c=a.n(l),o=(a(114),a(13)),u=a(14),i=a(23),s=a(22),m=a(26),d=a(140),v=a(141),E=a(142),b=a(143),h=a(144),g=a(145),p=a(139),f=a(164),O=a(146),y=a(147),w=a(148),j=a(29),N=a(5),S=a.n(N),C=a(10),H=a(12),k=a(11),M=a(57),I=r.a.createContext(),x=function(){var e=r.a.useContext(I);if(!e)throw new Error("You must call useRealmApp() inside of a <RealmAppProvider />");return e},_=function(e){var t=e.appId,a=e.children,n=r.a.useState(new M.a(t)),l=Object(k.a)(n,2),c=l[0],o=l[1];r.a.useEffect((function(){o(new M.a(t))}),[t]);var u=r.a.useState(c.currentUser),i=Object(k.a)(u,2),s=i[0],m=i[1];function d(){return(d=Object(H.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.logIn(t);case 2:m(c.currentUser);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(H.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=c.currentUser)||void 0===t?void 0:t.logOut();case 2:m(c.currentUser);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=Object(C.a)(Object(C.a)({},c),{},{currentUser:s,logIn:function(e){return d.apply(this,arguments)},logOut:function(){return v.apply(this,arguments)}});return r.a.createElement(I.Provider,{value:E},a)};var q=function(e){var t=x();return r.a.createElement("div",null,r.a.createElement(p.a,{color:"primary",onClick:function(){t.logOut()}},"Sign Out"))},A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={SignOutModal:!1,Collapsed:!1},e.toggleNavbar=e.toggleNavbar.bind(Object(i.a)(e)),e.toggleSignOutModal=e.toggleSignOutModal.bind(Object(i.a)(e)),e}return Object(u.a)(a,[{key:"toggleNavbar",value:function(){var e=this.state.Collapsed;this.setState({Collapsed:!e})}},{key:"toggleSignOutModal",value:function(){var e=this.state.SignOutModal;this.setState({SignOutModal:!e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{color:"warning",light:!0,expand:"md"},r.a.createElement(v.a,{href:"/"},"BeeMinder"),r.a.createElement(E.a,{onClick:this.toggleNavbar}),r.a.createElement(b.a,{isOpen:this.state.Collapsed,navbar:!0},r.a.createElement(h.a,{className:"mr-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(j.b,{to:"/MyAccount"},r.a.createElement(p.a,{color:"link",outline:"false"},"My Hives")))),r.a.createElement(g.a,null,r.a.createElement(p.a,{color:"link",outline:"false",onClick:this.toggleSignOutModal},"Sign Out"),r.a.createElement(f.a,{isOpen:this.state.SignOutModal,toggle:this.toggleSignOutModal,className:this.className},r.a.createElement(O.a,{toggle:this.toggleSignOutModal},"Sign Out"),r.a.createElement(y.a,null,r.a.createElement("p",null,"Are you sure you want to sign out?")),r.a.createElement(w.a,null,r.a.createElement(q,null)," ",r.a.createElement(p.a,{color:"secondary",onClick:this.toggleSignOutModal},"Cancel")))))))}}]),a}(n.Component),D=a(149),U=function(e){return r.a.createElement("div",null,r.a.createElement(d.a,{color:"secondary",dark:!0},r.a.createElement(D.a,null,"BeeMinder 2020")))},F=a(156),L=a(154),P=a(150),T=a(151),R=a(152),B=a(153),G=a(155);var Q=function(e){var t=e.hiveID,a=e.hiveName,n=e.report,l=n?n.sensor_data.temp:"0",c=n?n.sensor_data.humidity:"0",o=n?n.sensor_data.weight:"0",u=n?n.time_recorded:"0000-00-00T00:00:00Z",i=u.substr(5,2),s=u.substr(8,2),m=u.substr(0,2),d=0===Number(u.substr(11,2))?"12":Number(u.substr(11,2))>12?String(Number(u.substr(11,2))-12):u.substr(11,2),v=Number(u.substr(11,2))>12?"PM":"AM",E=u.substr(14,2),b=u.substr(17,2);return r.a.createElement("div",null,r.a.createElement(P.a,{outline:!0,color:"secondary"},r.a.createElement(T.a,null,r.a.createElement("h2",null,r.a.createElement(R.a,null,a)),r.a.createElement(B.a,null,"Last Update: ",i,"/",s,"/",m," at ",d,":",E,":",b," ",v)),r.a.createElement(L.a,null,r.a.createElement(B.a,null,"Hive ID: ",t),r.a.createElement(B.a,null,"Temperature: ",l,"\xb0F"),r.a.createElement(B.a,null,"Humidity: ",c,"%"),r.a.createElement(B.a,null,"Weight: ",o," lbs")),r.a.createElement(G.a,null,r.a.createElement(p.a,{color:"primary",onClick:function(){return window.location.reload(!1)}},"Get Hive Update"),"  ",r.a.createElement(j.b,{to:{pathname:"/MyHive",hiveTitle:a}},r.a.createElement(p.a,{color:"success"},"Go To Hive")))),r.a.createElement("br",null))},$=function(e){var t="form-control";return e.touched&&!e.valid&&(t="form-control control-error"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({type:"text",className:t},e)))},W=function(e,t){return e.length>=t},z=function(e){return""!==e.trim()},Z=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},V=function(e,t){var a=!0;for(var n in t)switch(n){case"minLength":a=a&&W(e,t[n]);break;case"isRequired":a=a&&z(e);break;case"isEmail":a=a&&Z(e);break;default:a=!0}return a},J=a(17),Y=a(53);function K(){var e=Object(Y.a)(["\n  mutation DeleteHiveHive($query: HiveQueryInput!) {\n    deleteOneHive(query: $query) {\n      _id\n      name\n    }\n  }\n"]);return K=function(){return e},e}function X(){var e=Object(Y.a)(["\n  mutation CreateHiveHive($data: HiveInsertInput!) {\n    insertOneHive(data: $data) {\n      _id\n      name\n    }\n  }\n"]);return X=function(){return e},e}function ee(){var e=Object(Y.a)(["\n  mutation UpdateHive($query: HiveQueryInput!, $set: HiveUpdateInput!) {\n    updateOneHive(query: $query, set: $set) {\n      _id\n      name\n    }\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(Y.a)(["\nquery FindHive($query: HiveQueryInput!) {\n\thives(query: $query) {\n\t\t_id\n\t\t_owner\n\t\tcreated\n\t\tidentifier\n\t\tname\n\t\treports {\n\t\t\t_id\n\t\t\ttime_recorded\n\t\t\tsensor_data {\n\t\t\t\ttemp\n\t\t\t\thumidity\n\t\t\t\tweight\n\t\t\t}\n\t\t}\n\t}\n}\n"]);return te=function(){return e},e}function ae(){var e=Object(Y.a)(["\nquery FindHive($query: HiveQueryInput!) {\n\thive(query: $query) {\n\t\t_id\n\t\t_owner\n\t\tcreated\n\t\tidentifier\n\t\tname\n\t\treports {\n\t\t\t_id\n\t\t\ttime_recorded\n\t\t\tsensor_data {\n\t\t\t\ttemp\n\t\t\t\thumidity\n\t\t\t\tweight\n\t\t\t}\n\t\t}\n\t}\n}\n"]);return ae=function(){return e},e}var ne=Object(J.gql)(ae()),re=Object(J.gql)(te()),le=Object(J.gql)(ee()),ce=Object(J.gql)(X()),oe=Object(J.gql)(K());var ue=function(e){var t=x().currentUser._id,a=Object(J.useMutation)(ce),r=Object(k.a)(a,1)[0],l=function(){var a=Object(H.a)(S.a.mark((function a(){return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.hiveName){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,r({variables:{data:{_owner:t,created:(new Date).toISOString(),identifier:e.hiveID,name:e.hiveName,reports:{link:[],create:[]}}}});case 4:window.location.reload(!1);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),c=!(!e.hiveName||!e.hiveID);return n.createElement("div",null,n.createElement(p.a,{color:"primary",onClick:function(){l(),e.submitted()},disabled:!c},"Submit"))},ie=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).changeHandler=function(t){var a=t.target.name,n=t.target.value,r=Object(C.a)({},e.state.formControls),l=Object(C.a)({},r[a]);l.value=n,l.touched=!0,l.valid=V(n,l.validationRules),r[a]=l;var c=!0;for(var o in r)c=r[o].valid&&c;e.setState({formControls:r,formIsValid:c})},e.state={formIsValid:!1,formControls:{HiveName:{value:"",placeholder:"Hive Name",valid:!1,validationRules:{minLength:5,isRequired:!0},touched:!1},HiveID:{value:"",placeholder:"BeeMinder System ID Number",valid:!1,validationRules:{minLength:6,isRequired:!0},touched:!1}}},e.onSubmitForm=e.onSubmitForm.bind(Object(i.a)(e)),e}return Object(u.a)(a,[{key:"onSubmitForm",value:function(){var e={};for(var t in this.state.formControls)e[t]=this.state.formControls[t].value;this.props.onFormSubmit(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement($,{name:"HiveName",placeholder:this.state.formControls.HiveName.placeholder,value:this.state.formControls.HiveName.value,onChange:this.changeHandler,touched:this.state.formControls.HiveName.touched,valid:this.state.formControls.HiveName.valid}),r.a.createElement($,{name:"HiveID",placeholder:this.state.formControls.HiveID.placeholder,value:this.state.formControls.HiveID.value,onChange:this.changeHandler,touched:this.state.formControls.HiveID.touched,valid:this.state.formControls.HiveID.valid}),r.a.createElement(ue,{hiveName:this.state.formControls.HiveName.value,hiveID:this.state.formControls.HiveID.value,submitted:this.onSubmitForm}))}}]),a}(n.Component);var se=function(e){var t=x().currentUser._id;console.log(t);var a=Object(n.useState)(t),l=Object(k.a)(a,2),c=l[0],o=(l[1],Object(J.useQuery)(re,{variables:{query:{_owner:c}}})),u=(o.loading,o.data),i=u?u.hives:null,s=Object(n.useState)(!1),m=Object(k.a)(s,2),d=m[0],v=m[1],E=function(){return v(!d)};return r.a.createElement("div",null,r.a.createElement(F.a,null,i?i&&i.map((function(e){var t=e.name,a=e.identifier,n=e.reports;return r.a.createElement(Q,{hiveName:t,hiveID:a,report:n[0]})})):r.a.createElement("p",{style:{color:"red",fontSize:20}},'No Hives to Show. Use the "+ New Hive" Button to add a hive.'),r.a.createElement(L.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{color:"success",onClick:function(){return E()}},"+ New Hive"),r.a.createElement(f.a,{isOpen:d,toggle:E,className:e.className},r.a.createElement(O.a,{toggle:E,close:r.a.createElement("button",{className:"close",onClick:E},"\xd7")},"Add a New Hive"),r.a.createElement(y.a,null,r.a.createElement(ie,null))))))},me=a(157),de=a(158),ve=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).state={NewHiveModal:!1},n.submitForm=n.submitForm.bind(Object(i.a)(n)),n.toggleNewHiveModal=n.toggleNewHiveModal.bind(Object(i.a)(n)),n}return Object(u.a)(a,[{key:"submitForm",value:function(e){this.setState({values:e,NewHiveModal:!1})}},{key:"toggleNewHiveModal",value:function(){var e=this.state.NewHiveModal;this.setState({NewHiveModal:!e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(me.a,null,r.a.createElement("h1",{className:"display-3"},"Welcome to BeeMinder"),r.a.createElement("p",{className:"lead"},"This is the homepage where you can see a all of your hives at a glance."),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("p",null,"To see more information on a specific hive, click on Go To Hive. To navigate around the webpage, use the Navigation Bar at the top of the page.")),r.a.createElement(de.a,null,r.a.createElement(se,null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(U,null))}}]),a}(n.Component),Ee=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={SignOutModal:!1,Collapsed:!1},e.toggleNavbar=e.toggleNavbar.bind(Object(i.a)(e)),e.toggleSignOutModal=e.toggleSignOutModal.bind(Object(i.a)(e)),e}return Object(u.a)(a,[{key:"toggleNavbar",value:function(){var e=this.state.Collapsed;this.setState({Collapsed:!e})}},{key:"toggleSignOutModal",value:function(){var e=this.state.SignOutModal;this.setState({SignOutModal:!e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{color:"warning",light:!0,expand:"md"},r.a.createElement(v.a,{href:"/"},"BeeMinder"),r.a.createElement(E.a,{onClick:this.toggleNavbar}),r.a.createElement(b.a,{isOpen:this.state.Collapsed,navbar:!0},r.a.createElement(h.a,{className:"mr-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(j.b,{to:"/"},r.a.createElement(p.a,{color:"link",outline:"false"},"Home Page")))),r.a.createElement(g.a,null,r.a.createElement(p.a,{color:"link",outline:"false",onClick:this.toggleSignOutModal},"Sign Out"),r.a.createElement(f.a,{isOpen:this.state.SignOutModal,toggle:this.toggleSignOutModal,className:this.className},r.a.createElement(O.a,{toggle:this.toggleSignOutModal},"Sign Out"),r.a.createElement(y.a,null,r.a.createElement("p",null,"Are you sure you want to sign out?")),r.a.createElement(w.a,null,r.a.createElement(q,null)," ",r.a.createElement(p.a,{color:"secondary",onClick:this.toggleSignOutModal},"Cancel")))))))}}]),a}(n.Component),be=a(160),he=a(161),ge=a(159);var pe=function(e){var t=e.className,a=e.hiveName,l=Object(J.useMutation)(oe),c=Object(k.a)(l,2),o=c[0],u=(c[1].loading,r.a.useState(a)),i=Object(k.a)(u,2),s=i[0],m=i[1],d=function(){var e=Object(H.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,o({variables:{query:{name:s}}});case 4:window.location.reload(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(n.useState)(!1),E=Object(k.a)(v,2),b=E[0],h=E[1],g=function(){return h(!b)};return r.a.createElement("div",null,r.a.createElement(p.a,{outline:!0,color:"danger",onClick:g},"Delete Hive"),r.a.createElement(f.a,{isOpen:b,toggle:g,className:t},r.a.createElement(O.a,{toggle:g},"Delete Hive?"),r.a.createElement(y.a,null,"Are you sure you want to delete this hive?"),r.a.createElement(w.a,null,r.a.createElement(p.a,{color:"danger",onClick:function(){return h(!b),m(a),void d()}},"Delete")," ",r.a.createElement(p.a,{color:"secondary",onClick:g},"Cancel"))))};var fe=function(e){var t=e.date,a=t.substr(5,2),n=t.substr(8,2),l=t.substr(0,2);return r.a.createElement("p",null,a,"/",n,"/",l)};var Oe=function(e){var t=e.report,a=t?t.time_recorded:"0000-00-00T00:00:00Z",n=a.substr(5,2),l=a.substr(8,2),c=a.substr(0,2),o=0===Number(a.substr(11,2))?"12":Number(a.substr(11,2))>12?String(Number(a.substr(11,2))-12):a.substr(11,2),u=Number(a.substr(11,2))>12?"PM":"AM",i=a.substr(14,2),s=a.substr(17,2);return r.a.createElement("p",null,n,"/",l,"/",c," at ",o,":",i,":",s," ",u)};var ye=function(e){var t=Object(J.useMutation)(le),a=Object(k.a)(t,2),n=a[0],l=(a[1].loading,r.a.useState(e.newHiveName)),c=Object(k.a)(l,2),o=(c[0],c[1],function(){var t=Object(H.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.newHiveName){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n({variables:{query:{name:e.oldHiveName},set:{name:e.newHiveName}}});case 4:window.location.reload(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),u=!(!e.newHiveName||!e.oldHiveName);return r.a.createElement("div",null,r.a.createElement(p.a,{color:"primary",onClick:function(){o(),e.submitted()},disabled:!u},"Submit"))},we=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).changeHandler=function(e){var t=e.target.name,a=e.target.value,r=Object(C.a)({},n.state.formControls),l=Object(C.a)({},r[t]);l.value=a,l.touched=!0,r[t]=l;var c=!0;for(var o in r)c=r[o].valid&&c;n.setState({formControls:r,formIsValid:c})},n.state={formIsValid:!1,oldHiveName:e.hiveName,formControls:{HiveName:{value:"",placeholder:e.hiveName,valid:!0}}},n.onSubmitForm=n.onSubmitForm.bind(Object(i.a)(n)),n}return Object(u.a)(a,[{key:"onSubmitForm",value:function(){var e={};for(var t in this.state.formControls)e[t]=this.state.formControls[t].value}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement($,{name:"HiveName",placeholder:this.state.formControls.HiveName.placeholder,value:this.state.formControls.HiveName.value,onChange:this.changeHandler,touched:this.state.formControls.HiveName.touched,valid:this.state.formControls.HiveName.valid}),r.a.createElement(ye,{oldHiveName:this.state.oldHiveName,newHiveName:this.state.formControls.HiveName.value,submitted:this.onSubmitForm}))}}]),a}(n.Component);var je=function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),l=a[0],c=a[1],o=function(){return c(!l)};return r.a.createElement("div",null,r.a.createElement(p.a,{outline:!0,color:"warning",onClick:o},"Edit Hive")," ",r.a.createElement(f.a,{isOpen:l,toggle:o,className:e.className},r.a.createElement(O.a,{toggle:o,close:r.a.createElement("button",{className:"close",onClick:o},"\xd7")},"Edit Hive Name"),r.a.createElement(y.a,null,r.a.createElement(we,{hiveName:e.hiveName}))))};var Ne=function(e){var t=x().currentUser._id,a=Object(n.useState)(t),l=Object(k.a)(a,2),c=l[0],o=(l[1],Object(J.useQuery)(re,{variables:{query:{_owner:c}}})),u=(o.loading,o.data),i=u?u.hives:null;return r.a.createElement("div",null,r.a.createElement(ge.a,{hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,["Hive Name","Last Updated","Date Added","Status","",""].map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase())})))),r.a.createElement("tbody",null,i&&i.map((function(e){var t=e.name,a=e.reports,n=e.created;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(j.b,{to:{pathname:"/MyHive",hiveTitle:t}},t)),r.a.createElement("td",null,r.a.createElement(Oe,{report:a[0]})),r.a.createElement("td",null,r.a.createElement(fe,{date:n})),r.a.createElement("td",{style:{color:"green"}},"Good"),r.a.createElement("td",null,r.a.createElement(je,{hiveName:t})),r.a.createElement("td",null,r.a.createElement(pe,{hiveName:t})))})))))};var Se=function(e){var t=x().currentUser._id,a=Object(n.useState)(t),l=Object(k.a)(a,2),c=l[0],o=l[1],u=Object(J.useQuery)(re,{variables:{query:{_owner:c}}}),i=(u.loading,u.data),s=i?i.hives:null;return r.a.createElement("div",null,r.a.createElement(Ee,null),r.a.createElement(me.a,{color:"dark"},r.a.createElement(de.a,null,r.a.createElement(be.a,null,r.a.createElement(he.a,null,r.a.createElement("h1",null,"My Hives"),r.a.createElement(p.a,{color:"dark",onClick:function(){return o(t),void window.location.reload(!1)}},"Get Lastest Update"))))),r.a.createElement(Ne,{hives:s}),r.a.createElement(U,null))},Ce=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={SignOutModal:!1,Collapsed:!1},e.toggleNavbar=e.toggleNavbar.bind(Object(i.a)(e)),e.toggleSignOutModal=e.toggleSignOutModal.bind(Object(i.a)(e)),e}return Object(u.a)(a,[{key:"toggleNavbar",value:function(){var e=this.state.Collapsed;this.setState({Collapsed:!e})}},{key:"toggleSignOutModal",value:function(){var e=this.state.SignOutModal;this.setState({SignOutModal:!e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{color:"warning",light:!0,expand:"md"},r.a.createElement(v.a,{href:"/"},"BeeMinder"),r.a.createElement(E.a,{onClick:this.toggleNavbar}),r.a.createElement(b.a,{isOpen:this.state.Collapsed,navbar:!0},r.a.createElement(h.a,{className:"mr-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(j.b,{to:"/"},r.a.createElement(p.a,{color:"link",outline:"false"},"Home Page"))),r.a.createElement(g.a,null,r.a.createElement(j.b,{to:"/MyAccount"},r.a.createElement(p.a,{color:"link",outline:"false"},"My Hives")))),r.a.createElement(g.a,null,r.a.createElement(p.a,{color:"link",outline:"false",onClick:this.toggleSignOutModal},"Sign Out"),r.a.createElement(f.a,{isOpen:this.state.SignOutModal,toggle:this.toggleSignOutModal,className:this.className},r.a.createElement(O.a,{toggle:this.toggleSignOutModal},"Sign Out"),r.a.createElement(y.a,null,r.a.createElement("p",null,"Are you sure you want to sign out?")),r.a.createElement(w.a,null,r.a.createElement(q,null)," ",r.a.createElement(p.a,{color:"secondary",onClick:this.toggleSignOutModal},"Cancel")))))))}}]),a}(n.Component);var He=function(e){var t=Object(n.useState)(e.location.hiveTitle),a=Object(k.a)(t,2),l=a[0],c=a[1],o=Object(J.useQuery)(ne,{variables:{query:{name:l}}}).data,u=o?o.hive:null,i=u?u.identifier:"Needs Update",s=u?u.name:null,m=u?u.reports[0]:null,d=m?m.sensor_data.temp:"0",v=m?m.sensor_data.humidity:"0",E=m?m.sensor_data.weight:"0",b=m?m.time_recorded:"0000-00-00T00:00:00Z",h=b.substr(5,2),g=b.substr(8,2),f=b.substr(0,2),O=0===Number(b.substr(11,2))?"12":Number(b.substr(11,2))>12?String(Number(b.substr(11,2))-12):b.substr(11,2),y=Number(b.substr(11,2))>12?"PM":"AM",w=b.substr(14,2),j=b.substr(17,2),N=d>25&&d<55?"Good":d>5&&d<76?"Warning":"Critical",S=d>25&&d<55?"green":d>5&&d<76?"gold":"red",C=v>35&&v<55?"Good":v>25&&v<65?"Warning":"Critical",H=v>35&&v<55?"green":v>25&&v<65?"gold":"red",M=E>50&&E<80?"Good":E>40&&E<130?"Warning":"Critical",I=E>50&&E<80?"green":E>40&&E<130?"gold":"red";return r.a.createElement("div",null,r.a.createElement(Ce,null),r.a.createElement(me.a,null,r.a.createElement("h1",{className:"display-4"},s),r.a.createElement("p",null,"Hive ID: ",i),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("h5",null,"Last Updated: ",h,"/",g,"/",f," at ",O,":",w,":",j," ",y,"  "),r.a.createElement(p.a,{color:"dark",onClick:function(){return c(e.location.hiveTitle),void window.location.reload(!1)}},"Get Lastest Update")),r.a.createElement(de.a,null,r.a.createElement("h3",null,"Audio Information:"),r.a.createElement("br",null),r.a.createElement("h3",null,"Temperature Sensors:"),r.a.createElement(ge.a,{hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Location"),r.a.createElement("th",null,"Current Reading"),r.a.createElement("th",null,"Status"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Inside Hive"),r.a.createElement("td",null,d,"\xb0F"),r.a.createElement("td",{style:{color:S}},N)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Outside Hive"),r.a.createElement("td",null,d,"\xb0F"),r.a.createElement("td",{style:{color:S}},N)))),r.a.createElement("h3",null,"Humidity Sensors:"),r.a.createElement(ge.a,{hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Location"),r.a.createElement("th",null,"Current Reading"),r.a.createElement("th",null,"Status"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Inside Hive"),r.a.createElement("td",null,v,"%"),r.a.createElement("td",{style:{color:H}},C)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Outside Hive"),r.a.createElement("td",null,v,"%"),r.a.createElement("td",{style:{color:H}},C)))),r.a.createElement("h3",null,"Weight Sensors:"),r.a.createElement(ge.a,{hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Location"),r.a.createElement("th",null,"Current Reading"),r.a.createElement("th",null,"Status"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Top Left"),r.a.createElement("td",null,E," lbs"),r.a.createElement("td",{style:{color:I}},M)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Top Right"),r.a.createElement("td",null,E," lbs"),r.a.createElement("td",{style:{color:I}},M)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Bottom Left"),r.a.createElement("td",null,E," lbs"),r.a.createElement("td",{style:{color:I}},M)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Bottom Right"),r.a.createElement("td",null,E," lbs"),r.a.createElement("td",{style:{color:I}},M))))),r.a.createElement(U,null))};function ke(){var e=n.useState("5f988ba84e48809d447001e4"),t=Object(k.a)(e,2),a=t[0],r=t[1],l=Object(J.useQuery)(ne,{variables:{query:{_owner:a}}}),c=l.loading,o=l.data,u=o?o.hive:null,i=Object(J.useMutation)(le),s=Object(k.a)(i,2),m=s[0],d=s[1].loading,v=n.useState("Silly New Name"),E=Object(k.a)(v,2),b=E[0],h=E[1],g=function(){var e=Object(H.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,m({variables:{query:{name:u.name},set:{name:b}}});case 4:r(b);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=Object(J.useMutation)(ce),O=Object(k.a)(f,2),y=O[0],w=O[1].loading,N=n.useState(""),C=Object(k.a)(N,2),M=C[0],I=C[1],x=function(){var e=Object(H.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,y({variables:{data:{_owner:"5f988ba84e48809d447001e4",created:(new Date).toISOString(),identifier:"madeWithGraphQL",name:M,reports:{link:[],create:[]}}}});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.createElement("div",null,n.createElement(j.b,{to:"/"},n.createElement(p.a,{color:"dark"},"Back")),n.createElement("h1",null,"GraphQL Test"),n.createElement("div",null,n.createElement("div",null," Here we can query the Database "),n.createElement("input",{value:a,onChange:function(e){return r(e.target.value)},type:"text"}),!c&&!u&&n.createElement("div",null,"No hive with that name"),u&&!c&&n.createElement("div",null,n.createElement("h2",null,u.name),n.createElement("div",null,"ID: ",u.identifier),n.createElement("div",null,"Created: ",u.created),n.createElement("div",null,"Owner: ",u._owner),u.reports.length>0&&n.createElement("div",null,n.createElement("h4",null,"Reports"),n.createElement("ol",null,u.reports.map((function(e){return n.createElement("li",{key:e._id},e._id)})))))),n.createElement("div",null,n.createElement("div",null," Here we can modify the Database "),!d&&n.createElement("div",null,n.createElement("input",{type:"text",value:b,onChange:function(e){return h(e.target.value)}}),n.createElement("button",{onClick:function(){return g()}},"Change the Hive Name"))),n.createElement("div",null,n.createElement("div",null," Here we can Create a new Hive "),!w&&n.createElement("div",null,n.createElement("input",{type:"text",value:M,onChange:function(e){return I(e.target.value)}}),n.createElement("button",{onClick:function(){return x()}},"Create a new Hive"))))}var Me=a(21);function Ie(){return n.createElement(j.a,null,n.createElement(Me.c,null,n.createElement(Me.a,{exact:!0,path:"/",component:ve}),n.createElement(Me.a,{path:"/MyAccount",component:Se}),n.createElement(Me.a,{path:"/MyHive",component:He}),n.createElement(Me.a,{path:"/GQLExamples",component:ke})))}var xe=a(105);var _e=function(){return r.a.createElement("div",null,r.a.createElement(d.a,{color:"warning",light:!0,expand:"md"},r.a.createElement(de.a,null,r.a.createElement(he.a,null),r.a.createElement(he.a,null),r.a.createElement(he.a,null),r.a.createElement(he.a,null,r.a.createElement("h3",null,"BeeMinder")),r.a.createElement(he.a,null),r.a.createElement(he.a,null),r.a.createElement(he.a,null))))},qe=a(106),Ae=a(107),De=a(162),Ue=a(163);function Fe(){var e=x(),t=r.a.createElement(qe.a,{icon:Ae.a}),a=r.a.useState(!1),l=Object(k.a)(a,2),c=l[0],o=l[1],u=r.a.useState("login"),i=Object(k.a)(u,2),s=i[0],m=i[1],d=r.a.useState(""),v=Object(k.a)(d,2),E=v[0],b=v[1],h=r.a.useState(""),g=Object(k.a)(h,2),f=g[0],O=g[1],y=r.a.useState({}),w=Object(k.a)(y,2),j=w[0],N=w[1],I=Object(n.useState)(!1),_=Object(k.a)(I,2),q=_[0],A=_[1];r.a.useEffect((function(){b("Joe@beeminder.com"),O("123bee"),N({})}),[s]);var D=r.a.useState(!1),U=Object(k.a)(D,2),F=U[0],T=U[1],R=function(){var t=Object(H.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return T(!0),N((function(e){return Object(C.a)(Object(C.a)({},e),{},{password:null})})),t.prev=2,t.next=5,e.logIn(M.b.emailPassword(E,f));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),Le(t.t0,N);case 10:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(){return t.apply(this,arguments)}}(),B=function(){var t=Object(H.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return!0,N((function(e){return Object(C.a)(Object(C.a)({},e),{},{password:null})})),t.prev=3,t.next=6,e.emailPasswordAuth.registerUser(E,f);case 6:return t.next=8,R();case 8:return t.abrupt("return",t.sent);case 11:t.prev=11,t.t0=t.catch(3),Le(t.t0,N);case 14:t.next=17;break;case 16:N((function(e){return Object(C.a)(Object(C.a)({},e),{},{email:"Email is invalid."})}));case 17:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundColor:"gray"}},r.a.createElement(_e,null),r.a.createElement(de.a,null,r.a.createElement(be.a,null,r.a.createElement(he.a,null),r.a.createElement(he.a,null,r.a.createElement("br",null),r.a.createElement("br",null),F&null==j.password?r.a.createElement(De.a,{color:"primary"}):r.a.createElement(P.a,null,r.a.createElement(L.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"login"===s?"Log In":"Register Account")),r.a.createElement("div",null,"Email:",r.a.createElement(Ue.a,{type:"email",label:"Email",placeholder:"your.email@example.com",onChange:function(e){N((function(e){return Object(C.a)(Object(C.a)({},e),{},{email:null})})),b(e.target.value)},value:E,state:j.email?"error":"valid",errorMessage:j.email})),r.a.createElement("div",null,"Password:",r.a.createElement(Ue.a,{type:q?"text":"password",label:"Password",placeholder:"",onChange:function(e){O(e.target.value)},value:f,state:j.password?"error":j.password?"valid":"none",errorMessage:j.password}),r.a.createElement("p",{style:{fontSize:15}},r.a.createElement("i",{position:"absolute",onClick:function(){A(!q)}},t)," ","\u2190 Show Password"),null!=j&&!0===c?r.a.createElement("p",{style:{color:"red"}},"Incorrect Email or Password"):r.a.createElement("p",{style:{color:"white",fontSize:1}},"!")),r.a.createElement(de.a,null,r.a.createElement(be.a,null,r.a.createElement(he.a,null),r.a.createElement(he.a,null),r.a.createElement(he.a,null,"login"===s?r.a.createElement(p.a,{color:"warning",onClick:function(){R(),o(!0)}},"Log In"):r.a.createElement(p.a,{color:"warning",onClick:function(){B(),o(!0)}},"Register")))),r.a.createElement("div",null,r.a.createElement("p",null,"login"===s?"Don't have an account?":"Already have an account?"),r.a.createElement(p.a,{color:"secondary",onClick:function(e){e.preventDefault(),m((function(e){return"login"===e?"register":"login"}))}},"login"===s?"Register now":"Log in instead"))))),r.a.createElement(he.a,null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))}function Le(e,t){var a=function(e){var t,a=e.message.split(":"),n=a[a.length-1].trimStart();if(!n)return{status:"",message:""};var r=Object(xe.a)(/(.+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]\(status ([0-9][0-9][0-9])/,{message:1,status:2}),l=n.match(r),c=null!==(t=null===l||void 0===l?void 0:l.groups)&&void 0!==t?t:{},o=c.status,u=c.message;return{status:o,message:u}}(e),n=a.status;switch(a.message||n){case"invalid username":t((function(e){return Object(C.a)(Object(C.a)({},e),{},{email:"Invalid email address."})}));break;case"invalid username/password":case"invalid password":case"401":t((function(e){return Object(C.a)(Object(C.a)({},e),{},{password:"Incorrect password."})}));break;case"name already in use":case"409":t((function(e){return Object(C.a)(Object(C.a)({},e),{},{email:"Email is already registered."})}));break;case"password must be between 6 and 128 characters":case"400":t((function(e){return Object(C.a)(Object(C.a)({},e),{},{password:"Password must be between 6 and 128 characters."})}));break;default:t((function(e){return null}))}}var Pe=function(e){var t=new J.HttpLink({uri:"https://realm.mongodb.com/api/client/v2.0/app/".concat(e.id,"/graphql"),fetch:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var t=Object(H.a)(S.a.mark((function t(a,n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.currentUser){t.next=2;break}throw new Error("Must be logged in to use the GraphQL API");case 2:return t.next=4,e.currentUser.refreshCustomData();case 4:return n.headers.Authorization="Bearer ".concat(e.currentUser.accessToken),t.abrupt("return",fetch(a,n));case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}())}),a=new J.InMemoryCache;return new J.ApolloClient({link:t,cache:a})};function Te(e){var t=e.children,a=x(),n=r.a.useState(Pe(a)),l=Object(k.a)(n,2),c=l[0],o=l[1];return r.a.useEffect((function(){o(Pe(a))}),[a]),r.a.createElement(J.ApolloProvider,{client:c},t)}var Re="beeminderdb-nyofv",Be=function(e){var t=e.children;return x().currentUser?t:r.a.createElement(Fe,null)};c.a.render(r.a.createElement(_,{appId:Re},r.a.createElement(Be,null,r.a.createElement(Te,null,r.a.createElement(Ie,null)))),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.30382946.chunk.js.map