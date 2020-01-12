import React from 'react';
import { shallow } from 'enzyme';
import Cards from '../../components/Cards';

describe('Cards', () => {
  const props = {
    name: 'dummyName',
    min: 3.0,
    max: 2.0,
    onDeleteClick: () => {},
    displayDeleteButton: false,
  };

  it('renders correctly', () => {
    const wrapper = shallow(<Cards {...props} />)
    const divContainer = wrapper.find('div').at(0)

    expect(divContainer.exists()).toEqual(true);
  });
});