/*
Diberikan sebuah function trackStep yang menerima dua parameter:
 - parameter pertama merupakan array kumpulan string yang berisi nama ruangan
   yang bisa dilewati per langkah
 - parameter kedua merupakan array kumpulan string yang berisi perintah melangkah atau mundur
 Output dari function tersebut adalah berupa object literal yang memberitahukan
 sekarang berada diruangan mana dan kumpulan list ruangan yang bisa dilewati jika ingin mundur
 perintah/command dari moves akan bekerja seperti ini:
 - next: akan melangkah maju ke next rooms dan memasukkan nama rooms sekarang berada ke listPrevRooms
 - back: akan kembali ke rooms sebelumnya dan menghapus nama rooms tersebut dari listPrevRooms
 ASUMSI:
 - jika perintah next telah melebihi jumlah rooms, maka tetap berada di room terakhir
CONTOH 1
========
INPUT:
******
  rooms: ['Foxes Room', 'Wolves Room','Tigers Rooms', 'Elephants Rooms']
  moves: ['next', 'next', 'next', 'back']
OUTPUT:
*******
  {
    room: 'Wolves Room',
    listPrevRooms: ['Foxes Room']
  }
PROSES:
*******
- moves index-0: next
  {
    room: 'Foxes Room'
    listPrevRooms: []
  }
- moves index-1: next
  {
    room: 'Wolves Room'
    listPrevRooms: ['Foxes Room']
  }
- moves index-2: next
  {
    room: 'Tigers Room'
    listPrevRooms: ['Foxes Room', 'Wolves Room']
  }
- moves index-3: back
  {
    room: 'Wolves Room'
    listPrevRooms: ['Foxes Room']
  }
CONTOH 2:
==========
INPUT:
******
  rooms: ['A Room', 'B Room']
  moves: ['next', 'next', 'next', 'next']
OUTPUT:
*******
  {
    room: 'B Room',
    listPrevRooms: ['A Room']
  }
PROSES:
*******
- moves index-0: next
  {
    room: 'A Room'
    listPrevRooms: []
  }
- moves index-1: next
  {
    room: 'B Room'
    listPrevRooms: ['A Room']
  }
- moves index-2: next
  {
    room: 'B Room'
    listPrevRooms: ['A Room']
  }
- moves index-3: next
  {
    room: 'B Room'
    listPrevRooms: ['A Room']
  }
CONTOH 3:
==========
INPUT:
******
  rooms: ['A Room', 'B Room']
  moves: ['next', 'back', 'back']
OUTPUT:
*******
  {
    room: '',
    listPrevRooms: []
  }
PROSES:
*******
- moves index-0: next
  {
    room: 'A Room'
    listPrevRooms: []
  }
- moves index-1: back
  {
    room: ''
    listPrevRooms: []
  }
- moves index-2: back
  {
    room: ''
    listPrevRooms: []
  }

  RULES: 
    - NO RULES

*/
function trackStep(rooms, moves) {
  if (!rooms.length && !moves.length) return "Invalid rooms and moves";
  else if (!rooms.length) {
    return "There is no rooms can explore";
  } else if (!moves.length) {
    return "No steps!";
  } else {
    let object = {};
    let pindah = [];
    let ruang = "";
    let maju = 0;
    let mundur = 0;
    for (let i = 0; i < moves.length; i++) {
      object["room"] = ruang;
      object["listPrevRooms"] = pindah;
      for (let j = 0; j < rooms.length; j++) {
        // console.log(i);
        // console.log(j);
        if (moves[i] === "next" && i === j) {
          maju++;
        } else if (moves[i] === "back") {
          mundur++;
        }
      }
      pindah = [];
      ruang = "";
    }
    console.log(maju);
    
    if (maju === 2) {
      ruang += rooms[rooms.length - 1];
      pindah.push(rooms[rooms.length - 2]);
    }
    console.log(object);
  }
}
/* TEST CASE / DRIVER CODE */
// console.log(
//   trackStep(
//     ["Foxes Room", "Wolves Room", "Tigers Rooms", "Elephants Rooms"],
//     ["next", "next", "next", "back"]
//   )
// );
//  { room: 'Wolves Room', listPrevRooms: [ 'Foxes Room' ] }
console.log(trackStep(["A Room", "B Room"], ["next", "next", "next", "next"]));
// { room: 'B Room', listPrevRooms: [ 'A Room '] }
// console.log(trackStep(["A Room", "B Room"], ["next", "back", "back"]));
// { room: '', listPrevRooms: [] }
// console.log(trackStep([], [])); // Invalid rooms and moves
// console.log(trackStep(["A rooms"], [])); //No steps!
// console.log(trackStep([], ["next", "back", "next"])); //There is no rooms can explore
