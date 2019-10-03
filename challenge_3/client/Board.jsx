import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';
import { gameIsOver, isNewFrame, isRollTwo, calculateFrameTotal, rollIsInValidRange  } from './controllers/ScoreTableHelpers.js';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollOne: 1,
      rollTwo: 0,
      frameTotal: 0,
      gameTotal: 0,
      currentRoll: "rollOne",
      currentFrame: "frameOne",
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    this.handleFlow(event);
  }

  handleFlow(event) {
    const rollValue = parseInt(event.target.innerText);

    if (gameIsOver(this.state.currentFrame)) {
      window.alert(`Nice game! Your score is: ${this.state.gameTotal}`)
      return;
    }

    if (isNewFrame(this.state.currentRoll)) {
      console.log("is new frame");
      this.setState( {
        rollOne: 0,
        rollTwo: 0,
        frameTotal: 0
      } )
    }

    console.log("game's not over");

    if (isRollTwo(this.state.currentRoll) && !rollIsInValidRange(this.state.rollOne, rollValue)) {
      window.alert("roll is not valid");
      return;
    }
    console.log("roll is in valid range");

    const frameTotal = calculateFrameTotal(this.state.currentRoll, this.state.rollOne, rollValue)
    const gameTotal = this.state.gameTotal + rollValue;

    this.setState(
      {
        [this.state.currentRoll]: rollValue,
        frameTotal,
        gameTotal
    });
  }


  render() {
    return (
      <div id="board">
       <RollTable handleClick={this.handleClick} />
       <ScoreTable rollOne={this.state.rollOne} rollTwo={this.state.rollTwo} frameTotal={this.state.frameTotal}/>

      </div>
    )
  }
}