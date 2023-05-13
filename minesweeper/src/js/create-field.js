import createElement from './create-element';
import page from './data';

const createField = (data, container) => {
  page.cells.elements = [];
  data.forEach((el, i) => {
    const cell = createElement({
      classes: ['cell'], parent: container, dataSet: i, textContent: el,
    });
    page.cells.elements.push(cell);
  });
};

export default createField;
