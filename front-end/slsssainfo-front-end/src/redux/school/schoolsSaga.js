import { put, takeEvery } from 'redux-saga/effects';
import {
  addParticipantAction,
  addPaymentAction,
  saveParticipantsAction,
  savePaymentAction
} from './schoolsSlice';

function* addParticipantsGenerator(action) {
  try {
    if (action) {
      yield put(saveParticipantsAction(action.payload));
    }
  } catch (err) {
    alert('Add Participant Error');
  }
}

function* addPaymentGenerator(action) {
  try {
    if (action) {
      yield put(savePaymentAction(action.payload));
      console.log('action', action.payload);
    }
  } catch (err) {
    alert('The payment receipt was not uploaded.');
  }
}

function* allRegisterSchools() {
  yield takeEvery(addParticipantAction.type, addParticipantsGenerator);
  yield takeEvery(addPaymentAction, addPaymentGenerator);
}

export default allRegisterSchools;
