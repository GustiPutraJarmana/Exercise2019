"use strict";
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
  if (!scoreRecord) {
    return "tidak ada catatan hasil tes hari ini";
  }
  var hasilAkhir = [];
  var result = [];
  var temporari = "";
  for (var i = 0; i < scoreRecord.length; i++) {
    if (scoreRecord[i] !== ",") {
      temporari += scoreRecord[i];
    } else {
      result.push(temporari);
      temporari = "";
    }
  }
  result.push(temporari);
  var output2 = [];
  for (var i = 0; i < result.length; i++) {
    var output = [];
    var tamp = "";
    for (var j = 0; j < result[i].length; j++) {
      if (result[i][j] !== "-") {
        tamp += result[i][j];
      } else if (result[i][j] === "-") {
        output.push(tamp);
        tamp = "";
      }
      //output.push(tamp);
    }
    output.push(tamp);

    output2.push(output);
    var data = {
      id: output2[i][0],
      nama: output2[i][1],
      score: output2[i][2]
    };

    hasilAkhir.push(data);
  }

  return hasilAkhir;
}

console.log(dataSiswa("001-Radith-88,002-Putra-100,003-Levy-83"));
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 100 },
  { id: '003', name: 'Levy', score: 83 }
]
 */

console.log(dataSiswa("001-Radith-5,002-Putra-92,003-Levy-100"));
/* 
[
  { id: '001', name: 'Radith', score: 5 },
  { id: '002', name: 'Putra', score: 92 },
  { id: '003', name: 'Levy', score: 100 }
]
 */

console.log(
  dataSiswa(
    "001-Radith-88,002-Putra-70,003-Levy-65,004-Radinka-88,005-Bagas-90"
  )
);
// /*
// [
//   { id: '001', name: 'Radith', score: 88 },
//   { id: '002', name: 'Putra', score: 70 },
//   { id: '003', name: 'Levy', score: 65 },
//   { id: '004', name: 'Radinka', score: 88 },
//   { id: '005', name: 'Bagas', score: 90 }
// ]
//  */

console.log(dataSiswa("")); // tidak ada catatan hasil tes hari ini
