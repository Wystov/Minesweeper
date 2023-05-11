import state from './state';
import cells from './data';

const checkGameEnd = (value) => {
  const { fieldSize, mines, turns } = state;
  if (value === 'x') {
    console.log('Game over. Try again');
  }
  if (cells.open.length === fieldSize - mines) {
    console.log(`Hooray! You found all mines in ## seconds and ${turns} moves!`);
  }
};

export default checkGameEnd;
