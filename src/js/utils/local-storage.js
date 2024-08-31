// Returns Array
export function GetFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) ?? [];
}

export function AddToFavorites(exerciseID) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
    favorites.push(exerciseID);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function RemoveFromFavorites(exerciseID) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
    favorites.splice(favorites.indexOf(exerciseID), 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}