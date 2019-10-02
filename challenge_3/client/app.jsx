import React, { Component } from 'react';
import Board from './Board.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="main-container">
        <Board/>
      </div>
    )
  }
}

