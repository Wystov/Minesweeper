import state from './state';
import page from './data';

const setDifficulty = (event) => {
  state.fieldSize = parseInt(event.target.value, 10);
  if (state.fieldSize === 100) {
    state.mines = 10;
  } else if (state.fieldSize === 225) {
    state.mines = 30;
  } else if (state.fieldSize === 625) {
    state.mines = 99;
  }
  page.elements.minesInput.value = state.mines;
  const radio = event.target;
  radio.checked = true;
  state.save();
};

export default setDifficulty;
