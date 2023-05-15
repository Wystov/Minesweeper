import page from './data';

const setDifficulty = (event) => {
  const size = parseInt(event.target.value, 10);
  const mines = page.elements.minesInput;
  if (size === 100) {
    mines.value = 10;
  } else if (size === 225) {
    mines.value = 30;
  } else if (size === 625) {
    mines.value = 99;
  }
  const radio = event.target;
  radio.checked = true;
};

export default setDifficulty;
