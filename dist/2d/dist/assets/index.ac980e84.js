import{d as g,r as o,H as y,c as C,w as e,u as c,i as k,o as m,a as s,b as t,aw as B,k as l,A as D,X as A,a2 as w,bz as V,y as L,t as F,F as M,_ as b}from"./index.6232fea1.js";import{u as S,M as j,b as a,a as i}from"./index.07272584.js";import{M as _}from"./MxFieldset.69bd0b66.js";import{V as r}from"./VCol.d94e1801.js";import{V as I}from"./VTable.7a3853cd.js";import{V as R}from"./VRow.f69baf5b.js";const N={class:"px-3 ShortcutKeySettingsDialog"},q={class:"d-flex justify-end my-2"},z=s("thead",null,[s("tr",null,[s("th",null,"\u529F\u80FD\u540D\u79F0"),s("th",null,"\u5FEB\u6377\u952E")])],-1),K={class:"w-100 text-left"},T=["onClick"],H={class:"d-flex justify-start my-2"},O={class:"d-flex justify-space-between"},Q={class:"d-flex justify-space-between my-2"},U=s("div",{class:"my-1"},null,-1),X=g({__name:"index",setup($){const{isShow:d,showDialog:G}=S(!1,"MxCloud_QuickCommand"),f=o([{title:"\u529F\u80FD",type:"",value:0,list:[{name:"A",cmd:"S",cmdList:[{cmd:"f"},{cmd:"l"}]},{name:"B",cmd:"S",cmdList:[{cmd:"a"},{cmd:"d"}]}]},{title:"\u7ED8\u56FE",type:"",value:1,list:[{name:"\u753B\u7EBF",cmd:"MxLine",cmdList:[{cmd:"line"},{cmd:"l"}]},{name:"\u753B\u5706\u5F27",cmd:"Mx_Arc",cmdList:[{cmd:"arc"},{cmd:"_arc"}]}]}]),h=o(0),x=y(()=>f.value[h.value].list),n=o(0),p=y(()=>x.value[n.value].cmdList);return(J,v)=>(m(),C(j,{title:"\u547D\u4EE4\u884C\u5FEB\u6377\u547D\u4EE4\u8BBE\u7F6E","max-width":"800",modelValue:c(d),"onUpdate:modelValue":v[0]||(v[0]=u=>k(d)?d.value=u:null)},{actions:e(()=>[U]),default:e(()=>[s("div",N,[t(R,{class:"mt-2","align-stretch":"","no-gutters":""},{default:e(()=>[t(r,{cols:"3","align-self":"stretch",class:"h-100"},{default:e(()=>[t(_,{title:"\u5206\u7C7B"},{default:e(()=>[t(B,{class:"mt-1",height:"300px",items:f.value,"active-class":"active",selected:[h.value]},null,8,["items","selected"])]),_:1}),s("div",q,[t(a,{isAction:"",class:"mr-4"},{default:e(()=>[t(i,{"key-name":"E"},{default:e(()=>[l("\u5BFC\u51FA\u8BBE\u7F6E\u6587\u4EF6")]),_:1})]),_:1})])]),_:1}),t(r,{cols:"6","align-self":"stretch",style:{height:"300px"}},{default:e(()=>[t(_,{title:"\u529F\u80FD\u5217\u8868"},{default:e(()=>[t(I,{class:"mt-1 mx-table",height:"300px"},{default:e(()=>[z,s("tbody",K,[(m(!0),D(M,null,A(c(x),(u,E)=>w((m(),D("tr",{key:u.cmd,class:L(n.value===E?"active":""),onClick:P=>n.value=E},[s("td",null,F(u.name),1),s("td",null,F(u.cmd),1)],10,T)),[[V]])),128))])]),_:1})]),_:1}),s("div",H,[t(a,{isAction:"",class:"ml-4"},{default:e(()=>[t(i,{"key-name":"I"},{default:e(()=>[l("\u5BFC\u5165\u8BBE\u7F6E\u6587\u4EF6")]),_:1})]),_:1}),t(a,{isAction:"",class:"ml-8"},{default:e(()=>[t(i,{"key-name":"R"},{default:e(()=>[l("\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E")]),_:1})]),_:1})])]),_:1}),t(r,{cols:"3","align-self":"stretch",class:"h-100"},{default:e(()=>[t(_,{title:"\u5FEB\u6377\u547D\u4EE4"},{default:e(()=>[s("div",O,[t(a,null,{default:e(()=>[t(i,{"key-name":"A"},{default:e(()=>[l("\u65B0\u589E")]),_:1})]),_:1}),t(a,{class:"ml-2"},{default:e(()=>[t(i,{"key-name":"D"},{default:e(()=>[l("\u5220\u9664")]),_:1})]),_:1})]),t(B,{class:"mt-1",height:"279px",items:c(p),"item-title":"cmd","item-value":"cmd","active-class":"active",selected:[c(p)[0].cmd]},null,8,["items","selected"])]),_:1}),s("div",Q,[t(a,{primary:"",isAction:""},{default:e(()=>[l(" \u786E\u5B9A ")]),_:1}),t(a,{class:"ml-2",isAction:""},{default:e(()=>[l(" \u53D6\u6D88 ")]),_:1})])]),_:1})]),_:1})])]),_:1},8,["modelValue"]))}});const le=b(X,[["__file","D:/web/MxCADOnline/Sample/Edit/MxCADAppVuetify3/src/view/Dialogs/ShortcutKeySettingsDialog/index.vue"]]);export{le as default};
