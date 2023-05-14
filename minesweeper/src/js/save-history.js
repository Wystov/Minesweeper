import page from './data';

const saveLastResult = (fieldSize, mines, turns, time) => {
  if (page.lastResults.length === 10) page.lastResults.pop();
  page.lastResults.unshift([fieldSize, mines, turns, time]);
  localStorage.setItem('minesweeper-top', JSON.stringify(page.lastResults));
};

export default saveLastResult;
