import state from './state';

const setDifficulty = (event) => {
  state.fieldSize = parseInt(event.target.value, 10);
  if (state.fieldSize === 100) {
    state.mines = 10;
  } else if (state.fieldSize === 225) {
    state.mines = 30;
  } else if (state.fieldSize === 625) {
    state.mines = 99;
  }
  const radio = event.target;
  radio.checked = true;
};

export default setDifficulty;
