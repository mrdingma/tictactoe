
window.onload = function () {
  console.log('loaded')

  const $grid = document.getElementsByClassName("grid")[0];
  const $resetBtn = document.getElementsByClassName("reset")[0];
  const $boardRows = document.getElementsByClassName('row');


  $resetBtn.addEventListener("click", () => resetBoard($boardRows));

  $grid.addEventListener("click", (e) => {
    const $button = e.target;
    const [row, col] = $button.id.slice(1).split('').map(char => Number(char));

    if (gameBoard.isValidMove(row, col)) {
      $button.innerHTML = gameBoard.currentMove;
      gameBoard.toggleBoard(row, col);
      gameBoard.toggleCurrentMove();
      // if winner
      if (gameBoard.hasWon()) {
        alert(`Player ${gameBoard.hasWon().toUpperCase()} has won!`);
        resetBoard($boardRows);
      }
      // if board full
      if (gameBoard.isBoardFull()) {
        alert('Draw!');
        resetBoard($boardRows);
      }
    } else {
      alert('You can\'t move there!');
    }
    console.log(gameBoard.board)
  });

};

