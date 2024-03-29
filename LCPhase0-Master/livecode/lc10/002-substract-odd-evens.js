/**
================================
Array Mastery: Substract Evens and Odds
================================

[INSTRUKSI]

Function substractEvenOdd akan menerima satu parameter berupa array of number.
Kelompokkanlah hasil pengurangan bilangan yang genap dan bilangan yang ganjil dan
return array 2 dimensi di mana array pertama merupakan hasil pengurangan angka genap dan
array selanjutnya adalah hasil pengurangan angka ganjil

Contoh:
input: [3, 5, 7, 8]
output: [[8], [-9]]

input: [14, 4, 6, 2]
output: [[2], [0]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!

STORE result with the value of multi-dimensional Array
STORE genap with the value of arrNum[0]
STORE ganjil with the value of arrNum[0]

STORE numGenap and numGanjil with the value of EMPTY Array

  FOR LOOP index 0 to length of arrNum 
    IF arrNum[i] mod 2 EQUALS to 0 THEN
      numGenap push arrNum[i]
    ELSE IF arrNum[i] mod 2 EQUALS to 1 THEN
      numGanjil push arrNum[i]
    END IF
  EXIT LOOP





*/

function substractEvenOdd(arrNum) {
  let result = [];
  let ganjil = [];
  let genap = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 !== 0) {
      ganjil.push(arrNum[i]);
    } else {
      genap.push(arrNum[i]);
    }
  }
  if (genap.length == 0 || !genap) result.push([0]);
  let genapA = genap[0];
  if (genap.length === 1) {
    genapaA = genap[0];
  } else {
    for (let i = 1; i < genap.length; i++) {
      genapA -= genap[i];
    }
  }
  console.log(ganjil);

  if (!ganjil) result.push(0);
  let ganjilA = ganjil[0];
  if (ganjil.length === 1) {
    ganjilA = ganjil[0];
  } else {
    for (let i = 1; i < ganjil.length; i++) {
      ganjilA -= ganjil[i];
    }
  }
  console.log(ganjilA);

  result.push(genapA, ganjilA);
  console.log(result);
}

console.log(substractEvenOdd([3, 5, 7, 8])); // [ [8], [-9] ]

console.log(substractEvenOdd([14, 4, 6, 2])); // [ [2], [0] ]

// console.log(substractEvenOdd([])); // [ [0], [0] ]

// var result = [[], []]; //array pertama hasil pengurangan bilangan gajil, array kedua hasil penguranfan bilangan genap
// var genap = [];
// var ganjil = [];

// for(var i = 0; i < arrNum.length; i++){
//   // console.log(arrNum[i])
//   if(arrNum[i]%2 === 0){
//     genap.push(arrNum[i]);
//   } else if(arrNum[i]%2 === 1){
//     ganjil.push(arrNum[i]);
//   }
// }

// var numGenap = genap[0];
// // console.log(numGenap)
// var numGanjil = ganjil[0];

// for(var j = 1; j < genap.length; j++){
//   numGenap -= genap[j];
// }

// for(var k = 1; k < ganjil.length; k++){
//   numGanjil -= ganjil[k];
// }

// if(numGenap === undefined){
//   numGenap = 0;
// }

// if (numGanjil === undefined){
//   numGanjil = 0;
// }

// result[0].push(numGenap);
// result[1].push(numGanjil);

// return result;
