import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  setCitiesWeatherError, 
  setCityWeatherSuccess, 
  setCitiesWeatherSuccess, 
  removeCity, 
  getWeatherForCity, 
  getWeatherForCities } from '../../actions';

const mockCities = [
  { id: 0, name: 'london', main: { temp_min: 20, temp_max: 2 } },
  { id: 2, name: 'lagos', main: { temp_min: 10, temp_max: 5 } },
  { id: 3, name: 'berlin', main: { temp_min: 5, temp_max: 11 } }
]

jest.mock('../../services', () => ({
  requestCityWeather: city => new Promise((resolve) => {
    if (city) {
      resolve({
        ok: true,
        status: 200,
        headers: {
        },
        data: [{name: city }],
      });
    } else {
      throw new Error
    }
  }, reject => reject({ ok: false, status: 500 })),
  requestAllCitiesWeather: () => new Promise((resolve) => {
      resolve({
        ok: true,
        status: 200,
        headers: {
        },
        data: mockCities,
    });
  }, reject => reject({ ok: false, status: 500 })),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  describe('getWeatherForCity', () => {
    it('dispatches success action', async () => {
      const store = mockStore();
      const actual = getWeatherForCity('london');

      await store.dispatch(actual);
      expect(store.getActions()).toEqual([{
        city: {
          data: [{ name: 'london'}], 
          headers: {}, 
          ok: true, 
          status: 200 }, 
          type: "SET_CITY_WEATHER"
        }]);
    });

    it('dispatches failure action', async () => {
      const store = mockStore();
      const actual = getWeatherForCity();


      await store.dispatch(actual);
      expect(store.getActions()).toEqual([{ 
        error: { 
        message: "Could not set city" }, 
        type: "SET_CITY_WEATHER_ERROR"
      }]);
    });
  });

  describe('getWeatherForCities', () => {
    it('dispatches success action', async () => {
      const store = mockStore();
      const actual = getWeatherForCities();

      await store.dispatch(actual);
      expect(store.getActions()).toEqual([{
        cities: { data: mockCities, headers: {}, ok: true, 
          status: 200 }, 
          type: "SET_CITIES_WEATHER"
        }]);
    });
  });

  describe('removeCity', () => {
    it('should dispatch an action to remove city', () => {
      const store = mockStore({ city: mockCities });

      const action = removeCity(2);

      expect(action).toEqual({id: 2, type: "REMOVE_CITY"});
    });
  });
})