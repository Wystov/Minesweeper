import page from './data';
import createElement from './create-element';
import destroyPopup from './destroy-popup';

const showHistory = () => {
  const historyEl = createElement({ classes: ['popup', 'popup--history'], parent: page.elements.container });
  page.lastResults.forEach((result, i) => {
    const el = createElement({ tag: 'p', classes: ['history__result'], parent: historyEl });
    el.textContent = `${i + 1}. win in ${result[0]} turns and ${result[1]} seconds`;
  });
  setTimeout(() => document.addEventListener('click', (e) => destroyPopup(historyEl, e)), 50);
};

export default showHistory;
