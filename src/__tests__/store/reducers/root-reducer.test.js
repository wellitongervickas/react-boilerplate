import rootReducer from '../../../store/reducers/root';
import * as rootActions from '../../../store/actions/root';

describe('Root Reducers', () => {

  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      rootInitialized: false,
      rootSagasInitialized: false,
    })
  })

  it('should handle update reset reducer status', () => {
    expect(rootReducer(undefined, {
      type: 'RESET_ROOT_STATE',
    })).toEqual({
      rootInitialized: false,
      rootSagasInitialized: false,
    })
  })

  it('should handle update root status', () => {
    expect(rootReducer(undefined, {
      type: 'SET_ROOT_INITIALIZED',
      payload: true,
    })).toEqual({
      rootInitialized: true,
      rootSagasInitialized: false,
    })
  })

  it('should handle update root sagas status', () => {
    expect(rootReducer(undefined, {
      type: 'SET_ROOT_SAGAS_INITIALIZED',
      payload: true,
    })).toEqual({
      rootInitialized: false,
      rootSagasInitialized: true,
    })
  })
})