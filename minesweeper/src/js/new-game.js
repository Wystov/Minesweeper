import state from './state';
import page from './data';

const newGame = () => {
  if (page.elements.message) {
    page.elements.message.classList.remove('message--active');
  }
  clearInterval(page.timerId);
  document.body.innerHTML = '';
  state.game = true;
  state.turns = 0;
  page.elements.length = 0;
  Object.values(page.cells).forEach((arr) => {
    const newArr = arr;
    newArr.length = 0;
  });
};

export default newGame;
