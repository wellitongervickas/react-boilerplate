// @flow strict

import { ActionInterface } from '../../utils/interfaces/store/action-interface';

type State = {
  rootInitialized: boolean;
  rootSagasInitialized: boolean;
}

const DEFAULT_STATE: State = {
  rootInitialized: false,
  rootSagasInitialized: false,
};

export default function root(
  state: State = DEFAULT_STATE,
  action: ActionInterface,
) {
  switch (action.type) {
    case 'RESET_ROOT_STATE':
      return DEFAULT_STATE;

    case 'SET_ROOT_INITIALIZED':
      return { ...state, rootInitialized: action.payload };

    case 'SET_ROOT_SAGAS_INITIALIZED':
      return { ...state, rootSagasInitialized: action.payload };

    default:
      return { ...state };
  }
}
