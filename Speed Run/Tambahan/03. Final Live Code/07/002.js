/*
================
Galon Checker
================
Name :_____________

[INSTRUCTIONS]
galonChecker adalah sebuah function yang menerima satu parameter berupa array of string.
function tersebut akan menghitung jumlah galon yang penuh (F), setengah penuh (H) dan galon kosong (E)
dan function akan mereturn jumlah masing2 jenis galon dan total galon secara keseluruhan.

Adapun ketentuannya:
Full (F) = 1
Half (H) = 1/2
Empty (E) = 0

[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
galonChecker(['F','H','F'])
output: jumlah F: 2, jumlah H: 1, jumlah E: 0. Dan totalnya adalah: 2.5
*/

function galonChecker(array) {
  if (!array.length) return `NO DATA`;
  let f = 0;
  let h = 0;
  let e = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "F") {
      f++;
    } else if (array[i] === "H") {
      h++;
    } else {
      e++;
    }
  }
  let total = f + h / 2 + e * 0;
  return `jumlah F: ${f}, jumlah H: ${h}, jumlah E: ${e}. Dan totalnya adalah: ${total}`;
}

console.log(galonChecker(["F", "H", "F"]));
// jumlah F: 2, jumlah H: 1, jumlah E: 0. Dan totalnya adalah: 2.5
console.log(galonChecker(["H", "H", "F", "F", "E"]));
// jumlah F: 2, jumlah H: 2, jumlah E: 1. Dan totalnya adalah: 3
console.log(galonChecker(["E", "F", "F", "F", "H"]));
// jumlah F: 3, jumlah H: 1, jumlah E: 1. Dan totalnya adalah: 3.5
console.log(galonChecker(["E", "H"]));
// jumlah F: 0, jumlah H: 1, jumlah E: 1. Dan totalnya adalah: 0.5
console.log(galonChecker(["H", "H", "H", "H"]));
// jumlah F: 0, jumlah H: 4, jumlah E: 0. Dan totalnya adalah: 2
console.log(galonChecker([])); //NO DATA
