/* 
Buatlah sebuah function yang menerima parameter array of numbers.

Function tersebut akan mereturn numbers dengan kondisi:
  - terurut dari yang terbesar
  - terfilter hanya yang diatas atau sama dengan rata-rata


RULES:
  - dilarang menggunakan built-in function apapun selain .push


CONTOH:

INPUT:
  [2, 3, 5, 5, 6, 7]

PROCESS:
  - rata-ratanya adalah 4.67
  - yang diatas atau sama dengan rata-rata [5, 5, 6, 7]
  - lalu diurut dari yang terbesar

OUTPUT: 
  [7, 6, 5, 5]
*/

function sortAndFilterAboveMean(numbers) {
  let a = 0;
  console.log(numbers.length);

  for (let i = 0; i < numbers.length; i++) {
    a += numbers[i] / numbers.length;
  }

  let b = Math.floor(a);
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= b) arr.push(numbers[i]);
  }
  for (let i = 0; i < arr.length; ) {
    if (arr[i + 1] > arr[i]) {
      let tampung = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tampung;
      i = Math.max(0, i - 1);
    } else {
      i++;
    }
  }
  return arr;
}

console.log(sortAndFilterAboveMean([2, 3, 5, 5, 6, 7])); // [ 7, 6, 5, 5 ]

console.log(sortAndFilterAboveMean([1, 10, 3, 9, 1, 4, 10])); // [ 10, 10, 9 ]

console.log(sortAndFilterAboveMean([45, 2, 8, 22, 3, 9])); // [ 45, 22 ]

console.log(sortAndFilterAboveMean([3, 5, 2, 6])); // [ 6, 5 ]
