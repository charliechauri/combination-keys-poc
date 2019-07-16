export default {
  name: 'Title',
  accessKeyClassName: 'title--accesskey-mode',
  element: document.querySelector('#title'),
  clean: function clean() {
    this.element.classList.remove(this.accessKeyClassName);
  },
  setAccessKeyMode: function setAccessKeyMode() {
    this.element.classList.add(this.accessKeyClassName);
  },
  init() {
    this.element.addEventListener('click', () => {
      console.log('You clicked on title!');
    });
  },
};
