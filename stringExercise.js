console.log("<======================================>");

var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

console.log(
  word +
    " " +
    second +
    " " +
    third +
    " " +
    fourth +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh
);

console.log("<======================================>");

var word = "wow JavaScript is so cool";
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord =
  word[4] +
  word[5] +
  word[6] +
  word[7] +
  word[8] +
  word[9] +
  word[10] +
  word[11] +
  word[12] +
  word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);

console.log("<======================================>");

var word3 = "wow JavaScript is so cool";
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4, 14);
var thirdWord3 = word.substring(15, 17);
var fourthWord3 = word.substring(18, 20);
var fifthWord3 = word.substring(21, 24);

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);

console.log("<======================================>");

var word3 = "wow JavaScript is so cool";
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4, 14);
var thirdWord3 = word.substring(15, 17);
var fourthWord3 = word.substring(18, 20);
var fifthWord3 = word.substring(21, 25);

var lengthOfFirstword3 = exampleFirstWord3.length;
var lengthOfSecondword3 = secondWord3.length;
var lengthOfThirdword3 = thirdWord3.length;
var lengthOfFourthword3 = fourthWord3.length;
var lengthOfFifthword3 = fifthWord3.length;

console.log(
  "First Word: " +
    exampleFirstWord3 +
    ", panajang length : " +
    lengthOfFirstword3
);
console.log(
  "Second Word: " + secondWord + ", panajang length : " + lengthOfSecondword3
);
console.log(
  "Third Word: " + thirdWord + ", panajang length : " + lengthOfThirdword3
);
console.log(
  "Fourth Word: " + fourthWord + ", panajang length : " + lengthOfFourthword3
);
console.log(
  "Fifth Word: " + fifthWord + ", panajang length : " + lengthOfFifthword3
);
