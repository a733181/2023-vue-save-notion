import{h as s,i as r}from"./index-6544b75a.js";const n=s("useYoutubeStore",()=>{async function o(e){try{const{data:t}=await r.post("/youtubelist",e);return!!t.success}catch{return!1}}async function u(e){try{const{data:t}=await r.post("/youtubevideo",e);return!!t.success}catch{return!1}}return{youtubeListToNotionHandler:o,youtubeVideoToNotionHandler:u}});export{n as u};
