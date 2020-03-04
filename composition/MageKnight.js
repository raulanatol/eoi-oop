const canTalk = require('./actions/canTalk');
const canRideAHorse = require('./actions/canRideAHorse');

const MageKnight = (name = 'Paco', life = 10) => {
  let state = {
    name,
    life,
    x: 0,
    y: 0
  };
  return Object.assign(state, canTalk(), canRideAHorse(state))
};

module.exports = MageKnight;
