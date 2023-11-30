const data = {
  exercise: null,
  deviceCount: 0,
};

const ExerciseReducer = (state = data, action) => {
  switch (action.type) {
    case "setExercise":
      localStorage.setItem("exerciseNumber", action.payload);
      return {
        ...state,
        exercise: action.payload,
      };
    case "increaseExerciseCounter":
      return {
        ...state,
        deviceCount: state.deviceCount + 1,
      };
    case "decreaseExerciseCounter":
      return {
        ...state,
        deviceCount: state.deviceCount - 1,
      };
    case "resetExerciseCounter":
      return {
        ...state,
        deviceCount: 0,
      };
    case "setExerciseCounter":
      return {
        ...state,
        deviceCount: action.payload,
      };

    default:
      return state;
  }
};

export default ExerciseReducer;
