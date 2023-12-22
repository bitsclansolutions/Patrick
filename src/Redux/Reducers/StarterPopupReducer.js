const data = {
  show: false,
};

const StaterPopupReducer = (state = data, action) => {
  switch (action.type) {
    case "showPopup":
      return {
        show: !state.show,
      };
    default:
      return state;
  }
};

export default StaterPopupReducer;
