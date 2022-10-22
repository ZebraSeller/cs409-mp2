import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './navbar.scss';

function App({navTitle}) {
  return (
    <div id='nav-bar-container'>
      <h2 className='nav-bar-title'>{navTitle}</h2>
      <Link className='nav-bar-button' to='/mp2/' id='home-button'>Home</Link>
      <Link className='nav-bar-button' to='/mp2/list' id='list'>List View</Link>
      <Link className='nav-bar-button' to='/mp2/gallery' id='gallery'>Gallery</Link>
    </div>
  );
}

App.proptype = {
  navTitle : PropTypes.string.isRequired
}

export default App;