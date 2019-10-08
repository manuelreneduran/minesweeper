import React, { Component } from 'react';
import { createBoard, setHiddenMines, handleCellOpen } from './helpers/index.js';
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
    var y = parseInt(e.target.attributes[3].value);
    var x = parseInt(e.target.attributes[2].value);
    var value = parseInt(e.target.innerText);

    this.setState({
      clickedCoord: [y, x]
    }, () => {
      var board = handleCellOpen(this.state.board, this.state.clickedCoord[0], this.state.clickedCoord[1], value);
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

