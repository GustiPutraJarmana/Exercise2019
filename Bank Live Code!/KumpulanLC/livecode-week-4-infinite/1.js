/*
================
Kalkulator Nilai
================

[INSTRUCTIONS]
Kamu diminta menghitung Nilai Ujian Nasional dari sebuah laporan nilai murid.
Buatlah function kalkulatorNilai yang menerima satu parameter berupa string.
function tersebut akan menghitung total nilai dan memutuskan apakah murid tersebut lulus/tidak.
Adapun ketentuannya:
  - A bernilai 4
  - B bernilai 3
  - C bernilai 2
  - D bernilai 1
  - E bernilai 0
  - Murid dinyatakan TIDAK LULUS jika ada mata pelajaran memperoleh nilai E, selain itu LULUS.

[RULES]
  - WAJIB menggunakan ALGORITMA atau PSEUDOCODE.
*/

// Algorithm or pseudocode here

// SET variable 'check' with value 0
// SET variable 'flag' with falue true
// FOR let variable 'i' with value 0; 'i' less then length of nilai;  increment ''i
//   IF 'nilai[i]' EQUAL to 'A'
//    ADD check with 4
//   END IF
//   ELSE IF 'nilai[i]' EQUAL to 'B'
//     ADD check with 3
//   END IF
//   ELSE IF 'nilai[i]' EQUAL to 'C'
//     ADD check with 2
//   END IF
//   ELSE IF 'nilai[i]' EQUAL to 'D'
//     ADD check with 1
//   END IF
//   ELSE IF 'nilai[i]' EQUAL to 'E'
//     ADD check with 0
//     SET 'flag' with value false
//   END IF
// END FOR
// IF 'flag' equal true
//   PRINT `Total Nilai: ${check}. Selamat kamu LULUS!`
//   END IF
// ELSE
//   PRINT `Total Nilai: ${check}. Maaf kamu TIDAK LULUS.`
//   END IF
  





function kalkulatorNilai(nilai) {
  let check = 0;
  let flag = true;
  for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] === "A") {
      check += 4;
    } else if (nilai[i] === "B") {
      check += 3;
    } else if (nilai[i] === "C") {
      check += 2;
    } else if (nilai[i] === "D") {
      check += 1;
    } else if (nilai[i] === "E") {
      check += 0;
      flag = false;
    }
  }
  if (flag) {
    return `Total Nilai: ${check}. Selamat kamu LULUS!`;
  } else {
    return `Total Nilai: ${check}. Maaf kamu TIDAK LULUS.`
  }
}
console.log(kalkulatorNilai("AABCADDA")); // Total Nilai: 23. Selamat kamu LULUS!
console.log(kalkulatorNilai("AAAAEA")); // Total Nilai: 20. Maaf kamu TIDAK LULUS.
console.log(kalkulatorNilai("ABCDD")); // Total Nilai: 11. Selamat kamu LULUS!
