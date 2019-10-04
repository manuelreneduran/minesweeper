import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';
import { isGameOver, isStrikeCounterActive, isRollStrike, isNewFrame, isRollTwo, calculateFrameTotal, isRollInValidRange, isRollSpare } from './controllers/ScoreTableHelpers.js';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollOne: 0,
      rollTwo: 0,
      frameTotal: 0,
      gameTotal: 0,
      currentRoll: "rollOne",
      currentFrame: "frameOne",
      strikeCounter: 0,
      frameNames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.handleFlow(event);
  }

  handleFlow(event) {
    const rollValue = parseInt(event.target.innerText);
    const decrementedStrikeCounter = this.state.strikeCounter + this.decrementStrikeCounter(this.state.strikeCounter);

    this.setNewFrame(this.state.currentRoll, this.state.rollOne);
    this.handleRoll(this.state.currentRoll, rollValue, this.state.rollOne, decrementedStrikeCounter, this.state.gameTotal);
    this.handleGameOver(this.state.currentFrame, this.state.gameTotal);
  }


  decrementStrikeCounter(strikeCounter) {
    return isStrikeCounterActive(strikeCounter) ? -1 : 0;
  }

  setNewFrame(currentRoll, rollOne) {
    if (isNewFrame(currentRoll) || rollOne === 10) {
      console.log("is new frame");
      this.setState( {
        rollOne: 0,
        rollTwo: 0,
        frameTotal: 0
      } )
    }
  }

  handleRoll(currentRoll, rollValue, rollOne, strikeCounter, gameTotal) {
    const frameTotal = calculateFrameTotal(currentRoll, rollOne, rollValue)

    var counter = this.handleStrike(currentRoll, rollValue, frameTotal);

    this.finalizeFrame(currentRoll, rollValue, frameTotal, counter, strikeCounter, gameTotal)
  }

  getNewRoll(currentRoll, rollValue) {
    let newRoll;
    if (isRollTwo(currentRoll) || rollValue === 10) {
      return "rollOne";
    } else {
      return "rollTwo";
    }
  }

  handleStrike(currentRoll, rollValue, frameTotal) {
    let counter = 0;
    if (isRollStrike(currentRoll, rollValue)) {
      console.log("roll is a strike");
      counter = 2;
    } else if (isRollSpare(currentRoll, frameTotal)) {
      console.log("roll is a spare");
      counter = 1
    }
    return counter;
  }

  finalizeFrame(currentRoll, rollValue, frameTotal, newStrikeCounter, oldStrikeCounter, gameTotal) {
    gameTotal = gameTotal + rollValue;
    let newRoll = this.getNewRoll(currentRoll, rollValue);
    newStrikeCounter = oldStrikeCounter + newStrikeCounter;
    this.setState(
      {
        [this.state.currentRoll]: rollValue,
        frameTotal,
        gameTotal,
        strikeCounter: newStrikeCounter,
        currentRoll: newRoll
    });
  }

  handleGameOver(currentFrame, gameTotal) {
    if (isGameOver(currentFrame)) {
      window.alert(`Nice game! Your score is: ${gameTotal}`)
      return;
    }
  }

  render() {
    return (
      <div id="board">
       <RollTable rollOne={this.state.rollOne} currentRoll={this.state.currentRoll} handleClick={this.handleClick} />
       <ScoreTable frameNames={this.state.frameNames}/>

      </div>
    )
  }
}