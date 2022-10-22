import React from 'react';
import Axios from 'axios';
import {useLocation} from 'react-router-dom';
import {createRoot} from 'react-dom/client';

import './detail.scss'

function App() {
  const pageURL = useLocation();
  let detailContent;
  const fetchAPI = async (index) => {
    const result = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + index, {
    }).catch(function (error) {
      console.log(error);
      detailContent = <h2>Fetch Failed</h2>;;
      return;
    });
    console.log(result);
    let typeString = '';
    result.data.types.forEach(el => {
      if (typeString.length !== 0) {
        typeString += ", ";
      }
      typeString += el.type.name;
    });
    detailContent = 
    <div id="info-container">
      <table id="detail-table">
        <tr>
          <th>ID</th>
          <th>{result.data.id}</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>{result.data.name}</th>
        </tr>
        <tr>
          <th>Image</th>
          <th>
            <img src={result.data.sprites.front_default} alt="img not found" width="320px"/>
            <img src={result.data.sprites.back_default} alt="img not found" width="320px"/>
          </th>
        </tr>
        <tr>
          <th>Species</th>
          <th>{result.data.species.name}</th>
        </tr>
        <tr>
          <th>Base Experience</th>
          <th>{result.data.base_experience}</th>
        </tr>
        <tr>
          <th>Height</th>
          <th>{result.data.height}</th>
        </tr>
        <tr>
          <th>Weight</th>
          <th>{result.data.weight}</th>
        </tr>
        <tr>
          <th>Type</th>
          <th>{typeString}</th>
        </tr>
        <tr>
          <th>Number of Moves</th>
          <th>{result.data.moves.length}</th>
        </tr>
        <tr>
          <th>Additional Artwork</th>
          <th>
            <img src={result.data.sprites.other.home.front_default} alt="img not found" width="320px"/>
            <img src={result.data.sprites.other.dream_world.front_default} alt="img not found" width="320px"/>
          </th>
        </tr>
      </table>
    </div>;
  };

  const prevPage = () => {
    window.location.href="/detail/#" + (parseInt(pageURL.hash.replace('#', '')) - 1);
  }
  const nextPage = () => {
    window.location.href="/detail/#" + (parseInt(pageURL.hash.replace('#', '')) + 1);
  }

  React.useEffect(() => { //run on load.
    console.log("hash is " + pageURL.hash);
    if (pageURL.hash !== '') {
      fetchAPI(pageURL.hash.replace('#', ''));
      const dataHolder = createRoot(document.getElementById("detail-holder"));
      setTimeout(() => {dataHolder.render(detailContent);}, 250);
    }
  });

  return (
    <div id='detail-container'>
      <h1>Details</h1>
      <div id="detail-holder"></div>
      <button className='detail-button' onClick={prevPage}>Previous</button>
      <button className='detail-button' onClick={nextPage}>Next</button>
    </div>
  );
}

export default App;