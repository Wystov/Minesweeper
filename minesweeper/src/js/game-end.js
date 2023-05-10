import state from './state';

const checkGameEnd = (value) => {
  const { fieldSize, mines, turns } = state;
  if (value === 'x') {
    console.log('Game over. Try again');
  }
  if (turns === fieldSize - mines) {
    console.log(`Hooray! You found all mines in ## seconds and ${turns} moves!`);
  }
};

export default checkGameEnd;
