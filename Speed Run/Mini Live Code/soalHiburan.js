function isSave(board) {
    // code here
    
}

console.log(isSave(
  [
    [' ', ' ', ' ',' ', ' '],
    [' ', ' ', ' ',' ', ' '],
    [' ', ' ', ' ',' ', ' '],
    [' ', 'B', ' ',' ', ' '],
    [' ', ' ', 'P',' ', ' ']
  ]
)) // true

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', 'B', ' '],
    [' ', 'P', ' ']
  ]
)) // false

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', 'B', 'P'],
    [' ', ' ', ' ']
  ]
)) // false

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', 'B', ' '],
    [' ', ' ', ' ']
  ]
))

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', ' ', 'P'],
    [' ', ' ', ' ']
  ]
))

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
))