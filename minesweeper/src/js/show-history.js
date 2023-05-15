import page from './data';
import createElement from './create-element';

const showHistory = () => {
  const historyEl = createElement({ classes: ['popup'], parent: page.elements.container });
  if (!page.lastResults.length) {
    createElement({
      tag: 'p', classes: ['history__result'], parent: historyEl, textContent: 'No history',
    });
  } else {
    const container = createElement({
      classes: ['popup__container', 'popup__message', 'popup__history'], parent: historyEl, textContent: 'Game history:',
    });
    page.lastResults.forEach((result, i) => {
      createElement({
        tag: 'p',
        classes: ['history__result'],
        parent: container,
        textContent: `${i + 1}. You found ${result[1]} mines on field ${result[0]}x${result[0]} in ${result[3]} seconds and ${result[2]} moves`,
      });
    });
  }
  createElement({
    classes: ['settings__apply'],
    parent: historyEl,
    onClick: () => {
      historyEl.remove();
    },
  });
};

export default showHistory;
