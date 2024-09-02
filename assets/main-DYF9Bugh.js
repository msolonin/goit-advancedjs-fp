import{a as M}from"./vendor-Cn2Vr82J.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const T="https://your-energy.b.goit.study/api/",w=async(e,t)=>{try{const i=`${T}${e}`;return(await M.get(i,{params:t})).data}catch(i){throw i}};let c;function q(){window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1439px)").matches?c=1:window.matchMedia("(min-width: 1439px)").matches?c=2:c=0}q();addEventListener("resize",q);const A=document.querySelector(".exercises-container"),K=(e,t)=>{const i=e.results.map(o=>`
        <div class="exercise-card">
            <div class="exercise-header">
                <p class="exercise-type">Workout</p>
                <div class="${t?"hidden":"visible"} exercise-rating">
                    <p>${o.rating}</p>
                    <svg width="16" height="16">
                        <use href="../img/icons.svg#icon-star-full"></use>
                    </svg>
                </div>
                <button class="${t?"visible":"hidden"} icon-delete" data-id="${o._id}" aria-label="Delete">
                    <svg width="16" height="16">
                        <use href="../img/icons.svg#icon-trash"></use>
                    </svg>
                </button>
                <button class="button-start" data-modal-open value=${o._id}>
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
    `).join("");A.innerHTML=`<ul class="exercises-list">${i}</ul`};function P(){return JSON.parse(localStorage.getItem("favorites"))??[]}function B(e){const t=JSON.parse(localStorage.getItem("favorites"))??[];t.push(e),localStorage.setItem("favorites",JSON.stringify(t))}function C(e){const t=JSON.parse(localStorage.getItem("favorites"))??[];t.splice(t.indexOf(e),1),localStorage.setItem("favorites",JSON.stringify(t))}const $=document.querySelector("[data-modal-close]"),I=document.querySelector(".modal"),v=document.querySelector("[data-modal]"),g=document.querySelector(".btn-modal-add-fav");let f="";async function k(e){f=e;const t=await w(`exercises/${f}`);N(t),P().indexOf(f)>=0?(g.classList.add("fav-added"),document.querySelector(".btn-fav-text").textContent="Remove from favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-trash")):(g.classList.remove("fav-added"),document.querySelector(".btn-fav-text").textContent="Add to favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-heart")),R(),v.classList.toggle("hidden"),U()}function N(e){document.querySelector(".img-modal-exercise").src=e.gifUrl,document.querySelector(".title-modal").textContent=e.name.trim(),document.querySelector(".desc-text").textContent=e.description.trim(),document.querySelector(".rating-value").textContent=e.rating;const t=document.querySelectorAll(".icon-modal-star"),i=Math.floor(e.rating);for(let n=0;n<t.length;n++)t[n].classList.remove("gold"),t[n].classList.remove("gold-half"),n<i&&t[n].classList.add("gold");if(e.rating-Math.floor(e.rating)!==0){const n=Math.floor((e.rating-i)*100),s=document.querySelectorAll(".gradient-middle");for(let l=0;l<s.length;l++)s[l].setAttribute("offset",`${n}%`);t[i].classList.add("gold-half")}const o=document.querySelector(".stats-list");o.innerHTML="",p="",e.target!==""&&m("Target",e.target),e.bodyPart!==""&&m("BodyPart",e.bodyPart),e.equipment!==""&&m("Equipment",e.equipment),e.popularity!==""&&m("Popular",e.popularity),e.burnedCalories!==""&&m("Burned Calories",e.burnedCalories+"/"+e.time+" min"),o.insertAdjacentHTML("beforeend",p)}function R(){g.addEventListener("click",e=>{const t=e.currentTarget;t.classList.toggle("fav-added"),t.classList.contains("fav-added")?(B(f),document.querySelector(".btn-fav-text").textContent="Remove from favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-trash")):(C(f),document.querySelector(".btn-fav-text").textContent="Add to favorites",document.querySelector(".icon-fav-btn-use").setAttribute("href","./img/icons.svg#icon-heart")),e.stopImmediatePropagation()})}let p="";function m(e,t){p+=`<li class="stats-item">
              <p class="stats-title">${e}</p>
              <p class="stats-value">${t}</p>
            </li>`}function G(){const e=document.querySelectorAll("[data-modal-open]");for(let t=0;t<e.length;t++)e[t].addEventListener("click",i=>{const o=i.currentTarget;k(o.value)})}$.addEventListener("click",()=>{v.classList.add("hidden"),y()});v.addEventListener("click",e=>{const t=I.getBoundingClientRect();t.top<=e.clientY&&e.clientY<=t.top+t.height&&t.left<=e.clientX&&e.clientX<=t.left+t.width||(v.classList.add("hidden"),y())});function E(e){e.key==="Escape"&&(v.classList.add("hidden"),y())}function U(){document.addEventListener("keydown",E),document.querySelector("body").classList.add("modal-open"),document.querySelector(".scroll-up-button").style.visibility="hidden"}function y(){document.removeEventListener("keydown",E),document.querySelector("body").classList.remove("modal-open"),document.querySelector(".scroll-up-button").style.visibility="visible"}const L=document.querySelector(".js-mobile-menu");let h=window.location.pathname.split("/").pop();h===""&&(h="index.html");const S=L.querySelector(`.nav-link[href='./${h}']`);S&&S.classList.add("active");const H=document.querySelector(".js-open-menu"),J=document.querySelector(".js-close-menu");H.addEventListener("click",function(){L.classList.add("active")});J.addEventListener("click",function(){L.classList.remove("active")});(async()=>{const e={text:'Unfortunately, there was an error on the server, but as they say: "Even in failure, wisdom finds its voice."',author:'Team "Your Enegry"'},t=n(),i={text:e.text,author:e.author};if(l(t)&&O(t.date))i.text=t.text,i.author=t.author;else try{await o(i)}catch(r){console.log(r)}s(i);async function o(r){const a=await w("quote");r.text=a.quote,r.author=a.author,localStorage.setItem("quote",JSON.stringify({text:a.quote,author:a.author,date:new Date}))}function n(){let r;try{r=JSON.parse(localStorage.getItem("quote"))}catch(a){console.error(a)}return r}function s(r){const a=document.querySelector(".quote-desc"),u=document.querySelector(".quote-author");a.textContent=r.text,u.textContent=r.author,a.classList.remove("skeleton"),u.classList.remove("skeleton")}function l(r){return r&&typeof(r==null?void 0:r.text)=="string"&&typeof(r==null?void 0:r.author)=="string"&&typeof(r==null?void 0:r.date)=="string"}function O(r){let a=new Date(r),u=new Date;return u.setHours(0,0,0,0),a.setHours(0,0,0,0),a.getTime()===u.getTime()}})();const j=`
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#242424"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6192 37.4778L51.6192 63.0059L48.9033 63.0059L48.9033 37.4778L36.1392 50.2419L34.2187 48.3214L50.2612 32.2789L66.3037 48.3214L64.3833 50.2419L51.6192 37.4778Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="0.3"/>
</svg>
`,z=`
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#242424"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6192 37.4778L51.6192 63.0059L48.9033 63.0059L48.9033 37.4778L36.1392 50.2419L34.2187 48.3214L50.2612 32.2789L66.3037 48.3214L64.3833 50.2419L51.6192 37.4778Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="0.3"/>
    </svg>
`,d=document.querySelector(".scroll-up-button");let b=c;function Q(){window.scrollTo({top:0,behavior:"smooth"})}function x(){return window.pageYOffset===0||document.documentElement.scrollTop===0}function W(){x()?d.style.visibility="hidden":d.style.visibility="visible"}function F(){c===0?d.innerHTML=z:d.innerHTML=j}function _(){F(),d.addEventListener("click",Q),window.addEventListener("scroll",W),x()&&(d.style.visibility="hidden")}_();addEventListener("resize",()=>{c!==b&&(b=c,F())});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("subscriptionForm");e&&e.addEventListener("submit",Y)});function Y(e){e.preventDefault();const t=document.querySelector(".e-mail-input");/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t.value)?(console.log("Valid email, sending request to backend."),fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value})}).then(o=>{if(o.status===201)return o.json();throw o.status===400?new Error("Bad request (invalid request body)"):o.status===404?new Error("Not found"):o.status===409?new Error("Subscription already exists"):o.status===500?new Error("Server error"):new Error("Unexpected error")}).then(o=>{console.log(o),alert(o.message||"Subscription successful!"),t.value=""}).catch(o=>{console.error("Error:",o),alert(o.message||"Subscription failed. Please try again.")})):(console.log("Invalid email format."),alert("Please enter a valid email address."))}export{P as G,G as L,C as R,K as a,c,w as r};
//# sourceMappingURL=main-DYF9Bugh.js.map
