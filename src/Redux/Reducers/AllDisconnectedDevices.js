const data = {
  devices: [],
};

const allDisconnectedDevices = (state = data, action) => {
  switch (action.type) {
    case "addDisconnectDevice":
      return {
        devices: [...state.devices, action.payload],
      };
    case "removeDisconnectDevice":
      return {
        devices: state.devices.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
};

export default allDisconnectedDevices;
