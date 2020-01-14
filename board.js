class Board {
  constructor() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.currentMove = 'X';
  }

  isValidMove(row, col) {
    return this.board[row][col] === 0;
  }

  resetBoard() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
  }

  isBoardFull() {
    return !this.board.flat().join('').includes('0');
  }

  toggleCurrentMove() {
    this.currentMove === 'X' ? this.currentMove = 'O' : this.currentMove = 'X'
  }

  toggleBoard(row, col) {
    this.board[row][col] = this.currentMove.toLowerCase();
  }

  hasWon() {
    if (this.horizWin(this.board)) {
      return this.horizWin(this.board);
    }

    if (this.verticalWin(this.board)) {
      return this.verticalWin(this.board);
    }

    if (this.diagWin(this.board)) {
      return this.diagWin(this.board);
    }
    return false;
  }

  horizWin(matrix = this.board) {
    for (let i = 0; i < matrix.length; i += 1) {
      const currentRow = matrix[i];
      if (currentRow.join('') === 'xxx') {
        return 'x';
      }

      if (currentRow.join('') === 'ooo') {
        return 'o';
      }
    }
    return false;
  }

  verticalWin() {
    // flip the this.board 90degree CW
    const flippedMatrix = [];
    for (let i = 0; i < this.board.length; i += 1) {
      flippedMatrix.push(this.board.map(row => row[i]))
    }
    return this.horizWin(flippedMatrix);
  }

  diagWin() {
    if (this.board[0][0] === 'x' && this.board[1][1] === 'x' && this.board[2][2] === 'x') {
      return 'x';
    }

    if (this.board[0][0] === 'o' && this.board[1][1] === 'o' && this.board[2][2] === 'o') {
      return 'o';
    }

    if (this.board[2][0] === 'x' && this.board[1][1] === 'x' && this.board[0][2] === 'x') {
      return 'x';
    }

    if (this.board[2][0] === 'o' && this.board[1][1] === 'o' && this.board[0][2] === 'o') {
      return 'o';
    }

    return false;
  }
}
