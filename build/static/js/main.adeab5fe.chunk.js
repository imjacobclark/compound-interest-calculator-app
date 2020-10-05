(this.webpackJsonpcic=this.webpackJsonpcic||[]).push([[0],{117:function(e,t,a){e.exports=a(222)},122:function(e,t,a){},221:function(e,t,a){var n={"./pwa-action-sheet.entry.js":[229,5],"./pwa-camera-modal-instance.entry.js":[230,6],"./pwa-camera-modal.entry.js":[231,7],"./pwa-camera.entry.js":[232,8],"./pwa-toast.entry.js":[233,9]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=221,e.exports=r},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=(a(122),a(11)),l=a(35),s=a.n(l),u=a(56),m=a(25),d=a(34),p=a(279),b=a(284),g=a(285),f=a(286),h=a(223),y=a(294),v=a(287),E=a(292),O=a(288),j=a(283),w=a(290),k=a(106),x=a(282),C=a(104),B=a.n(C),T=a(3),S=a(278),N=a(289);function D(e){var t=e.setData,a=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{variant:"h6",gutterBottom:!0},"Investment details"),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(S.a,{container:!0,spacing:3},r.a.createElement(S.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{error:a.dirty&&!a.balance,type:"number",required:!0,id:"initialBalance",name:"initialBalance",label:"Initial balance",value:a.balance||"",fullWidth:!0,onChange:function(e){t(Object(c.a)(Object(c.a)({},a),{},{balance:e.target.value}))}})),r.a.createElement(S.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{error:a.dirty&&!a.interest,type:"number",required:!0,id:"interestRate",name:"interestRate",label:"Interest rate (%)",value:a.interest||"",fullWidth:!0,onChange:function(e){t(Object(c.a)(Object(c.a)({},a),{},{interest:e.target.value}))}})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(N.a,{error:a.dirty&&!a.monthlyPayments,type:"number",required:!0,id:"monthlyPayments",name:"monthlyPayments",value:a.monthlyPayments||"",label:"Additional monthly payments",fullWidth:!0,onChange:function(e){t(Object(c.a)(Object(c.a)({},a),{},{monthlyPayments:e.target.value}))}})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(N.a,{error:a.dirty&&!a.period,type:"number",required:!0,id:"period",name:"period",value:a.period||"",label:"How often interest is applied (per year)",fullWidth:!0,onChange:function(e){t(Object(c.a)(Object(c.a)({},a),{},{period:e.target.value}))}})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(N.a,{error:a.dirty&&!a.lengthOfTime,type:"number",required:!0,id:"lengthOfTime",name:"lengthOfTime",label:"Length of time invested (years)",value:a.lengthOfTime||"",fullWidth:!0,onChange:function(e){t(Object(c.a)(Object(c.a)({},a),{},{lengthOfTime:e.target.value}))}})))))}var P=Object(p.a)((function(e){return{loadingBox:{background:"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)","background-size":"400% 400%",animation:"$gradient 15s ease infinite",height:"20px",width:"100%",display:"block","border-radius":"5px"},"@keyframes gradient":{"0%":{"background-position":"0% 50%"},"50%":{"background-position":"100% 50%"},"100%":{"background-position":"0% 50%"}}}}));function L(e){var t=e.data,a=e.setData,o=Object(n.useState)(!1),i=Object(m.a)(o,2),l=i[0],d=i[1],p=P();Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://3jvichlsm2.execute-api.eu-west-2.amazonaws.com/dev/calculate/api?principal=".concat(t.balance,"&interestRate=").concat(t.interest/100,"&monthlyAmount=").concat(t.monthlyPayments,"&termLength=").concat(t.lengthOfTime)).then((function(e){return e.json()}));case 2:n=e.sent,d(n.value),a(Object(c.a)(Object(c.a)({},t),{},{value:n.value,history:n.history}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{variant:"h6",gutterBottom:!0},"Investment overview"),r.a.createElement(S.a,{container:!0,spacing:3},r.a.createElement(S.a,{item:!0,xs:12},function(){return l?r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Your initial \xa3",t.balance," investment after ",t.lengthOfTime," years at ",t.interest,"% would be worth ",(e=l,new Intl.NumberFormat("en-gb",{style:"currency",currency:"GBP"}).format(e)),"."):r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},r.a.createElement("span",{className:p.loadingBox}));var e}())))}var R=a(78),W=a(280),F=a(281),I=a(295),H=a(101);function q(e){var t=e.data,a=[].concat(Object(R.a)(t.history.map((function(e){return e.year}))),[t.history.length+1]),o=[].concat(Object(R.a)(t.history.map((function(e){return e.value}))),[t.value]),i=Object(n.useState)(!1),c=Object(m.a)(i,2),l=c[0],s=c[1],u={labels:a,datasets:[{label:"Compound growth over time",fill:l,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:o}]};return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"h6",gutterBottom:!0},"Visualisation"),r.a.createElement(W.a,null,r.a.createElement(F.a,{control:r.a.createElement(I.a,{onChange:function(){return s(!l)},value:"fill",color:"primary"}),labelPlacement:"start",label:"Fill"})),r.a.createElement(H.a,{data:u,width:80,height:250,options:{maintainAspectRatio:!1,scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Years"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Currency"}}]}}}))}var A=a(77),V=A.a.Network,J=A.a.Toast;var z=Object(p.a)((function(e){return{appBar:{position:"relative",paddingTop:"env(safe-area-inset-top)"},menuButton:{marginRight:e.spacing(2)},layout:Object(d.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(d.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},list:{width:250,paddingTop:"env(safe-area-inset-top)"},fullList:{width:"auto"}}})),Y=["Details","Overview","Visualisation"],G=[function(e,t){return r.a.createElement(D,{setData:e,data:t})},function(e,t){return r.a.createElement(L,{setData:e,data:t})},function(e,t){return r.a.createElement(q,{data:t})}];function M(){var e=z(),t=r.a.useState(0),a=Object(m.a)(t,2),o=a[0],i=a[1],l=r.a.useState(!1),p=Object(m.a)(l,2),C=p[0],S=p[1],N=r.a.useState({balance:void 0,interest:void 0,monthlyPayments:void 0,period:void 0,lengthOfTime:void 0,value:void 0,history:[],error:!1,dirty:!1,left:!1}),D=Object(m.a)(N,2),P=D[0],L=D[1];Object(n.useEffect)((function(){!function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.getStatus();case 2:if(t=e.sent,S(t.connected),t.connected){e.next=7;break}return e.next=7,J.show({text:"Oops, you appear to be offline!",duration:"long",position:"center"});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}));var R,W=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&L(Object(c.a)(Object(c.a)({},P),{},{left:e}))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null),r.a.createElement(w.a,{anchor:"left",open:P.left,onClose:W(!1),onOpen:W(!0),disableSwipeToOpen:!1,disableBackdropTransition:!0},(R="left",r.a.createElement("div",{className:Object(T.a)(e.list,Object(d.a)({},e.fullList,"top"===R||"bottom"===R)),role:"presentation",onClick:W(!1),onKeyDown:W(!1)},r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement("span",null,r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Version 1.0"),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Built by ",r.a.createElement(j.a,{color:"inherit",href:"https://jacobclark.xyz/"},"Jacob Clark")," ","& ",r.a.createElement(j.a,{color:"inherit",href:"http://github.com/chrisgrounds/"},"Chris Grounds")," ",(new Date).getFullYear(),".")))))),r.a.createElement(g.a,{position:"absolute",color:"default",className:e.appBar},r.a.createElement(f.a,null,r.a.createElement(x.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:W(!0)},r.a.createElement(B.a,null)),r.a.createElement(k.a,{variant:"h6",color:"inherit",noWrap:!0},"Compound Interest"))),r.a.createElement("main",{className:e.layout},r.a.createElement(h.a,{className:e.paper},r.a.createElement(k.a,{component:"h1",variant:"h4",align:"center"},"Calculator"),r.a.createElement(y.a,{activeStep:o,className:e.stepper},Y.map((function(e){return r.a.createElement(v.a,{key:e},r.a.createElement(E.a,null,e))}))),r.a.createElement(r.a.Fragment,null,function(e,t,a,n){try{return G[e](t,a)}catch(r){return n(0)}}(o,L,P,i),r.a.createElement("div",{className:e.buttons},0!==o&&r.a.createElement(O.a,{onClick:function(){return i(o-1)},className:e.button},"Back"),r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(){P.balance&&P.interest&&P.monthlyPayments&&P.period&&P.lengthOfTime?i(o+1):L(Object(c.a)(Object(c.a)({},P),{},{dirty:!0}))},className:e.button,disabled:!C},0===o&&"Calculate",1===o&&"Visualise",2===o&&"Done"))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(105);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Object(U.a)(window)}},[[117,1,4]]]);
//# sourceMappingURL=main.adeab5fe.chunk.js.map