import React from 'react';
import ScoreTableCell from './ScoreTableCell.jsx';
import './style.css'

var counter = 0;
const frameNames = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

function ScoreTable({ activeFrame, rollOne, rollTwo, frameTotal }) {
  const frames = frameNames.map(ele => {
    return <ScoreTableCell key={counter++} activeFrame={activeFrame} rollOne={rollOne} rollTwo={rollTwo}
    frameName={"frame" + ele} frameTotal={frameTotal}/>
  })

  return (
    <table id="score-table">
      <ScoreTableCell activeFrame={activeFrame} rollOne={rollOne} frameName={"frameOne"}/>
      <ScoreTableCell activeFrame={activeFrame} rollOne={rollOne} frameName={"frameTwo"}/>
      {/* {frames} */}

    </table>
  )
}

export default ScoreTable;