/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
  
  let kelas = []
  for (let i = 0 ; i < studentGrades.length; i++) {
    let found = false
    for (let j = 0; j < kelas.length; j++) {
      if (studentGrades[i].classCode == kelas[j]) {
        found = true
      }
    }
    if (!found) {
      kelas.push(studentGrades[i].classCode)
    }
  }
  
  let tai = []
  for (let i = 0; i < kelas.length; i++) {
    let obj = {}
    let arrPass = []
    let arrFail = []
    for (let j = 0; j < studentGrades.length; j++) {
      if (kelas[i] == studentGrades[j].classCode) {
        if (studentGrades[j].score < 70) {
          arrFail.push(studentGrades[j].name)
        }
        else {
          arrPass.push(studentGrades[j].name)
        }
      }
    }
    obj['classCode'] = kelas[i]
    obj['Passed'] = arrPass
    obj['Failed'] = arrFail
    tai.push(obj)
  }
  return tai
}

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]
*/
