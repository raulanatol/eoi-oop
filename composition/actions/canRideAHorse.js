const canRideAHorse = (state) => ({
  rideAHorse: () => state.x = state.x + 10
});

module.exports = canRideAHorse;
