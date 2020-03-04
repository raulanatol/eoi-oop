const canSuperFly = (state) => ({
  fly: () => {
    console.log('Cast fly spell');
    state.y = state.y + 10
  }
});

module.exports = canSuperFly;
