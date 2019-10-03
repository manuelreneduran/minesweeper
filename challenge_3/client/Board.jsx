import React, { Component } from 'react';
import RollTable from './RollTable.jsx';
import ScoreTable from './ScoreTable.jsx';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollOne: undefined,
      rollTwo: undefined,
      frameTotal: undefined,
      activeFrame: "frameOne"
    }

    this.changeFrame = this.changeFrame.bind(this);
    this.changeRollOneScore = this.changeRollOneScore.bind(this);
  }

  changeFrame() {
    if (this.state.activeFrame === "frameOne") {
      this.setState({
        activeFrame: "frameTwo"
      })
    } else {
      this.setState({
        activeFrame: "frameOne"
      })
    }
  }

  changeRollOneScore() {
    var randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
    this.setState({
      rollOne: randomNumber
    })
  }

  render() {
    return (
      <div id="board">
       <RollTable/>
       <ScoreTable activeFrame={this.state.activeFrame} rollOne={this.state.rollOne} rollTwo={this.state.rollTwo} frameTotal={this.state.frameTotal}/>
       <button onClick={this.changeFrame}>change frame</button>
       <button onClick={this.changeRollOneScore}>change score</button>
      </div>
    )
  }
}