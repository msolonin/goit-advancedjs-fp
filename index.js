import{c as o,r as h}from"./assets/main-D6TaOAch.js";import"./assets/vendor-CR7N1gwd.js";const p=document.querySelectorAll(".filter-button"),u=document.querySelector(".filter-pagination");let s={path:"filters",params:{filter:"Muscles"}},r=1,i=9,f=o;function y(t){console.log(t)}async function m(t=!0){const e={...s.params,page:r,limit:i},a=await h(s.path,e);return t&&y(a),a}function E(){const t=document.querySelector(".filter-title");s.path==="filters"&&(t.innerHTML="Exercises")}function L(){document.querySelectorAll(".filters-pagination-button").forEach(e=>{e.classList.remove("filters-pagination-button-active"),parseInt(e.innerHTML)===r&&e.classList.add("filters-pagination-button-active")})}const d=async(t,e=!1)=>{!e&&t.classList.contains("filters-pagination-button-active")||(r=parseInt(t.innerHTML),L(),await m())};async function g(){u.innerHTML="";const e=(await m(!1)).totalPages;for(let n=1;n<=e;n++){const l=document.createElement("li"),c=document.createElement("button");c.innerHTML=n,c.classList.add("filters-pagination-button"),l.appendChild(c),u.appendChild(l)}document.querySelectorAll(".filters-pagination-button").forEach(n=>{n.addEventListener("click",()=>{d(n)})}),L(),d(document.querySelector(".filters-pagination-button-active"),!0)}function b(){switch(o){case 0:i=9;break;case 1:i=12;break;case 2:i=12;break}}const v=async t=>{r=1;const e=t.innerHTML;b(),p.forEach(a=>{a.classList.remove("filter-button-active")}),t.classList.add("filter-button-active"),s={path:"filters",params:{filter:e}},E(),await g()};p.forEach(t=>{t.addEventListener("click",()=>{v(t)})});document.addEventListener("DOMContentLoaded",async()=>{const t=document.querySelector(".filter-button-active");v(t)});addEventListener("resize",async()=>{o!==f&&(f=o,b(),await g())});
//# sourceMappingURL=index.js.map