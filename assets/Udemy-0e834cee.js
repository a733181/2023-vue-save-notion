import{h as g,i as I,j as i,k as x,o as d,c,b as m,e as o,I as f,B as b,n as _,t as w,l as V,m as h}from"./index-c8efa287.js";import{u as P,a as N}from"./url-daeaceda.js";const k=g("useUdemyStore",()=>{async function u(s){try{const{data:l}=await I.post(P,s);return!!l.success}catch{return!1}}return{udemySaveToNotionHandler:u}}),B={class:"flex min-h-[100vh] items-center justify-center"},H=["onSubmit"],j={class:"mb-10 flex items-center justify-center gap-x-3"},L={__name:"Udemy",setup(u){const s=N(),l=k(),{udemySaveToNotionHandler:p}=l,a=i(!1),t=i(0),e=x({mainPageId:"",courseUrl:""});function v(){e.mainPageId="",e.courseUrl=""}function y(){return e.mainPageId===""?(s.toastSimple("error","請輸入 Notion API 頁面 ID"),!1):e.courseUrl===""?(s.toastSimple("error","請輸入 Udemy 課程網址"),!1):e.courseUrl.includes("https://www.udemy.com/course/")?!0:(s.toastSimple("error","請輸入正確的 Udemy 課程網址"),!1)}async function S(){if(!y())return;t.value=0,a.value=!0,await p(e)?t.value=1:t.value=2,a.value=!1,e.courseUrl=""}return(U,r)=>(d(),c("div",B,[m("form",{onSubmit:h(S,["prevent"])},[o(f,{label:"notion API 頁面 ID",classLabel:"mr-3",class:"mb-5",modelValue:e.mainPageId,"onUpdate:modelValue":r[0]||(r[0]=n=>e.mainPageId=n),disabled:a.value},null,8,["modelValue","disabled"]),o(f,{label:"udemy 課程網址",classLabel:"mr-3",class:"mb-5 ml-4",modelValue:e.courseUrl,"onUpdate:modelValue":r[1]||(r[1]=n=>e.courseUrl=n),disabled:a.value},null,8,["modelValue","disabled"]),m("div",j,[o(b,{text:"清除",class:"btn bg-slate-200",onClick:v,disabled:a.value},null,8,["disabled"]),o(b,{text:"送出",class:"btn bg-teal-700 text-white",type:"submit",loading:a.value,disabled:a.value},null,8,["loading","disabled"])]),t.value?(d(),c("p",{key:0,class:_(["text-center",{"text-red-200":t.value===2}])}," 加入"+w(t.value==1?"成功":"失敗"),3)):V("",!0)],40,H)]))}};export{L as default};