import { type } from "@testing-library/user-event/dist/type";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILURE,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
} from "./actionTypes";
import api from "../../utils/axiosInstance";
import { endpoints } from "../../utils/endpoints";

export const userinfo = (val) => {
  return {
    type: "name",
    payload: val,
  };
};

// const Context = creatContext()
// const getValue = (id) => {
//   return id
// }

// <Context.Provider value={getValue}>

// </Context.Provider>

// const {getValue} = useContext()

// getValue(istate)

// result calculation action ...................

export const resultGroundFloor = (val) => {
  return {
    type: "resultGroundFloor",
    payload: val,
  };
};
export const resultFirstFloor = (val) => {
  return {
    type: "resultFirstFloor",
    payload: val,
  };
};
export const resultAtticFloor = (val) => {
  return {
    type: "resultAtticFloor",
    payload: val,
  };
};

export const resultTotal = (val) => {
  return {
    type: "resultTotal",
    payload: val,
  };
};

export const isFinished = () => {
  return {
    type: "isFinished",
  };
};

// hurray reducer ...............................

export const isHurray = (val) => {
  return {
    type: "hurray",
    payload: val,
  };
};

// breaker Type

export const groupOneBreaker = (val) => {
  return {
    type: "firstGroup",
    payload: val,
  };
};
export const kitchenBreaker = (val) => {
  return {
    type: "kitchen",
    payload: val,
  };
};
export const groupThreeBreaker = (val) => {
  return {
    type: "GroupThree",
    payload: val,
  };
};
export const groupFourBreaker = (val) => {
  return {
    type: "groupFour",
    payload: val,
  };
};
export const groupFiveBreaker = (val) => {
  return {
    type: "groupFive",
    payload: val,
  };
};
export const laundaryBreaker = (val) => {
  return {
    type: "laundary",
    payload: val,
  };
};

export const increaseCouter = () => {
  return {
    type: "counter",
  };
};
export const corruptBreakerAttemptedHandler = () => {
  return {
    type: "corruptBreakerAttempted",
  };
};

export const increaseDeviceCounter = () => {
  return {
    type: "counterDevice",
  };
};

export const disconnectDevice = () => {
  return {
    type: "disconnectDevice",
  };
};

export const connectDevice = () => {
  return {
    type: "connectDevice",
  };
};

export const showFinishBtn = () => {
  return {
    type: "showFinishBtn",
  };
};

export const hideFinishBtn = () => {
  return {
    type: "hideFinishBtn",
  };
};

// corrupt device

export const corruptDevice = (val) => {
  return {
    type: "corruptDevice",
    payload: val,
  };
};

// corrupt groupt

export const corruptGroup = (val) => {
  return {
    type: "corruptGroup",
    payload: val,
  };
};

// group devices counter

export const connectCorrupGroupDevice = () => {
  return {
    type: "connectCorrupGroupDevice",
  };
};
export const disconnectCorrupGroupDevice = () => {
  return {
    type: "disconnectCorrupGroupDevice",
  };
};
export const connectCorrectGroupDevice = () => {
  return {
    type: "connectCorrectGroupDevice",
  };
};
export const disconnectCorrectGroupDevice = () => {
  return {
    type: "disconnectCorrectGroupDevice",
  };
};
export const corrupGroupDeviceError = () => {
  return {
    type: "corrupGroupDeviceError",
  };
};
export const correctGroupDeviceError = () => {
  return {
    type: "correctGroupDeviceError",
  };
};
export const corruptAttempted = (val) => {
  return {
    type: "corruptAttempted",
    payload: val,
  };
};

// change language

export const changeLanguage = (val) => {
  return {
    type: "changeLanguage",
    payload: val,
  };
};

// exercise

export const setExercise = (val) => {
  return {
    type: "setExercise",
    payload: val,
  };
};

export const setExerciseGate = (val) => {
  return {
    type: "setExerciseGate",
    payload: val,
  };
};

export const increaseExerciseCounter = () => {
  return {
    type: "increaseExerciseCounter",
  };
};

export const decreaseExerciseCounter = () => {
  return {
    type: "decreaseExerciseCounter",
  };
};
export const resetExerciseCounter = () => {
  return {
    type: "resetExerciseCounter",
  };
};

export const setExerciseCounter = (val) => {
  return {
    type: "setExerciseCounter",
    payload: val,
  };
};

// disconnected devices

export const addDisconnectDevice = (val) => {
  return {
    type: "addDisconnectDevice",
    payload: val,
  };
};
export const removeDisconnectDevice = (val) => {
  return {
    type: "removeDisconnectDevice",
    payload: val,
  };
};

export const showPopup = () => {
  return {
    type: "showPopup",
  };
};
export const hidePopup = () => {
  return {
    type: "hidePopup",
  };
};

//Auth actions
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
export const logout = () => ({ type: LOGOUT });

//Get All Users actions
export const getAllUserRequest = () => ({ type: GET_ALL_USER_REQUEST });
export const getAllUserSuccess = (user) => ({
  type: GET_ALL_USER_SUCCESS,
  payload: user,
});
export const getAllUserFailure = (error) => ({
  type: GET_ALL_USER_FAILURE,
  payload: error,
});


//Fetch All Users API
export const fetchAllusers = () => {
  return async (dispatch) => {
    dispatch(getAllUserRequest());
    try {
      const response = await api.get(endpoints.getUsers());
      dispatch(getAllUserSuccess(response.data));
    } catch (error) {
      dispatch(getAllUserFailure(error.message));
    }
  };
};
