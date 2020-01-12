import axios from 'axios';
import { DEFAULT_CITIES } from '../constants'

export const requestCityWeather = async (city) => {
  try {
    const weatherForCity = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=153f2856b7e2589e9a73af614d853f86`);
    return weatherForCity.data;
  } catch (err) {
    return ;
  }
};

export const requestAllCitiesWeather = async () => {
  try {
    return await Promise.all(DEFAULT_CITIES.map(async city => {
      const weatherForCities = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=153f2856b7e2589e9a73af614d853f86`);
      return weatherForCities.data;
    }))

  } catch (err) {
    return ;
  }
};
