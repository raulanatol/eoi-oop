const Wizard = require('./Wizard');

class ArchMage extends Wizard {
  fly() {
    console.log('Cast fly spell');
    this.y = this.y + 10;
  }
}

module.exports = ArchMage;
