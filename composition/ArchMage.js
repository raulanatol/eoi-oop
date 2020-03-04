const canTalk = require('./actions/canTalk');
const canSuperFly = require('./actions/canSuperFly');

const ArchMage = (name = 'Paco', life = 10) => {
  let state = {
    name,
    life,
    x: 0,
    y: 0
  };
  return Object.assign(state, canTalk(), canSuperFly(state))
};

module.exports = ArchMage;
