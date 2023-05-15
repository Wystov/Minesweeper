import page from './data';
import state from './state';

const fillProgressBar = (win) => {
  const { progressBar } = page.elements;
  const percent = (page.cells.open.length / (state.fieldSize - state.mines)) * 100;
  progressBar.style.width = `${percent}%`;
  if (win) progressBar.classList.add('progressbar__value--win');
};

export default fillProgressBar;
