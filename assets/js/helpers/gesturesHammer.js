delete Hammer.defaults.cssProps.userSelect;

const APP = document.querySelector('#app');
const hammerjs = new Hammer(APP);

hammerjs.on('panleft panright', (ev) => {
  if (ev.pointerType === 'touch') {
    const windowWidth = window.screen.width;
    const distance = Math.floor(ev.distance) >= 50;
    if (ev.type === 'panleft' && ev.center.x > windowWidth - 100 && distance) {
      modalNewTask.classList.add('active');
    }
    if (ev.type === 'panright' && distance) {
      modalNewTask.classList.remove('active');
    }
  }
});
