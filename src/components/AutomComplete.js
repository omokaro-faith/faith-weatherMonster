import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Select from 'react-select';

const AutomComplete = ({ onChange, selectedOption, options, onInputChange }) => 
   (
    <div className='searchWrapper'>
    <Select
       value={selectedOption}
       isClearable={true}
       onChange={onChange}
       options={options}
       onInputChange={onInputChange}
       />
   </div>
 )

 AutomComplete.propTypes = {
   onChange: PropTypes.func.isRequired,
   selectedOption: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
    onInputChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
 };
 


export default AutomComplete