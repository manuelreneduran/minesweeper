import React from 'react';
import { createBoard, setHiddenMines } from '../client/library/helpers.js';
import renderer from 'react-test-renderer';

describe('creating a board', () => {
  it('should return a 10x10 board', () => {
    var board = createBoard();
    expect(board.length).toBe(10);

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
    var board = createBoard();
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