import{G as l,a as d,L as u,r as f}from"./assets/main-BItl8hSr.js";import"./assets/vendor-Cn2Vr82J.js";const s=document.querySelector("[data-modal]");document.addEventListener("DOMContentLoaded",async function(){const a=document.getElementById("no-favorites");let r=document.querySelector(".exercises-container"),n=l();async function o(e){return(await Promise.all(e.map(async t=>{try{return await f(`exercises/${t}`)}catch(c){return console.error(`Error fetching data for ID ${t}:`,c),null}}))).filter(t=>t!==null)}async function i(){if(!r){console.error('No element found with the class "exercises-container".');return}if(r.innerHTML="",n.length===0)a.style.display="block";else{a.style.display="none";const e=await o(n);d({results:e},!0),u()}}window.addEventListener("click",function(e){e.target===s&&s.classList.add("hidden")}),await i()});
//# sourceMappingURL=favorite.js.map
