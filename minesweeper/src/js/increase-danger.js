const increaseDanger = (el) => {
  if (el !== undefined && typeof el === 'number') {
    return el + 1;
  }
  return el;
};

export default increaseDanger;
