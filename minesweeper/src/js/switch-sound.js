import state from './state';
import page from './data';

const switchSound = () => {
  state.sound = !state.sound;
  page.elements.soundBtn.classList.toggle('button__sound--mute');
};

export default switchSound;
