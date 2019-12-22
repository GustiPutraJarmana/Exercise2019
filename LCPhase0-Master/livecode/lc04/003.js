/*
=======================
UNIQUE DUPLICATE FINDER
=======================

[INSTRUCTIONS]
uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
output: {
  unique: [ 'dan', 'suka', 'makan', 'nasi' ],
  duplicate: [ 'saya' ]
}

*/
function uniqueDuplicateFinder(sentence) {

  var arr = sentence.toLowerCase().split(' ')
  var temp = [];
  var unique = [];
  var duplicate = [];
  var obj = {};

  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(arr[i] === arr[j] && i !== j){
        temp.push(arr[i])
      }
    }
  }
  console.log(temp)
  for(var i = 0; i < temp.length; i++){
    var counter = 0;
    for(var j = 0; j < temp.length; j++){
      if(temp[i] === temp[j] && i!==j && temp[j]){
        counter++;
        if(counter === 1){
          duplicate.push(temp[j])
        }
        temp[j] = undefined
      }
    }
  }
  console.log(duplicate)
  for(var i = 0; i < arr.length; i++){
    var check = true;
    for(var j = 0; j < duplicate.length; j++){
      if(arr[i] === duplicate[j]){
        check = false;
      }
    }
    if(check){
      unique.push(arr[i])
    }
  }
  console.log(unique);
  
  // console.log(unique)
  obj = {
    unique: unique,
    duplicate: duplicate
  }
  return obj
}

//OR

// function split(str) {
//   let a = [];
//   let b = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       a.push(b);
//       b = "";
//     } else {
//       b += str[i];
//     }
//   }
//   a.push(b);
//   return a;
// }
// function uniqueDuplicateFinder(sentence) {
//   let obj = {
//     unique: [],
//     duplicate: []
//   };
//   let str = sentence.toLowerCase();
//   let unik = [];
//   let duplicate = [];
//   let strNew = split(str);
//   for (let i = 0; i < strNew.length; i++) {
//     let check = 0;
//     for (let j = 0; j < strNew.length; j++) {
//       if (strNew[i] === strNew[j]) {
//         check++;
//       }
//     }
//     if (check < 2) duplicate.push(strNew[i]);
//     else unik.push(strNew[i]);
//   }
//   for (let i = 0; i < unik.length; i++) {
//     for (let j = i + 1; j < unik.length; j++) {
//       if (unik[i] == unik[j]) {
//         delete unik[j];
//       }
//     }
//     if (unik[i]) obj.duplicate.push(unik[i]);
//   }
//   let trust = [];
//   for (let i = 0; i < duplicate.length; i++) {
//     if (duplicate[i] === "") trust.push(duplicate[i]);
//     else obj.unique.push(duplicate[i]);
//   }

//   return obj;
// }

console.log(uniqueDuplicateFinder("hello black dragon and hello red dragon"));
// {
//   unique: [ 'black', 'and', 'red' ],
//   duplicate: [ 'hello', 'dragon' ]
// }

// console.log(uniqueDuplicateFinder('hello HELLo hEllO hlloe'));
// // // // {
// // // //   unique: [ 'hlloe' ],
// // // //   duplicate: [ 'hello' ]
// // // // }

// console.log(uniqueDuplicateFinder('john is coding'));
// // // // {
// // // //   unique: [ 'john', 'is', 'coding' ],
// // // //   duplicate: []
// // // // }

// console.log(uniqueDuplicateFinder('blue blue red blue violet red violet'));
// // // // {
// // // //   unique: [],
// // // //   duplicate: [ 'blue', 'red', 'violet']
// // // // }

// console.log(uniqueDuplicateFinder(''));
// // // // {
// // //   unique: [],
// // //   duplicate: []
// // // }
