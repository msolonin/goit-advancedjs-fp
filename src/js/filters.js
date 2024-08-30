import { request } from './services/api-service';

const filterButtons = document.querySelectorAll('.filter-button');
const filterPagination = document.querySelector('.filter-pagination');

let requestBase = { path: 'filters', params: { filter: 'Muscles' } };
let filterPage = 1;
let filterLimit = 9;
let currentResolution = 0;

function updateResolution() {
  const prevResolution = currentResolution;
  if (
    window.matchMedia('(min-width: 768px)').matches &&
    window.matchMedia('(max-width: 1439px)').matches
  ) {
    currentResolution = 1;
  } else if (window.matchMedia('(min-width: 1439px)').matches) {
    currentResolution = 2;
  } else {
    currentResolution = 0;
  }
  if (prevResolution !== currentResolution) {
    console.log('TODO: Redraw the page based on the new resolution');
  }
}
updateResolution();
addEventListener('resize', updateResolution);

function drawFilterContent(data) {
  // TODO: Draw the content based on the data
  console.log(data);
}

// Process the current request
async function processCurrentRequest(shouldDraw = true) {
  const params = {
    ...requestBase.params,
    page: filterPage,
    limit: filterLimit,
  };
  const data = await request(requestBase.path, params);
  if (shouldDraw) {
    drawFilterContent(data);
  }
  return data;
}

function updateTitle() {
  const title = document.querySelector('.filter-title');
  if (requestBase.path === 'filters') {
    title.innerHTML = 'Exercises';
  }
}

function updateActivePaginationButton() {
  const buttons = document.querySelectorAll('.filters-pagination-button');
  buttons.forEach(btn => {
    btn.classList.remove('filters-pagination-button-active');
    if (parseInt(btn.innerHTML) === filterPage) {
      btn.classList.add('filters-pagination-button-active');
    }
  });
}

const handlePaginationButtonClick = async (btn, force_process = false) => {
  // Do not process the request if the button is already active
  if (
    !force_process &&
    btn.classList.contains('filters-pagination-button-active')
  ) {
    return;
  }
  filterPage = parseInt(btn.innerHTML);
  updateActivePaginationButton();
  await processCurrentRequest();
};

async function drawPagination() {
  // Clear the pagination
  filterPagination.innerHTML = '';
  // Get total number of pages(filters=2,exercises=3)
  const data = await processCurrentRequest(false);
  const totalPages = data.totalPages;
  // Add <li> to the pagination for each counter while button inside
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerHTML = i;
    button.classList.add('filters-pagination-button');
    li.appendChild(button);
    filterPagination.appendChild(li);
  }
  // Add event listener to all buttons
  const buttons = document.querySelectorAll('.filters-pagination-button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      handlePaginationButtonClick(btn);
    });
  });
  // Set active button with page = filterPage
  updateActivePaginationButton();
  // Press active button to draw the content
  handlePaginationButtonClick(
    document.querySelector('.filters-pagination-button-active'),
    true
  );
}

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

  requestBase = { path: 'filters', params: { filter } };
  updateTitle();
  await drawPagination();
};

// Register all the filter-button clicks to the handleFilterButtonClick function
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    handleFilterButtonClick(btn);
  });
});

// OnPageLoaded -> press default active button
document.addEventListener('DOMContentLoaded', async () => {
  const musclesButton = document.querySelector('.filter-button-active');
  handleFilterButtonClick(musclesButton);
});
