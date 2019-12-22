const bintang1 = num => {
  for (let i = 0; i < num.length; i++) {
    let tamp = "";
    for (let j = 0; j < num.length; j++) {
      if (num[i] === num[j]) {
        tamp += num[j];
      } else if (j === 0 || num[j] === num[num.length - 1]) {
        tamp += "|";
      } else if (i === 0 || num[i] === num[num.length - 1]) {
        tamp += "-";
      } else {
        tamp += "-";
      }
    }
    console.log(tamp);
  }
};
bintang1("GUSTI");

// let str = "GUSTI";
// for (let i = 0; i < str.length; i++) {
//   let tamp = "";
//   for (let j = 1; j <= str.length; j++) {

//     if (Math.round((i + 1) / 2)) {
//       tamp += str[i];
//     } else {
//       tamp += "*";
//     }
//   }
//   console.log(tamp);
// }
