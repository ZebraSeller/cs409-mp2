import React from 'react';
import PropTypes from 'prop-types';

function App({
  content,
  func=null
}) {
  const rows = [];
  content.forEach(el => {
    const item = 
        // <tr onClick={() => {handleClick(el[0])}}>
        <tr onClick={() => {func(el[0])}}>
          <th>{el[0]}</th>
          <th>{el[1]}</th>
        </tr>;
    rows.push(item)
  });
  return (
    <table id="result-table">
      <tbody>
        <tr>
          <th>ID</th>
          <th>Pokemon Name</th>
        </tr>
        {rows}
      </tbody>
    </table>
  );
}

App.proptype = {
  content : PropTypes.array.isRequired
}


export default App;
