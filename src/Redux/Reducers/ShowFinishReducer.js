const data = {
  show: false,
};
const ShowFinishReducer = (state = data, action) => {
  switch (action.type) {
    case "showFinishBtn":
      return {
        show: true,
      };

    default:
      return state;
  }
};

export default ShowFinishReducer;
