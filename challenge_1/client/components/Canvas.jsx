import React from 'react';
import Item from './Item.jsx';

function Canvas({ data }) {
  var count = 0;
  var listOfItems = data.map(ele => {
    return <li key={count++}><Item data={ele}/></li>
  })
  return (
    <div id="canvas">
      <ul id="list">
        {listOfItems}
      </ul>
    </div>
  )
}

export default Canvas;