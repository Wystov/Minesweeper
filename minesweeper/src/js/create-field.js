import createElement from './create-element';
import cells from './data';

const createField = (data, container) => {
  cells.elements = [];
  data.forEach((_, i) => {
    const cell = createElement('div', ['cell'], container, i);
    cells.elements.push(cell);
  });
};

export default createField;
