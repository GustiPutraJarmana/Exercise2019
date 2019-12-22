// "use strict"
/*
============
dataSiswa
============
[INSTRUCTIONS]
dataSiswa adalah sebuah fungsi yang menerima parameter berupa string.
String tersebut memiliki format `studentID-nama-nilai`.
Function akan membaca data siswa dari input dan mengubahnya menjadi array of objects.
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan hasil tes hari ini"
[RULES]
1. Dilarang menggunakan built-in split
*/


function dataSiswa(scoreRecord) {
    // if (scoreRecord = '') {
    //     return 'tidak ada catatan hasil tes hari ini'
    // }

    let temp = []
    let str = ''
    for (let i = 0; i < scoreRecord.length; i++) {
        if (scoreRecord[i] === ',') {
            temp.push(str)
            str = ''
        }
        else {
            str += scoreRecord[i]
        }
        if (i === scoreRecord.length-1) {
            temp.push(str)
        }
    }
    
    let output = []
    for (let i = 0; i < temp.length; i++) {
        
        let string = ''
        let arr = []
        for (let j = 0; j < temp[i].length; j++) {
            if (temp[i][j] === '-') {
                arr.push(string)
                string = ''
            }
            else {
                string += temp[i][j]
            }
            if (j === temp[i].length-1) {
                arr.push(string)
            }
        }
        output.push(arr)
    }
    // return output
    
    let arr = []
    for (let i = 0; i < output.length; i++) {
        let obj = {}
            obj['id'] = output[i][0]
            obj['name'] = output[i][1]
            obj['score'] = output[i][2]
            arr.push(obj)
        }
    return arr
    }

console.log(dataSiswa("001-Radith-88,002-Putra-100,003-Levy-83"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 100 },
  { id: '003', name: 'Levy', score: 83 }
]
 */

console.log(dataSiswa("001-Radith-5,002-Putra-92,003-Levy-100"))
// /* 
// [
//   { id: '001', name: 'Radith', score: 5 },
//   { id: '002', name: 'Putra', score: 92 },
//   { id: '003', name: 'Levy', score: 100 }
// ]
//  */

console.log(dataSiswa("001-Radith-88,002-Putra-70,003-Levy-65,004-Radinka-88,005-Bagas-90"))
// /* 
// [
//   { id: '001', name: 'Radith', score: 88 },
//   { id: '002', name: 'Putra', score: 70 },
//   { id: '003', name: 'Levy', score: 65 },
//   { id: '004', name: 'Radinka', score: 88 },
//   { id: '005', name: 'Bagas', score: 90 }
// ]
//  */

console.log(dataSiswa("")) // tidak ada catatan hasil tes hari ini