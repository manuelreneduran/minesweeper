import React, { useState, useEffect } from 'react';
import { createBoard, setHiddenMines, handleCellOpen, recursivelyOpen } from './helpers/index.js';
import Board from './components/Board.jsx';
import './style.css';

function App() {
  var [board, setBoard] = useState(createBoard(10));
  var [clickedCoord, setClickedCoord] = useState(undefined);
  var [size, setSize] = useState(undefined);

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
    board = handleCellOpen(board, y, x, value, 0);
    board = recursivelyOpen(board);
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
      <div id="size-input-container">
        <form onSubmit={e => handleSizeSubmit(e)} id="size-form">
          <label id="size-label">Adjust board size (10-100)</label>
          <input onChange={e => setSize(e.target.value)}type="number" id="size-input" name="size"
          min="10" max="100"></input>
          <button id="size-button">Adjust</button>
        </form>
      </div>
    </>
  )
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       board: null,
//       clickedCoord: null,
//       size: null
//     };
//     this.cellClickHandler = this.cellClickHandler.bind(this);
//   }

//   componentDidMount() {
//     this.createNewBoard(10);
//   }

//   createNewBoard(n) {
//     var board = createBoard(n);
//     this.setState({
//       board
//     })
//   }

//   cellClickHandler(e) {
//     e.persist()
//     var target = e.target;
//     var y = parseInt(target.attributes[3].value);
//     var x = parseInt(target.attributes[2].value);
//     var value = parseInt(target.attributes[4].value);
//     var coords = [y, x];
//     this.setState({
//       clickedCoord: [y, x]
//     })
//     var board = handleCellOpen(this.state.board, y, x, value, 0);
//     board = recursivelyOpen(board);
//     this.setState({
//       board
//     })
//   }

//   handleChange(e) {
//     var key = e.target.name;
//     var value = e.target.value;
//     this.setState({
//       [key]: value
//     })
//   }

//   handleSizeSubmit(e) {
//     e.preventDefault();
//     var size = this.state.size;
//     this.createNewBoard(size);
//   }

//   render() {
//     return (
//       <>
//         <div id="title-container">
//           <h1 id="title">MineSweeper</h1>
//         </div>
//         <div id="board">
//           {this.state.board ? <Board cellClickHandler={this.cellClickHandler} board={this.state.board}/> : null}
//         </div>
//         <div id="size-input-container">
//           <form onSubmit={e => this.handleSizeSubmit(e)} id="size-form">
//             <label id="size-label">Adjust board size (10-100)</label>
//             <input onChange={e => this.handleChange(e)}type="number" id="size-input" name="size"
//             min="10" max="100"></input>
//             <button id="size-button">Adjust</button>
//           </form>
//         </div>
//       </>
//     )

//   }
// }


export default App;
