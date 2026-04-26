const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

// Winning combinations
const winConditions = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

// Add event listeners
cells.forEach(cell => cell.addEventListener("click", cellClick));

// Handle cell click
function cellClick() {
  const index = this.getAttribute("data-index");

  if (board[index] !== "" || !running) return;

  board[index] = currentPlayer;
  this.textContent = currentPlayer;

  checkWinner();
}

// Check winner
function checkWinner() {
  let won = false;

  for (let condition of winConditions) {
    const [a, b, c] = condition;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      won = true;
      break;
    }
  }

  if (won) {
    statusText.textContent = `Player ${currentPlayer} Wins!`;
    running = false;
  } 
  else if (!board.includes("")) {
    statusText.textContent = "Draw!";
    running = false;
  } 
  else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
  }
}

// Reset game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  running = true;

  cells.forEach(cell => cell.textContent = "");
  statusText.textContent = "Player X's Turn";
}