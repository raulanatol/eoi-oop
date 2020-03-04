const Player = require('./Player');

class Wizard extends Player {
  fly() {
    this.y = this.y + 1;
  }
}

module.exports = Wizard;
