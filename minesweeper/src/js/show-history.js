import page from './data';
import createElement from './create-element';
import getDate from './get-date';
import loadTop from './load-top';

const fillHistory = (container) => {
  if (!page.lastResults.length) {
    createElement({
      tag: 'p', classes: ['history__result'], parent: container, textContent: 'No history',
    });
  } else {
    const list = createElement({
      tag: 'ul', classes: ['history__list'], parent: container,
    });
    page.lastResults.forEach((result) => {
      const [time, date] = getDate(result[4]);
      createElement({
        tag: 'li',
        classes: ['history__result'],
        parent: list,
        textContent: `&#128337;${time} &#128197;${date} &#128640;${result[5]}<br>you found ${result[1]} mines on field ${result[0]}x${result[0]} in ${result[3]} seconds and ${result[2]} moves`,
      });
    });
  }
};

const fillTop = async (container, difficulty) => {
  const top = container;
  top.innerHTML = '';
  const preloader = createElement({
    classes: ['preloader'], parent: container,
  });
  const data = await loadTop();
  preloader.remove();
  if (!data) {
    createElement({
      tag: 'p', classes: ['history__result'], parent: container, textContent: 'Can\'t load data',
    });
  }
  const filteredData = data.filter((el) => el.difficulty === difficulty);
  if (filteredData.length === 0) {
    createElement({
      tag: 'p', classes: ['history__result'], parent: container, textContent: 'No results',
    });
  } else {
    const list = createElement({
      tag: 'ol', classes: ['history__list'], parent: container,
    });
    filteredData.forEach((res) => {
      const [resTime, resDate] = getDate(res.date);
      createElement({
        tag: 'li',
        classes: ['history__result'],
        parent: list,
        textContent: `Player: ${res.name} -|- Turns: ${res.turns} -|- Time: ${res.time} seconds.<br> Date: ${resTime} ${resDate}`,
      });
    });
  }
};

const showHistory = () => {
  const historyEl = createElement({ classes: ['popup'], parent: page.elements.container });
  const container = createElement({
    classes: ['popup__container', 'popup__message', 'popup__history'], parent: historyEl,
  });
  const btnsContainer = createElement({
    classes: ['popup__buttons'], parent: container,
  });
  const historyBtn = createElement({
    classes: ['new-game'], parent: btnsContainer, textContent: 'Your history',
  });
  const topBtn = createElement({
    classes: ['new-game'], parent: btnsContainer, textContent: 'Global top',
  });
  const resultContainer = createElement({
    classes: ['top-container'], parent: container,
  });
  fillHistory(resultContainer);
  historyBtn.addEventListener('click', () => {
    resultContainer.innerHTML = '';
    fillHistory(resultContainer);
  });
  topBtn.addEventListener('click', () => {
    resultContainer.innerHTML = '';
    const topResultContainer = createElement({
      classes: ['top-result-container'], parent: resultContainer,
    });
    const diffBtnContainer = createElement({
      classes: ['difficulty-btn__container'],
      parent: resultContainer,
      onClick: (e) => {
        topResultContainer.innerHTML = '';
        fillTop(topResultContainer, e.target.textContent);
      },
    });
    createElement({
      classes: ['difficulty--easy'], textContent: 'easy', parent: diffBtnContainer,
    });
    createElement({
      classes: ['difficulty--medium'], textContent: 'medium', parent: diffBtnContainer,
    });
    createElement({
      classes: ['difficulty--hard'], textContent: 'hard', parent: diffBtnContainer,
    });
    fillTop(topResultContainer, 'easy');
  });
  createElement({
    classes: ['settings__apply'],
    parent: historyEl,
    onClick: () => {
      historyEl.remove();
    },
  });
};

export default showHistory;
