/*
===============
Shortest Word
===============

[INSTRUCTIONS]
shortestWords adalah sebuah function yang menerima satu parameter berupa string,
di mana string tersebut adalah sebuah kalimat dengan rangkaian kata-kata.
function akan mereturn sebuah array yang terdiri dari kata dengan jumlah huruf paling sedikit di kalimat tersebut.

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan indexOf, match, reduce, map dan regex

[EXAMPLE]
input: Do you want to become a great coder.
proses: panjang kata paling sedikit dalam kalimat tersebut: 1, maka akan mencari kata dengan huruf tersebut
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
proses: panjang kata paling sedikit dalam kalimat tersebut: 3, maka akan mencari kata dengan huruf tersebut
output: ['you', 'it!']
*/
function shortestWords(words) {
  var a = words.toLowerCase();
  var outputSplit = [];
  var temp = "";
  for (var i = 0; i < a.length; i++) {
    if (a[i] === " ") {
      outputSplit.push(temp);
      temp = "";
    } else {
      temp += a[i];
    }
  }
  outputSplit.push(temp);
  var length = [];
  for (var i = 0; i < outputSplit.length; i++) {
    length.push(outputSplit[i].length);
  }

  for (var i = 0; i < length.length; ) {
    if (length[i + 1] < length[i]) {
      var tampung = length[i];
      length[i] = length[i + 1];
      length[i + 1] = tampung;
      i = Math.max(0, i - 1);
    } else {
      i++;
    }
  }

  var minNum = length[0];
  for (var i = 0; i < length.length; i++) {
    if (minNum > length[i]) {
      minNum = length[i];
    }
  }
  var b = [];
  for (var i = 0; i < outputSplit.length; i++) {
    if (outputSplit[i].length === minNum) {
      b.push(outputSplit[i]);
    }
  }
  var output = [];
  for (var i = 0; i < b.length; i++) {
    for (var j = i + 1; j < b.length; j++) {
      if (b[i] == b[j]) {
        delete b[j];
      }
    }
    if (b[i]) output.push(b[i]);
  }

  return output;
}

//

console.log(shortestWords("Do you want to become a great coder ?")); // ['a', '?']
console.log(shortestWords("You dont know what you have until you lose it!")); // ['you', 'it!'] \\ kalo keluarnya ["You"] boleh ga?
console.log(shortestWords("I am diligent")); // ['I']
console.log(
  shortestWords("Apapun hasilnya, kita sudah berusaha, serahkan saja")
); // ['kita', 'saja']
