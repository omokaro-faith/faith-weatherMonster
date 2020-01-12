import React from 'react';
import { shallow } from 'enzyme';
import Select from 'react-select';
import AutomComplete from '../../components/AutomComplete';

describe('AutomComplete', () => {
  const props = {
    onChange: () => {},
    selectedOption: { value: 'dummyValue', label: 'dummyLabel' },
    options: [{ value: 'dummyValue', label: 'dummyLabel' }, { value: 'dummyValue', label: 'dummyLabel' }]
  };

  it('renders correctly', () => {
    const wrapper = shallow(<AutomComplete {...props} />)
    const search = wrapper.find(Select)

    expect(search.exists()).toEqual(true);
  });
});