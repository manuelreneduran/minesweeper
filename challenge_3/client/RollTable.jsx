import React from 'react';
import RollTableCell from './RollTableCell.jsx';

function RollTable({ handleClick, currentRoll }) {
  const tableStyle = {
    width: '100%',
  };
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const tableRow = numbers.map(ele => {
    return <RollTableCell currentRoll={currentRoll} handleClick={handleClick} num={ele} key={ele}/>
  })

  return (
    <table id="roll-table" style={tableStyle}>
    <tbody>
      <tr>
        {tableRow}
      </tr>
    </tbody>
  </table>
  )
}

export default RollTable;