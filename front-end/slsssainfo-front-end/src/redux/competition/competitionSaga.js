import { createCompetition, getCompetitions } from './competitionService';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  addCompetitionAction,
  getCompetitionAction,
  saveCompetitionAction
} from './competitionSlice';

function* addCompetitionGenerator({ payload }) {
  try {
    const response = yield call(createCompetition, payload);
    if (response) {
      yield put(getCompetitionAction());
    }
  } catch (err) {
    alert('Competition not Added');
  }
}

function* getAllCompetitionsGenerator() {
  try {
    const response = yield call(getCompetitions);
    yield put(saveCompetitionAction(response));
  } catch (err) {
    alert('Failed get All Competitions Details');
  }
}

function* allCompetitions() {
  yield takeEvery(addCompetitionAction, addCompetitionGenerator);
  yield takeEvery(getCompetitionAction, getAllCompetitionsGenerator);
}

export default allCompetitions;
