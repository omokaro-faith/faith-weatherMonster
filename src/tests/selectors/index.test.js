import { getSortedCities, getOptions } from "../../selectors";

const mockState = {
  city: [
    { id: 0, name: 'london', main: { temp_min: 20, temp_max: 2 } },
    { id: 2, name: 'lagos', main: { temp_min: 10, temp_max: 5 } },
    { id: 3, name: 'berlin', main: { temp_min: 5, temp_max: 11 } }
  ],
  cities: [
    { id: 2, name: 'lagos', main: { temp_min: 10, temp_max: 5 } },
  ]
}
describe('getSortedCities', () => {
  describe('when city has data ', () => {
    it('returns sorted list of data based of maximum temperature', () => {
      const sorteCity = [
        { id: 3, name: 'berlin', main: { temp_min: 5, temp_max: 11 } },
        { id: 2, name: 'lagos', main: { temp_min: 10, temp_max: 5 } },
        { id: 0, name: 'london', main: { temp_min: 20, temp_max: 2 } },
      ]

      expect(getSortedCities(mockState)).toEqual(sorteCity)
    });
  });

  describe('when city has not data ', () => {
    it('returns an empty array', () => {

      expect(getSortedCities({ city: [] })).toEqual([])
    });
  });
});

describe('getOptions', () => {
  describe('when cities has data ', () => {
    it('returns key value pair of city options', () => {

      expect(getOptions(mockState)).toEqual([{ label: "lagos", value: "lagos" }])
    });
  });

  describe('when cities has no data ', () => {
    it('returns an empty array', () => {

      expect(getOptions({ cities: []})).toEqual([])
    });
  });
});