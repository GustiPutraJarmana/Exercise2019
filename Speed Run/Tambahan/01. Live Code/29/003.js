/*
=========
Dash Word
=========

[INSTRUCTION]
Buatlah sebuah function yang menerima sebuah parameter berupa string dan number.
function akan memberikan dash (-) jumlah karakter yang ada di number.
functin tidak akan menambahkan dash (-) jika tidak ada karakter yang tersisa.

[EXAMPLE]
input: string: 'classicFox', number: 3
proses: setiap 3 karakter, akan ditambahkan dash
output: cla-ssi-cFo-x

[RULE]
- DILARANG menggunakan built in function .indexOf atau .include
- DILARANG menggunakan REGEX
*/

function dashWord(string, number) {
    // Write your code here
    
}

console.log(dashWord('Indonesia', 8)) // Indonesi-a
console.log(dashWord('Uzumaki Naruto', 2)) // Uz-um-ak-i -Na-ru-to
console.log(dashWord('081234567890', 4)) // 0812-3456-7890
console.log(dashWord('classicFox', 3)) // cla-ssi-cFo-x
console.log(dashWord('Coding for everyone', 1)) // C-o-d-i-n-g- -f-o-r- -e-v-e-r-y-o-n-e