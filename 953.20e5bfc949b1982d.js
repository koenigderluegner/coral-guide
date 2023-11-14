"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[953],{317:(le,F,a)=>{a.r(F),a.d(F,{SettingsModule:()=>ae});var g=a(6814),Z=a(2787),e=a(5879),h=a(6223),M=a(7866),U=a(3503),b=a(1560),D=a(5220),B=a(9443),O=a(6001),k=a(9729),P=a(4012),W=a(3861),H=a(4240),q=a(4170),A=a(8525),S=a(3680);function z(i,l){if(1&i&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&i){const c=l.$implicit,t=e.oxw();e.Q6J("value",c),e.xp6(1),e.Oqu(t.availableLanguageDisplayName[c])}}function G(i,l){if(1&i&&(e.TgZ(0,"p",30),e._UZ(1,"app-ui-icon",11),e._uU(2," Currently there's no beta. "),e.qZA()),2&i){const c=e.oxw();e.xp6(1),e.Q6J("uiIcon",c.uiIcon.WARNING)}}function Y(i,l){1&i&&(e.TgZ(0,"p",31),e._uU(1,"Changes that require a reload were made. Saving will reload automatically."),e.qZA())}let $=(()=>{var i;class l{constructor(t,n){this._settingsService=t,this._toDo=n,this.reloadRequired=!1,this.uiIcon=U.a,this.availableLanguages=b.D,this.availableLanguageDisplayName=b.xI,this.BETA_CODE=(0,e.f3M)(M.M,{optional:!0}),this._checklistOfferings=(0,e.f3M)(D.y),this._checklistCooking=(0,e.f3M)(B.G),this._checklistMuseum=(0,e.f3M)(O.c),this.settingsForm=new h.cw({useBeta:new h.NI(!1,{nonNullable:!0}),resetLiveToDo:new h.NI(!1,{nonNullable:!0}),resetBetaToDo:new h.NI(!1,{nonNullable:!0}),resetLiveChecklists:new h.NI(!1,{nonNullable:!0}),resetBetaChecklists:new h.NI(!1,{nonNullable:!0}),language:new h.NI("en",{nonNullable:!0})}),this.BETA_CODE||this.settingsForm.get("useBeta")?.disable();const s=this._settingsService.getSettings();this.settingsForm.patchValue(s),this.settingsForm.valueChanges.subscribe({next:o=>{this.reloadRequired=s.useBeta!==o.useBeta||s.language!==o.language}})}saveSettings(){const t={...this.settingsForm.value};t.resetLiveChecklists&&(this._checklistMuseum.resetLiveChecklist(),this._checklistOfferings.resetLiveChecklist(),this._checklistCooking.resetLiveChecklist()),t.resetBetaChecklists&&(this._checklistMuseum.resetBetaChecklist(),this._checklistOfferings.resetBetaChecklist(),this._checklistCooking.resetBetaChecklist()),t.resetLiveToDo&&this._toDo.resetLiveToDo(),t.resetBetaToDo&&this._toDo.resetBetaToDo(),delete t.resetBetaToDo,delete t.resetLiveToDo,delete t.resetBetaChecklists,delete t.resetLiveChecklists,this._settingsService.saveSettings(t),this.reloadRequired&&location.reload()}}return(i=l).\u0275fac=function(t){return new(t||i)(e.Y36(k.g),e.Y36(P.Z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-settings"]],decls:84,vars:8,consts:[[1,"text-black","container","block","mx-auto","my-10"],[3,"formGroup","submit"],[1,"grid","md:grid-cols-3","pb-12","gap-y-10","gap-x-8","border-b","border-accent/50","mb-8"],[1,"leading-7","font-bold","text-lg"],[1,"bg-amber-50/70","md:col-span-2","px-4","py-6","sm:p-8","sm:rounded-lg"],[1,"flex","flex-col","gap-1","items-start"],["for","language",1,"font-bold","leading-6"],[1,"btn","btn-secondary"],["formControlName","language","id","language"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","gap-2","text-black","font-bold","leading-6","items-center","mt-2"],[1,"!w-6","shrink-0",3,"uiIcon"],[1,"flex","gap-x-3"],[1,"flex","h-6","items-center"],["formControlName","useBeta","id","useBeta","name","useBeta","type","checkbox"],["for","useBeta",1,"font-bold","leading-6"],[1,"leading-6"],["class","flex gap-2 text-black font-bold leading-6 items-center",4,"ngIf"],[1,"bg-amber-50/70","md:col-span-2","px-4","py-6","sm:p-8","sm:rounded-lg","flex","flex-col","gap-6"],["formControlName","resetLiveToDo","id","resetLiveToDo","name","resetLiveToDo","type","checkbox"],["for","resetLiveToDo",1,"font-bold","leading-6"],["formControlName","resetBetaToDo","id","resetBetaToDo","name","resetBetaToDo","type","checkbox"],["for","resetBetaToDo",1,"font-bold","leading-6"],["formControlName","resetLiveChecklists","id","resetLiveChecklists","name","resetLiveChecklists","type","checkbox"],["for","resetLiveChecklists",1,"font-bold","leading-6"],["formControlName","resetBetaChecklists","id","resetBetaChecklists","name","resetBetaChecklists","type","checkbox"],[1,"mt-6","sm:mt-8","flex","justify-between","items-center"],["class","font-bold",4,"ngIf"],["type","submit",1,"btn-amber","ml-auto"],[3,"value"],[1,"flex","gap-2","text-black","font-bold","leading-6","items-center"],[1,"font-bold"]],template:function(t,n){if(1&t&&(e.TgZ(0,"app-card",0)(1,"form",1),e.NdJ("submit",function(){return n.saveSettings()}),e.TgZ(2,"div",2)(3,"div")(4,"h3",3),e._uU(5,"Language"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"Change the language of Coral Guide"),e.qZA()(),e.TgZ(8,"div",4)(9,"div",5)(10,"label",6),e._uU(11,"Language"),e.qZA(),e.TgZ(12,"mat-form-field",7)(13,"mat-select",8),e.YNc(14,z,2,2,"mat-option",9),e.qZA()()(),e.TgZ(15,"p",10),e._UZ(16,"app-ui-icon",11),e._uU(17," Work in progress: Currently only in-game data has translations, the app itself will stay in english. Translations are pulled from game files and will be shown as is. "),e.qZA()()(),e.TgZ(18,"div",2)(19,"div")(20,"h3",3),e._uU(21,"Beta data"),e.qZA(),e.TgZ(22,"p"),e._uU(23),e.qZA()(),e.TgZ(24,"div",4)(25,"div",12)(26,"div",13),e._UZ(27,"input",14),e.qZA(),e.TgZ(28,"div")(29,"label",15),e._uU(30,"Use beta data"),e.qZA(),e.TgZ(31,"p",16),e._uU(32,"Switches app data to beta data. Change requires reload."),e.qZA()()(),e.YNc(33,G,3,1,"p",17),e.qZA()(),e.TgZ(34,"div",2)(35,"div")(36,"h3",3),e._uU(37,"To-Dos"),e.qZA(),e.TgZ(38,"p"),e._uU(39,"Options for to-dos. Reset your to-dos data if they behave in unwanted behavior and set defaults for viewing. "),e.qZA()(),e.TgZ(40,"div",18)(41,"div",12)(42,"div",13),e._UZ(43,"input",19),e.qZA(),e.TgZ(44,"div")(45,"label",20),e._uU(46,"Reset live to-dos"),e.qZA(),e.TgZ(47,"p",16),e._uU(48,"Reset all to-dos which were created while using live data."),e.qZA()()(),e.TgZ(49,"div",12)(50,"div",13),e._UZ(51,"input",21),e.qZA(),e.TgZ(52,"div")(53,"label",22),e._uU(54,"Reset beta to-dos"),e.qZA(),e.TgZ(55,"p",16),e._uU(56,"Reset all to-dos which were created while using beta data."),e.qZA()()()()(),e.TgZ(57,"div",2)(58,"div")(59,"h3",3),e._uU(60,"Checklists"),e.qZA(),e.TgZ(61,"p"),e._uU(62,"Options for checklists. Reset your checklists data. "),e.qZA()(),e.TgZ(63,"div",18)(64,"div",12)(65,"div",13),e._UZ(66,"input",23),e.qZA(),e.TgZ(67,"div")(68,"label",24),e._uU(69,"Reset live checklists"),e.qZA(),e.TgZ(70,"p",16),e._uU(71,"Reset all checklists which were created while using live data."),e.qZA()()(),e.TgZ(72,"div",12)(73,"div",13),e._UZ(74,"input",25),e.qZA(),e.TgZ(75,"div")(76,"label",22),e._uU(77,"Reset beta checklists"),e.qZA(),e.TgZ(78,"p",16),e._uU(79,"Reset all checklists which were created while using beta data."),e.qZA()()()()(),e.TgZ(80,"div",26),e.YNc(81,Y,2,0,"p",27),e.TgZ(82,"button",28),e._uU(83,"Save"),e.qZA()()()()),2&t){let s;e.xp6(1),e.Q6J("formGroup",n.settingsForm),e.xp6(13),e.Q6J("ngForOf",n.availableLanguages),e.xp6(2),e.Q6J("uiIcon",n.uiIcon.WARNING),e.xp6(7),e.hij("Options for latest beta build. Current beta code: ",null!==(s=n.BETA_CODE)&&void 0!==s?s:"no ongoing beta"," "),e.xp6(5),e.ekj("opacity-50",!n.BETA_CODE),e.xp6(5),e.Q6J("ngIf",!n.BETA_CODE),e.xp6(48),e.Q6J("ngIf",n.reloadRequired)}},dependencies:[g.sg,g.O5,W.f,H.A,h._Y,h.Wl,h.JJ,h.JL,h.sg,h.u,q.KE,A.gD,S.ey],encapsulation:2}),l})();var j=a(8440);a(2096),a(8504),a(9315),a(9397),a(7398),a(6306),a(4716),a(3020),a(9862),a(6593);let oe=(()=>{var i;class l{}return(i=l).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[S.BQ,S.BQ]}),l})();const re=[{path:"",component:$}];let ae=(()=>{var i;class l{}return(i=l).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,Z.Bz.forChild(re),j.m,h.UX,oe,A.LD]}),l})()}}]);