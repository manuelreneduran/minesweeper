import React, { Component } from 'react';
import { createBoard, setHiddenMines } from './helpers/index.js';
import Board from './components/Board.jsx';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null
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
    var y = e.target.attributes[2].value;
    var x = e.target.attributes[1].value;
    console.log(y, x);
  }

  render() {
    return (
      <div id="board">
        {this.state.board ? <Board cellClickHandler={this.cellClickHandler} board={this.state.board}/> : null}
      </div>
    )
  }
}

