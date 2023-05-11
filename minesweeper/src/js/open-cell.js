import cells from './data';
import state from './state';
import checkGameEnd from './game-end';

const checkCell = (cell) => {
  const { open, flag } = cells;
  const cellExists = cell >= 0 && cell < state.fieldSize;
  const isOpen = open.includes(cell);
  const isFlagged = flag.includes(cell);
  return !isOpen && !isFlagged && cellExists;
};

const getNeighbors = (i) => {
  const closedNeighbors = [];
  const isLeft = i % 10 === 0;
  const isRight = (i + 1) % 10 === 0;
  if (!isLeft) {
    if (checkCell(i - 1)) closedNeighbors.push(i - 1);
    if (checkCell(i - 11)) closedNeighbors.push(i - 11);
    if (checkCell(i + 9)) closedNeighbors.push(i + 9);
  }
  if (!isRight) {
    if (checkCell(i + 1)) closedNeighbors.push(i + 1);
    if (checkCell(i - 9)) closedNeighbors.push(i - 9);
    if (checkCell(i + 11)) closedNeighbors.push(i + 11);
  }
  if (checkCell(i - 10)) closedNeighbors.push(i - 10);
  if (checkCell(i + 10)) closedNeighbors.push(i + 10);
  return closedNeighbors;
};

const openCell = (cell) => {
  const el = cells.elements[cell];
  const value = cells.data[cell];
  el.classList.add('cell--open');
  if (!cells.open.includes(cell)) cells.open.push(cell);
  if (value) {
    el.textContent = value;
  } else {
    const closedNeighbors = getNeighbors(cell);
    closedNeighbors.forEach((x) => openCell(x));
  }
  checkGameEnd(value);
};

export default openCell;
