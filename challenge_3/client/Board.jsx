import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';
import { gameIsOver, isStrikeCounterActive, rollIsStrike, isNewFrame, isRollTwo, calculateFrameTotal, rollIsInValidRange, isRollSpare } from './controllers/ScoreTableHelpers.js';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollOne: 0,
      rollTwo: 0,
      frameTotal: 0,
      gameTotal: 0,
      currentRoll: "rollOne",
      currentFrame: "gameOver",
      strikeCounter: 0
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    this.handleFlow(event);
  }

  handleFlow(event) {
    const rollValue = parseInt(event.target.innerText);

    this.decrementStrikeCounter(this.state.strikeCounter);
    this.setNewFrame(this.state.currentRoll, this.state.rollOne);
    this.handleRoll(this.state.currentRoll, rollValue, this.state.rollOne);
    this.handleGameOver(this.state.currentFrame, this.state.gameTotal);
  }


  decrementStrikeCounter(strikeCounter) {
    if ( isStrikeCounterActive(strikeCounter) ) {
      strikeCounter = strikeCounter - 1;
      //TODO: UPDATE PREVIOUS FRAME TOTAL IN DOM
      this.setState({
        strikeCounter
      })
    }
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

  handleRoll(currentRoll, rollValue, rollOne) {
    const frameTotal = calculateFrameTotal(currentRoll, rollOne, rollValue)

    var totalCounter = 0;
    if (rollIsStrike(currentRoll, rollValue)) {
      console.log("roll is a strike");
      this.finalizeFrame(rollValue, frameTotal, 2);
    } else if (isRollSpare(currentRoll, frameTotal)) {
      console.log("roll is a spare");
      this.finalizeFrame(rollValue, frameTotal, 1)
    } else {
      this.finalizeFrame(rollValue, frameTotal, 0)
    }
  }

  handleGameOver(currentFrame, gameTotal) {
    if (gameIsOver(currentFrame)) {
      window.alert(`Nice game! Your score is: ${gameTotal}`)
      return;
    }
  }

  getNewRoll(rollValue) {
    let newRoll;
    if (isRollTwo(this.state.currentRoll) || rollValue === 10) {
      return "rollOne";
    } else {
      return "rollTwo";
    }
  }

  finalizeFrame(rollValue, frameTotal, strikeCounter) {
    const gameTotal = this.state.gameTotal + rollValue;
    let newRoll = this.getNewRoll(rollValue);
    strikeCounter = this.state.strikeCounter + strikeCounter;
    this.setState(
      {
        [this.state.currentRoll]: rollValue,
        frameTotal,
        gameTotal,
        strikeCounter: strikeCounter,
        currentRoll: newRoll
    });
  }


  render() {
    return (
      <div id="board">
       <RollTable rollOne={this.state.rollOne} currentRoll={this.state.currentRoll} handleClick={this.handleClick} />
       <ScoreTable rollOne={this.state.rollOne} rollTwo={this.state.rollTwo} frameTotal={this.state.frameTotal}/>

      </div>
    )
  }
}