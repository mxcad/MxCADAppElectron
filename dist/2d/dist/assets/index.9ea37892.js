import{d as x,r as F,M as c,c as r,w as t,u as l,i as v,o as _,a as e,b as a,t as E,g as D,V,e as B,f as A,h as C,p as g,j as I,k as m,_ as M}from"./index.d60773c7.js";import{u as S,M as k}from"./index.4bc1f7b9.js";import{V as p}from"./VCol.7ca72c30.js";import{V as y}from"./VRow.dbe6d3b9.js";const s=o=>(g("data-v-79e2eee6"),o=o(),I(),o),b={class:"px-3"},N={class:"title"},L=s(()=>e("p",{class:"info mt-3"}," \u5C0F\u5DE7CAD\u753B\u56FE\u8F6F\u4EF6 ",-1)),q=s(()=>e("p",{class:"version-info mt-2"},[e("p",null,"\u8BE6\u7EC6\u6253\u5305\u7248\u672C:20230322 (64\u4F4D) "),e("p",null,"\u6253\u5305\u65E5\u671F:20230322")],-1)),P=s(()=>e("div",{class:"qr-code-box"},null,-1)),R=s(()=>e("p",{class:"qr-code-title"},"\u624B\u673A\u626B\u7801\u770B\u56FE",-1)),T={class:"url"},U=s(()=>e("p",null,[m("\u7F51\u5740: "),e("a",{href:"https://www.mxdraw3d.com/"},"https://www.mxdraw3d.com")],-1)),j=s(()=>e("p",null,[m("\u5386\u53F2\u66F4\u65B0: "),e("a",{href:"https://www.mxdraw3d.com/"},"https://www.mxdraw3d.com")],-1)),O=s(()=>e("div",null,"\u7A0B\u5E8F\u4F4D\u7F6E:",-1)),z=x({__name:"index",setup(o){const{isShow:u,showDialog:f}=S(!1,"MxCAD_About"),h=[{name:"\u68C0\u67E5\u66F4\u65B0",fun:()=>{c.checkForUpdates()}},{name:"\u786E\u5B9A",fun:()=>{f(!1)},primary:!0}],i=F("");return c.getProgramInstallationLocation().then(n=>{i.value=n}),(n,d)=>(_(),r(k,{title:"\u5173\u4E8E",modelValue:l(u),"onUpdate:modelValue":d[0]||(d[0]=w=>v(u)?u.value=w:null),"max-width":"520",footerBtnList:h},{default:t(()=>[e("div",b,[a(y,{class:"mt-4"},{default:t(()=>[a(p,{cols:"8"},{default:t(()=>[e("p",N," CAD\u68A6\u60F3\u753B\u56FE "+E(l(D)()),1),L,q,a(V,{thickness:2,class:"mt-3"})]),_:1}),a(p,{cols:"4"},{default:t(()=>[P,R]),_:1})]),_:1}),e("div",T,[U,j,l(B)()?(_(),r(A,{key:0,"model-value":i.value},{prepend:t(()=>[O]),_:1},8,["model-value"])):C("v-if",!0)])])]),_:1},8,["modelValue"]))}});const Q=M(z,[["__scopeId","data-v-79e2eee6"],["__file","D:/web/MxCADOnline/Sample/Edit/MxCADAppVuetify3/src/view/Dialogs/AboutDialog/index.vue"]]);export{Q as default};