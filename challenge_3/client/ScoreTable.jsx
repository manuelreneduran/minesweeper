import React from 'react';
import ScoreTableCell from './ScoreTableCell.jsx';
import './style.css'

let counter = 10;
let frameNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function ScoreTable({ frames }) {

  const loadedFrames = frameNames.map(ele => {
    counter = counter + 1;;
    return <ScoreTableCell key={counter} frame={frames[ele]}/>
  })
  counter = 0;
  return (
    <table id="score-table">
      {loadedFrames}
    </table>
  )
}

export default ScoreTable;