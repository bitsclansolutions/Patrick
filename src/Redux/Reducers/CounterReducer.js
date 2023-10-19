const data = {
  count: 0,
  corruptBreakerAttempted: false,
};

const CounterReducer = (state = data, action) => {
  switch (action.type) {
    case "counter":
      return {
        ...state,
        count: state.count + 1,
      };
    case "corruptBreakerAttempted":
      return {
        ...state,
        corruptBreakerAttempted: true,
      };
    default:
      return state;
  }
};

export default CounterReducer;
