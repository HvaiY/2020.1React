import actionTypes from "../actions/actionTypes";

const initState = {
  id: "",
  displayName: "",
  avatar: "",
  role: "",
  isLogin: false,
  isLoading: false,
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLogin: true,
        isLoading: false,
      };
    case actionTypes.LOGIN_FAILED:
      return initState;
    case actionTypes.START_LOGIN:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};
