// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';

// Imports: Redux Sagas

import fetchProducts from './productsSaga';

// Redux Saga: Root Saga
export default function* rootSaga() {
  yield all([
    fork(fetchProducts),
  ]);
}
