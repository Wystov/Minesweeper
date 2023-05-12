const page = {
  elements: [],
  cells: {
    elements: [],
    open: [],
    flag: [],
  },
  lastResults: JSON.parse(localStorage.getItem('minesweeper-top')) || [],
};

export default page;
