const getRandomNum = (max) => Math.floor(Math.random() * max);

const increaseDanger = (el) => {
  if (el !== undefined && typeof el === 'number') {
    const count = el + 1;
    return count;
  }
  return el;
};

export { getRandomNum, increaseDanger };
