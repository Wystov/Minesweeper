import state from './state';
import newGame from './new-game';
import createElement from './create-element';
import cellClick from './cell-click';
import createField from './create-field';
import putFlag from './put-flag';
import page from './data';

const createBody = () => {
  newGame();
  const container = createElement('div', ['container'], document.body);
  const newGameBtn = createElement('div', ['new-game'], container, null, 'New Game');
  newGameBtn.addEventListener('click', createBody);
  const field = createElement('div', ['field'], container);
  field.addEventListener('click', (e) => cellClick(e));
  field.addEventListener('contextmenu', (e) => putFlag(e));
  const counters = createElement('div', ['counters'], container);
  const turns = createElement('div', ['turns'], counters, null, 'Turns: ');
  page.elements.turnsCount = createElement('span', ['turns__count'], turns, null, '0');
  const timer = createElement('div', ['timer'], counters, null, 'Time: ');
  page.elements.timerCount = createElement('span', ['timer__count'], timer, null, '0');
  page.elements.message = createElement('div', ['message'], field);
  const data = new Array(state.fieldSize).fill();
  createField(data, field);
};

export default createBody;
