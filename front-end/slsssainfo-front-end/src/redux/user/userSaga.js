import { getLogedUserService, loginUserService, logoutUserService } from './userService';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  getUserAction,
  loginUserAction,
  logoutUserAction,
  refreshAction,
  saveUserAction
} from './userSlice';

function* loginUserGenerator({ payload }) {
  try {
    const response = yield call(loginUserService, payload);
    if (response) {
      payload.navigate('/');
    } else {
      alert('Login Failed! Please Enter Valid UserName & Password');
    }
  } catch (err) {
    alert('Login Failed! Please Enter Valid UserName & Password');
  }
}

function* getLogedUserGenerator() {
  try {
    const response = yield call(getLogedUserService);
    if (response) {
      yield put(saveUserAction(response));
    }
  } catch (err) {
    console.log(err);
  }
}

function* logoutUserGenerattor({ payload }) {
  try {
    const response = yield call(logoutUserService);
    if (response) {
      yield put(saveUserAction(response));
      payload.navigate('/');
    } else {
      alert('Your Session is Expired');
      payload.navigate('/');
    }
  } catch (err) {
    console.log(err);
  }
}

function* refreshGenerator() {
  try {
    const response = yield call(getLogedUserService);
    yield put(saveUserAction(response));
  } catch (err) {
    console.log(err);
  }
}

function* allUsers() {
  yield takeEvery(loginUserAction, loginUserGenerator);
  yield takeEvery(getUserAction, getLogedUserGenerator);
  yield takeEvery(logoutUserAction, logoutUserGenerattor);
  yield takeEvery(refreshAction, refreshGenerator);
}

export default allUsers;
