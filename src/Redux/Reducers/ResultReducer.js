const data = {
  resultGroundFloor: "",
  resultFirstFloor: "",
  resultAtticFloor: "",
  resultTotal: "",
  isFinished: false,
};
const ResultReducer = (state = data, action) => {
  switch (action.type) {
    case "resultGroundFloor":
      return {
        ...state,
        resultGroundFloor: action.payload,
      };

    case "resultFirstFloor":
      return {
        ...state,
        resultFirstFloor: action.payload,
      };

    case "resultAtticFloor":
      return {
        ...state,
        resultAtticFloor: action.payload,
      };
    case "resultTotal":
      return {
        ...state,
        resultTotal: action.payload,
      };

    case "isFinished":
      return {
        ...state,
        isFinished: true,
      };

    default:
      return state;
  }
};

export default ResultReducer;
