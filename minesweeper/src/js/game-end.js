import state from './state';
import page from './data';
import playSound from './play-sound';
import winSound from '../assets/sounds/win.wav';
import loseSound from '../assets/sounds/lose.wav';
import saveLastResult from './save-history';
import createPopup from './create-popup';

const checkGameEnd = (value, openCell) => {
  const { fieldSize, mines } = state;
  const { turns } = page;
  if (value === '&#128163;') {
    if (state.sound) playSound(loseSound);
    createPopup('Game over. Try again', 'lose', openCell);
    return;
  }
  if (page.cells.open.length === fieldSize - mines) {
    if (state.sound) playSound(winSound);
    const time = parseInt(page.elements.timerCount.textContent, 10);
    const fieldSide = Math.sqrt(state.fieldSize);
    createPopup(`Hooray! You found ${state.mines} mines on field ${fieldSide}x${fieldSide} in ${time} seconds and ${turns} moves!`);
    saveLastResult(fieldSide, state.mines, turns, time);
  }
};

export default checkGameEnd;
