import React from 'react';
import PropTypes from 'prop-types';

import './galleryItem.scss';

function App({
  id,
  name,
  imageURL,
  moves,
  height,
  weight
}) {
  const handleClick = (num) => {
    window.location.href="/#/detail#" + num;
    // window.history.replaceState(null, "Details", "/mp2/detail/#" + num);
  };
  return (
    <div className='gallery-item' onClick={() => {handleClick(id);}}>
      <h3>{id}</h3>
      <img src={imageURL} alt="img"/>
      <h3>{name}</h3>
      <h3>Weight: {weight}</h3>
      <h3>Height: {height}</h3>
      <h3>Moves: {moves}</h3>
    </div>
  );
}

App.proptype = {
  id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  imageURL : PropTypes.string.isRequired,
  moves : PropTypes.number.isRequired,
  height : PropTypes.number.isRequired,
  weight : PropTypes.number.isRequired
}

export default App;