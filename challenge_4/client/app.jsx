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
  }

  componentDidMount() {
    var board = createBoard();
    this.setState({
      board
    })
  }

  render() {
    return (
      <div id="board">
        {this.state.board ? <Board board={this.state.board}/> : null}
      </div>
    )
  }
}

