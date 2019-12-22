/*
======================
Angka Ganjil Terkecil
======================

[INSTRUCTIONS]
ganjilTerkecil adalah sebuah function yang menerima satu parameter berupa string.
function akan mereturn sebuah angka ganjil terkecil dalam array tersebut.
Jika tidak ada angka ganjil dalam array tersebut, maka function akan mereturn angka -1

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
proses: akan mencari angka ganjil terkecil
output: 1

input: [2, 8, 6, 10, 12, 22, 24]
proses: akan mencari angka ganjil terkecil, karena tidak ada bilangan ganjil
output: -1
*/

function ganjilTerkecil(array) {
  for (var i = 0; i < array.length; ) {
    if (array[i + 1] < array[i]) {
      var tampung = array[i];
      array[i] = array[i + 1];
      array[i + 1] = tampung;
      i = Math.max(0, i - 1);
    } else {
      i++;
    }
  }
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      output.push(array[i]);
    }
  }

  var minNum = output[0];
  for (var i = 0; i < output.length; i++) {
    if (minNum > output[i]) {
      minNum = output[i];
    }
  }
  if (!minNum) {
    return -1;
  } else {
    return minNum;
  }
}

console.log(ganjilTerkecil([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 1
console.log(ganjilTerkecil([2, 8, 6, 10, 12, 22, 24])); // -1
console.log(ganjilTerkecil([19, 21, 23, 51, 7, 37])); // 7
console.log(ganjilTerkecil([1])); // 1
console.log(ganjilTerkecil([92, 13, 12, 15, 10, 31, 15, 55, 32, 23, 45])); // 13

// function ganjilTerkecil(array) {
//   // Code here
//   var hasil = 0
//   if ( array.length === 1) {
//     if ( array[0] % 2 === 1) {
//       return array[0]
//     }
//   }
//   for ( var i = 0; i < array.length; i++) {
//     for ( var j = 0; j < array.length; j++) {
//       if (array[i] % 2 === 1 && array[i] % 2 === 1) {
//         if (i !== j) {
//           if ( array[i]!== undefined) {
//             if ( array[i] < array[j]) {
//               hasil = array[i]
//               array[j] = undefined
//             }
//           }
//         }
//       }
//     }
//   }
//   if ( hasil === 0) {
//     return -1
//   }
//   else {
//     return hasil
//   }
// }
