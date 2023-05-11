import cells from './data';
import state from './state';

const putFlag = (e) => {
  e.preventDefault();
  const target = e.target.classList;
  const cell = parseInt(e.target.dataset.cell, 10);
  if (!target.contains('cell') || cells.open.includes(cell)) return;
  const { flag } = cells;
  const i = flag.indexOf(cell);
  if (i === -1) {
    if (flag.length >= state.mines) return;
    flag.push(cell);
  } else {
    flag.splice(i, 1);
  }
  target.toggle('cell--flag');
  console.log(cells);
};

export default putFlag;
