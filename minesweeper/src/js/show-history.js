import page from './data';
import createElement from './create-element';
import destroyPopup from './destroy-popup';

const showHistory = () => {
  const historyEl = createElement('div', ['popup', 'popup--history'], page.elements.container);
  page.lastResults.forEach((result, i) => {
    const el = createElement('p', ['history__result'], historyEl);
    el.textContent = `${i + 1}. win in ${result[0]} turns and ${result[1]} seconds`;
  });
  setTimeout(() => document.addEventListener('click', (e) => destroyPopup(historyEl, e)), 50);
};

export default showHistory;
