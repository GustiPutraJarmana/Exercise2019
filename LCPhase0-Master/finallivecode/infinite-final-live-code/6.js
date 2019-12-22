/* 
Budi ingin menyusun batu bata dengan ukuran yang sama sampai membentuk piramid 2 dimensi
Jika piramid bertingkat 1, Budi hanya memerlukan 1 batu bata
  B
Jika piramid bertingkat 2, Budi memerlukan 3 batu bata
  B
 B B
Jika piramid bertingkat 3, Budi memerlukan 6 batu bata
  B
 B B
B B B 
Jika piramid bertingkat 4, Budi memerlukan 10 batu bata
   B
  B B
 B B B 
B B B B

Di setiap tingkat bertambah 1 batu bata dibanding tingkatan diatasnya

Buatlah function piramid (n) yang memberitahu berapa jumlah batu bata yang diperlukan untuk membuat piramid bertingkat n.


[RULES]
  1. Wajib menggunakan RECURSIVE.
  2. Dilarang membuat function tambahan selain function piramid.
  3. Dilarang menambah parameter function.


*/

function piramid(n) {
  if (!n || n === 0) return 0;
  else {
    return (n += piramid(n - 1));
  }
}

// console.log(piramid()); // 0
// console.log(piramid(0)); // 0
// console.log(piramid(1)); // 1
// console.log(piramid(2)); // 3
console.log(piramid(3)); // 6
console.log(piramid(4)); // 10
// console.log(piramid(5)); // 15
// console.log(piramid(6)); // 21
// console.log(piramid(100)); // 5050
// console.log(piramid(888)); // 394716
//  n     n=3      n=2     n=1    n=0
// 3 + (3-1) + ( 2-1) + (1-1) (bascase)
// 3+2+1

//  n    n=5       n=4     n=3    n=2     n=1       n=0
//  5 + (5-1)     (4-1)   (3-1)  (2-1)    (1-1)    (basecae)
//  5+4+3+2+1
