import{a as T}from"./vendor-CR7N1gwd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const m=document.querySelector(".js-mobile-menu"),M=window.location.pathname.split("/").pop(),h=m.querySelector(`.nav-link[href='./${M}']`);h&&h.classList.add("active");const B=document.querySelector(".js-open-menu"),P=document.querySelector(".js-close-menu");B.addEventListener("click",function(){m.classList.add("active")});P.addEventListener("click",function(){m.classList.remove("active")});const O="https://your-energy.b.goit.study/api/",L=async(t,o)=>{try{const r=`${O}${t}`;return(await T.get(r,{params:o})).data}catch(r){throw r}},q=`
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#242424"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6192 37.4778L51.6192 63.0059L48.9033 63.0059L48.9033 37.4778L36.1392 50.2419L34.2187 48.3214L50.2612 32.2789L66.3037 48.3214L64.3833 50.2419L51.6192 37.4778Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="0.3"/>
</svg>
`,C=`
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#242424"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6192 37.4778L51.6192 63.0059L48.9033 63.0059L48.9033 37.4778L36.1392 50.2419L34.2187 48.3214L50.2612 32.2789L66.3037 48.3214L64.3833 50.2419L51.6192 37.4778Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="0.3"/>
    </svg>
`,l=document.querySelector(".scroll-up-button");function H(){window.scrollTo({top:0,behavior:"smooth"})}function v(){return window.pageYOffset===0||document.documentElement.scrollTop===0}function k(){v()?l.style.visibility="hidden":l.style.visibility="visible"}function A(t){t===0?l.innerHTML=C:l.innerHTML=q,l.addEventListener("click",H),window.addEventListener("scroll",k),v()&&(l.style.visibility="hidden")}const w=document.querySelectorAll(".filter-button"),g=document.querySelector(".filter-pagination");let f={path:"filters",params:{filter:"Muscles"}},p=1,U=9,c=0;function S(){const t=c;window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1439px)").matches?c=1:window.matchMedia("(min-width: 1439px)").matches?c=2:c=0,t!==c&&console.log("TODO: Redraw the page based on the new resolution")}S();addEventListener("resize",S);A(c);function N(t){console.log(t)}async function b(t=!0){const o={...f.params,page:p,limit:U},r=await L(f.path,o);return t&&N(r),r}function D(){const t=document.querySelector(".filter-title");f.path==="filters"&&(t.innerHTML="Exercises")}function x(){document.querySelectorAll(".filters-pagination-button").forEach(o=>{o.classList.remove("filters-pagination-button-active"),parseInt(o.innerHTML)===p&&o.classList.add("filters-pagination-button-active")})}const y=async(t,o=!1)=>{!o&&t.classList.contains("filters-pagination-button-active")||(p=parseInt(t.innerHTML),x(),await b())};async function R(){g.innerHTML="";const o=(await b(!1)).totalPages;for(let s=1;s<=o;s++){const n=document.createElement("li"),i=document.createElement("button");i.innerHTML=s,i.classList.add("filters-pagination-button"),n.appendChild(i),g.appendChild(n)}document.querySelectorAll(".filters-pagination-button").forEach(s=>{s.addEventListener("click",()=>{y(s)})}),x(),y(document.querySelector(".filters-pagination-button-active"),!0)}const E=async t=>{p=1;const o=t.innerHTML;w.forEach(r=>{r.classList.remove("filter-button-active")}),t.classList.add("filter-button-active"),f={path:"filters",params:{filter:o}},D(),await R()};w.forEach(t=>{t.addEventListener("click",()=>{E(t)})});document.addEventListener("DOMContentLoaded",async()=>{const t=document.querySelector(".filter-button-active");E(t)});(async()=>{const t={text:'Unfortunately, there was an error on the server, but as they say: "Even in failure, wisdom finds its voice."',author:'Team "Your Enegry"'},o=n(),r={text:t.text,author:t.author};if(u(o)&&F(o.date))r.text=o.text,r.author=o.author;else try{await s(r)}catch(e){console.log(e)}i(r);async function s(e){const a=await L("quote");e.text=a.quote,e.author=a.author,localStorage.setItem("quote",JSON.stringify({text:a.quote,author:a.author,date:new Date}))}function n(){let e;try{e=JSON.parse(localStorage.getItem("quote"))}catch(a){console.error(a)}return e}function i(e){const a=document.querySelector(".quote-desc"),d=document.querySelector(".quote-author");a.textContent=e.text,d.textContent=e.author,a.classList.remove("skeleton"),d.classList.remove("skeleton")}function u(e){return e&&typeof(e==null?void 0:e.text)=="string"&&typeof(e==null?void 0:e.author)=="string"&&typeof(e==null?void 0:e.date)=="string"}function F(e){let a=new Date(e),d=new Date;return d.setHours(0,0,0,0),a.setHours(0,0,0,0),a.getTime()===d.getTime()}})();
//# sourceMappingURL=main-BP_-yGXd.js.map