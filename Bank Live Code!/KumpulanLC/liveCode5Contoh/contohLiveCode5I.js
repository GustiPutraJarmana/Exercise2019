// Live Coding Week 5 - Question 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikan nilai string yang merupakan jumlah terbanyak dan terdikit.
[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah ali
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"
[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/
//
function eMoneySplit(stringData) {
  if (!stringData) {
    return "tidak ada catatan eMoney";
  }

  stringData = stringData.split(",");
  console.log(stringData);

  var obj = [];
  for (var i = 0; i < stringData.length; i++) {
    console.log(stringData[i]);
    var output = {
      name: stringData[i].split(":")[0],
      money: stringData[i].split(":")[1]
    };
    obj.push(output);
  }
  console.log(obj);
  var sort = obj.sort(function(a, b) {
    return b.money - a.money;
  });
  console.log(sort);
  return (
    "terbanyak adalah " +
    sort[0].name +
    " dan terdikit adalah " +
    sort[sort.length - 1].name
  );
}

console.log(eMoneySplit("bagus:200000,ali:20000,bagas:300000,andre:50000"));
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit("andre:50000"));
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(""));
// tidak ada catatan eMone
