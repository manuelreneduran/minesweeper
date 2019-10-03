import React from 'react';
import ScoreTableCell from './ScoreTableCell.jsx';
import './style.css'

var counter = 0;
const frameNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

function ScoreTable({ rollOne, rollTwo, frameTotal }) {

  const frames = frameNames.map(ele => {
    return <ScoreTableCell key={counter++}
    frameName={"frame-" + ele} frameTotal={"frame-total-" + ele} rollOne={"roll-one-" + ele} rollTwo={"roll-two-" + ele}/>
  })

  return (
    <table id="score-table">
      {frames}
    </table>
  )
}

export default ScoreTable;