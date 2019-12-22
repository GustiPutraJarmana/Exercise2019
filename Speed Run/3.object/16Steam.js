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
 * input = ['gta5']
 * output = {
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
    // your code here
    let game = [
      {title : 'Grand Theft Auto V', shortKey : 'gta5', price : 290000, genre : 'action'},
      {title : 'Assassins Creed Odyssey', shortKey : 'aco', price : 500000, genre : 'rpg'},
      {title : 'Counter Strike: Global Offensive', shortKey : 'csgo', price : 120000, genre : 'first-person'},
      {title : 'Playerunknowns Battlegrounds', shortKey : 'pubg', price : 210000, genre : 'first-person'},
      {title : 'Monster Hunter: World', shortKey : 'mhw', price : 250000, genre : 'action'}
    ]

    // let result = {games : hasilGames, subTotal : subTotal}
    let hasilGames = []
    let subTotal = 0
    for (let i = 0; i < arr.length; i++) {
      let obj = {}
      for (let j = 0; j < game.length; j++) {
        if (arr[i] == game[j].shortKey) {
          subTotal += game[j].price
          obj.title = game[j].title
          obj.genre = game[j].genre
        }
        
      }
      hasilGames.push(obj)
    }

    let objFix = {
      games : hasilGames,
      subTotal : subTotal
    }
    
    return objFix
}



  
  
  
  
  // console.log(steam([]))
  // {
  //   games: [],
  //   subTotal: 0
  // }
  
  console.log(steam(['gta5', 'aco']))
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
  
  // console.log(steam(['aco', 'pubg', 'mhw']))
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
  
  console.log(steam(['gta5', 'aco', 'pubg', 'csgo', 'mhw']))
  
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