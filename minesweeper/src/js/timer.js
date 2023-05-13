import page from './data';

const timer = () => {
  const { timerCount } = page.elements;
  page.time = parseInt(page.time, 10) + 1;
  timerCount.textContent = `${page.time} s`;
};

export default timer;
