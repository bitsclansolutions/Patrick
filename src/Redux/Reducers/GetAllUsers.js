import {
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILURE,
} from "../Action/actionTypes";

const initialState = {
  loading: false,
  allUsers: null,
  error: null,
};

const GetAllUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ALL_USER_SUCCESS:
      return { ...state, loading: false, allUsers: action.payload, error: null };
    case GET_ALL_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default GetAllUsersReducer;
