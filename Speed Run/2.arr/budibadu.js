/*

================
Initial Grouping
================

Name : _________________

[INSTRUCTION]

Disediakan sebuah function initialGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
array dua dimensi.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke dalam array baru
Susun array baru sebagai berikut:
[
[ 'Budi', 'Badu' ],
[ 'Joni', 'Jono' ],
]

Setiap array dimensi kedua diawali dengan huruf depan yang mengelompokkan nama tersebut menjadi:

[
[ 'B', 'Budi', 'Badu' ],
[ 'J', 'Joni', 'Jono' ],
]

Kamu tidak perlu peduli dengan urutan alphabet atau nama siapa yang keluar terlebih dahulu!

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function duplicateArr(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    if (output.length === 0) {
      output.push(arr[0]);
    }
    for (let j = 0; j < output.length; j++) {
      if (arr[i] === output[j]) {
        flag = false;
      }
    }
    if (flag) {
      output.push(arr[i]);
    }
  }
  return output;
}

function initialGrouping(studentsArr) {
  let tamp = [];
  for (let i = 0; i < studentsArr.length; i++) {
    tamp.push(studentsArr[i][0]);
  }
  let pertama = duplicateArr(tamp);
  let temp = [];
  let a = [];

  for (let i = 0; i < pertama.length; i++) {
    a.push(pertama[i]);
    for (let j = 0; j < studentsArr.length; j++) {
      if (pertama[i] === studentsArr[j][0]) {
        a.push(studentsArr[j]);
      }
    }
    temp.push(a);
    a = [];
  }
  return temp;
}

console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*.
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
// /*
// [
//   [ 'M', 'Mickey' ],
//   [ 'Y', 'Yusuf' ],
//   [ 'D', 'Donald' ],
//   [ 'A', 'Ali' ],
//   [ 'G', 'Gong' ]
// ]
// */

console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
// /*
// [
//   [ 'R', 'Rock', 'Rocker' ],
//   [ 'S', 'Stone', 'Sticker' ],
//   [ 'B', 'Brick' ]
// ]
// */

console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
// /*.
// [
//   [ 'B', 'Budi', 'Badu' ],
//   [ 'J', 'Joni', 'Jono' ]
// ]
// */

console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
// /*
// [
//   [ 'M', 'Mickey' ],
//   [ 'Y', 'Yusuf' ],
//   [ 'D', 'Donald' ],
//   [ 'A', 'Ali' ],
//   [ 'G', 'Gong' ]
// ]
// */

console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
// /*
// [
//   [ 'R', 'Rock', 'Rocker' ],
//   [ 'S', 'Stone', 'Sticker' ],
//   [ 'B', 'Brick' ]
// ]
// */
