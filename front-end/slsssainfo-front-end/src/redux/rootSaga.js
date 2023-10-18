import schoolsSaga from './school/schoolsSaga';
import userSaga from './user/userSaga';
import competitionSaga from './competition/competitionSaga';
import competitorSaga from './competitor/competitorSaga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(schoolsSaga), fork(userSaga), fork(competitionSaga), fork(competitorSaga)]);
}
