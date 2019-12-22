/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {

    let str = String(equation)
    let min = 10
    let result = ''
    let temp = ''
    if (str.length === 0) {
      return ''
    }
    else {
      for (let i = 0; i < str.length; i++) {
        console.log(i)
        if (i === 0) {
          result = str[0] * 1000 + '+'
        }
        else {
          temp = result / 10 
        }
      }
    }
    console.log(result )
      return result + parseNumber(str.slice(2)) 
}

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3