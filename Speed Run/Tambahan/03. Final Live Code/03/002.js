/*
===============
Boot Pair Count
===============

[INSTRUCTION]
Jack sedang merapikan gudang di toko Boot-nya, dia memiliki banyak tumpukan
boot-boot yang warnanya harus dipasangkan agar dapat dijual. Bila input yang
berisi huruf-huruf masing-masing mewakili suatu warna, tentukanlah ada berapa
banyak pasang boot yang siap dijual oleh Jack!

[EXAMPLE]
Bila input adalah ABAACBBA maka:
hasilnya adalah 3, karena ada dua pasang A dan satu pasang B.

- Bila tidak ada pasangan sama sekali, maka hasilnya adalah:
"Tidak ada pasangan sepatu boot ditemukan"
- Bila tidak ada boot sama sekali, maka hasilnya adalah:
"Tidak ada sepatu boot mohon cek kembali input anda"

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift()
2. dilarang menggunakan regex
*/

function duplicateArr(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    if (output.length === 0) {
      output.push(arr[0]);
    }
    for (let j = 0; j < output.length; j++) {
      if (arr[i] === output[j]) {
        flag = false;
      }
    }
    if (flag) {
      output.push(arr[i]);
    }
  }
  return output;
}
function bootPairCount(bootStr) {
  if (!bootStr) return "Tidak ada sepatu boot mohon cek kembali input anda";
  let temp = [];
  for (let i = 0; i < bootStr.length; i++) {
    let flag = true;
    for (let j = 0; j < bootStr.length; j++) {
      if (bootStr[i] === bootStr[j] && i !== j) {
        flag = false;
      }
    }
    if (!flag) {
      temp.push(bootStr[i]);
    }
  }
  let arr = duplicateArr(temp);
  let check = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (arr[i] === temp[j]) {
        check++;
      }
    }
  }

  if (check === 0) {
    return "Tidak ada pasangan sepatu boot ditemukan";
  }
  if (check % 2 === 0) {
    return check / 2;
  } else {
    return (check - 1) / 2;
  }
}

//TEST CASES
console.log(bootPairCount("ABBAACDAB")); // 3
console.log(bootPairCount("ABBCCDAD")); // 4
console.log(bootPairCount("ABCDE")); // Tidak ada pasangan sepatu boot ditemukan
console.log(bootPairCount()); // Tidak ada sepatu boot mohon cek kembali input anda
