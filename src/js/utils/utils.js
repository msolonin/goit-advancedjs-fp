export let currentResolution;

function updateResolution() {
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
}
updateResolution();

addEventListener('resize', updateResolution);
