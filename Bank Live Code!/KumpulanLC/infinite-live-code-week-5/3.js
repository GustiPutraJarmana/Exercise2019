/*
============
rapotAsrama
============
rapotAsrama adalah sebuah fungsi yang menerima parameter berupa array of object.
Function akan menerima sebuah parameter array of object dengan format:

  [
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    ...
  ]

Data di atas merupakan campuran seluruh nilai murid dari asrama manapun.

Function akan memproses array of object tersebut untuk membuat sebuah rapot dalam bentuk array of object dengan format:

  [
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    ...
  ]

Data yang diharapkan merupakan akumulasi murid yang lulus dan tidak dari setiap asrama.
Standard kelulusan adalah minimum 70.

*/

function rapotAsrama(students) {
  var output = [];
  var dorms = {};
  for (var i = 0; i < students.length; i++) {
    console.log(students[i])
    if (!dorms[students[i].asrama]) {
      dorms[students[i].asrama] = {
        asrama: students[i].asrama,
        gagal: [],
        lulus: []
      };
    }
    if (students[i].nilai >= 70) {
      dorms[students[i].asrama].lulus.push(students[i].nama);
    } else {
      dorms[students[i].asrama].gagal.push(students[i].nama);
    }
  }
  for (var keys in dorms) 
    output.push(dorms[keys]);
    return output;
  }


var data = [
  { nama: "Harry Potter", nilai: 80, asrama: "Griffindor" },
  { nama: "Cho Chang", nilai: 60, asrama: "Ravenclaw" },
  { nama: "Pansy Parkinson", nilai: 70, asrama: "Slyterin" },
  { nama: "Dean Thomas", nilai: 50, asrama: "Griffindor" },
  { nama: "Ginny Weasley", nilai: 10, asrama: "Griffindor" },
  { nama: "Gregory Goyle", nilai: 10, asrama: "Slyterin" },
  { nama: "Penelope Clearwater", nilai: 10, asrama: "Ravenclaw" },
  { nama: "Tom Marvolo Riddle", nilai: 90, asrama: "Slyterin" }
];

console.log(rapotAsrama(data));

/* 
[
  {
    asrama: 'Griffindor',
    gagal: ['Dean Thomas', 'Ginny Weasley'],
    lulus: ['Harry Potter']
  },
  {
    asrama: 'Ravenclaw',
    gagal: ['Cho Chang', 'Penelope Clearwater'],
    lulus: []
  },
  {
    asrama: 'Slyterin',
    gagal: ['Gregory Goyle'],
    lulus: ['Pansy Parkinson', 'Tom Marvolo Riddle']
  }
]
*/
