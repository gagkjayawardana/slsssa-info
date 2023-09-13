import schoolsSaga from './school/schoolsSaga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(schoolsSaga)]);
}
