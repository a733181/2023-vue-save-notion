import{h as P,i as f,j as v,k as p,o as g,c as B,b,e as d,I as c,B as I,n as _,t as h,l as N,m as D}from"./index-28f4c1a4.js";import{u as L}from"./swal-1f66486e.js";import{b as S}from"./url-c294da06.js";const U=P("useBiliBiliStore",()=>{async function m(r){try{const{data:l}=await f.post(S.list,r);return!!l.success}catch{return!1}}async function t(r){try{const{data:l}=await f.post(S.video,r);return!!l.success}catch{return!1}}return{bilibiliListSaveToNotion:m,bilibiliVideoSaveToNotion:t}}),k={class:"flex min-h-[100vh] items-center justify-center"},T=["onSubmit"],j=b("p",{class:"mb-2 text-center text-gray-400"}," BiliBili 播放清單網址(需有 ?p= ) ",-1),C={class:"mb-10 flex items-center justify-center gap-x-3"},E={__name:"Bilibili",setup(m){const t=L(),r=U(),{bilibiliListSaveToNotion:l,bilibiliVideoSaveToNotion:w}=r,i=v(!1),a=v(0),s=p({mainPageId:""}),e=p({list:"",video:""});function y(){s.mainPageId="",e.list="",e.video=""}function V(){return s.mainPageId===""?(t.toastSimple("error","請輸入 Notion API 頁面 ID"),!1):e.list===""&&e.video===""?(t.toastSimple("error","請輸入 BiliBili 網址"),!1):e.list!==""&&(!e.list.includes("https://www.bilibili.com/video/")||!e.list.includes("?p="))?(t.toastSimple("error","請輸入正確的 BiliBili 播放清單網址"),!1):e.video!==""&&!e.video.includes("https://www.bilibili.com/video/")?(t.toastSimple("error","請輸入正確的 BiliBili 播放網址"),!1):!0}async function x(){if(!V())return;a.value=0,i.value=!0;let u;e.list!==""?u=await l({mainPageId:s.mainPageId,bilibiliUrl:e.list}):u=await w({mainPageId:s.mainPageId,bilibiliUrl:e.video}),u?a.value=1:a.value=2,i.value=!1,e.list="",e.video=""}return(u,o)=>(g(),B("div",k,[b("form",{onSubmit:D(x,["prevent"])},[d(c,{label:"notion API 頁面 ID",classLabel:"mr-3",class:"mb-5 ml-2",modelValue:s.mainPageId,"onUpdate:modelValue":o[0]||(o[0]=n=>s.mainPageId=n),classInputDisabled:"bg-gray-500",disabled:i.value},null,8,["modelValue","disabled"]),d(c,{label:"BiliBili 播放清單網址",classLabel:"mr-3",modelValue:e.list,"onUpdate:modelValue":o[1]||(o[1]=n=>e.list=n),classInputDisabled:"bg-gray-500",class:"mb-2",disabled:i.value||e.video!==""},null,8,["modelValue","disabled"]),j,d(c,{label:"BiliBili 播放網址",classLabel:"mr-3 ml-8",modelValue:e.video,"onUpdate:modelValue":o[2]||(o[2]=n=>e.video=n),classInputDisabled:"bg-gray-500",class:"mb-5",disabled:i.value||e.list!==""},null,8,["modelValue","disabled"]),b("div",C,[d(I,{text:"清除",class:"btn bg-slate-200",onClick:y,disabled:i.value},null,8,["disabled"]),d(I,{text:"送出",class:"btn bg-teal-700 text-white",type:"submit",loading:i.value,disabled:i.value},null,8,["loading","disabled"])]),a.value?(g(),B("p",{key:0,class:_(["text-center",{"text-red-200":a.value===2}])}," 加入"+h(a.value==1?"成功":"失敗"),3)):N("",!0)],40,T)]))}};export{E as default};
