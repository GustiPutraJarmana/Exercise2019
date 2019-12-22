/*
  ////////
  LionWars
  ////////

  Function LionWars adalah suatu function yang akan menerima sebuah parameter string
  dan mengembalikkan bentukkan berdasarkan beberapa release.

  [EXAMPLE]
  INPUT: 'Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'

  RELEASE 0 (20 point)
  OUTPUT: [{ name: Raza }, { name: Sylvana }, { name: Anduin }]
  RELEASE 1 (20 point)
  OUTPUT: [{ name: Raza, power: 1000 }, { name: Sylvana, power: 800 }, { name: Anduin, power: 2000 }]
  RELEASE 2 (20 point)
  OUTPUT: [{ name: Raza, power: 1000, healthPoint: 2000 }, { name: Sylvana, power: 800, healthPoint: 500 }, { name: Anduin, power: 2000, healthPoint: 4000 }]
  RELEASE 3 (20 point)
  OUTPUT: [
    { name: Raza, power: 1000, healthPoint: 2000, ability: Bash },
    { name: Sylvana, power: 800, healthPoint: 500, ability: Heal },
    { name: Anduin, power: 2000, healthPoint: 4000, ability: Paladin }]
  RELEASE 4 (20 point)
  The strongest power is Anduin and the lowest healthPoint is Sylvana

  [RULES]
  1. Hanya boleh menggunakan built in function .push(), .unshift()
*/

function LionWarsRelease0(info) {
    // your code here 
}

console.log(LionWarsRelease0('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease1(info) {
    // your code here 

}

console.log(LionWarsRelease1('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease2(info) {
    // your code here 

}

console.log(LionWarsRelease2('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease3(info) {
    // your code here 

}

console.log(LionWarsRelease3('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease4(info) {
    // your code here 
    
}

console.log(LionWarsRelease4('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));