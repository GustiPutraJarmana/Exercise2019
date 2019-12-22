/**
Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter
berupa angka yang merupakan ukuran waktu dalam menit.

Function akan me-return string waktu dalam format x jam x menit berdasarkan menit tersebut.

Contoh, jika menit adalah 63, maka function akan me-return "1 jam 3 menit".

**/

function konversiMenit(menit) {
  let m = menit % 60;
  let hour = 0;

  for (let i = 0; i < menit; i++) {
    if (i % 60 === 0) {
      hour += 1;
    }
  }

  if (m === 0) {
    return `${hour} jam`;
  } else if (menit < 60) {
    return `${m} menit`;
  } else {
    return `${hour} jam ${m} menit`;
  }
}

// TEST CASES / DRIVER CODE
console.log(konversiMenit(180)); // 1 jam 3 menit
console.log(konversiMenit(124)); // 2 jam 4 menit
console.log(konversiMenit(53)); // 53 menit
console.log(konversiMenit(88)); // 1 jam 28 menit
console.log(konversiMenit(120)); // 2 jam
