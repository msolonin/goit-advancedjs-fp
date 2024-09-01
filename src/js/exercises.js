const container = document.querySelector('.exercises-container');

export const renderExercises = (exercises, deletable) => {
  const cardsHtml = exercises.results
    .map(
      exercise => `
        <div class="exercise-card">
            <div class="exercise-header">
                <p class="exercise-type">Workout</p>
                <div class="${deletable ? 'hidden' : 'visible'} exercise-rating">
                    <p>${exercise.rating}</p>
                    <svg width="16" height="16">
                        <use href="../img/icons.svg#icon-star-full"></use>
                    </svg>
                </div>
                <svg width="16" height="16" class="${deletable ? 'visible' : 'hidden'} icon-delete">
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
                <h3>${exercise.name}</h3>
            </div>
            <div class="card-params">
                <div class="exercise-calories">
                    <p>Burned calories: </p>
                    <p>${exercise.burnedCalories} / ${exercise.time} min</p>
                </div>
                <div class="exercise-bodypart">
                    <p>Body part: </p>
                    <p>${exercise.bodyPart}</p>
                </div>
                <div class="exercise-target">
                    <p>Target: </p>
                    <p>${exercise.target}</p>
                </div>
            </div>
        </div>
    `
    )
    .join('');

  container.innerHTML = `<ul class="exercises-list">${cardsHtml}</ul`;
}