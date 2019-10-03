import React from 'react'

function RollTableCell({ num, handleClick, currentRoll }) {
  return (
    <td onClick={e => handleClick(e, currentRoll)} className="rolltable-cell">{num}</td>
  )
}

export default RollTableCell;