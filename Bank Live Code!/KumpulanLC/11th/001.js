// Buatlah Pseudocode untuk kasus berikut:
// Sebuah perahu layar sedang melaju dengan kecepatan 30km/jam
// Perahu tersebut dipengaruhi oleh kecepatan ombak yang berlawanan dengan arah lain

// - Jika ombak dibawah 1 meter maka kecepatan tetap.
// - Jika ombak setinggi 1 meter maka kecepatan akan berkurang sebesar 7km/jam
// - Jika ombak setinggi 2 meter maka kecepatan akan berkurang sebesar 15km/jam
// - Jika ombak lebih tinggi daripada 2 meter maka perahu akan terbalik, sehingga kecepatan menjadi 0km/jam

// Tampilkan kecepatan perahu jika di depan ada ombak setinggi x meter

// STORE kecepatan equal to 30
// STORE ombak with any value
// IF ombak less then 1 THEN
//     DO kecepatan equal to kecepatan
//     ELSE IF ombak equal to 1 THEN
//     DO kecepatan equal to kecepatan minus 7 THEN
//     ELSE IF ombak equal to 2 THEN
//     DO kecepatan equal to kecepatan minus 15 THEN
//     ELSE
//     DO kecepatan equal to 0
// ENDIF
// DISPLY kecepatan perahu + kecepatan + km/jam jika di depan ada ombak setinggi + ombak + meter

var kecepatan = 30;
var ombak = 3;
if (ombak < 1) {
  kecepatan = kecepatan;
} else if (ombak === 1) {
  kecepatan = kecepatan - 7;
} else if (ombak === 2) {
  kecepatan = kecepatan - 15;
} else {
  kecepatan = 0;
}
console.log(
  "Kecepatan perahu " +
    kecepatan +
    " km/jam jika di depan ombak setinggi " +
    ombak +
    " meter"
);
