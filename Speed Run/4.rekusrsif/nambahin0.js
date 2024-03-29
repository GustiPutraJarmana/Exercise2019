/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  if (equation % 10 === 0) {
    return String(equation);
  }
  if (String(equation).length === 1) {
    return String(equation)[0];
  } else {
    let str = String(equation)[0];
    for (let i = 1; i < String(equation).length; i++) {
      str += "0";
    }

    return str + "+" + parseNumber(String(equation).slice(1));
  }
}

console.log(parseNumber(3333)); // 3000+300+30+3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
