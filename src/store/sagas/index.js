import { all, takeEvery } from 'redux-saga/effects';
import * as rootSagas from './root';

export default function* root() {
  yield all([
    // Root
    takeEvery('ASYNC_SET_ROOT_SAGAS_INITIALIZED', rootSagas.setRootSagasInitialized),
  ]);
}
