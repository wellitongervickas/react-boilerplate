import * as rootActions from '../../../store/actions/root'

describe('root', () => {

  const rootActionExpected = {
    type: 'SET_ROOT_INITIALIZED',
    payload: true,
  }

  const rootSagasActionExpected = {
    type: 'ASYNC_SET_ROOT_SAGAS_INITIALIZED',
    payload: true,
  }

  it('should action to initialize root reducer', () => {
    expect(rootActions.setRootInitialized(true)).toEqual(rootActionExpected);
  })

  it('should action to initialize root reducer when type null', () => {
    expect(rootActions.setRootInitialized(null)).toEqual(rootActionExpected);
  })

  it('should action to initialize root reducer when type nothing', () => {
    expect(rootActions.setRootInitialized()).toEqual(rootActionExpected);
  })

  it('should action to initialize root sagas reducer', () => {
    expect(rootActions.setRootSagasInitialized(true)).toEqual(rootSagasActionExpected);
  })

  it('should action to initialize root sagas reducer when type null', () => {
    expect(rootActions.setRootSagasInitialized(null)).toEqual(rootSagasActionExpected);
  })

  it('should action to initialize root sagas reducer when type nothing', () => {
    expect(rootActions.setRootSagasInitialized()).toEqual(rootSagasActionExpected);
  })
})