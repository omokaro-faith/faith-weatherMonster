import Reducer from '../../reducers';
const initialState = {
  cities: [],
  city: [],
}

describe('Reducer', () => {
  it('should set up default values', () => {
    const state = Reducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
      cities: [],
      city: [],
      message: ''
    });
  });
  
  it('should set city weather', () => {
    const city = { id: 0, name: 'lagos', main: { temp_min: 20, temp_max: 20 } };

    const action = {
      type: 'SET_CITY_WEATHER',
      city
    }

    const state = Reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      cities: [],
      city: [city]
    });
  });

    
  it('should set cities weather', () => {
    const cities = [
      { id: 0, name: 'london', main: { temp_min: 20, temp_max: 2 } },
      { id: 2, name: 'lagos', main: { temp_min: 10, temp_max: 5 } },
      { id: 3, name: 'berlin', main: { temp_min: 5, temp_max: 11 } }
  ];

    const action = {
      type: 'SET_CITIES_WEATHER',
      cities
    }

    const state = Reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      cities,
      city: []
    });
  });

  it('should set cities weather', () => {
    const cities = [
      { id: 0, name: 'london', main: { temp_min: 20, temp_max: 2 } },
      { id: 2, name: 'lagos', main: { temp_min: 10, temp_max: 5 } },
      { id: 3, name: 'berlin', main: { temp_min: 5, temp_max: 11 } }
  ];

    const action = {
      type: 'SET_CITIES_WEATHER',
      cities
    }

    const state = Reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      cities,
      city: []
    });
  });

  it('should remove city', () => {
    const modifiedState = {
      ...initialState,
      city: [
        { id: 0, name: 'london', main: { temp_min: 20, temp_max: 2 } },
        { id: 2, name: 'lagos', main: { temp_min: 10, temp_max: 5 } },
        { id: 3, name: 'berlin', main: { temp_min: 5, temp_max: 11 } }
    ]}

    const action = {
      type: 'REMOVE_CITY',
      id: 2
    }

    const state = Reducer(modifiedState, action);

    expect(state).toEqual({
      ...initialState,
      cities: [],
      city: [{ id: 0, name: 'london', main: { temp_min: 20, temp_max: 2 } }, { id: 3, name: 'berlin', main: { temp_min: 5, temp_max: 11 } }],
      message: ''
    });
  });
});