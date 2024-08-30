// Logic for scroll-up button
import {
  smallScrollUpButton,
  bigScrollUpButton,
  scrollUpButton,
} from './utils/elements-storage.js';

import { currentResolution } from './utils/utils.js';

let lastResolution = currentResolution;

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function isWindowAtTop() {
  return window.pageYOffset === 0 || document.documentElement.scrollTop === 0;
}

function handleScroll() {
  if (!isWindowAtTop()) {
    scrollUpButton.style.visibility = 'visible';
  } else {
    scrollUpButton.style.visibility = 'hidden';
  }
}

function updateScrollUpButtonSize() {
  if (currentResolution === 0) {
    scrollUpButton.innerHTML = smallScrollUpButton;
  } else {
    scrollUpButton.innerHTML = bigScrollUpButton;
  }
}

function initScrollUpButton() {
  updateScrollUpButtonSize();
  scrollUpButton.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', handleScroll);
  if (isWindowAtTop()) {
    scrollUpButton.style.visibility = 'hidden';
  }
}

initScrollUpButton(currentResolution);

// On resize -> update scroll-up button size if resolution changed
addEventListener('resize', () => {
  if (currentResolution === lastResolution) {
    return;
  }
  lastResolution = currentResolution;
  updateScrollUpButtonSize();
});
