import React from 'react'

function RollTableCell({ num, handleClick }) {
  return (
    <td onClick={e => handleClick(e)} className="rolltable-cell">{num}</td>
  )
}

export default RollTableCell;