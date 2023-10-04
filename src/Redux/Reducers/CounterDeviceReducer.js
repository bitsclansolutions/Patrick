const data = {
  count: 0,
};

const CounterDeviceReducer = (state = data, action) => {
  switch (action.type) {
    case "counterDevice":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default CounterDeviceReducer;
