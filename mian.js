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


class Player{
    constructor(name,marker){
        this.name = name;
        this.marker = marker;
    }
}