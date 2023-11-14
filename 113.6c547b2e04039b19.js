"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[113],{1560:(y,b,o)=>{o.d(b,{xI:()=>i,D:()=>p,vq:()=>n,fQ:()=>g,lB:()=>_,nJ:()=>t,y_:()=>e,ln:()=>r,sg:()=>s,vo:()=>l,yO:()=>d});var t=function(c){return c.BASE="base",c.BRONZE="bronze",c.SILVER="silver",c.GOLD="gold",c.OSMIUM="osmium",c}(t||{}),e=function(c){return c.SPRING="Spring",c.SUMMER="Summer",c.FALL="Fall",c.WINTER="Winter",c}(e||{}),d=function(c){return c.SUNNY="Sunny",c.RAIN="Rain",c.STORM="Storm",c.WINDY="Windy",c.SNOW="Snow",c.BLIZZARD="Blizzard",c}(d||{}),a=o(3503);const l=["blacksmith","lab","general-store","carpenter","merfolk-oracle-tail-store","merfolk-general-store","pet-shop","ranch","beach-shack","concerned-monkey","bens-caravan","bos","socket-and-pan","coffee","white-flamingo","tavern"],r={blacksmith:"Blacksmith",lab:"Lab","general-store":"Sams general store",carpenter:"Carpenter","merfolk-general-store":"Merfolk general store","merfolk-oracle-tail-store":"Merfolk tail store","pet-shop":"Pet Shop",ranch:"Ranch","beach-shack":"Beach Shack","concerned-monkey":"Concerned Monkey","bens-caravan":"Bens Caravan",bos:"Band of Smiles","socket-and-pan":"Socket & Pan",tavern:"Fishensips",coffee:"Raj's Coffee Corner","white-flamingo":"White Flamingo"},s={blacksmith:a.a.BLACKSMITH,lab:a.a.LAB,"general-store":a.a.STORE,carpenter:a.a.CARPENTER,"merfolk-general-store":a.a.CORAL,"merfolk-oracle-tail-store":a.a.CORAL,"pet-shop":a.a.ANIMAL_SHELTER,ranch:a.a.RANCH,"beach-shack":a.a.BEACH_SHACK,"concerned-monkey":a.a.ACHIEVEMENT,"bens-caravan":a.a.CARAVAN,bos:a.a.BESTIARY,"socket-and-pan":a.a.COOKING,coffee:a.a.COFFEE,"white-flamingo":a.a.CLOTHING_STORE,tavern:a.a.TAVERN},p=["de","en","es","fr","id","ja","zh-CN","ko","pt-BR"],i={de:"german",en:"english",id:"indonesian",fr:"french",es:"spanish",ja:"japanese","zh-CN":"chinese simplified",ko:"korean","pt-BR":"brazilian portuguese"},_=["cherry-blossom","earth-day","tree-planting","animal","beach-clean-up","spooky","harvest","new-year-eve","winter-fair"],n={"cherry-blossom":"Cherry blossom","earth-day":"Earth Day","tree-planting":"Tree Planting",animal:"Animal","beach-clean-up":"Beach Clean Up",spooky:"Spooky",harvest:"Harvest","new-year-eve":"New Year Eve Feast","winter-fair":"Winter Fair"},g={"winter-fair":a.a.WINTER_FAIR,"earth-day":a.a.EARTH,"tree-planting":a.a.EARTH,animal:a.a.ANIMAL_DAY,"beach-clean-up":a.a.OCEAN_CLEAN_UP,spooky:a.a.SPOOKY,harvest:a.a.MOONCAKE,"new-year-eve":a.a.NEW_YEAR,"cherry-blossom":a.a.CHERRY_BLOSSOM}},7251:(y,b,o)=>{o.d(b,{D:()=>p});var t=o(5879),e=o(9729),d=o(6814),a=o(3953);function l(i,_){if(1&i&&t._UZ(0,"app-item-icon",4),2&i){const n=t.oxw();t.Q6J("itemName",n.subIconName)}}function r(i,_){if(1&i&&t._UZ(0,"app-rarity-icon",5),2&i){const n=t.oxw();t.Q6J("quality",n.quality)}}function s(i,_){if(1&i&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&i){const n=t.oxw();t.xp6(1),t.Oqu(n.amount)}}let p=(()=>{var i;class _{constructor(g){this._settings=g,this.amount=0,this._setClass=!0,this.version=this._settings.getSettings().useBeta?"beta":"live"}}return(i=_).\u0275fac=function(g){return new(g||i)(t.Y36(e.g))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-item-icon"]],hostVars:2,hostBindings:function(g,h){2&g&&t.ekj("app-item-icon",h._setClass)},inputs:{itemName:"itemName",subIconName:"subIconName",quality:"quality",amount:["amount","amount",t.Cb_]},features:[t.Xq5],decls:4,vars:5,consts:[["loading","lazy","onerror","this.onerror=null;this.src='assets/ui/images/placeholder.png'","alt","",3,"src"],["class","!absolute bottom-[5px] left-[5px] w-[50%]",3,"itemName",4,"ngIf"],["class","absolute top-[5px] left-[5px] w-[35%]",3,"quality",4,"ngIf"],["class","bg-[#F1D9B5] absolute bottom-0 right-0 py-1 px-2 text-black font-semibold text-lg rounded-lg",4,"ngIf"],[1,"!absolute","bottom-[5px]","left-[5px]","w-[50%]",3,"itemName"],[1,"absolute","top-[5px]","left-[5px]","w-[35%]",3,"quality"],[1,"bg-[#F1D9B5]","absolute","bottom-0","right-0","py-1","px-2","text-black","font-semibold","text-lg","rounded-lg"]],template:function(g,h){1&g&&(t._UZ(0,"img",0),t.YNc(1,l,1,1,"app-item-icon",1),t.YNc(2,r,1,1,"app-rarity-icon",2),t.YNc(3,s,2,1,"div",3)),2&g&&(t.hYB("src","assets/",h.version,"/items/icons/",h.itemName,".webp",t.LSH),t.xp6(1),t.Q6J("ngIf",h.subIconName),t.xp6(1),t.Q6J("ngIf",h.quality),t.xp6(1),t.Q6J("ngIf",h.amount>1))},dependencies:[d.O5,i,a.C],styles:[".app-item-icon{position:relative;display:block}.app-item-icon>img{max-width:100%;height:auto;aspect-ratio:1/1}\n"],encapsulation:2}),_})()},6114:(y,b,o)=>{o.d(b,{z:()=>l});var t=o(5879);const e=["innerTemplate"];function d(r,s){1&r&&t.Hsn(0)}const a=["*"];let l=(()=>{var r;class s{constructor(){this.innerTemplate=null,this.active=!1}}return(r=s).\u0275fac=function(i){return new(i||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-module-sidebar-item"]],viewQuery:function(i,_){if(1&i&&t.Gf(e,5),2&i){let n;t.iGM(n=t.CRH())&&(_.innerTemplate=n.first)}},inputs:{uiIcon:"uiIcon",routerLink:"routerLink",exact:["exact","exact",t.VuI],active:["active","active",t.VuI]},features:[t.Xq5],ngContentSelectors:a,decls:2,vars:0,consts:[["innerTemplate",""]],template:function(i,_){1&i&&(t.F$t(),t.YNc(0,d,1,0,"ng-template",null,0,t.W1O))},encapsulation:2}),s})()},290:(y,b,o)=>{o.d(b,{R:()=>c});var t=o(6114),e=o(5879),d=o(6814),a=o(2787),l=o(3861);function r(u,C){if(1&u&&e._UZ(0,"app-ui-icon",7),2&u){const f=e.oxw(2).$implicit;e.Q6J("uiIcon",f.uiIcon)}}function s(u,C){}const p=function(u){return{exact:u}};function i(u,C){if(1&u){const f=e.EpF();e.TgZ(0,"li")(1,"a",3),e.NdJ("click",function(){e.CHM(f);const v=e.oxw(2);return e.KtG(v.showMenu=!1)}),e.YNc(2,r,1,1,"app-ui-icon",4),e.YNc(3,s,0,0,"ng-template",5),e.TgZ(4,"button",6),e.NdJ("click",function(v){e.CHM(f);const x=e.oxw(2);return e.KtG(x.toggleMenu(v))}),e._uU(5,"Menu "),e.qZA()()()}if(2&u){const f=e.oxw(),m=f.$implicit,v=f.last;e.xp6(1),e.ekj("custom-active",m.active)("mb-4",!v),e.Q6J("routerLink",m.routerLink)("routerLinkActive","active")("routerLinkActiveOptions",e.VKq(9,p,!!m.exact)),e.xp6(1),e.Q6J("ngIf",m.uiIcon),e.xp6(1),e.Q6J("ngTemplateOutlet",m.innerTemplate)}}function _(u,C){}function n(u,C){if(1&u&&(e.TgZ(0,"li",8),e.YNc(1,_,0,0,"ng-template",5),e.qZA()),2&u){const f=e.oxw().$implicit;e.xp6(1),e.Q6J("ngTemplateOutlet",f.innerTemplate)}}function g(u,C){if(1&u&&(e.ynx(0),e.YNc(1,i,6,11,"li",1),e.YNc(2,n,2,1,"li",2),e.BQk()),2&u){const f=C.$implicit;e.xp6(1),e.Q6J("ngIf",f.routerLink),e.xp6(1),e.Q6J("ngIf",!f.routerLink)}}const h=function(){return[]};let c=(()=>{var u;class C{constructor(){this._setClass=!0,this.showMenu=!1}toggleMenu(m){m.preventDefault(),m.stopPropagation(),this.showMenu=!this.showMenu}}return(u=C).\u0275fac=function(m){return new(m||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-module-sidebar"]],contentQueries:function(m,v,x){if(1&m&&e.Suo(x,t.z,4),2&m){let I;e.iGM(I=e.CRH())&&(v.viewChildren=I)}},hostVars:2,hostBindings:function(m,v){2&m&&e.ekj("app-module-sidebar",v._setClass)},decls:4,vars:4,consts:[[4,"ngFor","ngForOf"],[4,"ngIf"],["class","module-sidebar-list-divider mb-3 mt-9 text-xl text-white/70 font-semibold",4,"ngIf"],[1,"app-module-sidebar-list-item",3,"routerLink","routerLinkActive","routerLinkActiveOptions","click"],["class","!h-6",3,"uiIcon",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"xl:hidden","block","ml-auto","m-[-18px]","border-l-2","px-5","h-[45px]",3,"click"],[1,"!h-6",3,"uiIcon"],[1,"module-sidebar-list-divider","mb-3","mt-9","text-xl","text-white/70","font-semibold"]],template:function(m,v){if(1&m&&(e.TgZ(0,"aside")(1,"nav")(2,"ul"),e.YNc(3,g,3,2,"ng-container",0),e.qZA()()()),2&m){let x;e.xp6(2),e.ekj("hide-menu",!v.showMenu),e.xp6(1),e.Q6J("ngForOf",null!==(x=null==v.viewChildren?null:v.viewChildren.toArray())&&void 0!==x?x:e.DdM(3,h))}},dependencies:[d.sg,d.O5,d.tP,a.rH,a.Od,l.f],styles:[".app-module-sidebar{display:block;padding-top:.5rem;padding-bottom:.5rem;--tw-backdrop-blur: blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);background-color:#000000bf;padding-left:max(8px,env(safe-area-inset-left));padding-right:max(8px,env(safe-area-inset-right))}.app-module-sidebar .hide-menu .app-module-sidebar-list-item:not(.active):not(.custom-active),.app-module-sidebar .hide-menu .module-sidebar-list-divider{display:none}@media (min-width: 1280px){.module-sidebar-list-divider{display:block!important}}@media (min-width: 1536px){.app-module-sidebar{padding:60px 40px 60px 60px}}.app-module-sidebar-list-item{padding:8px;border-radius:30px;height:46px;border:3px solid #191919;display:flex;align-items:center;justify-content:center;column-gap:.5rem;--tw-border-opacity: 1;border-color:rgb(115 115 115 / var(--tw-border-opacity));font-size:1.125rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover .app-ui-icon{color:#645a54}.app-module-sidebar-list-item .app-ui-icon{color:#3f3834}.app-module-sidebar-list-item.active,.app-module-sidebar-list-item.custom-active{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.app-module-sidebar-list-item.active .app-ui-icon,.app-module-sidebar-list-item.custom-active .app-ui-icon{color:#e4b07e}.app-module-sidebar-list-item:not(.active):not(.custom-active) button{display:none}@media (min-width: 1280px){.app-module-sidebar-list-item{display:flex!important;height:50px}}\n"],encapsulation:2}),C})()},6945:(y,b,o)=>{o.d(b,{y:()=>d});var t=o(5879),e=o(6814);let d=(()=>{var a;class l{}return(a=l).\u0275fac=function(s){return new(s||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-money"]],inputs:{amount:["amount","amount",t.Cb_]},features:[t.Xq5],decls:3,vars:3,consts:[["src","assets/ui/images/icons/T_IconCoin.png",1,"app-money-icon"]],template:function(s,p){1&s&&(t._uU(0),t.ALo(1,"number"),t._UZ(2,"img",0)),2&s&&t.Oqu(t.lcZ(1,1,p.amount))},dependencies:[e.JJ],styles:["[_nghost-%COMP%]{white-space:nowrap}.app-money-icon[_ngcontent-%COMP%]{height:1em;display:inline-block;vertical-align:text-top;margin-left:2px}"]}),l})()},3953:(y,b,o)=>{o.d(b,{C:()=>l});var t=o(1560),e=o(5879),d=o(6814);function a(r,s){if(1&r&&(e._UZ(0,"img",1),e.ALo(1,"titlecase")),2&r){const p=e.oxw();e.MGl("src","assets/ui/images/icons/quality-stars/T_Icon_Star",e.lcZ(1,1,p.quality),"B.png",e.LSH)}}let l=(()=>{var r;class s{constructor(){this.QUALITY=t.nJ}}return(r=s).\u0275fac=function(i){return new(i||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-rarity-icon"]],inputs:{quality:"quality"},decls:1,vars:1,consts:[["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src",4,"ngIf"],["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src"]],template:function(i,_){1&i&&e.YNc(0,a,2,3,"img",0),2&i&&e.Q6J("ngIf",_.quality&&_.quality!==_.QUALITY.BASE)},dependencies:[d.O5,d.rS],styles:["[_nghost-%COMP%]{display:block}"]}),s})()},8227:(y,b,o)=>{o.d(b,{L:()=>a});var t=o(5879);const e=[[["app-module-sidebar"]],"*"],d=["app-module-sidebar","*"];let a=(()=>{var l;class r{}return(l=r).\u0275fac=function(p){return new(p||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-sidebar-container"]],ngContentSelectors:d,decls:4,vars:0,consts:[[1,"h-full","grid","module-grid"],[1,"px-safe"]],template:function(p,i){1&p&&(t.F$t(e),t.TgZ(0,"div",0),t.Hsn(1),t.TgZ(2,"div",1),t.Hsn(3,1),t.qZA()())},styles:[".module-grid{grid-template-columns:1fr;grid-auto-rows:min-content}.module-grid .app-module-sidebar{width:100%}@media (min-width: 1280px){.module-grid .app-module-sidebar{width:300px}}@media (min-width: 1536px){.module-grid .app-module-sidebar{width:400px}}@media (min-width: 1280px){.module-grid{grid-template-columns:300px calc(100% - 300px);grid-auto-rows:auto}.app-module-sidebar{min-height:calc(100vh - (var(--cg-min-header-height) + var(--cg-min-footer-height)))}}@media (min-width: 1536px){.module-grid{grid-template-columns:400px calc(100% - 400px)}}\n"],encapsulation:2}),r})()},4922:(y,b,o)=>{o.d(b,{O:()=>d});var t=o(880),e=o(5879);let d=(()=>{var a;class l{transform(s){return s?(0,t.gA)(s):""}}return(a=l).\u0275fac=function(s){return new(s||a)},a.\u0275pipe=e.Yjl({name:"addSpacesToPascalCase",type:a,pure:!0}),l})()},880:(y,b,o)=>{o.d(b,{gA:()=>r,dG:()=>_,Ed:()=>p,C1:()=>a,vJ:()=>i});var t=o(1560);function a(n,g="Any"){return function d(n){const g=Object.keys(n);return g.map(c=>n[c]).filter(c=>c).length===g.length}(n)?g:Object.keys(n).filter(h=>n[h]).map(l).map(r).join(", ")}function l(n){return n.charAt(0).toUpperCase()+n.slice(1)}function r(n){return(n??"").replaceAll(/([A-Z])/g," $1").trim()}function p(n){return n.endsWith("-a")||n.endsWith("-2")?t.nJ.BRONZE:n.endsWith("-b")||n.endsWith("-3")?t.nJ.SILVER:n.endsWith("-c")||n.endsWith("-4")?t.nJ.GOLD:n.endsWith("-d")||n.endsWith("-5")?t.nJ.OSMIUM:t.nJ.BASE}function i(n){return null!=n}function _(n){return"id"in n?n.id:n.key}}}]);