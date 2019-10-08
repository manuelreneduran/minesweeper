import React, { Component } from 'react';
import { createBoard, setHiddenMines } from './library/helpers.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null
    };
  }

  componentDidMount() {
    var board = createBoard();
    board = setHiddenMines(board);
    this.setState({
      board
    })
  }

  render() {
    return (
      <div>test</div>
    )
  }
}

