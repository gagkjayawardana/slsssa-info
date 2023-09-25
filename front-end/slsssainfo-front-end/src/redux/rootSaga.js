import schoolsSaga from './school/schoolsSaga';
import userSaga from './user/userSaga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(schoolsSaga), fork(userSaga)]);
}
