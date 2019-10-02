import React, { Component } from 'react';
import Table from './Table.jsx';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id="board">
       <Table/>
      </div>
    )
  }
}