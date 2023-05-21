import createElement from './create-element';
import page from './data';
import state from './state';

const createPopup = (text, openCell) => {
  clearInterval(page.timerId);
  page.time = 0;
  state.game = false;
  const popup = createElement({
    classes: ['popup'],
    parent: page.elements.container,
  });
  setTimeout(() => popup.classList.add('popup--animation'), 10);

  createElement({
    classes: ['popup__container', 'popup__message'], parent: popup, textContent: text,
  });
  popup.append(page.elements.newGameBtn);
  createElement({
    parent: popup,
    classes: ['open-field'],
    textContent: 'show mines',
    onClick: () => {
      page.cells.elements.forEach((_, i) => openCell(i));
      page.elements.controlsToggle.after(page.elements.newGameBtn);
      popup.classList.remove('popup--animation');
      setTimeout(() => popup.remove(), 500);
    },
  });
};

export default createPopup;
