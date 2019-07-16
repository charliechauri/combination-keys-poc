import title from './modules/title.js';

(function init() {
  document.addEventListener('keydown', ({ ctrlKey, altKey }) => {
    if (ctrlKey && altKey) {
      title.setAccessKeyMode();
    }
  });

  document.addEventListener('keyup', () => {
    title.clean();
  });
}());
