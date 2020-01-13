// TODO: add reset board button

// first move: X

window.gameboard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

const horizWin = (matrix) => {
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
};

const verticalWin = (matrix) => {
  // flip the matrix 90degree CW
  const flippedMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    flippedMatrix.push(matrix.map(row => row[i]))
  }
  return horizWin(flippedMatrix);
};

const diagWin = (matrix) => {
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
};


// onClick game board:

// set innerHTML of the element to be the current move

// set the corresponding move on the game board

// check if there is a winner
// if winner, alert who won then reset board


// on Click reset board
// clear the innerHTML of all the elements