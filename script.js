document.querySelectorAll('a[href="#"]').forEach(link => link.addEventListener('click', event => event.preventDefault()));

document.querySelector('.menu-button')?.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

const exploreButton = document.querySelector('.explore');
const exploreMenu = document.querySelector('.explore-menu');
const exploreOverlay = document.querySelector('.explore-overlay');

function setExplore(open) {
  document.body.classList.toggle('explore-open', open);
  exploreButton?.setAttribute('aria-expanded', String(open));
  exploreMenu?.setAttribute('aria-hidden', String(!open));
  exploreOverlay?.setAttribute('aria-hidden', String(!open));
}

exploreButton?.addEventListener('click', () => {
  setExplore(!document.body.classList.contains('explore-open'));
});
exploreOverlay?.addEventListener('click', () => setExplore(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setExplore(false);
});
