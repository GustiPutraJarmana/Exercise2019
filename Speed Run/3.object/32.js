/**
 * =======
 * MatchIn
 * =======
 * 
 * [Description]
 * matchIn merupakan sebuah function yang menerima data berupa object pelamar ( @applicant )
 * dan mengembalikan sebuah array berisi perusahaan apa saja yang memenuhi kualifikasi
 * pelamar tersebut dan skill apa saja yang sesuai dengan kebutuhan perusahaan yang dilamar
 * 
 * Berikut adalah data dari masing-masing perusahaan:
 * | Company Name | Required Skills                          | Job Experience (years) |
 * | ------------ | ---------------------------------------- | ---------------------- |
 * | PT ABC       | XML, Kotlin, HTML, C++, Java, Javascript |            5           |
 * | PT HIJ       | Python, Javascript, HTML                 |            3           |
 * | PT JKL       | C++, Java                                |            1           |
 * | PT XYZ       | Golang, Java, JQuery                     |            2           |
 * | PT KLM       | Python, Javascript, HTML                 |            4           |
 * 
 * Adapaun kriteria minimal yang dibutuhkan pelamar untuk memenuhi kualifikasi adalah:
 * 1. Memiliki minimal 2 skill yang sama dengan perusahaan
 * 2. Memiliki pengalaman kerja yang sama/lebih besar dari perusahaan
 * 
 * [Example]
 *  = {
 *    name: 'Yusuf',
 *    skills: ['Javascript', 'HTML'],
 *    experience: 3
 *  }
 *   
 * Penjelasan:
 * - Tidak masuk PT ABC => hanya punya javascript dan pengalaman < 5 tahun
 * - Masuk PT HIJ => memiliki skill yang cocok (javascript & html) dan pengalaman 3 tahun
 * - Tidak masuk PT JKL => Tidak memiliki skill yang cocok
 * - Tidak masuk PT XYZ => Tidak memiliki skill yang cocok
 * - Tidak masuk PT KLM => hanya memiliki skill javascript dan pengalaman < 4 tahun
 * 
 * Maka:
 * @output = [
 *   {
 *     companyName: 'PT HIJ',
 *     matchedSkills: ['Javascript', 'HTML']
 *   }
 * ]
 * 
 * [Rules]
 * 1. DILARANG menggunakan built in function: map, reduce, filter
 * 2. Skill dalam key matchedSkills tidak perlu berurut sesuai test case selama skill yang cocok sesuai
 */


function matchIn(applicant) {
  // Write your code here
 let company = [
 {companyName : "PT ABC", required : ['XML', 'Kotlin', 'HTML', 'C++', 'Java', 'Javascript'], Job : 5},
 {companyName : "PT HIJ", required : ['Python', 'Javascript', 'HTML'] , Job : 3},
 {companyName : "PT JKL", required : ['C++', 'Java'], Job : 1},
 {companyName : "PT XYZ", required : ['Golang', 'Java', 'JQuery'], Job : 2},
 {companyName : "PT KLM", required : ['Python', 'Javascript', "HTML"], Job : 4}
 ]


  
  let arr = []
  for (let i = 0; i < company.length; i++) {
    let obj = {}
    for (let j = 0; j < company[i]['required'].length; j++) {
      for (let k = 0; k < applicant['skills'].length; k++) {
            // console.log(applicant['skills'][k] + ' ' + company[i]['required'][j])
            if (applicant['skills'][k] == company[i]['required'][j] && applicant['experience'] >= company[i]['Job']) {
              if (!obj['companyName']) {
                obj['companyName'] = company[i]['companyName']
                obj['matchedSkills'] = []
                obj['matchedSkills'].push(applicant['skills'][k])
              }
              else {
                obj['matchedSkills'].push(applicant['skills'][k])
              }
              if (obj['matchedSkills'].length >= 2) {
                arr.push(obj)
              }
            } 
          }
        }
      }
  return arr
}

var applicant1 = {
  name: 'Alpha',
  skills: ['Android', 'Kotlin', 'XML', 'Python', 'PHP'],
  experience: 5
}
console.log(matchIn(applicant1))
// [
//   { companyName: 'PT ABC', matchedSkills: [ 'XML', 'kotlin' ] },
// ]

// var applicant2 = {
//   name: 'Beta',
//   skills: ['PHP', 'HTML', 'CSS', 'JQuery', 'Python'],
//   experience: 1
// }
// console.log(matchIn(applicant2))
// // Unqualified!

var applicant3 = {
  name: 'Charlie',
  skills: ['HTML', 'Photoshop', 'CSS', 'Javascript'],
  experience: 7
}
console.log(matchIn(applicant3))
// [
//   { companyName: 'PT ABC', matchedSkills: ['HTML', 'Javascript'] },
//   { companyName: 'PT HIJ', matchedSkills: ['Javascript', 'HTML'] },
//   { companyName: 'PT KLM', matchedSkills: ['Javascript', 'HTML'] }
// ]

// var applicant4 = {
//   name: 'Delta',
//   skills: ['Python', 'PHP', 'C++', 'Javascript'],
//   experience: 3
// }
// console.log(matchIn(applicant4))
// [
//   { companyName: 'PT HIJ', matchedSkills: ['Python', 'Javascript'] }
// ]