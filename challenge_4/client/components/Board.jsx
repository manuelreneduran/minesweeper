import React from 'react';
import Row from './Row.jsx';

function Board({ board }) {
  return (
    <Row row={board[0]}/>
  )
}

export default Board;