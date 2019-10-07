import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';
import { isGameOver, isStrikeCounterActive, isRollStrike, isNewFrame, isRollTwo, calculateFrameTotal, isRollSpare, handleGameOver, decrementStrikeCounter, handleStrike, getNextRoll, getNextFrame } from './controllers/ScoreTableHelpers.js';



export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollOne: 0,
      gameTotal: 0,
      currentRoll: "rollOne",
      currentFrame: 0,
      strikeCounter: 0,
      frames: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let frames = [];
    for (let i = 0; i < 10; i++) {
      frames.push([0, 0, 0]);
    };
    this.setState({
      frames
    })
  }

  handleClick(event) {
    this.handleFlow(event);
  }

  handleFlow(event) {
    let frames = this.state.frames;
    let rollValue = parseInt(event.target.innerText);
    let frameTotal = 0;

    frames[this.state.currentFrame][2] = frameTotal;


    //if currentRoll is "rollOne", set value to frames[this.state.currentFrame][0]
         //else set value to frames[this.state.currentFrame][1]
         //set frame total
    let currentFrame = this.state.currentFrame;

    frames[this.state.currentFrame][2] = frameTotal;
    let rollOne = this.state.rollOne;


       //change the roll
      //if it's a 10, set roll to rollOne
    if (this.state.currentRoll === "rollOne") {
      frames[this.state.currentFrame][0] = rollValue;
      frameTotal = rollValue;
      rollOne = rollValue;
    } else {
      frames[this.state.currentFrame][1] = rollValue;
      frameTotal = frames[this.state.currentFrame][0] + rollValue;
      currentFrame = this.state.currentFrame + 1;
    }

    //strike handler

    if (isRollStrike(this.state.currentRoll, rollValue) && this.state.currentRoll === "rollOne") {
      currentFrame = getNextFrame(currentFrame);
    }
    let decrementedStrikeCounter = this.state.strikeCounter + decrementStrikeCounter(this.state.strikeCounter);

    let strikeCounter = handleStrike(this.state.currentRoll, rollValue, frameTotal);
    strikeCounter = decrementedStrikeCounter + strikeCounter;

    //update frameTotal
    frames[this.state.currentFrame][2] = frameTotal;

    //update gameTotal
    let gameTotal = this.state.gameTotal + rollValue;


    let nextRoll = getNextRoll(this.state.currentRoll, rollValue);
    this.setState({
      rollOne,
      frames,
      currentRoll: nextRoll,
      gameTotal,
      currentFrame,
      strikeCounter
    })

    // let nextFrame = getNextFrame(this.state.currentFrame);
    // let decrementedStrikeCounter = this.state.strikeCounter + decrementStrikeCounter(this.state.strikeCounter);

    // this.setNewFrame(this.state.currentRoll, this.state.rollOne, nextFrame);
    // this.handleRoll(this.state.currentRoll, rollValue, this.state.rollOne, decrementedStrikeCounter, this.state.gameTotal, nextFrame);
  }

  // setNewFrame(currentRoll, rollOne, nextFrame) {
  //   if (isNewFrame(currentRoll) || rollOne === 10) {
  //     this.setState( {
  //       rollOne: 0,
  //       rollTwo: 0,
  //       frameTotal: 0,
  //       currentFrame: nextFrame
  //     } )
  //   }
  // }

  // handleRoll(currentRoll, rollValue, rollOne, strikeCounter, gameTotal, nextFrame) {
  //   let frameTotal = calculateFrameTotal(currentRoll, rollOne, rollValue)
  //   let counter = handleStrike(currentRoll, rollValue, frameTotal);

  //   this.finalizeFrame(currentRoll, rollValue, frameTotal, counter, strikeCounter, gameTotal, nextFrame)
  // }

  // finalizeFrame(currentRoll, rollValue, frameTotal, newStrikeCounter, oldStrikeCounter, gameTotal, nextFrame) {
  //   gameTotal = gameTotal + rollValue;
  //   let nextRoll = getNextRoll(currentRoll, rollValue);
  //   newStrikeCounter = oldStrikeCounter + newStrikeCounter;
  //   this.setState({
  //     [this.state.currentRoll]: rollValue,
  //     frameTotal,
  //     gameTotal,
  //     strikeCounter: newStrikeCounter,
  //     currentRoll: nextRoll
  //   }, () => {
  //     if ( isGameOver(nextFrame) ) {
  //       handleGameOver(this.state.gameTotal);
  //       return;
  //     }
  //   });
  // }



  render() {
    return (
      <div id="board">
       <RollTable rollOne={this.state.rollOne} currentRoll={this.state.currentRoll} handleClick={this.handleClick} />
       {this.state.frames ? <ScoreTable frames={this.state.frames}/> : null}
      </div>
    )
  }
}