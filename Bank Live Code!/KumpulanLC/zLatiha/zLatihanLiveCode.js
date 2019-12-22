// Akan dijalankan sebuah operasi matematika dengan urutan kali (+) dan kurang (-).
// Function circularOperation akan menerima satu parameter berupa array angka, dan memproses satu per satu angka tersebut.
// Proses yang dilakukan adalah mengoperasikan setiap bilangan didalamnya, menggunakan simbol +, dan - berturut-turut.
// Simbol akan berotasi kembali ke + jika operasi - sudah dilakukan, sampai semua angka selesai di proses.
// Gambaran Proses:
// 0 + angka pertama - angka kedua + angka ketiga - angka keempat + angka kelima - angka keenam + ... (dan seterusnya)
// Function akan mereturn hasil kalkulasi dari operasi tersebut.
// Jika tidak ada angka yang diberikan, function akan me-return 0.
// Aturan: proses operasi satu per satu, dan TIDAK ADA aturan matematika yang harus memproses * sebelum + / !
// [CONTOH]
// input: [1, 2, 3, 4, 5]
// proses: 0 + 1 - 2 + 3 - 4 + 5
// output: 3
// input: [5, 4, 3, 2, 1, 2]
// proses: 0 + 5 - 4 + 3 - 2 + 1 - 2
// output: 1
// input: [1, 1, 1, 1]
// proses: 0 + 1 - 1 + 1 - 1
// output: 0
// input: []
// proses: 0
// output: 0
// */
// /*
// Simpan variabel number bentuk array tipe data angka
// Return hasil operasi + dan - secara bergantian dari variabel tersebut
// */
// Poin Calculator
function circularOperation(angka) {
  var result = 0;
  for (var i = 0; i < angka.length; i++) {
    console.log(angka[i]);
    console.log(i);
    if (i % 2 === 0) {
      result = result + angka[i];
    } else {
      result = result - angka[i];
    }
  }
  return result;
}

console.log(circularOperation([1, 2, 3, 4, 5])); // 3
console.log(circularOperation([5, 4, 3, 2, 1, 2])); // 1
console.log(circularOperation([1, 1, 1, 1])); // 0
console.log(circularOperation([])); // 0

// ================
// [INSTRUCTIONS]
// Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
// poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
// function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
// Adapun ketentuannya:
// Gold (G) = 2
// Silver (S) = 1
// Bronze (B) = 0.5
// [RULE]
// - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
// - Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
// - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
// - Dilarang menggunakan regex .match dan lainnya!
// - Dilarang menggunakan built in function .indexOf() dan .include()
// [EXAMPLE]
// poinCalculator("GSB")
// output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5

function poinCalculator(string) {
  var gold = 0;
  var silver = 0;
  var bronze = 0;
  var total = 0;
  //   var string = str.split("");
  for (var i = 0; i < string.length; i++) {
    console.log(string[i].length);
    if (string[i] == "G") {
      gold++;
      total += 2;
    } else if (string[i] == "S") {
      silver++;
      total += 1;
    } else if (string[i] == "B") {
      bronze++;
      total += 1 / 2;
    }
  }
  console.log(gold);
  console.log(silver);
  console.log(bronze);
  console.log(total);
  return (
    "Jumlah Gold : " +
    gold +
    " Jumlah Silver : " +
    silver +
    " Jumlah Bronze : " +
    bronze +
    ". Dan totalnya adalah : " +
    total
  );
}

console.log(poinCalculator("GSB"));

// [INSTRUKSI]
// Setiap student di HACKTIV8 ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
// Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.
// Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
// Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
// Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
// Formatnya adalah <Nama Student 1> dan <Nama Student 2>.
// [CONTOH]
// input: ['Budi', 'Badu', 'Indra', 'Indri']
// output: ['Budi dan Badu', 'Indra dan Indri']
// input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
// output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
// input: []
// output: []
// Simpan variabel Students berupa array dengan tipe data string
// Return 2 nama dalam bentuk gabungan array dengan kata hubung 'dan'
// Jika tidak habis dibagi 2 maka sisanya students berpasangan dengan Instruktur
function pairUp(nama) {
  var temporary = [];

  for (var i = 0; i < nama.length; i += 2) {
    if (nama[i] && nama[i + 1]) {
      temporary.push(nama[i] + " dan " + nama[i + 1]);
    } else {
      temporary.push(nama[i] + " dan Istruktur");
    }
  }
  return temporary;
}
console.log(pairUp(["Budi", "Badu", "Indra", "Indri"])); // ['Budi dan Badu', 'Indra dan Indri']
console.log(pairUp(["Budi", "Badu", "Indra", "Indri", "James"])); // ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
console.log(pairUp([])); // []
