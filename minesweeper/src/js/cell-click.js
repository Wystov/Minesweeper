import state from './state';
import createData from './create-data';
import openCell from './open-cell';

const cellClick = (e) => {
  const target = e.target.classList;
  if (!target.contains('cell') || target.contains('cell--open')) return;
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
