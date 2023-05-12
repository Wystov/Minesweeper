import state from './state';
import page from './data';
import playSound from './play-sound';
import winSound from '../assets/sounds/win.wav';
import loseSound from '../assets/sounds/lose.wav';
import saveLastResult from './save-history';
import createElement from './create-element';
import destroyPopup from './destroy-popup';

const finishGame = (popup) => {
  clearInterval(page.timerId);
  state.game = false;
  setTimeout(() => document.addEventListener('click', (e) => destroyPopup(popup, e)), 50);
};

const checkGameEnd = (value) => {
  const { fieldSize, mines, turns } = state;
  if (value === '&#128163;') {
    if (state.sound) playSound(loseSound);
    const popup = createElement({
      classes: ['popup', 'popup--message'],
      parent: page.elements.container,
      textContent: 'Game over. Try again',
    });
    finishGame(popup);
    return;
  }
  if (page.cells.open.length === fieldSize - mines) {
    if (state.sound) playSound(winSound);
    const time = parseInt(page.elements.timerCount.textContent, 10);
    const popup = createElement({
      classes: ['popup', 'popup--message'],
      parent: page.elements.container,
      textContent: `Hooray! You found all mines in ${time} seconds and ${turns} moves!`,
    });
    finishGame(popup);
    saveLastResult(turns, time);
  }
};

export default checkGameEnd;
