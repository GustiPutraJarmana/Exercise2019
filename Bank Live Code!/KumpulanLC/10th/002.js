/*
==================================
Array Mastery: Pair Up
==================================
Nama:________
[INSTRUKSI]
Setiap student di HACKTIV8 ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.
Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.
[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
input: []
output: []
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!
*/

function pairUp(student) {
  var output = [];
  for (var i = 0; i < student.length; i += 2) {
    var temporary = "";
    console.log(student[i + 1]);
    if (student[i] % 2 === 0) {
      temporary += student[i] + " dan " + student[i + 1];
    } else if (student[i] % 2 !== 0) {
      temporary += student[i] + " dan " + student[i + 1];
    } else if (student[i + 1] === undefined) {
      temporary += student[i] + " dan Instruktur";
    }
    output.push(temporary);
  }
  return output;
}

// console.log(pairUp(["Budi", "Badu", "Indra", "Indri"]));
console.log(pairUp(["Budi", "Badu", "Indra", "Indri", "James"]));
