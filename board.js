class Board {
  constructor() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.currentMove = true;

  }

  toggleX(row, col) {
    this.board[row, col] = 'x';
  }

  toggleO(row, col) {
    this.board[row, col] = 'o';
  }

  horizWin(matrix) {
    for (let i = 0; i < matrix.length; i += 1) {
      const currentRow = matrix[i];

      if (currentRow.join('').match(/x/gi).length === 3) {
        return true;
      }

      if (currentRow.join('').match(/y/gi).length === 3) {
        return true;
      }
    }
    return false;
  }

  verticalWin(matrix) {
    // flip the matrix 90degree CW
    const flippedMatrix = [];
    for (let i = 0; i < matrix.length; i += 1) {
      flippedMatrix.push(matrix.map(row => row[i]))
    }
    return this.horizWin(flippedMatrix);
  }

  diagWin(matrix) {
    if (matrix[0][0] === 'x' && matrix[1][1] === 'x' && matrix[2][2] === 'x') {
      return true;
    }

    if (matrix[0][0] === 'o' && matrix[1][1] === 'o' && matrix[2][2] === 'o') {
      return true;
    }

    if (matrix[2][0] === 'x' && matrix[1][1] === 'x' && matrix[0][2] === 'x') {
      return true;
    }

    if (matrix[2][0] === 'o' && matrix[1][1] === 'o' && matrix[0][2] === 'o') {
      return true;
    }

    return false;
  }
}
