import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';
import { createFrames, updatePreviousFrames, handleStrikeAndSpare, handleRollOne, handleRollTwo, handleAllRolls, isGameOver, isRollStrike, isRollSpare, handleGameOver, getNextRoll, getNextFrame } from './controllers/ScoreTableHelpers.js';



export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollOne: 0,
      gameTotal: 0,
      currentRoll: "rollOne",
      currentFrame: 0,
      strikeAndSpareContainer: [],
      frames: null
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
    this.handleFlow(event);
  }

  handleFlow(event) {
    var rollValue = parseInt(event.target.innerText);
    var frameTotal = 0;
    var strikeAndSpareContainer = this.state.strikeAndSpareContainer;
    var frames = this.state.frames;
    var currentFrame = this.state.currentFrame;
    var rollOne = this.state.rollOne;
    var currentRoll = this.state.currentRoll;

    // updates previous frame totals if there was a strike or spare
    var frames = updatePreviousFrames(strikeAndSpareContainer, frames, rollValue);

    //update certain values if roll one or roll two
    var { frames, currentFrame, frameTotal, rollValue, rollOne } = handleAllRolls(currentRoll, frames, currentFrame, rollValue, frameTotal);

    //add to container if strike or spare
    debugger;
    strikeAndSpareContainer = handleStrikeAndSpare(currentRoll, rollValue, frames, strikeAndSpareContainer, frameTotal, currentFrame);

    //update current frame if roll two
    if (currentRoll === "rollTwo") {
      currentFrame = currentFrame + 1;
    }

    if (isRollStrike(this.state.currentRoll, rollValue) && this.state.currentRoll === "rollOne") {
      currentFrame = getNextFrame(currentFrame);
    }

    //update gameTotal
    var gameTotal = this.state.gameTotal + rollValue;


    var nextRoll = getNextRoll(this.state.currentRoll, rollValue);
    this.setState({
      rollOne,
      frames,
      currentRoll: nextRoll,
      gameTotal,
      currentFrame,
    }, () => {
      if (isGameOver(this.state.currentFrame)) {
        handleGameOver(this.state.gameTotal);
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