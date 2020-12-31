import UserTypes from "./UserTypes";
export const toggleUserDropDown = () => ({
  type: UserTypes.TOGGLE_USER_DROPDOWN,
});
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
export const SignInWithGoogleStart = () => ({
  type: UserTypes.SIGN_IN_WITH_GOOGLE_START,
});
export const SignInSucess = (user) => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const SignInFailure = (error) => ({
  type: UserTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const SignInWithWithEmailAndPasswordStart = (emailAndPassword) => ({
  type: UserTypes.SIGN_IN_WITH_USERANDPASSWORD_START,
  payload: emailAndPassword,
});
export const CheckUserSession = () => ({
  type: UserTypes.CHECK_USER_SESSION,
});
export const SignOutStart = () => ({
  type: UserTypes.SIGN_OUT_START,
});
export const SignOutSuccess = () => ({
  type: UserTypes.SIGN_OUT_SUCCESS,
});
export const SignOutFailure = (error) => ({
  type: UserTypes.SIGN_OUT_FAILURE,
  payload: error,
});
export const SignUpStart = (credentials) => ({
  type: UserTypes.SIGN_UP_START,
  payload: credentials,
});
export const SignUpSuccess = ({ user, additionalData }) => ({
  type: UserTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});
export const SignUpFailure = (e) => ({
  type: UserTypes.SIGN_UP_FAILURE,
  payload: e,
});
