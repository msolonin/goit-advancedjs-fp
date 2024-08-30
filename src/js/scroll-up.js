// Logic for scroll-up button
import { smallScrollUpButton, bigScrollUpButton, scrollUpButton } from './utils/elements-storage.js';

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function isWindowAtTop() {
    return window.pageYOffset === 0 || document.documentElement.scrollTop === 0;
}

export function handleScroll() {
    if (!isWindowAtTop()) {
        scrollUpButton.style.visibility = 'visible';
    } else {
        scrollUpButton.style.visibility = 'hidden';
    }
}

export function initScrollUpButton(resolution) {
    if (resolution === 0) {
      scrollUpButton.innerHTML = smallScrollUpButton;
    }else{
      scrollUpButton.innerHTML = bigScrollUpButton;
    }
    scrollUpButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);
    if (isWindowAtTop()) {
        scrollUpButton.style.visibility = 'hidden';
    }
}
