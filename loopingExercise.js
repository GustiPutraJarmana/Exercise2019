console.log("<======================================>");
console.log("While Looping");
// 1. While Looping
var angka = 0;
while (angka < 20) {
  angka = angka + 2;
  console.log(angka + " - I love coding");
}

// // OUTPUT

// // LOOPING PERTAMA
// // 2 - I love coding
// // 4 - I love coding
// // 6 - I love coding
// // 8 - I love coding
// // 10 - I love coding
// // 12 - I love coding
// // 14 - I love coding
// // 16 - I love coding
// // 18 - I love coding
// // 20 - I love coding
console.log("<======================================>");
var angka2 = 22;
while (angka2 > 2) {
  angka2 = angka2 - 2;
  console.log(angka2 + " - I will become fullstack developer");
}
// // LOOPING KEDUA
// // 20 - I will become fullstack developer
// // 18 - I will become fullstack developer
// // 16 - I will become fullstack developer
// // 14 - I will become fullstack developer
// // 12 - I will become fullstack developer
// // 10 - I will become fullstack developer
// // 8 - I will become fullstack developer
// // 6 - I will become fullstack developer
// // 4 - I will become fullstack developer
// // 2 - I will become fullstack developer

console.log("<======================================>");

console.log("2. For Looping");
// 2. For Looping
console.log("LOOPING PERTAMA");
for (var pertama1 = 1; pertama1 <= 20; pertama1++) {
  console.log(pertama1 + " - I love coding");
}

console.log("<======================================>");
console.log("LOOPING KEDUA");
for (var pertama2 = 20; pertama2 > 0; pertama2--) {
  console.log(pertama2 + " - I will become full stack developer");
}
// // LOOPING PERTAMA
// // 1 - I love coding
// // 2 - I love coding
// // 3 - I love coding
// // 4 - I love coding
// // 5 - I love coding
// // 6 - I love coding
// // 7 - I love coding
// // 8 - I love coding
// // 9 - I love coding
// // 10 - I love coding
// // 11 - I love coding
// // 12 - I love coding
// // 13 - I love coding
// // 14 - I love coding
// // 15 - I love coding
// // 16 - I love coding
// // 17 - I love coding
// // 18 - I love coding
// // 19 - I love coding
// // 20 - I love coding
// // LOOPING KEDUA
// // 20 - I will become fullstack developer
// // 19 - I will become fullstack developer
// // 18 - I will become fullstack developer
// // 17 - I will become fullstack developer
// // 16 - I will become fullstack developer
// // 15 - I will become fullstack developer
// // 14 - I will become fullstack developer
// // 13 - I will become fullstack developer
// // 12 - I will become fullstack developer
// // 11 - I will become fullstack developer
// // 10 - I will become fullstack developer
// // 9 - I will become fullstack developer
// // 8 - I will become fullstack developer
// // 7 - I will become fullstack developer
// // 6 - I will become fullstack developer
// // 5 - I will become fullstack developer
// // 4 - I will become fullstack developer
// // 3 - I will become fullstack developer
// // 2 - I will become fullstack developer
// // 1 - I will become fullstack developer
console.log("<======================================>");
console.log("3. Angka Ganjil dan Genap");

for (var loop1 = 1; loop1 <= 100; loop1++) {
  if (loop1 % 2 == 0) {
    console.log("GENAP");
  } else {
    console.log("GANJIL");
  }
}

// additional input
var input = 0;
if (input % 2 === 0) {
  console.log(input + " adalah angka GENAP");
} else if (input % 2 !== 0) {
  console.log(input + " adalah angka GANJIL");
} else if (input === 1) {
  console.log(input + " adalah angka GANJIL");
} else if (input === 0) {
  console.log("???");
}

for (var tambah2 = 1; tambah2 <= 100; tambah2 = tambah2 + 2) {
  if (tambah2 % 3 === 0) {
    console.log(tambah2 + " KELIPATAN 3");
  } else {
    console.log('""');
  }
}

for (var tambah5 = 1; tambah5 <= 100; tambah5 = tambah5 + 5) {
  if (tambah5 % 6 === 0) {
    console.log(tambah5 + " KELIPATAN 6");
  } else {
    console.log('""');
  }
}

for (var tambah9 = 1; tambah9 <= 100; tambah9 = tambah9 + 9) {
  if (tambah9 % 10 === 0) {
    console.log(tambah9 + " KELIPATAN 10");
  } else {
    console.log('""');
  }
}
