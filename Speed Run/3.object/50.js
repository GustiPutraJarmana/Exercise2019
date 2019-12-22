/**
 * =================
 * SECOND BEST HERO
 * =================
 * 
 * Function ini akan mencari hero ke-2 terkuat dari list hero yang di daftarkan
 * berdasarkan total power dari hero tersebut
 * 
 * Power pada hero adalah total dari STR + INT + AGI dan tidak dari parameter lainnya
 * jika salah satu parameter tidak ada, maka parameter tersbut di hitung 0
 * 
 * Contoh: [
 *  { name: "Axe", STR: 25, INT: 18, AGI: 20 }, => total power = 63
 *  { name: "Monkey King", STR: 20, AGI: 23 }, => total power = 43 (INT TIDAK ADA, BERARTI INT = 0)
 *  { name: "Slardar", STR: 21, INT: 15, AGI: 17, EVA: 50 }, => total power = 53 (EVA TIDAK MASUK HITUNGAN)
 * ]
 * 
 * Maka output yang di harapkan adalah :
 * { name: Slardar, power: 53 }
 */

function secondBestHero(heroes) {
  // Write your code here
  let arr = []
  let power = 0
  for (let i = 0; i < heroes.length; i++) {
    arr.push([heroes[i]['name'],heroes[i]['STR'],heroes[i]['INT'],heroes[i]['AGI']])
  }
  
  let hasil = []
  for (let i = 0; i < arr.length; i++) {
    let power = 0
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] != undefined && j != 0){
        // console.log(arr[i][j])
        power += arr[i][j]
      }
      else if (j == 0){
        hasil.push(arr[i][j])
      }
    }
    hasil.push(power)
    console.log(power)
  }
  
  hasil
  let result = []
  for (let i = 0; i < hasil.length; i++) {
    if (i%2 != 0) {
      result.push(hasil[i])
  }
  }
  
  for (let i = 0; i < result.length; i++) {
    for (let j = i+1; j < result.length; j++) {
      if (result[i] < result[j]) {
        let temp = result[i]
        result[i] = result[j]
        result[j] = temp
      }
    }
  }
  result
  let obj = {}
  for (let i = 0; i < hasil.length; i++) {
    if (result[1] == hasil[i]) {
      obj['name'] = hasil[i-1]
      obj['power'] = hasil[i]
    }
  }
  return obj
}

var heroes1 = [
  { name: "Axe", STR: 25, INT: 18, AGI: 20 },
  { name: "Lina", STR: 20, INT: 30, AGI: 23 },
  { name: "Phantom Asassin", STR: 21, INT: 15, AGI: 23 },
  { name: "Shadow Fiend", STR: 19, AGI: 20 }
]

console.log(secondBestHero(heroes1))
//{ name: 'Axe', power: 63 }

// var heroes2 = [
//   { name: "Abaddon", STR: 23, INT: 21, AGI: 23 },
//   { name: "Batrider", STR: 28, INT: 22, AGI: 15, DMG: 20 },
//   { name: "Dazzle", INT: 25, AGI: 21 },
//   { name: "Invoker", STR: 18, INT: 15, AGI: 14 }
// ]

// console.log(secondBestHero(heroes2))
//{ name: 'Batrider', power: 65 }