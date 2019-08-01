// Arterisk game

console.log("Arterisk Game");

for (var raw1 = 0; raw1 < 5; raw1++) {
  console.log("*");
}
for (var i = 0; i < 5; i++) {
  var bintang = "";
  for (var a = 0; a < 5; a++) {
    bintang = bintang + "*";
  }
  console.log(bintang);
}

for (var i = 1; i <= 5; i++) {
  var output = "";
  for (var a = 1; a <= i; a++) {
    output = output + "*";
  }
  console.log(output);
}
