import React from 'react';
import Cell from './Cell.jsx';

function Row({ row, id, cellClickHandler }) {
  var cells = row.map((ele, ind) => {
    return <Cell cellClickHandler={cellClickHandler} cell={ele} key={ind + 10} row={id} column={ind}/>
  })
  return (
    <div id={id} className="rows">
      {cells}
    </div>
  )
}

export default Row;