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

function csvToObject(keys, values) {
  if (!keys.length && !values.length) {
    return "{ }";
  }
  var output = {};
  keys = keys.split(",");
  values = values.split(",");
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < values.length; j++) {
      output[keys[i]] = values[i];
    }
  }

  return output;
}

console.log(csvToObject("name,phoneNumber", "Dimitri,+666123654"));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(
  csvToObject("firstName,lastName,nationality", "Sergei,Dragunov,Russia")
);
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject("", ""));
// { }
