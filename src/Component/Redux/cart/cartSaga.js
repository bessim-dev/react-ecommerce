import { takeEvery,all,call,put} from 'redux-saga/effects';
import UserTypes from '../User/UserTypes';
import {clearCart} from './cartAction';

export function* ClearCart(){
    yield put(clearCart());
}
export function* onSignOutSucess(){
    yield takeEvery(UserTypes.SIGN_OUT_SUCCESS,ClearCart)
}
export function* CartSaga(){
    yield all([call(onSignOutSucess)])
}