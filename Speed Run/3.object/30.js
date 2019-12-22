/*
=================================
Object group class and sort score
=================================

[INSTRUCTION]
Diberikan arr object nilai-nilai murid dengan struktur object nama, score dan class,
tugas anda adalah memanipulasi data tersebut dengan meng-group berdasarkan
kelas dan sort ascending untuk score-nya!

[EXAMPLE]
- Bila arr of ojects adalah :
console.log(
 [
    {
      name: 'debby',
      score: 100,
      class: 'A'
    },
    {
      name: 'amy',
      score: 80,
      class: 'A'
    },
    {
      name: 'david',
      score: 32,
      class: 'A'
    },
    {
      name: 'heraldo',
      score: 90,
      class: 'B'
    },
    {
      name: 'arnold',
      score: 100,
      class: 'B'
    },
    {
      name: 'aakansha',
      score: 75,
      class: 'B'
    },
    {
      name: 'aleksa',
      score: 90,
      class: 'C'
    }
  ]
maka hasilnya adalah:
{ A:
   [ { name: 'david', score: 32 },
     { name: 'amy', score: 80 },
     { name: 'debby', score: 100 } ],
  B:
   [ { name: 'aakansha', score: 75 },
     { name: 'heraldo', score: 90 },
     { name: 'arnold', score: 100 } ],
  C: [ { name: 'aleksa', score: 90 } ] }

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
2. dilarang menggunakan regex
*/

function groupSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i]['score'] > arr[j]['score']) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  let kelas = []
  for (let i = 0; i < arr.length; i++) {
    kelas.push(arr[i]['class'])
  }
  
  kelas
  
  let result = []
  for (let i = 0; i < kelas.length; i++) {
    let found = false
    for (let j = 0; j < result.length; j++) {
      if (kelas[i] == result[j]) {
        found = true
      }
    }
    if (!found) {
      result.push(kelas[i])
    }
  }

  let obj = {}
  for (let i = 0; i < kelas.length; i++) {
    let output = {}
    if (!obj[kelas[i]]) {
      obj[kelas[i]] = {}
      obj[kelas[i]] = []
      output['name'] = arr[i]['name']
      output['score'] = arr[i]['score']
      obj[kelas[i]].push(output)
    }
    else {
      output['name'] = arr[i]['name']
      output['score'] = arr[i]['score']
      obj[kelas[i]].push(output)
    }
  }
  return obj
}
console.log(
  groupSort([
    {
      name: "debby",
      score: 100,
      class: "A"
    },
    {
      name: "amy",
      score: 80,
      class: "A"
    },
    {
      name: "david",
      score: 32,
      class: "A"
    },
    {
      name: "heraldo",
      score: 90,
      class: "B"
    },
    {
      name: "arnold",
      score: 100,
      class: "B"
    },
    {
      name: "aakansha",
      score: 75,
      class: "B"
    },
    {
      name: "aleksa",
      score: 90,
      class: "C"
    }
  ])
);
/*
//  { A:
//     [ { name: 'david', score: 32 },
//       { name: 'amy', score: 80 },
//       { name: 'debby', score: 100 } ],
//    B:
//     [ { name: 'aakansha', score: 75 },
//       { name: 'heraldo', score: 90 },
//       { name: 'arnold', score: 100 } ],
//    C: [ { name: 'aleksa', score: 90 } ] }
//    */
