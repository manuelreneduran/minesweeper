import React from 'react';
import ScoreTableCell from './ScoreTableCell.jsx';
import './style.css'

var counter = 0;
const frameNames = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

function ScoreTable({ activeFrame, rollOne, rollTwo, frameTotal }) {
  const frames = frameNames.map(ele => {
    return <ScoreTableCell key={counter++}
    frameName={"frame-" + ele} frameTotal={"frame-total-" + ele} rollOne={"roll-one-" + ele} rollTwo={"roll-two-" + ele}/>
  })

  return (
    <table id="score-table">
      {/* <ScoreTableCell />
      <ScoreTableCell /> */}
      {frames}

    </table>
  )
}

export default ScoreTable;