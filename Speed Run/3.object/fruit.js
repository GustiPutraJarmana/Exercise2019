/*
=============
Report Market
=============

[INSTRUCTION]
reportMarket adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis fruit.
lalu di dalamnya akan berisi list customers, total qty, rata-rata, max dan min pada setiap jenis fruit

[EXAMPLE]
Contoh input dan output bisa dilihat di test case. adapun format object sbb:
{
  <name fruit>: {
    customers: [<name_customer>],
    sum: <total_qty>,
    max: <qty terbesar setiap customer pesan>,
    min: <qty terkecil setiap customer pesan>
  }
}

[RULE]
1. dilarang menggunakan indexOf(), find(), filter()
2. dilarang menggunakan regex
*/
function duplicateArr(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    if (output.length === 0) {
      output.push(arr[0]);
    }
    for (let j = 0; j < output.length; j++) {
      if (arr[i] === output[j]) {
        flag = false;
      }
    }
    if (flag) {
      output.push(arr[i]);
    }
  }
  return output;
}

function reportMarket(input) {
  let key = [];
  for (let i = 0; i < input.length; i++) {
    key.push(input[i].fruit);
  }

  let keys = duplicateArr(key);
  let object = {};
  let object1 = {};
  let arrName = [];
  let sum = 0;
  let max = 0;
  let min = 0;
  for (let i = 0; i < key.length; i++) {
    if (!object[key[i]]) {
      object[key[i]] = object1;
    }
    for (let j = 0; j < input.length; j++) {
      if (key[i] === input[j].fruit) {
        arrName.push(input[j].name);
        sum += input[j].qty;
        max = input[j].qty;
      }
    }

    object1["customer"] = arrName;
    object1["sum"] = sum;
    object1["eve"] = sum / arrName.length;
    object1["max"] = max;
    object1["min"] = min;
    object1 = {};
    arrName = [];
    sum = 0;
  }
  console.log(a);

  console.log(object);
}

//   <name fruit>: {
//     customers: [<name_customer>],
//     sum: <total_qty>,
// everage: 0
//     max: <qty terbesar setiap customer pesan>,
//     min: <qty terkecil setiap customer pesan>
//   }
// }

console.log(
  reportMarket([
    { name: "Tsubasa", fruit: "Banana", qty: 16 },
    { name: "Misaki", fruit: "Apple", qty: 7 },
    { name: "Taqi", fruit: "Banana", qty: 8 },
    { name: "Hyuga", fruit: "Melon", qty: 7 },
    { name: "Wakabayashi", fruit: "Melon", qty: 9 },
    { name: "Zudo", fruit: "Apple", qty: 10 },
    { name: "Misugi", fruit: "Banana", qty: 9 },
    { name: "Tachibana", fruit: "Melon", qty: 5 },
    { name: "Wakasimatsu", fruit: "Apple", qty: 7 },
    { name: "Soda", fruit: "Apple", qty: 7 }
  ])
);
/*
{ Banana:
   { customer: [ 'Tsubasa', 'Taqi', 'Misugi' ],
     sum: 33,
     max: 16,
     min: 8 },
  Apple:
   { customer: [ 'Misaki', 'Zudo', 'Wakasimatsu', 'Soda' ],
     sum: 31,
     max: 10,
     min: 7 },
  Melon:
   { customer: [ 'Hyuga', 'Wakabayashi', 'Tachibana' ],
     sum: 20,
     max: 9,
     min: 4 } }
*/

// console.log(
//   reportMarket([
//     { name: "Sasuke", fruit: "Avocado", qty: 8 },
//     { name: "Sakura", fruit: "Strawberry", qty: 7 },
//     { name: "Naruto", fruit: "Durian", qty: 6 }
//   ])
// );

/*
{ Avocado:
   { customers: [ 'Sasuke' ], sum: 16, avg: 16, max: 16, min: 16 },
  Strawberry: { customers: [ 'Sakura' ], sum: 7, avg: 7, max: 7, min: 7 },
  Durian: { customers: [ 'Naruto' ], sum: 7, avg: 7, max: 7, min: 7 } }
*/
