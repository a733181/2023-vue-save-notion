import{u as p,a as d,r as u,o as a,c as n,b as t,F as h,d as b,e as o,f as l,B as x,n as y,w as g,g as f,t as v}from"./index-28f4c1a4.js";const k={class:"flex min-h-[100vh] w-28 flex-col overflow-y-auto border-r border-gray-500 pt-20 text-center"},w=t("h1",{class:"mb-6 text-lg"},"歡迎",-1),C={class:"mx-2 text-sm"},B={__name:"StartMenu",setup(i){const r=p(),{logoutHandler:c}=r,s=d(),_=[{name:"udemy",path:"/console/udemy"},{name:"youtube",path:"/console/youtube"},{name:"bilibili",path:"/console/bilibili"},{name:"pressplay",path:"/console/pressplay"}];return(S,L)=>{const m=u("RouterLink");return a(),n("div",k,[w,t("ul",C,[(a(),n(h,null,b(_,e=>t("li",{key:e.name,class:y(["mb-8 border-b pb-1 hover:opacity-50",l(s).path===e.path?"border-green-800 text-green-800":"border-gray-300 text-gray-300"])},[o(m,{to:e.path},{default:g(()=>[f(v(e.name),1)]),_:2},1032,["to"])],2)),64))]),o(x,{text:"登出",class:"btn mx-6 mb-5 mt-auto bg-gray-200",onClick:l(c)},null,8,["onClick"])])}}},R={class:"flex min-h-[100vh]"},V={class:"grow"},$={__name:"Console",setup(i){return(r,c)=>{const s=u("RouterView");return a(),n("div",R,[o(B),t("div",V,[o(s)])])}}};export{$ as default};