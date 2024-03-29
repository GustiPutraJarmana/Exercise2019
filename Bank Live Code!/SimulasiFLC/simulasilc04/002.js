/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

// PSEUDOCODE
/*
STORE 'kata' with sentence split
STORE 'asterix' with blank
STORE 'output' with blank

WHILE i less than 'words' length
    THEN asterix equal with *
WHILE j lest than 'sentence' length
    IF 'kata'(j) equal to 'words'
    THEN 'output' is 'asterix'
    IF 'kata'(j) not equal to 'words'
    THEN 'output' is kata (j)

DISPLAY 'output'

*/
function split(str) {
  let a = [];
  let b = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      a.push(b);
      b = "";
    } else {
      b += str[i];
    }
  }
  a.push(b);
  return a;
  // let splitKoma = split(str, ",")// untuk memanggil;
}
function joinFunction(data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    if (i == data.length - 1) {
      result += data[i];
    } else {
      result += data[i] + "  ";
    }
  }
  return result;
}
function sensorSentence(sentence, words) {
  let str = split(sentence);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] !== words) {
      let a = joinFunction(str[i]);
      result += a;
    }
  }

  console.log(str);
  console.log(result);
}

console.log(sensorSentence("Hey you are a murderer", "murderer")); // Hey you are a ********

// console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

// console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

// console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

// console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

// console.log(sensorSentence('', '')) // ''
