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
    //your code here
    let rute = ['Depok', 'Jakarta', 'Bandung', 'Surabaya', 'Bali']
    let indexAsal = []
    let indexTujuan = []
    

    for (let i = 0; i < pengirim.length; i++) {
      for (let j = 0; j < rute.length; j++) {
        if (rute[j] === pengirim[i].asal) {
          indexAsal.push(j)
        }
        else if (rute[j] === pengirim[i].tujuan) {
          indexTujuan.push(j)
        }
      }
    }

    let durasi = []
    for (let i = 0; i < indexAsal.length; i++) {
      for (let j = 0; j < indexTujuan.length; j++) {
        if (j == i) {
          durasi.push(Math.abs(indexTujuan[j] -  indexAsal[i]))
        }
      }
    }

    let tagihan = []
    for (let i = 0; i < pengirim.length; i++) {
      if (pengirim[i].ekspedisi === 'NJE') {
        tagihan.push(9000 - (9000 * (10 / 100)))
      }
      else {
        tagihan.push(9000)
      }
    }
    
    let arr = []
    for (let i = 0; i < pengirim.length; i++) {
      let obj = {}
          obj['pengirim'] = pengirim[i].nama
          obj['tagihan'] = tagihan[i] * durasi[i],
          obj['durasi'] = durasi[i]
      arr.push(obj)  
      }

      if (!pengirim.asal || !pengirim.tujuan) {
        pengirim.tagihan = 0
        pengirim.durasi = 0
      }
    return arr
}
  
  var case1 = [
    { nama: 'Jasper', asal: 'Depok', tujuan: 'Jakarta', ekspedisi: 'NJE' },
    { nama: 'Kevin', asal: 'Jakarta', tujuan: 'Surabaya', ekspedisi: 'Si Lambat' },
    { nama: 'Barry', asal: 'Bali', tujuan: 'Bandung', ekspedisi: 'NJE' }
  ];
  
  console.log(ongkosKirim(case1))
  /*
  [
    { pengirim: 'Jasper', tagihan: 8100, durasi: 1 },
    { pengirim: 'Kevin', tagihan: 18000, durasi: 2 },
    { pengirim: 'Barry', tagihan: 16200, durasi: 2 }
  ]
  */
  
  var case2 = [
    { nama: 'Patricia', asal: 'Jakarta', tujuan: 'Jakarta', ekspedisi: 'TnJ' },
    { nama: 'Anne', asal: 'Medan', tujuan: 'Depok', ekspedisi: 'NJE' }
  ];
  
  console.log(ongkosKirim(case2))
  /*
  [ 
    { pengirim: 'Patricia', tagihan: 9000, durasi: 1 },
    { pengirim: 'Anne', tagihan: 0, durasi: 0 }
  ]
  */