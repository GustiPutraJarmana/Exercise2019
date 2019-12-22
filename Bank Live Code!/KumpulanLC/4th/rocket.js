// /**

// Virus Percentage
// ================

// Implementasikan function virusPercentage untuk menghitung
// persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
// - *
// - #
// - @
// - $

// # Contoh:
// - `input` -> **##@
//   output -> 40% *, 40% #, 20% @
// - `input` -> **#*##
//   output -> 50% *, 50% #

// Contoh lain ada di test case

// # Asumsi:
// - `input` tidak akan pernah kosong
// - `input` pasti berisi virus

// # Aturan coding:
// - DILARANG menggunakan regex

// */

// function virusPercentage(input) {
//   console.log(input.length);

//   let output = "";
//   let bintang = 0;
//   let pagar = 0;
//   let at = 0;
//   let dolar = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === "*") {
//       bintang++;
//     } else if (input[i] === "#") {
//       pagar++;
//     } else if (input[i] === "@") {
//       at++;
//     } else if (input[i] === "$") {
//       dolar++;
//     }
//   }
//   if (!output) {
//     output += `${(bintang / input.length) * 100}% *`;
//   }
//   console.log(output);
// }

// console.log(virusPercentage("**#*##")); // 50% *, 50% #
// // console.log(virusPercentage('**######')); // 75% #, 25% *
// // console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
// // console.log(virusPercentage('@')); // 100% @
// // console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @

