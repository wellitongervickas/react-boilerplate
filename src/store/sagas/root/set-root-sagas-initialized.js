// @flow strict

import type { Saga } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { ActionInterface } from '../../../utils/interfaces/store/action-interface';

export default function* setRootSagasInitialized(action: ActionInterface): Saga {
  yield put({
    type: 'SET_ROOT_SAGAS_INITIALIZED',
    payload: action.payload || false,
  });
}
