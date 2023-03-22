"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[534],{6336:(I,f,o)=>{o.d(f,{n:()=>r});var r=(()=>{return(t=r||(r={})).BASE="base",t.BRONZE="bronze",t.SILVER="silver",t.GOLD="gold",t.OSMIUM="osmium",r;var t})()},2534:(I,f,o)=>{o.r(f),o.d(f,{PeopleModule:()=>N});var r=o(6895),t=o(1699),_=o(1667),u=o(15),e=o(4650),a=o(2364),s=o(5141),d=o(973);let c=(()=>{class n{constructor(){this.uiIcons=u.a}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-people"]],decls:5,vars:1,consts:[["routerLink","gifting",3,"uiIcon"],[1,"hidden"]],template:function(i,x){1&i&&(e.TgZ(0,"app-sidebar-container")(1,"app-module-sidebar")(2,"app-module-sidebar-item",0),e._uU(3,"Gifting"),e.qZA()(),e._UZ(4,"router-outlet",1),e.qZA()),2&i&&(e.xp6(2),e.Q6J("uiIcon",x.uiIcons.GIFTING))},dependencies:[_.lC,_.rH,a.R,s.z,d.L]}),n})();var b=o(5583),p=o(9969),g=o(4122),m=o(795),h=o(8635);function v(n,l){if(1&n&&(e.ynx(0),e._UZ(1,"app-item-icon",1),e._uU(2),e.BQk()),2&n){const i=e.oxw();e.xp6(1),e.Q6J("itemName",i.minimalItem.iconName),e.xp6(1),e.hij(" ",i.minimalItem.displayName,"\n")}}let y=(()=>{class n{constructor(){this._setClass=!0}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-inline-minimal-item"]],hostVars:2,hostBindings:function(i,x){2&i&&e.ekj("app-inline-minimal-item",x._setClass)},inputs:{minimalItem:"minimalItem"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"itemName"]],template:function(i,x){1&i&&e.YNc(0,v,3,2,"ng-container",0),2&i&&e.Q6J("ngIf",x.minimalItem)},dependencies:[r.O5,m.D],styles:[".app-inline-minimal-item .app-item-icon img{height:1.4em;width:auto;display:inline-block;vertical-align:text-bottom;margin:-2px 2px -2px 0}\n"],encapsulation:2}),n})();function C(n,l){if(1&n&&(e._UZ(0,"app-item-icon",8),e.ALo(1,"lowercase")),2&n){const i=e.oxw().$implicit;e.MGl("itemName","Icon_",e.lcZ(1,1,i.mapKey),".png")}}function M(n,l){if(1&n&&e._UZ(0,"app-inline-minimal-item",14),2&n){const i=e.oxw().$implicit;e.Q6J("minimalItem",i.item)}}function w(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const i=e.oxw().$implicit,x=e.oxw(5);e.xp6(1),e.hij("All ",x._addSpacesToPascalCase(i.categoryName),"")}}function T(n,l){if(1&n&&(e.ynx(0),e.YNc(1,M,1,1,"app-inline-minimal-item",13),e.YNc(2,w,2,1,"span",9),e.BQk()),2&n){const i=l.$implicit;e.xp6(1),e.Q6J("ngIf","item"===i.type),e.xp6(1),e.Q6J("ngIf","category"===i.type)}}function P(n,l){if(1&n&&(e.ynx(0),e.TgZ(1,"div",10),e._UZ(2,"app-ui-icon",11),e._uU(3),e.qZA(),e.TgZ(4,"div",12),e.YNc(5,T,3,2,"ng-container",7),e.qZA(),e.BQk()),2&n){const i=e.oxw().$implicit,x=e.oxw().$implicit;e.xp6(2),e.Q6J("uiIcon",i.icon),e.xp6(1),e.hij(" ",i.label," "),e.xp6(2),e.Q6J("ngForOf",x[i.preferenceField])}}function O(n,l){if(1&n&&(e.ynx(0),e.YNc(1,P,6,3,"ng-container",9),e.BQk()),2&n){const i=l.$implicit,x=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",x[i.preferenceField].length)}}function E(n,l){if(1&n&&(e.TgZ(0,"div",3)(1,"div",4),e.YNc(2,C,2,3,"app-item-icon",5),e._uU(3),e.qZA(),e.TgZ(4,"div",6),e.YNc(5,O,2,1,"ng-container",7),e.qZA()()),2&n){const i=l.$implicit,x=e.oxw(2);e.xp6(2),e.Q6J("ngIf","ci_universal"!==i.mapKey),e.xp6(1),e.hij(" ","ci_universal"!==i.mapKey?i.mapKey:"Universal"," "),e.xp6(2),e.Q6J("ngForOf",x.preferencesMap)}}function k(n,l){if(1&n&&(e.TgZ(0,"app-card",1),e.YNc(1,E,6,3,"div",2),e.qZA()),2&n){const i=l.ngIf;e.xp6(1),e.Q6J("ngForOf",i)}}const A=[{path:"",pathMatch:"full",redirectTo:"gifting"},{path:"",component:c,children:[{path:"gifting",component:(()=>{class n{constructor(i){this._database=i,this.preferencesMap=[{icon:u.a.LOVE,label:"Favorite",preferenceField:"favoritePreferences"},{icon:u.a.LOVE,label:"Love",preferenceField:"lovePreferences"},{icon:u.a.LIKE,label:"Like",preferenceField:"likePreferences"},{icon:u.a.NEUTRAL,label:"Neutral",preferenceField:"neutralPreferences"},{icon:u.a.DISLIKE,label:"Dislike",preferenceField:"dislikePreferences"},{icon:u.a.HATE,label:"Hate",preferenceField:"hatePreferences"}],this._addSpacesToPascalCase=b.gA,this.gifting$=this._database.fetchGiftingPreferences$()}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(p.k))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-gifting"]],decls:2,vars:3,consts:[["class","text-xl gifting-card",4,"ngIf"],[1,"text-xl","gifting-card"],["class","grid grid-cols-1",4,"ngFor","ngForOf"],[1,"grid","grid-cols-1"],[1,"text-2xl","text-black","font-semibold","flex","items-center","gifting-portrait"],["class","h-16 mr-2",3,"itemName",4,"ngIf"],[1,"gifting-preference-grid"],[4,"ngFor","ngForOf"],[1,"h-16","mr-2",3,"itemName"],[4,"ngIf"],[1,"font-semibold","flex","items-center","sm:flex-col","sm:pr-10","mb-1","text-black"],[1,"gifting-icon","mr-1","sm:mr-0","!h-6","!w-6",3,"uiIcon"],[1,"gifting-gifts-grid"],[3,"minimalItem",4,"ngIf"],[3,"minimalItem"]],template:function(i,x){1&i&&(e.YNc(0,k,2,1,"app-card",0),e.ALo(1,"async")),2&i&&e.Q6J("ngIf",e.lcZ(1,1,x.gifting$))},dependencies:[r.sg,r.O5,g.f,m.D,h.A,y,r.Ov,r.i8],styles:[".gifting-icon{color:#ed7b67}.gifting-portrait .app-item-icon>img{width:auto;height:100%;aspect-ratio:unset}.gifting-gifts-grid{margin-top:.25rem;margin-bottom:1rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:center;gap:.25rem}.gifting-preference-grid{margin-bottom:2rem;margin-top:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr))}@media (min-width: 640px){.gifting-preference-grid{row-gap:.75rem;grid-template-columns:min-content 1fr}.gifting-gifts-grid{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}}.gifting-card{max-width:1100px;margin:8px}@media (min-width: 1536px){.gifting-card{margin:60px 40px 60px 60px}}\n"],encapsulation:2}),n})()}]}];let L=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[_.Bz.forChild(A),_.Bz]}),n})(),N=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.ez,L,t.m]}),n})()},795:(I,f,o)=>{o.d(f,{D:()=>d});var r=o(1281),t=o(4650),_=o(6895),u=o(748);function e(c,b){if(1&c&&t._UZ(0,"app-item-icon",4),2&c){const p=t.oxw();t.Q6J("itemName",p.subIconName)}}function a(c,b){if(1&c&&t._UZ(0,"app-rarity-icon",5),2&c){const p=t.oxw();t.Q6J("quality",p.quality)}}function s(c,b){if(1&c&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&c){const p=t.oxw();t.xp6(1),t.Oqu(p.amount)}}let d=(()=>{class c{constructor(){this._setClass=!0,this._amount=0}get amount(){return this._amount}set amount(p){this._amount=(0,r.su)(p)}}return c.\u0275fac=function(p){return new(p||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-item-icon"]],hostVars:2,hostBindings:function(p,g){2&p&&t.ekj("app-item-icon",g._setClass)},inputs:{itemName:"itemName",subIconName:"subIconName",quality:"quality",amount:"amount"},decls:4,vars:4,consts:[["loading","lazy","onerror","this.onerror=null;this.src='assets/ui/images/placeholder.png'","alt","",3,"src"],["class","!absolute bottom-[5px] left-[5px] w-[50%]",3,"itemName",4,"ngIf"],["class","absolute top-[5px] left-[5px] w-[35%]",3,"quality",4,"ngIf"],["class","bg-[#F1D9B5] absolute bottom-0 right-0 py-1 px-2 text-black font-semibold text-lg rounded-lg",4,"ngIf"],[1,"!absolute","bottom-[5px]","left-[5px]","w-[50%]",3,"itemName"],[1,"absolute","top-[5px]","left-[5px]","w-[35%]",3,"quality"],[1,"bg-[#F1D9B5]","absolute","bottom-0","right-0","py-1","px-2","text-black","font-semibold","text-lg","rounded-lg"]],template:function(p,g){1&p&&(t._UZ(0,"img",0),t.YNc(1,e,1,1,"app-item-icon",1),t.YNc(2,a,1,1,"app-rarity-icon",2),t.YNc(3,s,2,1,"div",3)),2&p&&(t.MGl("src","assets/items/icons/",g.itemName,"",t.LSH),t.xp6(1),t.Q6J("ngIf",g.subIconName),t.xp6(1),t.Q6J("ngIf",g.quality),t.xp6(1),t.Q6J("ngIf",g.amount>1))},dependencies:[_.O5,c,u.C],styles:[".app-item-icon{position:relative;display:block}.app-item-icon>img{width:100%;height:auto;aspect-ratio:1/1}\n"],encapsulation:2}),c})()},5141:(I,f,o)=>{o.d(f,{z:()=>e});var r=o(4650);const t=["innerTemplate"];function _(a,s){1&a&&r.Hsn(0)}const u=["*"];let e=(()=>{class a{constructor(){this.innerTemplate=null}}return a.\u0275fac=function(d){return new(d||a)},a.\u0275cmp=r.Xpm({type:a,selectors:[["app-module-sidebar-item"]],viewQuery:function(d,c){if(1&d&&r.Gf(t,5),2&d){let b;r.iGM(b=r.CRH())&&(c.innerTemplate=b.first)}},inputs:{uiIcon:"uiIcon",routerLink:"routerLink"},ngContentSelectors:u,decls:2,vars:0,consts:[["innerTemplate",""]],template:function(d,c){1&d&&(r.F$t(),r.YNc(0,_,1,0,"ng-template",null,0,r.W1O))},encapsulation:2}),a})()},2364:(I,f,o)=>{o.d(f,{R:()=>b});var r=o(5141),t=o(4650),_=o(6895),u=o(1667),e=o(4122);function a(p,g){if(1&p&&t._UZ(0,"app-ui-icon",5),2&p){const m=t.oxw().$implicit;t.Q6J("uiIcon",m.uiIcon)}}function s(p,g){}function d(p,g){if(1&p){const m=t.EpF();t.ynx(0),t.TgZ(1,"li")(2,"a",1),t.NdJ("click",function(){t.CHM(m);const v=t.oxw();return t.KtG(v.showMenu=!1)}),t.YNc(3,a,1,1,"app-ui-icon",2),t.YNc(4,s,0,0,"ng-template",3),t.TgZ(5,"button",4),t.NdJ("click",function(v){t.CHM(m);const y=t.oxw();return t.KtG(y.toggleMenu(v))}),t._uU(6,"Menu "),t.qZA()()(),t.BQk()}if(2&p){const m=g.$implicit,h=g.last;t.xp6(2),t.ekj("mb-4",!h),t.Q6J("routerLink",m.routerLink)("routerLinkActive","active"),t.xp6(1),t.Q6J("ngIf",m.uiIcon),t.xp6(1),t.Q6J("ngTemplateOutlet",m.innerTemplate)}}const c=function(){return[]};let b=(()=>{class p{constructor(){this._setClass=!0,this.showMenu=!1}toggleMenu(m){m.preventDefault(),m.stopPropagation(),this.showMenu=!this.showMenu}}return p.\u0275fac=function(m){return new(m||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-module-sidebar"]],contentQueries:function(m,h,v){if(1&m&&t.Suo(v,r.z,4),2&m){let y;t.iGM(y=t.CRH())&&(h.viewChildren=y)}},hostVars:2,hostBindings:function(m,h){2&m&&t.ekj("app-module-sidebar",h._setClass)},decls:4,vars:4,consts:[[4,"ngFor","ngForOf"],[1,"app-module-sidebar-list-item",3,"routerLink","routerLinkActive","click"],["class","!h-8",3,"uiIcon",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"xl:hidden","block","ml-auto","m-[-18px]","border-l-2","px-5","h-[45px]",3,"click"],[1,"!h-8",3,"uiIcon"]],template:function(m,h){if(1&m&&(t.TgZ(0,"aside")(1,"nav")(2,"ul"),t.YNc(3,d,7,6,"ng-container",0),t.qZA()()()),2&m){let v;t.xp6(2),t.ekj("hide-menu",!h.showMenu),t.xp6(1),t.Q6J("ngForOf",null!==(v=null==h.viewChildren?null:h.viewChildren.toArray())&&void 0!==v?v:t.DdM(3,c))}},dependencies:[_.sg,_.O5,_.tP,u.rH,u.Od,e.f],styles:[".app-module-sidebar{display:block;padding-top:.5rem;padding-bottom:.5rem;--tw-backdrop-blur: blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);background-color:#000000bf;padding-left:max(8px,env(safe-area-inset-left));padding-right:max(8px,env(safe-area-inset-right))}.app-module-sidebar .hide-menu .app-module-sidebar-list-item:not(.active){display:none}@media (min-width: 1536px){.app-module-sidebar{padding:60px 40px 60px 60px}}.app-module-sidebar-list-item{padding:15px;border-radius:30px;height:46px;border:3px solid #191919;display:flex;align-items:center;justify-content:center;column-gap:.5rem;--tw-border-opacity: 1;border-color:rgb(115 115 115 / var(--tw-border-opacity));font-size:1.125rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover .app-ui-icon{color:#645a54}.app-module-sidebar-list-item .app-ui-icon{color:#3f3834}.app-module-sidebar-list-item.active{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.app-module-sidebar-list-item.active .app-ui-icon{color:#e4b07e}.app-module-sidebar-list-item:not(.active) button{display:none}@media (min-width: 1280px){.app-module-sidebar-list-item{display:flex!important;height:80px}}\n"],encapsulation:2}),p})()},748:(I,f,o)=>{o.d(f,{C:()=>e});var r=o(6336),t=o(4650),_=o(6895);function u(a,s){if(1&a&&(t._UZ(0,"img",1),t.ALo(1,"titlecase")),2&a){const d=t.oxw();t.MGl("src","assets/ui/images/icons/quality-stars/T_Icon_Star",t.lcZ(1,1,d.quality),"B.png",t.LSH)}}let e=(()=>{class a{constructor(){this.QUALITY=r.n}}return a.\u0275fac=function(d){return new(d||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-rarity-icon"]],inputs:{quality:"quality"},decls:1,vars:1,consts:[["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src",4,"ngIf"],["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src"]],template:function(d,c){1&d&&t.YNc(0,u,2,3,"img",0),2&d&&t.Q6J("ngIf",c.quality&&c.quality!==c.QUALITY.BASE)},dependencies:[_.O5,_.rS],styles:["[_nghost-%COMP%]{display:block}"]}),a})()},973:(I,f,o)=>{o.d(f,{L:()=>u});var r=o(4650);const t=[[["app-module-sidebar"]],"*"],_=["app-module-sidebar","*"];let u=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-sidebar-container"]],ngContentSelectors:_,decls:4,vars:0,consts:[[1,"h-full","grid","module-grid"],[1,"px-safe"]],template:function(s,d){1&s&&(r.F$t(t),r.TgZ(0,"div",0),r.Hsn(1),r.TgZ(2,"div",1),r.Hsn(3,1),r.qZA()())},styles:[".module-grid{grid-template-columns:1fr;grid-auto-rows:min-content}.module-grid .app-module-sidebar{width:100%}@media (min-width: 1280px){.module-grid .app-module-sidebar{width:300px}}@media (min-width: 1536px){.module-grid .app-module-sidebar{width:400px}}@media (min-width: 1280px){.module-grid{grid-template-columns:300px calc(100% - 300px);grid-auto-rows:auto}.app-module-sidebar{min-height:calc(100vh - 108px)}}@media (min-width: 1536px){.module-grid{grid-template-columns:400px calc(100% - 400px)}}\n"],encapsulation:2}),e})()},5583:(I,f,o)=>{function _(a,s="Any"){return function t(a){const s=Object.keys(a);return s.map(c=>a[c]).filter(c=>c).length===s.length}(a)?s:Object.keys(a).filter(d=>a[d]).map(u).map(e).join(", ")}function u(a){return a.charAt(0).toUpperCase()+a.slice(1)}function e(a){return a.replaceAll(/([A-Z])/g," $1").trim()}o.d(f,{C1:()=>_,gA:()=>e})}}]);