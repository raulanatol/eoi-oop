const ArchMage = require('./ArchMage');

class MageKnight extends ArchMage {
  fly() {
    console.log('I can\'t fly');
  }

  rideAHorse() {
    this.x = this.x + 10;
  }
}

module.exports = MageKnight;
