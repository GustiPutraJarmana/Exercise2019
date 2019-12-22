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


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/
function filterDuplicate(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        delete arr[j];
      }
    }
    if (arr[i]) output.push(arr[i]);
  }
  return output;
}
function uniqueFinder(sentence) {
  if (!sentence.length) return 'NO WORDS'
  let a = sentence.toLowerCase();
  let b = [];
  let c = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === " ") {
      b.push(c);
      c = "";
    } else {
      c += a[i];
    }
  }
  b.push(c);
  let result = filterDuplicate(b);
  return result
}

console.log(uniqueFinder("hello black dragon and hello red dragon")); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder("hello HELLo hEllO hlloe")); // ['hello', 'hlloe']
console.log(uniqueFinder("john is coding and he is coding")); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder("blue blue red blue violet red violet")); // ['blue', 'red', 'violet']
console.log(uniqueFinder("")); // 'NO WORDS'
