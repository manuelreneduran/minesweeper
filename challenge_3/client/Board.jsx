import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';
import { createFrames, updatePreviousFrames, handleStrikeAndSpare, handleRollOne, handleRollTwo, handleAllRolls, isGameOver, isRollStrike, isRollSpare, handleGameOver, getNextRoll, getNextFrame, updateCurrentFrame, handleBonusRoll } from './controllers/ScoreTableHelpers.js';



export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollOne: 0,
      gameTotal: 0,
      currentRoll: "rollOne",
      currentFrame: 0,
      strikeAndSpareContainer: [],
      frames: null,
      bonusRollCounter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var frames = createFrames();
    this.setState({
      frames
    })
  }

  handleClick(event) {
    var rollValue = parseInt(event.target.innerText);
    var frameTotal = 0;
    var strikeAndSpareContainer = this.state.strikeAndSpareContainer;
    var frames = this.state.frames;
    var currentFrame = this.state.currentFrame;
    var rollOne = this.state.rollOne;
    var currentRoll = this.state.currentRoll;
    var bonusRollCounter = this.state.bonusRollCounter;
    var gameTotal = this.state.gameTotal;

    this.handleFlow(rollValue, frameTotal, strikeAndSpareContainer, frames, currentFrame, rollOne, currentRoll, bonusRollCounter, gameTotal, event);
  }

  handleFlow(rollValue, frameTotal, strikeAndSpareContainer, frames, currentFrame, rollOne, currentRoll, bonusRollCounter, gameTotal, event) {

    //updates frame 9 if user has a bonus roll
    if (bonusRollCounter > 0) {
      var {frames, bonusRollCounter} = handleBonusRoll(frames, rollValue, bonusRollCounter);

      this.setState({frames, bonusRollCounter});
      return;
    }
    //handle game over
    handleGameOver(currentFrame, frames, bonusRollCounter);

    // updates previous frame totals if there was a strike or spare
    var frames = updatePreviousFrames(strikeAndSpareContainer, frames, rollValue);

    //update certain values if roll one or roll two
    var { frames, currentFrame, frameTotal, rollValue, rollOne } = handleAllRolls(currentRoll, frames, currentFrame, rollValue, frameTotal);

    //add to container if strike or spare
    var { strikeAndSpareContainer, bonusRollCounter } = handleStrikeAndSpare(currentRoll, rollValue, frames, strikeAndSpareContainer, frameTotal, currentFrame);

    //update current frame if roll two
    currentFrame = updateCurrentFrame(currentRoll, currentFrame, rollValue);

    //update roll
    var nextRoll = getNextRoll(this.state.currentRoll, rollValue);

    this.setState({
      rollOne,
      frames,
      currentRoll: nextRoll,
      currentFrame,
      bonusRollCounter
    }, () => {
      if (bonusRollCounter > 0) {
        window.alert(`You get ${bonusRollCounter} bonus rolls! Roll Away!`);
      }
    })
  }

  render() {
    return (
      <div id="board">
       <RollTable rollOne={this.state.rollOne} currentRoll={this.state.currentRoll} handleClick={this.handleClick} />
       {this.state.frames ? <ScoreTable frames={this.state.frames}/> : null}
      </div>
    )
  }
}