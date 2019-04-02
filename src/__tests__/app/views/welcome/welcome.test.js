import React from 'react';
import { shallow } from 'enzyme';
import { Welcome } from '../../../../app/views/welcome';
import renderer from 'react-test-renderer';

describe('Welcome', () => {
  it('renders without crashing', () => {
    shallow(<Welcome />);
  });

  it('renders with snapshot', () => {
    const tree = shallow(<Welcome />)
    expect(tree).toMatchSnapshot();
  });
})