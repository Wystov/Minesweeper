const page = {
  elements: [],
  cells: {
    elements: [],
    data: [],
    open: [],
    flag: [],
  },
  lastResults: JSON.parse(localStorage.getItem('minesweeper-top')) || [],
};

export default page;
