import{$a as it,$d as S,Aa as p,Ae as xe,Bb as ot,Be as he,Ca as Q,Ce as ge,De as gt,Fa as _,Fe as Re,G as De,Ga as T,Ge as yt,Ha as y,Hb as at,Hd as lt,He as bt,Ia as b,Ib as W,Ie as ye,Ja as r,Jb as N,Je as Fe,K as Pe,Ka as m,Kb as oe,Kd as F,Ke as Le,La as u,Le as $e,Ma as h,Md as qe,Me as Be,N as D,Na as g,Nd as mt,Ne as be,Oa as Xe,Ob as j,Oe as Te,P as x,Pa as A,Pd as v,Pe as ve,Q as Me,Qd as pt,Qe as Tt,R as Ye,Ra as O,Rd as st,Re as Ie,Sa as s,Sd as ct,Td as K,Ud as dt,V as B,Va as Ze,Vd as ut,W as U,Wd as _t,We as vt,Xd as ft,Xe as Ue,Ya as et,Z,Zb as Ne,Zd as Ct,_a as tt,_b as we,_d as ae,ca as H,db as d,eb as I,fb as M,gb as E,hb as nt,ib as te,ic as rt,jb as ie,ka as a,kb as ne,ke as xt,l as ke,m as Ke,mb as V,me as re,mf as G,na as Je,ne as le,ob as L,pe as me,qb as f,qc as R,qe as ht,ra as ze,rb as C,se as pe,ta as P,te as se,ue as ce,va as Ee,ve as de,wa as c,we as ue,x as X,xe as _e,yb as q,ye as fe,za as ee,ze as Ce}from"./chunk-4KZEYPV3.js";function Vt(e,t){if(e&1&&(r(0,"app-module-sidebar-item",1),d(1,"Inventory-Crafting "),m(),r(2,"app-module-sidebar-item",2),d(3,"Processing "),m(),r(4,"app-module-sidebar-item",3),d(5,"Cooking "),m(),r(6,"app-module-sidebar-item",4),d(7,"Mixing "),m()),e&2){let i=s();p("uiIcon",i.UI_ICONS.CRAFTING),a(2),p("uiIcon",i.UI_ICONS.ARTISAN),a(2),p("uiIcon",i.UI_ICONS.COOKING),a(2),p("uiIcon",i.UI_ICONS.PLANT)}}var St=(()=>{let t=class t{constructor(){this.UI_ICONS=we,this.addSpacesToPascalCase=rt,this._databaseService=D(R),this.itemProcessingRecipes$=this._databaseService.fetchItemProcessingRecipes$()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=x({type:t,selectors:[["app-crafting"]],decls:5,vars:3,consts:[[1,"hidden"],["routerLink","inventory",3,"uiIcon"],["routerLink","artisan",3,"uiIcon"],["routerLink","cooking",3,"uiIcon"],["routerLink","mixing",3,"uiIcon"]],template:function(n,l){n&1&&(r(0,"app-sidebar-container")(1,"app-module-sidebar"),c(2,Vt,8,4),f(3,"async"),m(),u(4,"router-outlet",0),m()),n&2&&(a(2),_(C(3,1,l.itemProcessingRecipes$)?2:-1))},dependencies:[lt,F,st,pt,xt,W],encapsulation:2});let e=t;return e})();var Se=(()=>{let t=class t{static ngTemplateContextGuard(o,n){return!0}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=Ye({type:t,selectors:[["","appDatabaseItemDetails",""]],standalone:!0});let e=t;return e})();var qt=e=>["/database",e],jt=e=>({$implicit:e});function Gt(e,t){e&1&&Xe(0)}function Qt(e,t){if(e&1&&u(0,"app-quality-grid",16),e&2){let i=s();p("item",i.item)}}function Wt(e,t){if(e&1&&(r(0,"div",17),d(1," Sells for: "),u(2,"app-money",18),m()),e&2){let i=s();a(2),p("amount",i.item.sellPrice)}}function Kt(e,t){if(e&1){let i=A();r(0,"app-card",0)(1,"div",1),u(2,"app-to-do-toggle",2),r(3,"button",3),O("click",function(){B(i);let n=s();return U(n.listDetails.close())}),u(4,"app-ui-icon",4),m()(),u(5,"app-item-icon",5),r(6,"div",6)(7,"div",7)(8,"div",8),d(9),m(),r(10,"span",9),d(11),f(12,"addSpacesToPascalCase"),m()(),r(13,"span",10)(14,"a",11),u(15,"app-ui-icon",12),m()()(),u(16,"hr",13),r(17,"span",14),d(18),m(),c(19,Gt,1,0,"ng-container",15)(20,Qt,1,1,"app-quality-grid",16),f(21,"keyvalue"),c(22,Wt,3,1,"div",17),m()}if(e&2){let i=t,o=s();a(2),p("item",i.item)("context",o.context())("amount",o.amount())("quality",o.quality()),a(2),p("uiIcon",o.uiIcon.CROSS),a(),Ze("itemName",i.item.iconName),p("amount",o.amount()),a(4),I(i.item.displayName),a(2),M(" ",C(12,15,i.item.displayKey),""),a(3),p("routerLink",L(19,qt,i.item.id)),a(),p("uiIcon",o.uiIcon.DATABASE),a(3),I(i.item.description),a(),p("ngTemplateOutlet",o.databaseItemDetails)("ngTemplateOutletContext",L(21,jt,i)),a(),_(C(21,17,i.item.qualities).length&&!o.hideQualityGrid()?20:22)}}var z=(()=>{let t=class t{constructor(){this.itemId=H.required(),this.hideQualityGrid=H(!1,{transform:q}),this.context=H(),this.amount=H(),this.quality=H(),this.databaseItemDetails=null,this.databaseItem=ze(void 0),this.UiIcon=we,this.uiIcon=we,this.listDetails=D(ut),this.database=D(R),ot(()=>{this.database.fetchDatabaseItem$(this.itemId()).pipe(X(1)).subscribe({next:o=>{this.databaseItem.set(o)}})},{allowSignalWrites:!0})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=x({type:t,selectors:[["app-database-item-details"]],contentQueries:function(n,l,k){if(n&1&&et(k,Je,5),n&2){let $;tt($=it())&&(l.databaseItemDetails=$.first)}},inputs:{itemId:[1,"itemId"],hideQualityGrid:[1,"hideQualityGrid"],context:[1,"context"],amount:[1,"amount"],quality:[1,"quality"]},standalone:!0,features:[V],decls:1,vars:1,consts:[[1,"text-lg","font-semibold","relative"],["cardActions","",1,"card-actions"],[3,"item","context","amount","quality"],["matTooltip","Close",3,"click"],[1,"!w-8","!h-8","hover:text-black","focus-visible:text-black",3,"uiIcon"],["cardIcon","",3,"amount","itemName"],[1,"flex","justify-between","items-center"],[1,"flex","flex-col"],[1,"text-black","text-2xl"],[1,"text-accent","text-2xl"],["matTooltip","Open in database","matTooltipPosition","before"],[3,"routerLink"],[1,"focus-visible:!text-black","hover:!text-black",3,"uiIcon"],[1,"my-5"],[1,"text-lg","mb-6"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["includePrices","",1,"mt-6",3,"item"],[1,"flex"],[1,"ml-2","text-black",3,"amount"]],template:function(n,l){if(n&1&&c(0,Kt,23,23,"app-card",0),n&2){let k;_((k=l.databaseItem())?0:-1,k)}},dependencies:[j,at,oe,ft,_t,F,S,G,v,ct,dt,K,Ct,mt],encapsulation:2});let e=t;return e})();function Jt(e,t){if(e&1&&(r(0,"div"),d(1," Unlocked: "),r(2,"span",1),d(3),m()()),e&2){let i=s();a(3),E("Level ",i.craftingUnlock.masteryLevel," in ",i.craftingUnlock.masteryType,"")}}function zt(e,t){if(e&1&&(c(0,Jt,4,2,"div"),u(1,"app-item-list",0),f(2,"craftingRecipeIngredients")),e&2){let i=t;_(i.craftingUnlock?0:-1),a(),p("itemList",C(2,2,i))}}var He=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=x({type:t,selectors:[["app-inventory-crafting"]],inputs:{details:"details"},standalone:!0,features:[V],decls:1,vars:1,consts:[[1,"mb-3",3,"itemList"],[1,"text-black"]],template:function(n,l){if(n&1&&c(0,zt,3,4,"app-item-list",0),n&2){let k;_((k=l.details.craftedFrom==null?null:l.details.craftedFrom[0])?0:-1,k)}},dependencies:[G,ae,Fe],encapsulation:2});let e=t;return e})();function Zt(e,t){if(e&1&&u(0,"app-inventory-crafting",2),e&2){let i=t.$implicit;p("details",i)}}function ei(e,t){if(e&1&&(r(0,"app-database-item-details",0),c(1,Zt,1,1,"ng-template",1),m()),e&2){let i=s();p("amount",i.craftingRecipe.amount)("itemId",i.craftingRecipe.item.id)}}var kt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=x({type:t,selectors:[["app-inventory-details"]],inputs:{craftingRecipe:"craftingRecipe"},decls:1,vars:1,consts:[["context","crafting",3,"amount","itemId"],["appDatabaseItemDetails",""],[3,"details"]],template:function(n,l){n&1&&c(0,ei,2,2,"app-database-item-details",0),n&2&&_(l.craftingRecipe&&l.craftingRecipe.item?0:-1)},dependencies:[z,Se,He]});let e=t;return e})();function ii(e,t){if(e&1&&(r(0,"td",16),u(1,"app-item-icon",17),m()),e&2){let i=t.$implicit;a(),p("itemName",i.item==null?null:i.item.iconName)}}function ni(e,t){e&1&&(r(0,"th",18),d(1," Output "),m()),e&2&&ee("colspan",2)}function oi(e,t){if(e&1&&(r(0,"td",19),d(1),m()),e&2){let i=t.$implicit;a(),E("",i.item==null?null:i.item.displayName," (",i.amount,") ")}}function ai(e,t){e&1&&(r(0,"th",20),d(1," Ingredients"),m())}function ri(e,t){if(e&1&&(r(0,"td",21),u(1,"app-table-item-list",22),f(2,"craftingRecipeIngredients"),m()),e&2){let i=t.$implicit;a(),p("itemList",C(2,1,i))}}function li(e,t){e&1&&(r(0,"th",20),d(1," Unlocked by"),m())}function mi(e,t){if(e&1&&d(0),e&2){let i=s().$implicit;E(" Level ",i.craftingUnlock.masteryLevel," in ",i.craftingUnlock.masteryType," ")}}function pi(e,t){if(e&1&&(r(0,"td",23),c(1,mi,1,2),m()),e&2){let i=t.$implicit;a(),_(i.craftingUnlock?1:-1)}}function si(e,t){e&1&&(r(0,"th",24),d(1," Sell price"),m())}function ci(e,t){if(e&1&&(r(0,"td",25),u(1,"app-money",26),m()),e&2){let i=t.$implicit;a(),p("amount",i.item.sellPrice)}}function di(e,t){e&1&&u(0,"tr",27)}function ui(e,t){e&1&&u(0,"tr",28)}function _i(e,t){if(e&1&&(r(0,"table",0),h(1,1),c(2,ii,2,1,"td",2),g(),h(3,3),c(4,ni,2,1,"th",4)(5,oi,2,2,"td",5),g(),h(6,6),c(7,ai,2,0,"th",7)(8,ri,3,3,"td",8),g(),h(9,9),c(10,li,2,0,"th",7)(11,pi,2,1,"td",10),g(),h(12,11),c(13,si,2,0,"th",12)(14,ci,2,1,"td",13),g(),c(15,di,1,0,"tr",14)(16,ui,1,0,"tr",15),m()),e&2){let i=s();p("dataSource",i.matDataSource),a(15),p("matHeaderRowDef",i.displayHeaderColumns)("matHeaderRowDefSticky",!0),a(),p("matRowDefColumns",i.displayedColumns)}}var Nt=(()=>{let t=class t extends Ie{constructor(){super(...arguments),this.BASE_DISPLAY_COLUMNS=["icon","outputName","ingredients","sellPrice","unlock"],this.sortingDataAccessor=(o,n)=>{let l=this.sortHelper(o.item,n);return l!==null?l:0}}};t.\u0275fac=(()=>{let o;return function(l){return(o||(o=Z(t)))(l||t)}})(),t.\u0275cmp=x({type:t,selectors:[["app-inventory-table"]],features:[P],decls:2,vars:1,consts:[["mat-table","","matSort","",3,"dataSource"],["matColumnDef","icon","sticky",""],["class","!pl-2 !pr-0  w-10 text-center icon-col ","mat-cell","",4,"matCellDef"],["matColumnDef","outputName"],["class","backdrop-blur-xl","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col whitespace-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","ingredients"],["mat-header-cell","",4,"matHeaderCellDef"],["class","list-col","mat-cell","",4,"matCellDef"],["matColumnDef","unlock"],["class","text-col","mat-cell","",4,"matCellDef"],["matColumnDef","sellPrice"],["class","whitespace-nowrap","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col !text-right w-[1%]","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-cell","",1,"!pl-2","!pr-0","w-10","text-center","icon-col"],[3,"itemName"],["mat-header-cell","","mat-sort-header","",1,"backdrop-blur-xl"],["mat-cell","",1,"text-col","whitespace-nowrap"],["mat-header-cell",""],["mat-cell","",1,"list-col"],[3,"itemList"],["mat-cell","",1,"text-col"],["mat-header-cell","","mat-sort-header","",1,"whitespace-nowrap"],["mat-cell","",1,"text-col","!text-right","w-[1%]"],[3,"amount"],["mat-header-row",""],["mat-row",""]],template:function(n,l){n&1&&(r(0,"app-responsive-table"),c(1,_i,17,4,"table",0),m()),n&2&&(a(),_(l.matDataSource?1:-1))},dependencies:[v,K,pe,ye,se,de,Ce,ue,ce,xe,_e,fe,he,ge,Te,ve,Fe],encapsulation:2});let e=t;return e})();function Ci(e,t){if(e&1&&u(0,"app-inventory-details",0),e&2){let i=s();p("craftingRecipe",i.selectedEntity)}}function xi(e,t){if(e&1){let i=A();r(0,"app-item-icon",6),O("click",function(){let n=B(i).$implicit,l=s(3);return U(l.showDetails(n))}),m()}if(e&2){let i=t.$implicit,o=s(3);Q("selected-icon",(o.selectedEntity==null||o.selectedEntity.item==null?null:o.selectedEntity.item.id)===(i.item==null?null:i.item.id)),p("amount",i.amount)("itemName",i.item==null?null:i.item.iconName)}}function hi(e,t){if(e&1&&(r(0,"div",3),y(1,xi,1,4,"app-item-icon",5,T),m()),e&2){let i=s();a(),b(i)}}function gi(e,t){if(e&1&&u(0,"app-inventory-table",4),e&2){let i=s();p("dataSource",i)}}function yi(e,t){if(e&1&&c(0,hi,3,0,"div",3)(1,gi,1,1,"app-inventory-table",4),e&2){let i=s();_(i.showTable?-1:0),a(),_(i.showTable?1:-1)}}var $t=(()=>{let t=class t extends vt{constructor(){super(),this.recipes$=this._database.fetchCraftingRecipes$()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=x({type:t,selectors:[["app-inventory"]],features:[P],decls:7,vars:5,consts:[["listDetail","",3,"craftingRecipe"],["label","All"],[3,"showTableChange","showTable"],[1,"icon-grid"],[3,"dataSource"],[1,"icon-grid-item",3,"amount","selected-icon","itemName"],[1,"icon-grid-item",3,"click","amount","itemName"]],template:function(n,l){if(n&1&&(r(0,"app-list-detail-container"),c(1,Ci,1,1,"app-inventory-details",0),r(2,"mat-tab-group")(3,"mat-tab",1)(4,"app-data-filter",2),ne("showTableChange",function($){return ie(l.showTable,$)||(l.showTable=$),$}),m(),c(5,yi,2,2),f(6,"async"),m()()()),n&2){let k;a(),_(l.selectedEntity?1:-1),a(3),te("showTable",l.showTable),a(),_((k=C(6,3,l.recipes$))?5:-1,k)}},dependencies:[v,re,be,le,me,kt,Nt,W],encapsulation:2});let e=t;return e})();var vi=e=>["/crafting/artisan",e];function Ii(e,t){if(e&1&&(r(0,"a",4),u(1,"app-item-icon",5),r(2,"span",6),d(3),m()()),e&2){let i=t,o=s(2);p("routerLink",L(3,vi,o.itemProcessing.machine.toLowerCase())),a(),p("itemName",i.iconName),a(2),I(i.displayName)}}function Si(e,t){if(e&1&&(d(0),f(1,"addSpacesToPascalCase"),f(2,"titlecase")),e&2){let i=s(2);M(" ",C(2,3,C(1,1,i.itemProcessing.machine))," ")}}function wi(e,t){if(e&1&&(r(0,"div",0),d(1,"Processor: "),r(2,"span",3),c(3,Ii,4,5,"a",4)(4,Si,3,5),m()()),e&2){let i,o=s();a(3),_((i=o.processorMapping[o.itemProcessing.machine.toLowerCase()])?3:-1,i),a(),_(o.processorMapping[o.itemProcessing.machine.toLowerCase()]?-1:4)}}function ki(e,t){if(e&1&&(r(0,"div",1),d(1,"Processing time: "),r(2,"span",3),u(3,"app-processing-time",7),m()()),e&2){let i=s();a(3),p("processingTime",i.itemProcessing)}}function Di(e,t){if(e&1&&(r(0,"div",1),d(1,"Time per input quality "),u(2,"app-processing-time-per-quality",8),m()),e&2){let i=s();a(2),p("baseProcessingTime",i.itemProcessing)("processingTimePerQualities",i.itemProcessing.qualities)}}function Pi(e,t){if(e&1&&(r(0,"div",1),d(1,"Time to improve quality "),u(2,"app-refinements-list",9),m()),e&2){let i=s();a(2),p("refinements",i.itemProcessing.refinements)}}var Ae=(()=>{let t=class t{constructor(){this.hideMaschine=!1,this.processorMapping=D(R).getProcessorMapping()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=x({type:t,selectors:[["app-processing"]],inputs:{itemProcessing:"itemProcessing",hideMaschine:[2,"hideMaschine","hideMaschine",q]},standalone:!0,features:[Ee,V],decls:6,vars:7,consts:[[1,"mb-3","inline-flex","gap-2","items-center"],[1,"mb-3"],[1,"mb-3",3,"itemList"],[1,"text-black"],[3,"routerLink"],[1,"!w-7","ml-1","-my-1","translate-y-1","!inline-block",3,"itemName"],[1,"ml-1","whitespace-nowrap","underline"],[3,"processingTime"],[3,"baseProcessingTime","processingTimePerQualities"],[3,"refinements"]],template:function(n,l){n&1&&(c(0,wi,5,2,"div",0)(1,ki,4,1,"div",1),u(2,"app-item-list",2),f(3,"itemProcessingIngredients"),c(4,Di,3,2,"div",1)(5,Pi,3,1,"div",1)),n&2&&(_(!l.hideMaschine&&l.itemProcessing.machine?0:-1),a(),_(l.itemProcessing.qualities?-1:1),a(),p("itemList",C(3,5,l.itemProcessing)),a(2),_(l.itemProcessing.qualities?4:-1),a(),_(l.itemProcessing.refinements?5:-1))},dependencies:[j,N,G,v,ae,yt,Re,bt,Be,S,F],encapsulation:2});let e=t;return e})();var Ei=e=>["crafting/artisan",e];function Ni(e,t){if(e&1&&(r(0,"td",18),u(1,"app-item-icon",19),m()),e&2){let i=t.$implicit;a(),p("itemName",i.output.item==null?null:i.output.item.iconName)}}function Ri(e,t){e&1&&(r(0,"th",20),d(1," Output "),m()),e&2&&ee("colspan",2)}function Fi(e,t){if(e&1&&(r(0,"td",21),d(1),m()),e&2){let i=t.$implicit;a(),E("",i.output.item==null?null:i.output.item.displayName," (",i.output.amount,") ")}}function Li(e,t){e&1&&(r(0,"th",22),d(1," Ingredients"),m())}function $i(e,t){if(e&1&&(r(0,"td",23),u(1,"app-table-item-list",24),f(2,"itemProcessingIngredients"),m()),e&2){let i=t.$implicit;a(),p("itemList",C(2,1,i))}}function Bi(e,t){e&1&&(r(0,"th",25),d(1," Sell price"),m())}function Ui(e,t){if(e&1&&(r(0,"td",26),u(1,"app-money",27),m()),e&2){let i=t.$implicit;a(),p("amount",i.output.item.sellPrice)}}function Hi(e,t){e&1&&(r(0,"th",22),d(1,"Processor"),m())}function Ai(e,t){if(e&1&&(r(0,"a",29),u(1,"app-item-icon",30),r(2,"span",31),d(3),m()()),e&2){let i=t,o=s().$implicit;p("routerLink",L(3,Ei,o.machine.toLowerCase())),a(),p("itemName",i.iconName),a(2),I(i.displayName)}}function Oi(e,t){if(e&1&&(d(0),f(1,"addSpacesToPascalCase"),f(2,"titlecase")),e&2){let i=s().$implicit;M(" ",C(2,3,C(1,1,i.machine))," ")}}function Vi(e,t){if(e&1&&(r(0,"td",28),c(1,Ai,4,5,"a",29)(2,Oi,3,5),m()),e&2){let i,o=t.$implicit,n=s(2);a(),_((i=n.processorMapping[o.machine.toLowerCase()])?1:-1,i),a(),_(n.processorMapping[o.machine.toLowerCase()]?-1:2)}}function qi(e,t){e&1&&(r(0,"th",32),d(1," Time"),m())}function ji(e,t){if(e&1&&(r(0,"td",28),u(1,"app-processing-time",33),m()),e&2){let i=t.$implicit;a(),p("processingTime",i)}}function Gi(e,t){e&1&&u(0,"tr",34)}function Qi(e,t){e&1&&u(0,"tr",35)}function Wi(e,t){if(e&1&&(r(0,"table",0),h(1,1),c(2,Ni,2,1,"td",2),g(),h(3,3),c(4,Ri,2,1,"th",4)(5,Fi,2,2,"td",5),g(),h(6,6),c(7,Li,2,0,"th",7)(8,$i,3,3,"td",8),g(),h(9,9),c(10,Bi,2,0,"th",10)(11,Ui,2,1,"td",11),g(),h(12,12),c(13,Hi,2,0,"th",7)(14,Vi,3,2,"td",13),g(),h(15,14),c(16,qi,2,0,"th",15)(17,ji,2,1,"td",13),g(),c(18,Gi,1,0,"tr",16)(19,Qi,1,0,"tr",17),m()),e&2){let i=s();p("dataSource",i.matDataSource),a(18),p("matHeaderRowDef",i.displayHeaderColumns)("matHeaderRowDefSticky",!0),a(),p("matRowDefColumns",i.displayedColumns)}}var Bt=(()=>{let t=class t extends Ie{constructor(){super(...arguments),this.showProcessor=H(!1,{transform:q}),this.BASE_DISPLAY_COLUMNS=["icon","outputName","ingredients","processingTime","sellPrice"],this.processorMapping=D(R).getProcessorMapping(),this.sortingDataAccessor=(o,n)=>{let l=this.sortHelper(o.output.item,n);return l!==null?l:n==="processingTime"?o.day*24*60+o.time.hours*60+o.time.minutes:0}}setupDataSource(o){super.setupDataSource(o);let n=this.displayedColumns.indexOf("processor");this.showProcessor()&&n===-1?(this.displayedColumns.splice(3,0,"processor"),this.displayHeaderColumns=this.displayedColumns.filter(l=>l!=="icon")):!this.showProcessor()&&n!==-1&&(this.displayedColumns.splice(n,1),this.displayHeaderColumns=this.displayedColumns.filter(l=>l!=="icon"))}};t.\u0275fac=(()=>{let o;return function(l){return(o||(o=Z(t)))(l||t)}})(),t.\u0275cmp=x({type:t,selectors:[["app-processor-table"]],inputs:{showProcessor:[1,"showProcessor"]},features:[P],decls:2,vars:1,consts:[["mat-table","","matSort","",3,"dataSource"],["matColumnDef","icon","sticky",""],["class","!pl-2 !pr-0  w-10 text-center icon-col ","mat-cell","",4,"matCellDef"],["matColumnDef","outputName"],["class","backdrop-blur-xl","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col whitespace-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","ingredients"],["mat-header-cell","",4,"matHeaderCellDef"],["class","list-col","mat-cell","",4,"matCellDef"],["matColumnDef","sellPrice"],["class","whitespace-nowrap","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col !text-right w-[1%]","mat-cell","",4,"matCellDef"],["matColumnDef","processor"],["class","text-col w-[1%] whitespace-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","processingTime"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-cell","",1,"!pl-2","!pr-0","w-10","text-center","icon-col"],[3,"itemName"],["mat-header-cell","","mat-sort-header","",1,"backdrop-blur-xl"],["mat-cell","",1,"text-col","whitespace-nowrap"],["mat-header-cell",""],["mat-cell","",1,"list-col"],[1,"mb-3",3,"itemList"],["mat-header-cell","","mat-sort-header","",1,"whitespace-nowrap"],["mat-cell","",1,"text-col","!text-right","w-[1%]"],[3,"amount"],["mat-cell","",1,"text-col","w-[1%]","whitespace-nowrap"],[1,"flex","gap-2","items-center",3,"routerLink"],[1,"!w-7",3,"itemName"],[1,"ml-1","whitespace-nowrap","underline"],["mat-header-cell","","mat-sort-header",""],[3,"processingTime"],["mat-header-row",""],["mat-row",""]],template:function(n,l){n&1&&(r(0,"app-responsive-table"),c(1,Wi,20,4,"table",0),m()),n&2&&(a(),_(l.matDataSource?1:-1))},dependencies:[F,v,K,pe,Re,ye,se,de,Ce,ue,ce,xe,_e,fe,he,ge,Te,ve,N,Be,S],encapsulation:2});let e=t;return e})();function Yi(e,t){if(e&1&&u(0,"app-processing",4),e&2){let i=s(2);p("itemProcessing",i.selectedEntity)}}function Ji(e,t){if(e&1&&(r(0,"app-database-item-details",0),c(1,Yi,1,1,"ng-template",3),m()),e&2){let i=s();p("itemId",i.selectedEntity.output.item.id)("amount",i.selectedEntity.output.amount)}}function zi(e,t){if(e&1){let i=A();r(0,"app-item-icon",9),O("click",function(){let n=B(i).$implicit,l=s(4);return U(l.showDetails(n))}),m()}if(e&2){let i,o,n=t.$implicit,l=s(4);Q("selected-icon",(l.selectedEntity==null||l.selectedEntity.output==null||l.selectedEntity.output.item==null?null:l.selectedEntity.output.item.id)===n.output.item.id&&(l.reusedImages.includes((i=n.output.item.iconName)!==null&&i!==void 0?i:"")?n.input.item.iconName===(l.selectedEntity==null||l.selectedEntity.input==null||l.selectedEntity.input.item==null?null:l.selectedEntity.input.item.iconName):!0)&&n.output.amount===(l.selectedEntity==null||l.selectedEntity.output==null?null:l.selectedEntity.output.amount)),p("amount",n.output.amount)("itemName",n.output.item.iconName)("subIconName",l.reusedImages.includes((o=n.output.item.iconName)!==null&&o!==void 0?o:"")?n.input.item.iconName:void 0)}}function Xi(e,t){if(e&1&&(r(0,"div",6),y(1,zi,1,5,"app-item-icon",8,T),m()),e&2){let i=s();a(),b(i)}}function Zi(e,t){if(e&1&&u(0,"app-processor-table",7),e&2){let i=s();p("dataSource",i)}}function en(e,t){if(e&1&&c(0,Xi,3,0,"div",6)(1,Zi,1,1,"app-processor-table",7),e&2){let i=s(2);_(i.showTable?-1:0),a(),_(i.showTable?1:-1)}}function tn(e,t){if(e&1){let i=A();r(0,"mat-tab",2),f(1,"addSpacesToPascalCase"),f(2,"titlecase"),r(3,"app-data-filter",5),ne("showTableChange",function(n){B(i);let l=s();return ie(l.showTable,n)||(l.showTable=n),U(n)}),m(),c(4,en,2,2),f(5,"async"),m()}if(e&2){let i,o=t.$implicit,n=s();p("label",n.processorMapping[o.toLowerCase()]?n.processorMapping[o.toLowerCase()].displayName:C(2,5,C(1,3,o))),a(3),te("showTable",n.showTable),a(),_((i=C(5,7,n.filteredData$(o)))?4:-1,i)}}var Ut=(()=>{let t=class t extends Ue{constructor(){super(),this.quality=Ne,this.machineNames=[],this.processorMapping=this._database.getProcessorMapping(),this.urlPathFromLabel=o=>{let n=Object.keys(this.processorMapping).find(l=>this.processorMapping[l].displayName===o);return n||o.toLowerCase().replaceAll(" ","")},this._database.fetchItemProcessingRecipes$().pipe(X(1)).subscribe({next:o=>{this.machineNames=Object.keys(o),this.activateTabFromRoute(this.machineNames)}})}filteredData$(o){return this._database.fetchItemProcessingRecipes$().pipe(ke(n=>n[o]),De(n=>{this.reusedImages=this.getMultipleIconNames(n.map(l=>l.output.item.iconName??""))}))}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=x({type:t,selectors:[["app-processor"]],features:[P],decls:5,vars:2,consts:[["listDetail","","context","artisan",3,"itemId","amount"],[3,"selectedTabChange","selectedIndex"],[3,"label"],["appDatabaseItemDetails",""],["hideMaschine","",3,"itemProcessing"],[3,"showTableChange","showTable"],[1,"icon-grid"],[3,"dataSource"],[1,"icon-grid-item",3,"amount","itemName","subIconName","selected-icon"],[1,"icon-grid-item",3,"click","amount","itemName","subIconName"]],template:function(n,l){n&1&&(r(0,"app-list-detail-container"),c(1,Ji,2,2,"app-database-item-details",0),r(2,"mat-tab-group",1),O("selectedTabChange",function($){return l.updateUrl($)}),y(3,tn,6,9,"mat-tab",2,T),m()()),n&2&&(a(),_(l.selectedEntity?1:-1),a(),p("selectedIndex",l.selectedTabIndex()),a(),b(l.machineNames))},dependencies:[v,re,be,le,me,z,Se,Ae,Bt,W,N,S],encapsulation:2});let e=t;return e})();var an=e=>["crafting/cooking",e];function rn(e,t){if(e&1&&(r(0,"a",5),u(1,"app-item-icon",6),r(2,"span",7),d(3),m()()),e&2){let i=t,o=s().$implicit;p("routerLink",L(3,an,o.toLowerCase())),a(),p("itemName",i.iconName),a(2),I(i.displayName)}}function ln(e,t){if(e&1&&(d(0),f(1,"addSpacesToPascalCase"),f(2,"titlecase")),e&2){let i=s().$implicit;M(" ",C(2,3,C(1,1,i))," ")}}function mn(e,t){if(e&1&&(r(0,"div",4),c(1,rn,4,5,"a",5)(2,ln,3,5),m()),e&2){let i,o=t.$implicit,n=s(2);a(),_((i=n.cookingUtensilMapping[o.toLowerCase()])?1:-1,i),a(),_(n.cookingUtensilMapping[o.toLowerCase()]?-1:2)}}function pn(e,t){if(e&1&&(r(0,"div",0),d(1,"Utensil(s): "),r(2,"span",3),y(3,mn,3,2,"div",4,T),m()()),e&2){let i=s();a(3),b(i.cookingRecipe.utensils)}}function sn(e,t){if(e&1&&(r(0,"div",1),d(1," Unlocked: "),r(2,"span",3),d(3),m()()),e&2){let i=s();a(3),E("Level ",i.cookingRecipe.craftingUnlock.masteryLevel," in ",i.cookingRecipe.craftingUnlock.masteryType,"")}}function cn(e,t){e&1&&u(0,"hr",8)}function dn(e,t){if(e&1&&(u(0,"app-item-list",2),c(1,cn,1,0,"hr",8)),e&2){let i=t.$implicit,o=t.$index,n=t.$count;p("itemList",i),a(),_(o!==n-1?1:-1)}}function un(e,t){if(e&1&&(r(0,"span",3),d(1," Either of the following"),m(),y(2,dn,2,2,null,null,T)),e&2){let i=s();a(2),b(i.cookingRecipe.eitherOrIngredients)}}function _n(e,t){if(e&1&&(r(0,"div",10),u(1,"app-item-icon",12),r(2,"span"),d(3),m()()),e&2){let i=s().$implicit;a(),p("itemName",i.iconName),a(2),I(i.displayName)}}function fn(e,t){if(e&1&&(r(0,"div",9),c(1,_n,4,2,"div",10),r(2,"div",11),d(3),m()(),u(4,"hr")),e&2){let i=t.$implicit,o=s().$implicit;a(),_(i?1:-1),a(2),M("as ",o.key,"")}}function Cn(e,t){if(e&1&&(r(0,"div",1),y(1,fn,5,2,null,null,T),f(3,"castToMinimalItemArray"),m()),e&2){let i=t.$implicit;a(),b(C(3,0,i.value))}}function xn(e,t){if(e&1&&(r(0,"span",3),d(1," The following counting as"),m(),y(2,Cn,4,2,"div",1,T),f(4,"keyvalue")),e&2){let i=s();a(2),b(C(4,0,i.cookingRecipe.additionsToGenerics))}}var Oe=(()=>{let t=class t{constructor(){this.showUtensil=!1,this.cookingUtensilMapping=D(R).getCookingUtensilMapping()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=x({type:t,selectors:[["app-cooking-recipe"]],inputs:{cookingRecipe:"cookingRecipe",showUtensil:[2,"showUtensil","showUtensil",q]},standalone:!0,features:[Ee,V],decls:6,vars:7,consts:[[1,"mb-3","inline-flex","gap-2","items-center"],[1,"mb-3"],[1,"mb-3",3,"itemList"],[1,"text-black"],[1,"whitespace-nowrap"],[1,"flex","gap-2","items-center",3,"routerLink"],[1,"!w-7",3,"itemName"],[1,"ml-1","whitespace-nowrap","underline"],[1,"my-5"],[1,"flex","justify-between","py-1"],[1,"flex","gap-x-3","items-center"],[1,"flex","items-center"],[1,"w-10",3,"itemName"]],template:function(n,l){n&1&&(c(0,pn,5,0,"div",0)(1,sn,4,2,"div",1),u(2,"app-item-list",2),f(3,"cookingRecipeIngredients"),c(4,un,4,0)(5,xn,5,2)),n&2&&(_(l.showUtensil?0:-1),a(),_(l.cookingRecipe.craftingUnlock?1:-1),a(),p("itemList",C(3,5,l.cookingRecipe)),a(2),_(l.cookingRecipe.eitherOrIngredients.length?4:-1),a(),_(l.cookingRecipe.additionsToGenerics?5:-1))},dependencies:[j,N,oe,G,v,ae,Le,$e,S,F],encapsulation:2});let e=t;return e})();function gn(e,t){if(e&1&&(r(0,"div",1),d(1,"Buff: "),r(2,"span",0),d(3),f(4,"addSpacesToPascalCase"),m()()),e&2){let i=s();a(3),nt(" ",C(4,3,i.consumable.buff),", Level ",i.consumable.level," for ",i.consumable.duration," seconds ")}}var Ve=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=x({type:t,selectors:[["app-consumable"]],inputs:{consumable:"consumable"},standalone:!0,features:[V],decls:9,vars:5,consts:[[1,"text-black"],[1,"mb-3"]],template:function(n,l){n&1&&(r(0,"div"),d(1,"Health: "),r(2,"span",0),d(3),m()(),r(4,"div"),d(5,"Energy: "),r(6,"span",0),d(7),m()(),c(8,gn,5,5,"div",1)),n&2&&(a(3),I(l.consumable.healthDelta),a(),Q("mb-3",l.consumable.buff==="None"),a(3),I(l.consumable.staminaDelta),a(),_(l.consumable.buff!=="None"?8:-1))},dependencies:[j,S],encapsulation:2});let e=t;return e})();var bn=e=>["crafting/cooking",e];function Tn(e,t){if(e&1&&(r(0,"td",19),u(1,"app-item-icon",20),m()),e&2){let i=t.$implicit;a(),p("itemName",i.item==null?null:i.item.iconName)}}function vn(e,t){e&1&&(r(0,"th",21),d(1," Output "),m()),e&2&&ee("colspan",2)}function In(e,t){if(e&1&&(r(0,"td",22),d(1),m()),e&2){let i=t.$implicit;a(),E("",i.item==null?null:i.item.displayName," (",i.amount,") ")}}function Sn(e,t){e&1&&(r(0,"th",23),d(1," Ingredients"),m())}function wn(e,t){e&1&&u(0,"hr",27)}function kn(e,t){if(e&1&&(u(0,"app-table-item-list",25),c(1,wn,1,0,"hr",27)),e&2){let i=t.$implicit,o=t.$index,n=t.$count;p("itemList",i),a(),_(o!==n-1?1:-1)}}function Dn(e,t){if(e&1&&(r(0,"span",26),d(1," Either of the following"),m(),y(2,kn,2,2,null,null,T)),e&2){let i=s().$implicit;a(2),b(i.eitherOrIngredients)}}function Pn(e,t){if(e&1&&(r(0,"div",29),u(1,"app-item-icon",31),r(2,"span",32),d(3),m()()),e&2){let i=s().$implicit;a(),p("itemName",i.iconName),a(2),I(i.displayName)}}function Mn(e,t){if(e&1&&(r(0,"div",28),c(1,Pn,4,2,"div",29),r(2,"div",30),d(3),m()()),e&2){let i=t.$implicit,o=s().$implicit;a(),_(i?1:-1),a(2),M("as ",o.key," ")}}function En(e,t){if(e&1&&(y(0,Mn,4,2,"div",28,T),f(2,"castToMinimalItemArray")),e&2){let i=t.$implicit;b(C(2,0,i.value))}}function Nn(e,t){if(e&1&&(r(0,"span",26),d(1," The following counting as"),m(),y(2,En,3,2,null,null,T),f(4,"keyvalue")),e&2){let i=s().$implicit;a(2),b(C(4,0,i.additionsToGenerics))}}function Rn(e,t){if(e&1&&(r(0,"td",24),u(1,"app-table-item-list",25),f(2,"cookingRecipeIngredients"),c(3,Dn,4,0)(4,Nn,5,2),m()),e&2){let i=t.$implicit;a(),p("itemList",C(2,3,i)),a(2),_(i.eitherOrIngredients.length?3:-1),a(),_(i.additionsToGenerics?4:-1)}}function Fn(e,t){e&1&&(r(0,"th",23),d(1," Unlocked by"),m())}function Ln(e,t){if(e&1&&d(0),e&2){let i=s().$implicit;E(" Level ",i.craftingUnlock.masteryLevel," in ",i.craftingUnlock.masteryType," ")}}function $n(e,t){if(e&1&&(r(0,"td",33),c(1,Ln,1,2),m()),e&2){let i=t.$implicit;a(),_(i.craftingUnlock?1:-1)}}function Bn(e,t){e&1&&(r(0,"th",34),d(1," Sell price"),m())}function Un(e,t){if(e&1&&(r(0,"td",35),u(1,"app-money",36),m()),e&2){let i=t.$implicit;a(),p("amount",i.item.sellPrice)}}function Hn(e,t){e&1&&(r(0,"th",37),d(1," Utensil"),m())}function An(e,t){if(e&1&&(r(0,"a",39),u(1,"app-item-icon",31),r(2,"span",40),d(3),m()()),e&2){let i=t,o=s().$implicit;p("routerLink",L(3,bn,o.toLowerCase())),a(),p("itemName",i.iconName),a(2),I(i.displayName)}}function On(e,t){if(e&1&&(d(0),f(1,"addSpacesToPascalCase"),f(2,"titlecase")),e&2){let i=s().$implicit;M(" ",C(2,3,C(1,1,i))," ")}}function Vn(e,t){if(e&1&&(r(0,"div",32),c(1,An,4,5,"a",39)(2,On,3,5),m()),e&2){let i,o=t.$implicit,n=s(3);a(),_((i=n.cookingUtensilMapping[o.toLowerCase()])?1:-1,i),a(),_(n.cookingUtensilMapping[o.toLowerCase()]?-1:2)}}function qn(e,t){if(e&1&&(r(0,"td",38),y(1,Vn,3,2,"div",32,T),m()),e&2){let i=t.$implicit;a(),b(i.utensils)}}function jn(e,t){e&1&&u(0,"tr",41)}function Gn(e,t){e&1&&u(0,"tr",42)}function Qn(e,t){if(e&1&&(r(0,"table",0),h(1,1),c(2,Tn,2,1,"td",2),g(),h(3,3),c(4,vn,2,1,"th",4)(5,In,2,2,"td",5),g(),h(6,6),c(7,Sn,2,0,"th",7)(8,Rn,5,5,"td",8),g(),h(9,9),c(10,Fn,2,0,"th",7)(11,$n,2,1,"td",10),g(),h(12,11),c(13,Bn,2,0,"th",12)(14,Un,2,1,"td",13),g(),h(15,14),c(16,Hn,2,0,"th",15)(17,qn,3,0,"td",16),g(),c(18,jn,1,0,"tr",17)(19,Gn,1,0,"tr",18),m()),e&2){let i=s();p("dataSource",i.matDataSource),a(18),p("matHeaderRowDef",i.displayHeaderColumns)("matHeaderRowDefSticky",!0),a(),p("matRowDefColumns",i.displayedColumns)}}var Ht=(()=>{let t=class t extends Ie{constructor(){super(...arguments),this.showUtensil=H(!1,{transform:q}),this.BASE_DISPLAY_COLUMNS=["icon","outputName","ingredients","sellPrice","unlock"],this.cookingUtensilMapping=D(R).getCookingUtensilMapping(),this.sortingDataAccessor=(o,n)=>{let l=this.sortHelper(o.item,n);return l!==null?l:0}}setupDataSource(o){super.setupDataSource(o);let n=this.displayedColumns.indexOf("utensil");this.showUtensil()&&n===-1?(this.displayedColumns.splice(3,0,"utensil"),this.displayHeaderColumns=this.displayedColumns.filter(l=>l!=="icon")):!this.showUtensil()&&n!==-1&&(this.displayedColumns.splice(n,1),this.displayHeaderColumns=this.displayedColumns.filter(l=>l!=="icon"))}};t.\u0275fac=(()=>{let o;return function(l){return(o||(o=Z(t)))(l||t)}})(),t.\u0275cmp=x({type:t,selectors:[["app-cooking-table"]],inputs:{showUtensil:[1,"showUtensil"]},features:[P],decls:2,vars:1,consts:[["mat-table","","matSort","",3,"dataSource"],["matColumnDef","icon","sticky",""],["class","!pl-2 !pr-0  w-10 text-center icon-col ","mat-cell","",4,"matCellDef"],["matColumnDef","outputName"],["class","backdrop-blur-xl","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col whitespace-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","ingredients"],["mat-header-cell","",4,"matHeaderCellDef"],["class","list-col","mat-cell","",4,"matCellDef"],["matColumnDef","unlock"],["class","text-col","mat-cell","",4,"matCellDef"],["matColumnDef","sellPrice"],["class","whitespace-nowrap","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col !text-right w-[1%]","mat-cell","",4,"matCellDef"],["matColumnDef","utensil"],["class","whitespace-nowrap","mat-header-cell","",4,"matHeaderCellDef"],["class","text-col w-[1%]","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-cell","",1,"!pl-2","!pr-0","w-10","text-center","icon-col"],[3,"itemName"],["mat-header-cell","","mat-sort-header","",1,"backdrop-blur-xl"],["mat-cell","",1,"text-col","whitespace-nowrap"],["mat-header-cell",""],["mat-cell","",1,"list-col"],[1,"mb-3",3,"itemList"],[1,"text-black","mt-1"],[1,"my-5"],[1,"flex","justify-between","mb-1"],[1,"flex","gap-x-3","items-center"],[1,"ml-2","flex","items-center","whitespace-nowrap"],[1,"!w-7",3,"itemName"],[1,"whitespace-nowrap"],["mat-cell","",1,"text-col"],["mat-header-cell","","mat-sort-header","",1,"whitespace-nowrap"],["mat-cell","",1,"text-col","!text-right","w-[1%]"],[3,"amount"],["mat-header-cell","",1,"whitespace-nowrap"],["mat-cell","",1,"text-col","w-[1%]"],[1,"flex","gap-2","items-center",3,"routerLink"],[1,"ml-1","whitespace-nowrap","underline"],["mat-header-row",""],["mat-row",""]],template:function(n,l){n&1&&(r(0,"app-responsive-table"),c(1,Qn,20,4,"table",0),m()),n&2&&(a(),_(l.matDataSource?1:-1))},dependencies:[F,v,K,pe,ye,se,de,Ce,ue,ce,xe,_e,fe,he,ge,Te,ve,N,oe,Le,$e,S],encapsulation:2});let e=t;return e})();var Kn=(e,t)=>t.key;function Yn(e,t){e&1&&u(0,"app-consumable",4),e&2&&p("consumable",t)}function Jn(e,t){if(e&1&&u(0,"app-cooking-recipe",5),e&2){let i=t.$implicit;p("cookingRecipe",i)}}function zn(e,t){if(e&1&&(c(0,Yn,1,1,"app-consumable",4),y(1,Jn,1,1,"app-cooking-recipe",5,Kn)),e&2){let i,o=t.$implicit;_((i=o.consumables==null?null:o.consumables.base)?0:-1,i),a(),b(o.cookedFrom)}}function Xn(e,t){if(e&1&&(r(0,"app-database-item-details",0),c(1,zn,3,1,"ng-template",3),m()),e&2){let i=s();p("itemId",i.selectedEntity.item.id)}}function Zn(e,t){if(e&1){let i=A();r(0,"app-item-icon",10),O("click",function(){let n=B(i).$implicit,l=s(4);return U(l.showDetails(n))}),m()}if(e&2){let i=t.$implicit,o=s(4);Q("selected-icon",(o.selectedEntity==null||o.selectedEntity.item==null?null:o.selectedEntity.item.id)===i.item.id),p("amount",i.amount)("itemName",i.item.iconName)}}function eo(e,t){if(e&1&&(r(0,"div",7),y(1,Zn,1,4,"app-item-icon",9,T),m()),e&2){let i=s();a(),b(i)}}function to(e,t){if(e&1&&u(0,"app-cooking-table",8),e&2){let i=s();p("dataSource",i)}}function io(e,t){if(e&1&&c(0,eo,3,0,"div",7)(1,to,1,1,"app-cooking-table",8),e&2){let i=s(2);_(i.showTable?-1:0),a(),_(i.showTable?1:-1)}}function no(e,t){if(e&1){let i=A();r(0,"mat-tab",2),f(1,"addSpacesToPascalCase"),f(2,"titlecase"),r(3,"app-data-filter",6),ne("showTableChange",function(n){B(i);let l=s();return ie(l.showTable,n)||(l.showTable=n),U(n)}),m(),c(4,io,2,2),f(5,"async"),m()}if(e&2){let i,o=t.$implicit,n=s();p("label",n.cookingUtensilMapping[o.toLowerCase()]?n.cookingUtensilMapping[o.toLowerCase()].displayName:C(2,5,C(1,3,o))),a(3),te("showTable",n.showTable),a(),_((i=C(5,7,n.filteredData$(o)))?4:-1,i)}}var At=(()=>{let t=class t extends Ue{constructor(){super(),this.utensilNames=[],this.quality=Ne,this.cookingUtensilMapping=this._database.getCookingUtensilMapping(),this._consumables=[],this.urlPathFromLabel=o=>{let n=Object.keys(this.cookingUtensilMapping).find(l=>this.cookingUtensilMapping[l].displayName===o);return n||o.toLowerCase().replaceAll(" ","")},Ke([this._database.fetchCookingRecipes$(),this._database.fetchConsumables$()]).pipe(X(1)).subscribe({next:([o,n])=>{this._consumables=n,this.utensilNames=Object.keys(o),this.activateTabFromRoute(this.utensilNames)}})}filteredData$(o){return this._database.fetchCookingRecipes$().pipe(ke(n=>n[o]),De(n=>{this.reusedImages=this.getMultipleIconNames(n.map(l=>l.item?.iconName??""))}))}showDetails(o){super.showDetails(o),this.selectedEntityConsumable=this._consumables.find(n=>n.key===o?.item?.id)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=x({type:t,selectors:[["app-cooking"]],features:[P],decls:5,vars:2,consts:[["context","cooking_recipes","listDetail","",3,"itemId"],["mat-stretch-tabs","false",1,"w-full",3,"selectedTabChange","selectedIndex"],[3,"label"],["appDatabaseItemDetails",""],[3,"consumable"],[1,"mb-4",3,"cookingRecipe"],[3,"showTableChange","showTable"],[1,"icon-grid"],[3,"dataSource"],[1,"icon-grid-item",3,"amount","selected-icon","itemName"],[1,"icon-grid-item",3,"click","amount","itemName"]],template:function(n,l){n&1&&(r(0,"app-list-detail-container"),c(1,Xn,2,1,"app-database-item-details",0),r(2,"mat-tab-group",1),O("selectedTabChange",function($){return l.updateUrl($)}),y(3,no,6,9,"mat-tab",2,T),m()()),n&2&&(a(),_(l.selectedEntity?1:-1),a(),p("selectedIndex",l.selectedTabIndex()),a(),b(l.utensilNames))},dependencies:[v,re,be,le,me,z,Se,Oe,Ve,Ht,W,N,S],encapsulation:2});let e=t;return e})();var oo=[{path:"",pathMatch:"full",redirectTo:"inventory"},{path:"",component:St,children:[{path:"inventory",component:$t,title:"Inventory - Crafting"},{path:"artisan",redirectTo:"artisan/",pathMatch:"full"},{path:"artisan/:tabName",component:Ut,title:"Artisan - Crafting"},{path:"cooking",redirectTo:"cooking/",pathMatch:"full"},{path:"cooking/:tabName",component:At,title:"Cooking - Crafting"},{path:"mixing",loadComponent:()=>import("./chunk-7FKT42WR.js").then(e=>e.MixingComponent),title:"Mixing - Crafting"}]}],Ot=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Me({type:t}),t.\u0275inj=Pe({imports:[qe.forChild(oo),qe]});let e=t;return e})();var or=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Me({type:t}),t.\u0275inj=Pe({imports:[j,Ot,G,ht,gt,Tt,z,Oe,Ve,Ae,He]});let e=t;return e})();export{Se as a,z as b,Ae as c,Oe as d,Nt as e,Bt as f,Ve as g,Ht as h,or as i};
