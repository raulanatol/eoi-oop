class Player {
  name;
  life;
  y;
  x;

  static getType() {
    return 'PLAYER';
  }

  constructor(name = 'Paco', life = 10) {
    this.name = name;
    this.life = life;
    this.x = 0;
    this.y = 0;
  }

  say(message) {
    console.log(message);
  }
}

module.exports = Player;
