/**
  ************
  TAMBAH DASH
  ************

  Diberikan sebuah function tambahDash(str) yang menerima satu parameter berupa string.
  Function akan mengembalikan str tersebut dengan menambahkan simbol dash ('-') di antara
  dua angka ganjil di dalam string yang menjadi parameter tersebut.

  Contoh 1:
  ---------
  input: '1233897'
  output: '123-389-7'

  Contoh 2:
  ---------
  input: '1739028'
  output: '1-7-3-9028'

  RULES:
    - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
    - TIDAK BOLEH MENGGUNAKAN BUILT IN FUNCTION DAN FUNCTION ES6 APAPUN
**/

function tambahDash(str) {
  let temp = "";
  let check = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) % 2 === 0) {
      temp += str[i];
    } else {
      if (Number(str[i + 1]) % 2 === 0) {
        temp += str[i];
      } else {
        check++;
        temp += `${str[i]}-`;
      }
    }
    if (i === str.length - 1) {
      if (Number(str[i]) % 2 === 0) {
        temp += str[i];
      } else {
        if (Number(str[i + 1]) % 2 === 0) {
          temp += str[i];
        } else {
          check++;
          temp += str[i];
        }
      }
    }
  }
  if (!check) return str;

  return temp;
}

console.log(tambahDash("454793")); // '4547-9-3'
console.log(tambahDash("1739028")); // '1-7-3-9028'
console.log(tambahDash("891829")); // '89-1829'
console.log(tambahDash("10192")); // '101-92'
console.log(tambahDash("222222")); // '222222'
