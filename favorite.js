import"./assets/main-CrkN-OQ3.js";import"./assets/vendor-CR7N1gwd.js";document.addEventListener("DOMContentLoaded",function(){const m=document.getElementById("no-favorites"),s=document.getElementById("exercise-modal"),g=document.getElementById("modal-title"),y=document.getElementById("modal-details"),b=document.querySelector(".close-btn"),c=document.querySelector(".pagination"),r=document.querySelector("#favorites-container"),d=6;let i=JSON.parse(localStorage.getItem("favorites"))||[],a=1;function u(t=1){if(r.innerHTML="",i.length===0)m.style.display="block";else{m.style.display="none";const e=(t-1)*d,n=e+d;i.slice(e,n).forEach(o=>E(o)),L(i.length,t)}}function E(t){const e=document.createElement("li");e.className="exercises-cards-item",e.innerHTML=`
                <div class="exercises-name">
                    <span>Workout</span>
                    <button class="remove-btn" data-id="${t._id}" title="Remove from Favorites">&times;</button>
                    <button class="exercises-name-btn" type="button" data-modal-open="">Start</button>
                    <h3>${t.name}</h3>
                    <ul>
                        <li>Burned Calories: ${t.burnedCalories}</li>
                        <li>Body part: ${t.bodyPart}</li>
                        <li>Target: ${t.target}</li>
                    </ul>
                </div>
            `,e.querySelector(".remove-btn").addEventListener("click",()=>B(t._id)),e.querySelector(".exercises-name-btn").addEventListener("click",()=>f(t)),r.appendChild(e)}function L(t,e){c.innerHTML="";const n=Math.ceil(t/d);for(let o=1;o<=n;o++){const v=document.createElement("li"),l=document.createElement("filter-button");l.innerHTML=o,l.classList.add("filters-pagination-button"),o===e&&l.classList.add("filters-pagination-button-active"),v.appendChild(l),c.appendChild(v)}document.querySelectorAll(".filters-pagination-button").forEach(o=>{o.addEventListener("click",()=>{h(parseInt(o.innerHTML))})})}function S(t){c.querySelectorAll(".filters-pagination-button").forEach(n=>{n.classList.remove("filters-pagination-button-active"),parseInt(n.innerHTML)===t&&n.classList.add("filters-pagination-button-active")})}const h=async t=>{a=t,S(a),u(a)};function f(t){g.textContent=t.name,y.textContent=`Detailed description and instructions for ${t.name}.`,s.style.display="flex"}function B(t){i=i.filter(e=>e._id!==t),localStorage.setItem("favorites",JSON.stringify(i)),u(a)}r.addEventListener("click",function(t){if(t.target.classList.contains("exercises__name-btn")){const e=i.find(n=>n._id==t.target.dataset.id);f(e)}}),b.addEventListener("click",function(){s.style.display="none"}),window.addEventListener("click",function(t){t.target==s&&(s.style.display="none")}),u(a)});
//# sourceMappingURL=favorite.js.map
