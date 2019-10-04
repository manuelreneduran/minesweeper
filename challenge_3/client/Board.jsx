import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';
import { gameIsOver, isStrikeCounterActive, isNewFrame, isRollTwo, calculateFrameTotal, rollIsInValidRange, isRollStrike, isRollSpare } from './controllers/ScoreTableHelpers.js';

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
      strikeCounter: 0
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

    //decrements strike counter
    let strikeCounter = this.state.strikeCounter;

    if ( isStrikeCounterActive(strikeCounter) ) {
      strikeCounter = strikeCounter - 1;
      //TODO: UPDATE PREVIOUS FRAME TOTAL IN DOM
      this.setState({
        strikeCounter
      })
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

    var newCounter = 0;
    if (isRollStrike(rollValue)) {
      console.log("roll is a strike");
      newCounter = 2;
    } else if (isRollSpare(frameTotal) && this.state.currentRoll === "rollTwo") {
      console.log("roll is a spare");
      newCounter = 1;
    }

    var totalCounter = strikeCounter + newCounter;

    if (newCounter === 1 || newCounter === 2) {
      this.setState({ strikeCounter: totalCounter });
    }
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