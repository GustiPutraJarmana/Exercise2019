/**
 * =============
 * Word Triangle
 * =============
 *
 * Instruction
 * -----------
 * Tulislah kode untuk menampilkan kata dan membentuk segitiga seperti berikut:
 *
 * Example
 * -------
 * @input = 'yusuf'
 * @output =
 * y
 * yu
 * yus
 * yusu
 * yusuf
 */

var input = "adiel";
for (let i = 0; i < input.length; i++) {
  let result = "";
  for (let j = 0; j <= i; j++) {
    result += input[j];
  }
  console.log(result);
}
