import { configureStore } from '@reduxjs/toolkit';
import schoolReducer from './school/schoolsSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import userReducer from './user/userSlice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    schoolReducer: schoolReducer,
    userReducer: userReducer
  },
  middleware: [saga]
});

saga.run(rootSaga);

export default store;
