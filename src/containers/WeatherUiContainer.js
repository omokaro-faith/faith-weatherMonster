import { connect } from 'react-redux';
import WeatherUi from '../components/WeatherUi';
import { removeCity, getWeatherForCities, getWeatherForCity }  from '../actions/index';
import { getSortedCities, getOptions } from '../selectors';

export const mapStateToProps = state => ({
  cities: state.cities,
  city: getSortedCities(state),
  options: getOptions(state),
  errorMsg: state.message,
});

export const mapDispatchToProps = (dispatch) => ({
  getWeather: city => dispatch(getWeatherForCity(city)),
  getWeatherForCities: () => dispatch(getWeatherForCities()),
  removeCity: id => dispatch(removeCity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherUi);