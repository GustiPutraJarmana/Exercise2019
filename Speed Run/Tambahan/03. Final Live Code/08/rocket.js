/**
  **********
  HOURGLASS
  **********

  Buatlah sebuah function bernama hourglass. Function hourglass adalah sebuah
  function yang menerima sebuah parameter berupa number dengan asumsi nilai
  parameternya minimal 3. Function akan mereturn string yang memiliki element
  di dalamnya berupa simbol '#' yang nantinya berbentuk jam pasir/hourglass.


  RULES:
**/

function hourglass(num) {
  if (num < 3) return "Minimum parameter is 3";
  let result = "";
  for (let i = 0; i < num; i++) {
    let tamp = "";
    for (let j = 0; j < num * 2 -1 ; j++) {
      if (i === 0) {
        tamp += "#";
      } else if (j === i || j == num * 2 - 1 - i) {
        tamp += "#";
      } else {
        tamp += " ";
      }
    }
    result += tamp + "\n";
  }
  console.log(result);
}

console.log(hourglass(2)); //Minimum parameter is 3

console.log(hourglass(4));
/*
#######
 #####
  ###
   #
  ###
 #####
#######
*/

// console.log(hourglass(5));
/*
#########
 #######
  #####
   ###
    #
   ###
  #####
 #######
#########
*/
