import React, { useState, useEffect } from 'react';
import { createBoard, setHiddenMines, handleCellOpen, recursivelyOpen } from './helpers/index.js';
import Board from './components/Board.jsx';
import './style.css';

function App() {
  var [board, setBoard] = useState(createBoard(10));
  var [clickedCoord, setClickedCoord] = useState(undefined);
  var [size, setSize] = useState(10);

  function createNewBoard(n) {
    var board = createBoard(n);
    setBoard(board);
  }

  function cellClickHandler(e) {
    e.persist()
    var target = e.target;
    var y = parseInt(target.attributes[3].value);
    var x = parseInt(target.attributes[2].value);

    var value = parseInt(target.attributes[4].value);

    setClickedCoord([x, y]);

    board = handleCellOpen(board, y, x, value, 0, size);
    board = recursivelyOpen(board, size);

    setBoard(board);
  }

  function handleSizeSubmit(e) {
    e.preventDefault();
    createNewBoard(size);
  }

  return (
    <>
      <div id="title-container">
        <h1 id="title">MineSweeper</h1>
      </div>
      <div id="board">
        {board ? <Board cellClickHandler={cellClickHandler} board={board}/> : null}
      </div>
    </>
  )
}

export default App;
