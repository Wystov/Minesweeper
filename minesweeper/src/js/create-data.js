import state from './state';
import getRandomNum from './utils';
import increaseDanger from './increase-danger';
import page from './data';

const createData = (firstClick) => {
  const { fieldSize, mines } = state;
  const data = new Array(fieldSize).fill(0);
  const fs = Math.sqrt(fieldSize); // field side size;
  let minesCount = 0;
  while (minesCount < mines) {
    const randomNum = getRandomNum(fieldSize);
    if (data[randomNum] !== '&#128163;' && randomNum !== firstClick) {
      data[randomNum] = '&#128163;';
      minesCount += 1;
    }
  }
  data.forEach((el, i) => {
    const elIsMine = typeof el === 'string';
    if (elIsMine) {
      const isLeftMine = i % fs === 0;
      const isRightMine = (i + 1) % fs === 0;
      if (!isLeftMine) {
        if (i - 1 >= 0) data[i - 1] = increaseDanger(data[i - 1]);
        if (i - (fs + 1) >= 0) data[i - (fs + 1)] = increaseDanger(data[i - (fs + 1)]);
        if (i + (fs - 1) < fieldSize) data[i + (fs - 1)] = increaseDanger(data[i + (fs - 1)]);
      }
      if (!isRightMine) {
        if (i + 1 < fieldSize) data[i + 1] = increaseDanger(data[i + 1]);
        if (i - (fs - 1) >= 0) data[i - (fs - 1)] = increaseDanger(data[i - (fs - 1)]);
        if (i + (fs + 1) < fieldSize) data[i + (fs + 1)] = increaseDanger(data[i + (fs + 1)]);
      }
      if (i - fs >= 0) data[i - fs] = increaseDanger(data[i - fs]);
      if (i + fs < fieldSize) data[i + fs] = increaseDanger(data[i + fs]);
    }
  });
  page.cells.data = data;
  return data;
};

export default createData;
