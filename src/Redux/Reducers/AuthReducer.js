// src/redux/reducers.js
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../Action/actionTypes";

const initialState = {
  loading: false,
  user: null || JSON.parse(localStorage.getItem("user")), // Load from localStorage if available
  error: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      localStorage.removeItem("user"); // Clear saved user data
      return { ...state, user: null, error: null };
    default:
      return state;
  }
};

export default AuthReducer;
