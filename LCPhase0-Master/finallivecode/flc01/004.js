/*
===================
Coordinate Tracker
===================

[INSTRUCTIONS]
coordinateTracker adalah sebuah function yang menerima dua parameter berupa array of array dan string.
parameter string yang diterima, hanya menerima 2 yaitu:
- 'ganjil' : maka akan mencari angka ganjil
- 'genap' : maka akan mencari angka genap
- 'x' : maka akan mencari 'x'

function mencari nilai terbanyak dari parameter yang diinput, dan akan mereturn sebuah string seperti:
'<search> yang paling banyak ada di baris ke-<index>'

PS: Baris di mulai dari 1 yang paling awal, sampai baris ke akhir

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
input: ([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 'genap)
proses: akan mencari nulai genap paling banyak, dan akan menyimpan baris mana yang terdapat bilangan genap
output: 'genap yang paling banyak ada di baris ke-2'
*/

function coordinateTracker(array, search) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    var temp = 0;
    for (var j = 0; j < array[i].length; j++) {
      if (search === "genap") {
        if (array[i][j] % 2 === 0) {
          temp++;
        }
      } else if (search === "ganjil") {
        if (array[i][j] % 2 !== 0) {
          temp++;
        }
      } else if (search === "x") {
        if (array[i][j] === "x") {
          temp++;
        }
      }

    }
    output.push(temp);
  }

  var maxNum = output[0];
  var index;
  for (var i = 0; i < output.length; i++) {
    if (maxNum < output[i]) {
      maxNum = output[i];
      index = i + 1;
    }
  }

  return search + " paling banyak ada di baris ke-" + index;
}

console.log(coordinateTracker([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "genap")); // 'genap yang paling banyak ada di baris ke-2'

console.log(
  coordinateTracker([[2, 2, 7], [1, 3, 5, 6], [1, 3, 5, 7, 9, 11]], "ganjil")
); // 'ganjil yang paling banyak ada di baris ke-3'

console.log(
  coordinateTracker(
    [
      ["o", "o", "o", "x"],
      ["x", "x", "o"],
      ["o", "x"],
      ["x", "x", "x", "x", "x", "x", "x"]
    ],
    "o"
  )
); // 'x yang paling banyak ada di baris ke-4'
