import React, { Component } from 'react';
import { createBoard, setHiddenMines, handleCellOpen, recursivelyOpen } from './helpers/index.js';
import Board from './components/Board.jsx';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      clickedCoord: null
    };
    this.cellClickHandler = this.cellClickHandler.bind(this);
  }

  componentDidMount() {
    var board = createBoard();
    this.setState({
      board
    })
  }

  cellClickHandler(e) {
    e.persist()
    var target = e.target;
    var y = parseInt(target.attributes[3].value);
    var x = parseInt(target.attributes[2].value);
    var value = parseInt(target.attributes[4].value);

    //for testing purposes
    this.setState({
      clickedCoord: [y, x]
    }, () => {
      var board = handleCellOpen(this.state.board, y, x, value, 0);
      board = recursivelyOpen(board);
      this.setState({board});
    })
  }

  render() {
    return (
      <div id="board">
        {this.state.board ? <Board cellClickHandler={this.cellClickHandler} board={this.state.board}/> : null}
      </div>
    )
  }
}

