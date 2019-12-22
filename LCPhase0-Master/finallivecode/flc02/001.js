/**
  Diberikan sebuah function bernama findRowPrime
  Function tersebut akan menerima sebuah parameter number.
  Function akan me-return deret prima ke berapa parameter tersebut (asumsi input
  parameter pasti bilangan prima)

  RULES
  -----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

**/

function isPrime(n) {
  var prima = true;
  if (n <= 1) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      prima = false;
    }
  }
  return prima;
}
function findRowPrime(n) {
  var hasil = 0;
  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
      hasil++;
    }
  }
  return hasil;
}

console.log(findRowPrime(7)); //4
// console.log(findRowPrime(229)); //50
// console.log(findRowPrime(37)); //12
