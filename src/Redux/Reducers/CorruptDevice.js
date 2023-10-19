const data = {
  corrupt: null,
};

const CorruptDeviceReducer = (state = data, action) => {
  switch (action.type) {
    case "corruptDevice":
      return {
        corrupt: action.payload,
      };
    default:
      return state;
  }
};

export default CorruptDeviceReducer;
