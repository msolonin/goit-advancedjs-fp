const mobileMenu = document.querySelector('.js-mobile-menu');

// Add active menu items
const pathnamePage = window.location.pathname.split('/').pop();
const currentPage = mobileMenu.querySelector(
  `.nav-link[href='./${pathnamePage}']`
);

if (currentPage) {
  currentPage.classList.add('active');
}

// Open/close mobile menu
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

openMenuBtn.addEventListener('click', function () {
  mobileMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('active');
});
