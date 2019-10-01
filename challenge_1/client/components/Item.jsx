import React from 'react';

function Item({ data }) {
  return (
    <div id="item">
      <p>{data.category2}</p>
      <p>{data.date}</p>
      <p>{data.description}</p>
    </div>
  )
}

export default Item;