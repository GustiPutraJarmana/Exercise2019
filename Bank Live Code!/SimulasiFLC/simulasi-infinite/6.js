/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 *
 * Function akan merubah angka yang sesuai dengan jenis dari parameter yang diterima (ganjil atau genap) menjadi (10 - angka tersebut).
 * Kecuali angka 0 yang tetap menjadi 0
 *
 * Misal:
 *  - jika jenis ganjil dan angkanya adalah 3 maka akan menjadi 7 (10 - 3).
 *  - jika jenis genap dan angkanya adalah 4 maka akan menjadi 6 (10 - 4).
 *  - jika jenis ganjil dan angkanya adalah 6 maka tidak berubah.
 *
 *
 * Outputnya adalah dalam bentuk string
 *
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan ganjil diubah menjadi (10 - bilangan tersebut)
 * Output: 092745638122468
 *
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 3. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  var tamp = "";
  var a = 10;

  for (var i = 0; i < data.length; i++) {
    if (data[i] == 0) {
      tamp += data[i];
    } else if (jenis === "ganjil" && data[i] % 2 !== 0) {
      tamp += a - data[i];
    } else if (jenis === "genap" && data[i] % 2 === 0) {
      tamp += a - data[i];
    } else {
      tamp += data[i];
    }
  }
  return tamp;
}

console.log(changeXRecursive("012345678922468", "ganjil")); // 092745638122468
console.log(changeXRecursive("0123456789", "genap")); // 0183654729
