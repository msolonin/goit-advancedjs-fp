const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const mobileMenu = document.querySelector('.js-mobile-menu');

// Open/close mobile menu
openMenuBtn.addEventListener('click', function () {
  mobileMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('active');
});
