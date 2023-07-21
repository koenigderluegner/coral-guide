"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[696],{4717:(I,f,a)=>{a.d(f,{n:()=>r});var r=(()=>((r=r||{}).BASE="base",r.BRONZE="bronze",r.SILVER="silver",r.GOLD="gold",r.OSMIUM="osmium",r))()},2696:(I,f,a)=>{a.r(f),a.d(f,{PeopleModule:()=>D});var r=a(6814),t=a(4709),_=a(5612),u=a(9059),e=a(5879),l=a(9888),g=a(2881),d=a(4044);let b=(()=>{class n{constructor(){this.uiIcons=u.a}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-people"]],decls:5,vars:1,consts:[["routerLink","gifting",3,"uiIcon"],[1,"hidden"]],template:function(o,x){1&o&&(e.TgZ(0,"app-sidebar-container")(1,"app-module-sidebar")(2,"app-module-sidebar-item",0),e._uU(3,"Gifting"),e.qZA()(),e._UZ(4,"router-outlet",1),e.qZA()),2&o&&(e.xp6(2),e.Q6J("uiIcon",x.uiIcons.GIFTING))},dependencies:[_.lC,_.rH,l.R,g.z,d.L],encapsulation:2}),n})();var i=a(7059),s=a(7043),p=a(1610),c=a(2088),h=a(4984);function v(n,m){if(1&n&&(e.ynx(0),e._UZ(1,"app-item-icon",1),e._uU(2),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.Q6J("itemName",o.minimalItem.iconName),e.xp6(1),e.hij(" ",o.minimalItem.displayName,"\n")}}let C=(()=>{class n{constructor(){this._setClass=!0}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-inline-minimal-item"]],hostVars:2,hostBindings:function(o,x){2&o&&e.ekj("app-inline-minimal-item",x._setClass)},inputs:{minimalItem:"minimalItem"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"itemName"]],template:function(o,x){1&o&&e.YNc(0,v,3,2,"ng-container",0),2&o&&e.Q6J("ngIf",x.minimalItem)},dependencies:[r.O5,c.D],styles:[".app-inline-minimal-item .app-item-icon img{height:1.4em;width:auto;display:inline-block;vertical-align:text-bottom;margin:-2px 2px -2px 0}\n"],encapsulation:2}),n})();function y(n,m){if(1&n&&(e._UZ(0,"app-item-icon",8),e.ALo(1,"lowercase")),2&n){const o=e.oxw().$implicit;e.MGl("itemName","Icon_",e.lcZ(1,1,o.mapKey),".png")}}function M(n,m){if(1&n&&e._UZ(0,"app-inline-minimal-item",14),2&n){const o=e.oxw().$implicit;e.Q6J("minimalItem",o.item)}}function T(n,m){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const o=e.oxw().$implicit,x=e.oxw(5);e.xp6(1),e.hij("All ",x._addSpacesToPascalCase(o.categoryName),"")}}function w(n,m){if(1&n&&(e.ynx(0),e.YNc(1,M,1,1,"app-inline-minimal-item",13),e.YNc(2,T,2,1,"span",9),e.BQk()),2&n){const o=m.$implicit;e.xp6(1),e.Q6J("ngIf","item"===o.type),e.xp6(1),e.Q6J("ngIf","category"===o.type)}}function E(n,m){if(1&n&&(e.ynx(0),e.TgZ(1,"div",10),e._UZ(2,"app-ui-icon",11),e._uU(3),e.qZA(),e.TgZ(4,"div",12),e.YNc(5,w,3,2,"ng-container",7),e.qZA(),e.BQk()),2&n){const o=e.oxw().$implicit,x=e.oxw().$implicit;e.xp6(2),e.Q6J("uiIcon",o.icon),e.xp6(1),e.hij(" ",o.label," "),e.xp6(2),e.Q6J("ngForOf",x[o.preferenceField])}}function O(n,m){if(1&n&&(e.ynx(0),e.YNc(1,E,6,3,"ng-container",9),e.BQk()),2&n){const o=m.$implicit,x=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",x[o.preferenceField].length)}}function P(n,m){if(1&n&&(e.TgZ(0,"div",3)(1,"div",4),e.YNc(2,y,2,3,"app-item-icon",5),e._uU(3),e.qZA(),e.TgZ(4,"div",6),e.YNc(5,O,2,1,"ng-container",7),e.qZA()()),2&n){const o=m.$implicit,x=e.oxw(2);e.xp6(2),e.Q6J("ngIf","ci_universal"!==o.mapKey),e.xp6(1),e.hij(" ","ci_universal"!==o.mapKey?o.mapKey:"Universal"," "),e.xp6(2),e.Q6J("ngForOf",x.preferencesMap)}}function A(n,m){if(1&n&&(e.TgZ(0,"app-card",1),e.YNc(1,P,6,3,"div",2),e.qZA()),2&n){const o=m.ngIf;e.xp6(1),e.Q6J("ngForOf",o)}}const k=[{path:"",pathMatch:"full",redirectTo:"gifting"},{path:"",component:b,children:[{path:"gifting",component:(()=>{class n{constructor(o){this._database=o,this.preferencesMap=[{icon:u.a.LOVE,label:"Favorite",preferenceField:"favoritePreferences"},{icon:u.a.LOVE,label:"Love",preferenceField:"lovePreferences"},{icon:u.a.LIKE,label:"Like",preferenceField:"likePreferences"},{icon:u.a.NEUTRAL,label:"Neutral",preferenceField:"neutralPreferences"},{icon:u.a.DISLIKE,label:"Dislike",preferenceField:"dislikePreferences"},{icon:u.a.HATE,label:"Hate",preferenceField:"hatePreferences"}],this._addSpacesToPascalCase=i.gA,this.gifting$=this._database.fetchGiftingPreferences$()}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(s.k))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-gifting"]],decls:2,vars:3,consts:[["class","text-xl gifting-card",4,"ngIf"],[1,"text-xl","gifting-card"],["class","grid grid-cols-1",4,"ngFor","ngForOf"],[1,"grid","grid-cols-1"],[1,"text-2xl","text-black","font-semibold","flex","items-center","gifting-portrait"],["class","h-16 mr-2",3,"itemName",4,"ngIf"],[1,"gifting-preference-grid"],[4,"ngFor","ngForOf"],[1,"h-16","mr-2",3,"itemName"],[4,"ngIf"],[1,"font-semibold","flex","items-center","sm:flex-col","sm:pr-10","mb-1","text-black"],[1,"gifting-icon","mr-1","sm:mr-0","!h-6","!w-6",3,"uiIcon"],[1,"gifting-gifts-grid"],[3,"minimalItem",4,"ngIf"],[3,"minimalItem"]],template:function(o,x){1&o&&(e.YNc(0,A,2,1,"app-card",0),e.ALo(1,"async")),2&o&&e.Q6J("ngIf",e.lcZ(1,1,x.gifting$))},dependencies:[r.sg,r.O5,p.f,c.D,h.A,C,r.Ov,r.i8],styles:[".gifting-icon{color:#ed7b67}.gifting-portrait .app-item-icon>img{width:auto;height:100%;aspect-ratio:unset}.gifting-gifts-grid{margin-top:.25rem;margin-bottom:1rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:center;gap:.25rem}.gifting-preference-grid{margin-bottom:2rem;margin-top:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr))}@media (min-width: 640px){.gifting-preference-grid{row-gap:.75rem;grid-template-columns:min-content 1fr}.gifting-gifts-grid{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}}.gifting-card{max-width:1100px;margin:8px}@media (min-width: 1536px){.gifting-card{margin:60px 40px 60px 60px}}\n"],encapsulation:2}),n})(),title:"Gifting - People"}]}];let L=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[_.Bz.forChild(k),_.Bz]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.ez,L,t.m]}),n})()},2088:(I,f,a)=>{a.d(f,{D:()=>b});var r=a(2495),t=a(5879),_=a(1063),u=a(6814),e=a(7288);function l(i,s){if(1&i&&t._UZ(0,"app-item-icon",4),2&i){const p=t.oxw();t.Q6J("itemName",p.subIconName)}}function g(i,s){if(1&i&&t._UZ(0,"app-rarity-icon",5),2&i){const p=t.oxw();t.Q6J("quality",p.quality)}}function d(i,s){if(1&i&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&i){const p=t.oxw();t.xp6(1),t.Oqu(p.amount)}}let b=(()=>{class i{constructor(p){this._settings=p,this._amount=0,this._setClass=!0,this.version=this._settings.getSettings().useBeta?"beta":"live"}get amount(){return this._amount}set amount(p){this._amount=(0,r.su)(p)}}return i.\u0275fac=function(p){return new(p||i)(t.Y36(_.g))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-item-icon"]],hostVars:2,hostBindings:function(p,c){2&p&&t.ekj("app-item-icon",c._setClass)},inputs:{itemName:"itemName",subIconName:"subIconName",quality:"quality",amount:"amount"},decls:4,vars:5,consts:[["loading","lazy","onerror","this.onerror=null;this.src='assets/ui/images/placeholder.png'","alt","",3,"src"],["class","!absolute bottom-[5px] left-[5px] w-[50%]",3,"itemName",4,"ngIf"],["class","absolute top-[5px] left-[5px] w-[35%]",3,"quality",4,"ngIf"],["class","bg-[#F1D9B5] absolute bottom-0 right-0 py-1 px-2 text-black font-semibold text-lg rounded-lg",4,"ngIf"],[1,"!absolute","bottom-[5px]","left-[5px]","w-[50%]",3,"itemName"],[1,"absolute","top-[5px]","left-[5px]","w-[35%]",3,"quality"],[1,"bg-[#F1D9B5]","absolute","bottom-0","right-0","py-1","px-2","text-black","font-semibold","text-lg","rounded-lg"]],template:function(p,c){1&p&&(t._UZ(0,"img",0),t.YNc(1,l,1,1,"app-item-icon",1),t.YNc(2,g,1,1,"app-rarity-icon",2),t.YNc(3,d,2,1,"div",3)),2&p&&(t.hYB("src","assets/",c.version,"/items/icons/",c.itemName,"",t.LSH),t.xp6(1),t.Q6J("ngIf",c.subIconName),t.xp6(1),t.Q6J("ngIf",c.quality),t.xp6(1),t.Q6J("ngIf",c.amount>1))},dependencies:[u.O5,i,e.C],styles:[".app-item-icon{position:relative;display:block}.app-item-icon>img{width:100%;height:auto;aspect-ratio:1/1}\n"],encapsulation:2}),i})()},2881:(I,f,a)=>{a.d(f,{z:()=>e});var r=a(5879);const t=["innerTemplate"];function _(l,g){1&l&&r.Hsn(0)}const u=["*"];let e=(()=>{class l{constructor(){this.innerTemplate=null}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-module-sidebar-item"]],viewQuery:function(d,b){if(1&d&&r.Gf(t,5),2&d){let i;r.iGM(i=r.CRH())&&(b.innerTemplate=i.first)}},inputs:{uiIcon:"uiIcon",routerLink:"routerLink"},ngContentSelectors:u,decls:2,vars:0,consts:[["innerTemplate",""]],template:function(d,b){1&d&&(r.F$t(),r.YNc(0,_,1,0,"ng-template",null,0,r.W1O))},encapsulation:2}),l})()},9888:(I,f,a)=>{a.d(f,{R:()=>i});var r=a(2881),t=a(5879),_=a(6814),u=a(5612),e=a(1610);function l(s,p){if(1&s&&t._UZ(0,"app-ui-icon",5),2&s){const c=t.oxw().$implicit;t.Q6J("uiIcon",c.uiIcon)}}function g(s,p){}function d(s,p){if(1&s){const c=t.EpF();t.ynx(0),t.TgZ(1,"li")(2,"a",1),t.NdJ("click",function(){t.CHM(c);const v=t.oxw();return t.KtG(v.showMenu=!1)}),t.YNc(3,l,1,1,"app-ui-icon",2),t.YNc(4,g,0,0,"ng-template",3),t.TgZ(5,"button",4),t.NdJ("click",function(v){t.CHM(c);const C=t.oxw();return t.KtG(C.toggleMenu(v))}),t._uU(6,"Menu "),t.qZA()()(),t.BQk()}if(2&s){const c=p.$implicit,h=p.last;t.xp6(2),t.ekj("mb-4",!h),t.Q6J("routerLink",c.routerLink)("routerLinkActive","active"),t.xp6(1),t.Q6J("ngIf",c.uiIcon),t.xp6(1),t.Q6J("ngTemplateOutlet",c.innerTemplate)}}const b=function(){return[]};let i=(()=>{class s{constructor(){this._setClass=!0,this.showMenu=!1}toggleMenu(c){c.preventDefault(),c.stopPropagation(),this.showMenu=!this.showMenu}}return s.\u0275fac=function(c){return new(c||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-module-sidebar"]],contentQueries:function(c,h,v){if(1&c&&t.Suo(v,r.z,4),2&c){let C;t.iGM(C=t.CRH())&&(h.viewChildren=C)}},hostVars:2,hostBindings:function(c,h){2&c&&t.ekj("app-module-sidebar",h._setClass)},decls:4,vars:4,consts:[[4,"ngFor","ngForOf"],[1,"app-module-sidebar-list-item",3,"routerLink","routerLinkActive","click"],["class","!h-8",3,"uiIcon",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"xl:hidden","block","ml-auto","m-[-18px]","border-l-2","px-5","h-[45px]",3,"click"],[1,"!h-8",3,"uiIcon"]],template:function(c,h){if(1&c&&(t.TgZ(0,"aside")(1,"nav")(2,"ul"),t.YNc(3,d,7,6,"ng-container",0),t.qZA()()()),2&c){let v;t.xp6(2),t.ekj("hide-menu",!h.showMenu),t.xp6(1),t.Q6J("ngForOf",null!==(v=null==h.viewChildren?null:h.viewChildren.toArray())&&void 0!==v?v:t.DdM(3,b))}},dependencies:[_.sg,_.O5,_.tP,u.rH,u.Od,e.f],styles:[".app-module-sidebar{display:block;padding-top:.5rem;padding-bottom:.5rem;--tw-backdrop-blur: blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);background-color:#000000bf;padding-left:max(8px,env(safe-area-inset-left));padding-right:max(8px,env(safe-area-inset-right))}.app-module-sidebar .hide-menu .app-module-sidebar-list-item:not(.active){display:none}@media (min-width: 1536px){.app-module-sidebar{padding:60px 40px 60px 60px}}.app-module-sidebar-list-item{padding:15px;border-radius:30px;height:46px;border:3px solid #191919;display:flex;align-items:center;justify-content:center;column-gap:.5rem;--tw-border-opacity: 1;border-color:rgb(115 115 115 / var(--tw-border-opacity));font-size:1.125rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover .app-ui-icon{color:#645a54}.app-module-sidebar-list-item .app-ui-icon{color:#3f3834}.app-module-sidebar-list-item.active{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.app-module-sidebar-list-item.active .app-ui-icon{color:#e4b07e}.app-module-sidebar-list-item:not(.active) button{display:none}@media (min-width: 1280px){.app-module-sidebar-list-item{display:flex!important;height:80px}}\n"],encapsulation:2}),s})()},7288:(I,f,a)=>{a.d(f,{C:()=>e});var r=a(4717),t=a(5879),_=a(6814);function u(l,g){if(1&l&&(t._UZ(0,"img",1),t.ALo(1,"titlecase")),2&l){const d=t.oxw();t.MGl("src","assets/ui/images/icons/quality-stars/T_Icon_Star",t.lcZ(1,1,d.quality),"B.png",t.LSH)}}let e=(()=>{class l{constructor(){this.QUALITY=r.n}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-rarity-icon"]],inputs:{quality:"quality"},decls:1,vars:1,consts:[["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src",4,"ngIf"],["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src"]],template:function(d,b){1&d&&t.YNc(0,u,2,3,"img",0),2&d&&t.Q6J("ngIf",b.quality&&b.quality!==b.QUALITY.BASE)},dependencies:[_.O5,_.rS],styles:["[_nghost-%COMP%]{display:block}"]}),l})()},4044:(I,f,a)=>{a.d(f,{L:()=>u});var r=a(5879);const t=[[["app-module-sidebar"]],"*"],_=["app-module-sidebar","*"];let u=(()=>{class e{}return e.\u0275fac=function(g){return new(g||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-sidebar-container"]],ngContentSelectors:_,decls:4,vars:0,consts:[[1,"h-full","grid","module-grid"],[1,"px-safe"]],template:function(g,d){1&g&&(r.F$t(t),r.TgZ(0,"div",0),r.Hsn(1),r.TgZ(2,"div",1),r.Hsn(3,1),r.qZA()())},styles:[".module-grid{grid-template-columns:1fr;grid-auto-rows:min-content}.module-grid .app-module-sidebar{width:100%}@media (min-width: 1280px){.module-grid .app-module-sidebar{width:300px}}@media (min-width: 1536px){.module-grid .app-module-sidebar{width:400px}}@media (min-width: 1280px){.module-grid{grid-template-columns:300px calc(100% - 300px);grid-auto-rows:auto}.app-module-sidebar{min-height:calc(100vh - 108px)}}@media (min-width: 1536px){.module-grid{grid-template-columns:400px calc(100% - 400px)}}\n"],encapsulation:2}),e})()},7059:(I,f,a)=>{a.d(f,{C1:()=>u,Ed:()=>d,gA:()=>l,vJ:()=>b});var r=a(4717);function u(i,s="Any"){return function _(i){const s=Object.keys(i);return s.map(c=>i[c]).filter(c=>c).length===s.length}(i)?s:Object.keys(i).filter(p=>i[p]).map(e).map(l).join(", ")}function e(i){return i.charAt(0).toUpperCase()+i.slice(1)}function l(i){return(i??"").replaceAll(/([A-Z])/g," $1").trim()}function d(i){return i.endsWith("-a")||i.endsWith("-2")?r.n.BRONZE:i.endsWith("-b")||i.endsWith("-3")?r.n.SILVER:i.endsWith("-c")||i.endsWith("-4")?r.n.GOLD:i.endsWith("-d")||i.endsWith("-5")?r.n.OSMIUM:r.n.BASE}function b(i){return null!=i}}}]);