import state from './state';
import createElement from './create-element';
import cellClick from './cell-click';
import createField from './create-field';
import putFlag from './put-flag';

const createBody = () => {
  const container = createElement('div', ['container'], document.body);
  container.addEventListener('click', (e) => cellClick(e));
  container.addEventListener('contextmenu', (e) => putFlag(e));
  const data = new Array(state.fieldSize).fill();
  createField(data, container);
};

export default createBody;
