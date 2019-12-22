/*
===========================
Initial Grouping Descending
==========================
[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output:
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort

*/
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
function sortingArr(arr) {
  for (let i = 0; i < arr.length; ) {
    if (arr[i + 1] > arr[i]) {
      let tampung = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tampung;
      i = Math.max(0, i - 1);
    } else {
      i++;
    }
  }
  return arr;
}
function initialGroupingDescending(studentsArr) {
  let arrA = [];
  for (let i = 0; i < studentsArr.length; i++) {
    arrA.push(studentsArr[i][0]);
  }
  let dup = duplicateArr(sortingArr(arrA));
  let a = [];
  let b = [];
  for (let i = 0; i < dup.length; i++) {
    b.push(dup[i]);
    for (let j = 0; j < studentsArr.length; j++) {
      if (studentsArr[j][0] === dup[i]) {
        b.push(studentsArr[j]);
      }
    }
    a.push(b);
    b = [];
  }
  return a;
}

console.log(initialGroupingDescending(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(
  initialGroupingDescending(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(
  initialGroupingDescending(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/

// function initialGroupingDescending(studentsArr) {
//   // Only Code Here
//   var hasil = []
//   for ( var i = 0; i < studentsArr.length; i++ ) {
//     var tempArray = []
//     if ( studentsArr[i] !== undefined) {

//       tempArray.push(studentsArr[i][0])
//       tempArray.push(studentsArr[i])
//     }
//     // console.log(studentsArr[i][0])
//     for ( var j = 0; j < studentsArr.length; j++ ) {
//       if ( i !== j ) {
//         if ( studentsArr[i] !== undefined && studentsArr[j] !== undefined) {
//           if ( studentsArr[j][0] === tempArray[0]) {
//             tempArray.push(studentsArr[j])
//             studentsArr[j] = undefined
//           }
//         }
//       }
//     }
//     if (tempArray.length !== 0) {
//       hasil.push(tempArray)
//     }
//   }
//   for ( var i = 0; i < hasil.length; i++ ) {
//     var temp = ''
//     for ( var j = 0; j < hasil.length; j++ ) {
//         if ( hasil[i][0] > hasil[j][0]) {
//           temp = hasil[i]
//           hasil[i] = hasil[j]
//           hasil[j] = temp
//         }
//     }
//   }
//   // console.log(hasil)
//   return hasil
// }
