const gameBoard = new Board();
const scoreBoard = new ScoreBoard();

const resetBoard = ($boardRows) => {
  gameBoard.resetBoard();

  for (let i = 0; i < $boardRows.length; i += 1) {
    const $currentRowBtns = $boardRows[i].children;
    for (let j = 0; j < $currentRowBtns.length; j += 1) {
      $currentRowBtns[j].innerHTML = '';
    }
  }
}

const addWin = (player) => {
  const $scoreBoard = document.getElementsByClassName(`${player}wins`)[0];
  scoreBoard.addWin(player);
  $scoreBoard.innerHTML = scoreBoard.tracker[player];
}
