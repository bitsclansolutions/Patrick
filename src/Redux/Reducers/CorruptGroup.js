const data = {
  corruptGroup: null,
};

const corruptGroupReducer = (state = data, action) => {
  switch (action.type) {
    case "corruptGroup":
      return {
        corruptGroup: action.payload,
      };
    default:
      return state;
  }
};

export default corruptGroupReducer;
