import createElement from './create-element';
import setDifficulty from './set-difficulty';
import destroyPopup from './destroy-popup';
import state from './state';
import page from './data';

const showSettings = () => {
  const settings = createElement({
    classes: ['popup', 'settings'],
    parent: page.elements.container,
  });
  const sizeForm = createElement({
    tag: 'form', classes: ['settings__item', 'size'], parent: settings,
  });
  createElement({
    tag: 'p', classes: ['settings__title'], parent: sizeForm, textContent: 'Field size',
  });
  const radioEasy = createElement({
    tag: 'label', classes: ['size__label'], parent: sizeForm, textContent: '10x10',
  });
  createElement({
    tag: 'input', classes: ['size__input'], parent: radioEasy, type: 'radio', name: 'size', value: '100', onClick: setDifficulty,
  });
  const radioMedium = createElement({
    tag: 'label', classes: ['size__label'], parent: sizeForm, textContent: '15x15',
  });
  createElement({
    tag: 'input', classes: ['size__input'], parent: radioMedium, type: 'radio', name: 'size', value: '225', onClick: setDifficulty,
  });
  const radioHard = createElement({
    tag: 'label', classes: ['size__label'], parent: sizeForm, textContent: '25x25',
  });
  createElement({
    tag: 'input', classes: ['size__input'], parent: radioHard, type: 'radio', name: 'size', value: '625', onClick: setDifficulty,
  });
  sizeForm.querySelector(`input[value='${state.fieldSize}']`).checked = true;
  setTimeout(() => document.addEventListener('click', (e) => destroyPopup(settings, e)), 50);
  const minesSet = createElement({
    classes: ['settings__item', 'mines'], parent: settings,
  });
  createElement({
    tag: 'p', classes: ['settings__title'], parent: minesSet, textContent: 'Mines amount',
  });
  const minesInput = createElement({
    tag: 'input', classes: ['size__input'], parent: minesSet, type: 'number',
  });
  minesInput.value = state.mines;
  minesInput.min = 10;
  minesInput.max = 99;
  minesInput.placeholder = '10-99';
  minesInput.addEventListener('focusout', () => {
    if (minesInput.value > 99) minesInput.value = 99;
    if (minesInput.value < 10) minesInput.value = 10;
    state.mines = minesInput.value;
  });
};

export default showSettings;
