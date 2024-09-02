import{a as $}from"./vendor-Cn2Vr82J.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const A="https://your-energy.b.goit.study/api/",E=async(e,t)=>{try{const s=`${A}${e}`;return(await $.get(s,{params:t})).data}catch(s){throw s}};let c;function x(){window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1439px)").matches?c=1:window.matchMedia("(min-width: 1439px)").matches?c=2:c=0}x();addEventListener("resize",x);const p="/goit-advancedjs-fp/assets/icons-DRImzY5-.svg",b=document.querySelector(".exercises-container"),G=(e,t)=>{if(e.results.length>0){const s=e.results.map(o=>`
        <div class="exercise-card">
            <div class="exercise-header">
                <p class="exercise-type">Workout</p>
                <div class="${t?"hidden":"visible"} exercise-rating">
                    <p>${o.rating}</p>
                    <svg width="16" height="16">
                        <use href="${p}#icon-star-full"></use>
                    </svg>
                </div>
                <button class="${t?"visible":"hidden"} icon-delete" data-id="${o._id}" aria-label="Delete">
                    <svg width="16" height="16">
                        <use href="${p}#icon-trash"></use>
                    </svg>
                </button>
                <button class="button-start" data-modal-open value=${o._id}>
                    <p>Start</p>
                    <svg width="16" height="16">
                        <use href="${p}#icon-arrow-start"></use>
                    </svg>
                </button>
            </div>
            <div class="exercise-title">
                <svg width="24" height="24">
                    <use href="${p}#icon-runner"></use>
                </svg>
                <h3>${o.name}</h3>
            </div>
            <div class="card-params">
                <div class="exercise-calories">
                    <p>Burned calories: </p>
                    <p>${o.burnedCalories} / ${o.time} min</p>
                </div>
                <div class="exercise-bodypart">
                    <p>Body part: </p>
                    <p>${o.bodyPart}</p>
                </div>
                <div class="exercise-target">
                    <p>Target: </p>
                    <p>${o.target}</p>
                </div>
            </div>
        </div>
    `).join("");b.innerHTML=`<ul class="exercises-list">${s}</ul`}else b.innerHTML=`<div class="nothing-found">
        <p class="hero-desc"> Nothing found</p>
      </div`};function P(){return JSON.parse(localStorage.getItem("favorites"))??[]}function B(e){const t=JSON.parse(localStorage.getItem("favorites"))??[];t.push(e),localStorage.setItem("favorites",JSON.stringify(t))}function C(e){const t=JSON.parse(localStorage.getItem("favorites"))??[];t.splice(t.indexOf(e),1),localStorage.setItem("favorites",JSON.stringify(t))}const I=document.querySelector("[data-modal-close]"),N=document.querySelector(".modal"),v=document.querySelector("[data-modal]"),h=document.querySelector(".btn-modal-add-fav");let m="";async function k(e){m=e;const t=await E(`exercises/${m}`);R(t),P().indexOf(m)>=0?(h.classList.add("fav-added"),document.querySelector(".btn-fav-text").textContent="Remove from favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-trash")):(h.classList.remove("fav-added"),document.querySelector(".btn-fav-text").textContent="Add to favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-heart")),U(),v.classList.toggle("hidden"),H()}function R(e){document.querySelector(".img-modal-exercise").src=e.gifUrl,document.querySelector(".title-modal").textContent=e.name.trim(),document.querySelector(".desc-text").textContent=e.description.trim(),document.querySelector(".rating-value").textContent=e.rating;const t=document.querySelectorAll(".icon-modal-star"),s=Math.floor(e.rating);for(let n=0;n<t.length;n++)t[n].classList.remove("gold"),t[n].classList.remove("gold-half"),n<s&&t[n].classList.add("gold");if(e.rating-Math.floor(e.rating)!==0){const n=Math.floor((e.rating-s)*100),i=document.querySelectorAll(".gradient-middle");for(let l=0;l<i.length;l++)i[l].setAttribute("offset",`${n}%`);t[s].classList.add("gold-half")}const o=document.querySelector(".stats-list");o.innerHTML="",g="",e.target!==""&&f("Target",e.target),e.bodyPart!==""&&f("BodyPart",e.bodyPart),e.equipment!==""&&f("Equipment",e.equipment),e.popularity!==""&&f("Popular",e.popularity),e.burnedCalories!==""&&f("Burned Calories",e.burnedCalories+"/"+e.time+" min"),o.insertAdjacentHTML("beforeend",g)}function U(){h.addEventListener("click",e=>{const t=e.currentTarget;t.classList.toggle("fav-added"),t.classList.contains("fav-added")?(B(m),document.querySelector(".btn-fav-text").textContent="Remove from favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-trash")):(C(m),document.querySelector(".btn-fav-text").textContent="Add to favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-heart")),e.stopImmediatePropagation()})}let g="";function f(e,t){g+=`<li class="stats-item">
              <p class="stats-title">${e}</p>
              <p class="stats-value">${t}</p>
            </li>`}function V(){const e=document.querySelectorAll("[data-modal-open]");for(let t=0;t<e.length;t++)e[t].addEventListener("click",s=>{const o=s.currentTarget;k(o.value)})}I.addEventListener("click",()=>{v.classList.add("hidden"),L()});v.addEventListener("click",e=>{const t=N.getBoundingClientRect();t.top<=e.clientY&&e.clientY<=t.top+t.height&&t.left<=e.clientX&&e.clientX<=t.left+t.width||(v.classList.add("hidden"),L())});function F(e){e.key==="Escape"&&(v.classList.add("hidden"),L())}function H(){document.addEventListener("keydown",F),document.querySelector("body").classList.add("modal-open"),document.querySelector(".scroll-up-button").style.visibility="hidden"}function L(){document.removeEventListener("keydown",F),document.querySelector("body").classList.remove("modal-open"),document.querySelector(".scroll-up-button").style.visibility="visible"}const S=document.querySelector(".js-mobile-menu");let y=window.location.pathname.split("/").pop();y===""&&(y="index.html");const w=S.querySelector(`.nav-link[href='./${y}']`);w&&w.classList.add("active");const j=document.querySelector(".js-open-menu"),J=document.querySelector(".js-close-menu");j.addEventListener("click",function(){S.classList.add("active")});J.addEventListener("click",function(){S.classList.remove("active")});(async()=>{const e={text:'Unfortunately, there was an error on the server, but as they say: "Even in failure, wisdom finds its voice."',author:'Team "Your Enegry"'},t=n(),s={text:e.text,author:e.author};if(l(t)&&T(t.date))s.text=t.text,s.author=t.author;else try{await o(s)}catch(r){console.log(r)}i(s);async function o(r){const a=await E("quote");r.text=a.quote,r.author=a.author,localStorage.setItem("quote",JSON.stringify({text:a.quote,author:a.author,date:new Date}))}function n(){let r;try{r=JSON.parse(localStorage.getItem("quote"))}catch(a){console.error(a)}return r}function i(r){const a=document.querySelector(".quote-desc"),u=document.querySelector(".quote-author");a.textContent=r.text,u.textContent=r.author,a.classList.remove("skeleton"),u.classList.remove("skeleton")}function l(r){return r&&typeof(r==null?void 0:r.text)=="string"&&typeof(r==null?void 0:r.author)=="string"&&typeof(r==null?void 0:r.date)=="string"}function T(r){let a=new Date(r),u=new Date;return u.setHours(0,0,0,0),a.setHours(0,0,0,0),a.getTime()===u.getTime()}})();const z=`
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#242424"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6192 37.4778L51.6192 63.0059L48.9033 63.0059L48.9033 37.4778L36.1392 50.2419L34.2187 48.3214L50.2612 32.2789L66.3037 48.3214L64.3833 50.2419L51.6192 37.4778Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="0.3"/>
</svg>
`,Q=`
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#242424"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6192 37.4778L51.6192 63.0059L48.9033 63.0059L48.9033 37.4778L36.1392 50.2419L34.2187 48.3214L50.2612 32.2789L66.3037 48.3214L64.3833 50.2419L51.6192 37.4778Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="0.3"/>
    </svg>
`,d=document.querySelector(".scroll-up-button");let q=c;function W(){window.scrollTo({top:0,behavior:"smooth"})}function O(){return window.pageYOffset===0||document.documentElement.scrollTop===0}function Y(){O()?d.style.visibility="hidden":d.style.visibility="visible"}function M(){c===0?d.innerHTML=Q:d.innerHTML=z}function _(){M(),d.addEventListener("click",W),window.addEventListener("scroll",Y),O()&&(d.style.visibility="hidden")}_();addEventListener("resize",()=>{c!==q&&(q=c,M())});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("subscriptionForm");e&&e.addEventListener("submit",Z)});function Z(e){e.preventDefault();const t=document.querySelector(".e-mail-input");/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t.value)?(console.log("Valid email, sending request to backend."),fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value})}).then(o=>{if(o.status===201)return o.json();throw o.status===400?new Error("Bad request (invalid request body)"):o.status===404?new Error("Not found"):o.status===409?new Error("Subscription already exists"):o.status===500?new Error("Server error"):new Error("Unexpected error")}).then(o=>{console.log(o),alert(o.message||"Subscription successful!"),t.value=""}).catch(o=>{console.error("Error:",o),alert(o.message||"Subscription failed. Please try again.")})):(console.log("Invalid email format."),alert("Please enter a valid email address."))}export{P as G,V as L,C as R,G as a,c,E as r};
//# sourceMappingURL=main-DPw95JgF.js.map
