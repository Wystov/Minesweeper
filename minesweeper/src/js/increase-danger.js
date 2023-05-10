const increaseDanger = (el) => {
  if (el !== undefined && typeof el === 'number') {
    const count = el + 1;
    return count;
  }
  return el;
};

export default increaseDanger;
