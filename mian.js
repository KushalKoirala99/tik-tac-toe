let gameBoard = (function () {
  let board = [];
  for (let i = 0; i < 3; i++) {
    board[i] = [];
    for(let j= 0 ; j < 3 ; j++){
        board[i].push('')
    }
  }

  getBoard = () => board;

  return { getBoard };
})();


console.log(gameBoard.getBoard())
