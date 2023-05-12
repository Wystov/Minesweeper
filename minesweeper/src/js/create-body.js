import state from './state';
import newGame from './new-game';
import createElement from './create-element';
import handleCellClick from './cell-click';
import createField from './create-field';
import putFlag from './put-flag';
import showHistory from './show-history';
import changeTheme from './change-theme';
import switchSound from './switch-sound';

const createBody = () => {
  newGame();
  document.body.classList.add('style', 'light-theme');
  const container = createElement({
    classes: ['container'], parent: document.body, link: 'container',
  });
  createElement({
    classes: ['new-game'], parent: container, textContent: 'New Game', onClick: createBody,
  });
  const field = createElement({
    classes: ['field'], parent: container,
  });
  field.addEventListener('click', (e) => handleCellClick(e));
  field.addEventListener('contextmenu', (e) => putFlag(e));
  const counters = createElement({
    classes: ['counters'], parent: container,
  });
  const turns = createElement({
    classes: ['turns'], parent: counters, textContent: 'Turns: ',
  });
  createElement({
    tag: 'span', classes: ['turns__count'], parent: turns, textContent: '0', link: 'turnsCount',
  });
  const flags = createElement({
    classes: ['flags'], parent: counters, textContent: 'Flags: ',
  });
  createElement({
    tag: 'span', classes: ['flags__count'], parent: flags, textContent: '0', link: 'flagsCount',
  });
  const timer = createElement({
    classes: ['timer'], parent: counters, textContent: 'Time: ',
  });
  createElement({
    tag: 'span', classes: ['timer__count'], parent: timer, textContent: '0', link: 'timerCount',
  });
  createElement({
    tag: 'i', classes: ['button', 'button__sound'], parent: counters, onClick: switchSound, link: 'soundBtn',
  });
  createElement({
    tag: 'i', classes: ['button', 'button__history'], parent: counters, onClick: showHistory,
  });
  createElement({
    tag: 'i', classes: ['button', 'button__theme'], parent: counters, onClick: changeTheme,
  });

  const data = new Array(state.fieldSize).fill();
  createField(data, field);
};

export default createBody;
