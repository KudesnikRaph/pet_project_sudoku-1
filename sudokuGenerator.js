import { GRID_SIZE } from "./utilities.js";

export function generateSudoku() {
  const sudoku = createEmptyGrid();
  resolveSudoku(sudoku);
}

function createEmptyGrid() {
  return new Array(GRID_SIZE).fill().map(() => new Array(GRID_SIZE).fill(null))
}

function resolveSudoku(grid) {
  const emptyCell = findEmptyCell(grid);
  if (!emptyCell) return true;

  const numbers = getRandomNumbers();

  console.log(numbers);
}

function findEmptyCell(grid) {
  for (let row = 0; row< GRID_SIZE; row++) {
    for(let column = 0; column < GRID_SIZE; column++) {
      if (grid[row] [column] === null) return { row, column }
    }
  }
  return null;
}

function getRandomNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Перемешиваем цыфры в массиве и делаем Math.random()
  for(let i = numbers.length -1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i+1));
    [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
  }

  return numbers;
}