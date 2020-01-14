
const gameBoard = new Board();


const resetBoard = ($boardRows) => {
  gameBoard.resetBoard();

  for (let i = 0; i < $boardRows.length; i += 1) {
    const $currentRowBtns = $boardRows[i].children;
    for (let j = 0; j < $currentRowBtns.length; j += 1) {
      $currentRowBtns[j].innerHTML = '';
    }
  }
}