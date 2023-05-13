class Settings {
  constructor() {
    this.game = true;
    this.sound = true;
    this.fieldSize = 100;
    this.mines = 10;
    this.theme = ['style', 'light-theme'];
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
    }
  }
}

const state = new Settings();

state.load();

export default state;
