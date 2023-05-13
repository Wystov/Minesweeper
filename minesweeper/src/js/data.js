import state from './state';

class Game {
  constructor() {
    this.elements = [];
    this.cells = {
      elements: [],
      data: [],
      open: [],
      flag: [],
    };
    this.turns = 0;
    this.time = 0;
    this.lastResults = JSON.parse(localStorage.getItem('minesweeper-top')) || [];
    this.lastGame = JSON.parse(localStorage.getItem('minesweeper-last-game'));
    this.lastTurns = localStorage.getItem('minesweeper-turns');
    this.lastTime = localStorage.getItem('minesweeper-time');
  }

  save() {
    if (this.cells.open.length && state.game) {
      this.cells.elements.length = 0;
      localStorage.setItem('minesweeper-last-game', JSON.stringify(this.cells));
      localStorage.setItem('minesweeper-turns', this.turns);
      localStorage.setItem('minesweeper-time', this.time);
    }
  }

  removeSave() {
    localStorage.removeItem('minesweeper-last-game');
    localStorage.removeItem('minesweeper-turns');
    localStorage.removeItem('minesweeper-time');
    this.lastGame = null;
  }

  continueGame() {
    this.cells.data = this.lastGame.data;
    this.turns = parseInt(this.lastTurns, 10);
    this.time = parseInt(this.lastTime, 10);
    this.cells.open = this.lastGame.open;
    this.cells.flag = this.lastGame.flag;
  }
}

const page = new Game();

window.addEventListener('beforeunload', () => page.save());

export default page;
