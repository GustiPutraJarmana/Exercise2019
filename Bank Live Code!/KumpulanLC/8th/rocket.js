// /**
// Multi Dimensional XO
// ====================
// Implementasikan function `multiDimensionalXO` untuk membuat
// array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
// # Contoh I/O
// - Input: 3
//   Output: [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]
// Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!

// # Kondisi khusus
// - Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'

// */

// function multiDimensionalXO(size) {
//     if (!size) return 'Invalid input'
//   let counter = 0;
//   let result = [];
//   for (let i = 0; i < size; i++) {
//     result[i] = [];
//     for (let j = 0; j < size; j++) {
//       if (counter % 2 === 0) {
//         result[i].push("o");
//       } else {
//         result[i].push("x");
//       }
//       counter++;
//     }
//   }
//   return result;
// }

// console.log(multiDimensionalXO(3));
// // [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]

// console.log(multiDimensionalXO(5));
// // /*
// // [ [ 'o', 'x', 'o', 'x', 'o' ],
// //   [ 'x', 'o', 'x', 'o', 'x' ],
// //   [ 'o', 'x', 'o', 'x', 'o' ],
// //   [ 'x', 'o', 'x', 'o', 'x' ],
// //   [ 'o', 'x', 'o', 'x', 'o' ] ]
// // */

// console.log(multiDimensionalXO(6));
// // /*
// // [ [ 'o', 'x', 'o', 'x', 'o', 'x' ],
// //   [ 'o', 'x', 'o', 'x', 'o', 'x' ],
// //   [ 'o', 'x', 'o', 'x', 'o', 'x' ],
// //   [ 'o', 'x', 'o', 'x', 'o', 'x' ],
// //   [ 'o', 'x', 'o', 'x', 'o', 'x' ],
// //   [ 'o', 'x', 'o', 'x', 'o', 'x' ] ]
// // */

// console.log(multiDimensionalXO(0));
// // // Invalid input

function odd(n) {
  let counter = 1;
  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = counter;
      counter++;
    }
  }
  return result;
}
console.log(odd(10));
