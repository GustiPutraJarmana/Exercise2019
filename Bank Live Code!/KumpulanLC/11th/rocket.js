// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus kelipatan 3. berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *
contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)
function drawSymbolicColsBox(num) {
  var j = 1;
  var k = num;
  for (var i = 1; i <= num; i++) {
    var output = "";
    for (let j = 1; j <= k; j++) {
      // output = output + j;
      if (j % 2 === 0 && j % 3 !== 0) {
        output = output + " " + "$";
      } else if (j % 3 === 0) {
        output = output + " " + "*";
      } else {
        output = output + " " + "@";
      }
    }
    j = j;
    k = k + num;
    console.log(output);
  }
}

drawSymbolicColsBox(5);
drawSymbolicColsBox(7);
drawSymbolicColsBox(3);
