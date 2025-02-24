let gameBoard = (function () {
  let board = [];
  for (let i = 0; i < 3; i++) {
    board[i] = [];
    for (let j = 0; j < 3; j++) {
      board[i].push("");
    }
  }

  getBoard = () => board;

  let placeMarker = (row, col, marker) => {
    if (board[row][col] === "") {
      board[row][col] = marker;
      return true;
    }
    return false;
  };

  return { getBoard, placeMarker };
})();

class Players {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
  }
}

let gameController = (function () {
  let players = [];
  players.push(new Players("Player 1", "X"));
  players.push(new Players("Player 2", "O"));

  let currentPlayer = players[0];

  const switchPlayer = () => {
    currentPlayer = (currentPlayer = players[0]) ? players[1] : players[0];
  };

  const checkWin = () => {
    const board = gameBoard.getBoard();

    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] !== "" &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      )
        return true;

      if (
        board[0][i] !== "" &&
        board[0][i] === board[1][i] &&
        board[0][i] == board[2][i]
      )
        return true;
    }

    if (
      board[0][0] !== "" &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    )
      return true;
    if (
      board[0][2] !== "" &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    )
      return true;

    return false;
  };

  const checkDraw = () => {
    const board = gameBoard.getBoard();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  };

  const playTurn = () => {
    if (gameBoard.placeMarker(row, col, currentPlayer.marker)) {
        updateBoard();


      if (checkWin()) {
        document.getElementById('game-status').textContent = `${currentPlayer.name} wins!`;
        disableBoard();
        return;
      }

      if (checkDraw()) {
        document.getElementById("game-status").textContent = "The game is a Draw";
        disableBoard();
        return
      }

      switchPlayer();
      document.getElementById("game-status").textContent = `${currentPlayer.name}'s turn`;
    } else {
        document.getElementById("game-status").textContent = "Select other cell";
    }
  };
  
  const updateBoard = () => {
   const board = gameBoard.getBoard();
   const cells = document.querySelectorAll('.cell');
  
   cells.forEach(cell => {
      const row = cell.getAttribute('data-row')
      const col = cell.getAttribute('data-col')
      cell.textContent = board[row][col]
   })
  };

  const disableBoard = () => {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.disabled = true;
    })
  };

  return { playTurn };
})();

const cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener('click',(e) => {
        const row = parseInt(e.target.getAttribute("data-row"))
        const col = parseInt(e.target.getAttribute("data-col"))
        gameController.playTurn(row,cell)
    });
})
