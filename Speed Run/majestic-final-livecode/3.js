/*
===============
Boot Pair Count
===============
[INSTRUCTION]
Jack sedang merapikan gudang di toko Boot-nya, dia memiliki banyak tumpukan boot-boot yang warnanya harus dipasangkan agar dapat dijual.
Bila array yang berisi angka-angka masing-masing mewakili suatu warna, tentukanlah ada berapa banyak pasang boot yang siap dijual oleh Jack!
[EXAMPLE]
Bila input array adalah [12, 14, 12, 12, 18, 14, 14, 12] maka:
hasilnya adalah 3, karena ada dua pasang 12 dan satu pasang 14.
- Bila tidak ada pasangan sama sekali, maka hasilnya adalah:
"Tidak ada pasangan sepatu boot ditemukan"
- Bila tidak ada boot sama sekali, maka hasilnya adalah:
"Tidak ada sepatu boot mohon cek kembali input anda"
[RULE]
1. dilarang menggunakan indexOf(), find(), filter()
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
function bootPairCount(arr) {
  if (!arr.length) return "Tidak ada sepatu boot mohon cek kembali input anda";
  let dup = duplicateArr(arr);
  let arr1 = [];
  for (let i = 0; i < dup.length; i++) {
    let temp = [];
    for (let j = 0; j < arr.length; j++) {
      if (dup[i] === arr[j]) {
        temp.push(arr[j]);
      }
    }
    arr1.push(temp);
  }
  let a = [];
  for (let i = 0; i < arr1.length; i++) {
    a.push(arr1[i].length);
  }
  let check = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 1) {
      if (a[i] % 2 === 0) {
        check += a[i] / 2;
      } else {
        let b = a[i] - 1;
        check += b / 2;
      }
    }
  }
  if (dup.length === arr.length)
    return "Tidak ada pasangan sepatu boot ditemukan";
  else {
    return check;
  }
}
//TEST CASES
console.log(bootPairCount([10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log(bootPairCount([15, 23, 23, 30, 30, 10, 15, 10])); // 4
console.log(bootPairCount([1, 2, 3, 4, 5])); // Tidak ada pasangan sepatu boot ditemukan
console.log(bootPairCount([])); // Tidak ada sepatu boot mohon cek kembali input anda
