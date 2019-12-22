/* 
MENCARI POSISI TEMPAT DUDUK DI RUANG SEMINAR

function findEmptySeat akan menerima array multidimensi yang menggambarkan sebuah ruangan seminar.

Symbol '*' menandakan bahwa kursi telah ditempati seseorang, dan spasi ' ' menandakan bahwa kursi tersebut kosong.

Pada posisi persis tengah ruangan terdapat juga jalur kosong vertikal yang merupakan sebuah jalan.

Carilah posisi kosong pada ruangan tersebut dan tandai dengan menempatkan symbol '#'.

Jika terdapat lebih dari 1 posisi kursi kosong, maka pilihlah posisi dengan baris paling depan diantara kursi kosong tersebut.
Dan jika ada lebih dari 1 posisi kursi kosong di baris yang sama, maka akan dipilih posisi paling kanan

Kalau tidak ada kursi kosong yang tersedia maka tampilkan pesan "maaf tidak ada kursi kosong tersedia"


INPUT:
[
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]

PROCESS:
- jalur kosong ada di kolom dengan indeks 3
- posisi kursi kosong ada di indeks (4,1) dan (5,5)
- posisi kursi kosong paling depan ada di indeks (4,1)

OUTPUT: simbol # ditempatkan pada posisi indeks (4,1)

[ ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '#', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'] ]

*/

function findEmptySeat(room) {
 
}

// function findEmptySeat(room) {
//   for (var i = 0; i < room.length; i++) {
//     for (var j = room[i].length - 1; j >= 0; j--) {
//       if (room[i][j] === " " && j !== Math.floor(room[j].length / 2)) {
//         room[i][j] = "#";
//         return room;
//       }
//     }
//   }

//   return "maaf tidak ada kursi kosong tersedia";
// }

// console.log(
//   findEmptySeat([
//     ["1", "2", "3", "4", "5"],
//     ["11", "12", "13", "14", "15"],
//     ["16", "17", "18", "19", "20"],
//     ["21", "22", "23", "24", "25"]
//   ])
// );
console.log(
  findEmptySeat([
    ["*", "*", "*", " ", "*", "*", "*"],
    ["*", "*", "*", " ", "*", "*", "*"],
    ["*", "*", "*", " ", "*", "*", "*"],
    ["*", "*", "*", " ", "*", "*", "*"],
    ["*", " ", "*", " ", "*", "*", "*"],
    ["*", "*", "*", " ", "*", " ", "*"],
    ["*", "*", "*", " ", "*", "*", "*"],
    ["*", "*", "*", " ", "*", "*", "*"]
  ])
);
console.log("");
/* 
[ ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '#', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'] ]
*/

// console.log(
//   findEmptySeat([
//     ["*", "*", "*", "*", " ", "*", "*", "*", "*"],
//     ["*", "*", "*", "*", " ", "*", "*", "*", "*"],
//     ["*", "*", "*", "*", " ", "*", "*", "*", "*"],
//     ["*", "*", " ", "*", " ", " ", "*", "*", "*"],
//     ["*", "*", "*", "*", " ", "*", "*", "*", "*"],
//     ["*", "*", "*", "*", " ", "*", "*", "*", "*"],
//     ["*", "*", "*", "*", " ", " ", "*", "*", "*"],
//     ["*", "*", " ", "*", " ", "*", "*", "*", "*"],
//     ["*", "*", "*", "*", " ", "*", "*", "*", "*"]
//   ])
// );
// console.log("");
/*
[ [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', ' ', '*', ' ', '#', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', ' ', '*', '*', '*' ],
  [ '*', '*', ' ', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ] ]
*/

// console.log(
//   findEmptySeat([
//     ["*", "*", "*", " ", "*", "*", "*"],
//     ["*", "*", "*", " ", "*", "*", "*"],
//     ["*", "*", "*", " ", "*", "*", "*"],
//     ["*", "*", "*", " ", "*", "*", "*"],
//     ["*", "*", "*", " ", "*", "*", "*"],
//     ["*", "*", "*", " ", "*", "*", "*"],
//     ["*", "*", "*", " ", "*", "*", "*"],
//     ["*", "*", "*", " ", "*", "*", "*"]
//   ])
// );
// maaf tidak ada kursi kosong tersedia
