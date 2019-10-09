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

function handleCellOpen(board, y, x, value, target, recursing = false) {
  if (value === 0 || recursing) {
    var minesAroundCell = checkAdjacentCells(board, y, x, -3);
    if (minesAroundCell > 0) {
      board = setBoard(board, y, x, minesAroundCell)
      return board;
    } else {
      board = setAdjacentCells(board, y, x, target);
      return board;
    }
  } else if (value === -3) {
    window.alert("Game over -- Try again!");
    board = createBoard();
    return board;
  } else if (value === -2 || -1 && !recursing) {
    return board;
  }
}

function recursivelyOpen(board) {
  var alteredBoard;

    function iterateBoard(board) {
      var finishCounter = 0;
      for (var row of board) {
        for (var cell of row) {
          if (cell === -2) {
            finishCounter++;
          }
        }
      }

      if (finishCounter === 0) {
        return;
      }

      for (var i = 0; i < board.length; i++) {
        for (var q = 0; q < board[i].length; q++) {
          var cell = board[i][q];
          if (cell === -2) {
            board = handleCellOpen(board, i, q, cell, 0, true)
            if ((board[i][q] === -2)) {
              board[i][q] = -1;
            }
          }
        }
      }
      alteredBoard = board;
      iterateBoard(alteredBoard);
    }

  iterateBoard(board);
  return alteredBoard;
}

module.exports = { createBoard, setHiddenMines, handleCellOpen, checkAdjacentCells, setAdjacentCells, recursivelyOpen }