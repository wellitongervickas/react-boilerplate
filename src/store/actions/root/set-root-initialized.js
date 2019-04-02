// @flow strict

export default function setRootInitialized(status: boolean = true) {
  return {
    type: 'SET_ROOT_INITIALIZED',
    payload: status || true,
  };
}
