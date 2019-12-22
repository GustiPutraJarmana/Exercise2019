/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/
function encrypt(input) {
  let kamus = "!@#$%^&*()-+1234567890[]{}";
  let alphabeth = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < kamus.length; j++) {
      let a = kamus.indexOf(kamus[j]);
      let b = alphabeth.indexOf(input[i]);
      if (a == b) {
        result += kamus[j];
      }
    }
    if (input[i] > "z" || input[i] < "a") {
      result += input[i];
    }
  }
  return result;
}

console.log(encrypt("dimitri")); // $(1(86(
console.log(encrypt("irsyah mardiah")); //(67{!* 1!6$(!*
console.log(encrypt("dimitr€€")); // $(1(86€€
console.log(encrypt("d!mas")); // $!1!7
console.log(encrypt("@wtian")); // @[8(!2
