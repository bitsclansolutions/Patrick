const data = {
  userName: "",
};
const UserReducer = (state = data, action) => {
  switch (action.type) {
    case "name":
      localStorage.setItem("userName", action.payload);
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
