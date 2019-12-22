/**

  Diberikan sebuah function sumThree dimana function ini menerima input parameter berupa
  array multidimensi.
  Function ini akan mengembalikan nilai yang menambahkan angka yang memiliki 3 digit.

  RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARANG MENGGUNAKAN built in function .map, .filter, .reduce
  - DILARANG MENGGUNAKAN REGEX

**/

// STORE and SAVE 'result' with 0
//   LOOPING for the 'params'
//     LOOPING for each index of 'params'
//     STORE 'temp' with empty string then ADD with value of params
//       IF 'temp' length equals to 3 and the TYPEOF value of params equals to Number
//         STORE and ADD 'result' with value of params
//   SHOW and DISPLAY 'result'

// function sumThree(params) {
//   //your code here;
//   var result = 0;
//   for(var i = 0; i < params.length; i++){
//     for(var j = 0; j < params[i].length; j++){
//       var temp = '' + params[i][j]
//       if(temp.length === 3 && typeof params[i][j] === 'number'){
//         result += params[i][j]
//       }
//     }
//   }
//   return result
// }

//OR

function sumThree(params) {
  let result = 0;
  let temp = [];
  for (let i = 0; i < params.length; i++) {
    for (let j = 0; j < params[i].length; j++) {
      let str = String(params[i][j]);
      if (str.length === 3) {
        let number = Number(str);
        if (!Number.isNaN(number)) result += number;
      }
    }
  }
  return (result);
}

console.log(
  sumThree([
    ["a", 12, "c", 342],
    ["fox", 4000, 201, true]
  ])
); //543

console.log(
  sumThree([
    ["a", 12, "c", 342],
    ["fox", 4000, 201, true]
  ])
); //543
