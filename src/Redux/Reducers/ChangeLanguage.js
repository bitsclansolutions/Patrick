const data = {
  isDutch: true,
};

const ChangeLanguageReducer = (state = data, action) => {
  switch (action.type) {
    case "changeLanguage":
      return {
        isDutch: action.payload,
      };
    default:
      return state;
  }
};

export default ChangeLanguageReducer;
