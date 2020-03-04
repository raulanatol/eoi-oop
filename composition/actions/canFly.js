const canFly = (state) => ({
  fly: () => state.y = state.y + 1
});

module.exports = canFly;
