/* 
===============
Number Triangle
===============
​
Instruction:
Buatlah sebuah proses untuk membuat deret angka yang membentuk segitiga seperti contoh berikut.
​
Contoh 1 (height = 5):
Output:
12345
2345
345
45
5
​
Contoh 2 (height = 3):
Output:
123
23
3
​
Contoh 3 (height = 1):
Output:
1
 */
// Write code here
// function tinggiTangga(height) {
//   var height = 5;
//   for (var i = 1; i <= height; i++) {
//     var output = "";
//     for (var j = i; j <= height; j++) {
//       output = output + j;
//     }
//     console.log(output);
//   }
// }
// tinggiTangga(5);

function tinggiTangga2(tinggi) {
  var tinggi = 5;
  for (var i = 1; i <= tinggi; i++) {
    var output = "";
    for (var j = tinggi; j >= i; j--) {
      output = output + j;
    }
    console.log(output);
  }
}
tinggiTangga2(5);
