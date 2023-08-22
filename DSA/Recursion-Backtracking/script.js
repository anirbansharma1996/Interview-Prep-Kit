//1. Implement Factorial Calculation using Recursion:

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


//2. Generate All Permutations of a String:

function permuteString(str) {
  if (str.length === 0) {
    return [""];
  }

  const firstChar = str[0];
  const remainingChars = str.slice(1);
  const permutationsOfRemaining = permuteString(remainingChars);
  const allPermutations = [];

  for (const perm of permutationsOfRemaining) {
    for (let i = 0; i <= perm.length; i++) {
      const newPerm = perm.slice(0, i) + firstChar + perm.slice(i);
      allPermutations.push(newPerm);
    }
  }

  return allPermutations;
}


//3. Implement the Tower of Hanoi Problem using Recursion:

function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

//4. Solve the N-Queens Problem using Backtracking:

function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") {
        return false;
      }
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q") {
        return false;
      }
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q") {
        return false;
      }
    }
    return true;
  }

  function placeQueens(row) {
    if (row === n) {
      result.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        placeQueens(row + 1);
        board[row][col] = ".";
      }
    }
  }

  placeQueens(0);
  return result;
}
