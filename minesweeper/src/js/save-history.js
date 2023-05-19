import page from './data';
import state from './state';
import checkTop from './save-top';

const saveLastResult = (fieldSize, mines, turns, time) => {
  if (page.lastResults.length === 10) page.lastResults.pop();
  const date = new Date();
  page.lastResults.unshift([fieldSize, mines, turns, time, date, state.mode]);
  localStorage.setItem('minesweeper-history', JSON.stringify(page.lastResults));
  // if (state.mode !== 'custom')
  checkTop(turns, time, date);
};

export default saveLastResult;
