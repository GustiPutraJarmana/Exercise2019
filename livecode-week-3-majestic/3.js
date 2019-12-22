/**
 * ============
 * Toserba 7000
 * ============
 *
 * Description
 * -----------
 * Toserba 7000 menjual segala barang dengan harga Rp.7000.
 * Tetapi, ada 3 barang yang di jual dengan harga berbeda,
 * yaitu :
 *  1. pensil -> Rp.10000
 *  2. penghapus -> Rp.15000
 *  3. materai -> Rp.7500
 *
 * Selain 3 barang di atas maka harga barang tersebut adalah Rp.7000
 *
 * Instruction
 * -----------
 * Buatlah sebuah function yang menerima 2 parameter yaitu, barang dan uang.
 * jika uang cukup function akan menampilkan "Berhasil membeli <nama barang>, kembaliannya Rp.<kembalian>"
 * jika uang tidak cukup makan akan menampilkan "uang tidak cukup membeli <nama barang>""
 *
 * Example
 * -------
 * contoh :
 * 1. barang = "pensil", uang = 20000
 *    output: Berhasil membeli pensil, kembaliannya Rp.10000
 * 2. barang = "gelas", uang 10000
 *    output: Berhasil membeli gelas, kembaliannya Rp.3000
 * 3. barang = "penghapus", uang = 9000
 *    output: Uang tidak cukup membeli penghapus
 * 4. barang = "baterai", uang = 3000
 *    output: Uang tidak cukup membeli baterai
 *
 * Restrictions
 * ------------
 * 1. Asumsi barang hanya dibeli 1 buah
 */

function toserba(barang, uang) {
  console.log(uang);

  // Write your code here
  let harga = 7000;
  let change = uang - harga;
  for (let i = 0; i < barang.length; i++) {
    if (barang === "pensil" && uang >= 10000) {
      let change1 = uang - 10000;
      return `Berhasil membeli ${barang}, kembaliannya Rp.${change1} `;
    } else {
      return `Uang tidak cukup membeli ${barang}`;
    }
   else if (barang === "materai" && uang > 7500) {
      let change2 = uang - 7500;
      return `Berhasil membeli ${barang}, kembaliannya Rp.${change2} `;
    } else {
      return `Uang tidak cukup membeli ${barang}`;
    }
    if (barang === "penghapus" && uang >= 15000) {
      let change3 = uang - 15000;
      return `Berhasil membeli ${barang}, kembaliannya Rp.${change3} `;
    } else {
      return `Uang tidak cukup membeli ${barang}`;
    }
    if (barang && uang >= harga) {
      return `Berhasil membeli ${barang}, kembaliannya Rp.${change} `;
    } else {
      return `Uang tidak cukup membeli ${barang}`;
    }
  }
}

console.log(toserba("pensil", 10000));
// Berhasil membeli pensil, kembaliannya Rp.0
console.log(toserba("materai", 7000));
// Uang tidak cukup membeli materai
console.log(toserba("penghapus", 16000));
// Berhasil membeli penghapus, kembaliannya Rp.1000
console.log(toserba("bola", 20000));
// Berhasil membeli bola, kembaliannya Rp.13000
console.log(toserba("jarum", 4000));
// Uang tidak cukup membeli jarum
