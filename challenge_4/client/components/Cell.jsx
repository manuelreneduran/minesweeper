import React from 'react';

function Cell({ cell, cellClickHandler, row, column }) {
  return (
    <div id={`cell-${row}-${column}`}onClick={e => cellClickHandler(e)} className="cell" x={column} y={row} cellvalue={cell}>
      {cell > 0 || cell === -2 || cell === -1 ? <p>cell</p> : null}
    </div>
  )
}

export default Cell;