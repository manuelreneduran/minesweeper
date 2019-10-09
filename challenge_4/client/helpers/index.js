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

function setAdjacentCells(board, y, x) {

  if (board[y - 1] && board[y -1][x + 1]) {
    board[y - 1][x + 1] = -2;
  }
  if (board[y] && board[y][x + 1]) {
    board[y][x + 1] = -2;
  }
  if (board[y + 1] && board[y + 1][x + 1]) {
    board[y + 1][x + 1] = -2;
  }
  if (board[y + 1] && board[y + 1][x]) {
    board[y + 1][x] = -2;
  }
  if (board[y + 1] && board[y + 1][x - 1]) {
    board[y + 1][x - 1] = -2;
  }
  if (board[y] && board[y][x - 1]) {
    board[y][x - 1] = -2;
  }
  if (board[y - 1] && board[y - 1][x - 1]) {
    board[y - 1][x - 1] = -2;
  }
  if (board[y - 1] && board[y - 1][x]) {
    board[y - 1][x] = -2;
  }
  return board;
}

function checkForMines(board, y, x) {
  var counter = 0;
  if (board[y - 1] && board[y -1][x + 1] && board[y - 1][x + 1] === -3) {
    counter++;
    }
  if (board[y] && board[y][x + 1] && board[y][x + 1] === -3) {
    counter++;
  }
  if (board[y + 1] && board[y + 1][x + 1] && board[y + 1][x + 1] === -3) {
    counter++;
  }
  if (board[y + 1] && board[y + 1][x] && board[y + 1][x] === -3) {
    counter++;
  }
  if (board[y + 1] && board[y + 1][x - 1] && board[y + 1][x - 1] === -3) {
    counter++;
  }
  if (board[y] && board[y][x - 1] && board[y][x - 1] === -3) {
    counter++;
  }
  if (board[y - 1] && board[y - 1][x - 1] && board[y - 1][x - 1] === -3) {
    counter++;
  }
  if (board[y - 1] && board[y - 1][x] && board[y - 1][x] === -3) {
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
    var minesAroundCell = mines || checkForMines(board, y, x);
    if (minesAroundCell > 0) {
    board = setBoard(board, y, x, minesAroundCell)
      return board;
    } else {
      board = setAdjacentCells(board, y, x);
      return board;
    }
  }
}

module.exports = { createBoard, setHiddenMines, handleCellOpen, checkForMines }