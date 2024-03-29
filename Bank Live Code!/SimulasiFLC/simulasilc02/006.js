/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

//   let i = 0;
//   while (i < sentence.length) {
//     if (sentence[i] !== sentence[sentence.length - i - 1]) return false;
//     i++;
//   }
//   return true;
function palindromeRecursive(sentence) {
  if (!sentence.length) return true;
  else {
    if (sentence[0] !== sentence[sentence.length - 1]) {
      return false;
    } else {
      return palindromeRecursive(sentence.slice(1, sentence.length - 1));
    }
  }
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false
