import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';
import { isGameOver, isStrikeCounterActive, isRollStrike, isNewFrame, isRollTwo, calculateFrameTotal, isRollSpare, handleGameOver, decrementStrikeCounter, handleStrike, getNextRoll, getNextFrame } from './controllers/ScoreTableHelpers.js';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollOne: 0,
      rollTwo: 0,
      frameTotal: 0,
      gameTotal: 0,
      currentRoll: "rollOne",
      currentFrame: 0,
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
    const nextFrame = getNextFrame(this.state.currentFrame);
    handleGameOver(nextFrame, this.state.gameTotal);

    const decrementedStrikeCounter = this.state.strikeCounter + decrementStrikeCounter(this.state.strikeCounter);

    this.setNewFrame(this.state.currentRoll, this.state.rollOne, nextFrame);

    this.handleRoll(this.state.currentRoll, rollValue, this.state.rollOne, decrementedStrikeCounter, this.state.gameTotal);

  }

  setNewFrame(currentRoll, rollOne, nextFrame) {
    if (isNewFrame(currentRoll) || rollOne === 10) {
      console.log("is new frame");
      this.setState( {
        rollOne: 0,
        rollTwo: 0,
        frameTotal: 0,
        currentFrame: nextFrame
      } )
    }
  }

  handleRoll(currentRoll, rollValue, rollOne, strikeCounter, gameTotal) {
    const frameTotal = calculateFrameTotal(currentRoll, rollOne, rollValue)

    var counter = handleStrike(currentRoll, rollValue, frameTotal);

    this.finalizeFrame(currentRoll, rollValue, frameTotal, counter, strikeCounter, gameTotal)
  }

  finalizeFrame(currentRoll, rollValue, frameTotal, newStrikeCounter, oldStrikeCounter, gameTotal) {
    gameTotal = gameTotal + rollValue;
    let newRoll = getNextRoll(currentRoll, rollValue);
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



  render() {
    return (
      <div id="board">
       <RollTable rollOne={this.state.rollOne} currentRoll={this.state.currentRoll} handleClick={this.handleClick} />
       <ScoreTable frameNames={this.state.frameNames}/>

      </div>
    )
  }
}