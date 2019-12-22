/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases
RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/
/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases
RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/

function numberLetters(str) {
  for (var a = 0; a < str.length; a++) {
    if (str[a] === "1") {
      str = str.replace(str[a], "i");
    } else if (str[a] === "4") {
      str = str.replace(str[a], "a");
    } else if (str[a] === "3") {
      str = str.replace(str[a], "e");
    } else if (str[a] === "7") {
      str = str.replace(str[a], "u");
    } else if (str[a] === "0") {
      str = str.replace(str[a], "o");
      // } else {
      //   str = str.replace(str[a], "");
      // }
    }
  }
  return str;
}

// Test cases
console.log(numberLetters("d1m1tr1w4hy7d1p7tr4")); // dimitriwahyudiputra
console.log(numberLetters("s3rg31dr4g7n0v")); // sergeidragunov
console.log(numberLetters("j1nk4z4m4")); // jinkazama
console.log(numberLetters("s7m3t4l")); // sumetal
console.log(numberLetters("m04m3t4l")); // moametal
console.log(numberLetters("")); //
