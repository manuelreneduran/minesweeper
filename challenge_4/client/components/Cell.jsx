import React from 'react';

function Cell({ cell, cellClickHandler, row, column }) {
  return (
    <div id={`cell-${row}-${column}`}onClick={e => cellClickHandler(e)} className="cell" x={column} y={row}>
      {cell}
    </div>
  )
}

export default Cell;