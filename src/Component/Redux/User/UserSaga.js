import { takeLatest, put, all, call } from "redux-saga/effects";
import UserTypes from "./UserTypes";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../FireBase/FireBase";
import {
  SignInSucess,
  SignInFailure,
  SignOutFailure,
  SignOutSuccess,
  SignUpFailure,
  SignUpSuccess,
} from "./UserAction";
function* getUserSnapshot(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(SignInSucess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (e) {
    yield put(SignInFailure(e));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshot(user);
  } catch (e) {
    yield put(SignInFailure(e));
  }
}
export function* onSignInWithGoogleStart() {
  yield takeLatest(UserTypes.SIGN_IN_WITH_GOOGLE_START, signInWithGoogle);
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(user);
  } catch (e) {
    yield put(SignInFailure(e));
  }
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshot(userAuth);
  } catch (e) {
    yield put(SignInFailure(e));
  }
}
export function* SignOut() {
  try {
    yield auth.signOut;
    yield put(SignOutSuccess());
  } catch (e) {
    yield put(SignOutFailure(e));
  }
}
export function* SignUp({ payload: { name, email, password} }) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(SignUpSuccess({user,additionalData:{name}}));
  } catch (e) {
    yield put(SignUpFailure(e))
  }
}
export function* signInAfterSignUp({payload:{user,additionalData}}){
  yield getUserSnapshot(user,additionalData)
}
export function* onSignInWithEmailStart() {
  yield takeLatest(
    UserTypes.SIGN_IN_WITH_USERANDPASSWORD_START,
    signInWithEmail
  );
}
export function* onCheckUserSession() {
  yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onSignOutStart() {
  yield takeLatest(UserTypes.SIGN_OUT_START, SignOut);
}
export function* onSignUpStart() {
  yield takeLatest(UserTypes.SIGN_UP_START, SignUp);
}
export function* onSignUpSuccess() {
  yield takeLatest(UserTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}
export function* userSaga() {
  yield all([
    call(onSignInWithGoogleStart),
    call(onSignInWithEmailStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
