import{d as k,o as d,A as C,b as e,w as a,k as c,a as M,F as w,X as v,T as O,t as P,_ as y,c as S,a5 as I,f as V,bF as E,bG as u,bH as n,a1 as F,bI as T,bJ as N,r as j,u as A,i as L}from"./index.d60773c7.js";import{a as l,b as B,u as G,M as q}from"./index.4bc1f7b9.js";import{M as z}from"./index.691a06b3.js";import{M as x}from"./MxFieldset.e7a6f4c8.js";import{V as _}from"./VCheckbox.673e3cfb.js";import{V as b}from"./VRow.dbe6d3b9.js";import{V as p}from"./VCol.7ca72c30.js";const R={class:"d-flex flex-wrap"},U={class:"d-flex my-1 w-50"},$=k({__name:"ObjectSnaps",props:{data:{type:Array,required:!0},allSelect:{type:Function,required:!0},allCancel:{type:Function,required:!0}},setup(t){return(s,i)=>(d(),C("div",null,[e(_,{class:""},{label:a(()=>[e(l,{"key-name":"S"},{default:a(()=>[c("\u5728\u5C4F\u5E55\u4E0A\u6307\u5B9A")]),_:1})]),_:1}),e(x,{title:"\u5BF9\u8C61\u6355\u6349\u6A21\u5F0F",class:"mt-2"},{default:a(()=>[e(b,null,{default:a(()=>[e(p,{cols:9},{default:a(()=>[M("div",R,[(d(!0),C(w,null,v(t.data,(o,r)=>(d(),C("div",U,[e(_,{class:"",modelValue:o.check,"onUpdate:modelValue":f=>o.check=f},{prepend:a(()=>[e(O,{icon:o.icon,class:"mr-1"},null,8,["icon"])]),label:a(()=>[e(l,{"key-name":o.key},{default:a(()=>[c(P(o.name),1)]),_:2},1032,["key-name"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),256))])]),_:1}),e(p,{cols:2,"align-self":"start"},{default:a(()=>[e(B,{onClick:t.allSelect},{default:a(()=>[c("\u5168\u90E8\u9009\u62E9")]),_:1},8,["onClick"]),e(B,{class:"mt-3",onClick:t.allCancel},{default:a(()=>[c("\u5168\u90E8\u53D6\u6D88")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]))}}),Q=y($,[["__file","D:/web/MxCADOnline/Sample/Edit/MxCADAppVuetify3/src/view/Dialogs/DraftingSettingsDialog/ObjectSnaps.vue"]]),X=k({__name:"PolarTracking",setup(t){return(s,i)=>(d(),S(b,null,{default:a(()=>[e(p,{cols:5},{default:a(()=>[e(_,{class:""},{label:a(()=>[e(l,{"key-name":"P"},{default:a(()=>[c("\u542F\u52A8\u6781\u8F74\u8FFD\u8E2A")]),_:1})]),_:1}),e(x,{title:"\u6781\u8F74\u89D2\u8BBE\u7F6E",class:"mt-2",style:{height:"200px"}},{default:a(()=>[e(l,{"key-name":"I",colon:""},{default:a(()=>[c("\u589E\u91CF\u89D2")]),_:1}),e(I,{class:"mt-2",items:[]})]),_:1})]),_:1}),e(p,{cols:7})]),_:1}))}}),H=y(X,[["__file","D:/web/MxCADOnline/Sample/Edit/MxCADAppVuetify3/src/view/Dialogs/DraftingSettingsDialog/PolarTracking.vue"]]),J=k({__name:"GridSnap",setup(t){return(s,i)=>(d(),S(b,null,{default:a(()=>[e(p,{cols:7},{default:a(()=>[e(_,{class:""},{label:a(()=>[e(l,{"key-name":"S"},{default:a(()=>[c("\u6805\u683C\u6355\u6349")]),_:1})]),_:1}),e(x,{title:"\u6781\u8F74\u89D2\u8BBE\u7F6E",class:"mt-2",style:{height:"200px"}},{default:a(()=>[e(l,{"key-name":"I",class:"mt-1",colon:""},{default:a(()=>[c("\u589E\u91CF\u89D2")]),_:1}),e(V,{class:"mt-1"},{prepend:a(()=>[e(l,{"key-name":"P",colon:""},{default:a(()=>[c("\u6355\u6349X\u8F74\u95F4\u8DDD")]),_:1})]),_:1}),e(V,{class:"mt-1"},{prepend:a(()=>[e(l,{"key-name":"C",colon:""},{default:a(()=>[c("\u6355\u6349Y\u8F74\u95F4\u8DDD")]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{cols:5})]),_:1}))}}),W=y(J,[["__file","D:/web/MxCADOnline/Sample/Edit/MxCADAppVuetify3/src/view/Dialogs/DraftingSettingsDialog/GridSnap.vue"]]),Y=()=>{const t=E({data:[{icon:"class:iconfont fangkuang",check:u(n.End),type:n.End,name:"\u7AEF\u70B9",key:"E"},{icon:"class:iconfont merge",check:u(n.Ins),type:n.Ins,name:"\u63D2\u5165\u70B9",key:"S"},{icon:"class:iconfont sanjiao",check:u(n.Mid),type:n.Mid,name:"\u4E2D\u5FC3",key:"M"},{icon:"class:iconfont chuizu",check:u(n.Perp),type:n.Perp,name:"\u5782\u8DB3",key:"P"},{icon:"class:iconfont yuan",check:u(n.Cen),type:n.Cen,name:"\u5706\u5FC3",key:"C"},{icon:"class:iconfont qiedian",check:u(n.Tan),type:n.Tan,name:"\u5207\u70B9",key:"N"},{icon:"class:iconfont yuanzhoncha",check:u(n.Node),type:n.Node,name:"\u8282\u70B9",key:"D"},{icon:"class:iconfont zuijindian",check:u(n.Near),type:n.Near,name:"\u6700\u8FD1\u70B9",key:"R"},{icon:"class:iconfont lingxingfangkuang",check:u(n.Quad),type:n.Quad,name:"\u8C61\u9650\u70B9",key:"Q"},{icon:"class:iconfont shizikuang",check:u(n.App),type:n.App,name:"\u5916\u89C2\u4EA4\u70B9",key:"A"},{icon:"class:iconfont cha",check:u(n.Int),type:n.Int,name:"\u4EA4\u70B9",key:"I"},{icon:"class:iconfont pinghangdu",check:u(n.Par),type:n.Par,name:"\u5E73\u884C",key:"L"},{icon:"class:iconfont yanshen",check:u(n.Ext),type:n.Ext,name:"\u5EF6\u4F38",key:"X"}],allSelect:function(){t.data.forEach(s=>{s.check=!0})},allCancel:function(){t.data.forEach(s=>{s.check=!1})}});return{tab:"\u5BF9\u8C61\u6355\u6349",props:t,component:()=>F(Q,t)}},K=()=>{const t=E({});return{tab:"\u6781\u8F74\u8FFD\u8E2A",component:()=>F(H,t)}},Z=()=>{const t=E({});return{tab:"\u6805\u683C\u548C\u6355\u6349",component:()=>F(W,t)}},ee=()=>{const{props:t,...s}=Y();return{items:[s,K(),Z()],define:()=>{let r;t.data.forEach(({check:f,type:g})=>{r=T(g,f,r)}),typeof r<"u"&&N(r)}}},ae={class:"px-3"},ne=k({__name:"index",setup(t){const s=j(0),{isShow:i,showDialog:o}=G(!1,"showDraftingSettingsDialog",(D={})=>{o(),D.tab&&(s.value=D.tab)}),{items:r,define:f}=ee(),g=[{name:"\u786E\u5B9A",fun:()=>{f(),o(!1)},primary:!0},{name:"\u5173\u95ED",fun:()=>o(!1)}];return(D,m)=>(d(),S(q,{title:"\u8349\u56FE\u8BBE\u7F6E",modelValue:A(i),"onUpdate:modelValue":m[1]||(m[1]=h=>L(i)?i.value=h:null),footerBtnList:g,"max-width":"600"},{default:a(()=>[M("div",ae,[e(z,{items:A(r),modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=h=>s.value=h),height:312,tabsProps:{grow:!0}},null,8,["items","modelValue"])])]),_:1},8,["modelValue"]))}}),re=y(ne,[["__file","D:/web/MxCADOnline/Sample/Edit/MxCADAppVuetify3/src/view/Dialogs/DraftingSettingsDialog/index.vue"]]);export{re as default};
