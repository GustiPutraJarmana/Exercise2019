/*
=====================
PAIR LETTER SWAPPER
=====================

[INSTRUCTIONS]
Terdapat fungsi pairLetterSwapper yang menerima 1 paramater berupa string, fungsi ini berguna untuk mencari pasangan kata yang urut
kata urut yang dimaksud adalah kata berikutnya sesuai dengan huruf abjad: 'abc...xyz'

pada parameter yang diberikan dan mengganti kata yang urut dengan kata urut setelahnya

[EXAMPLES]
input: 'abcd'
keterangan : 
- pada parameter 'abcd' terdapat pasangan urut ab, bc , dan cd (karena setelah a -> b, setelah b -> c, dst)
- ab akan berubah menjadi bc
- bc akan berubah menjadi cd
- cd akan berubah menjadi de
output: 'bccdde' 

input: 'dede'
keterangan : 
- pada parameter 'dede' terdapat pasangan urut de, dan de 
- kenapa ed tidak termasuk? karena setelah e seharusnya f, bukan d
- de akan berubah menjadi ef
- de akan berubah menjadi ef
output: 'efef'

[RULES]
-dilarang menggunakan regex, dan charcodeat
-dilarang menggunakan split, slice, splice
-dilarang menggunakan fungsi ES 6
*/
function pairLetterSwapper(str) {
  // your code here
  
}

console.log(pairLetterSwapper('abcd'))
//bccdde
console.log(pairLetterSwapper('dede'))
//efef
console.log(pairLetterSwapper('xaefgxy'))
//fgghyz