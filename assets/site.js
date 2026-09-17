const gallery = document.querySelector('[data-gallery]');
const controls = document.querySelector('[data-gallery-controls]');
if (gallery && controls) {
  controls.hidden = false;
  controls.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      gallery.scrollBy({
        left: (gallery.querySelector('figure').getBoundingClientRect().width + 22) * Number(button.dataset.direction),
        behavior: reducedMotion ? 'instant' : 'smooth'
      });
    });
  });
}
