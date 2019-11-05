import React, { Component } from 'react';


function Cell({ cell, cellClickHandler, row, column }) {
  var divStyle = {
    backgroundColor: 'purple',
  };
  return (
    <div id={`cell-${row}-${column}`}
    onClick={e => cellClickHandler(e)}
    style={cell === 0 || cell === -3 ? divStyle : null} className="cell"
    x={column}
    y={row}
    cellvalue={cell}>

      {cell > 0 || cell === -2 ? cell
      : null}

    </div>
  )
}



export default Cell;