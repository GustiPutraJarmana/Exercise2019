/*
============
Total Primes
============

[INSTRUCTIONS]
totalPrimes adalah sebuha function yang menerima 1 parameter berupa number.
function akan mereturn sebuah value dari hasil total prima yang didapat

[EXAMPLES]
input : 3
process: [2, 3, 5] --> 2 + 3 + 5 = 10
output: 10

input : 5
process: [2, 3, 5, 7, 11] --> 2 + 3 + 5 + 7 + 11 = 10
output: 28

[RULES]
- WAJIB menggunakan pseudocode/ algoritma
- DILARANG menggunakan REGEX
*/

/*
Your Pseudocode here

*/

function totalPrimes(num) {
  for (var i = 1; i <= num; i++) {
    console.log(i);
  }
  
}

console.log(totalPrimes(3)) // 10
// console.log(totalPrimes(5)) // 28
// console.log(totalPrimes(10)) // 129
// console.log(totalPrimes(100)) // 24133
// console.log(totalPrimes(0)) // 0