(self.webpackChunktry=self.webpackChunktry||[]).push([[470],{4806:(e,t,r)=>{(t=r(3645)(!1)).push([e.id,"._1EOdkKlryc0rAnONG7xWJg {\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 99;\r\n    border-bottom: 1px solid;\r\n}",""]),t.locals={myNavBar:"_1EOdkKlryc0rAnONG7xWJg"},e.exports=t},56:(e,t,r)=>{var n=r(3379),o=r(4806),r={insert:"head",singleton:!1};n(o="string"==typeof(o=o.__esModule?o.default:o)?[[e.id,o,""]]:o,r);e.exports=o.locals||{}},2470:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n,o,a=r(7294),l=r(6760),t=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});function c(e){e=o.call(this,e)||this;return e.state={selectedTab:"redTab",hidden:!1},e}const s=(o=a.Component,t(c,o),c.prototype.renderContent=function(e){var t=this;return a.createElement("div",{style:{height:"100%",textAlign:"center"}},a.createElement("div",{style:{paddingTop:60}},"Clicked “",e,"” tab， show “",e,"” information"),a.createElement("a",{style:{display:"block",marginTop:40,marginBottom:20,color:"#108ee9"},onClick:function(e){e.preventDefault(),t.setState({hidden:!t.state.hidden})}}," Click to show/hide tab-bar "),a.createElement(l.pb,null,a.createElement(l.kC,null,a.createElement(l.kC.Item,null,a.createElement("br",null),a.createElement(l.zx,{type:"primary",size:"large"}," Button"))),a.createElement(l.kC,null,a.createElement("span",null," color text...."))))},c.prototype.render=function(){var e=this;return a.createElement("div",{style:{position:"fixed",height:"100%",width:"100%",top:0}},a.createElement(l.nj,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",hidden:this.state.hidden},a.createElement(l.nj.Item,{title:"Life",key:"Life",icon:a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"}}),selectedIcon:a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"}}),selected:"blueTab"===this.state.selectedTab,badge:1,onPress:function(){e.setState({selectedTab:"blueTab"})},"data-seed":"logId"},this.renderContent("Life")),a.createElement(l.nj.Item,{icon:a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"}}),selectedIcon:a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"}}),title:"Koubei",key:"Koubei",badge:"new",selected:"redTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"redTab"})},"data-seed":"logId1"},this.renderContent("Koubei")),a.createElement(l.nj.Item,{icon:a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"}}),selectedIcon:a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"Friend",key:"Friend",dot:!0,selected:"greenTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"greenTab"})}},this.renderContent("Friend")),a.createElement(l.nj.Item,{icon:{uri:"https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},title:"My",key:"my",selected:"yellowTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})}},this.renderContent("My"))))},c);function i(e){return a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/"+e+".svg",className:"am-icon am-icon-xs",alt:""})}var t=r(56),p=r.n(t),d=l.J2,m=d.Item;const h=function(e){var t=e.visible,r=e.handleVisibleChange,e=e.onSelect;return a.createElement("div",{style:{height:"45px"}},a.createElement(l.l2,{mode:"light",icon:a.createElement(l.JO,{type:"left"}),onLeftClick:function(){location.href=location.href.split("?")[0]},className:p().myNavBar,rightContent:a.createElement(d,{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:t,overlay:[a.createElement(m,{key:"4",value:"scan",icon:i("tOtXhkIWzwotgGSeptou"),"data-seed":"logId"},"Scan"),a.createElement(m,{key:"5",value:"special",icon:i(""),style:{whiteSpace:"nowrap"}},"change color"),a.createElement(m,{key:"6",value:"button ct",icon:i("uQIYTFeRrjPELImDRrPt")},a.createElement("span",{style:{marginRight:5}},"Help"))],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:r,onSelect:e},a.createElement("div",{style:{height:"100%",padding:"0 15px",marginRight:"-15px",display:"flex",alignItems:"center"}},a.createElement(l.JO,{type:"ellipsis"})))},"welcom to antdMobile"))};var u=a.useState;const b=function(e){var t=u(),r=t[0],n=t[1],t=u(),o=t[0],l=t[1];return a.createElement("div",null,a.createElement(h,{handleVisibleChange:function(e){n(e)},onSelect:function(e){console.log(e.props.value),"special"===e.props.value&&window.less.modifyVars({"@primary-color":"orange","@heading-color":"#333","@text-color":"orange","@table-selected-row-bg":"fade(@primary-color, 15%)","@table-row-zebra-color":"fade(@primary-color, 5%)","@success-color":"@primary-color","@primary-message-bd":"#89dac7","@primary-message-bg":"#e5f7f3","@primary-bg":"fade(@primary-color, 10%)","@border-color-base":"#b6b6b6","@outline-color":"@primary-color"}).then(function(){console.log("change success")}).catch(function(e){}),n(!1),console.log(o),l(e.props.value)},visible:r}),a.createElement(s,null))}}}]);