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
      classes: ['popup__container', 'popup__message', 'popup__history'], parent: historyEl, textContent: 'Wins history:',
    });
    const list = createElement({
      tag: 'ul', classes: ['history__list'], parent: container,
    });
    page.lastResults.forEach((result) => {
      createElement({
        tag: 'li',
        classes: ['history__result'],
        parent: list,
        textContent: `${result[4]} &#128640;${result[5]}<br>you found ${result[1]} mines on field ${result[0]}x${result[0]} in ${result[3]} seconds and ${result[2]} moves`,
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
