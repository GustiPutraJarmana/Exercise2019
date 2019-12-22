/**
 * =================
 * Steam Summer Sale
 * =================
 *
 * [Description]
 * Steam sedang diskon besar-besaran untuk beberapa nama game besar, berikut datanya:
 * | No  | Title                            | Short Key | Price  | Genre                |
 * | --- | -------------------------------- | --------- | ------ | -------------------- |
 * | 1   | Grand Theft Auto V               | gta5      | 290000 | action               |
 * | 2   | Assassin's Creed Odyssey         | aco       | 500000 | rpg                  |
 * | 3   | Counter Strike: Global Offensive | csgo      | 120000 | first-person shooter |
 * | 4   | Playerunknown's Battlegrounds    | pubg      | 210000 | first-person shooter |
 * | 5   | Monster Hunter: World            | mhw       | 250000 | action               |
 *
 * [Instruction]
 * 1. buat sebuah function yang menerima array of strings yang valuenya berupa short-key dari game yang dibeli
 * 2. function terssebut akan mereturn sebuah object yang berisikan data yang dikelompokkan berdasarkan genre-nya
 *    dan total harga yang harus dibayar user.
 *
 * [Example]
 * @input = ['gta5']
 * @output = {
 *   games: [
 *     {
 *       title: 'Grand Theft Auto V',
 *       genre: 'action'
 *     }
 *   ],
 *   subTotal: 290000
 * }
 *
 * [Rules]
 * 1. Hanya boleh menggunakan built-in function: .push
 * 2. Dilarang menggunakan regex dan built-in function lain.
 */
function steam(arr) {
  let dataUtama = [
    [`Grand Theft Auto V`, `gta5`, 290000, `action`],
    [`Assassin's Creed Odyssey`, `aco`, 500000, `rpg`],
    [
      `Counter Strike: Global Offensive`,
      `csgo`,
      120000,
      `first-person shooter`
    ],
    [`Playerunknown's Battlegrounds`, `pubg`, 210000, `first-person shooter`],
    [`Monster Hunter: World`, `mhw`, 250000, `action`]
  ];
  
  let obj = {
    game: [],
    subTotal: 0
  };
  for (let i = 0; i < arr.length; i++) {
    let data = {
      title: "",
      gendre: ""
    };
    for (let j = 0; j < dataUtama.length; j++) {
      if (arr[i] === dataUtama[j][1]) {
        data.title += dataUtama[j][0];
        data.gendre += dataUtama[j][3];
        obj.subTotal += dataUtama[j][2];
      }
    }
    obj.game.push(data);
  }
  return obj;
}

console.log(steam([]));
// {
//   games: [],
//   subTotal: 0
// }

console.log(steam(["gta5", "aco"]));
// {
//   games: [
//     {
//       title: 'Grand Theft Auto',
//       genre: 'action'
//     },
//     {
//       title: 'Assassins Creed Odyssey',
//       genre: 'rpg'
//     },
//   ],
//   subTotal: 750000
// }

console.log(steam(["aco", "pubg", "mhw"]));
// {
//   games:
//     [
//       {
//         title: 'Assassins Creed Odyssey',
//         genre: 'rpg'
//       },
//       {
//         title: 'Playerunknowns Battlegrounds',
//         genre: 'first-person shooter'
//       },
//       {
//         title: 'Monster Hunter: World',
//         genre: 'action'
//       }
//     ],
//   subTotal: 960000
// }

console.log(steam(["gta5", "aco", "pubg", "csgo", "mhw"]));

// {
//   games:
//     [
//       {
//         title: 'Grand Theft Auto V',
//         genre: 'action'
//       },
//       {
//         title: 'Assassins Creed Odyssey',
//         genre: 'rpg'
//       },
//       {
//         title: 'Playerunknowns Battlegrounds',
//         genre: 'first-person shooter'
//       },
//       {
//         title: 'Counter Strike: Global Offensive',
//         genre: 'first-person shooter'
//       },
//       {
//         title: 'Monster Hunter: World',
//         genre: 'action'
//       }
//     ],
//   subTotal: 1370000
// }
