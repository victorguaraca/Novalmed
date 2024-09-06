"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[8805],{8805:(y,u,e)=>{e.r(u),e.d(u,{AddAppointmentModule:()=>r});var Z=e(6895),c=e(27),A=e(6382),t=e(4650),p=e(3125),f=e(9549),U=e(4385),T=e(3238),n=e(433),g=e(9123);function h(v,o){if(1&v&&(t.TgZ(0,"mat-option",44),t._uU(1),t.qZA()),2&v){const i=o.$implicit;t.Q6J("value",i.value),t.xp6(1),t.hij(" ",i.value," ")}}const b=function(){return{standalone:!0}};class a{constructor(){this.routes=A._,this.selectedList=[{value:"Select Doctor"},{value:"Dr.Bernardo James"},{value:"Dr.Andrea Lalema"},{value:"Dr.William Stephin"}]}static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-add-appointment"]],decls:140,vars:9,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"col-12","col-md-6","col-xl-4"],[1,"form-group","local-forms"],[1,"login-danger"],["type","text",1,"form-control"],[1,"form-group","select-gender"],[1,"gen-label"],[1,"form-check-inline"],[1,"form-check-label"],["type","radio","name","gender",1,"form-check-input"],[1,"col-12","col-md-6","col-xl-6"],["type","email",1,"form-control"],[1,"col-12","col-sm-12"],["rows","3","cols","30",1,"form-control"],["type","text","matInput","",1,"form-control","datetimepicker",3,"matDatepicker"],["picker",""],["matIconSuffix","",3,"for"],[1,"time-icon"],["type","text",1,"form-control",3,"ngxTimepicker"],["default1",""],["default2",""],["placeholder","Select Doctor",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","local-top-form"],[1,"local-top"],[1,"settings-btn","upload-files-avator"],["type","file","accept","image/*","name","image","id","file","onchange","loadFile(event)",1,"hide-input"],["for","file",1,"upload"],[1,"doctor-submit","text-end"],["type","submit",1,"btn","btn-primary","submit-form","me-2"],["type","submit",1,"btn","btn-primary","cancel-form"],[3,"value"]],template:function(i,d){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Appointment "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Book Appointment"),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"form")(18,"div",3)(19,"div",12)(20,"div",13)(21,"h4"),t._uU(22,"Patient Details"),t.qZA()()(),t.TgZ(23,"div",14)(24,"div",15)(25,"label"),t._uU(26,"First Name "),t.TgZ(27,"span",16),t._uU(28,"*"),t.qZA()(),t._UZ(29,"input",17),t.qZA()(),t.TgZ(30,"div",14)(31,"div",15)(32,"label"),t._uU(33,"Last Name "),t.TgZ(34,"span",16),t._uU(35,"*"),t.qZA()(),t._UZ(36,"input",17),t.qZA()(),t.TgZ(37,"div",14)(38,"div",18)(39,"label",19),t._uU(40,"Gender"),t.TgZ(41,"span",16),t._uU(42,"*"),t.qZA()(),t.TgZ(43,"div",20)(44,"label",21),t._UZ(45,"input",22),t._uU(46,"Male "),t.qZA()(),t.TgZ(47,"div",20)(48,"label",21),t._UZ(49,"input",22),t._uU(50,"Female "),t.qZA()()()(),t.TgZ(51,"div",23)(52,"div",15)(53,"label"),t._uU(54,"Mobile "),t.TgZ(55,"span",16),t._uU(56,"*"),t.qZA()(),t._UZ(57,"input",17),t.qZA()(),t.TgZ(58,"div",23)(59,"div",15)(60,"label"),t._uU(61,"Email "),t.TgZ(62,"span",16),t._uU(63,"*"),t.qZA()(),t._UZ(64,"input",24),t.qZA()(),t.TgZ(65,"div",25)(66,"div",15)(67,"label"),t._uU(68,"Address "),t.TgZ(69,"span",16),t._uU(70,"*"),t.qZA()(),t._UZ(71,"textarea",26),t.qZA()(),t.TgZ(72,"div",12)(73,"div",13)(74,"h4"),t._uU(75,"Appointment Details"),t.qZA()()(),t.TgZ(76,"div",14)(77,"div",15)(78,"label"),t._uU(79,"Date of Appointment "),t.TgZ(80,"span",16),t._uU(81,"*"),t.qZA()(),t._UZ(82,"input",27)(83,"mat-datepicker",null,28)(85,"mat-datepicker-toggle",29),t.qZA()(),t.TgZ(86,"div",14)(87,"div",15)(88,"label"),t._uU(89,"From "),t.TgZ(90,"span",16),t._uU(91,"*"),t.qZA()(),t.TgZ(92,"div",30),t._UZ(93,"input",31)(94,"ngx-material-timepicker",null,32),t.qZA()()(),t.TgZ(96,"div",14)(97,"div",15)(98,"label"),t._uU(99,"To "),t.TgZ(100,"span",16),t._uU(101,"*"),t.qZA()(),t.TgZ(102,"div",30),t._UZ(103,"input",31)(104,"ngx-material-timepicker",null,33),t.qZA()()(),t.TgZ(106,"div",23)(107,"div",15)(108,"label"),t._uU(109,"Consulting Doctor"),t.qZA(),t.TgZ(110,"mat-select",34),t.NdJ("ngModelChange",function(s){return d.selectedValue=s}),t.YNc(111,h,2,2,"mat-option",35),t.qZA()()(),t.TgZ(112,"div",23)(113,"div",15)(114,"label"),t._uU(115,"Treatment "),t.qZA(),t._UZ(116,"input",17),t.qZA()(),t.TgZ(117,"div",25)(118,"div",15)(119,"label"),t._uU(120,"Notes "),t.TgZ(121,"span",16),t._uU(122,"*"),t.qZA()(),t._UZ(123,"textarea",26),t.qZA()(),t.TgZ(124,"div",23)(125,"div",36)(126,"label",37),t._uU(127,"Avatar "),t.TgZ(128,"span",16),t._uU(129,"*"),t.qZA()(),t.TgZ(130,"div",38),t._UZ(131,"input",39),t.TgZ(132,"label",40),t._uU(133,"Choose File"),t.qZA()()()(),t.TgZ(134,"div",12)(135,"div",41)(136,"button",42),t._uU(137,"Submit"),t.qZA(),t.TgZ(138,"button",43),t._uU(139,"Cancel"),t.qZA()()()()()()()()()()()),2&i){const m=t.MAs(84),s=t.MAs(95),x=t.MAs(105);t.xp6(7),t.Q6J("routerLink",d.routes.appointmentList),t.xp6(75),t.Q6J("matDatepicker",m),t.xp6(3),t.Q6J("for",m),t.xp6(8),t.Q6J("ngxTimepicker",s),t.xp6(10),t.Q6J("ngxTimepicker",x),t.xp6(7),t.Q6J("ngModel",d.selectedValue)("ngModelOptions",t.DdM(8,b)),t.xp6(1),t.Q6J("ngForOf",d.selectedList)}},dependencies:[Z.sg,c.rH,p.Mq,p.hl,p.nW,f.R9,U.gD,T.ey,n._Y,n.JJ,n.JL,n.On,n.F,g.ro,g.I2]})}const q=[{path:"",component:a}];class l{static#t=this.\u0275fac=function(i){return new(i||l)};static#e=this.\u0275mod=t.oAB({type:l});static#i=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(q),c.Bz]})}var _=e(9079);class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275mod=t.oAB({type:r});static#i=this.\u0275inj=t.cJS({imports:[Z.ez,l,_.m]})}}}]);