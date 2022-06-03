// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

function validSolution(board) {
  let isValid = true;

  function isUnique(arr) {
    return new Set(arr).size === arr.length;
  }

  function checkRow(board) {
    return board.filter((row) => isUnique(row)).length === board.length;
  }

  function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map((row) => row[i]));
  }

  function getBlockedBoard(board) {
    let blockedBoard = [];

    for (let grid = 0; grid < 9; grid += 3) {
      for (let row = grid; row < grid + 3; row++) {
        for (let i = 0; i < 3; i++) {
          if (!blockedBoard[i + grid]) blockedBoard[i + grid] = [];

          blockedBoard[i + grid] = [
            ...blockedBoard[i + grid],
            ...board[row].slice(i * 3, i * 3 + 3),
          ];
        }
      }
    }

    return blockedBoard;
  }

  function checkZero(board) {
    return board.filter((row) => !row.includes(0)).length === board.length;
  }

  isValid =
    checkZero(board) &&
    checkRow(board) &&
    checkRow(transpose(board)) &&
    checkRow(getBlockedBoard(board));

  return isValid;
}
