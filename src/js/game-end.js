import state from './state';
import page from './data';
import saveLastResult from './save-history';
import createPopup from './create-popup';
import fillProgressBar from './progress-bar';

const checkGameEnd = (value, openCell) => {
  const { fieldSize, mines } = state;
  const { turns } = page;
  if (value === '&#128163;') {
    if (state.sound) page.sound.lose.play();
    state.game = false;
    fillProgressBar(null, true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      createPopup('Game over. Try again', openCell);
    }, 1000);
    return;
  }
  if (page.cells.open.length === fieldSize - mines) {
    if (state.sound) page.sound.win.play();
    if (page.cells.open.length === 1) {
      createPopup('Hooray! You win in...<br>1 move? Looks like a cheat.<br>No one loves cheaters, don\'t do it anymore.<br>I\'ll not even save this to game history.', openCell);
      return;
    }
    const time = parseInt(page.elements.timerCount.textContent, 10);
    const fieldSide = Math.sqrt(state.fieldSize);
    fillProgressBar(true);
    createPopup(`Hooray! You found ${state.mines} mines on field ${fieldSide}x${fieldSide} in ${time} seconds and ${turns} moves!`, openCell);
    saveLastResult(fieldSide, state.mines, turns, time);
  }
};

export default checkGameEnd;
