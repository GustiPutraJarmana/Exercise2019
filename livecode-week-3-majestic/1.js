/**
 * =======================
 * Will you pass the test?
 * =======================
 *
 * Description
 * -----------
 * Seorang murid di Sekolah Hacktiv8 ingin mengetahui nilai akhir dari
 * ujian livecode yang dia lakukan 3 kali. Nilai akhir didapat dari rata-rata ketiga nilai
 * livecode dan ditampilkan dalam skala huruf A-E dengan detail sebagai berikut:
 * A -> 80 - 100
 * B -> 70 - 79
 * C -> 60 - 69
 * D -> 50 - 59
 * E -> 0 - 50
 *
 * Instruction
 * -----------
 * Diketahui nilai murid tersebut adalah 70, 80, dan 90
 * Buatlah pseudocode untuk mencari nilai akhir murid tersebut.
 */

// Write pseudocode here
// STORE 'nilai1' with value 70
// STORE 'nilai2' with value 80
// STORE 'nilai3' with value 90
// STORE 'jumlah' with calculate of 'nilai1', 'nilai2' and 'nilai3'
// STORE 'rataRata' with ('jumlah' devided by 3)
// SRORE 'result' with value empaty string

// IF 'rataRAta' GREATER EQUAL to 80 and 'rataRAta' LESS EQUAL to 100
//     result plus EQUAL 'A'
// ENDIF
//     ELSE IF 'rataRAta' GREATER EQUAL to 70 and 'rataRAta' LESS then 80
//     result plus EQUAL 'B'
// ENDIF
//     ELSE IF 'rataRAta' GREATER EQUAL to 60 and 'rataRAta' LESS then 70
//    result plus EQUAL 'C'
// ENDIF
//     ELSE IF 'rataRAta' GREATER EQUAL to 50 and 'rataRAta' LESS then 60
//    result plus EQUAL 'D'
// ENDIF
//     ELSE IF 'rataRAta' GREATER EQUAL to 0 and 'rataRAta' LESS then 50
//    result plus EQUAL 'E'
// ENDIF
// DISPLAY 'result'!


let nilai1 = 70;
let nilai2 = 80;
let nilai3 = 90;
let jumlah = nilai1 + nilai2 + nilai3;
let rataRata = jumlah / 3;
let result = "";
if (rataRata >= 80 && rataRata <= 100) {
  result += "A";
} else if (rataRata >= 70 && rataRata < 80) {
  result += "B";
} else if (rataRata >= 60 && rataRata < 70) {
  result += "C";
} else if (rataRata >= 50 && rataRata < 60) {
  result += "D";
} else if (rataRata >= 0 && rataRata < 50) {
  result += "E";
}
console.log(result);
