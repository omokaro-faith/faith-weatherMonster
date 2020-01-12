import React from 'react';
import PropTypes from 'prop-types';

 const Cards = ({ name, min, max, onDeleteClick, displayDeleteButton}) => {
   const containerStyle = displayDeleteButton ? 'cardContainerWithDeleteButton' : 'cardContainerWithoutDeleteButton'
   return  (
    <div className='card' onClick={onDeleteClick}>
   { displayDeleteButton && <p className='deleteButton' > X </p> }
     <div className={containerStyle}>
       <h3>{name}</h3>
       <p>Min: {min} &#8490;</p>
       <p>Max: {max} &#8490;</p>
     </div>
    </div>
 )
 }

 Cards.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func,
  displayDeleteButton: PropTypes.bool, 
};


 export default Cards;