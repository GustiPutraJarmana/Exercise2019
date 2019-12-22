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

function pairChar(arr) {
  if (!arr.length) {
    return [];
  }
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      output.push(arr[i][j]);
    }
  }

  var result = [];
  for (var i = 0; i < output.length; i++) {
    for (var j = i + 1; j < output.length; j++) {
      if (output[i] === output[j]) {
        result.push(output[i]);
      }
    }
  }

  return filterDuplicate(result);
}

function filterDuplicate(arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        delete arr[j];
      }
    }
    if (arr[i]) output.push(arr[i]);
  }
  return output;
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
