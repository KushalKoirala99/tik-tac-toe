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


let gameController = (function(){
 let players = [];
 players.push(new Players('Player 1' , "X"))
 players.push(new Players('Player 2' , "O"))

 

 return {players}
})()


console.log(gameController.players)