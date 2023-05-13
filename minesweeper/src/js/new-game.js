import state from './state';
import page from './data';

const newGame = () => {
  clearInterval(page.timerId);
  document.body.innerHTML = '';
  state.game = true;
  page.turns = 0;
  page.elements.length = 0;
  Object.values(page.cells).forEach((arr) => {
    const newArr = arr;
    newArr.length = 0;
  });
};

export default newGame;
