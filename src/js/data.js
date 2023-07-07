import state from './state';
import openSound from '../assets/sounds/open.wav';
import flagSound from '../assets/sounds/flag.wav';
import winSound from '../assets/sounds/win.wav';
import loseSound from '../assets/sounds/lose.wav';

class Game {
  constructor() {
    this.elements = [];
    this.cells = {
      elements: [],
      data: [],
      open: [],
      flag: [],
    };
    this.sound = {
      click: new Audio(openSound),
      flag: new Audio(flagSound),
      win: new Audio(winSound),
      lose: new Audio(loseSound),
    };
    this.turns = 0;
    this.time = 0;
    this.lastResults = JSON.parse(localStorage.getItem('minesweeper-history')) || [];
    const fromLs = localStorage.getItem('minesweeper-last-game');
    if (fromLs) {
      const decodedData = atob(fromLs);
      this.lastGame = JSON.parse(decodedData);
    }
    this.lastTurns = localStorage.getItem('minesweeper-turns');
    this.lastTime = localStorage.getItem('minesweeper-time');
  }

  save() {
    if (this.cells.open.length && state.game) {
      this.cells.elements.length = 0;
      const data = JSON.stringify(this.cells);
      const encodedData = btoa(data);
      localStorage.setItem('minesweeper-last-game', encodedData);
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
