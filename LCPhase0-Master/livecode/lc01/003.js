/**
  Kompetensi: Loopings

  Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
  Disediakan variable height dan akan membuat sebuah pola tangga menampilkan x ke samping di baris ganjil,
  dan o di baris genap.
  Buatlah sebuah tangga string dengan pola berikut:

  Contoh 1 (height = 3)
  ---------------------
  tampilan:
  x
  oo
  xxx

  Contoh 2 (height = 6)
  ----------------------
  tampilan:
  x
  oo
  xxx
  oooo
  xxxxx
  oooooo

  WAJIB MENGGUNAKAN LOOPING
**/

let a = 20;
let b = "";
for (let i = 0; i < a; i++) {
  let tamp = "";
  for (let j = 0; j < [i + 1]; j++) {

    if (i % 2 === 0) {
      tamp += "x";
    } else {
      tamp += "o";
    }
  }
  console.log(tamp);
}
