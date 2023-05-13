import createElement from './create-element';
import page from './data';

const createField = (data, container) => {
  page.cells.elements = [];
  data.forEach((_, i) => {
    const cell = createElement({
      classes: ['cell'], parent: container, dataSet: i,
    });
    page.cells.elements.push(cell);
  });
};

export default createField;
