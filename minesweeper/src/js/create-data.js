import state from './state';
import getRandomNum from './utils';
import increaseDanger from './increase-danger';
import cells from './data';

const createData = (firstClick) => {
  const { fieldSize } = state;
  const data = new Array(fieldSize).fill(0);
  const maxMines = fieldSize / 10;
  let minesCount = 0;
  while (minesCount < maxMines) {
    const randomNum = getRandomNum(100);
    if (data[randomNum] !== 'x' && randomNum !== firstClick) {
      data[randomNum] = 'x';
      minesCount += 1;
    }
  }
  data.forEach((el, i) => {
    const elIsMine = typeof el === 'string';
    if (elIsMine) {
      const isLeftMine = i % 10 === 0;
      const isRightMine = (i + 1) % 10 === 0;
      if (!isLeftMine) {
        if (i - 1 >= 0) data[i - 1] = increaseDanger(data[i - 1]);
        if (i - 11 >= 0) data[i - 11] = increaseDanger(data[i - 11]);
        if (i + 9 < fieldSize) data[i + 9] = increaseDanger(data[i + 9]);
      }
      if (!isRightMine) {
        if (i + 1 < fieldSize) data[i + 1] = increaseDanger(data[i + 1]);
        if (i - 9 >= 0) data[i - 9] = increaseDanger(data[i - 9]);
        if (i + 11 < fieldSize) data[i + 11] = increaseDanger(data[i + 11]);
      }
      if (i - 10 >= 0) data[i - 10] = increaseDanger(data[i - 10]);
      if (i + 10 < fieldSize) data[i + 10] = increaseDanger(data[i + 10]);
    }
  });
  cells.data = data;
  return data;
};

export default createData;
