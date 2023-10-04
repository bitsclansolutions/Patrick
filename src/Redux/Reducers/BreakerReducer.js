const data = {
  groupOneIsBreaker: true,
  groupOneBreakerColor: "red",
  kitchenIsBreaker: true,
  kitchenBreakerColor: "red",
  laundaryIsBreaker: false,
  laundaryBreakerColor: "black",
  groupThreeIsBreaker: false,
  groupThreeBreakerColor: "black",
  groupFourIsBreaker: false,
  groupFourBreakerColor: "black",
  groupFiveIsBreaker: false,
  groupFiveBreakerColor: "black",
};

const BreakerReducer = (state = data, action) => {
  switch (action.type) {
    case "firstGroup":
      return {
        ...state,
        groupOneIsBreaker: action.payload.available,
        groupOneBreakerColor: action.payload.color,
      };

    case "kitchen":
      return {
        ...state,
        kitchenIsBreaker: action.payload.available,
        kitchenBreakerColor: action.payload.color,
      };

    default:
      return state;
  }
};

export default BreakerReducer;
