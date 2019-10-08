import React from 'react';
import { createBoard, setHiddenMines } from '../client/helpers/index.js';
import renderer from 'react-test-renderer';

describe('creating a board', () => {
  var board = createBoard();
  it('should have 10 rows', () => {
    var shortBoard = Object.assign([], board);
    shortBoard.splice(0);

    expect(board.length).toBe(10);
    expect(shortBoard.length).not.toEqual(10);
  })

  it('should have 10 columns', () => {
    var rowsEqualTen = true;
    for (var i = 0; i < 10; i++) {
      var row = board[i];
      if (!row.length === 10) {
        rowsEqualTen = false;
        return;
      }
    }
    expect(rowsEqualTen).toBe(true);
  });

  it('should have 10 mines', () => {
    board = setHiddenMines(board);
    var mineCounter = 0;
    for (var row of board) {
      for (var cell of row) {
        if (cell === -3) {
          mineCounter++;
        }
      }
    }
    expect(mineCounter).toBe(10);
  })
})