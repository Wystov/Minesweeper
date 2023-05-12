import state from './state';
import newGame from './new-game';
import createElement from './create-element';
import cellClick from './cell-click';
import createField from './create-field';
import putFlag from './put-flag';
import page from './data';
import showHistory from './show-history';

const createBody = () => {
  newGame();
  const container = createElement('div', ['container'], document.body);
  page.elements.container = container;
  const newGameBtn = createElement('div', ['new-game'], container, null, 'New Game');
  newGameBtn.addEventListener('click', createBody);
  const field = createElement('div', ['field'], container);
  field.addEventListener('click', (e) => cellClick(e));
  field.addEventListener('contextmenu', (e) => putFlag(e));
  const counters = createElement('div', ['counters'], container);
  const turns = createElement('div', ['turns'], counters, null, 'Turns: ');
  page.elements.turnsCount = createElement('span', ['turns__count'], turns, null, '0');
  const flags = createElement('div', ['flags'], counters, null, 'Flags: ');
  page.elements.flagsCount = createElement('span', ['flags__count'], flags, null, '0');
  const timer = createElement('div', ['timer'], counters, null, 'Time: ');
  page.elements.timerCount = createElement('span', ['timer__count'], timer, null, '0');
  const soundBtn = createElement('i', ['button', 'button__sound'], counters);
  soundBtn.addEventListener('click', () => {
    state.sound = !state.sound;
    soundBtn.classList.toggle('sound-btn--mute');
  });
  const historyBtn = createElement('i', ['button', 'button__history'], counters);
  historyBtn.addEventListener('click', showHistory);
  const data = new Array(state.fieldSize).fill();
  createField(data, field);
};

export default createBody;
