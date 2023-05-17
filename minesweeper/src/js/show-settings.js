import createElement from './create-element';
import setDifficulty from './set-difficulty';
import state from './state';
import page from './data';

const showSettings = (createBody) => {
  const settings = createElement({
    classes: ['popup', 'settings'],
    parent: page.elements.container,
  });
  const container = createElement({
    classes: ['settings__container'], parent: settings,
  });
  const sizeForm = createElement({
    tag: 'form', classes: ['settings__item', 'size'], parent: container,
  });
  createElement({
    tag: 'p', classes: ['settings__title'], parent: sizeForm, textContent: 'Field size',
  });
  const radioEasy = createElement({
    tag: 'label', classes: ['size__label'], parent: sizeForm, textContent: '10x10  ',
  });
  createElement({
    tag: 'input', classes: ['size__input'], parent: radioEasy, type: 'radio', name: 'size', value: '100', onClick: setDifficulty,
  });
  const radioMedium = createElement({
    tag: 'label', classes: ['size__label'], parent: sizeForm, textContent: '15x15  ',
  });
  createElement({
    tag: 'input', classes: ['size__input'], parent: radioMedium, type: 'radio', name: 'size', value: '225', onClick: setDifficulty,
  });
  const radioHard = createElement({
    tag: 'label', classes: ['size__label'], parent: sizeForm, textContent: '25x25  ',
  });
  createElement({
    tag: 'input', classes: ['size__input'], parent: radioHard, type: 'radio', name: 'size', value: '625', onClick: setDifficulty,
  });
  sizeForm.querySelector(`input[value='${state.fieldSize}']`).checked = true;
  const minesSet = createElement({
    classes: ['settings__item', 'mines'], parent: container,
  });
  createElement({
    tag: 'p', classes: ['settings__title'], parent: minesSet, textContent: 'Mines amount',
  });
  const minesInput = createElement({
    tag: 'input', classes: ['size__input'], parent: minesSet, type: 'number', link: 'minesInput',
  });
  minesInput.value = state.mines;
  minesInput.min = 10;
  minesInput.max = 99;
  minesInput.placeholder = '10-99';
  minesInput.addEventListener('focusout', () => {
    if (minesInput.value > 99) minesInput.value = 99;
    if (minesInput.value < 10) minesInput.value = 10;
  });
  const buttons = createElement({
    classes: ['settings__item'], parent: container,
  });
  const applyBtn = createElement({
    classes: ['settings__apply'],
    parent: buttons,
    onClick: () => {
      if (page.lastGame) {
        page.elements.continueBtn.remove();
        page.removeSave();
      }
      const size = sizeForm.querySelector('input:checked').value;
      const mines = minesInput.value;
      state.fieldSize = +size;
      state.mines = Math.round(mines);
      if (state.fieldSize === 100 && state.mines === 10) {
        state.mode = 'easy';
      } else if (state.fieldSize === 225 && state.mines === 30) {
        state.mode = 'medium';
      } else if (state.fieldSize === 625 && state.mines === 99) {
        state.mode = 'hard';
      } else {
        state.mode = 'custom';
      }
      state.save();
      createBody();
    },
  });
  applyBtn.title = 'this will start new game';
  createElement({
    classes: ['settings__close'],
    parent: buttons,
    onClick: () => {
      settings.remove();
    },
  });
};

export default showSettings;
