import React from 'react';
import Row from './Row.jsx';
import { connect } from "react-redux";


// const mapStateToProps = state => {
//   return {
//     board: state.board,
//   };
// };

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

// const Board = connect(mapStateToProps)(ConnectedBoard);

export default Board;