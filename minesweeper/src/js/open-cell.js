import cells from './data';
import state from './state';
import checkGameEnd from './game-end';

const checkCell = (cell) => {
  const { open, flag } = cells;
  const isOpen = open.includes(cell);
  const isFlagged = flag.includes(cell);
  return !isOpen && !isFlagged;
};

const getNeighbors = (i) => {
  const closedNeighbors = [];
  const { fieldSize } = state;
  const isLeft = i % 10 === 0;
  const isRight = (i + 1) % 10 === 0;
  if (!isLeft) {
    if (i - 1 >= 0 && checkCell(i - 1)) closedNeighbors.push(i - 1);
    if (i - 11 >= 0 && checkCell(i - 11)) closedNeighbors.push(i - 11);
    if (i + 9 < fieldSize && checkCell(i + 9)) closedNeighbors.push(i + 9);
  }
  if (!isRight) {
    if (i + 1 < fieldSize && checkCell(i + 1)) closedNeighbors.push(i + 1);
    if (i - 9 >= 0 && checkCell(i - 9)) closedNeighbors.push(i - 9);
    if (i + 11 < fieldSize && checkCell(i + 11)) closedNeighbors.push(i + 11);
  }
  if (i - 10 >= 0 && checkCell(i - 10)) closedNeighbors.push(i - 10);
  if (i + 10 < fieldSize && checkCell(i + 10)) closedNeighbors.push(i + 10);
  // it will be defined anyway cuz getNeighbors can be called only from openCell
  // eslint-disable-next-line no-use-before-define
  closedNeighbors.forEach((el) => openCell(el));
};

const openCell = (cell) => {
  const el = cells.elements[cell];
  const value = cells.data[cell];
  el.classList.add('cell--open');
  cells.open.push(cell);
  if (value) {
    el.textContent = value;
  } else {
    getNeighbors(cell);
  }
  checkGameEnd(value);
};

export default openCell;
