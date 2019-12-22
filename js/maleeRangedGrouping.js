function split(str, operator) {
  let a = [];
  let b = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === operator) {
      a.push(b);
      b = "";
    } else {
      b += str[i];
    }
  }
  a.push(b);
  return a;
}
function meleeRangedGrouping(str) {
  if (!str) return [];
  let koma = split(str, ",");
  let output = [];
  for (let i = 0; i < koma.length; i++) {
    let strip = split(koma[i], "-");
    output.push(strip);
  }
  let data = {
    ranged: [],
    melee: []
  };
  for (let i = 0; i < output.length; i++) {
    if (output[i][1] === "Ranged") data.ranged.push(output[i][0]);
    else if (output[i][1] === "Melee") data.melee.push(output[i][0]);
  }
  let result = [];
  for (i in data) {
    result.push(data[i]);
  }
  return result;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
