import React, {Component} from 'react';

function ScoreTableCell( {frameName, frameTotal, rollOne, rollTwo }) {
  return (
    <tbody id={frameName}>
        <tr>
          <td>
            <p id={rollOne}></p>
          </td>
          <td>
            <p id={rollTwo}></p>
          </td>
        </tr>
        <tr>
          <td>
            <p id={frameTotal}></p>
          </td>
        </tr>
    </tbody>
  )
}

export default ScoreTableCell;