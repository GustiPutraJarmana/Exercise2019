/*
===================================
Array Mastery: Multiply and Divide Operation
===================================
Nama:________
[INSTRUKSI]
Akan dijalankan sebuah operasi matematika dengan urutan kali (*) dan bagi (/).
Function multiplyDivide akan menerima satu parameter berupa array angka, dan memproses satu per satu angka tersebut.
Proses yang dilakukan adalah mengoperasikan setiap bilangan didalamnya, menggunakan simbol *, dan / berturut-turut.
Simbol akan berotasi kembali ke * jika operasi / sudah dilakukan, sampai semua angka selesai di proses.
Gambaran Proses:
0 * angka pertama / angka kedua * angka ketiga / angka keempat * angka kelima / angka keenam * ... (dan seterusnya)
Function akan mereturn hasil kalkulasi dari operasi tersebut YANG SUDAH DIBULATKAN.
Jika tidak ada angka yang diberikan, function akan me-return 0.

[CONTOH]
=================================
input: [1, 2, 3, 4, 5]
proses: 1 * 2 / 3 * 4  / 5
output (HARUS DIBULATKAN): 1
=================================
input: [5, 4, 3, 2, 1]
proses: 5 * 4 / 3 * 2 / 1
output (HARUS DIBULATKAN): 13
=================================
input: [1, 1, 1, 1]
proses: 1 * 1 / 1 * 1
output (HARUS DIBULATKAN): 1
=================================
input: []
output: 0
=================================

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan
  kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/


function multiplyDivide(numbers) {
    // Write your code here
    
}


// TEST CASES
console.log(multiplyDivide([1, 2, 3, 4, 5])); // 1
console.log(multiplyDivide([5, 4, 3, 2, 1])); // 13
console.log(multiplyDivide([1, 1, 1, 3])); // 3
console.log(multiplyDivide([0, 10, 2, 5, 7])); // 0
console.log(multiplyDivide([])); // 0