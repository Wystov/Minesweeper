import state from './state';
import createData from './create-data';
import openCell from './check-cell';

const cellClick = (e) => {
  if (!e.target.classList.contains('cell')) return;
  const { turns } = state;
  const cell = parseInt(e.target.dataset.cell, 10);
  if (turns === 0) {
    createData(cell);
  }
  openCell(cell);
  state.turns += 1;
  console.log('turns', state.turns);
};

export default cellClick;
