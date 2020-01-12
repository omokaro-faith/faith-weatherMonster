import "regenerator-runtime/runtime";
import { requestAllCitiesWeather, requestCityWeather } from "../services";

export const setCityWeatherSuccess = city => ({
  type: 'SET_CITY_WEATHER',
  city,
});

export const setCityWeatherError = () => ({
  type: 'SET_CITY_WEATHER_ERROR',
  error: { message: 'Could not set city'}
});

export const setCitiesWeatherSuccess = cities => ({
  type: 'SET_CITIES_WEATHER',
  cities,
});

export const setCitiesWeatherError = () => ({
  type: 'SET_CITIES_WEATHER_ERROR',
  error: { message: 'Could not succesfully set cities'}
});

export const removeCity = id => ({
  type: 'REMOVE_CITY',
  id
});

export const getWeatherForCity = city => async (dispatch) => {
  try {
    const data = await requestCityWeather(city)

    return dispatch(setCityWeatherSuccess(data));
  } catch (err) {
    return(dispatch(setCityWeatherError()));
  }
};

export const getWeatherForCities = () => async (dispatch) => {
  try {
    const data = await requestAllCitiesWeather()
  
    return dispatch(setCitiesWeatherSuccess(data));
  } catch (err) {
    return(dispatch(setCitiesWeatherError()));
  }
};


