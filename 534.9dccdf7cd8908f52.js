"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[534],{6336:(I,x,a)=>{a.d(x,{n:()=>t});var t=(()=>{return(n=t||(t={})).BASE="base",n.BRONZE="bronze",n.SILVER="silver",n.GOLD="gold",n.OSMIUM="osmium",t;var n})()},2534:(I,x,a)=>{a.r(x),a.d(x,{PeopleModule:()=>Z});var t=a(6895),n=a(2095),g=a(4931),u=a(15),e=a(4650),p=a(2364),d=a(5141),f=a(973);let r=(()=>{class i{constructor(){this.uiIcons=u.a}}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-people"]],decls:5,vars:1,consts:[["routerLink","gifting",3,"uiIcon"],[1,"hidden"]],template:function(o,b){1&o&&(e.TgZ(0,"app-sidebar-container")(1,"app-module-sidebar")(2,"app-module-sidebar-item",0),e._uU(3,"Gifting"),e.qZA()(),e._UZ(4,"router-outlet",1),e.qZA()),2&o&&(e.xp6(2),e.Q6J("uiIcon",b.uiIcons.GIFTING))},dependencies:[g.lC,g.rH,p.R,d.z,f.L]}),i})();var _=a(5583),c=a(9969),s=a(4122),m=a(9813),h=a(8635);function v(i,l){if(1&i&&(e.ynx(0),e._UZ(1,"app-item-icon",1),e._uU(2),e.BQk()),2&i){const o=e.oxw();e.xp6(1),e.Q6J("itemName",o.minimalItem.iconName),e.xp6(1),e.hij(" ",o.minimalItem.displayName,"\n")}}let y=(()=>{class i{constructor(){this._setClass=!0}}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-inline-minimal-item"]],hostVars:2,hostBindings:function(o,b){2&o&&e.ekj("app-inline-minimal-item",b._setClass)},inputs:{minimalItem:"minimalItem"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"itemName"]],template:function(o,b){1&o&&e.YNc(0,v,3,2,"ng-container",0),2&o&&e.Q6J("ngIf",b.minimalItem)},dependencies:[t.O5,m.D],styles:[".app-inline-minimal-item .app-item-icon img{height:1.4em;width:auto;display:inline-block;vertical-align:text-bottom;margin:-2px 2px -2px 0}\n"],encapsulation:2}),i})();function C(i,l){if(1&i&&(e._UZ(0,"app-item-icon",8),e.ALo(1,"lowercase")),2&i){const o=e.oxw().$implicit;e.MGl("itemName","Icon_",e.lcZ(1,1,o.mapKey),".png")}}function w(i,l){if(1&i&&e._UZ(0,"app-inline-minimal-item",14),2&i){const o=e.oxw().$implicit;e.Q6J("minimalItem",o.item)}}function M(i,l){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const o=e.oxw().$implicit,b=e.oxw(5);e.xp6(1),e.hij("All ",b._addSpacesToPascalCase(o.categoryName),"")}}function T(i,l){if(1&i&&(e.ynx(0),e.YNc(1,w,1,1,"app-inline-minimal-item",13),e.YNc(2,M,2,1,"span",9),e.BQk()),2&i){const o=l.$implicit;e.xp6(1),e.Q6J("ngIf","item"===o.type),e.xp6(1),e.Q6J("ngIf","category"===o.type)}}function k(i,l){if(1&i&&(e.ynx(0),e.TgZ(1,"div",10),e._UZ(2,"app-ui-icon",11),e._uU(3),e.qZA(),e.TgZ(4,"div",12),e.YNc(5,T,3,2,"ng-container",7),e.qZA(),e.BQk()),2&i){const o=e.oxw().$implicit,b=e.oxw().$implicit;e.xp6(2),e.Q6J("uiIcon",o.icon),e.xp6(1),e.hij(" ",o.label," "),e.xp6(2),e.Q6J("ngForOf",b[o.preferenceField])}}function P(i,l){if(1&i&&(e.ynx(0),e.YNc(1,k,6,3,"ng-container",9),e.BQk()),2&i){const o=l.$implicit,b=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",b[o.preferenceField].length)}}function A(i,l){if(1&i&&(e.TgZ(0,"div",3)(1,"div",4),e.YNc(2,C,2,3,"app-item-icon",5),e._uU(3),e.qZA(),e.TgZ(4,"div",6),e.YNc(5,P,2,1,"ng-container",7),e.qZA()()),2&i){const o=l.$implicit,b=e.oxw(2);e.xp6(2),e.Q6J("ngIf","ci_universal"!==o.mapKey),e.xp6(1),e.hij(" ","ci_universal"!==o.mapKey?o.mapKey:"Universal"," "),e.xp6(2),e.Q6J("ngForOf",b.preferencesMap)}}function N(i,l){if(1&i&&(e.TgZ(0,"app-card",1),e.YNc(1,A,6,3,"div",2),e.qZA()),2&i){const o=l.ngIf;e.xp6(1),e.Q6J("ngForOf",o)}}const O=[{path:"",pathMatch:"full",redirectTo:"gifting"},{path:"",component:r,children:[{path:"gifting",component:(()=>{class i{constructor(o){this._database=o,this.preferencesMap=[{icon:u.a.LOVE,label:"Favorite",preferenceField:"favoritePreferences"},{icon:u.a.LOVE,label:"Love",preferenceField:"lovePreferences"},{icon:u.a.LIKE,label:"Like",preferenceField:"likePreferences"},{icon:u.a.NEUTRAL,label:"Neutral",preferenceField:"neutralPreferences"},{icon:u.a.DISLIKE,label:"Dislike",preferenceField:"dislikePreferences"},{icon:u.a.HATE,label:"Hate",preferenceField:"hatePreferences"}],this._addSpacesToPascalCase=_.gA,this.gifting$=this._database.fetchGiftingPreferences$()}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(c.k))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-gifting"]],decls:2,vars:3,consts:[["class","text-xl gifting-card",4,"ngIf"],[1,"text-xl","gifting-card"],["class","grid grid-cols-1",4,"ngFor","ngForOf"],[1,"grid","grid-cols-1"],[1,"text-2xl","text-black","font-semibold","flex","items-center","gifting-portrait"],["class","h-16 mr-2",3,"itemName",4,"ngIf"],[1,"gifting-preference-grid"],[4,"ngFor","ngForOf"],[1,"h-16","mr-2",3,"itemName"],[4,"ngIf"],[1,"font-semibold","flex","items-center","sm:flex-col","sm:pr-10","mb-1","text-black"],[1,"gifting-icon","mr-1","sm:mr-0","!h-6","!w-6",3,"uiIcon"],[1,"gifting-gifts-grid"],[3,"minimalItem",4,"ngIf"],[3,"minimalItem"]],template:function(o,b){1&o&&(e.YNc(0,N,2,1,"app-card",0),e.ALo(1,"async")),2&o&&e.Q6J("ngIf",e.lcZ(1,1,b.gifting$))},dependencies:[t.sg,t.O5,s.f,m.D,h.A,y,t.Ov,t.i8],styles:[".gifting-icon{color:#ed7b67}.gifting-portrait .app-item-icon>img{width:auto;height:100%;aspect-ratio:unset}.gifting-gifts-grid{margin-top:.25rem;margin-bottom:1rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:center;gap:.25rem}.gifting-preference-grid{margin-bottom:2rem;margin-top:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr))}@media (min-width: 640px){.gifting-preference-grid{row-gap:.75rem;grid-template-columns:min-content 1fr}.gifting-gifts-grid{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}}.gifting-card{max-width:1100px;margin:8px}@media (min-width: 1536px){.gifting-card{margin:60px 40px 60px 60px}}\n"],encapsulation:2}),i})()}]}];let S=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(O),g.Bz]}),i})(),Z=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[t.ez,S,n.m]}),i})()},9813:(I,x,a)=>{a.d(x,{D:()=>f});var t=a(4650),n=a(6895),g=a(6336);function u(r,_){if(1&r&&(t._UZ(0,"img",1),t.ALo(1,"titlecase")),2&r){const c=t.oxw();t.MGl("src","assets/ui/images/icons/quality-stars/T_Icon_Star",t.lcZ(1,1,c.quality),"B.png",t.LSH)}}let e=(()=>{class r{constructor(){this.QUALITY=g.n}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-rarity-icon"]],inputs:{quality:"quality"},decls:1,vars:1,consts:[["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src",4,"ngIf"],["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src"]],template:function(c,s){1&c&&t.YNc(0,u,2,3,"img",0),2&c&&t.Q6J("ngIf",s.quality&&s.quality!==s.QUALITY.BASE)},dependencies:[n.O5,n.rS]}),r})();function p(r,_){if(1&r&&t._UZ(0,"app-item-icon",3),2&r){const c=t.oxw();t.Q6J("itemName",c.subIconName)}}function d(r,_){if(1&r&&t._UZ(0,"app-rarity-icon",4),2&r){const c=t.oxw();t.Q6J("quality",c.quality)}}let f=(()=>{class r{constructor(){this._setClass=!0}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-item-icon"]],hostVars:2,hostBindings:function(c,s){2&c&&t.ekj("app-item-icon",s._setClass)},inputs:{itemName:"itemName",subIconName:"subIconName",quality:"quality"},decls:3,vars:3,consts:[["loading","lazy","onerror","this.onerror=null;this.src='assets/ui/images/placeholder.png'","alt","",3,"src"],["class","!absolute bottom-[5px] left-[5px] w-[50%]",3,"itemName",4,"ngIf"],["class","absolute bottom-[5px] right-[5px] w-[35%]",3,"quality",4,"ngIf"],[1,"!absolute","bottom-[5px]","left-[5px]","w-[50%]",3,"itemName"],[1,"absolute","bottom-[5px]","right-[5px]","w-[35%]",3,"quality"]],template:function(c,s){1&c&&(t._UZ(0,"img",0),t.YNc(1,p,1,1,"app-item-icon",1),t.YNc(2,d,1,1,"app-rarity-icon",2)),2&c&&(t.MGl("src","assets/items/icons/",s.itemName,"",t.LSH),t.xp6(1),t.Q6J("ngIf",s.subIconName),t.xp6(1),t.Q6J("ngIf",s.quality))},dependencies:[n.O5,r,e],styles:[".app-item-icon{position:relative}.app-item-icon>img{width:100%;height:auto;aspect-ratio:1/1}\n"],encapsulation:2}),r})()},5141:(I,x,a)=>{a.d(x,{z:()=>e});var t=a(4650);const n=["innerTemplate"];function g(p,d){1&p&&t.Hsn(0)}const u=["*"];let e=(()=>{class p{constructor(){this.innerTemplate=null}}return p.\u0275fac=function(f){return new(f||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-module-sidebar-item"]],viewQuery:function(f,r){if(1&f&&t.Gf(n,5),2&f){let _;t.iGM(_=t.CRH())&&(r.innerTemplate=_.first)}},inputs:{uiIcon:"uiIcon",routerLink:"routerLink"},ngContentSelectors:u,decls:2,vars:0,consts:[["innerTemplate",""]],template:function(f,r){1&f&&(t.F$t(),t.YNc(0,g,1,0,"ng-template",null,0,t.W1O))},encapsulation:2}),p})()},2364:(I,x,a)=>{a.d(x,{R:()=>_});var t=a(5141),n=a(4650),g=a(6895),u=a(4931),e=a(4122);function p(c,s){if(1&c&&n._UZ(0,"app-ui-icon",5),2&c){const m=n.oxw().$implicit;n.Q6J("uiIcon",m.uiIcon)}}function d(c,s){}function f(c,s){if(1&c){const m=n.EpF();n.ynx(0),n.TgZ(1,"li")(2,"a",1),n.NdJ("click",function(){n.CHM(m);const v=n.oxw();return n.KtG(v.showMenu=!1)}),n.YNc(3,p,1,1,"app-ui-icon",2),n.YNc(4,d,0,0,"ng-template",3),n.TgZ(5,"button",4),n.NdJ("click",function(v){n.CHM(m);const y=n.oxw();return n.KtG(y.toggleMenu(v))}),n._uU(6,"Menu "),n.qZA()()(),n.BQk()}if(2&c){const m=s.$implicit,h=s.last;n.xp6(2),n.ekj("mb-4",!h),n.Q6J("routerLink",m.routerLink)("routerLinkActive","active"),n.xp6(1),n.Q6J("ngIf",m.uiIcon),n.xp6(1),n.Q6J("ngTemplateOutlet",m.innerTemplate)}}const r=function(){return[]};let _=(()=>{class c{constructor(){this._setClass=!0,this.showMenu=!1}toggleMenu(m){m.preventDefault(),m.stopPropagation(),this.showMenu=!this.showMenu}}return c.\u0275fac=function(m){return new(m||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-module-sidebar"]],contentQueries:function(m,h,v){if(1&m&&n.Suo(v,t.z,4),2&m){let y;n.iGM(y=n.CRH())&&(h.viewChildren=y)}},hostVars:2,hostBindings:function(m,h){2&m&&n.ekj("app-module-sidebar",h._setClass)},decls:4,vars:4,consts:[[4,"ngFor","ngForOf"],[1,"app-module-sidebar-list-item",3,"routerLink","routerLinkActive","click"],["class","!h-8",3,"uiIcon",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"xl:hidden","block","ml-auto","m-[-18px]","border-l-2","px-5","h-[45px]",3,"click"],[1,"!h-8",3,"uiIcon"]],template:function(m,h){if(1&m&&(n.TgZ(0,"aside")(1,"nav")(2,"ul"),n.YNc(3,f,7,6,"ng-container",0),n.qZA()()()),2&m){let v;n.xp6(2),n.ekj("hide-menu",!h.showMenu),n.xp6(1),n.Q6J("ngForOf",null!==(v=null==h.viewChildren?null:h.viewChildren.toArray())&&void 0!==v?v:n.DdM(3,r))}},dependencies:[g.sg,g.O5,g.tP,u.yS,u.Od,e.f],styles:[".app-module-sidebar{display:block;--tw-backdrop-blur: blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);background-color:#000000bf;padding:8px}.app-module-sidebar .hide-menu .app-module-sidebar-list-item:not(.active){display:none}@media (min-width: 1536px){.app-module-sidebar{padding:60px 40px 60px 60px}}.app-module-sidebar-list-item{padding:15px;border-radius:30px;height:46px;border:3px solid #191919;display:flex;align-items:center;justify-content:center;column-gap:.5rem;--tw-border-opacity: 1;border-color:rgb(115 115 115 / var(--tw-border-opacity));font-size:1.125rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover .app-ui-icon{color:#645a54}.app-module-sidebar-list-item .app-ui-icon{color:#3f3834}.app-module-sidebar-list-item.active{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.app-module-sidebar-list-item.active .app-ui-icon{color:#e4b07e}.app-module-sidebar-list-item:not(.active) button{display:none}@media (min-width: 1280px){.app-module-sidebar-list-item{display:flex!important;height:80px}}\n"],encapsulation:2}),c})()},973:(I,x,a)=>{a.d(x,{L:()=>u});var t=a(4650);const n=[[["app-module-sidebar"]],"*"],g=["app-module-sidebar","*"];let u=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar-container"]],ngContentSelectors:g,decls:4,vars:0,consts:[[1,"h-full","grid","module-grid"]],template:function(d,f){1&d&&(t.F$t(n),t.TgZ(0,"div",0),t.Hsn(1),t.TgZ(2,"div"),t.Hsn(3,1),t.qZA()())},styles:[".module-grid{grid-template-columns:1fr;grid-auto-rows:min-content}.module-grid .app-module-sidebar{width:100%}@media (min-width: 1280px){.module-grid .app-module-sidebar{width:300px}}@media (min-width: 1536px){.module-grid .app-module-sidebar{width:400px}}@media (min-width: 1280px){.module-grid{grid-template-columns:300px calc(100% - 300px);grid-auto-rows:auto}.app-module-sidebar{min-height:calc(100vh - 108px)}}@media (min-width: 1536px){.module-grid{grid-template-columns:400px calc(100% - 400px)}}\n"],encapsulation:2}),e})()},5583:(I,x,a)=>{function g(p,d="Any"){return function n(p){const d=Object.keys(p);return d.map(r=>p[r]).filter(r=>r).length===d.length}(p)?d:Object.keys(p).filter(f=>p[f]).map(u).map(e).join(", ")}function u(p){return p.charAt(0).toUpperCase()+p.slice(1)}function e(p){return p.replaceAll(/([A-Z])/g," $1").trim()}a.d(x,{C1:()=>g,gA:()=>e})}}]);