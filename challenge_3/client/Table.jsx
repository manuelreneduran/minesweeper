import React from 'react';
import TableCell from './TableCell.jsx';

function Table() {
  const tableStyle = {
    width: '100%',
  };
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const tableRow = numbers.map(ele => {
    return <TableCell num={ele} key={ele}/>
  })

  return (
    <table id="table" style={tableStyle}>
    <tbody>
      <tr>
        {tableRow}
      </tr>
    </tbody>
  </table>
  )
}

export default Table;