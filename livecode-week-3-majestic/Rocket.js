/**
 * ============
 * Diagon Alley
 * ============
 *
 * Instruction
 * -----------
 * Buatlah sebuah function yang dapat menampilkan input secara diagonal seperti berikut:
 *
 * Example
 * -------
 * @input = 'Hacktiv8'
 * @output =
 * H
 *  a
 *   c
 *    k
 *     t
 *      i
 *       v
 *        8
 */

function diagonAlley(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let j = 0; j <= i; j++) {
      if (i === j) {
        temp += str[i];
      } else {
        temp += " ";
      }
    }
    result += temp + "\n";
  }
  return result;
}

console.log(diagonAlley("yusuf"));
/*
y
 u
  s
   u
    f
*/
// console.log(diagonAlley("adiel"));
/*
a
 d
  i
   e
    l
*/
// console.log(diagonAlley("tony"));
/*
t
 o
  n
   y
*/
