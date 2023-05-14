import page from './data';
import createElement from './create-element';
import destroyPopup from './destroy-popup';

const showHistory = () => {
  const historyEl = createElement({ classes: ['popup', 'popup--history'], parent: page.elements.container });
  if (!page.lastResults.length) {
    createElement({
      tag: 'p', classes: ['history__result'], parent: historyEl, textContent: 'No history',
    });
  } else {
    page.lastResults.forEach((result, i) => {
      createElement({
        tag: 'p',
        classes: ['history__result'],
        parent: historyEl,
        textContent: `${i + 1}. You found ${result[1]} mines on field ${result[0]}x${result[0]} in ${result[3]} seconds and ${result[2]} moves`,
      });
    });
  }

  setTimeout(() => document.addEventListener('click', (e) => destroyPopup(historyEl, e)), 50);
};

export default showHistory;
