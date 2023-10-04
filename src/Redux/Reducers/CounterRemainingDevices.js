const data = {
  count: 0,
};

const CounterRemainingDevicesReducer = (state = data, action) => {
  switch (action.type) {
    case "connectDevice":
      return {
        count: state.count - 1,
      };

    case "disconnectDevice":
      return {
        count: state.count + 1,
      };

    default:
      return state;
  }
};

export default CounterRemainingDevicesReducer;
