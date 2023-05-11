import state from './state';
import page from './data';

const checkGameEnd = (value) => {
  const { message } = page.elements;
  const { fieldSize, mines, turns } = state;
  if (value === '&#128163;') {
    clearInterval(page.timerId);
    message.textContent = 'Game over. Try again';
    message.classList.add('message--active');
    state.game = false;
    return;
  }
  if (page.cells.open.length === fieldSize - mines) {
    clearInterval(page.timerId);
    const time = parseInt(page.elements.timerCount.textContent, 10);
    message.textContent = `Hooray! You found all mines in ${time} seconds and ${turns} moves!`;
    message.classList.add('message--active');
    state.game = false;
  }
};

export default checkGameEnd;
