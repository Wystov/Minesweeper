import page from './data';
import state from './state';
import playSound from './play-sound';
import flagSound from '../assets/sounds/flag.wav';

const putFlag = (e) => {
  e.preventDefault();
  if (!state.game) return;
  const target = e.target.classList;
  const cell = parseInt(e.target.dataset.cell, 10);
  if (!target.contains('cell') || page.cells.open.includes(cell)) return;
  const { flag } = page.cells;
  const i = flag.indexOf(cell);
  if (i === -1) {
    if (flag.length >= state.mines) {
      console.log('amount of flags used can"t be more then mines in the field');
      return;
    }
    e.target.innerHTML = '&#128681;';
    flag.push(cell);
  } else {
    e.target.innerHTML = '';
    flag.splice(i, 1);
  }
  if (state.sound) playSound(flagSound);
  target.toggle('cell--flag');
};

export default putFlag;
