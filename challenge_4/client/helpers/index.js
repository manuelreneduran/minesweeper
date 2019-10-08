function createBoard() {
  var board = [];
  while (board.length < 10) {
    var row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    board.push(row);
  }
  board = setHiddenMines(board);
  return board;
}

function createMine() {
  var xRandomNum = Math.floor(Math.random() * 10)
  var yRandomNum = Math.floor(Math.random() * 10);
  return [xRandomNum, yRandomNum];
}

function setMines(board) {
  var mine = createMine();
  if (board[mine[0]][mine[1]] === -3) {
    setMines(board);
  } else {
    board[mine[0]][mine[1]] = -3;
  }
  return board;
}

function setHiddenMines(board) {
  for (var i = 0; i < 10; i++) {
    board = setMines(board);
  }
  return board;
}

function checkAdjacentCells(board, y, x) {
  return 0;
}

function setBoard(board, y, x, mines) {

  board[y][x] = mines;
  return board;
}

function handleCellOpen(board, y, x, value, mines) {
  if (value === 0) {
    var minesAroundCell = mines || checkAdjacentCells(board, y, x);
    if (minesAroundCell > 0) {
      board = setBoard(board, y, x, minesAroundCell)
      return board;
    } else {

    }
  }
}

module.exports = { createBoard, setHiddenMines, handleCellOpen }