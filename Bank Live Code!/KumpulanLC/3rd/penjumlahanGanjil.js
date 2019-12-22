/*
================================
Array Mastery: Add Evens and Odds
================================

[INSTRUKSI]

Function addEvenOdd akan menerima satu parameter berupa array of number. 
Kelompokkanlah hasil penjumlahan bilangan yang genap dan bilangan yang ganjil dan return array 2 dimensi 
di mana array pertama merupakan hasil penjumlahan angka ganjil dan array selanjutnya adalah hasil penjumlahan angka genap

Contoh:
input: [3, 5, 7, 8]
output: [[15], [8]]

input: [2, 4, 6, 10]
output: [[0], [22]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
// */
// STORE variable 'result' with empty bracket
// STORE variable 'genap' EQUALS 0
// STORE variable 'gajil' EQUALS 0
// FOR variable 'i' EQUALS 0; i GREATER THEN length of arrayMerge.Num; i EQUALS i plus 1 THEN
//     IF index of arr.Num mod 2 EQUALS TO 0 THEN
//         'genap' EQUALS 'genap' plus index of arr.Num
//     ELSE
//         'ganjil' EQUALS 'ganjil' plus index of arr.Num
//     ENDIF
//     ENDFOR
// push array of 'ganjil' and array of 'genap' to 'result'
// RETURN 'result'

function addEvenOdd(arrNum) {
  let result = [];
  let ganjil = [];
  let genap = [];
  if (!arrNum.length) return [[0], [0]];
  for (let i = 0; i < arrNum.length; i++) {
    arrNum[i] % 2 !== 0 ? ganjil.push(arrNum[i]) : genap.push(arrNum[i]);
  }
  result.push(ganjil, genap);
  return result;
}

console.log(addEvenOdd([3, 5, 7, 8])); // [ [15], [8] ]

console.log(addEvenOdd([2, 4, 6, 10])); // [ [0], [22] ]

console.log(addEvenOdd([])); // [ [0], [0] ]
