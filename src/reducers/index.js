const initialState = {
  cities: [],
  city: [],
  message: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CITY_WEATHER':
      const { city } = action;
      if (state.city.length === 0) return {...state, city: [...state.city, city]};
      const duplicateCity = state.city.find((item) => item.name === city.name);

      return duplicateCity ? {...state, message: 'Duplicate City Not Allowed In List' } : {...state, city: [...state.city, city], message: '' }
    case 'SET_CITIES_WEATHER':
      const { cities } = action;
      return {...state, cities};
    case 'REMOVE_CITY':
      const { id } = action;
      const filteredCities = state.city.filter((item) => item.id !== id);
      return { ...state, city: filteredCities, message: ''}
    default:
      return state;
  }
}