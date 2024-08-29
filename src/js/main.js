import { request } from './services/api-service';
import './mobile-menu';

const filterButtons = document.querySelectorAll('.filter-button');

let filterPage = 1;
let currentResolution = 0;

function updateResolution() {
  if (
    window.matchMedia('(min-width: 768px)').matches &&
    window.matchMedia('(max-width: 1439px)').matches
  ) {
    console.log('768-1439');
    currentResolution = 1;
  } else if (window.matchMedia('(min-width: 1439px)').matches) {
    console.log('1439+');
    currentResolution = 2;
  } else {
    console.log('0-767');
    currentResolution = 0;
  }
}
updateResolution();
addEventListener('resize', updateResolution);

const handleFilterButtonClick = async btn => {
  filterPage = 1;
  // Get filter
  const filter = btn.innerHTML;
  // Get limit
  let limit = 9;
  switch (currentResolution) {
    case 0:
      limit = 9;
      break;
    case 1:
      limit = 12;
      break;
    case 2:
      limit = 12;
      break;
  }
  // Remove filter-button-active for all buttons
  filterButtons.forEach(btn => {
    btn.classList.remove('filter-button-active');
  });
  // Add filter-button-active to the clicked button
  btn.classList.add('filter-button-active');

  const path = 'filters';
  const params = { filter, limit, page: filterPage };
  // TODO: Process this data.
  // You can do the trick to process this data initially by pressing "Muscles" button
  const data = await request(path, params);
};

// Register all the filter-button clicks to the handleFilterButtonClick function
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    handleFilterButtonClick(btn);
  });
});
