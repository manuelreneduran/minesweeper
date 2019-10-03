import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';
import { gameIsOver, isRollTwo, rollIsInValidRange  } from './controllers/ScoreTableHelpers.js';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollOne: 5,
      rollTwo: undefined,
      frameTotal: undefined,
      currentRoll: "rollTwo",
      currentFrame: "frameOne"
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event, value) {
    this.handleFlow(event, value);
  }

  handleFlow(event, value) {
    const rollValue = parseInt(event.target.innerText);
    if (gameIsOver(this.state.currentFrame)) {
      console.log("game is over");
      return;
    }
    console.log("game's not over");
    if (isRollTwo(this.state.currentRoll) && !rollIsInValidRange(this.state.rollOne, rollValue)) {
      console.log("roll is not in valid range");
      return;
    }
    console.log("roll is in valid range");
    this.setState({[value]: rollValue});
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