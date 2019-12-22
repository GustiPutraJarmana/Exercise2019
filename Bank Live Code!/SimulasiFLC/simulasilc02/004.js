/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/
function split(str) {
  let a = [];
  let b = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      a.push(b);
      b = "";
    } else {
      b += str[i];
    }
  }
  a.push(b);
  return a;
  // let splitKoma = split(str, ",")// untuk memanggil;
}
function averageLengthWord(words) {
  let p = words.length;
  let a = split(words);
  let b = a.length;
  let c = "";
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      c += a[i][j];
    }
  }
  let aveKata = Math.round(c.length / b);
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].length === aveKata) {
      result.push(a[i]);
    }
  }
  return result
}

console.log(averageLengthWord('dd dddd dddddd dddddddd'));
console.log(averageLengthWord("Do you want to become a great coder ?")); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []
