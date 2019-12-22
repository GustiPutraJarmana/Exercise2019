function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  if (!arrPenumpang) {
    return [];
  }
  var output = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var amount = 2000;
    var jarak =
      rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]);
    console.log(arrPenumpang[i]);
    var data = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: amount * jarak
    };
    output.push(data);
  }
  return output;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
