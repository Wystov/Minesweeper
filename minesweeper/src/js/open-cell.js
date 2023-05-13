import page from './data';
import state from './state';
import checkGameEnd from './game-end';
import playSound from './play-sound';
import openSound from '../assets/sounds/open.wav';

const checkCell = (cell) => {
  const { open, flag } = page.cells;
  const cellExists = cell >= 0 && cell < state.fieldSize;
  const isOpen = open.includes(cell);
  const isFlagged = flag.includes(cell);
  return !isOpen && !isFlagged && cellExists;
};

const getNeighbors = (i) => {
  const closedNeighbors = [];
  const fs = Math.sqrt(state.fieldSize); // field side size;
  const isLeft = i % fs === 0;
  const isRight = (i + 1) % fs === 0;
  if (!isLeft) {
    if (checkCell(i - 1)) closedNeighbors.push(i - 1);
    if (checkCell(i - (fs + 1))) closedNeighbors.push(i - (fs + 1));
    if (checkCell(i + (fs - 1))) closedNeighbors.push(i + (fs - 1));
  }
  if (!isRight) {
    if (checkCell(i + 1)) closedNeighbors.push(i + 1);
    if (checkCell(i - (fs - 1))) closedNeighbors.push(i - (fs - 1));
    if (checkCell(i + (fs + 1))) closedNeighbors.push(i + (fs + 1));
  }
  if (checkCell(i - fs)) closedNeighbors.push(i - fs);
  if (checkCell(i + fs)) closedNeighbors.push(i + fs);
  return closedNeighbors;
};

const openCell = (cell) => {
  const { cells } = page;
  const el = cells.elements[cell];
  const value = cells.data[cell];
  el.classList.add('cell--open');
  if (!cells.open.includes(cell)) cells.open.push(cell);
  if (value) {
    el.innerHTML = value;
    if (typeof value === 'number') el.classList.add(`color--${value}`);
    if (!state.game) return;
    if (typeof value === 'string') el.classList.add('cell--bomb');
    if (state.sound) playSound(openSound);
    checkGameEnd(value, openCell);
  } else {
    if (!state.game) return;
    const closedNeighbors = getNeighbors(cell);
    closedNeighbors.forEach((x) => openCell(x));
  }
};

export default openCell;
