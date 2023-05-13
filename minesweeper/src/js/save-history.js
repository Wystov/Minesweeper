import page from './data';
import state from './state';

const saveLastResult = (turns, time) => {
  if (page.lastResults.length === 10) page.lastResults.pop();
  let difficulty;
  if (state.fieldSize === 100) {
    difficulty = 'easy';
  } else if (state.fieldSize === 225) {
    difficulty = 'medium';
  } else if (state.fieldSize === 625) {
    difficulty = 'hard';
  }
  page.lastResults.unshift([difficulty, turns, time]);

  localStorage.setItem('minesweeper-top', JSON.stringify(page.lastResults));
};

export default saveLastResult;
