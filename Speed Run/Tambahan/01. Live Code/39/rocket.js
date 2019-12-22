function MineSweeper(array) {
    // your code here

}

var board = [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board)) // 4

var board2 = [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board2)) // 2

var board3 = [
  ['X', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', ' ', 'X', 'X', ' '],
  [' ', ' ', 'X', 'O', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'X', ' ', ' ', 'X', ' ']
]
console.log(MineSweeper(board3)) // 3