import { GetFavorites, AddToFavorites, RemoveFromFavorites } from "./utils/local-storage.js";
import { request } from "./services/api-service.js";

const btnOpenModal = document.querySelector("[data-modal-open]");
const btnCloseModal = document.querySelector("[data-modal-close]");
const modalWindow = document.querySelector(".modal"); // Modal without backdrop
const modal = document.querySelector("[data-modal]"); // Modal with backdrop

const exerciseID = '64f389465ae26083f39b18d7'; // ID of the exercise TEST

(async () => {
    const exerciseData = await request(`exercises/${exerciseID}`);
    LoadElementsData(exerciseData);


    // Add to favorites btn functions
    const btnAddFavorites = document.querySelector(".btn-modal-add-fav");
    
    // Check local storage if it contains exercise
    // localStorage.setItem("favorites", JSON.stringify([1])); // For test
    if (GetFavorites().indexOf(exerciseID) >= 0) {
        btnAddFavorites.classList.add("fav-added");
        document.querySelector(".btn-fav-text").textContent = "Remove from favorites";
        document.querySelector(".icon-fav-btn-use").setAttribute("href", "./img/icons.svg#icon-trash");
    }
    
    btnAddFavorites.addEventListener("click", (event) => {
        btnAddFavorites.classList.toggle("fav-added");
    
        if (btnAddFavorites.classList.contains("fav-added")) {
            AddToFavorites(exerciseID);
            document.querySelector(".btn-fav-text").textContent = "Remove from favorites";
            document.querySelector(".icon-fav-btn-use").setAttribute("href", "./img/icons.svg#icon-trash");
        }
        else {
            RemoveFromFavorites(exerciseID);
            document.querySelector(".btn-fav-text").textContent = "Add to favorites";
            document.querySelector(".icon-fav-btn-use").setAttribute("href", "./img/icons.svg#icon-heart");
        }
    })
})();

function LoadElementsData(exerciseData) {
    document.querySelector(".img-modal-exercise").src = exerciseData.gifUrl;
    document.querySelector(".title-modal").textContent = exerciseData.name.trim();
    document.querySelector(".desc-text").textContent = exerciseData.description.trim();
    
    // Stars fill color
    document.querySelector(".rating-value").textContent = exerciseData.rating;
    // Full stars
    const stars = document.querySelectorAll(".icon-modal-star");
    const wholePartRating = Math.floor(exerciseData.rating);
    for (let i = 0; i < wholePartRating; i++)
        stars[i].classList.add("gold");

    // Half star
    const fractionPartRating = Math.floor((exerciseData.rating - wholePartRating) * 100);
    const gradientStops = document.querySelectorAll(".gradient-middle");
    for (let i = 0; i < gradientStops.length; i++)
        gradientStops[i].setAttribute("offset", `${fractionPartRating}%`);
    stars[wholePartRating].classList.add("gold-half");

    // Stats
    const statsList = document.querySelector(".stats-list");
    statsList.innerHTML = "";
    if(exerciseData.target !== "")
        AddStat("Target", exerciseData.target);
    if(exerciseData.bodyPart !== "")
        AddStat("BodyPart", exerciseData.bodyPart);
    if(exerciseData.equipment !== "")
        AddStat("Equipment", exerciseData.equipment);
    if(exerciseData.popularity !== "")
        AddStat("Popular", exerciseData.popularity);
    if(exerciseData.burnedCalories !== "")
        AddStat("Burned Calories", exerciseData.burnedCalories + "/" + exerciseData.time + " min");
    statsList.insertAdjacentHTML("beforeend", innerHTMLStats);
}

let innerHTMLStats = '';
function AddStat(title, value) {
    innerHTMLStats += `<li class="stats-item">
              <p class="stats-title">${title}</p>
              <p class="stats-value">${value}</p>
            </li>`;
}


// Modal close functions
btnOpenModal.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    OnOpen();
});


btnCloseModal.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    OnClose();
});

modal.addEventListener("click", (event) => {
    const rect = modalWindow.getBoundingClientRect();
    // Define if cursor is in modal window
    const isInWindow = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInWindow) {
        modal.classList.toggle("hidden");
        OnClose();
    }
});

function escapeKeyDown(event) {
    if (event.key === "Escape") {
        modal.classList.add("hidden");
        OnClose();
    }
}

function OnOpen() {
    document.addEventListener("keydown", escapeKeyDown);
    document.querySelector("body").classList.add("modal-open");
    document.querySelector('.scroll-up-button').style.visibility = 'hidden';
}

function OnClose() {
    document.removeEventListener("keydown", escapeKeyDown);
    document.querySelector("body").classList.remove("modal-open");
    document.querySelector('.scroll-up-button').style.visibility = 'visible';
}


