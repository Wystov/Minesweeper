import { getRandomNum, increaseDanger } from './utils';

const createData = () => {
  const fieledSize = 100;
  const data = new Array(fieledSize).fill(0);
  const maxMines = fieledSize / 10;
  let minesCount = 0;
  while (minesCount < maxMines) {
    const randomNum = getRandomNum(100);
    if (data[randomNum] !== '&#128163;') {
      data[randomNum] = '&#128163;';
      minesCount += 1;
    }
  }
  data.forEach((el, i) => {
    const elIsMine = typeof el === 'string';
    if (elIsMine) {
      const isLeftMine = i % 10 === 0;
      const isRightMine = (i + 1) % 10 === 0;
      if (!isLeftMine) {
        data[i - 1] = increaseDanger(data[i - 1]);
        data[i - 11] = increaseDanger(data[i - 11]);
        data[i + 9] = increaseDanger(data[i + 9]);
      }
      if (!isRightMine) {
        data[i + 1] = increaseDanger(data[i + 1]);
        data[i - 9] = increaseDanger(data[i - 9]);
        data[i + 11] = increaseDanger(data[i + 11]);
      }
      data[i + 10] = increaseDanger(data[i + 10]);
      data[i - 10] = increaseDanger(data[i - 10]);
    }
  });
  return data;
};

export default createData;
