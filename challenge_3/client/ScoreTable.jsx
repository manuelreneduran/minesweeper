import React from 'react';
import ScoreTableCell from './ScoreTableCell.jsx';
import './style.css'

function ScoreTable({ activeFrame, rollOne }) {
  return (
    <table id="score-table">
      <ScoreTableCell id="frame-one" activeFrame={activeFrame} rollOne={rollOne}/>
      <ScoreTableCell/>

    </table>
  )
}

export default ScoreTable;