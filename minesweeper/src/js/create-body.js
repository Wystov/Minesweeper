import state from './state';
import newGame from './new-game';
import createElement from './create-element';
import handleCellClick from './cell-click';
import createField from './create-field';
import putFlag from './put-flag';
import showHistory from './show-history';
import page from './data';
import continueGame from './continue-game';
import switchSound from './switch-sound';
import changeTheme from './change-theme';
import showSettings from './show-settings';

const createBody = () => {
  newGame();
  document.body.classList.add(...state.theme);
  const container = createElement({
    classes: ['container'], parent: document.body, link: 'container',
  });
  const controls = createElement({
    classes: ['controls'], parent: container,
  });
  const controlsToggle = createElement({
    classes: ['controls__toggle'], parent: controls,
  });
  const soundIcon = createElement({
    tag: 'i', classes: ['button', 'button__sound'], parent: controlsToggle, onClick: switchSound, link: 'soundBtn',
  });
  if (!state.sound) soundIcon.classList.add('button__sound--mute');
  createElement({
    tag: 'i', classes: ['button', 'button__theme'], parent: controlsToggle, onClick: changeTheme, link: 'themeBtn',
  });
  createElement({
    classes: ['new-game'], parent: controls, textContent: 'New Game', onClick: createBody,
  });
  if (page.lastGame) {
    createElement({
      classes: ['continue-game'], parent: controls, textContent: 'Continue', onClick: continueGame, link: 'continueBtn',
    });
  }
  const controlsPopup = createElement({
    classes: ['controls__popup'], parent: controls,
  });
  createElement({
    tag: 'i', classes: ['button', 'button__history'], parent: controlsPopup, onClick: showHistory,
  });
  createElement({
    tag: 'i', classes: ['button', 'button__settings'], parent: controlsPopup, onClick: () => showSettings(createBody),
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
    classes: ['field', `field--${fieldSize}`], parent: container, onClick: handleCellClick, link: 'field',
  });
  field.addEventListener('contextmenu', putFlag);
  const counters = createElement({
    classes: ['counters'], parent: container,
  });
  const turns = createElement({
    classes: ['turns'], parent: counters,
  });
  createElement({
    tag: 'i', classes: ['turns__icon'], parent: turns,
  });
  createElement({
    tag: 'span', classes: ['turns__count'], parent: turns, textContent: '0', link: 'turnsCount',
  });
  const flags = createElement({
    classes: ['flags'], parent: counters,
  });
  createElement({
    tag: 'i', classes: ['flags__icon'], parent: flags,
  });
  createElement({
    tag: 'span', classes: ['flags__count'], parent: flags, textContent: `0 / ${state.mines}`, link: 'flagsCount',
  });
  const timer = createElement({
    classes: ['timer'], parent: counters,
  });
  createElement({
    tag: 'i', classes: ['timer__icon'], parent: timer,
  });
  createElement({
    tag: 'span', classes: ['timer__count'], parent: timer, textContent: '0 s', link: 'timerCount',
  });

  const data = new Array(state.fieldSize).fill();
  page.cells.data = data;
  createField(data, field);
};

export default createBody;
