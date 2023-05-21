class Settings {
  constructor() {
    this.game = true;
    this.sound = true;
    this.fieldSize = 100;
    this.mines = 10;
    this.theme = ['page', 'page--theme-light'];
    this.mode = 'easy';
  }

  save() {
    localStorage.setItem('minesweeper-settings', JSON.stringify(this));
  }

  load() {
    const savedData = JSON.parse(localStorage.getItem('minesweeper-settings'));
    if (savedData) {
      this.game = savedData.game;
      this.sound = savedData.sound;
      this.fieldSize = savedData.fieldSize;
      this.mines = savedData.mines;
      this.theme = savedData.theme;
      this.mode = savedData.mode;
      this.name = savedData.name;
    }
  }
}

const state = new Settings();

state.load();

export default state;
