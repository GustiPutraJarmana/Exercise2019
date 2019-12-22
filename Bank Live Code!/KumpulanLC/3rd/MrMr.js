/**
=========================
Array Mastery: Add Titles
=========================

[INSTRUKSI]

Function addTitle akan menerima satu parameter berupa array data orang dan akan menambahkan
title (Mr. / Ms. / Mrs.) kepada setiap orang yang ada di dalam array tersebut.

Akan diberikan 3 elemen di setiap array:
1. Name
2. Gender ('male'/'female')
3. Married (true/false)

Jika gender = 'male', maka tambahkan 'Mr.' sebelum name
Jika gender = 'female' dan married = true, maka tambahkan 'Mrs.' sebelum name
Jika gender = 'female' dan married = false, maka tambahkan 'Ms.' sebelum name

Function akan mengembalikan string berupa nama-nama yang sudah ditambahkan dengan title
ex: Mr. *****, Mrs. *****, Ms. *****, Mr. *****


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function addTitle(people) {
  let result = [];
  let mr = "";
  let ms = "";
  let mrs = "";
  if (people.length === 0) return "No Data";
  for (let i = 0; i < people.length; i++) {
    if (people[i][1] === "male") {
      mr += `Mr. ${people[i][0]}`;
      result.push(mr);
    } else if (people[i][1] === "female" && people[i][2] === true) {
      mrs += `Mrs. ${people[i][0]}`;
      result.push(mrs);
    } else if (people[i][1] === "female" && people[i][2] === false) {
      ms += `Ms. ${people[i][0]}`;
      result.push(ms);
    }
  }
  return result.join(", ");
}

console.log(
  addTitle([
    ["Sergei", "male", true],
    ["Alyona", "female", false]
  ])
); // Mr. Sergei, Ms. Alyona

console.log(
  addTitle([
    ["Dimitri", "male", false],
    ["Anastasia", "female", false],
    ["Vladlena", "female", true]
  ])
); // Mr. Dimitri, Ms. Anastasia, Mrs. Vladlena

console.log(addTitle([])); // No data
