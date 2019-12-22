/*

  Seorang user spotify ingin mengetahui lagu apa saja yang dia putar selama seminggu terakhir diurutkan dari paling jarang diputar

  Tugas kamu adalah membuat function sortPlaylist yang menerima inputan sebuah array satu dimensi berisi data lagu. Output dari function tersebut adalah array 2 dimensi yang menampilkan judul lagu dan jumlah pemutaran terurut dari jumlah pemutaran yang paling sedikit.

  INPUT:
    ['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']

  OUTPUT:
    [ [ 'A Whole New World', 1 ], [ 'I Love You 3000', 2 ], [ 'Senorita', 4 ] ]

  RULES:
   - DILARANG MENGGUNAKAN BUILT IN FUNCTION APAPUN KECUALI .push()
*/
function stringSort(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < i; j++) {
      if (str[j] > str[i]) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
    }
  }
  return str;
}

function sortPlaylist(playlist) {
  let sort = stringSort(playlist);
  let result = [];x
  let data = {};
  let pl = sort[0];
  for (let i = 0; i < sort.length; i++) {
    if (!data[sort[i]]) data[sort[i]] = 0;
    if (pl === sort[i]) {
      data[sort[i]]++;
    } else {
      pl = sort[i];
      data[sort[i]]++;
    }
  }
  for (let keys in data) result.push([`${keys}, ${data[keys]}`]);
  return result;
}

console.log(
  sortPlaylist([
    "Senorita",
    "Senorita",
    "I Love You 3000",
    "A Whole New World",
    "Senorita",
    "I Love You 3000",
    "Senorita"
  ])
);

//[ [ 'A Whole New World', 1 ], [ 'I Love You 3000', 2 ], [ 'Senorita', 4 ] ]

console.log(
  sortPlaylist([
    "Donna Donna",
    "Top of The World",
    "Donna Donna",
    "Top of The World",
    "Top of The World",
    "Location Unknown",
    "Location Unknown"
  ])
);

// //[ [ 'Donna Donna', 2 ], [ 'Location Unknown', 2 ], [ 'Top of The World', 3 ] ]

console.log(sortPlaylist([])); // []
