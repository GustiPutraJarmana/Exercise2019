function spiralNumber(param) {
  var arr = new Array(param * param);
  var result = [];
  var start = false;

  for (var i = 0; i < arr.length; i++) {
    if (i % param === 0) {
      result.push([]);
      start = !start;
    }
    if (start) {
      result[result.length - 1].push(i + 1);
    } else {
      result[result.length - 1].unshift(i + 1);
    }
  }

  return result;
}

console.log(spiralNumber(3));
// /*
//     [
//         [1,2,3],
//         [8,9,4]
//         [7,6,5]
//     ]
// */

// console.log(spiralNumber(4));
// /*
//     [
//         [1,2,3,4],
//         [12,13,14,5],
//         [11,16,15,6],
//         [10,9,8,7]
//     ]
// */
