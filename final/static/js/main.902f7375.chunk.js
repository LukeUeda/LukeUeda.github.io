(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{126:function(e,t,a){},127:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),i=(a(126),a(127),a(29)),o=a(8),l=a(9),d=a(88),b=a(255),j=a(245);function h(e,t){var a=e%(60/t),n=a*t;return u(((e-a)/(60/t)).toString(),2)+":"+u(n.toString(),2)}function u(e,t,a){return a=a||"0",(e+="").length>=t?e:new Array(t-e.length+1).join(a)+e}function m(e){var t="".concat(e).split(".");return 2*parseInt(t[0])+parseFloat(t[1])/30}function O(e){var t="".concat(e).split(":");return 2*parseInt(t[0])+parseFloat(t[1])/30}function p(e){var t=e.split(":");return t=t[0]+"."+t[1]}function f(e){var t=e.split(".");return t=t[0]+":"+t[1]}var x=a(1);var y=function(e){var t=Object(n.useState)({color:"#FFFFFF",border:"",start:h(e.index,30),end:h(e.index+1,30),text:""}),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(l.a)(s,2),d=i[0],u=i[1],m=Object(n.useRef)(null),O=function(){var t="";""===e.value[0]&&(t="border border-0.5 border-secondary");var a="";e.value[0]&&(t="border-dark border-left border-right"),e.value[1]&&(a=e.value[0]),e.value[2].includes("B")&&(t+=" border-bottom rounded-bottom"),e.value[2].includes("T")&&(t+=" border-top rounded-top"),c((function(n){return Object(o.a)(Object(o.a)({},n),{},{text:a,border:t,color:e.value[3]})}))};return Object(n.useEffect)(O,[e.value]),Object(n.useEffect)((function(){null!==e.sel()&&r.start===e.sel().start?c((function(e){return Object(o.a)(Object(o.a)({},e),{},{color:"#000000"})})):O()}),[e.sel]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:{height:"2.08%",backgroundColor:r.color,fontSize:"11px"},className:"text-center "+r.border,ref:m,onClick:function(){e.cellFunc(r,e.par)},onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)},children:r.text}),Object(x.jsx)(b.a,{target:m.current,show:d,placement:"right",transition:!1,children:function(e){return Object(x.jsx)(j.a,Object(o.a)(Object(o.a)({id:"overlay-example"},e),{},{children:r.start+" - "+r.end}))}})]})};var g=function(e){var t={};Object(d.a)(Array(48)).map((function(e,a){t[a]=["",!1,""]}));var a=Object(n.useState)(t),r=Object(l.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){!function(){s(t);try{Object.entries(e.data[e.date]).map((function(t){for(var a=m(e.data[e.date][t[0]].end),n=m(e.data[e.date][t[0]].start),r=Math.floor((n+a)/2),c=function(c){var l=!1,d="S",b=e.data[e.date][t[0]].task,j=e.data[e.date][t[0]].color;(c===r-1||c===n&&a-n===1)&&(l=!0),c===n&&(d+="T"),c===a-1&&(d+="B"),s((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},c,[b,l,d,j]))}))},l=m(e.data[e.date][t[0]].start);l<m(e.data[e.date][t[0]].end);l++)c(l)}))}catch(a){}}()}),[e.data]),Object(x.jsx)("div",{style:{height:"624px"},children:Object(d.a)(Array(48)).map((function(t,a){return Object(x.jsx)(y,{cellFunc:e.cellFunc,index:a,par:e.date,sel:function(){return e.startSelection[1]===e.date?e.startSelection[0]:null},value:c[a]})}))})},v=a(120),E=a(256),w=a(247),R=a(257),A=a(248),k=a(249),N=a(115),T=a(246);var L=function(e){var t=Object(n.useState)(e.placeholder),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(x.jsxs)(T.a,{className:"mb-3",children:[Object(x.jsx)(T.a.Prepend,{children:Object(x.jsx)(T.a.Text,{id:"basic-addon1",children:e.title})}),Object(x.jsx)(R.a.Control,{value:r,onChange:function(t){t.target.value.length<=5&&c(t.target.value),e.returnFunc(e.title,t.target.value)},"aria-label":"Username","aria-describedby":"basic-addon1"})]})},F=a(121);var C=function(e){var t={start:e.selection.selectionStart,end:e.selection.selectionEnd},a=Object(n.useState)(t),r=Object(l.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),b=d[0],j=d[1],h=Object(n.useState)(e.selection.color),u=Object(l.a)(h,2),m=u[0],p=u[1],f={varType:{start:!1,end:!1},inBounds:{start:!1,end:!1},correctOrder:!1,appropriateName:!1},y=Object(n.useState)(f),g=Object(l.a)(y,2),T=g[0],C=g[1],U=Object(n.useRef)(null),I=function(e,t){""!==t&&s("Change Time Start"===e?Object(o.a)(Object(o.a)({},c),{},{start:t}):Object(o.a)(Object(o.a)({},c),{},{end:t}))};Object(n.useEffect)((function(){c.start=e.selection.selectionStart,c.end=e.selection.selectionEnd,j(e.selection.taskName),e.selection.taskName||e.modalState&&U.current.focus()}),[e.modalState]);var S=function(){var e=c.start.split(":"),t=c.end.split(":"),a=2===e.length&&!isNaN(e[0])&&!isNaN(e[1])&&Number.isInteger(O(c.start))&&e[1]<60&&0<=e[1],n=2===t.length&&!isNaN(t[0])&&!isNaN(t[1])&&Number.isInteger(O(c.end))&&t[1]<60&&0<=t[1],r=parseInt(e[0])+.01*parseInt(e[1]),s=parseInt(t[0])+.01*parseInt(t[1]),i=r<=24&&r>=0,o=s<=24&&s>=0,l=s>r,d=""!==b,j=a&&n&&i&&o&&l&&d;return C({varType:{start:!a,end:!n},inBounds:{start:!i&&a,end:!o&&n},correctOrder:!l&&n&&a,appropriateName:!d}),j},B=function(){e.onHide(),C(f),p("#DCDCDC"),s(t),j("")};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(E.a,{show:e.modalState,centered:!0,onKeyPress:function(t){13===(t.keyCode||t.which)&&S()&&(e.submit(c,b),B())},children:[Object(x.jsx)(E.a.Header,{closeButton:!0,onClick:B,children:Object(x.jsx)(E.a.Title,{children:"".concat(e.text," Task")})}),Object(x.jsxs)(E.a.Body,{children:[Object(x.jsx)(L,{title:"Change Time Start",placeholder:e.selection.selectionStart,returnFunc:I}),Object(x.jsx)(w.a,{variant:"danger",style:{display:T.varType.start?"block":"none"},children:"Time is not in the correct form (hh:mm) (30min increments)."}),Object(x.jsx)(w.a,{variant:"danger",style:{display:T.inBounds.start?"block":"none"},children:"Time out of bounds."}),Object(x.jsx)(L,{title:"Change Time End",placeholder:e.selection.selectionEnd,returnFunc:I}),Object(x.jsx)(w.a,{variant:"danger",style:{display:T.varType.end?"block":"none"},children:"Time is not in the correct form (hh:mm) (30min increments)."}),Object(x.jsx)(w.a,{variant:"danger",style:{display:T.inBounds.end?"block":"none"},children:"Time out of bounds."}),Object(x.jsx)(w.a,{variant:"danger",style:{display:T.correctOrder?"block":"none"},children:"You can't end earlier than you started!"}),Object(x.jsx)(R.a.Control,{type:"taskName",placeholder:"Enter Task Name (Max 20 characters)",value:b,ref:U,onChange:function(e){e.target.value.length<20&&j(e.target.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)(w.a,{variant:"danger",style:{display:T.appropriateName?"block":"none"},children:"Please enter an acceptable task name."}),Object(x.jsx)("br",{}),Object(x.jsx)(A.a,{children:Object(x.jsxs)(k.a,{children:[Object(x.jsx)(N.a,{children:Object(x.jsx)(F.a,{color:m,onChangeComplete:function(e){p(e.hex)}})}),Object(x.jsx)(N.a,{children:Object(x.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:m},className:"text-center",children:b})})]})})]}),Object(x.jsxs)(E.a.Footer,{children:[Object(x.jsx)(v.a,{variant:"danger",onClick:B,children:"Close"}),Object(x.jsx)(v.a,{variant:"success",onClick:function(){S()&&(e.submit(c,b,m),B())},children:""!==e.selection.taskName?"Edit":"Submit"}),function(){if(""!==e.selection.taskName)return Object(x.jsx)(v.a,{variant:"outline-dark",onClick:function(){e.delete(),B()},children:"Delete"})}()]})]})})},U=a(259),I=a(258),S=a(252),B=a(253),z=a(250),D=a(251),P=a.p+"static/media/CalenderNavigation.2a988423.png",X=a.p+"static/media/ColorSelection.08663359.png",M=a.p+"static/media/FindingFriends.ceae476c.png",H=a.p+"static/media/AddTask.9057db62.png",Y=a.p+"static/media/EditMenu.56f58e41.png",V=a.p+"static/media/AddHeader.c0991260.png",Z=a.p+"static/media/PrevNext.976d0ca8.png";var W=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=function(){r(!a)};return Object(x.jsxs)("div",{children:[Object(x.jsx)(v.a,{variant:"outline-dark",onClick:c,children:"Help"}),Object(x.jsxs)(E.a,{show:a,size:"xl",centered:!0,children:[Object(x.jsx)(E.a.Header,{closeButton:!0,onClick:c,children:Object(x.jsx)(E.a.Title,{children:Object(x.jsx)("h1",{children:"How to use"})})}),Object(x.jsxs)(E.a.Body,{children:[Object(x.jsx)("h2",{children:Object(x.jsx)("u",{children:"New Features!"})}),Object(x.jsx)(z.a,{variant:"danger",children:"New"})," Custom Colors are now supported! You can set them through the ",Object(x.jsx)("em",{children:"Add Task"})," menu.",Object(x.jsx)("br",{}),Object(x.jsx)(D.a,{src:X,fluid:!0,width:"40%",height:"40%",className:"border border-dark"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(z.a,{variant:"danger",children:"New"})," A better way to navigate through the new, simple to use calender UI!",Object(x.jsx)("br",{}),Object(x.jsx)(D.a,{src:P,fluid:!0,width:"30%",height:"30%",className:"border border-dark"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h2",{children:Object(x.jsx)("u",{children:"Navigation:"})}),"Upon launching the software, the current week will be displayed in the UI. In order to navigate throughout the year, the ",Object(x.jsx)("em",{children:"prev"})," and ",Object(x.jsx)("em",{children:"next"})," buttons allow you to cycle through the weeks.",Object(x.jsx)("br",{}),Object(x.jsx)(D.a,{src:Z,fluid:!0,className:"border border-dark"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h2",{children:Object(x.jsx)("u",{children:"Adding Tasks:"})}),"Add mode allows you to create tasks. First, the interface must be in add mode, activated through the radio button located on the top left and indicated by the green header.",Object(x.jsx)("br",{}),Object(x.jsx)(D.a,{src:V,fluid:!0,width:"25%",height:"25%",className:"border border-dark"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Once in Add Mode, a period of time can be selected through pressing on the appropriate cells. Upon hovering over a cell, a pop-over will show what block of time it represents. Don't worry if you miss click, start and end times can be changed in the task creation menu.",Object(x.jsx)("br",{}),Object(x.jsx)(D.a,{src:H,fluid:!0,width:"40%",height:"40%",className:"border border-dark"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Within the menu, your selected values appear in the start and end fields, as well as an entry for the task name. Here you can change your prior selection and enter in your desired task name.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Note: If you press cells that intersect with other tasks, the other tasks will be altered or removed so that the task can be submitted.",Object(x.jsx)("br",{}),Object(x.jsx)(D.a,{src:M,fluid:!0,width:"70%",height:"70%",className:"border border-dark"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h2",{children:Object(x.jsx)("u",{children:"Editing Tasks:"})}),"Edit mode allows you to alter added tasks. First, the interface must be in edit mode, activated through the radio button located on the top left and indicated by the yellow header.",Object(x.jsx)("br",{}),Object(x.jsx)(D.a,{src:"data:image/png;base64,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7KOZ4PeeEm68OL4M7CNzKNkYibV5dr2HRn/mzMB9UisevrLzsY/Ow7+hL/aBurb6JSXr4rD2fgQl3lOCUy7WoacoWdsNe/eBs55/+/DjlHzTGytnKY736Om327LysQvSsHZPoGTlFXW+4EFERKQxO2+HR0WaEx0ePX90ePTc0eFRkYalnjYRERERhTYRERERUWgTERERUWgTEREREYU2EREREVFoExEREVFoExERERGFNhERERFRaBMRERFRaBMRERERhTYRERERhTYRqX+FPnCZusWvNH1hWs9FFNpEGrMW4ZDY7iTanUlT5jgOSZ1KVAiRBuRWCUQa3mXJebhNh237o1UMaZJ6di7k8l6HVAiRBqSeNpFzYMSAHHbktcTtslUMaXLC3DZbdrkYO9RSMUQU2kQat27x8PDINcRGlSi4SZMLbNEeL9Nu30PPRNVDRKFNpAkYNbiQCVdvxHEMLuxQoHPcpFFzHIcenU7i8xbzwE37uONa1USkoRm+L7TvEDmXsvMgdV0i32bFk3MwCss2VJQGlJe7F5/Xq0LUozAzcNHB0H6HGDvUUg+biEKbiIiIiJTS4VERERERhTYRERERUWgTERERUWgTEREREYU2EREREVFoExEREVFoExERERGFNhERERFRaBMRERFpdP4fV4MHzrhTIUoAAAAASUVORK5CYII=",fluid:!0,width:"30%",height:"30%",className:"border border-dark"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"In edit mode, pressing tasks activates the edit menu, which is essentially a modified",Object(x.jsx)("em",{children:" Add Mode "}),"UI.",Object(x.jsx)("br",{}),Object(x.jsx)(D.a,{src:Y,fluid:!0,width:"40%",height:"40%",className:"border border-dark"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Upon submission the current task will be replaced by one with the modified parameters. Intersecting cells will be adjusted just as they did for adding tasks. I think the delete button is self explanatory."]}),Object(x.jsx)(E.a.Footer,{children:Object(x.jsx)(v.a,{variant:"primary",closeButton:!0,onClick:c,children:"Close"})})]})]})};var Q=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],r=t[1],c=function(){r(!a)};return Object(x.jsxs)("div",{children:[Object(x.jsx)(v.a,{variant:"light",onClick:c,className:"mr-sm-2",children:"EULA"}),Object(x.jsxs)(E.a,{show:a,size:"xl",centered:!0,children:[Object(x.jsx)(E.a.Header,{children:Object(x.jsx)(E.a.Title,{children:Object(x.jsx)("h1",{children:"EULA"})})}),Object(x.jsxs)(E.a.Body,{children:[Object(x.jsxs)("h2",{children:["End-User License Agreement (EULA) of ",Object(x.jsx)("span",{class:"app_name",children:"Time Tabler"})]}),Object(x.jsxs)("p",{children:['This End-User License Agreement ("EULA") is a legal agreement between you and ',Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"}),". Our EULA was created by ",Object(x.jsx)("a",{href:"https://www.eulatemplate.com",children:"EULA Template"})," for ",Object(x.jsx)("span",{class:"app_name",children:"Time Tabler"}),"."]}),Object(x.jsxs)("p",{children:["This EULA agreement governs your acquisition and use of our ",Object(x.jsx)("span",{class:"app_name",children:"Time Tabler"}),' software ("Software") directly from ',Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"})," or indirectly through a ",Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"}),' authorized reseller or distributor (a "Reseller"). Our Privacy Policy was created by ',Object(x.jsx)("a",{href:"https://www.generateprivacypolicy.com/",children:"the Privacy Policy Generator"}),"."]}),Object(x.jsxs)("p",{children:["Please read this EULA agreement carefully before completing the installation process and using the ",Object(x.jsx)("span",{class:"app_name",children:"Time Tabler"})," software. It provides a license to use the ",Object(x.jsx)("span",{class:"app_name",children:"Time Tabler"})," software and contains warranty information and liability disclaimers."]}),Object(x.jsxs)("p",{children:["If you register for a free trial of the ",Object(x.jsx)("span",{class:"app_name",children:"Time Tabler"}),' software, this EULA agreement will also govern that trial. By clicking "accept" or installing and/or using the ',Object(x.jsx)("span",{class:"app_name",children:"Time Tabler"})," software, you are confirming your acceptance of the Software and agreeing to become bound by the terms of this EULA agreement."]}),Object(x.jsx)("p",{children:"If you are entering into this EULA agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions. If you do not have such authority or if you do not agree with the terms and conditions of this EULA agreement, do not install or use the Software, and you must not accept this EULA agreement."}),Object(x.jsxs)("p",{children:["This EULA agreement shall apply only to the Software supplied by ",Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"})," herewith regardless of whether other software is referred to or described herein. The terms also apply to any ",Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"})," updates, supplements, Internet-based services, and support services for the Software, unless other terms accompany those items on delivery. If so, those terms apply."]}),Object(x.jsx)("h3",{children:"License Grant"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"})," hereby grants you a personal, non-transferable, non-exclusive licence to use the ",Object(x.jsx)("span",{class:"app_name",children:"Time Tabler"})," software on your devices in accordance with the terms of this EULA agreement."]}),Object(x.jsxs)("p",{children:["You are permitted to load the ",Object(x.jsx)("span",{class:"app_name",children:"Time Tabler"})," software (for example a PC, laptop, mobile or tablet) under your control. You are responsible for ensuring your device meets the minimum requirements of the ",Object(x.jsx)("span",{class:"app_name",children:"Time Tabler"})," software."]}),Object(x.jsx)("p",{children:"You are not permitted to:"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor permit the whole or any part of the Software to be combined with or become incorporated in any other software, nor decompile, disassemble or reverse engineer the Software or attempt to do any such things"}),Object(x.jsx)("li",{children:"Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose"}),Object(x.jsx)("li",{children:"Allow any third party to use the Software on behalf of or for the benefit of any third party"}),Object(x.jsx)("li",{children:"Use the Software in any way which breaches any applicable local, national or international law"}),Object(x.jsxs)("li",{children:["use the Software for any purpose that ",Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"})," considers is a breach of this EULA agreement"]})]}),Object(x.jsx)("h3",{children:"Intellectual Property and Ownership"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"})," shall at all times retain ownership of the Software as originally downloaded by you and all subsequent downloads of the Software by you. The Software (and the copyright, and other intellectual property rights of whatever nature in the Software, including any modifications made thereto) are and shall remain the property of ",Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"}),"."]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"})," reserves the right to grant licences to use the Software to third parties."]}),Object(x.jsx)("h3",{children:"Termination"}),Object(x.jsxs)("p",{children:["This EULA agreement is effective from the date you first use the Software and shall continue until terminated. You may terminate it at any time upon written notice to ",Object(x.jsx)("span",{class:"company_name",children:"Luke.inc"}),"."]}),Object(x.jsx)("p",{children:"It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon such termination, the licenses granted by this EULA agreement will immediately terminate and you agree to stop all access and use of the Software. The provisions that by their nature continue and survive will survive any termination of this EULA agreement."}),Object(x.jsx)("h3",{children:"Governing Law"}),Object(x.jsxs)("p",{children:["This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be governed by and construed in accordance with the laws of ",Object(x.jsx)("span",{class:"country",children:"au"}),"."]})]}),Object(x.jsx)(E.a.Footer,{children:Object(x.jsx)(v.a,{variant:"primary",closeButton:!0,onClick:c,children:"I Accept"})})]})]})},J=a(64);var K=function(e){var t=Object(n.useState)("1"),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),o=i[0],d=i[1],b=function(){var t=J.DateTime.fromSQL(o);e.setNewDate(t)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(U.a,{bg:e.syl(),variant:"dark",children:[Object(x.jsx)(U.a.Brand,{href:"#home",children:"TimeTabler"}),Object(x.jsx)(I.a,{className:"mr-auto",children:Object(x.jsx)(S.a,{toggle:!0,children:[{name:"Add",value:"1"},{name:"Edit",value:"2"}].map((function(t,a){return Object(x.jsx)(B.a,{type:"radio",variant:"dark",name:"radio",value:t.value,checked:r===t.value,onChange:function(t){c(t.currentTarget.value),e.updateFunc(t.currentTarget.value)},children:t.name},a)}))})}),Object(x.jsxs)(R.a,{inline:!0,children:[Object(x.jsx)(R.a.Control,{type:"date",value:o,placeholder:"yyyy-mm-dd",onChange:function(e){return function(e){d(e.target.value)}(e)},className:"mr-sm-2",onKeyPress:function(e){return b()}}),Object(x.jsx)(v.a,{variant:"primary",onClick:b,className:"mr-sm-5",children:"Search"}),Object(x.jsx)(Q,{}),Object(x.jsx)(W,{})]})]})})},q=a(254);var G=function(e){var t={selectionStart:null,selectionEnd:null,day:null,startCell:null,taskName:"",color:"#DCDCDC"},a=Object(n.useState)(t),r=Object(l.a)(a,2),c=r[0],s=r[1],d=Object(n.useState)(e.startDate),b=Object(l.a)(d,2),j=b[0],h=b[1],u=Object(n.useState)(!1),m=Object(l.a)(u,2),O=m[0],y=m[1],E=Object(n.useState)("Add"),w=Object(l.a)(E,2),R=w[0],A=w[1],k=Object(n.useState)({}),N=Object(l.a)(k,2),T=N[0],L=N[1];Object(n.useEffect)((function(){var e={};[0,1,2,3,4,5,6].forEach((function(t){var a=j.plus({day:t-1}).toLocaleString("en-AU",{year:"numeric",month:"numeric",day:"numeric"});T[a]||(e[a]=[{}])})),L(Object(o.a)(Object(o.a)({},T),e))}),[j]);var F=function(e,t){if("Add"===R)null===c.selectionStart||c.day!==t?s(Object(o.a)(Object(o.a)({},c),{},{selectionStart:e.start,day:t,startCell:e})):c.day===t&&(e.end>c.selectionStart?s(Object(o.a)(Object(o.a)({},c),{},{selectionEnd:e.end})):s(Object(o.a)(Object(o.a)({},c),{},{selectionEnd:c.startCell.end,selectionStart:e.start})),y(!0));else{var a=T[t].filter((function(t){return function(t){return t.start<=p(e.start)}(t)&&function(t){return t.end>=p(e.end)}(t)}))[0];a&&(s(Object(o.a)(Object(o.a)({},c),{},{selectionStart:f(a.start),selectionEnd:f(a.end),day:t,startCell:e,taskName:a.task,color:a.color})),"Edit"===R&&y(!0))}},U=function(e,t,a,n,r){var c=T[n];c.splice(0,0,{start:e,end:t,date:e,task:a,color:r}),L(Object(o.a)(Object(o.a)({},T),{},Object(i.a)({},n,c)))},I=function(e,t,a){var n=function(a){return e<=a.start&&a.start<t},r=function(a){return e<a.end&&a.end<=t},c=function(a){return a.start<e&&t<a.end};T[a].filter((function(e){return n(e)||r(e)||c(e)})).map((function(s){n(s)&&r(s)?(console.log(s),S(s.start,s.end,a)):n(s)?(S(s.start,s.end,a),U(t,s.end,s.task,a)):r(s)?(S(s.start,s.end,a),U(s.start,e,s.task,a)):c(s)&&(S(s.start,s.end,a),U(t,s.end,s.task,a),U(s.start,e,s.task,a))}))},S=function(e,t,a){var n=T[a].findIndex((function(a){return parseFloat(a.start)<=parseFloat(p(e))&&parseFloat(a.end)>=parseFloat(p(t))})),r=T[a];r.splice(n,1),r===[]&&(r=[{}]),L(Object(o.a)(Object(o.a)({},T),{},Object(i.a)({},a,r)))},B=function(){s(t),y(!1)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(K,{updateFunc:function(e){switch(e){case"1":A("Add");break;case"2":A("Edit")}B()},setNewDate:function(e){h(e.setLocale("fr-CA").startOf("week"))},thisWeek:function(){h(e.startDate)},syl:function(){return"Add"===R?"success":"Edit"===R?"warning":void 0}}),Object(x.jsxs)("div",{className:"row justify-content-center",style:{height:"100%"},children:[Object(x.jsxs)("div",{className:"col-auto",children:[Object(x.jsx)("br",{}),Object(x.jsx)(q.a,{className:"table mx-auto",children:Object(x.jsx)("tbody",{className:"mx-auto",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"d-flex align-items-center",children:Object(x.jsx)(v.a,{type:"button",className:"box btn btn-dark",onClick:function(){h(j.plus({day:-7}))},children:"Prev"})}),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((function(e,t){var a=j.plus({day:t-1}).toLocaleString("en-AU",{year:"numeric",month:"numeric",day:"numeric"});return Object(x.jsxs)("td",{children:[Object(x.jsxs)("div",{className:"border p-4 bg-dark text-light",children:[Object(x.jsx)("h2",{children:e}),Object(x.jsx)("label",{children:a})]}),Object(x.jsx)("div",{className:"border m-0 p-0",children:Object(x.jsx)(g,{cellFunc:F,date:a,startSelection:[c.startCell,c.day],data:T})})]})})),Object(x.jsx)("td",{className:"d-flex align-items-center",children:Object(x.jsx)(v.a,{type:"button",className:"box btn btn-dark",onClick:function(){h(j.plus({day:7})),console.log(T)},children:"Next"})})]})})})]}),Object(x.jsx)(C,{modalState:O,onHide:B,submit:function(e,a,n){I(p(e.start),p(e.end),c.day),U(p(e.start),p(e.end),a,c.day,n),s(t)},delete:function(){S(p(c.startCell.start),p(c.startCell.end),c.day)},selection:c,text:R})]})]})};var _=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(G,{startDate:J.DateTime.local().setLocale("fr-CA").startOf("week")})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,260)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root")),$()}},[[239,1,2]]]);
//# sourceMappingURL=main.902f7375.chunk.js.map