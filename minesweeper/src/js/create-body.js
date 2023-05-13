import state from './state';
import newGame from './new-game';
import createElement from './create-element';
import handleCellClick from './cell-click';
import createField from './create-field';
import putFlag from './put-flag';
import showHistory from './show-history';
import changeTheme from './change-theme';
import switchSound from './switch-sound';
import setDifficulty from './set-difficulty';
import page from './data';

const createBody = () => {
  newGame();
  document.body.classList.add('style', 'light-theme');
  const container = createElement({
    classes: ['container'], parent: document.body, link: 'container',
  });
  createElement({
    classes: ['new-game'], parent: container, textContent: 'New Game', onClick: createBody,
  });
  let fieldSize;
  if (state.fieldSize === 100) {
    fieldSize = 'easy';
  } else if (state.fieldSize === 225) {
    fieldSize = 'medium';
  } else if (state.fieldSize === 625) {
    fieldSize = 'hard';
  }
  const field = createElement({
    classes: ['field', `field--${fieldSize}`], parent: container, onClick: handleCellClick,
  });
  field.addEventListener('contextmenu', putFlag);
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
  const sizeForm = createElement({
    tag: 'form', classes: ['size'], parent: counters,
  });
  const radioEasy = createElement({
    tag: 'label', classes: ['size__label'], parent: sizeForm, textContent: 'Easy',
  });
  createElement({
    tag: 'input', classes: ['size__input'], parent: radioEasy, type: 'radio', name: 'size', value: '100', onClick: setDifficulty,
  });
  const radioMedium = createElement({
    tag: 'label', classes: ['size__label'], parent: sizeForm, textContent: 'Medium',
  });
  createElement({
    tag: 'input', classes: ['size__input'], parent: radioMedium, type: 'radio', name: 'size', value: '225', onClick: setDifficulty,
  });
  const radioHard = createElement({
    tag: 'label', classes: ['size__label'], parent: sizeForm, textContent: 'Hard',
  });
  createElement({
    tag: 'input', classes: ['size__input'], parent: radioHard, type: 'radio', name: 'size', value: '625', onClick: setDifficulty,
  });

  const data = new Array(state.fieldSize).fill();
  page.cells.data = data;
  createField(data, field);
};

export default createBody;
