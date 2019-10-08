import React from 'react';

function Cell({ cell, cellClickHandler, row, column }) {
  return (
    <div onClick={e => cellClickHandler(e)} className="cell" x={column} y={row}>
      {cell}
    </div>
  )
}

export default Cell;