/*
============
ONGKOS KIRIM
============
ongkosKirim adalah sebuah fungsi yang menerima parameter berupa array of object.
Function akan menerima sebuah parameter array of object dengan format:
​
[
  { nama: <nama pengirim>, asal: <asal pengirim>, tujuan: <tujuan pengiriman>, ekspedisi: <nama ekspedisi>},
  { nama: <nama pengirim>, asal: <asal pengirim>, tujuan: <tujuan pengiriman>, ekspedisi: <nama ekspedisi>},
  ...
]
​
Data di atas merupakan campuran seluruh data pengiriman dari berbagai ekspedisi.
​
Kota-kota yang dimiliki perusahaan adalah secara berurut adalah Depok, Jakarta, Bandung, Surabaya, Bali
​
Function akan memproses array of object tersebut untuk membuat sebuah laporan pengiriman dalam bentuk array of object dengan format:
​
[
  { pengirim: <nama pengirim>, tagihan: <jumlah tagihan>, durasi: <jumlah durasi pengiriman> },
  { pengirim: <nama pengirim>, tagihan: <jumlah tagihan>, durasi: <jumlah durasi pengiriman> },
  ...
]
​
Data yang diharapkan merupakan perhitungan tagihan dan durasi pengiriman dengan ketentuan:
- perjalanan antar kota bernilai 9000/kota
    Ex. dari Depok ke Bandung = Depok >> Jakarta >> Bandung = 2 * 9000 = 18000
    Ex. dari Bali ke Bandung = Bali >> Surabaya >> Bandung = 2 * 9000 = 18000
- Pengiriman dalam kota bernilai 9000
- Untuk pengiriman dengan ekspedisi NJE diskon 10%
- Jika value kota asal atau tujuan tidak ada di dalam daftar kota yang sudah disediakan, maka tagihan 0 dan durasi 0.
- Pengiriman tiap kota berdurasi 1 hari. 
    Ex. dari Depok ke Bandung = Depok >> Jakarta >> Bandung = 2 hari

*/

function ongkosKirim(pengirim) {
  let kota = ["Depok", "Jakarta", "Bandung", "Surabaya", "Bali"];
  let result = [];
  for (let i = 0; i < pengirim.length; i++) {
    let obj = {
      pengirim: "",
      tagihan: 0,
      durasi: 0
    };
    let obj1 = {
      pengirim: "",
      tagihan: 0,
      durasi: 0
    };
    let check = 0;
    let flag = false;
    for (let j = 0; j < kota.length; j++) {
      if (pengirim[i].asal === kota[j] || pengirim[i].tujuan === kota[j]) {
        check++;
        if (pengirim[i].asal === pengirim[i].tujuan) {
          flag = true;
        }
        obj.pengirim = pengirim[i].nama;
        obj1.pengirim = pengirim[i].nama;
        let harga1 =
          Math.abs(
            kota.indexOf(pengirim[i].tujuan) - kota.indexOf(pengirim[i].asal)
          ) * 9000;
        if (harga1 === 0) harga1 = 9000;
        let discount = harga1 * 0.1;

        if (pengirim[i].ekspedisi === "NJE") {
          obj.tagihan = harga1 - discount;
        } else {
          obj.tagihan = harga1;
        }
        obj.durasi = Math.abs(
          kota.indexOf(pengirim[i].tujuan) - kota.indexOf(pengirim[i].asal)
        );
        if (obj.durasi === 0) obj.durasi = 1;
      }
    }
    if (check === 2 || (check === 1 && flag)) {
      result.push(obj);
    } else {
      result.push(obj1);
    }
  }

  return result;
}

var case1 = [
  { nama: "Jasper", asal: "Depok", tujuan: "Jakarta", ekspedisi: "NJE" },
  {
    nama: "Kevin",
    asal: "Jakarta",
    tujuan: "Surabaya",
    ekspedisi: "Si Lambat"
  },
  { nama: "Barry", asal: "Bali", tujuan: "Bandung", ekspedisi: "NJE" }
];

console.log(ongkosKirim(case1));
/*
  [
    { pengirim: 'Jasper', tagihan: 8100, durasi: 1 },
    { pengirim: 'Kevin', tagihan: 18000, durasi: 2 },
    { pengirim: 'Barry', tagihan: 16200, durasi: 2 }
  ]
  */

var case2 = [
  { nama: "Patricia", asal: "Jakarta", tujuan: "Jakarta", ekspedisi: "NJE" },
  { nama: "Anne", asal: "Medan", tujuan: "Depok", ekspedisi: "NJE" }
];

console.log(ongkosKirim(case2));
// // /*
// // [
// //   { pengirim: 'Patricia', tagihan: 9000, durasi: 1 },
// //   { pengirim: 'Anne', tagihan: 0, durasi: 0 }
// // ]
// // */
