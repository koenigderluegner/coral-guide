import{a as j}from"./chunk-AWBWSX6N.js";import{q as R,r as U}from"./chunk-QVSQOUAD.js";import{a as N}from"./chunk-OHRRW4BO.js";import"./chunk-WFTBLPSZ.js";import{$d as M,Aa as m,Fa as g,Ga as I,Ha as A,Ia as E,Ib as V,Ja as p,Ka as c,La as k,P as S,Pa as T,Ra as x,Sa as l,V as _,Va as F,W as u,Xe as O,d as y,e as w,f as L,ka as s,l as D,mb as P,me as $,mf as z,ne as B,pe as G,qb as b,rb as h,ta as v,wa as C}from"./chunk-4KZEYPV3.js";function q(t,i){if(t&1&&k(0,"app-offering",3),t&2){let e=i.$implicit;m("details",e)}}function H(t,i){if(t&1&&(p(0,"app-item-card-switch",0),C(1,q,1,1,"ng-template",2),c()),t&2){let e=l();m("item",e.selectedEntity)}}function J(t,i){if(t&1){let e=T();p(0,"mat-tab",5),b(1,"addSpacesToPascalCase"),p(2,"app-offering-group",6),x("selected",function(d){_(e);let n=l(2);return u(n.showDetails(d))}),c()()}if(t&2){let e=i.$implicit,f=l(2);F("label",h(1,3,e.offeringGroupTitle)),s(2),m("offeringAltar",e)("selectedEntity",f.selectedEntity)}}function K(t,i){if(t&1){let e=T();p(0,"mat-tab-group",4),x("selectedTabChange",function(d){_(e);let n=l();return u(n.updateUrl(d))}),A(1,J,3,5,"mat-tab",5,I),c()}if(t&2){let e=l();m("selectedIndex",e.selectedTabIndex()),s(),E(i)}}var pe=(()=>{var i;let e=class e extends O{constructor(){super();w(this,i);L(this,i,[]),this.urlPathFromLabel=n=>{let a=n.toLowerCase().replaceAll(" ",""),r=y(this,i).find(o=>o.offeringGroupTitle.toLowerCase().replaceAll(" ","")===a);return r?r.urlPath:n.toLowerCase().replaceAll(" ","")},this.offerings$=this._database.fetchOfferings$().pipe(D(n=>{let a=n.filter(o=>!o.customType),r=a.map(o=>o.urlPath);return this.activateTabFromRoute(r),a}))}};i=new WeakMap,e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=S({type:e,selectors:[["app-lake-temple"]],standalone:!0,features:[v,P],decls:4,vars:4,consts:[["listDetail","","context","offerings",3,"item"],[3,"selectedIndex"],["appDatabaseItemDetails",""],[3,"details"],[3,"selectedTabChange","selectedIndex"],[3,"label"],[3,"selected","offeringAltar","selectedEntity"]],template:function(a,r){if(a&1&&(p(0,"app-list-detail-container"),C(1,H,2,1,"app-item-card-switch",0)(2,K,3,1,"mat-tab-group",1),b(3,"async"),c()),a&2){let o;s(),g(r.selectedEntity?1:-1),s(),g((o=h(3,2,r.offerings$))?2:-1,o)}},dependencies:[G,R,z,$,U,j,B,M,N,V],encapsulation:2});let t=e;return t})();export{pe as LakeTempleComponent};
