const data = {
  corruptGroupDisconnected: 0,
  correctGroupDisconnected: 0,
  corruptGroupError: 0,
  correctGroupError: 0,
  corruptAttempted: [],
};

const GroupDevicesCounterReducer = (state = data, action) => {
  switch (action.type) {
    case "connectCorrupGroupDevice":
      return {
        ...state,
        corruptGroupDisconnected: state.corruptGroupDisconnected - 1,
      };

    case "disconnectCorrupGroupDevice":
      return {
        ...state,
        corruptGroupDisconnected: state.corruptGroupDisconnected + 1,
      };
    case "connectCorrectGroupDevice":
      return {
        ...state,
        correctGroupDisconnected: state.correctGroupDisconnected - 1,
      };

    case "disconnectCorrectGroupDevice":
      return {
        ...state,
        correctGroupDisconnected: state.correctGroupDisconnected + 1,
      };
    case "corrupGroupDeviceError":
      return {
        ...state,
        corruptGroupError: state.corruptGroupError + 1,
      };
    case "correctGroupDeviceError":
      return {
        ...state,
        correctGroupError: state.correctGroupError + 1,
      };

    case "corruptAttempted":
      return {
        ...state,
        corruptAttempted: [...state.corruptAttempted, action.payload],
      };

    default:
      return state;
  }
};

export default GroupDevicesCounterReducer;
