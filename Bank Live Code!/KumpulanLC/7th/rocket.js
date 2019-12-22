// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).
Contoh 1
--------
input: 3
x
xo
xox

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xoxo
xoxox
xoxoxo

*/
function drawLadder(row) {
  for (var i = 1; i <= row; i++) {
    var output = "";
    for (var a = 0; a < i; a++) {
      if (a % 2 == 0) {
        output = output + "x";
      } else {
        output = output + "o";
      }
    }
    console.log(output);
  }
}
drawLadder(6);
