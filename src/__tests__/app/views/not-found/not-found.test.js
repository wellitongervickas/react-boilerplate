import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from '../../../../app/views/not-found';
import renderer from 'react-test-renderer';

describe('NotFound', () => {
  it('renders without crashing', () => {
    shallow(<NotFound />);
  });

  it('renders with snapshot', () => {
    const tree = shallow(<NotFound />)
    expect(tree).toMatchSnapshot();
  });
})