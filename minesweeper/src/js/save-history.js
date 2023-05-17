import page from './data';
import state from './state';
import getDate from './get-date';

const saveBest = () => {
  console.log('saving');
};

const saveLastResult = (fieldSize, mines, turns, time) => {
  if (page.lastResults.length === 10) page.lastResults.pop();
  const dateOfResult = getDate();
  page.lastResults.unshift([fieldSize, mines, turns, time, dateOfResult, state.mode]);
  localStorage.setItem('minesweeper-history', JSON.stringify(page.lastResults));
  if (state.mode !== 'custom') saveBest();
};

export default saveLastResult;
