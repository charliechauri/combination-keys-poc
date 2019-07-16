import title from './modules/title.js';

(function init() {
  title.init();
  Object.freeze(title);

  document.addEventListener('keydown', ({ ctrlKey, altKey }) => {
    if (ctrlKey && altKey) {
      title.setAccessKeyMode();
    }
  });

  document.addEventListener('keyup', () => {
    title.clean();
  });
}());
