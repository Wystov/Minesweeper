import cells from './data';
import checkGameEnd from './game-end';

const openCell = (cell) => {
  const el = cells.elements[cell];
  const value = cells.data[cell];
  if (value !== 0) el.textContent = value;
  el.classList.add('cell--open');
  checkGameEnd(value);
};

export default openCell;
