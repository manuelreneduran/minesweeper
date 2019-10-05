import React from 'react';
import ScoreTableCell from './ScoreTableCell.jsx';
import './style.css'

let counter = 10;

function ScoreTable({ rollOne, rollTwo, currentFrame, frameTotal, frameNames }) {

  const frames = frameNames.map(ele => {
    counter = counter + 1;;
    return <ScoreTableCell key={counter}
    frameName={ele} currentFrame={currentFrame} frameTotal={frameTotal} rollOne={rollOne} rollTwo={rollTwo}/>
  })
  counter = 0;
  return (
    <table id="score-table">
      {frames}
    </table>
  )
}

export default ScoreTable;