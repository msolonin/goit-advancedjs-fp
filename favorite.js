import{G as s,a as f,L as m,R as y,r as v}from"./assets/main-DRGLpPrh.js";import"./assets/vendor-Cn2Vr82J.js";const c=document.querySelector("[data-modal]");document.addEventListener("DOMContentLoaded",async function(){const n=document.getElementById("no-favorites");let i=document.querySelector(".exercises-container"),a=s();async function l(e){return(await Promise.all(e.map(async t=>{try{return await v(`exercises/${t}`)}catch(u){return console.error(`Error fetching data for ID ${t}:`,u),null}}))).filter(t=>t!==null)}async function r(){if(!i){console.error('No element found with the class "exercises-container".');return}if(i.innerHTML="",a.length===0)n.style.display="block";else{n.style.display="none";const e=await l(a);f({results:e},!0),m(),d()}}function d(){document.querySelectorAll(".icon-delete").forEach(o=>{o.addEventListener("click",()=>{const t=o.getAttribute("data-id");y(t),a=s(),r()})})}window.addEventListener("click",function(e){(e.target===c||e.target.closest("[data-modal-close]"))&&(c.classList.add("hidden"),a=s(),r())}),await r()});
//# sourceMappingURL=favorite.js.map
