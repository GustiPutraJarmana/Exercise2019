/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.
Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']
- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/

// function arrayMerge(firstData, secondData) {
//   var output = [];
//   for (var i = 0; i < firstData.length; i++) {
//     output.push(firstData[i]);
//   }
//   for (var j = 0; j < secondData.length; j++) {
//     output.push(secondData[j]);
//   }
//   var result = [];
//   for (var i = 0; i < output.length; i++) {
//     for (var j = i + 1; j < output.length; j++) {
//       if (output[i] == output[j]) {
//         delete output[j];
//       }
//     }
//     if (output[i]) result.push(output[i]);
//   }
//   return result;
// }
// Test cases

// console.log(
//   arrayMerge(["king", "devil jin", "akuma"], ["eddie", "steve", "geese"])
// );
// // ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

// console.log(arrayMerge(["sergei", "jin"], ["jin", "steve", "bryan"]));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(
  arrayMerge(
    ["alisa", "yoshimitsu"],
    ["devil jin", "yoshimitsu", "alisa", "law"]
  )
);
// ['alisa', 'yoshimitsu', 'devil jin', 'law']

// console.log(arrayMerge([], ['devil jin', 'sergei']));
// // // ['devil jin', 'sergei']

// console.log(arrayMerge(['hwoarang'], []));
// // // ['hwoarang']

// console.log(arrayMerge([], []));
// // []
