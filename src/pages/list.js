import React from 'react';
import {createRoot} from 'react-dom/client';
import LinkedTable from '../parts/linkedTable';
import Axios from 'axios';

import './list.scss';

function App() {
  
  const search = async () => {
    const dataHolder = document.getElementById('data-holder');
    const textBoxValue = document.getElementById("search-bar").value;
    const sorting = document.getElementById("sort").value;
    dataHolder.innerHTML = "Search Results";

    //FETCH API from PokeAPI
    const result = await Axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1500', {
    }).catch(function (error) {
      console.log(error);
      dataHolder.innerHTML = "Search Failed, Check your input";
      return;
    });
    console.log(result);

    //Create Array to Hold all items
    let nameList = [];
    result.data.results.forEach(el => {
      const index = nameList.length + 1;
      const content = [index, el.name, el.url];
      nameList.push(content);
    });

    //Sort Array based on sorting selected.
    switch (sorting) {
      case "idA":
        nameList.sort(
          function(a, b){return a[0] - b[0]}
        );
        break;
      case "idD":
        nameList.sort(
          function(a, b){return b[0] - a[0]}
        );
        break;
      case "nameA":
        nameList.sort(
          function(a, b){return a[1].toUpperCase().localeCompare(b[1].toUpperCase())}
        );
        break;
      case "nameD":
        nameList.sort(
          function(a, b){return a[1].toUpperCase().localeCompare(b[1].toUpperCase())}
        );
        nameList.reverse();
        break;
      default:
        nameList.sort(
          function(a, b){return a[0] - b[0]}
        );
    }

    let searchResults = [];
    for (let i = 0; i < nameList.length; i++) {
      if (nameList[i][1].includes(textBoxValue)) searchResults.push(nameList[i]);
    }
    console.log(searchResults);

    const linkedTable = <LinkedTable content={searchResults}/>;
    const root = createRoot(dataHolder);
    root.render(linkedTable);
  };
  React.useEffect(() => {search();});
  return (
    <div id='list-container'>
      <h1>LIST VIEW</h1>
      <h4>To Display All Pokemons, Press Search With No Keywords.</h4>
      <div id="search-container">
        <label for="search-bar" className="text">Search Pokemons:</label>
        <input type="text" id="search-bar"></input>
        <label for="sort" className="text">Sort By:</label>
        <select id="sort">
          <option value="idA">ID Ascending</option>
          <option value="idD">ID Descending</option>
          <option value="nameA">Name Ascending</option>
          <option value="nameD">Name Descending</option>
        </select>
        <button onClick={search}>Search</button>
      </div>
      <div id="data-holder">
      </div>
    </div>
  );
}

export default App;