// var printPrint = function() { // without parameter
    // console.log("Print")
//   };
// printPrint()
// var printStarred = function(text) { // with parameter
    // console.log("★★★ " + text + " ★★★")
//   };
//   printStarred("Super Star")
//   
//   function printCircle(text) { // shorthand to create function
    // console.log("○○○ " + text + " ○○○")
//   }
//   printCircle("Circling Circle")
// 
// 
//   var timesTwo = function(x) {
    // return x * 2;
//   };
//   var result = timesTwo(8) // 16
//   console.log(result)

// function numberSum(num) {
//     console.log(num)
//     if(num == 1) {
//       return 1;
//     }
//     else {
//         // let result = ''
//       return num / numberSum(num - 1);
//     }
//   }
  
//   console.log(numberSum(5)); // 5 + 4 + 3 + 2 + 1 = 15
//   console.log(numberSum(8));

  // function power(base, exponent) {
  //   if (exponent == 0)
  //     return 1;
  //   else
  //     return base * power(base, exponent - 1);
  // }
  // console.log(power(3, 3)); // 3 ** 3 = 27


function coba(num) {
  let alphabet = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
  // console.log(alphabet[0])
  let str = String(num[0])
  if (num.length === 1) {
    return ''
  }
  else {
    let arr = []
      arr.push(alphabet[0] + coba(num.slice(1)))
      return arr
  }
}
console.log(coba([1,2,3,4,5,6,7,8,9])) // ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']

// Palindrome
function palindrome(str) {
  if (str.length == 0) {
    return str
  }
  else {
    return palindrome(str.substring(1)) + str.charAt()
  }
  
}

console.log(palindrome('1234567'))

function rangkaiKata (num) {
  if (num > 26) {
    return 'Invalid'
  }
  else {

  }
}

console.log(rangkaiKata(5))
console.log(rangkaiKata(26))
console.log(rangkaiKata(27)) // Invalid