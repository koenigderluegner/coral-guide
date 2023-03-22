"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[1],{6336:(I,h,n)=>{n.d(h,{n:()=>e});var e=(()=>{return(t=e||(e={})).BASE="base",t.BRONZE="bronze",t.SILVER="silver",t.GOLD="gold",t.OSMIUM="osmium",e;var t})()},4175:(I,h,n)=>{n.d(h,{T:()=>v});var e=n(4650),t=n(5583),g=n(1281),d=n(9969),c=n(6895),o=n(795),s=n(8635),p=n(6336),l=n(2314);function C(m,b){if(1&m&&(e.ynx(0),e._UZ(1,"app-money",2)(2,"app-money",2)(3,"app-money",2)(4,"app-money",2)(5,"app-money",2),e.BQk()),2&m){const i=e.oxw();e.xp6(1),e.Q6J("amount",i.item.sellPrice),e.xp6(1),e.Q6J("amount",null==i.item.qualities.bronze?null:i.item.qualities.bronze.sellPrice),e.xp6(1),e.Q6J("amount",null==i.item.qualities.silver?null:i.item.qualities.silver.sellPrice),e.xp6(1),e.Q6J("amount",null==i.item.qualities.gold?null:i.item.qualities.gold.sellPrice),e.xp6(1),e.Q6J("amount",null==i.item.qualities.osmium?null:i.item.qualities.osmium.sellPrice)}}let a=(()=>{class m{constructor(){this._setClass=!0,this.QUALITY=p.n,this._includePrices=!1}get includePrices(){return this._includePrices}set includePrices(i){this._includePrices=(0,g.Ig)(i)}}return m.\u0275fac=function(i){return new(i||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-quality-grid"]],hostVars:2,hostBindings:function(i,u){2&i&&e.ekj("app-quality-grid",u._setClass)},inputs:{item:"item",includePrices:"includePrices"},decls:6,vars:11,consts:[[3,"itemName","quality"],[4,"ngIf"],[1,"text-black",3,"amount"]],template:function(i,u){1&i&&(e._UZ(0,"app-item-icon",0)(1,"app-item-icon",0)(2,"app-item-icon",0)(3,"app-item-icon",0)(4,"app-item-icon",0),e.YNc(5,C,6,5,"ng-container",1)),2&i&&(e.Q6J("itemName",null==u.item?null:u.item.iconName)("quality",u.QUALITY.BASE),e.xp6(1),e.Q6J("itemName",null==u.item?null:u.item.iconName)("quality",u.QUALITY.BRONZE),e.xp6(1),e.Q6J("itemName",null==u.item?null:u.item.iconName)("quality",u.QUALITY.SILVER),e.xp6(1),e.Q6J("itemName",null==u.item?null:u.item.iconName)("quality",u.QUALITY.GOLD),e.xp6(1),e.Q6J("itemName",null==u.item?null:u.item.iconName)("quality",u.QUALITY.OSMIUM),e.xp6(1),e.Q6J("ngIf",u.includePrices&&u.item))},dependencies:[c.O5,o.D,l.y],styles:[".app-quality-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));justify-items:center;column-gap:.75rem}.app-quality-grid .app-item-icon{background:rgba(127,127,127,.3);border-radius:16px;padding:3px}\n"],encapsulation:2}),m})();function _(m,b){if(1&m&&e._UZ(0,"app-quality-grid",9),2&m){const i=e.oxw(2);e.Q6J("item",i.fetchedItem)}}function r(m,b){if(1&m&&(e.TgZ(0,"app-card",2),e._UZ(1,"app-item-icon",3),e.TgZ(2,"div",4),e._uU(3),e.qZA(),e.TgZ(4,"span",5),e._uU(5),e.qZA(),e._UZ(6,"hr",6),e.TgZ(7,"span",7),e._uU(8),e.qZA(),e.Hsn(9),e.YNc(10,_,1,1,"app-quality-grid",8),e.ALo(11,"keyvalue"),e.qZA()),2&m){const i=e.oxw(),u=e.MAs(2);e.xp6(1),e.s9C("itemName",i.fetchedItem.iconName),e.Q6J("amount",i.amount),e.xp6(2),e.Oqu(i.fetchedItem.displayName),e.xp6(2),e.hij(" ",i.addSpacesToPascalCase(i.fetchedItem.displayKey),""),e.xp6(3),e.Oqu(i.fetchedItem.description),e.xp6(2),e.Q6J("ngIf",e.lcZ(11,7,i.fetchedItem.qualities).length&&!i.hideQualityGrid)("ngIfElse",u)}}function f(m,b){if(1&m&&(e.TgZ(0,"div",10),e._uU(1," Sells for: "),e._UZ(2,"app-money",11),e.qZA()),2&m){const i=e.oxw();e.xp6(2),e.Q6J("amount",null==i.fetchedItem?null:i.fetchedItem.sellPrice)}}const y=["*"];let v=(()=>{class m{constructor(i){this._database=i,this.openDrawerChange=new e.vpe,this.addSpacesToPascalCase=t.gA,this._hideQualityGrid=!1}get hideQualityGrid(){return this._hideQualityGrid}set hideQualityGrid(i){this._hideQualityGrid=(0,g.Ig)(i)}ngOnInit(){this._setItem(this.item)}isItem(i){return"sellPrice"in i}ngOnChanges(i){this._setItem(i.item.currentValue)}_setItem(i){i&&(this.fetchedItem=this.isItem(i)?i:this._database.getItems().find(u=>u.id===i.id))}}return m.\u0275fac=function(i){return new(i||m)(e.Y36(d.k))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-base-item-card"]],inputs:{item:"item",amount:"amount",hideQualityGrid:"hideQualityGrid"},outputs:{openDrawerChange:"openDrawerChange"},features:[e.TTD],ngContentSelectors:y,decls:3,vars:1,consts:[["class","text-lg font-semibold",4,"ngIf"],["basePrice",""],[1,"text-lg","font-semibold"],["cardIcon","",3,"itemName","amount"],[1,"text-black","text-2xl"],[1,"text-accent","text-2xl"],[1,"my-5"],[1,"text-lg","mb-6"],["includePrices","","class","mt-6",3,"item",4,"ngIf","ngIfElse"],["includePrices","",1,"mt-6",3,"item"],[1,"flex"],[1,"ml-2","text-black",3,"amount"]],template:function(i,u){1&i&&(e.F$t(),e.YNc(0,r,12,9,"app-card",0),e.YNc(1,f,3,1,"ng-template",null,1,e.W1O)),2&i&&e.Q6J("ngIf",u.fetchedItem)},dependencies:[c.O5,o.D,s.A,a,l.y,c.Nd]}),m})()},795:(I,h,n)=>{n.d(h,{D:()=>p});var e=n(1281),t=n(4650),g=n(6895),d=n(748);function c(l,C){if(1&l&&t._UZ(0,"app-item-icon",4),2&l){const a=t.oxw();t.Q6J("itemName",a.subIconName)}}function o(l,C){if(1&l&&t._UZ(0,"app-rarity-icon",5),2&l){const a=t.oxw();t.Q6J("quality",a.quality)}}function s(l,C){if(1&l&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&l){const a=t.oxw();t.xp6(1),t.Oqu(a.amount)}}let p=(()=>{class l{constructor(){this._setClass=!0,this._amount=0}get amount(){return this._amount}set amount(a){this._amount=(0,e.su)(a)}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-item-icon"]],hostVars:2,hostBindings:function(a,_){2&a&&t.ekj("app-item-icon",_._setClass)},inputs:{itemName:"itemName",subIconName:"subIconName",quality:"quality",amount:"amount"},decls:4,vars:4,consts:[["loading","lazy","onerror","this.onerror=null;this.src='assets/ui/images/placeholder.png'","alt","",3,"src"],["class","!absolute bottom-[5px] left-[5px] w-[50%]",3,"itemName",4,"ngIf"],["class","absolute top-[5px] left-[5px] w-[35%]",3,"quality",4,"ngIf"],["class","bg-[#F1D9B5] absolute bottom-0 right-0 py-1 px-2 text-black font-semibold text-lg rounded-lg",4,"ngIf"],[1,"!absolute","bottom-[5px]","left-[5px]","w-[50%]",3,"itemName"],[1,"absolute","top-[5px]","left-[5px]","w-[35%]",3,"quality"],[1,"bg-[#F1D9B5]","absolute","bottom-0","right-0","py-1","px-2","text-black","font-semibold","text-lg","rounded-lg"]],template:function(a,_){1&a&&(t._UZ(0,"img",0),t.YNc(1,c,1,1,"app-item-icon",1),t.YNc(2,o,1,1,"app-rarity-icon",2),t.YNc(3,s,2,1,"div",3)),2&a&&(t.MGl("src","assets/items/icons/",_.itemName,"",t.LSH),t.xp6(1),t.Q6J("ngIf",_.subIconName),t.xp6(1),t.Q6J("ngIf",_.quality),t.xp6(1),t.Q6J("ngIf",_.amount>1))},dependencies:[g.O5,l,d.C],styles:[".app-item-icon{position:relative;display:block}.app-item-icon>img{width:100%;height:auto;aspect-ratio:1/1}\n"],encapsulation:2}),l})()},9473:(I,h,n)=>{n.d(h,{I:()=>C});var e=n(4650),t=n(2289),g=n(15),d=n(1281),c=n(3267),o=n(4122);const s=["drawer"],p=[[["","listDetail",""]],"*"],l=["[listDetail]","*"];let C=(()=>{class a{get openDrawer(){return this._openDrawer}set openDrawer(r){this._openDrawer=(0,d.Ig)(r),this.openDrawer?this.drawer?.open():this.drawer?.close()}get removePlaceholder(){return this._removePlaceholder}set removePlaceholder(r){this._removePlaceholder=(0,d.Ig)(r)}constructor(){this.openDrawerChange=new e.vpe,this._openDrawer=!1,this._removePlaceholder=!1,this.uiIcon=g.a,this.media=(0,e.f3M)(t.vx),this.changeDetectorRef=(0,e.f3M)(e.sBO),this.mobileQuery=this.media.matchMedia("(max-width: 600px)"),this._mobileQueryListener=()=>this.changeDetectorRef.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener)}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-list-detail-container"]],viewQuery:function(r,f){if(1&r&&e.Gf(s,5),2&r){let y;e.iGM(y=e.CRH())&&(f.drawer=y.first)}},inputs:{openDrawer:"openDrawer",removePlaceholder:"removePlaceholder"},outputs:{openDrawerChange:"openDrawerChange"},ngContentSelectors:l,decls:8,vars:6,consts:[[3,"hasBackdrop"],["position","end",1,"w-full","lg:w-[600px]",3,"mode","fixedInViewport","closed"],["drawer",""],["type","button",1,"drawer-close-button",3,"click"],[1,"!w-8","!h-8",3,"uiIcon"],[1,"pt-2","pb-6","2xl:pt-[60px]","w-full"]],template:function(r,f){if(1&r){const y=e.EpF();e.F$t(p),e.TgZ(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2),e.NdJ("closed",function(){return f.openDrawerChange.emit(!1)}),e.TgZ(3,"button",3),e.NdJ("click",function(){e.CHM(y);const m=e.MAs(2);return e.KtG(m.close())}),e._UZ(4,"app-ui-icon",4),e.qZA(),e.Hsn(5),e.qZA(),e.TgZ(6,"mat-sidenav-content",5),e.Hsn(7,1),e.qZA()()}2&r&&(e.Q6J("hasBackdrop",!1),e.xp6(1),e.Q6J("mode","over")("fixedInViewport",f.mobileQuery.matches),e.xp6(3),e.Q6J("uiIcon",f.uiIcon.CROSS),e.xp6(2),e.ekj("placeholder-padding",!f.removePlaceholder))},dependencies:[c.JX,c.TM,c.Rh,o.f],styles:["@media (min-width: 1280px){.placeholder-padding[_ngcontent-%COMP%]{padding-right:600px}}"]}),a})()},5141:(I,h,n)=>{n.d(h,{z:()=>c});var e=n(4650);const t=["innerTemplate"];function g(o,s){1&o&&e.Hsn(0)}const d=["*"];let c=(()=>{class o{constructor(){this.innerTemplate=null}}return o.\u0275fac=function(p){return new(p||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-module-sidebar-item"]],viewQuery:function(p,l){if(1&p&&e.Gf(t,5),2&p){let C;e.iGM(C=e.CRH())&&(l.innerTemplate=C.first)}},inputs:{uiIcon:"uiIcon",routerLink:"routerLink"},ngContentSelectors:d,decls:2,vars:0,consts:[["innerTemplate",""]],template:function(p,l){1&p&&(e.F$t(),e.YNc(0,g,1,0,"ng-template",null,0,e.W1O))},encapsulation:2}),o})()},2364:(I,h,n)=>{n.d(h,{R:()=>C});var e=n(5141),t=n(4650),g=n(6895),d=n(1667),c=n(4122);function o(a,_){if(1&a&&t._UZ(0,"app-ui-icon",5),2&a){const r=t.oxw().$implicit;t.Q6J("uiIcon",r.uiIcon)}}function s(a,_){}function p(a,_){if(1&a){const r=t.EpF();t.ynx(0),t.TgZ(1,"li")(2,"a",1),t.NdJ("click",function(){t.CHM(r);const y=t.oxw();return t.KtG(y.showMenu=!1)}),t.YNc(3,o,1,1,"app-ui-icon",2),t.YNc(4,s,0,0,"ng-template",3),t.TgZ(5,"button",4),t.NdJ("click",function(y){t.CHM(r);const v=t.oxw();return t.KtG(v.toggleMenu(y))}),t._uU(6,"Menu "),t.qZA()()(),t.BQk()}if(2&a){const r=_.$implicit,f=_.last;t.xp6(2),t.ekj("mb-4",!f),t.Q6J("routerLink",r.routerLink)("routerLinkActive","active"),t.xp6(1),t.Q6J("ngIf",r.uiIcon),t.xp6(1),t.Q6J("ngTemplateOutlet",r.innerTemplate)}}const l=function(){return[]};let C=(()=>{class a{constructor(){this._setClass=!0,this.showMenu=!1}toggleMenu(r){r.preventDefault(),r.stopPropagation(),this.showMenu=!this.showMenu}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-module-sidebar"]],contentQueries:function(r,f,y){if(1&r&&t.Suo(y,e.z,4),2&r){let v;t.iGM(v=t.CRH())&&(f.viewChildren=v)}},hostVars:2,hostBindings:function(r,f){2&r&&t.ekj("app-module-sidebar",f._setClass)},decls:4,vars:4,consts:[[4,"ngFor","ngForOf"],[1,"app-module-sidebar-list-item",3,"routerLink","routerLinkActive","click"],["class","!h-8",3,"uiIcon",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"xl:hidden","block","ml-auto","m-[-18px]","border-l-2","px-5","h-[45px]",3,"click"],[1,"!h-8",3,"uiIcon"]],template:function(r,f){if(1&r&&(t.TgZ(0,"aside")(1,"nav")(2,"ul"),t.YNc(3,p,7,6,"ng-container",0),t.qZA()()()),2&r){let y;t.xp6(2),t.ekj("hide-menu",!f.showMenu),t.xp6(1),t.Q6J("ngForOf",null!==(y=null==f.viewChildren?null:f.viewChildren.toArray())&&void 0!==y?y:t.DdM(3,l))}},dependencies:[g.sg,g.O5,g.tP,d.rH,d.Od,c.f],styles:[".app-module-sidebar{display:block;padding-top:.5rem;padding-bottom:.5rem;--tw-backdrop-blur: blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);background-color:#000000bf;padding-left:max(8px,env(safe-area-inset-left));padding-right:max(8px,env(safe-area-inset-right))}.app-module-sidebar .hide-menu .app-module-sidebar-list-item:not(.active){display:none}@media (min-width: 1536px){.app-module-sidebar{padding:60px 40px 60px 60px}}.app-module-sidebar-list-item{padding:15px;border-radius:30px;height:46px;border:3px solid #191919;display:flex;align-items:center;justify-content:center;column-gap:.5rem;--tw-border-opacity: 1;border-color:rgb(115 115 115 / var(--tw-border-opacity));font-size:1.125rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover .app-ui-icon{color:#645a54}.app-module-sidebar-list-item .app-ui-icon{color:#3f3834}.app-module-sidebar-list-item.active{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.app-module-sidebar-list-item.active .app-ui-icon{color:#e4b07e}.app-module-sidebar-list-item:not(.active) button{display:none}@media (min-width: 1280px){.app-module-sidebar-list-item{display:flex!important;height:80px}}\n"],encapsulation:2}),a})()},2314:(I,h,n)=>{n.d(h,{y:()=>g});var e=n(4650),t=n(6895);let g=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-money"]],inputs:{amount:"amount"},decls:3,vars:3,consts:[["src","assets/ui/images/icons/T_IconCoin.png",1,"app-money-icon"]],template:function(o,s){1&o&&(e._uU(0),e.ALo(1,"number"),e._UZ(2,"img",0)),2&o&&e.Oqu(e.lcZ(1,1,s.amount))},dependencies:[t.JJ],styles:[".app-money-icon[_ngcontent-%COMP%]{height:1em;display:inline-block;vertical-align:text-top;margin-left:2px}"]}),d})()},748:(I,h,n)=>{n.d(h,{C:()=>c});var e=n(6336),t=n(4650),g=n(6895);function d(o,s){if(1&o&&(t._UZ(0,"img",1),t.ALo(1,"titlecase")),2&o){const p=t.oxw();t.MGl("src","assets/ui/images/icons/quality-stars/T_Icon_Star",t.lcZ(1,1,p.quality),"B.png",t.LSH)}}let c=(()=>{class o{constructor(){this.QUALITY=e.n}}return o.\u0275fac=function(p){return new(p||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-rarity-icon"]],inputs:{quality:"quality"},decls:1,vars:1,consts:[["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src",4,"ngIf"],["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src"]],template:function(p,l){1&p&&t.YNc(0,d,2,3,"img",0),2&p&&t.Q6J("ngIf",l.quality&&l.quality!==l.QUALITY.BASE)},dependencies:[g.O5,g.rS],styles:["[_nghost-%COMP%]{display:block}"]}),o})()},973:(I,h,n)=>{n.d(h,{L:()=>d});var e=n(4650);const t=[[["app-module-sidebar"]],"*"],g=["app-module-sidebar","*"];let d=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-sidebar-container"]],ngContentSelectors:g,decls:4,vars:0,consts:[[1,"h-full","grid","module-grid"],[1,"px-safe"]],template:function(s,p){1&s&&(e.F$t(t),e.TgZ(0,"div",0),e.Hsn(1),e.TgZ(2,"div",1),e.Hsn(3,1),e.qZA()())},styles:[".module-grid{grid-template-columns:1fr;grid-auto-rows:min-content}.module-grid .app-module-sidebar{width:100%}@media (min-width: 1280px){.module-grid .app-module-sidebar{width:300px}}@media (min-width: 1536px){.module-grid .app-module-sidebar{width:400px}}@media (min-width: 1280px){.module-grid{grid-template-columns:300px calc(100% - 300px);grid-auto-rows:auto}.app-module-sidebar{min-height:calc(100vh - 108px)}}@media (min-width: 1536px){.module-grid{grid-template-columns:400px calc(100% - 400px)}}\n"],encapsulation:2}),c})()},5583:(I,h,n)=>{function g(o,s="Any"){return function t(o){const s=Object.keys(o);return s.map(l=>o[l]).filter(l=>l).length===s.length}(o)?s:Object.keys(o).filter(p=>o[p]).map(d).map(c).join(", ")}function d(o){return o.charAt(0).toUpperCase()+o.slice(1)}function c(o){return o.replaceAll(/([A-Z])/g," $1").trim()}n.d(h,{C1:()=>g,gA:()=>c})}}]);