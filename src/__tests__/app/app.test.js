import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../app';
import renderer from 'react-test-renderer';
import { mapStateToProps, mapDispatchToProps } from '../../app';

describe('App', () => {

  const initialState = {
    root: {
      rootInitialized: false,
      rootSagasInitialized: false,

    }
  }

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders with snapshot', () => {
    const tree = shallow(<App />).dive()
    expect(tree).toMatchSnapshot();
  });

  it('should test initial map state to props', () => {
    expect(mapStateToProps(initialState).rootInitialized).toEqual(false);
    expect(mapStateToProps(initialState).rootSagasInitialized).toEqual(false);
  })

  it('should test initial map actions to props', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setRootInitialized();
    mapDispatchToProps(dispatch).setRootSagasInitialized();
    expect(dispatch.mock.calls.length).toBe(2)
  })
})