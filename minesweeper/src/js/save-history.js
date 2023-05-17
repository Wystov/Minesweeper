import page from './data';
import getDate from './get-date';

const saveLastResult = (fieldSize, mines, turns, time) => {
  if (page.lastResults.length === 10) page.lastResults.pop();
  const dateOfResult = getDate();
  page.lastResults.unshift([fieldSize, mines, turns, time, dateOfResult]);
  localStorage.setItem('minesweeper-top', JSON.stringify(page.lastResults));
};

export default saveLastResult;
