import { mapStateToProps, mapDispatchToProps } from "../../containers/WeatherUiContainer";

jest.mock('../../components/WeatherUi', () => 'WeatherUiMock');

jest.mock('../../selectors', () => ({
  getOptions: () => ([{label: 'berlin', value: 'berlin'}, {label: 'london', value: 'london'}, {label: 'lagos', value: 'lagos'}]),
  getSortedCities: () => ([]),
}));

describe('WeatherUiContainer', () => {
  describe('mapStateToProps', () => {
    it('returns expected value', () => {
      const state = {
        message: 'dummyMessage',
        cities: [],
      }
      const expected = {
        cities: [],
        city: [],
        errorMsg: 'dummyMessage',
        options: [{label: 'berlin', value: 'berlin'}, {label: 'london', value: 'london'}, {label: 'lagos', value: 'lagos'}]
      };

      const result = mapStateToProps(state);

      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();

    afterEach(() => {
      dispatch.mockClear();
    });

    it('should dispatch an action to get weather for cities', () => {
      mapDispatchToProps(dispatch).getWeatherForCities();

      expect(dispatch.mock.calls[0][0]).toEqual(expect.any(Function));
    });

    it('should dispatch an action to get weather for a city', () => {
      mapDispatchToProps(dispatch).getWeather('london');

      expect(dispatch.mock.calls[0][0]).toEqual(expect.any(Function));
    });

    it('should dispatch an action to remove city by id', () => {
      mapDispatchToProps(dispatch).removeCity(2);

      expect(dispatch.mock.calls[0][0]).toEqual({
        id: 2,
        type: 'REMOVE_CITY',
      });
    });
  });
});
