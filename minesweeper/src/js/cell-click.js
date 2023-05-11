import state from './state';
import cells from './data';
import createData from './create-data';
import openCell from './open-cell';

const cellClick = (e) => {
  const target = e.target.classList;
  const { turns } = state;
  const { open, flag } = cells;
  const cell = parseInt(e.target.dataset.cell, 10);
  if (!target.contains('cell') || open.includes(cell) || flag.includes(cell)) return;
  if (turns === 0) {
    createData(cell);
  }
  openCell(cell);
  state.turns += 1;
  console.log('turns', state.turns);
  console.log(cells);
};

export default cellClick;
