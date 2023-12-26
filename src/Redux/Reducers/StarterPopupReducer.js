const data = {
  show: false,
};

const StaterPopupReducer = (state = data, action) => {
  switch (action.type) {
    case "showPopup":
      return {
        show: true,
      };

    case "hidePopup":
      return {
        show: false,
      };
    default:
      return state;
  }
};

export default StaterPopupReducer;
