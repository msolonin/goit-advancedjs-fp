import{a as L}from"./vendor-CR7N1gwd.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const x="https://your-energy.b.goit.study/api/",S=async(c,n)=>{try{const r=`${x}${c}`;return(await L.get(r,{params:n})).data}catch(r){throw r}};let a;function v(){window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1439px)").matches?a=1:window.matchMedia("(min-width: 1439px)").matches?a=2:a=0}v();addEventListener("resize",v);const b=document.querySelector(".exercises-list"),P=(c,n)=>{const r=c.results.map(s=>`
        <div class="exercise-card">
            <div class="exercise-header">
                <p class="exercise-type">Workout</p>
                <div class="visible exercise-rating">
                    <p>${s.rating}</p>
                    <svg width="16" height="16">
                        <use href="../img/icons.svg#icon-star-full"></use>
                    </svg>
                </div>
                <svg width="16" height="16" class="hidden icon-delete">
                    <use href="../img/icons.svg#icon-trash"></use>
                </svg>
                <button class="button-start" data-modal-open value="64f389465ae26083f39b18d7">
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
    `).join("");b.innerHTML=r},p=document.querySelector(".js-mobile-menu");let h=window.location.pathname.split("/").pop();h===""&&(h="index.html");const f=p.querySelector(`.nav-link[href='./${h}']`);f&&f.classList.add("active");const F=document.querySelector(".js-open-menu"),T=document.querySelector(".js-close-menu");F.addEventListener("click",function(){p.classList.add("active")});T.addEventListener("click",function(){p.classList.remove("active")});(async()=>{const c={text:'Unfortunately, there was an error on the server, but as they say: "Even in failure, wisdom finds its voice."',author:'Team "Your Enegry"'},n=t(),r={text:c.text,author:c.author};if(d(n)&&w(n.date))r.text=n.text,r.author=n.author;else try{await s(r)}catch(e){console.log(e)}o(r);async function s(e){const i=await S("quote");e.text=i.quote,e.author=i.author,localStorage.setItem("quote",JSON.stringify({text:i.quote,author:i.author,date:new Date}))}function t(){let e;try{e=JSON.parse(localStorage.getItem("quote"))}catch(i){console.error(i)}return e}function o(e){const i=document.querySelector(".quote-desc"),u=document.querySelector(".quote-author");i.textContent=e.text,u.textContent=e.author,i.classList.remove("skeleton"),u.classList.remove("skeleton")}function d(e){return e&&typeof(e==null?void 0:e.text)=="string"&&typeof(e==null?void 0:e.author)=="string"&&typeof(e==null?void 0:e.date)=="string"}function w(e){let i=new Date(e),u=new Date;return u.setHours(0,0,0,0),i.setHours(0,0,0,0),i.getTime()===u.getTime()}})();const B=`
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#242424"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6192 37.4778L51.6192 63.0059L48.9033 63.0059L48.9033 37.4778L36.1392 50.2419L34.2187 48.3214L50.2612 32.2789L66.3037 48.3214L64.3833 50.2419L51.6192 37.4778Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="0.3"/>
</svg>
`,E=`
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#242424"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6192 37.4778L51.6192 63.0059L48.9033 63.0059L48.9033 37.4778L36.1392 50.2419L34.2187 48.3214L50.2612 32.2789L66.3037 48.3214L64.3833 50.2419L51.6192 37.4778Z" fill="#F4F4F4" stroke="#F4F4F4" stroke-width="0.3"/>
    </svg>
`,l=document.querySelector(".scroll-up-button");let m=a;function M(){window.scrollTo({top:0,behavior:"smooth"})}function g(){return window.pageYOffset===0||document.documentElement.scrollTop===0}function $(){g()?l.style.visibility="hidden":l.style.visibility="visible"}function y(){a===0?l.innerHTML=E:l.innerHTML=B}function O(){y(),l.addEventListener("click",M),window.addEventListener("scroll",$),g()&&(l.style.visibility="hidden")}O();addEventListener("resize",()=>{a!==m&&(m=a,y())});export{P as a,a as c,S as r};
//# sourceMappingURL=main-Bl_9-oJ3.js.map
