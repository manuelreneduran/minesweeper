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
      currentFrame: 9,
      strikeCounter: 0,
      frameNames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.handleFlow(event);
  }

  handleFlow(event) {
    let rollValue = parseInt(event.target.innerText);
    let nextFrame = getNextFrame(this.state.currentFrame);
    let decrementedStrikeCounter = this.state.strikeCounter + decrementStrikeCounter(this.state.strikeCounter);

    this.setNewFrame(this.state.currentRoll, this.state.rollOne, nextFrame);
    this.handleRoll(this.state.currentRoll, rollValue, this.state.rollOne, decrementedStrikeCounter, this.state.gameTotal, nextFrame);
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

  handleRoll(currentRoll, rollValue, rollOne, strikeCounter, gameTotal, nextFrame) {
    let frameTotal = calculateFrameTotal(currentRoll, rollOne, rollValue)
    let counter = handleStrike(currentRoll, rollValue, frameTotal);

    this.finalizeFrame(currentRoll, rollValue, frameTotal, counter, strikeCounter, gameTotal, nextFrame)
  }

  finalizeFrame(currentRoll, rollValue, frameTotal, newStrikeCounter, oldStrikeCounter, gameTotal, nextFrame) {
    gameTotal = gameTotal + rollValue;
    let newRoll = getNextRoll(currentRoll, rollValue);
    newStrikeCounter = oldStrikeCounter + newStrikeCounter;
    this.setState({
      [this.state.currentRoll]: rollValue,
      frameTotal,
      gameTotal,
      strikeCounter: newStrikeCounter,
      currentRoll: newRoll
    }, () => {
      if ( isGameOver(nextFrame) ) {
        handleGameOver(this.state.gameTotal);
        return;
      }
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