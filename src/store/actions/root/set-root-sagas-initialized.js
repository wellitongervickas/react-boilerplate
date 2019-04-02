// @flow strict

export default function setRootSagasInitialized(status: boolean = true) {
  return {
    type: 'ASYNC_SET_ROOT_SAGAS_INITIALIZED',
    payload: status || true,
  };
}
