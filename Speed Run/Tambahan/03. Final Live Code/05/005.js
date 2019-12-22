/*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


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
function trainSeating(penumpang) {
  let a = [];
  for (let i = 0; i < penumpang.length; i++) {
    a.push(penumpang[i].gerbong);
  }
  let comp = duplicateArr(a);
  console.log(comp);
  
  let object = {};
  let object1 = {};
  let arr = [];

  for (let i = 0; i < comp.length; i++) {
    object[comp[i]] = arr;
    for (let j = 0; j < penumpang.length; j++) {
      if (penumpang[j].gerbong === comp[i]) {
        object1["nama"] = penumpang[j].nama;
        object1["seat"] = penumpang[j].seat;
        arr.push(object1);
        object1 = {};
      }
    }
    arr = []
  }

  return object;
}

console.log(
  trainSeating([
    { nama: "Awtian", gerbong: "VVIP", seat: "A1" },
    { nama: "Klonoa", gerbong: "VIP", seat: "V1" },
    { nama: "Azizy", gerbong: "VVIP", seat: "A2" },
    { nama: "Crash", gerbong: "Regular", seat: "R1" },
    { nama: "Sena", gerbong: "Regular", seat: "R3" },
    { nama: "Retsu", gerbong: "VIP", seat: "V2" },
    { nama: "Hiruma", gerbong: "VVIP", seat: "A666" },
    { nama: "Tsubasa", gerbong: "VIP", seat: "V6" }
  ])
);

// 3 menit 32 seconds

/*

Output :
{
  VVIP:
   [ { nama: 'Awtian', seat: 'A1' },
     { nama: 'Azizy', seat: 'A2' },
     { nama: 'Hiruma', seat: 'A666' } ],
  VIP:
   [ { nama: 'Klonoa', seat: 'V1' },
     { nama: 'Retsu', seat: 'V2' },
     { nama: 'Tsubasa', seat: 'V6' } ],
  Regular:
    [ { nama: 'Crash', seat: 'R1' },
      { nama: 'Sena', seat: 'R3' } ]
}
*/
