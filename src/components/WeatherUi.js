import React, { useEffect, useState } from 'react';
import debounce from "lodash.debounce";
import PropTypes from 'prop-types';
import AutomComplete from './AutomComplete';
import Cards from './Cards';

export const onDelete = (id, removeCity) => {
  removeCity(id)
}

 const WeatherUi = ({ getWeatherForCities,  cities, removeCity, getWeather, city, options, errorMsg, onSearch }) => {
  const [selectedOption, setSelectedOptions] = useState(null);
  const [error, setError] = useState('');
  const [filteredSearch, setfilteredSearch] = useState(null);
  
  useEffect(() => {
    getWeatherForCities();
  }, []);
  
  const onChange = (obj) => {
    if (obj && obj.value) {
      getWeather(obj.value)
    }

    setSelectedOptions(obj)
  }

  const onInputChange = (value) => {
    const searchCities = cities.filter((item) => {
      const itemlowerCase = item.name.toLowerCase()
      const valueLowerCase = value.toLowerCase()

      return itemlowerCase.indexOf(valueLowerCase) !== -1;
  })

  setfilteredSearch(searchCities)
}

  let displayCities = null;
  const filteredCities = filteredSearch || cities


  if (city.length) {
    displayCities = city.map(item => (<Cards key={item.id} 
      name={item.name} 
      min={item.main.temp_min} 
      max={item.main.temp_max} 
      displayDeleteButton={true}
      onDeleteClick={() => onDelete(item.id, removeCity)}/>))
  } else {
    displayCities = filteredCities.map(item => (<Cards key={item.id} 
      name={item.name} 
      min={item.main.temp_min} 
      max={item.main.temp_max} 
      displayDeleteButton={false}
      />)) 
    }

   return (
    <div className='wrapper'>
       <h1>Weather Monster </h1>
       {errorMsg && <p className='errorMsg'> {errorMsg} </p>}
      <AutomComplete onChange={onChange} selectedOption={selectedOption} options={options} onInputChange={debounce(onInputChange, 1000)} />
      <div className='cardContainer'>
        {  displayCities }
     </div>
     {!cities.length && <div className="loader"></div>}
   </div>
   )
 }

 WeatherUi.propTypes = {
  getWeatherForCities: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  city: PropTypes.array.isRequired,
  errorMsg: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
};

 export default WeatherUi;