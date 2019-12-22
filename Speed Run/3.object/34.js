/**
 * =============
 * Students List
 * =============
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang mengelompokkan student berdasarkan phase yang sedang berjalan.
 * 
 * Resctrictions
 * -------------
 * 1. Input berupa array of strings yang berisi nama dan phase dan dipisah dengan strip '-'
 *    Ex: 'yusuf-0'
 * 2. Output merupakan sebuah array yang berisi key berupa masing-masing phase dari 0-3
 * 3. Setiap key menyimpan array of names sesuai dengan input yang diberikan,
 *    Jika ada phase yang kosong (tidak ada student) maka key tersebut menyimpan array kosong []
 * 4. Jika phase kosong, maka hanya mengembalikan object kosong {}
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function split, slice, splice, includes, find, findIndex, indexOf
 * 2. Pastikan urutan key sesuai dengan expected output
 */

function getStudents(arr) {
  // Write your code here
  
  let str = ''
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == '-') {
        temp.push(str)
        str = ''
      }
      else {
        str += arr[i][j]
      }
      if (j === arr[i].length-1) {
        temp.push(str)
        str = ''
    }
    }
  }
  
  temp
  
  let name = []
  let phase = []
  for (let i = 0; i < temp.length; i++) {
    if (i % 2 === 0) {
      name.push(temp[i])
    }
    else {
      phase.push(temp[i])
    }
  }

  for (let i = 0; i < phase.length; i++) {
    for (let j = i+1; j < phase.length; j++) {
      if (phase[i] > phase[j]) {
        let temp = phase[i]
        phase[i] = phase[j]
        phase[j] = temp
      }
    }
  }
  phase
  
  let phaseFix = []
  for (let i = 0; i < phase.length; i++) {
    phaseFix.push('phase ' + phase[i])
  }
  phaseFix

  let obj = {}
  for (let i = 0; i < phaseFix.length; i++) {
    if (!obj[phaseFix[i]]) {
      obj[phaseFix[i]] = {}
      obj[phaseFix[i]] = []
      obj[phaseFix[i]].push(name[i])
    }
    else {
      obj[phaseFix[i]].push(name[i])
    }
  }
  return obj
}


console.log(getStudents(['okka-0', 'maulid-1', 'riko-2', 'bayu-3']))
// {
//   'phase 0': [ 'okka' ],
//   'phase 1': [ 'maulid' ],
//   'phase 2': [ 'riko' ],
//   'phase 3': [ 'bayu' ]
// }

// console.log(getStudents([]))
// {}

console.log(getStudents(['serafim-1', 'amalya-0', 'fadhilah-1', 'reka-3', 'vika-2']))
// {
//   'phase 0': [ 'amalya' ],
//   'phase 1': [ 'serafim', 'fadhilah' ],
//   'phase 2': [ 'vika' ],
//   'phase 3': [ 'reka' ]
// }

// console.log(getStudents(['yusuf-0', 'fiqi-3', 'adiel-1']))
// {
//   'phase 0': [ 'yusuf' ],
//   'phase 1': [ 'adiel' ],
//   'phase 2': [],
//   'phase 3': [ 'fiqi' ]
// }