"use strict";(self.webpackChunkswapiTest2=self.webpackChunkswapiTest2||[]).push([[125],{7125:(C,f,a)=>{a.r(f),a.d(f,{FormModule:()=>U});var d=a(6895),e=a(4006),o=a(4650),s=a(7417),p=a(2643),l=a(4151),g=a(3390),u=a(1240);function h(t,m){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Solo letras (a-Z) y minimo 3 catacterers"),o.qZA())}function Z(t,m){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Solo letras (a-Z) y minimo 3 catacterers"),o.qZA())}function A(t,m){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Es necesario ser mayor de edad"),o.qZA())}let F=(()=>{class t{constructor(r){this.fb=r,this.form=this.fb.group({nombre:[,[e.kI.required,e.kI.minLength(3),e.kI.maxLength(10),e.kI.pattern(/^[a-zA-Z]+$/)]],apellido:[,[e.kI.required,e.kI.minLength(3),e.kI.maxLength(10),e.kI.pattern(/^[a-zA-Z]+$/)]],fechaN:[e.kI.required,this.validacionEdad]})}ngOnInit(){}campoValido(r){return this.form.controls[r].errors&&this.form.controls[r].touched}validacionEdad(r){const n=r?.value;return n instanceof Date&&(new Date).getFullYear()-n.getFullYear()<18?{menorEdad:!0}:null}guardar(){this.form.invalid?this.form.markAllAsTouched():(console.log(this.form.value),this.form.reset())}}return t.\u0275fac=function(r){return new(r||t)(o.Y36(e.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-form-page"]],decls:30,vars:6,consts:[[1,"grid-form"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"box-form"],[1,"form-items"],["matInput","","placeholder","Nombre","formControlName","nombre","type","text"],[4,"ngIf"],["matInput","","placeholder","Apellido","formControlName","apellido","type","text"],["appearance","fill",1,"form-items-date"],["matInput","","formControlName","fechaN",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["mat-raised-button","","color","primary"]],template:function(r,n){if(1&r&&(o.TgZ(0,"div",0)(1,"h1"),o._uU(2,"Nuevo Registro"),o.qZA(),o.TgZ(3,"form",1),o.NdJ("ngSubmit",function(){return n.guardar()}),o.TgZ(4,"div",2)(5,"mat-form-field",3)(6,"mat-label"),o._uU(7,"Nombre"),o.qZA(),o._UZ(8,"input",4),o.YNc(9,h,2,0,"mat-error",5),o.qZA(),o.TgZ(10,"mat-form-field",3)(11,"mat-label"),o._uU(12,"Apellido"),o.qZA(),o._UZ(13,"input",6),o.YNc(14,Z,2,0,"mat-error",5),o.qZA(),o.TgZ(15,"mat-form-field",7)(16,"mat-label"),o._uU(17,"Fecha de nacimiento"),o.qZA(),o._UZ(18,"input",8),o.TgZ(19,"mat-hint"),o._uU(20,"MM/DD/YYYY"),o.qZA(),o._UZ(21,"mat-datepicker-toggle",9)(22,"mat-datepicker",null,10),o.YNc(24,A,2,0,"mat-error",5),o.qZA(),o._UZ(25,"br"),o.TgZ(26,"button",11)(27,"mat-icon"),o._uU(28,"add"),o.qZA(),o._uU(29," Agregar "),o.qZA()()()()),2&r){const i=o.MAs(23);o.xp6(3),o.Q6J("formGroup",n.form),o.xp6(6),o.Q6J("ngIf",n.campoValido("nombre")),o.xp6(5),o.Q6J("ngIf",n.campoValido("apellido")),o.xp6(4),o.Q6J("matDatepicker",i),o.xp6(3),o.Q6J("for",i),o.xp6(3),o.Q6J("ngIf",n.campoValido("fechaN"))}},dependencies:[d.O5,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,s.lW,p.Hw,l.TO,l.KE,l.bx,l.hX,l.R9,g.Nt,u.Mq,u.hl,u.nW],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),t})();var c=a(2346);const T=[{path:"",children:[{path:"form",component:F},{path:"**",redirectTo:"form"}]}];let v=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Bz.forChild(T),c.Bz]}),t})();var I=a(898);let U=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.ez,v,e.UX,I.q]}),t})()}}]);