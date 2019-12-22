/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/
// STORE 'nyawa' with value 3
// STRORE 'pelaku' with value 0
// FOR store 'i' with value 0; 'i' greater then 'array'.length; incremet 'i' by 1
//     IF 'array'[i] equal to '@'
//         DO 'nyawa' dincremet by 1
//     ELSEIF 'array'[i] equal to 'Villain'
//         ADD 'pelaku' by 1
//     ENDIF
//     IF 'nyawa' equal to 0
//     RETURN `Ooops, you die. You got ${pelaku} villains`
//     ENDIF
// ENDFOR
// RETURN `Nice work, detective! You got all villains: ${pelaku}`;

// Algoritma / Pseudocode here..

function test(array) {
  let nyawa = 3;
  let pelaku = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "@") {
      nyawa--;
    } else if (array[i] === "Villain") {
      pelaku++;
    }
    if (nyawa === 0) {
      return `Ooops, you die. You got ${pelaku} villains`;
    }
  }
  return `Nice work, detective! You got all villains: ${pelaku}`;
}

console.log(test(["*", "*", "@", "*", "Villain", "*", "@", "Villain"]));
console.log(
  test(["*", "*", "@", "*", "@", "Villain", "*", "Villain", "Villain", "@"])
);
console.log(
  test(["*", "*", "@", "*", "@", "Villain", "*", "Villain", "@", "Villain"])
);
