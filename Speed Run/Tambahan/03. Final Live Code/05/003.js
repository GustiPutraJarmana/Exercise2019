/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.

Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6

RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!

*/

function countSolo(numbers) {
  let temp = [];
  for (let i = 0; i < numbers.length; i++) {
    let flag = false;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j] && i !== j) {
        flag = true;
      }
    }
    if (!flag) {
      temp.push(numbers[i]);
    }
  }
  let result = 0;
  for (let i = 0; i < temp.length; i++) {
    result += temp[i];
  }
  return `${result} (${temp.join(", ")})`;
}

console.log(countSolo([5, 5, 6, 6, 3, 1, 2, 7, 7])); // 6 (3,1,2)
console.log(countSolo([3, 6, 3, 6, 1, 1, 2, 1])); // 2 (2)
console.log(countSolo([3, 3, 3, 3, 4, 5, 8, 10, 11])); // 38 ()
