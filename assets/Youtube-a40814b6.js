import{h as T,i as b,j as f,k as v,o as p,c as y,b as g,e as n,I as c,B as I,n as h,t as N,l as Y,m as _}from"./index-28f4c1a4.js";import{u as D}from"./swal-1f66486e.js";import{y as w}from"./url-c294da06.js";const H=T("useYoutubeStore",()=>{async function m(u){try{const{data:a}=await b.post(w.list,u);return!!a.success}catch{return!1}}async function l(u){try{const{data:a}=await b.post(w.video,u);return!!a.success}catch{return!1}}return{youtubeListToNotionHandler:m,youtubeVideoToNotionHandler:l}}),L={class:"flex min-h-[100vh] items-center justify-center"},U=["onSubmit"],k={class:"mb-10 flex items-center justify-center gap-x-3"},A={__name:"Youtube",setup(m){const l=D(),u=H(),{youtubeListToNotionHandler:a,youtubeVideoToNotionHandler:S}=u,t=f(!1),s=f(0),o=v({mainPageId:""}),e=v({list:"",video:""});function V(){o.mainPageId="",e.list="",e.video=""}function P(){return o.mainPageId===""?(l.toastSimple("error","請輸入 Notion API 頁面 ID"),!1):e.list===""&&e.video===""?(l.toastSimple("error","請輸入 YouTube 網址"),!1):e.list!==""&&!e.list.includes("https://www.youtube.com/playlist?list=")?(l.toastSimple("error","請輸入正確的 YouTube 播放清單網址"),!1):e.video!==""&&!e.video.includes("https://www.youtube.com/watch?")?(l.toastSimple("error","請輸入正確的 YouTube 播放網址"),!1):!0}async function x(){if(!P())return;s.value=0,t.value=!0;let d;e.list!==""?d=await a({mainPageId:o.mainPageId,youtubeUrl:e.list}):d=await S({mainPageId:o.mainPageId,youtubeUrl:e.video}),d?s.value=1:s.value=2,t.value=!1,e.list="",e.video=""}return(d,i)=>(p(),y("div",L,[g("form",{onSubmit:_(x,["prevent"])},[n(c,{label:"notion API 頁面 ID",classLabel:"mr-3",class:"mb-5 ml-7",modelValue:o.mainPageId,"onUpdate:modelValue":i[0]||(i[0]=r=>o.mainPageId=r),classInputDisabled:"bg-gray-500",disabled:t.value},null,8,["modelValue","disabled"]),n(c,{label:"YouTube 播放清單網址",classLabel:"mr-3",class:"mb-5",modelValue:e.list,"onUpdate:modelValue":i[1]||(i[1]=r=>e.list=r),classInputDisabled:"bg-gray-500",disabled:t.value||e.video!==""},null,8,["modelValue","disabled"]),n(c,{label:"YouTube 播放網址",classLabel:"mr-3",class:"mb-5 ml-8",modelValue:e.video,"onUpdate:modelValue":i[2]||(i[2]=r=>e.video=r),classInputDisabled:"bg-gray-500",disabled:t.value||e.list!==""},null,8,["modelValue","disabled"]),g("div",k,[n(I,{text:"清除",class:"btn bg-slate-200",onClick:V,disabled:t.value},null,8,["disabled"]),n(I,{text:"送出",class:"btn bg-teal-700 text-white",type:"submit",loading:t.value,disabled:t.value},null,8,["loading","disabled"])]),s.value?(p(),y("p",{key:0,class:h(["text-center",{"text-red-200":s.value===2}])}," 加入"+N(s.value==1?"成功":"失敗"),3)):Y("",!0)],40,U)]))}};export{A as default};
