/*
******
Cari Student
******


Function studentFinder menerima input berupa string berisi nama-nama student sebuah batch, dipisahkan oleh " " atau ",".
Function ini mengeluarkan output berupa nama student dengan jumlah huruf terpendek.
Apabila ada 2 nama student yang terpendek, maka function akan mengeluarkan nama yang berada di posisi sebelah kiri terlebih dahulu!


[RULES]
  - Dilarang menggunakan built-in function .split

*/

function studentFinder(students) {
  var outputSplit = [];
  var temp = "";
  for (var i = 0; i < students.length; i++) {
    if (students[i] === " " || students[i] === ",") {
      outputSplit.push(temp);
      temp = "";
    } else if (students[i] === ",") {
    } else temp += students[i];
  }

  var length = [];
  for (var i = 0; i < outputSplit.length; i++) {
    length.push(outputSplit[i].length);
  }

  for (var i = 0; i < length.length; ) {
    if (length[i + 1] < length[i]) {
      var tampung = length[i];
      length[i] = length[i + 1];
      length[i + 1] = tampung;
      i = Math.max(0, i - 1);
    } else {
      i++;
    }
  }

  var minNum = length[0];
  for (var i = 0; i < length.length; i++) {
    if (minNum < length[i]) {
      minNum = length[i];
    }
  }
  var b = [];
  for (var i = 0; i < outputSplit.length; i++) {
    if (outputSplit[i].length === minNum) {
      b.push(outputSplit[i]);
    }
  }
  return b[0];
}

console.log(studentFinder("Hanif agusAB GustiA Ranev iya ana ila Tio Tirta Igor Yusril Tia Titania")); // Tio
console.log(studentFinder("Yogi Hengky Trina An Hamzah")); // An
console.log(studentFinder("Huday,Kay,Trisna,Kinan,Hazman")); // Kay
