import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';
import { gameIsOver } from './controllers/ScoreTableHelpers.js';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollOne: undefined,
      rollTwo: undefined,
      frameTotal: undefined,
      currentRoll: "rollOne",
      currentFrame: "frameOne"
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event, value) {
    this.handleFlow(event, value);
  }

  handleFlow(event, value) {
    if (gameIsOver(this.state.currentFrame)) {
      console.log("game is over");
      return;
    } else {
      console.log("game's not over");
      this.setState({[value]: event.target.innerText});
    }
  }


  render() {
    return (
      <div id="board">
       <RollTable handleClick={this.handleClick} currentRoll={this.state.currentRoll}/>
       <ScoreTable rollOne={this.state.rollOne} rollTwo={this.state.rollTwo} frameTotal={this.state.frameTotal}/>

      </div>
    )
  }
}