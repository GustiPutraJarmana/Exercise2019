/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.

Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus

Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2

Output:
  [ 666, 'deleted', 'deleted', 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce, .slice dan .splice!
*/

function arrayRemover(array, index, count) {
  if (index === 0) {
    for (let i = index; i < count; i++) {
      array[i] = "deleted";
    }
  } else if (index > 0) {
    for (let i = index; i <= count; i++) {
      console.log(i);
      array[i] = "deleted";
    }
  }
  return array
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // ['deleted', 'deleted', 3]
console.log(arrayRemover([666, 666, 333, 10, 5, 6], 1, 2)); // [ 666, 'deleted', 'deleted', 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // ['deleted', 'deleted', 'deleted']
