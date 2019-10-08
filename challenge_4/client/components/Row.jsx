import React from 'react';
import Cell from './Cell.jsx';

function Row({ row, id }) {
  var cells = row.map((ele, ind) => {
    return <Cell cell={ele} key={ind + 10}/>
  })
  return (
    <div id={id} className="rows">
      {cells}
    </div>
  )
}

export default Row;