/**
Kompetensi: Conditional

Implementasikan pseudocode yang kamu telah buat di nomor 1 menjadi sintaks javascript.

**/

// SKELETON CODE (Code Sample)

let umur = 6;
let tinggi = 150;
let tarif = 0;
if (umur <= 3 && umur >= 2) {
  tarif += 20000;
  if (umur <= 3 && umur >= 2 && tinggi > 70) {
    tarif += 10000;
  }
}
if (umur <= 7 && umur >= 4) {
  tarif += 35000;
  if (umur <= 7 && umur >= 4 && tinggi > 120) {
    tarif += 15000;
  }
}
if (umur <= 10 && umur >= 8) {
  tarif += 50000;
  if (umur <= 10 && umur >= 8 && tinggi > 70) {
    tarif += 20000;
  }
}
console.log(tarif);
