/**
CSV to Object
==============
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }
*/

// function csvToObject (keys, values) {
//   var keysArr = keys.split(',');
//   var valuesArr = values.split(',');
//   var obj = {};
//   if (keys.length === 0 && values.length === 0) {
//     return obj;
//   }
//   else {
//     for (var i=0; i<keysArr.length; i++) {
//       obj[keysArr[i]] = valuesArr[i];
//     }
//     return obj;
//   }

// }

// console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// // { name: 'Dimitri', phoneNumber: '+666123654' }

// console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// // { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

// console.log(csvToObject('', ''));
// // { }

function csvToObject (keys, values) {
    let result = []
    let str = ''
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] == ',') {
            result.push(str)
            str = ''
        }
        else {
            str += keys[i]
        }
        if (i === keys.length-1) {
            result.push(str)
        }
    }
    
    
    let result1 = []
    let str1 = ''
    for (let i = 0; i < values.length; i++) {
        if (values[i] == ',') {
            result1.push(str1)
            str1 = ''
        }
        else {
            str1 += values[i]
        }
        if (i === values.length-1) {
            result1.push(str1)
        }
    }
    // return result1
    
    let obj = {}
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result1[i].length; j++) {
            obj[result[i]] = result1[i]
        }
    }
    return obj

}

console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject('', ''));
// { }

// 6 minutes 23 sec