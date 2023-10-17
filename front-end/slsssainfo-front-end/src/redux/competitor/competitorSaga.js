import {
  addcompetitors,
  getCompetitors,
  getJuniorPistolMenService,
  getJuniorPistolWomenService,
  getJuniorRifleMenService,
  getJuniorRifleWomenService,
  getYouthPistolMenService,
  getYouthPistolWomenService,
  getYouthRifleMenService,
  getYouthRifleWomenService,
  updateCompetitor
} from './competitorService';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  addcompetitorAction,
  getJuniorPistolMen,
  getJuniorPistolWomen,
  getJuniorRifleMen,
  getJuniorRifleWomen,
  getYouthPistolMen,
  getYouthPistolWomen,
  getYouthRifleMen,
  getcompetitorAction,
  getyouthRifleWomen,
  saveCompetitorAction,
  saveJuniorPistolMen,
  saveJuniorPistolWomen,
  saveJuniorRifleMen,
  saveJuniorRifleWomen,
  saveYouthPistolMen,
  saveYouthPistolWomen,
  saveYouthRifleMen,
  saveyouthRifleWomen,
  updateCompetitorAction
} from './competitorSlice';

import { io } from 'socket.io-client';
const socket = io('http://localhost:8000/', {
  transports: ['websocket']
});

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
      socket.emit('competitor_update', `Competitor Updated`);
      yield put(getcompetitorAction());
    }
  } catch (err) {
    alert('Cannot Update Competitor');
  }
}

function* getJuniorRifleMenGenerator({ payload }) {
  try {
    const response = yield call(getJuniorRifleMenService, payload);
    if (response) {
      yield put(saveJuniorRifleMen(response));
    }
  } catch (err) {
    alert('Failed to get Junior Rifle Men');
  }
}

function* getYouthRifleMenGenerator({ payload }) {
  try {
    const response = yield call(getYouthRifleMenService, payload);
    if (response) {
      yield put(saveYouthRifleMen(response));
    }
  } catch (err) {
    alert('Failed to get Youth Rifle Men');
  }
}

function* getJuniorRifleWomenGenerator({ payload }) {
  try {
    const response = yield call(getJuniorRifleWomenService, payload);
    if (response) {
      yield put(saveJuniorRifleWomen(response));
    }
  } catch (err) {
    alert('Failed to get Junior Rifle Women');
  }
}

function* getYouthRifleWomenGenerator({ payload }) {
  try {
    const response = yield call(getYouthRifleWomenService, payload);
    if (response) {
      yield put(saveyouthRifleWomen(response));
    }
  } catch (err) {
    alert('Failed to get Youth Rifle Women');
  }
}

function* getJuniorPistolMenGenerator({ payload }) {
  try {
    const response = yield call(getJuniorPistolMenService, payload);
    if (response) {
      yield put(saveJuniorPistolMen(response));
    }
  } catch (err) {
    alert('Failed to get Junior Pistol Men');
  }
}

function* getJuniorPistolWomenGenerator({ payload }) {
  try {
    const response = yield call(getJuniorPistolWomenService, payload);
    if (response) {
      yield put(saveJuniorPistolWomen(response));
    }
  } catch (err) {
    alert('Failed to get Junior Pistol Women');
  }
}

function* getYouthPistolMenGenerator({ payload }) {
  try {
    const response = yield call(getYouthPistolMenService, payload);
    if (response) {
      yield put(saveYouthPistolMen(response));
    }
  } catch (err) {
    alert('Failed to get Youth Pistol Men');
  }
}

function* getYouthPistolWomenGenerator({ payload }) {
  try {
    const response = yield call(getYouthPistolWomenService, payload);
    if (response) {
      yield put(saveYouthPistolWomen(response));
    }
  } catch (err) {
    alert('Failed to get Youth Pistol Women');
  }
}

function* allCompetitors() {
  yield takeEvery(addcompetitorAction, addCompetitorGenerator);
  yield takeEvery(getcompetitorAction, getAllCompetitorsGenerator);
  yield takeEvery(updateCompetitorAction, updateCompetitorGenerator);
  yield takeEvery(getJuniorRifleMen, getJuniorRifleMenGenerator);
  yield takeEvery(getYouthRifleMen, getYouthRifleMenGenerator);
  yield takeEvery(getJuniorRifleWomen, getJuniorRifleWomenGenerator);
  yield takeEvery(getyouthRifleWomen, getYouthRifleWomenGenerator);
  yield takeEvery(getJuniorPistolMen, getJuniorPistolMenGenerator);
  yield takeEvery(getJuniorPistolWomen, getJuniorPistolWomenGenerator);
  yield takeEvery(getYouthPistolMen, getYouthPistolMenGenerator);
  yield takeEvery(getYouthPistolWomen, getYouthPistolWomenGenerator);
}

export default allCompetitors;
