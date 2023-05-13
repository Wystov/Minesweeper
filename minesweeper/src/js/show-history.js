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
        textContent: `${i + 1}. win on ${result[0]} mode in ${result[1]} turns and ${result[2]} seconds`,
      });
    });
  }

  setTimeout(() => document.addEventListener('click', (e) => destroyPopup(historyEl, e)), 50);
};

export default showHistory;
