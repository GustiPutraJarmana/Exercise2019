/**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
  output: Semua lulus
- input: []
  output: Data kosong


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()

*/

function graduatesCount(scores) {
  var output = [];
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] >= 75) {
      output.push(scores[i]);
    }
  }
  output;
  if (scores.length === 0) {
    return "Data kosong";
  } else if (output.length === 0) {
    return "Tidak ada yang lulus";
  } else if (output.length > 0 && output.length < scores.length) {
    return output.length + " orang lulus";
  } else if (output.length === scores.length) {
    return "Semua orang lulus";
  }
}

// STORE variable 'output' with empty bracket
// FOR varible 'i' EQUAL TO O; 'i' GREATER THEN scores.length; 'i' EQUAL TO 'i' plus 1 THEN DO
//   IF scores index 'i' GREATER TO EQUAL 75 THEN DO
//       PUSH scores index 'i' to variable 'output'
//   ENDIF
// ENDFOR
// IF scores.length EQUAL TO 0 THEN
//     RETURN 'Data kosong'
// ELSE IF output.length EQUAL TO 0 THEN
//     RETURN 'Tidak ada yang lulus'
// ELSE IF output.length GREATER THEN 0 and output.length LESS THEN 0 THEN
//     RETURN output.length pluss ' orang lulus'
// ELSE IF output.length EQUAL TO score.length THEN
//     RETURN 'Semua orang lulus'
// ENDIF

// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
