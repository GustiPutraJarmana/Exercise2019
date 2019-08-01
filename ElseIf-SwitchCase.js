// else - if CONDOTION
var nama = "Gusti";
var peran = "gigolo";

if (nama === "" && peran === "") {
  console.log("Nama harus diisi!");
} else if (nama && peran === "") {
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} else if (nama && peran === "Ksatria") {
  console.log("Selamat datang di Dunia Proxytia," + nama);
  console.log(
    "Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!"
  );
} else if (nama && peran === "Tabib") {
  console.log("Selamat datang di Dunia Proxytia," + nama);
  console.log(
    "Halo " + peran + " " + nama + ", kamu dapat membantu temanmu yang terluka!"
  );
} else if (nama && peran === "Penyihir") {
  console.log("Selamat datang di Dunia Proxytia," + nama);
  console.log(
    "Halo " +
      peran +
      " " +
      nama +
      ", kamu bisa ciptakan keajaiban untuk mendapat kemenanganmu!"
  );
} else {
  console.log(
    "Maaf " +
      nama +
      " option " +
      peran +
      " yang anda masukan tidak ada dalam pilihan peran!"
  );
}

// // Output untuk Input nama = '' dan peran = ''
// ("Nama harus diisi!");

// //Output untuk Input nama = 'Mikael' dan peran = ''
// ("Halo Mikael, Pilih peranmu untuk memulai game!");

// //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
// ("Selamat datang di Dunia Proxytia, Nina");
// ("Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");

// //Output untuk Input nama = 'Danu' dan peran 'Tabib'
// ("Selamat datang di Dunia Proxytia, Danu");
// ("Halo Tabib Danu, kamu akan membantu temanmu yang terluka.");

// //Output untuk Input nama = 'Zero' dan peran 'Penyihir'
// ("Selamat datang di Dunia Proxytia, Zero");
// ("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!");

// (Switch - Case CONDITION)
var nama = "Kevin";
var peran = "PIMP";

switch (true) {
  case nama === "" && peran === "": {
    console.log("Nama harus diisi!");
    break;
  }
  case nama && peran === "": {
    console.log("Halo " + nama + ", silahkan pilih peranmu!");
    break;
  }
  case nama && peran === "Ksatria": {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log(
      "Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!"
    );
    break;
  }
  case nama && peran === "Tabib": {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log(
      "Halo " +
        peran +
        " " +
        nama +
        ", kamu akan membantu temanmu yang terluka!"
    );
    break;
  }
  case nama && peran === "Penyihir": {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log(
      "Halo " +
        peran +
        " " +
        nama +
        ", ciptakan keajaiban yang membantu kemenanganmu!"
    );
    break;
  }
  default: {
    console.log(
      "Maaf " +
        nama +
        " option " +
        peran +
        " yang anda masukan tidak ada dalam pilihan peran!"
    );
  }
}

// // PERUBAHAN ELSE IF CONDITION ----> SWITCH - CASE CONDITION

// // Another Switch-Case
// var tanggal = 32; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// var bulan = 6; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// var tahun = 2201; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

// switch (true) {
switch (true) {
  case tanggal > 0 && tanggal < 31:
    break;
  default:
    tanggal = "tanggal invalid";
}
switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
  default:
    bulan = "Bulan Invalid";
}
switch (true) {
  case tahun >= 1900 && tahun <= 2200:
    break;
  default:
    tahun = "Tahun Invalid";
}

console.log(tanggal + " " + bulan + " " + tahun);

var jumlahItem = 4;

if (jumlahItem > 0) {
  console.log(jumlahItem + " sandal");
}
