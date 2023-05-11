import page from './data';

const timer = () => {
  const { timerCount } = page.elements;
  const time = parseInt(timerCount.textContent, 10) + 1;
  timerCount.textContent = `${time} s`;
};

export default timer;
