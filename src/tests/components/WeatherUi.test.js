import React from 'react';
import { shallow } from 'enzyme';
import WeatherUi, { onDelete } from '../../components/WeatherUi';

jest.mock('../../components/AutomComplete', () => 'AutomCompleteMock');
jest.mock('../../components/Cards', () => 'CardsMock');

describe('WeatherUi', () => {
  const props = {
    getWeatherForCities: jest.fn(),
    getWeather: jest.fn(),
    removeCity: jest.fn(),
    cities: [{ id: 0, name: 'lagos', main: { temp_min: 20, temp_max: 20 } }],
    city: [],
    options: [{ value: 'dummyValue', label: 'dummyLabel' }, { value: 'dummyValue', label: 'dummyLabel' }]
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherUi {...props} />)
  })

  afterEach(() => {
    wrapper = null
    jest.fn().mockClear();
  })

  it('renders correctly', () => {
    const autoComplete = wrapper.find('AutomCompleteMock')

    expect(autoComplete.exists()).toEqual(true);
  });

  describe('when cities has length equals 0', () => {
    beforeEach(() => {
      wrapper.setProps({ cities: []})
    })
  
    it('diplays loader section', () => {
      const loader = wrapper.find('div').at(2)
      expect(loader.props().className).toEqual('loader');
    })
  })

  describe('when city has length greater than 0', () => {
    beforeEach(() => {
      wrapper.setProps({ city: [{ id: 0, name: 'lagos', main: { temp_min: 20, temp_max: 20 } }]})
    })
  
    afterEach(() => {
      wrapper.setProps({ city: []})
    })
  
    it('diplays cards for city weather', () => {
      const cityCards = wrapper.find('CardsMock')
      expect(cityCards.exists()).toEqual(true);
    })

    it('diplays true for displayDeleteButton', () => {
      wrapper.setProps({ city: [{ id: 0, name: 'lagos', main: { temp_min: 20, temp_max: 20 } }]})
      const cityCards = wrapper.find('CardsMock')
      expect(cityCards.props().displayDeleteButton).toEqual(true);
    })
  })

  describe('when city length equals 0', () => {
    it('does not diplay cards for city weather', () => {
      const cityCards = wrapper.find('CardsMock')
      expect(cityCards.props().displayDeleteButton).toEqual(false);
    })
  })

  describe('onDelete', () => {
    it('calls props.removeCity', () => {
      onDelete('dummyId', props.removeCity);
  
      expect(props.removeCity).toHaveBeenCalledWith('dummyId')
    })
  })
});