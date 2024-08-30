document.addEventListener('DOMContentLoaded', function () {
  const noFavoritesMessage = document.getElementById('no-favorites');
  const modal = document.getElementById('exercise-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDetails = document.getElementById('modal-details');
  const closeModalBtn = document.querySelector('.close-btn');
  const paginationContainer = document.querySelector('.pagination');
  const cardList = document.querySelector('#favorites-container');

  const ITEMS_PER_PAGE = 6;
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  let currentPage = 1;

  function displayFavorites(page = 1) {
    cardList.innerHTML = '';

    if (favorites.length === 0) {
      noFavoritesMessage.style.display = 'block';
    } else {
      noFavoritesMessage.style.display = 'none';
      const start = (page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const favoritesToShow = favorites.slice(start, end);
      favoritesToShow.forEach(exercise => createExerciseCard(exercise));
      drawPagination(favorites.length, page);
    }
  }

  function createExerciseCard(exercise) {
    const card = document.createElement('li');
    card.className = 'exercises-cards-item';

    card.innerHTML = `
                <div class="exercises-name">
                    <span>Workout</span>
                    <button class="remove-btn" data-id="${exercise._id}" title="Remove from Favorites">&times;</button>
                    <button class="exercises-name-btn" type="button" data-modal-open="">Start</button>
                    <h3>${exercise.name}</h3>
                    <ul>
                        <li>Burned Calories: ${exercise.burnedCalories}</li>
                        <li>Body part: ${exercise.bodyPart}</li>
                        <li>Target: ${exercise.target}</li>
                    </ul>
                </div>
            `;
    const removeButton = card.querySelector('.remove-btn');
    removeButton.addEventListener('click', () => removeExercise(exercise._id));
    const startButton = card.querySelector('.exercises-name-btn');
    startButton.addEventListener('click', () => openModal(exercise));

    cardList.appendChild(card);
  }

  function drawPagination(totalItems, currentPage) {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      const button = document.createElement('filter-button');
      button.innerHTML = i;
      button.classList.add('filters-pagination-button');
      if (i === currentPage) {
        button.classList.add('filters-pagination-button-active');
      }
      li.appendChild(button);
      paginationContainer.appendChild(li);
    }

    const buttons = document.querySelectorAll('.filters-pagination-button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        handlePaginationButtonClick(parseInt(btn.innerHTML));
      });
    });
  }

  function updateActivePaginationButton(currentPage) {
    const buttons = paginationContainer.querySelectorAll(
      '.filters-pagination-button'
    );
    buttons.forEach(btn => {
      btn.classList.remove('filters-pagination-button-active');
      if (parseInt(btn.innerHTML) === currentPage) {
        btn.classList.add('filters-pagination-button-active');
      }
    });
  }

  const handlePaginationButtonClick = async page => {
    currentPage = page;
    updateActivePaginationButton(currentPage);
    displayFavorites(currentPage);
  };

  function openModal(exercise) {
    modalTitle.textContent = exercise.name;
    modalDetails.textContent = `Detailed description and instructions for ${exercise.name}.`;
    modal.style.display = 'flex';
  }

  function removeExercise(id) {
    favorites = favorites.filter(exercise => exercise._id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites(currentPage);
  }

  cardList.addEventListener('click', function (event) {
    if (event.target.classList.contains('exercises__name-btn')) {
      const exercise = favorites.find(ex => ex._id == event.target.dataset.id);
      openModal(exercise);
    }
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  displayFavorites(currentPage);
});
