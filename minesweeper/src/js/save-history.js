import page from './data';

const saveLastResult = (turns, time) => {
  if (page.lastResults.length === 10) page.lastResults.pop();
  page.lastResults.unshift([turns, time]);
  localStorage.setItem('minesweeper-top', JSON.stringify(page.lastResults));
};

export default saveLastResult;
