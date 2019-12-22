/*
==================================
Array Mastery: Shortest Word
==================================

Nama:________

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[CONSTRAINTS]
Dilarang menggunakan function .map/.filter/.reduce!
Diarang menggunakan regex!

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!
function split(str, operator) {
  let a = [];
  let b = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === operator) {
      a.push(b);
      b = "";
    } else {
      b += str[i];
    }
  }
  a.push(b);
  return a;
}
function sortingArr(arr) {
  for (let i = 0; i < arr.length; ) {
    if (arr[i + 1] < arr[i]) {
      let tampung = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tampung;
      i = Math.max(0, i - 1);
    } else {
      i++;
    }
  }
  return arr;
}
function duplicateArr(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    if (output.length === 0) {
      output.push(arr[0]);
    }
    for (let j = 0; j < output.length; j++) {
      if (arr[i] === output[j]) {
        flag = false;
      }
    }
    if (flag) {
      output.push(arr[i]);
    }
  }
  return output;
}
function shortestWords(words) {
  let arrA = words.toLowerCase();

  let str = split(arrA, " ");
  let panjang = [];
  for (let i = 0; i < str.length; i++) {
    panjang.push(str[i].length);
  }
  let sortP = sortingArr(panjang);
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].length == sortP[0]) {
      temp.push(str[i]);
    }
  }

  let result = duplicateArr(temp);
  return result;
}

console.log(shortestWords("Do you want to become a great coder ?")); // ['a', '?']
console.log(shortestWords("You dont know what you have until you lose it!")); // ['you', 'it!']
console.log(shortestWords("I am diligent")); // ['I']
