"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[6225],{6225:(y,u,s)=>{s.r(u),s.d(u,{AppointmentListModule:()=>g});var l=s(6895),m=s(27),A=s(7155),f=s(6382),t=s(4650),v=s(7945),_=s(6308),h=s(433);function T(r,i){if(1&r&&(t.TgZ(0,"tr")(1,"td")(2,"div",36),t._UZ(3,"input",37),t.qZA()(),t.TgZ(4,"td",55)(5,"a",7),t._UZ(6,"img",56),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"a",31),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td",57)(22,"div",58)(23,"a",59),t._UZ(24,"i",60),t.qZA(),t.TgZ(25,"div",61)(26,"a",62),t._UZ(27,"i",63),t._uU(28," Edit"),t.qZA(),t.TgZ(29,"a",64),t._UZ(30,"i",65),t._uU(31," Delete"),t.qZA()()()()()),2&r){const e=i.$implicit,a=t.oxw();t.xp6(5),t.Q6J("routerLink",a.routes.profile),t.xp6(1),t.Q6J("src",e.img,t.LSH),t.xp6(1),t.hij(" ",e.name,""),t.xp6(2),t.Oqu(e.consultingDoctor),t.xp6(2),t.Oqu(e.treatment),t.xp6(3),t.Oqu(e.mobile),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.time),t.xp6(6),t.Q6J("routerLink",a.routes.editAppointment)}}function b(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"li",67),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.moveToPage(n.currentPage-2))}),t.TgZ(1,"a",68),t._uU(2," ... "),t.qZA()()}if(2&r){const e=t.oxw(2);t.Q6J("hidden",1===e.currentPage)}}function U(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"li",67),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.moveToPage(n.currentPage+2))}),t.TgZ(1,"a",68),t._uU(2," ... "),t.qZA()()}if(2&r){const e=t.oxw(2);t.Q6J("hidden",e.currentPage>=e.pageNumberArray[e.pageNumberArray.length-2]||e.totalData<e.serialNumberArray[e.serialNumberArray.length-1])}}function q(r,i){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",52)(2,"a",54),t.NdJ("click",function(){const o=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.moveToPage(o))}),t._uU(3),t.qZA()(),t.YNc(4,b,3,1,"li",66),t.YNc(5,U,3,1,"li",66),t.BQk()}if(2&r){const e=i.$implicit,a=i.index,n=t.oxw();t.xp6(1),t.ekj("active",e===n.currentPage),t.Q6J("ngClass",n.pageNumberArray[n.currentPage-2]>e&&1!==e&&n.pageNumberArray.length>6||n.pageNumberArray[n.currentPage]<e&&1!==e&&n.pageNumberArray.length>6&&n.pageNumberArray.length!==e?"hide-page-no":"show-page-no"),t.xp6(2),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngIf",0===a&&n.pageNumberArray.length>6&&n.currentPage>2),t.xp6(1),t.Q6J("ngIf",a===n.pageNumberArray.length-2&&n.pageNumberArray.length>6)}}const Z=function(r){return{disabled:r}};class p{constructor(i){this.data=i,this.routes=f._,this.appointmentList=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0}ngOnInit(){this.getTableData()}getTableData(){this.appointmentList=[],this.serialNumberArray=[],this.data.getAppointmentList().subscribe(i=>{this.totalData=i.totalData,i.data.map((e,a)=>{var n=a+1;a>=this.skip&&n<=this.limit&&(this.appointmentList.push(e),this.serialNumberArray.push(n))}),this.dataSource=new A.by(this.appointmentList),this.calculateTotalPages(this.totalData,this.pageSize)})}searchData(i){this.dataSource.filter=i.trim().toLowerCase(),this.appointmentList=this.dataSource.filteredData}sortData(i){const e=this.appointmentList.slice();this.appointmentList=i.active&&""!==i.direction?e.sort((a,n)=>(a[i.active]<n[i.active]?-1:1)*("asc"===i.direction?1:-1)):e}getMoreData(i){"next"==i?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==i&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(i){this.currentPage=i,this.skip=this.pageSelection[i-1].skip,this.limit=this.pageSelection[i-1].limit,i>this.currentPage?this.pageIndex=i-1:i<this.currentPage&&(this.pageIndex=i+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(i,e){this.pageNumberArray=[],this.totalPages=i/e,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var a=1;a<=this.totalPages;a++){var n=e*a,o=n-e;this.pageNumberArray.push(a),this.pageSelection.push({skip:o,limit:n})}}static#t=this.\u0275fac=function(e){return new(e||p)(t.Y36(v.D))};static#e=this.\u0275cmp=t.Xpm({type:p,selectors:[["app-appointment-list"]],decls:80,vars:14,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],[1,"btn","btn-primary","add-pluss","ms-2",3,"routerLink"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","checkbox"],[1,"form-check","check-tables"],["type","checkbox","value","something",1,"form-check-input"],["mat-sort-header","name"],["mat-sort-header","consultingDoctor"],["mat-sort-header","treatment"],["mat-sort-header","mobile"],["mat-sort-header","email"],["mat-sort-header","date"],["mat-sort-header","time"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],[1,"profile-image"],["width","28","height","28","alt","",1,"rounded-circle","m-r-5",3,"src"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_patient",1,"dropdown-item"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Appointment "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Appointment List"),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),t._uU(22,"Appointment"),t.qZA(),t.TgZ(23,"div",16)(24,"div",17)(25,"input",18),t.NdJ("ngModelChange",function(o){return a.searchDataValue=o})("ngModelChange",function(){return a.searchData(a.searchDataValue)}),t.qZA(),t.TgZ(26,"a",19),t._UZ(27,"img",20),t.qZA()(),t.TgZ(28,"div",21)(29,"a",22),t._UZ(30,"img",23),t.qZA(),t.TgZ(31,"a",24),t._UZ(32,"img",25),t.qZA()()()()(),t.TgZ(33,"div",26)(34,"a",27),t._UZ(35,"img",28),t.qZA(),t.TgZ(36,"a",27),t._UZ(37,"img",29),t.qZA(),t.TgZ(38,"a",27),t._UZ(39,"img",30),t.qZA(),t.TgZ(40,"a",31),t._UZ(41,"img",32),t.qZA()()()(),t.TgZ(42,"div",33)(43,"table",34),t.NdJ("matSortChange",function(o){return a.sortData(o)}),t.TgZ(44,"thead")(45,"tr")(46,"th",35)(47,"div",36),t._UZ(48,"input",37),t.qZA()(),t.TgZ(49,"th",38),t._uU(50,"Name"),t.qZA(),t.TgZ(51,"th",39),t._uU(52,"Consulting Doctor"),t.qZA(),t.TgZ(53,"th",40),t._uU(54,"Treatment"),t.qZA(),t.TgZ(55,"th",41),t._uU(56,"Mobile"),t.qZA(),t.TgZ(57,"th",42),t._uU(58,"Email"),t.qZA(),t.TgZ(59,"th",43),t._uU(60,"Date"),t.qZA(),t.TgZ(61,"th",44),t._uU(62,"Time"),t.qZA(),t._UZ(63,"th"),t.qZA()(),t.TgZ(64,"tbody"),t.YNc(65,T,32,10,"tr",45),t.qZA()(),t.TgZ(66,"div",46)(67,"div",47)(68,"div",48),t._uU(69),t.qZA()(),t.TgZ(70,"div",49)(71,"div",50)(72,"ul",51)(73,"li",52)(74,"a",53),t.NdJ("click",function(){return a.getMoreData("previous")}),t._uU(75,"Previous"),t.qZA()(),t.YNc(76,q,6,6,"ng-container",45),t.TgZ(77,"li",52)(78,"a",54),t.NdJ("click",function(){return a.getMoreData("next")}),t._uU(79,"Next "),t.qZA()()()()()()()()()()()()()),2&e&&(t.xp6(7),t.Q6J("routerLink",a.routes.appointmentList),t.xp6(18),t.Q6J("ngModel",a.searchDataValue),t.xp6(4),t.Q6J("routerLink",a.routes.addAppointment),t.xp6(36),t.Q6J("ngForOf",a.appointmentList),t.xp6(4),t.lnq(" Showing ",a.serialNumberArray[0]," to ",a.serialNumberArray[a.serialNumberArray.length-1]," of ",a.totalData," entries "),t.xp6(4),t.Q6J("ngClass",t.VKq(10,Z,1===a.currentPage)),t.xp6(3),t.Q6J("ngForOf",a.pageNumberArray),t.xp6(1),t.Q6J("ngClass",t.VKq(12,Z,a.currentPage===a.pageNumberArray[a.pageNumberArray.length-1]||0===a.appointmentList.length)))},dependencies:[l.mk,l.sg,l.O5,m.rH,_.YE,_.nU,h.Fj,h.JJ,h.On]})}const k=[{path:"",component:p}];class c{static#t=this.\u0275fac=function(e){return new(e||c)};static#e=this.\u0275mod=t.oAB({type:c});static#a=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(k),m.Bz]})}var x=s(9079);class g{static#t=this.\u0275fac=function(e){return new(e||g)};static#e=this.\u0275mod=t.oAB({type:g});static#a=this.\u0275inj=t.cJS({imports:[l.ez,c,x.m]})}}}]);