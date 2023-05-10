import createElement from './create-element';
import createData from './create-data';

const createBody = () => {
  const container = createElement('div', ['container'], document.body);
  const data = createData();
  const cells = [];
  data.forEach((value) => {
    const cell = createElement('div', ['cell', value], container, value);
    cells.push(cell);
  });
  return cells;
};

export default createBody;
