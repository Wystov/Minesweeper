import page from './data';
import state from './state';
import playSound from './play-sound';
import flagSound from '../assets/sounds/flag.wav';

const putFlag = (e, el) => {
  let target;
  if (e) {
    e.preventDefault();
    if (!state.game) return;
    target = e.target.classList;
    const cell = parseInt(e.target.dataset.cell, 10);
    if (!target.contains('cell') || page.cells.open.includes(cell)) return;
    const { flag } = page.cells;
    const { flagsCount } = page.elements;
    const currentFlagsCount = parseInt(flagsCount.textContent, 10);
    const i = flag.indexOf(cell);
    if (i === -1) {
      if (flag.length >= state.mines) return;
      e.target.innerHTML = '&#128681;';
      flagsCount.textContent = `${currentFlagsCount + 1} / ${state.mines}`;
      flag.push(cell);
    } else {
      e.target.innerHTML = '';
      flagsCount.textContent = `${currentFlagsCount - 1} / ${state.mines}`;
      flag.splice(i, 1);
    }
    if (state.sound) playSound(flagSound);
    target.toggle('cell--flag');
  } else if (el) {
    target = page.cells.elements[el];
    target.classList.toggle('cell--flag');
    target.innerHTML = '&#128681;';
  }
};

export default putFlag;
