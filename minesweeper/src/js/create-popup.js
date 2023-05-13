import createElement from './create-element';
import destroyPopup from './destroy-popup';
import state from './state';
import page from './data';

const createPopup = (text, lose, openCell) => {
  const popup = createElement({
    classes: ['popup', 'popup--message'],
    parent: page.elements.container,
    textContent: text,
  });
  clearInterval(page.timerId);
  page.time = 0;
  state.game = false;
  if (lose) {
    createElement({
      parent: popup,
      textContent: 'Open field',
      onClick: () => {
        page.cells.elements.forEach((_, i) => openCell(i));
        popup.remove();
      },
    });
  }
  setTimeout(() => document.addEventListener('click', (e) => destroyPopup(popup, e)), 50);
};

export default createPopup;
