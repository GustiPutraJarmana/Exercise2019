// function shoutOut() {
//   return "Halo Function";
// }
// console.log(shoutOut());

// var num1 = 5;
// var num2 = 6;
// function calculationMultiply(num1, num2) {
//   return num1 * num2;
// }
// var perkalian = calculationMultiply(num1, num2);
// console.log(perkalian);

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
function processSentence(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya" +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby
  );
}
var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
