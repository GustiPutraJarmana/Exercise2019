/**
 *
 * ==================
 * Razia Ganjil Genap
 * ==================
 *
 * Function akan memfilter kendaraan mana saja yang boleh melewati jalan raya,
 * sesuai tanggal yang di tetapkan,
 * tanggal ganjil hanya boleh di lewati oleh kendaraan berplat ganjil,
 * tanggal genap hanya boleh di lewati oleh kendaraan berplat genap,
 *
 * Peraturan di atas di terapkan untuk seluruh kendaraan, kecuali motor
 *
 * contoh:
 *  cars: [["B 339 AAP", "mobil"], ["B 2 OO", "mobil"], ["B 1212 AAD", "motor"]]
 *  tanggal: 23-12-2019
 *  maka output yang di harpkan adalah: [["B 339 AAP", "mobil"], ["B 1212 AAD", "motor"]]
 *
 * Rules:
 *  1. Tidak boleh menggunakan .split .filter .reduce .map .includes
 *
 */
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
function raziaGanjilGenap(plate, date) {
  let splitD = split(date, "-");
  let result = [];
  for (let i = 0; i < plate.length; i++) {
    let temp = [];
    let splitP = split(plate[i][0], " ");
    if (plate[i][1] === "mobil") {
      if (Number(splitD[0] % 2 == 0) && splitP[1] % 2 === 0) {
        temp.push(plate[i][0], plate[i][1] );
      } else if (Number(splitD[0] % 2 !== 0) && splitP[1] % 2 !== 0) {
        temp.push(plate[i][0], plate[i][1]);
      }
    }
    if (plate[i][1] === "motor") {
      temp.push(plate[i][0], plate[i][1]);
    }
    result.push(temp);
  }
  let output = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i].length) {
      output.push(result[i]);
    }
  }
  return output;
}

var cars = [
  ["B 2283 UUP", "mobil"],
  ["B 1990 QQP", "motor"],
  ["B 23 RI", "motor"],
  ["B 46 US", "mobil"]
];

console.log(raziaGanjilGenap(cars, "14-10-2019"));
// [ [ 'B 1990 QQP', 'motor' ],
//   [ 'B 23 RI', 'motor' ],
//   [ 'B 46 US', 'mobil' ] ]

var cars2 = [
  ["B 7 UUP", "mobil"],
  ["B 2833 TYU", "mobil"],
  ["B 332 GLF", "motor"],
  ["B 332 IIQ", "mobil"]
];

console.log(raziaGanjilGenap(cars2, "21-03-2019"));
// // [ [ 'B 7 UUP', 'mobil' ],
// //   [ 'B 2833 TYU', 'mobil' ],
// //   [ 'B 332 GLF', 'motor' ] ]
