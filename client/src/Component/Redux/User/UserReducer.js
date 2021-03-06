import UserTypes from "./UserTypes";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
  userDropDownHidden: true,
};
const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.TOGGLE_USER_DROPDOWN:
      return {
        ...state,
        userDropDownHidden: !state.userDropDownHidden,
      };
    case UserTypes.DISABLE_USER_DROPDOWN:
      return {
        ...state,
        userDropDownHidden: true,
      };
    case UserTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserTypes.SIGN_OUT_FAILURE:
    case UserTypes.SIGN_IN_FAILURE:
    case UserTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
