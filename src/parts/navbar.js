import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.scss';

function App({navTitle}) {
  return (
    <div id='nav-bar-container'>
      <h2 className='nav-bar-title'>{navTitle}</h2>
      <Link className='nav-bar-button' to='/' id='home-button'>Home</Link>
      <Link className='nav-bar-button' to='/list' id='list'>List View</Link>
      <Link className='nav-bar-button' to='/gallery' id='gallery'>Gallery</Link>
      <Link className='nav-bar-button' to='/detail' id='detail'>Detail</Link>
    </div>
  );
}


export default App;