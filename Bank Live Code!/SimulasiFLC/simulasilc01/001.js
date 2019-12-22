/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 11.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

Deret bilangan prima
2, 3, 5, 7, 11, 13, 17, 19, 23, dst

Buatlah sebuah function getPrime dimana menerima sebuah parameter bertipe Number. 
Function tersebut mengembalikan/me-return array kumpulan deret bilangan prima sampai parameter tersebut.

Contoh 1:

input: 10
output: [ 2, 3, 5, 7 ]

//karena di-range angka 10 hanya bilangan 2, 3, 5 dan 7 saja yang merupakan bilangan prima

Contoh 2:

input: 44
output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]

// karena di-range angka 44 hanya bilangan di atas saja yang merupakan bilangan prima


RULES:
- wajib membuat algoritma/pseudocode untuk program getPrime

note: pastikan tidak menggunakan sintaks javascript, tapi fokus ke logika

REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++

Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):
STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1
*/

// function getPrime(num) {
//   let result = [];
//   if (num >= 2) {
//     for (let i = 2; i <= num; i++) {
//       if (i === 2 || i === 3 || i === 5 || i === 7) {
//         result.push(i);
//       } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
//         result.push(i);
//       }
//     }
//   }
//   return result
// }
// FUNCTION of 'getPrime' with parameter 'num'
// STORE 'result' with []
// IF 'num' greater equal to 2
//   FOR STORE 'i' with value 2 THEN 'i' less equal 'num' ADD num by 1
//     IF 'i' equal to 2 or 'i' equal to 3 or 'i' equal to 5 or 'i' equal to 7
//       DO push 'i' to [] 'result'
//     ENDIF
//     ELSE IF 'i' modulus 2 not equal to 0 and 'i' modulus 3 not equal to 0 and 'i' modulus 5 not equal to 0 and 'i' modulus 7 not equal to 0
//       DO push 'i' to [] 'result'
//     END IF
//   END FOR
// END IF
// DISPLAY 'result'
// END FUCTION

// console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
// console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
// console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
// console.log(getPrime(1)); // []
// console.log(getPrime(0)); // []
