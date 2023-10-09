import { addcompetitors } from './competitorService';
import { takeEvery, call, put } from 'redux-saga/effects';
import { addcompetitorAction, getcompetitorAction } from './competitorSlice';

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

function* allCompetitors() {
  yield takeEvery(addcompetitorAction, addCompetitorGenerator);
}

export default allCompetitors;
