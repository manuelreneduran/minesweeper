import React from 'react'

function RollTableCell({ num, handleClick, rollOne, currentRoll }) {
  if (currentRoll === "rollOne") {
    rollOne = 0;
  }
  return (
    <>
    {rollOne + num > 10 ? null :
      <td onClick={e => handleClick(e)} className="rolltable-cell">{num}</td>
    }
    </>
  )
}

export default RollTableCell;