import{a as L}from"./vendor-CR7N1gwd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const x="https://your-energy.b.goit.study/api/",S=async(c,o)=>{try{const s=`${x}${c}`;return(await L.get(s,{params:o})).data}catch(s){throw s}};let a;function v(){window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1439px)").matches?a=1:window.matchMedia("(min-width: 1439px)").matches?a=2:a=0}v();addEventListener("resize",v);const b=document.querySelector(".exercises-container"),P=(c,o)=>{const s=c.results.map(i=>`
        <div class="exercise-card">
            <div class="exercise-header">
                <p class="exercise-type">Workout</p>
                <div class="${o?"hidden":"visible"} exercise-rating">
                    <p>${i.rating}</p>
                    <svg width="16" height="16">
                        <use href="../img/icons.svg#icon-star-full"></use>
                    </svg>
                </div>
                <svg width="16" height="16" class="${o?"visible":"hidden"} icon-delete">
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
                <h3>${i.name}</h3>
            </div>
            <div class="card-params">
                <div class="exercise-calories">
                    <p>Burned calories: </p>
                    <p>${i.burnedCalories} / ${i.time} min</p>
                </div>
                <div class="exercise-bodypart">
                    <p>Body part: </p>
                    <p>${i.bodyPart}</p>
                </div>
                <div class="exercise-target">
                    <p>Target: </p>
                    <p>${i.target}</p>
                </div>
            </div>
        </div>
    `).join("");b.innerHTML=`<ul class="exercises-list">${s}</ul`},p=document.querySelector(".js-mobile-menu");let h=window.location.pathname.split("/").pop();h===""&&(h="index.html");const f=p.querySelector(`.nav-link[href='./${h}']`);f&&f.classList.add("active");const F=document.querySelector(".js-open-menu"),T=document.querySelector(".js-close-menu");F.addEventListener("click",function(){p.classList.add("active")});T.addEventListener("click",function(){p.classList.remove("active")});(async()=>{const c={text:'Unfortunately, there was an error on the server, but as they say: "Even in failure, wisdom finds its voice."',author:'Team "Your Enegry"'},o=t(),s={text:c.text,author:c.author};if(d(o)&&w(o.date))s.text=o.text,s.author=o.author;else try{await i(s)}catch(e){console.log(e)}r(s);async function i(e){const n=await S("quote");e.text=n.quote,e.author=n.author,localStorage.setItem("quote",JSON.stringify({text:n.quote,author:n.author,date:new Date}))}function t(){let e;try{e=JSON.parse(localStorage.getItem("quote"))}catch(n){console.error(n)}return e}function r(e){const n=document.querySelector(".quote-desc"),u=document.querySelector(".quote-author");n.textContent=e.text,u.textContent=e.author,n.classList.remove("skeleton"),u.classList.remove("skeleton")}function d(e){return e&&typeof(e==null?void 0:e.text)=="string"&&typeof(e==null?void 0:e.author)=="string"&&typeof(e==null?void 0:e.date)=="string"}function w(e){let n=new Date(e),u=new Date;return u.setHours(0,0,0,0),n.setHours(0,0,0,0),n.getTime()===u.getTime()}})();const B=`
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
//# sourceMappingURL=main-CxZDzMzc.js.map
