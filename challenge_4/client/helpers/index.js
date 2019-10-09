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

function setAdjacentCells(board, y, x, target) {

  if (board[y - 1] && board[y -1][x + 1] === target) {
    board[y - 1][x + 1] = -2;
  }
  if (board[y] && board[y][x + 1] === target) {
    board[y][x + 1] = -2;
  }
  if (board[y + 1] && board[y + 1][x + 1] === target) {
    board[y + 1][x + 1] = -2;
  }
  if (board[y + 1] && board[y + 1][x] === target) {
    board[y + 1][x] = -2;
  }
  if (board[y + 1] && board[y + 1][x - 1] === target) {
    board[y + 1][x - 1] = -2;
  }
  if (board[y] && board[y][x - 1] === target) {
    board[y][x - 1] = -2;
  }
  if (board[y - 1] && board[y - 1][x - 1] === target) {
    board[y - 1][x - 1] = -2;
  }
  if (board[y - 1] && board[y - 1][x] === target) {
    board[y - 1][x] = -2;
  }
  return board;
}

function checkAdjacentCells(board, y, x, target) {
  var counter = 0;
  if (board[y - 1] && board[y -1][x + 1] && board[y - 1][x + 1] === target) {
    counter++;
    }
  if (board[y] && board[y][x + 1] && board[y][x + 1] === target) {
    counter++;
  }
  if (board[y + 1] && board[y + 1][x + 1] && board[y + 1][x + 1] === target) {
    counter++;
  }
  if (board[y + 1] && board[y + 1][x] && board[y + 1][x] === target) {
    counter++;
  }
  if (board[y + 1] && board[y + 1][x - 1] && board[y + 1][x - 1] === target) {
    counter++;
  }
  if (board[y] && board[y][x - 1] && board[y][x - 1] === target) {
    counter++;
  }
  if (board[y - 1] && board[y - 1][x - 1] && board[y - 1][x - 1] === target) {
    counter++;
  }
  if (board[y - 1] && board[y - 1][x] && board[y - 1][x] === target) {
    counter++;
  }
  return counter;
}

function setBoard(board, y, x, mines) {
  board[y][x] = mines;
  return board;
}

function handleCellOpen(board, y, x, value, mines) {
  if (value === 0) {
    var minesAroundCell = mines || checkAdjacentCells(board, y, x, -3);
    if (minesAroundCell > 0) {
    board = setBoard(board, y, x, minesAroundCell)
      return board;
    } else {
      board = setAdjacentCells(board, y, x);
      return board;
    }
  }
}

module.exports = { createBoard, setHiddenMines, handleCellOpen, checkAdjacentCells, setAdjacentCells }