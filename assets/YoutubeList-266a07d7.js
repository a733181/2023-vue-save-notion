import{h as w,i as d,j as c,k as x,o as b,c as m,b as f,e as r,I as y,B as p,n as V,t as _,l as U,m as h}from"./index-a716aba6.js";import{u as N}from"./swal-bc90acff.js";const P=w("useYoutubeStore",()=>{async function i(l){try{const{data:t}=await d.post("/youtubelist",l);return!!t.success}catch{return!1}}async function o(l){try{const{data:t}=await d.post("/youtubevideo",l);return!!t.success}catch{return!1}}return{youtubeListToNotionHandler:i,youtubeVideoToNotionHandler:o}}),L={class:"flex min-h-[100vh] items-center justify-center"},T=["onSubmit"],Y={class:"mb-10 flex items-center justify-center gap-x-3"},H={__name:"YoutubeList",setup(i){const o=N(),l=P(),{youtubeListToNotionHandler:t}=l,a=c(!1),s=c(0),e=x({mainPageId:"",youtubeUrl:""});function v(){e.mainPageId="",e.youtubeUrl=""}function S(){return e.mainPageId===""?(o.toastSimple("error","請輸入 Notion API 頁面 ID"),!1):e.youtubeUrl===""?(o.toastSimple("error","請輸入 YouTube 播放清單網址"),!1):e.youtubeUrl.includes("https://www.youtube.com/playlist?list=")?!0:(o.toastSimple("error","請輸入正確的 YouTube 播放清單網址"),!1)}async function g(){if(!S())return;s.value=0,a.value=!0,await t(e)?s.value=1:s.value=2,a.value=!1,e.courseUrl=""}return(I,u)=>(b(),m("div",L,[f("form",{onSubmit:h(g,["prevent"])},[r(y,{label:"notion API 頁面 ID",classLabel:"mr-3",class:"mb-5 ml-7",modelValue:e.mainPageId,"onUpdate:modelValue":u[0]||(u[0]=n=>e.mainPageId=n),disabled:a.value},null,8,["modelValue","disabled"]),r(y,{label:"YouTube 播放清單網址",classLabel:"mr-3",class:"mb-5",modelValue:e.youtubeUrl,"onUpdate:modelValue":u[1]||(u[1]=n=>e.youtubeUrl=n),disabled:a.value},null,8,["modelValue","disabled"]),f("div",Y,[r(p,{text:"清除",class:"btn bg-slate-200",onClick:v,disabled:a.value},null,8,["disabled"]),r(p,{text:"送出",class:"btn bg-teal-700 text-white",type:"submit",loading:a.value,disabled:a.value},null,8,["loading","disabled"])]),s.value?(b(),m("p",{key:0,class:V(["text-center",{"text-red-200":s.value===2}])}," 加入"+_(s.value==1?"成功":"失敗"),3)):U("",!0)],40,T)]))}};export{H as default};