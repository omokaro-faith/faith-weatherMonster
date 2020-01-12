import { createSelector } from 'reselect'

const citySelector = state => state.city
const citiesSelector = state => state.cities

export const getSortedCities = createSelector(
  citySelector,
  city => city.sort((a, b) => b.main.temp_max - a.main.temp_max)
)

export const getOptions  = createSelector(
  citiesSelector,
  cities => {
    const defaultArray = [];

    cities.forEach((city, index) => {
      defaultArray.push({ value:  city.name, label: city.name })
    })
  
    return defaultArray;
  }
)
