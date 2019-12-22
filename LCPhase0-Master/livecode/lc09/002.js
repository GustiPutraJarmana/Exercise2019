/**

  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]


NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'

**/

function squareNumber(num) {
  let counter = 1;
  let temp = [];
  for (let i = 0; i < num; i++) {
    temp[i] = [];
    for (let j = 0; j < num; j++) {
      if (i % 2 !== 0) {
        temp[i].unshift(counter);
      } else {
        temp[i].push(counter);
      }
      counter++;
    }
  }

  let result = [];
  for (let i = 0; i < temp.length; i++) {
    let a = [];
    for (let j = 0; j < temp[i].length; j++) {
      if (temp[i][j] % 4 === 0) {
        a.push("#");
      } else if (temp[i][j] % 2 === 0) {
        a.push("o");
      } else {
        a.push("x");
      }
    }
    result.push(a);
  }
  return result;
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, #, x, o, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, o ] ]

// console.log(squareNumber(2)); // Minimal input adalah 3
