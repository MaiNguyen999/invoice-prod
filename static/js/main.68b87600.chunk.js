(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e){e.exports=[{title:"Page One",link:"/pages/one",icon:"list"}]},302:function(e,a,t){"use strict";(function(e){var n=t(7),l=t(8),r=t(10),c=t(9),s=t(11),i=t(0),o=t.n(i),m=t(337),u=t(24),p=t(656),d=(t(377),t(378),t(338)),b=t(339),h=t(336),E=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(r.a)(this,Object(c.a)(a).call(this))).state={loading:!0,loaded:!1},e}return Object(s.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("load",(function(){e.setState({loading:!1}),setTimeout((function(){return e.setState({loaded:!0})}),500)}))}},{key:"render",value:function(){var e=this.state,a=e.loaded,t=e.loading;return o.a.createElement(u.a,{store:b.a},o.a.createElement(p.a,null,o.a.createElement(h.a,null,o.a.createElement(i.Fragment,null,!a&&o.a.createElement("div",{className:"load".concat(t?"":" loaded")},o.a.createElement("div",{className:"load__icon-wrap"},o.a.createElement("svg",{className:"load__icon"},o.a.createElement("path",{fill:"#4ce1b6",d:"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"})))),o.a.createElement("div",null,o.a.createElement(d.a,null))))))}}]),a}(i.Component);a.a=Object(m.hot)(e)(E)}).call(this,t(150)(e))},336:function(e,a,t){"use strict";var n=t(7),l=t(8),r=t(10),c=t(9),s=t(11),i=t(0),o=t(657),m=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(i.PureComponent);a.a=Object(o.a)(m)},338:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(675),c=t(307),s=t(7),i=t(8),o=t(10),m=t(9),u=t(11),p=t(657),d=t(24),b=t(3),h=t.n(b),E=t(210),_="".concat("","/img/burger.svg"),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.changeMobileSidebarVisibility,t=e.changeSidebarVisibility;return l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"topbar__button topbar__button--desktop",onClick:t},l.a.createElement("img",{src:_,alt:"",className:"topbar__button-icon"})),l.a.createElement("button",{type:"button",className:"topbar__button topbar__button--mobile",onClick:a},l.a.createElement("img",{src:_,alt:"",className:"topbar__button-icon"})))}}]),a}(n.PureComponent),g=t(136),v=t.n(g),N=t(660),O=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.icon,n=e.path;return l.a.createElement(E.a,{className:"topbar__link",to:n},l.a.createElement("span",{className:"topbar__link-icon lnr lnr-".concat(t)}),l.a.createElement("p",{className:"topbar__link-title"},a))}}]),a}(n.PureComponent),j=t(219),y="".concat("","/img/ava.png"),k=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).toggle=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.state={collapse:!1},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.collapse;return l.a.createElement("div",{className:"topbar__profile"},l.a.createElement("button",{type:"button",className:"topbar__avatar",onClick:this.toggle},l.a.createElement("img",{className:"topbar__avatar-img",src:y,alt:"avatar"}),l.a.createElement("p",{className:"topbar__avatar-name"},"Chris"),l.a.createElement(v.a,{className:"topbar__icon"})),e&&l.a.createElement("button",{type:"button",className:"topbar__back",onClick:this.toggle}),l.a.createElement(N.a,{isOpen:e,className:"topbar__menu-wrap"},l.a.createElement("div",{className:"topbar__menu"},j.map((function(e){return l.a.createElement(O,{title:e.title,icon:e.icon,path:e.link})})),l.a.createElement("div",{className:"topbar__menu-divider"}),l.a.createElement(O,{title:"Log Out",icon:"exit",path:"/"}))))}}]),a}(n.PureComponent),w=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.changeMobileSidebarVisibility,t=e.changeSidebarVisibility;return l.a.createElement("div",{className:"topbar"},l.a.createElement("div",{className:"topbar__wrapper"},l.a.createElement("div",{className:"topbar__left"},l.a.createElement(f,{changeMobileSidebarVisibility:a,changeSidebarVisibility:t}),l.a.createElement(E.a,{className:"topbar__logo",to:"/dashboard_default"})),l.a.createElement("div",{className:"topbar__right"},l.a.createElement(k,null))))}}]),a}(n.PureComponent),C=t(305),S=t.n(C),x=t(662),V=t(661),P=function(e){var a=e.title,t=e.icon,n=e.newLink,r=e.route,c=e.onClick;return l.a.createElement(V.a,{to:r,onClick:c,activeClassName:"sidebar__link-active"},l.a.createElement("li",{className:"sidebar__link"},t?l.a.createElement("span",{className:"sidebar__link-icon lnr lnr-".concat(t)}):"",l.a.createElement("p",{className:"sidebar__link-title"},a,n?l.a.createElement(x.a,{className:"sidebar__link-badge"},l.a.createElement("span",null,"New")):"")))};P.defaultProps={icon:"",newLink:!1,route:"/",onClick:function(){}};var T=P,A=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).toggle=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.state={collapse:!1},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.icon,n=e.isNew,r=e.children,c=this.state.collapse,s=h()({"sidebar__category-wrap":!0,"sidebar__category-wrap--open":c});return l.a.createElement("div",{className:s},l.a.createElement("button",{type:"button",className:"sidebar__link sidebar__category",onClick:this.toggle},t?l.a.createElement("span",{className:"sidebar__link-icon lnr lnr-".concat(t)}):"",l.a.createElement("p",{className:"sidebar__link-title"},a,n&&l.a.createElement("span",{className:"sidebar__category-new"})),l.a.createElement("span",{className:"sidebar__category-icon lnr lnr-chevron-right"})),l.a.createElement(N.a,{isOpen:c,className:"sidebar__submenu-wrap"},l.a.createElement("ul",{className:"sidebar__submenu"},l.a.createElement("div",null,r))))}}]),a}(n.Component);A.defaultProps={icon:"",isNew:!1};var D=t(219),L=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).hideSidebar=function(){(0,t.props.onClick)()},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.changeToDark,n=a.changeToLight;return l.a.createElement("div",{className:"sidebar__content"},l.a.createElement("ul",{className:"sidebar__block"},l.a.createElement(T,{title:"Log In",icon:"exit",route:"/log_in",onClick:this.hideSidebar}),l.a.createElement(A,{title:"Layout",icon:"layers"},l.a.createElement("button",{type:"button",className:"sidebar__link",onClick:n},l.a.createElement("p",{className:"sidebar__link-title"},"Light Theme")),l.a.createElement("button",{type:"button",className:"sidebar__link",onClick:t},l.a.createElement("p",{className:"sidebar__link-title"},"Dark Theme")))),l.a.createElement("ul",{className:"sidebar__block"},l.a.createElement(A,{title:"Example Pages",icon:"diamond"},D.map((function(a){return l.a.createElement(T,{title:a.title,route:a.link,onClick:e.hideSidebar})})))))}}]),a}(n.Component),M=t(2),B=t.n(M),G=B.a.string,H=B.a.bool,$=B.a.shape,R=B.a.func,F=($({squaredCorners:H,withBoxShadow:H,topNavigation:H}),$({show:B.a.bool,collapse:B.a.bool}),$({className:G}),$({direction:G}),$({fullName:G,avatar:G}),$({isAuthenticated:H,loading:H,user:$({name:G,picture:G}),logout:R}),function(e){var a=e.changeToDark,t=e.changeToLight,n=e.changeMobileSidebarVisibility,r=e.sidebar,c=h()({sidebar:!0,"sidebar--show":r.show,"sidebar--collapse":r.collapse});return l.a.createElement("div",{className:c},l.a.createElement("button",{type:"button",className:"sidebar__back",onClick:n}),l.a.createElement(S.a,{className:"sidebar__scroll scroll"},l.a.createElement("div",{className:"sidebar__wrapper sidebar__wrapper--desktop"},l.a.createElement(L,{onClick:function(){},changeToDark:a,changeToLight:t})),l.a.createElement("div",{className:"sidebar__wrapper sidebar__wrapper--mobile"},l.a.createElement(L,{onClick:n,changeToDark:a,changeToLight:t}))))}),I=t(90),K=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).changeToDark=function(){(0,t.props.dispatch)(Object(I.c)())},t.changeToLight=function(){(0,t.props.dispatch)(Object(I.d)())},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.sidebar,a=h()({layout:!0,"layout--collapse":e.collapse});return l.a.createElement("div",{className:a},l.a.createElement(w,{changeMobileSidebarVisibility:this.changeMobileSidebarVisibility,changeSidebarVisibility:this.changeSidebarVisibility}),l.a.createElement(F,{sidebar:e,changeToDark:this.changeToDark,changeToLight:this.changeToLight,changeMobileSidebarVisibility:this.changeMobileSidebarVisibility}))}}]),a}(n.Component),U=(Object(p.a)(Object(d.b)((function(e){return{sidebar:e.sidebar}}))(K)),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.theme,t=e.children,n=e.rtl,r="/"===e.location.pathname?"ltr":n.direction;return l.a.createElement("div",{className:"".concat(a.className," ").concat(r,"-support"),dir:r},l.a.createElement("div",{className:"wrapper"},t))}}]),a}(n.PureComponent)),J=Object(p.a)(Object(d.b)((function(e){return{theme:e.theme,rtl:e.rtl}}))(U)),W=(t(211),t(310),t(673)),q=t(672),z=t(311),Q=t.n(z),Z=t(312),X=t.n(Z),Y=t(313),ee=t.n(Y),ae=t(212),te=t.n(ae),ne=t(139),le=t.n(ne),re=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.onChange)(e.defaultChecked)}},{key:"render",value:function(){var e=this.props,a=e.disabled,t=e.className,n=e.name,r=e.value,c=e.onChange,s=e.label,i=e.color,o=h()({"checkbox-btn":!0,disabled:a});return l.a.createElement("label",{className:"".concat(o," ").concat(t?" checkbox-btn--".concat(t):""),htmlFor:n},l.a.createElement("input",{className:"checkbox-btn__checkbox",type:"checkbox",id:n,name:n,onChange:c,checked:r,disabled:a}),l.a.createElement("span",{className:"checkbox-btn__checkbox-custom",style:i?{background:i,borderColor:i}:{}},l.a.createElement(te.a,null)),"button"===t?l.a.createElement("span",{className:"checkbox-btn__label-svg"},l.a.createElement(te.a,{className:"checkbox-btn__label-check"}),l.a.createElement(le.a,{className:"checkbox-btn__label-uncheck"})):"",l.a.createElement("span",{className:"checkbox-btn__label"},s))}}]),a}(n.PureComponent);re.defaultProps={label:"",defaultChecked:!1,disabled:!1,className:"",color:""};var ce=function(e){var a=e.input,t=e.label,n=e.defaultChecked,r=e.disabled,c=e.className,s=e.color;return l.a.createElement(re,Object.assign({},a,{label:t,defaultChecked:n,disabled:r,className:c,color:s}))};ce.defaultProps={label:"",defaultChecked:!1,disabled:!1,className:"",color:""};var se=ce,ie=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).showPassword=function(a){a.preventDefault(),e.setState((function(e){return{showPassword:!e.showPassword}}))},e.googleLogin=function(){console.log("clicked!")},e.state={showPassword:!1},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.handleSubmit,t=this.state.showPassword;return l.a.createElement("form",{className:"form",onSubmit:a},l.a.createElement("div",{className:"form__form-group"},l.a.createElement("span",{className:"form__form-group-label"},"Username"),l.a.createElement("div",{className:"form__form-group-field"},l.a.createElement("div",{className:"form__form-group-icon"},l.a.createElement(ee.a,null)),l.a.createElement(W.a,{name:"name",component:"input",type:"text",placeholder:"Name"}))),l.a.createElement("div",{className:"form__form-group"},l.a.createElement("span",{className:"form__form-group-label"},"Password"),l.a.createElement("div",{className:"form__form-group-field"},l.a.createElement("div",{className:"form__form-group-icon"},l.a.createElement(X.a,null)),l.a.createElement(W.a,{name:"password",component:"input",type:t?"text":"password",placeholder:"Password"}),l.a.createElement("button",{className:"form__form-group-button".concat(t?" active":""),onClick:function(a){return e.showPassword(a)},type:"button"},l.a.createElement(Q.a,null))),l.a.createElement("div",{className:"account__forgot-password"},l.a.createElement("a",{href:"/"},"Forgot a password?"))),l.a.createElement("div",{className:"form__form-group"},l.a.createElement("div",{className:"form__form-group-field"},l.a.createElement(W.a,{name:"remember_me",component:se,label:"Remember me"}))),l.a.createElement(E.a,{className:"btn btn-primary account__btn account__btn--small",to:"/pages/one"},"Sign In"),l.a.createElement(E.a,{className:"btn btn-outline-primary account__btn account__btn--small",to:"/log_in"},"Create Account"))}}]),a}(n.PureComponent),oe=(Object(q.a)({form:"log_in_form"})(ie),t(663));var me=t(670),ue=t(671),pe=t(665),de=t(666),be=t(664),he=t(676),Ee=t(314),_e=t.n(Ee),fe=t(315),ge=t.n(fe),ve=t(316),Ne=t.n(ve),Oe=t(317),je=t.n(Oe),ye=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onShow=function(){e.setState({visible:!0})},e.onDismiss=function(){e.setState({visible:!1})},e.state={visible:!0},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a=this.state.visible,t=this.props,n=t.color,r=t.className,c=t.icon,s=t.children;switch(n){case"info":e=l.a.createElement(_e.a,null);break;case"success":e=l.a.createElement(ge.a,null);break;case"warning":e=l.a.createElement(Ne.a,null);break;case"danger":e=l.a.createElement(je.a,null)}return a?l.a.createElement(he.a,{color:n,className:r,isOpen:a},c&&l.a.createElement("div",{className:"alert__icon"},e),l.a.createElement("button",{className:"close",type:"button",onClick:this.onDismiss},l.a.createElement("span",{className:"lnr lnr-cross"})),l.a.createElement("div",{className:"alert__content"},s)):l.a.createElement(oe.a,{onClick:this.onShow},"Show Alert")}}]),a}(n.PureComponent);ye.defaultProps={color:"",icon:!1,className:""};var ke=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.items;return l.a.createElement("div",{className:"catalog-items__wrap"},l.a.createElement("div",{className:"catalog-items"},e.map((function(e,a){return l.a.createElement(be.a,{className:"catalog-item",key:a},l.a.createElement(E.a,{className:"catalog-item__link",to:"/e-commerce/product_page"},l.a.createElement("div",{className:"catalog-item__img-wrap"},l.a.createElement("img",{className:"catalog-item__img",src:e.src,alt:"catalog-item-img"})),l.a.createElement("div",{className:"catalog-item__info"},l.a.createElement("h4",{className:"catalog-item__title"},e.title),l.a.createElement("p",{className:"catalog-item__description"},e.description),l.a.createElement("h1",{className:"catalog-item__price"},"$",e.price)),l.a.createElement(ye,{color:"success",className:"alert--neutral",icon:!0},l.a.createElement("p",null,e.stats))))}))))}}]),a}(n.PureComponent);ke.defaultProps={items:[]};var we=[{src:"".concat("","/img/5.png"),title:"Computer Coverage",price:"12",description:"Awesome item from Glassy brand",stats:"80% people also bought this",new:!0},{src:"".concat("","/img/8.png"),title:"Bike Coverage",price:"17",description:"Awesome item from Glassy brand",stats:"20% also bought this",new:!0},{src:"".concat("","/img/7.png"),title:"Building Coverage",price:"17",description:"Awesome item from Glassy brand",stats:[],sale:!0,oldPrice:"23"}],Ce=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getSuggestion",value:function(){switch(this.props.suggestion){case"1":case"4":case"5":case"6":case"2":return l.a.createElement(ye,{color:"warning",className:"alert--neutral",icon:!0},l.a.createElement("p",null,l.a.createElement("span",{className:"bold-text"},"Suggested items:    ")," ",l.a.createElement("a",{href:"#"},"Computer Coverage"),", ",l.a.createElement("a",{href:"#"},"Dwelling Coverage")));case"3":return l.a.createElement(ke,{items:we});default:return null}}},{key:"render",value:function(){return l.a.createElement(pe.a,null,l.a.createElement(de.a,null,l.a.createElement(be.a,null,l.a.createElement("div",{className:"card__title"},l.a.createElement("h5",{className:"bold-text"},this.props.title),l.a.createElement("h5",{className:"subhead"},this.props.subhead)),l.a.createElement("a",{href:"https://www.youtube.com/watch?v=bic4qOuIJoI"},l.a.createElement("img",{src:"".concat("","/image/youtube.png"),className:"youtube-icon"})),l.a.createElement("a",{href:"https://www.freshwateralliance.ca/floods"},l.a.createElement("img",{src:"".concat("","/image/stats.png"),className:"stats-icon"})),this.props.children,l.a.createElement("hr",{className:"line-break"}),this.getSuggestion())))}}]),a}(n.Component),Se=function(){return l.a.createElement(pe.a,{md:12,lg:12},l.a.createElement(de.a,null,l.a.createElement(be.a,{className:"invoice",style:{height:"250px"}},l.a.createElement("div",{className:"invoice__head"},l.a.createElement("div",{className:"invoice__head-left"},l.a.createElement("p",null,"Jane Doe "),l.a.createElement("p",null,"Email: customer@gmail.com"),l.a.createElement("p",null,"Address: 123 Main Street"),l.a.createElement("p",null,"City: Winnipeg"),l.a.createElement("p",null,"Postal Code: R5H 9K1"),l.a.createElement("p",{dir:"ltr"},"Phone Number: (012)-5446-8288")),l.a.createElement("div",{className:"invoice__head-right"},l.a.createElement("h4",null,"Mai's Innovation"),l.a.createElement("p",{className:"invoice__date"},"August 23, 2019"),l.a.createElement("p",null),l.a.createElement("p",null,"ABC's Broker Company"),l.a.createElement("p",null,"broker@gmail.com"),l.a.createElement("p",null,"44 Shirley Ave."),l.a.createElement("p",null,"West Chicago, IL 60185"))))))},xe=t(45),Ve=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.priceValue;return l.a.createElement(pe.a,null,l.a.createElement(de.a,null,l.a.createElement(be.a,null,l.a.createElement("div",{className:"dashboard__stat dashboard__stat--budget"},l.a.createElement("div",{className:"dashboard__stat-main"},l.a.createElement("p",{className:"dashboard__stat-main-title"},"Expected Premium"),l.a.createElement("p",{className:"dashboard__stat-main-number"},"$",e),l.a.createElement("hr",null))),l.a.createElement("div",{className:"dashboard__stat"},l.a.createElement("div",{className:"dashboard__stat-chart"},l.a.createElement(xe.b,{width:120,height:120},l.a.createElement(xe.a,{data:[{value:30,fill:"#F6DA6E"},{value:70,fill:"#eeeeee"}],dataKey:"value",cx:55,cy:55,innerRadius:55,outerRadius:60})),l.a.createElement("p",{className:"dashboard__stat-label",style:{color:"#ff4861"}},"30%")),l.a.createElement("div",{className:"dashboard__stat-info"},l.a.createElement("p",null,"House breakin often happens in this area."),l.a.createElement("h4",{className:"dashboard__stat-number"},"Starting from $23,747.00"))))))}}]),a}(n.Component),Pe=Object(p.a)(Object(d.b)((function(e){return{priceValue:e.priceValue}}))(Ve)),Te=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.priceValue2;return l.a.createElement(pe.a,null,l.a.createElement(de.a,null,l.a.createElement(be.a,null,l.a.createElement("div",{className:"dashboard__stat dashboard__stat--budget"},l.a.createElement("div",{className:"dashboard__stat-main"},l.a.createElement("p",{className:"dashboard__stat-main-title"},"Expected Premium"),l.a.createElement("p",{className:"dashboard__stat-main-number"},"$",e),l.a.createElement("hr",null))),l.a.createElement("div",{className:"dashboard__stat"},l.a.createElement("div",{className:"dashboard__stat-chart"},l.a.createElement(xe.b,{height:120,width:120},l.a.createElement(xe.a,{data:[{value:80,fill:"#4ce1b6"},{value:20,fill:"#eeeeee"}],dataKey:"value",cx:55,cy:55,innerRadius:55,outerRadius:60})),l.a.createElement("p",{className:"dashboard__stat-label",style:{color:"#4ce1b6"}},"80%")),l.a.createElement("div",{className:"dashboard__stat-info"},l.a.createElement("p",null,"Flooding happens in this area"),l.a.createElement("h4",{className:"dashboard__stat-number"},"Starting from $23,747.00"))))))}}]),a}(n.Component),Ae=Object(p.a)(Object(d.b)((function(e){return{priceValue2:e.priceValue2}}))(Te)),De=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.priceValue3;return l.a.createElement(pe.a,null,l.a.createElement(de.a,null,l.a.createElement(be.a,null,l.a.createElement("div",{className:"dashboard__stat dashboard__stat--budget"},l.a.createElement("div",{className:"dashboard__stat-main"},l.a.createElement("p",{className:"dashboard__stat-main-title"},"Expected Premium"),l.a.createElement("p",{className:"dashboard__stat-main-number"},"$",e),l.a.createElement("hr",null))),l.a.createElement("div",{className:"dashboard__stat"},l.a.createElement("div",{className:"dashboard__stat-chart"},l.a.createElement(xe.b,{height:120,width:120},l.a.createElement(xe.a,{data:[{value:80,fill:"#4ce1b6"},{value:20,fill:"#eeeeee"}],dataKey:"value",cx:55,cy:55,innerRadius:55,outerRadius:60})),l.a.createElement("p",{className:"dashboard__stat-label",style:{color:"#4ce1b6"}},"80%")),l.a.createElement("div",{className:"dashboard__stat-info"},l.a.createElement("p",null,"Break-in happens in area A"),l.a.createElement("h4",{className:"dashboard__stat-number"},"Starting from $23,747.00"))),l.a.createElement("div",{className:"dashboard__stat"},l.a.createElement("div",{className:"dashboard__stat-chart"},l.a.createElement(xe.b,{width:120,height:120},l.a.createElement(xe.a,{data:[{value:50,fill:"#ff4861"},{value:50,fill:"#eeeeee"}],dataKey:"value",cx:55,cy:55,innerRadius:55,outerRadius:60})),l.a.createElement("p",{className:"dashboard__stat-label",style:{color:"#ff4861"}},"50%")),l.a.createElement("div",{className:"dashboard__stat-info"},l.a.createElement("p",null,"Break-in happens in area B"),l.a.createElement("h4",{className:"dashboard__stat-number"},"Starting from $23,747.00"))))))}}]),a}(n.Component),Le=Object(p.a)(Object(d.b)((function(e){return{priceValue3:e.priceValue3}}))(De)),Me=t(340),Be=(t(600),t(143)),Ge=t(216),He=Ge.a.Handle,$e=function(e){var a=e.value,t=e.index,n=Object(Me.a)(e,["value","index"]);return l.a.createElement("div",null,l.a.createElement(Be.a,{prefixCls:"rc-slider-tooltip",overlay:0!=a?"".concat(a,",000"):0,visible:!0,placement:"top",key:t},l.a.createElement(He,Object.assign({value:a},n,{dragging:void 0}))))},Re=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.marks,t=(e.value,e.min),n=e.max,r=e.tipFormatter,c=e.onChange;return l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slider__min"},l.a.createElement("p",null,r?r(t):t)),l.a.createElement("div",{className:"slider__max"},l.a.createElement("p",null,r?r(n):n)),l.a.createElement(Ge.a,{min:t,max:n,defaultValue:0,handle:$e,marks:a,tipFormatter:r,onChange:c}))}}]),a}(n.PureComponent);Re.defaultProps={marks:{},value:0,tipFormatter:function(e){return e}};function Fe(e){return{type:"CHANGE_VALUE",value:e}}function Ie(e){return{type:"CHANGE_VALUE2",value:e}}function Ke(e){return{type:"CHANGE_VALUE3",value:e}}var Ue=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).changeValue=function(e){(0,t.props.dispatch)(Fe(e))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(Re,{min:0,max:100,marks:{0:"0",30:"30,000",50:"50,000",70:"70,000",100:"100,000"},onChange:this.changeValue})}}]),a}(n.Component),Je=Object(p.a)(Object(d.b)((function(e){return{priceValue:e.priceValue}}))(Ue)),We=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).changeValue2=function(e){console.log(e),(0,t.props.dispatch)(Ie(e))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return console.log("This is 2"),l.a.createElement(Re,{min:0,max:100,marks:{0:"0",30:"30,000",50:"50,000",70:"70,000",100:"100,000"},onChange:this.changeValue2})}}]),a}(n.Component),qe=Object(p.a)(Object(d.b)((function(e){return{priceValue2:e.priceValue2}}))(We)),ze=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).changeValue3=function(e){(0,t.props.dispatch)(Ke(e))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(Re,{min:0,max:100,marks:{0:"0",30:"30,000",50:"50,000",70:"70,000",100:"100,000"},onChange:this.changeValue3})}}]),a}(n.Component),Qe=Object(p.a)(Object(d.b)((function(e){return{priceValue3:e.priceValue3}}))(ze)),Ze=t(667),Xe=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.priceValue,t=e.priceValue2,n=e.priceValue3,r=a+t+n,c=(.05*r).toFixed(2),s=(.95*r).toFixed(2);return l.a.createElement(pe.a,null,l.a.createElement(de.a,null,l.a.createElement(be.a,{className:"invoice"},l.a.createElement(Ze.a,{className:"table--bordered cart__table",responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Coverage A \u2013 Dwelling Building"),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"$",a)),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Coverage B - Private Structures"),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"$",t)),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Coverage C - Personal Property"),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"$",n)))),l.a.createElement("div",{className:"invoice__total"},l.a.createElement("p",null,"Sub-total: $",r),l.a.createElement("p",null,"Discount: $",c),l.a.createElement("p",{className:"invoice__grand-total"},"Grand Total: $",s)))))}}]),a}(n.Component),Ye=Object(p.a)(Object(d.b)((function(e){return{priceValue:e.priceValue,priceValue2:e.priceValue2,priceValue3:e.priceValue3}}))(Xe)),ea=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"card__title"},l.a.createElement("h5",{className:"bold-text"}," ")),l.a.createElement("p",null,'This paragraph introduces about what we cover for dwelling building: Dwelling coverage, sometimes called "dwelling insurance," is the part of your homeowners insurance policy that may help pay for the rebuilding or the repair of the physical structure of your home if it\'s damaged by a covered hazard.'),l.a.createElement("p",null,"Here's a look at what dwelling insurance covers, what types of perils and structures are not covered, and how deductibles and limits work if you have to make a claim on your dwelling insurance."))},aa=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"This paragraph introduces about what we cover for private structures:"),l.a.createElement("p",null,"Other structures insurance, also known as Coverage B, is the part of your home insurance policy that protects structures on your property other than your house. That includes: Fences; Sheds; Detached garages; Swimming pools; Greenhouses; Driveways; Guest cottages; Gazebos; Barns"))},ta=t(109),na=t.n(ta),la=t(148),ra=t.n(la),ca=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onEntering=function(){e.setState({status:"opening",icon:l.a.createElement(na.a,null)})},e.onEntered=function(){e.setState({status:"opened",icon:l.a.createElement(na.a,null)})},e.onExiting=function(){e.setState({status:"closing",icon:l.a.createElement(ra.a,null)})},e.onExited=function(){e.setState({status:"closed",icon:l.a.createElement(ra.a,null)})},e.toggle=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.state={collapse:!1,status:"closed",icon:l.a.createElement(ra.a,null)},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.title,n=e.children,r=this.state,c=r.icon,s=r.collapse,i=r.status;return l.a.createElement("div",{className:"collapse__wrapper ".concat(i," ").concat(a),dir:"ltr"},l.a.createElement("button",{onClick:this.toggle,className:"collapse__title",type:"button"},c,l.a.createElement("p",null,t,l.a.createElement(v.a,null))),l.a.createElement(N.a,{isOpen:s,className:"collapse__content",onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited},l.a.createElement("div",null,n)))}}]),a}(n.PureComponent);ca.defaultProps={title:"",className:""};var sa=function(){return l.a.createElement("div",null,l.a.createElement(ca,{title:"Personal property on your premises",className:"with-shadow"},l.a.createElement("p",null,"This paragraph introduces about personal property on your premises")),l.a.createElement(ca,{title:"Personal property away from your premises",className:"with-shadow"},l.a.createElement("p",null,"This paragraph introduces about Personal property away from your premises")),l.a.createElement(ca,{title:"Moving to another home",className:"with-shadow"},l.a.createElement("p",null,"This paragraph introduces about Moving to another home")),l.a.createElement(ca,{title:"Special limits of insuranceving to another home",className:"with-shadow"},l.a.createElement("p",null,"This paragraph introduces about Special limits of insuranceving to another home")))},ia=t(674),oa=t(668),ma=t(669),ua=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).toggle=function(){e.setState((function(e){return{popoverOpen:!e.popoverOpen}}))},e.state={popoverOpen:!1},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.dir,t=e.id,n=this.state.popoverOpen;return l.a.createElement("div",null,l.a.createElement("a",{id:t,onClick:this.toggle,className:"info-icon"},l.a.createElement("img",{src:"".concat("","/image/info.png")})),l.a.createElement(ia.a,{placement:"right",isOpen:n,target:t,toggle:this.toggle,dir:a},l.a.createElement(oa.a,null,"FAQ"),l.a.createElement(ma.a,null,l.a.createElement("a",{href:"https://www.wawanesa.com/canada/products/home-insurance.html"},"What is the difference between broad and special coverage?"))))}}]),a}(n.PureComponent),pa=t(334),da=t.n(pa),ba=t(335),ha=t.n(ba),Ea=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onShow=function(){e.setState({visible:!0})},e.onDismiss=function(){e.setState({visible:!1})},e.onCollapse=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.onRefresh=function(){e.setState((function(e){return{refresh:!e.refresh}})),setTimeout((function(){return e.setState({refresh:!1})}),5e3)},e.state={visible:!0,collapse:!0,refresh:!1},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.md,t=e.lg,n=e.xl,r=e.sm,c=e.xs,s=e.color,i=e.divider,o=e.icon,m=e.title,u=e.label,p=e.subhead,d=e.before,b=e.panelClass,h=e.children,E=this.state,_=E.collapse,f=E.refresh;return E.visible?l.a.createElement(pe.a,{md:a,lg:t,xl:n,sm:r,xs:c},l.a.createElement(de.a,{className:"panel".concat(s?" panel--".concat(s):"","\n            ").concat(i?" panel--divider":"").concat(_?"":" panel--collapse"," ").concat(b)},l.a.createElement(be.a,{className:"panel__body"},f?l.a.createElement("div",{className:"panel__refresh"},l.a.createElement(ha.a,null)):"",l.a.createElement("div",{className:"panel__btns"},l.a.createElement("button",{className:"panel__btn",type:"button",onClick:this.onCollapse},l.a.createElement(na.a,null)),l.a.createElement("button",{className:"panel__btn",type:"button",onClick:this.onRefresh},l.a.createElement(da.a,null)),l.a.createElement("button",{className:"panel__btn",type:"button",onClick:this.onDismiss},l.a.createElement(le.a,null))),l.a.createElement("div",{className:"panel__title"},l.a.createElement("h5",{className:"bold-text"},o?l.a.createElement("span",{className:"panel__icon lnr lnr-".concat(o)}):"",m,l.a.createElement(x.a,{className:"panel__label"},u)),l.a.createElement("h5",{className:"subhead"},p)),l.a.createElement(N.a,{isOpen:_},l.a.createElement("div",{className:"panel__content"},h)))),d):""}}]),a}(n.PureComponent);Ea.defaultProps={divider:!1,color:"",title:"",subhead:"",label:"",icon:"",md:0,lg:0,xl:0,sm:0,xs:0,before:null,panelClass:""};var _a=function(){return l.a.createElement(me.a,{className:"dashboard"},l.a.createElement(ue.a,null,l.a.createElement(pe.a,{md:12},l.a.createElement(Se,null))),l.a.createElement(ue.a,{className:"row-container"},l.a.createElement(pe.a,{md:9},l.a.createElement(Ce,{title:"Coverage A \u2013 Dwelling Building",suggestion:"1"},l.a.createElement(ua,{id:"Pop1"}),l.a.createElement(ea,null),l.a.createElement(Je,null))),l.a.createElement(Pe,null)),l.a.createElement(ue.a,null,l.a.createElement(pe.a,{md:9},l.a.createElement(Ce,{title:"Coverage B - Private Structures",suggestion:"2"},l.a.createElement(ua,{id:"Pop2"}),l.a.createElement(aa,null),l.a.createElement(qe,null))),l.a.createElement(Ae,null)),l.a.createElement(ue.a,null,l.a.createElement(pe.a,{md:9},l.a.createElement(Ce,{title:"Coverage C - Personal Property",suggestion:"3"},l.a.createElement(ua,{id:"Pop3"}),l.a.createElement(sa,null),l.a.createElement(Qe,null))),l.a.createElement(Le,null)),l.a.createElement(ue.a,null,l.a.createElement(pe.a,{md:12},l.a.createElement(Ea,{color:"success",title:"Total"},l.a.createElement(Ye,null)))))};a.a=function(){return l.a.createElement(J,null,l.a.createElement("main",null,l.a.createElement(r.a,null,l.a.createElement("div",{className:"container__wrap"},l.a.createElement(c.a,{exact:!0,path:"/",component:_a})))))}},339:function(e,a,t){"use strict";var n=t(28),l=t(90),r={className:"theme-light"},c=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_VALUE".concat(e):return 0==t.value?0:t.value>0&&t.value<=30?319:t.value<=50?525:t.value<=70?726:1022;default:return a}}},s=Object(n.b)({theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.a:return{className:"theme-dark"};case l.b:return{className:"theme-light"};default:return e}},priceValue:c(""),priceValue2:c("2"),priceValue3:c("3"),priceValue4:c("4"),priceValue5:c("5"),priceValue6:c("6")}),i=Object(n.c)(s);a.a=i},368:function(e,a,t){e.exports=t(369)},369:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),c=t(302);Object(r.render)(l.a.createElement(c.a,null),document.getElementById("root"))},378:function(e,a,t){},90:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return l})),t.d(a,"c",(function(){return r})),t.d(a,"d",(function(){return c}));var n="CHANGE_THEME_TO_DARK",l="CHANGE_THEME_TO_LIGHT";function r(){return{type:n}}function c(){return{type:l}}}},[[368,1,2]]]);
//# sourceMappingURL=main.68b87600.chunk.js.map