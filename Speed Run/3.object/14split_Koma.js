"use strict"
// 
// ============
// dataSiswa
// ============
// 
// [INSTRUCTIONS]
// dataSiswa adalah sebuah fungsi yang menerima parameter berupa string.
// String tersebut memiliki format `studentID-nama-nilai`.
// 
// Function akan membaca data siswa dari input dan mengubahnya menjadi array of objects.
// 
// 
// [NOTES]
// 1. Apabila tidak ada data tampilkan "tidak ada catatan hasil tes hari ini"
// 
// 
// [RULES]
// 1. Dilarang menggunakan built-in split
// 

function splitKoma(scoreRecord) {
  // Your code here.
  let arr = []
  let result = ''

  for (let i = 0; i < scoreRecord.length; i++) {
    if (scoreRecord[i] === ',') {
      arr.push(result)
      result = ''
    }
    else {
      result += scoreRecord[i]
    }
    if (scoreRecord.length - 1 === i) {
      arr.push(result)
    }
  }
  return arr
}
function splitStrip(arr){
  let arr2 = []
  let result = ''

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
      arr2.push(result)
      result = ''
    }
    else {
      result += arr[i] 
    }
    if (arr.length - 1 === i) {
      arr2.push(result)
    }
  }
  return arr2
} 

function dataSiswa(scoreRecord) {
  // Your code here.
  let resultKoma = splitKoma(scoreRecord)
  let resultFix = []
  let arrResult = []
  for (let i = 0; i < resultKoma.length; i++) {
    let calculate = splitStrip(resultKoma[i])
    resultFix.push(calculate)
  }
  
  
  for (let i = 0; i < resultFix.length; i++) {
    let obj = {
      id : resultFix[i][0],
      name : resultFix[i][1],
      score : resultFix[i][2]
    }
    arrResult.push(obj)
  }
  return arrResult
}



console.log(dataSiswa("001-Radith-88,002-Putra-100,003-Levy-83"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 100 },
  { id: '003', name: 'Levy', score: 83 }
]
 */

// console.log(dataSiswa("001-Radith-5,002-Putra-92,003-Levy-100"))
// /* 
// [
//   { id: '001', name: 'Radith', score: 5 },
//   { id: '002', name: 'Putra', score: 92 },
//   { id: '003', name: 'Levy', score: 100 }
// ]
//  */

// console.log(dataSiswa("001-Radith-88,002-Putra-70,003-Levy-65,004-Radinka-88,005-Bagas-90"))
// /* 
// [
//   { id: '001', name: 'Radith', score: 88 },
//   { id: '002', name: 'Putra', score: 70 },
//   { id: '003', name: 'Levy', score: 65 },
//   { id: '004', name: 'Radinka', score: 88 },
//   { id: '005', name: 'Bagas', score: 90 }
// ]
//  */

// console.log(dataSiswa("")) // tidak ada catatan hasil tes hari ini