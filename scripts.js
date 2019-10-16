// 1. Basic Setup
var ogirinalBoard = [];

const huPlayer = "O";
const aiPlayer = "X";

// Winning combinations for the tic-tac-toe board
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none";
  // Just a fancy way to make the array be every number from zero to nine
  originalBoard = Array.from(Array(9).keys());
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turnClick(square) {
  turn(square.target.id, huPlayer);
}

function turn(squareId, player) {
  console.log(originalBoard);
  originalBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWon = checkWin(originalBoard, player);
  if (gameWon) gameOver(gameWon);
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
  let gameWon = null;
  for(let [index, win] of winCombos.entries()) {
    // Fancy way to say
    // Has the player played in every spot that counts as a win for that win?
    // If so, it means the player has WON!
    if(win.every(elem => plays.indexOf(elem > -1)) {
      gameWon = { index: index, player: player };
      break;
    })
  }
  return gameWon;
}

function gameOver(gameWon) {
  // We will have two for loops
  // First of all we want to hightlight all the squares that are part of the winning combination
  // And then we wanna make it so the user cannot click anymore squares, because the game is over!
  for(let index of winCombos[gameWon.index]) {
    
  }
}
