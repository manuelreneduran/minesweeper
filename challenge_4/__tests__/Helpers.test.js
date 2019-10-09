import React from 'react';
import { createBoard, setHiddenMines, handleCellOpen, checkAdjacentCells, setAdjacentCells } from '../client/helpers/index.js';
import renderer from 'react-test-renderer';

describe('creating a board', () => {
  var board = createBoard();
  it('should have 10 rows', () => {
    var shortBoard = Object.assign([], board);
    shortBoard.splice(0);

    jestExpect(board.length).toBe(10);
    jestExpect(shortBoard.length).not.toEqual(10);
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
    jestExpect(rowsEqualTen).toBe(true);
  });

  it('should have 10 mines', () => {
    var mineCounter = 0;
    for (var row of board) {
      for (var cell of row) {
        if (cell === -3) {
          mineCounter++;
        }
      }
    }
    jestExpect(mineCounter).toBe(10);
  })
});

describe('handling opening cells', () => {
  it('should set a new cell value when there are adjacent mines', () => {
    var board = [[0, 0, 0], [0, 0, 0]];
    board = handleCellOpen(board, 0, 0, 0, 5);
    expect(board[0][0]).to.equal(5);
  })

  it('should count the number of mines adjacent to cell', () => {
    var board = [
    [0, -3, 0, -3, 0],
    [0, -3, 0, -3, 0],
    [0, -3, -3, -3, 0],
    [0, -3, 0, -3, 0],
    [0, -3, 0, -3, 0]];

    var counter = checkAdjacentCells(board, 0, 0, -3);
    expect(counter).to.equal(2);

    counter = checkAdjacentCells(board, 0, 2, -3);
    expect(counter).to.equal(4);

    counter = checkAdjacentCells(board, 0, 4, -3);
    expect(counter).to.equal(2);

    counter = checkAdjacentCells(board, 2, 4, -3);
    expect(counter).to.equal(3);

    counter = checkAdjacentCells(board, 4, 4, -3);
    expect(counter).to.equal(2);

    counter = checkAdjacentCells(board, 4, 2, -3);
    expect(counter).to.equal(4);

    counter = checkAdjacentCells(board, 4, 0, -3);
    expect(counter).to.equal(2);

    counter = checkAdjacentCells(board, 2, 0, -3);
    expect(counter).to.equal(3);

    counter = checkAdjacentCells(board, 3, 2, -3);
    expect(counter).to.equal(7);
  })

  it('should open all adjacent cells if no mines adjacent', () => {
    var board = [
      [-3, 0, 0, 0, -3],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [-3, 0, 0, 0, -3]
    ];

    board = setAdjacentCells(board, 2, 2, 0);
    var openAdjacentCells = checkAdjacentCells(board, 2, 2, -2);
    expect(openAdjacentCells).to.equal(8);
  })
})