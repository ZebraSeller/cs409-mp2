import React from 'react';
import Axios from 'axios';
import {createRoot} from 'react-dom/client';
import GalleryItem from './galleryItem';
// import './gallery.scss';

function App() {
  const search = async () => {
    const dataHolder = document.getElementById('gallery-items-container');
    const filter = document.getElementById('filter-selection').value;
    let cards = [];

    //FETCH from PokeAPI
    for (let i = 1; i < 906; i++) {
      const result = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + i, {
      }).catch(function (error) {
        console.log(error);
        return;
      });
      let item = <GalleryItem
        id={result.data.id}
        name={result.data.name}
        imageURL={result.data.sprites.front_default}
        moves={result.data.moves.length}
        height={result.data.height}
        weight={result.data.weight}
      />;
      switch (filter) {
        case "wS":
          if (result.data.weight <= 150) {
            cards.push(item);
          }
          break;
        case "wM":
          if (result.data.weight > 150 && result.data.weight <= 500) {
            cards.push(item);
          }
          break;
        case "wL":
          if (result.data.weight > 500 && result.data.weight <= 1250) {
            cards.push(item);
          }
          break;
        case "wXL":
          if (result.data.weight > 1250) {
            cards.push(item);
          }
          break;
        default:
          cards.push(item);
      }
    }

    console.log(cards);

    const root = createRoot(dataHolder);
    root.render(cards);
  };
  React.useEffect(() => {
    search();
  });
  
  return (
    <div id='gallery-container'>
      <h1>Pokemon Gallery</h1>
      <label for="filter">Filter: </label>
      <select name="filter" id="filter-selection">
        <option value="none">None</option>
        <option value="wS">Light Weight &#40; &gt; 0 &#41;</option>
        <option value="wM">Medium Weight &#40; &gt; 150 &#41;</option>
        <option value="wL">Heavy Weight &#40; &gt; 500 &#41;</option>
        <option value="wXL">Extra Heavy Weight &#40; &gt; 1250 &#41;</option>
      </select>
      <button onClick={search}>Apply Filter</button>
      <div id="gallery-items-container">
        <h1>Please wait while the resouces are being loaded...</h1>
      </div>
    </div>
  );
}

export default App;

// async function fetchAPI() {
//   let items = [];
//   for (let i = 1; i < 5; i++) {
//     const result = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + i, {
//     }).catch(function (error) {
//       console.log(error);
//       return;
//     });
//     let item = <GalleryItem
//       id={result.data.id}
//       name={result.data.name}
//       imageURL={result.data.sprites.front_default}
//       moves={result.data.moves.length}
//       height={result.data.height}
//       weight={result.data.weight}
//     />;
//     items.push(item);
//   }
//   console.log(items);
// };