import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../app';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders with snapshot', () => {
  const tree = shallow(<App />).dive()
  expect(tree).toMatchSnapshot();
});