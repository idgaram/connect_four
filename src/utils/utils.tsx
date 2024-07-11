export const ROWS = 6;
export const COLS = 7;

export const createEmptyGrid = () => {
  return Array.from({ length: ROWS }, () => Array(COLS).fill("E"));
};

export const DIRECTIONS = [
  [0, 1], //right
  [1, 1], //down right
  [1, 0], //down
  [1, -1], //down left
  [0, -1], //left
  [-1, -1], //up left
  [-1, 0], //up
  [-1, 1], //up right
];

export const WINCONDITION = [
  [0, 4], //right
  [0, -4], //left
  [-4, -0], //up
  [4, 0], //down
];
