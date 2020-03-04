const Player = require('./Player');
const Wizard = require('./Wizard');
const ArchMage = require('./ArchMage');
const MageKnight = require('./MageKnight');
//
console.log('>>> Player1');
const player1 = Player('Paco');
console.log(player1.name);
console.log(player1.life);
player1.say('Hello');

console.log('>>> Player2');
const player2 = Wizard();
console.log(player2.y);
player2.fly();
console.log(player2.y);

console.log('>>> Player3');
const player3 = ArchMage();
console.log(player3.y);
player3.fly();
console.log(player3.y);

console.log('>>> Player4');
const player4 = MageKnight();
console.log(player4.x);
player4.rideAHorse();
console.log(player4.x);
// yeah! player4.fly();
