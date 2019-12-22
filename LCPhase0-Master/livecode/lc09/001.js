/**
Array Injector
--------------
Implementasikan function `arrayInjector` untuk menyisipkan `secondData` ke `firstData`.
Diberikan juga parameter tambahan yaitu `index` yang akan digunakan untuk menandakan bahwa
`secondData` akan dimasukkan mulai ke `index`.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

Contoh:
  - input: [8, 'foobar', 'foobaz'], 1, ['bar', 'baz']
    output: [8, 'bar', 'baz', 'foobar', 'foobaz']
*/
function arrayInjector(firstData, index, secondData) {
  let result = [];
  for (let i = 0; i < index; i++) {
    result.push(firstData[i]);
  }
  for (let i = 0; i < secondData.length; i++) {
    result.push(secondData[i]);
  }
  for (let i = index; i < firstData.length; i++) {
    result.push(firstData[i]);
  }
  return result;
}

// STORE 'result' with value empty array/ []
// FOR set 'i' by 0; 'i' less then 'index'; increment 'i'
//     DO push 'firstData[i]' to 'result'
// ENDFOR
// FOR set 'i' by 0; 'i' less then length of 'secondData'; increment 'i'
//     DO push 'secondData[i]' to 'result'
// ENDFOR
// FOR set 'i' by 'indext'; 'i' less then length of 'firstData'; increment 'i'
//     DO push 'firstData[i]' to 'result'
// ENDFOR
// DIPLAY 'result'!



// console.log(arrayInjector([1, 5, 6], 1, [2, 3, 4]));
// [1, 2, 3, 4, 5, 6]

console.log(arrayInjector([10, 20, 70], 2, [30, 40, 50, 60]));
// [10, 20, 30, 40, 50, 60, 70]

// console.log(
//   arrayInjector(["Dimitri", "Alexei", "Alexander", "Alisa"], 3, ["Dragunov"])
// );
// ['Dimitri', 'Alexei', 'Alexander', 'Dragunov', 'Alisa']
