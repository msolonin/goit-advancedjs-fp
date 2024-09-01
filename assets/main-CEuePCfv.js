import{a as O}from"./vendor-Cn2Vr82J.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const T="https://your-energy.b.goit.study/api/",w=async(t,e)=>{try{const i=`${T}${t}`;return(await O.get(i,{params:e})).data}catch(i){throw i}};let l;function q(){window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1439px)").matches?l=1:window.matchMedia("(min-width: 1439px)").matches?l=2:l=0}q();addEventListener("resize",q);const A=document.querySelector(".exercises-container"),_=(t,e)=>{const i=t.results.map(s=>`
        <div class="exercise-card">
            <div class="exercise-header">
                <p class="exercise-type">Workout</p>
                <div class="${e?"hidden":"visible"} exercise-rating">
                    <p>${s.rating}</p>
                    <svg width="16" height="16">
                        <use href="../img/icons.svg#icon-star-full"></use>
                    </svg>
                </div>
                <svg width="16" height="16" class="${e?"visible":"hidden"} icon-delete">
                    <use href="../img/icons.svg#icon-trash"></use>
                </svg>
                <button class="button-start" data-modal-open value=${s._id}>
                    <p>Start</p>
                    <svg width="16" height="16">
                        <use href="../img/icons.svg#icon-arrow-start"></use>
                    </svg>
                </button>
            </div>
            <div class="exercise-title">
                <svg width="24" height="24">
                    <use href="../img/icons.svg#icon-runner"></use>
                </svg>
                <h3>${s.name}</h3>
            </div>
            <div class="card-params">
                <div class="exercise-calories">
                    <p>Burned calories: </p>
                    <p>${s.burnedCalories} / ${s.time} min</p>
                </div>
                <div class="exercise-bodypart">
                    <p>Body part: </p>
                    <p>${s.bodyPart}</p>
                </div>
                <div class="exercise-target">
                    <p>Target: </p>
                    <p>${s.target}</p>
                </div>
            </div>
        </div>
    `).join("");A.innerHTML=`<ul class="exercises-list">${i}</ul`};function B(){return JSON.parse(localStorage.getItem("favorites"))??[]}function C(t){const e=JSON.parse(localStorage.getItem("favorites"))??[];e.push(t),localStorage.setItem("favorites",JSON.stringify(e))}function $(t){const e=JSON.parse(localStorage.getItem("favorites"))??[];e.splice(e.indexOf(t),1),localStorage.setItem("favorites",JSON.stringify(e))}const P=document.querySelector("[data-modal-close]"),k=document.querySelector(".modal"),v=document.querySelector("[data-modal]"),g=document.querySelector(".btn-modal-add-fav");let m="";async function I(t){m=t;const e=await w(`exercises/${m}`);N(e),B().indexOf(m)>=0?(g.classList.add("fav-added"),document.querySelector(".btn-fav-text").textContent="Remove from favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-trash")):(g.classList.remove("fav-added"),document.querySelector(".btn-fav-text").textContent="Add to favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-heart")),R(),v.classList.toggle("hidden"),U()}function N(t){document.querySelector(".img-modal-exercise").src=t.gifUrl,document.querySelector(".title-modal").textContent=t.name.trim(),document.querySelector(".desc-text").textContent=t.description.trim(),document.querySelector(".rating-value").textContent=t.rating;const e=document.querySelectorAll(".icon-modal-star"),i=Math.floor(t.rating);for(let o=0;o<e.length;o++)e[o].classList.remove("gold"),e[o].classList.remove("gold-half"),o<i&&e[o].classList.add("gold");if(t.rating-Math.floor(t.rating)!==0){const o=Math.floor((t.rating-i)*100),r=document.querySelectorAll(".gradient-middle");for(let a=0;a<r.length;a++)r[a].setAttribute("offset",`${o}%`);e[i].classList.add("gold-half")}const s=document.querySelector(".stats-list");s.innerHTML="",p="",t.target!==""&&f("Target",t.target),t.bodyPart!==""&&f("BodyPart",t.bodyPart),t.equipment!==""&&f("Equipment",t.equipment),t.popularity!==""&&f("Popular",t.popularity),t.burnedCalories!==""&&f("Burned Calories",t.burnedCalories+"/"+t.time+" min"),s.insertAdjacentHTML("beforeend",p)}function R(){g.addEventListener("click",t=>{const e=t.currentTarget;e.classList.toggle("fav-added"),e.classList.contains("fav-added")?(C(m),document.querySelector(".btn-fav-text").textContent="Remove from favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-trash")):($(m),document.querySelector(".btn-fav-text").textContent="Add to favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-heart")),t.stopImmediatePropagation()})}let p="";function f(t,e){p+=`<li class="stats-item">
              <p class="stats-title">${t}</p>
              <p class="stats-value">${e}</p>
            </li>`}function G(){const t=document.querySelectorAll("[data-modal-open]");for(let e=0;e<t.length;e++)t[e].addEventListener("click",i=>{const s=i.currentTarget;I(s.value)})}P.addEventListener("click",()=>{v.classList.add("hidden"),y()});v.addEventListener("click",t=>{const e=k.getBoundingClientRect();e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width||(v.classList.add("hidden"),y())});function x(t){t.key==="Escape"&&(v.classList.add("hidden"),y())}function U(){document.addEventListener("keydown",x),document.querySelector("body").classList.add("modal-open"),document.querySelector(".scroll-up-button").style.visibility="hidden"}function y(){document.removeEventListener("keydown",x),document.querySelector("body").classList.remove("modal-open"),document.querySelector(".scroll-up-button").style.visibility="visible"}const L=document.querySelector(".js-mobile-menu");let h=window.location.pathname.split("/").pop();h===""&&(h="index.html");const S=L.querySelector(`.nav-link[href='./${h}']`);S&&S.classList.add("active");const H=document.querySelector(".js-open-menu"),J=document.querySelector(".js-close-menu");H.addEventListener("click",function(){L.classList.add("active")});J.addEventListener("click",function(){L.classList.remove("active")});(async()=>{const t={text:'Unfortunately, there was an error on the server, but as they say: "Even in failure, wisdom finds its voice."',author:'Team "Your Enegry"'},e=o(),i={text:t.text,author:t.author};if(a(e)&&M(e.date))i.text=e.text,i.author=e.author;else try{await s(i)}catch(n){console.log(n)}r(i);async function s(n){const c=await w("quote");n.text=c.quote,n.author=c.author,localStorage.setItem("quote",JSON.stringify({text:c.quote,author:c.author,date:new Date}))}function o(){let n;try{n=JSON.parse(localStorage.getItem("quote"))}catch(c){console.error(c)}return n}function r(n){const c=document.querySelector(".quote-desc"),u=document.querySelector(".quote-author");c.textContent=n.text,u.textContent=n.author,c.classList.remove("skeleton"),u.classList.remove("skeleton")}function a(n){return n&&typeof(n==null?void 0:n.text)=="string"&&typeof(n==null?void 0:n.author)=="string"&&typeof(n==null?void 0:n.date)=="string"}function M(n){let c=new Date(n),u=new Date;return u.setHours(0,0,0,0),c.setHours(0,0,0,0),c.getTime()===u.getTime()}})();const j=`
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#242424"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6192 37.4778L51.6192 63.0059L48.9033 63.0059L48.9033 37.4778L36.1392 50.2419L34.2187 48.3214L50.2612 32.2789L66.3037 48.3214L64.3833 50.2419L51.6192 37.4778Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="0.3"/>
</svg>
`,Q=`
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#242424"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6192 37.4778L51.6192 63.0059L48.9033 63.0059L48.9033 37.4778L36.1392 50.2419L34.2187 48.3214L50.2612 32.2789L66.3037 48.3214L64.3833 50.2419L51.6192 37.4778Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="0.3"/>
    </svg>
`,d=document.querySelector(".scroll-up-button");let b=l;function W(){window.scrollTo({top:0,behavior:"smooth"})}function F(){return window.pageYOffset===0||document.documentElement.scrollTop===0}function Y(){F()?d.style.visibility="hidden":d.style.visibility="visible"}function E(){l===0?d.innerHTML=Q:d.innerHTML=j}function z(){E(),d.addEventListener("click",W),window.addEventListener("scroll",Y),F()&&(d.style.visibility="hidden")}z();addEventListener("resize",()=>{l!==b&&(b=l,E())});export{B as G,G as L,_ as a,l as c,w as r};
//# sourceMappingURL=main-CEuePCfv.js.map
