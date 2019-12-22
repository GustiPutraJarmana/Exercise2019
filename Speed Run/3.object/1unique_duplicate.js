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




//OR



function uniqueDuplicateFinder(sentence) {

  let arr= []
  let str = ''
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == ' ') {
      arr.push(str)
      str = ''
    }
    else {
      str += sentence[i]
    }
    if (i === sentence.length-1) {
      arr.push(str)
    }
  }
  // return arr
  // arr
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let found = false
    for (let j = 0; j < result.length; j++) {
      if (arr[i] == result[j][0]) {
        found = true
        result[j].push(arr[i])
      }
    }
    if (!found) {
      result.push([arr[i]])
    }
  }
  
  let obj = {unique : [], duplicate : []}
  for (let i = 0; i < result.length; i++) {
    if (result[i].length == 2) {
      obj.duplicate.push(result[i][0])
    }
    else {
      obj.unique.push(result[i][0])
    }
  }
  return obj
}


console.log(uniqueDuplicateFinder('hello black dragon and hello red dragon'));
// {
//   unique: [ 'black', 'and', 'red' ],
//   duplicate: [ 'hello', 'dragon' ]
// }

// console.log(uniqueDuplicateFinder('hello HELLo hEllO hlloe'));
// // {
// //   unique: [ 'hlloe' ],
// //   duplicate: [ 'hello' ]
// // }

// console.log(uniqueDuplicateFinder('john is coding'));
// // {
// //   unique: [ 'john', 'is', 'coding' ],
// //   duplicate: []
// // }

// console.log(uniqueDuplicateFinder('blue blue red blue violet red violet'));
// // {
// //   unique: [],
// //   duplicate: [ 'blue', 'red', 'violet']
// // }

// console.log(uniqueDuplicateFinder(''));
// // {
// //   unique: [],
// //   duplicate: []
// // }
