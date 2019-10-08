import React from 'react';
import Row from './Row.jsx';

function Board({ board }) {
  var rows = board.map((ele, ind) => {
    return <Row row={board[ind]} key={ind} id={ind}/>
  })

  return (
    <div className="rows-container">
      {rows}
    </div>
  )
}

export default Board;