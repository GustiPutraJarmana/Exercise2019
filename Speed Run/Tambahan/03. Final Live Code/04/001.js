/*
=============
UNIQUE FINDER
=============

Name :_____________

[INSTRUCTIONS]

uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.

Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function uniqueFinder(sentence) {
    if (!sentence.length) return 'NO WORDS'
  let str = sentence.toLowerCase();
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
  let output = [];
  for (let i = 0; i < a.length; i++) {
    let flag = true;
    if (output.length === 0) {
      output.push(a[0]);
    }
    for (let j = 0; j < output.length; j++) {
      if (a[i] === output[j]) {
        flag = false;
      }
    }
    if (flag) {
      output.push(a[i]);
    }
  }
  return output;
}

console.log(uniqueFinder("hello black dragon and hello red dragon")); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder("hello HELLo hEllO hlloe")); // ['hello', 'hlloe']
console.log(uniqueFinder("john is coding and he is coding")); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder("blue blue red blue violet red violet")); // ['blue', 'red', 'violet']
console.log(uniqueFinder("")); // 'NO WORDS'
