// 1. STORE variable namaSiswa untuk menampung nama siswa.
// 2. STORE hasilUjian untu menampung hasil ujian siswa.
// 3. masukan beberapa kondisi
// 4. kondisi  pertama yaitu jika nilai antara 80 sampai 100, siswa akan mendapatkan nilai A dan akan lanjut ke langkah 5.
// 5. tampikan hasil kondisi pertama yaitu namaSiswa dan hasilUjian siswa A.
// 6. kondisi kedua yaitu jika nilai antara 65 sampai 79, siswa akan mendapat nilai B dan akan lanjut ke langkah 7.
// 7. tampikan hasil kondisi kedua yaitu namaSiswa dan nilai siswa yaitu B.
// 8. kondisi ketiga yaitu jika nilai antara 50 sampai 64, siswa akan mendapat nilai C maka akan lanjut ke langkah 9.
// 9. tampikan hasil kondisi ketiga yaitu namaSiswa dan nilai siswa yaitu C.
// 10. kondisi keempat yaitu jika nilai antara 35 sampai 49, siswa akan mendapat nilai D dan akan lanjut ke langkah 11.
// 11. tampikan hasil kondisi keempat yaitu namaSiswa dan nilai siswa yaitu D.
// 12.kondisi kelima kelima yaitu jika nilai antara 0 sampai 34, siswa akan mendapat nilai E dan akan lanjut ke langkah 13.
// 13. tampikan hasil kondisi kelima yaitu namaSiswa dan nilai siswa yaitu E.
// 14. jika selain kondisi di atas yang dimasukan maka akan ditampikan Nilai Invalid.

var namaSiswa = "Gusti";
var hasilUjian = 100;
if (hasilUjian >= 80 && hasilUjian <= 100 === true) {
  console.log(namaSiswa + " mendapat nilai A");
} else if (hasilUjian >= 65 && hasilUjian <= 79 === true) {
  console.log(namaSiswa + " mendapat nilai B");
} else if (hasilUjian >= 50 && hasilUjian <= 64 === true) {
  console.log(namaSiswa + " mendapat nilai C");
} else if (hasilUjian >= 35 && hasilUjian <= 49 === true) {
  console.log(namaSiswa + " mendapat nilai D");
} else if (hasilUjian >= 0 && hasilUjian <= 34 === true) {
  console.log(namaSiswa + " mendapat nilai E");
} else {
  console.log("Nilai Infalid");
}

/**
Buatlah sebuah algoritma untuk kasus berikut:
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E

 Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
**/
