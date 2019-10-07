import React, {Component} from 'react';

function ScoreTableCell({ frame }) {

    return (
      <tbody>
          <tr>
            <td>
              {frame[0] ? <p>{frame[0]}</p> : undefined}
            </td>
            <td>
            {frame[1] ? <p>{frame[1]}</p> : undefined}
            </td>
          </tr>
          <tr>
            <td>
            {frame[2] ? <p>{frame[2]}</p> : undefined}
            </td>
          </tr>
      </tbody>
    )
  }


export default ScoreTableCell;