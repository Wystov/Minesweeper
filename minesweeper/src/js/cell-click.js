import state from './state';
import page from './data';
import createData from './create-data';
import openCell from './open-cell';
import timer from './timer';

const cellClick = (e) => {
  if (!state.game) return;
  const target = e.target.classList;
  const { turns } = state;
  const { open, flag } = page.cells;
  const cell = parseInt(e.target.dataset.cell, 10);
  if (!target.contains('cell') || open.includes(cell) || flag.includes(cell)) return;
  if (turns === 0) {
    createData(cell);
    page.timerId = setInterval(timer, 1000);
  }
  openCell(cell);
  state.turns += 1;
  page.elements.turnsCount.textContent = state.turns;
};

export default cellClick;
