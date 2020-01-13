function createBoard(n) {
  var board = [];
  while (board.length < n) {
    var row = [];
    for (var i = 0; i < n; i++) {
      row.push(0);
    }
    board.push(row);
  }
  board = setHiddenMines(board, n);
  return board;
}

function createMine(n) {
  var xRandomNum = Math.floor(Math.random() * n)
  var yRandomNum = Math.floor(Math.random() * n);
  return [xRandomNum, yRandomNum];
}

function setMines(board, n) {
  var mine = createMine(n);
  if (board[mine[0]][mine[1]] === -3) {
    setMines(board, n);
  } else {
    board[mine[0]][mine[1]] = -3;
  }
  return board;
}

function setHiddenMines(board, n) {
  for (var i = 0; i < n; i++) {
    board = setMines(board, n);
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

function handleCellOpen(board, y, x, value, target, size, recursing = false) {
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
    debugger;
    window.alert("Game over -- Try again!");
    board = createBoard(size);
    return board;
  } else if (value === -2 || -1 && !recursing) {
    return board;
  }
}

function recursivelyOpen(board, size) {
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
        alteredBoard = board;
        return;
      }

      for (var i = 0; i < board.length; i++) {
        for (var q = 0; q < board[i].length; q++) {
          var cell = board[i][q];
          if (cell === -2) {
            board = handleCellOpen(board, i, q, cell, 0, size, true)
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