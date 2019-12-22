/*
Disediakan sebuah function numberGrouping yang bertugas untuk menerima 
sebuah parameter berupa angka, dan mengembalikan susunan angka baru yang 
merupakan hasil pengelompokan berdasarkan 3 digit angka. Apabila jumlah 
angka yang belum dikelompokan ada 4 maka akan dibagi menjadi 2 x 2 digit 
angka bukan 3 dan 1
Ex: Input: [ 1 , 2 , 3 , 4 , 5 , 6 ]
Output: 123-456
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]
Output: 123-456-78-91
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
Output: 123-456-78
*/

function numberGrouping(angka) {
    // Write your code here

}

console.log(numberGrouping([4,6,7,9,2,9])); //467-929
console.log(numberGrouping([6,3,1,8,4,7,9,3,5,8,9,9,7])); //631-847-935-89-97
console.log(numberGrouping([1,8,4,7,3,7,1])); //184-73-71