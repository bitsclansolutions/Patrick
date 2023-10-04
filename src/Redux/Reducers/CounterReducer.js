const data = {
  count: 0,
};

const CounterReducer = (state = data, action) => {
  switch (action.type) {
    case "counter":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
