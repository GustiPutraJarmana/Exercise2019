/**
  **************
  FAKTOR PRIMA
  **************

  Diberikan sebuah function faktorPrima dimana menerima sebuah parameter berupa number.
  Output dari function ini adalah faktor prima dari inputan angka parameter.

  Faktor Prima adalah angka yang habis dibagi oleh angka-angka dasar bilangan prima yaitu
  2, 3, 5 dan 7 (OIYA DAN TENTU SAJA DIRINYA SENDIRI!!)

  contoh 1:
  -----------
  input: 90
  output: 2 pangkat 1, 3 pangkat 2, 5 pangkat 1
  penjelasan:
    90
    /\
  2   45
      /\
    3   15
        /\
      3   5


  contoh 2:
  ----------
  input: 168
  output: 2 pangkat 3, 3 pangkat 1, 7 pangkat 1
  penjelasan:
    168
    /\
  2  84
     /\
    2  42
       /\
      2  21
         /\
        3  7

  contoh 3:
  ----------
  input: 44
  output: 2 pangkat 2, 11 pangkat 1
  penjelasan:
     44
     /\
    2  22
       /\
      2  11

RULES:
  - HANYA BOLEH MENGGUNAKAN LOOPING(FOR/WHILE) DAN CONDITION(IF ELSE)
  - HANYA BOLEH MENGGUNAKAN BUILT IN FUNCTION .push() DAN/ATAU .join() (jika diperlukan)
  - TIDAK BOLEH MENGGUNAKAN FUNCTION ES6
**/

function faktorPrima(num) {
  let dua = 0;
  let tiga = 0;
  let lima = 0;
  let tuju = 0;
  while (num % 2 == 0) {
    dua++;
    num /= 2;
  }
  while (num % 3 == 0) {
    tiga++;
    num /= 3;
  }
  while (num % 5 == 0) {
    lima++;
    num /= 5;
  }
  while (num % 7 == 0) {
    tuju++;
    num /= 7;
  }
  let result = [];
  if (dua !== 0) {
    result.push(`2 pangkat ${dua}`);
  } else if (tiga !== 0) {
    result.push(`3 pangkat ${dua}`);
  } else if (lima !== 0) {
    result.push(`5 pangkat ${dua}`);
  } else if (tuju !== 0) {
    result.push(`7 pangkat ${dua}`);
  }
  console.log(result);
  
}

console.log(faktorPrima(90)); // 2 pangkat 1, 3 pangkat 2, 5 pangkat 1
// console.log(faktorPrima(168)); // 2 pangkat 3, 3 pangkat 1, 7 pangkat 1
// console.log(faktorPrima(44)); // 2 pangkat 2, 11 pangkat 1
// console.log(faktorPrima(55)); // 5 pangkat 1, 11 pangkat 1
// console.log(faktorPrima(26)); // 2 pangkat 1, 13 pangkat 1
// console.log(faktorPrima(17)); // 17 pangkat 1
