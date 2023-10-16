import { addcompetitors, getCompetitors, updateCompetitor } from './competitorService';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  addcompetitorAction,
  getcompetitorAction,
  saveCompetitorAction,
  updateCompetitorAction
} from './competitorSlice';

function* addCompetitorGenerator({ payload }) {
  try {
    const response = yield call(addcompetitors, payload);
    if (response) {
      yield put(getcompetitorAction());
    }
  } catch (err) {
    alert('Competititors are not Added');
  }
}

function* getAllCompetitorsGenerator({ payload }) {
  try {
    const response = yield call(getCompetitors, payload);
    yield put(saveCompetitorAction(response));
  } catch (err) {
    alert('Failed get All Competitions Details');
  }
}

function* updateCompetitorGenerator({ payload }) {
  try {
    const response = yield call(updateCompetitor, payload);
    if (response) {
      yield put(getcompetitorAction());
    }
  } catch (err) {
    alert('Cannot Update Competitor');
  }
}

function* allCompetitors() {
  yield takeEvery(addcompetitorAction, addCompetitorGenerator);
  yield takeEvery(getcompetitorAction, getAllCompetitorsGenerator);
  yield takeEvery(updateCompetitorAction, updateCompetitorGenerator);
}

export default allCompetitors;
