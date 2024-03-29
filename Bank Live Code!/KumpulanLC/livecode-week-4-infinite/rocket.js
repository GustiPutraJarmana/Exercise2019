/*
===============
Treasure Finder
===============

Kru bajak laut hacktiv-arr sedang melakukan pencarian harta karun.
buatlah sebuah fungsi finder yang dapat menghitung berapa banyak
harta karun yang mereka temukan selama perjalanan.

- fungsi finder menerima sebuah parameter berupa string
  dan menghitung julah harta karun yang terdapat dalam input string tersebut
- harta karun yang dicari adalah: h, a, r, t, k, u, n
- harta karun akan berkurang jika di dalam input terdapat angka, dan pengurangannya disesuaikan dengan angka yang muncul
  misal: jika muncul angka 5 maka harta akan berkurang 5

- fungsi akan mereturn jumlah harta karun yang diperoleh
- jika tidak menemukan harta karun me-return 'Harta karun tidak ditemukan'
- jika harta karun habis karena terlalu banyak angka/pengurangan, maka return 'Harta karun telah direbut bajak laut lain!'

[Rules]
  - Dilarang menggunakan built-in function .indexOf, .includes, .match, ataupun regex
*/
function finder(treasure) {
  if (!treasure.length) return "Harta karun tidak ditemukan";
  let check = 0;
  let a = 0;
  for (let i = 0; i < treasure.length; i++) {
    for (let j = 0; j < treasure[i].length; j++) {
      if (
        treasure[i][j] === "h" ||
        treasure[i][j] === "a" ||
        treasure[i][j] === "r" ||
        treasure[i][j] === "t" ||
        treasure[i][j] === "k" ||
        treasure[i][j] === "u" ||
        treasure[i][j] === "n"
      ) {
        check++;
      }
      let num = Number(treasure[i][j]);
      if (!Number.isNaN(num)) {
        a += num;
      }
    }
  }
  let total = check - a;
  if (!check) return "Harta karun tidak ditemukan";
  if (!total) return "Harta karun telah direbut bajak laut lain!";
  if (!a) {
    return `Berhasil memperoleh ${check} harta karun`;
  } else {
    return `Berhasil memperoleh ${total} harta karun`;
  }
}

console.log(finder(["harta", "karun"])); // Berhasil memperoleh 10 harta karun
console.log(finder(["treasure", "3", "hunt"])); // Berhasil memperoleh 6 harta karun
console.log(finder(["assassins", "cr3ed", "black", "f1ag"])); // Berhasil memperoleh 3 harta karun
console.log(
  finder([
    "kjsadf",
    "hlkjhasfd",
    "lxcmvnbzcv",
    "baksljdslkjdfh",
    "awiuekjsadf",
    "jkagfkjg99"
  ])
); // Harta karun telah direbut bajak laut lain!
console.log(finder([""])); // Harta karun tidak ditemukan
console.log(finder([])); // Harta karun tidak ditemukan
