import { configureStore } from '@reduxjs/toolkit';
import schoolReducer from './school/schoolsSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    schoolReducer: schoolReducer
  },
  middleware: [saga]
});

saga.run(rootSaga);

export default store;
