import state from './state';
import page from './data';
import playSound from './play-sound';
import winSound from '../assets/sounds/win.wav';
import loseSound from '../assets/sounds/lose.wav';
import saveLastResult from './save-history';
import createElement from './create-element';
import destroyPopup from './destroy-popup';

const checkGameEnd = (value) => {
  const { fieldSize, mines, turns } = state;
  if (value === '&#128163;') {
    clearInterval(page.timerId);
    const popup = createElement('div', ['popup', 'popup--message'], page.elements.container, null, 'Game over. Try again');
    setTimeout(() => document.addEventListener('click', (e) => destroyPopup(popup, e)), 50);

    if (state.sound) playSound(loseSound);
    state.game = false;
    return;
  }
  if (page.cells.open.length === fieldSize - mines) {
    clearInterval(page.timerId);
    const time = parseInt(page.elements.timerCount.textContent, 10);
    if (state.sound) playSound(winSound);
    const popup = createElement('div', ['popup', 'popup--message'], page.elements.container, null, `Hooray! You found all mines in ${time} seconds and ${turns} moves!`);
    setTimeout(() => document.addEventListener('click', (e) => destroyPopup(popup, e)), 50);
    state.game = false;
    saveLastResult(turns, time);
  }
};

export default checkGameEnd;
