/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [
     [ 'x', 'o', 'x' ],
     [ 'o', 'x', 'o' ],
     [ 'x', 'o', 'x' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!
# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'
*/

function multiDimensionalXO(size) {
  let counter = 1;
  let result = [];
  for (let i = 0; i < size; i++) {
    result[i] = [];
    for (let j = 0; j < size; j++) {
      if (counter % size === 0) {
        /* ganti dengan counter % untuk cari XOXO */
        result[i].push(counter);
      } else {
        result[i].unshift(counter);
      }
      counter++;
    }
  }
  return result;
  log(spiral(5));
}

console.log(multiDimensionalXO(6));
// [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]

// console.log(multiDimensionalXO(5));
/*
[ [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ] ]
*/

// console.log(multiDimensionalXO(6));
/*
[ [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ] ]
*/

// console.log(multiDimensionalXO(0));
// Invalid input
