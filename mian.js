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
  }

  const playTurn = () => {
  if(gameBoard.placeMarker(row,col, currentPlayer.marker)){
    if(checkWin()){
        console.log(`${currentPlayer.name} wins!`)
        return;
    }

    if(checkDraw()){
        console.log(`The game is Draw`)
        return;
    }

    switchPlayer();
  }
  else {
    console.log(`Select other cell`)
  }
  }

  return { playTurn };
})();

