"use strict";(self.webpackChunklorax=self.webpackChunklorax||[]).push([[421],{2421:(te,p,d)=>{d.r(p),d.d(p,{AuthenticationModule:()=>ee});var l=d(6814),i=d(6223),m=d(1896),f=d(2589),e=d(5879),v=d(8319),u=d(2296),c=d(617);function b(t,r){if(1&t&&(e.TgZ(0,"div",34),e._uU(1),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Oqu(s.error)}}function w(t,r){1&t&&(e.TgZ(0,"div")(1,"mat-icon",37),e._uU(2,"info"),e.qZA(),e.TgZ(3,"span",38),e._uU(4,"Email is required"),e.qZA()())}function T(t,r){1&t&&(e.TgZ(0,"div")(1,"mat-icon",37),e._uU(2,"info"),e.qZA(),e.TgZ(3,"span",38),e._uU(4," Email must be a valid email address"),e.qZA()())}function A(t,r){if(1&t&&(e.TgZ(0,"div",35),e.YNc(1,w,5,0,"div",36),e.YNc(2,T,5,0,"div",36),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.form.email.errors.required),e.xp6(1),e.Q6J("ngIf",s.form.email.errors.email)}}function q(t,r){1&t&&(e.TgZ(0,"div")(1,"mat-icon",37),e._uU(2,"info"),e.qZA(),e.TgZ(3,"span",38),e._uU(4,"Password is required"),e.qZA()())}function U(t,r){if(1&t&&(e.TgZ(0,"div",35),e.YNc(1,q,5,0,"div",36),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.form.password.errors.required)}}const _=function(t){return{"is-invalid":t}};let x=(()=>{var t;class r extends f.n{toggleIcon(){this.showIcon=!this.showIcon}constructor(n,o,a){super(),this.formBuilder=n,this.router=o,this.authService=a,this.submitted=!1,this.error="",this.hide=!0,this.showIcon=!0}ngOnInit(){this.loginForm=this.formBuilder.group({email:["admin@lorax.com",[i.kI.required,i.kI.email,i.kI.minLength(5)]],password:["admin",i.kI.required]})}get form(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.error="",this.loginForm.invalid?this.error="Username and Password not valid !":this.subs.sink=this.authService.login(this.form.email.value,this.form.password.value).subscribe(n=>{n?this.authService.currentUserValue.token&&this.router.navigate(["/dashboard/main"]):this.error="Invalid Login"},n=>{this.error=n,this.submitted=!1})}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(i.QS),e.Y36(m.F0),e.Y36(v.e8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-signin"]],features:[e.qOj],decls:50,vars:11,consts:[[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-6"],[1,"auth-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-left","p-2"],["src","assets/images/banner-image/ark_logo-Big_onboarding.svg","alt","logo-full"],[1,"mt-5"],[1,"font-18","text--1A1A1A","fw-600","mt-4"],[1,"text-muted"],[1,"p-2","mt-1"],[3,"formGroup","ngSubmit"],["class","alert alert-danger mb-3 mt-0",4,"ngIf"],[1,"form-label"],[1,"form-group","auth-form-group","mb-4"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control","auth-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control","auth-control",3,"ngClass"],[1,"pwd-icon",3,"click"],[1,"flex-sb-m","w-full","p-b-20"],[1,"form-check"],[1,"form-check-label","font-16","text--919AA3"],["type","checkbox","value","",1,"form-check-input"],[1,"form-check-sign"],[1,"check"],["routerLink","/authentication/forgot-password",1,"text--919AA3","text-decoration-underline","font-16"],[1,"container-login100-form-btn"],["mat-raised-button","","type","submit",1,"login100-form-btn"],[1,"auth-bg"],[1,"bottom-text"],[1,"text-fff","font-36","font-weight-medium","text-center"],[1,"text-fff","font-18","fw-400","text-center","mt-3"],[1,"alert","alert-danger","mb-3","mt-0"],[1,"invalid-feedback"],[4,"ngIf"],[1,"mat-info-icon"],[1,"aligned-with-icon"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div")(8,"div",7),e._UZ(9,"img",8),e.TgZ(10,"div",9)(11,"h4",10),e._uU(12,"A tailored caregiver intervention program"),e.qZA(),e.TgZ(13,"p",11),e._uU(14,"Please login to your account"),e.qZA()()(),e.TgZ(15,"div",12)(16,"form",13),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.YNc(17,b,2,1,"div",14),e.TgZ(18,"label",15),e._uU(19,"Email"),e.qZA(),e.TgZ(20,"div",16),e._UZ(21,"input",17),e.YNc(22,A,3,2,"div",18),e.qZA(),e.TgZ(23,"label",15),e._uU(24,"Password"),e.qZA(),e.TgZ(25,"div",16),e._UZ(26,"input",19),e.TgZ(27,"mat-icon",20),e.NdJ("click",function(){return o.toggleIcon()}),e._uU(28),e.qZA(),e.YNc(29,U,2,1,"div",18),e.qZA(),e.TgZ(30,"div",21)(31,"div",22)(32,"label",23),e._UZ(33,"input",24),e._uU(34," Remember me "),e.TgZ(35,"span",25),e._UZ(36,"span",26),e.qZA()()(),e.TgZ(37,"div")(38,"a",27),e._uU(39,"Forgot Password?"),e.qZA()()(),e.TgZ(40,"div",28)(41,"button",29),e._uU(42," Login "),e.qZA()()()()()()()()()(),e.TgZ(43,"div",2)(44,"div",30)(45,"div",31)(46,"h3",32),e._uU(47,"Advancing the Care Continuum"),e.qZA(),e.TgZ(48,"p",33),e._uU(49,"PATH is a freely accessible, evidence-based assessment tool that is designed to assess caregiver\u2019s preparedness to transition patients home."),e.qZA()()()()()()),2&n&&(e.xp6(16),e.Q6J("formGroup",o.loginForm),e.xp6(1),e.Q6J("ngIf",o.error),e.xp6(4),e.Q6J("ngClass",e.VKq(7,_,o.submitted&&o.form.email.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.form.email.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(9,_,o.submitted&&o.form.password.errors)),e.xp6(2),e.Oqu(o.showIcon?"visibility":"visibility_off"),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.form.password.errors))},dependencies:[l.mk,l.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.rH,u.lW,c.Hw]}),r})();var h=d(4170);function C(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function k(t,r){if(1&t&&(e.TgZ(0,"div",36),e.YNc(1,C,2,0,"div",37),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.form.username.errors.required)}}function I(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function S(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email must be a valid email address"),e.qZA())}function J(t,r){if(1&t&&(e.TgZ(0,"div",36),e.YNc(1,I,2,0,"div",37),e.YNc(2,S,2,0,"div",37),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.form.email.errors.required),e.xp6(1),e.Q6J("ngIf",s.form.email.errors.email)}}function y(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function F(t,r){if(1&t&&(e.TgZ(0,"div",36),e.YNc(1,y,2,0,"div",37),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.form.password.errors.required)}}function P(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Confirm Password is required"),e.qZA())}function Y(t,r){if(1&t&&(e.TgZ(0,"div",36),e.YNc(1,P,2,0,"div",37),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.form.cpassword.errors.required)}}const g=function(t){return{"is-invalid":t}};let N=(()=>{var t;class r{constructor(n,o,a){this.formBuilder=n,this.route=o,this.router=a,this.submitted=!1,this.hide=!0,this.chide=!0}ngOnInit(){this.loginForm=this.formBuilder.group({username:["",i.kI.required],email:["",[i.kI.required,i.kI.email,i.kI.minLength(5)]],password:["",i.kI.required],cpassword:["",i.kI.required]})}get form(){return this.loginForm.controls}onSubmit(){this.submitted=!0,!this.loginForm.invalid&&this.router.navigate(["/dashboard/main"])}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(i.QS),e.Y36(m.gz),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-signup"]],decls:66,vars:17,consts:[[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-6"],[1,"auth-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo-full"],["src","assets/images/logo-full.png","alt","logo-full"],[1,"font-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[3,"formGroup","ngSubmit"],[1,"form-group","auth-form-group","mb-4"],["matSuffix","",1,"auth-page-icon"],["type","text","formControlName","username","id","username","placeholder","Username",1,"form-control","auth-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control","auth-control",3,"ngClass"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control","auth-control",3,"ngClass"],["type","password","formControlName","cpassword","id","cpassword","placeholder","Confirm Password",1,"form-control","auth-control",3,"ngClass"],[1,"flex-sb-m","w-full","p-t-15","p-b-20"],["routerLink","/authentication/signin"],[1,"container-login100-form-btn"],["mat-raised-button","","color","primary","type","submit",1,"login100-form-btn"],[1,"mt-3","text-center"],[1,"list-unstyled","social-icon","mb-0","mt-3"],[1,"list-inline-item","m-2"],["href","javascript:void(0)",1,"rounded"],[1,"fab","fa-google"],["href","javascript:void(0)",1,"rounded","flex-c-m"],[1,"fab","fa-facebook-f"],[1,"fab","fa-twitter"],[1,"fab","fa-linkedin-in"],[1,"auth-bg"],[1,"bg-overlay"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div")(8,"div",7)(9,"div")(10,"a",8),e._UZ(11,"img",9),e.qZA()(),e.TgZ(12,"h4",10),e._uU(13,"Register New User"),e.qZA(),e.TgZ(14,"p",11),e._uU(15,"Lifetime Free Account."),e.qZA()(),e.TgZ(16,"div",12)(17,"form",13),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(18,"div",14)(19,"mat-icon",15),e._uU(20,"face"),e.qZA(),e._UZ(21,"input",16),e.YNc(22,k,2,1,"div",17),e.qZA(),e.TgZ(23,"div",14)(24,"mat-icon",15),e._uU(25,"email"),e.qZA(),e._UZ(26,"input",18),e.YNc(27,J,3,2,"div",17),e.qZA(),e.TgZ(28,"div",14)(29,"mat-icon",15),e._uU(30,"vpn_key"),e.qZA(),e._UZ(31,"input",19),e.YNc(32,F,2,1,"div",17),e.qZA(),e.TgZ(33,"div",14)(34,"mat-icon",15),e._uU(35,"vpn_key"),e.qZA(),e._UZ(36,"input",20),e.YNc(37,Y,2,1,"div",17),e.qZA(),e.TgZ(38,"div",21)(39,"div")(40,"span"),e._uU(41,"Already Registered? "),e.TgZ(42,"a",22),e._uU(43," Login "),e.qZA()()()(),e.TgZ(44,"div",23)(45,"button",24),e._uU(46," Register "),e.qZA()()()(),e.TgZ(47,"div",25)(48,"p"),e._uU(49," or sign up using "),e.qZA(),e.TgZ(50,"ul",26)(51,"li",27)(52,"a",28),e._UZ(53,"i",29),e.qZA()(),e.TgZ(54,"li",27)(55,"a",30),e._UZ(56,"i",31),e.qZA()(),e.TgZ(57,"li",27)(58,"a",28),e._UZ(59,"i",32),e.qZA()(),e.TgZ(60,"li",27)(61,"a",28),e._UZ(62,"i",33),e.qZA()()()()()()()()()(),e.TgZ(63,"div",2)(64,"div",34),e._UZ(65,"div",35),e.qZA()()()()),2&n&&(e.xp6(17),e.Q6J("formGroup",o.loginForm),e.xp6(4),e.Q6J("ngClass",e.VKq(9,g,o.submitted&&o.form.username.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.form.username.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(11,g,o.submitted&&o.form.email.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.form.email.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(13,g,o.submitted&&o.form.password.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.form.password.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(15,g,o.submitted&&o.form.cpassword.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.form.cpassword.errors))},dependencies:[l.mk,l.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.rH,u.lW,h.R9,c.Hw]}),r})();function Q(t,r){1&t&&(e.TgZ(0,"div")(1,"mat-icon",28),e._uU(2,"info"),e.qZA(),e.TgZ(3,"span",29),e._uU(4,"Email is required"),e.qZA()())}function L(t,r){1&t&&(e.TgZ(0,"div")(1,"mat-icon",28),e._uU(2,"info"),e.qZA(),e.TgZ(3,"span",29),e._uU(4,"Email must be a valid email address"),e.qZA()())}function R(t,r){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,Q,5,0,"div",27),e.YNc(2,L,5,0,"div",27),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.form.email.errors.required),e.xp6(1),e.Q6J("ngIf",s.form.email.errors.email)}}const O=function(t){return{"is-invalid":t}};let j=(()=>{var t;class r{constructor(n,o,a){this.formBuilder=n,this.route=o,this.router=a,this.submitted=!1}ngOnInit(){this.loginForm=this.formBuilder.group({email:["",[i.kI.required,i.kI.email,i.kI.minLength(5)]]})}get form(){return this.loginForm.controls}onSubmit(){this.submitted=!0,!this.loginForm.invalid&&this.router.navigate(["authentication/reset-password"])}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(i.QS),e.Y36(m.gz),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-forgot-password"]],decls:35,vars:5,consts:[[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-6"],[1,"auth-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-left","p-2"],["src","assets/images/banner-image/ark_logo-Big_onboarding.svg","alt","logo-full"],[1,"mt-5"],[1,"font-18","text--1A1A1A","fw-600","mt-4"],[1,"text-muted"],[1,"p-2"],[3,"formGroup","ngSubmit"],[1,"form-label"],[1,"form-group","auth-form-group","mb-4"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control","auth-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"container-login100-form-btn"],["mat-raised-button","","color","primary",1,"login100-form-btn"],[1,"mt-2","text-center"],["routerLink","/authentication/signin",1,"text-decoration-underline","font-weight-medium","text--919AA3"],[1,"auth-bg"],[1,"bottom-text"],[1,"text-fff","font-36","font-weight-medium","text-center"],[1,"text-fff","font-18","fw-400","text-center","mt-3"],[1,"invalid-feedback"],[4,"ngIf"],[1,"mat-info-icon"],[1,"aligned-with-icon"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div")(8,"div",7),e._UZ(9,"img",8),e.TgZ(10,"div",9)(11,"h4",10),e._uU(12,"Forgot your Password"),e.qZA(),e.TgZ(13,"p",11),e._uU(14,"Enter your registered email address"),e.qZA()()(),e.TgZ(15,"div",12)(16,"form",13),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(17,"label",14),e._uU(18,"Email"),e.qZA(),e.TgZ(19,"div",15),e._UZ(20,"input",16),e.YNc(21,R,3,2,"div",17),e.qZA(),e.TgZ(22,"div",18)(23,"button",19),e._uU(24," Send Reset Link "),e.qZA()()()(),e.TgZ(25,"div",20)(26,"a",21),e._uU(27," Sign In "),e.qZA()()()()()()()(),e.TgZ(28,"div",2)(29,"div",22)(30,"div",23)(31,"h3",24),e._uU(32,"Advancing the Care Continuum"),e.qZA(),e.TgZ(33,"p",25),e._uU(34,"PATH is a freely accessible, evidence-based assessment tool that is designed to assess caregiver\u2019s preparedness to transition patients home."),e.qZA()()()()()()),2&n&&(e.xp6(16),e.Q6J("formGroup",o.loginForm),e.xp6(4),e.Q6J("ngClass",e.VKq(3,O,o.submitted&&o.form.email.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.form.email.errors))},dependencies:[l.mk,l.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.rH,u.lW,c.Hw]}),r})();function B(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function H(t,r){if(1&t&&(e.TgZ(0,"div",42),e.YNc(1,B,2,0,"div",43),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.form.password.errors.required)}}const E=function(t){return{"is-invalid":t}};let V=(()=>{var t;class r{constructor(n,o){this.formBuilder=n,this.router=o,this.submitted=!1,this.hide=!0}ngOnInit(){this.loginForm=this.formBuilder.group({password:["",i.kI.required]})}get form(){return this.loginForm.controls}onSubmit(){this.submitted=!0,!this.loginForm.invalid&&this.router.navigate(["/dashboard/main"])}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(i.QS),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-locked"]],decls:57,vars:5,consts:[[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"auth-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo-full"],["src","assets/images/logo-full.png","alt","logo-full"],[1,"font-20","mt-4"],[1,"text-muted"],[1,"login100-form-logo"],[1,"image"],["src","assets/images/usrbig.jpg","alt","User"],[1,"auth-user-name","font-20","p-b-10","p-t-27"],[1,"txt1"],[1,"p-2","mt-5"],[3,"formGroup","ngSubmit"],[1,"form-group","auth-form-group","mb-4"],["matSuffix","",1,"auth-page-icon"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control","auth-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"flex-sb-m","w-full","p-t-15","p-b-20"],[1,"form-check"],[1,"form-check-label"],["type","checkbox","value","",1,"form-check-input"],[1,"form-check-sign"],[1,"check"],["routerLink","/authentication/forgot-password",1,"txt1"],[1,"container-login100-form-btn"],["mat-raised-button","","color","primary","type","submit",1,"login100-form-btn"],[1,"mt-5","text-center"],["routerLink","/authentication/signup",1,"font-weight-medium","text-primary"],[1,"login100-form-social","flex-c-m"],["href","#",1,"login100-form-social-item","flex-c-m","bg1","m-r-5"],[1,"fab","fa-facebook-f"],["href","#",1,"login100-form-social-item","flex-c-m","bg2","m-r-5"],[1,"fab","fa-twitter"],[1,"col-lg-8"],[1,"auth-bg"],[1,"bg-overlay"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div")(8,"div",7)(9,"div")(10,"a",8),e._UZ(11,"img",9),e.qZA()(),e.TgZ(12,"h4",10),e._uU(13,"Lock screen"),e.qZA(),e.TgZ(14,"p",11),e._uU(15,"Enter valid password to unlock the screen."),e.qZA()(),e.TgZ(16,"div",12)(17,"div",13),e._UZ(18,"img",14),e.qZA()(),e.TgZ(19,"span",15),e._uU(20," Emily Smith "),e.qZA(),e.TgZ(21,"div",7)(22,"p",16),e._uU(23," Locked "),e.qZA()(),e.TgZ(24,"div",17)(25,"form",18),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(26,"div",19)(27,"mat-icon",20),e._uU(28,"vpn_key"),e.qZA(),e._UZ(29,"input",21),e.YNc(30,H,2,1,"div",22),e.qZA(),e.TgZ(31,"div",23)(32,"div",24)(33,"label",25),e._UZ(34,"input",26),e._uU(35," Remember me "),e.TgZ(36,"span",27),e._UZ(37,"span",28),e.qZA()()(),e.TgZ(38,"div")(39,"a",29),e._uU(40,"Forgot Password?"),e.qZA()()(),e.TgZ(41,"div",30)(42,"button",31),e._uU(43," Login "),e.qZA()()()(),e.TgZ(44,"div",32)(45,"p"),e._uU(46,"Don't have an account ? "),e.TgZ(47,"a",33),e._uU(48," Register "),e.qZA()(),e.TgZ(49,"div",34)(50,"a",35),e._UZ(51,"i",36),e.qZA(),e.TgZ(52,"a",37),e._UZ(53,"i",38),e.qZA()()()()()()()()(),e.TgZ(54,"div",39)(55,"div",40),e._UZ(56,"div",41),e.qZA()()()()),2&n&&(e.xp6(25),e.Q6J("formGroup",o.loginForm),e.xp6(4),e.Q6J("ngClass",e.VKq(3,E,o.submitted&&o.form.password.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.form.password.errors))},dependencies:[l.mk,l.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.rH,u.lW,h.R9,c.Hw]}),r})();var G=d(9182);let K=(()=>{var t;class r{constructor(n){this.router=n}submit(){this.router.navigate(["/authentication/signin"])}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-page500"]],decls:16,vars:0,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],[1,"login100-form"],[1,"error-header","p-b-45"],[1,"error-subheader2","p-b-5"],[1,"container-login100-form-btn","p-t-30"],["mat-raised-button","","color","primary",1,"login100-form-btn",3,"click"],[1,"w-full","p-t-15","p-b-15","text-center"],["href","#",1,"txt1"],[1,"login100-more",2,"background-image","url('assets/images/pages/bg-03.png')"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"span",4),e._uU(5," 500 "),e.qZA(),e.TgZ(6,"span",5),e._uU(7," Oops, Something went wrong. Please try after some times. "),e.qZA(),e.TgZ(8,"div",6)(9,"button",7),e.NdJ("click",function(){return o.submit()}),e._uU(10," Go To Home Page "),e.qZA()(),e.TgZ(11,"div",8)(12,"div")(13,"a",9),e._uU(14," Need Help? "),e.qZA()()()(),e._UZ(15,"div",10),e.qZA()()())},dependencies:[i._Y,i.JL,i.F,u.lW]}),r})();function M(t,r){1&t&&e._UZ(0,"div",27)}function X(t,r){1&t&&(e.TgZ(0,"div")(1,"mat-icon",29),e._uU(2,"info"),e.qZA(),e.TgZ(3,"span",30),e._uU(4,"The passwords do not match. Please try again."),e.qZA()())}function W(t,r){if(1&t&&(e.TgZ(0,"div",27),e.YNc(1,X,5,0,"div",28),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.form.password.errors.required)}}const Z=function(t){return{"is-invalid":t}},z=[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"signin",component:x},{path:"signup",component:N},{path:"forgot-password",component:j},{path:"reset-password",component:(()=>{var t;class r extends f.n{toggleIcon1(){this.showIcon1=!this.showIcon1}toggleIcon2(){this.showIcon2=!this.showIcon2}constructor(n,o,a){super(),this.formBuilder=n,this.router=o,this.authService=a,this.submitted=!1,this.error="",this.hide=!0,this.showIcon1=!0,this.showIcon2=!0}ngOnInit(){this.loginForm=this.formBuilder.group({email:["admin@lorax.com",[i.kI.required,i.kI.email,i.kI.minLength(5)]],password:["admin",i.kI.required]})}get form(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.error="",this.loginForm.invalid?this.error="Username and Password not valid !":this.subs.sink=this.authService.login(this.form.email.value,this.form.password.value).subscribe(n=>{n?this.authService.currentUserValue.token&&this.router.navigate(["/dashboard/main"]):this.error="Invalid Login"},n=>{this.error=n,this.submitted=!1})}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(i.QS),e.Y36(m.F0),e.Y36(v.e8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reset-password"]],features:[e.qOj],decls:44,vars:11,consts:[[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-6"],[1,"auth-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-left","p-2"],["src","assets/images/banner-image/ark_logo-Big_onboarding.svg","alt","logo-full"],[1,"mt-5"],[1,"font-18","text--1A1A1A","fw-600","mt-4"],[1,"text-muted"],[1,"p-2"],[3,"formGroup","ngSubmit"],[1,"form-label"],[1,"form-group","auth-form-group","mb-4"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control","auth-control",3,"ngClass"],[1,"pwd-icon",3,"click"],["class","invalid-feedback",4,"ngIf"],[1,"container-login100-form-btn"],["mat-raised-button","","color","primary","type","submit",1,"login100-form-btn"],[1,"mt-2","text-center"],["routerLink","/authentication/signin",1,"text-decoration-underline","font-weight-medium","text--919AA3"],[1,"auth-bg"],[1,"bottom-text"],[1,"text-fff","font-36","font-weight-medium","text-center"],[1,"text-fff","font-18","fw-400","text-center","mt-3"],[1,"invalid-feedback"],[4,"ngIf"],[1,"mat-info-icon"],[1,"aligned-with-icon"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div")(8,"div",7),e._UZ(9,"img",8),e.TgZ(10,"div",9)(11,"h4",10),e._uU(12,"Reset Password"),e.qZA(),e.TgZ(13,"p",11),e._uU(14,"Create a new, strong password"),e.qZA()()(),e.TgZ(15,"div",12)(16,"form",13),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(17,"label",14),e._uU(18,"Create Password"),e.qZA(),e.TgZ(19,"div",15),e._UZ(20,"input",16),e.TgZ(21,"mat-icon",17),e.NdJ("click",function(){return o.toggleIcon1()}),e._uU(22),e.qZA(),e.YNc(23,M,1,0,"div",18),e.qZA(),e.TgZ(24,"label",14),e._uU(25,"Confirm Password"),e.qZA(),e.TgZ(26,"div",15),e._UZ(27,"input",16),e.TgZ(28,"mat-icon",17),e.NdJ("click",function(){return o.toggleIcon2()}),e._uU(29),e.qZA(),e.YNc(30,W,2,1,"div",18),e.qZA(),e.TgZ(31,"div",19)(32,"button",20),e._uU(33," Reset Password "),e.qZA()()()(),e.TgZ(34,"div",21)(35,"a",22),e._uU(36," Sign In "),e.qZA()()()()()()()(),e.TgZ(37,"div",2)(38,"div",23)(39,"div",24)(40,"h3",25),e._uU(41,"Advancing the Care Continuum"),e.qZA(),e.TgZ(42,"p",26),e._uU(43,"PATH is a freely accessible, evidence-based assessment tool that is designed to assess caregiver\u2019s preparedness to transition patients home."),e.qZA()()()()()()),2&n&&(e.xp6(16),e.Q6J("formGroup",o.loginForm),e.xp6(4),e.Q6J("ngClass",e.VKq(7,Z,o.submitted&&o.form.password.errors)),e.xp6(2),e.Oqu(o.showIcon1?"visibility":"visibility_off"),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.form.password.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(9,Z,o.submitted&&o.form.password.errors)),e.xp6(2),e.Oqu(o.showIcon2?"visibility":"visibility_off"),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.form.password.errors))},dependencies:[l.mk,l.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.rH,u.lW,c.Hw]}),r})()},{path:"locked",component:V},{path:"page404",component:G.J},{path:"page500",component:K}];let D=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(z),m.Bz]}),r})();var $=d(7600);let ee=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,i.u5,i.UX,D,$.m]}),r})()}}]);