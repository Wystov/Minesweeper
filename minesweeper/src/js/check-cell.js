import cells from './data';

const openCell = (cell) => {
  const el = cells.elements[cell];
  el.textContent = cells.data[cell];
  el.classList.add('cell--open');
};

export default openCell;
