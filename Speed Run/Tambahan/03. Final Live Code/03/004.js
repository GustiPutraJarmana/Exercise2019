/*
========
PairChar
========

[INSTRUCTION]
diberikan sebuah input berupa array multidimensi yang berisi character - character unik.
function pairChair akan mereturn sebuah array yang berisi character apa saja yang memiliki pair/ pasangan.

[EXAMPLE]
pairChar([
  ['&','*','%','A'],
  ['#','B','&',':'],
  ['%','$','*','O'],
  ['S','.','B','P']
])

jika kita uraikan masing - masing dari karakter diatas maka 
yang memiliki pasangan 
& : 2 
* : 2 
% : 2 
B : 2

selebihnya tidak di tampilkan . maka outputnya adalah : 
['&','*','%','B']

[RULE]
1. dilarang menggunakan indexOf(), find(), filter()
2. dilarang menggunakan regex
*/
function duplicateArr(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    if (output.length === 0) {
      output.push(arr[0]);
    }
    for (let j = 0; j < output.length; j++) {
      if (arr[i] === output[j]) {
        flag = false;
      }
    }
    if (flag) {
      output.push(arr[i]);
    }
  }
  return output;
}
function pairChar(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      temp.push(arr[i][j]);
    }
  }
  let arr1 = [];
  for (let i = 0; i < temp.length; i++) {
    let flag = false;
    for (let j = 0; j < temp.length; j++) {
      if (temp[i] === temp[j] && i !== j) {
        flag = true;
      }
    }
    if (flag) {
      arr1.push(temp[i]);
    }
  }
 
  return  duplicateArr(arr1);
}

console.log(
  pairChar([
    ["&", "*", "%", "A"],
    ["#", "B", "&", ":"],
    ["%", "$", "*", "O"],
    ["S", ".", "B", "P"]
  ])
);
// ['&','*','%','B']

console.log(
  pairChar([
    [":", "*", "-", "A", "+"],
    ["#", "?", "&", ":", "="],
    ["%", "$", "0", "O", "L"],
    ["$", "?", "B", "P", "7"],
    [">", "<", ">", "#", "?"]
  ])
);
// [':','#','?','$','>']

console.log(pairChar([])); // []
