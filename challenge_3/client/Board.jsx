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

    if (isRollTwo(this.state.currentRoll) && !rollIsInValidRange(this.state.rollOne, rollValue)) {
      window.alert("roll is not valid");
      return;
    }
    console.log("roll is in valid range");


    //STRIKE HANDLER
    const frameTotal = calculateFrameTotal(this.state.currentRoll, this.state.rollOne, rollValue)

    var totalCounter = 0;
    if (rollIsStrike(this.state.currentRoll, rollValue)) {
      console.log("roll is a strike");
      totalCounter = strikeCounter + 2;
      this.setState({ strikeCounter: totalCounter });

    } else if (isRollSpare(this.state.currentRoll, frameTotal)) {
      console.log("roll is a spare");
      totalCounter = strikeCounter + 1;
      this.setState({ strikeCounter: totalCounter });
    }



    const gameTotal = this.state.gameTotal + rollValue;

    this.setState(
      {
        [this.state.currentRoll]: rollValue,
        frameTotal,
        gameTotal
    });

    let newRoll;
    if (isRollTwo(this.state.currentRoll)) {
      newRoll = "rollOne";
    } else {
      newRoll = "rollTwo";
    }

    this.setState({
      currentRoll: newRoll
    })
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