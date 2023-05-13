import page from './data';
import state from './state';
import openCell from './open-cell';
import putFlag from './put-flag';
import createField from './create-field';
import timer from './timer';

const continueGame = () => {
  page.elements.continueBtn.remove();
  state.game = false;
  page.continueGame();
  page.elements.field.innerHTML = '';
  createField(page.cells.data, page.elements.field);
  page.cells.open.forEach((cell) => openCell(cell));
  page.cells.flag.forEach((cell) => putFlag(null, cell));
  page.elements.turnsCount.textContent = page.turns;
  page.elements.flagsCount.textContent = `${page.cells.flag.length} / ${state.mines}`;
  page.elements.timerCount.textContent = `${page.time} s`;
  page.timerId = setInterval(timer, 1000);
  page.removeSave();
  state.game = true;
};

export default continueGame;
