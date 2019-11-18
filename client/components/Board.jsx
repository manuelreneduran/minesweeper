import React from 'react';
import Row from './Row.jsx';


function Board({ board, cellClickHandler }) {

  var rows = board.map((ele, ind) => {
    return <Row cellClickHandler={cellClickHandler} row={board[ind]} key={ind} id={ind}/>
  })

  return (
    <div className="rows-container">
      {rows}
    </div>
  )
}


export default Board;