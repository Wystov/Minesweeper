import state from './state';
import page from './data';
import createData from './create-data';
import openCell from './open-cell';
import timer from './timer';

const handleCellClick = (e) => {
  if (!state.game) return;
  const target = e.target.classList;
  const { open, flag } = page.cells;
  const cell = parseInt(e.target.dataset.cell, 10);
  if (!target.contains('cell') || open.includes(cell) || flag.includes(cell)) return;
  if (state.sound) page.sound.click.play();
  if (page.turns === 0) {
    createData(cell);
    page.timerId = setInterval(timer, 1000);
  }
  page.turns += 1;
  openCell(cell);
  page.elements.turnsCount.textContent = page.turns;
};

export default handleCellClick;
